import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import type { Root as MdastRoot, Paragraph, PhrasingContent, RootContent } from "mdast";
import type {
  Element,
  ElementContent,
  Root as HastRoot,
  RootContent as HastRootContent,
} from "hast";

import { GLYPHS } from "@/components/visual/glyphs";

import { frenchSpacing } from "./typography";
import { pickGlyph, type GlyphName } from "./visual";

/** Entree de la table des matieres, dans l'ordre du document. */
export type TocEntry = {
  id: string;
  text: string;
  /** 2 pour un titre de section, 3 pour une sous-section. */
  level: 2 | 3;
};

/** Resume d'une section, pour les paves de l'apercu de la lecon. */
export type SectionSummary = {
  id: string;
  title: string;
  /** Debut du premier paragraphe de la section. */
  excerpt: string;
  glyph: GlyphName;
};

export type RenderedMarkdown = {
  html: string;
  toc: TocEntry[];
  sections: SectionSummary[];
};

type RenderOptions = {
  /** Chemin de categorie de l'article: il oriente le choix des pictogrammes. */
  categoryPath?: string;
};

/**
 * Marqueur d'illustration utilise dans le corpus, en attendant les images reelles:
 * `[Emplacement image : description, legende et texte alternatif a fournir ulterieurement.]`
 */
const FIGURE_PLACEHOLDER = /^\[Emplacement image\s*:\s*([\s\S]+?)\]$/;

/**
 * Titre de section dont le contenu fait doublon avec les donnees structurees: la liste des
 * articles lies est rendue a partir de la base, avec de vrais liens.
 */
const REDUNDANT_SECTIONS = new Set(["articles lies"]);

function normalizeHeading(value: string): string {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();
}

/** Concatene le texte brut d'un ensemble de noeuds mdast. */
function plainText(nodes: readonly PhrasingContent[] | readonly RootContent[]): string {
  let text = "";
  for (const node of nodes) {
    if ("value" in node && typeof node.value === "string") {
      text += node.value;
    } else if ("children" in node && Array.isArray(node.children)) {
      text += plainText(node.children as RootContent[]);
    }
  }
  return text;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Retire les sections dont le contenu est deja rendu a partir de donnees structurees.
 * La coupe va du titre jusqu'au prochain titre de niveau equivalent ou superieur.
 */
function removeRedundantSections() {
  return (tree: MdastRoot) => {
    const children = tree.children;
    const kept: RootContent[] = [];
    let skippingFrom: number | null = null;

    for (const node of children) {
      if (node.type === "heading") {
        const label = normalizeHeading(plainText(node.children));
        if (REDUNDANT_SECTIONS.has(label)) {
          skippingFrom = node.depth;
          continue;
        }
        if (skippingFrom !== null && node.depth <= skippingFrom) {
          skippingFrom = null;
        }
      }
      if (skippingFrom === null) kept.push(node);
    }

    tree.children = kept;
  };
}

/**
 * Convertit les marqueurs d'illustration en cadre neutre legende.
 *
 * Les emplacements du corpus sont tous poses dans le corps des articles, donc rendus par
 * cette chaine: le balisage est produit ici, et sa mise en forme vit dans la classe
 * `figure-placeholder` de globals.css. L'attribut alt sera renseigne avec l'image.
 */
function transformFigurePlaceholders() {
  return (tree: MdastRoot) => {
    visit(tree, "paragraph", (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;
      const match = FIGURE_PLACEHOLDER.exec(plainText(node.children).replace(/\s+/g, " ").trim());
      if (!match) return;

      const caption = match[1];
      if (!caption) return;

      const html =
        '<figure class="figure-placeholder" role="group">' +
        '<div class="figure-placeholder__frame" aria-hidden="true"></div>' +
        `<figcaption class="figure-placeholder__caption">Illustration à venir : ${escapeHtml(
          caption
            .replace(/,\s*legende et texte alternatif a fournir ulterieurement\.?$/i, "")
            .replace(/,\s*légende et texte alternatif à fournir ultérieurement\.?$/i, "")
            .trim(),
        )}</figcaption>` +
        "</figure>";

      parent.children[index] = { type: "html", value: html };
    });
  };
}

/**
 * Applique la typographie francaise aux textes rendus, en laissant le code intact: une
 * espace insecable inseree dans un extrait de code en changerait le sens.
 */
function applyFrenchSpacing() {
  return (tree: HastRoot) => {
    visit(
      tree,
      "text",
      (node: { value: string }, _index, parent: Element | HastRoot | undefined) => {
        if (
          parent &&
          "tagName" in parent &&
          (parent.tagName === "code" || parent.tagName === "pre")
        ) {
          return;
        }
        node.value = frenchSpacing(node.value);
      },
    );
  };
}

/** Texte brut d'un noeud hast. */
function hastText(node: HastRootContent | ElementContent): string {
  if (node.type === "text") return node.value;
  if ("children" in node) return node.children.map((child) => hastText(child)).join("");
  return "";
}

const LESSON_VARIANTS: Record<string, string> = {
  "en bref": "lesson-card--intro",
  "a retenir": "lesson-card--recap",
};

/** Pictogrammes fixes des deux sections que tout article partage. */
const VARIANT_GLYPHS: Record<string, GlyphName> = {
  "en bref": "bulb",
  "a retenir": "star",
};

/** Debut d'un texte, coupe a la fin d'une phrase quand c'est possible. */
function excerptOf(text: string): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= 150) return flat;
  const head = flat.slice(0, 150);
  const stop = Math.max(head.lastIndexOf(". "), head.lastIndexOf(" ; "));
  if (stop > 60) return head.slice(0, stop + 1);
  return `${head.slice(0, head.lastIndexOf(" ")).trimEnd()}...`;
}

/**
 * Regroupe chaque section de niveau 2 dans une carte de lecon.
 *
 * Le titre garde son identifiant et reste un h2: le sommaire, les ancres et l'indexation ne
 * changent pas. La carte recoit un pictogramme choisi d'apres le titre, pose au bout de
 * l'en-tete, et le resume de la section est collecte pour l'apercu en paves.
 */
function groupLessonSections(summaries: SectionSummary[], categoryPath: string | undefined) {
  return (tree: HastRoot) => {
    const grouped: HastRootContent[] = [];
    let current: Element | null = null;
    let excerpt = "";
    let heading: Element | null = null;

    const closeSection = () => {
      if (!current || !heading) return;
      const title = hastText(heading).trim();
      const id = typeof heading.properties?.["id"] === "string" ? heading.properties["id"] : "";
      const variant = LESSON_VARIANTS[normalizeHeading(title)];
      if (!variant && id && excerpt.length > 0) {
        summaries.push({
          id,
          title: frenchSpacing(title),
          excerpt: frenchSpacing(excerptOf(excerpt)),
          glyph: pickGlyph(title, categoryPath),
        });
      }
    };

    for (const node of tree.children) {
      if (node.type === "element" && node.tagName === "h2") {
        closeSection();
        const title = hastText(node).trim();
        const variant = LESSON_VARIANTS[normalizeHeading(title)];
        const glyph = VARIANT_GLYPHS[normalizeHeading(title)] ?? pickGlyph(title, categoryPath);
        const icon = {
          type: "raw",
          value:
            `<span class="lesson-glyph" aria-hidden="true"><svg class="glyph" viewBox="0 0 96 96" ` +
            `focusable="false">${GLYPHS[glyph]}</svg></span>`,
        } as unknown as ElementContent;

        node.children = [
          {
            type: "element",
            tagName: "span",
            properties: { className: ["lesson-title"] },
            children: node.children,
          },
          icon,
        ];

        current = {
          type: "element",
          tagName: "section",
          properties: { className: variant ? ["lesson-card", variant] : ["lesson-card"] },
          children: [node],
        };
        heading = node;
        excerpt = "";
        grouped.push(current);
        continue;
      }

      if (current) {
        current.children.push(node as ElementContent);
        if (!excerpt && node.type === "element" && node.tagName === "p") {
          excerpt = hastText(node);
        }
      } else {
        grouped.push(node);
      }
    }

    closeSection();
    tree.children = grouped;
  };
}

/** Collecte les titres h2 et h3 apres attribution des identifiants par rehype-slug. */
function collectToc(toc: TocEntry[]) {
  return (tree: HastRoot) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "h2" && node.tagName !== "h3") return;
      const id = typeof node.properties?.["id"] === "string" ? node.properties["id"] : null;
      if (!id) return;
      const text = hastText(node).trim();
      if (text.length === 0) return;
      toc.push({ id, text: frenchSpacing(text), level: node.tagName === "h2" ? 2 : 3 });
    });
  };
}

/**
 * Rend un corps Markdown en HTML et construit sa table des matieres.
 *
 * Le corpus est redige par l'equipe editoriale et n'accepte pas de HTML brut: la
 * conversion ne laisse donc pas passer de balises arbitraires.
 */
export async function renderMarkdown(
  markdown: string,
  options: RenderOptions = {},
): Promise<RenderedMarkdown> {
  const toc: TocEntry[] = [];
  const sections: SectionSummary[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(removeRedundantSections)
    .use(transformFigurePlaceholders)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(groupLessonSections, sections, options.categoryPath)
    .use(rehypeHighlight, { detect: false, ignoreMissing: true })
    .use(collectToc, toc)
    .use(applyFrenchSpacing)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return { html: String(file), toc, sections };
}
