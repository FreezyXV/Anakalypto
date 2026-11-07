/**
 * Insere des schemas pedagogiques dans les articles du corpus.
 *
 *   node scripts/inserer-schemas.mjs <fichier-de-schemas> [...]
 *
 * Format du fichier d'entree: une section par schema, introduite par une ligne
 *
 *   === <slug-de-l-article>
 *   === <slug-de-l-article> | apres=<titre exact d'une section ##>
 *
 * suivie du YAML du schema (voir docs/SCHEMAS.md). Regles de placement:
 *
 * - avec `apres=`, le schema est place a la fin de la section indiquee ;
 * - sinon, le premier schema d'un article remplace son emplacement d'illustration
 *   `[Emplacement image : ...]` s'il en a un ;
 * - sinon, il est place juste avant la section `## À retenir`.
 *
 * Un schema dont le titre existe deja dans l'article remplace l'ancien: le script est
 * rejouable. Les fichiers sont reecrits en place; le YAML n'est pas valide ici mais par
 * `npm run seed:check`, qui localise les erreurs.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const CONTENT = path.join(process.cwd(), "content");
const PLACEHOLDER = /\n\[Emplacement image\s*:[\s\S]*?\]\n/;

function parseInput(text) {
  const entries = [];
  let current = null;
  for (const line of text.split("\n")) {
    const header = /^=== ([a-z0-9-]+)\s*(?:\|\s*apres=(.+))?$/.exec(line);
    if (header) {
      current = { slug: header[1], after: header[2]?.trim() ?? null, lines: [] };
      entries.push(current);
    } else if (current) {
      current.lines.push(line);
    }
  }
  return entries.map((entry) => ({ ...entry, yaml: entry.lines.join("\n").trim() }));
}

function schemaTitle(yaml) {
  const match = /^titre:\s*(.+)$/m.exec(yaml);
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : null;
}

function fence(yaml) {
  return `\`\`\`schema\n${yaml}\n\`\`\``;
}

/** Retire un schema existant de meme titre; renvoie le corps et l'index de l'ancien bloc. */
function removeSameTitle(body, title) {
  const re = /```schema\n([\s\S]*?)\n```\n?/g;
  let match;
  while ((match = re.exec(body))) {
    if (schemaTitle(match[1]) === title) {
      return {
        body: body.slice(0, match.index) + body.slice(match.index + match[0].length),
        at: match.index,
      };
    }
  }
  return { body, at: -1 };
}

function insert(body, entry) {
  const block = fence(entry.yaml);
  const title = schemaTitle(entry.yaml);
  const removed = title ? removeSameTitle(body, title) : { body, at: -1 };
  body = removed.body;
  if (removed.at >= 0 && !entry.after) {
    return body.slice(0, removed.at) + block + "\n" + body.slice(removed.at);
  }

  if (entry.after) {
    const heading = `\n## ${entry.after}\n`;
    const start = body.indexOf(heading);
    if (start < 0) throw new Error(`${entry.slug}: section introuvable "${entry.after}"`);
    const next = body.indexOf("\n## ", start + heading.length);
    const end = next < 0 ? body.length : next;
    return `${body.slice(0, end).trimEnd()}\n\n${block}\n${body.slice(end)}`;
  }

  if (!body.includes("```schema") && PLACEHOLDER.test(body)) {
    return body.replace(PLACEHOLDER, `\n${block}\n`);
  }

  const recap = body.indexOf("\n## À retenir");
  if (recap < 0) return `${body.trimEnd()}\n\n${block}\n`;
  return `${body.slice(0, recap).trimEnd()}\n\n${block}\n${body.slice(recap)}`;
}

const inputs = process.argv.slice(2);
if (inputs.length === 0) {
  console.error("Usage : node scripts/inserer-schemas.mjs <fichier-de-schemas> [...]");
  process.exit(1);
}

const entries = [];
for (const input of inputs) entries.push(...parseInput(await readFile(input, "utf8")));

const files = new Map();
for (const name of await readdir(CONTENT)) {
  if (name.endsWith(".md")) files.set(name, await readFile(path.join(CONTENT, name), "utf8"));
}

let done = 0;
const missing = [];
for (const entry of entries) {
  let found = false;
  for (const [name, text] of files) {
    const slugLine = text.indexOf(`\nslug: ${entry.slug}\n`);
    if (slugLine < 0) continue;
    // Le corps commence apres la fin du frontmatter et s'arrete au bloc suivant.
    const bodyStart = text.indexOf("\n---\n", slugLine) + 5;
    const nextBlock = text.indexOf("\n---\ntype: ", bodyStart);
    const bodyEnd = nextBlock < 0 ? text.length : nextBlock + 1;
    const body = text.slice(bodyStart, bodyEnd);
    const updated = insert(body, entry);
    files.set(
      name,
      text.slice(0, bodyStart) + updated.replace(/\n*$/, "\n\n") + text.slice(bodyEnd),
    );
    found = true;
    done += 1;
    break;
  }
  if (!found) missing.push(entry.slug);
}

for (const [name, text] of files) {
  const file = path.join(CONTENT, name);
  if ((await readFile(file, "utf8")) !== text) await writeFile(file, text);
}

console.log(`${done} schema(s) insere(s).`);
if (missing.length) {
  console.error(`Articles introuvables : ${missing.join(", ")}`);
  process.exitCode = 1;
}
