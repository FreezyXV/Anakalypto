import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";

function MicrobeRoles() {
  return (
    <g>
      <Title>Dans le levain, deux rôles</Title>
      <rect x="12" y="43" width="336" height="68" rx="14" fill="#e3effb" stroke={C.blue} />
      <rect x="12" y="118" width="336" height="68" rx="14" fill="#fff0df" stroke={C.orange} />
      <Label x={67} y={66}>
        Levures
      </Label>
      <ellipse cx="67" cy="88" rx="10" ry="14" fill="#a6ceec" stroke={C.blue} strokeWidth="2" />
      <circle cx="77" cy="77" r="5" fill="#a6ceec" stroke={C.blue} strokeWidth="2" />
      <Arrow x={98} y={88} dx={65} dy={0} />
      <Label x={251} y={66} color={C.blue}>
        Surtout du gaz
      </Label>
      <circle cx="197" cy="88" r="7" fill="#fff" stroke={C.blue} strokeWidth="2" />
      <circle cx="224" cy="88" r="10" fill="#fff" stroke={C.blue} strokeWidth="2" />
      <circle cx="252" cy="88" r="6" fill="#fff" stroke={C.blue} strokeWidth="2" />
      <Label x={300} y={94} color={C.blue}>
        CO₂
      </Label>
      <Label x={67} y={141}>
        Bactéries
      </Label>
      <rect
        x="56"
        y="158"
        width="22"
        height="9"
        rx="4.5"
        fill="#f1b47d"
        stroke={C.orange}
        strokeWidth="2"
        transform="rotate(-20 67 162.5)"
      />
      <Arrow x={98} y={163} dx={65} dy={0} color={C.orange} />
      <Label x={251} y={141} color={C.orange}>
        Surtout des acides
      </Label>
      <Label x={250} y={168} color={C.orange}>
        Goût et acidité
      </Label>
      <Label x={180} y={204}>
        Microbes agrandis · rôles dominants
      </Label>
    </g>
  );
}

export function BreadDiagram({ state }: DiagramProps) {
  if (state.scene === "microbes") return <MicrobeRoles />;
  return (
    <>
      <Title>
        {state.active ? "Des bulles prises dans la pâte" : "La pâte avant l’ajout de levain"}
      </Title>
      <path
        d="M23 122 Q35 174 153 174 Q169 156 177 122 Z"
        fill="var(--art-metal)"
        stroke={C.ink}
        strokeWidth="2.5"
      />
      <path
        d={
          state.active
            ? "M30 121 Q26 72 64 67 Q88 46 113 65 Q158 61 169 121 Z"
            : "M30 122 Q68 107 110 113 Q141 109 169 122 Z"
        }
        fill="var(--art-dough)"
        stroke="#ba956d"
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
          <circle key={i} cx={x} cy={y} r={i % 2 ? 6 : 9} fill="#fff9e9" stroke="#c6a47a" />
        ))}
      <Label x={99} y={191} size={13}>
        {state.active ? "La pâte gonfle" : "La pâte reste plate"}
      </Label>
      <circle cx="262" cy="110" r="60" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <path d="M168 97 L204 75 M170 124 L204 143" stroke={C.muted} strokeWidth="1.5" />
      {state.active ? (
        <>
          <ellipse cx="240" cy="84" rx="10" ry="14" fill="#a6ceec" stroke={C.blue} />
          <circle cx="249" cy="74" r="5" fill="#a6ceec" stroke={C.blue} />
          <rect
            x="230"
            y="125"
            width="22"
            height="8"
            rx="4"
            fill="#f1b47d"
            stroke={C.orange}
            transform="rotate(-20 241 129)"
          />
          <Arrow x={254} y={84} dx={22} dy={0} />
          <Arrow x={254} y={129} dx={22} dy={0} color={C.orange} />
          <Label x={290} y={88} size={13} color={C.blue}>
            CO₂
          </Label>
          <Label x={291} y={119} size={11} color={C.orange}>
            Acides
          </Label>
          <Label x={235} y={111} size={11}>
            Levures
          </Label>
          <Label x={262} y={151} size={11}>
            Bactéries
          </Label>
        </>
      ) : (
        <>
          <Label x={262} y={105} size={13}>
            Levain
          </Label>
          <Label x={262} y={124} size={12}>
            pas encore
          </Label>
          <Label x={262} y={144} size={12}>
            ajouté
          </Label>
        </>
      )}
    </>
  );
}
