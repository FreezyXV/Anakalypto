/** A small alphabet sufficient for the authored examples. Times are in dot units. */
export function morseTimeline(text: string) {
  const alphabet: Record<string, string> = { S: "...", O: "---", A: ".-", E: ".", T: "-" };
  const characters = text.trim().toUpperCase().split("");
  if (!characters.length || characters.some((c) => c !== " " && !alphabet[c]))
    throw new RangeError("Unsupported Morse example");
  const pulses: { start: number; duration: number; character: string }[] = [];
  let time = 0;
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]!;
    if (character === " ") continue;
    const code = alphabet[character]!;
    for (let n = 0; n < code.length; n++) {
      const duration = code[n] === "." ? 1 : 3;
      pulses.push({ start: time, duration, character });
      time += duration;
      if (n < code.length - 1) time += 1;
    }
    if (i < characters.length - 1) time += characters[i + 1] === " " ? 7 : 3;
  }
  return { pulses, duration: time };
}

/** Normalised illustrative AM: carrier 12 cycles, message 1 cycle, modulation index < 1. */
export function amSample(t: number, modulation = 0.65) {
  if (!Number.isFinite(t) || !Number.isFinite(modulation) || modulation < 0 || modulation >= 1)
    throw new RangeError("Invalid AM sample");
  const message = Math.sin(2 * Math.PI * t),
    envelope = 1 + modulation * message;
  const carrier = envelope * Math.sin(24 * Math.PI * t);
  return { message, envelope, carrier, rectified: Math.max(0, carrier) };
}

/** Historical analogue luma Y′, with gamma-encoded primaries (not linear-light luminance). */
export function analogueLuma(rgb: readonly number[]) {
  if (rgb.length !== 3 || !rgb.every((v) => Number.isFinite(v) && v >= 0 && v <= 255))
    throw new RangeError("Expected three 8-bit channel values");
  return 0.299 * rgb[0]! + 0.587 * rgb[1]! + 0.114 * rgb[2]!;
}
