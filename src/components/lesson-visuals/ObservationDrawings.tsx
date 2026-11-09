import { Arrow, Label, Earth, ink, blue } from "./DrawingPrimitives";
import { Sky, Star, NightLabel } from "./AstronomyDrawings";
import { webbSegmentCenters } from "@/lib/lesson-visuals/astronomy-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (n: number) => Math.round(n * 100) / 100;
function MoonDisc({ x, y, r, phase }: { x: number; y: number; r: number; phase: number }) {
  const half = Math.min(phase, 8 - phase),
    c = Math.cos((half * Math.PI) / 4),
    rx = Math.abs(c) * r;
  const lit = `M0 ${-r}A${r} ${r} 0 0 1 0 ${r} ${half === 2 ? `L0 ${-r}Z` : `A${rx} ${r} 0 0 ${c >= 0 ? 0 : 1} 0 ${-r}Z`}`;
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#45536d" stroke="#8191ac" strokeWidth=".7" />
      {phase === 4 ? (
        <circle r={r} fill="#f4e8ba" />
      ) : (
        phase !== 0 && (
          <path d={lit} fill="#f4e8ba" transform={phase > 4 ? "scale(-1 1)" : undefined} />
        )
      )}
    </g>
  );
}
export function ObservationDrawing({ kind, step, id }: Props) {
  if (kind === "interferometer") {
    const top = step > 0 ? 33 : 42,
      right = step > 0 ? 227 : 236;
    return (
      <>
        <Sky id={id} />
        <rect x="32" y="123" width="44" height="24" rx="5" fill={`url(#${id}-metal)`} />
        <NightLabel x={55} y={114}>
          Laser
        </NightLabel>
        <path d={`M76 134H${right}M144 134V${top}`} fill="none" stroke="#eeae9d" strokeWidth="3" />
        <path
          d={`M${right} 139H149V${top}M144 139V165`}
          fill="none"
          stroke="#9cc8ed"
          strokeWidth="2"
        />
        <rect
          x="135"
          y="124"
          width="20"
          height="20"
          rx="2"
          transform="rotate(-45 145 134)"
          fill="#b9dbec"
          fillOpacity=".7"
          stroke="#e3eef8"
        />
        <path d={`M132 ${top}H158M${right} 121V150`} stroke="#e4d2aa" strokeWidth="6" />
        <rect
          x="132"
          y="159"
          width="25"
          height="14"
          rx="3"
          fill={step === 2 ? "#f4cf83" : "#7389a4"}
          stroke="#c9d9ec"
        />
        {step === 1 && (
          <>
            <Arrow x1={174} y1={65} x2={174} y2={42} color="#d5c2ed" width={2} />
            <Arrow x1={282} y1={95} x2={262} y2={95} color="#d5c2ed" width={2} />
          </>
        )}
        <NightLabel x={145} y={30}>
          Miroir
        </NightLabel>
        <NightLabel x={293} y={111}>
          Miroir
        </NightLabel>
        <NightLabel x={86} y={169}>
          Capteur
        </NightLabel>
        {step === 2 && (
          <>
            <rect x="202" y="37" width="126" height="56" rx="7" fill="#f6f9fc" />
            <path d="M210 65H319" stroke="#b8c7d6" />
            <path
              d="M210 65L220 65Q228 42 236 65Q244 85 252 63Q260 40 268 67Q275 85 282 60Q289 45 296 65H319"
              fill="none"
              stroke={blue}
              strokeWidth="2"
            />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Aller et retour dans deux bras",
              "Variations énormément amplifiées",
              "Signal illustratif, pas une mesure",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "blackhole")
    return (
      <>
        <Sky id={id} />
        {step > 0 && (
          <>
            <ellipse
              cx="166"
              cy="100"
              rx="90"
              ry="30"
              fill="none"
              stroke="#dc935b"
              strokeWidth="11"
              opacity=".2"
            />
            <ellipse
              cx="166"
              cy="100"
              rx="78"
              ry="23"
              fill="none"
              stroke="#f0bc7d"
              strokeWidth="8"
              opacity=".75"
            />
            <ellipse
              cx="166"
              cy="100"
              rx="64"
              ry="18"
              fill="none"
              stroke="#ffe8a6"
              strokeWidth="3"
            />
          </>
        )}
        <circle
          cx="166"
          cy="100"
          r="31"
          fill="#060b17"
          stroke="#96a6c4"
          strokeWidth={step === 0 ? 2 : 1}
          strokeDasharray={step === 0 ? "4 3" : undefined}
        />
        {step === 0 && (
          <>
            <NightLabel x={264} y={56}>
              Horizon
            </NightLabel>
            <path d="M242 60L191 79" stroke="#bfcee1" />
          </>
        )}
        {step === 1 && (
          <>
            <path d="M91 105Q166 138 240 105" fill="none" stroke="#f4d69c" strokeWidth="7" />
            <NightLabel x={258} y={43}>
              Gaz lumineux
            </NightLabel>
            <path d="M239 48L223 81" stroke="#ccd8e8" />
          </>
        )}
        {step === 2 && (
          <>
            <ellipse
              cx="166"
              cy="100"
              rx="126"
              ry="58"
              fill="none"
              stroke="#a8bcdc"
              strokeWidth="1.4"
              strokeDasharray="4 3"
            />
            <Star x={272} y={69} size={8} id={id} />
            <Arrow x1={277} y1={76} x2={289} y2={95} color="#c4d8f2" width={1.5} />
            <NightLabel x={105} y={37}>
              Étoile en orbite
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Une frontière, pas une paroi",
              "La lumière vient de l’extérieur",
              "Observer l’effet de la masse",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "webb") {
    const size = 10.5,
      centerX = 180,
      centerY = 72;
    return (
      <>
        <Sky id={id} />
        {[4, 3, 2, 1, 0].map((n) => (
          <path
            key={n}
            d={`M${79 - n * 4} ${134 + n * 5}L${179} ${111 + n * 5}L${287 + n * 4} ${137 + n * 5}L180 ${157 + n * 4}Z`}
            fill={n === 0 ? "#d1c5c5" : n % 2 ? "#c0c8db" : "#a7b7cf"}
            stroke="#7385a2"
            strokeWidth="1"
          />
        ))}
        <path d="M180 113V99" stroke="#afbcd3" strokeWidth="5" />
        {webbSegmentCenters(size).map((p, i) => (
          <polygon
            key={i}
            points={Array.from({ length: 6 }, (_, j) => {
              const a = ((30 + j * 60) * Math.PI) / 180;
              return `${round(centerX + p.x + size * Math.cos(a))},${round(centerY + p.y + size * Math.sin(a))}`;
            }).join(" ")}
            fill={step === 1 ? "#cdb887" : `url(#${id}-gold)`}
            stroke="#7e653d"
            strokeWidth=".8"
          />
        ))}
        <path d="M144 92L180 32 216 92" fill="none" stroke="#a4b2c9" strokeWidth="1.8" />
        <circle cx="180" cy="32" r="3.5" fill="#ced8e6" stroke="#8799b2" />
        {step === 0 ? (
          <>
            <NightLabel x={74} y={51}>
              18 segments
            </NightLabel>
            <path d="M102 57L133 65" stroke="#c4d2e5" />
          </>
        ) : step === 1 ? (
          <>
            <NightLabel x={77} y={47}>
              5 couches
            </NightLabel>
            <path d="M77 54L94 130" stroke="#c4d2e5" />
          </>
        ) : (
          <>
            <Arrow x1={40} y1={159} x2={86} y2={148} color="#f4ac7c" width={2} />
            <Arrow x1={35} y1={142} x2={80} y2={137} color="#f4ac7c" width={2} />
            <NightLabel x={282} y={52}>
              Côté froid
            </NightLabel>
            <path d="M260 57L222 90" stroke="#adcee8" />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Un miroir primaire segmenté",
              "Des couches séparées par le vide",
              "Soleil du côté opposé au miroir",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "infrared")
    return (
      <>
        <Sky id={id} />
        {step === 0 ? (
          <>
            {[0, 1].map((n) => (
              <g key={n}>
                <path
                  d={Array.from(
                    { length: 101 },
                    (_, i) =>
                      `${i ? "L" : "M"}${31 + i * 2.9} ${round((n ? 125 : 62) + 13 * Math.sin((i * Math.PI) / (n ? 17 : 8)))}`,
                  ).join(" ")}
                  fill="none"
                  stroke={n ? "#eeb487" : "#a8cfff"}
                  strokeWidth="2.2"
                />
                <NightLabel x={77} y={n ? 158 : 94}>
                  {n ? "Infrarouge" : "Visible"}
                </NightLabel>
              </g>
            ))}
          </>
        ) : step === 1 ? (
          <>
            <Star x={47} y={89} size={15} id={id} />
            {[
              [142, 81, 39],
              [188, 113, 42],
              [216, 72, 37],
            ].map(([x, y, rr], i) => (
              <ellipse key={i} cx={x} cy={y} rx={rr} ry={rr! * 0.6} fill={`url(#${id}-nebula)`} />
            ))}
            <Arrow x1={70} y1={70} x2={129} y2={70} color="#a8cfff" width={2} />
            <path d="M133 66l7 8-8 9M139 79l12 4" fill="none" stroke="#a8cfff" strokeWidth="2" />
            <Arrow x1={70} y1={114} x2={312} y2={114} color="#eeb487" width={2} />
            <NightLabel x={262} y={56}>
              Poussière
            </NightLabel>
          </>
        ) : (
          <>
            <ellipse
              cx="147"
              cy="99"
              rx="75"
              ry="27"
              fill="none"
              stroke="#a38a9b"
              strokeWidth="18"
              opacity=".4"
            />
            <circle cx="147" cy="99" r="17" fill="#af9b8a" />
            <path
              d="M192 82Q215 61 233 77M198 106Q222 84 241 102M192 128Q217 109 235 126"
              fill="none"
              stroke="#eeb487"
              strokeWidth="2"
            />
            <path d="M273 63L311 78 283 142 245 127Z" fill={`url(#${id}-metal)`} stroke="#9eafc5" />
            <ellipse
              cx="292"
              cy="73"
              rx="20"
              ry="9"
              transform="rotate(22 292 73)"
              fill="#466687"
              stroke="#a0bfd9"
            />
            <path
              d="M278 142L278 166M278 149L263 168M278 149L293 168"
              stroke="#bccbde"
              strokeWidth="2"
            />
            <NightLabel x={115} y={40}>
              Objet froid
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Une longueur d’onde plus grande",
              "Une transmission parfois meilleure",
              "Rayonnement thermique détectable",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "adaptiveoptics") {
    const wave = (y: number, flat: boolean) =>
      Array.from(
        { length: 61 },
        (_, i) =>
          `${i ? "L" : "M"}${28 + i * 2.4} ${round(y + (flat ? 0 : 5 * Math.sin(i / 5) + 2 * Math.sin(i / 2)))}`,
      ).join(" ");
    return (
      <>
        <Sky id={id} />
        {[42, 59, 76].map((y) => (
          <path key={y} d={wave(y, false)} fill="none" stroke="#bbd2f2" strokeWidth="1.7" />
        ))}
        <path
          d={step === 2 ? "M30 97Q70 91 130 97T184 97" : "M30 97H184"}
          fill="none"
          stroke={step === 2 ? "#e2c891" : "#90a5c3"}
          strokeWidth="5"
        />
        {[47, 73, 99, 125, 151, 177].map((x, i) => (
          <g key={i}>
            <path
              d={`M${x} 103v${step === 2 ? (i % 2 ? 17 : 10) : 13}`}
              stroke="#b7c8de"
              strokeWidth="2"
            />
            <rect
              x={x - 4}
              y={step === 2 ? (i % 2 ? 120 : 113) : 116}
              width="8"
              height="7"
              fill="#aabbd1"
            />
          </g>
        ))}
        <rect
          x="71"
          y="141"
          width="104"
          height="26"
          rx="5"
          fill={step > 0 ? "#eee2b8" : "#c3cfdf"}
        />
        <text x="123" y="160" textAnchor="middle" fontSize="18" fill={ink}>
          Calculateur
        </text>
        <path
          d="M237 145H195V154H175"
          fill="none"
          stroke="#b3d8bd"
          strokeWidth="1.6"
          strokeDasharray="3 3"
        />
        {step > 0 && (
          <>
            <Arrow x1={235} y1={145} x2={202} y2={145} color="#b3d8bd" width={1.5} />
            <Arrow x1={105} y1={141} x2={105} y2={126} color="#b3d8bd" width={1.5} />
          </>
        )}
        {[196, 211, 226].map((x) => (
          <path
            key={x}
            d={Array.from(
              { length: 21 },
              (_, i) =>
                `${i ? "L" : "M"}${round(x + (step === 2 ? 0 : 2 * Math.sin(i / 3)))} ${65 + i * 2}`,
            ).join(" ")}
            fill="none"
            stroke="#bbd2f2"
            strokeWidth="1.3"
          />
        ))}
        <Arrow x1={185} y1={97} x2={240} y2={90} color="#bbd2f2" width={1.5} />
        <path d="M220 93L260 130" stroke="#bbd2f2" strokeWidth="1.5" />
        <rect x="237" y="130" width="94" height="28" rx="5" fill="#cadce9" />
        <text x="284" y="150" textAnchor="middle" fontSize="18" fill={ink}>
          Capteur
        </text>
        <rect x="241" y="37" width="86" height="75" rx="8" fill="#101b30" stroke="#9bb1ce" />
        {step === 2 ? (
          <Star x={284} y={75} size={5} id={id} />
        ) : (
          <>
            {[
              [277, 70],
              [289, 73],
              [281, 80],
              [285, 65],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="8" fill="#bfd1ef" opacity=".22" />
            ))}
          </>
        )}
        <NightLabel x={282} y={32}>
          Image
        </NightLabel>
        <Label x={180} y={201}>
          {
            [
              "Fronts d’onde déformés",
              "Mesure et commande en boucle",
              "Correction partielle et rapide",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "moonflight") {
    const path =
      "M75 117C100 40 166 60 200 110C232 160 320 160 320 105C320 50 232 60 200 110C165 160 100 180 75 117";
    const controls = [
      [
        [75, 117],
        [100, 40],
        [166, 60],
        [200, 110],
      ],
      [
        [200, 110],
        [232, 160],
        [320, 160],
        [320, 105],
      ],
      [
        [200, 110],
        [165, 160],
        [100, 180],
        [75, 117],
      ],
    ][step]!;
    const t = [0.25, 1, 0.65][step]!,
      u = 1 - t;
    const positions = [0, 1].map((axis) =>
      round(
        u * u * u * controls[0]![axis]! +
          3 * u * u * t * controls[1]![axis]! +
          3 * u * t * t * controls[2]![axis]! +
          t * t * t * controls[3]![axis]!,
      ),
    );
    return (
      <>
        <Sky id={id} />
        <Earth x={75} y={117} r={26} id={id} />
        <circle cx="278" cy="104" r="17" fill={`url(#${id}-metal)`} />
        <path d={path} fill="none" stroke="#8d9fb9" strokeDasharray="4 4" strokeWidth="1.3" />
        {step === 0 ? (
          <path d="M75 117C100 40 166 60 200 110" fill="none" stroke="#e6b985" strokeWidth="2.5" />
        ) : step === 1 ? (
          <path
            d="M200 110C232 160 320 160 320 105C320 50 232 60 200 110"
            fill="none"
            stroke="#e6b985"
            strokeWidth="2.5"
          />
        ) : (
          <path
            d="M200 110C165 160 100 180 75 117"
            fill="none"
            stroke="#e6b985"
            strokeWidth="2.5"
          />
        )}
        <g
          transform={`translate(${positions[0]} ${positions[1]}) rotate(${step === 2 ? -30 : 30})`}
        >
          <path d="M-6-5H6L9 4H-9Z" fill="#eef2f7" stroke="#94a7be" />
          <rect x="-8" y="5" width="16" height="7" fill="#a7bbd1" />
          <path d="M-22 6H-9M9 6H22" stroke="#76a7d4" strokeWidth="5" />
        </g>
        <NightLabel x={60} y={168}>
          Terre
        </NightLabel>
        <NightLabel x={274} y={34}>
          Lune
        </NightLabel>
        <Label x={180} y={201}>
          {
            ["Départ vers la Lune", "Un survol, sans alunissage", "Trajet de retour vers la Terre"][
              step
            ]
          }
        </Label>
      </>
    );
  }
  if (kind === "lunation") {
    const phase = [0, 2, 4][step]!;
    return (
      <>
        <Sky id={id} />
        <MoonDisc x={82} y={98} r={40} phase={phase} />
        {Array.from({ length: 8 }, (_, i) => {
          const x = 172 + (i % 4) * 45,
            y = i < 4 ? 74 : 129;
          return (
            <g key={i}>
              <MoonDisc x={x} y={y} r={10} phase={i} />
              {i === phase && (
                <circle cx={x} cy={y} r="15" fill="none" stroke="#e8bc7d" strokeWidth="1.8" />
              )}
            </g>
          );
        })}
        <NightLabel x={82} y={158}>
          {["≈ jour 0", "≈ jour 7", "≈ jour 15"][step]}
        </NightLabel>
        <NightLabel x={242} y={37}>
          Un cycle ≈ 29,5 jours
        </NightLabel>
        <Label x={180} y={201}>
          {["Nouvelle Lune", "Premier quartier (convention nord)", "Pleine Lune"][step]}
        </Label>
      </>
    );
  }
  if (kind === "polaris") {
    const points = [
      [21, 137],
      [40, 129],
      [70, 119],
      [98, 132],
      [132, 142],
      [151, 127],
      [124, 103],
      [98, 132],
    ];
    return (
      <>
        <Sky id={id} />
        <path
          d={"M" + points.map((p) => p.join(" ")).join("L")}
          fill="none"
          stroke="#8ea6c8"
          strokeWidth="1.4"
        />
        {points.slice(0, 7).map(([x, y], i) => (
          <Star
            key={i}
            x={x!}
            y={y!}
            size={i === 4 || i === 5 ? 3.5 : 2.5}
            id={id}
            color="#d6e5fb"
          />
        ))}
        <Star x={246} y={52} size={4.5} id={id} color="#ffe3aa" />
        {step > 0 && <Arrow x1={151} y1={127} x2={236} y2={60} color="#e7bc80" dashed width={2} />}
        <NightLabel x={282} y={37}>
          Polaire
        </NightLabel>
        {step === 0 && (
          <>
            <circle cx="132" cy="142" r="9" fill="none" stroke="#ebbd78" />
            <circle cx="151" cy="127" r="9" fill="none" stroke="#ebbd78" />
          </>
        )}
        {step === 2 && (
          <>
            <path d="M246 64V165" stroke="#b8d7e9" strokeDasharray="3 4" />
            <path d="M20 165Q102 154 176 165T337 165" fill="none" stroke="#879cbb" />
            <NightLabel x={282} y={159}>
              Nord
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "La paire du bord de la casserole",
              "De Merak vers Dubhe, puis au-delà",
              "Repère de l’hémisphère nord",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "aurora")
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            <Star x={45} y={95} size={20} id={id} />
            <Earth x={207} y={99} r={30} id={id} />
            <circle cx="207" cy="99" r="35" fill="none" stroke="#96c9e7" strokeOpacity=".4" />
            {[41, 59, 77].map((spread, i) => (
              <path
                key={i}
                d={`M207 68C${207 - spread} ${32 - i * 5} ${153 - spread} ${42 - i * 6} ${153 - spread} 99C${153 - spread} ${156 + i * 4} ${208 - spread} ${165 + i * 3} 207 130M207 68C${240 + spread} 27 309 57 333 41M207 130C${240 + spread} 169 309 141 333 160`}
                fill="none"
                stroke="#899eca"
                strokeWidth="1.1"
                opacity=".6"
              />
            ))}
            {[66, 83, 104, 123].map((y, i) => (
              <Arrow
                key={i}
                x1={74}
                y1={y}
                x2={108 + (i % 2) * 10}
                y2={y}
                color="#e7b988"
                width={1.5}
              />
            ))}
            {step === 1 && (
              <>
                <path
                  d="M284 37Q228 33 208 65M283 162Q229 167 210 131"
                  fill="none"
                  stroke="#d1b4e8"
                  strokeWidth="2.7"
                />
                <Arrow x1={222} y1={49} x2={209} y2={64} color="#d1b4e8" width={2} />
                <Arrow x1={222} y1={150} x2={210} y2={133} color="#d1b4e8" width={2} />
                <ellipse
                  cx="208"
                  cy="72"
                  rx="15"
                  ry="4"
                  fill="none"
                  stroke="#82d4af"
                  strokeWidth="3"
                />
              </>
            )}
            <NightLabel x={98} y={31}>
              Soleil
            </NightLabel>
          </>
        ) : (
          <>
            <defs>
              <linearGradient id={`${id}-aurora-ribbon`} x2="0" y2="1">
                <stop stopColor="#a2f4bf" stopOpacity=".05" />
                <stop offset=".3" stopColor="#86e3b0" stopOpacity=".35" />
                <stop offset="1" stopColor="#9ce1d8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M43 60Q95 112 167 77T319 43L319 107Q251 108 224 125T113 154L43 124Z"
              fill={`url(#${id}-aurora-ribbon)`}
            />
            <path
              d="M12 164L47 149 73 161 118 145 147 159 183 149 220 161 260 141 295 159 328 151 348 164V178H12Z"
              fill="#14283c"
            />
            {Array.from({ length: 29 }, (_, i) => {
              const x = 45 + i * 9,
                y = 61 + 18 * Math.sin(i / 5);
              return (
                <path
                  key={i}
                  d={`M${x} ${y}q-5 27 -1 64`}
                  fill="none"
                  stroke={i % 5 === 0 ? "#e09ea9" : "#90e2af"}
                  strokeWidth="4"
                  opacity={0.25 + (i % 4) * 0.12}
                />
              );
            })}
            <NightLabel x={180} y={35}>
              Haute atmosphère
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Une magnétosphère déformée",
              "Des particules vers les régions polaires",
              "Des gaz excités émettent la lumière",
            ][step]
          }
        </Label>
      </>
    );
  return null;
}
