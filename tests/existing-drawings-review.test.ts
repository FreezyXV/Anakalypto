import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LESSON_DIAGRAMS } from "../src/lib/lesson-visuals/registry";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";
import { DiscoveryVisual } from "../src/components/discovery/DiscoveryVisual";
import { getDiscoveryLessons } from "../src/lib/discovery/load";
import { workshopInitialValue, workshopScenes } from "../src/lib/discovery/workshop";

const html = (kind: string, step: number) =>
  renderToStaticMarkup(
    createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS.find((s) => s.id === kind)!, step }),
  );
const hash = (markup: string) => createHash("sha256").update(markup).digest("hex");

describe("review of existing drawings", () => {
  it("preserves the actual delivered frames outside the four reviewed corrections", async () => {
    const before = JSON.parse(
      await readFile(
        new URL("../docs/qa/existing-drawings/before-render-hashes.json", import.meta.url),
        "utf8",
      ),
    );
    const changed = new Set(["lift", "cpu", "lock", "distillation"]);
    expect(Object.keys(before.drawings).sort()).toEqual(LESSON_DIAGRAMS.map((s) => s.id).sort());
    for (const spec of LESSON_DIAGRAMS) {
      const current = [0, 1, 2].map((step) => hash(html(spec.id, step)));
      if (changed.has(spec.id)) expect(current, spec.id).not.toEqual(before.drawings[spec.id]);
      else expect(current, spec.id).toEqual(before.drawings[spec.id]);
    }
    const workshops = Object.fromEntries(
      (await getDiscoveryLessons()).map((d) => [
        d.slug,
        workshopScenes(d).flatMap((scene) => {
          const values =
            scene.interaction?.kind === "toggle"
              ? [0, 100]
              : scene.interaction?.kind === "range"
                ? [0, 25, 50, 75, 100]
                : [workshopInitialValue(scene)];
          return values.map((value) => ({
            scene: scene.id,
            value,
            hash: hash(
              renderToStaticMarkup(
                createElement(DiscoveryVisual, { visual: scene.visual, value, stateCaption: true }),
              ),
            ),
          }));
        }),
      ]),
    );
    expect(workshops).toEqual(before.workshops);
  });

  it("raises the leading edge relative to the incident flow as incidence increases", () => {
    const chordAngles = [0, 1, 2].map((step) => {
      const markup = html("lift", step);
      const path = markup.match(/<path[^>]*data-airfoil="lift"[^>]*>/)![0];
      const transform = path.match(/transform="rotate\(([-\d.]+) ([-\d.]+) ([-\d.]+)\)"/)!;
      const angle = (Number(transform[1]) * Math.PI) / 180,
        cx = Number(transform[2]),
        cy = Number(transform[3]);
      const rotate = (x: number, y: number) => ({
        x: cx + (x - cx) * Math.cos(angle) - (y - cy) * Math.sin(angle),
        y: cy + (x - cx) * Math.sin(angle) + (y - cy) * Math.cos(angle),
      });
      const leading = rotate(98, 130),
        trailing = rotate(276, 135);
      return Math.atan2(trailing.y - leading.y, trailing.x - leading.x);
    });
    expect(chordAngles[0]).toBeGreaterThan(0);
    expect(chordAngles[1]).toBeGreaterThan(chordAngles[0]!);
    expect(chordAngles[2]).toBeGreaterThan(chordAngles[1]!);
  });

  it("keeps the closed downstream lock gate above the chamber water", () => {
    for (const step of [1, 2]) {
      const markup = html("lock", step);
      const water = markup.match(/<rect[^>]*data-lock-water="chamber"[^>]*>/)![0];
      const gate = markup.match(/<path[^>]*data-lock-gate="downstream"[^>]*>/)![0];
      const waterY = Number(water.match(/\by="([-\d.]+)"/)![1]);
      const gateY = Number(gate.match(/\bd="M[-\d.]+ ([-\d.]+)/)![1]);
      expect(gateY).toBeLessThanOrEqual(waterY);
    }
  });
});
