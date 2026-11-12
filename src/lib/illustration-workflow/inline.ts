import type { PrismaClient } from "../../generated/prisma/client";
import { articleHash } from "./policy";
/** Review of the editorial schema only; never approves the independent bespoke drawing. */
export async function completeInlineReview(
  db: PrismaClient,
  path: string,
  owner: string,
  evidence: string,
) {
  const r = await db.articleIllustration.findFirst({
    where: { lessonPath: path, article: { status: "PUBLISHED" } },
    include: { article: true },
  });
  if (!r || r.claimedBy !== owner || !owner.trim())
    throw Error("Réserver la leçon avant de valider son schéma.");
  const hash = articleHash(r.article, path);
  if (r.claimContentHash !== hash) throw Error("Texte modifié depuis la réservation.");
  if (
    r.inlineSchemaCount < 1 ||
    !/^docs\/qa\/[a-zA-Z0-9_./-]+\.md$/.test(evidence) ||
    evidence.split("/").includes("..")
  )
    throw Error("Schéma existant et preuve de recette requis.");
  const result = await db.articleIllustration.updateMany({
    where: {
      articleId: r.articleId,
      version: r.version,
      inlineVersion: r.inlineVersion,
      claimedBy: owner,
    },
    data: {
      inlineStatus: "READY",
      inlineEvidence: evidence,
      inlineReviewedContentHash: hash,
      inlineVersion: { increment: 1 },
    },
  });
  if (result.count !== 1) throw Error("La leçon a changé pendant la revue.");
}
