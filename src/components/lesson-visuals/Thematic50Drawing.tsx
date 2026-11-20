import { THEMATIC50_DIAGRAMS } from "@/lib/lesson-visuals/thematic50";
import { culture50 } from "./Culture50Drawings";
import { Title, WorkshopPaints } from "./Energy29Parts";
import type { SceneSet } from "./EverydayParts";
import { workshop50 } from "./IndustryField50Drawings";
import { information50 } from "./Information50Drawings";
import { mobility50 } from "./Mobility50Drawings";
import { resources50 } from "./Resources50Drawings";

const scenes: SceneSet = {
  ...culture50,
  ...mobility50,
  ...workshop50,
  ...resources50,
  ...information50,
};

const stepsByKind = new Map<string, readonly { label: string }[]>(
  THEMATIC50_DIAGRAMS.map(({ id, steps }) => [id, steps]),
);

export function Thematic50Drawing({ kind, step, id }: { kind: string; step: number; id: string }) {
  const steps = stepsByKind.get(kind);
  if (!steps) return null;
  const draw = scenes[kind];
  if (!draw) throw new Error(`Dessin manquant pour ${kind}`);
  return (
    <>
      <WorkshopPaints id={id} />
      <Title>{steps[step]?.label}</Title>
      {draw(step, id)}
    </>
  );
}
