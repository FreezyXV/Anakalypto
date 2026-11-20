import { Forge } from "./ForgeReviewDrawing";
import { Silicon, Welding } from "./EverydayIndustrialCuts";
import { Caliper } from "./EverydayPrecision";
import { Arrow, Label, Line, blue, muted, navy, red, teal, type SceneSet } from "./EverydayParts";

function CargoBox({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 0h112v47H0Z" fill="#c5855a" stroke="#744d38" strokeWidth="2" />
      <path d="M112 0l16-10v47l-16 10Z" fill="#a2664b" stroke="#744d38" strokeWidth="2" />
      <path d="M0 0l16-10h112L112 0Z" fill="#dda87e" stroke="#744d38" strokeWidth="2" />
      {[9, 19, 29, 39, 49, 59, 69, 79, 89, 99].map((n) => (
        <path key={n} d={`M${n} 5v37`} stroke="#ab6d4d" strokeWidth="2" />
      ))}
      <path d="M3 4h9m87 0h9M3 43h9m87 0h9" stroke="#f5d5b0" strokeWidth="3" />
    </g>
  );
}

function ContainerJourney(step: number) {
  return (
    <>
      {step === 0 && (
        <>
          <path d="M42 157H322L290 188H63Z" fill="#506d85" stroke={navy} strokeWidth="2" />
          <path d="M67 128h33v30H67Z" fill="#ccdae2" stroke={navy} strokeWidth="2" />
          <Line
            d="M62 151V61h221M85 151V72h198M216 66v25m-35 19 35-19 33 19"
            color={teal}
            width={3}
          />
          <CargoBox x={179} y={111} scale={0.7} />
          <Arrow x1={318} y1={92} x2={318} y2={132} color={blue} />
          <Line d="M38 196q22-7 43 0t44 0t44 0t44 0t44 0t45 0" color={blue} />
        </>
      )}
      {step === 1 && (
        <>
          <Line d="M48 173h262m-262 12h262" color="#738493" width={3} />
          {[73, 110, 147, 184, 221, 258, 295].map((x) => (
            <Line key={x} d={`M${x} 170v18`} color="#a18262" width={5} />
          ))}
          <path d="M50 138h256v17H50Z" fill="#687b8d" stroke={navy} strokeWidth="2" />
          <circle cx="90" cy="161" r="12" fill={navy} />
          <circle cx="269" cy="161" r="12" fill={navy} />
          <CargoBox x={129} y={92} />
        </>
      )}
      {step === 2 && (
        <>
          <path
            d="M58 144H306v13H58Z M252 113h33l25 30h-58Z"
            fill="#6096b6"
            stroke={navy}
            strokeWidth="2"
          />
          <path d="M273 117h10l13 17h-23Z" fill="#d4e8f5" />
          {[83, 112, 279].map((x) => (
            <circle key={x} cx={x} cy="159" r="12" fill={navy} stroke="#9badba" strokeWidth="3" />
          ))}
          <CargoBox x={81} y={95} />
          <Line d="M43 180h276" color="#8f9fae" />
        </>
      )}
      <Label x={180} y={220}>
        {["Levage par les coins", "Fixé sur le wagon", "Fixé sur le châssis"][step]}
      </Label>
    </>
  );
}

function ColdJourney(step: number) {
  return step === 0 ? (
    <>
      <path d="M40 93l54-31 54 31v81H40Z" fill="#8fabbd" stroke={navy} strokeWidth="2" />
      <rect x="75" y="109" width="52" height="65" fill="#d8e7ee" stroke={navy} strokeWidth="2" />
      <path
        d="M192 103h92v65h-92zm93 23h20l22 23v19h-42Z"
        fill="#bad3df"
        stroke={navy}
        strokeWidth="2"
      />
      <Line d="M165 172h164M39 174h111" color={navy} />
      {[218, 308].map((x) => (
        <circle key={x} cx={x} cy="172" r="11" fill={navy} />
      ))}
      <Arrow x1={122} y1={144} x2={190} y2={144} color={blue} width={4} />
      <Label x={87} y={211}>
        Entrepôt
      </Label>
      <Label x={263} y={211}>
        Camion froid
      </Label>
    </>
  ) : (
    <>
      <rect x="47" y="99" width="270" height="62" fill="#dbeef6" />
      <Line d="M46 66v112h275" color={navy} />
      <Line d="M46 100h273" color={muted} dash="4 4" />
      {step === 2 && <path d="M129 127l42-10 24-41 37 13 24 35Z" fill="#f1c5ac" opacity=".85" />}
      <Line
        d={
          step === 1
            ? "M49 128l34-3 28 8 43-8 34 3 31-5 44 3 51-2"
            : "M49 128l34-3 28 8 43-8 41-49 37 13 24 36 58-1"
        }
        color={step === 1 ? blue : red}
        width={3.4}
      />
      <Label x={111} y={58}>
        Température
      </Label>
      <Label x={180} y={211}>
        {step === 1 ? "Trajet enregistré" : "L’écart reste enregistré"}
      </Label>
    </>
  );
}

export const everydayIndustry = {
  siliconpanel: Silicon,
  anvilforge: Forge,
  coldlogistics: ColdJourney,
  intermodal: ContainerJourney,
  caliper: Caliper,
  weldjoint: Welding,
} satisfies SceneSet;
