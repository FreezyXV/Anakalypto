"use client";

import { frenchSpacing } from "@/lib/typography";
import Link from "next/link";
import { useState } from "react";
import { useDiscoveryProgress } from "@/lib/discovery/progress";
import { recommendDiscovery } from "@/lib/discovery/recommendation";
import { useDiscoveryNow } from "@/lib/discovery/useNow";
import type { DiscoveryCard } from "@/lib/discovery/cards";
import { DiscoveryPreview } from "./DiscoveryVisual";
import { DiscoveryLaunch } from "./DiscoveryLaunch";

export function DiscoveryCatalog({
  lessons,
  now: initialNow,
}: {
  lessons: DiscoveryCard[];
  now: string;
}) {
  const progress = useDiscoveryProgress();
  const now = useDiscoveryNow(initialNow);
  const [domain, setDomain] = useState("Tous");
  const domains = Array.from(new Set(lessons.map((lesson) => lesson.domain)));
  const sessions = lessons.map((lesson) => ({
    lesson,
    session: progress[lesson.slug]?.version === lesson.version ? progress[lesson.slug] : undefined,
  }));
  const recommendation = recommendDiscovery(lessons, progress, now);
  const completed = sessions.filter(({ session }) => session?.completed).length;
  const due = sessions.filter(
    ({ session }) => session?.completed && session.reviewAt && session.reviewAt <= now,
  );
  return (
    <>
      <div className="discovery-catalog-intro">
        <h1 className="display text-4xl sm:text-6xl">Découvertes</h1>
        <p className="mt-2 text-ink-muted">Une idée à explorer en quelques minutes.</p>
      </div>
      {recommendation ? (
        <DiscoveryLaunch recommendation={recommendation} />
      ) : (
        <p className="mt-6">Les découvertes seront disponibles prochainement.</p>
      )}
      <div className="mt-7 flex flex-wrap gap-3 font-sans text-sm">
        <span className="chip">
          {completed}/{lessons.length} découvertes terminées
        </span>
        {due.length > 0 && <span className="chip">{due.length} à revoir aujourd’hui</span>}
      </div>
      <div className="discovery-filter mt-5">
        <label htmlFor="discovery-domain">Filtrer par domaine</label>
        <select
          id="discovery-domain"
          value={domain}
          onChange={(event) => setDomain(event.target.value)}
        >
          <option value="Tous">Tous les domaines</option>
          {domains.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <ul className="discovery-catalog-grid mt-6">
        {sessions
          .filter(({ lesson }) => domain === "Tous" || lesson.domain === domain)
          .map(({ lesson, session }) => {
            const revisit = !!(session?.completed && session.reviewAt && session.reviewAt <= now);
            const reviewing = !!(session?.review && !session.review.completed);
            const label = reviewing
              ? "Révision en cours"
              : revisit
                ? "À revoir aujourd’hui"
                : session?.review?.completed
                  ? session.review.passed
                    ? "Révision réussie"
                    : "À revoir"
                  : session?.status === "understood"
                    ? "Défis réussis"
                    : session?.status === "review"
                      ? "À revoir"
                      : session
                        ? "En cours"
                        : "À découvrir";
            return (
              <li key={lesson.slug}>
                <Link
                  href={`/decouvrir/${lesson.slug}${revisit || (session?.review && !session.review.completed) ? "/reviser" : ""}`}
                  className="discovery-catalog-card sticker"
                >
                  <span className="discovery-eyebrow">
                    {lesson.domain} · {lesson.minutes} min
                  </span>
                  <h2 className="display mt-3 text-2xl">{frenchSpacing(lesson.title)}</h2>
                  <div className="discovery-card-preview" aria-hidden="true">
                    <DiscoveryPreview visual={lesson.visual} />
                  </div>
                  <p className="mt-3 text-ink-muted">{lesson.summary}</p>
                  <span className="chip mt-5 self-start">{label}</span>
                  <span className="mt-4 font-sans font-bold">
                    {reviewing
                      ? "Poursuivre la révision"
                      : revisit
                        ? "Réviser"
                        : session?.completed
                          ? "Revoir la découverte"
                          : session
                            ? "Reprendre"
                            : "Jouer"}{" "}
                    →
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
      <p className="discovery-hint mt-6">
        La progression reste dans ce navigateur. « Défis réussis » indique tes réponses au premier
        essai ; une nouvelle tentative le lendemain permet de revoir l’idée.
      </p>
      <Link href="/categories" className="mt-5 inline-block font-sans font-semibold">
        Explorer les articles pour approfondir →
      </Link>
    </>
  );
}
