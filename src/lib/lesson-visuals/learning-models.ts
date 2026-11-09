/** One-dimensional convex toy loss, not a real deep network landscape. */
export function quadraticTraining(iterations: number, learningRate = 0.2) {
  if (
    !Number.isInteger(iterations) ||
    iterations < 0 ||
    iterations > 1000 ||
    !Number.isFinite(learningRate) ||
    learningRate <= 0 ||
    learningRate >= 1
  )
    throw new Error("Nombre d’itérations borné et taux entre 0 et 1 attendus.");
  const states = [];
  let weight = 0;
  for (let i = 0; i <= iterations; i++) {
    states.push({ weight, loss: (weight - 3) ** 2 });
    weight -= learningRate * 2 * (weight - 3);
  }
  return states;
}
/** Stable softmax over a prefix; masked future positions have exactly zero weight. */
export function attentionWeights(
  scores: readonly number[],
  visibleTo = scores.length - 1,
): number[] {
  if (
    !scores.length ||
    !scores.every(Number.isFinite) ||
    !Number.isInteger(visibleTo) ||
    visibleTo < 0 ||
    visibleTo >= scores.length
  )
    throw new Error("Scores finis et masque non vide attendus.");
  const max = Math.max(...scores.slice(0, visibleTo + 1));
  const values = scores.map((v, i) => (i <= visibleTo ? Math.exp(v - max) : 0)),
    sum = values.reduce((a, v) => a + v, 0);
  return values.map((v) => v / sum);
}
/** Valid, stride-one cross-correlation: the convention used by common CNN implementations. */
export function correlateValid(
  image: readonly (readonly number[])[],
  kernel: readonly (readonly number[])[],
): number[][] {
  const w = image[0]?.length ?? 0,
    k = kernel[0]?.length ?? 0;
  if (
    !w ||
    !k ||
    !image.every((row) => row.length === w && row.every(Number.isFinite)) ||
    !kernel.every((row) => row.length === k && row.every(Number.isFinite)) ||
    kernel.length > image.length ||
    k > w
  )
    throw new Error("Matrices rectangulaires finies et filtre contenu dans l’image attendus.");
  return Array.from({ length: image.length - kernel.length + 1 }, (_, y) =>
    Array.from({ length: w - k + 1 }, (_, x) =>
      kernel.reduce(
        (sum, row, j) => sum + row.reduce((s, v, i) => s + v * image[y + j]![x + i]!, 0),
        0,
      ),
    ),
  );
}
/** Epsilon branch chooses uniformly among every action, including the current best. */
export function epsilonGreedyProbabilities(values: readonly number[], epsilon: number): number[] {
  if (
    !values.length ||
    !values.every(Number.isFinite) ||
    !Number.isFinite(epsilon) ||
    epsilon < 0 ||
    epsilon > 1
  )
    throw new Error("Valeurs finies et epsilon entre 0 et 1 attendus.");
  const best = values.indexOf(Math.max(...values));
  return values.map((_, i) => epsilon / values.length + (i === best ? 1 - epsilon : 0));
}
/** Fully synthetic curves for illustrating overfitting, without empirical claims. */
export function generalizationExample(time: number) {
  if (!Number.isFinite(time) || time < 0 || time > 10)
    throw new Error("Temps entre 0 et 10 attendu.");
  return {
    training: 0.8 * Math.exp(-0.3 * time) + 0.04,
    validation: 0.38 + 0.012 * (time - 5) ** 2,
  };
}

/** Planar two-link geometry for the authored robot poses, not a robot controller. */
export function planarArmPose(
  base: { x: number; y: number },
  target: { x: number; y: number },
  first = 80,
  second = 76,
) {
  const dx = target.x - base.x,
    dy = target.y - base.y,
    r = Math.hypot(dx, dy);
  if (
    ![base.x, base.y, target.x, target.y, first, second].every(Number.isFinite) ||
    first <= 0 ||
    second <= 0 ||
    r === 0 ||
    r > first + second ||
    r < Math.abs(first - second)
  )
    throw new RangeError("Unreachable arm pose");
  const angle =
    Math.atan2(dy, dx) -
    Math.acos(
      Math.max(-1, Math.min(1, (first * first + r * r - second * second) / (2 * first * r))),
    );
  return {
    base,
    elbow: { x: base.x + first * Math.cos(angle), y: base.y + first * Math.sin(angle) },
    tip: target,
  };
}

/** Unsigned 8-bit samples mapped to four uniformly spaced reconstruction levels. */
export function toyQuantization(samples: readonly number[]) {
  if (!samples.length || !samples.every((n) => Number.isInteger(n) && n >= 0 && n <= 255))
    throw new RangeError("Expected 8-bit samples");
  return samples.map((n) => {
    const code = Math.round(n / 85);
    return { original: n / 127.5 - 1, code, reconstructed: (code * 2) / 3 - 1 };
  });
}
