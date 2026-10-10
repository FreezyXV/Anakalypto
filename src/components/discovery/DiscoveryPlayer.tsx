"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  next,
}: {
  lesson: DiscoveryLesson;
  next?: { slug: string; title: string };
}) {
  const progress = useDiscoveryProgress();
  const stored = progress[lesson.slug];
  const session = stored?.version === lesson.version ? stored : freshSession(lesson.version);
  const index = Math.min(session.step, lesson.steps.length - 1);
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
  const firstMistake = Object.values(session.firstCorrect).some((correct) => !correct);
  const checkpoints = lesson.steps.filter(
    (item) => item.interaction?.kind === "choice" && item.interaction.checkpoint,
  );
  const allChecksPassed = checkpoints.every(
    (item) =>
      item.interaction?.kind === "choice" &&
      session.choices[item.id] === item.interaction.correctOptionId,
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

  if (session.completed)
    return (
      <section className="discovery-result sticker p-6 sm:p-8" aria-labelledby="discovery-complete">
        <span className="discovery-eyebrow">
          {session.status === "understood" ? "Défis réussis" : "À revoir tranquillement"}
        </span>
        <h1 ref={heading} tabIndex={-1} id="discovery-complete" className="display mt-3 text-3xl">
          Une idée de plus à explorer
        </h1>
        <p className="mt-4 text-lg">{lesson.objective}</p>
        <p className="mt-3 text-ink-muted">
          {session.status === "understood"
            ? "Tu as réussi les défis au premier essai. Reviens demain pour voir ce que tu as retenu."
            : "Tu as corrigé tes réponses. Une nouvelle tentative demain aidera à revoir les points qui t’ont fait hésiter."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/decouvrir/${lesson.slug}/reviser`} className="btn">
            {session.review && !session.review.completed
              ? "Poursuivre ma révision"
              : "Tester ce que j’ai retenu"}
          </Link>
          {next && (
            <Link href={`/decouvrir/${next.slug}`} className="btn">
              Découvrir : {next.title}
            </Link>
          )}
          <Link href={lesson.expandedPath} className="btn btn--ghost">
            Approfondir
          </Link>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => persist(freshSession(lesson.version))}
          >
            Rejouer
          </button>
        </div>
        <Link href="/decouvrir" className="mt-5 inline-block font-sans font-semibold">
          Voir mes découvertes
        </Link>
        {storageWarning && (
          <p role="status" className="mt-4 text-sm">
            Le stockage est indisponible : ta progression est conservée seulement pendant cette
            session.
          </p>
        )}
      </section>
    );

  return (
    <section className="discovery-player" aria-label={`Découverte : ${lesson.title}`}>
      <div className="discovery-topline">
        <Link href="/decouvrir">← Découvrir</Link>
        <span>
          {lesson.minutes} min · {lesson.domain}
        </span>
      </div>
      <div
        className="discovery-progress"
        role="progressbar"
        aria-label="Étapes de la découverte"
        aria-valuemin={0}
        aria-valuemax={lesson.steps.length}
        aria-valuenow={index + 1}
      >
        {lesson.steps.map((item, position) => (
          <span key={item.id} data-filled={position <= index} />
        ))}
      </div>
      <div className="sticker discovery-panel">
        <p className="discovery-eyebrow">
          {lesson.title} · {index + 1}/{lesson.steps.length}
        </p>
        <h1 ref={heading} tabIndex={-1} className="display discovery-step-title">
          {step.title}
        </h1>
        <DiscoveryVisual visual={step.visual} value={visualValue} />
        <p className="discovery-copy">{step.text}</p>
        {interaction && (
          <DiscoveryInteraction
            step={step}
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
        {firstMistake &&
          interaction?.kind === "choice" &&
          chosen === interaction.correctOptionId && (
            <p className="discovery-hint">Tu peux te tromper et essayer à nouveau.</p>
          )}
        <div className="discovery-controls">
          <button
            className="btn btn--ghost"
            type="button"
            disabled={index === 0}
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
