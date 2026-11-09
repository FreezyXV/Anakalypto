import { Arrow, C, Label, Title } from "./mechanisms/primitives";

export function CircuitDiagram({ active }: { active: boolean }) {
  return (
    <g>
      <Title>
        {active ? "Un trajet fermé : la lampe s’allume" : "Un trajet ouvert : la lampe s’éteint"}
      </Title>
      <path
        d="M59 76 V64 H163 M218 64 H292 V86 M292 134 V168 H59 V144"
        fill="none"
        stroke="#c7d2df"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59 76 V64 H163 M218 64 H292 V86 M292 134 V168 H59 V144"
        fill="none"
        stroke={active ? C.blue : "#7d8ea1"}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="40"
        y="77"
        width="38"
        height="66"
        rx="7"
        fill="var(--art-metal)"
        stroke={C.ink}
        strokeWidth="2"
      />
      <path d="M41 100 H77 V84 Q77 78 71 78 H47 Q41 78 41 84 Z" fill="#f5bf5b" />
      <path d="M59 84 V94 M54 89 H64 M54 130 H64" stroke={C.ink} strokeWidth="2" />
      <path
        d={active ? "M163 64 H218" : "M163 64 L211 42"}
        stroke={C.ink}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="163" cy="64" r="4" fill={C.ink} />
      <circle cx="218" cy="64" r="4" fill={C.ink} />
      <Label x={188} y={92}>
        Interrupteur
      </Label>
      {active && <circle cx="292" cy="110" r="32" fill="#ffda65" opacity="0.23" />}
      <circle
        cx="292"
        cy="110"
        r="24"
        fill={active ? "var(--art-gold)" : "#f6f9fc"}
        stroke={C.ink}
        strokeWidth="2"
      />
      <path d="M279 97 L305 123 M305 97 L279 123" stroke="#8c702c" strokeWidth="2" />
      {active && (
        <>
          <Arrow x={95} y={64} dx={33} dy={0} />
          <Arrow x={231} y={168} dx={-35} dy={0} />
          <path
            d="M326 92 l8 -5 M329 111 h10 M325 129 l8 6"
            stroke="#c39424"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
      <Label x={59} y={195}>
        Pile
      </Label>
      <Label x={292} y={195}>
        Lampe
      </Label>
    </g>
  );
}
