"use client";

import Link from "next/link";
import { useState } from "react";
import { useDiscoveryProgress } from "@/lib/discovery/progress";
import { recommendDiscovery } from "@/lib/discovery/recommendation";
import { useDiscoveryNow } from "@/lib/discovery/useNow";
import type { DiscoveryStep } from "@/lib/discovery/schema";
import { DiscoveryPreview } from "./DiscoveryVisual";

export type DiscoveryCard = {
  slug: string;
  version: number;
  title: string;
  summary: string;
  domain: string;
  minutes: number;
  visual: DiscoveryStep["visual"];
};

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
  const resume =
    recommendation?.kind === "resume"
      ? sessions.find(({ lesson }) => lesson.slug === recommendation.lesson.slug)
      : undefined;
  const reviewing = recommendation?.kind === "review" || recommendation?.kind === "practice";
  const completed = sessions.filter(({ session }) => session?.completed).length;
  const due = sessions.filter(
    ({ session }) => session?.completed && session.reviewAt && session.reviewAt <= now,
  );
  return (
    <>
      <div className="discovery-catalog-intro">
        <span className="discovery-eyebrow">Quelques minutes, une nouvelle idée</span>
        <h1 className="display mt-3 text-4xl sm:text-6xl">Essaie. Observe. Comprends.</h1>
        <p className="mt-4 max-w-reading text-lg text-ink-muted">
          Explore un sujet, manipule un schéma et relève un défi. Une idée à la fois, à ton rythme.
        </p>
        <p className="label mt-3">Accessible dès 10 ans · sans compte · sources consultables</p>
      </div>
      {recommendation ? (
        <section
          className="discovery-launch sticker p-5 sm:p-7"
          aria-label={
            resume ? "Reprendre ma découverte" : reviewing ? "Révision express" : "Défi du jour"
          }
        >
          <span className="discovery-eyebrow">
            {resume
              ? "Reprends là où tu en étais"
              : reviewing
                ? "Teste ce que tu as retenu"
                : "Ta découverte du jour"}
          </span>
          <h2 className="display mt-2 text-2xl">{recommendation.lesson.title}</h2>
          <div className="discovery-launch-preview" aria-hidden="true">
            <DiscoveryPreview visual={recommendation.lesson.visual} />
          </div>
          <p className="mt-2">
            {resume
              ? `Étape ${(resume.session?.step ?? 0) + 1} · ta progression est enregistrée sur cet appareil.`
              : reviewing
                ? "Quelques questions, sans relire la leçon. Ta découverte reste enregistrée."
                : "Une petite expérience pour commencer, sans préparation."}
          </p>
          <Link
            className="btn mt-4"
            href={`/decouvrir/${recommendation.lesson.slug}${reviewing ? "/reviser" : ""}`}
          >
            {resume ? "Reprendre" : reviewing ? "Réviser maintenant" : "Essayer maintenant"}
          </Link>
        </section>
      ) : (
        <p className="mt-6">
          Les découvertes seront disponibles prochainement. Tu peux déjà explorer les articles.
        </p>
      )}
      <div className="mt-7 flex flex-wrap gap-3 font-sans text-sm">
        <span className="chip">
          {completed}/{lessons.length} découvertes terminées
        </span>
        {due.length > 0 && <span className="chip">{due.length} à revoir aujourd’hui</span>}
      </div>
      <fieldset className="mt-7">
        <legend className="font-sans font-bold">Choisis ton terrain de jeu</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Tous", ...domains].map((item) => (
            <button
              type="button"
              key={item}
              className={`btn ${domain === item ? "" : "btn--ghost"}`}
              aria-pressed={domain === item}
              onClick={() => setDomain(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>
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
                  <h2 className="display mt-3 text-2xl">{lesson.title}</h2>
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
                            ? "Continuer"
                            : "Commencer"}{" "}
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
