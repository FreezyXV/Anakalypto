/**
 * Illustrations des articles.
 *
 * Deux usages:
 *   node scripts/illustrations.mjs              convertit les images de illustrations/a-traiter/
 *                                               en WebP optimise dans public/illustrations/,
 *                                               puis met a jour le manifeste.
 *   node scripts/illustrations.mjs --manifeste  met seulement le manifeste a jour (lance
 *                                               automatiquement avant `dev` et `build`).
 *
 * Convention de nommage: le fichier porte le slug de l'article, `<slug>.png` pour l'image
 * principale, `<slug>--2.png`, `<slug>--3.png` pour les suivantes. Le slug est le dernier
 * segment de l'adresse de l'article.
 */
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const INBOX = path.join(ROOT, "illustrations", "a-traiter");
const OUT = path.join(ROOT, "public", "illustrations");
const MANIFEST = path.join(ROOT, "src", "lib", "illustrations.manifest.json");
const CONTENT = path.join(ROOT, "content");

const IMAGE = /^(.+?)(?:--(\d+))?\.(webp|png|jpe?g|avif)$/i;
const MAX_WIDTH = 1400;

const onlyManifest = process.argv.includes("--manifeste");

async function loadSharp() {
  try {
    return (await import("sharp")).default;
  } catch {
    return null;
  }
}

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

/** Slugs d'articles connus, lus dans les fichiers de contenu. */
async function knownSlugs() {
  const slugs = new Set();
  for (const name of await readdir(CONTENT)) {
    if (!name.endsWith(".md")) continue;
    const text = await readFile(path.join(CONTENT, name), "utf8");
    for (const match of text.matchAll(/^slug: (\S+)\s*$/gm)) slugs.add(match[1]);
  }
  return slugs;
}

function rank(file) {
  const match = IMAGE.exec(file);
  return match?.[2] ? Number(match[2]) : 1;
}

async function convertInbox(sharp, slugs) {
  if (!(await exists(INBOX))) return 0;
  const files = (await readdir(INBOX)).filter((file) => IMAGE.test(file));
  if (files.length === 0) return 0;

  if (!sharp) {
    console.error("Le module sharp est introuvable: impossible de convertir les images.");
    console.error("Installez-le avec `npm install --save-dev sharp`, ou deposez directement des");
    console.error("fichiers .webp dans public/illustrations/.");
    process.exitCode = 1;
    return 0;
  }

  await mkdir(OUT, { recursive: true });
  let done = 0;

  for (const file of files.sort()) {
    const match = IMAGE.exec(file);
    const slug = match?.[1];
    if (!slug) continue;

    if (!slugs.has(slug)) {
      console.warn(`  ? ${file}: aucun article n'a ce slug (l'image sera quand meme convertie)`);
    }

    const target = path.join(OUT, `${slug}${match[2] ? `--${match[2]}` : ""}.webp`);
    const source = path.join(INBOX, file);

    if ((await exists(target)) && (await stat(target)).mtimeMs >= (await stat(source)).mtimeMs) {
      continue;
    }

    await sharp(source)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(target);

    const size = Math.round((await stat(target)).size / 1024);
    console.log(`  + ${path.relative(ROOT, target)} (${size} Ko)`);
    done += 1;
  }

  return done;
}

async function writeManifest(sharp) {
  const manifest = {};

  if (await exists(OUT)) {
    for (const file of (await readdir(OUT)).sort()) {
      const match = IMAGE.exec(file);
      if (!match?.[1]) continue;

      let width = null;
      let height = null;
      if (sharp) {
        try {
          const meta = await sharp(path.join(OUT, file)).metadata();
          width = meta.width ?? null;
          height = meta.height ?? null;
        } catch {
          // Fichier illisible: il reste dans le manifeste, sans dimensions.
        }
      }

      (manifest[match[1]] ??= []).push({ file, width, height, order: rank(file) });
    }
  }

  const sorted = {};
  for (const slug of Object.keys(manifest).sort()) {
    sorted[slug] = manifest[slug]
      .sort((a, b) => a.order - b.order)
      .map(({ file, width, height }) => ({ file, width, height }));
  }

  const json = `${JSON.stringify(sorted, null, 2)}\n`;
  const previous = (await exists(MANIFEST)) ? await readFile(MANIFEST, "utf8") : "";
  if (previous !== json) await writeFile(MANIFEST, json);

  const count = Object.keys(sorted).length;
  console.log(
    `Manifeste des illustrations: ${count} article${count > 1 ? "s" : ""} illustre${count > 1 ? "s" : ""}.`,
  );
}

const sharp = await loadSharp();

if (!onlyManifest) {
  const slugs = await knownSlugs();
  console.log("Conversion des images deposees dans illustrations/a-traiter/");
  const done = await convertInbox(sharp, slugs);
  if (done === 0) console.log("  rien de nouveau a convertir.");
}

await writeManifest(sharp);
