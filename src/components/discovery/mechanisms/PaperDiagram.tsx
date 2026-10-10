import { C, Label, StageRail, Title, type DiagramProps } from "./primitives";
import { MECHANISM_STAGES } from "@/lib/discovery/mechanisms";
export function PaperDiagram({ state }: DiagramProps) {
  const s = state.stage;
  return (
    <>
      <Title>Retirer l’eau, garder les fibres</Title>
      <g opacity={s === 0 ? 1 : 0.5}>
        <path d="M17 54 V115 H63 V54" fill={C.water} stroke={C.ink} strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M${24 + i * 6} ${73 + (i % 2) * 16} l16 7`}
            stroke="#987548"
            strokeWidth="2"
          />
        ))}
        <Label x={40} y={42} size={12}>
          Pâte
        </Label>
      </g>
      <g opacity={s >= 1 ? 1 : 0.25}>
        <path d="M78 108 H128 M78 115 H128" stroke={C.ink} strokeWidth="2" />
        {[80, 89, 98, 107, 116, 125].map((x) => (
          <path key={x} d={`M${x} 108 V115`} stroke={C.ink} />
        ))}
        <path d="M84 124 V140 M103 123 V145 M122 124 V136" stroke={C.blue} strokeWidth="2" />
        <Label x={103} y={64} size={12}>
          Toile
        </Label>
        <Label x={103} y={148} size={11} color={C.blue}>
          Eau ↓
        </Label>
      </g>
      <g opacity={s >= 2 ? 1 : 0.25}>
        <circle cx="173" cy="84" r="15" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <circle cx="173" cy="119" r="15" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <path d="M170 140 V150 M181 140 V148" stroke={C.blue} strokeWidth="2" />
        <Label x={173} y={64} size={12}>
          Presses
        </Label>
      </g>
      <g opacity={s >= 3 ? 1 : 0.25}>
        <circle cx="241" cy="99" r="23" fill="#fff1ba" stroke={C.orange} strokeWidth="2" />
        <path
          d="M226 67 q-5 -7 0 -13 M241 67 q-5 -7 0 -13 M256 67 q-5 -7 0 -13"
          fill="none"
          stroke={C.orange}
          strokeWidth="2"
        />
        <Label x={241} y={145} size={12}>
          Chaleur
        </Label>
      </g>
      <g opacity={s >= 4 ? 1 : 0.25}>
        <circle cx="317" cy="101" r="21" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <path
          d="M317 98 q-12 -12 -13 4 q2 17 19 9 q14 -8 3 -23"
          fill="none"
          stroke={C.orange}
          strokeWidth="2"
        />
        <Label x={317} y={145} size={12}>
          Bobine
        </Label>
      </g>
      <path
        d="M62 101 H157 M187 101 H218 Q221 72 241 72 Q265 75 267 101 H296"
        fill="none"
        stroke="#d6c1a1"
        strokeWidth="4"
      />
      <path
        d={
          [
            "M62 101 H72",
            "M62 101 H151",
            "M62 101 H157 M187 101 H205",
            "M62 101 H157 M187 101 H218 Q221 72 241 72 Q265 75 267 101 H284",
            "M62 101 H157 M187 101 H218 Q221 72 241 72 Q265 75 267 101 H296",
          ][s]
        }
        fill="none"
        stroke={C.orange}
        strokeWidth="3"
      />
      <StageRail stage={s} labels={MECHANISM_STAGES.paper} />
    </>
  );
}
