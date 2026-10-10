import type { CSSProperties } from "react";
import Link from "next/link";

import { Glyph } from "./visual/Glyph";

const MARK_COLORS = {
  "--g-a": "#ffc93c",
  "--g-l": "#fff0b8",
  "--g-d": "#c9981a",
} as CSSProperties;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-[2.5px] border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap gap-x-14 gap-y-8">
          <div className="max-w-md">
            <p className="flex items-center gap-2.5">
              <span className="disc h-10 w-10 p-1.5" style={MARK_COLORS}>
                <Glyph name="bulb" />
              </span>
              <span className="wordmark text-2xl leading-none">Anakalypto</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Du grec <span lang="grc">anakalypto</span>, dévoiler. Des leçons illustrées pour
              comprendre comment marchent les choses, rédigées de manière originale et sourcées
              leçon par leçon.
            </p>
          </div>

          <nav
            aria-label="Navigation de pied de page"
            className="space-y-2 font-sans text-sm font-bold"
          >
            <p>
              <Link href="/decouvrir">Découvrir en jouant</Link>
            </p>
            <p>
              <Link href="/categories">Tous les domaines</Link>
            </p>
            <p>
              <Link href="/recherche">Recherche</Link>
            </p>
            <p>
              <Link href="/a-propos">Méthodologie et sources</Link>
            </p>
          </nav>
        </div>

        <p className="label rule-top mt-8 pt-4">
          Chaque leçon indique ses sources et la date de leur dernière vérification.
        </p>
      </div>
    </footer>
  );
}
