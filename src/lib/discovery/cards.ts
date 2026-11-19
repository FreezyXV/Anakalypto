import type { DiscoveryLesson, DiscoveryStep } from "./schema";

export type DiscoveryCard = Pick<
  DiscoveryLesson,
  "slug" | "version" | "title" | "summary" | "domain" | "minutes"
> & { visual: DiscoveryStep["visual"] };

export function discoveryCard({
  slug,
  version,
  title,
  summary,
  domain,
  minutes,
  steps,
}: DiscoveryLesson): DiscoveryCard {
  return { slug, version, title, summary, domain, minutes, visual: steps[0]!.visual };
}
