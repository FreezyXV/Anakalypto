/** Read-only verification after a publication sync and illustration bootstrap. No .env fallback. */
import assert from "node:assert/strict";
import path from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { loadContentBlocks } from "../src/lib/content/load";
import { validateCorpus } from "../src/lib/content/validate";
import { publishedCorpus } from "../src/lib/content/published";
import { articleHash } from "../src/lib/illustration-workflow/policy";
import { illustrationSummary } from "../src/lib/illustration-workflow/service";
import { visualSourceDigest } from "../src/lib/illustration-workflow/assets";
import baseline from "../src/lib/illustration-workflow/baseline.json";
import { findSchemaBlocks } from "../src/lib/schemas";

const connectionString = process.env.CONTENT_DATABASE_URL;
if (!connectionString)
  throw new Error("CONTENT_DATABASE_URL explicite requise, sans lecture de .env.");
const corpus = publishedCorpus(validateCorpus(await loadContentBlocks(path.resolve("content"))));
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
try {
  const rows = await db.article.findMany({
    where: { status: "PUBLISHED" },
    include: {
      category: true,
      illustration: true,
      sources: true,
      quiz: { orderBy: { position: "asc" } },
    },
  });
  assert.deepEqual(
    rows.map((article) => article.slug).sort(),
    corpus.articles.map((article) => article.slug).sort(),
    "Le catalogue publié diffère du corpus.",
  );
  const bySlug = new Map(rows.map((article) => [article.slug, article]));
  let inlineSchemas = 0;
  for (const expected of corpus.articles) {
    const actual = bySlug.get(expected.slug)!;
    const lessonPath = `/${expected.categoryPath}/${expected.slug}`;
    const hash = articleHash(expected, lessonPath);
    assert.equal(actual.category.path, expected.categoryPath, lessonPath);
    assert.equal(articleHash(actual, lessonPath), hash, `Texte différent : ${lessonPath}`);
    assert.equal(
      actual.lastVerified?.toISOString() ?? null,
      expected.lastVerified?.toISOString() ?? null,
      lessonPath,
    );
    const sources = (
      items: {
        title: string;
        url: string;
        publisher?: string | null;
        date?: string | null;
        publishedDate?: string | null;
      }[],
    ) =>
      items
        .map((item) =>
          JSON.stringify([
            item.title,
            item.url,
            item.publisher ?? null,
            item.date ?? item.publishedDate ?? null,
          ]),
        )
        .sort();
    assert.deepEqual(sources(actual.sources), sources(expected.sources), `Sources : ${lessonPath}`);
    assert.deepEqual(
      actual.quiz.map(({ question, options, answer, explanation }) => ({
        question,
        options,
        answer,
        explanation,
      })),
      expected.quiz,
      `Quiz : ${lessonPath}`,
    );
    assert.ok(actual.illustration, `Indicateur absent : ${lessonPath}`);
    assert.equal(actual.illustration.lessonPath, lessonPath);
    const count = findSchemaBlocks(expected.content).length;
    inlineSchemas += count;
    assert.equal(actual.illustration.inlineSchemaCount, count, lessonPath);
    assert.equal(
      actual.illustration.inlineStatus,
      "READY",
      `Revue éditoriale non reprise : ${lessonPath}`,
    );
    assert.equal(actual.illustration.inlineReviewedContentHash, hash, lessonPath);
  }
  for (const entry of baseline.lessons) {
    const actual = rows.find((article) => article.illustration?.lessonPath === entry.path);
    assert.ok(actual, `Leçon du manifeste absente : ${entry.path}`);
    assert.deepEqual(actual.illustration!.visualRefs, entry.visualRefs, entry.path);
    if (entry.quality === "validee") {
      assert.equal(actual.illustration!.status, "READY", entry.path);
      assert.equal(actual.illustration!.reviewedContentHash, entry.contentHash, entry.path);
    }
  }
  assert.equal(
    await visualSourceDigest(),
    baseline.sourceDigest,
    "Le moteur visuel diffère du manifeste.",
  );
  const summary = await illustrationSummary(db);
  assert.equal(summary.untracked, 0);
  assert.equal(summary.claimed, 0);
  const migrations = await db.$queryRaw<
    { migration_name: string }[]
  >`SELECT migration_name FROM "_prisma_migrations" WHERE finished_at IS NOT NULL ORDER BY migration_name`;
  console.log(
    JSON.stringify(
      {
        checkedAt: new Date().toISOString(),
        editorialMatches: rows.length,
        inlineSchemas,
        drawingAssociationsMatch: baseline.lessons.length,
        sourceDigestMatches: true,
        migrations: migrations.map((migration) => migration.migration_name),
        summary,
      },
      null,
      2,
    ),
  );
} finally {
  await db.$disconnect();
}
