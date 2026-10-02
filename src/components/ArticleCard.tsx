import Link from "next/link";

import { getMainIllustration } from "@/lib/illustrations";
import { frenchSpacing } from "@/lib/typography";

import { ProgressBadge } from "./ProgressBadge";
import { Cover, themeVars } from "./visual/Cover";

export type ArticleCardData = {
  title: string;
  summary: string;
  path: string;
  categoryName?: string;
  categoryPath?: string;
  lastVerified?: Date | null;
};

/** Slug d'un article: dernier segment de son adresse. */
function slugOf(path: string): string {
  return path.replace(/\/+$/, "").split("/").at(-1) ?? "";
}

/**
 * Vignette d'une lecon: l'illustration (ou, a defaut, la couverture dessinee), le domaine, le
 * titre et le debut du resume. Toute la tuile est un lien: sur une grille de vignettes, la
 * cible est large et le titre reste lisible par les lecteurs d'ecran.
 */
export function ArticleCard({ article }: { article: ArticleCardData }) {
  const trimmed = article.path.replace(/^\//, "");
  const image = getMainIllustration(slugOf(article.path));

  return (
    <Link
      href={`/${trimmed}`}
      className="sticker group relative flex h-full flex-col overflow-hidden"
      style={themeVars(trimmed)}
    >
      {image ? (
        <div className="aspect-[16/10] overflow-hidden border-b-[2.5px] border-line bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- images deja optimisees par le script */}
          <img
            src={image.src}
            alt=""
            width={image.width ?? undefined}
            height={image.height ?? undefined}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <Cover
          title={article.title}
          path={trimmed}
          className="overflow-hidden border-b-[2.5px] border-line"
        />
      )}

      <ProgressBadge path={trimmed} />

      <div className="flex flex-1 flex-col p-4">
        {article.categoryName && (
          <p className="label w-fit rounded-full border-2 border-line bg-[color-mix(in_srgb,var(--t)_16%,var(--surface))] px-2.5 py-0.5 text-[0.72rem] text-ink">
            {frenchSpacing(article.categoryName)}
          </p>
        )}
        <h3 className="mt-2.5 text-[1.08rem] leading-snug font-semibold group-hover:underline">
          {frenchSpacing(article.title)}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[0.9rem] leading-relaxed text-ink-muted">
          {frenchSpacing(article.summary)}
        </p>
      </div>
    </Link>
  );
}

/** Grille de vignettes, de une a trois colonnes selon la largeur. */
export function ArticleGrid({ articles }: { articles: readonly ArticleCardData[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <li key={article.path}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
