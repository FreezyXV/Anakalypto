import { EVERYDAY_DIAGRAMS } from "@/lib/lesson-visuals/everyday50";
import { WorkshopPaints, Title } from "./Energy29Parts";
import { everydayArts } from "./EverydayArts";
import { everydayAuto } from "./EverydayAuto";
import { everydayEarth } from "./EverydayEarth";
import { everydayEnergy } from "./EverydayEnergy";
import { everydayEnvironment } from "./EverydayEnvironment";
import { everydayIndustry } from "./EverydayIndustry";
import { everydaySport } from "./EverydaySport";
import { everydayTechnology } from "./EverydayTechnology";
import type { SceneSet } from "./EverydayParts";

const sceneByKind: SceneSet = {
  ...everydayArts,
  ...everydayAuto,
  ...everydayEarth,
  ...everydayEnergy,
  ...everydayEnvironment,
  ...everydayIndustry,
  ...everydaySport,
  ...everydayTechnology,
};

const labelsByKind = new Map<string, readonly string[]>(
  EVERYDAY_DIAGRAMS.map(({ id, steps }) => [id, steps.map(({ label }) => label)]),
);

export function EverydayDrawing({ kind, step, id }: { kind: string; step: number; id: string }) {
  const labels = labelsByKind.get(kind);
  if (!labels) return null;
  const draw = sceneByKind[kind];
  if (!draw) throw new Error(`Dessin manquant pour ${kind}`);
  return (
    <>
      <WorkshopPaints id={id} />
      <Title>{labels[step]}</Title>
      {draw(step, id)}
    </>
  );
}
