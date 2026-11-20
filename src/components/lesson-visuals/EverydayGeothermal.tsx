import { Arrow, Label, Line, blue, warm } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

function SurfaceBuilding({
  x,
  wide = false,
  plant = false,
}: {
  x: number;
  wide?: boolean;
  plant?: boolean;
}) {
  const width = wide ? 83 : 61;
  return (
    <g transform={`translate(${x} 95)`}>
      <path
        d={`M0 0V-30H${width}V0Z`}
        fill={plant ? "#b3bbc0" : "#e3cfb0"}
        stroke="#635e58"
        strokeWidth="1.5"
      />
      <path
        d={
          plant
            ? `M-3-31h${width + 6}v-10h-${width + 6}Z`
            : `M-4-28l${width / 2 + 4}-25l${width / 2 + 4} 25Z`
        }
        fill={plant ? "#677c83" : "#a48672"}
        stroke="#675e58"
        strokeWidth="1.4"
      />
      <Line d={`M3 -7h${width - 6}`} color="#8d8a7f" width={0.9} />
      {(wide ? [10, 28, 46, 65] : [12, 34]).map((i) => (
        <path
          key={i}
          d={`M${i} -23h11v12H${i}Z`}
          fill={plant ? "#687b84" : "#8fa7a6"}
          stroke="#626663"
          strokeWidth="1.1"
        />
      ))}
    </g>
  );
}

export function GeoHeat(step: number, id: string) {
  const shallow = step === 0;
  const depth = shallow ? 154 : step === 1 ? 174 : 189;
  const hot = shallow ? 149 : 109,
    cold = shallow ? 112 : 209;
  return (
    <>
      <defs>
        <Material id={id + "-soil"} colors={["#ccb492", "#b69b81", "#917668"]} />
        <Material id={id + "-reservoir"} colors={["#c4a998", "#a57f74", "#936c63"]} />
        <Hatch id={id + "-strata"} color="#695f59" space={6} opacity={0.19} />
        <clipPath id={id + "-layers"}>
          <path d="M28 95h304v108H28Z" />
        </clipPath>
      </defs>
      <path d="M28 95h304v108H28Z" fill={`url(#${id}-soil)`} stroke="#927d6c" strokeWidth="1.6" />
      <g clipPath={`url(#${id}-layers)`}>
        <path
          d="M27 111q66 11 119 4t185-2v21q-99-10-153 0t-151-2Z"
          fill="#c9b096"
          stroke="#ac9479"
          strokeWidth="1.3"
        />
        <path
          d="M27 142q90-8 152 4t153-3v23q-102 16-153 5t-152-2Z"
          fill="#9e897a"
          stroke="#887469"
          strokeWidth="1.5"
        />
        <path d="M27 166q87 0 157 14t148-5v36H27Z" fill={`url(#${id}-reservoir)`} />
        <path d="M27 96h306v107H27Z" fill={`url(#${id}-strata)`} />
        {Array.from({ length: 38 }, (_, i) => (
          <path
            key={i}
            d={`M${31 + ((i * 55) % 298)} ${101 + ((i * 37) % 95)}l${4 + (i % 4)} -1`}
            stroke={i % 3 ? "#ddcfb7" : "#806f67"}
            strokeWidth=".8"
            opacity=".62"
          />
        ))}
      </g>
      <path d="M27 94q57-7 98 0t73 0t134 0" fill="none" stroke="#6d7b65" strokeWidth="3" />
      {shallow ? (
        <>
          <path
            d={`M112 82v${depth - 82}q0 11 10 11h17q10 0 10-11V82`}
            fill="none"
            stroke="#4f5960"
            strokeWidth="6"
          />
          <path
            d={`M112 82v${depth - 82}q0 11 10 11h10`}
            stroke={blue}
            strokeWidth="3.5"
            fill="none"
          />
          <path
            d={`M132 ${depth + 11}h7q10 0 10-11V82`}
            stroke={warm}
            strokeWidth="3.5"
            fill="none"
          />
        </>
      ) : (
        <>
          <path
            d={`M${hot} 79v${depth - 79}m${cold - hot} 0V78`}
            fill="none"
            stroke="#646265"
            strokeWidth="7"
          />
          <path d={`M${hot} ${depth}V78`} stroke={warm} strokeWidth="3.9" fill="none" />
          <path d={`M${cold} 78V${depth}`} stroke={blue} strokeWidth="3.9" fill="none" />
          <path
            d={`M${hot} ${depth}q50 10 100 0`}
            stroke="#ddd0bc"
            strokeWidth="3"
            strokeDasharray="4 7"
            fill="none"
          />
        </>
      )}
      <Arrow x1={cold} y1={117} x2={cold} y2={138} color="#316785" width={2.1} />
      <Arrow x1={hot} y1={139} x2={hot} y2={112} color="#9a542e" width={2.1} />
      <path
        d={shallow ? "M112 85V69h45m-8 15v-6h8" : "M109 81V62h44m57 19V75h-26"}
        fill="none"
        stroke="#637079"
        strokeWidth="3"
      />
      <rect
        x="151"
        y="54"
        width="39"
        height="30"
        rx="3"
        fill="#b3c4c8"
        stroke="#5a717c"
        strokeWidth="1.5"
      />
      <path d="M161 62h18m-18 4h18m-18 4h18m-18 4h18" stroke="#688592" strokeWidth="1.4" />
      {step < 2 ? (
        <>
          <SurfaceBuilding x={step === 0 ? 249 : 243} wide={!shallow} />
          <Arrow
            x1={shallow ? 194 : 210}
            y1={67}
            x2={shallow ? 243 : 240}
            y2={67}
            color="#9d5d3e"
            width={2.6}
          />
        </>
      ) : (
        <>
          <SurfaceBuilding x={247} plant />
          <Arrow x1={208} y1={67} x2={242} y2={67} color="#a05e3d" width={2.6} />
          <circle cx="274" cy="67" r="10" fill="#9abaad" stroke="#4f7068" strokeWidth="1.8" />
          <Line d="M268 67h12m-6-6v12" color="#506d69" width={1.6} />
          <Arrow x1={287} y1={66} x2={328} y2={66} color="#4c7068" width={2.6} />
        </>
      )}
      <Callout
        x={75}
        y={120}
        anchor="middle"
        leader={shallow ? "M73 125h29" : "M70 125h29"}
        color="#5b4a42"
      >
        {shallow ? "Sonde" : "Puits"}
      </Callout>
      <Label x={180} y={225} color="#4d5555">
        {["Boucle et pompe à chaleur", "Échange avec le réseau", "Turbine et génératrice"][step]}
      </Label>
    </>
  );
}
