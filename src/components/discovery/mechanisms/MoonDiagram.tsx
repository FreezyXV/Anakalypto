import { useId } from "react";
import { moonModel } from "@/lib/discovery/models";
import { Arrow, C, Label, Title, type DiagramProps } from "./primitives";

/** Lit outline for the northern observer: growing phases have their light on the right. */
function litDisk(phase: number, radius: number): string {
  const half = Math.min(phase, 8 - phase);
  const cosine = Math.cos((half * Math.PI) / 4);
  const rx = Math.abs(cosine) * radius;
  return (
    `M0 ${-radius} A${radius} ${radius} 0 0 1 0 ${radius} ` +
    (half === 2 ? `L0 ${-radius} Z` : `A${rx} ${radius} 0 0 ${cosine >= 0 ? 0 : 1} 0 ${-radius} Z`)
  );
}

export function MoonDiagram({ state }: DiagramProps) {
  const id = `moon-${useId().replace(/:/g, "")}`;
  const m = moonModel(state.amount);
  const x = 118 - 61 * Math.cos(m.angle);
  const y = 111 + 61 * Math.sin(m.angle);
  const [first, ...rest] = m.name.split(" ");
  return (
    <g>
      <Title>La lumière reste, la vue change</Title>
      <defs>
        <clipPath id={`${id}-earth`}>
          <circle cx="118" cy="111" r="16" />
        </clipPath>
        <clipPath id={`${id}-light`}>
          {m.phase === 4 ? (
            <circle cx="278" cy="111" r="42" />
          ) : m.phase !== 0 ? (
            <path
              d={litDisk(m.phase, 42)}
              transform={`translate(278 111) scale(${m.phase > 4 ? -1 : 1} 1)`}
            />
          ) : null}
        </clipPath>
      </defs>
      <rect
        x="214"
        y="38"
        width="133"
        height="167"
        rx="14"
        fill="#fff"
        fillOpacity="0.7"
        stroke="#dce5ef"
      />
      <circle cx="118" cy="111" r="61" fill="none" stroke={C.muted} strokeDasharray="3 5" />
      {Array.from({ length: 8 }, (_, i) => (
        <circle
          key={i}
          cx={118 - 61 * Math.cos((i * Math.PI) / 4)}
          cy={111 + 61 * Math.sin((i * Math.PI) / 4)}
          r="2.3"
          fill="#c3cfdd"
        />
      ))}
      <path d={`M118 111 L${x} ${y}`} stroke="#a9bacb" strokeDasharray="2 4" />
      <circle cx="20" cy="111" r="17" fill="#fff0b6" opacity="0.7" />
      <circle cx="20" cy="111" r="12" fill={C.yellow} stroke={C.orange} />
      <Label x={28} y={70}>
        Soleil
      </Label>
      <Arrow x={13} y={87} dx={28} dy={0} color={C.orange} />
      <circle cx="118" cy="111" r="16" fill={C.blue} />
      <g clipPath={`url(#${id}-earth)`}>
        <path
          d="M108 96 l7 8 l-5 6 l8 6 l-3 12 l-9 -4 l-5 -13 Z M125 97 l11 6 l-5 11 l-7 -3 l-3 -9 Z"
          fill="#8bc49d"
        />
        <ellipse
          cx="118"
          cy="111"
          rx="8"
          ry="16"
          fill="none"
          stroke="#d8efff"
          strokeOpacity="0.35"
        />
      </g>
      <Label x={118} y={143}>
        Terre
      </Label>
      <circle cx={x} cy={y} r="9" fill={C.muted} />
      <path d={`M${x} ${y - 9} A9 9 0 0 0 ${x} ${y + 9} Z`} fill={C.yellow} />
      <circle cx={x} cy={y} r="9" fill="none" stroke={C.ink} />
      <Label x={278} y={51}>
        Vue de la Terre
      </Label>
      <circle cx="278" cy="111" r="42" fill="#697789" />
      {m.phase === 4 ? (
        <circle cx="278" cy="111" r="42" fill="#ffdf80" />
      ) : m.phase !== 0 ? (
        <path
          d={litDisk(m.phase, 42)}
          fill="#ffdf80"
          transform={`translate(278 111) scale(${m.phase > 4 ? -1 : 1} 1)`}
        />
      ) : null}
      <g clipPath={`url(#${id}-light)`} fill="#bcae8d" opacity="0.38">
        <circle cx="263" cy="93" r="7" />
        <circle cx="289" cy="116" r="10" />
        <circle cx="269" cy="132" r="5" />
        <circle cx="294" cy="90" r="4" />
        <circle cx="249" cy="116" r="3" />
      </g>
      <circle cx="278" cy="111" r="42" fill="none" stroke={C.ink} strokeWidth="1.5" />
      <Label x={111} y={193}>
        Orbite simplifiée
      </Label>
      <Label x={278} y={177}>
        {first}
      </Label>
      <Label x={278} y={198}>
        {rest.join(" ")}
      </Label>
    </g>
  );
}
