import { DiscoveryCatalog } from "@/components/discovery/DiscoveryCatalog";
import { getDiscoveryLessons } from "@/lib/discovery/load";
import { pageMetadata } from "@/lib/seo";
import "./discovery.css";

export const revalidate = 3600;
export const metadata = pageMetadata({
  title: "Découvrir en jouant",
  description:
    "Des expériences courtes pour essayer, observer et comprendre, accessibles dès 10 ans.",
  path: "/decouvrir",
});

export default async function DiscoverPage() {
  const lessons = await getDiscoveryLessons();
  const now = new Date();
  const cards = lessons.map(({ slug, version, title, summary, domain, minutes, steps }) => ({
    slug,
    version,
    title,
    summary,
    domain,
    minutes,
    visual: steps[0]!.visual,
  }));
  return <DiscoveryCatalog lessons={cards} now={now.toISOString()} />;
}
