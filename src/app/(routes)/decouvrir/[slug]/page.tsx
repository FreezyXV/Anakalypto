import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryPlayer } from "@/components/discovery/DiscoveryPlayer";
import { getDiscoveryLesson, getDiscoveryLessons } from "@/lib/discovery/load";
import { pageMetadata } from "@/lib/seo";
import "../discovery.css";

type Props = { params: Promise<{ slug: string }> };
export const revalidate = 3600;
export async function generateStaticParams() {
  return (await getDiscoveryLessons()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const lesson = await getDiscoveryLesson((await params).slug);
  return lesson
    ? pageMetadata({
        title: lesson.title,
        description: lesson.summary,
        path: `/decouvrir/${lesson.slug}`,
      })
    : { title: "Découverte introuvable" };
}
export default async function DiscoveryPage({ params }: Props) {
  const lessons = await getDiscoveryLessons();
  const { slug } = await params;
  const position = lessons.findIndex((lesson) => lesson.slug === slug);
  const lesson = lessons[position];
  if (!lesson) notFound();
  const following = [...lessons.slice(position + 1), ...lessons.slice(0, position)];
  return (
    <div className="discovery-page">
      <DiscoveryPlayer
        key={`${lesson.slug}-${lesson.version}`}
        lesson={lesson}
        following={following.map(({ slug, title, version }) => ({ slug, title, version }))}
        initialNow={new Date().toISOString()}
      />
      <details className="discovery-sources">
        <summary>Sources et explications</summary>
        <p className="mt-3">{lesson.objective}</p>
        <ul className="mt-3 space-y-3">
          {lesson.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
              <span className="block text-sm text-ink-muted">
                {source.publisher} · consulté le{" "}
                {new Intl.DateTimeFormat("fr-FR", {
                  timeZone: "UTC",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(source.checkedAt))}
              </span>
            </li>
          ))}
        </ul>
        <Link href={lesson.expandedPath} className="btn btn--ghost mt-5">
          Approfondir
        </Link>
      </details>
    </div>
  );
}
