import type { DiscoveryStep } from "./schema";

/** Pair the written introduction with its manipulation. Stored positions still index the authored steps. */
export function openingStepIndex(steps: readonly DiscoveryStep[]) {
  const [intro, manipulation] = steps;
  const kind = manipulation?.interaction?.kind;
  return intro?.id === "observer" && !intro.interaction && (kind === "toggle" || kind === "range")
    ? 1
    : 0;
}

export function visibleStepIndex(steps: readonly DiscoveryStep[], savedIndex: number) {
  return Math.max(openingStepIndex(steps), Math.min(savedIndex, steps.length - 1));
}
