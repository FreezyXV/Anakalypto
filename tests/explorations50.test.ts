import { hasReviewedDiagram } from "./fixtures/reviewedVisuals";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { EXPLORATIONS50_DIAGRAMS } from "../src/lib/lesson-visuals/explorations50";
import { gearOutline, differentialRates } from "../src/lib/lesson-visuals/explorations50-models";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
const html = (id: string, step: number) =>
  renderToStaticMarkup(
    createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS.find((s) => s.id === id)!, step }),
  );
it("preserves the unretouched drawings of the 245 preceding diagrams", async () => {
  const before = JSON.parse(
    await readFile(
      new URL("../docs/qa/explorations50/before-render-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(before.drawings)).toHaveLength(245);
  for (const [k, hashes] of Object.entries(before.drawings)) {
    if (hasReviewedDiagram(k)) continue;
    expect(
      [0, 1, 2].map((s) => createHash("sha256").update(html(k, s)).digest("hex")),
      k,
    ).toEqual(hashes);
  }
  expect(EXPLORATIONS50_DIAGRAMS).toHaveLength(50);
  expect(new Set(EXPLORATIONS50_DIAGRAMS.flatMap((s) => s.paths)).size).toBe(50);
  for (const s of EXPLORATIONS50_DIAGRAMS) {
    expect(before.drawings[s.id]).toBeUndefined();
    expect(getLessonDiagram(s.paths[0]!)).toBe(s);
    expect(new Set([0, 1, 2].map((i) => html(s.id, i))).size).toBe(3);
  }
});
it("projects both actual pinhole rays through the same aperture without bending", () => {
  const frame = html("pinholebox", 2);
  for (const attr of ["top", "bottom"]) {
    const match = frame.match(
      new RegExp(
        `data-pinhole-${attr}="true" d="M([\\d.]+) ([\\d.]+)L([\\d.]+) ([\\d.]+) ([\\d.]+) ([\\d.]+)"`,
      ),
    )!;
    expect(match).not.toBeNull();
    const [x, y, hx, hy, sx, sy] = match.slice(1).map(Number);
    expect(hx).toBe(170);
    expect(hy).toBe(125);
    expect((hy! - y!) / (hx! - x!)).toBeCloseTo((sy! - hy!) / (sx! - hx!), 10);
    expect((y! - hy!) * (sy! - hy!)).toBeLessThan(0);
  }
});
it("keeps water amount constant for thermal expansion, then represents added meltwater", () => {
  const count = (s: number) =>
    [...html("sealevelrise", s).matchAll(/data-water-particle="true"/g)].length;
  expect(count(0)).toBe(18);
  expect(count(1)).toBe(count(0));
  expect(count(2)).toBeGreaterThan(count(1));
});
it("keeps the open differential average equal to the carrier speed over different turns", () => {
  for (const center of [1, 2, 20])
    for (const delta of [0, 0.2, 1]) {
      const r = differentialRates(center, delta);
      expect((r.inner + r.outer) / 2).toBeCloseTo(center, 12);
      expect(r.outer - r.inner).toBeCloseTo(2 * delta, 12);
    }
});
it("uses tooth counts and pitch radii with a consistent ratio, without degenerate outlines", () => {
  for (const [n, r] of [
    [12, 30],
    [24, 60],
    [12, 18],
    [24, 36],
  ]) {
    const points = gearOutline(n!, r!);
    expect(points).toHaveLength(n! * 4);
    expect(points.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y))).toBe(true);
    expect(points.filter(([x, y]) => Math.abs(Math.hypot(x, y) - (r! + 3)) < 1e-8)).toHaveLength(
      n! * 2,
    );
  }
  expect(
    [...html("gearboxpair", 0).matchAll(/data-teeth="(\d+)"/g)].map((m) => Number(m[1])),
  ).toEqual([12, 24]);
});
