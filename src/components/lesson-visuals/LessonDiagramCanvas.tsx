import { EverydayDrawing } from "./EverydayDrawing";
import { Thematic50Drawing } from "./Thematic50Drawing";
import { Atlas65Drawing, hasAtlas65Drawing } from "./Atlas65Drawing";
import { TelecomHorizonsDrawing } from "./TelecomHorizonsDrawings";
import { AutoHorizonsDrawing } from "./AutoHorizonsDrawings";
import { GeographyHorizonsDrawing } from "./GeographyHorizonsDrawings";
import { IndustryHorizonsDrawing } from "./IndustryHorizonsDrawings";
import { DigitalHorizonsDrawing } from "./DigitalHorizonsDrawings";
import { MathHorizonsDrawing } from "./MathHorizonsDrawings";
import { FoodHorizonsDrawing } from "./FoodHorizonsDrawings";
import { EnergyHorizonsDrawing } from "./EnergyHorizonsDrawings";
import { BiologyHorizonsDrawing } from "./BiologyHorizonsDrawings";
import { StructuresHorizonsDrawing } from "./StructuresHorizonsDrawings";
import { FoodConservation50Drawing } from "./FoodConservation50Drawings";
import { FoodProcesses50Drawing } from "./FoodProcesses50Drawings";
import { MusicOptics50Drawing } from "./MusicOptics50Drawings";
import { ArtsCrafts50Drawing } from "./ArtsCrafts50Drawings";
import { AutoPower50Drawing } from "./AutoPower50Drawings";
import { AutoControl50Drawing } from "./AutoControl50Drawings";
import { Ecology50Drawing } from "./Ecology50Drawings";
import { Hydrology50Drawing } from "./Hydrology50Drawings";
import { Web50Drawing } from "./Web50Drawings";
import { Hardware50Drawing } from "./Hardware50Drawings";
import { Biology30Drawing } from "./Biology30Drawings";
import { Chemistry30Drawing } from "./Chemistry30Drawings";
import { Thermo30Drawing } from "./Thermo30Drawings";
import { Math30Drawing } from "./Math30Drawings";
import { EarthPhysics30Drawing } from "./EarthPhysics30Drawings";
import { Materials30Drawing } from "./Materials30Drawings";
import { CardioOrgansDrawing } from "./CardioOrgansDrawings";
import { DigestiveOrgansDrawing } from "./DigestiveOrgansDrawings";
import { NeuroOrgansDrawing } from "./NeuroOrgansDrawings";
import { RenalImmuneOrgansDrawing } from "./RenalImmuneOrgansDrawings";
import { Physics50Drawing } from "./Physics50Drawings";
import { Environment50Drawing } from "./Environment50Drawings";
import { Agriculture50Drawing } from "./Agriculture50Drawings";
import { Manufacturing50Drawing } from "./Manufacturing50Drawings";
import { Engineering50Drawing } from "./Engineering50Drawings";
import { ThermalHomeDrawing } from "./ThermalHomeDrawings";
import { ConversionDrawing } from "./ConversionDrawings";
import { ElectrochemicalDrawing } from "./ElectrochemicalDrawings";
import { GridStorageDrawing } from "./GridStorageDrawings";
import { NuclearDrawing } from "./NuclearDrawings";
import { EnergyAccountingDrawing } from "./EnergyAccountingDrawings";
import { RadioDrawing } from "./RadioDrawings";
import { useId, type CSSProperties } from "react";
import type { LessonDiagramSpec } from "@/lib/lesson-visuals/registry";
import { DiagramSurface } from "@/components/discovery/DiagramSurface";
import { EnergyDrawing } from "./EnergyDrawings";
import { EngineeringDrawing } from "./EngineeringDrawings";
import { EarthDrawing } from "./EarthDrawings";
import { LivingDrawing } from "./LivingDrawings";
import { CultureDrawing } from "./CultureDrawings";
import { InquiryDrawing } from "./InquiryDrawings";
import { DigitalDrawing } from "./DigitalDrawings";
import { AstronomyDrawing } from "./AstronomyDrawings";
import { ObservationDrawing } from "./ObservationDrawings";
import { SpaceContextDrawing } from "./SpaceContextDrawings";
import { AeronauticsDrawing } from "./AeronauticsDrawings";
import { FlightSystemsDrawing } from "./FlightSystemsDrawings";
import { AircraftPropulsionDrawing } from "./AircraftPropulsionDrawings";
import { AIContextDrawing } from "./AIContextDrawings";
import { AIUsageDrawing } from "./AIUsageDrawings";
import { AISocietyDrawing } from "./AISocietyDrawings";
import { LearningDrawing } from "./LearningDrawings";
import { LearningProcessDrawing } from "./LearningProcessDrawings";
import styles from "./LessonDiagram.module.css";

/** Rendered on the server; the explorer only switches between these authored frames. */
export function LessonDiagramCanvas({
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
        <TelecomHorizonsDrawing {...props} />
        <AutoHorizonsDrawing {...props} />
        <GeographyHorizonsDrawing {...props} />
        <IndustryHorizonsDrawing {...props} />
        <DigitalHorizonsDrawing {...props} />
        <MathHorizonsDrawing {...props} />
        <FoodHorizonsDrawing {...props} />
        <EnergyHorizonsDrawing {...props} />
        <BiologyHorizonsDrawing {...props} />
        <StructuresHorizonsDrawing {...props} />
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
        <EverydayDrawing {...props} />
        {hasAtlas65Drawing(spec.id) ? (
          <Atlas65Drawing {...props} />
        ) : (
          <Thematic50Drawing {...props} />
        )}
      </svg>
      {!decorative && <figcaption>{(spec.steps[frame] ?? spec.steps[0]).caption}</figcaption>}
    </figure>
  );
}
