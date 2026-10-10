import { Arrow, C, Label, Stop, Title, type DiagramProps } from "./primitives";
export function WifiDiagram({ state }: DiagramProps) {
  const walls = state.scene === "walls";
  return (
    <>
      <Title>
        {walls ? "Les obstacles affaiblissent le signal" : "Des données portées par la radio"}
      </Title>
      <rect
        x="28"
        y="99"
        width="73"
        height="37"
        rx="7"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="3"
      />
      <path d="M42 99 V75 M85 99 V75 M8 117 H28" stroke={C.ink} strokeWidth="3" />
      <circle cx="87" cy="122" r="4" fill={state.active ? C.green : C.muted} />
      <Label x={65} y={158}>
        Box
      </Label>
      <Label x={65} y={62} color={C.blue}>
        0 1 0 1
      </Label>
      {walls && (
        <g>
          <rect x="168" y="45" width="18" height="113" fill="#d3c6b5" stroke={C.ink} />
          <path d="M168 75 H186 M168 105 H186 M168 135 H186" stroke="#918374" />
          <Label x={177} y={178} size={13}>
            Mur
          </Label>
        </g>
      )}
      {state.active ? (
        <g fill="none" stroke={C.blue} strokeWidth="3">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${112 + i * 15} ${87 - i * 12} Q${133 + i * 20} 110 ${112 + i * 15} ${133 + i * 12}`}
              className="discovery-radio"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          {[0, 1].map((i) => (
            <path
              key={i}
              d={`M${215 + i * 19} ${76 - i * 9} Q${237 + i * 19} 110 ${215 + i * 19} ${144 + i * 9}`}
              opacity={walls ? 0.3 : 0.8}
              strokeWidth={walls ? 1.5 : 3}
            />
          ))}
        </g>
      ) : (
        <Stop x={155} y={110} />
      )}
      <rect
        x="281"
        y="67"
        width="47"
        height="85"
        rx="8"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="3"
      />
      <path d="M294 75 H315 M299 143 H310" stroke={C.ink} strokeWidth="2" />
      <Label x={304} y={106} color={state.active ? C.blue : C.muted} size={12}>
        {state.active ? "0101" : "—"}
      </Label>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={291 + i * 7}
          y={129 - i * 4}
          width="4"
          height={5 + i * 4}
          fill={state.active && i < (walls ? 2 : 4) ? C.blue : "#d8dfe8"}
        />
      ))}
      <Label x={304} y={174} size={13}>
        Téléphone
      </Label>
      {state.active && <Arrow x={270} y={46} dx={-47} dy={0} color={C.green} />}
      <Label x={180} y={202} size={13}>
        {state.active
          ? walls
            ? "Signal reçu plus faible · vue qualitative"
            : "Émission et réponse · ondes invisibles"
          : "Émetteur éteint : pas d’onde Wi-Fi"}
      </Label>
    </>
  );
}
