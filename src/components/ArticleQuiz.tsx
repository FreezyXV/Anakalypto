"use client";

import { useState } from "react";

import { frenchSpacing } from "@/lib/typography";

export type QuizQuestion = {
  question: string;
  options: string[];
  /** Index de la bonne reponse dans `options`, base 0. */
  answer: number;
  explanation: string;
};

const BOX_COLORS = ["--pop-blue", "--pop-red", "--pop-green", "--pop-purple", "--pop-orange"];
const LETTERS = "ABCDEF";

/**
 * Quiz de fin de lecon.
 *
 * Le parti pris est celui de l'apprentissage, non de l'examen: on repond a une question a la
 * fois, la reponse se revele immediatement avec son explication, et une erreur n'empeche pas
 * de continuer. Aucun score n'est conserve cote serveur, aucune sanction n'est appliquee: le
 * but est de fixer ce qui vient d'etre lu.
 *
 * Chaque question est un groupe de boutons radio, ce qui donne gratuitement la navigation au
 * clavier et l'annonce correcte par les lecteurs d'ecran. Le resultat est pose dans une zone
 * `aria-live` pour que la revelation soit annoncee sans deplacer le focus.
 */
export function ArticleQuiz({
  questions,
  onComplete,
}: {
  questions: readonly QuizQuestion[];
  /** Appelee une fois, quand toutes les questions ont recu une reponse. */
  onComplete?: () => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  if (questions.length === 0) return null;

  const answered = Object.keys(answers).length;
  const correct = questions.reduce(
    (total, question, index) => (answers[index] === question.answer ? total + 1 : total),
    0,
  );

  function choose(index: number, option: number) {
    // Une question deja repondue ne se rejoue pas: la bonne reponse est affichee.
    if (answers[index] !== undefined) return;
    const next = { ...answers, [index]: option };
    setAnswers(next);
    if (Object.keys(next).length === questions.length) onComplete?.();
  }

  return (
    <div>
      <p className="label max-w-reading leading-relaxed">
        Une seule bonne réponse par question. La réponse et son explication apparaissent dès que tu
        choisis.
      </p>

      <ol className="quiz-list mt-5 space-y-6">
        {questions.map((question, index) => (
          <Question
            key={question.question}
            index={index}
            total={questions.length}
            question={question}
            chosen={answers[index]}
            onChoose={(option) => choose(index, option)}
          />
        ))}
      </ol>

      {answered === questions.length && (
        <div
          className="box mt-8"
          style={{ "--box": "var(--pop-yellow)", "--box-on": "#1a1400" } as React.CSSProperties}
        >
          <p className="box__head">
            {correct} bonne{correct > 1 ? "s" : ""} réponse{correct > 1 ? "s" : ""} sur{" "}
            {questions.length}
          </p>
          <p className="box__body">
            {correct === questions.length
              ? "Tout est juste, bravo ! Tu as bien retenu la leçon."
              : "Relis les explications ci-dessus : elles reprennent les points manqués."}
          </p>
        </div>
      )}
    </div>
  );
}

function Question({
  index,
  total,
  question,
  chosen,
  onChoose,
}: {
  index: number;
  total: number;
  question: QuizQuestion;
  chosen: number | undefined;
  onChoose: (option: number) => void;
}) {
  const name = `quiz-${index}`;
  const revealed = chosen !== undefined;
  const color = BOX_COLORS[index % BOX_COLORS.length] ?? "--pop-blue";

  return (
    <li>
      <fieldset
        className="box"
        style={{ "--box": `var(${color})`, "--box-on": "#fff" } as React.CSSProperties}
      >
        <legend className="sr-only">
          Question {index + 1} sur {total}
        </legend>
        <p className="box__head" aria-hidden="true">
          Question {index + 1} sur {total}
        </p>

        <div className="box__body">
          <p className="max-w-reading text-[1.08rem] leading-snug font-semibold">
            {frenchSpacing(question.question)}
          </p>

          <div className="mt-3 space-y-2.5">
            {question.options.map((option, rank) => {
              const isAnswer = rank === question.answer;
              const isChosen = rank === chosen;

              let state = "bg-surface";
              if (revealed && isAnswer)
                state = "bg-[color-mix(in_srgb,var(--pop-green)_30%,var(--surface))]";
              else if (revealed && isChosen)
                state = "bg-[color-mix(in_srgb,var(--pop-red)_28%,var(--surface))]";

              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 rounded-xl border-[2.5px] border-line px-3 py-2.5 text-[0.98rem] leading-snug font-medium transition-colors duration-150 ${state} ${
                    revealed ? "cursor-default" : "cursor-pointer hover:bg-highlight"
                  } has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent`}
                >
                  <input
                    type="radio"
                    name={name}
                    value={rank}
                    checked={isChosen}
                    disabled={revealed}
                    onChange={() => onChoose(rank)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-line bg-surface font-sans text-sm font-extrabold"
                  >
                    {revealed && isAnswer ? "✓" : revealed && isChosen ? "✗" : LETTERS[rank]}
                  </span>
                  <span>{frenchSpacing(option)}</span>
                  {revealed && isAnswer && (
                    <span className="chip ml-auto shrink-0 bg-[var(--pop-green)] text-white">
                      Bonne réponse
                    </span>
                  )}
                </label>
              );
            })}
          </div>

          <div aria-live="polite">
            {revealed && (
              <p className="mt-3 max-w-reading rounded-xl border-2 border-dashed border-line bg-highlight/60 px-3 py-2 text-[0.95rem] leading-relaxed">
                {frenchSpacing(question.explanation)}
              </p>
            )}
          </div>
        </div>
      </fieldset>
    </li>
  );
}
