import {
  Arrow,
  Label,
  Line,
  blue,
  gold,
  green,
  muted,
  navy,
  red,
  teal,
  warm,
  type SceneSet,
} from "./EverydayParts";

function Silicon(step: number) {
  return (
    <>
      {step === 0 && (
        <>
          <path
            d="M42 90l124-13 33 32-127 18Z M42 90l30 37v41l-30-35Z"
            fill="#99acbd"
            stroke={navy}
            strokeWidth="2"
          />
          <path d="M72 127l127-18v40l-127 19Z" fill="#6e859d" stroke={navy} strokeWidth="2" />
          {[96, 117, 138, 159, 180].map((x, i) => (
            <Line key={x} d={`M${x - 30} ${87 - i * 2}l30 36v38`} color="#cfdee9" width={1.7} />
          ))}
          <Arrow x1={205} y1={124} x2={242} y2={124} color={blue} />
          <path
            d="M247 95l52-9 32 36-52 9ZM247 101l32 36 52-9"
            fill="#adbfd1"
            stroke={navy}
            strokeWidth="2"
          />
        </>
      )}
      {step === 1 && (
        <>
          <path d="M60 95L246 67l54 53-186 40Z" fill="#5193bb" stroke={navy} strokeWidth="2" />
          <path
            d="M114 160l186-40v16l-186 39-54-64V95Z"
            fill="#8f9dc4"
            stroke={navy}
            strokeWidth="2"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Line key={i} d={`M${75 + i * 30} ${94 - i * 4}l54 59`} color="#c8e3ed" width={1.4} />
          ))}
          <Line d="M87 125l190-35M100 139l189-36" color="#e8f8fa" width={3} />
        </>
      )}
      {step === 2 && (
        <>
          <rect
            x="59"
            y="55"
            width="242"
            height="125"
            rx="4"
            fill="#9fafbd"
            stroke={navy}
            strokeWidth="3"
          />
          {Array.from({ length: 24 }, (_, i) => {
            const x = 67 + (i % 6) * 39,
              y = 63 + Math.floor(i / 6) * 28;
            return (
              <g key={i}>
                <rect x={x} y={y} width="31" height="22" rx="2" fill="#376c93" />
                <path
                  d={`M${x + 6} ${y + 3}v16m8-16v16m8-16v16`}
                  stroke="#a6c9da"
                  strokeWidth="1"
                />
              </g>
            );
          })}
          <Line d="M72 55l-45 96M291 55l-29 60" color="#f4faff" width={2} />
        </>
      )}
      <Label x={180} y={213}>
        {["Lingot et plaquette", "Jonction et contacts", "Cellules protégées"][step]}
      </Label>
    </>
  );
}

function Forge(step: number, id: string) {
  return (
    <>
      <path
        d="M47 144H301L266 166H218v26h30v9H120v-9h33v-23L81 159Z"
        fill={`url(#${id}-metal)`}
        stroke={navy}
        strokeWidth="2"
      />
      <path
        d={
          step === 2
            ? "M113 136h133v8H110Z"
            : step === 1
              ? "M130 132h83l12 12h-102Z"
              : "M145 124h55v20h-55Z"
        }
        fill={step < 2 ? "#d6854e" : "#8f9eb0"}
        stroke={step < 2 ? warm : navy}
        strokeWidth="2"
      />
      {step === 0 && (
        <>
          <path
            d="M141 118q-17-20 7-41q-2 18 9 18q16-16 7-34q31 21 29 54q14-9 14-24q22 19 1 35"
            fill="#e8bc6c"
            opacity=".83"
            stroke={warm}
            strokeWidth="2"
          />
          <Label x={263} y={96} color={warm}>
            Chaleur
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <path
            d="M153 60h73v30h-73Z"
            transform="rotate(13 190 75)"
            fill="#687c8d"
            stroke={navy}
            strokeWidth="2"
          />
          <Line d="M219 75l70-16" color="#986b47" width={8} />
          <Arrow x1={188} y1={96} x2={188} y2={125} color={warm} width={3.5} />
        </>
      )}
      {step === 2 && (
        <>
          <Line d="M111 113h133m-133-9v18m133-18v18" color={blue} width={2} />
          <Label x={177} y={87}>
            Profil allongé
          </Label>
        </>
      )}
    </>
  );
}

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

function Gauge(step: number, id: string) {
  if (step === 2)
    return (
      <>
        <Line d="M47 139h267" color={muted} width={4} />
        <rect
          x="111"
          y="118"
          width="136"
          height="42"
          rx="7"
          fill="#9fc7a5"
          stroke={green}
          strokeWidth="2"
        />
        <Line d="M111 111v59M247 111v59" color={green} width={2} />
        <Arrow x1={183} y1={91} x2={183} y2={130} color={blue} width={4} />
        <Label x={183} y={73}>
          Mesure
        </Label>
        <Label x={180} y={199}>
          Intervalle admis
        </Label>
      </>
    );
  const jaw = step === 0 ? 97 : 178;
  return (
    <>
      <path d="M83 107h223v37H83Z" fill={`url(#${id}-metal)`} stroke={navy} strokeWidth="2" />
      {[108, 123, 138, 153, 168, 183, 198, 213, 228, 243, 258, 273, 288].map((x, i) => (
        <Line key={x} d={`M${x} 108v${i % 2 ? 9 : 14}`} color={navy} width={1.3} />
      ))}
      <path d="M83 106h14v65l-14 12Z" fill="#9dabba" stroke={navy} strokeWidth="2" />
      <path d={`M${jaw} 123h59v28h-46v20l-13 12Z`} fill="#99bbd0" stroke={navy} strokeWidth="2" />
      {step === 1 && (
        <rect
          x="98"
          y="151"
          width="79"
          height="31"
          rx="3"
          fill="#d8b282"
          stroke="#8d684c"
          strokeWidth="2"
        />
      )}
      <Label x={180} y={211}>
        {step === 0 ? "Becs fermés" : "Mesure extérieure"}
      </Label>
    </>
  );
}

function Welding(step: number) {
  return (
    <>
      <path d="M39 133h106l35 25 35-25h106v45H39Z" fill="#a7b8c7" stroke={navy} strokeWidth="2" />
      <Line d="M180 155v21" color="#ecf3f7" width={step === 0 ? 3 : 0} />
      {step === 0 && (
        <>
          <Arrow x1={180} y1={80} x2={180} y2={138} color={blue} />
          <Label x={180} y={70}>
            Joint
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <Line d="M238 62l-39 68" color={navy} width={11} />
          <path d="M197 126l-12 8 4 3-15 12" stroke={gold} strokeWidth="4" fill="none" />
          <path d="M144 134q42-21 72 0l-37 37Z" fill="#e1a35f" stroke={warm} strokeWidth="2" />
          <Label x={103} y={95} color={warm}>
            Fusion locale
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M144 134q42-21 72 0l-37 37Z" fill="#87a7b7" stroke={navy} strokeWidth="2" />
          <path d="M125 133l20 1 34 38 37-38 19-1-55 43Z" fill="#bdb2bd" opacity=".64" />
          <Arrow x1={180} y1={79} x2={180} y2={113} color={blue} />
          <Label x={180} y={70}>
            Cordon solide
          </Label>
        </>
      )}
    </>
  );
}

export const everydayIndustry = {
  siliconpanel: Silicon,
  anvilforge: Forge,
  coldlogistics: ColdJourney,
  intermodal: ContainerJourney,
  caliper: Gauge,
  weldjoint: Welding,
} satisfies SceneSet;
