/** No .env fallback. Defaults to a read-only plan; --apply is required to write. */
import path from "node:path";
import { createHash } from "node:crypto";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { loadContentBlocks } from "../src/lib/content/load";
import { validateCorpus } from "../src/lib/content/validate";
import { publishedCorpus } from "../src/lib/content/published";
import { seedCorpus } from "../src/lib/content/seed";

const args = process.argv.slice(2);
if (args.some((arg) => !["--apply", "--archive-retired"].includes(arg)))
  throw new Error("Usage : [--apply] [--archive-retired]");
const connectionString = process.env.CONTENT_DATABASE_URL;
if (!connectionString)
  throw new Error("CONTENT_DATABASE_URL explicite requise, sans lecture de .env.");
const full = validateCorpus(await loadContentBlocks(path.resolve("content")));
if (full.issues.length) throw new Error(`Corpus invalide : ${full.issues.length} erreur(s).`);
const selected = publishedCorpus(full);
if (!selected.articles.length) throw new Error("Aucun article publié dans le corpus.");
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
try {
  const slugs = selected.articles.map((article) => article.slug);
  const existing = await db.article.findMany({ select: { slug: true, status: true } });
  const bySlug = new Map(existing.map((article) => [article.slug, article]));
  const selectedSlugs = new Set(slugs);
  const extraPublished = existing
    .filter((article) => article.status === "PUBLISHED" && !selectedSlugs.has(article.slug))
    .map((article) => article.slug);
  const fullSlugs = new Set(full.articles.map((article) => article.slug));
  const unresolved = extraPublished.filter((slug) => fullSlugs.has(slug));
  const archiveRetired = args.includes("--archive-retired");
  console.log(
    JSON.stringify(
      {
        mode: args.includes("--apply") ? "apply" : "plan",
        corpusPublished: slugs.length,
        databasePublished: existing.filter((article) => article.status === "PUBLISHED").length,
        create: slugs.filter((slug) => !bySlug.has(slug)).length,
        publishFromCorpus: slugs.filter((slug) => bySlug.get(slug)?.status === "DRAFT").length,
        extraPublished,
        archiveRetired: archiveRetired ? extraPublished.length : 0,
        delete: 0,
      },
      null,
      2,
    ),
  );
  // Refuse une divergence de publication au lieu de supprimer ou dépublier silencieusement.
  if ((extraPublished.length && !archiveRetired) || unresolved.length)
    throw new Error(
      "Des publiés hors sélection nécessitent une décision éditoriale ; aucune écriture effectuée.",
    );
  const untouched = async () => {
    const rows = await db.article.findMany({
      where: { slug: { notIn: [...slugs, ...extraPublished] } },
      orderBy: { slug: "asc" },
      include: {
        sources: { orderBy: { id: "asc" } },
        tags: { orderBy: { tagId: "asc" } },
        quiz: { orderBy: { position: "asc" } },
      },
    });
    return {
      count: rows.length,
      hash: createHash("sha256").update(JSON.stringify(rows)).digest("hex"),
    };
  };
  const before = await untouched();
  if (args.includes("--apply")) {
    const summary = await seedCorpus(db, selected, { prune: false });
    // Seuls les anciens publiés absents du corpus complet peuvent être archivés.
    // Les brouillons existants hors sélection et les corps archivés sont conservés.
    const archiveSnapshot = async () => {
      const rows = await db.article.findMany({
        where: { slug: { in: extraPublished } },
        orderBy: { slug: "asc" },
      });
      return JSON.stringify(
        rows.map((article) => ({
          ...article,
          status: undefined,
          publishedAt: undefined,
          updatedAt: undefined,
        })),
      );
    };
    const archiveBefore = await archiveSnapshot();
    const archived = extraPublished.length
      ? await db.article.updateMany({
          where: { slug: { in: extraPublished }, status: "PUBLISHED" },
          data: { status: "DRAFT", publishedAt: null },
        })
      : { count: 0 };
    if (archiveBefore !== (await archiveSnapshot()))
      throw new Error("Le contenu des articles archivés a changé.");
    const after = await untouched();
    if (JSON.stringify(before) !== JSON.stringify(after))
      throw new Error("Les articles hors sélection ont changé : contrôler la sauvegarde.");
    console.log(JSON.stringify({ summary, archived: archived.count, untouched: after }, null, 2));
  } else console.log(JSON.stringify({ untouched: before }, null, 2));
} finally {
  await db.$disconnect();
}
