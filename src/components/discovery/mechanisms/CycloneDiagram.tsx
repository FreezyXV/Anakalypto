import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";
export function CycloneDiagram({ state }: DiagramProps) {
  const land = state.scene === "land";
  const strong = state.active && !land;
  return (
    <>
      <Title>
        {land
          ? "La tempête perd son alimentation marine"
          : strong
            ? "Une mer chaude alimente la tempête"
            : "Moins d’énergie depuis une mer froide"}
      </Title>
      <rect x="16" y="153" width="328" height="29" rx="5" fill={land ? "#c6ac7c" : C.water} />
      {!land && (
        <path
          d="M16 159 q16 -8 32 0 t32 0 t32 0 t32 0 t32 0 t32 0 t32 0 t32 0 t32 0 t32 0"
          stroke={C.blue}
          fill="none"
          strokeWidth="2"
        />
      )}
      <Label x={180} y={175} size={13}>
        {land
          ? "Terre : apport marin coupé"
          : strong
            ? "Mer chaude · vapeur abondante"
            : "Mer froide · évaporation plus faible"}
      </Label>
      {(strong || land) && (
        <>
          <path
            d="M64 93 Q45 69 81 66 Q87 39 115 54 Q137 31 158 54 L160 93 Z M202 54 Q227 33 247 56 Q276 41 285 70 Q322 68 301 93 H202 Z"
            fill={land ? "#e0e4e9" : "#fff"}
            stroke={C.ink}
            strokeWidth="2"
          />
          <Label x={181} y={66} size={13}>
            Œil
          </Label>
          <Arrow x={181} y={75} dx={0} dy={25} color={C.blue} dim={land} />
          <Label x={181} y={122} color={C.blue}>
            Descente
          </Label>
          <path
            d="M49 72 A14 14 0 0 0 25 61 l6 0 m-6 0 l1 6 M23 76 A14 14 0 0 0 47 87 l-6 0 m6 0 l-1 -6"
            fill="none"
            stroke={land ? C.muted : C.blue}
            strokeWidth="2"
            opacity={land ? 0.5 : 1}
          />
          <Label x={37} y={100} size={11}>
            Rotation
          </Label>
        </>
      )}
      {!strong && !land && (
        <path
          d="M112 93 Q95 76 117 69 Q127 47 148 64 Q168 52 183 75 Q217 69 221 93 Z"
          fill="#fff"
          stroke={C.ink}
          strokeWidth="2"
        />
      )}
      {!land && (
        <>
          <Arrow x={98} y={149} dx={0} dy={-48} color={C.orange} dim={!strong} />
          <Arrow x={262} y={149} dx={0} dy={-48} color={C.orange} dim={!strong} />
        </>
      )}
      {strong && (
        <>
          <Arrow x={40} y={142} dx={51} dy={0} />
          <Arrow x={319} y={142} dx={-51} dy={0} />
          <Label x={49} y={123} color={C.orange} size={12}>
            Montée
          </Label>
          <Label x={311} y={123} color={C.orange} size={12}>
            Montée
          </Label>
        </>
      )}
      {land && (
        <Label x={180} y={143} size={12}>
          Affaiblissement progressif
        </Label>
      )}
      {!strong && !land && (
        <Label x={180} y={126} size={12}>
          Pas de cyclone alimenté dans ce modèle
        </Label>
      )}
      <Label x={180} y={202} size={12}>
        Coupe · rotation vue du dessus à gauche
      </Label>
    </>
  );
}
