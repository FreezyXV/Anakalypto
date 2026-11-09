import { buoyancyModel } from "@/lib/discovery/models";
import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";

export function BuoyancyDiagram({ state }: DiagramProps) {
  const m = buoyancyModel(state.amount);
  const bottom = m.condition === "sinking" ? 185 : 104 + m.displacedLitres * 0.06;
  const top = bottom - 60;
  const wetTop = Math.max(top, 104);
  // One scale across every state, including the remembered comparison.
  const forceScale = 42 / 9810;
  return (
    <g>
      <Title>Masse totale : {m.mass} kg</Title>
      <rect x="9" y="104" width="342" height="90" rx="5" fill="var(--art-water)" />
      <path
        d="M9 104 H351 M15 116 h30 M310 120 h29 M19 181 h29 M312 179 h26"
        stroke="#559ac6"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="80" y={top} width="200" height="60" rx="3" fill="var(--art-metal)" />
      <rect x="80" y={wetTop} width="200" height={bottom - wetTop} fill="#91b7d0" />
      <path d={`M88 ${top + 5} H272 M90 ${top + 55} H270`} stroke="#ffffff" opacity="0.65" />
      <rect
        x="80"
        y={top}
        width="200"
        height="60"
        rx="3"
        fill="none"
        stroke="#526b80"
        strokeWidth="2"
      />
      <Label x={180} y={top + 24}>
        Coque étanche
      </Label>
      <Label x={180} y={top + 47}>
        1 m³ au maximum
      </Label>
      <Label x={39} y={67}>
        Poussée
      </Label>
      <Label x={39} y={90} color={C.green}>
        {Math.round(m.buoyantForce / 100) / 10} kN
      </Label>
      <Arrow x={39} y={160} dx={0} dy={-m.buoyantForce * forceScale} color={C.green} />
      <Label x={319} y={67}>
        Poids
      </Label>
      <Label x={319} y={90} color={C.orange}>
        {Math.round(m.weight / 100) / 10} kN
      </Label>
      <Arrow x={319} y={117} dx={0} dy={m.weight * forceScale} color={C.orange} />
      <Label x={180} y={202}>
        Eau déplacée : {m.displacedLitres} L
      </Label>
    </g>
  );
}
