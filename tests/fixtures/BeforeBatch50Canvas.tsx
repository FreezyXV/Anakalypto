/** Delivered drawings before batch50; never update this fixture to hide a regression. */
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
export function BeforeBatch50Canvas({
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
