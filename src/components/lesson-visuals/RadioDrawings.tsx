import { Arrow, Label, blue, green, warm } from "./DrawingPrimitives";
import { amSample, analogueLuma, morseTimeline } from "@/lib/lesson-visuals/radio-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const r = (n: number) => Math.round(n * 100) / 100;
const bars = [
  [255, 255, 255],
  [255, 255, 0],
  [0, 255, 255],
  [0, 255, 0],
  [255, 0, 255],
  [255, 0, 0],
  [0, 0, 255],
  [0, 0, 0],
];
function Paints({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-wood`} x2=".2" y2="1">
        <stop stopColor="#dfbe8b" />
        <stop offset=".45" stopColor="#b18a5d" />
        <stop offset="1" stopColor="#886345" />
      </linearGradient>
      <linearGradient id={`${id}-bezel`} x2=".4" y2="1">
        <stop stopColor="#4d5963" />
        <stop offset="1" stopColor="#253849" />
      </linearGradient>
      <pattern id={`${id}-grille`} width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" fill="#c8b28e" />
        <path d="M0 0L6 6M0 6L6 0" stroke="#917759" strokeWidth=".7" />
      </pattern>
    </defs>
  );
}
function VintageRadio({ x, y, size = 1, id }: { x: number; y: number; size?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <ellipse cx="0" cy="49" rx="71" ry="5" fill="#8195a5" opacity=".12" />
      <path
        d="M-67 41V-27Q-67-42-50-42H50Q67-42 67-27V41Z"
        fill={`url(#${id}-wood)`}
        stroke="#8e6c48"
        strokeWidth="2"
      />
      <path
        d="M-62-24Q-40-34-17-29M-61-17Q-39-26-18-23M39-36Q51-30 60-30M-60 30Q-35 25-20 31M-60 35Q-37 30-20 36"
        stroke="#e7d1ab"
        fill="none"
        opacity=".4"
      />
      <rect
        x="-55"
        y="-29"
        width="65"
        height="58"
        rx="14"
        fill={`url(#${id}-grille)`}
        stroke="#805e3c"
        strokeWidth="1.5"
      />
      <rect x="20" y="-25" width="35" height="21" rx="3" fill="#e8d6a7" stroke="#876e49" />
      {[0, 1, 2, 3, 4].map((n) => (
        <path key={n} d={`M${24 + n * 6} -21v${n % 2 ? 5 : 8}`} stroke="#9e865d" strokeWidth=".8" />
      ))}
      <path d="M42-23V-6" stroke="#ba714b" strokeWidth="1.5" />
      <circle cx="28" cy="18" r="10" fill={`url(#${id}-bezel)`} stroke="#977d58" />
      <circle cx="52" cy="18" r="7" fill={`url(#${id}-bezel)`} stroke="#977d58" />
      <path d="M28 11V18M52 13V18" stroke="#e0d9c4" strokeWidth="1.5" />
      <path d="M-56 41V46H-37V41M38 41V46H56V41" fill="#7d644c" />
    </g>
  );
}
function Tower({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <path d="M0-48L-22 42H22Z" fill="#d3dfe8" stroke="#7998b0" strokeWidth="1.8" />
      <path
        d="M-17 24L13 6-9-12 6-29M17 24L-13 6 9-12-6-29M-10-4H10M-16 22H16"
        fill="none"
        stroke="#8ba8bd"
        strokeWidth="1.5"
      />
      <path d="M0-48V-59" stroke="#7797b0" strokeWidth="2" />
      <circle cy="-61" r="3" fill="#7797b0" />
    </g>
  );
}
function TV({
  x,
  y,
  id,
  mono = false,
  size = 1,
}: {
  x: number;
  y: number;
  id: string;
  mono?: boolean;
  size?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <path d="M-60 48L-66 57M47 48L53 57" stroke="#6f7f89" strokeWidth="4" />
      <rect
        x="-74"
        y="-44"
        width="148"
        height="94"
        rx="12"
        fill={`url(#${id}-wood)`}
        stroke="#94734f"
        strokeWidth="2"
      />
      <rect x="-66" y="-36" width="115" height="77" rx="13" fill={`url(#${id}-bezel)`} />
      <clipPath id={`${id}-screen-${x}-${y}`}>
        <rect x="-59" y="-29" width="101" height="63" rx="11" />
      </clipPath>
      <g clipPath={`url(#${id}-screen-${x}-${y})`}>
        {bars.map((rgb, i) => {
          const v = r(analogueLuma(rgb));
          return (
            <rect
              key={i}
              x={-59 + i * 12.625}
              y="-29"
              width="12.75"
              height="63"
              fill={mono ? `rgb(${v} ${v} ${v})` : `rgb(${rgb.join(" ")})`}
            />
          );
        })}
        <path d="M-56-26Q-16-34 37-25" fill="none" stroke="white" opacity=".22" strokeWidth="4" />
      </g>
      <circle cx="60" cy="-14" r="7" fill={`url(#${id}-metal)`} stroke="#a0acb5" />
      <circle cx="60" cy="8" r="5" fill="#7b7161" />
      <path d="M54 24H66M54 30H66M54 36H66" stroke="#795e41" strokeWidth="2" />
    </g>
  );
}
export function RadioDrawing({ kind, step, id }: Props) {
  if (!["broadcast", "shortwave", "crystalradio", "wirelessmorse", "colourtv"].includes(kind))
    return null;
  return (
    <>
      <Paints id={id} />
      {kind === "broadcast" ? (
        <>
          {step === 0 ? (
            <>
              <rect x="22" y="58" width="76" height="94" rx="12" fill="#dbe7ee" stroke="#a6bfce" />
              <rect
                x="46"
                y="72"
                width="25"
                height="40"
                rx="12"
                fill={`url(#${id}-metal)`}
                stroke="#819fb4"
              />
              <path
                d="M40 94V102Q40 120 58 120Q77 120 77 102V94M58 120V135M45 136H72"
                fill="none"
                stroke="#7798b0"
                strokeWidth="2"
              />
              {[0, 1, 2, 3].map((n) => (
                <path key={n} d={`M51 ${79 + n * 7}H66`} stroke="#a4b8c7" />
              ))}
              <Arrow x1={102} y1={112} x2={139} y2={112} />
              <Tower x={163} y={115} size={0.73} />
              <path
                d="M188 83Q218 104 188 125M198 72Q239 104 198 137"
                fill="none"
                stroke={blue}
                strokeWidth="2.2"
              />
              <VintageRadio x={285} y={112} size={0.65} id={id} />
              <Label x={60} y={177}>
                Studio
              </Label>
              <Label x={170} y={177}>
                Émetteur
              </Label>
              <Label x={285} y={177}>
                Poste
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <Tower x={64} y={117} size={0.9} />
              <path
                d="M91 64Q157 104 91 148M103 51Q188 103 103 162"
                fill="none"
                stroke={blue}
                strokeWidth="2.2"
              />
              {[
                [218, 75, 0.48],
                [291, 125, 0.48],
                [203, 163, 0.48],
              ].map(([x, y, size], i) => (
                <VintageRadio key={i} x={x!} y={y!} size={size!} id={id} />
              ))}
              <Label x={64} y={178}>
                Un émetteur
              </Label>
            </>
          ) : (
            <>
              <VintageRadio x={170} y={112} size={1.25} id={id} />
              <path
                d="M270 91Q292 109 270 126M283 80Q317 109 283 137"
                fill="none"
                stroke={blue}
                strokeWidth="2.5"
              />
              <path d="M51 177H287" stroke="#bbc7cb" strokeWidth="2" />
            </>
          )}
          <Label x={180} y={25}>
            {
              [
                "Du microphone au récepteur",
                "Un programme, plusieurs postes",
                "Le signal reçu devient du son",
              ][step]
            }
          </Label>
          <Label x={180} y={201}>
            Postes génériques · principe illustré
          </Label>
        </>
      ) : null}
      {kind === "shortwave" ? (
        <>
          <path d="M15 157Q180 101 345 157V208H15Z" fill="#d6e3d4" stroke="#a4bba2" />
          <path d="M15 168Q180 112 345 168" fill="none" stroke="#c1d3bd" />
          <path
            d="M15 85Q180 6 345 85"
            fill="none"
            stroke="#c6dce9"
            strokeWidth="30"
            opacity=".65"
          />
          <path d="M15 85Q180 6 345 85" fill="none" stroke="#a0c0d5" strokeDasharray="4 5" />
          <path
            d="M40 149V128M32 124L40 132 48 124M309 148V129M301 125L309 133 317 125"
            fill="none"
            stroke="#7898af"
            strokeWidth="2"
          />
          {step === 0 ? (
            <>
              <path
                d="M40 144C74 110 77 65 120 55C172 39 203 71 309 143"
                fill="none"
                stroke={blue}
                strokeWidth="3"
              />
              <Arrow x1={243} y1={100} x2={266} y2={116} />
              <path d="M40 144L159 110" stroke="#9badba" strokeDasharray="5 5" />
              <Label x={237} y={91}>
                Trajet courbé
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <path
                d="M40 144C69 116 59 70 101 68C142 66 143 111 180 130C218 111 217 66 258 68C300 70 290 116 309 143"
                fill="none"
                stroke={blue}
                strokeWidth="3"
              />
              <Arrow x1={158} y1={116} x2={180} y2={130} />
              <Arrow x1={287} y1={113} x2={300} y2={134} />
              <Label x={180} y={107}>
                Retour au sol
              </Label>
            </>
          ) : (
            <>
              <path
                d="M40 144C74 110 77 65 120 55C172 39 203 71 309 143"
                fill="none"
                stroke="#b8c8d4"
                strokeDasharray="4 4"
                strokeWidth="2"
              />
              <path d="M40 144Q72 103 106 73T175 16" fill="none" stroke={warm} strokeWidth="3" />
              <Arrow x1={155} y1={35} x2={175} y2={16} color={warm} />
              <path d="M294 122l18 18m0-18-18 18" stroke={warm} strokeWidth="2" />
              <Label x={256} y={91}>
                Liaison absente
              </Label>
            </>
          )}
          <Label x={238} y={43}>
            Ionosphère
          </Label>
          <Label x={180} y={177}>
            {
              [
                "Dépasser l’horizon local",
                "Deux bonds dessinés, sans échelle",
                "Exemple : traversée vers l’espace",
              ][step]
            }
          </Label>
          <Label x={180} y={201}>
            Trajets qualitatifs · pas un miroir solide
          </Label>
        </>
      ) : null}
      {kind === "crystalradio" ? (
        <>
          {step === 0 ? (
            <>
              <path
                d="M24 143L217 136 245 153 52 165Z"
                fill={`url(#${id}-wood)`}
                stroke="#9a7b54"
              />
              <path d="M52 165V173L245 161V153M24 143V151L52 173" fill="#9c774f" stroke="#8c6b49" />
              <path d="M46 140V63M26 52L46 67 66 52" fill="none" stroke="#7999b2" strokeWidth="2" />
              <path d="M71 98L126 94 138 137 83 143Z" fill="#b9a181" stroke="#9a805d" />
              {Array.from({ length: 13 }, (_, n) => (
                <path
                  key={n}
                  d={`M${74 + n * 4} ${99 - n * 0.3}L${85 + n * 4} ${140 - n * 0.45}`}
                  stroke="#aa7147"
                  strokeWidth="2"
                />
              ))}
              <path d="M88 140L88 150 174 145V131" fill="none" stroke="#668da9" strokeWidth="2" />
              <ellipse cx="187" cy="140" rx="27" ry="7" fill="#d6dce0" stroke="#9caeb9" />
              <path d="M172 137L175 120 189 114 201 124 197 136Z" fill="#718490" stroke="#526b7c" />
              <path
                d="M182 118L188 126 199 125M177 133L189 129 195 135"
                fill="none"
                stroke="#a1b2bd"
              />
              <path d="M213 141V99L191 121" fill="none" stroke="#a5b4bc" strokeWidth="2.5" />
              <path
                d="M213 141Q255 166 273 142Q284 118 269 112"
                fill="none"
                stroke="#6d879c"
                strokeWidth="2"
              />
              <path
                d="M259 107Q250 58 284 58Q319 58 310 109"
                fill="none"
                stroke="#6a8195"
                strokeWidth="7"
              />
              <path
                d="M259 107Q252 65 284 65Q315 65 310 109"
                fill="none"
                stroke="#b7c9d4"
                strokeWidth="3"
              />
              <rect x="250" y="99" width="17" height="30" rx="7" fill={`url(#${id}-bezel)`} />
              <rect x="301" y="99" width="17" height="30" rx="7" fill={`url(#${id}-bezel)`} />
              <Label x={99} y={187}>
                Accord
              </Label>
              <Label x={201} y={187}>
                Cristal
              </Label>
              <Label x={284} y={43}>
                Écouteur
              </Label>
              <Label x={127} y={27}>
                Un montage sans pile
              </Label>
            </>
          ) : step === 1 ? (
            <>
              {[0, 1].map((row) => (
                <path key={row} d={`M28 ${76 + row * 78}H330`} stroke="#b3c6d5" strokeWidth="1" />
              ))}
              <path
                d={Array.from({ length: 481 }, (_, n) => {
                  const t = n / 480;
                  return `${n ? "L" : "M"}${r(29 + t * 300)} ${r(76 - amSample(t).carrier * 19)}`;
                }).join("")}
                fill="none"
                stroke={blue}
                strokeWidth="1.3"
              />
              <path
                d={Array.from({ length: 241 }, (_, n) => {
                  const t = n / 240;
                  return `${n ? "L" : "M"}${r(29 + t * 300)} ${r(76 - amSample(t).envelope * 19)}`;
                }).join("")}
                fill="none"
                stroke={warm}
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <path
                d={Array.from({ length: 481 }, (_, n) => {
                  const t = n / 480;
                  return `${n ? "L" : "M"}${r(29 + t * 300)} ${r(154 - amSample(t).rectified * 19)}`;
                }).join("")}
                fill="none"
                stroke={blue}
                strokeWidth="1.3"
              />
              <path
                d={Array.from({ length: 241 }, (_, n) => {
                  const t = n / 240;
                  return `${n ? "L" : "M"}${r(29 + t * 300)} ${r(154 - amSample(t).envelope * 19)}`;
                }).join("")}
                fill="none"
                stroke={warm}
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <Label x={180} y={27}>
                AM fictive, puis redressement idéal
              </Label>
              <Label x={180} y={111}>
                L’enveloppe varie plus lentement
              </Label>
              <Label x={180} y={187}>
                Le détecteur n’amplifie pas le signal
              </Label>
            </>
          ) : (
            <>
              <path
                d="M62 87V52M43 43L62 57 81 43M62 87H166M196 87H270V95M270 131V158H62V151M118 87V108M118 121V158"
                fill="none"
                stroke={blue}
                strokeWidth="2.5"
              />
              <path
                d="M62 87V97c15 0 15 12 0 12c15 0 15 12 0 12c15 0 15 12 0 12c15 0 15 12 0 12V151"
                fill="none"
                stroke={warm}
                strokeWidth="2.5"
              />
              <path
                d="M103 108H133M103 121H133M109 133L132 99"
                fill="none"
                stroke="#7595ad"
                strokeWidth="2.5"
              />
              <path d="M168 76V98L190 87Z" fill="#d4e5ce" stroke={green} strokeWidth="1.8" />
              <path d="M192 76V98M166 87H168M192 87H197" stroke={green} strokeWidth="2.5" />
              <circle cx="270" cy="113" r="18" fill={`url(#${id}-metal)`} stroke="#799bb3" />
              <path d="M258 109H282M258 116H282" stroke="#6d91ac" strokeWidth="2" />
              <path
                d="M62 158V170M47 170H77M51 177H73M56 184H68"
                stroke="#7c9ab0"
                strokeWidth="2"
              />
              <Label x={117} y={55}>
                Accord LC
              </Label>
              <Label x={191} y={141}>
                Détecteur
              </Label>
              <Label x={276} y={62}>
                Écouteur
              </Label>
              <Label x={180} y={27}>
                Circuit équivalent sans amplificateur
              </Label>
            </>
          )}
          {step === 2 && (
            <Label x={180} y={201}>
              L’énergie provient des ondes reçues
            </Label>
          )}
        </>
      ) : null}
      {kind === "wirelessmorse" ? (
        <>
          {step < 2 ? (
            <>
              <rect
                x="29"
                y="52"
                width="45"
                height="67"
                rx="8"
                fill={`url(#${id}-metal)`}
                stroke="#8ba8be"
              />
              <text x="51" y="99" fontSize="36" textAnchor="middle" fill={blue}>
                {step === 0 ? "S" : "O"}
              </text>
              <path d="M94 124H332" fill="none" stroke="#b8cbd9" />
              {Array.from({ length: 12 }, (_, n) => (
                <path key={n} d={`M${99 + n * 19} 125v6`} stroke="#a0b9cc" />
              ))}
              {morseTimeline(step === 0 ? "S" : "O").pulses.map((p, i) => (
                <rect
                  key={i}
                  x={99 + p.start * 19}
                  y="77"
                  width={p.duration * 19}
                  height="44"
                  rx="3"
                  fill={blue}
                />
              ))}
              <Label x={180} y={27}>
                {step === 0 ? "S : trois points" : "O : trois traits"}
              </Label>
              <Label x={218} y={157}>
                Même échelle de durée
              </Label>
              <Label x={180} y={186}>
                {step === 0
                  ? "Point : 1 unité · silence : 1 unité"
                  : "Trait : 3 unités · silence : 1 unité"}
              </Label>
            </>
          ) : (
            <>
              <path d="M27 99L86 96 99 105 39 110Z" fill={`url(#${id}-wood)`} stroke="#997c55" />
              <path d="M46 92L81 82M58 90V100" stroke="#7795a9" strokeWidth="4" />
              <ellipse cx="83" cy="80" rx="9" ry="5" fill={`url(#${id}-bezel)`} />
              <path
                d="M102 97H120V59M108 50L120 63 132 50"
                stroke="#809fb4"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M143 76Q170 100 143 124M154 64Q194 100 154 136"
                fill="none"
                stroke={blue}
                strokeWidth="2"
              />
              <rect
                x="222"
                y="65"
                width="105"
                height="67"
                rx="8"
                fill={`url(#${id}-metal)`}
                stroke="#8da9be"
              />
              <path
                d="M237 110H243V87H251V110H259V87H283V110H310"
                stroke={blue}
                fill="none"
                strokeWidth="2"
              />
              <Label x={274} y={158}>
                Récepteur
              </Label>
              {morseTimeline("A").pulses.map((p, i) => (
                <rect
                  key={i}
                  x={39 + p.start * 19}
                  y="151"
                  width={p.duration * 19}
                  height="18"
                  rx="3"
                  fill={blue}
                />
              ))}
              <Label x={180} y={27}>
                A : un point, puis un trait
              </Label>
              <Label x={180} y={187}>
                Rythme reçu, lettre reconnue
              </Label>
            </>
          )}
        </>
      ) : null}
      {kind === "colourtv" ? (
        <>
          {step === 0 ? (
            <>
              {["#d95553", "#74a76c", "#5b8dbc"].map((color, i) => (
                <g key={color}>
                  <rect x={29 + i * 29} y="67" width="25" height="80" rx="4" fill={color} />
                  <Label x={41 + i * 29} y={172}>
                    {["R′", "V′", "B′"][i]}
                  </Label>
                </g>
              ))}
              <Arrow x1={125} y1={109} x2={163} y2={109} />
              <TV x={254} y={111} id={id} size={0.95} />
              <Label x={180} y={27}>
                Trois composantes émises par l’écran
              </Label>
              <Label x={180} y={201}>
                Synthèse additive, pas des peintures
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <TV x={180} y={109} id={id} mono size={1.2} />
              <Label x={180} y={27}>
                Le signal Y′ conserve la luma
              </Label>
              <Label x={180} y={192}>
                Y′ = 0,299 R′ + 0,587 V′ + 0,114 B′
              </Label>
            </>
          ) : (
            <>
              <TV x={92} y={111} id={id} mono size={0.88} />
              <TV x={268} y={111} id={id} size={0.88} />
              <Label x={92} y={50}>
                Y′ seul
              </Label>
              <Label x={268} y={50}>
                Y′ + couleur
              </Label>
              <Label x={92} y={178}>
                Monochrome
              </Label>
              <Label x={268} y={178}>
                Couleur
              </Label>
              <Label x={180} y={27}>
                Un même motif, deux restitutions
              </Label>
              <Label x={180} y={201}>
                Compatibilité analogique simplifiée
              </Label>
            </>
          )}
        </>
      ) : null}
    </>
  );
}
