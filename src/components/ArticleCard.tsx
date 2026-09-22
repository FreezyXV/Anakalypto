import Link from "next/link";

import { formatDate, isoDate } from "@/lib/seo";

export type ArticleCardData = {
  title: string;
  summary: string;
  path: string;
  categoryName?: string;
  categoryPath?: string;
  lastVerified?: Date | null;
};

/**
 * Entree d'article dans une liste. Le titre porte le lien: une zone cliquable entiere
 * empecherait de selectionner le resume et noierait la cible pour les lecteurs d'ecran.
 */
export function ArticleCard({ article }: { article: ArticleCardData }) {
  const verified = formatDate(article.lastVerified ?? null);

  return (
    <article className="rule-top py-5">
      <h3 className="text-lg leading-snug font-semibold">
        <Link href={article.path} className="transition-colors duration-150 hover:text-prussian">
          {article.title}
        </Link>
      </h3>
      <p className="mt-1.5 max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
        {article.summary}
      </p>
      <p className="label mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        {article.categoryName && article.categoryPath && (
          <Link
            href={article.categoryPath}
            className="transition-colors duration-150 hover:text-ink"
          >
            {article.categoryName}
          </Link>
        )}
        {verified && (
          <span>
            Vérifié le <time dateTime={isoDate(article.lastVerified ?? null)}>{verified}</time>
          </span>
        )}
      </p>
    </article>
  );
}
