import path from "node:path";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

import { loadContentBlocks } from "../src/lib/content/load";
import { seedCorpus } from "../src/lib/content/seed";
import { validateCorpus } from "../src/lib/content/validate";
import type { RawBlock } from "../src/lib/content/types";
import { prisma } from "../src/lib/prisma";
import { resetDatabase } from "./helpers/database";

function corpus(
  articleOverrides: Record<string, unknown> = {},
  body = "## Résumé\n\nTexte.",
): RawBlock[] {
  return [
    {
      location: { file: "t.md", line: 1 },
      data: {
        type: "category",
        title: "Sciences",
        slug: "sciences",
        categoryPath: "sciences",
        level: 0,
        parentSlug: null,
        summary: "Categorie racine.",
      },
      body: "",
    },
    {
      location: { file: "t.md", line: 2 },
      data: {
        type: "category",
        title: "Physique",
        slug: "physique",
        categoryPath: "sciences/physique",
        level: 1,
        parentSlug: "sciences",
        summary: "Sous-categorie.",
      },
      body: "",
    },
    {
      location: { file: "t.md", line: 3 },
      data: {
        type: "article",
        title: "La relativité générale",
        slug: "relativite-generale",
        categoryPath: "sciences/physique",
        summary: "Théorie de la gravitation.",
        tags: ["physique", "gravitation"],
        relatedArticles: ["ondes-gravitationnelles"],
        sources: [{ title: "CNRS", url: "https://www.cnrs.fr/", publisher: "CNRS", date: "2026" }],
        lastVerified: "2026-09-21",
        status: "published",
        ...articleOverrides,
      },
      body,
    },
    {
      location: { file: "t.md", line: 4 },
      data: {
        type: "article",
        title: "Les ondes gravitationnelles",
        slug: "ondes-gravitationnelles",
        categoryPath: "sciences/physique",
        summary: "Déformations de l'espace-temps.",
        tags: ["physique"],
        relatedArticles: ["relativite-generale"],
        sources: [{ title: "LIGO", url: "https://www.ligo.org/" }],
        lastVerified: "2026-09-21",
        status: "published",
      },
      body: "## Résumé\n\nDétectées en 2015.",
    },
  ];
}

async function run(blocks: RawBlock[]) {
  const validated = validateCorpus(blocks);
  expect(validated.issues).toEqual([]);
  return seedCorpus(prisma, validated);
}

describe("seedCorpus", () => {
  beforeEach(async () => {
    await resetDatabase(prisma);
  });

  afterAll(async () => {
    await resetDatabase(prisma);
    await prisma.$disconnect();
  });

  it("cree l'arborescence, les articles et leurs relations", async () => {
    const summary = await run(corpus());

    expect(summary.categories.created).toBe(2);
    expect(summary.articles.created).toBe(2);

    const physique = await prisma.category.findUnique({
      where: { slug: "physique" },
      include: { parent: true, articles: true },
    });
    expect(physique?.parent?.slug).toBe("sciences");
    expect(physique?.level).toBe(1);
    expect(physique?.articles).toHaveLength(2);

    const article = await prisma.article.findUnique({
      where: { slug: "relativite-generale" },
      include: { tags: { include: { tag: true } }, sources: true, relatedFrom: true },
    });
    expect(article?.status).toBe("PUBLISHED");
    expect(article?.publishedAt).not.toBeNull();
    expect(article?.sources[0]?.publisher).toBe("CNRS");
    expect(article?.tags.map((link) => link.tag.slug).sort()).toEqual(["gravitation", "physique"]);
    expect(article?.relatedFrom).toHaveLength(1);
  });

  it("est rejouable sans creer de doublon", async () => {
    await run(corpus());
    const second = await run(corpus());

    expect(second.categories).toMatchObject({ created: 0, updated: 0, unchanged: 2 });
    expect(second.articles).toMatchObject({ created: 0, updated: 0, unchanged: 2 });

    const counts = {
      categories: await prisma.category.count(),
      articles: await prisma.article.count(),
      tags: await prisma.tag.count(),
      links: await prisma.articleTag.count(),
      sources: await prisma.source.count(),
      relations: await prisma.relatedArticle.count(),
    };
    expect(counts).toEqual({
      categories: 2,
      articles: 2,
      tags: 2,
      links: 3,
      sources: 2,
      relations: 2,
    });
  });

  it("archive la version precedente quand le corps change", async () => {
    await run(corpus());
    const summary = await run(corpus({}, "## Résumé\n\nTexte revu et complété."));

    expect(summary.articles.updated).toBe(1);
    expect(summary.revisions).toBe(1);

    const article = await prisma.article.findUnique({
      where: { slug: "relativite-generale" },
      include: { revisions: true },
    });
    expect(article?.content).toContain("revu et complété");
    expect(article?.revisions[0]?.content).toBe("## Résumé\n\nTexte.");
  });

  it("synchronise etiquettes et sources sans laisser d'orphelin", async () => {
    await run(corpus());
    await run(
      corpus({
        tags: ["astrophysique"],
        sources: [{ title: "ESA", url: "https://www.esa.int/" }],
      }),
    );

    const article = await prisma.article.findUnique({
      where: { slug: "relativite-generale" },
      include: { tags: { include: { tag: true } }, sources: true },
    });
    expect(article?.tags.map((link) => link.tag.slug)).toEqual(["astrophysique"]);
    expect(article?.sources).toHaveLength(1);
    expect(article?.sources[0]?.title).toBe("ESA");
  });

  it("retire une relation supprimee du frontmatter", async () => {
    await run(corpus());
    await run(corpus({ relatedArticles: [] }));

    const article = await prisma.article.findUnique({
      where: { slug: "relativite-generale" },
      include: { relatedFrom: true },
    });
    expect(article?.relatedFrom).toEqual([]);
    // La relation inverse, declaree par l'autre article, reste intacte.
    expect(await prisma.relatedArticle.count()).toBe(1);
  });

  it("alimente le vecteur de recherche de chaque article", async () => {
    await run(corpus());
    const rows = await prisma.$queryRaw<Array<{ count: bigint }>>`
      SELECT count(*) AS count FROM "Article" WHERE "searchVector" IS NULL
    `;
    expect(Number(rows[0]?.count ?? -1)).toBe(0);
  });

  it("deplace un article dont la categorie de rattachement change", async () => {
    await run(corpus());
    const summary = await run(corpus({ categoryPath: "sciences" }));

    expect(summary.articles.updated).toBe(1);
    const article = await prisma.article.findUnique({
      where: { slug: "relativite-generale" },
      include: { category: true },
    });
    expect(article?.category.slug).toBe("sciences");
  });
});

describe("corpus livre dans content/", () => {
  it("passe la validation sans anomalie", async () => {
    const blocks = await loadContentBlocks(path.resolve(process.cwd(), "content"));
    const result = validateCorpus(blocks);

    expect(result.issues).toEqual([]);
    expect(result.categories.length).toBeGreaterThan(0);
    expect(result.articles.length).toBeGreaterThan(0);
    // Chaque article publie cite au moins une source: c'est la charte de fiabilite.
    for (const article of result.articles) {
      if (article.status === "published") expect(article.sources.length).toBeGreaterThan(0);
    }
  });
});
