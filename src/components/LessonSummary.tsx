import type { CSSProperties } from "react";

import type { SectionSummary } from "@/lib/markdown";

import { Glyph } from "./visual/Glyph";

/** Couleurs franches des bandeaux, dans l'ordre; le texte du bandeau suit le contraste. */
const HEADS: ReadonlyArray<readonly [string, string]> = [
  ["--pop-blue", "#ffffff"],
  ["--pop-red", "#ffffff"],
  ["--pop-green", "#ffffff"],
  ["--pop-purple", "#ffffff"],
  ["--pop-orange", "#2a1500"],
  ["--pop-yellow", "#1a1400"],
];

/**
 * Apercu de la lecon en paves colores: un pave par section, avec son pictogramme et le debut
 * de son texte. Chaque pave renvoie a la section correspondante.
 */
export function LessonSummary({ sections }: { sections: readonly SectionSummary[] }) {
  if (sections.length < 2) return null;

  return (
    <section aria-labelledby="titre-apercu">
      <h2 id="titre-apercu" className="display text-3xl sm:text-4xl">
        La leçon en {sections.length} étapes
      </h2>

      <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => {
          const [head, on] = HEADS[index % HEADS.length] ?? HEADS[0]!;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="box block h-full no-underline transition-transform duration-100 hover:-translate-y-0.5"
                style={{ "--box": `var(${head})`, "--box-on": on } as CSSProperties}
              >
                <span className="box__head line-clamp-2 block">{section.title}</span>
                <span className="box__body flex items-start gap-3">
                  <span className="disc h-12 w-12 shrink-0 p-1.5">
                    <Glyph name={section.glyph} />
                  </span>
                  <span className="text-[0.92rem] leading-snug text-ink">{section.excerpt}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
