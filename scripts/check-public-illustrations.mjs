/** Read-only smoke check against the deployed public site. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = process.argv[2];
if (!origin || new URL(origin).protocol !== "https:")
  throw new Error("URL HTTPS explicite requise.");
const baseline = JSON.parse(await readFile("src/lib/illustration-workflow/baseline.json", "utf8"));
const expectedPaths = baseline.inlineReviews.map((entry) => entry.path).sort();
const lessons = [];
let cursor = null,
  pages = 0,
  summary;
do {
  const url = new URL("/api/illustrations", origin);
  url.searchParams.set("status", "ALL");
  url.searchParams.set("limit", "100");
  if (cursor) url.searchParams.set("after", cursor);
  const response = await fetch(url);
  assert.equal(response.status, 200, url.toString());
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  const body = await response.json();
  summary = body.summary;
  lessons.push(...body.lessons);
  cursor = body.nextCursor;
  assert.ok(++pages <= 20, "La pagination ne se termine pas.");
} while (cursor);
assert.deepEqual(lessons.map((lesson) => lesson.path).sort(), expectedPaths);
assert.equal(new Set(lessons.map((lesson) => lesson.ref)).size, lessons.length);
assert.ok(
  lessons.every(
    (lesson) => lesson.hasVisual && lesson.hasInlineSchema && lesson.inlineStatus === "READY",
  ),
);
const allowed = new Set([
  "ref",
  "path",
  "title",
  "status",
  "label",
  "visualRefs",
  "hasVisual",
  "hasDrawing",
  "hasInlineSchema",
  "inlineSchemaCount",
  "inlineStatus",
]);
assert.ok(
  lessons.every((lesson) => Object.keys(lesson).every((key) => allowed.has(key))),
  "Champ public inattendu.",
);
assert.equal(lessons.filter((lesson) => lesson.hasDrawing).length, baseline.lessons.length);
const samples = [
  "/aeronautique/aerodynamique/portance/decrochage-aerodynamique",
  "/alimentation-et-nutrition/regimes-et-recommandations/reperes-nutritionnels/nutri-score-principe-et-limites",
  "/automobile/motorisations/thermique/comment-un-turbocompresseur-rend-il-un-moteur-plus-puissant",
];
const articles = await Promise.all(
  samples.map(async (path) => {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const inlineFigures = [...html.matchAll(/class="schema schema--/g)].length;
    assert.ok(inlineFigures > 0, `Schéma éditorial absent du HTML servi : ${path}`);
    assert.match(html, /<svg/);
    return {
      path,
      status: response.status,
      inlineFigures,
      cache: response.headers.get("x-vercel-cache"),
    };
  }),
);
console.log(
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      origin,
      pages,
      lessons: lessons.length,
      uniquePaths: new Set(lessons.map((lesson) => lesson.path)).size,
      uniqueRefs: new Set(lessons.map((lesson) => lesson.ref)).size,
      inlineSchemas: lessons.reduce((total, lesson) => total + lesson.inlineSchemaCount, 0),
      summary,
      articles,
      publicFieldsChecked: true,
    },
    null,
    2,
  ),
);
