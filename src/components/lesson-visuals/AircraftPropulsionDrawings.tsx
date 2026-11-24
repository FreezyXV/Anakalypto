import { energyPlates } from "./refined/transport/energy";
import { airframePlates } from "./refined/transport/airframes";
import { enginePlates } from "./refined/transport/aircraft";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function AircraftPropulsionDrawing({ kind, step, id }: Props) {
  if (kind === "hydrogenair") return energyPlates.hydrogenair(step, id);
  if (kind === "zeroe") return energyPlates.zeroe(step, id);
  if (kind === "electricair") return energyPlates.electricair(step, id);
  if (kind === "saf") return energyPlates.saf(step, id);
  if (kind === "aeroengine") return enginePlates.aeroengine(step, id);
  if (kind === "landingbrakes") return enginePlates.landingbrakes(step, id);
  if (kind === "magnetos") return enginePlates.magnetos(step, id);
  if (kind === "scooper") return airframePlates.scooper(step, id);
  return null;
}
