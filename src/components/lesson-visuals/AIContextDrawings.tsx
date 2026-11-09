import { Arrow, Label, blue, green, warm } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Paper({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-31-43H19L32-30V43H-31Z"
        fill={`url(#${id}-metal)`}
        stroke="#93aec2"
        strokeWidth="1.5"
      />
      <path d="M19-43V-30H32" fill="none" stroke="#9cb7c9" />
      <path d="M-19-18H19M-19-6H19M-19 6H19M-19 18H12" stroke="#91abc0" strokeWidth="2" />
    </g>
  );
}
function Person({
  x,
  y,
  light = false,
  other = false,
}: {
  x: number;
  y: number;
  light?: boolean;
  other?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-39"
        y="-41"
        width="78"
        height="83"
        rx="8"
        fill={light ? "#d6e0e7" : "#e6eef4"}
        stroke="#a4bccd"
      />
      <path d="M-27 32Q-25 7 0 9Q25 7 27 32" fill={other ? "#b4c9bc" : "#acc5d6"} />
      <ellipse
        cx="0"
        cy="-11"
        rx={other ? 15 : 18}
        ry="21"
        fill={light ? "#b9c5cd" : "#ccdce6"}
        stroke="#92acbf"
      />
      <path d={other ? "M-15-17Q0-39 15-17" : "M-19-17Q-12-37 9-31L19-12"} fill="#8ca6b9" />
      <path d="M-9-10h4M5-10h4M-5 1h10" stroke="#6f8ea5" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}
export function AIContextDrawing({ kind, step, id }: Props) {
  if (kind === "biasloop")
    return (
      <>
        {step === 0 ? (
          <>
            {[8, 2].map((observed, g) => (
              <g key={g}>
                <rect
                  x={23 + g * 172}
                  y="57"
                  width="142"
                  height="112"
                  rx="10"
                  fill="#e5edf3"
                  stroke="#aac0d0"
                />
                <Label x={94 + g * 172} y={81}>
                  Zone {g ? "B" : "A"}
                </Label>
                {Array.from({ length: 10 }, (_, n) => (
                  <circle
                    key={n}
                    cx={46 + g * 172 + (n % 5) * 24}
                    cy={105 + Math.floor(n / 5) * 24}
                    r="7"
                    fill={n < observed ? blue : "#f5f8fa"}
                    stroke={n < observed ? blue : "#a6bdcd"}
                  />
                ))}
                <Label x={94 + g * 172} y={157}>
                  {observed} / 10 observés
                </Label>
              </g>
            ))}
            <Label x={180} y={27}>
              Dix événements dans chaque zone
            </Label>
          </>
        ) : step === 1 ? (
          <>
            {[8, 2].map((n, i) => (
              <g key={i}>
                <Label x={45} y={89 + i * 53}>
                  {i ? "B" : "A"}
                </Label>
                {Array.from({ length: 10 }, (_, j) => (
                  <rect
                    key={j}
                    x={72 + j * 22}
                    y={68 + i * 53}
                    width="18"
                    height="26"
                    rx="3"
                    fill={j < n ? blue : "#e2eaf0"}
                    stroke={j < n ? "#7297b1" : "#c0d0dd"}
                  />
                ))}
                <Label x={320} y={89 + i * 53}>
                  {n}
                </Label>
              </g>
            ))}
            <Label x={180} y={28}>
              Compter ce qui a été observé
            </Label>
            <Label x={180} y={177}>
              8 contre 2 ≠ événements réels
            </Label>
          </>
        ) : (
          <>
            <path
              d="M101 91Q171 23 258 87M276 131Q257 183 180 171M134 165Q64 162 62 124"
              fill="none"
              stroke="#9fb9cc"
              strokeWidth="3"
            />
            <Arrow x1={242} y1={73} x2={260} y2={88} />
            <Arrow x1={200} y1={172} x2={180} y2={171} />
            <Arrow x1={65} y1={140} x2={62} y2={123} />
            <rect x="21" y="68" width="95" height="55" rx="9" fill="#d5e4ef" stroke="#9fb8cc" />
            <Label x={68} y={91}>
              Données
            </Label>
            <Label x={68} y={115}>
              A : 8 · B : 2
            </Label>
            <rect
              x="224"
              y="87"
              width="111"
              height="51"
              rx="9"
              fill={`url(#${id}-metal)`}
              stroke="#8daabd"
            />
            <Label x={279} y={118}>
              Décision
            </Label>
            <rect x="116" y="149" width="126" height="35" rx="8" fill="#e9d7b7" stroke="#b6a07a" />
            <Label x={179} y={173}>
              Cibler encore A
            </Label>
            <Label x={180} y={27}>
              Un risque de boucle de rétroaction
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          Scénario fictif · observer ≠ tout compter
        </Label>
      </>
    );
  if (kind === "worktasks")
    return (
      <>
        {["Premier jet", "Vérification", "Échange"].map((name, i) => (
          <g key={name}>
            <rect
              x={22 + i * 113}
              y="61"
              width="91"
              height="67"
              rx="9"
              fill={step > 0 && i === 0 ? "#cbded0" : `url(#${id}-metal)`}
              stroke={step > 0 && i === 0 ? green : "#9cb6ca"}
              strokeWidth="1.5"
            />
            {i === 0 ? (
              <path d="M50 86l17-17 7 7-17 17-10 3Z" fill="#9bb8cc" stroke="#7398b2" />
            ) : i === 1 ? (
              <path d="M162 82l7 8 15-18" fill="none" stroke={green} strokeWidth="3" />
            ) : (
              <>
                <path d="M270 73H294V87H280L274 94V87H270Z" fill="#c4d9e7" stroke="#84a6bd" />
                <path d="M294 80H310V95H303L299 100V95H291" fill="none" stroke="#84a6bd" />
              </>
            )}
            <Label x={67 + i * 113} y={117}>
              {name}
            </Label>
          </g>
        ))}
        {step === 0 ? (
          <>
            <path
              d="M42 146V154H318V146M180 154V175"
              fill="none"
              stroke="#96b1c5"
              strokeWidth="2"
            />
            <Label x={180} y={198}>
              Un dossier, plusieurs tâches
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <rect x="37" y="151" width="63" height="30" rx="6" fill="#d3e4ce" stroke="#99b38e" />
            <Label x={68} y={172}>
              IA
            </Label>
            <Arrow x1={68} y1={145} x2={68} y2={134} color={green} />
            <Label x={231} y={174}>
              Un brouillon à vérifier
            </Label>
            <Label x={180} y={201}>
              Assister une tâche, pas tout le métier
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={119} y1={95} x2={128} y2={95} color={green} />
            <Arrow x1={232} y1={95} x2={241} y2={95} color={green} />
            <path d="M180 135V153H300V136" fill="none" stroke="#8cad9d" strokeWidth="2" />
            <Label x={241} y={180}>
              Intervention humaine
            </Label>
            <Label x={180} y={201}>
              Exposition ≠ emplois supprimés
            </Label>
          </>
        )}
        <Label x={180} y={27}>
          {
            [
              "Des tâches d’exemple, sans durée",
              "Une aide à la rédaction du premier jet",
              "Une organisation possible du travail",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "facematching")
    return (
      <>
        {step < 2 ? (
          <>
            <Person x={87} y={102} />
            <Person x={273} y={102} other={step === 0} light={step === 1} />
            <Label x={87} y={164}>
              Identité A
            </Label>
            <Label x={273} y={164}>
              Identité {step === 0 ? "B" : "A"}
            </Label>
            <path d="M134 87H226M134 113H226" stroke="#a4bccc" strokeWidth="1.5" />
            <rect x="145" y="74" width="70" height="53" rx="7" fill="#ead7b8" stroke="#c3a677" />
            <Label x={180} y={96}>
              Erreur
            </Label>
            <path d="M171 108l18 0" stroke={warm} strokeWidth="2" />
            <Label x={180} y={27}>
              {step === 0
                ? "Faux positif : identités confondues"
                : "Faux négatif : identité non reconnue"}
            </Label>
            <Label x={180} y={201}>
              {step === 0
                ? "Le système dit à tort : « même personne »"
                : "Il dit à tort : « personnes différentes »"}
            </Label>
          </>
        ) : (
          <>
            {[2, 4].map((errors, g) => (
              <g key={g}>
                <Label x={94 + g * 172} y={56}>
                  Groupe {g + 1}
                </Label>
                {Array.from({ length: 10 }, (_, n) => (
                  <g key={n}>
                    <circle
                      cx={46 + g * 172 + (n % 5) * 24}
                      cy={87 + Math.floor(n / 5) * 27}
                      r="9"
                      fill={n < errors ? "#edddc5" : "#d3e3d0"}
                      stroke={n < errors ? "#bca17a" : "#9fb496"}
                    />
                    {n < errors ? (
                      <path
                        d={`M${42 + g * 172 + (n % 5) * 24} ${83 + Math.floor(n / 5) * 27}l8 8m0-8-8 8`}
                        stroke={warm}
                        strokeWidth="1.5"
                      />
                    ) : (
                      <path
                        d={`M${42 + g * 172 + (n % 5) * 24} ${87 + Math.floor(n / 5) * 27}l3 4 6-7`}
                        stroke={green}
                        fill="none"
                        strokeWidth="1.4"
                      />
                    )}
                  </g>
                ))}
                <Label x={94 + g * 172} y={153}>
                  {errors} erreurs / 10
                </Label>
                <Label x={94 + g * 172} y={180}>
                  {(errors / 10) * 100} %
                </Label>
              </g>
            ))}
            <Label x={180} y={27}>
              Comparer le même type d’erreur
            </Label>
            <Label x={180} y={201}>
              Chiffres fictifs · aucun résultat NIST
            </Label>
          </>
        )}
      </>
    );
  if (kind === "aiact")
    return (
      <>
        <circle
          cx="92"
          cy="106"
          r="57"
          fill={step === 0 ? "#edddca" : step === 1 ? "#e7dabd" : "#dce9f0"}
          stroke={step === 0 ? "#bfa17b" : step === 1 ? "#b2a077" : "#9cb7cb"}
          strokeWidth="1.5"
        />
        {step === 0 ? (
          <>
            <Paper x={91} y={109} id={id} />
            <circle cx="92" cy="106" r="48" fill="none" stroke={warm} strokeWidth="4" />
            <path d="M58 73L126 139" stroke={warm} strokeWidth="4" />
            <Label x={244} y={82}>
              Notation sociale
            </Label>
            <Label x={244} y={111}>
              visée par le texte
            </Label>
            <Label x={244} y={150}>
              Article 5
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <path
              d="M61 70L92 58 124 70V107Q120 139 92 152Q64 139 61 107Z"
              fill="#d0e0ce"
              stroke="#819c78"
              strokeWidth="2"
            />
            <path d="M77 104l11 12 20-24" fill="none" stroke={green} strokeWidth="3" />
            <Label x={244} y={76}>
              Risques
            </Label>
            <Label x={244} y={107}>
              Documentation
            </Label>
            <Label x={244} y={138}>
              Contrôle humain
            </Label>
          </>
        ) : (
          <>
            <path
              d="M55 78H126V119H85L69 136V119H55Z"
              fill="#e8f0f5"
              stroke="#83a7c1"
              strokeWidth="2"
            />
            <Label x={91} y={105} color={blue}>
              IA
            </Label>
            <Label x={244} y={84}>
              Interaction
            </Label>
            <Label x={244} y={114}>
              et contenus
            </Label>
            <Label x={244} y={150}>
              Article 50
            </Label>
          </>
        )}
        <Label x={180} y={27}>
          {
            [
              "Certaines pratiques sont interdites",
              "Des usages à haut risque sont encadrés",
              "Des obligations de transparence ciblées",
            ][step]
          }
        </Label>
        <Label x={180} y={180}>
          {step === 1 ? "Exemple de domaine : recrutement" : "Conditions et exceptions à vérifier"}
        </Label>
        <Label x={180} y={201}>
          Repères non exhaustifs · cadre européen
        </Label>
      </>
    );
  if (kind === "justiceai")
    return (
      <>
        {step === 0 ? (
          <>
            <Paper x={64} y={104} id={id} />
            <Paper x={91} y={117} id={id} />
            <Arrow x1={134} y1={113} x2={188} y2={113} />
            <rect x="202" y="65" width="129" height="93" rx="9" fill="#e1ebf2" stroke="#a4bdce" />
            <Label x={266} y={92}>
              Éléments
            </Label>
            <Label x={266} y={119}>
              extraits
            </Label>
            <path d="M218 137H312M218 147H302" stroke="#9cb6c9" />
            <Label x={180} y={27}>
              Analyser des décisions passées
            </Label>
            <Label x={180} y={201}>
              Documents et extraction fictifs
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Paper x={99} y={112} id={id} />
            <Paper x={256} y={112} id={id} />
            <circle
              cx="172"
              cy="93"
              r="27"
              fill="#c5dce8"
              fillOpacity=".45"
              stroke="#7397b2"
              strokeWidth="4"
            />
            <path d="M191 114L215 141" stroke="#7397b2" strokeWidth="8" strokeLinecap="round" />
            <Label x={99} y={179}>
              Sources
            </Label>
            <Label x={256} y={179}>
              Dossier
            </Label>
            <Label x={180} y={27}>
              Revenir aux pièces et au cas concret
            </Label>
            <Label x={180} y={201}>
              Un score ne suffit pas pour juger
            </Label>
          </>
        ) : (
          <>
            <rect
              x="24"
              y="57"
              width="104"
              height="110"
              rx="8"
              fill={`url(#${id}-metal)`}
              stroke="#a3bbcd"
            />
            <circle cx="76" cy="83" r="12" fill="#bed0dd" stroke="#94afc3" />
            <path d="M55 118Q57 96 76 98Q95 96 97 118Z" fill="#a9c1d2" />
            <Label x={76} y={142}>
              Identité
            </Label>
            <Label x={76} y={162}>
              magistrat
            </Label>
            <Arrow x1={136} y1={112} x2={188} y2={112} color="#aab8c4" />
            <rect x="201" y="67" width="133" height="95" rx="8" fill="#e9e5df" stroke="#baa993" />
            <path
              d="M219 140V110h18v30M249 140V94h18v46M279 140V83h18v57"
              fill="#c4b499"
              stroke="#ad9777"
            />
            <path d="M206 70L330 159M330 70L206 159" stroke={warm} strokeWidth="4" />
            <Label x={180} y={27}>
              Réutiliser l’identité pour profiler : interdit
            </Label>
            <Label x={180} y={201}>
              France · L111-13 · magistrats et greffe
            </Label>
          </>
        )}
      </>
    );
  return null;
}
