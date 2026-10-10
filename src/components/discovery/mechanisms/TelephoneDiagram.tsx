import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";
function Wave({ x, y, active, color }: { x: number; y: number; active: boolean; color: string }) {
  return (
    <g>
      <path d={`M${x} ${y} h78`} stroke="#bbc8d6" strokeWidth="1" />
      <path
        d={
          active
            ? `M${x} ${y} q5 -19 10 0 t10 0 q5 -9 10 0 t10 0 q5 -22 10 0 t10 0 q5 -12 10 0 t8 0`
            : `M${x} ${y} h78`
        }
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
    </g>
  );
}
export function TelephoneDiagram({ state }: DiagramProps) {
  return (
    <>
      <Title>Son → courant variable → son</Title>
      <Label x={61} y={50} color={C.blue}>
        Voix
      </Label>
      <Label x={180} y={50} color={C.orange}>
        Courant
      </Label>
      <Label x={300} y={50} color={C.blue}>
        Son recréé
      </Label>
      <Wave x={22} y={77} active={state.active} color={C.blue} />
      <Wave x={141} y={77} active={state.active} color={C.orange} />
      <Wave x={260} y={77} active={state.active} color={C.blue} />
      <path
        d="M31 117 Q53 106 74 117 V147 Q53 158 31 147 Z"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2.5"
      />
      <path d="M65 117 V147" stroke={C.blue} strokeWidth="3" />
      <path
        d="M286 117 Q308 106 329 117 V147 Q308 158 286 147 Z"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2.5"
      />
      <path d="M293 117 V147" stroke={C.blue} strokeWidth="3" />
      <path d="M75 130 H286" stroke={state.active ? C.orange : C.muted} strokeWidth="3" />
      <Arrow
        x={132}
        y={130}
        dx={89}
        dy={0}
        color={state.active ? C.orange : C.muted}
        dim={!state.active}
      />
      <Label x={56} y={176} size={13}>
        Micro
      </Label>
      <Label x={180} y={154} size={13}>
        Fil électrique
      </Label>
      <Label x={308} y={176} size={13}>
        Écouteur
      </Label>
      {state.active && (
        <g stroke={C.blue} fill="none" strokeWidth="2">
          <path d="M24 119 Q14 132 24 145 M338 119 Q348 132 338 145" />
          <path d="M19 112 Q1 132 19 152 M343 112 Q359 132 343 152" />
        </g>
      )}
      <Label x={180} y={202} size={13}>
        {state.active
          ? "Même forme illustrée · signaux différents"
          : "Silence : pas de variation liée à la voix"}
      </Label>
    </>
  );
}
