"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

import { ArticleQuiz, type QuizQuestion } from "./ArticleQuiz";
import { markRead } from "./ProgressBadge";

type Mode = "flow" | "cards";

const STORAGE_KEY = "anakalypto-lecture";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readMode(): Mode {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "cards" ? "cards" : "flow";
  } catch {
    return "flow";
  }
}

function writeMode(mode: Mode): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Le choix reste valable pour la page en cours meme sans stockage.
  }
  for (const listener of listeners) listener();
}

/**
 * Corps d'une lecon: les sections de l'article, puis le quiz, en deux modes de lecture.
 *
 * - En continu (par defaut), les cartes sont empilees. Le texte complet est dans la page, ce
 *   qui sert la lecture, l'impression et l'indexation.
 * - En cartes, la meme page devient une piste horizontale: une carte par ecran, que l'on fait
 *   defiler au doigt ou avec les fleches. Le defilement reste natif (`scroll-snap`), sans
 *   bibliotheque de gestes.
 *
 * Le HTML des sections vient de la chaine Markdown du site; le quiz est un composant a part.
 */
export function Lesson({
  html,
  quiz,
  path,
}: {
  html: string;
  quiz: readonly QuizQuestion[];
  /** Chemin de l'article, pour garder la trace de la lecon terminee. */
  path: string;
}) {
  const mode = useSyncExternalStore(subscribe, readMode, () => "flow" as Mode);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const cards = useCallback((): HTMLElement[] => {
    return Array.from(track.current?.querySelectorAll<HTMLElement>(".lesson-card") ?? []);
  }, []);

  // Nombre de cartes: celles du texte, comptees dans le HTML, plus celle du quiz.
  const count = useMemo(
    () => (html.match(/<section class="lesson-card/g)?.length ?? 0) + (quiz.length > 0 ? 1 : 0),
    [html, quiz.length],
  );

  // En mode cartes: numero de la carte visible, deduit de la position de defilement.
  useEffect(() => {
    const element = track.current;
    if (!element || mode !== "cards") return;

    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const list = cards();
        const first = list[0];
        const second = list[1];
        if (!element || !first) return;
        const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
        const next = Math.min(list.length - 1, Math.max(0, Math.round(element.scrollLeft / step)));
        setIndex(next);
        if (next === list.length - 1 && list.length > 1) markRead(path);
      });
    }

    element.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [mode, cards, path]);

  // En lecture continue: la lecon est terminee quand on atteint sa fin.
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sentinel = end.current;
    if (!sentinel || mode !== "flow") return;
    const observer = new IntersectionObserver(
      (records) => {
        if (records.some((record) => record.isIntersecting)) markRead(path);
      },
      { threshold: 0.2 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [mode, path]);

  function go(target: number) {
    const list = cards();
    const clamped = Math.min(list.length - 1, Math.max(0, target));
    list[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setIndex(clamped);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (mode !== "cards") return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  const cardMode = mode === "cards";

  return (
    <div onKeyDown={onKeyDown}>
      <div className="flex flex-wrap items-center gap-3">
        <div role="group" aria-label="Mode de lecture" className="flex gap-2">
          <button
            type="button"
            className={`btn ${cardMode ? "btn--ghost" : ""}`}
            aria-pressed={!cardMode}
            onClick={() => writeMode("flow")}
          >
            Lecture continue
          </button>
          <button
            type="button"
            className={`btn ${cardMode ? "" : "btn--ghost"}`}
            aria-pressed={cardMode}
            onClick={() => writeMode("cards")}
          >
            Lecture en cartes
          </button>
        </div>

        {cardMode && count > 1 && (
          <p className="label ml-auto" aria-live="polite">
            Carte {index + 1} sur {count}
          </p>
        )}
      </div>

      {cardMode && count > 1 && (
        <div className="mt-4 flex gap-1.5" aria-hidden="true">
          {Array.from({ length: count }, (_, position) => (
            <button
              key={position}
              type="button"
              tabIndex={-1}
              onClick={() => go(position)}
              className={`h-3 flex-1 rounded-full border-2 border-line transition-colors ${
                position <= index ? "bg-[var(--pop-green)]" : "bg-surface"
              }`}
            />
          ))}
        </div>
      )}

      <div
        ref={track}
        className="lesson-track prose mt-5"
        data-mode={mode}
        tabIndex={cardMode ? 0 : undefined}
        aria-label={cardMode ? "Cartes de la leçon, faire défiler horizontalement" : undefined}
      >
        {/* `display: contents`: les sections deviennent des enfants directs de la piste. */}
        <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />

        {quiz.length > 0 && (
          <section className="lesson-card lesson-card--quiz" id="quiz">
            <h2 id="titre-quiz">
              <span className="lesson-title">Teste-toi !</span>
            </h2>
            <ArticleQuiz questions={quiz} onComplete={() => markRead(path)} />
          </section>
        )}
      </div>

      <div ref={end} aria-hidden="true" />

      {cardMode && count > 1 && (
        <div className="mt-2 flex items-center justify-between gap-3">
          <button
            type="button"
            className="btn btn--ghost"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            Précédente
          </button>
          <button
            type="button"
            className="btn"
            disabled={index === count - 1}
            onClick={() => go(index + 1)}
          >
            Suivante
          </button>
        </div>
      )}
    </div>
  );
}
