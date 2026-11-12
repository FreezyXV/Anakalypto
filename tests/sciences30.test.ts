import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { it, expect } from "vitest";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { SCIENCES30_DIAGRAMS } from "../src/lib/lesson-visuals/sciences30";
import {
  coinSeries,
  honeycomb,
  mapLocalScales,
  CENTER_DATA,
} from "../src/lib/lesson-visuals/sciences30-models";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
const html = (kind: string, step: number) =>
  renderToStaticMarkup(
    createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS.find((s) => s.id === kind)!, step }),
  );
it("preserves all 215 delivered drawings in every state", async () => {
  const before = JSON.parse(
    await readFile(
      new URL("../docs/qa/sciences30/before-render-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(before.drawings)).toHaveLength(215);
  for (const [k, hashes] of Object.entries(before.drawings))
    expect(
      [0, 1, 2].map((s) => createHash("sha256").update(html(k, s)).digest("hex")),
      k,
    ).toEqual(hashes);
  expect(SCIENCES30_DIAGRAMS).toHaveLength(30);
  for (const s of SCIENCES30_DIAGRAMS) {
    expect(before.drawings[s.id]).toBeUndefined();
    expect(getLessonDiagram(s.paths[0])).toBe(s);
  }
});
it("conserves C H O in the actual three methane combustion frames", () => {
  for (const s of [0, 1, 2]) {
    const atoms = [...html("methaneflame", s).matchAll(/data-element="([CHO])"/g)].map((m) => m[1]);
    expect(atoms.filter((x) => x === "C")).toHaveLength(1);
    expect(atoms.filter((x) => x === "H")).toHaveLength(4);
    expect(atoms.filter((x) => x === "O")).toHaveLength(4);
  }
});
it("uses equal areas for the equivalent projection and conformal local scaling for Mercator", () => {
  for (const degrees of [0, 30, 60, 70]) {
    const a = mapLocalScales((degrees * Math.PI) / 180, true),
      b = mapLocalScales((degrees * Math.PI) / 180, false);
    expect(a.x * a.y).toBeCloseTo(1, 12);
    expect(b.x).toBeCloseTo(b.y, 12);
    if (degrees) expect(b.x * b.y).toBeGreaterThan(1);
  }
});
it("keeps the honeycomb three-coordinated internally and at most three-coordinated at the boundary", () => {
  const { edges, points } = honeycomb();
  const count = new Map<string, number>();
  for (const [a, b] of edges) {
    expect(Math.hypot(a[0] - b[0], a[1] - b[1])).toBeCloseTo(16, 1);
    for (const p of [a, b]) count.set(p.join(","), (count.get(p.join(",")) ?? 0) + 1);
  }
  expect(count.size).toBe(points.length);
  expect(Math.max(...count.values())).toBe(3);
  expect([...count.values()].filter((n) => n === 3).length).toBeGreaterThan(10);
});
it("keeps one reproducible coin sequence when revealing longer prefixes, with genuine up and down fluctuations", () => {
  const a = coinSeries(20),
    b = coinSeries(400);
  expect(b.slice(0, 20)).toEqual(a);
  for (const p of b) expect(p.frequency).toBe(p.hits / p.n);
  expect(b.some((p, i) => i && p.frequency > b[i - 1]!.frequency)).toBe(true);
  expect(b.some((p, i) => i && p.frequency < b[i - 1]!.frequency)).toBe(true);
});
it("uses the same observed series for mean median and mode, and a geometrically correct unrolled circumference", () => {
  expect(CENTER_DATA.reduce((a, b) => a + b, 0) / CENTER_DATA.length).toBe(10);
  expect(CENTER_DATA[2]).toBe(3);
  expect(CENTER_DATA.filter((x) => x === 3)).toHaveLength(2);
  const length = Number(html("circlepi", 1).match(/data-unrolled-length="([\d.]+)"/)![1]);
  expect(length / 90).toBeCloseTo(Math.PI, 12);
});
it("draws the claimed water angle from the actual O–H bond vectors", () => {
  const frame = html("waterbonds", 0);
  const path = frame.match(
    /data-oh-bonds="true" d="M0 0L(-?[\d.]+) ([\d.]+)M0 0L([\d.]+) ([\d.]+)"/,
  )!;
  const a = [Number(path[1]), Number(path[2])],
    b = [Number(path[3]), Number(path[4])];
  const angle =
    (Math.acos((a[0]! * b[0]! + a[1]! * b[1]!) / (Math.hypot(...a) * Math.hypot(...b))) * 180) /
    Math.PI;
  expect(angle).toBeCloseTo(104.5, 10);
});
it("keeps the carbon examples chemically consistent", () => {
  for (const [s, expected] of [
    [0, { C: 1, H: 4, O: 0 }],
    [1, { C: 2, H: 6, O: 0 }],
    [2, { C: 2, H: 6, O: 1 }],
  ] as const) {
    const atoms = [...html("carbonbonds", s).matchAll(/data-element="([CHO])"/g)].map((m) => m[1]);
    for (const element of ["C", "H", "O"] as const)
      expect(atoms.filter((a) => a === element)).toHaveLength(expected[element]);
  }
});
