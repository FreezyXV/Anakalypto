import type { PrismaClient } from "../../generated/prisma/client";
import {
  articleHash,
  visualPresence,
  assertCompletion,
  ILLUSTRATION_LABELS,
  lessonRef,
  type VisualStatus,
} from "./policy";

export async function illustrationSummary(db: PrismaClient) {
  const scope = { article: { status: "PUBLISHED" as const } };
  const statuses = Object.keys(ILLUSTRATION_LABELS) as VisualStatus[];
  const [published, claimed, untracked, withInlineSchema, withDrawing, withoutVisual, ...counts] =
    await db.$transaction(
      [
        db.article.count({ where: { status: "PUBLISHED" } }),
        db.articleIllustration.count({ where: { ...scope, claimedBy: { not: null } } }),
        db.article.count({ where: { status: "PUBLISHED", illustration: null } }),
        db.articleIllustration.count({ where: { ...scope, inlineSchemaCount: { gt: 0 } } }),
        db.articleIllustration.count({
          where: { ...scope, NOT: { visualRefs: { isEmpty: true } } },
        }),
        db.articleIllustration.count({
          where: { ...scope, inlineSchemaCount: 0, visualRefs: { isEmpty: true } },
        }),
        ...statuses.map((status) => db.articleIllustration.count({ where: { ...scope, status } })),
      ],
      { isolationLevel: "RepeatableRead" },
    );
  return {
    scope: "PUBLISHED_ONLY",
    target: 1000,
    published,
    untracked,
    claimed,
    visualPresence: { withInlineSchema, withDrawing, withoutVisual },
    counts: Object.fromEntries(
      statuses.map((status, i) => [
        status,
        { label: ILLUSTRATION_LABELS[status], count: counts[i]! },
      ]),
    ),
  };
}
export async function illustrationList(
  db: PrismaClient,
  status?: VisualStatus,
  limit = 50,
  after?: string,
) {
  const rows = await db.articleIllustration.findMany({
    where: {
      article: { status: "PUBLISHED" },
      ...(status ? { status } : {}),
      claimedBy: null,
      ...(after ? { lessonPath: { gt: after } } : {}),
    },
    orderBy: { lessonPath: "asc" },
    take: limit,
    select: {
      articleId: true,
      lessonPath: true,
      status: true,
      visualRefs: true,
      inlineSchemaCount: true,
      inlineStatus: true,
      note: true,
      version: true,
      article: { select: { title: true } },
    },
  });
  return rows.map(({ article, ...r }) => ({
    ...r,
    ...visualPresence(r),
    ref: lessonRef(r.lessonPath),
    title: article.title,
    label: ILLUSTRATION_LABELS[r.status],
  }));
}
async function publishedLesson(db: PrismaClient, lessonPath: string) {
  const row = await db.articleIllustration.findFirst({
    where: { lessonPath, article: { status: "PUBLISHED" } },
    include: { article: true },
  });
  if (!row) throw new Error("Leçon publiée introuvable dans la file.");
  return row;
}
function changed(count: number) {
  if (count !== 1)
    throw new Error("Réservation ou version modifiée par un autre agent ; relire la file.");
}
export async function claimIllustration(db: PrismaClient, path: string, owner: string) {
  if (!owner.trim()) throw new Error("Responsable requis.");
  const row = await publishedLesson(db, path);
  const result = await db.articleIllustration.updateMany({
    where: {
      articleId: row.articleId,
      version: row.version,
      claimedBy: null,
      status: { not: "READY" },
      article: { status: "PUBLISHED" },
    },
    data: {
      claimedBy: owner.trim(),
      claimedAt: new Date(),
      claimContentHash: articleHash(row.article, path),
      version: { increment: 1 },
    },
  });
  changed(result.count);
  return {
    path,
    ref: lessonRef(path),
    owner: owner.trim(),
    status: row.status,
    visualRefs: row.visualRefs,
    ...visualPresence(row),
    inlineStatus: row.inlineStatus,
    instruction: row.visualRefs.length
      ? "Vérifier/corriger le visuel existant, ne pas le recréer sans défaut confirmé."
      : row.inlineSchemaCount > 0
        ? "Un schéma explicatif existe déjà dans le texte. Le contrôler avant tout ajout ; ne créer qu’un dessin complémentaire utile."
        : "Créer un visuel spécifique pour cette leçon.",
  };
}
export async function releaseIllustration(db: PrismaClient, path: string, owner: string) {
  const result = await db.articleIllustration.updateMany({
    where: { lessonPath: path, claimedBy: owner, article: { status: "PUBLISHED" } },
    data: { claimedBy: null, claimedAt: null, claimContentHash: null, version: { increment: 1 } },
  });
  changed(result.count);
}
export async function completeIllustration(
  db: PrismaClient,
  path: string,
  owner: string,
  review: { visualRefs: string[]; evidence: string; fingerprint: string },
) {
  const row = await publishedLesson(db, path),
    currentHash = articleHash(row.article, path);
  assertCompletion({
    ...review,
    owner,
    claimedBy: row.claimedBy,
    claimContentHash: row.claimContentHash,
    currentHash,
  });
  const result = await db.articleIllustration.updateMany({
    where: {
      articleId: row.articleId,
      version: row.version,
      claimedBy: owner,
      article: { status: "PUBLISHED" },
    },
    data: {
      status: "READY",
      visualRefs: review.visualRefs,
      evidence: review.evidence,
      reviewFingerprint: review.fingerprint,
      reviewedContentHash: currentHash,
      reviewedAt: new Date().toISOString(),
      note: "Recette documentée.",
      claimedBy: null,
      claimedAt: null,
      claimContentHash: null,
      version: { increment: 1 },
    },
  });
  changed(result.count);
}
