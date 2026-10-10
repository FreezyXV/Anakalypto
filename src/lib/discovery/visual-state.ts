import type { DiscoveryStep } from "./schema";

export const PISTON_PHASES = [
  "Admission",
  "Compression",
  "Combustion-détente",
  "Échappement",
] as const;

/** A deliberately idealized crank-slider: two turns, four half-turn strokes. */
export function pistonState(value: number, fixedPhase?: number) {
  const position =
    fixedPhase === undefined ? Math.max(0, Math.min(100, value)) : fixedPhase * 25 + 12.5;
  const angle = (position * Math.PI) / 25;
  const phase = position === 100 ? 0 : Math.floor(position / 25);
  const fraction = (position % 25) / 25;
  const crankX = 180 + 22 * Math.sin(angle);
  const crankY = 181 - 22 * Math.cos(angle);
  const pistonY = crankY - Math.sqrt(70 ** 2 - (crankX - 180) ** 2) - 7;
  return {
    position,
    phase,
    fraction,
    name: PISTON_PHASES[phase]!,
    pistonTravel: (1 - Math.cos(angle)) / 2,
    crankAngle: position * 7.2,
    crankX,
    crankY,
    pistonY,
    intakeOpen: phase === 0,
    exhaustOpen: phase === 3,
    spark: phase === 2 && fraction < 0.14,
    downward: phase === 0 || phase === 2,
    cycleComplete: position === 100,
  };
}

export function flowState(visual: DiscoveryStep["visual"], value: number) {
  const count = visual.labels?.length ?? 0;
  const stopped = value === 0 && visual.offReached !== undefined;
  const reached = stopped
    ? visual.offReached!
    : count
      ? 1 + Math.round((Math.max(0, Math.min(100, value)) / 100) * (count - 1))
      : 0;
  const target = visual.loopTo ?? 0;
  return {
    reached,
    stopped,
    loopActive: !!visual.loop && reached === count && !stopped,
    target,
    description: stopped
      ? `Arrêt avant « ${visual.labels?.[reached]} ».`
      : visual.loop && reached === count
        ? `Après « ${visual.labels?.[count - 1]} », retour à « ${visual.labels?.[target]} ».`
        : "",
  };
}
