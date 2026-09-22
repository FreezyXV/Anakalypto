import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { splitBlocks } from "./parse";
import type { RawBlock } from "./types";

/**
 * Lit tous les fichiers Markdown d'un repertoire de contenu et les decoupe en blocs.
 * Les fichiers sont traites par ordre alphabetique pour que deux executions produisent
 * le meme rapport d'erreurs.
 */
export async function loadContentBlocks(directory: string): Promise<RawBlock[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const blocks: RawBlock[] = [];
  for (const file of files) {
    const source = await readFile(path.join(directory, file), "utf8");
    blocks.push(...splitBlocks(source, file));
  }
  return blocks;
}
