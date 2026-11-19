import {
  Arrow,
  Cloud,
  Earth,
  Label,
  Line,
  Plate,
  Sun,
  blue,
  gold,
  green,
  muted,
  navy,
  red,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

const ageLabels = ["80+", "65–79", "45–64", "25–44", "15–24", "0–14"];
const ageProfiles = [
  [
    [30, 45],
    [51, 65],
    [77, 82],
    [86, 82],
    [76, 70],
    [83, 81],
  ],
  [
    [12, 20],
    [24, 31],
    [44, 47],
    [70, 65],
    [91, 86],
    [109, 106],
  ],
  [
    [29, 43],
    [50, 61],
    [77, 78],
    [41, 40],
    [86, 85],
    [89, 87],
  ],
];

function AgePyramid(step: number) {
  const highlight = [2, 5, 3][step]!;
  return (
    <>
      <Label x={80} y={59} color={blue}>
        Hommes
      </Label>
      <Label x={281} y={59} color={violet}>
        Femmes
      </Label>
      <Line d="M147 66v120M213 66v120" color={muted} width={1.5} />
      {ageProfiles[step]!.map(([left, right], i) => {
        const y = 71 + i * 19;
        return (
          <g key={i}>
            <rect
              x={147 - left!}
              y={y}
              width={left}
              height="13"
              rx="2"
              fill={i === highlight ? "#277fac" : "#8fb8ce"}
            />
            <rect
              x="213"
              y={y}
              width={right}
              height="13"
              rx="2"
              fill={i === highlight ? "#765f9c" : "#baa6cd"}
            />
            <Label x={180} y={y + 12}>
              {ageLabels[i]}
            </Label>
          </g>
        );
      })}
      <Label x={180} y={205}>
        {["Tranches d’âge", "Plus de jeunes", "Un creux"][step]}
      </Label>
    </>
  );
}

function DemographicChart(step: number) {
  const births = "M52 83L115 87Q143 88 164 91Q208 96 238 139L313 151";
  const deaths = "M52 97L112 102Q145 110 176 147Q208 163 313 163";
  const deathsArea =
    "M52 83L115 87Q143 88 164 91Q208 96 238 139L313 151V163Q208 163 176 147Q145 110 112 102L52 97Z";
  const markers = [76, 175, 286];
  return (
    <>
      <Line d="M42 59v124h279" width={2} />
      <path d={deathsArea} fill="#d7cfe8" opacity=".8" />
      <Line d={births} color={red} width={3.4} />
      <Line d={deaths} color={blue} width={3.4} />
      <Line d={`M${markers[step]} 70V181`} color={violet} dash="4 4" />
      <Label x={121} y={70} color={red}>
        Naissances
      </Label>
      <Label x={245} y={183} color={blue}>
        Décès
      </Label>
      <Label x={180} y={211}>
        {["Écart faible", "Écart plus grand", "Écart réduit"][step]}
      </Label>
    </>
  );
}

function Clouds(step: number) {
  return (
    <>
      <Plate x={58} y={48} width={270} height={146} color="#dceefa">
        <Line d="M59 90h268M59 139h268" color="#aec4d1" width={1} dash="5 6" />
        <path d="M59 189l49-22 33 12 49-12 62 12 44-17 31 13v18H59Z" fill="#a4b98b" />
        {step === 0 && (
          <>
            <Cloud x={174} y={149} scale={1.23} />
            <Cloud x={257} y={151} scale={0.61} />
          </>
        )}
        {step === 1 && (
          <g fill="none" stroke="#f9fcff" strokeLinecap="round" strokeWidth="8">
            <path d="M92 80q49-38 100-16q31 13 93-2M116 90q44-28 89-13q28 9 48 2M185 94q41-5 82-14" />
          </g>
        )}
        {step === 2 && (
          <>
            <path
              d="M145 167q-23-4-14-22q-8-18 18-22q-7-19 14-29q-5-17 9-28q25-12 57-8l37 2q-13 16-57 18q-12 5-8 19q15 4 12 22q25-6 35 11q22 5 16 23q-8 15-38 14Z"
              fill="#b0bbcc"
              stroke="#677e95"
              strokeWidth="2"
            />
            <Line d="M157 174l-6 14m29-16-6 18m50-17-5 12" color={blue} />
            <path d="M199 159l-16 20h10l-7 13 21-21h-10l7-12Z" fill="#d59c38" />
          </>
        )}
      </Plate>
      <Label x={36} y={74}>
        Haut
      </Label>
      <Label x={35} y={166}>
        Bas
      </Label>
      <Label x={190} y={214}>
        {["Base assez plate", "Filaments de glace", "Sommet en enclume"][step]}
      </Label>
    </>
  );
}

function TimeZones(step: number, id: string) {
  return (
    <>
      {step === 0 ? (
        <>
          <Earth x={157} y={123} r={67} id={id} />
          <path d="M157 56C81 61 67 187 157 190Q118 126 157 56Z" fill="#263951" fillOpacity=".6" />
          <Sun x={293} y={104} r={20} id={id} />
          <Arrow x1={264} y1={125} x2={227} y2={125} color={gold} />
          <circle cx="203" cy="111" r="6" fill="#fde8ae" stroke={navy} />
          <Label x={161} y={212}>
            Nuit
          </Label>
          <Label x={253} y={184}>
            Jour
          </Label>
        </>
      ) : (
        <>
          <Plate x={43} y={60} width={274} height={122} color="#e2edf4" />
          <path
            d="M99 70l49 9 32-5 28 16 33 1 42 25-17 40-66-6-16 12-51-11-39-37Z"
            fill="#b7cba7"
            stroke={green}
          />
          {[87, 132, 177, 222, 267].map((x, i) => (
            <Line
              key={x}
              d={
                step === 1
                  ? `M${x} 63v116`
                  : `M${x} 63v${23 + i * 3}l${i % 2 ? 13 : -12} 19v20l${i % 2 ? -13 : 12} 9v23`
              }
              color={step === 1 ? blue : violet}
              dash={step === 1 ? "5 4" : undefined}
            />
          ))}
          <Label x={180} y={211}>
            {step === 1 ? "15° par tranche" : "Limites irrégulières"}
          </Label>
        </>
      )}
    </>
  );
}

function HadleyCell(step: number) {
  return (
    <>
      <path d="M36 160Q112 153 179 166T327 161V190H36Z" fill="#daba88" />
      <path d="M36 159h103v32H36Z" fill="#75b1cb" />
      <Line
        d="M86 137Q80 60 145 60H228Q278 60 275 133Q263 154 216 151H117"
        color="#abc0c9"
        width={3}
        dash="5 4"
      />
      {step === 0 && (
        <>
          <Cloud x={96} y={106} scale={0.85} />
          <Line d="M70 126l-5 17m23-17-6 17m26-16-6 17" color={blue} />
          <Arrow x1={128} y1={135} x2={128} y2={55} color={blue} width={4} />
        </>
      )}
      {step === 1 && (
        <>
          <Arrow x1={162} y1={62} x2={247} y2={62} color={warm} />
          <Arrow x1={273} y1={86} x2={273} y2={149} color={warm} width={4} />
          <Label x={209} y={105} color={warm}>
            Air sec
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <Arrow x1={253} y1={151} x2={148} y2={151} color={green} width={4} />
          <Label x={193} y={126} color={green}>
            Retour
          </Label>
        </>
      )}
      <Label x={90} y={210}>
        Équateur
      </Label>
      <Label x={270} y={210}>
        Vers 30°
      </Label>
    </>
  );
}

function Mountain(step: number) {
  const levels = [
    "M33 125l88-4 53 7 46-6 108 3",
    "M33 125l86-9 42-28 21 9 26-19 24 35 96 12",
    "M33 125l80-12 27-28 26 13 33-43 20 16 23 45 86 9",
  ];
  const top = levels[step]!;
  return (
    <>
      <path
        d={
          top +
          (step === 0
            ? "v36Q251 159 182 165Q100 160 33 160Z"
            : "v37Q259 159 217 174q-28 24-51 10Q98 157 33 160Z")
        }
        fill="#bc8d73"
        stroke="#795e56"
        strokeWidth="2"
      />
      <path
        d={top + "v14Q265 142 225 138Q194 150 175 144Q99 137 33 141Z"}
        fill="#e2bb87"
        stroke="#936e50"
      />
      <path
        d={
          step === 0
            ? "M33 151q76-11 141-1q83-12 154 0"
            : "M33 151q77-7 121-39q21 26 50 1q37 42 124 38"
        }
        fill="none"
        stroke="#fbddae"
        strokeWidth="3"
      />
      {step < 2 && (
        <>
          <Arrow x1={44} y1={79} x2={101} y2={79} color={warm} width={4} />
          <Arrow x1={316} y1={79} x2={259} y2={79} color={warm} width={4} />
        </>
      )}
      {step === 2 && (
        <>
          <path d="M181 78l18-23 18 16-9 5-7-7-8 13Z" fill="#f8faff" />
          <Line d="M181 86l-6 16-20 10-9 9-33 6" color={blue} width={2} />
          <Arrow x1={210} y1={179} x2={210} y2={139} color={warm} />
        </>
      )}
      <Label x={180} y={213}>
        {["Continents", "Croûte épaissie", "Soulèvement et érosion"][step]}
      </Label>
    </>
  );
}

function Contours(step: number) {
  return step === 0 ? (
    <>
      <path
        d="M34 170Q91 166 133 113Q176 46 213 108Q263 164 326 170Z"
        fill="#b6c9a2"
        stroke={green}
        strokeWidth="2.2"
      />
      <path
        d="M46 127Q106 102 190 100Q255 101 315 127Q251 158 194 157Q119 153 46 127Z"
        fill="#c9e4f1"
        opacity=".74"
        stroke={blue}
        strokeDasharray="6 4"
      />
      <Line d="M124 127Q167 109 224 127" color={blue} width={4} />
      <Label x={180} y={194}>
        Même altitude
      </Label>
    </>
  ) : (
    <>
      <Plate x={31} y={45} width={298} height={145} color="#e3ead7" />
      {Array.from({ length: 5 }, (_, i) => {
        const x = step === 2 ? 165 + i * 10 : 180;
        return (
          <ellipse
            key={i}
            cx={x}
            cy="119"
            rx={112 - i * 20}
            ry={60 - i * 11}
            fill="none"
            stroke={i === 2 ? blue : "#709167"}
            strokeWidth={i === 2 ? 3 : 1.8}
          />
        );
      })}
      <circle cx={step === 2 ? 205 : 180} cy="119" r="3.5" fill={navy} />
      {step === 2 && (
        <>
          <Arrow x1={73} y1={184} x2={99} y2={151} color={warm} />
          <Arrow x1={303} y1={184} x2={260} y2={144} color={violet} />
        </>
      )}
      <Label x={180} y={216}>
        {step === 1 ? "Vue du dessus" : "Serrées = pente forte"}
      </Label>
    </>
  );
}

const africa = "M-28-30L1-38 22-32 33-12 46-3 31 7 19 29 8 44-2 39-12 17-23 11-27-1-38-15Z";
const greenland = "M-13-13L-1-22 11-17 20-13 14 1 7 11 0 18-8 10-10-3Z";
function Mercator(step: number) {
  const map = step > 0;
  return (
    <>
      {map ? (
        <>
          <Plate x={42} y={44} width={276} height={139} color="#dbeef6" />
          {[67, 104, 142, 180, 218, 256, 294].map((x) => (
            <Line key={x} d={`M${x} 46v135`} color="#a4c3d4" width={1} />
          ))}
          {(step === 1 ? [58, 88, 114, 138, 170] : [66, 90, 114, 138, 162]).map((y) => (
            <Line key={y} d={`M44 ${y}h272`} color="#a4c3d4" width={1} />
          ))}
        </>
      ) : (
        <>
          <circle cx="180" cy="114" r="75" fill="#d1e8f3" stroke={blue} strokeWidth="2" />
          <ellipse cx="180" cy="114" rx="39" ry="75" fill="none" stroke="#8db1c5" />
          <Line
            d="M105 113q75 22 150 0M118 74q62 15 124 0M118 153q62 16 124 0"
            color="#8db1c5"
            width={1.2}
          />
        </>
      )}
      <path
        d={africa}
        transform={`translate(${map ? 235 : 196} 128) scale(${step === 2 ? 1.07 : 0.78})`}
        fill="#d1a264"
        stroke="#835d32"
        strokeWidth="2"
      />
      <path
        d={greenland}
        transform={`translate(${map ? 125 : 146} ${step === 1 ? 95 : 77}) scale(${step === 1 ? 1.95 : 0.63})`}
        fill="#86b7c4"
        stroke={blue}
        strokeWidth="2"
      />
      <Label x={86} y={208} color={blue}>
        Groenland
      </Label>
      <Label x={260} y={208} color={warm}>
        Afrique
      </Label>
    </>
  );
}

export const everydayEarth = {
  ages: AgePyramid,
  demographic: DemographicChart,
  cloudtypes: Clouds,
  timezone: TimeZones,
  rainshadow: HadleyCell,
  mountainfold: Mountain,
  contourmap: Contours,
  mercator: Mercator,
} satisfies SceneSet;
