"use client";

import { useEffect, useState } from "react";

import type { TocEntry } from "@/lib/markdown";

/**
 * Sommaire de l'article, construit a partir des titres du corps. Les identifiants sont
 * poses par rehype-slug au moment du rendu Markdown, ce qui garantit leur concordance.
 *
 * Deux comportements s'ajoutent a la liste de liens:
 * - le titre de la section en cours de lecture est mis en evidence, suivi par un
 *   IntersectionObserver plutot que par un calcul de position a chaque defilement ;
 * - sur petit ecran le sommaire est replie dans un `details`, ou il n'occupe qu'une ligne
 *   avant le corps de l'article.
 */
export function Toc({ entries }: { entries: readonly TocEntry[] }) {
  const current = useCurrentSection(entries);

  if (entries.length < 2) return null;

  const list = (
    <ol className="mt-3 space-y-1.5">
      {entries.map((entry) => {
        const active = entry.id === current;
        return (
          <li key={entry.id} className={entry.level === 3 ? "pl-4" : undefined}>
            <a
              href={`#${entry.id}`}
              aria-current={active ? "location" : undefined}
              className={`block border-l-2 py-0.5 pl-2.5 text-sm no-underline transition-colors duration-150 ${
                active
                  ? "border-accent text-ink"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {entry.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Petit ecran: replie, pour ne pas reculer le debut du texte. */}
      <details className="rule-top rule-bottom py-3 lg:hidden">
        <summary className="label cursor-pointer list-none">
          Sommaire
          <span aria-hidden="true" className="ml-1.5">
            +
          </span>
        </summary>
        {list}
      </details>

      {/* Grand ecran: colonne laterale, toujours depliee. */}
      <nav aria-labelledby="sommaire-titre" className="rule-top hidden pt-4 lg:block">
        <h2 id="sommaire-titre" className="label">
          Sommaire
        </h2>
        {list}
      </nav>
    </>
  );
}

/**
 * Identifiant du titre le plus haut encore visible, ou du dernier franchi.
 *
 * La marge inferieure de -65% restreint la zone de declenchement au premier tiers de
 * l'ecran: sans elle, un titre situe en bas de la fenetre serait deja compte comme
 * courant alors que le lecteur n'y est pas parvenu.
 */
function useCurrentSection(entries: readonly TocEntry[]): string | null {
  const [current, setCurrent] = useState<string | null>(null);
  const ids = entries.map((entry) => entry.id).join("|");

  useEffect(() => {
    const identifiers = ids.length > 0 ? ids.split("|") : [];
    if (identifiers.length === 0) return;

    const headings = identifiers
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (headings.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          if (record.isIntersecting) visible.add(record.target.id);
          else visible.delete(record.target.id);
        }

        const first = identifiers.find((id) => visible.has(id));
        if (first) {
          setCurrent(first);
          return;
        }

        // Aucun titre dans la zone: on retient le dernier franchi vers le haut.
        const passed = headings.filter((heading) => heading.getBoundingClientRect().top < 0).at(-1);
        setCurrent(passed?.id ?? null);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );

    for (const heading of headings) observer.observe(heading);
    return () => observer.disconnect();
  }, [ids]);

  return current;
}
