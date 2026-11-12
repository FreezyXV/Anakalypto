import {
  Scene,
  Arrow,
  Label,
  blue,
  green,
  warm,
  ink,
  Vessel,
  Wave,
  type DrawingProps,
} from "./Batch50Parts";
import { rainbowPath } from "@/lib/lesson-visuals/batch50-models";
export function Physics50Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "newtonmotion")
    return (
      <Scene
        id={id}
        title={["Inertie", "Force résultante", "Action et réaction"][s]!}
        foot={["Vitesse constante", "La vitesse change", "Deux objets différents"][s]!}
      >
        <path d="M25 163H335" stroke="#8b9caa" strokeWidth="3" />
        {[0, ...(s === 2 ? [1] : [])].map((v) => (
          <g key={v} transform={`translate(${s === 2 ? 65 + v * 155 : 100 + s * 24} 109)`}>
            <rect
              width="85"
              height="37"
              rx="7"
              fill={`url(#${id}-metal)`}
              stroke="#4c6d87"
              strokeWidth="2"
            />
            <circle cx="17" cy="43" r="10" fill={ink} />
            <circle cx="68" cy="43" r="10" fill={ink} />
            <rect x="15" y="8" width="55" height="7" rx="3" fill="#c0d4df" />
          </g>
        ))}
        {s === 0 ? (
          <>
            <Arrow x1={80} y1={77} x2={180} y2={77} />
            <Label x={245} y={83}>
              v constante
            </Label>
            <path d="M80 110H45M80 120H55" stroke="#95adbf" strokeWidth="2" />
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={205} y1={124} x2={302} y2={124} color={warm} />
            <Label x={252} y={87}>
              Force
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={150} y1={92} x2={93} y2={92} color={warm} />
            <Arrow x1={220} y1={92} x2={277} y2={92} />
            <path d="M150 126H220" stroke="#8a9da9" strokeWidth="4" />
            <Label x={180} y={63}>
              Forces opposées
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "energyball") {
    const y = [67, 122, 188][s]!;
    return (
      <Scene
        id={id}
        title={["Énergie de position", "Position → mouvement", "Énergie dispersée"][s]!}
        foot={["Balle + Terre", "Chute sans frottement", "Balle + sol + air"][s]!}
      >
        <path d="M30 201H330" stroke="#8898a1" strokeWidth="4" />
        <path d="M85 51V173" stroke="#aab9c5" strokeDasharray="4 5" fill="none" />
        <circle cx="85" cy={y} r="13" fill={`url(#${id}-gold)`} stroke={warm} strokeWidth="2" />
        {s === 1 && <Arrow x1={85} y1={141} x2={85} y2={174} />}
        {s === 2 && (
          <>
            <Wave d="M61 184q-18-17-28 0M109 184q18-17 28 0" color={warm} />
          </>
        )}
        <Label x={245} y={68}>
          Même énergie totale
        </Label>
        {["Position", "Mouvement", "Milieu"].map((t, i) => (
          <g key={t}>
            <rect x="164" y={84 + i * 37} width="137" height="12" rx="5" fill="#e0e8ec" />
            <rect
              x="164"
              y={84 + i * 37}
              width={
                [
                  [137, 0, 0],
                  [68.5, 68.5, 0],
                  [0, 0, 137],
                ][s]![i]
              }
              height="12"
              rx="5"
              fill={[green, blue, warm][i]}
            />
            <Label x={232} y={113 + i * 37}>
              {t}
            </Label>
          </g>
        ))}
      </Scene>
    );
  }
  if (kind === "heatpaths")
    return (
      <Scene
        id={id}
        title={["Un solide", "Un liquide mobile", "À travers le vide"][s]!}
        foot={["Conduction", "Convection", "Rayonnement"][s]!}
      >
        {s === 0 ? (
          <>
            <rect x="45" y="95" width="270" height="35" rx="10" fill={`url(#${id}-metal)`} />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <circle
                key={i}
                cx={65 + i * 35}
                cy="112"
                r="8"
                fill={i < 3 ? warm : blue}
                opacity={1 - i * 0.08}
              />
            ))}
            <Arrow x1={68} y1={157} x2={280} y2={157} color={warm} />
            <Label x={180} y={72}>
              De proche en proche
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Vessel id={id} x={70} y={65} w={220} h={124} />
            <Arrow x1={128} y1={165} x2={128} y2={112} color={warm} />
            <Arrow x1={229} y1={113} x2={229} y2={165} />
            <Wave d="M128 109Q179 80 229 109M128 169Q180 191 229 169" />
            <path d="M130 198H230" stroke={warm} strokeWidth="7" />
            <Label x={180} y={64}>
              L’eau circule
            </Label>
          </>
        ) : (
          <>
            <circle cx="73" cy="112" r="29" fill={`url(#${id}-gold)`} />
            {[90, 112, 134].map((y) => (
              <Wave key={y} d={`M110 ${y}q12-10 24 0t24 0t24 0t24 0t24 0`} color={warm} />
            ))}
            <circle cx="284" cy="112" r="27" fill={`url(#${id}-water)`} />
            <Label x={180} y={73}>
              Sans matière entre les deux
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "magnetdomains")
    return (
      <Scene
        id={id}
        title={["Domaines désorientés", "Direction favorisée", "Chaque morceau a deux pôles"][s]!}
        foot={["Aimantation globale faible", "Aimantation globale accrue", "Aucun nord isolé"][s]!}
      >
        {s < 2 ? (
          <>
            <rect x="48" y="63" width="264" height="120" rx="12" fill={`url(#${id}-metal)`} />
            {Array.from({ length: 8 }, (_, i) => {
              const x = 81 + (i % 4) * 65,
                y = 95 + Math.floor(i / 4) * 53,
                a = s === 1 ? 0 : [0, 90, 180, 270, 180, 270, 0, 90][i];
              return (
                <g key={i} transform={`rotate(${a} ${x} ${y})`}>
                  <Arrow x1={x - 19} y1={y} x2={x + 19} y2={y} />
                </g>
              );
            })}
          </>
        ) : (
          <>
            {[52, 207].map((x) => (
              <g key={x}>
                <rect x={x} y="98" width="100" height="55" rx="6" fill="#96b9d5" />
                <path d={`M${x} 98h50v55h-50z`} fill="#d58a77" />
                <Label x={x + 25} y={132}>
                  N
                </Label>
                <Label x={x + 75} y={132}>
                  S
                </Label>
              </g>
            ))}
            <path d="M181 78V174" stroke="#8e9eaa" strokeDasharray="5 5" />
          </>
        )}
      </Scene>
    );
  if (kind === "transformercoil")
    return (
      <Scene
        id={id}
        title={["Une tension alternative", "Un flux dans le noyau", "4 spires → 2 spires"][s]!}
        foot={["Primaire", "Pas de contact entre bobines", "Tension secondaire divisée par 2"][s]!}
      >
        <path d="M92 72H268V175H92Z" fill="none" stroke="#7793a6" strokeWidth="22" />
        <path d="M92 72H268V175H92Z" fill="none" stroke="#cbd8e0" strokeWidth="12" />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M75 ${87 + i * 20}q-13-10 0-16h34q12 7 0 15Z`}
            fill={`url(#${id}-copper)`}
            stroke={warm}
            strokeWidth="2"
          />
        ))}
        {Array.from({ length: s === 2 ? 2 : 4 }, (_, i) => (
          <path
            key={i}
            d={`M251 ${87 + i * 20}q-13-10 0-16h34q12 7 0 15Z`}
            fill={s ? `url(#${id}-copper)` : "#d8e0e6"}
            stroke={s ? warm : "#8f9eaa"}
            strokeWidth="2"
          />
        ))}
        {s > 0 && (
          <>
            <Arrow x1={130} y1={72} x2={215} y2={72} />
            <Arrow x1={220} y1={175} x2={139} y2={175} />
            <Label x={180} y={131}>
              Flux variable
            </Label>
          </>
        )}
        <Label x={48} y={56}>
          U₁
        </Label>
        <Label x={308} y={56}>
          U₂
        </Label>
      </Scene>
    );
  if (kind === "rainbowdrop")
    return (
      <Scene
        id={id}
        title={["Réfraction à l’entrée", "Réflexion intérieure", "Dispersion à la sortie"][s]!}
        foot={["Air → eau", "Une partie est réfléchie", "Deux couleurs du rayon solaire"][s]!}
      >
        <circle
          cx="208"
          cy="113"
          r="64"
          fill={`url(#${id}-water)`}
          opacity=".45"
          stroke={blue}
          strokeWidth="2"
        />
        {[1.331, 1.343].map((n, i) => {
          const p = rainbowPath(n);
          const points = p.map(([x, y]) => [208 + x * 64, 113 + y * 64]);
          return (
            <g key={n}>
              <path
                d={`M40 ${points[0]![1]}L${points[0]!.join(" ")}L${points[1]!.join(" ")}${s > 0 ? "L" + points[2]!.join(" ") : ""}${s === 2 ? "L" + points[3]!.join(" ") : ""}`}
                stroke={s === 2 ? [warm, "#8656a8"][i] : "#c5972c"}
                strokeWidth="2.5"
                fill="none"
              />
              {s === 2 && (
                <circle cx={points[2]![0]} cy={points[2]![1]} r="3" fill={[warm, "#8656a8"][i]} />
              )}
            </g>
          );
        })}
        <Label x={80} y={49}>
          Soleil
        </Label>
        <Label x={283} y={193}>
          Goutte
        </Label>
      </Scene>
    );
  if (kind === "skyscatter")
    return (
      <Scene
        id={id}
        title={["Avant l’atmosphère", "Le bleu se disperse", "Un plus long trajet"][s]!}
        foot={
          ["Plusieurs couleurs", "Lumière diffusée vers les yeux", "Lumière directe plus rouge"][s]!
        }
      >
        <rect x="91" y="63" width="238" height="117" rx="26" fill="#d7e9f5" />
        {Array.from({ length: 24 }, (_, i) => (
          <circle
            key={i}
            cx={108 + ((i * 43) % 205)}
            cy={79 + ((i * 31) % 83)}
            r="2"
            fill="#8aaabf"
          />
        ))}
        <circle cx="42" cy="119" r="19" fill={`url(#${id}-gold)`} />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M66 ${110 + i * 8}H${s === 0 ? 132 : 312}`}
            stroke={[warm, "#d2aa2b", blue][i]}
            opacity={s === 2 && i === 2 ? 0.2 : 1}
            strokeWidth="3"
          />
        ))}
        {s > 0 && (
          <>
            {[133, 196, ...(s === 2 ? [253, 285] : [])].map((x) => (
              <g key={x}>
                <Arrow x1={x} y1={126} x2={x - 15} y2={165} width={2} />
                <Arrow x1={x} y1={126} x2={x + 11} y2={81} width={2} />
              </g>
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "microwavefood")
    return (
      <Scene
        id={id}
        title={["Un four fermé", "Un champ alternatif", "Des zones inégales"][s]!}
        foot={
          [
            "Les ondes restent dans l’enceinte",
            "Molécules polaires sollicitées",
            "Échauffement de l’aliment",
          ][s]!
        }
      >
        <rect
          x="35"
          y="65"
          width="290"
          height="130"
          rx="13"
          fill={`url(#${id}-metal)`}
          stroke="#6d879c"
          strokeWidth="2"
        />
        <rect x="57" y="84" width="210" height="90" rx="6" fill="#eff4f7" stroke="#839aab" />
        <path d="M285 93v64" stroke="#8c9fae" strokeWidth="6" />
        <ellipse cx="163" cy="153" rx="72" ry="12" fill="#ccdae2" />
        <path
          d="M105 124q55-24 116 0l-12 25h-90Z"
          fill={s === 2 ? "#ddb078" : "#d2d9b2"}
          stroke="#a3a079"
        />
        {s === 0 ? (
          <Wave d="M66 102q15-12 30 0t30 0t30 0t30 0t30 0" color={warm} />
        ) : s === 1 ? (
          <>
            {[119, 153, 187].map((x, i) => (
              <g key={x} transform={`rotate(${i % 2 ? 35 : -35} ${x} 126)`}>
                <path d={`M${x - 8} 126h16`} stroke="#7288a0" strokeWidth="3" />
                <circle cx={x - 8} cy="126" r="5" fill={blue} />
                <circle cx={x + 8} cy="126" r="5" fill={warm} />
              </g>
            ))}
            <Arrow x1={90} y1={104} x2={231} y2={104} color={warm} />
          </>
        ) : (
          <>
            {[121, 154, 187, 207].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy={133 + (i % 2) * 7}
                r={6 + (i % 3) * 2}
                fill={i % 2 ? warm : "#e6cc81"}
                opacity=".85"
              />
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "lakeice")
    return (
      <Scene
        id={id}
        title={["Vers 4 °C", "Surface sous 4 °C", "La glace reste en surface"][s]!}
        foot={
          [
            "L’eau refroidie descend",
            "La densité diminue sous 4 °C",
            "De l’eau liquide en dessous",
          ][s]!
        }
      >
        <path d="M28 88H332L305 190H52Z" fill={`url(#${id}-water)`} opacity=".65" />
        <path d="M27 84L51 192H308L333 84" stroke="#9c9782" strokeWidth="5" fill="none" />
        {s === 0 ? (
          <>
            <Arrow x1={133} y1={101} x2={133} y2={167} />
            <Arrow x1={222} y1={165} x2={222} y2={104} />
            <Label x={180} y={61}>
              Mélange
            </Label>
          </>
        ) : (
          <>
            <path
              d="M29 90H331L326 111H34Z"
              fill={s === 2 ? "#effaff" : "#b8ddec"}
              stroke={s === 2 ? "#8db5cc" : "none"}
              strokeWidth="2"
            />
            <Label x={180} y={66}>
              {s === 2 ? "Glace" : "0 à 4 °C"}
            </Label>
            <Label x={180} y={158}>
              Eau vers 4 °C
            </Label>
            {s === 2 && (
              <path
                d="M58 94l18 9 20-8 24 9 20-9 28 7 22-8 18 9 26-8 24 7"
                stroke="#b7d6e7"
                fill="none"
              />
            )}
          </>
        )}
      </Scene>
    );
  if (kind === "saltdissolve")
    return (
      <Scene
        id={id}
        title={["Un réseau d’ions", "Des ions entourés d’eau", "L’huile reste séparée"][s]!}
        foot={
          ["Na⁺ et Cl⁻ dans le cristal", "Le sel est toujours présent", "Deux phases visibles"][s]!
        }
      >
        <Vessel id={id} x={70} y={58} w={220} h={134} />
        {s === 0
          ? Array.from({ length: 16 }, (_, i) => (
              <circle
                key={i}
                cx={141 + (i % 4) * 24}
                cy={101 + Math.floor(i / 4) * 24}
                r="8"
                fill={i % 2 === Math.floor(i / 4) % 2 ? blue : green}
              />
            ))
          : Array.from({ length: 8 }, (_, i) => {
              const x = 98 + ((i * 51) % 160),
                y = 121 + ((i * 23) % 51);
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="7" fill={i % 2 ? blue : green} />
                  {s === 1 &&
                    [0, 120, 240].map((a) => (
                      <circle
                        key={a}
                        cx={x + 14 * Math.cos((a * Math.PI) / 180)}
                        cy={y + 14 * Math.sin((a * Math.PI) / 180)}
                        r="3"
                        fill="#a8c8dc"
                      />
                    ))}
                </g>
              );
            })}
        {s === 2 && (
          <>
            <path d="M74 90H286V112H74Z" fill="#e5bd55" opacity=".8" />
            <Label x={180} y={75}>
              Huile
            </Label>
          </>
        )}
      </Scene>
    );
  return null;
}
