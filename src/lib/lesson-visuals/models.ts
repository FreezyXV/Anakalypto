/** Models behind the quantitative illustrations; no measured or user data. */
export function pendulumPeriod(length: number, gravity = 9.81): number {
  if (!Number.isFinite(length) || !Number.isFinite(gravity) || length <= 0 || gravity <= 0)
    throw new Error("Longueur et gravité positives attendues.");
  return 2 * Math.PI * Math.sqrt(length / gravity);
}
export function radiocarbonFraction(years: number): number {
  if (!Number.isFinite(years) || years < 0) throw new Error("Durée positive ou nulle attendue.");
  return 2 ** (-years / 5730);
}
export function insertionTrace(values: readonly number[]): number[][] {
  if (values.some((n) => !Number.isFinite(n))) throw new Error("Valeurs finies attendues.");
  const work = [...values],
    trace = [[...work]];
  for (let i = 1; i < work.length; i++) {
    const value = work[i]!;
    let j = i - 1;
    while (j >= 0 && work[j]! > value) {
      work[j + 1] = work[j]!;
      j--;
    }
    work[j + 1] = value;
    trace.push([...work]);
  }
  return trace;
}
const LEFT = [
  "0001101",
  "0011001",
  "0010011",
  "0111101",
  "0100011",
  "0110001",
  "0101111",
  "0111011",
  "0110111",
  "0001011",
];
const PARITY = [
  "LLLLLL",
  "LLGLGG",
  "LLGGLG",
  "LLGGGL",
  "LGLLGG",
  "LGGLLG",
  "LGGGLL",
  "LGLGLG",
  "LGLGGL",
  "LGGLGL",
];
const invert = (bits: string) => [...bits].map((b) => (b === "0" ? "1" : "0")).join("");
export function ean13(base: string): { digits: string; modules: string } {
  if (!/^\d{12}$/.test(base)) throw new Error("Douze chiffres attendus.");
  const sum = [...base].reverse().reduce((n, d, i) => n + Number(d) * (i % 2 ? 1 : 3), 0);
  const digits = base + ((10 - (sum % 10)) % 10);
  const parity = PARITY[Number(digits[0])]!;
  const left = [...digits.slice(1, 7)]
    .map((d, i) => {
      const pattern = LEFT[Number(d)]!;
      return parity[i] === "L" ? pattern : [...invert(pattern)].reverse().join("");
    })
    .join("");
  const right = [...digits.slice(7)].map((d) => invert(LEFT[Number(d)]!)).join("");
  return { digits, modules: `101${left}01010${right}101` };
}
