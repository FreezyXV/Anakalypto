import type { ValidationResult } from "./validate";

/** Import partiel : conserve les autres articles, catégories et étiquettes en base. */
export function publishedCorpus(corpus: ValidationResult): ValidationResult {
  if (corpus.issues.length) throw new Error("Le corpus doit être valide avant toute sélection.");
  const published = corpus.articles.filter((article) => article.status === "published");
  const slugs = new Set(published.map((article) => article.slug));
  const paths = new Set<string>();
  for (const article of published) {
    const segments = article.categoryPath.split("/");
    for (let length = 1; length <= segments.length; length++) {
      paths.add(segments.slice(0, length).join("/"));
    }
  }
  return {
    categories: corpus.categories.filter((category) => paths.has(category.categoryPath)),
    articles: published.map((article) => ({
      ...article,
      relatedArticles: article.relatedArticles.filter((slug) => slugs.has(slug)),
    })),
    issues: [],
  };
}
