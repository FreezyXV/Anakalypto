import { Arrow, C, Label, StageRail, Title, type DiagramProps } from "./primitives";
import { MECHANISM_STAGES } from "@/lib/discovery/mechanisms";
export function SoilDiagram({ state }: DiagramProps) {
  const s = state.stage;
  const erosion = state.scene === "erosion";
  return (
    <>
      <Title>
        {erosion ? "La surface d’un sol nu peut être emportée" : "De la roche aux horizons du sol"}
      </Title>
      <rect
        x="26"
        y="111"
        width="218"
        height="41"
        rx="4"
        fill="#9da4ae"
        stroke={C.ink}
        strokeWidth="2"
      />
      {s >= 1 && (
        <path
          d="M56 113 L78 128 L63 144 M116 113 L130 128 L112 151 M177 112 L163 137 L188 151"
          fill="none"
          stroke={C.ink}
          strokeWidth="2"
        />
      )}
      {s >= 2 && <rect x="26" y="85" width="218" height="26" fill="#ccb686" stroke={C.ink} />}
      {s >= 2 &&
        [45, 78, 114, 161, 196, 227].map((x, i) => (
          <circle key={x} cx={x} cy={95 + (i % 2) * 6} r="3" fill="#8e714a" />
        ))}
      {s >= 3 && (
        <rect
          x="26"
          y={erosion ? 78 : 65}
          width="218"
          height={erosion ? 7 : 20}
          fill="#78523b"
          stroke={C.ink}
        />
      )}
      {s >= 4 && !erosion && (
        <>
          <rect x="26" y="50" width="218" height="15" fill="#483628" stroke={C.ink} />
          <path
            d="M95 50 V37 M95 43 Q74 30 76 44 Q86 49 95 43 M95 39 Q115 27 115 41 Q104 46 95 39"
            fill="#74af6f"
            stroke={C.green}
            strokeWidth="2"
          />
          <path
            d="M95 50 V74 M95 61 L82 69 M95 56 L105 70"
            stroke="#dfc198"
            fill="none"
            strokeWidth="2"
          />
        </>
      )}
      <Label x={265} y={137} anchor="start" size={13}>
        Roche
      </Label>
      {s >= 2 && (
        <Label x={265} y={102} anchor="start" size={13}>
          Minéraux
        </Label>
      )}
      {s >= 3 && (
        <Label x={265} y={75} anchor="start" size={13}>
          Humus
        </Label>
      )}
      {erosion && (
        <>
          <path
            d="M35 43 l-7 15 M70 35 l-7 15 M113 43 l-7 15 M153 35 l-7 15 M194 43 l-7 15"
            stroke={C.blue}
            strokeWidth="2"
          />
          <Arrow x={154} y={67} dx={77} dy={-17} color={C.orange} />
          <circle cx="222" cy="47" r="3" fill="#78523b" />
          <circle cx="233" cy="39" r="3" fill="#78523b" />
        </>
      )}
      <StageRail
        stage={s}
        labels={MECHANISM_STAGES.soil}
        currentLabel={erosion ? "Couche de surface emportée" : undefined}
      />
    </>
  );
}
