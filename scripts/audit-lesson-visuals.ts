/** File-only inventory: no Prisma, .env, database or network. */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, readdir, writeFile, access, open, unlink } from "node:fs/promises";
import path from "node:path";
import { loadContentBlocks, validateCorpus } from "../src/lib/content/index";
import { getDiscoveryLessons } from "../src/lib/discovery/load";
import {
  LESSON_DIAGRAMS,
  getLessonDiagram,
  lessonPosterFrame,
} from "../src/lib/lesson-visuals/registry";
import { getIllustrations } from "../src/lib/illustrations";
import { articleHash } from "../src/lib/illustration-workflow/policy";
import { visualSourceDigest } from "../src/lib/illustration-workflow/assets";
import {
  stableRef,
  classifyVisual,
  assertClaim,
  csv,
  type Review,
  type Reservation,
} from "./visual-inventory-lib";
const out = "docs/collaboration";
const reviewFile = `${out}/VISUAL_REVIEW_STATE.json`,
  queueFile = `${out}/VISUAL_WORK_QUEUE.json`;
const args = process.argv.slice(2),
  today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Paris" });
const hash = (v: string) => createHash("sha256").update(v).digest("hex");
async function exists(p: string) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}
async function readJson<T>(p: string, fallback: T): Promise<T> {
  return (await exists(p)) ? JSON.parse(await readFile(p, "utf8")) : fallback;
}
async function save(p: string, data: unknown) {
  await writeFile(p, JSON.stringify(data, null, 2) + "\n");
}
const deploymentManifest = await readJson<{ generatedFrom?: string }>(
  "src/lib/illustration-workflow/baseline.json",
  {},
);
if (deploymentManifest.generatedFrom === "backend" && !args.includes("--offline-reconcile"))
  throw new Error(
    "Le backend est la file active. Utiliser npm run illustrations:work -- export ; --offline-reconcile réserve cet ancien audit à une réconciliation exceptionnelle.",
  );
const corpus = validateCorpus(await loadContentBlocks("content"));
if (corpus.issues.length) throw new Error(`Corpus invalide : ${corpus.issues.length} problèmes`);
const published = corpus.articles.filter((a) => a.status === "published");
const discovery = new Map((await getDiscoveryLessons()).map((d) => [d.expandedPath, d]));
const authored = LESSON_DIAGRAMS.flatMap((s) => s.paths),
  allPaths = new Set(published.map((a) => `/${a.categoryPath}/${a.slug}`));
if (new Set(authored).size !== authored.length) throw new Error("Association de dessin en double");
for (const p of authored)
  if (!allPaths.has(p)) throw new Error(`Schéma associé à un article non publié : ${p}`);
const componentDir = "src/components/lesson-visuals";
const components = await Promise.all(
  (await readdir(componentDir))
    .filter((f) => f.endsWith("Drawings.tsx"))
    .map(async (file) => ({
      file: `${componentDir}/${file}`,
      code: await readFile(`${componentDir}/${file}`, "utf8"),
    })),
);
const sourceCache = new Map<string, string>();
async function dependencies(file: string, seen = new Set<string>()): Promise<string> {
  // Dispatch metadata is fingerprinted per lesson below. Adding an unrelated kind
  // must not invalidate the entire catalogue through type imports or the canvas.
  if (file.endsWith("/registry.ts") || file.endsWith("/LessonDiagramCanvas.tsx")) return "";
  if (seen.has(file)) return "";
  seen.add(file);
  let code = sourceCache.get(file);
  if (code === undefined) {
    code = await readFile(file, "utf8");
    sourceCache.set(file, code);
  }
  const children = [];
  for (const m of code
    .replace(/import\s+type\b[^;]*;/gs, "")
    .matchAll(/(?:from\s+|import\s*)["']([^"']+)["']/g)) {
    const relative = m[1]!;
    if (!relative.startsWith(".") && !relative.startsWith("@/")) continue;
    const base = relative.startsWith("@/")
      ? "src/" + relative.slice(2)
      : path.join(path.dirname(file), relative);
    const candidates = [base, base + ".tsx", base + ".ts", base + "/index.ts"];
    for (const p of candidates)
      if (await exists(p)) {
        children.push(await dependencies(p, seen));
        break;
      }
  }
  return `${file}\n${code}\n${children.join("\n")}`;
}
const common =
  (await dependencies(`${componentDir}/LessonVisual.tsx`)) +
  (await dependencies(`${componentDir}/DrawingPrimitives.tsx`)) +
  (await dependencies("src/components/discovery/DiagramSurface.tsx"));
const discoverySource =
  (await dependencies("src/components/discovery/DiscoveryVisual.tsx")) +
  (await dependencies("src/components/discovery/VisualWorkshop.tsx"));
const raw = await loadContentBlocks("content");
const locations = new Map(
  raw
    .filter((b) => b.data.type === "article")
    .map((b) => [`/${b.data.categoryPath}/${b.data.slug}`, b]),
);
const items = [];
for (const article of published) {
  const p = `/${article.categoryPath}/${article.slug}`,
    d = discovery.get(p),
    s = getLessonDiagram(p),
    images = getIllustrations(article.slug),
    block = locations.get(p)!;
  const owners = s
    ? components.filter(
        (c) => c.code.includes(`kind === "${s.id}"`) || c.code.includes(`kind==='${s.id}'`),
      )
    : [];
  if (s && owners.length !== 1)
    throw new Error(`Rendu ambigu ou absent pour ${s.id} : ${owners.length}`);
  const renderSource = s ? await dependencies(owners[0]!.file) : "";
  const imported = [];
  for (const image of images) {
    const f = "public" + image.src;
    if (!(await exists(f))) throw new Error(`Image déclarée absente : ${f}`);
    imported.push(hash(await readFile(f, "base64")));
  }
  const visualRefs = [
    ...(d ? [`atelier:${d.slug}`] : []),
    ...(s ? [`schema:${s.id}`] : []),
    ...images.map((i) => i.src),
  ];
  const fingerprint = hash(
    JSON.stringify({
      article: { data: block.data, body: block.body },
      posterFrame: s ? lessonPosterFrame(s) : null,
      visual: s ?? null,
      discovery: d ?? null,
      render: hash(common + renderSource + (d ? discoverySource : "")),
      imported,
    }),
  );
  items.push({
    article,
    p,
    d,
    s,
    images,
    block,
    visualRefs,
    fingerprint,
    present: visualRefs.length > 0,
    renderFile: owners[0]?.file ?? "",
  });
}
await mkdir(out, { recursive: true });
const reviews = await readJson<Record<string, Review>>(reviewFile, {});
let queue = await readJson<Record<string, Reservation>>(queueFile, {});
if (args.includes("--bootstrap-reviewed")) {
  if (await exists(reviewFile))
    throw new Error("Initialisation déjà effectuée ; ne pas remplacer les revues");
  const proofDirs = (await readdir("docs/qa")).filter(
    (d) => d.startsWith("lesson-visuals-") && d !== "lesson-visuals-radio",
  );
  for (const i of items) {
    let evidence = "";
    if (i.d) evidence = "docs/collaboration/VISUAL_QUALITY_REVIEW_2026-11-07.md";
    else if (i.s) {
      for (const dir of proofDirs) {
        const files = await readdir("docs/qa/" + dir);
        if (
          files.some((f) => f === `${i.s!.id}-320.jpg`) &&
          files.some((f) => f === `${i.s!.id}-1280.jpg` || f === `${i.s!.id}-desktop.jpg`)
        ) {
          evidence = `docs/qa/${dir}/README.md`;
          break;
        }
      }
    }
    if (evidence && (await exists(evidence)))
      reviews[i.p] = {
        quality: "validee",
        fingerprint: i.fingerprint,
        evidence,
        reviewedAt: i.d ? "2026-11-07" : "2026-11-09",
        reason:
          "Reprise des recettes documentées antérieures ; pas une nouvelle inspection visuelle aujourd’hui.",
      };
  }
  await save(reviewFile, reviews);
}
for (const p of Object.keys(reviews))
  if (!allPaths.has(p)) throw new Error(`Revue orpheline : ${p}`);
for (const p of Object.keys(queue))
  if (!allPaths.has(p)) throw new Error(`Réservation orpheline : ${p}`);
const claim = args.indexOf("--claim");
if (claim >= 0) {
  const p = args[claim + 1],
    owner = args[args.indexOf("--owner") + 1],
    action = args[args.indexOf("--action") + 1] as Reservation["action"];
  if (
    !p ||
    !args.includes("--owner") ||
    !args.includes("--action") ||
    !["create", "review", "improve"].includes(action)
  )
    throw new Error("Usage : --claim /chemin --owner Nom --action create|review|improve");
  const i = items.find((i) => i.p === p);
  if (!i) throw new Error("Article publié inconnu");
  const lock = await open(`${out}/.visual-queue.lock`, "wx");
  try {
    queue = await readJson(queueFile, {});
    assertClaim(
      p,
      i.present,
      classifyVisual(i.present, i.fingerprint, reviews[p]),
      queue,
      owner!,
      action,
    );
    queue[p] = {
      owner: owner!,
      action,
      startedAt: today,
      note: "Réservé avant travail ; pas une validation de qualité.",
    };
    await save(queueFile, queue);
  } finally {
    await lock.close();
    await unlink(`${out}/.visual-queue.lock`);
  }
}
const approve = args.indexOf("--approve");
if (approve >= 0) {
  const p = args[approve + 1],
    evidence = args[args.indexOf("--evidence") + 1];
  const i = items.find((i) => i.p === p);
  if (
    !i?.present ||
    !args.includes("--evidence") ||
    !evidence?.startsWith("docs/qa/") ||
    !(await exists(evidence)) ||
    !queue[p!] ||
    !args.includes("--owner") ||
    queue[p!]!.owner !== args[args.indexOf("--owner") + 1]
  )
    throw new Error("Validation exige un visuel et un rapport de recette existant dans docs/qa/");
  reviews[p!] = {
    quality: "validee",
    fingerprint: i.fingerprint,
    evidence,
    reviewedAt: today,
    reason: "Recette visuelle et fonctionnelle documentée.",
  };
  delete queue[p!];
  await save(reviewFile, reviews);
  await save(queueFile, queue);
}
const rows = items.map((i) => {
  const review = reviews[i.p],
    quality = classifyVisual(i.present, i.fingerprint, review),
    reserved = queue[i.p];
  return {
    ref: stableRef(i.p),
    path: i.p,
    title: i.article.title,
    domain: i.article.categoryPath.split("/")[0]!,
    source: `content/${i.block.location.file}:${i.block.location.line}`,
    has_illustration: i.present ? "oui" : "non",
    quality,
    workflow: reserved
      ? "en_cours"
      : quality === "validee"
        ? "termine"
        : quality === "sans_illustration"
          ? "a_creer"
          : quality === "a_ameliorer"
            ? "a_corriger"
            : "a_revoir",
    visual_refs: i.visualRefs.join(" | "),
    render_file: i.renderFile,
    fingerprint: i.fingerprint,
    owner: reserved?.owner ?? "",
    action: reserved?.action ?? "",
    reviewed_at: review?.reviewedAt ?? "",
    evidence: review?.evidence ?? "",
    reason:
      reserved?.note ??
      (quality === "a_verifier" && review
        ? "Article ou rendu modifié depuis la revue ; contrôler sans recréer automatiquement."
        : quality === "a_verifier"
          ? "Visuel présent, recette complète non établie."
          : quality === "sans_illustration"
            ? "Couverture générique uniquement ; aucun schéma spécifique."
            : (review?.reason ?? "")),
  };
});
if (new Set(rows.map((r) => r.ref)).size !== rows.length)
  throw new Error("Collision de référence stable");
const columns = Object.keys(rows[0]!);
// One-time database bootstrap. Runtime queues never need to rescan the corpus.
// Refresh this export only for an intentional audit; it cannot overwrite active work.
await save("src/lib/illustration-workflow/baseline.json", {
  sourceDigest: await visualSourceDigest(),
  lessons: items
    .filter((i) => i.present)
    .map((i) => ({
      path: i.p,
      visualRefs: i.visualRefs,
      fingerprint: i.fingerprint,
      contentHash: articleHash(i.article, i.p),
      quality: classifyVisual(i.present, i.fingerprint, reviews[i.p]),
      evidence: reviews[i.p]?.evidence ?? null,
      reviewedAt: reviews[i.p]?.reviewedAt ?? null,
    })),
});
await writeFile(`${out}/VISUAL_INVENTORY.csv`, csv(rows, columns));
await writeFile(
  `${out}/VISUAL_BACKLOG.csv`,
  csv(
    rows.filter((r) => r.quality !== "validee"),
    columns,
  ),
);
// Retain the existing six-column export for tools that already use it.
await writeFile(
  `${out}/LESSON_VISUAL_COVERAGE.csv`,
  csv(
    items.map((i) => ({
      path: i.p,
      title: i.article.title,
      status: i.d
        ? i.s
          ? "conserve_et_complete"
          : "conserve"
        : i.s
          ? "nouveau_schema"
          : i.images.length
            ? "illustration_a_revoir"
            : "a_concevoir",
      existing: i.d?.slug ?? "",
      diagram: i.s?.id ?? "",
      note: rows.find((r) => r.path === i.p)!.quality,
    })),
    ["path", "title", "status", "existing", "diagram", "note"],
  ),
);
const counts = {
  published: rows.length,
  present: rows.filter((r) => r.has_illustration === "oui").length,
  validated: rows.filter((r) => r.quality === "validee").length,
  toImprove: rows.filter((r) => r.quality === "a_ameliorer").length,
  toReview: rows.filter((r) => r.quality === "a_verifier").length,
  missing: rows.filter((r) => r.quality === "sans_illustration").length,
  inProgress: Object.keys(queue).length,
};
if (counts.validated + counts.toImprove + counts.toReview + counts.missing !== counts.published)
  throw new Error("Total incohérent");
const branch = execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim(),
  commit = execFileSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
const domainRows = [...new Set(rows.map((r) => r.domain))].sort().map((d) => {
  const rs = rows.filter((r) => r.domain === d);
  return `| ${d} | ${rs.length} | ${rs.filter((r) => r.quality === "validee").length} | ${rs.filter((r) => r.quality === "a_ameliorer").length} | ${rs.filter((r) => r.quality === "a_verifier").length} | ${rs.filter((r) => r.quality === "sans_illustration").length} |`;
});
await writeFile(
  `${out}/VISUAL_INVENTORY_SUMMARY.md`,
  `# Inventaire des illustrations\n\nGénéré le ${today}, fichiers locaux de la branche \`${branch}\`, base Git \`${commit}\` avec modifications de travail. La base de production et le déploiement n’ont pas été interrogés.\n\n| Périmètre | Nombre |\n| --- | ---: |\n| Articles publiés dans ce corpus | ${counts.published} |\n| Publiés avec un visuel spécifique présent | ${counts.present} |\n| Dont validés et inchangés depuis la revue enregistrée | ${counts.validated} |\n| Dont amélioration explicitement identifiée | ${counts.toImprove} |\n| Dont à vérifier, sans validation supposée | ${counts.toReview} |\n| Publiés sans illustration spécifique | ${counts.missing} |\n| Réservations en cours (sous-ensemble, non additionnable) | ${counts.inProgress} |\n\nObjectif de lancement : environ **1 000 leçons**, rédaction confiée à Claude. Les brouillons sont hors périmètre et ne sont ni illustrés, ni publiés, ni supprimés par ce suivi.\n\nUne leçon = un chemin publié unique. Les couvertures génériques ne comptent pas comme une illustration explicative. Un schéma réutilisé volontairement sur plusieurs leçons est identifié par une même référence de visuel ; chaque leçon reste comptée une seule fois. Ces statuts correspondent aux revues enregistrées et à leur empreinte courante ; ils ne garantissent pas qu’aucun défaut supplémentaire ne sera découvert.\n\n| Domaine | Publiés | Validés | À améliorer | À vérifier | Sans visuel |\n| --- | ---: | ---: | ---: | ---: | ---: |\n${domainRows.join("\n")}\n\n## File backend — point d’entrée quotidien\n\nLe backend conserve les statuts, réservations, références et preuves dans ArticleIllustration. Consulter « /api/illustrations » ou « npm run illustrations:work -- list ». Aucun audit du corpus n’est nécessaire pour lire cette file ou terminer une illustration. Voir [le guide backend](ILLUSTRATION_BACKEND.md). Cet export de fichiers est une photographie locale, pas une seconde file à maintenir en parallèle.\n\n## Références et règles de travail\n\n- [Inventaire de toutes les leçons publiées](VISUAL_INVENTORY.csv) : référence stable, chemin, titre, fichier et ligne source, visuels associés, qualité, état, responsable et preuves.\n- [Travail restant lors de cette photographie](VISUAL_BACKLOG.csv) : consulter la file backend pour la disponibilité actuelle.\n- [Réservations du mode fichier historique](VISUAL_WORK_QUEUE.json) : ne pas les utiliser en parallèle des réservations PostgreSQL.\n- [Revues conservées](VISUAL_REVIEW_STATE.json) : une empreinte de contenu et de rendu détecte les changements ; une modification fait revenir le sujet à « à vérifier », sans déclencher une recréation.\n\nRéconciliation exceptionnelle des fichiers : \`node --import tsx scripts/audit-lesson-visuals.ts\`. Pour le travail quotidien : \`npm run illustrations:work -- list\`, puis \`claim\` et \`complete\` selon [le guide backend](ILLUSTRATION_BACKEND.md). Aucun audit global requis. La validation est une décision humaine de revue, pas une déduction automatique de présence de fichier.\n`,
);
console.log(JSON.stringify(counts, null, 2));
