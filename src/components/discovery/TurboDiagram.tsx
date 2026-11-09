import { Arrow, C, Label, Title } from "./mechanisms/primitives";

function Rotor({ x, value, warm }: { x: number; value: number; warm?: boolean }) {
  return (
    <g transform={`translate(${x} 110)`}>
      <circle
        r="38"
        fill={warm ? "#fff0e7" : "#e8f4ff"}
        stroke={warm ? C.orange : C.blue}
        strokeWidth="2"
      />
      <circle r="29" fill="var(--art-metal)" stroke="#8b9caf" />
      <g
        className={value > 0 ? "discovery-wheel" : undefined}
        style={{ animationDuration: `${4 - value * 0.03}s` }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle})`}
            d="M5 -3 Q10 -23 24 -15 Q13 -13 9 5 Z"
            fill={warm ? "#b85c31" : "#387fc1"}
            stroke={warm ? "#8c4426" : "#245e98"}
            strokeWidth="0.7"
          />
        ))}
      </g>
      <circle r="9" fill="var(--art-metal)" stroke={C.ink} strokeWidth="1.5" />
      <circle r="3" fill={C.ink} />
    </g>
  );
}

/** Functional view: compressor intake and turbine exhaust meet the wheel centres.
 * The two fluids remain separate; this projection does not simulate internal streamlines. */
export function TurboDiagram({ value }: { value: number }) {
  const active = value > 0;
  return (
    <g>
      <Title>Deux flux, un même axe</Title>
      <Label x={84} y={47} color={C.orange}>
        Gaz du moteur
      </Label>
      <Label x={277} y={47} color={C.blue}>
        Air vers le moteur
      </Label>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 70 H68 Q98 70 98 89 M87 110 H48 V151 H15" stroke="#f3c7aa" strokeWidth="13" />
        <path d="M345 151 H315 V110 H274 M263 89 V70 H345" stroke="#bedcf1" strokeWidth="13" />
        <path d="M15 70 H68 Q98 70 98 89 M87 110 H48 V151 H15" stroke="#fffaf5" strokeWidth="7" />
        <path d="M345 151 H315 V110 H274 M263 89 V70 H345" stroke="#f6fcff" strokeWidth="7" />
      </g>
      <rect
        x="123"
        y="102"
        width="115"
        height="16"
        rx="4"
        fill="var(--art-metal)"
        stroke="#788b9f"
      />
      <rect x="152" y="99" width="13" height="22" rx="3" fill="#d1dce7" stroke="#788b9f" />
      <rect x="197" y="99" width="13" height="22" rx="3" fill="#d1dce7" stroke="#788b9f" />
      <Rotor x={98} value={value} warm />
      <Rotor x={263} value={value} />
      <g fill="none" strokeWidth="2.5" strokeLinecap="round" opacity={active ? 1 : 0.4}>
        <path d="M87 110 H48 V151" stroke={C.orange} />
        <path d="M315 151 V110 H274" stroke={C.blue} />
      </g>
      <Label x={180} y={89}>
        Axe
      </Label>
      <Arrow x={21} y={70} dx={32} dy={0} color={C.orange} dim={!active} />
      <Arrow x={83} y={110} dx={-28} dy={0} color={C.orange} dim={!active} />
      <Arrow x={43} y={151} dx={-21} dy={0} color={C.orange} dim={!active} />
      <Arrow x={339} y={151} dx={-18} dy={0} dim={!active} />
      <Arrow x={310} y={110} dx={-34} dy={0} dim={!active} />
      <Arrow x={307} y={70} dx={32} dy={0} dim={!active} />
      <Label x={98} y={169}>
        Turbine
      </Label>
      <Label x={263} y={169}>
        Compresseur
      </Label>
      <Label x={80} y={188} color={C.orange}>
        Vers l’échappement
      </Label>
      <Label x={278} y={188} color={C.blue}>
        Air extérieur
      </Label>
    </g>
  );
}
