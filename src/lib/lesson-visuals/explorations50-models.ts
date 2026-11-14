/** Geometric teaching models shared by the drawing and invariant checks. */
export function gearOutline(teeth: number, r: number, phase = 0) {
  return Array.from({ length: teeth * 4 }, (_, i) => {
    const t = (i / (teeth * 4)) * 2 * Math.PI + phase;
    const radius = i % 4 === 0 || i % 4 === 3 ? r - 3 : r + 3;
    return [radius * Math.cos(t), radius * Math.sin(t)] as const;
  });
}
export function differentialRates(center: number, delta: number) {
  return { inner: center - delta, outer: center + delta };
}
