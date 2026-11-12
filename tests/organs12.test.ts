import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { ORGANS_DIAGRAMS } from "../src/lib/lesson-visuals/organs";
import { SLEEP_EXAMPLE } from "../src/lib/lesson-visuals/organs-models";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
const html = (kind: string, step: number) =>
  renderToStaticMarkup(
    createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS.find((s) => s.id === kind)!, step }),
  );
it("preserves all 203 delivered drawings byte for byte in their three views", async () => {
  const before = JSON.parse(
    await readFile(
      new URL("../docs/qa/organs12/before-render-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(before.drawings)).toHaveLength(203);
  for (const [kind, hashes] of Object.entries(before.drawings))
    expect(
      [0, 1, 2].map((s) => createHash("sha256").update(html(kind, s)).digest("hex")),
      kind,
    ).toEqual(hashes);
  expect(ORGANS_DIAGRAMS).toHaveLength(12);
  for (const spec of ORGANS_DIAGRAMS) {
    expect(before.drawings[spec.id]).toBeUndefined();
    expect(spec.paths).toHaveLength(1);
    expect(getLessonDiagram(spec.paths[0]!)).toBe(spec);
  }
  expect(new Set(ORGANS_DIAGRAMS.flatMap((s) => s.paths)).size).toBe(12);
});
it("keeps cells inside the dialyser fibres while the two fluids counterflow", () => {
  for (const s of [0, 1, 2]) {
    const markup = html("dialyser", s);
    const fibres = [...markup.matchAll(/data-hollow-fibre="([\d.]+)"/g)].map((m) => Number(m[1]));
    const cells = [
      ...markup.matchAll(
        /data-blood-cell="true" transform="translate\(([\d.]+) ([\d.]+)\) scale\(([\d.]+)\)"/g,
      ),
    ];
    expect(cells.length).toBeGreaterThan(0);
    for (const c of cells) {
      const x = Number(c[1]),
        y = Number(c[2]),
        scale = Number(c[3]);
      expect(x - 10 * scale).toBeGreaterThan(54);
      expect(x + 10 * scale).toBeLessThan(306);
      expect(Math.min(...fibres.map((f) => Math.abs(f - y))) + 6 * scale).toBeLessThan(6.5);
    }
    const directions = ["blood", "dialysate"].map((fluid) => {
      const group = markup.match(
        new RegExp(`<g data-filter-fluid="${fluid}">([\\s\\S]*?)</g>`),
      )![1]!;
      const line = group.match(/<path[^>]*d="M([\d.]+) [\d.]+L([\d.]+) [\d.]+"/);
      if (!line) throw Error("Missing flow arrow");
      return Number(line[2]) - Number(line[1]);
    });
    expect(directions[0]! * directions[1]!).toBeLessThan(0);
  }
});
it("distinguishes the pulse wave from the displacement of blood cells", () => {
  const frames = [0, 1].map((s) => html("pulsewave", s));
  const crests = frames.map((f) => Number(f.match(/data-pulse-crest="([\d.]+)"/)![1]));
  const cells = frames.map((f) =>
    [...f.matchAll(/data-blood-cell="true" transform="translate\(([\d.]+) /g)].map((m) =>
      Number(m[1]),
    ),
  );
  expect(cells[0]).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(cells[1]![i]! - cells[0]![i]!).toBeGreaterThan(0);
    expect(cells[1]![i]! - cells[0]![i]!).toBeLessThan(crests[1]! - crests[0]!);
  }
});
it("uses a contiguous fictive night with more early deep sleep and longer later REM episodes", () => {
  expect(SLEEP_EXAMPLE[0]!.start).toBe(0);
  expect(SLEEP_EXAMPLE.at(-1)!.end).toBe(1);
  for (let i = 0; i < SLEEP_EXAMPLE.length; i++) {
    const s = SLEEP_EXAMPLE[i]!;
    expect(s.end).toBeGreaterThan(s.start);
    if (i) expect(s.start).toBe(SLEEP_EXAMPLE[i - 1]!.end);
  }
  const deep = SLEEP_EXAMPLE.filter((s) => s.stage === "N3");
  expect(deep[0]!.end - deep[0]!.start).toBeGreaterThan(deep.at(-1)!.end - deep.at(-1)!.start);
  const rem = SLEEP_EXAMPLE.filter((s) => s.stage === "REM").map((s) => s.end - s.start);
  for (let i = 1; i < rem.length; i++) expect(rem[i]).toBeGreaterThan(rem[i - 1]!);
});
