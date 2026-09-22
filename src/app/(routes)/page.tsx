import Link from "next/link";

import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { SearchBox } from "@/components/SearchBox";
import { getRecentArticles, getRootCategories, getSiteStats } from "@/lib/queries";
import { websiteJsonLd } from "@/lib/seo";

// Les articles changent au rythme des imports de corpus: une revalidation horaire suffit.
export const revalidate = 3600;

export default async function HomePage() {
  const [categories, recent, stats] = await Promise.all([
    getRootCategories(),
    getRecentArticles(6),
    getSiteStats(),
  ]);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      <section aria-labelledby="titre-accueil">
        <h1 id="titre-accueil" className="wordmark text-4xl sm:text-5xl">
          Anakalypto
        </h1>
        <p className="mt-3 max-w-reading text-lg leading-relaxed text-ink-muted">
          Du grec <span lang="grc">anakalypto</span>, dévoiler. Une encyclopédie francophone des
          sciences et des savoirs, où chaque article indique ses sources et la date à laquelle elles
          ont été vérifiées.
        </p>

        <div className="mt-7 max-w-reading">
          <SearchBox size="large" />
        </div>

        <p className="label mt-4">
          {stats.categories} catégories, {stats.articles} articles, {stats.sources} sources citées.
        </p>
      </section>

      <section aria-labelledby="titre-domaines" className="mt-16">
        <div className="rule-bottom flex items-baseline justify-between pb-2">
          <h2 id="titre-domaines" className="font-sans text-sm font-semibold">
            Les domaines
          </h2>
          <Link href="/categories" className="label transition-colors duration-150 hover:text-ink">
            Arborescence complète
          </Link>
        </div>

        {/*
          L'index des domaines est l'objet le plus caracteristique d'une encyclopedie:
          il tient lieu d'ouverture, a la place d'une banniere.
        */}
        <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.path}>
              <Link
                href={`/${category.path}`}
                className="group block no-underline transition-colors duration-150"
              >
                <span className="text-[1.05rem] leading-snug font-semibold group-hover:text-prussian">
                  {category.name}
                </span>
                <span className="label mt-0.5 block">
                  {category.articleCount} article{category.articleCount > 1 ? "s" : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-recents" className="mt-16">
        <h2 id="titre-recents" className="rule-bottom pb-2 font-sans text-sm font-semibold">
          Vérifiés récemment
        </h2>
        <div className="mt-2">
          {recent.map((article) => (
            <ArticleCard key={article.path} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
