/** Orthographic projection of an octant on a unit sphere, viewed along (1,1,1). */
export function sphericalOctant() {
  const project = (x: number, y: number, z: number) =>
    [180 + (77 * (x - y)) / Math.sqrt(2), 122 + (77 * (x + y - 2 * z)) / Math.sqrt(6)] as const;
  const points = [];
  for (let edge = 0; edge < 3; edge++)
    for (let i = 0; i <= 24; i++) {
      const t = (i * Math.PI) / 48,
        c = Math.cos(t),
        s = Math.sin(t);
      points.push(edge === 0 ? project(s, 0, c) : edge === 1 ? project(c, s, 0) : project(0, c, s));
    }
  return points;
}
/** The crank and rigid connecting rod determine the slider, not an arbitrary animation. */
export function steamLink(angle: number) {
  const cx = 278 + 31 * Math.cos(angle),
    cy = 143 + 31 * Math.sin(angle);
  const jointX = cx - Math.sqrt(60 ** 2 - (cy - 132) ** 2);
  return { cx, cy, jointX, pistonX: jointX - 85 };
}
export const RING_WIDTHS = [12, 23, 9, 29, 16, 25, 11] as const;
export const RING_MATCH_X = 36 + (RING_WIDTHS[0] + RING_WIDTHS[1]) * 1.55;
