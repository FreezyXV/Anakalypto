import type { PrismaClient } from "../../generated/prisma/client";
import { articleHash } from "./policy";
import baseline from "./baseline.json";
import { visualSourceDigest } from "./assets";

/** Initial recorded reviews only. Never overwrites a reservation or subsequent review. */
export async function bootstrapIllustrations(db: PrismaClient) {
  let initialized = 0,
    stale = 0,
    skipped = 0;
  const sameRenderer = (await visualSourceDigest()) === baseline.sourceDigest;
  for (const entry of baseline.lessons) {
    const row = await db.articleIllustration.findFirst({
      where: {
        lessonPath: entry.path,
        version: 0,
        claimedBy: null,
        article: { status: "PUBLISHED" },
      },
      include: { article: true },
    });
    if (!row) {
      skipped++;
      continue;
    }
    const matches = articleHash(row.article, entry.path) === entry.contentHash;
    const ready =
      sameRenderer &&
      matches &&
      entry.quality === "validee" &&
      !!entry.evidence &&
      !!entry.reviewedAt;
    const result = await db.articleIllustration.updateMany({
      where: {
        articleId: row.articleId,
        version: 0,
        claimedBy: null,
        article: { status: "PUBLISHED" },
      },
      data: {
        visualRefs: entry.visualRefs,
        reviewFingerprint: entry.fingerprint,
        status: ready
          ? "READY"
          : sameRenderer && matches && entry.quality === "a_ameliorer"
            ? "NEEDS_IMPROVEMENT"
            : "REVIEW_REQUIRED",
        evidence: entry.evidence,
        reviewedAt: entry.reviewedAt,
        reviewedContentHash: ready ? entry.contentHash : null,
        note: ready
          ? "Revue documentée reprise à l'initialisation."
          : "Revue locale non applicable à cette version : vérifier le visuel existant.",
        version: { increment: 1 },
      },
    });
    initialized += result.count;
    if (!ready) stale += result.count;
  }
  let inlineInitialized = 0;
  for (const entry of (
    baseline as { inlineReviews?: { path: string; contentHash: string; evidence: string }[] }
  ).inlineReviews ?? []) {
    const r = await db.articleIllustration.findFirst({
      where: {
        lessonPath: entry.path,
        inlineVersion: 0,
        claimedBy: null,
        article: { status: "PUBLISHED" },
      },
      include: { article: true },
    });
    if (!r || !r.inlineSchemaCount) continue;
    const ready = sameRenderer && articleHash(r.article, entry.path) === entry.contentHash;
    const result = await db.articleIllustration.updateMany({
      where: { articleId: r.articleId, inlineVersion: 0, claimedBy: null },
      data: {
        inlineStatus: ready ? "READY" : "REVIEW_REQUIRED",
        inlineEvidence: ready ? entry.evidence : null,
        inlineReviewedContentHash: ready ? entry.contentHash : null,
        inlineVersion: { increment: 1 },
      },
    });
    inlineInitialized += result.count;
  }
  return { initialized, stale, skipped, inlineInitialized, rendererMatches: sameRenderer };
}
