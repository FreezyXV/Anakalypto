import { Arrow, C, Label, Stop, Title, type DiagramProps } from "./primitives";
export function PhotosynthesisDiagram({ state }: DiagramProps) {
  return (
    <>
      <Title>
        {state.active ? "Lumière : énergie pour la feuille" : "Sans nouvel apport de lumière"}
      </Title>
      <path
        d="M76 177 Q53 87 164 45 Q289 63 281 173 Q180 197 76 177 Z"
        fill="#dceedd"
        stroke={C.green}
        strokeWidth="2"
      />
      <circle cx="35" cy="52" r="15" fill={state.active ? C.yellow : "#d6dce5"} stroke={C.ink} />
      <path
        d="M35 30 V24 M35 74 V80 M13 52 H7 M57 52 H63 M19 36 L14 31 M51 68 L56 73"
        stroke={state.active ? C.orange : C.muted}
        strokeWidth="2"
      />
      <Arrow x={55} y={69} dx={39} dy={27} color={C.orange} dim={!state.active} />
      {!state.active && <Stop x={77} y={83} />}
      <rect x="86" y="101" width="83" height="46" rx="8" fill="#e1f2ff" stroke={C.blue} />
      <Label x={127} y={119} size={13}>
        Eau : H₂O
      </Label>
      <Label x={127} y={137} size={13}>
        {state.active ? "O₂ libéré" : "Eau disponible"}
      </Label>
      <Arrow x={127} y={99} dx={0} dy={-29} dim={!state.active} />
      <Label x={126} y={58} color={C.blue}>
        O₂
      </Label>
      <rect
        x="202"
        y="101"
        width="69"
        height="46"
        rx="8"
        fill={state.active ? "#fff1ba" : "#fff"}
        stroke={C.green}
      />
      <Label x={236} y={120} size={13}>
        Calvin
      </Label>
      <Label x={236} y={137} size={13}>
        {state.active ? "Sucre" : "Énergie requise"}
      </Label>
      <Arrow x={310} y={122} dx={-36} dy={0} color={C.green} />
      <Label x={314} y={101} color={C.green}>
        CO₂
      </Label>
      <Arrow x={171} y={125} dx={27} dy={0} color={C.orange} dim={!state.active} />
      <Label x={185} y={84} size={12} color={C.orange}>
        ATP / NADPH
      </Label>
      <path d="M174 87 H195" stroke={C.orange} strokeWidth="2" />
      <Label x={180} y={175} size={12}>
        Vue symbolique à l’intérieur d’une feuille
      </Label>
      <Label x={180} y={201} size={13}>
        O₂ issu de l’eau · carbone du sucre issu du CO₂
      </Label>
    </>
  );
}
