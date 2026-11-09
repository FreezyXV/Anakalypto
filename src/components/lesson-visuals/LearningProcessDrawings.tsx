import { Arrow, Label, Dot, blue, warm, green } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Board({ x, y, id, added = false }: { x: number; y: number; id: string; added?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(.86)`}>
      <rect
        x="-8"
        y="-8"
        width="160"
        height="160"
        rx="9"
        fill="#e8d0a4"
        stroke="#b69b6e"
        strokeWidth="1.5"
      />
      {Array.from({ length: 9 }, (_, n) => (
        <path key={n} d={`M${n * 18} 0V144M0 ${n * 18}H144`} stroke="#a38a62" strokeWidth=".8" />
      ))}
      {[
        [2, 2, 0],
        [6, 2, 1],
        [2, 5, 1],
        [5, 6, 0],
      ].map(([a, b, color], i) => (
        <circle
          key={i}
          cx={a! * 18}
          cy={b! * 18}
          r="7"
          fill={color ? `url(#${id}-metal)` : "#344457"}
          stroke={color ? "#7a8796" : "#1d2e42"}
          strokeWidth="1.2"
        />
      ))}
      {added && (
        <>
          <circle cx="90" cy="54" r="10" fill="none" stroke="#b57d34" strokeWidth="2" />
          <circle cx="90" cy="54" r="7" fill="#344457" stroke="#1d2e42" />
        </>
      )}
    </g>
  );
}
function Arcade({ x, y, id, frame = 0 }: { x: number; y: number; id: string; frame?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-64"
        y="-53"
        width="128"
        height="106"
        rx="9"
        fill={`url(#${id}-metal)`}
        stroke="#7089a2"
        strokeWidth="2"
      />
      <rect x="-56" y="-45" width="112" height="87" rx="3" fill="#22394f" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={-48 + col * 20}
            y={-34 + row * 11}
            width="16"
            height="7"
            rx="1"
            fill={["#c7a76b", "#8bb6d1", "#9cbd91"][row]}
          />
        )),
      )}
      <path d="M-43 35H-12" stroke="#e2e8ea" strokeWidth="4" />
      <rect x={-3 + frame * 5} y={10 - frame * 5} width="5" height="5" fill="#f1d694" />
      <circle cx="0" cy="48" r="2" fill="#718aa2" />
    </g>
  );
}
function Chip({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-26"
        y="-24"
        width="52"
        height="48"
        rx="8"
        fill={`url(#${id}-metal)`}
        stroke="#6d88a0"
        strokeWidth="1.6"
      />
      {[-1, 1].map((side) =>
        [0, 1, 2].map((n) => (
          <path
            key={`${side}-${n}`}
            d={`M${side * 26} ${-13 + n * 13}h${side * 8}`}
            stroke="#849aaf"
            strokeWidth="2"
          />
        )),
      )}
      <path d="M-13-11H13V12H-13Z" fill="#6c8fa3" />
      <path d="M-7-5H7V6H-7Z" fill="#d4e2e9" />
    </g>
  );
}
export function LearningProcessDrawing({ kind, step, id }: Props) {
  if (kind === "golearning")
    return (
      <>
        {step === 0 ? (
          <Board x={118} y={45} id={id} />
        ) : (
          <>
            <Board x={30} y={45} id={id} added={step === 2} />
            {step === 1 ? (
              <>
                <path
                  d="M267 53L224 95M267 53L308 95M224 95L202 139M224 95L246 139M308 95L282 139M308 95L331 139"
                  stroke="#a7bdce"
                  strokeWidth="2"
                />
                <path d="M267 53L224 95 246 139" fill="none" stroke={green} strokeWidth="4" />
                {[
                  [267, 53],
                  [224, 95],
                  [308, 95],
                  [202, 139],
                  [246, 139],
                  [282, 139],
                  [331, 139],
                ].map(([x, y], i) => (
                  <Dot key={i} x={x!} y={y!} color={i === 1 || i === 4 ? green : blue} r={5} />
                ))}
                <Label x={266} y={171}>
                  Suites explorées
                </Label>
              </>
            ) : (
              <>
                <Chip x={268} y={112} id={id} />
                <path
                  d="M221 92Q224 49 278 52Q321 55 319 92M318 131Q312 176 263 174Q220 173 219 135"
                  fill="none"
                  stroke={green}
                  strokeWidth="2.5"
                />
                <Arrow x1={319} y1={81} x2={319} y2={94} color={green} />
                <Arrow x1={219} y1={145} x2={219} y2={132} color={green} />
                <Label x={268} y={37}>
                  Autoconfrontation
                </Label>
              </>
            )}
          </>
        )}
        <Label x={180} y={22}>
          {step === 0
            ? "Position de démonstration en 9 × 9"
            : step === 1
              ? "Réseaux et recherche combinés"
              : ""}
        </Label>
        <Label x={180} y={201}>
          {
            [
              "Politique : coups · valeur : position",
              "Un arbre réduit, pas toutes les parties",
              "Apprendre des résultats des parties",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "arcadelearning")
    return (
      <>
        {step === 0 ? (
          <>
            <Arcade x={99} y={111} id={id} />
            <Arrow x1={171} y1={111} x2={226} y2={111} />
            <Chip x={277} y={111} id={id} />
            <Label x={180} y={32}>
              Images → réseau de calcul
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Arcade x={85} y={112} id={id} frame={2} />
            {[2, 3, 5].map((v, i) => (
              <g key={i}>
                <rect
                  x={183 + i * 52}
                  y={155 - v * 15}
                  width="30"
                  height={v * 15}
                  rx="4"
                  fill={i === 2 ? "#91b386" : "#9cbed4"}
                />
                <Label x={198 + i * 52} y={145 - v * 15}>
                  {v}
                </Label>
                <Label x={198 + i * 52} y={177}>
                  {["←", "•", "→"][i]}
                </Label>
              </g>
            ))}
            <Label x={180} y={29}>
              Valeurs Q fictives, pas probabilités
            </Label>
          </>
        ) : (
          <>
            <path d="M32 65H157V158H32Z" fill="#e1eaf1" stroke="#9cb4c7" />
            {[0, 1, 2, 3, 4].map((n) => (
              <rect
                key={n}
                x="45"
                y={77 + n * 14}
                width="98"
                height="10"
                rx="2"
                fill={n === 1 || n === 4 ? "#c9dcbf" : "#abc4d7"}
                stroke={n === 1 || n === 4 ? "#7a9b70" : "#8da9c0"}
              />
            ))}
            <path
              d="M145 95L223 106M145 137L223 117"
              stroke={green}
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <Chip x={270} y={112} id={id} />
            <Label x={93} y={184}>
              Expériences
            </Label>
            <Label x={180} y={28}>
              Échantillonner pour apprendre
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {step === 2
            ? "Tampon limité · tirages de transitions"
            : "Scène arcade fictive de démonstration"}
        </Label>
      </>
    );
  if (kind === "exploration")
    return (
      <>
        {["A", "B", "C"].map((name, i) => {
          const active = step === 1 ? i === 0 : step === 2 ? i === 2 : false;
          return (
            <g key={name}>
              <rect
                x={27 + i * 111}
                y="55"
                width="83"
                height="105"
                rx="12"
                fill={active ? "#d2e5c9" : `url(#${id}-metal)`}
                stroke={active ? green : "#93aabe"}
                strokeWidth={active ? 2.5 : 1.5}
              />
              <Label x={68 + i * 111} y={83}>
                {name}
              </Label>
              <path d={`M${44 + i * 111} 96H${92 + i * 111}`} stroke="#afc3d2" />
              <Label x={68 + i * 111} y={124}>
                {i === 0 ? "6 / 10" : i === 1 ? "1 / 3" : step === 2 ? "1 / 1" : "?"}
              </Label>
              <circle cx={68 + i * 111} cy="144" r="5" fill={active ? "#8aac7d" : "#b3c6d6"} />
            </g>
          );
        })}
        <Label x={180} y={30}>
          {
            [
              "Récompenses / essais observés",
              "Choisir la meilleure moyenne connue",
              "Un nouvel essai ne prouve pas tout",
            ][step]
          }
        </Label>
        <Label x={180} y={188}>
          {step === 0
            ? "C : pas encore essayé"
            : step === 1
              ? "Exploitation : branche à 90 %"
              : "Exploration : branche à 10 %"}
        </Label>
        <path d="M56 201H304" stroke="#d4e0e9" strokeWidth="4" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            x={57 + i * 25}
            y="198"
            width="22"
            height="6"
            rx="1"
            fill={i === 9 ? warm : blue}
          />
        ))}
      </>
    );
  if (kind === "expertinference")
    return (
      <>
        {step === 0 ? (
          <>
            <path d="M89 52L27 160H151Z" fill="#cbded0" stroke="#648d71" strokeWidth="2" />
            <path d="M52 108l10 6M116 108l10-6M84 153v12" stroke="#426d53" strokeWidth="2" />
            <rect x="193" y="59" width="137" height="98" rx="9" fill="#e8eff4" stroke="#a3b9cb" />
            <Label x={260} y={88}>
              3 côtés
            </Label>
            <Label x={260} y={120}>
              3 côtés égaux
            </Label>
            <Arrow x1={154} y1={110} x2={184} y2={110} />
            <Label x={180} y={27}>
              Propriétés encodées en faits
            </Label>
          </>
        ) : (
          <>
            <rect x="15" y="61" width="151" height="93" rx="9" fill="#e6eff4" stroke="#a5bbcd" />
            <Label x={89} y={91}>
              {step === 1 ? "Si 3 côtés" : "Si triangle"}
            </Label>
            <Label x={89} y={122}>
              {step === 1 ? "alors triangle" : "et 3 côtés égaux"}
            </Label>
            <Arrow x1={175} y1={109} x2={212} y2={109} color={green} />
            <rect x="226" y="71" width="111" height="74" rx="9" fill="#d5e5ce" stroke="#86a37c" />
            <Label x={281} y={113}>
              {step === 1 ? "Triangle" : "Équilatéral"}
            </Label>
            <Label x={180} y={27}>
              {step === 1
                ? "Déclencher une règle applicable"
                : "Réutiliser un fait nouvellement conclu"}
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {step === 0
            ? "L’image n’est pas analysée par le système"
            : "Faits + règles écrites → nouveaux faits"}
        </Label>
      </>
    );
  if (kind === "diffusion")
    return (
      <>
        <defs>
          <clipPath id={`${id}-generated`}>
            <rect x="131" y="48" width="195" height="102" rx="9" />
          </clipPath>
          <filter id={`${id}-emergence`}>
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <rect x="22" y="85" width="80" height="51" rx="8" fill="#e4edf4" stroke="#a8bdd0" />
        <Label x={62} y={107}>
          Une
        </Label>
        <Label x={62} y={129}>
          maison
        </Label>
        <rect x="130" y="47" width="197" height="104" rx="10" fill="#e4edf3" stroke="#9cb6cb" />
        <g clipPath={`url(#${id}-generated)`}>
          {step === 0 ? (
            Array.from({ length: 192 }, (_, n) => {
              const v = ((n * 97 + n * n * 13) % 219) + 22;
              return (
                <rect
                  key={n}
                  x={131 + (n % 16) * 12.2}
                  y={48 + Math.floor(n / 16) * 8.5}
                  width="12.3"
                  height="8.6"
                  fill={`rgb(${v} ${((v * 7) % 220) + 20} ${((v * 3) % 220) + 20})`}
                />
              );
            })
          ) : step === 1 ? (
            <g filter={`url(#${id}-emergence)`}>
              <rect x="131" y="48" width="195" height="102" fill="#bfd6e4" />
              <path d="M148 153Q183 94 213 147L329 123V157Z" fill="#8eb2a2" />
              <path d="M187 95L226 66 270 96V140H187Z" fill="#d4b58b" />
              <path d="M178 97L226 62 278 97Z" fill="#ab785c" />
              <path d="M239 104H260V125H239Z" fill="#7694a9" />
            </g>
          ) : (
            <>
              <rect x="131" y="48" width="195" height="102" fill="#c6e1ed" />
              <circle cx="294" cy="70" r="12" fill={`url(#${id}-gold)`} />
              <path d="M131 127Q183 103 228 128T326 123V151H131Z" fill="#a5c5a2" />
              <path d="M186 91H265V136H186Z" fill="#ead7b4" stroke="#a78f6c" />
              <path d="M178 94L226 61 275 94Z" fill="#b07c60" stroke="#966247" />
              <path d="M226 63V94" stroke="#bf916f" strokeWidth="2" />
              <rect x="199" y="108" width="17" height="28" fill="#9a785b" stroke="#7e604c" />
              <circle cx="212" cy="124" r="1.5" fill="#efd99b" />
              <rect x="235" y="103" width="18" height="17" fill="#95c2d6" stroke="#7698aa" />
              <path d="M244 103V120M235 112H253" stroke="#eaf4f6" />
              <path d="M201 136L176 151H226L216 136" fill="#d6c4a4" />
            </>
          )}
        </g>
        {step > 0 && (
          <>
            <path d="M106 111H119V174H158" fill="none" stroke={green} strokeWidth="2.3" />
            <Arrow x1={148} y1={174} x2={167} y2={174} color={green} />
            <rect x="167" y="159" width="123" height="30" rx="7" fill="#d4e4ce" stroke="#88a07f" />
            <Label x={228} y={180}>
              Modèle appris
            </Label>
            <Arrow x1={228} y1={159} x2={228} y2={145} color={green} width={2} />
          </>
        )}
        <Label x={180} y={27}>
          {
            [
              "Un bruit initial aléatoire",
              "Le texte conditionne les étapes",
              "Une image produite, ici illustrée",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          Principe illustré · modèle non exécuté
        </Label>
      </>
    );
  return null;
}
