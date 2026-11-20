import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
import { EVERYDAY_DIAGRAMS } from "../src/lib/lesson-visuals/everyday50";
import { LESSON_DIAGRAMS, getLessonDiagram } from "../src/lib/lesson-visuals/registry";
import { canonicalSvg } from "./fixtures/canonicalSvg";

function frames(spec: (typeof LESSON_DIAGRAMS)[number]) {
  return [0, 1, 2].map((step) =>
    renderToStaticMarkup(createElement(LessonDiagramCanvas, { spec, step })),
  );
}

it("associates 50 distinct new drawings with three geometrically different states", () => {
  expect(EVERYDAY_DIAGRAMS).toHaveLength(50);
  expect(new Set(EVERYDAY_DIAGRAMS.flatMap(({ paths }) => paths)).size).toBe(50);

  for (const spec of EVERYDAY_DIAGRAMS) {
    expect(spec.paths, spec.id).toHaveLength(1);
    expect(getLessonDiagram(spec.paths[0]!), spec.id).toBe(spec);
    const geometry = frames(spec).map((frame) =>
      frame.match(/<svg\b.*?<\/svg>/s)?.[0].replace(/<text\b.*?<\/text>/gs, ""),
    );
    expect(geometry.every(Boolean), spec.id).toBe(true);
    expect(new Set(geometry).size, spec.id).toBe(3);
  }
});

it("preserves the layouts and geometry of all 345 previously delivered drawings", async () => {
  const before: { drawings: Record<string, string[]> } = JSON.parse(
    await readFile(
      new URL(
        "../docs/qa/illustrations-50-2026-11-19/before-portable-hashes.json",
        import.meta.url,
      ),
      "utf8",
    ),
  );
  const revisedSteel: string[] = JSON.parse(
    await readFile(
      new URL("../docs/qa/revue-ciblee-2026-11-20/steel-hashes.json", import.meta.url),
      "utf8",
    ),
  );
  expect(Object.keys(before.drawings)).toHaveLength(345);
  const old = LESSON_DIAGRAMS.filter(
    (spec) => !EVERYDAY_DIAGRAMS.some((entry) => entry.id === spec.id),
  );
  expect(old).toHaveLength(345);

  for (const spec of old) {
    const signatures = frames(spec).map((frame) =>
      createHash("sha256").update(canonicalSvg(frame)).digest("hex"),
    );
    expect(signatures, spec.id).toEqual(
      spec.id === "steelroutes" ? revisedSteel : before.drawings[spec.id],
    );
  }
});
