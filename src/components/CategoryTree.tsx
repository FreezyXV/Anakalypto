"use client";

import Link from "next/link";
import { useRef } from "react";

import type { CategoryNode } from "@/lib/queries";
import { frenchSpacing } from "@/lib/typography";

/**
 * Arborescence depliable des categories.
 *
 * Le depliage repose sur `details`/`summary` natifs: sans JavaScript, chaque branche
 * s'ouvre et se ferme normalement, et le contenu reste dans le document pour les moteurs
 * d'indexation. Les deux boutons de tete ne sont qu'un raccourci sur ce meme mecanisme,
 * ils agissent sur la propriete `open` des elements deja rendus.
 */
export function CategoryTree({ tree }: { tree: readonly CategoryNode[] }) {
  const container = useRef<HTMLDivElement>(null);

  function setAll(open: boolean) {
    const branches = container.current?.querySelectorAll("details");
    branches?.forEach((branch) => {
      branch.open = open;
    });
  }

  return (
    <div ref={container}>
      <div className="rule-bottom flex flex-wrap items-center gap-x-4 gap-y-2 pb-2">
        <span className="label">{tree.length} domaines</span>
        <div className="ml-auto flex gap-2">
          <button type="button" onClick={() => setAll(true)} className="tree-control">
            Tout déplier
          </button>
          <button type="button" onClick={() => setAll(false)} className="tree-control">
            Tout replier
          </button>
        </div>
      </div>

      <ul className="mt-2">
        {tree.map((root) => (
          <li key={root.path} className="rule-bottom">
            <Branch node={root} defaultOpen={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Rend une branche, recursivement. Une feuille devient un simple lien. */
function Branch({ node, defaultOpen }: { node: CategoryNode; defaultOpen: boolean }) {
  const count = `${node.articleCount} article${node.articleCount > 1 ? "s" : ""}`;

  if (node.children.length === 0) {
    return (
      <div className="flex items-baseline gap-x-3 py-1.5">
        <Link
          href={`/${node.path}`}
          className="text-[0.95rem] no-underline transition-colors duration-150 hover:text-accent"
        >
          {frenchSpacing(node.name)}
        </Link>
        {node.articleCount > 0 && <span className="label ml-auto shrink-0">{count}</span>}
      </div>
    );
  }

  return (
    <details open={defaultOpen} className="tree-branch">
      <summary className="tree-summary">
        <span className="tree-marker" aria-hidden="true" />
        <span className={node.level === 0 ? "font-sans text-sm font-semibold" : "text-[0.95rem]"}>
          {frenchSpacing(node.name)}
        </span>
        <span className="label ml-auto shrink-0">{count}</span>
      </summary>

      <div className="border-l border-rule pb-2 pl-3 sm:pl-4">
        <p className="py-1.5">
          <Link
            href={`/${node.path}`}
            className="label no-underline transition-colors duration-150 hover:text-ink"
          >
            Voir la page {frenchSpacing(node.name)}
          </Link>
        </p>
        <ul>
          {node.children.map((child) => (
            <li key={child.path}>
              <Branch node={child} defaultOpen={false} />
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
