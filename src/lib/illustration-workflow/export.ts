import { readFile, rename, writeFile } from "node:fs/promises";
import type { PrismaClient } from "../../generated/prisma/client";
import { getDiscoveryLessons } from "../discovery/load";
import { getIllustrations } from "../illustrations";
import { getLessonDiagram } from "../lesson-visuals/registry";
import { visualSourceDigest } from "./assets";
import { articleHash, lessonRef, visualPresence } from "./policy";

/** Archive recorded backend decisions for a fresh deployment. This performs no audit or DB write. */
export async function exportIllustrationBaseline(db: PrismaClient) {
  const [rows, published] = await db.$transaction(
    [
      db.articleIllustration.findMany({
        where: { article: { status: "PUBLISHED" } },
        include: { article: true },
        orderBy: { lessonPath: "asc" },
      }),
      db.article.count({ where: { status: "PUBLISHED" } }),
    ],
    { isolationLevel: "RepeatableRead" },
  );
  if (rows.length !== published)
    throw new Error("Leçons publiées sans suivi : initialiser la file avant l’export.");
  const discovery = new Map((await getDiscoveryLessons()).map((d) => [d.expandedPath, d]));
  const lessons = [];
  for (const r of rows.filter((r) => r.visualRefs.length)) {
    const spec = getLessonDiagram(r.lessonPath),
      d = discovery.get(r.lessonPath);
    const refs = [
      ...(spec ? [`schema:${spec.id}`] : []),
      ...(d ? [`atelier:${d.slug}`] : []),
      ...getIllustrations(r.article.slug).map((i) => i.src),
    ];
    const sameRefs = JSON.stringify([...refs].sort()) === JSON.stringify([...r.visualRefs].sort());
    const currentHash = articleHash(r.article, r.lessonPath);
    if (r.status === "READY") {
      if (
        !sameRefs ||
        currentHash !== r.reviewedContentHash ||
        !r.evidence ||
        !r.reviewFingerprint ||
        !r.reviewedAt
      )
        throw new Error(`Validation incompatible avec les fichiers ou le texte : ${r.lessonPath}`);
      if (
        !r.evidence.startsWith("docs/") ||
        r.evidence.split("/").includes("..") ||
        !(await readFile(r.evidence, "utf8")).trim()
      )
        throw new Error(`Preuve de recette absente : ${r.lessonPath}`);
    }
    lessons.push({
      path: r.lessonPath,
      visualRefs: r.visualRefs,
      fingerprint: r.reviewFingerprint ?? "",
      contentHash: r.reviewedContentHash ?? currentHash,
      quality: r.claimedBy
        ? "a_verifier"
        : r.status === "READY"
          ? "validee"
          : r.status === "NEEDS_IMPROVEMENT"
            ? "a_ameliorer"
            : "a_verifier",
      evidence: r.evidence,
      reviewedAt: r.reviewedAt,
    });
  }
  const inlineReviews = [];
  for (const r of rows.filter((r) => r.inlineStatus === "READY")) {
    if (r.inlineReviewedContentHash !== articleHash(r.article, r.lessonPath) || !r.inlineEvidence)
      throw Error("Revue du schéma périmée : " + r.lessonPath);
    if (
      !/^docs\/qa\/[a-zA-Z0-9_./-]+\.md$/.test(r.inlineEvidence) ||
      r.inlineEvidence.split("/").includes("..") ||
      !(await readFile(r.inlineEvidence, "utf8")).trim()
    )
      throw Error("Preuve de revue du schéma absente : " + r.lessonPath);
    inlineReviews.push({
      path: r.lessonPath,
      contentHash: r.inlineReviewedContentHash,
      evidence: r.inlineEvidence,
    });
  }
  const baseline = {
    generatedFrom: "backend",
    sourceDigest: await visualSourceDigest(),
    lessons,
    inlineReviews,
  };
  const manifestPath = "src/lib/illustration-workflow/baseline.json";
  // Only the deployment manifest is replaced atomically; active DB reservations remain untouched.
  await writeFile(manifestPath + ".tmp", JSON.stringify(baseline, null, 2) + "\n");
  await rename(manifestPath + ".tmp", manifestPath);
  const records = rows.map((r) => ({
    ref: lessonRef(r.lessonPath),
    path: r.lessonPath,
    title: r.article.title,
    status: r.status,
    visualRefs: r.visualRefs,
    ...visualPresence(r),
    inlineStatus: r.inlineStatus,
    inlineEvidence: r.inlineEvidence,
    owner: r.claimedBy ?? "",
    evidence: r.evidence ?? "",
    reviewedAt: r.reviewedAt ?? "",
  }));
  const counts = {
    published,
    withInlineSchema: rows.filter((r) => r.inlineSchemaCount > 0).length,
    inlineReady: rows.filter((r) => r.inlineStatus === "READY").length,
    inlineSchemas: rows.reduce((n, r) => n + r.inlineSchemaCount, 0),
    withDrawing: rows.filter((r) => r.visualRefs.length > 0).length,
    withoutVisual: rows.filter((r) => !r.visualRefs.length && !r.inlineSchemaCount).length,
    ready: rows.filter((r) => r.status === "READY").length,
    waiting: rows.filter((r) => r.status === "WAITING_FOR_ILLUSTRATION").length,
    review: rows.filter((r) => r.status === "REVIEW_REQUIRED").length,
    improve: rows.filter((r) => r.status === "NEEDS_IMPROVEMENT").length,
    claimed: rows.filter((r) => r.claimedBy).length,
  };
  await writeFile(
    "docs/collaboration/ILLUSTRATION_STATUS.json",
    JSON.stringify(
      { generatedAt: new Date().toISOString(), scope: "PUBLISHED_ONLY", counts, lessons: records },
      null,
      2,
    ) + "\n",
  );
  const quote = (v: string) => `"${v.replaceAll('"', '""')}"`;
  const header = [
    "ref",
    "path",
    "title",
    "status",
    "visual_refs",
    "owner",
    "evidence",
    "reviewed_at",
    "has_visual",
    "has_drawing",
    "inline_schema_count",
    "inline_status",
  ];
  await writeFile(
    "docs/collaboration/ILLUSTRATION_STATUS.csv",
    [
      header.join(","),
      ...records.map((r) =>
        [
          r.ref,
          r.path,
          r.title,
          r.status,
          r.visualRefs.join(" | "),
          r.owner,
          r.evidence,
          r.reviewedAt,
          String(r.hasVisual),
          String(r.hasDrawing),
          String(r.inlineSchemaCount),
          r.inlineStatus,
        ]
          .map(quote)
          .join(","),
      ),
    ].join("\n") + "\n",
  );
  const columns = [
    "ref",
    "path",
    "title",
    "domain",
    "source",
    "has_illustration",
    "has_drawing",
    "inline_schema_count",
    "inline_status",
    "quality",
    "workflow",
    "visual_refs",
    "render_file",
    "fingerprint",
    "owner",
    "action",
    "reviewed_at",
    "evidence",
    "reason",
  ];
  const inventory = rows.map((r) => {
    const quality =
      r.status === "READY"
        ? "validee"
        : r.status === "NEEDS_IMPROVEMENT"
          ? "a_ameliorer"
          : r.status === "REVIEW_REQUIRED"
            ? "a_verifier"
            : "sans_illustration";
    return {
      ref: lessonRef(r.lessonPath),
      path: r.lessonPath,
      title: r.article.title,
      domain: r.lessonPath.split("/")[1]!,
      source: `backend:Article/${r.articleId}`,
      has_illustration: visualPresence(r).hasVisual ? "oui" : "non",
      has_drawing: r.visualRefs.length ? "oui" : "non",
      inline_schema_count: String(r.inlineSchemaCount),
      inline_status: r.inlineStatus,
      quality,
      workflow: r.claimedBy
        ? "en_cours"
        : quality === "validee"
          ? "termine"
          : quality === "a_ameliorer"
            ? "a_corriger"
            : quality === "a_verifier"
              ? "a_revoir"
              : "a_creer",
      visual_refs: r.visualRefs.join(" | "),
      render_file: "",
      fingerprint: r.reviewFingerprint ?? "",
      owner: r.claimedBy ?? "",
      action: r.claimedBy ? (r.visualRefs.length ? "review" : "create") : "",
      reviewed_at: r.reviewedAt ?? "",
      evidence: r.evidence ?? "",
      reason: r.note ?? "Sans illustration spécifique enregistrée",
    };
  });
  const toCsv = (rs: typeof inventory) =>
    [
      columns.join(","),
      ...rs.map((r) => columns.map((c) => quote(r[c as keyof typeof r])).join(",")),
    ].join("\n") + "\n";
  await writeFile("docs/collaboration/VISUAL_INVENTORY.csv", toCsv(inventory));
  await writeFile(
    "docs/collaboration/VISUAL_BACKLOG.csv",
    toCsv(inventory.filter((r) => r.quality !== "validee")),
  );
  const domains = [...new Set(inventory.map((r) => r.domain))].sort().map((domain) => {
    const rs = inventory.filter((r) => r.domain === domain);
    return `| ${domain} | ${rs.length} | ${rs.filter((r) => r.quality === "validee").length} | ${rs.filter((r) => r.quality === "a_ameliorer").length} | ${rs.filter((r) => r.quality === "a_verifier").length} | ${rs.filter((r) => r.quality === "sans_illustration").length} |`;
  });
  const date = new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date());
  await writeFile(
    "docs/collaboration/VISUAL_INVENTORY_SUMMARY.md",
    `# Inventaire des illustrations\n\nPhotographie du backend local exportée le ${date}, sans audit du corpus. Aucun changement en production. Objectif : environ 1 000 leçons ; brouillons exclus.\n\n| État | Nombre |\n| --- | ---: |\n| Leçons publiées | ${counts.published} |\n| Leçons avec schéma éditorial | ${counts.withInlineSchema} |\n| Nombre de schémas éditoriaux | ${counts.inlineSchemas} |\n| Leçons avec dessin ou atelier | ${counts.withDrawing} |\n| Sans aucun visuel | ${counts.withoutVisual} |\n| Illustration incluse et vérifiée | ${counts.ready} |\n| En attente de dessin spécifique | ${counts.waiting} |\n| À vérifier | ${counts.review} |\n| À améliorer, défaut enregistré | ${counts.improve} |\n| Réservées, sous-ensemble non additionnable | ${counts.claimed} |\n\n| Domaine | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |\n| --- | ---: | ---: | ---: | ---: | ---: |\n${domains.join("\n")}\n\n[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).\n\nLe backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.\n`,
  );
  return { ...counts, exportedIllustrations: lessons.length, manifest: manifestPath };
}
