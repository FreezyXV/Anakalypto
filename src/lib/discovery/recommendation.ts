import type { Progress } from "./progress";

type Lesson = { slug: string; version: number };
export type Recommendation<T> = { lesson: T; kind: "resume" | "review" | "discover" | "practice" };

/** Paris calendar day, including daylight saving changes; the catalogue refreshes client-side. */
export function discoveryDayIndex(now: string): number {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(now));
  const get = (type: string) => parts.find((part) => part.type === type)!.value;
  return Math.floor(
    Date.parse(`${get("year")}-${get("month")}-${get("day")}T12:00:00Z`) / 86_400_000,
  );
}

export function recommendDiscovery<T extends Lesson>(
  lessons: T[],
  progress: Progress,
  now: string,
): Recommendation<T> | undefined {
  if (!lessons.length) return undefined;
  const sessions = lessons.map((lesson) => ({
    lesson,
    session: progress[lesson.slug]?.version === lesson.version ? progress[lesson.slug] : undefined,
  }));
  const resume = sessions
    .filter(
      ({ session }) =>
        session && (!session.completed || (session.review && !session.review.completed)),
    )
    .sort((a, b) => b.session!.updatedAt.localeCompare(a.session!.updatedAt))[0];
  if (resume)
    return { lesson: resume.lesson, kind: resume.session!.completed ? "review" : "resume" };
  const due = sessions
    .filter(({ session }) => session?.completed && session.reviewAt && session.reviewAt <= now)
    .sort((a, b) => a.session!.reviewAt!.localeCompare(b.session!.reviewAt!))[0];
  if (due) return { lesson: due.lesson, kind: "review" };
  const offset = discoveryDayIndex(now) % lessons.length;
  for (let index = 0; index < lessons.length; index++) {
    const entry = sessions[(offset + index) % lessons.length]!;
    if (!entry.session?.completed) return { lesson: entry.lesson, kind: "discover" };
  }
  return { lesson: lessons[offset]!, kind: "practice" };
}
