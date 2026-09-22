import Link from "next/link";
import type { Metadata } from "next";

import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchBox } from "@/components/SearchBox";
import { searchArticles } from "@/lib/search";
import { pageMetadata } from "@/lib/seo";

// Les resultats dependent de la requete: la page est rendue a la demande.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Recherche",
    description:
      "Rechercher un article dans Anakalypto. La recherche ignore les accents et tolère les " +
      "fautes de frappe.",
    path: "/recherche",
  }),
  // Les pages de resultats n'ont pas vocation a etre indexees.
  robots: { index: false, follow: true },
};

type PageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = params["q"];
  const query = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const results = query.length > 0 ? await searchArticles(query, 30) : [];
  const approximate = results.some((result) => result.match === "approximatif");

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Accueil", path: "/" },
          { name: "Recherche", path: "/recherche" },
        ]}
      />

      <h1 className="mt-4 text-3xl leading-tight font-semibold">Recherche</h1>

      <div className="mt-6 max-w-reading">
        <SearchBox size="large" defaultValue={query} autoFocus={query.length === 0} />
      </div>

      {query.length === 0 ? (
        <p className="mt-8 max-w-reading leading-relaxed text-ink-muted">
          La recherche porte sur le titre, le résumé et le corps des articles publiés. Elle ignore
          les accents et accepte les débuts de mots : <em>électri</em> trouve
          <em> électricité</em>.
        </p>
      ) : (
        <section aria-labelledby="titre-resultats" className="mt-10">
          <h2 id="titre-resultats" className="rule-bottom pb-2 font-sans text-sm font-semibold">
            {results.length === 0
              ? "Aucun résultat"
              : `${results.length} résultat${results.length > 1 ? "s" : ""} pour ${query}`}
          </h2>

          {results.length === 0 ? (
            <p className="mt-6 max-w-reading leading-relaxed text-ink-muted">
              Aucun article ne correspond à cette recherche. Essayez un terme plus général, ou
              parcourez{" "}
              <Link href="/categories" className="text-accent">
                l&apos;arborescence des catégories
              </Link>
              .
            </p>
          ) : (
            <>
              {approximate && (
                <p className="label mt-3">
                  Les résultats signalés comme approximatifs proviennent d&apos;un rapprochement sur
                  le titre, qui tolère les fautes de frappe.
                </p>
              )}
              <ol className="mt-2">
                {results.map((result) => (
                  <li key={result.slug} className="rule-top py-5">
                    <h3 className="text-lg leading-snug font-semibold">
                      <Link
                        href={`/${result.categoryPath}/${result.slug}`}
                        className="no-underline transition-colors duration-150 hover:text-accent"
                      >
                        {result.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
                      {result.summary}
                    </p>
                    <p className="label mt-2 flex flex-wrap items-center gap-x-3">
                      <Link
                        href={`/${result.categoryPath}`}
                        className="no-underline transition-colors duration-150 hover:text-ink"
                      >
                        {result.categoryName}
                      </Link>
                      {result.match === "approximatif" && <span>Rapprochement approximatif</span>}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </section>
      )}
    </>
  );
}
