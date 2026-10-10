import { Arrow, Bottle, C, Label, Stop, Title, type DiagramProps } from "./primitives";
export function GlassDiagram({ state }: DiagramProps) {
  return (
    <>
      <Title>Trier avant de broyer et refondre</Title>
      <rect
        x="21"
        y="95"
        width="76"
        height="36"
        rx="5"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2"
      />
      <Bottle x={44} y={52} scale={0.7} />
      <Bottle x={70} y={66} scale={0.65} />
      <g transform={`translate(${state.active ? 122 : 88} ${state.active ? 43 : 94})`}>
        <path
          d="M-9 0 H9 V16 Q0 24 -9 16 Z M9 3 Q24 3 17 14 H9"
          fill="#f1d2ba"
          stroke={C.orange}
          strokeWidth="2"
        />
        {state.active && (
          <path d="M-13 -3 l29 27 m0 -27 l-29 27" stroke={C.orange} strokeWidth="2" />
        )}
      </g>
      <Label x={126} y={83} size={12}>
        {state.active ? "Intrus écarté" : "À trier"}
      </Label>
      <Arrow x={100} y={115} dx={36} dy={0} dim={!state.active} />
      {!state.active && <Stop x={122} y={115} />}
      <g opacity={state.active ? 1 : 0.25}>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M${149 + i * 6} ${105 + (i % 2) * 9} l8 -4 l4 8 l-9 3 Z`}
            fill="#91cfaf"
            stroke={C.green}
          />
        ))}
      </g>
      <Arrow x={188} y={115} dx={17} dy={0} dim={!state.active} />
      <path
        d="M212 69 H268 V132 H212 Z M207 69 L240 43 L273 69"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2.5"
      />
      <rect
        x="225"
        y="94"
        width="29"
        height="26"
        rx="3"
        fill={state.active ? "#ffc83d" : "#dce3ea"}
        stroke={C.ink}
      />
      {state.active && (
        <path d="M233 114 Q226 104 237 102 Q241 94 245 103 Q254 111 247 116 Z" fill="#d97124" />
      )}
      <Arrow x={273} y={115} dx={22} dy={0} dim={!state.active} />
      <Bottle x={317} y={76} fill={state.active ? "#91cfaf" : "#dce3ea"} scale={0.75} />
      <Label x={57} y={153} size={12}>
        Collecte
      </Label>
      <Label x={168} y={153} size={12}>
        Calcin
      </Label>
      <Label x={241} y={153} size={12}>
        Four
      </Label>
      <Label x={316} y={153} size={12}>
        Moule
      </Label>
      {state.active && (
        <>
          <path d="M318 165 V185 H45 V165" fill="none" stroke={C.green} strokeWidth="2.5" />
          <Arrow x={45} y={179} dx={0} dy={-14} color={C.green} />
        </>
      )}
      <Label x={180} y={202} size={12}>
        {state.active
          ? "Le verre d’emballage peut recommencer le cycle"
          : "Le lot avec intrus ne part pas tel quel au four"}
      </Label>
    </>
  );
}
