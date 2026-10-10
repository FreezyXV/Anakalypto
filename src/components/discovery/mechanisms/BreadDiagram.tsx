import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";
export function BreadDiagram({ state }: DiagramProps) {
  return (
    <>
      <Title>
        {state.scene === "microbes"
          ? "Les levures et les bactéries : deux rôles"
          : state.active
            ? "Des bulles prises dans la pâte"
            : "La pâte avant l’ajout de levain"}
      </Title>
      <path
        d="M23 122 Q35 174 153 174 Q169 156 177 122 Z"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2.5"
      />
      <path
        d={
          state.active
            ? "M30 121 Q26 72 64 67 Q88 46 113 65 Q158 61 169 121 Z"
            : "M30 122 Q68 107 110 113 Q141 109 169 122 Z"
        }
        fill="#eac796"
        stroke={C.orange}
        strokeWidth="2"
      />
      {state.active &&
        [
          [52, 97],
          [79, 78],
          [107, 104],
          [133, 84],
          [149, 111],
          [87, 119],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 6 : 9} fill="#fff6df" stroke={C.orange} />
        ))}
      <Label x={99} y={191} size={13}>
        {state.active ? "La pâte gonfle" : "La pâte reste plate"}
      </Label>
      <circle
        cx="262"
        cy="110"
        r="60"
        fill={state.scene === "microbes" ? "#fff7e8" : "#fff"}
        stroke={state.scene === "microbes" ? C.orange : C.ink}
        strokeWidth={state.scene === "microbes" ? 3 : 2}
      />
      <path d="M168 97 L204 75 M170 124 L204 143" stroke={C.muted} strokeWidth="1.5" />
      {state.active ? (
        <>
          <ellipse cx="240" cy="84" rx="10" ry="14" fill="#a6ceec" stroke={C.blue} />
          <circle cx="249" cy="74" r="5" fill="#a6ceec" stroke={C.blue} />
          <rect
            x="230"
            y="129"
            width="22"
            height="8"
            rx="4"
            fill="#f1b47d"
            stroke={C.orange}
            transform="rotate(-20 241 133)"
          />
          <Arrow x={254} y={84} dx={22} dy={0} />
          <Arrow x={254} y={133} dx={22} dy={0} color={C.orange} />
          <Label x={290} y={88} size={13} color={C.blue}>
            CO₂
          </Label>
          <Label x={291} y={137} size={11} color={C.orange}>
            Acides
          </Label>
          <Label x={235} y={111} size={11}>
            Levures
          </Label>
          <Label x={244} y={156} size={11}>
            Bactéries
          </Label>
        </>
      ) : (
        <>
          <Label x={262} y={105} size={13}>
            Levain
          </Label>
          <Label x={262} y={124} size={12}>
            pas encore ajouté
          </Label>
        </>
      )}
    </>
  );
}
