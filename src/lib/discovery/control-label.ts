import type { DiscoveryStep, DiscoveryInteraction } from "./schema";
import { isSequentialKind, MECHANISM_STAGES } from "./mechanisms";
import { modelValueLabel } from "./models";
import { pistonState } from "./visual-state";

/** Shared by the slider's accessible value and the workshop's comparison titles. */
export function rangeValueLabel(
  visual: DiscoveryStep["visual"],
  interaction: Extract<DiscoveryInteraction, { kind: "range" }>,
  value: number,
): string {
  if (visual.kind === "piston") {
    const state = pistonState(value);
    return state.cycleComplete
      ? "Cycle terminé : retour à l’admission"
      : `Temps ${state.phase + 1} : ${state.name}`;
  }
  const labels = isSequentialKind(visual.kind)
    ? MECHANISM_STAGES[visual.kind]
    : visual.kind === "flow"
      ? visual.labels
      : undefined;
  if (labels) {
    const stage = Math.round((Math.max(0, Math.min(100, value)) / 100) * (labels.length - 1));
    return `Étape ${stage + 1} : ${labels[stage]}`;
  }
  return (
    modelValueLabel(visual.kind, value) ??
    (value === 0
      ? interaction.minLabel
      : value < 34
        ? "Faible"
        : value < 67
          ? "Modéré"
          : "Important")
  );
}
