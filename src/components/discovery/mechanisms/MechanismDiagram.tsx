import type { DiagramProps } from "./primitives";
import { WifiDiagram } from "./WifiDiagram";
import { TelephoneDiagram } from "./TelephoneDiagram";
import { AutopilotDiagram } from "./AutopilotDiagram";
import { PhotosynthesisDiagram } from "./PhotosynthesisDiagram";
import { CycloneDiagram } from "./CycloneDiagram";
import { BreadDiagram } from "./BreadDiagram";
import { SoilDiagram } from "./SoilDiagram";
import { GlassDiagram } from "./GlassDiagram";
import { PaperDiagram } from "./PaperDiagram";
import { FrescoDiagram } from "./FrescoDiagram";
import { GridDiagram } from "./GridDiagram";
import { LeverDiagram } from "./LeverDiagram";
import { BuoyancyDiagram } from "./BuoyancyDiagram";
import { MoonDiagram } from "./MoonDiagram";
import { SeasonsDiagram } from "./SeasonsDiagram";
import { GearsDiagram } from "./GearsDiagram";
export function MechanismDiagram({ state }: DiagramProps) {
  switch (state.kind) {
    case "lever":
      return <LeverDiagram state={state} />;
    case "buoyancy":
      return <BuoyancyDiagram state={state} />;
    case "moon":
      return <MoonDiagram state={state} />;
    case "seasons":
      return <SeasonsDiagram state={state} />;
    case "gears":
      return <GearsDiagram state={state} />;
    case "wifi":
      return <WifiDiagram state={state} />;
    case "telephone":
      return <TelephoneDiagram state={state} />;
    case "autopilot":
      return <AutopilotDiagram state={state} />;
    case "photosynthesis":
      return <PhotosynthesisDiagram state={state} />;
    case "cyclone":
      return <CycloneDiagram state={state} />;
    case "bread":
      return <BreadDiagram state={state} />;
    case "soil":
      return <SoilDiagram state={state} />;
    case "glass":
      return <GlassDiagram state={state} />;
    case "paper":
      return <PaperDiagram state={state} />;
    case "fresco":
      return <FrescoDiagram state={state} />;
    case "grid":
      return <GridDiagram state={state} />;
  }
}
