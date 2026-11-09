import type { DiscoveryStep } from "./schema";
import { isMechanismKind, mechanismState } from "./mechanisms";

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

/** The explanation follows the drawing's current state, including fixed scenes. */
export function visualDescription(visual: DiscoveryStep["visual"], value: number): string {
  value = visual.fixedValue ?? value;
  if (isMechanismKind(visual.kind))
    return mechanismState(visual.kind, value, visual.frame, visual.scene).description;
  if (visual.kind === "piston") {
    const state = pistonState(value, visual.phase);
    if (state.cycleComplete) return "Deux tours terminés : le cycle revient à l’admission.";
    return [
      "Admission : le piston descend, la soupape d’admission est ouverte. Le mélange entre.",
      "Compression : le piston monte, les deux soupapes sont fermées. Le mélange est comprimé.",
      "Combustion-détente : les soupapes restent fermées. Les gaz chauds poussent le piston vers le bas.",
      "Échappement : le piston monte, la soupape d’échappement est ouverte. Les gaz brûlés sortent.",
    ][state.phase]!;
  }
  if (visual.kind === "flow") return flowState(visual, value).description || visual.caption;
  if (visual.kind === "soap")
    return value > 0
      ? "Les molécules de savon entourent la graisse : les têtes bleues sont vers l’eau, les queues orange vers la graisse. La graisse reste présente ; le groupe peut être dispersé puis emporté au rinçage."
      : "Une goutte de graisse reste séparée de l’eau. Aucune molécule de savon n’est représentée dans cet état.";
  if (visual.kind === "circuit")
    return value > 0
      ? "L’interrupteur ferme le trajet entre les deux bornes de la pile, à travers la lampe. Le courant circule dans la boucle et la lampe s’allume ; les flèches donnent son sens conventionnel."
      : "L’interrupteur sépare les contacts : le trajet est ouvert. Aucun courant ne circule dans ce circuit ; la lampe reste éteinte.";
  return value === 0
    ? "Aucun flux dans ce modèle : les roues sont arrêtées."
    : `Les gaz entrent dans la turbine puis sortent ; l’air entre dans le compresseur puis va au moteur. Les deux roues tournent ${value <= 66 ? "modérément" : "rapidement"}, avec un même axe. La vitesse illustrée est qualitative.`;
}

/** Cover/catalogue states show the mechanism working, rather than a misleading endpoint. */
export function representativeVisualValue(kind: DiscoveryStep["visual"]["kind"]): number {
  switch (kind) {
    case "moon":
      return 29;
    case "buoyancy":
      return 40;
    case "gears":
      return 25;
    case "piston":
      return 62;
    default:
      return 100;
  }
}
