import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * Fil d'Ariane. Le dernier element represente la page courante: il n'est pas un lien et
 * porte aria-current pour que les lecteurs d'ecran l'annoncent comme tel.
 */
export function Breadcrumb({ items }: { items: readonly Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="label">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-rule-strong">
                  /
                </span>
              )}
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors duration-150 hover:text-ink">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
