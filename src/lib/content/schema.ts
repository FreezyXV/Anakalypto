import { z } from "zod";

/**
 * Validation du frontmatter des fichiers de contenu.
 *
 * Les regles sont volontairement strictes: le seed refuse d'ecrire quoi que ce soit tant
 * qu'un bloc est invalide, un corpus a moitie importe etant plus couteux a diagnostiquer
 * qu'un import refuse.
 */

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CATEGORY_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const slug = z
  .string()
  .trim()
  .min(1, "slug vide")
  .regex(SLUG, "slug invalide: minuscules, chiffres et tirets uniquement");

const nonEmpty = (label: string) => z.string().trim().min(1, `${label} vide`);

/** Accepte une date YAML (analysee en Date par le parseur) ou une chaine ISO. */
const isoDate = z
  .union([z.string(), z.date()])
  .transform((value, ctx) => {
    if (value instanceof Date) {
      if (Number.isNaN(value.getTime())) {
        ctx.addIssue({ code: "custom", message: "date invalide" });
        return z.NEVER;
      }
      return value;
    }
    const trimmed = value.trim();
    if (!ISO_DATE.test(trimmed)) {
      ctx.addIssue({ code: "custom", message: "date attendue au format AAAA-MM-JJ" });
      return z.NEVER;
    }
    const parsed = new Date(`${trimmed}T00:00:00.000Z`);
    if (Number.isNaN(parsed.getTime())) {
      ctx.addIssue({ code: "custom", message: "date invalide" });
      return z.NEVER;
    }
    return parsed;
  });

/** Un champ absent, vide ou explicitement nul devient `null`. */
const optionalSlug = z
  .union([z.string(), z.null(), z.undefined()])
  .transform((value) => {
    if (value === null || value === undefined) return null;
    const trimmed = value.trim();
    return trimmed.length === 0 ? null : trimmed;
  })
  .pipe(z.union([slug, z.null()]));

/**
 * Une etiquette purement numerique ("1948") est analysee comme un nombre par YAML.
 * On la ramene a une chaine plutot que d'imposer des guillemets aux redacteurs.
 */
const tagValue = z
  .union([z.string(), z.number()])
  .transform((value) => String(value).trim())
  .pipe(z.string().min(1, "tag vide"));

export const sourceSchema = z.object({
  title: nonEmpty("titre de source"),
  url: z.url("URL de source invalide"),
  publisher: z.string().trim().min(1).optional(),
  date: z
    .union([z.string(), z.number(), z.date()])
    .transform((value) => (value instanceof Date ? String(value.getUTCFullYear()) : String(value)))
    .optional(),
});

export const categoryBlockSchema = z.object({
  type: z.literal("category"),
  title: nonEmpty("titre"),
  slug,
  categoryPath: z.string().trim().regex(CATEGORY_PATH, "categoryPath invalide"),
  level: z.number().int().min(0, "level doit etre positif ou nul"),
  parentSlug: optionalSlug,
  summary: nonEmpty("resume"),
});

export const articleBlockSchema = z.object({
  type: z.literal("article"),
  title: nonEmpty("titre"),
  slug,
  categoryPath: z.string().trim().regex(CATEGORY_PATH, "categoryPath invalide"),
  summary: nonEmpty("resume"),
  tags: z.array(tagValue).default([]),
  relatedArticles: z.array(slug).default([]),
  sources: z.array(sourceSchema).default([]),
  lastVerified: isoDate.optional(),
  status: z.enum(["published", "draft"]).default("draft"),
});

export type CategoryBlock = z.infer<typeof categoryBlockSchema>;
export type ArticleBlock = z.infer<typeof articleBlockSchema>;

/** Discrimine un bloc sur son champ `type` avant d'appliquer le schema correspondant. */
export const blockTypeSchema = z.object({
  type: z.enum(["category", "article"], {
    error: "type attendu: category ou article",
  }),
});
