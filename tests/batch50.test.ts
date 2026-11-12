import { ORGANS_DIAGRAMS } from "../src/lib/lesson-visuals/organs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { BATCH50_DIAGRAMS } from "../src/lib/lesson-visuals/batch50";
import { LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/registry";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
import { BeforeBatch50Canvas } from "./fixtures/BeforeBatch50Canvas";
import {
  rainbowPath,
  lidarDistance,
  idealTransformer,
  weaveOver,
} from "../src/lib/lesson-visuals/batch50-models";
it("preserves all 153 previously delivered drawings in all three views", () => {
  const added = new Set<string>([...BATCH50_DIAGRAMS, ...ORGANS_DIAGRAMS].map((s) => s.id));
  const previous = LESSON_DIAGRAMS.filter((s) => !added.has(s.id));
  expect(previous).toHaveLength(153);
  for (const spec of previous)
    for (const step of [0, 1, 2])
      expect(
        renderToStaticMarkup(createElement(LessonDiagramCanvas, { spec, step })),
        spec.id,
      ).toBe(renderToStaticMarkup(createElement(BeforeBatch50Canvas, { spec, step })));
});
it("keeps circular-droplet intersections and reflected angles geometrically correct", () => {
  for (const n of [1.331, 1.343]) {
    const [entry, back, exit, out] = rainbowPath(n);
    for (const p of [entry, back, exit]) expect(Math.hypot(...p)).toBeCloseTo(1, 10);
    const a = [back[0] - entry[0], back[1] - entry[1]],
      b = [exit[0] - back[0], exit[1] - back[1]];
    const len = (p: number[]) => Math.hypot(...p);
    const dot = (a: number[], b: number[]) => a[0]! * b[0]! + a[1]! * b[1]!;
    expect(dot(a, back) / len(a)).toBeCloseTo(-dot(b, back) / len(b), 10);
    const e = [out[0] - exit[0], out[1] - exit[1]];
    const sinI = Math.sqrt(1 - (dot(b, exit) / len(b)) ** 2),
      sinO = Math.sqrt(1 - (dot(e, exit) / len(e)) ** 2);
    expect(n * sinI).toBeCloseTo(sinO, 10);
  }
});
it("uses the lidar round-trip time and the transformer turns ratio", () => {
  expect(lidarDistance(2 / 299792458)).toBeCloseTo(1, 12);
  expect(idealTransformer(12, 4, 2)).toBe(6);
  expect(() => lidarDistance(-1)).toThrow();
  expect(() => idealTransformer(12, 0, 2)).toThrow();
});
it("alternates both warp and weft crossings in a plain weave", () => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 5; j++) {
      expect(weaveOver(i, j)).not.toBe(weaveOver(i + 1, j));
      expect(weaveOver(i, j)).not.toBe(weaveOver(i, j + 1));
    }
});
