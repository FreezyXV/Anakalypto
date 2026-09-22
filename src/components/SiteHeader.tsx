import Link from "next/link";

import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";

/*
 * `prefetch: false` sur la recherche: la page est rendue a la demande
 * (`dynamic = "force-dynamic"`), Next ne peut donc pas la precharger et annule la requete,
 * ce qui remplit la console du navigateur d'abandons sans consequence mais trompeurs.
 */
const NAV = [
  { href: "/categories", label: "Catégories", prefetch: true },
  { href: "/recherche", label: "Recherche", prefetch: false },
  { href: "/a-propos", label: "À propos", prefetch: true },
];

/**
 * En-tete du site, compose pour le telephone d'abord.
 *
 * Sur petit ecran, deux rangees: la marque et la bascule de theme, puis le champ de
 * recherche sur toute la largeur, a portee du pouce. A partir de `md`, tout tient sur une
 * seule rangee et la navigation vient s'intercaler. Le champ n'est jamais masque: c'est le
 * principal moyen d'entrer dans une encyclopedie de plusieurs centaines d'articles.
 *
 * L'en-tete adhere au haut de la fenetre pour que la recherche reste disponible au milieu
 * d'un article long.
 */
export function SiteHeader() {
  return (
    <header className="rule-bottom sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="flex items-center gap-x-6">
          <Link href="/" className="wordmark text-xl no-underline">
            Anakalypto
          </Link>

          <nav
            aria-label="Navigation principale"
            className="label hidden items-center gap-5 md:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.prefetch}
                className="no-underline transition-colors duration-150 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden w-64 md:block">
              <SearchBox shortcut />
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Petit ecran: le champ prend la largeur, la navigation passe sous la marque. */}
        <div className="mt-3 md:hidden">
          <SearchBox />
          <nav
            aria-label="Navigation principale"
            className="label mt-3 flex items-center justify-between"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.prefetch}
                className="-mx-1 px-1 py-1 no-underline transition-colors duration-150 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
