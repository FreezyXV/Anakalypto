import type { TocEntry } from "@/lib/markdown";

/**
 * Sommaire de l'article, construit a partir des titres du corps. Les identifiants sont
 * poses par rehype-slug au moment du rendu Markdown, ce qui garantit leur concordance.
 */
export function Toc({ entries }: { entries: readonly TocEntry[] }) {
  if (entries.length < 2) return null;

  return (
    <nav aria-labelledby="sommaire-titre" className="rule-top pt-4">
      <h2 id="sommaire-titre" className="label">
        Sommaire
      </h2>
      <ol className="mt-3 space-y-1.5">
        {entries.map((entry) => (
          <li key={entry.id} className={entry.level === 3 ? "pl-4" : undefined}>
            <a
              href={`#${entry.id}`}
              className="text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
