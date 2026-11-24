import { hasTransportRevision } from "./fixtures/reviewedVisuals";
import { EDITION_LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/edition20261124";
import { DETAILED_LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/detailed20261123";
import { ATLAS100_DIAGRAMS } from "../src/lib/lesson-visuals/atlas100";
import { ATLAS65_DIAGRAMS } from "../src/lib/lesson-visuals/atlas65";
import { EVERYDAY_DIAGRAMS } from "../src/lib/lesson-visuals/everyday50";
import { HORIZONS50_DIAGRAMS } from "../src/lib/lesson-visuals/horizons50";
import { EXPLORATIONS50_DIAGRAMS } from "../src/lib/lesson-visuals/explorations50";
import { SCIENCES30_DIAGRAMS } from "../src/lib/lesson-visuals/sciences30";
import { ORGANS_DIAGRAMS } from "../src/lib/lesson-visuals/organs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import { BATCH50_DIAGRAMS } from "../src/lib/lesson-visuals/batch50";
import { THEMATIC50_DIAGRAMS } from "../src/lib/lesson-visuals/thematic50";
import { ENERGY29_DIAGRAMS } from "../src/lib/lesson-visuals/energy29";
import { LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/registry";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
import { PreviousLessonDiagramCanvas } from "./fixtures/PreviousLessonDiagramCanvas";

it("preserves the exact markup of every previously delivered diagram in all three states", () => {
  const added = new Set<string>(
    [
      ...ATLAS100_DIAGRAMS,
      ...DETAILED_LESSON_DIAGRAMS,
      ...EDITION_LESSON_DIAGRAMS,
      ...ATLAS65_DIAGRAMS,
      ...THEMATIC50_DIAGRAMS,
      ...ENERGY29_DIAGRAMS,
      ...BATCH50_DIAGRAMS,
      ...ORGANS_DIAGRAMS,
      ...SCIENCES30_DIAGRAMS,
      ...EXPLORATIONS50_DIAGRAMS,
      ...HORIZONS50_DIAGRAMS,
      ...EVERYDAY_DIAGRAMS,
    ].map((s) => s.id),
  );
  const previous = LESSON_DIAGRAMS.filter((s) => !added.has(s.id));
  expect(previous.length).toBeGreaterThan(100);
  for (const spec of previous.filter(({ id }) => !hasTransportRevision(id)))
    for (const step of [0, 1, 2]) {
      expect(
        renderToStaticMarkup(createElement(LessonDiagramCanvas, { spec, step })),
        `${spec.id}, état ${step}`,
      ).toBe(renderToStaticMarkup(createElement(PreviousLessonDiagramCanvas, { spec, step })));
    }
});
