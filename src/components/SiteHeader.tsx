import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeaderFrame } from "./discovery/SiteHeaderFrame";

import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import { Glyph } from "./visual/Glyph";
import { MobileHeaderControls } from "./MobileHeaderControls";
import styles from "./SiteHeader.module.css";

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
    <Link href="/" className={styles.brand} aria-label="Anakalypto, accueil">
      <span className={`disc ${styles.mark}`} style={MARK_COLORS}>
        <Glyph name="bulb" />
      </span>
      <span className={`wordmark ${styles.wordmark}`}>Anakalypto</span>
    </Link>
  );
}

/** One compact mobile row, with separate search and navigation disclosures. */
export function SiteHeader() {
  return (
    <SiteHeaderFrame>
      <div className={styles.shell}>
        <div className={styles.row}>
          <Brand />
          <nav aria-label="Navigation principale" className={styles.desktopNav}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} prefetch={item.prefetch} className="navlink">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.desktopActions}>
            <div className={`header-search ${styles.desktopSearch}`}>
              <SearchBox shortcut />
            </div>
            <ThemeToggle />
          </div>
          <MobileHeaderControls items={NAV} />
        </div>
      </div>
    </SiteHeaderFrame>
  );
}
