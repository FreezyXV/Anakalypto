import { useId, type CSSProperties } from "react";
import type { DiscoveryStep } from "@/lib/discovery/schema";
import { FlowDiagram } from "./FlowDiagram";
import { PistonDiagram } from "./PistonDiagram";
import { visualDescription, representativeVisualValue } from "@/lib/discovery/visual-state";
import { isMechanismKind, mechanismState } from "@/lib/discovery/mechanisms";
import { MechanismDiagram } from "./mechanisms/MechanismDiagram";
import { DiagramSurface } from "./DiagramSurface";
import { TurboDiagram } from "./TurboDiagram";
import { SoapDiagram } from "./SoapDiagram";
import { CircuitDiagram } from "./CircuitDiagram";
import { visualCaption } from "@/lib/discovery/visual-caption";

/** Subject-specific, original SVGs. The visible caption follows the represented state. */
export function DiscoveryVisual({
  visual,
  value,
  stateCaption = false,
  compact = false,
}: {
  visual: DiscoveryStep["visual"];
  value: number;
  stateCaption?: boolean;
  compact?: boolean;
}) {
  const id = `art-${useId().replace(/:/g, "")}`;
  const currentValue = visual.fixedValue ?? value;
  const description = visualDescription(visual, currentValue);
  const mechanism = isMechanismKind(visual.kind)
    ? mechanismState(visual.kind, currentValue, visual.frame, visual.scene)
    : undefined;
  const tint = ["photosynthesis", "bread", "soil", "soap"].includes(visual.kind)
    ? "#eef6ef"
    : ["turbo", "piston", "fresco", "glass"].includes(visual.kind)
      ? "#f8f1e8"
      : "#edf4fb";
  const paints = {
    "--art-metal": `url(#${id}-metal)`,
    "--art-gold": `url(#${id}-gold)`,
    "--art-water": `url(#${id}-water)`,
    "--art-leaf": `url(#${id}-leaf)`,
    "--art-cloud": `url(#${id}-cloud)`,
    "--art-dough": `url(#${id}-dough)`,
  } as CSSProperties;
  return (
    <figure className="discovery-figure" data-subject={visual.kind}>
      <svg viewBox="0 0 360 210" aria-hidden="true" focusable="false" style={paints}>
        <DiagramSurface id={id} tint={tint} />
        {visual.kind === "soap" && <SoapDiagram active={currentValue > 0} />}
        {visual.kind === "turbo" && <TurboDiagram value={currentValue} />}
        {visual.kind === "circuit" && <CircuitDiagram active={currentValue > 0} />}
        {visual.kind === "flow" && <FlowDiagram visual={visual} value={currentValue} />}
        {visual.kind === "piston" && <PistonDiagram value={currentValue} phase={visual.phase} />}
        {mechanism && <MechanismDiagram state={mechanism} />}
      </svg>
      <figcaption>
        {compact ? (
          <>
            <span aria-hidden="true">{visualCaption(visual, currentValue)}</span>
            <span className="sr-only">{description}</span>
          </>
        ) : stateCaption ? (
          description
        ) : (
          visual.caption
        )}
        {!compact && !stateCaption && description !== visual.caption && (
          <span className="block"> {description}</span>
        )}
      </figcaption>
    </figure>
  );
}

/** Choose a representative teaching state, independent of saved progress. */
export function DiscoveryPreview({ visual }: { visual: DiscoveryStep["visual"] }) {
  return (
    <DiscoveryVisual
      visual={{
        ...visual,
        fixedValue: undefined,
        frame: undefined,
        phase: visual.kind === "piston" ? 2 : undefined,
      }}
      value={representativeVisualValue(visual.kind)}
      stateCaption
    />
  );
}
