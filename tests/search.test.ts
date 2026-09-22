import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { prisma } from "../src/lib/prisma";
import { buildTsQuery, normalizeTrigramInput, searchArticles } from "../src/lib/search";
import { seedCorpus } from "../src/lib/content/seed";
import { validateCorpus } from "../src/lib/content/validate";
import type { RawBlock } from "../src/lib/content/types";
import { resetDatabase } from "./helpers/database";

describe("buildTsQuery", () => {
  it("combine les termes et autorise les saisies partielles", () => {
    expect(buildTsQuery("telescope spatial")).toBe("telescope:* & spatial:*");
  });

  it("neutralise les operateurs de tsquery", () => {
    expect(buildTsQuery("energie & !nucleaire | (solaire)")).toBe(
      "energie:* & nucleaire:* & solaire:*",
    );
  });

  it("separe les mots composes et les apostrophes", () => {
    expect(buildTsQuery("l'energie porte-avions")).toBe("energie:* & porte:* & avions:*");
  });

  it("ignore les saisies sans terme exploitable", () => {
    for (const input of ["", "   ", "?", "a"]) {
      expect(buildTsQuery(input)).toBeNull();
    }
  });

  it("borne le nombre de termes", () => {
    const query = buildTsQuery(Array.from({ length: 30 }, (_, index) => `mot${index}`).join(" "));
    expect(query?.split(" & ")).toHaveLength(12);
  });
});

describe("normalizeTrigramInput", () => {
  it("compacte les espaces et borne la longueur", () => {
    expect(normalizeTrigramInput("  deux   mots  ")).toBe("deux mots");
    expect(normalizeTrigramInput("a".repeat(200))).toHaveLength(120);
  });
});

const corpus: RawBlock[] = [
  {
    location: { file: "t.md", line: 1 },
    data: {
      type: "category",
      title: "Espace",
      slug: "espace",
      categoryPath: "espace",
      level: 0,
      parentSlug: null,
      summary: "Categorie de test.",
    },
    body: "",
  },
  {
    location: { file: "t.md", line: 2 },
    data: {
      type: "article",
      title: "Le télescope spatial James Webb",
      slug: "telescope-james-webb",
      categoryPath: "espace",
      summary: "Observatoire infrarouge placé au point de Lagrange L2.",
      tags: ["astronomie"],
      relatedArticles: [],
      sources: [{ title: "NASA", url: "https://science.nasa.gov/mission/webb/" }],
      lastVerified: "2026-09-21",
      status: "published",
    },
    body: "## Résumé\n\nIl observe les premières galaxies grâce à un miroir segmenté.",
  },
  {
    location: { file: "t.md", line: 3 },
    data: {
      type: "article",
      title: "L'électricité d'origine renouvelable",
      slug: "electricite-renouvelable",
      categoryPath: "espace",
      summary: "Production d'électricité sans combustible fossile.",
      tags: ["energie"],
      relatedArticles: [],
      sources: [{ title: "AIE", url: "https://www.iea.org/" }],
      lastVerified: "2026-09-21",
      status: "published",
    },
    body: "## Résumé\n\nLe solaire et l'éolien dominent les nouvelles capacités installées.",
  },
  {
    location: { file: "t.md", line: 4 },
    data: {
      type: "article",
      title: "Un brouillon non publié",
      slug: "brouillon",
      categoryPath: "espace",
      summary: "Ce texte ne doit jamais apparaître dans les résultats.",
      tags: [],
      relatedArticles: [],
      sources: [],
      status: "draft",
    },
    body: "## Résumé\n\nLe télescope y est cité pour piéger la recherche.",
  },
];

describe("searchArticles", () => {
  beforeAll(async () => {
    await resetDatabase(prisma);
    const result = validateCorpus(corpus);
    expect(result.issues).toEqual([]);
    await seedCorpus(prisma, result);
  });

  afterAll(async () => {
    await resetDatabase(prisma);
    await prisma.$disconnect();
  });

  it("trouve un article malgre l'absence d'accents dans la saisie", async () => {
    const results = await searchArticles("electricite");
    expect(results[0]?.slug).toBe("electricite-renouvelable");
    expect(results[0]?.match).toBe("exact");
  });

  it("trouve un article a partir d'une saisie accentuee", async () => {
    const results = await searchArticles("télescope");
    expect(results.map((result) => result.slug)).toContain("telescope-james-webb");
  });

  it("accepte une saisie partielle", async () => {
    const results = await searchArticles("telesc");
    expect(results.map((result) => result.slug)).toContain("telescope-james-webb");
  });

  it("classe le titre avant le corps", async () => {
    const results = await searchArticles("telescope");
    expect(results[0]?.slug).toBe("telescope-james-webb");
  });

  it("exclut les articles non publies", async () => {
    const results = await searchArticles("brouillon");
    expect(results.map((result) => result.slug)).not.toContain("brouillon");
  });

  it("rattrape une faute de frappe par le repli trigramme", async () => {
    const results = await searchArticles("telescpoe spatial");
    const match = results.find((result) => result.slug === "telescope-james-webb");
    expect(match).toBeDefined();
    expect(match?.match).toBe("approximatif");
  });

  it("rattrape une faute sur un mot isole, malgre un titre long et accentue", async () => {
    // Regression: `similarity` diluait le score sur tout le titre et les accents du titre
    // changeaient les trigrammes, si bien qu'une saisie d'un seul mot ne trouvait rien.
    const results = await searchArticles("telescpoe");
    expect(results[0]?.slug).toBe("telescope-james-webb");
    expect(results[0]?.match).toBe("approximatif");
  });

  it("ne rapproche pas une saisie sans rapport avec un titre", async () => {
    expect(await searchArticles("qwertyuiopasdf")).toEqual([]);
  });

  it("renvoie une liste vide pour une saisie sans correspondance", async () => {
    expect(await searchArticles("xyzzyplughquux")).toEqual([]);
  });

  it("renvoie une liste vide pour une saisie vide", async () => {
    expect(await searchArticles("   ")).toEqual([]);
  });

  it("respecte la limite demandee", async () => {
    const results = await searchArticles("e", 1);
    expect(results.length).toBeLessThanOrEqual(1);
  });
});
