import { leverModel } from "@/lib/discovery/models";
import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";

export function LeverDiagram({ state }: DiagramProps) {
  const m = leverModel(state.amount);
  const pivot = 54 + m.loadArm * 6;
  return (
    <g>
      <Title>Déplace l’appui, change l’effort</Title>
      <Label x={54} y={49}>
        Charge
      </Label>
      <Label x={294} y={49}>
        Effort
      </Label>
      <rect
        x="40"
        y="60"
        width="28"
        height="34"
        rx="3"
        fill={C.orange}
        stroke={C.ink}
        strokeWidth="2"
      />
      <path d="M44 65 H64 M44 70 H64" stroke="#f8d5a5" strokeWidth="2" />
      <Arrow x={294} y={60} dx={0} dy={34} color={C.blue} />
      <rect
        x="40"
        y="95"
        width="268"
        height="7"
        rx="3"
        fill="var(--art-metal)"
        stroke="#546b83"
        strokeWidth="1.5"
      />
      <path
        d={`M${pivot} 103 l-18 30 h36 Z`}
        fill="var(--art-gold)"
        stroke="#9b7529"
        strokeWidth="1.5"
      />
      <path d={`M${pivot - 24} 135 h48`} stroke="#9faebf" strokeWidth="3" strokeLinecap="round" />
      <Label x={54} y={124}>
        120 N
      </Label>
      <Label x={294} y={124}>
        {Math.round(m.effortForce * 10) / 10} N
      </Label>
      <Label x={pivot} y={151}>
        Appui
      </Label>
      <path
        d={`M54 159 v15 m0 -7 H294 m0 -8 v15 M${pivot} 159 v15`}
        fill="none"
        stroke={C.muted}
        strokeWidth="1.5"
      />
      <Label x={(54 + pivot) / 2} y={190}>
        {Math.round(m.loadArm * 10) / 10} cm
      </Label>
      <Label x={(294 + pivot) / 2} y={190}>
        {Math.round(m.effortArm * 10) / 10} cm
      </Label>
    </g>
  );
}
