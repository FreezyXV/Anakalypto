"use client";

import type { DiscoveryStep } from "@/lib/discovery/schema";
import { PISTON_PHASES, pistonState } from "@/lib/discovery/visual-state";
import { isSequentialKind, MECHANISM_STAGES } from "@/lib/discovery/mechanisms";

export function DiscoveryInteraction({
  step,
  chosen,
  value,
  onValue,
  onChoice,
}: {
  step: DiscoveryStep;
  chosen?: string;
  value?: number;
  onValue: (value: number) => void;
  onChoice: (id: string) => void;
}) {
  const interaction = step.interaction;
  if (!interaction) return null;
  if (interaction.kind === "choice") {
    const answer = interaction.options.find((option) => option.id === chosen);
    const correct = chosen === interaction.correctOptionId;
    return (
      <fieldset className="discovery-interaction">
        <legend>{interaction.question}</legend>
        <div className="discovery-options">
          {interaction.options.map((option) => (
            <button
              type="button"
              key={option.id}
              aria-pressed={chosen === option.id}
              className="discovery-option"
              data-selected={chosen === option.id}
              onClick={() => onChoice(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="discovery-feedback" aria-live="polite" aria-atomic="true">
          {answer && (
            <>
              <strong>{correct ? "✓ Bien vu. " : "Essaie encore. "}</strong>
              {answer.feedback}
            </>
          )}
        </p>
      </fieldset>
    );
  }
  if (interaction.kind === "toggle")
    return (
      <div className="discovery-interaction">
        <button
          type="button"
          className="discovery-switch"
          role="switch"
          aria-checked={(value ?? 0) > 0}
          aria-label={interaction.label}
          onClick={() => onValue((value ?? 0) > 0 ? 0 : 100)}
        >
          <span aria-hidden="true" className="discovery-switch-track">
            <span />
          </span>
          {(value ?? 0) > 0 ? interaction.onLabel : interaction.offLabel}
        </button>
        <p className="discovery-feedback" aria-live="polite">
          {value !== undefined && (value > 0 ? interaction.onFeedback : interaction.offFeedback)}
        </p>
      </div>
    );
  const level = (value ?? 0) < 34 ? "Faible" : (value ?? 0) < 67 ? "Modéré" : "Important";
  const labels = isSequentialKind(step.visual.kind)
    ? MECHANISM_STAGES[step.visual.kind]
    : step.visual.kind === "flow"
      ? step.visual.labels
      : undefined;
  const stage = labels ? Math.round(((value ?? 0) / 100) * (labels.length - 1)) : undefined;
  const valueLabel =
    step.visual.kind === "piston"
      ? pistonState(value ?? 0).cycleComplete
        ? "Cycle terminé : retour à l’admission"
        : `Temps ${pistonState(value ?? 0).phase + 1} : ${pistonState(value ?? 0).name}`
      : labels && stage !== undefined
        ? `Étape ${stage + 1} : ${labels[stage]}`
        : level;
  return (
    <div className="discovery-interaction">
      <label htmlFor={`range-${step.id}`}>
        {interaction.label} : <strong>{valueLabel}</strong>
      </label>
      <input
        id={`range-${step.id}`}
        type="range"
        min="0"
        max="100"
        step={step.visual.kind === "piston" ? 1 : 10}
        value={value ?? 0}
        aria-valuetext={valueLabel}
        onChange={(event) => onValue(Number(event.target.value))}
      />
      <div className="discovery-range-labels">
        <span>{interaction.minLabel}</span>
        <span>{interaction.maxLabel}</span>
      </div>
      {step.visual.kind === "piston" && (
        <div className="discovery-phase-options" aria-label="Choisir un temps du moteur">
          {PISTON_PHASES.map((name, index) => (
            <button
              key={name}
              className="discovery-option"
              type="button"
              aria-pressed={value !== undefined && pistonState(value).phase === index}
              data-selected={value !== undefined && pistonState(value).phase === index}
              onClick={() => onValue(index * 25 + 12)}
            >
              {index + 1}. {name}
            </button>
          ))}
        </div>
      )}
      {isSequentialKind(step.visual.kind) && labels && (
        <div className="discovery-stage-options" aria-label="Choisir une étape du schéma">
          {labels.map((name, index) => (
            <button
              key={name}
              className="discovery-option"
              type="button"
              aria-pressed={value !== undefined && stage === index}
              data-selected={value !== undefined && stage === index}
              onClick={() => onValue(index * 25)}
            >
              {index + 1}. {name}
            </button>
          ))}
        </div>
      )}
      <p className="discovery-feedback" aria-live="polite">
        {value !== undefined && interaction.feedback}
      </p>
    </div>
  );
}
