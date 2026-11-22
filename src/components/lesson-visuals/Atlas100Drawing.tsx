import { ATLAS100_DIAGRAMS } from "@/lib/lesson-visuals/atlas100";
import { Title, WorkshopPaints } from "./Energy29Parts";
import { MetalPaint, type SceneSet } from "./Atlas65Parts";
import { territories100 } from "./atlas100/territories";
import { food100 } from "./atlas100/food";
import { media100 } from "./atlas100/media";
import { automotive100 } from "./atlas100/automotive";
import { mobility100 } from "./atlas100/mobility";
import { science100 } from "./atlas100/science";
import { industry100 } from "./atlas100/industry";
import { learning100 } from "./atlas100/learning";
import { economy100 } from "./atlas100/economy";
import { movement100 } from "./atlas100/movement";

const scenes: SceneSet = {
  ...territories100,
  ...food100,
  ...media100,
  ...automotive100,
  ...mobility100,
  ...science100,
  ...industry100,
  ...learning100,
  ...economy100,
  ...movement100,
};
const labels = new Map<string, readonly { label: string }[]>(
  ATLAS100_DIAGRAMS.map(({ id, steps }) => [id, steps]),
);
export const hasAtlas100Drawing = (kind: string) => labels.has(kind);

export function Atlas100Drawing({ kind, step, id }: { kind: string; step: number; id: string }) {
  const title = labels.get(kind)?.[step]?.label;
  const draw = scenes[kind];
  if (!title || !draw) throw new Error(`Dessin manquant pour ${kind}`);
  return (
    <>
      <WorkshopPaints id={id} />
      <MetalPaint id={id} />
      <Title>{title}</Title>
      {draw(step, id)}
    </>
  );
}
