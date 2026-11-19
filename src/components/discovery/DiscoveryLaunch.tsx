"use client";

import { frenchSpacing } from "@/lib/typography";
import Link from "next/link";
import type { DiscoveryCard } from "@/lib/discovery/cards";
import { useDiscoveryProgress } from "@/lib/discovery/progress";
import { recommendDiscovery, type Recommendation } from "@/lib/discovery/recommendation";
import { useDiscoveryNow } from "@/lib/discovery/useNow";
import { DiscoveryPreview } from "./DiscoveryVisual";

export function DiscoveryLaunch({
  recommendation,
  compact = false,
}: {
  recommendation: Recommendation<DiscoveryCard>;
  compact?: boolean;
}) {
  const { lesson, kind } = recommendation;
  const reviewing = kind === "review" || kind === "practice";
  const context = {
    resume: "En cours",
    review: "À revoir aujourd’hui",
    practice: "À refaire",
    discover: "Découverte du jour",
  }[kind];
  const action =
    kind === "resume" ? "Reprendre" : reviewing ? "Réviser" : `Jouer · ${lesson.minutes} min`;
  return (
    <section
      className={`discovery-launch sticker ${compact ? "discovery-launch--compact" : ""}`}
      aria-label={context}
    >
      <p className="discovery-eyebrow">{context}</p>
      <h2 className="display text-2xl">{frenchSpacing(lesson.title)}</h2>
      <div className="discovery-launch-preview" aria-hidden="true">
        <DiscoveryPreview visual={lesson.visual} />
      </div>
      <Link
        className="btn discovery-launch-action"
        href={`/decouvrir/${lesson.slug}${reviewing ? "/reviser" : ""}`}
      >
        {action}
      </Link>
    </section>
  );
}

export function HomeDiscoveryLaunch({
  lessons,
  initialNow,
}: {
  lessons: DiscoveryCard[];
  initialNow: string;
}) {
  const progress = useDiscoveryProgress();
  const now = useDiscoveryNow(initialNow);
  const recommendation = recommendDiscovery(lessons, progress, now);
  if (!recommendation) return null;
  return <DiscoveryLaunch recommendation={recommendation} compact />;
}
