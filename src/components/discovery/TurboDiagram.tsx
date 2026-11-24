import { useId } from "react";
import { Arrow, C, Label, Title } from "./mechanisms/primitives";
import { gradient } from "../lesson-visuals/refined/material";

const hot = "#924923";
const cool = "#25577e";
const border = "#384544";

function Rotor({
  x,
  value,
  warm,
  metal,
}: {
  x: number;
  value: number;
  warm?: boolean;
  metal: string;
}) {
  const edge = warm ? "#955937" : "#557580";
  const impeller = warm ? "#bb7551" : "#6b9aa9";
  const scale = warm ? 1 : -1;
  return (
    <g transform={`translate(${x} 110)`}>
      <g transform={`scale(${scale} 1)`}>
        <path
          d="M-59-47h28q1-2 5-4c28-14 56-3 72 19 14 20 15 45 4 63C37 52 13 61-12 57c-21-3-33-14-42-34l-7-22h-16v-45Z"
          fill={metal}
          stroke={border}
          strokeWidth="1.25"
        />
        <path
          d="M-53-37h25q22-12 42-7c29 6 49 32 46 58-3 14-13 26-30 31C4 54-22 44-31 28-43 13-38-2-29-12l-23-1Z"
          fill={warm ? "#ad7958" : "#799a9d"}
          stroke={edge}
          strokeWidth="1.25"
        />
        <path
          d="M-51-27q12-1 26 5 17-11 38-9 30 4 37 34 3 19-16 30-21 10-42 2"
          fill="none"
          stroke={warm ? "#e5ba90" : "#c4d6ca"}
          strokeWidth="2"
        />
        <path
          d="M-62-49v38h-13v-38Zm28-1 2 10m-9 70 9-5m57-58 6-7m8 78 7 6"
          fill={metal}
          stroke={border}
          strokeWidth="1.1"
        />
        {[
          [-72, -43],
          [-72, -18],
          [13, -48],
          [45, -32],
          [43, 42],
          [-36, 39],
          [-20, 49],
        ].map(([bx, by]) => (
          <circle key={`${bx}:${by}`} cx={bx} cy={by} r="2.15" fill="#d4c8a9" stroke="#5d6961" />
        ))}
      </g>
      <circle r="33" fill={metal} stroke={edge} strokeWidth="1.8" />
      <circle r="27.5" fill="#455654" stroke="#d4c5a5" strokeWidth="1.05" />
      <g
        className={value > 0 ? "discovery-wheel" : undefined}
        style={{ animationDuration: `${4 - value * 0.03}s` }}
      >
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d={
                warm
                  ? "M4-4Q10-24 23-22q-5 7-6 13-1 7-7 14Z"
                  : "M-4-4Q-10-24-23-22q5 7 6 13 1 7 7 14Z"
              }
              fill={impeller}
              stroke={warm ? "#8c5139" : "#43697c"}
              strokeWidth="0.85"
            />
            <path
              d={warm ? "M11-2q3-12 9-17" : "M-11-2q-3-12-9-17"}
              fill="none"
              stroke="#e2d3bb"
              strokeWidth="1.15"
            />
          </g>
        ))}
      </g>
      <circle r="9" fill={metal} stroke={C.ink} strokeWidth="1.15" />
      <circle r="3.3" fill="#554f48" stroke="#c5b99c" strokeWidth="0.7" />
    </g>
  );
}

/** Functional projection of two scroll housings and the shared shaft. */
export function TurboDiagram({ value }: { value: number }) {
  const active = value > 0;
  const id = `turbo-detail-${useId().replace(/:/g, "")}`;
  const metal = `url(#${id}-metal)`;
  return (
    <g>
      <defs>
        {gradient(
          id + "-metal",
          [
            [0, "#4e5955"],
            [0.18, "#a9ada2"],
            [0.39, "#e5deca"],
            [0.63, "#959d92"],
            [0.82, "#bbc0b0"],
            [1, "#586c69"],
          ],
          true,
        )}
        {gradient(
          id + "-bronze",
          [
            [0, "#86794e"],
            [0.33, "#d0b680"],
            [0.62, "#f5dfac"],
            [1, "#9d805c"],
          ],
          true,
        )}
      </defs>
      <Title>Deux flux, un même axe</Title>
      <Label x={83} y={47} color={hot}>
        Gaz du moteur
      </Label>
      <Label x={274} y={47} color={cool}>
        Air vers le moteur
      </Label>
      <path d="M12 171Q176 158 347 168L323 177H44Z" fill="#626761" opacity=".14" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 70H68q17 0 25 14m-6 26H48v41H15" stroke="#a8866e" strokeWidth="17" />
        <path d="M345 151h-30v-41h-41m-11-21V70h82" stroke="#8ba6a7" strokeWidth="17" />
        <path d="M15 70H68q17 0 25 14m-6 26H48v41H15" stroke="#f2d8be" strokeWidth="8" />
        <path d="M345 151h-30v-41h-41m-11-21V70h82" stroke="#dfeae0" strokeWidth="8" />
      </g>
      <path d="M136 94h91l8 13-9 24h-89l-9-21Z" fill={metal} stroke={border} strokeWidth="1.2" />
      <rect
        x="123"
        y="106"
        width="115"
        height="9.5"
        rx="3.5"
        fill={`url(#${id}-bronze)`}
        stroke={border}
      />
      {[145, 167, 193, 214].map((x) => (
        <rect
          key={x}
          x={x}
          y="99"
          width="7.5"
          height="27"
          rx="2.5"
          fill={metal}
          stroke={border}
          strokeWidth=".85"
        />
      ))}
      <path d="M164 121h34m-39 5h45m-46-27h46" stroke="#c4c6b1" strokeWidth=".8" />
      <Rotor x={98} value={value} warm metal={metal} />
      <Rotor x={263} value={value} metal={metal} />
      <Label x={180} y={87}>
        Axe
      </Label>
      <path d="M180 91v13" stroke={border} fill="none" />
      <g opacity={active ? 1 : 0.55}>
        <Arrow x={21} y={69} dx={32} dy={0} color={hot} dim={!active} />
        <Arrow x={87} y={111} dx={-28} dy={0} color={hot} dim={!active} />
        <Arrow x={44} y={151} dx={-23} dy={0} color={hot} dim={!active} />
        <Arrow x={339} y={151} dx={-18} dy={0} color={cool} dim={!active} />
        <Arrow x={310} y={111} dx={-34} dy={0} color={cool} dim={!active} />
        <Arrow x={307} y={69} dx={32} dy={0} color={cool} dim={!active} />
      </g>
      <Label x={98} y={181}>
        Turbine
      </Label>
      <Label x={263} y={181}>
        Compresseur
      </Label>
      <Label x={80} y={201} color={hot}>
        Vers l’échappement
      </Label>
      <Label x={277} y={201} color={cool}>
        Air extérieur
      </Label>
    </g>
  );
}
