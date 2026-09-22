import type { PrismaClient } from "../../generated/prisma/client";
import { slugify } from "../slug";
import type { ContentIssue } from "./types";
import type { ValidationResult } from "./validate";

export type EntityCounts = { created: number; updated: number; unchanged: number };

export type SeedSummary = {
  categories: EntityCounts;
  articles: EntityCounts;
  tags: number;
  sources: number;
  relations: number;
  revisions: number;
  searchVectorsRefreshed: number;
};

function emptyCounts(): EntityCounts {
  return { created: 0, updated: 0, unchanged: 0 };
}

/** Compare deux dates eventuellement nulles, a la milliseconde. */
function sameDate(a: Date | null | undefined, b: Date | null | undefined): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.getTime() === b.getTime();
}

/** Compare deux listes de chaines sans tenir compte de l'ordre. */
function sameSet(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false;
  const left = [...a].sort();
  const right = [...b].sort();
  return left.every((value, index) => value === right[index]);
}

/**
 * Importe un corpus deja valide. Rejouable: chaque entite est identifiee par son slug et
 * seules les differences reelles donnent lieu a une ecriture, ce qui permet de distinguer
 * les creations des mises a jour et des blocs inchanges.
 */
export async function seedCorpus(
  prisma: PrismaClient,
  corpus: ValidationResult,
): Promise<SeedSummary> {
  const summary: SeedSummary = {
    categories: emptyCounts(),
    articles: emptyCounts(),
    tags: 0,
    sources: 0,
    relations: 0,
    revisions: 0,
    searchVectorsRefreshed: 0,
  };

  // 1. Categories, par niveau croissant: une categorie parente doit exister avant ses enfants.
  const categoryIdBySlug = new Map<string, string>();
  const categoryIdByPath = new Map<string, string>();
  const ordered = [...corpus.categories].sort((a, b) => a.level - b.level);

  for (const category of ordered) {
    const parentId = category.parentSlug ? (categoryIdBySlug.get(category.parentSlug) ?? null) : null;
    const existing = await prisma.category.findUnique({ where: { slug: category.slug } });

    const desired = {
      name: category.title,
      description: category.summary,
      level: category.level,
      path: category.categoryPath,
      parentId,
    };

    if (!existing) {
      const created = await prisma.category.create({ data: { slug: category.slug, ...desired } });
      categoryIdBySlug.set(category.slug, created.id);
      categoryIdByPath.set(category.categoryPath, created.id);
      summary.categories.created += 1;
      continue;
    }

    const unchanged =
      existing.name === desired.name &&
      existing.description === desired.description &&
      existing.level === desired.level &&
      existing.path === desired.path &&
      existing.parentId === desired.parentId;

    if (!unchanged) {
      await prisma.category.update({ where: { id: existing.id }, data: desired });
      summary.categories.updated += 1;
    } else {
      summary.categories.unchanged += 1;
    }

    categoryIdBySlug.set(category.slug, existing.id);
    categoryIdByPath.set(category.categoryPath, existing.id);
  }

  // 2. Etiquettes: un enregistrement par slug, partage entre articles.
  const tagIdBySlug = new Map<string, string>();
  const tagNames = new Map<string, string>();
  for (const article of corpus.articles) {
    for (const name of article.tags) {
      const slug = slugify(name);
      if (slug.length > 0 && !tagNames.has(slug)) tagNames.set(slug, name.trim());
    }
  }
  for (const [slug, name] of tagNames) {
    const tag = await prisma.tag.upsert({
      where: { slug },
      update: { name },
      create: { slug, name },
    });
    tagIdBySlug.set(slug, tag.id);
  }
  summary.tags = tagIdBySlug.size;

  // 3. Articles.
  const articleIdBySlug = new Map<string, string>();

  for (const article of corpus.articles) {
    const categoryId = categoryIdByPath.get(article.categoryPath);
    if (!categoryId) {
      throw new Error(
        `Categorie introuvable pour l'article "${article.slug}" (${article.categoryPath}).`,
      );
    }

    const status = article.status === "published" ? "PUBLISHED" : "DRAFT";
    const lastVerified = article.lastVerified ?? null;

    const existing = await prisma.article.findUnique({
      where: { slug: article.slug },
      include: { tags: true, sources: true },
    });

    if (!existing) {
      const created = await prisma.article.create({
        data: {
          slug: article.slug,
          title: article.title,
          summary: article.summary,
          content: article.content,
          status,
          lastVerified,
          publishedAt: status === "PUBLISHED" ? (lastVerified ?? new Date()) : null,
          categoryId,
        },
      });
      articleIdBySlug.set(article.slug, created.id);
      summary.articles.created += 1;
      await syncTags(prisma, created.id, article.tags, tagIdBySlug);
      summary.sources += await syncSources(prisma, created.id, article.sources);
      continue;
    }

    articleIdBySlug.set(article.slug, existing.id);

    const contentChanged = existing.content !== article.content;
    const currentTagIds = existing.tags.map((link) => link.tagId);
    const desiredTagIds = article.tags
      .map((name) => tagIdBySlug.get(slugify(name)))
      .filter((id): id is string => typeof id === "string");

    const sourcesChanged = !sameSources(existing.sources, article.sources);
    const fieldsChanged =
      existing.title !== article.title ||
      existing.summary !== article.summary ||
      contentChanged ||
      existing.status !== status ||
      !sameDate(existing.lastVerified, lastVerified) ||
      existing.categoryId !== categoryId;

    if (!fieldsChanged && !sourcesChanged && sameSet(currentTagIds, desiredTagIds)) {
      summary.articles.unchanged += 1;
      summary.sources += existing.sources.length;
      continue;
    }

    if (contentChanged) {
      // On archive la version precedente avant de l'ecraser.
      await prisma.revision.create({
        data: {
          articleId: existing.id,
          content: existing.content,
          note: "Version remplacee par un import du corpus.",
        },
      });
      summary.revisions += 1;
    }

    await prisma.article.update({
      where: { id: existing.id },
      data: {
        title: article.title,
        summary: article.summary,
        content: article.content,
        status,
        lastVerified,
        publishedAt:
          status === "PUBLISHED" ? (existing.publishedAt ?? lastVerified ?? new Date()) : null,
        categoryId,
      },
    });
    summary.articles.updated += 1;

    await syncTags(prisma, existing.id, article.tags, tagIdBySlug);
    if (sourcesChanged) {
      summary.sources += await syncSources(prisma, existing.id, article.sources);
    } else {
      summary.sources += existing.sources.length;
    }
  }

  // 4. Articles lies, une fois tous les identifiants connus.
  for (const article of corpus.articles) {
    const fromId = articleIdBySlug.get(article.slug);
    if (!fromId) continue;
    const desired = article.relatedArticles
      .map((slug) => articleIdBySlug.get(slug))
      .filter((id): id is string => typeof id === "string");

    const current = await prisma.relatedArticle.findMany({ where: { fromId } });
    const currentIds = current.map((relation) => relation.toId);

    if (!sameSet(currentIds, desired)) {
      await prisma.relatedArticle.deleteMany({ where: { fromId } });
      if (desired.length > 0) {
        await prisma.relatedArticle.createMany({
          data: desired.map((toId) => ({ fromId, toId })),
          skipDuplicates: true,
        });
      }
    }
    summary.relations += desired.length;
  }

  // 5. Filet de securite: le trigger PostgreSQL maintient searchVector a chaque ecriture,
  // mais une ligne importee avant la migration de recherche resterait sans vecteur.
  summary.searchVectorsRefreshed = await prisma.$executeRawUnsafe(
    `UPDATE "Article"
       SET "searchVector" = article_search_vector(title, summary, content)
     WHERE "searchVector" IS NULL`,
  );

  return summary;
}

type ExistingSource = { title: string; url: string; publisher: string | null; publishedDate: string | null };
type DesiredSource = { title: string; url: string; publisher?: string | undefined; date?: string | undefined };

function sameSources(existing: ExistingSource[], desired: DesiredSource[]): boolean {
  if (existing.length !== desired.length) return false;
  const key = (title: string, url: string, publisher: string | null, date: string | null) =>
    `${title}|${url}|${publisher ?? ""}|${date ?? ""}`;
  const left = existing
    .map((source) => key(source.title, source.url, source.publisher, source.publishedDate))
    .sort();
  const right = desired
    .map((source) => key(source.title, source.url, source.publisher ?? null, source.date ?? null))
    .sort();
  return left.every((value, index) => value === right[index]);
}

async function syncTags(
  prisma: PrismaClient,
  articleId: string,
  tags: readonly string[],
  tagIdBySlug: ReadonlyMap<string, string>,
): Promise<void> {
  const desired = [
    ...new Set(
      tags
        .map((name) => tagIdBySlug.get(slugify(name)))
        .filter((id): id is string => typeof id === "string"),
    ),
  ];

  await prisma.articleTag.deleteMany({ where: { articleId, tagId: { notIn: desired } } });
  if (desired.length > 0) {
    await prisma.articleTag.createMany({
      data: desired.map((tagId) => ({ articleId, tagId })),
      skipDuplicates: true,
    });
  }
}

async function syncSources(
  prisma: PrismaClient,
  articleId: string,
  sources: readonly DesiredSource[],
): Promise<number> {
  // Les sources n'ont pas de cle naturelle stable: on les reecrit en bloc.
  await prisma.source.deleteMany({ where: { articleId } });
  if (sources.length === 0) return 0;
  await prisma.source.createMany({
    data: sources.map((source) => ({
      articleId,
      title: source.title,
      url: source.url,
      publisher: source.publisher ?? null,
      publishedDate: source.date ?? null,
    })),
  });
  return sources.length;
}

/** Rapport d'erreurs lisible: un defaut par ligne, prefixe de sa position exacte. */
export function formatIssues(issues: readonly ContentIssue[]): string {
  const lines = [`${issues.length} anomalie(s) detectee(s) dans le corpus:`, ""];
  for (const issue of issues) {
    const field = issue.field.length > 0 ? ` [${issue.field}]` : "";
    lines.push(`  ${issue.file}:${issue.line}${field} ${issue.message}`);
  }
  return lines.join("\n");
}

export function formatSummary(summary: SeedSummary): string {
  const line = (label: string, counts: EntityCounts) =>
    `  ${label.padEnd(12)} crees ${String(counts.created).padStart(4)} | ` +
    `mis a jour ${String(counts.updated).padStart(4)} | ` +
    `inchanges ${String(counts.unchanged).padStart(4)}`;

  return [
    "",
    "Import termine.",
    line("categories", summary.categories),
    line("articles", summary.articles),
    `  etiquettes   ${summary.tags}`,
    `  sources      ${summary.sources}`,
    `  liens        ${summary.relations}`,
    `  revisions    ${summary.revisions}`,
    `  vecteurs recalcules ${summary.searchVectorsRefreshed}`,
  ].join("\n");
}
