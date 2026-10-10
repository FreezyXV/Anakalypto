"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { saveSession, useDiscoveryProgress } from "@/lib/discovery/progress";
import { completeReview, freshReview, getCheckpoints } from "@/lib/discovery/review";
import type { DiscoveryLesson } from "@/lib/discovery/schema";
import { DiscoveryInteraction } from "./DiscoveryInteraction";
import { DiscoveryVisual } from "./DiscoveryVisual";

export function DiscoveryReview({ lesson }: { lesson: DiscoveryLesson }) {
  const progress = useDiscoveryProgress();
  const session =
    progress[lesson.slug]?.version === lesson.version ? progress[lesson.slug] : undefined;
  const checkpoints = getCheckpoints(lesson.steps);
  const review = session?.review && !session.review.completed ? session.review : freshReview();
  const index = Math.min(review.step, checkpoints.length - 1);
  const step = checkpoints[index]!;
  const [showResult, setShowResult] = useState(false);
  const [storageWarning, setStorageWarning] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const screen = `${index}-${showResult}`;
  const lastScreen = useRef(screen);
  useEffect(() => {
    if (screen !== lastScreen.current) {
      heading.current?.focus();
      lastScreen.current = screen;
    }
  }, [screen]);

  if (!session?.completed)
    return (
      <section className="sticker discovery-panel">
        <h1 className="display text-3xl">Découvre d’abord le sujet</h1>
        <p className="mt-4">
          La révision reprend les défis d’une découverte terminée dans ce navigateur.
        </p>
        <Link className="btn mt-5" href={`/decouvrir/${lesson.slug}`}>
          Commencer la découverte
        </Link>
      </section>
    );
  function persist(next: typeof session) {
    if (next && !saveSession(lesson.slug, next)) setStorageWarning(true);
  }
  const correct = review.choices[step.id] === step.interaction.correctOptionId;
  const allCorrect = checkpoints.every(
    (item) => review.choices[item.id] === item.interaction.correctOptionId,
  );
  const warning = storageWarning ? (
    <p className="discovery-hint" role="status">
      Le stockage est indisponible. Cette révision reste dans la session actuelle.
    </p>
  ) : null;

  if (showResult)
    return (
      <section className="sticker discovery-panel">
        <span className="discovery-eyebrow">Révision terminée</span>
        <h1 ref={heading} tabIndex={-1} className="display discovery-step-title">
          {session.review?.passed
            ? "Tu as retrouvé les bonnes réponses"
            : "Les points difficiles sont revus"}
        </h1>
        <p className="mt-4">
          {session.review?.passed
            ? `Tu as répondu aux ${checkpoints.length} défis au premier essai.`
            : "Tu as corrigé tes réponses. Une nouvelle tentative demain permettra de revoir ces points."}
        </p>
        {session.reviewAt && (
          <p className="discovery-hint">
            Prochaine révision proposée le{" "}
            {new Intl.DateTimeFormat("fr-FR", {
              timeZone: "Europe/Paris",
              day: "numeric",
              month: "long",
            }).format(new Date(session.reviewAt))}
            .
          </p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn" href="/decouvrir">
            Choisir une autre découverte
          </Link>
          <Link className="btn btn--ghost" href={lesson.expandedPath}>
            Approfondir
          </Link>
        </div>
        {warning}
      </section>
    );
  return (
    <section aria-label={`Révision : ${lesson.title}`}>
      <div className="discovery-topline">
        <Link href="/decouvrir">← Découvrir</Link>
        <span>
          Révision express · {index + 1}/{checkpoints.length}
        </span>
      </div>
      <div className="sticker discovery-panel">
        <span className="discovery-eyebrow">{lesson.title}</span>
        <h1 ref={heading} tabIndex={-1} className="display discovery-step-title">
          Qu’as-tu retenu ?
        </h1>
        <p className="discovery-hint">
          Essaie de répondre sans relire l’explication. Tu peux te tromper et corriger.
        </p>
        <DiscoveryInteraction
          step={step}
          chosen={review.choices[step.id]}
          onValue={() => {}}
          onChoice={(id) =>
            persist({
              ...session,
              updatedAt: new Date().toISOString(),
              review: {
                ...review,
                choices: { ...review.choices, [step.id]: id },
                firstCorrect: {
                  ...review.firstCorrect,
                  [step.id]:
                    review.firstCorrect[step.id] ?? id === step.interaction.correctOptionId,
                },
              },
            })
          }
        />
        {review.choices[step.id] && (
          <DiscoveryVisual visual={step.visual} value={step.visual.active ? 100 : 0} />
        )}
        <div className="discovery-controls">
          <Link className="btn btn--ghost" href={lesson.expandedPath}>
            Relire l’explication
          </Link>
          <button
            className="btn"
            type="button"
            disabled={!correct || (index === checkpoints.length - 1 && !allCorrect)}
            onClick={() => {
              if (index === checkpoints.length - 1) {
                persist(completeReview(session, review, checkpoints));
                setShowResult(true);
              } else
                persist({
                  ...session,
                  review: { ...review, step: index + 1 },
                  updatedAt: new Date().toISOString(),
                });
            }}
          >
            {index === checkpoints.length - 1 ? "Terminer" : "Continuer"}
          </button>
        </div>
        {warning}
      </div>
    </section>
  );
}
