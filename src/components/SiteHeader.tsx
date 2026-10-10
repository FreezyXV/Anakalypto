import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeaderFrame } from "./discovery/SiteHeaderFrame";

import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import { Glyph } from "./visual/Glyph";

/*
 * `prefetch: false` sur la recherche: la page est rendue a la demande
 * (`dynamic = "force-dynamic"`), Next ne peut donc pas la precharger et annule la requete,
 * ce qui remplit la console du navigateur d'abandons sans consequence mais trompeurs.
 */
const NAV = [
  { href: "/decouvrir", label: "Découvrir", prefetch: true },
  { href: "/categories", label: "Domaines", prefetch: true },
  { href: "/recherche", label: "Recherche", prefetch: false },
  { href: "/a-propos", label: "À propos", prefetch: true },
];

const MARK_COLORS = {
  "--g-a": "#ffc93c",
  "--g-l": "#fff0b8",
  "--g-d": "#c9981a",
} as CSSProperties;

/** Marque du site: une ampoule dans une pastille, et le nom en capitales condensees. */
function Brand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 no-underline"
      aria-label="Anakalypto, accueil"
    >
      <span className="disc h-10 w-10 p-1.5" style={MARK_COLORS}>
        <Glyph name="bulb" />
      </span>
      <span className="wordmark text-[1.45rem] leading-none min-[360px]:text-[1.7rem]">
        Anakalypto
      </span>
    </Link>
  );
}

/**
 * En-tete du site, compose pour le telephone d'abord.
 *
 * Sur petit ecran, deux rangees: la marque et la bascule de theme, puis le champ de
 * recherche sur toute la largeur, a portee du pouce. A partir de `md`, tout tient sur une
 * seule rangee et la navigation vient s'intercaler. Le parcours Decouvrir garde un en-tete
 * compact pour laisser la place au schema et aux commandes sur telephone.
 *
 * L'en-tete adhere au haut de la fenetre pour que la recherche reste disponible au milieu
 * d'une lecon longue.
 */
export function SiteHeader() {
  return (
    <SiteHeaderFrame>
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-5">
          <Brand />

          <nav
            aria-label="Navigation principale"
            className="ml-2 hidden items-center gap-1 md:flex"
          >
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} prefetch={item.prefetch} className="navlink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="header-search hidden w-72 xl:block">
              <SearchBox shortcut />
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Petit ecran: le champ prend la largeur, la navigation passe sous la marque. */}
        <div className="header-mobile mt-3 md:hidden">
          <SearchBox />
          <nav
            aria-label="Navigation principale"
            className="mt-3 flex flex-wrap items-center justify-between gap-1 text-sm"
          >
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} prefetch={item.prefetch} className="navlink">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </SiteHeaderFrame>
  );
}
