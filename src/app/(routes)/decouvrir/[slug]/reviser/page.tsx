import { notFound } from "next/navigation";
import { DiscoveryReview } from "@/components/discovery/DiscoveryReview";
import { getDiscoveryLesson, getDiscoveryLessons } from "@/lib/discovery/load";
import "../../discovery.css";

export const revalidate = 3600;
export const metadata = {
  title: "Révision express",
  robots: { index: false, follow: true },
};
export async function generateStaticParams() {
  return (await getDiscoveryLessons()).map(({ slug }) => ({ slug }));
}
export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const lesson = await getDiscoveryLesson((await params).slug);
  if (!lesson) notFound();
  return (
    <div className="discovery-page">
      <DiscoveryReview key={`${lesson.slug}-${lesson.version}`} lesson={lesson} />
    </div>
  );
}
