/**
 * Normalise une chaine en slug utilisable dans une URL: minuscules, sans accent,
 * separateurs reduits a un tiret unique.
 */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['’]/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
