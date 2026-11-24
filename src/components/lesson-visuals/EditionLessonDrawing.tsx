import { EDITION_LESSON_DIAGRAMS } from "@/lib/lesson-visuals/edition20261124";
import { carePlates } from "./edition100/care";
import { civilPlates } from "./edition100/civil";
import { foodSystemsPlates } from "./edition100/foodSystems";
import { infrastructurePlates } from "./edition100/infrastructure";
import { institutionsPlates } from "./edition100/institutions";
import { marketsPlates } from "./edition100/markets";
import { networkPlates } from "./edition100/networks";
import { nutritionPlates } from "./edition100/nutrition";
import { physiologyPlates } from "./edition100/physiology";
import { researchPlates } from "./edition100/research";
import { PlateSurface, type Plate } from "./detail100/plate";
import { anatomyRefinements } from "./refined/anatomy";
import { industryRefinements } from "./refined/industry";
import { fieldRefinements } from "./refined/field";
import { microscopyRefinements } from "./refined/microscopy";

const plates: Readonly<Record<(typeof EDITION_LESSON_DIAGRAMS)[number]["id"], Plate>> = {
  ...carePlates,
  ...civilPlates,
  ...foodSystemsPlates,
  ...infrastructurePlates,
  ...institutionsPlates,
  ...marketsPlates,
  ...networkPlates,
  ...nutritionPlates,
  ...physiologyPlates,
  ...researchPlates,
  ...anatomyRefinements,
  ...industryRefinements,
  ...fieldRefinements,
  ...microscopyRefinements,
};

const entries = new Map(
  EDITION_LESSON_DIAGRAMS.map(({ id, steps }) => [id, { steps, render: plates[id] }] as const),
);

type Kind = Parameters<typeof entries.has>[0];

export const hasEditionLessonDrawing = (kind: string) => entries.has(kind as Kind);

export function EditionLessonDrawing({
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
