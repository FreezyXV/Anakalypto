import {
  articleBlockSchema,
  blockTypeSchema,
  categoryBlockSchema,
  type ArticleBlock,
  type CategoryBlock,
} from "./schema";
import type { BlockLocation, ContentIssue, RawBlock } from "./types";

export type ValidatedCategory = CategoryBlock & { location: BlockLocation };
export type ValidatedArticle = ArticleBlock & { location: BlockLocation; content: string };

export type ValidationResult = {
  categories: ValidatedCategory[];
  articles: ValidatedArticle[];
  issues: ContentIssue[];
};

/** Segment final d'un chemin de categorie. */
function lastSegment(path: string): string {
  const segments = path.split("/");
  return segments[segments.length - 1] ?? "";
}

/** Avant-dernier segment, c'est-a-dire le slug de la categorie parente. */
function parentSegment(path: string): string | null {
  const segments = path.split("/");
  return segments.length < 2 ? null : (segments[segments.length - 2] ?? null);
}

/**
 * Valide un corpus complet: forme de chaque bloc, puis coherence d'ensemble
 * (unicite des slugs, arborescence des categories, references croisees).
 *
 * La fonction n'ecrit rien et ne leve pas: elle renvoie la liste exhaustive des
 * anomalies pour que l'appelant puisse toutes les afficher d'un coup.
 */
export function validateCorpus(blocks: RawBlock[]): ValidationResult {
  const issues: ContentIssue[] = [];
  const categories: ValidatedCategory[] = [];
  const articles: ValidatedArticle[] = [];

  const addIssue = (location: BlockLocation, field: string, message: string) => {
    issues.push({ file: location.file, line: location.line, field, message });
  };

  for (const block of blocks) {
    const kind = blockTypeSchema.safeParse(block.data);
    if (!kind.success) {
      addIssue(block.location, "type", "type attendu: category ou article");
      continue;
    }

    if (kind.data.type === "category") {
      const parsed = categoryBlockSchema.safeParse(block.data);
      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          addIssue(block.location, issue.path.join("."), issue.message);
        }
        continue;
      }
      categories.push({ ...parsed.data, location: block.location });
      continue;
    }

    const parsed = articleBlockSchema.safeParse(block.data);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        addIssue(block.location, issue.path.join("."), issue.message);
      }
      continue;
    }
    if (block.body.trim().length === 0) {
      addIssue(block.location, "content", "corps de l'article vide");
      continue;
    }
    articles.push({ ...parsed.data, location: block.location, content: block.body });
  }

  // Unicite des slugs, par espace de noms.
  const categoryBySlug = new Map<string, ValidatedCategory>();
  for (const category of categories) {
    const existing = categoryBySlug.get(category.slug);
    if (existing) {
      addIssue(
        category.location,
        "slug",
        `slug de categorie deja utilise a ${existing.location.file}:${existing.location.line}`,
      );
      continue;
    }
    categoryBySlug.set(category.slug, category);
  }

  const articleBySlug = new Map<string, ValidatedArticle>();
  for (const article of articles) {
    const existing = articleBySlug.get(article.slug);
    if (existing) {
      addIssue(
        article.location,
        "slug",
        `slug d'article deja utilise a ${existing.location.file}:${existing.location.line}`,
      );
      continue;
    }
    articleBySlug.set(article.slug, article);
  }

  // Unicite des chemins de categorie: ils servent directement d'URL.
  const categoryByPath = new Map<string, ValidatedCategory>();
  for (const category of categories) {
    const existing = categoryByPath.get(category.categoryPath);
    if (existing) {
      addIssue(
        category.location,
        "categoryPath",
        `chemin deja utilise a ${existing.location.file}:${existing.location.line}`,
      );
      continue;
    }
    categoryByPath.set(category.categoryPath, category);
  }

  // Coherence de l'arborescence.
  for (const category of categories) {
    const depth = category.categoryPath.split("/").length;

    if (lastSegment(category.categoryPath) !== category.slug) {
      addIssue(
        category.location,
        "categoryPath",
        `le dernier segment du chemin doit etre le slug de la categorie ("${category.slug}")`,
      );
    }

    if (category.level !== depth - 1) {
      addIssue(
        category.location,
        "level",
        `level ${category.level} incoherent avec la profondeur du chemin (attendu ${depth - 1})`,
      );
    }

    const expectedParent = parentSegment(category.categoryPath);
    if (category.level === 0) {
      if (category.parentSlug !== null) {
        addIssue(category.location, "parentSlug", "une categorie de niveau 0 n'a pas de parent");
      }
    } else if (category.parentSlug === null) {
      addIssue(category.location, "parentSlug", "parentSlug requis pour une categorie imbriquee");
    } else if (category.parentSlug !== expectedParent) {
      addIssue(
        category.location,
        "parentSlug",
        `parentSlug "${category.parentSlug}" incoherent avec le chemin (attendu "${expectedParent}")`,
      );
    } else if (!categoryBySlug.has(category.parentSlug)) {
      addIssue(category.location, "parentSlug", `categorie parente "${category.parentSlug}" absente`);
    }
  }

  // Rattachement et references croisees des articles.
  for (const article of articles) {
    if (!categoryByPath.has(article.categoryPath)) {
      addIssue(
        article.location,
        "categoryPath",
        `aucune categorie ne correspond au chemin "${article.categoryPath}"`,
      );
    }

    if (article.status === "published" && article.sources.length === 0) {
      addIssue(
        article.location,
        "sources",
        "un article publie doit citer au moins une source verifiable",
      );
    }

    const seenRelated = new Set<string>();
    for (const related of article.relatedArticles) {
      if (related === article.slug) {
        addIssue(article.location, "relatedArticles", "un article ne peut pas se referencer lui-meme");
        continue;
      }
      if (seenRelated.has(related)) {
        addIssue(article.location, "relatedArticles", `doublon dans relatedArticles: "${related}"`);
        continue;
      }
      seenRelated.add(related);
      if (!articleBySlug.has(related)) {
        addIssue(article.location, "relatedArticles", `article lie introuvable: "${related}"`);
      }
    }
  }

  // Collision d'URL entre un article et une categorie: /<chemin>/<slug> doit etre unique.
  for (const article of articles) {
    const url = `${article.categoryPath}/${article.slug}`;
    const clash = categoryByPath.get(url);
    if (clash) {
      addIssue(
        article.location,
        "slug",
        `l'URL "${url}" est deja celle de la categorie definie a ${clash.location.file}:${clash.location.line}`,
      );
    }
  }

  issues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

  return { categories, articles, issues };
}
