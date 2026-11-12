import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { BATCH50_DIAGRAMS } from "../src/lib/lesson-visuals/batch50";
import { ENERGY29_DIAGRAMS } from "../src/lib/lesson-visuals/energy29";
import { LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/registry";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
import { PreviousLessonDiagramCanvas } from "./fixtures/PreviousLessonDiagramCanvas";

it("preserves the exact markup of every previously delivered diagram in all three states", () => {
  const added = new Set<string>([...ENERGY29_DIAGRAMS, ...BATCH50_DIAGRAMS].map((s) => s.id));
  const previous = LESSON_DIAGRAMS.filter((s) => !added.has(s.id));
  expect(previous.length).toBeGreaterThan(100);
  for (const spec of previous)
    for (const step of [0, 1, 2]) {
      expect(
        renderToStaticMarkup(createElement(LessonDiagramCanvas, { spec, step })),
        `${spec.id}, état ${step}`,
      ).toBe(renderToStaticMarkup(createElement(PreviousLessonDiagramCanvas, { spec, step })));
    }
});
