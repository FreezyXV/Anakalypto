import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { discoveryLessonSchema } from "./schema";

/** Local editorial files; no database migration is needed for the short format. */
export const getDiscoveryLessons = cache(async () => {
  const directory = path.join(process.cwd(), "content", "discovery");
  const files = (await readdir(directory)).filter((file) => file.endsWith(".json")).sort();
  const lessons = await Promise.all(
    files.map(async (file) => {
      const lesson = discoveryLessonSchema.parse(
        JSON.parse(await readFile(path.join(directory, file), "utf8")),
      );
      if (file !== `${lesson.slug}.json`) throw new Error(`Nom de fichier incorrect : ${file}`);
      return lesson;
    }),
  );
  if (new Set(lessons.map((lesson) => lesson.slug)).size !== lessons.length)
    throw new Error("Deux experiences ont le meme slug.");
  return lessons.filter((lesson) => lesson.status === "published");
});

export async function getDiscoveryLesson(slug: string) {
  return (await getDiscoveryLessons()).find((lesson) => lesson.slug === slug);
}
