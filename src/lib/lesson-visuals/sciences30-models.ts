/** Fixed teaching data: no random change on hydration or state switching. */
export const CENTER_DATA = [2, 3, 3, 4, 38] as const;
export function coinSeries(n = 400) {
  let seed = 1979,
    hits = 0;
  return Array.from({ length: n }, (_, i) => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const hit = seed < 2147483648 ? 1 : 0;
    hits += hit;
    return { n: i + 1, hit, hits, frequency: hits / (i + 1) };
  });
}
export function mercatorY(phi: number) {
  return Math.log(Math.tan(Math.PI / 4 + phi / 2));
}
export function mapLocalScales(phi: number, equalArea: boolean) {
  return equalArea
    ? { x: 1 / Math.cos(phi), y: Math.cos(phi) }
    : { x: 1 / Math.cos(phi), y: 1 / Math.cos(phi) };
}
export function honeycomb() {
  const edges = new Map<string, [[number, number], [number, number]]>();
  const points = new Map<string, [number, number]>();
  const size = 16;
  for (let row = 0; row < 3; row++)
    for (let col = 0; col < 6; col++) {
      const cx = 44 + col * 24,
        cy = 82 + row * Math.sqrt(3) * size + ((col % 2) * Math.sqrt(3) * size) / 2;
      const p = Array.from(
        { length: 6 },
        (_, i) =>
          [
            Math.round((cx + size * Math.cos((i * Math.PI) / 3)) * 100) / 100,
            Math.round((cy + size * Math.sin((i * Math.PI) / 3)) * 100) / 100,
          ] as [number, number],
      );
      for (let i = 0; i < 6; i++) {
        const a = p[i]!,
          b = p[(i + 1) % 6]!,
          key = [a.join(","), b.join(",")].sort().join("|");
        edges.set(key, [a, b]);
        points.set(a.join(","), a);
      }
    }
  return { edges: [...edges.values()], points: [...points.values()] };
}
