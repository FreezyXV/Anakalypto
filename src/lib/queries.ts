import { prisma } from "./prisma";

/** Seuls les articles publies sont exposes par le site. */
const PUBLISHED = { status: "PUBLISHED" } as const;

export type CategorySummary = {
  slug: string;
  name: string;
  path: string;
  level: number;
  description: string | null;
  articleCount: number;
};

export type ArticleSummary = {
  slug: string;
  title: string;
  summary: string;
  path: string;
  categoryName: string;
  categoryPath: string;
  lastVerified: Date | null;
};

/** Compte les articles publies d'une categorie et de toute sa descendance. */
async function articleCountsByCategoryPath(): Promise<Map<string, number>> {
  const rows = await prisma.$queryRaw<Array<{ path: string; count: bigint }>>`
    SELECT parent.path AS path, count(a.id) AS count
      FROM "Category" parent
      JOIN "Category" child
        ON child.path = parent.path OR child.path LIKE parent.path || '/%'
      JOIN "Article" a
        ON a."categoryId" = child.id AND a.status = 'PUBLISHED'
     GROUP BY parent.path
  `;

  return new Map(rows.map((row) => [row.path, Number(row.count)]));
}

/** Categories de premier niveau, avec le nombre d'articles de chaque branche. */
export async function getRootCategories(): Promise<CategorySummary[]> {
  const [categories, counts] = await Promise.all([
    prisma.category.findMany({ where: { level: 0 }, orderBy: { name: "asc" } }),
    articleCountsByCategoryPath(),
  ]);

  return categories.map((category) => ({
    slug: category.slug,
    name: category.name,
    path: category.path,
    level: category.level,
    description: category.description,
    articleCount: counts.get(category.path) ?? 0,
  }));
}

export type CategoryNode = CategorySummary & { children: CategoryNode[] };

/** Arborescence complete, utilisee par l'index des categories. */
export async function getCategoryTree(): Promise<CategoryNode[]> {
  const [categories, counts] = await Promise.all([
    prisma.category.findMany({ orderBy: [{ level: "asc" }, { name: "asc" }] }),
    articleCountsByCategoryPath(),
  ]);

  const nodes = new Map<string, CategoryNode>();
  for (const category of categories) {
    nodes.set(category.id, {
      slug: category.slug,
      name: category.name,
      path: category.path,
      level: category.level,
      description: category.description,
      articleCount: counts.get(category.path) ?? 0,
      children: [],
    });
  }

  const roots: CategoryNode[] = [];
  for (const category of categories) {
    const node = nodes.get(category.id);
    if (!node) continue;
    const parent = category.parentId ? nodes.get(category.parentId) : undefined;
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  return roots;
}

export type CategoryPage = {
  slug: string;
  name: string;
  path: string;
  level: number;
  description: string | null;
  ancestors: Array<{ name: string; path: string }>;
  children: CategorySummary[];
  articles: ArticleSummary[];
  /** Articles de la descendance, hors rattachement direct. */
  descendantArticles: ArticleSummary[];
};

/** Chemins des ancetres d'une categorie, du premier niveau au parent direct. */
function ancestorPaths(path: string): string[] {
  const segments = path.split("/");
  return segments.slice(0, -1).map((_, index) => segments.slice(0, index + 1).join("/"));
}

export async function getCategoryByPath(path: string): Promise<CategoryPage | null> {
  const category = await prisma.category.findUnique({
    where: { path },
    include: {
      children: { orderBy: { name: "asc" } },
      articles: {
        where: PUBLISHED,
        orderBy: { title: "asc" },
        select: { slug: true, title: true, summary: true, lastVerified: true },
      },
    },
  });

  if (!category) return null;

  const [ancestors, counts, descendants] = await Promise.all([
    prisma.category.findMany({
      where: { path: { in: ancestorPaths(path) } },
      orderBy: { level: "asc" },
      select: { name: true, path: true },
    }),
    articleCountsByCategoryPath(),
    prisma.article.findMany({
      where: { ...PUBLISHED, category: { path: { startsWith: `${path}/` } } },
      orderBy: [{ lastVerified: "desc" }, { title: "asc" }],
      take: 24,
      select: {
        slug: true,
        title: true,
        summary: true,
        lastVerified: true,
        category: { select: { name: true, path: true } },
      },
    }),
  ]);

  return {
    slug: category.slug,
    name: category.name,
    path: category.path,
    level: category.level,
    description: category.description,
    ancestors,
    children: category.children.map((child) => ({
      slug: child.slug,
      name: child.name,
      path: child.path,
      level: child.level,
      description: child.description,
      articleCount: counts.get(child.path) ?? 0,
    })),
    articles: category.articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      summary: article.summary,
      path: `${category.path}/${article.slug}`,
      categoryName: category.name,
      categoryPath: category.path,
      lastVerified: article.lastVerified,
    })),
    descendantArticles: descendants.map((article) => ({
      slug: article.slug,
      title: article.title,
      summary: article.summary,
      path: `${article.category.path}/${article.slug}`,
      categoryName: article.category.name,
      categoryPath: article.category.path,
      lastVerified: article.lastVerified,
    })),
  };
}

export type ArticlePage = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  path: string;
  lastVerified: Date | null;
  publishedAt: Date | null;
  updatedAt: Date;
  category: { name: string; path: string };
  ancestors: Array<{ name: string; path: string }>;
  tags: Array<{ slug: string; name: string }>;
  sources: Array<{
    title: string;
    url: string;
    publisher: string | null;
    publishedDate: string | null;
  }>;
  related: Array<{ slug: string; title: string; summary: string; path: string }>;
};

export async function getArticleByPath(
  categoryPath: string,
  slug: string,
): Promise<ArticlePage | null> {
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      category: { select: { name: true, path: true } },
      tags: { include: { tag: true } },
      sources: { orderBy: { title: "asc" } },
      relatedFrom: {
        include: {
          to: {
            select: {
              slug: true,
              title: true,
              summary: true,
              status: true,
              category: { select: { path: true } },
            },
          },
        },
      },
    },
  });

  if (!article || article.status !== "PUBLISHED") return null;
  // L'URL doit designer l'article a sa place reelle dans l'arborescence.
  if (article.category.path !== categoryPath) return null;

  const ancestors = await prisma.category.findMany({
    where: { path: { in: ancestorPaths(article.category.path) } },
    orderBy: { level: "asc" },
    select: { name: true, path: true },
  });

  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    content: article.content,
    path: `${article.category.path}/${article.slug}`,
    lastVerified: article.lastVerified,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    category: article.category,
    ancestors,
    tags: article.tags.map((link) => ({ slug: link.tag.slug, name: link.tag.name })),
    sources: article.sources.map((source) => ({
      title: source.title,
      url: source.url,
      publisher: source.publisher,
      publishedDate: source.publishedDate,
    })),
    related: article.relatedFrom
      .filter((relation) => relation.to.status === "PUBLISHED")
      .map((relation) => ({
        slug: relation.to.slug,
        title: relation.to.title,
        summary: relation.to.summary,
        path: `${relation.to.category.path}/${relation.to.slug}`,
      })),
  };
}

/** Articles publies les plus recemment verifies, pour la page d'accueil. */
export async function getRecentArticles(limit = 8): Promise<ArticleSummary[]> {
  const articles = await prisma.article.findMany({
    where: PUBLISHED,
    orderBy: [{ lastVerified: "desc" }, { publishedAt: "desc" }, { title: "asc" }],
    take: limit,
    select: {
      slug: true,
      title: true,
      summary: true,
      lastVerified: true,
      category: { select: { name: true, path: true } },
    },
  });

  return articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    path: `${article.category.path}/${article.slug}`,
    categoryName: article.category.name,
    categoryPath: article.category.path,
    lastVerified: article.lastVerified,
  }));
}

/** Tous les chemins de categorie, pour la generation statique et le sitemap. */
export async function getAllCategoryPaths(): Promise<string[]> {
  const categories = await prisma.category.findMany({
    orderBy: { path: "asc" },
    select: { path: true },
  });
  return categories.map((category) => category.path);
}

/** Tous les chemins d'article publie, pour la generation statique et le sitemap. */
export async function getAllArticlePaths(): Promise<Array<{ path: string; updatedAt: Date }>> {
  const articles = await prisma.article.findMany({
    where: PUBLISHED,
    orderBy: { slug: "asc" },
    select: { slug: true, updatedAt: true, category: { select: { path: true } } },
  });
  return articles.map((article) => ({
    path: `${article.category.path}/${article.slug}`,
    updatedAt: article.updatedAt,
  }));
}

export type SiteStats = { articles: number; categories: number; sources: number };

export async function getSiteStats(): Promise<SiteStats> {
  const [articles, categories, sources] = await Promise.all([
    prisma.article.count({ where: PUBLISHED }),
    prisma.category.count(),
    prisma.source.count(),
  ]);
  return { articles, categories, sources };
}
