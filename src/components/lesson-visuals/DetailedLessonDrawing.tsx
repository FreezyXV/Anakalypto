import { DETAILED_LESSON_DIAGRAMS } from "@/lib/lesson-visuals/detailed20261123";
import { bodyPlates } from "./detail100/body";
import { landscapePlates } from "./detail100/landscape";
import { materialsPlates } from "./detail100/materials";
import { mediaHistoryPlates } from "./detail100/mediaHistory";
import { motionPlates } from "./detail100/motion";
import { motionLabPlates } from "./detail100/motionLab";
import { PlateSurface, type Plate } from "./detail100/plate";
import { producePlates } from "./detail100/produce";
import { roadPlates } from "./detail100/road";
import { systemsPlates } from "./detail100/systems";
import { technologyPlates } from "./detail100/technology";

const plates: Readonly<Record<(typeof DETAILED_LESSON_DIAGRAMS)[number]["id"], Plate>> = {
  ...bodyPlates,
  ...landscapePlates,
  ...materialsPlates,
  ...mediaHistoryPlates,
  ...motionPlates,
  ...motionLabPlates,
  ...producePlates,
  ...roadPlates,
  ...systemsPlates,
  ...technologyPlates,
};

const entries = new Map(
  DETAILED_LESSON_DIAGRAMS.map(({ id, steps }) => [id, { steps, render: plates[id] }] as const),
);

type Kind = Parameters<typeof entries.has>[0];

export const hasDetailedLessonDrawing = (kind: string) => entries.has(kind as Kind);

export function DetailedLessonDrawing({
  kind,
  step,
  id,
}: {
  kind: string;
  step: number;
  id: string;
}) {
  const entry = entries.get(kind as Kind);
  const view = entry?.steps[step];
  if (!entry || !view) throw new Error(`Planche absente pour ${kind}, vue ${step}`);
  return (
    <>
      <PlateSurface id={id} label={view.label} />
      {entry.render(step, id)}
    </>
  );
}
