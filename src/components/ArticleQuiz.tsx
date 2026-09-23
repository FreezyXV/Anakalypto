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

/**
 * Quiz de fin d'article.
 *
 * Le parti pris est celui de l'apprentissage, non de l'examen: on repond a une question a la
 * fois, la reponse se revele immediatement avec son explication, et une erreur n'empeche pas
 * de continuer. Aucun score n'est conserve, aucune sanction n'est appliquee: le but est de
 * fixer ce qui vient d'etre lu.
 *
 * Chaque question est un groupe de boutons radio, ce qui donne gratuitement la navigation au
 * clavier et l'annonce correcte par les lecteurs d'ecran. Le resultat est pose dans une zone
 * `aria-live` pour que la revelation soit annoncee sans deplacer le focus.
 */
export function ArticleQuiz({ questions }: { questions: readonly QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  if (questions.length === 0) return null;

  const answered = Object.keys(answers).length;
  const correct = questions.reduce(
    (total, question, index) => (answers[index] === question.answer ? total + 1 : total),
    0,
  );

  return (
    <section aria-labelledby="titre-quiz" className="mt-12">
      <h2 id="titre-quiz" className="rule-bottom pb-2 font-sans text-sm font-semibold">
        Avez-vous retenu&nbsp;?
      </h2>

      <p className="label mt-3 max-w-reading leading-relaxed">
        Une seule bonne réponse par question. La réponse et son explication apparaissent dès que
        vous choisissez.
      </p>

      <ol className="mt-6 space-y-8">
        {questions.map((question, index) => (
          <Question
            key={question.question}
            index={index}
            question={question}
            chosen={answers[index]}
            onChoose={(option) =>
              setAnswers((current) =>
                // Une question deja repondue ne se rejoue pas: la bonne reponse est affichee.
                current[index] === undefined ? { ...current, [index]: option } : current,
              )
            }
          />
        ))}
      </ol>

      {answered === questions.length && (
        <p className="rule-top mt-8 pt-4 text-[0.95rem]">
          {correct} bonne réponse{correct > 1 ? "s" : ""} sur {questions.length}.{" "}
          {correct === questions.length
            ? "Tout est juste."
            : "Les explications ci-dessus reprennent les points manqués."}
        </p>
      )}
    </section>
  );
}

function Question({
  index,
  question,
  chosen,
  onChoose,
}: {
  index: number;
  question: QuizQuestion;
  chosen: number | undefined;
  onChoose: (option: number) => void;
}) {
  const name = `quiz-${index}`;
  const revealed = chosen !== undefined;

  return (
    <li>
      <fieldset>
        <legend className="max-w-reading leading-snug font-semibold">
          {index + 1}. {frenchSpacing(question.question)}
        </legend>

        <div className="mt-3 space-y-1.5">
          {question.options.map((option, rank) => {
            const isAnswer = rank === question.answer;
            const isChosen = rank === chosen;

            // Apres reponse: la bonne est soulignee, le mauvais choix signale, le reste neutre.
            let state = "border-rule";
            if (revealed && isAnswer) state = "border-ink bg-highlight";
            else if (revealed && isChosen) state = "border-rule-strong line-through opacity-70";

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-baseline gap-2.5 border px-3 py-2 text-[0.95rem] leading-snug transition-colors duration-150 ${state} ${
                  revealed ? "cursor-default" : "hover:border-rule-strong"
                }`}
              >
                <input
                  type="radio"
                  name={name}
                  value={rank}
                  checked={isChosen}
                  disabled={revealed}
                  onChange={() => onChoose(rank)}
                  className="mt-0.5 shrink-0 accent-[var(--accent)]"
                />
                <span>{frenchSpacing(option)}</span>
                {revealed && isAnswer && (
                  <span className="label ml-auto shrink-0">Bonne réponse</span>
                )}
              </label>
            );
          })}
        </div>

        <div aria-live="polite" className="mt-2">
          {revealed && (
            <p className="max-w-reading border-l-2 border-rule-strong pl-3 text-[0.95rem] leading-relaxed text-ink-muted">
              {frenchSpacing(question.explanation)}
            </p>
          )}
        </div>
      </fieldset>
    </li>
  );
}
