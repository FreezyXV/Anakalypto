import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import type { Root as MdastRoot, Paragraph, PhrasingContent, RootContent } from "mdast";
import type { Element, Root as HastRoot } from "hast";

/** Entree de la table des matieres, dans l'ordre du document. */
export type TocEntry = {
  id: string;
  text: string;
  /** 2 pour un titre de section, 3 pour une sous-section. */
  level: 2 | 3;
};

export type RenderedMarkdown = {
  html: string;
  toc: TocEntry[];
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
 * Convertit les marqueurs d'illustration en cadre neutre. Le balisage reproduit celui du
 * composant FigurePlaceholder: les deux partagent la classe `figure-placeholder` et donc
 * la meme mise en forme.
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
        `<figcaption class="figure-placeholder__caption">Illustration a venir : ${escapeHtml(
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

/** Collecte les titres h2 et h3 apres attribution des identifiants par rehype-slug. */
function collectToc(toc: TocEntry[]) {
  return (tree: HastRoot) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "h2" && node.tagName !== "h3") return;
      const id = typeof node.properties?.["id"] === "string" ? node.properties["id"] : null;
      if (!id) return;
      const text = plainText(node.children as unknown as RootContent[]).trim();
      if (text.length === 0) return;
      toc.push({ id, text, level: node.tagName === "h2" ? 2 : 3 });
    });
  };
}

/**
 * Rend un corps Markdown en HTML et construit sa table des matieres.
 *
 * Le corpus est redige par l'equipe editoriale et n'accepte pas de HTML brut: la
 * conversion ne laisse donc pas passer de balises arbitraires.
 */
export async function renderMarkdown(markdown: string): Promise<RenderedMarkdown> {
  const toc: TocEntry[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(removeRedundantSections)
    .use(transformFigurePlaceholders)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight, { detect: false, ignoreMissing: true })
    .use(collectToc, toc)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return { html: String(file), toc };
}

/**
 * Extrait un resume court a partir d'un corps Markdown, pour les cas ou aucun resume
 * explicite n'est disponible. Les titres et marqueurs sont ignores.
 */
export function excerpt(markdown: string, maxLength = 200): string {
  const text = markdown
    .split("\n")
    .filter((line) => !line.startsWith("#") && !line.startsWith("[Emplacement image"))
    .join(" ")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}...`;
}
