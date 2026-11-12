type V = [number, number];
const dot = (a: V, b: V) => a[0] * b[0] + a[1] * b[1];
/** Snell refraction, one reflection, Snell exit from a circular droplet of unit radius. */
export function rainbowPath(n: number): [V, V, V, V] {
  if (!Number.isFinite(n) || n < 1.3 || n > 1.4) throw Error("Visible-water example only");
  const p: V = [-0.6, -0.8],
    d: V = [1, 0],
    normal: V = [-0.6, -0.8];
  function refract(d: V, normal: V, eta: number): V {
    const c = -dot(d, normal),
      k = 1 - eta * eta * (1 - c * c);
    if (k < 0) throw Error("Total reflection");
    return [
      eta * d[0] + (eta * c - Math.sqrt(k)) * normal[0],
      eta * d[1] + (eta * c - Math.sqrt(k)) * normal[1],
    ];
  }
  function next(p: V, d: V): V {
    const t = -2 * dot(p, d);
    return [p[0] + t * d[0], p[1] + t * d[1]];
  }
  const inside = refract(d, normal, 1 / n),
    back = next(p, inside),
    proj = dot(inside, back);
  const reflected: V = [inside[0] - 2 * proj * back[0], inside[1] - 2 * proj * back[1]],
    exit = next(back, reflected);
  const out = refract(reflected, [-exit[0], -exit[1]], n);
  return [p, back, exit, [exit[0] + out[0] * 0.55, exit[1] + out[1] * 0.55]];
}
export function lidarDistance(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) throw Error("Nonnegative time required");
  return (299792458 * seconds) / 2;
}
export function idealTransformer(primary: number, n1: number, n2: number) {
  if (![primary, n1, n2].every(Number.isFinite) || n1 <= 0 || n2 <= 0)
    throw Error("Positive turn counts required");
  return (primary * n2) / n1;
}
export function weaveOver(warp: number, weft: number) {
  return (warp + weft) % 2 === 0;
}
/** Shared coordinates keep every drawn cross-link attached to both polymer chains. */
export function polymerY(x: number, base: number) {
  return base + 10 * Math.sin(((x - 50) * Math.PI) / 60);
}
export function polymerPath(base: number, shift = 0) {
  return Array.from({ length: 81 }, (_, i) => {
    const x = 50 + i * 3;
    return `${i ? "L" : "M"}${x + shift} ${polymerY(x, base)}`;
  }).join(" ");
}
