import Link from "next/link";
import type { CSSProperties } from "react";

import { ArticleGrid } from "@/components/ArticleCard";
import { DomainTile } from "@/components/DomainTile";
import { JsonLd } from "@/components/JsonLd";
import { SearchBox } from "@/components/SearchBox";
import { Cover } from "@/components/visual/Cover";
import { getRootCategories, getShowcaseArticles, getSiteStats } from "@/lib/queries";
import { websiteJsonLd } from "@/lib/seo";
import { frenchSpacing } from "@/lib/typography";

// Les articles changent au rythme des imports de corpus: une revalidation horaire suffit.
export const revalidate = 3600;

/** Les trois temps d'une lecon, dans l'ordre ou on les vit. */
const STEPS = [
  {
    head: "--pop-blue",
    on: "#ffffff",
    title: "1. Lis en cartes",
    text: "Chaque leçon se découpe en petites étapes illustrées, à faire défiler comme sur un téléphone.",
  },
  {
    head: "--pop-orange",
    on: "#2a1500",
    title: "2. Teste-toi",
    text: "Un quiz de fin de leçon donne la réponse et l'explication tout de suite, sans note ni sanction.",
  },
  {
    head: "--pop-green",
    on: "#ffffff",
    title: "3. Vérifie",
    text: "Chaque leçon cite ses sources et la date à laquelle elles ont été vérifiées.",
  },
] as const;

/**
 * Positions des trois vignettes de la vitrine: une petite cascade de cartes posees sur la
 * table, decalees pour que le titre de chacune reste lisible.
 */
const STACK: ReadonlyArray<{ className: string }> = [
  { className: "left-0 top-0 w-[48%] -rotate-[4deg] z-10" },
  { className: "right-0 top-10 w-[48%] rotate-[3deg] z-10" },
  { className: "left-[26%] top-[17.5rem] w-[48%] -rotate-[1.5deg] z-10" },
];

export default async function HomePage() {
  const [categories, showcase, stats] = await Promise.all([
    getRootCategories(),
    getShowcaseArticles(12),
    getSiteStats(),
  ]);

  const hero = showcase.slice(0, 3);
  const discover = showcase.slice(3, 12);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      <section
        aria-labelledby="titre-accueil"
        className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]"
      >
        <div>
          <h1 id="titre-accueil" className="display text-[2.9rem] sm:text-6xl lg:text-7xl">
            Comprends comment marchent les choses
          </h1>
          <p className="mt-5 max-w-reading text-lg leading-relaxed text-ink-muted">
            Des leçons illustrées sur {categories.length} domaines, du corps humain à
            l&apos;intelligence artificielle. Chaque leçon se lit en cartes, se termine par un quiz
            et cite ses sources.
          </p>

          {/*
            Sur telephone, l'en-tete porte deja un champ de recherche pleine largeur, a
            quelques centimetres de celui-ci: le repeter n'ajoute rien et repousse le
            contenu. Il ne reparait qu'a partir de `md`, ou l'en-tete le reduit.
          */}
          <div className="mt-7 hidden max-w-reading md:block">
            <SearchBox size="large" />
          </div>

          <p className="mt-6 flex flex-wrap gap-2.5">
            <span className="chip">{stats.articles} leçons</span>
            <span className="chip">{categories.length} domaines</span>
            <span className="chip">{stats.sources} sources citées</span>
          </p>
        </div>

        <ul
          className="relative mx-auto hidden h-[33rem] w-full max-w-[34rem] lg:block"
          aria-label="Quelques leçons"
        >
          {hero.map((article, index) => (
            <li key={article.path} className={`absolute ${STACK[index]?.className ?? ""}`}>
              <Link
                href={`/${article.path}`}
                className="sticker block overflow-hidden transition-transform duration-150 hover:-translate-y-1"
              >
                <Cover title={article.title} path={article.categoryPath} />
                <span className="block border-t-[2.5px] border-line p-3 text-[0.98rem] leading-snug font-semibold">
                  {frenchSpacing(article.title)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-domaines" className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="titre-domaines" className="display text-3xl sm:text-5xl">
            Choisis un domaine
          </h2>
          <Link href="/categories" className="chip">
            Voir toute l&apos;arborescence
          </Link>
        </div>

        <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.path}>
              <DomainTile name={category.name} path={category.path} count={category.articleCount} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-decouvrir" className="mt-20">
        <h2 id="titre-decouvrir" className="display text-3xl sm:text-5xl">
          Des leçons pour commencer
        </h2>
        <div className="mt-7">
          <ArticleGrid
            articles={discover.map((article) => ({
              title: article.title,
              summary: article.summary,
              path: `/${article.path}`,
              categoryName: article.categoryName,
              categoryPath: article.categoryPath,
            }))}
          />
        </div>
      </section>

      <section aria-labelledby="titre-methode" className="mt-20">
        <h2 id="titre-methode" className="display text-3xl sm:text-5xl">
          Une leçon, trois temps
        </h2>
        <ol className="mt-7 grid gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.title}
              className="box"
              style={{ "--box": `var(${step.head})`, "--box-on": step.on } as CSSProperties}
            >
              <p className="box__head">{step.title}</p>
              <p className="box__body">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
