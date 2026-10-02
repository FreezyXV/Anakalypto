/**
 * Genere les consignes a donner a un generateur d'images (ChatGPT ou autre) pour illustrer
 * les articles publies.
 *
 * Usage: npm run illustrations:consignes
 *
 * Sortie:
 *   illustrations/CONSIGNES.md   une consigne par article, prete a copier-coller
 *   illustrations/consignes.csv  le meme inventaire, une ligne par article
 *
 * Les consignes reprennent le titre, les sections et les points a retenir de l'article, pour
 * que l'image reste fidele au texte. Les articles les plus recemment verifies viennent en
 * premier.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { loadContentBlocks, validateCorpus, type ValidatedArticle } from "../src/lib/content/index";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "illustrations");

/** Couleur dominante a demander, par domaine, alignee sur les couleurs du site. */
const DOMINANT: Record<string, string> = {
  "alimentation-et-nutrition": "orange tomate",
  "arts-et-culture": "rose magenta",
  automobile: "rouge vif",
  aeronautique: "bleu ciel",
  "communication-et-medias": "turquoise",
  "corps-humain-et-sante": "rose corail",
  "droit-et-justice": "violet indigo",
  energie: "jaune ambre",
  "environnement-et-climat": "vert franc",
  "espace-et-astronomie": "violet profond",
  "geographie-et-territoires": "bleu océan",
  industries: "orange cuivré",
  "intelligence-artificielle": "violet néon",
  "micro-informatique-et-informatique": "bleu électrique",
  "sciences-du-vivant-appliquees": "vert lime",
  "sciences-fondamentales": "cyan",
  "sciences-humaines-et-sociales": "prune",
  "sport-et-sciences-du-mouvement": "vert menthe",
  "technologies-et-ingenierie": "bleu acier",
};

const SKIPPED_SECTIONS = new Set(["en bref", "a retenir", "articles lies"]);

function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();
}

type Section = { title: string; text: string };

/** Decoupe le corps Markdown en sections de niveau 2, avec leur texte brut. */
function sections(markdown: string): Section[] {
  const result: Section[] = [];
  let current: Section | null = null;
  for (const line of markdown.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading?.[1]) {
      current = { title: heading[1], text: "" };
      result.push(current);
    } else if (current) {
      current.text += `${line}\n`;
    }
  }
  return result;
}

/** Premiere phrase d'un texte, sans balisage Markdown ni puces. */
function firstSentence(text: string): string {
  const flat = text
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\[Emplacement image[^\]]*\]/g, "")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const match = /^(.+?[.!?])(\s|$)/.exec(flat);
  const sentence = (match?.[1] ?? flat).trim();
  return sentence.length > 220 ? `${sentence.slice(0, 217).trimEnd()}...` : sentence;
}

function bullets(text: string): string[] {
  return text
    .split("\n")
    .map((line) => /^\s*[-*]\s+(.+)$/.exec(line)?.[1]?.replace(/[*_`]/g, "").trim() ?? "")
    .filter((line) => line.length > 0);
}

function brief(article: ValidatedArticle): { withLabels: string; textFree: string } {
  const root = article.categoryPath.split("/")[0] ?? "";
  const color = DOMINANT[root] ?? "bleu";
  const parts = sections(article.content);

  const facts = parts
    .filter((part) => !SKIPPED_SECTIONS.has(normalize(part.title)))
    .map((part) => `- ${part.title} : ${firstSentence(part.text)}`);
  const recap = parts.find((part) => normalize(part.title) === "a retenir");
  const points = recap ? bullets(recap.text).map((point) => `- ${point}`) : [];

  const content = [
    "À illustrer (reste fidèle à ces faits, n'invente rien) :",
    `Résumé : ${article.summary.replace(/\s+/g, " ").trim()}`,
    ...facts,
    ...(points.length > 0 ? ["À retenir :", ...points] : []),
  ].join("\n");

  const withLabels = [
    `Crée une infographie éducative verticale (format 3:4) en français sur le thème : « ${article.title} ».`,
    "",
    `Style : page de cahier illustré sur papier quadrillé clair, dessin en couleurs vives façon feutres et crayons (dominante ${color}), contours noirs épais, ombres décalées pleines. Un titre massif en capitales condensées en haut, une grande illustration centrale (en coupe ou en schéma fléché) qui montre comment ça marche, 5 à 7 étiquettes manuscrites très courtes reliées par des traits fins, puis 4 à 6 petites cartes colorées en bas avec un mot-clé et un pictogramme.`,
    "",
    content,
    "",
    "Contraintes : tout le texte en français, très court (1 à 3 mots par étiquette), orthographe exacte, aucun logo, aucune marque, aucune personne réelle, lisible sur un écran de téléphone.",
  ].join("\n");

  const textFree = [
    `Crée une illustration pédagogique verticale (format 3:4) SANS AUCUN TEXTE NI CHIFFRE pour expliquer : « ${article.title} ».`,
    "",
    `Style : dessin vectoriel plat et chaleureux façon cahier illustré, couleurs vives (dominante ${color}), contours noirs épais, ombres décalées pleines, fond de papier quadrillé clair. Une grande scène centrale qui montre le principe, avec des flèches pour le sens des échanges ou du mouvement, et quelques petits pictogrammes autour. Compose l'image pour que des étiquettes puissent être ajoutées plus tard.`,
    "",
    content,
    "",
    "Contraintes : aucun texte, aucune lettre, aucun chiffre, aucun logo, aucune marque, aucune personne réelle.",
  ].join("\n");

  return { withLabels, textFree };
}

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""').replace(/\s*\n\s*/g, " ")}"`;
}

const blocks = await loadContentBlocks(path.join(ROOT, "content"));
const { articles, issues } = validateCorpus(blocks);
if (issues.length > 0) {
  console.error(`Le corpus contient ${issues.length} anomalie(s): lancez npm run seed:check.`);
  process.exit(1);
}

const published = articles
  .filter((article) => article.status === "published")
  .sort((a, b) => {
    const left = a.lastVerified ?? "";
    const right = b.lastVerified ?? "";
    if (left !== right) return left < right ? 1 : -1;
    return a.title.localeCompare(b.title, "fr");
  });

const md: string[] = [
  "# Consignes d'illustration",
  "",
  `${published.length} articles publiés. Les plus récents sont en premier.`,
  "",
  "## Comment faire",
  "",
  "1. Copiez la consigne d'un article dans ChatGPT (ou un autre générateur d'images).",
  "2. Enregistrez l'image sous le nom indiqué, par exemple `illustrations/a-traiter/<slug>.png`.",
  "3. Pour une deuxième image du même article, ajoutez `--2` : `<slug>--2.png`.",
  "4. Lancez `npm run illustrations` : les images sont converties en WebP léger dans",
  "   `public/illustrations/` et le manifeste est mis à jour.",
  "5. Faites un commit et un push : l'illustration remplace la couverture dessinée.",
  "",
  "Deux variantes par article. La variante **avec étiquettes** ressemble aux infographies que vous",
  "m'avez montrées, mais les générateurs font souvent des fautes d'orthographe : relisez chaque",
  "mot. La variante **sans texte** est plus sûre ; le titre et les légendes restent alors affichés",
  "par le site lui-même.",
  "",
  "---",
  "",
];

const csv: string[] = ["slug;titre;domaine;fichier;consigne_avec_etiquettes;consigne_sans_texte"];

for (const article of published) {
  const { withLabels, textFree } = brief(article);
  const root = article.categoryPath.split("/")[0] ?? "";
  const file = `illustrations/a-traiter/${article.slug}.png`;

  md.push(
    `### ${article.title}`,
    "",
    `- Slug : \`${article.slug}\``,
    `- Fichier à créer : \`${file}\``,
    `- Domaine : ${root}`,
    "",
    "**Avec étiquettes**",
    "",
    "```text",
    withLabels,
    "```",
    "",
    "**Sans texte**",
    "",
    "```text",
    textFree,
    "```",
    "",
  );

  csv.push([article.slug, article.title, root, file, withLabels, textFree].map(csvCell).join(";"));
}

await mkdir(OUT_DIR, { recursive: true });
await writeFile(path.join(OUT_DIR, "CONSIGNES.md"), `${md.join("\n")}\n`);
await writeFile(path.join(OUT_DIR, "consignes.csv"), `${csv.join("\n")}\n`);

console.log(
  `${published.length} consignes écrites dans illustrations/CONSIGNES.md et consignes.csv`,
);
