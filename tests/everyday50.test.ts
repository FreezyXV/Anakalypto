import { hasReviewedDiagram, reviewedDiagramHashes } from "./fixtures/reviewedVisuals";
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
  return spec.steps.map((_, step) =>
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

it("preserves the historical layouts of 345 drawings with documented revisions", async () => {
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
  const old = LESSON_DIAGRAMS.filter((spec) => Object.hasOwn(before.drawings, spec.id));
  expect(old).toHaveLength(345);

  for (const spec of old) {
    if (hasReviewedDiagram(spec.id)) continue;
    const signatures = frames(spec).map((frame) =>
      createHash("sha256").update(canonicalSvg(frame)).digest("hex"),
    );
    expect(signatures, spec.id).toEqual(
      spec.id === "steelroutes" ? revisedSteel : before.drawings[spec.id],
    );
  }
});

it("matches the audited revision of every state in each reviewed diagram", () => {
  expect(Object.keys(reviewedDiagramHashes)).toHaveLength(258);
  for (const [id, hashes] of Object.entries(reviewedDiagramHashes)) {
    const spec = LESSON_DIAGRAMS.find((diagram) => diagram.id === id);
    expect(spec, id).toBeDefined();
    expect(
      frames(spec!).map((frame) => createHash("sha256").update(canonicalSvg(frame)).digest("hex")),
      id,
    ).toEqual(hashes);
  }
});
