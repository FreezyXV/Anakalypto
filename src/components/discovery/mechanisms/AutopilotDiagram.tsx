import { Arrow, C, Label, Stop, Title, type DiagramProps } from "./primitives";
function Control({ x, label, detail }: { x: number; label: string; detail: string }) {
  return (
    <g>
      <rect
        x={x}
        y="125"
        width="94"
        height="42"
        rx="7"
        fill="#fff"
        stroke={C.ink}
        strokeWidth="2"
      />
      <Label x={x + 47} y={142} size={13}>
        {label}
      </Label>
      <Label x={x + 47} y={158} size={11}>
        {detail}
      </Label>
    </g>
  );
}
export function AutopilotDiagram({ state }: DiagramProps) {
  const gust = state.scene === "gust";
  return (
    <>
      <Title>
        {gust ? "Une rafale : mesurer et corriger" : "Les pilotes choisissent la consigne"}
      </Title>
      <rect x="25" y="33" width="116" height="27" rx="6" fill="#fff1ba" stroke={C.ink} />
      <Label x={83} y={51} size={13}>
        Consigne choisie
      </Label>
      <path
        d="M83 61 V106 H180 V118"
        fill="none"
        stroke={C.orange}
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <Arrow x={180} y={118} dx={0} dy={5} color={C.orange} />
      <Label x={275} y={53} size={13}>
        Gouvernes
      </Label>
      <g transform={`translate(275 82) rotate(${gust ? -12 : 0}) scale(0.7)`}>
        <path
          d="M0 -24 L7 -4 L56 9 V16 L7 7 L5 23 L17 29 V34 L0 28 L-17 34 V29 L-5 23 L-7 7 L-56 16 V9 L-7 -4 Z"
          fill="#fff"
          stroke={C.ink}
          strokeWidth="2"
        />
        <path
          d="M-52 12 L-25 7 M25 7 L52 12"
          stroke={state.active ? C.green : C.muted}
          strokeWidth="4"
        />
      </g>
      {state.active && (
        <>
          <Arrow x={325} y={90} dx={0} dy={-15} color={C.green} />
          <Arrow x={225} y={75} dx={0} dy={15} color={C.green} />
        </>
      )}
      {gust && (
        <path
          d="M165 68 Q186 57 211 67 m-10 -5 l10 5 l-10 5"
          stroke={C.blue}
          strokeWidth="3"
          fill="none"
        />
      )}
      <Control x={17} label="Capteurs" detail="Mesurer" />
      <Control x={133} label="Calculateur" detail="Comparer" />
      <Control x={249} label="Servomoteurs" detail="Commander" />
      <Arrow x={112} y={146} dx={17} dy={0} dim={!state.active} />
      <Arrow x={228} y={146} dx={17} dy={0} dim={!state.active} />
      {!state.active && <Stop x={121} y={146} />}
      <path
        d="M296 125 H342 V94 H318"
        fill="none"
        stroke={state.active ? C.blue : C.muted}
        strokeWidth="2.5"
        strokeDasharray={state.active ? undefined : "4 4"}
      />
      <path d="M236 94 H64 V121" fill="none" stroke={C.blue} strokeWidth="2.5" />
      <Arrow x={64} y={121} dx={0} dy={3} />
      <Arrow x={323} y={94} dx={-7} dy={0} dim={!state.active} />
      <Label x={180} y={189} size={13}>
        {state.active
          ? "Gouvernes → état de l’avion → capteurs"
          : "Capteurs disponibles · commande manuelle"}
      </Label>
    </>
  );
}
