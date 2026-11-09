/** Small-disturbance Mach cone, not a finite-strength aircraft shock. */
export function machAngle(mach: number): number {
  if (!Number.isFinite(mach) || mach <= 1) throw new Error("Mach supersonique attendu.");
  return Math.asin(1 / mach);
}
/** Steady glide in still air. SVG coordinates: right positive, down positive. */
export function glideForces(finesse: number, weight: number) {
  if (![finesse, weight].every(Number.isFinite) || finesse <= 0 || weight <= 0)
    throw new Error("Finesse et poids positifs attendus.");
  const angle = Math.atan(1 / finesse),
    c = Math.cos(angle),
    s = Math.sin(angle);
  return {
    angle,
    lift: { x: weight * c * s, y: -weight * c * c },
    drag: { x: -weight * s * c, y: -weight * s * s },
    weight: { x: 0, y: weight },
  };
}

/** Constant airspeed with optional compensation for a lateral wind (SVG y down). */
export function windTriangle(airspeed: number, lateralWind: number, compensate: boolean) {
  if (
    ![airspeed, lateralWind].every(Number.isFinite) ||
    airspeed <= 0 ||
    Math.abs(lateralWind) >= airspeed
  )
    throw new Error("Vent latéral strictement inférieur à la vitesse propre attendu.");
  const air = {
    x: compensate ? Math.sqrt(airspeed ** 2 - lateralWind ** 2) : airspeed,
    y: compensate ? -lateralWind : 0,
  };
  const wind = { x: 0, y: lateralWind };
  return { air, wind, ground: { x: air.x, y: air.y + wind.y } };
}
/** Simplified double integration of a fixed acceleration bias, zero initial error. */
export function inertialBiasDisplacement(bias: number, time: number): number {
  if (![bias, time].every(Number.isFinite) || time < 0)
    throw new Error("Biais fini et durée positive ou nulle attendus.");
  return 0.5 * bias * time * time;
}
