import { describe, expect, it } from "vitest";

import { splitBlocks } from "../src/lib/content/parse";
import { articleBlockSchema, categoryBlockSchema } from "../src/lib/content/schema";
import { validateCorpus } from "../src/lib/content/validate";
import type { RawBlock } from "../src/lib/content/types";

function block(data: Record<string, unknown>, body = "Corps.", line = 1): RawBlock {
  return { location: { file: "test.md", line }, data, body };
}

const category = (overrides: Record<string, unknown> = {}) =>
  block({
    type: "category",
    title: "Physique",
    slug: "physique",
    categoryPath: "sciences/physique",
    level: 1,
    parentSlug: "sciences",
    summary: "Resume de la categorie.",
    ...overrides,
  });

const root = () =>
  block({
    type: "category",
    title: "Sciences",
    slug: "sciences",
    categoryPath: "sciences",
    level: 0,
    parentSlug: null,
    summary: "Resume de la categorie racine.",
  });

const article = (overrides: Record<string, unknown> = {}) =>
  block({
    type: "article",
    title: "La relativite",
    slug: "la-relativite",
    categoryPath: "sciences/physique",
    summary: "Resume de l'article.",
    tags: ["physique"],
    relatedArticles: [],
    sources: [{ title: "Source", url: "https://example.org/a", publisher: "Editeur" }],
    lastVerified: "2026-09-21",
    status: "published",
    ...overrides,
  });

describe("schemas de bloc", () => {
  it("accepte une categorie conforme", () => {
    expect(categoryBlockSchema.safeParse(category().data).success).toBe(true);
  });

  it("refuse un slug contenant une majuscule ou un accent", () => {
    for (const slug of ["Physique", "physique-quantique-", "energie-génerale"]) {
      expect(categoryBlockSchema.safeParse(category({ slug }).data).success).toBe(false);
    }
  });

  it("traite un parentSlug vide comme absent", () => {
    const parsed = categoryBlockSchema.safeParse(
      category({ level: 0, categoryPath: "sciences", slug: "sciences", parentSlug: "" }).data,
    );
    expect(parsed.success).toBe(true);
    if (parsed.success) expect(parsed.data.parentSlug).toBeNull();
  });

  it("convertit une etiquette numerique en chaine", () => {
    const parsed = articleBlockSchema.safeParse(article({ tags: ["droit", 1948] }).data);
    expect(parsed.success).toBe(true);
    if (parsed.success) expect(parsed.data.tags).toEqual(["droit", "1948"]);
  });

  it("accepte une date YAML comme une chaine ISO", () => {
    const fromDate = articleBlockSchema.safeParse(
      article({ lastVerified: new Date("2026-09-21T00:00:00.000Z") }).data,
    );
    const fromString = articleBlockSchema.safeParse(article({ lastVerified: "2026-09-21" }).data);
    expect(fromDate.success && fromString.success).toBe(true);
    if (fromDate.success && fromString.success) {
      expect(fromDate.data.lastVerified?.getTime()).toBe(fromString.data.lastVerified?.getTime());
    }
  });

  it("refuse une date mal formee et une URL de source invalide", () => {
    expect(articleBlockSchema.safeParse(article({ lastVerified: "21/09/2026" }).data).success).toBe(
      false,
    );
    expect(
      articleBlockSchema.safeParse(article({ sources: [{ title: "S", url: "pas-une-url" }] }).data)
        .success,
    ).toBe(false);
  });
});

describe("validateCorpus", () => {
  it("valide un corpus coherent", () => {
    const result = validateCorpus([root(), category(), article()]);
    expect(result.issues).toEqual([]);
    expect(result.categories).toHaveLength(2);
    expect(result.articles).toHaveLength(1);
  });

  it("signale un level incoherent avec la profondeur du chemin", () => {
    const result = validateCorpus([root(), category({ level: 2 })]);
    expect(result.issues.map((issue) => issue.field)).toContain("level");
  });

  it("signale un parentSlug en desaccord avec le chemin", () => {
    const result = validateCorpus([root(), category({ parentSlug: "chimie" })]);
    expect(result.issues[0]?.message).toContain("incoherent avec le chemin");
  });

  it("signale un dernier segment de chemin different du slug", () => {
    const result = validateCorpus([root(), category({ categoryPath: "sciences/phys" })]);
    expect(result.issues.map((issue) => issue.field)).toContain("categoryPath");
  });

  it("signale un slug duplique en citant le premier emplacement", () => {
    const result = validateCorpus([root(), category(), category()]);
    const issue = result.issues.find((entry) => entry.field === "slug");
    expect(issue?.message).toContain("deja utilise");
  });

  it("signale un article rattache a une categorie inexistante", () => {
    const result = validateCorpus([root(), article({ categoryPath: "sciences/inconnue" })]);
    expect(result.issues.map((issue) => issue.message).join()).toContain("aucune categorie");
  });

  it("signale un article lie introuvable et une auto-reference", () => {
    const result = validateCorpus([
      root(),
      category(),
      article({ relatedArticles: ["absent", "la-relativite"] }),
    ]);
    const messages = result.issues.map((issue) => issue.message).join(" ");
    expect(messages).toContain("article lie introuvable");
    expect(messages).toContain("se referencer lui-meme");
  });

  it("exige au moins une source pour un article publie", () => {
    const result = validateCorpus([root(), category(), article({ sources: [] })]);
    expect(result.issues.map((issue) => issue.field)).toContain("sources");
  });

  it("signale un corps d'article vide", () => {
    const result = validateCorpus([root(), category(), { ...article(), body: "   " }]);
    expect(result.issues.map((issue) => issue.field)).toContain("content");
  });

  it("classe les anomalies par fichier puis par ligne", () => {
    const result = validateCorpus([
      { ...category({ level: 9 }), location: { file: "b.md", line: 10 } },
      { ...category({ slug: "Physique" }), location: { file: "a.md", line: 40 } },
      { ...category({ level: 7 }), location: { file: "a.md", line: 5 } },
    ]);
    const positions = result.issues.map((issue) => `${issue.file}:${issue.line}`);
    const ordered = [...result.issues].sort(
      (a, b) => a.file.localeCompare(b.file) || a.line - b.line,
    );
    expect(positions).toEqual(ordered.map((issue) => `${issue.file}:${issue.line}`));
    // Le tri est numerique sur la ligne: a.md:5 precede a.md:40.
    expect(positions[0]).toBe("a.md:5");
    expect(positions.at(-1)).toBe("b.md:10");
    expect(positions.indexOf("a.md:40")).toBeLessThan(positions.indexOf("b.md:10"));
  });
});

describe("splitBlocks", () => {
  it("decoupe des blocs separes par une barre horizontale", () => {
    const source = [
      "---",
      "type: category",
      "title: Sciences",
      "---",
      "",
      "Corps de la categorie.",
      "",
      "---",
      "",
      "---",
      "type: article",
      "title: Un article",
      "---",
      "",
      "Corps de l'article.",
    ].join("\n");

    const blocks = splitBlocks(source, "exemple.md");

    expect(blocks).toHaveLength(2);
    expect(blocks[0]?.data["type"]).toBe("category");
    expect(blocks[0]?.body).toBe("Corps de la categorie.");
    expect(blocks[1]?.location.line).toBe(10);
    expect(blocks[1]?.body).toBe("Corps de l'article.");
  });

  it("conserve une barre horizontale interne au corps", () => {
    const source = [
      "---",
      "type: article",
      "title: T",
      "---",
      "",
      "Avant.",
      "",
      "---",
      "",
      "Apres.",
    ].join("\n");
    expect(splitBlocks(source, "exemple.md")[0]?.body).toBe("Avant.\n\n---\n\nApres.");
  });
});
