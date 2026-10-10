import { Arrow, C, Label, StageRail, Title, type DiagramProps } from "./primitives";
import { MECHANISM_STAGES } from "@/lib/discovery/mechanisms";
export function FrescoDiagram({ state }: DiagramProps) {
  const s = state.stage;
  const retouch = state.scene === "retouch";
  return (
    <>
      <Title>
        {retouch ? "Une retouche reste en surface" : "La chaux fixe les grains de couleur"}
      </Title>
      <rect x="34" y="55" width="130" height="99" fill="#c8b49a" stroke={C.ink} strokeWidth="2" />
      <path d="M34 85 H164 M34 122 H164 M73 55 V85 M130 85 V122 M78 122 V154" stroke="#967e64" />
      <rect
        x="145"
        y="55"
        width="64"
        height="99"
        fill={s >= 3 ? "#e5e0d1" : "#fff6df"}
        stroke={C.ink}
        strokeWidth="2"
      />
      <Label x={94} y={144} size={12}>
        Mur
      </Label>
      <Label x={177} y={48} size={12}>
        Enduit
      </Label>
      {s >= 1 &&
        [0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={i}
            cx={196 - (i % 2) * 9}
            cy={69 + i * 13}
            r="4"
            fill={i % 2 ? C.orange : C.blue}
          />
        ))}
      {s >= 3 &&
        [0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M${184 - (i % 2) * 9} ${61 + i * 13} h23 v15 h-23 Z`}
            fill="none"
            stroke={C.green}
            strokeWidth="1.5"
          />
        ))}
      {s >= 2 && !retouch && (
        <>
          <Arrow x={297} y={91} dx={-80} dy={0} color={C.green} />
          <Label x={289} y={75} color={C.green}>
            CO₂ de l’air
          </Label>
        </>
      )}
      {retouch ? (
        <>
          <path d="M220 59 V149" stroke="#b83e45" strokeWidth="3" strokeDasharray="7 4" />
          <circle cx="225" cy="75" r="5" fill="#b83e45" />
          <circle cx="225" cy="101" r="5" fill="#b83e45" />
          <Arrow x={241} y={121} dx={24} dy={11} color={C.orange} />
          <Label x={283} y={151} size={12}>
            Ajout fragile
          </Label>
        </>
      ) : (
        <>
          <Label x={288} y={127} size={12}>
            {s >= 3 ? "Cristaux autour" : "Pigments dans"}
          </Label>
          <Label x={288} y={143} size={12}>
            {s >= 3 ? "des pigments" : "la chaux fraîche"}
          </Label>
        </>
      )}
      <StageRail
        stage={s}
        labels={MECHANISM_STAGES.fresco}
        currentLabel={retouch ? "Retouche en surface" : undefined}
      />
    </>
  );
}
