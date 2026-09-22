import { prisma } from "./prisma";

export type SearchResult = {
  slug: string;
  title: string;
  summary: string;
  categoryName: string;
  categoryPath: string;
  /** Score de pertinence. Compare uniquement des resultats d'une meme requete. */
  rank: number;
  /** Voie ayant produit le resultat: plein texte, ou rapprochement approximatif. */
  match: "exact" | "approximatif";
};

/**
 * Seuil de similarite trigramme. Mesure sur le corpus: une faute de frappe sur un mot du
 * titre donne environ 0,60, tandis que les rapprochements fortuits plafonnent vers 0,27.
 */
const TRIGRAM_THRESHOLD = 0.45;

/** Nombre de resultats plein texte en deca duquel on complete par le repli trigramme. */
const FALLBACK_BELOW = 5;

/**
 * Traduit une saisie libre en expression `to_tsquery` sure.
 *
 * Les operateurs de tsquery (`&`, `|`, `!`, `:`, parentheses) sont retires plutot
 * qu'echappes: l'utilisateur d'une encyclopedie saisit des mots, pas une algebre de
 * recherche, et une expression mal formee provoquerait une erreur SQL. Chaque terme est
 * suffixe de `:*` pour accepter les saisies partielles ("electri" trouve "electricite").
 */
export function buildTsQuery(input: string): string | null {
  const terms = input
    .normalize("NFC")
    .replace(/[^\p{L}\p{N}\s'-]+/gu, " ")
    .split(/[\s'-]+/u)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);

  if (terms.length === 0) return null;

  // 12 termes suffisent largement et bornent le cout de la requete.
  return terms
    .slice(0, 12)
    .map((term) => `${term}:*`)
    .join(" & ");
}

/**
 * Normalise la saisie du repli trigramme comme la colonne `searchTitle` l'est en base:
 * sans accent et en minuscules. Sans cette symetrie, « telescpoe » ne rapprocherait pas
 * « telescope », les trigrammes d'un caractere accentue etant differents.
 */
export function normalizeTrigramInput(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

type Row = {
  slug: string;
  title: string;
  summary: string;
  categoryName: string;
  categoryPath: string;
  rank: number;
};

/**
 * Recherche les articles publies correspondant a une saisie libre.
 *
 * Deux passes: la recherche plein texte francaise ponderee (titre > resume > corps), puis,
 * si elle rapporte peu, un rapprochement trigramme sur le titre normalise qui rattrape les
 * fautes de frappe ("telescpoe" trouve "telescope"). `word_similarity` compare la saisie au
 * mot du titre qui lui ressemble le plus, la ou `similarity` diluerait le score sur tout le
 * titre et manquerait les titres longs.
 */
export async function searchArticles(query: string, limit = 20): Promise<SearchResult[]> {
  const trimmed = query.trim();
  if (trimmed.length === 0) return [];

  const tsQuery = buildTsQuery(trimmed);
  const results: SearchResult[] = [];
  const seen = new Set<string>();

  if (tsQuery) {
    const rows = await prisma.$queryRaw<Row[]>`
      SELECT a.slug,
             a.title,
             a.summary,
             c.name AS "categoryName",
             c.path AS "categoryPath",
             ts_rank_cd(a."searchVector", to_tsquery('public.fr', ${tsQuery})) AS rank
        FROM "Article" a
        JOIN "Category" c ON c.id = a."categoryId"
       WHERE a.status = 'PUBLISHED'
         AND a."searchVector" @@ to_tsquery('public.fr', ${tsQuery})
       ORDER BY rank DESC, a.title ASC
       LIMIT ${limit}
    `;

    for (const row of rows) {
      seen.add(row.slug);
      results.push({ ...row, rank: Number(row.rank), match: "exact" });
    }
  }

  if (results.length >= FALLBACK_BELOW) return results;

  const approximate = normalizeTrigramInput(trimmed);
  const rows = await prisma.$queryRaw<Row[]>`
    SELECT a.slug,
           a.title,
           a.summary,
           c.name AS "categoryName",
           c.path AS "categoryPath",
           word_similarity(${approximate}, a."searchTitle") AS rank
      FROM "Article" a
      JOIN "Category" c ON c.id = a."categoryId"
     WHERE a.status = 'PUBLISHED'
       AND a."searchTitle" IS NOT NULL
       AND word_similarity(${approximate}, a."searchTitle") > ${TRIGRAM_THRESHOLD}
     ORDER BY rank DESC, a.title ASC
     LIMIT ${limit}
  `;

  for (const row of rows) {
    if (seen.has(row.slug)) continue;
    seen.add(row.slug);
    results.push({ ...row, rank: Number(row.rank), match: "approximatif" });
    if (results.length >= limit) break;
  }

  return results;
}
