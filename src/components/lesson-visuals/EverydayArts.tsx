import {
  Arrow,
  Label,
  Line,
  Plate,
  Wave,
  blue,
  gold,
  green,
  muted,
  navy,
  paper,
  red,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

const parchmentInk = "#795438";

function Fork({ flex = 0 }: { flex?: number }) {
  return (
    <g transform="translate(83 100)" fill="none" strokeLinecap="round">
      <path
        d={`M${-22 + flex}-48L-22 4Q-22 29 0 29T22 4L${22 - flex}-48`}
        stroke={navy}
        strokeWidth="9"
      />
      <path d="M0 29V68" stroke={navy} strokeWidth="11" />
      <path d="M-3 35V64" stroke="#b6c7d4" strokeWidth="2.5" />
    </g>
  );
}

function PitchFork(step: number) {
  return (
    <>
      <Fork flex={step === 0 ? 6 : 0} />
      {step === 0 && (
        <>
          <Line d="M42 66Q27 83 43 100M124 66Q140 83 124 100" color={blue} />
          <Arrow x1={118} y1={83} x2={138} y2={83} color={blue} />
          <Label x={82} y={191}>
            Diapason
          </Label>
        </>
      )}
      <Plate x={155} y={53} width={178} height={123} color="#f2f6f7">
        <Line d="M169 113H321" color={muted} width={1.4} />
        <Wave x={169} y={113} width={151} amplitude={22} cycles={3} color={blue} />
        {step === 2 && (
          <Wave x={169} y={113} width={151} amplitude={20} cycles={3.43} color={red} />
        )}
        {step === 1 && (
          <>
            <Line d="M169 143v13m50-13v13m-50-5h50" color={gold} />
            <Label x={239} y={82} color={blue}>
              440 Hz
            </Label>
          </>
        )}
      </Plate>
      {step > 0 && (
        <Label x={244} y={201}>
          {step === 1 ? "Un cycle" : "Deux hauteurs"}
        </Label>
      )}
    </>
  );
}

const notes = ["Do", "Do♯", "Ré", "Ré♯", "Mi", "Fa", "Fa♯", "Sol", "Sol♯", "La", "La♯", "Si"];
function Temperament(step: number) {
  const count = step === 1 ? 11 : 7;
  return (
    <>
      <circle cx="125" cy="117" r="74" fill="#edf2f5" stroke={muted} />
      {notes.map((note, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const x = 125 + 74 * Math.sin(angle),
          y = 117 - 74 * Math.cos(angle);
        const active = i === 0 || (step > 0 && i <= count);
        return (
          <g key={note}>
            <circle cx={x} cy={y} r={active ? 6 : 3.5} fill={active ? blue : muted} />
            {(i === 0 || (step === 2 && i === 7)) && (
              <Label x={i === 0 ? 125 : 54} y={i === 0 ? 74 : 194} color={blue}>
                {note}
              </Label>
            )}
          </g>
        );
      })}
      <Label x={125} y={123}>
        {step === 0 ? "Octave" : step === 1 ? "12 pas" : "7 pas"}
      </Label>
      <Plate x={222} y={70} width={112} height={101} color="#e8e3f2">
        <Label x={278} y={112} color={violet}>
          {step === 0 ? "× 2" : step === 1 ? "× 2¹⁄¹²" : "≈ 3 : 2"}
        </Label>
        <Label x={278} y={142}>
          {step === 0 ? "fréquence" : step === 1 ? "par pas" : "quinte"}
        </Label>
      </Plate>
    </>
  );
}

function Phonograph(step: number) {
  const playing = step === 2;
  return (
    <>
      <path
        d="M23 58Q75 69 134 102L134 119Q76 148 23 159Z"
        fill="#b48562"
        stroke="#6e4937"
        strokeWidth="2"
      />
      <ellipse cx="25" cy="108" rx="14" ry="51" fill="#77533e" stroke="#cfac81" strokeWidth="4" />
      <Line d="M132 103v18l51 10 12 21" color={navy} width={5} />
      <ellipse cx="202" cy="154" rx="16" ry="29" fill="#687e91" />
      <path
        d="M200 125h94q27 25 0 58h-94q-18-26 0-58"
        fill="#ad795a"
        stroke={navy}
        strokeWidth="1.5"
      />
      {[210, 228, 246, 264, 282].map((x) => (
        <Line key={x} d={`M${x} 128q13 22 0 52`} color="#714c38" width={1.1} />
      ))}
      <ellipse cx="294" cy="154" rx="15" ry="27" fill="#6d4f43" stroke="#debd92" strokeWidth="2" />
      <Line d="M294 155h26v19h13" color={navy} width={5} />
      {step !== 1 && (
        <Arrow x1={playing ? 155 : 50} y1={84} x2={playing ? 50 : 155} y2={84} color={blue} />
      )}
      {step === 1 ? (
        <Wave x={195} y={85} width={124} amplitude={10} cycles={3.5} color={warm} />
      ) : (
        <Label x={255} y={102} color={blue}>
          {playing ? "Lecture" : "Gravure"}
        </Label>
      )}
      <Label x={85} y={187}>
        Pavillon
      </Label>
      <Label x={256} y={205}>
        Cylindre
      </Label>
    </>
  );
}

function FilmSound(step: number) {
  const event = 179;
  const sound = step === 1 ? 231 : event;
  const tape = step === 2;
  return (
    <>
      <rect x="30" y="59" width="300" height={tape ? 111 : 62} rx="8" fill="#293e52" />
      {[45, 100, 155, 210, 265].map((x, i) => (
        <g key={x}>
          <rect x={x} y="75" width="48" height="30" rx="2" fill={i === 2 ? "#e7b65f" : "#9cabb9"} />
          <circle cx={x + 23} cy="86" r="6" fill={navy} />
          <path d={`M${x + 11} 103q13-20 23 0`} fill={navy} />
          <path d={`M${x} 65h7m35 0h7m-49 49h7m35 0h7`} stroke="#e1eaef" strokeWidth="3" />
        </g>
      ))}
      <rect x="34" y="138" width="292" height="20" rx="4" fill={tape ? "#d8e2e9" : "#e6dccf"} />
      <Line d={`M42 148H${sound - 6}l6-8l5 15l6-7H315`} color={red} width={2.5} />
      <Line d="M179 55v53" color="#fff7e5" width={1.5} dash="4 4" />
      <Line d={`M${sound} 125v40`} color={red} width={1.5} dash="4 4" />
      <Label x={180} y={200}>
        {tape ? "Une seule pellicule" : "Film et disque séparés"}
      </Label>
    </>
  );
}

function Manuscript(step: number) {
  return (
    <>
      <path
        d="M61 44Q123 54 180 44Q242 34 302 49L296 194Q244 191 180 203Q114 190 62 198Z"
        fill={paper}
        stroke="#b79d70"
        strokeWidth="2"
      />
      <Line d="M180 47v153" color="#b79d70" width={1.7} />
      {Array.from({ length: 7 }, (_, i) => (
        <Line
          key={i}
          d={`M77 ${75 + 15 * i}H163M198 ${75 + 15 * i}H280`}
          color="#d0af83"
          width={1}
        />
      ))}
      {step >= 1 &&
        Array.from({ length: 7 }, (_, i) => (
          <Line
            key={i}
            d={`M${i < 3 ? 123 : 81} ${71 + 15 * i}h${i < 3 ? 32 : 76}M200 ${71 + 15 * i}h${i % 2 ? 76 : 69}`}
            color={parchmentInk}
            width={2.7}
            dash="6 3 4 2 2"
          />
        ))}
      {step === 2 && (
        <>
          <rect
            x="80"
            y="62"
            width="38"
            height="48"
            rx="2"
            fill="#8f4e63"
            stroke="#b28134"
            strokeWidth="4"
          />
          <text
            x="99"
            y="97"
            textAnchor="middle"
            fill="#fff1b8"
            fontFamily="Georgia, serif"
            fontSize="37"
            fontWeight="bold"
          >
            A
          </text>
          <path
            d="M73 116q20 18 0 33q-8 13 0 25M285 54q-19 26-1 51t-2 66"
            fill="none"
            stroke={green}
            strokeWidth="2.6"
          />
          {[65, 85, 106, 133, 159, 180].map((y, i) => (
            <circle key={y} cx={i < 3 ? 287 : 74} cy={y} r="4" fill={gold} />
          ))}
        </>
      )}
      {step === 1 && <path d="M315 58q34-29 18 19l-24 38l7-38Z" fill="#a6829d" stroke={violet} />}
    </>
  );
}

function Capital(step: number) {
  return (
    <>
      <path d="M142 91h76l-6 102h-64Z" fill="#dec9ad" stroke="#8d7058" strokeWidth="2" />
      {[156, 168, 180, 192, 204].map((x) => (
        <Line key={x} d={`M${x} 103v85`} color="#a88b6d" width={2} />
      ))}
      <path
        d={
          step === 0
            ? "M105 52h150v14h-16q-15 26-23 26h-72q-11 0-24-26h-15Z"
            : "M106 51h148v17h-15l-23 24h-72l-23-24h-15Z"
        }
        fill="#ebd2a9"
        stroke="#8d7058"
        strokeWidth="2"
      />
      {step === 1 &&
        [128, 232].map((x, i) => (
          <path
            key={x}
            transform={`translate(${x} 67) scale(${i ? -1 : 1} 1)`}
            d="M24 0C22-30-26-26-27 1C-29 24 9 28 14 8C18-8-3-15-9-3C-13 5-6 10 0 7"
            fill="#e6b985"
            stroke="#83604e"
            strokeWidth="4"
          />
        ))}
      {step === 2 &&
        [142, 160, 180, 200, 218].map((x, i) => (
          <path
            key={x}
            d={`M${x} 94q-16 -25 -14 -40q18 14 15 33q6-22 ${i % 2 ? 15 : 9}-34q4 23-10 42Z`}
            fill="#90a47a"
            stroke={green}
            strokeWidth="1.4"
          />
        ))}
      <path
        d={step === 0 ? "M98 192h164v12H98Z" : "M131 183h98v9h10v12H121v-12h10Z"}
        fill="#dac1a3"
        stroke="#8d7058"
        strokeWidth="2"
      />
      <Line d="M68 81h34l21-12M231 154h45" color={muted} />
      <Label x={60} y={74}>
        {step === 0 ? "Dalle" : step === 1 ? "Volute" : "Feuilles"}
      </Label>
      <Label x={294} y={153}>
        Fût
      </Label>
    </>
  );
}

function MuseumLight(step: number) {
  const beam = step === 0 ? "#f4d47e" : step === 1 ? "#f4e7b9" : "#dbe2e7";
  return (
    <>
      <Plate x={27} y={50} width={131} height={143} color="#dfe8ef">
        <path d="M67 65h51l-9 19H77Z" fill={navy} />
        <path d="M79 85h28l40 76H40Z" fill={beam} />
        <rect
          x="58"
          y="117"
          width="73"
          height="54"
          fill="#a58352"
          stroke="#634c36"
          strokeWidth="3"
        />
        <path d="M63 161l18-27 19 20 14-17 12 24Z" fill={step === 0 ? "#bf866e" : "#97688b"} />
      </Plate>
      <Line d="M183 64v118h151" color={navy} />
      <path
        d={
          step === 0
            ? "M185 179L327 77v102Z"
            : step === 1
              ? "M185 179L327 123v56Z"
              : "M185 179L259 121H327v58Z"
        }
        fill="#e7c67a"
        opacity=".46"
      />
      <Line
        d={
          step === 0 ? "M185 179L327 77" : step === 1 ? "M185 179L327 123" : "M185 179L259 121H327"
        }
        color={gold}
        width={4}
      />
      <Label x={236} y={59}>
        Dose
      </Label>
      <Label x={291} y={205}>
        Temps
      </Label>
    </>
  );
}

function Archaeology(step: number) {
  const colors = ["#cfb58d", "#b38b70", "#9a7464"];
  return step === 2 ? (
    <>
      <Plate x={40} y={47} width={280} height={145} color="#fcf9e9">
        {[75, 101, 127, 153, 179].map((y) => (
          <Line key={y} d={`M49 ${y}h263`} color="#c7d5dc" width={1} />
        ))}
        {[70, 108, 146, 184, 222, 260, 298].map((x) => (
          <Line key={x} d={`M${x} 55v127`} color="#c7d5dc" width={1} />
        ))}
        <path
          d="M72 87l104-15 36 102-74 5z"
          fill="#c9b29e"
          fillOpacity=".5"
          stroke="#9d6553"
          strokeDasharray="5 4"
        />
        <path d="M154 119l22 3-5 16-19-3Z" fill="#ad644a" stroke={navy} />
        <Label x={261} y={123}>
          Plan
        </Label>
        <Label x={262} y={148}>
          du site
        </Label>
      </Plate>
    </>
  ) : (
    <>
      {colors.map((color, i) => (
        <path
          key={color}
          d={`M31 ${74 + 40 * i}Q143 ${64 + 40 * i} 217 ${78 + 40 * i}T329 ${71 + 40 * i}v40Q273 ${132 + 40 * i} 217 ${118 + 40 * i}Q143 ${104 + 40 * i} 31 ${114 + 40 * i}Z`}
          fill={color}
          stroke="#856c5d"
        />
      ))}
      <path
        d="M115 74l17 70h84l23-69"
        fill="#f0e6d0"
        fillOpacity=".7"
        stroke="#5a5148"
        strokeWidth="2"
        strokeDasharray={step === 0 ? "6 4" : undefined}
      />
      {step === 1 && (
        <>
          <path
            d="M155 132q11 11 21-3l6 22q-10 9-22 3Z"
            fill="#af5d44"
            stroke="#543b32"
            strokeWidth="2"
          />
          <Line d="M181 141h74l24-28" color={navy} />
        </>
      )}
      <Label x={step === 0 ? 180 : 282} y={step === 0 ? 57 : 104}>
        {step === 0 ? "Tranchée" : "Tesson"}
      </Label>
    </>
  );
}

export const everydayArts = {
  pitchfork: PitchFork,
  twelvepart: Temperament,
  audiogroove: Phonograph,
  syncsound: FilmSound,
  manuscript: Manuscript,
  capitals: Capital,
  preservation: MuseumLight,
  diglayers: Archaeology,
} satisfies SceneSet;
