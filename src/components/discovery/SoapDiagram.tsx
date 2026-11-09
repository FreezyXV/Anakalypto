import { C, Label, Title } from "./mechanisms/primitives";

export function SoapDiagram({ active }: { active: boolean }) {
  return (
    <g>
      <Title>{active ? "La graisse entourée de savon" : "L’eau et la graisse se séparent"}</Title>
      <Label x={33} y={58} color={C.blue}>
        Eau
      </Label>
      <g fill="#d3e8f6" opacity="0.65">
        {[
          [31, 94],
          [54, 141],
          [99, 49],
          [289, 63],
          [321, 117],
          [282, 158],
          [35, 165],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
        ))}
      </g>
      <circle cx="180" cy="106" r="40" fill="var(--art-gold)" stroke="#b9852c" strokeWidth="1.5" />
      <path
        d="M153 95 Q158 78 176 77"
        fill="none"
        stroke="#fff9d8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {active &&
        Array.from({ length: 12 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 30} 180 106)`}>
            <path
              d="M180 49 L176 60 L184 68 L179 80"
              stroke="#bc6b29"
              fill="none"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <circle cx="180" cy="43" r="7" fill="#6ea7df" stroke="#245e98" strokeWidth="1.5" />
            <circle cx="178" cy="41" r="2" fill="#cde7ff" />
          </g>
        ))}
      <Label x={180} y={112}>
        Graisse
      </Label>
      {active ? (
        <>
          <circle cx="63" cy="188" r="6" fill="#6ea7df" stroke="#245e98" />
          <Label x={106} y={193}>
            Têtes
          </Label>
          <path d="M215 187 l6 -4 l6 8 l6 -4" stroke="#bc6b29" fill="none" strokeWidth="3" />
          <Label x={275} y={193}>
            Queues
          </Label>
        </>
      ) : (
        <Label x={180} y={193}>
          Une goutte reste distincte de l’eau
        </Label>
      )}
    </g>
  );
}
