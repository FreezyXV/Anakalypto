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
        viewBox="0 0 360 210"
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
