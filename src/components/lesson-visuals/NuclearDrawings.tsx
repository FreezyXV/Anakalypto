import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import { dtNucleons, meanRemaining } from "@/lib/lesson-visuals/energy29-models";
import { Arrow, Label, Lamp, Rotor, blue, warm } from "./DrawingPrimitives";
import { Bolt, Foot, Shaft, Title, WorkshopPaints } from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Nucleus({
  x,
  y,
  p,
  n,
  scale = 1,
}: {
  x: number;
  y: number;
  p: number;
  n: number;
  scale?: number;
}) {
  const positions =
    p + n === 2
      ? [
          [-7, 0],
          [7, 0],
        ]
      : p + n === 3
        ? [
            [-7, 5],
            [0, -7],
            [7, 5],
          ]
        : [
            [-7, -7],
            [7, -7],
            [-7, 7],
            [7, 7],
          ];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {positions.map(([a, b], i) => (
        <g key={i}>
          <circle
            cx={a}
            cy={b}
            r="8"
            fill={i < p ? "#cd8064" : "#7fa5c5"}
            stroke={i < p ? "#a7614d" : "#6186a5"}
            strokeWidth="1"
          />
          <circle cx={a! - 2} cy={b! - 2} r="2" fill="white" opacity=".45" />
        </g>
      ))}
    </g>
  );
}
function NucleonCloud({
  x,
  y,
  r = 26,
  count = 18,
  id,
}: {
  x: number;
  y: number;
  r?: number;
  count?: number;
  id: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 3} fill={`url(#${id}-gold)`} opacity=".2" />
      {Array.from({ length: count }, (_, i) => {
        const angle = i * 2.39996,
          rr = Math.sqrt(i / count) * r;
        return (
          <circle
            key={i}
            cx={Math.round((x + rr * Math.cos(angle)) * 100) / 100}
            cy={Math.round((y + rr * Math.sin(angle)) * 100) / 100}
            r={5.5}
            fill={i % 2 ? "#bd7d65" : "#7e9db7"}
            stroke="#f5f3eb"
            strokeWidth=".8"
          />
        );
      })}
    </g>
  );
}
export function NuclearDrawing({ kind, step, id }: Props) {
  if (!["nuclearwaste", "fusion", "fission"].includes(kind)) return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "nuclearwaste" ? (
        <>
          <Title>
            {
              [
                "Deux critères de classement",
                "Une décroissance moyenne",
                "Des barrières complémentaires",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <rect x="100" y="65" width="209" height="98" rx="5" fill="#e8edf0" stroke="#a8bac6" />
              <path d="M204 65V163M100 114H309" stroke="#b2c0ca" />
              {[0, 1, 2, 3].map((n) => {
                const x = 153 + (n % 2) * 103,
                  y = 91 + Math.floor(n / 2) * 50;
                return (
                  <g key={n}>
                    <path
                      d={`M${x - 13} ${y - 8}v20q13 7 26 0v-20`}
                      fill={n < 2 ? "#d4a577" : "#bcc7c9"}
                      stroke="#8f9a9c"
                    />
                    <ellipse cx={x} cy={y - 8} rx="13" ry="4" fill="#e1d8c5" stroke="#959b98" />
                  </g>
                );
              })}
              <Arrow x1={83} y1={160} x2={83} y2={63} color="#8b9eac" />
              <Label x={45} y={89}>
                Haute
              </Label>
              <Label x={44} y={150}>
                Basse
              </Label>
              <Label x={153} y={182}>
                Courte
              </Label>
              <Label x={258} y={182}>
                Longue
              </Label>
              <Label x={171} y={52}>
                Activité / durée de vie
              </Label>
            </>
          ) : step === 1 ? (
            <>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <Label x={51 + i * 86} y={62}>
                    {meanRemaining(8, i)}
                  </Label>
                  {Array.from({ length: meanRemaining(8, i) }, (_, n) => (
                    <circle
                      key={n}
                      cx={43 + i * 86 + (n % 2) * 16}
                      cy={84 + Math.floor(n / 2) * 19}
                      r="6"
                      fill="#7c9fbb"
                      stroke="#5a7f9e"
                    />
                  ))}
                  <Label x={51 + i * 86} y={178}>
                    {i} T
                  </Label>
                  {i < 3 && (
                    <Arrow x1={74 + i * 86} y1={110} x2={106 + i * 86} y2={110} color="#bba47d" />
                  )}
                </g>
              ))}
            </>
          ) : (
            <>
              <rect
                x="27"
                y="57"
                width="306"
                height="111"
                rx="20"
                fill="#d7c9ae"
                stroke="#b09f80"
                strokeWidth="2"
              />
              {[77, 98, 122, 146].map((y) => (
                <path
                  key={y}
                  d={`M38 ${y}q65-7 129 0t153 0`}
                  fill="none"
                  stroke="#bbab8b"
                  strokeWidth="1.5"
                />
              ))}
              <rect
                x="111"
                y="82"
                width="127"
                height="69"
                rx="24"
                fill={`url(#${id}-metal)`}
                stroke="#829aab"
                strokeWidth="3"
              />
              <rect
                x="139"
                y="101"
                width="68"
                height="34"
                rx="10"
                fill="#b99a73"
                stroke="#947b59"
              />
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <circle
                  key={n}
                  cx={148 + (n % 3) * 22}
                  cy={111 + Math.floor(n / 3) * 14}
                  r="2"
                  fill="#6d7481"
                />
              ))}
              <Label x={175} y={49}>
                Verre
              </Label>
              <path d="M175 53V100" stroke="#586c7d" />
              <Label x={73} y={187}>
                Roche
              </Label>
              <path d="M83 173L57 150" stroke="#586c7d" />
              <Label x={265} y={186}>
                Conteneur
              </Label>
              <path d="M255 169L229 145" stroke="#586c7d" />
            </>
          )}
          <Foot>
            {step === 0
              ? "Grille qualitative, pas des volumes"
              : step === 1
                ? "T = une demi-vie · effectif moyen"
                : "Cas de déchets vitrifiés"}
          </Foot>
        </>
      ) : null}
      {kind === "fusion" ? (
        <>
          <Title>
            {
              [
                "Deux noyaux d’hydrogène",
                "Hélium et neutron en sortie",
                "Confiner un plasma chargé",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <Nucleus
                x={105}
                y={112}
                p={dtNucleons.deuterium.protons}
                n={dtNucleons.deuterium.neutrons}
                scale={1.5}
              />
              <Nucleus
                x={252}
                y={112}
                p={dtNucleons.tritium.protons}
                n={dtNucleons.tritium.neutrons}
                scale={1.5}
              />
              <Label x={104} y={70}>
                Deutérium
              </Label>
              <Label x={251} y={70}>
                Tritium
              </Label>
              <Label x={180} y={119}>
                +
              </Label>
              <circle cx="42" cy="170" r="6" fill="#cd8064" />
              <Label x={92} y={177}>
                Proton
              </Label>
              <circle cx="213" cy="170" r="6" fill="#7fa5c5" />
              <Label x={269} y={177}>
                Neutron
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <Nucleus x={67} y={80} p={1} n={1} />
              <Nucleus x={67} y={145} p={1} n={2} />
              <Label x={37} y={85}>
                D
              </Label>
              <Label x={35} y={150}>
                T
              </Label>
              <Arrow x1={86} y1={82} x2={144} y2={105} color={warm} />
              <Arrow x1={87} y1={143} x2={144} y2={121} color={warm} />
              <path
                d="M164 91l8 14 17-7-7 16 14 8-18 4 2 18-15-12-13 11 2-18-17-7 16-8Z"
                fill="#eac77c"
                stroke="#d1ad5c"
              />
              <Arrow x1={192} y1={107} x2={232} y2={80} color={warm} />
              <Arrow x1={195} y1={129} x2={282} y2={146} />
              <Nucleus x={260} y={76} p={2} n={2} scale={1.1} />
              <circle cx="301" cy="146" r="9" fill="#7fa5c5" stroke="#6186a5" />
              <Label x={260} y={51}>
                ⁴He
              </Label>
              <Label x={277} y={179}>
                Neutron
              </Label>
            </>
          ) : (
            <>
              <ellipse
                cx="177"
                cy="116"
                rx="112"
                ry="54"
                fill={`url(#${id}-metal)`}
                stroke="#8da5b6"
                strokeWidth="3"
              />
              <ellipse cx="177" cy="116" rx="84" ry="36" fill="#cdd9e3" stroke="#9dafbd" />
              <ellipse
                cx="177"
                cy="116"
                rx="71"
                ry="29"
                fill="none"
                stroke="#c383a6"
                strokeWidth="13"
              />
              <ellipse
                cx="177"
                cy="116"
                rx="71"
                ry="29"
                fill="none"
                stroke="#eab3cd"
                strokeWidth="5"
              />
              <rect x="166" y="66" width="23" height="102" rx="9" fill="#849dae" stroke="#5d7f97" />
              {[0, 60, 120, 180, 240, 300].map((a) => {
                const t = (a * Math.PI) / 180,
                  x = 177 + Math.cos(t) * 92,
                  y = 116 + Math.sin(t) * 40;
                return (
                  <ellipse
                    key={a}
                    cx={Math.round(x * 100) / 100}
                    cy={Math.round(y * 100) / 100}
                    rx="9"
                    ry="23"
                    transform={`rotate(${a - 90} ${x} ${y})`}
                    fill="none"
                    stroke="#b88859"
                    strokeWidth="5"
                  />
                );
              })}
              <Arrow x1={240} y1={111} x2={309} y2={62} />
              <circle cx="310" cy="61" r="5" fill="#7fa5c5" />
              <Label x={295} y={48}>
                Neutron
              </Label>
              <Label x={177} y={184}>
                Plasma dans l’anneau
              </Label>
            </>
          )}
          <Foot>
            {step === 0
              ? "Rouge : proton · bleu : neutron"
              : step === 1
                ? "Deux protons et trois neutrons conservés"
                : "Les neutrons atteignent les structures"}
          </Foot>
        </>
      ) : null}
      {kind === "fission" ? (
        <>
          <Title>
            {
              [
                "Un neutron et un noyau fissile",
                "De l’énergie et d’autres neutrons",
                "De la chaleur au courant",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <circle cx="63" cy="112" r="6" fill="#7097b5" stroke="#4c789b" />
              <Arrow x1={81} y1={112} x2={162} y2={112} />
              <NucleonCloud x={212} y={111} r={31} count={26} id={id} />
              <Label x={212} y={65}>
                Uranium 235
              </Label>
              <Label x={183} y={176}>
                Noyau représenté symboliquement
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <NucleonCloud x={130} y={104} r={20} count={14} id={id} />
              <NucleonCloud x={231} y={139} r={18} count={12} id={id} />
              <Arrow x1={171} y1={113} x2={102} y2={78} color={warm} />
              <Arrow x1={196} y1={121} x2={256} y2={153} color={warm} />
              {[
                [86, 155],
                [214, 58],
                [299, 104],
              ].map(([x, y], i) => (
                <g key={i}>
                  <Arrow x1={180} y1={115} x2={x! - (i === 0 ? -8 : 8)} y2={y!} />
                  <circle cx={x} cy={y} r="6" fill="#7b9fbb" stroke="#5c82a1" />
                </g>
              ))}
              <Label x={181} y={182}>
                Fragments + neutrons
              </Label>
            </>
          ) : (
            <>
              <path
                d="M35 95Q35 84 49 84H83Q97 84 97 95V138Q97 154 66 154Q35 154 35 138Z"
                fill={`url(#${id}-metal)`}
                stroke="#869fb1"
                strokeWidth="2"
              />
              {[48, 59, 70, 81].map((x) => (
                <path key={x} d={`M${x} 96V136`} stroke="#b48e68" strokeWidth="4" />
              ))}
              {[52, 65, 78].map((x) => (
                <path key={x} d={`M${x} 64V115`} stroke="#5c6f80" strokeWidth="3" />
              ))}
              <path
                d="M96 105H127V94H143V132H127V142H96"
                fill="none"
                stroke={warm}
                strokeWidth="3"
              />
              <rect
                x="128"
                y="83"
                width="35"
                height="64"
                rx="7"
                fill="#edf0ed"
                fillOpacity=".55"
                stroke="#95a8b4"
                strokeWidth="2"
              />
              <path
                d="M153 96H196M213 126V155H153V122Q160 115 153 108V96"
                fill="none"
                stroke={blue}
                strokeWidth="3"
              />
              <Rotor x={213} y={106} r={20} id={id} />
              <Shaft d="M233 106H258" width={5} />
              <circle cx="276" cy="106" r="20" fill={`url(#${id}-metal)`} stroke="#8fa5b5" />
              <Bolt x={276} y={106} />
              <path d="M296 106H309" stroke={blue} strokeWidth="2.5" />
              <Lamp x={326} y={106} active id={id} />
              <path d="M174 151V161M183 151V161M192 151V161" stroke="#a7b9c7" strokeWidth="2" />
              <Label x={67} y={178}>
                Réacteur
              </Label>
              <Label x={169} y={178}>
                Vapeur
              </Label>
              <Label x={286} y={178}>
                Courant
              </Label>
            </>
          )}
          <Foot>
            {step === 0
              ? "Les billes ne comptent pas 235 nucléons"
              : step === 1
                ? "Une réaction en chaîne peut suivre"
                : "Primaire et vapeur restent séparés"}
          </Foot>
        </>
      ) : null}
    </>
  );
}
