import Link from "next/link";

import { frenchSpacing } from "@/lib/typography";
import { themeFor } from "@/lib/visual";

import { Glyph } from "./visual/Glyph";
import { themeVars } from "./visual/Cover";

/** Tuile d'un domaine: a-plat de sa couleur, pictogramme en pastille, nom et nombre de lecons. */
export function DomainTile({ name, path, count }: { name: string; path: string; count: number }) {
  const theme = themeFor(path);

  return (
    <Link
      href={`/${path}`}
      className="tile flex min-h-[10.5rem] flex-col justify-between gap-5 p-4 sm:p-5"
      style={themeVars(path)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-10 h-36 w-36 rounded-full bg-white/15"
      />
      <span className="disc h-[4.5rem] w-[4.5rem] p-2.5">
        <Glyph name={theme.glyph} />
      </span>
      <span className="relative block">
        <span className="block text-[1.35rem] leading-tight font-semibold">
          {frenchSpacing(name)}
        </span>
        <span className="mt-1 block font-sans text-sm font-bold opacity-90">
          {count} leçon{count > 1 ? "s" : ""}
        </span>
      </span>
    </Link>
  );
}
