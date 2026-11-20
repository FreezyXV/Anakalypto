import { MidnightSea } from "./EverydayDeepSea";
import {
  Arrow,
  Label,
  Line,
  Plate,
  Tree,
  blue,
  green,
  muted,
  navy,
  red,
  teal,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

function OceanCarbon(step: number, id: string) {
  return (
    <>
      <path
        d="M34 101q36-9 73 0t73 0t73 0t73 0V194H34Z"
        fill={`url(#${id}-water)`}
        stroke="#6e9cb2"
      />
      <Line d="M34 155h292" color="#8eadbc" width={1} dash="5 6" />
      {step === 0 && (
        <>
          <Label x={175} y={63}>
            CO₂ dans l’air
          </Label>
          <Arrow x1={136} y1={70} x2={136} y2={136} color={blue} width={5} />
          <Arrow x1={219} y1={135} x2={219} y2={73} color={teal} />
          <Label x={179} y={181}>
            CO₂ dissous
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <Line d="M66 124h129q65 0 66 49v13" color={blue} width={4.5} />
          <Arrow x1={261} y1={152} x2={261} y2={183} color={blue} width={4.5} />
          {[109, 132, 119, 102, 143].map((x, i) => (
            <circle key={x} cx={x} cy={137 + i * 10} r={3} fill={green} />
          ))}
          <Label x={98} y={80}>
            Particules
          </Label>
          <Label x={245} y={80}>
            Courant
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <Label x={180} y={71}>
            CO₂ absorbé
          </Label>
          <Arrow x1={180} y1={79} x2={180} y2={130} color={blue} />
          <path
            d="M75 171q-5-19 14-27q22-7 36 20l-12 11H85Z"
            fill="#d8b999"
            stroke={warm}
            strokeWidth="2"
          />
          <Line d="M91 174q-1-15 3-26m7 26 2-26m4 25 5-20" color="#c19270" width={1.3} />
          <Plate x={221} y={143} width={68} height={40}>
            <Label x={255} y={169} color={violet}>
              pH ↓
            </Label>
          </Plate>
        </>
      )}
    </>
  );
}

const weatherSeries = [151, 139, 160, 111, 134, 121, 104, 151, 106, 131, 89, 120, 110, 139];
function WeatherClimate(step: number) {
  if (step === 2) {
    return (
      <>
        <Line d="M44 168h275" color={navy} />
        <path
          d="M53 166C98 166 109 82 151 82S188 164 267 166Z"
          fill="#a2bfd3"
          fillOpacity=".64"
          stroke={blue}
          strokeWidth="2.5"
        />
        <path
          d="M96 166C146 166 163 86 204 86S248 166 312 166Z"
          fill="#edc3a3"
          fillOpacity=".62"
          stroke={warm}
          strokeWidth="2.5"
        />
        <Line d="M151 86v81M204 90v77" color={navy} dash="5 5" width={1.4} />
        <Label x={108} y={72} color={blue}>
          Période A
        </Label>
        <Label x={259} y={72} color={warm}>
          Période B
        </Label>
        <Label x={180} y={202}>
          Température →
        </Label>
      </>
    );
  }
  return (
    <>
      <Line d="M43 66v115h277" color={navy} />
      {step === 1 && (
        <Line
          d={weatherSeries.map((y, i) => `${i ? "L" : "M"}${53 + i * 19} ${y}`).join("")}
          color={blue}
          width={2.7}
        />
      )}
      {weatherSeries.map(
        (y, i) =>
          (step === 1 || i === 7) && (
            <circle
              key={i}
              cx={53 + i * 19}
              cy={y}
              r={i === 7 ? 6 : 3.5}
              fill={i === 7 ? warm : blue}
            />
          ),
      )}
      {step === 0 && (
        <>
          <Line d="M186 151V179" color={muted} dash="3 4" />
          <Label x={206} y={128} color={warm}>
            Une mesure
          </Label>
        </>
      )}
      <Label x={106} y={61}>
        Température
      </Label>
      <Label x={180} y={211}>
        {step === 0 ? "Un jour" : "De nombreux jours"}
      </Label>
    </>
  );
}

function Home({ x, y, base = "#d8a973" }: { x: number; y: number; base?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-15-17h30V8h-30Z" fill={base} stroke="#7e624c" />
      <path d="M-20-16L0-33L20-16Z" fill="#91614e" stroke="#7e624c" />
      <path d="M-4-5h8V8h-8Z" fill={navy} />
    </g>
  );
}
function Floodplain(step: number) {
  const high = step > 0;
  return (
    <>
      <path
        d="M27 107q32 7 65 20h40q8 0 14 18l11 17h49l19-29h40l67-24v88H27Z"
        fill="#cbb68b"
        stroke="#947d59"
        strokeWidth="1.5"
      />
      <path
        d="M27 105q29 9 67 21h38l-8 10H86l-59-19Z M230 132h35l67-25v10l-64 24h-43Z"
        fill="#89ab75"
      />
      <path
        d={high ? "M91 128h190l-6 12h-53l-16 22h-49l-13-24H94Z" : "M151 151h65l-10 11h-49Z"}
        fill="#70b2cf"
        stroke={blue}
      />
      {step < 2 ? (
        <Home x={247} y={121} />
      ) : (
        <>
          <Home x={305} y={107} />
          <Tree x={249} y={128} scale={0.48} />
          <Tree x={105} y={128} scale={0.48} />
        </>
      )}
      {high && <Arrow x1={170} y1={125} x2={step === 1 ? 255 : 103} y2={125} color={blue} />}
      <Label x={180} y={218}>
        {["Lit ordinaire", "Plaine inondée", "Habitat en retrait"][step]}
      </Label>
    </>
  );
}

function RecycleMaterial(step: number) {
  const layers = ["#8badc4", "#d4b884", "#9d86b0"];
  return step < 2 ? (
    <>
      <path
        d="M41 65h102l12 100H33Z"
        fill={step === 0 ? "#b3d0d7" : "#e0b79a"}
        stroke={navy}
        strokeWidth="2"
      />
      <path d="M35 150h114M47 77h91" stroke={navy} strokeWidth="2" />
      <circle cx="111" cy="115" r="21" fill="none" stroke="#f6fafc" strokeWidth="3" />
      <Line d="M128 104l54-22" color={navy} />
      {layers.map((color, i) => (
        <path
          key={color}
          d={`M192 ${93 + i * 17}l91-22 42 18-89 20Z`}
          fill={step === 0 ? layers[0] : color}
          stroke="#566a7b"
          strokeWidth="1.4"
        />
      ))}
      <Label x={253} y={172}>
        {step === 0 ? "Même matière" : "Couches collées"}
      </Label>
      <Label x={93} y={200}>
        Emballage
      </Label>
    </>
  ) : (
    <>
      <Plate x={30} y={74} width={94} height={86}>
        <path d="M53 96h51l-7 45H61Z" fill="#88ae9b" stroke={green} strokeWidth="2" />
        <Line d="M49 95h61" color={green} />
      </Plate>
      <Arrow x1={130} y1={114} x2={160} y2={114} color={blue} />
      <Plate x={165} y={74} width={163} height={86}>
        {layers.map((color, i) => (
          <rect
            key={color}
            x={188 + i * 42}
            y="95"
            width="31"
            height="43"
            rx="3"
            fill={color}
            stroke={navy}
          />
        ))}
      </Plate>
      <Label x={76} y={190}>
        Collecter
      </Label>
      <Label x={246} y={190}>
        Séparer au tri
      </Label>
    </>
  );
}

function CarbonBudget(step: number) {
  const y = [92, 104, 104][step]!;
  const currentLine =
    step === 0
      ? "M46 180l66-16 66-24 70-24 70-24"
      : step === 1
        ? "M46 180l66-16 66-24 70-23 70-13"
        : "M46 180l66-16 66-24 70-36h70";
  return (
    <>
      <Line d="M44 55v128h286" color={navy} />
      <Line d="M46 70h276" color={red} dash="5 5" />
      <Label x={261} y={60} color={red}>
        Budget
      </Label>
      <path d={currentLine + "v88H46Z"} fill="#d6c9e8" opacity=".32" />
      <Line d={currentLine} color={violet} width={4} />
      <circle cx="318" cy={y} r="5" fill={violet} />
      <Label x={108} y={87}>
        CO₂ cumulé
      </Label>
      <Label x={180} y={213}>
        {["Le total augmente", "Il monte moins vite", "Le total se stabilise"][step]}
      </Label>
    </>
  );
}

export const everydayEnvironment = {
  midnightsea: MidnightSea,
  seacarbon: OceanCarbon,
  climatewindow: WeatherClimate,
  floodspace: Floodplain,
  recyclesort: RecycleMaterial,
  carbonbudget: CarbonBudget,
} satisfies SceneSet;
