/**
 * Import idempotent du corpus Markdown vers la base.
 *
 * Deroulement: lecture de content/, validation complete, puis ecriture. Aucune ecriture
 * n'a lieu si une anomalie est detectee: un corpus partiellement importe serait plus
 * difficile a diagnostiquer qu'un import refuse.
 *
 * Usage:
 *   tsx prisma/seed.ts                 import dans la base pointee par DATABASE_URL
 *   tsx prisma/seed.ts --dry-run       validation seule, sans ecriture
 *   tsx prisma/seed.ts --content=<dir> repertoire de contenu alternatif
 */
import path from "node:path";
import process from "node:process";

import { config as loadEnv } from "dotenv";

for (const file of [".env.local", ".env"]) {
  loadEnv({ path: path.resolve(process.cwd(), file), override: false, quiet: true });
}

const { loadContentBlocks, validateCorpus } = await import("../src/lib/content/index");
const { seedCorpus, formatIssues, formatSummary } = await import("../src/lib/content/seed");

type Options = { dryRun: boolean; contentDir: string };

function parseArgs(argv: string[]): Options {
  let contentDir = path.resolve(process.cwd(), "content");
  let dryRun = false;

  for (const arg of argv) {
    if (arg === "--dry-run") dryRun = true;
    else if (arg.startsWith("--content=")) {
      contentDir = path.resolve(process.cwd(), arg.slice("--content=".length));
    }
  }

  return { dryRun, contentDir };
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));

  console.log(`Lecture du corpus: ${options.contentDir}`);
  const blocks = await loadContentBlocks(options.contentDir);
  console.log(`${blocks.length} bloc(s) lu(s).`);

  const result = validateCorpus(blocks);
  console.log(
    `Validation: ${result.categories.length} categorie(s), ${result.articles.length} article(s).`,
  );

  if (result.issues.length > 0) {
    console.error(formatIssues(result.issues));
    console.error("\nAucune ecriture effectuee.");
    process.exitCode = 1;
    return;
  }

  if (options.dryRun) {
    console.log("Corpus valide. Mode --dry-run: aucune ecriture effectuee.");
    return;
  }

  const { prisma } = await import("../src/lib/prisma");
  try {
    const summary = await seedCorpus(prisma, result);
    console.log(formatSummary(summary));
  } finally {
    await prisma.$disconnect();
  }
}

await main();
