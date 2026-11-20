import { Capital, Manuscript, Phonograph } from "./EverydayHeritage";
import {
  Arrow,
  Label,
  Line,
  Plate,
  Wave,
  blue,
  gold,
  muted,
  navy,
  red,
  violet,
  type SceneSet,
} from "./EverydayParts";

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
