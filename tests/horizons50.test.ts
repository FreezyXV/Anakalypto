import { BeforeHorizons50Canvas } from "./fixtures/BeforeHorizons50Canvas";
import { canonicalSvg } from "./fixtures/canonicalSvg";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { it, expect } from "vitest";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { HORIZONS50_DIAGRAMS } from "../src/lib/lesson-visuals/horizons50";
import {
  steamLink,
  sphericalOctant,
  RING_MATCH_X,
  RING_WIDTHS,
} from "../src/lib/lesson-visuals/horizons50-models";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
const html = (id: string, step: number) =>
  renderToStaticMarkup(
    createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS.find((s) => s.id === id)!, step }),
  );
it("preserves all 295 previous drawings byte for byte in their three states", async () => {
  const old = JSON.parse(
    await readFile(
      new URL("../docs/qa/horizons50/before-render-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(old.drawings)).toHaveLength(295);
  const portable = JSON.parse(
    await readFile(
      new URL("../docs/qa/horizons50/before-portable-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(portable.drawings)).toHaveLength(295);
  for (const k of Object.keys(old.drawings)) {
    const spec = LESSON_DIAGRAMS.find((s) => s.id === k)!;
    const frames = [0, 1, 2].map((step) => html(k, step));
    expect(frames, k + ": exact same-runtime bytes").toEqual(
      [0, 1, 2].map((step) =>
        renderToStaticMarkup(createElement(BeforeHorizons50Canvas, { spec, step })),
      ),
    );
    expect(
      frames.map((frame) => createHash("sha256").update(canonicalSvg(frame)).digest("hex")),
      k + ": historical coordinates",
    ).toEqual(portable.drawings[k]);
  }
  expect(HORIZONS50_DIAGRAMS).toHaveLength(50);
  expect(new Set(HORIZONS50_DIAGRAMS.flatMap((s) => s.paths)).size).toBe(50);
  for (const s of HORIZONS50_DIAGRAMS) {
    expect(old.drawings[s.id]).toBeUndefined();
    expect(getLessonDiagram(s.paths[0]!)).toBe(s);
    expect(new Set([0, 1, 2].map((f) => html(s.id, f))).size).toBe(3);
  }
});
it("conserves nitrogen and hydrogen atoms across the drawn ammonia reaction", () => {
  const counts = (s: number) => {
    const f = html("ammoniasynthesis", s);
    return [f.match(/data-nitrogen=/g)?.length ?? 0, f.match(/data-hydrogen=/g)?.length ?? 0];
  };
  expect(counts(0)).toEqual([2, 6]);
  expect(counts(1)).toEqual(counts(0));
});
it("keeps the total stored water constant while reversing transfers", () => {
  const levels = [0, 1, 2].map((s) =>
    [...html("pumpedstorage", s).matchAll(/data-volume="(\d+)"/g)].map((m) => Number(m[1])),
  );
  expect(levels.every((v) => v.reduce((a, b) => a + b, 0) === 90)).toBe(true);
  expect(levels[1]![0]).toBeGreaterThan(levels[0]![0]!);
  expect(levels[2]![0]).toBeLessThan(levels[1]![0]!);
});
it("draws a rigid 60-unit connecting rod and 31-unit crank over a full cycle", () => {
  for (let a = 0; a < Math.PI * 2; a += 0.03) {
    const r = steamLink(a);
    expect(Math.hypot(r.cx - r.jointX, r.cy - 132)).toBeCloseTo(60, 10);
    expect(Math.hypot(r.cx - 278, r.cy - 143)).toBeCloseTo(31, 10);
    expect(r.pistonX).toBeGreaterThan(36);
    expect(r.pistonX + 8).toBeLessThan(177);
  }
  for (const s of [0, 1, 2]) {
    const m = html("steamengine", s).match(
      /data-steam-link="true" d="M([\d.]+) 132L([\d.]+) ([\d.]+)"/,
    )!;
    expect(m).not.toBeNull();
    expect(Math.hypot(Number(m[2]) - Number(m[1]), Number(m[3]) - 132)).toBeCloseTo(60, 10);
  }
});
it("projects three quarter great circles for the spherical octant", () => {
  const p = sphericalOctant();
  expect(p).toHaveLength(75);
  const dot = (a: readonly number[], b: readonly number[]) =>
    a.reduce((v, x, i) => v + x * b[i]!, 0);
  const vertices = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  for (let i = 0; i < 3; i++) expect(dot(vertices[i]!, vertices[(i + 1) % 3]!)).toBe(0);
  expect(p.every(([x, y]) => Math.hypot(x - 180, y - 122) <= 77 + 1e-8)).toBe(true);
  const f = html("trianglegeometry", 2);
  expect(f).toContain(`points="${p.map((p) => p.join(",")).join(" ")}"`);
});
it("aligns the actual matching ring sequence exactly with the reference", () => {
  expect(RING_MATCH_X).toBe(36 + (RING_WIDTHS[0] + RING_WIDTHS[1]) * 1.55);
  expect(html("treeringmatch", 2)).toContain(`translate(${RING_MATCH_X} 167)`);
  expect(RING_WIDTHS.slice(2)).toEqual([9, 29, 16, 25, 11]);
  const bracket = html("treeringmatch", 2).match(
    /data-ring-match="true" d="M([\d.]+) 115V162M([\d.]+) 115V162"/,
  )!;
  expect(bracket).not.toBeNull();
  expect(Number(bracket[1])).toBe(RING_MATCH_X);
  expect(Number(bracket[2]) - Number(bracket[1])).toBeCloseTo((9 + 29 + 16 + 25 + 11) * 1.55, 10);
});
it("reconstructs the same four blue and two gold pixels without loss", () => {
  const pixels = (s: number) =>
    [...html("runlength", s).matchAll(/data-pixel="(blue|gold)"/g)].map((m) => m[1]);
  expect(pixels(0)).toEqual(["blue", "blue", "blue", "blue", "gold", "gold"]);
  expect(pixels(2)).toEqual(pixels(0));
});
