import { FoodConservation50Drawing } from "../../src/components/lesson-visuals/FoodConservation50Drawings";
import { FoodProcesses50Drawing } from "../../src/components/lesson-visuals/FoodProcesses50Drawings";
import { MusicOptics50Drawing } from "../../src/components/lesson-visuals/MusicOptics50Drawings";
import { ArtsCrafts50Drawing } from "../../src/components/lesson-visuals/ArtsCrafts50Drawings";
import { AutoPower50Drawing } from "../../src/components/lesson-visuals/AutoPower50Drawings";
import { AutoControl50Drawing } from "../../src/components/lesson-visuals/AutoControl50Drawings";
import { Ecology50Drawing } from "../../src/components/lesson-visuals/Ecology50Drawings";
import { Hydrology50Drawing } from "../../src/components/lesson-visuals/Hydrology50Drawings";
import { Web50Drawing } from "../../src/components/lesson-visuals/Web50Drawings";
import { Hardware50Drawing } from "../../src/components/lesson-visuals/Hardware50Drawings";
import { Biology30Drawing } from "../../src/components/lesson-visuals/Biology30Drawings";
import { Chemistry30Drawing } from "../../src/components/lesson-visuals/Chemistry30Drawings";
import { Thermo30Drawing } from "../../src/components/lesson-visuals/Thermo30Drawings";
import { Math30Drawing } from "../../src/components/lesson-visuals/Math30Drawings";
import { EarthPhysics30Drawing } from "../../src/components/lesson-visuals/EarthPhysics30Drawings";
import { Materials30Drawing } from "../../src/components/lesson-visuals/Materials30Drawings";
import { CardioOrgansDrawing } from "../../src/components/lesson-visuals/CardioOrgansDrawings";
import { DigestiveOrgansDrawing } from "../../src/components/lesson-visuals/DigestiveOrgansDrawings";
import { NeuroOrgansDrawing } from "../../src/components/lesson-visuals/NeuroOrgansDrawings";
import { RenalImmuneOrgansDrawing } from "../../src/components/lesson-visuals/RenalImmuneOrgansDrawings";
import { Physics50Drawing } from "../../src/components/lesson-visuals/Physics50Drawings";
import { Environment50Drawing } from "../../src/components/lesson-visuals/Environment50Drawings";
import { Agriculture50Drawing } from "../../src/components/lesson-visuals/Agriculture50Drawings";
import { Manufacturing50Drawing } from "../../src/components/lesson-visuals/Manufacturing50Drawings";
import { Engineering50Drawing } from "../../src/components/lesson-visuals/Engineering50Drawings";
import { ThermalHomeDrawing } from "../../src/components/lesson-visuals/ThermalHomeDrawings";
import { ConversionDrawing } from "../../src/components/lesson-visuals/ConversionDrawings";
import { ElectrochemicalDrawing } from "../../src/components/lesson-visuals/ElectrochemicalDrawings";
import { GridStorageDrawing } from "../../src/components/lesson-visuals/GridStorageDrawings";
import { NuclearDrawing } from "../../src/components/lesson-visuals/NuclearDrawings";
import { EnergyAccountingDrawing } from "../../src/components/lesson-visuals/EnergyAccountingDrawings";
import { RadioDrawing } from "../../src/components/lesson-visuals/RadioDrawings";
import { useId, type CSSProperties } from "react";
import type { LessonDiagramSpec } from "@/lib/lesson-visuals/registry";
import { DiagramSurface } from "@/components/discovery/DiagramSurface";
import { EnergyDrawing } from "../../src/components/lesson-visuals/EnergyDrawings";
import { EngineeringDrawing } from "../../src/components/lesson-visuals/EngineeringDrawings";
import { EarthDrawing } from "../../src/components/lesson-visuals/EarthDrawings";
import { LivingDrawing } from "../../src/components/lesson-visuals/LivingDrawings";
import { CultureDrawing } from "../../src/components/lesson-visuals/CultureDrawings";
import { InquiryDrawing } from "../../src/components/lesson-visuals/InquiryDrawings";
import { DigitalDrawing } from "../../src/components/lesson-visuals/DigitalDrawings";
import { AstronomyDrawing } from "../../src/components/lesson-visuals/AstronomyDrawings";
import { ObservationDrawing } from "../../src/components/lesson-visuals/ObservationDrawings";
import { SpaceContextDrawing } from "../../src/components/lesson-visuals/SpaceContextDrawings";
import { AeronauticsDrawing } from "../../src/components/lesson-visuals/AeronauticsDrawings";
import { FlightSystemsDrawing } from "../../src/components/lesson-visuals/FlightSystemsDrawings";
import { AircraftPropulsionDrawing } from "../../src/components/lesson-visuals/AircraftPropulsionDrawings";
import { AIContextDrawing } from "../../src/components/lesson-visuals/AIContextDrawings";
import { AIUsageDrawing } from "../../src/components/lesson-visuals/AIUsageDrawings";
import { AISocietyDrawing } from "../../src/components/lesson-visuals/AISocietyDrawings";
import { LearningDrawing } from "../../src/components/lesson-visuals/LearningDrawings";
import { LearningProcessDrawing } from "../../src/components/lesson-visuals/LearningProcessDrawings";
import styles from "../../src/components/lesson-visuals/LessonDiagram.module.css";

/** Rendered on the server; the explorer only switches between these authored frames. */
export function BeforeHorizons50Canvas({
  spec,
  step = 0,
  decorative = false,
}: {
  spec: LessonDiagramSpec;
  step?: number;
  decorative?: boolean;
}) {
  const id = `lesson-art-${useId().replace(/:/g, "")}`;
  const frame = Math.max(0, Math.min(2, Math.round(step)));
  const props = { kind: spec.id, step: frame, id };
  return (
    <figure
      className={styles.figure}
      data-lesson-diagram={spec.id}
      data-frame={frame}
      aria-hidden={decorative || undefined}
    >
      <svg
        viewBox={`0 0 360 ${spec.canvasHeight ?? 210}`}
        aria-hidden="true"
        focusable="false"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" } as CSSProperties}
      >
        <DiagramSurface id={id} tint="#eef3f8" />
        <FoodConservation50Drawing {...props} />
        <FoodProcesses50Drawing {...props} />
        <MusicOptics50Drawing {...props} />
        <ArtsCrafts50Drawing {...props} />
        <AutoPower50Drawing {...props} />
        <AutoControl50Drawing {...props} />
        <Ecology50Drawing {...props} />
        <Hydrology50Drawing {...props} />
        <Web50Drawing {...props} />
        <Hardware50Drawing {...props} />
        <Biology30Drawing {...props} />
        <Chemistry30Drawing {...props} />
        <Thermo30Drawing {...props} />
        <Math30Drawing {...props} />
        <EarthPhysics30Drawing {...props} />
        <Materials30Drawing {...props} />
        <CardioOrgansDrawing {...props} />
        <DigestiveOrgansDrawing {...props} />
        <NeuroOrgansDrawing {...props} />
        <RenalImmuneOrgansDrawing {...props} />
        <Physics50Drawing {...props} />
        <Environment50Drawing {...props} />
        <Agriculture50Drawing {...props} />
        <Manufacturing50Drawing {...props} />
        <Engineering50Drawing {...props} />
        <EnergyDrawing {...props} />
        <EngineeringDrawing {...props} />
        <EarthDrawing {...props} />
        <LivingDrawing {...props} />
        <DigitalDrawing {...props} />
        <CultureDrawing {...props} />
        <InquiryDrawing {...props} />
        <AstronomyDrawing {...props} />
        <ObservationDrawing {...props} />
        <SpaceContextDrawing {...props} />
        <AeronauticsDrawing {...props} />
        <FlightSystemsDrawing {...props} />
        <AircraftPropulsionDrawing {...props} />
        <RadioDrawing {...props} />
        <ThermalHomeDrawing {...props} />
        <ConversionDrawing {...props} />
        <ElectrochemicalDrawing {...props} />
        <GridStorageDrawing {...props} />
        <NuclearDrawing {...props} />
        <EnergyAccountingDrawing {...props} />

        <LearningDrawing {...props} />
        <AIUsageDrawing {...props} />
        <AIContextDrawing {...props} />
        <AISocietyDrawing {...props} />
        <LearningProcessDrawing {...props} />
      </svg>
      {!decorative && <figcaption>{(spec.steps[frame] ?? spec.steps[0]).caption}</figcaption>}
    </figure>
  );
}
