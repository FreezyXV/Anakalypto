"use client";

import { frenchSpacing } from "@/lib/typography";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { openingStepIndex, visibleStepIndex } from "@/lib/discovery/player-steps";
import { getCheckpoints } from "@/lib/discovery/review";
import { useDiscoveryNow } from "@/lib/discovery/useNow";
import type { DiscoveryLesson } from "@/lib/discovery/schema";
import {
  completeSession,
  freshSession,
  saveSession,
  useDiscoveryProgress,
} from "@/lib/discovery/progress";
import { DiscoveryVisual } from "./DiscoveryVisual";
import { DiscoveryInteraction } from "./DiscoveryInteraction";

export function DiscoveryPlayer({
  lesson,
  following,
  initialNow,
}: {
  lesson: DiscoveryLesson;
  following: Pick<DiscoveryLesson, "slug" | "title" | "version">[];
  initialNow: string;
}) {
  const progress = useDiscoveryProgress();
  const stored = progress[lesson.slug];
  const session = stored?.version === lesson.version ? stored : freshSession(lesson.version);
  const now = useDiscoveryNow(initialNow);
  const firstIndex = openingStepIndex(lesson.steps);
  const index = visibleStepIndex(lesson.steps, session.step);
  const currentNumber = index - firstIndex + 1;
  const total = lesson.steps.length - firstIndex;
  const step = lesson.steps[index]!;
  const heading = useRef<HTMLHeadingElement>(null);
  const [storageWarning, setStorageWarning] = useState(false);
  const screen = `${index}-${session.completed}`;
  const lastStep = useRef(screen);

  useEffect(() => {
    if (lastStep.current !== screen) {
      heading.current?.focus();
      lastStep.current = screen;
    }
  }, [screen]);

  function persist(nextSession: typeof session) {
    if (!saveSession(lesson.slug, nextSession)) setStorageWarning(true);
  }

  function update(patch: Partial<typeof session>) {
    persist({ ...session, ...patch, updatedAt: new Date().toISOString() });
  }
  const interaction = step.interaction;
  const chosen = session.choices[step.id];
  const value = session.values[step.id];
  const ready =
    !interaction ||
    (interaction.kind === "choice" ? chosen === interaction.correctOptionId : value !== undefined);
  const visualValue =
    interaction?.kind === "choice" || !interaction ? (step.visual.active ? 100 : 0) : (value ?? 0);
  const checkpoints = getCheckpoints(lesson.steps);
  const lastChallenge = checkpoints.at(-1)?.id === step.id;
  const opening = firstIndex > 0 && index === firstIndex;
  const handsOn = interaction?.kind === "toggle" || interaction?.kind === "range";
  const allChecksPassed = checkpoints.every(
    (item) => session.choices[item.id] === item.interaction.correctOptionId,
  );

  function finish() {
    if (allChecksPassed)
      persist(
        completeSession(
          session,
          checkpoints.map((item) => item.id),
        ),
      );
  }

  if (session.completed) {
    const next = following.find((candidate) => {
      const entry = progress[candidate.slug];
      return entry?.version !== candidate.version || !entry.completed;
    });
    const reviewing = !!session.review && !session.review.completed;
    const reviewDue = !!session.reviewAt && session.reviewAt <= now;
    return (
      <section className="discovery-result sticker p-6 sm:p-8" aria-labelledby="discovery-complete">
        <h1 ref={heading} tabIndex={-1} id="discovery-complete" className="display text-3xl">
          Découverte terminée
        </h1>
        <p className="mt-4 text-lg">{lesson.objective}</p>
        {next ? (
          <div className="discovery-next">
            <p className="discovery-eyebrow">À suivre</p>
            <p className="font-semibold">{frenchSpacing(next.title)}</p>
            <Link href={`/decouvrir/${next.slug}`} className="btn mt-3">
              Découverte suivante
            </Link>
          </div>
        ) : (
          <Link href="/decouvrir" className="btn mt-5">
            Voir mes découvertes
          </Link>
        )}
        <div className="discovery-result-links">
          <Link href={`${lesson.expandedPath}#lecon`}>Approfondir</Link>
          {reviewDue || reviewing ? (
            <Link href={`/decouvrir/${lesson.slug}/reviser`}>
              {reviewing ? "Reprendre la révision" : "Réviser"}
            </Link>
          ) : null}
          <button type="button" onClick={() => persist(freshSession(lesson.version))}>
            Rejouer
          </button>
        </div>
        {!reviewDue && !reviewing && !session.review?.completed ? (
          <p className="discovery-hint">Ta révision sera proposée dans Découvertes.</p>
        ) : null}
        {storageWarning && (
          <p role="status" className="mt-4 text-sm">
            Le stockage est indisponible : ta progression est conservée seulement pendant cette
            session.
          </p>
        )}
      </section>
    );
  }

  return (
    <section className="discovery-player" aria-label={`Découverte : ${lesson.title}`}>
      <div className="discovery-topline">
        <Link href="/decouvrir">← Découvertes</Link>
        <span>
          {currentNumber}/{total} · {lesson.minutes} min
        </span>
      </div>
      <div
        className="discovery-progress"
        role="progressbar"
        aria-label="Étapes de la découverte"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={currentNumber}
      >
        {lesson.steps.slice(firstIndex).map((item, position) => (
          <span key={item.id} data-filled={position < currentNumber} />
        ))}
      </div>
      <div className="sticker discovery-panel">
        {opening ? null : <p className="discovery-eyebrow">{frenchSpacing(lesson.title)}</p>}
        <h1 ref={heading} tabIndex={-1} className="display discovery-step-title">
          {frenchSpacing(opening ? lesson.title : step.title)}
        </h1>
        {lastChallenge ? null : (
          <DiscoveryVisual visual={step.visual} value={visualValue} stateCaption compact />
        )}
        {handsOn ? (
          <p className="discovery-task">{opening ? step.title : step.text}</p>
        ) : lastChallenge ? null : (
          <p className="discovery-copy">{step.text}</p>
        )}
        {interaction && (
          <DiscoveryInteraction
            step={step}
            compact
            chosen={chosen}
            value={value}
            onValue={(newValue) => update({ values: { ...session.values, [step.id]: newValue } })}
            onChoice={(id) => {
              if (interaction.kind !== "choice") return;
              update({
                choices: { ...session.choices, [step.id]: id },
                firstCorrect: {
                  ...session.firstCorrect,
                  [step.id]: session.firstCorrect[step.id] ?? id === interaction.correctOptionId,
                },
              });
            }}
          />
        )}
        <div className="discovery-controls">
          <button
            className="btn btn--ghost"
            type="button"
            disabled={index === firstIndex}
            onClick={() => update({ step: index - 1 })}
          >
            Retour
          </button>
          <button
            className="btn"
            type="button"
            disabled={!ready || (index === lesson.steps.length - 1 && !allChecksPassed)}
            onClick={() =>
              index === lesson.steps.length - 1 ? finish() : update({ step: index + 1 })
            }
          >
            {index === lesson.steps.length - 1 ? "Terminer" : "Continuer"}
          </button>
        </div>
        {!ready && (
          <p className="discovery-hint">
            {interaction?.kind === "choice"
              ? "Choisis une réponse. Tu peux réessayer."
              : "Essaie le réglage pour continuer."}
          </p>
        )}
        {opening ? (
          <details className="discovery-opening-context">
            <summary>Pourquoi ça marche ?</summary>
            <p>{lesson.steps[0]!.text}</p>
            <p>{step.text}</p>
          </details>
        ) : null}
        {lastChallenge && ready ? (
          <details className="discovery-opening-context">
            <summary>Revoir le schéma</summary>
            <DiscoveryVisual visual={step.visual} value={visualValue} stateCaption compact />
            <p>{step.text}</p>
          </details>
        ) : null}
        {index === lesson.steps.length - 1 && ready && !allChecksPassed && (
          <p className="discovery-hint">Reviens aux étapes précédentes pour terminer les défis.</p>
        )}
      </div>
      <p className="discovery-hint">Schéma simplifié pour comprendre le mécanisme.</p>
      {storageWarning && (
        <p role="status" className="discovery-hint">
          Le stockage est indisponible. La reprise après fermeture ne sera pas conservée.
        </p>
      )}
    </section>
  );
}
