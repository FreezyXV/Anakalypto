import Link from "next/link";
import { frenchSpacing } from "@/lib/typography";

export type Crumb = { name: string; path: string };

/**
 * Fil d'Ariane. Le dernier element represente la page courante: il n'est pas un lien et
 * porte aria-current pour que les lecteurs d'ecran l'annoncent comme tel.
 */
export function Breadcrumb({ items }: { items: readonly Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {index > 0 && (
                <span aria-hidden="true" className="font-sans font-bold text-ink-muted">
                  ›
                </span>
              )}
              {last ? (
                <span aria-current="page" className="chip bg-highlight">
                  {frenchSpacing(item.name)}
                </span>
              ) : (
                <Link href={item.path} className="chip">
                  {frenchSpacing(item.name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
