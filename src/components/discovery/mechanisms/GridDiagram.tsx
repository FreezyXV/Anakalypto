import { Arrow, C, Label, StageRail, Title, type DiagramProps } from "./primitives";
import { MECHANISM_STAGES } from "@/lib/discovery/mechanisms";
function House({ x, y, lit }: { x: number; y: number; lit: boolean }) {
  return (
    <g>
      <path
        d={`M${x - 21} ${y} l21 -18 l21 18 v35 h-42 Z`}
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2"
      />
      <rect
        x={x - 7}
        y={y + 8}
        width="14"
        height="14"
        fill={lit ? C.yellow : "#d6dfe9"}
        stroke={C.ink}
      />
    </g>
  );
}
export function GridDiagram({ state }: DiagramProps) {
  const s = state.stage;
  if (state.scene === "balance")
    return (
      <>
        <Title>Maintenir l’équilibre à chaque instant</Title>
        <rect
          x="32"
          y="77"
          width="71"
          height="66"
          rx="7"
          fill="#fff"
          stroke={C.ink}
          strokeWidth="2"
        />
        <circle cx="68" cy="110" r="19" fill="#fff1ba" stroke={C.ink} />
        <path d="M56 110 q6 -20 12 0 t12 0" fill="none" stroke={C.blue} strokeWidth="2" />
        <House x={290} y={97} lit />
        <Arrow x={113} y={108} dx={46} dy={0} />
        <Arrow x={204} y={108} dx={47} dy={0} />
        <circle cx="181" cy="106" r="21" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <path d="M169 99 H193 M169 113 H193" stroke={C.green} strokeWidth="4" />
        <Label x={68} y={171} size={13}>
          Production
        </Label>
        <Label x={287} y={171} size={13}>
          Consommation
        </Label>
        <Label x={180} y={199} size={12}>
          Les câbles ne sont pas une réserve
        </Label>
      </>
    );
  return (
    <>
      <Title>Changer la tension le long du réseau</Title>
      <g>
        <path
          d="M15 119 V76 H56 V119 Z M26 76 V49 H36 V76"
          fill="#fff"
          stroke={C.ink}
          strokeWidth="2"
        />
        <Label x={36} y={138} size={11}>
          Centrale
        </Label>
      </g>
      <g opacity={s >= 1 ? 1 : 0.3}>
        <rect x="78" y="89" width="31" height="31" rx="4" fill="#fff1ba" stroke={C.ink} />
        <Label x={94} y={81} size={14} color={C.orange}>
          ↑ V
        </Label>
        <Label x={94} y={138} size={11}>
          Élever
        </Label>
      </g>
      <g opacity={s >= 2 ? 1 : 0.3}>
        <path
          d="M156 120 L176 46 L197 120 M163 91 H189 M157 69 H196 M151 55 H202 M156 120 L188 91 L163 91 L183 66"
          stroke={C.ink}
          strokeWidth="2"
          fill="none"
        />
        <Label x={177} y={138} size={11}>
          Transport
        </Label>
      </g>
      <g opacity={s >= 3 ? 1 : 0.3}>
        <rect x="233" y="89" width="31" height="31" rx="4" fill="#fff1ba" stroke={C.ink} />
        <Label x={249} y={81} size={14} color={C.orange}>
          ↓ V
        </Label>
        <Label x={249} y={138} size={11}>
          Abaisser
        </Label>
      </g>
      <g opacity={s >= 4 ? 1 : 0.3}>
        <House x={316} y={85} lit={s >= 4} />
        <Label x={316} y={138} size={11}>
          230 V
        </Label>
      </g>
      <path
        d="M56 104 H78 M109 104 H151 M202 104 H233 M264 104 H294"
        stroke="#bac4d1"
        strokeWidth="3"
      />
      <path
        d={
          [
            "M56 104 H66",
            "M56 104 H78",
            "M56 104 H78 M109 104 H151",
            "M56 104 H78 M109 104 H151 M202 104 H233",
            "M56 104 H78 M109 104 H151 M202 104 H233 M264 104 H294",
          ][s]
        }
        stroke={C.blue}
        strokeWidth="3"
      />
      <StageRail stage={s} labels={MECHANISM_STAGES.grid} />
    </>
  );
}
