import { useId } from "react";
import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";

function Earth({ x, june, selected }: { x: number; june: boolean; selected: boolean }) {
  const id = `earth-${useId().replace(/:/g, "")}`;
  return (
    <g>
      {selected ? (
        <circle cx={x} cy="96" r="38" fill="none" stroke={C.orange} strokeWidth="3" />
      ) : null}
      <defs>
        <clipPath id={id}>
          <circle cx={x} cy="96" r="32" />
        </clipPath>
      </defs>
      <circle cx={x} cy="96" r="32" fill="#316b9c" />
      <g clipPath={`url(#${id})`}>
        <path
          d={`M${x - 18} 65 l15 9 l-7 14 l10 10 l-9 26 l-13 -12 l-5 -22 Z M${x + 14} 67 l22 17 l-9 20 l-16 -7 l-7 -17 Z`}
          fill="#7cae95"
        />
        <ellipse cx={x} cy="96" rx="17" ry="32" fill="none" stroke="#c5e5f7" strokeOpacity="0.35" />
        <path d={`M${x - 32} 96 H${x + 32}`} stroke="#c5e5f7" strokeOpacity="0.35" />
        <path
          d={`M${x} 64 A32 32 0 0 ${june ? 1 : 0} ${x} 128 Z`}
          fill="#e3f5ff"
          fillOpacity="0.45"
        />
      </g>
      <circle cx={x} cy="96" r="32" fill="none" stroke="#40678c" strokeWidth="1.5" />
      <path d={`M${x - 19} 140 L${x + 19} 52`} stroke={C.ink} strokeWidth="2.5" />
      <path d={`M${x - 29} 84 L${x + 29} 108`} stroke="#fff" strokeWidth="2" />
      <Label x={x + 23} y={47}>
        N
      </Label>
      <Label x={x} y={166}>
        {june ? "Juin" : "Décembre"}
      </Label>
      <Label x={x} y={188}>
        {june ? "Nord : été" : "Nord : hiver"}
      </Label>
    </g>
  );
}

export function SeasonsDiagram({ state }: DiagramProps) {
  return (
    <g>
      <Title>Même axe, saisons opposées</Title>
      <ellipse
        cx="180"
        cy="96"
        rx="104"
        ry="53"
        fill="none"
        stroke={C.muted}
        strokeDasharray="3 5"
      />
      <circle cx="180" cy="96" r="24" fill="#ffdf80" opacity="0.35" />
      <circle cx="180" cy="96" r="19" fill="var(--art-gold)" stroke={C.orange} />
      <Label x={180} y={59}>
        Soleil
      </Label>
      <Arrow x={154} y={96} dx={-34} dy={0} color={C.orange} />
      <Arrow x={206} y={96} dx={34} dy={0} color={C.orange} />
      <path
        d="M151 82 H120 M151 110 H120 M209 82 H240 M209 110 H240"
        stroke="#d4a04a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <Earth x={76} june selected={state.active} />
      <Earth x={284} june={false} selected={!state.active} />
      <Label x={180} y={207}>
        Sud : saisons inversées
      </Label>
    </g>
  );
}
