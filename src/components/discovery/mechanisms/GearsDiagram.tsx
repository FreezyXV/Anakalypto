import { gearsModel } from "@/lib/discovery/models";
import { C, Label, Title, type DiagramProps } from "./primitives";

/** Symbolic teeth share the same pitch; their outlines are not manufacturing profiles. */
function outline(teeth: number, radius: number) {
  const points: string[] = [];
  for (let tooth = 0; tooth < teeth; tooth++) {
    for (const [fraction, depth] of [
      [-0.5, -5],
      [-0.3, -5],
      [-0.18, 4],
      [0.18, 4],
      [0.3, -5],
      [0.5, -5],
    ]) {
      const angle = ((tooth + fraction!) * Math.PI * 2) / teeth;
      points.push(
        `${((radius + depth!) * Math.cos(angle)).toFixed(2)},${((radius + depth!) * Math.sin(angle)).toFixed(2)}`,
      );
    }
  }
  return points.join(" ");
}
const smallOutline = outline(12, 40);
const largeOutline = outline(18, 60);

function Gear({ x, angle, large = false }: { x: number; angle: number; large?: boolean }) {
  const radius = large ? 60 : 40;
  return (
    <g transform={`translate(${x} 97) rotate(${angle})`}>
      <polygon
        points={large ? largeOutline : smallOutline}
        fill={large ? "var(--art-metal)" : "var(--art-gold)"}
        stroke={C.ink}
        strokeWidth="1.5"
      />
      <circle r={radius - 12} fill="none" stroke="#8b9caf" strokeWidth="1.5" />
      {[0, 120, 240].map((a) => (
        <circle
          key={a}
          cx={Math.round(Math.cos((a * Math.PI) / 180) * (radius - 22) * 100) / 100}
          cy={Math.round(Math.sin((a * Math.PI) / 180) * (radius - 22) * 100) / 100}
          r={large ? 8 : 4}
          fill="#f8fbfe"
          stroke="#9baec0"
        />
      ))}
      <path d={`M0 0 H${radius - 15}`} stroke={large ? C.blue : C.orange} strokeWidth="3" />
      <circle cx={radius - 15} r="5" fill={large ? C.blue : C.orange} />
      <circle r="8" fill="#fff" stroke={C.ink} strokeWidth="2" />
    </g>
  );
}

export function GearsDiagram({ state }: DiagramProps) {
  const m = gearsModel(state.amount);
  return (
    <g>
      <Title>12 dents entraînent 18 dents</Title>
      <Gear x={108} angle={m.driverAngle} />
      <Gear x={208} angle={10 + m.drivenAngle} large />
      <Label x={108} y={178} color={C.orange}>
        Entrée
      </Label>
      <Label x={208} y={178} color={C.blue}>
        Sortie
      </Label>
      <Label x={108} y={201} color={C.orange}>
        {Math.round(m.driverAngle)}° ↻
      </Label>
      <Label x={208} y={201} color={C.blue}>
        {Math.round(Math.abs(m.drivenAngle))}° ↺
      </Label>
    </g>
  );
}
