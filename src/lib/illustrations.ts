import manifest from "./illustrations.manifest.json";

/**
 * Illustrations deposees pour les articles.
 *
 * Le manifeste est produit par `scripts/illustrations.mjs` a partir du contenu de
 * public/illustrations/, avant chaque `dev` et chaque `build`. Un article sans entree n'a
 * pas d'illustration: l'interface affiche alors une couverture dessinee a partir de son
 * domaine et de son titre.
 */
export type Illustration = {
  src: string;
  width: number | null;
  height: number | null;
};

type Entry = { file: string; width: number | null; height: number | null };

const ENTRIES = manifest as Record<string, Entry[]>;

/** Toutes les illustrations d'un article, la principale en premier. */
export function getIllustrations(slug: string): Illustration[] {
  return (ENTRIES[slug] ?? []).map((entry) => ({
    src: `/illustrations/${entry.file}`,
    width: entry.width,
    height: entry.height,
  }));
}

/** Illustration principale d'un article, ou null s'il n'en a pas. */
export function getMainIllustration(slug: string): Illustration | null {
  return getIllustrations(slug)[0] ?? null;
}
