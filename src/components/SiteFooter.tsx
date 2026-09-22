import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="rule-top mt-20">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="max-w-measure">
            <p className="wordmark text-lg">Anakalypto</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Du grec <span lang="grc">anakalypto</span>, dévoiler. Encyclopédie francophone des
              sciences et des savoirs, rédigée de manière originale et sourcée article par article.
            </p>
          </div>

          <nav aria-label="Navigation de pied de page" className="label space-y-2">
            <p>
              <Link
                href="/categories"
                className="no-underline transition-colors duration-150 hover:text-ink"
              >
                Toutes les catégories
              </Link>
            </p>
            <p>
              <Link
                href="/recherche"
                className="no-underline transition-colors duration-150 hover:text-ink"
              >
                Recherche
              </Link>
            </p>
            <p>
              <Link
                href="/a-propos"
                className="no-underline transition-colors duration-150 hover:text-ink"
              >
                Méthodologie et sources
              </Link>
            </p>
          </nav>
        </div>

        <p className="label rule-top mt-8 pt-4">
          Chaque article indique ses sources et la date de sa dernière vérification.
        </p>
      </div>
    </footer>
  );
}
