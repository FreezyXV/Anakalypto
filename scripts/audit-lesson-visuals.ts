/** File-only coverage audit. Never imports Prisma or reads database credentials. */
import { mkdir, writeFile } from "node:fs/promises";
import { loadContentBlocks, validateCorpus } from "../src/lib/content/index";
import { getDiscoveryLessons } from "../src/lib/discovery/load";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { getIllustrations } from "../src/lib/illustrations";

const corpus = validateCorpus(await loadContentBlocks("content"));
if (corpus.issues.length) throw new Error(`Corpus invalide : ${corpus.issues.length} problèmes`);
const discoveries = await getDiscoveryLessons();
const existing = new Map(discoveries.map((lesson) => [lesson.expandedPath, lesson.slug]));
const published = corpus.articles.filter((article) => article.status === "published");
const paths = new Set(published.map((a) => `/${a.categoryPath}/${a.slug}`));
const authored = LESSON_DIAGRAMS.flatMap((s) => s.paths);
if (new Set(authored).size !== authored.length) throw new Error("Association de dessin en double");
for (const path of authored) if (!paths.has(path)) throw new Error(`Article non publié : ${path}`);
const rows = published.map((article) => {
  const path = `/${article.categoryPath}/${article.slug}`;
  const discovery = existing.get(path);
  const diagram = getLessonDiagram(path);
  const illustrations = getIllustrations(article.slug);
  return {
    path,
    title: article.title,
    status: discovery
      ? diagram
        ? "conserve_et_complete"
        : "conserve"
      : diagram
        ? "nouveau_schema"
        : illustrations.length
          ? "illustration_a_revoir"
          : "a_concevoir",
    existing: discovery ?? "",
    diagram: diagram?.id ?? "",
    note: discovery
      ? "Schéma existant conservé ; revue du 7 novembre disponible"
      : diagram
        ? "Trois vues dédiées ; association explicite"
        : illustrations.length
          ? "Présence de fichier, qualité non déduite automatiquement"
          : "Pictogramme uniquement ; aucune validation qualitative prétendue",
  };
});
const counts = Object.fromEntries(
  [...new Set(rows.map((r) => r.status))].map((s) => [
    s,
    rows.filter((r) => r.status === s).length,
  ]),
);
const columns: (keyof (typeof rows)[number])[] = [
  "path",
  "title",
  "status",
  "existing",
  "diagram",
  "note",
];
const quote = (v: string) => `"${v.replaceAll('"', '""')}"`;
await mkdir("docs/collaboration", { recursive: true });
await writeFile(
  "docs/collaboration/LESSON_VISUAL_COVERAGE.csv",
  [columns.join(","), ...rows.map((row) => columns.map((c) => quote(row[c])).join(","))].join(
    "\n",
  ) + "\n",
);
console.log(
  JSON.stringify(
    {
      published: rows.length,
      newDiagrams: LESSON_DIAGRAMS.length,
      explicitAssociations: authored.length,
      counts,
    },
    null,
    2,
  ),
);
