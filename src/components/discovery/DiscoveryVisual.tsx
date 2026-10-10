import type { DiscoveryStep } from "@/lib/discovery/schema";

import { FlowDiagram } from "./FlowDiagram";
import { PistonDiagram } from "./PistonDiagram";
import { flowState, pistonState } from "@/lib/discovery/visual-state";
import { isMechanismKind, mechanismState } from "@/lib/discovery/mechanisms";
import { MechanismDiagram } from "./mechanisms/MechanismDiagram";

const INK = "#15142b";
const BLUE = "#2860c8";
const ORANGE = "#e77826";

function Wheel({ x, speed }: { x: number; speed: number }) {
  return (
    <g transform={`translate(${x} 100)`}>
      <circle r="42" fill="#fff" stroke={INK} strokeWidth="3" />
      <g
        className={speed > 0 ? "discovery-wheel" : undefined}
        style={{ animationDuration: `${4 - speed * 0.03}s` }}
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle})`}
            d="M0 0 Q18 -25 0 -32 Q-10 -15 0 0"
            fill={BLUE}
          />
        ))}
      </g>
      <circle r="6" fill={INK} />
    </g>
  );
}

/** Small semantic diagrams; the surrounding caption is the accessible alternative. */
export function DiscoveryVisual({
  visual,
  value,
}: {
  visual: DiscoveryStep["visual"];
  value: number;
}) {
  const active = value > 0;
  const mechanism = isMechanismKind(visual.kind)
    ? mechanismState(visual.kind, value, visual.frame, visual.scene)
    : undefined;
  return (
    <figure className="discovery-figure">
      <svg viewBox="0 0 360 210" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="358" height="208" rx="22" fill="#edf5fc" />
        {visual.kind === "soap" && (
          <>
            <text x="24" y="31" fill={BLUE} fontSize="16" fontWeight="700">
              Eau
            </text>
            <circle cx="180" cy="111" r="39" fill="#f4b449" stroke={INK} strokeWidth="3" />
            <text x="180" y="115" textAnchor="middle" fill={INK} fontSize="14" fontWeight="700">
              Graisse
            </text>
            {active &&
              Array.from({ length: 12 }, (_, index) => (
                <g key={index} transform={`rotate(${index * 30} 180 111)`}>
                  <path
                    d="M180 52 L175 63 L185 71 L180 81"
                    stroke={ORANGE}
                    fill="none"
                    strokeWidth="4"
                  />
                  <circle cx="180" cy="47" r="7" fill={BLUE} stroke={INK} strokeWidth="1.5" />
                </g>
              ))}
            <text x="180" y="194" textAnchor="middle" fill={INK} fontSize="14">
              {active
                ? "Têtes vers l’eau · queues vers la graisse"
                : "La graisse se mélange mal à l’eau"}
            </text>
          </>
        )}
        {visual.kind === "turbo" && (
          <>
            <path d="M126 100 H234" stroke={INK} strokeWidth="9" />
            <Wheel x={90} speed={value} />
            <Wheel x={270} speed={value} />
            <text x="180" y="83" textAnchor="middle" fill={INK} fontSize="14">
              Axe
            </text>
            <path
              d="M16 87 H65 l-8 -5 m8 5 l-8 5 M90 117 V145 H152 l-8 -5 m8 5 l-8 5"
              fill="none"
              stroke="#b85c16"
              strokeWidth="3"
              opacity={active ? 1 : 0.4}
              strokeDasharray={active ? undefined : "4 4"}
            />
            <path
              d="M208 117 H246 l-8 -5 m8 5 l-8 5 M289 88 H344 l-8 -5 m8 5 l-8 5"
              fill="none"
              stroke={BLUE}
              strokeWidth="3"
              opacity={active ? 1 : 0.4}
              strokeDasharray={active ? undefined : "4 4"}
            />
            <text x="90" y="31" textAnchor="middle" fill="#91420d" fontSize="14">
              Gaz d’échappement
            </text>
            <text x="270" y="31" textAnchor="middle" fill={BLUE} fontSize="14">
              Air vers le moteur
            </text>
            <text x="90" y="166" textAnchor="middle" fill={INK} fontSize="15" fontWeight="700">
              Turbine
            </text>
            <text x="270" y="166" textAnchor="middle" fill={INK} fontSize="15" fontWeight="700">
              Compresseur
            </text>
            {[6, 12, 18].map((height, index) => (
              <rect
                key={height}
                x={163 + index * 12}
                y={145 - height}
                width="8"
                height={height}
                fill={value > (index * 100) / 3 ? "#ffc83d" : "#fff"}
                stroke={INK}
              />
            ))}
            <text x="180" y="166" textAnchor="middle" fill={INK} fontSize="14">
              Rotation
            </text>
            <text x="180" y="196" textAnchor="middle" fill={INK} fontSize="13">
              {value === 0
                ? "Roues arrêtées"
                : value <= 66
                  ? "Rotation modérée"
                  : "Rotation rapide"}
            </text>
          </>
        )}
        {visual.kind === "circuit" && (
          <>
            <path
              d="M68 90 V53 H162 M217 53 H292 V162 H197 M162 162 H68 V117"
              fill="none"
              stroke={active ? BLUE : INK}
              strokeWidth="4"
            />
            <path d="M55 91 H81 M60 111 H76" stroke={INK} strokeWidth="4" />
            <text x="36" y="94" fill={INK} fontSize="16">
              +
            </text>
            <text x="36" y="118" fill={INK} fontSize="16">
              −
            </text>
            <path d={active ? "M162 53 H217" : "M162 53 L211 29"} stroke={INK} strokeWidth="4" />
            <circle cx="162" cy="53" r="4" fill={INK} />
            <circle cx="217" cy="53" r="4" fill={INK} />
            <circle
              cx="180"
              cy="162"
              r="23"
              fill={active ? "#ffc83d" : "#fff"}
              stroke={INK}
              strokeWidth="3"
            />
            <path d="M168 150 L192 174 M192 150 L168 174" stroke={INK} strokeWidth="2" />
            {active && (
              <>
                <path
                  d="M109 53 H133 L125 45 M133 53 L125 61 M256 162 H232 L240 154 M232 162 L240 170"
                  stroke={BLUE}
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M150 136 L140 126 M210 136 L220 126 M180 129 V119"
                  stroke="#946a00"
                  strokeWidth="3"
                />
              </>
            )}
            <text x="65" y="142" textAnchor="middle" fill={INK} fontSize="14">
              Pile
            </text>
            <text x="180" y="15" textAnchor="middle" fill={INK} fontSize="14">
              Interrupteur {active ? "fermé" : "ouvert"}
            </text>
            <text x="180" y="202" textAnchor="middle" fill={INK} fontSize="14">
              Lampe {active ? "allumée" : "éteinte"}
            </text>
          </>
        )}
        {visual.kind === "flow" && <FlowDiagram visual={visual} value={value} />}
        {visual.kind === "piston" && <PistonDiagram value={value} phase={visual.phase} />}
        {mechanism && <MechanismDiagram state={mechanism} />}
      </svg>
      <figcaption>
        {visual.caption}
        {visual.kind === "flow" && (
          <span className="block">{flowState(visual, value).description}</span>
        )}
        {visual.kind === "piston" && (
          <span className="block">{pistonDescription(value, visual.phase)}</span>
        )}
        {visual.kind === "turbo" && (
          <span className="sr-only">
            {value === 0
              ? " Aucun flux dans ce modèle : les roues sont arrêtées."
              : ` Les gaz entrent dans la turbine puis sortent ; l’air entre dans le compresseur puis va au moteur. Les deux roues tournent ${value <= 66 ? "modérément" : "rapidement"}, avec un même axe. L’indicateur est qualitatif.`}
          </span>
        )}
        {mechanism && <span className="sr-only"> {mechanism.description}</span>}
      </figcaption>
    </figure>
  );
}

function pistonDescription(value: number, phase?: number) {
  const state = pistonState(value, phase);
  if (state.cycleComplete) return "Deux tours terminés : le cycle revient à l’admission.";
  return [
    "Admission : le piston descend, la soupape d’admission est ouverte. Le mélange entre.",
    "Compression : le piston monte, les deux soupapes sont fermées. Le mélange est comprimé.",
    "Combustion-détente : les soupapes restent fermées. Les gaz chauds poussent le piston vers le bas.",
    "Échappement : le piston monte, la soupape d’échappement est ouverte. Les gaz brûlés sortent.",
  ][state.phase];
}

/** Representative, static thumbnail; it never changes a saved lesson state. */
export function DiscoveryPreview({ visual }: { visual: DiscoveryStep["visual"] }) {
  return (
    <DiscoveryVisual
      visual={{ ...visual, frame: undefined, phase: visual.kind === "piston" ? 2 : undefined }}
      value={100}
    />
  );
}
