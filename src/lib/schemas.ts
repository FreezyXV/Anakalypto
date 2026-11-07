/**
 * Schemas pedagogiques des articles.
 *
 * Un schema s'ecrit dans le corps d'un article sous forme d'un bloc de code `schema` dont le
 * contenu est du YAML:
 *
 *   ```schema
 *   type: etapes
 *   titre: Du sable au lingot
 *   elements:
 *     - titre: Purifier
 *       texte: On obtient un silicium presque parfait.
 *   ```
 *
 * Le rendu est du HTML semantique (listes, titres, legendes) mis en forme par globals.css:
 * le texte reste du vrai texte, lisible par les lecteurs d'ecran, traduisible, net a toutes
 * les tailles et compatible avec le theme sombre. Aucune image n'est generee.
 *
 * La validation est partagee entre l'import du corpus (erreurs localisees) et le rendu (un
 * schema invalide n'est jamais affiche a moitie).
 */
import { load as loadYaml } from "js-yaml";
import { z } from "zod";

import { GLYPHS } from "@/components/visual/glyphs";

import { frenchSpacing } from "./typography";

const GLYPH_NAMES = Object.keys(GLYPHS) as [string, ...string[]];

const short = (max: number) => z.string().trim().min(1).max(max);
const icon = z.enum(GLYPH_NAMES).optional();

const step = z.object({
  titre: short(70),
  texte: short(220).optional(),
  icone: icon,
});

const common = {
  titre: short(110),
  legende: short(320).optional(),
};

const etapes = z.object({
  ...common,
  type: z.literal("etapes"),
  elements: z.array(step).min(2).max(8),
});

const cycle = z.object({
  ...common,
  type: z.literal("cycle"),
  elements: z.array(step).min(3).max(7),
});

const pyramide = z.object({
  ...common,
  type: z.literal("pyramide"),
  /** Du sommet vers la base. */
  niveaux: z.array(step).min(2).max(7),
});

const frise = z.object({
  ...common,
  type: z.literal("frise"),
  evenements: z
    .array(
      z.object({
        date: z.union([z.string(), z.number()]).transform(String).pipe(short(40)),
        titre: short(90),
        texte: short(220).optional(),
      }),
    )
    .min(2)
    .max(12),
});

const systeme = z.object({
  ...common,
  type: z.literal("systeme"),
  centre: short(60),
  icone: icon,
  parties: z
    .array(z.object({ nom: short(60), role: short(200), icone: icon }))
    .min(2)
    .max(12),
});

const comparaison = z.object({
  ...common,
  type: z.literal("comparaison"),
  colonnes: z
    .array(z.object({ titre: short(60), icone: icon, points: z.array(short(160)).min(1).max(8) }))
    .min(2)
    .max(3),
});

const barres = z.object({
  ...common,
  type: z.literal("barres"),
  unite: z.string().trim().max(30).default(""),
  valeurs: z
    .array(
      z.object({ label: short(60), valeur: z.number().nonnegative(), note: short(80).optional() }),
    )
    .min(2)
    .max(10),
});

const chiffres = z.object({
  ...common,
  type: z.literal("chiffres"),
  chiffres: z
    .array(
      z.object({
        valeur: z.union([z.string(), z.number()]).transform(String).pipe(short(24)),
        texte: short(140),
      }),
    )
    .min(1)
    .max(4),
});

const TONES = ["normal", "attention", "danger", "info"] as const;

const echelle = z
  .object({
    ...common,
    type: z.literal("echelle"),
    unite: z.string().trim().max(20).default(""),
    min: z.number(),
    max: z.number(),
    zones: z
      .array(
        z.object({
          de: z.number(),
          a: z.number(),
          label: short(80),
          ton: z.enum(TONES).default("info"),
        }),
      )
      .min(1)
      .max(8),
  })
  .superRefine((value, ctx) => {
    if (value.max <= value.min) {
      ctx.addIssue({ code: "custom", path: ["max"], message: "max doit etre superieur a min" });
    }
    value.zones.forEach((zone, index) => {
      if (zone.a <= zone.de || zone.de < value.min || zone.a > value.max) {
        ctx.addIssue({
          code: "custom",
          path: ["zones", index],
          message: "chaque zone doit verifier min <= de < a <= max",
        });
      }
    });
  });

export const schemaSpec = z.discriminatedUnion("type", [
  etapes,
  cycle,
  pyramide,
  frise,
  systeme,
  comparaison,
  barres,
  chiffres,
  echelle,
]);

export type SchemaSpec = z.infer<typeof schemaSpec>;

export const SCHEMA_TYPES = [
  "etapes",
  "cycle",
  "pyramide",
  "frise",
  "systeme",
  "comparaison",
  "barres",
  "chiffres",
  "echelle",
] as const;

export type SchemaParseResult =
  { ok: true; spec: SchemaSpec } | { ok: false; errors: { path: string; message: string }[] };

/** Lit et valide le contenu YAML d'un bloc `schema`. */
export function parseSchema(source: string): SchemaParseResult {
  let data: unknown;
  try {
    data = loadYaml(source);
  } catch (error) {
    const reason = error instanceof Error ? error.message.split("\n")[0] : String(error);
    return { ok: false, errors: [{ path: "", message: `YAML illisible: ${reason}` }] };
  }
  const parsed = schemaSpec.safeParse(data);
  if (parsed.success) return { ok: true, spec: parsed.data };
  return {
    ok: false,
    errors: parsed.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    })),
  };
}

/** Blocs `schema` d'un corps Markdown, avec la ligne de leur contenu (base 1). */
export function findSchemaBlocks(markdown: string): { line: number; source: string }[] {
  const blocks: { line: number; source: string }[] = [];
  const lines = markdown.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (!/^```schema\s*$/.test(lines[i] ?? "")) continue;
    const start = i + 1;
    let end = start;
    while (end < lines.length && !/^```\s*$/.test(lines[end] ?? "")) end++;
    blocks.push({ line: start + 1, source: lines.slice(start, end).join("\n") });
    i = end;
  }
  return blocks;
}

// ---- Rendu -------------------------------------------------------------------------------

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Texte affiche: typographie francaise puis echappement. */
function t(value: string): string {
  return escapeHtml(frenchSpacing(value));
}

function glyph(name: string | undefined, className = "schema-icon"): string {
  if (!name) return "";
  const body = GLYPHS[name as keyof typeof GLYPHS];
  if (!body) return "";
  return (
    `<span class="${className}" aria-hidden="true">` +
    `<svg class="glyph" viewBox="0 0 96 96" focusable="false">${body}</svg></span>`
  );
}

function stepContent(item: {
  titre: string;
  texte?: string | undefined;
  icone?: string | undefined;
}) {
  return (
    glyph(item.icone) +
    `<span class="schema-node__text"><strong class="schema-node__title">${t(item.titre)}</strong>` +
    (item.texte ? `<span class="schema-node__desc">${t(item.texte)}</span>` : "") +
    "</span>"
  );
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 })
    .format(value)
    .replace(/ /g, " ");
}

const LABELS: Record<SchemaSpec["type"], string> = {
  etapes: "Étapes",
  cycle: "Cycle",
  pyramide: "Priorités",
  frise: "Chronologie",
  systeme: "Système",
  comparaison: "Comparaison",
  barres: "Données",
  chiffres: "Chiffres clés",
  echelle: "Échelle",
};

function renderBody(spec: SchemaSpec): string {
  switch (spec.type) {
    case "etapes":
      return (
        `<ol class="schema-steps" data-count="${spec.elements.length}">` +
        spec.elements
          .map(
            (item, i) =>
              `<li class="schema-node schema-step"><span class="schema-num" aria-hidden="true">${
                i + 1
              }</span>${stepContent(item)}</li>`,
          )
          .join("") +
        "</ol>"
      );

    case "cycle": {
      const n = spec.elements.length;
      const nodes = spec.elements
        .map((item, i) => {
          const angle = (2 * Math.PI * i) / n - Math.PI / 2;
          const x = (50 + 35 * Math.cos(angle)).toFixed(2);
          const y = (50 + 35 * Math.sin(angle)).toFixed(2);
          return (
            `<li class="schema-node schema-cycle__node" style="--x:${x}%;--y:${y}%">` +
            `<span class="schema-num" aria-hidden="true">${i + 1}</span>${stepContent(item)}</li>`
          );
        })
        .join("");
      // Fleches de l'anneau: un arc et une pointe entre chaque paire de noeuds consecutifs.
      const r = 35;
      const at = (a: number) => [50 + r * Math.cos(a), 50 + r * Math.sin(a)] as const;
      const f = (v: number) => v.toFixed(2);
      const arcs = Array.from({ length: n }, (_, i) => {
        const gap = Math.min(0.62, Math.PI / n - 0.08);
        const a0 = (2 * Math.PI * i) / n - Math.PI / 2 + gap;
        const a1 = (2 * Math.PI * (i + 1)) / n - Math.PI / 2 - gap;
        const [x0, y0] = at(a0);
        const [x1, y1] = at(a1);
        // Pointe de fleche orientee selon la tangente, dans le sens horaire.
        const tx = -Math.sin(a1);
        const ty = Math.cos(a1);
        const tip = [x1 + tx * 2.4, y1 + ty * 2.4];
        const left = [x1 - ty * 1.7, y1 + tx * 1.7];
        const right = [x1 + ty * 1.7, y1 - tx * 1.7];
        return (
          `<path d="M ${f(x0)} ${f(y0)} A ${r} ${r} 0 0 1 ${f(x1)} ${f(y1)}"/>` +
          `<polygon points="${f(tip[0]!)},${f(tip[1]!)} ${f(left[0]!)},${f(left[1]!)} ${f(right[0]!)},${f(right[1]!)}"/>`
        );
      }).join("");
      return (
        `<div class="schema-cycle" data-count="${n}">` +
        `<svg class="schema-cycle__ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">` +
        `${arcs}</svg>` +
        `<ol class="schema-cycle__list">${nodes}</ol>` +
        `<p class="schema-cycle__loop" aria-hidden="true">Et le cycle recommence.</p>` +
        "</div>"
      );
    }

    case "pyramide": {
      const n = spec.niveaux.length;
      return (
        `<ol class="schema-pyramid">` +
        spec.niveaux
          .map((item, i) => {
            const width = n === 1 ? 100 : Math.round(52 + (48 * i) / (n - 1));
            return `<li class="schema-node schema-pyramid__level" style="--w:${width}%">${stepContent(
              item,
            )}</li>`;
          })
          .join("") +
        "</ol>"
      );
    }

    case "frise":
      return (
        `<ol class="schema-timeline">` +
        spec.evenements
          .map(
            (item) =>
              `<li class="schema-timeline__item"><span class="schema-timeline__date">${t(
                item.date,
              )}</span><span class="schema-node schema-timeline__card">${stepContent(item)}</span></li>`,
          )
          .join("") +
        "</ol>"
      );

    case "systeme":
      return (
        `<div class="schema-system">` +
        `<p class="schema-system__centre">${glyph(spec.icone)}<span>${t(spec.centre)}</span></p>` +
        `<ul class="schema-system__parts">` +
        spec.parties
          .map(
            (part) =>
              `<li class="schema-node schema-system__part">${stepContent({
                titre: part.nom,
                texte: part.role,
                icone: part.icone,
              })}</li>`,
          )
          .join("") +
        "</ul></div>"
      );

    case "comparaison":
      return (
        `<div class="schema-compare" data-count="${spec.colonnes.length}">` +
        spec.colonnes
          .map(
            (col, i) =>
              `<section class="schema-compare__col" data-tone="${i}">` +
              `<h3 class="schema-compare__title">${glyph(col.icone)}<span>${t(col.titre)}</span></h3>` +
              `<ul>${col.points.map((point) => `<li>${t(point)}</li>`).join("")}</ul></section>`,
          )
          .join("") +
        "</div>"
      );

    case "barres": {
      const max = Math.max(...spec.valeurs.map((v) => v.valeur)) || 1;
      const unit = spec.unite ? ` ${spec.unite}` : "";
      return (
        `<ul class="schema-bars">` +
        spec.valeurs
          .map((item) => {
            const width = Math.max(2, Math.round((item.valeur / max) * 100));
            return (
              `<li class="schema-bars__row"><span class="schema-bars__label">${t(item.label)}</span>` +
              `<span class="schema-bars__track"><span class="schema-bars__bar" style="--w:${width}%"></span></span>` +
              `<span class="schema-bars__value">${t(formatNumber(item.valeur) + unit)}${
                item.note ? ` <span class="schema-bars__note">${t(item.note)}</span>` : ""
              }</span></li>`
            );
          })
          .join("") +
        "</ul>"
      );
    }

    case "chiffres":
      return (
        `<ul class="schema-figures" data-count="${spec.chiffres.length}">` +
        spec.chiffres
          .map(
            (item) =>
              `<li class="schema-figures__item"><strong class="schema-figures__value">${t(
                item.valeur,
              )}</strong><span class="schema-figures__text">${t(item.texte)}</span></li>`,
          )
          .join("") +
        "</ul>"
      );

    case "echelle": {
      const span = spec.max - spec.min;
      const unit = spec.unite ? ` ${spec.unite}` : "";
      const pos = (v: number) => (((v - spec.min) / span) * 100).toFixed(2);
      const zones = spec.zones
        .map(
          (zone) =>
            `<span class="schema-scale__zone" data-tone="${zone.ton}" style="--from:${pos(
              zone.de,
            )}%;--to:${pos(zone.a)}%"></span>`,
        )
        .join("");
      return (
        `<div class="schema-scale">` +
        `<div class="schema-scale__bar" aria-hidden="true">${zones}</div>` +
        `<div class="schema-scale__ends" aria-hidden="true"><span>${t(
          formatNumber(spec.min) + unit,
        )}</span><span>${t(formatNumber(spec.max) + unit)}</span></div>` +
        `<ul class="schema-scale__legend">` +
        spec.zones
          .map(
            (zone) =>
              `<li data-tone="${zone.ton}"><span class="schema-scale__swatch" aria-hidden="true"></span>` +
              `<span><span class="schema-scale__range">${t(
                `${formatNumber(zone.de)} à ${formatNumber(zone.a)}${unit}`,
              )}</span> ${t(zone.label)}</span></li>`,
          )
          .join("") +
        "</ul></div>"
      );
    }
  }
}

/** Rend un schema valide en HTML. */
export function renderSchema(spec: SchemaSpec): string {
  return (
    `<figure class="schema schema--${spec.type}">` +
    `<figcaption class="schema__caption"><span class="schema__kind">${LABELS[spec.type]}</span>` +
    `<span class="schema__title">${t(spec.titre)}</span>` +
    (spec.legende ? `<span class="schema__legend">${t(spec.legende)}</span>` : "") +
    `</figcaption><div class="schema__body">${renderBody(spec)}</div></figure>`
  );
}

/** Lit, valide et rend un bloc `schema`. Un bloc invalide ne produit rien. */
export function renderSchemaSource(source: string): string | null {
  const result = parseSchema(source);
  return result.ok ? renderSchema(result.spec) : null;
}
