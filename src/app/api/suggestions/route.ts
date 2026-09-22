import { NextResponse } from "next/server";

import { searchArticles } from "@/lib/search";

// Les suggestions dependent de la saisie: pas de mise en cache statique.
export const dynamic = "force-dynamic";

/** Au-dela, la liste deroulante cesse d'aider et devient une seconde page de resultats. */
const MAX_SUGGESTIONS = 7;

/** Une saisie d'un seul caractere rapporterait presque tout le corpus. */
const MIN_QUERY_LENGTH = 2;

export type Suggestion = {
  title: string;
  href: string;
  categoryName: string;
  approximate: boolean;
};

/**
 * Suggestions de la recherche instantanee.
 *
 * Elle s'appuie sur `searchArticles`, la meme fonction que la page de resultats: une
 * suggestion ne peut donc pas pointer vers un article que la recherche complete ne
 * trouverait pas.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";

  if (query.length < MIN_QUERY_LENGTH) {
    return NextResponse.json({ suggestions: [] satisfies Suggestion[] });
  }

  const results = await searchArticles(query, MAX_SUGGESTIONS);
  const suggestions: Suggestion[] = results.map((result) => ({
    title: result.title,
    href: `/${result.categoryPath}/${result.slug}`,
    categoryName: result.categoryName,
    approximate: result.match === "approximatif",
  }));

  return NextResponse.json({ suggestions });
}
