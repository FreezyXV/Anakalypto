import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

async function visualFiles(dir: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(path.join(dir, prefix), { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) => {
        const file = path.posix.join(prefix, entry.name);
        if (entry.isDirectory()) return visualFiles(dir, file);
        return entry.isFile() && /\.(tsx?|css|json)$/.test(entry.name) ? [file] : [];
      }),
    )
  ).flat();
}

/** A small visual-source scan, never the article corpus. Used only by CLI/bootstrap. */
export async function visualSourceDigest() {
  const hash = createHash("sha256");
  for (const dir of [
    "src/components/lesson-visuals",
    "src/components/discovery",
    "src/lib/lesson-visuals",
    "src/lib/discovery",
    "content/discovery",
  ]) {
    const files = (await visualFiles(dir)).sort();
    for (const file of files)
      hash.update(dir + "/" + file).update(await readFile(path.join(dir, file)));
  }
  for (const file of [
    "src/lib/illustrations.ts",
    "src/lib/illustrations.manifest.json",
    "src/lib/schemas.ts",
    "src/app/globals.css",
  ])
    hash.update(file).update(await readFile(file));
  const imported = JSON.parse(
    await readFile("src/lib/illustrations.manifest.json", "utf8"),
  ) as Record<string, { file: string }[]>;
  for (const file of [
    ...new Set(
      Object.values(imported)
        .flat()
        .map((i) => i.file),
    ),
  ].sort())
    hash.update(file).update(await readFile(path.join("public/illustrations", file)));
  return hash.digest("hex");
}
