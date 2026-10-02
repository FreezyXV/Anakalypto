import type { CSSProperties } from "react";
import Link from "next/link";

import { SearchBox } from "@/components/SearchBox";
import { Glyph } from "@/components/visual/Glyph";

const COLORS = {
  "--g-a": "#5b3df5",
  "--g-l": "#cfc6ff",
  "--g-d": "#3a28b0",
} as CSSProperties;

export default function NotFound() {
  return (
    <div className="grid items-center gap-10 py-6 md:grid-cols-[1fr_auto]">
      <div>
        <h1 className="display text-5xl sm:text-6xl">Cette page n&apos;existe pas</h1>
        <p className="mt-4 max-w-reading text-lg leading-relaxed text-ink-muted">
          L&apos;adresse demandée ne correspond à aucune leçon ni à aucun domaine. Elle a pu être
          modifiée, ou la leçon n&apos;est pas encore publiée.
        </p>

        <div className="mt-8 max-w-reading">
          <SearchBox size="large" />
        </div>

        <p className="mt-6">
          <Link href="/categories" className="btn">
            Parcourir les domaines
          </Link>
        </p>
      </div>

      <span className="disc hidden h-44 w-44 p-7 md:grid" style={COLORS}>
        <Glyph name="telescope" />
      </span>
    </div>
  );
}
