import { transmissionPlates } from "./refined/transport/transmission";
import { chassisPlates } from "./refined/transport/chassis";
import { ATLAS65_DIAGRAMS } from "@/lib/lesson-visuals/atlas65";
import { Title, WorkshopPaints } from "./Energy29Parts";
import type { SceneSet } from "./Atlas65Parts";
import { culture65 } from "./Culture65Drawings";
import { engineering65 } from "./Engineering65Drawings";
import { knowledge65 } from "./Knowledge65Drawings";
import { land65 } from "./Land65Drawings";
import { mobility65 } from "./Mobility65Drawings";

const scenes: SceneSet = {
  ...culture65,
  ...mobility65,
  ...land65,
  ...engineering65,
  ...knowledge65,
};

const stepsByKind = new Map<string, readonly { label: string }[]>(
  ATLAS65_DIAGRAMS.map(({ id, steps }) => [id, steps]),
);

export function hasAtlas65Drawing(kind: string) {
  return stepsByKind.has(kind);
}

export function Atlas65Drawing({ kind, step, id }: { kind: string; step: number; id: string }) {
  if (kind === "transferCase" || kind === "automaticGearbox")
    return transmissionPlates[kind](step, id);
  if (kind === "suspensionLinks") return chassisPlates.suspensionLinks(step, id);
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
