/** Uniform stellar disc occulted by an opaque circular planet (no limb darkening). */
export function transitFlux(distance: number, starRadius: number, planetRadius: number): number {
  if (
    ![distance, starRadius, planetRadius].every(Number.isFinite) ||
    starRadius <= 0 ||
    planetRadius <= 0
  )
    throw new Error("Rayons positifs et distance finie attendus.");
  const d = Math.abs(distance),
    R = starRadius,
    r = planetRadius;
  if (d >= R + r) return 1;
  if (d <= Math.abs(R - r)) return 1 - Math.min(R, r) ** 2 / R ** 2;
  const clamp = (n: number) => Math.max(-1, Math.min(1, n));
  const overlap =
    R * R * Math.acos(clamp((d * d + R * R - r * r) / (2 * d * R))) +
    r * r * Math.acos(clamp((d * d + r * r - R * R) / (2 * d * r))) -
    0.5 * Math.sqrt(Math.max(0, (-d + R + r) * (d + R - r) * (d - R + r) * (d + R + r)));
  return 1 - overlap / (Math.PI * R * R);
}
/** Point-source, single-point-lens amplification for separation in Einstein radii. */
export function pointLensAmplification(separation: number): number {
  if (!Number.isFinite(separation) || separation <= 0)
    throw new Error("Séparation strictement positive attendue.");
  const u2 = separation * separation;
  return (u2 + 2) / (separation * Math.sqrt(u2 + 4));
}

/** Two hexagonal rings, leaving the central optical opening: 6 + 12 segments. */
export function webbSegmentCenters(
  radius: number,
): { x: number; y: number; q: number; row: number }[] {
  if (!Number.isFinite(radius) || radius <= 0) throw new Error("Rayon positif attendu.");
  const centers = [];
  for (let q = -2; q <= 2; q++) {
    for (let row = -2; row <= 2; row++) {
      if (Math.max(Math.abs(q), Math.abs(row), Math.abs(q + row)) > 2 || (q === 0 && row === 0))
        continue;
      centers.push({ x: Math.sqrt(3) * radius * (q + row / 2), y: 1.5 * radius * row, q, row });
    }
  }
  return centers;
}

/** Radius at constant incident flux for an isotropic source with relative luminosity. */
export function equalFluxRadius(relativeLuminosity: number, referenceRadius = 60): number {
  if (
    ![relativeLuminosity, referenceRadius].every(Number.isFinite) ||
    relativeLuminosity <= 0 ||
    referenceRadius <= 0
  )
    throw new Error("Luminosité et rayon positifs attendus.");
  return referenceRadius * Math.sqrt(relativeLuminosity);
}
