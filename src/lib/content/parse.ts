import matter from "gray-matter";

import type { RawBlock } from "./types";

/**
 * Un fichier de contenu concatene plusieurs blocs. Chaque bloc s'ouvre par un delimiteur
 * `---` immediatement suivi d'une ligne `type:`; les blocs sont separes par un `---` isole.
 * On repere donc les ouvertures de frontmatter plutot que de decouper sur `---`, qui est
 * aussi une barre horizontale Markdown valide dans un corps d'article.
 */
const FRONTMATTER_OPENING = /^---\s*$/;
const TYPE_LINE = /^type:\s*\S/;

/** Decoupe un fichier de contenu en blocs bruts, en conservant le numero de ligne. */
export function splitBlocks(source: string, file: string): RawBlock[] {
  const lines = source.split(/\r?\n/);
  const starts: number[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const current = lines[index];
    const next = lines[index + 1];
    if (current !== undefined && next !== undefined) {
      if (FRONTMATTER_OPENING.test(current) && TYPE_LINE.test(next)) {
        starts.push(index);
      }
    }
  }

  return starts.map((start, position) => {
    const end = starts[position + 1] ?? lines.length;
    const raw = lines.slice(start, end).join("\n");
    const parsed = matter(raw);

    return {
      location: { file, line: start + 1 },
      data: parsed.data as Record<string, unknown>,
      body: stripBlockSeparator(parsed.content),
    };
  });
}

/**
 * Retire le `---` isole qui separe un bloc du suivant. Une barre horizontale interne au
 * corps est conservee: seule la sequence finale est consideree comme un separateur.
 */
export function stripBlockSeparator(body: string): string {
  return body.replace(/\n+---\s*$/, "").trim();
}
