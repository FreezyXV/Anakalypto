import { Lithography } from "./EverydayPrecision";
import {
  Arrow,
  Label,
  Line,
  Plate,
  blue,
  gold,
  green,
  navy,
  red,
  teal,
  warm,
  type SceneSet,
} from "./EverydayParts";

function SelfHealing(step: number) {
  const capsules = [
    [111, 105],
    [160, 133],
    [206, 91],
    [249, 151],
    [143, 76],
    [223, 124],
    [102, 153],
  ];
  const crack = "M198 57l-19 39-19 37 20 24-14 25";
  return (
    <>
      <Plate x={50} y={55} width={260} height={131} color="#c7d5d9">
        {Array.from({ length: 33 }, (_, i) => (
          <circle
            key={i}
            cx={60 + ((i * 61) % 241)}
            cy={65 + ((i * 43) % 110)}
            r={1.5 + (i % 3)}
            fill="#a2b4b9"
          />
        ))}
        {capsules.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="11"
              fill={step > 0 && i === 1 ? "#e2d7be" : "#e6bc75"}
              stroke={warm}
              strokeWidth="2"
            />
            {(step === 0 || i !== 1) && <circle cx={x! + 2} cy={y! - 2} r="3" fill="#f7df98" />}
          </g>
        ))}
        {step > 0 && <Line d={crack} color={navy} width={step === 1 ? 4 : 8} />}
        {step === 1 && <path d="M165 132q15-5 10 6l-4 6Z" fill="#e3b668" stroke={warm} />}
        {step === 2 && <Line d={crack} color={gold} width={5} />}
      </Plate>
      <Label x={180} y={216}>
        {["Capsules intactes", "Une capsule s’ouvre", "Fissure comblée"][step]}
      </Label>
    </>
  );
}

const limeSymbols = [
  ["CaCO₃", "CaO"],
  ["CaO", "Ca(OH)₂"],
  ["Ca(OH)₂", "CaCO₃"],
];
function Lime(step: number) {
  return (
    <>
      <Plate x={39} y={69} width={104} height={108} color={step === 0 ? "#e9dfc8" : "#e5e7e4"}>
        <path
          d="M58 130l17-24 43 1 10 16-17 17-39 4Z"
          fill={step === 0 ? "#c6b68f" : "#c4c9c6"}
          stroke="#898778"
          strokeWidth="2"
        />
        <Label x={91} y={163}>
          {limeSymbols[step]![0]}
        </Label>
      </Plate>
      <Plate x={218} y={69} width={104} height={108} color={step === 2 ? "#e9dfc8" : "#e5e7e4"}>
        <path
          d="M231 138q28-44 55-27l21 25q-37 16-76 2Z"
          fill={step === 2 ? "#c9bc9d" : "#f6f5ef"}
          stroke="#939489"
          strokeWidth="2"
        />
        <Label x={270} y={163}>
          {limeSymbols[step]![1]}
        </Label>
      </Plate>
      <Arrow x1={148} y1={122} x2={212} y2={122} color={step === 1 ? blue : warm} width={4} />
      {step === 0 && <Arrow x1={178} y1={105} x2={178} y2={66} color={warm} />}
      {step > 0 && <Arrow x1={178} y1={65} x2={178} y2={105} color={step === 1 ? blue : teal} />}
      <Label x={178} y={55} color={step === 1 ? blue : warm}>
        {step === 1 ? "H₂O" : "CO₂"}
      </Label>
      <Label x={180} y={213}>
        {["Décomposition", "Hydratation", "Carbonatation"][step]}
      </Label>
    </>
  );
}

function Bridge(step: number) {
  const jointX = 229;
  return (
    <>
      <path d="M32 167q41-13 84 0t84 0t84 0t44 0v22H32Z" fill="#b9d9e1" />
      <path
        d="M62 105h263v30H62Z M108 135h28v52h-28ZM230 134h26v53h-26Z"
        fill="#a5b3bd"
        stroke={navy}
        strokeWidth="2"
      />
      <Line d="M63 102h261" color={navy} width={6} />
      <Line d={`M${jointX} 96v31`} color={step === 2 ? green : blue} width={4} />
      {step < 2 && (
        <>
          <Line d="M229 124q2 20-8 24v16" color={blue} dash="3 4" width={3} />
          <path d="M221 154q-10 12 0 16q10-4 0-16Z" fill="#559bbb" />
        </>
      )}
      {step === 1 && (
        <>
          <circle cx="226" cy="139" r="24" fill="none" stroke={warm} strokeWidth="3" />
          <Line d="M210 157l-38 30" color={warm} width={6} />
          <path d="M226 130l9 2-3 6-9 3" fill="none" stroke={red} strokeWidth="3" />
        </>
      )}
      {step === 2 && (
        <>
          <Line d="M229 93q38 8 64 0" color={green} width={4} />
          <Arrow x1={272} y1={91} x2={314} y2={91} color={green} />
          <Line d="M243 138h11v23h-11" color={teal} width={2.6} dash="4 3" />
        </>
      )}
      <Label x={180} y={215}>
        {["Infiltration au joint", "Trace sous le pont", "Suivre le défaut"][step]}
      </Label>
    </>
  );
}

function Actuator(step: number, id: string) {
  const pivotX = 221,
    pivotY = 145;
  return (
    <>
      <path d="M202 162h47l14 23h-77Z" fill="#a6b7c3" stroke={navy} strokeWidth="2" />
      <Line d="M222 149l24-60 48-20" color="#7b9dad" width={14} />
      <circle cx={pivotX} cy={pivotY} r="10" fill="#b8c5cd" stroke={navy} strokeWidth="2.4" />
      <circle cx="246" cy="89" r="7" fill="#c9d6dc" stroke={navy} />
      {step === 0 && (
        <>
          <rect
            x="64"
            y="99"
            width="105"
            height="65"
            rx="12"
            fill={`url(#${id}-metal)`}
            stroke={navy}
            strokeWidth="2"
          />
          <Line d="M166 139h45" color={navy} width={6} />
          <Line d="M90 107v49m15-49v49m15-49v49m15-49v49" color="#7d92a4" width={2} />
          <Label x={116} y={191}>
            Moteur
          </Label>
        </>
      )}
      {step > 0 && (
        <>
          <path
            d="M62 143l114-40 15 39-114 40Z"
            fill={step === 1 ? "#92b9cc" : "#dfc293"}
            stroke={navy}
            strokeWidth="2"
          />
          <path d="M155 111l15-5 14 37-15 6Z" fill="#627e91" />
          <Line d="M179 122l58-25" color={navy} width={5} />
          <Arrow x1={93} y1={136} x2={144} y2={117} color={step === 1 ? blue : warm} />
          {step === 2 &&
            [96, 107, 119, 133].map((x, i) => (
              <circle key={x} cx={x} cy={151 - i * 3} r="3" fill={warm} />
            ))}
          <Label x={136} y={205}>
            {step === 1 ? "Liquide" : "Air comprimé"}
          </Label>
        </>
      )}
      <Label x={259} y={58}>
        Bras
      </Label>
    </>
  );
}

const robotPath = "M103 141L110 92L244 91L255 151L103 141";
function Mapping(step: number) {
  const x = step === 1 ? 244 : 103,
    y = step === 1 ? 91 : 141;
  return (
    <>
      <Plate x={35} y={46} width={290} height={144} color="#e8edf0">
        <Line d="M61 155v-88h238v89h-61v20h-94v-21Z" color="#6c8294" width={4} />
        <rect
          x="137"
          y="102"
          width="51"
          height="44"
          fill="#b6c0cc"
          stroke="#8b9aad"
          strokeWidth="2"
        />
        {step > 0 && (
          <Line
            d={step === 1 ? "M103 141L110 92L244 91" : robotPath}
            color={blue}
            dash="5 5"
            width={2.6}
          />
        )}
        {step === 2 && <Line d="M103 141L82 163" color={red} dash="4 5" width={2.8} />}
        {(step !== 2
          ? [
              [61, y],
              [x, 68],
              [137, step === 0 ? 132 : 109],
            ]
          : [
              [61, 141],
              [103, 67],
              [140, 142],
            ]
        ).map(([ex, ey], i) => (
          <Line key={i} d={`M${x} ${y}L${ex} ${ey}`} color={teal} width={1.6} />
        ))}
        <circle cx={x} cy={y} r="13" fill="#9cc1c7" stroke={navy} strokeWidth="2.5" />
        <path d={`M${x - 4} ${y + 4}l4-9 4 9Z`} fill={navy} />
      </Plate>
      <Label x={180} y={215}>
        {["Distances mesurées", "Trajet estimé", "Retour reconnu"][step]}
      </Label>
    </>
  );
}

export const everydayTechnology = {
  selfheal: SelfHealing,
  limecycle: Lime,
  bridgeinspection: Bridge,
  lithomask: Lithography,
  actuatorarm: Actuator,
  mobilemapping: Mapping,
} satisfies SceneSet;
