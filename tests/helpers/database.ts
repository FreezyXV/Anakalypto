import type { PrismaClient } from "../../src/generated/prisma/client";

/** Vide les tables dans l'ordre des dependances, pour repartir d'un etat connu. */
export async function resetDatabase(prisma: PrismaClient): Promise<void> {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "RelatedArticle", "ArticleTag", "Source", "Revision", "Article", "Tag", "Category" RESTART IDENTITY CASCADE`,
  );
}
