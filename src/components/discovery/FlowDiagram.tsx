import type { DiscoveryStep } from "@/lib/discovery/schema";
import { flowState } from "@/lib/discovery/visual-state";

const INK = "#15142b";
const BLUE = "#2860c8";
const MUTED = "#727d8d";
const STOP = "#9b450a";

export function FlowDiagram({ visual, value }: { visual: DiscoveryStep["visual"]; value: number }) {
  const labels = visual.labels ?? [];
  const state = flowState(visual, value);
  const yAt = (index: number) => 30 + (index * 150) / Math.max(1, labels.length - 1);
  const lastY = yAt(labels.length - 1);
  const targetY = yAt(state.target);
  return (
    <>
      {visual.loop && (
        <path
          d={`M25 ${lastY} H10 V${targetY} H24 l-5 -4 m5 4 l-5 4`}
          stroke={state.loopActive ? BLUE : MUTED}
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={state.loopActive ? undefined : "4 4"}
        />
      )}
      {labels.map((label, index) => {
        const y = yAt(index);
        const reached = index < state.reached;
        const broken = state.stopped && index === state.reached;
        const midpoint = index ? (y + yAt(index - 1)) / 2 : y - 22;
        return (
          <g key={index}>
            {index > 0 && (
              <path
                d={`M40 ${yAt(index - 1) + 14} V${y - 15} l-4 -5 m4 5 l4 -5`}
                stroke={broken ? STOP : reached ? BLUE : MUTED}
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={reached ? undefined : "3 3"}
              />
            )}
            {broken && (
              <>
                <circle cx="40" cy={midpoint} r="7" fill="#fff4e9" />
                <path
                  d={`M35 ${midpoint - 5} L45 ${midpoint + 5} M45 ${midpoint - 5} L35 ${midpoint + 5}`}
                  stroke={STOP}
                  strokeWidth="2.5"
                />
              </>
            )}
            <circle
              cx="40"
              cy={y}
              r="14"
              fill={reached ? "#ffc83d" : "#fff"}
              stroke={INK}
              strokeWidth="2"
            />
            <text x="40" y={y + 5} textAnchor="middle" fill={INK} fontSize="14">
              {index + 1}
            </text>
            <text x="66" y={y + 5} fill={INK} fontSize="15">
              {label}
            </text>
          </g>
        );
      })}
      {state.stopped && (
        <text x="180" y="204" textAnchor="middle" fontSize="12" fontWeight="700" fill={STOP}>
          Arrêt avant l’étape {state.reached + 1}
        </text>
      )}
      {state.loopActive && (
        <text x="180" y="204" textAnchor="middle" fontSize="12" fontWeight="700" fill={BLUE}>
          ↻ Retour à l’étape {state.target + 1}
        </text>
      )}
    </>
  );
}
