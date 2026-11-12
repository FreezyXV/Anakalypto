/** Backend work queue for agents. No .env fallback, corpus audit, seed or publication. */
import { completeInlineReview } from "../src/lib/illustration-workflow/inline";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { visualSourceDigest } from "../src/lib/illustration-workflow/assets";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { bootstrapIllustrations } from "../src/lib/illustration-workflow/bootstrap";
import { exportIllustrationBaseline } from "../src/lib/illustration-workflow/export";
import {
  ILLUSTRATION_LABELS,
  lessonRef,
  visualPresence,
  type VisualStatus,
} from "../src/lib/illustration-workflow/policy";
import {
  claimIllustration,
  completeIllustration,
  illustrationList,
  illustrationSummary,
  releaseIllustration,
} from "../src/lib/illustration-workflow/service";
import { getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { getDiscoveryLessons } from "../src/lib/discovery/load";
import { getIllustrations } from "../src/lib/illustrations";

const args = process.argv.slice(2),
  command = args[0] ?? "summary";
function option(name: string, fallback = "") {
  const i = args.indexOf(`--${name}`);
  return i < 0 ? fallback : (args[i + 1] ?? "");
}
const commands = [
  "summary",
  "list",
  "show",
  "claim",
  "release",
  "complete",
  "complete-inline",
  "review",
  "review-inline",
  "bootstrap",
  "export",
];
if (!commands.includes(command)) throw new Error(`Commandes : ${commands.join(", ")}`);
const connectionString = process.env.ILLUSTRATION_DATABASE_URL;
if (!connectionString)
  throw new Error("ILLUSTRATION_DATABASE_URL explicite requise ; aucun chargement de .env.local.");
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
const lessonPath = option("path"),
  owner = option("owner").trim();
async function assets() {
  const spec = getLessonDiagram(lessonPath),
    d = (await getDiscoveryLessons()).find((d) => d.expandedPath === lessonPath);
  const images = getIllustrations(lessonPath.split("/").at(-1)!);
  const refs = [
    ...(spec ? [`schema:${spec.id}`] : []),
    ...(d ? [`atelier:${d.slug}`] : []),
    ...images.map((i) => i.src),
  ];
  return { refs, spec, d, images };
}
try {
  let output: unknown;
  if (command === "summary") output = await illustrationSummary(db);
  else if (command === "export") output = await exportIllustrationBaseline(db);
  else if (command === "bootstrap") output = await bootstrapIllustrations(db);
  else if (command === "list") {
    const status = option("status", "WAITING_FOR_ILLUSTRATION"),
      limit = Number(option("limit", "50"));
    if (status !== "ALL" && !Object.hasOwn(ILLUSTRATION_LABELS, status))
      throw new Error("Statut inconnu.");
    if (!Number.isInteger(limit) || limit < 1 || limit > 1000)
      throw new Error("Limite : de 1 à 1000.");
    output = await illustrationList(
      db,
      status === "ALL" ? undefined : (status as VisualStatus),
      limit,
    );
  } else {
    if (!lessonPath.startsWith("/")) throw new Error("--path /chemin-complet requis.");
    if (command === "show") {
      const row = await db.articleIllustration.findFirst({
        where: { lessonPath, article: { status: "PUBLISHED" } },
        include: { article: { select: { title: true, summary: true, content: true } } },
      });
      if (!row) throw new Error("Leçon publiée inconnue.");
      output = {
        ...row,
        ...visualPresence(row),
        ref: lessonRef(lessonPath),
        label: ILLUSTRATION_LABELS[row.status],
      };
    } else if (command === "review" || command === "review-inline") {
      const note = option("note").trim();
      if (!note) throw new Error("--note requis : décrire la modification ou le défaut.");
      const row = await db.articleIllustration.findFirst({
        where: { lessonPath, claimedBy: null, article: { status: "PUBLISHED" } },
      });
      if (!row || (command === "review-inline" ? !row.inlineSchemaCount : !row.visualRefs.length))
        throw new Error("Visuel existant non réservé requis.");
      const r = await db.articleIllustration.updateMany({
        where: {
          articleId: row.articleId,
          version: row.version,
          inlineVersion: row.inlineVersion,
          claimedBy: null,
          article: { status: "PUBLISHED" },
        },
        data:
          command === "review-inline"
            ? {
                inlineStatus: args.includes("--defect") ? "NEEDS_IMPROVEMENT" : "REVIEW_REQUIRED",
                inlineEvidence: null,
                inlineReviewedContentHash: null,
                inlineVersion: { increment: 1 },
                note,
              }
            : {
                status: args.includes("--defect") ? "NEEDS_IMPROVEMENT" : "REVIEW_REQUIRED",
                note,
                version: { increment: 1 },
              },
      });
      if (r.count !== 1) throw new Error("Version modifiée par un autre agent.");
      output = { path: lessonPath, reopened: true };
    } else {
      if (!owner) throw new Error("--owner Codex (ou nom de l'agent) requis.");
      if (command === "claim") {
        const a = await assets();
        const row = await db.articleIllustration.findUnique({ where: { lessonPath } });
        if (a.refs.length && row && !row.visualRefs.length)
          throw new Error(
            "Un visuel existe dans le code : initialiser la file avec bootstrap, puis vérifier son association. Ne pas recréer.",
          );
        output = await claimIllustration(db, lessonPath, owner);
      } else if (command === "release") {
        await releaseIllustration(db, lessonPath, owner);
        output = { path: lessonPath, released: true };
      } else if (command === "complete-inline") {
        const evidence = option("evidence");
        if (
          !/^docs\/qa\/[a-zA-Z0-9_./-]+\.md$/.test(evidence) ||
          evidence.split("/").includes("..")
        )
          throw Error("Rapport Markdown dans docs/qa/ requis.");
        if (!(await readFile(evidence, "utf8")).trim()) throw Error("Preuve vide.");
        await completeInlineReview(db, lessonPath, owner, evidence);
        output = { path: lessonPath, inlineStatus: "READY", drawingUnchanged: true };
      } else if (command === "complete") {
        const a = await assets(),
          evidence = option("evidence");
        if (!a.refs.length)
          throw new Error("Aucun visuel spécifique associé à ce chemin dans le code.");
        if (
          !/^docs\/qa\/[a-zA-Z0-9_./-]+\.md$/.test(evidence) ||
          evidence.split("/").includes("..")
        )
          throw new Error("Rapport Markdown dans docs/qa/ requis.");
        if (!(await readFile(evidence, "utf8")).trim()) throw new Error("Rapport de recette vide.");
        const digest = createHash("sha256").update(
          JSON.stringify({ spec: a.spec, discovery: a.d, refs: a.refs }),
        );
        digest.update(await visualSourceDigest());
        await completeIllustration(db, lessonPath, owner, {
          visualRefs: a.refs,
          evidence,
          fingerprint: digest.digest("hex"),
        });
        output = { path: lessonPath, status: "READY", visualRefs: a.refs };
      }
    }
  }
  console.log(JSON.stringify(output, null, 2));
} finally {
  await db.$disconnect();
}
