/** Read-only acceptance check restricted to a dedicated local preview database. */
import path from "node:path";
import process from "node:process";

import { loadContentBlocks, validateCorpus } from "../src/lib/content/index";
import { getDiscoveryLessons } from "../src/lib/discovery/load";

const target = new URL(process.env.DATABASE_URL ?? "postgresql://invalid/invalid");
if (
  target.hostname !== "127.0.0.1" ||
  target.pathname !== "/anakalypto_preview" ||
  process.env.DIRECT_URL !== process.env.DATABASE_URL
) {
  throw new Error(
    "Ce contrôle exige les deux URL explicites de la base locale anakalypto_preview.",
  );
}

const corpus = validateCorpus(await loadContentBlocks(path.join(process.cwd(), "content")));
if (corpus.issues.length) throw new Error("Le corpus ne passe pas la validation.");
const lessons = await getDiscoveryLessons();
const { prisma } = await import("../src/lib/prisma");
const errors: string[] = [];

try {
  for (const lesson of lessons) {
    const expected = corpus.articles.find(
      (article) => `/${article.categoryPath}/${article.slug}` === lesson.expandedPath,
    );
    if (!expected) throw new Error(`Article absent du corpus : ${lesson.slug}`);
    const actual = await prisma.article.findUnique({
      where: { slug: expected.slug },
      include: { category: true, sources: true, quiz: { orderBy: { position: "asc" } } },
    });
    const sourceKey = (source: {
      title: string;
      url: string;
      publisher?: string | null;
      date?: string | null;
    }) => JSON.stringify([source.title, source.url, source.publisher ?? null, source.date ?? null]);
    const sourcesMatch =
      JSON.stringify(expected.sources.map(sourceKey).sort()) ===
      JSON.stringify(
        actual?.sources
          .map((source) => sourceKey({ ...source, date: source.publishedDate }))
          .sort(),
      );
    const quizMatch =
      JSON.stringify(expected.quiz) ===
      JSON.stringify(
        actual?.quiz.map((question) => ({
          question: question.question,
          options: question.options,
          answer: question.answer,
          explanation: question.explanation,
        })),
      );
    const verified = actual?.lastVerified?.getTime() === expected.lastVerified?.getTime();
    const matches =
      actual?.content === expected.content &&
      actual.title === expected.title &&
      actual.summary === expected.summary &&
      actual.category.path === expected.categoryPath &&
      actual.status === "PUBLISHED" &&
      sourcesMatch &&
      quizMatch &&
      verified;
    console.log(
      `${matches ? "OK" : "ÉCHEC"} ${lesson.slug} — corps, titre, résumé, sources, quiz et date`,
    );
    if (!matches) errors.push(lesson.slug);
  }
  if (errors.length) throw new Error(`Articles différents du corpus : ${errors.join(", ")}`);
  console.log(`${lessons.length} articles Expanded correspondent aux fichiers corrigés.`);
} finally {
  await prisma.$disconnect();
}
