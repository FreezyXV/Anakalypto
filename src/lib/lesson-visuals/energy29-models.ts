/** Illustrative arithmetic, never national statistics or equipment specifications. */
export const illustrativeDay = {
  hours: [6, 9, 12, 15, 18, 21],
  demand: [30, 42, 45, 43, 58, 40],
  solar: [0, 12, 35, 25, 0, 0],
} as const;
export function residualDemand(demand: readonly number[], solar: readonly number[]) {
  if (
    demand.length !== solar.length ||
    demand.some((v) => !Number.isFinite(v)) ||
    solar.some((v) => !Number.isFinite(v))
  )
    throw new Error("Séries finies de même longueur requises");
  return demand.map((v, i) => v - solar[i]!);
}
export function energyWh(watts: number, hours: number) {
  if (![watts, hours].every((v) => Number.isFinite(v) && v >= 0))
    throw new Error("Puissance et durée positives requises");
  return watts * hours;
}
export function reboundFraction(before: number, technical: number, actual: number) {
  if (![before, technical, actual].every(Number.isFinite) || before <= technical)
    throw new Error("Gain technique positif requis");
  return (actual - technical) / (before - technical);
}
export function idealStorageHours(energyMWh: number, powerMW: number) {
  if (!Number.isFinite(energyMWh) || !Number.isFinite(powerMW) || energyMWh < 0 || powerMW <= 0)
    throw new Error("Capacité positive et puissance strictement positive requises");
  return energyMWh / powerMW;
}
export function meanRemaining(initial: number, halfLives: number) {
  if (![initial, halfLives].every((v) => Number.isFinite(v) && v >= 0))
    throw new Error("Valeurs positives requises");
  return initial * 2 ** -halfLives;
}
export const demandShiftExample = { before: [4, 1, 5], after: [4, 3, 3], base: [4, 1, 3] } as const;
export const energyChainExample = {
  primary: 100,
  conversionLoss: 65,
  final: 35,
  useLoss: 7,
  useful: 28,
} as const;
export const dtNucleons = {
  deuterium: { protons: 1, neutrons: 1 },
  tritium: { protons: 1, neutrons: 2 },
  helium: { protons: 2, neutrons: 2 },
  neutron: { protons: 0, neutrons: 1 },
} as const;
/** Tangent of a mirror reflecting the incoming direction toward a target. */
export function mirrorEndpoints(
  x: number,
  y: number,
  tx: number,
  ty: number,
  dx: number,
  dy: number,
  length = 30,
) {
  const incident = Math.hypot(dx, dy),
    out = Math.hypot(tx - x, ty - y);
  if (!incident || !out) throw new Error("Directions non nulles requises");
  const nx = dx / incident - (tx - x) / out,
    ny = dy / incident - (ty - y) / out,
    n = Math.hypot(nx, ny);
  if (!n) throw new Error("Réflexion dégénérée");
  const vx = ((-ny / n) * length) / 2,
    vy = ((nx / n) * length) / 2;
  return [x - vx, y - vy, x + vx, y + vy].map((v) => Math.round(v * 100) / 100) as [
    number,
    number,
    number,
    number,
  ];
}
