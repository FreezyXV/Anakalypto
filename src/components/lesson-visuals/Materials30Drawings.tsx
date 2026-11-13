import {
  Frame,
  Arrow,
  Label,
  blue,
  red,
  gold,
  green,
  violet,
  type DrawingProps,
} from "./Science30Parts";
import { honeycomb } from "@/lib/lesson-visuals/sciences30-models";
const GRAPHENE = honeycomb();
function Ply30({ layer, id }: { layer: number; id: string }) {
  const d = `M61 ${73 + layer * 35}L259 ${56 + layer * 35} 311 ${83 + layer * 35} 111 ${104 + layer * 35}Z`;
  return (
    <g>
      <defs>
        <clipPath id={`${id}-ply-${layer}`}>
          <path d={d} />
        </clipPath>
      </defs>
      <path d={d} fill={layer % 2 ? "#c8beaa" : "#d6dfe1"} stroke="#9aabaf" />
      <g clipPath={`url(#${id}-ply-${layer})`}>
        {Array.from({ length: 6 }, (_, n) => (
          <path
            key={n}
            d={
              layer % 2
                ? `M${88 + n * 28} ${71 + layer * 35 - n * 2.3}l44 26`
                : `M${72 + n * 6} ${78 + layer * 35 + n * 3.2}l203-18`
            }
            stroke={layer % 2 ? gold : blue}
            strokeWidth="2"
          />
        ))}
      </g>
    </g>
  );
}
export function Materials30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "memoryalloy")
    return (
      <Frame
        id={id}
        title={
          [
            "Une forme préparée",
            "Déformer à basse température",
            "Réchauffer et retrouver la forme",
          ][s]!
        }
        foot="Transformation solide, sans fusion"
      >
        <path
          d={s === 1 ? "M72 106L124 140 176 106 228 140 280 106" : "M51 124H299"}
          stroke="#7d9dba"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={s === 1 ? "M72 103L124 137 176 103 228 137 280 103" : "M51 121H299"}
          stroke="#c1d4df"
          strokeWidth="3"
          fill="none"
        />
        {s === 1 ? (
          <>
            <Arrow x1={111} y1={80} x2={111} y2={119} color={gold} />
            <Arrow x1={228} y1={80} x2={228} y2={119} color={gold} />
            <Label x={180} y={57}>
              Déformation limitée
            </Label>
          </>
        ) : s === 2 ? (
          <>
            <path d="M81 97q-9-17 0-32m37 30q-9-17 0-32" stroke={red} strokeWidth="2" fill="none" />
            <Label x={244} y={72}>
              Chauffage adapté
            </Label>
          </>
        ) : (
          <Label x={180} y={66}>
            Fil de nitinol
          </Label>
        )}
        {[0, 1, 2, 3, 4, 5].map((col) =>
          [0, 1].map((row) => (
            <g key={col + "-" + row}>
              <path
                d={`M${80 + col * 36 + (s === 1 ? row * 12 : 0)} ${161 + row * 24}h36m-36 0l${s === 1 ? 12 : 0} 24`}
                stroke="#9a8eaa"
                strokeWidth="1.5"
              />
              <circle
                cx={80 + col * 36 + (s === 1 ? row * 12 : 0)}
                cy={161 + row * 24}
                r="3.5"
                fill={violet}
              />
            </g>
          )),
        )}
      </Frame>
    );
  if (kind === "passivelayer")
    return (
      <Frame
        id={id}
        title={
          [
            "Une couche passive très fine",
            "La rayure expose localement",
            "La couche peut se reformer",
          ][s]!
        }
        foot="Protection agrandie, inox non invincible"
      >
        <path d="M30 121H330V194H30Z" fill="#b7c5ce" stroke="#8296a5" />
        {Array.from({ length: 30 }, (_, i) => (
          <circle
            key={i}
            cx={43 + (i % 10) * 30}
            cy={139 + Math.floor(i / 10) * 22}
            r="4"
            fill={i % 4 === 0 ? "#b69c76" : "#8ba1b2"}
          />
        ))}
        {s === 0 ? (
          <path d="M30 115H330" stroke={green} strokeWidth="10" />
        ) : (
          <>
            <path d="M30 115H141M209 115H330" stroke={green} strokeWidth="10" />
            <path
              d="M141 115l34 22 34-22"
              stroke={s === 1 ? "#dfe7e9" : green}
              strokeWidth={s === 1 ? 9 : 5}
              fill="none"
            />
          </>
        )}
        {[70, 130, 235, 288].map((x) => (
          <g key={x}>
            <circle cx={x} cy="69" r="5" fill="#b6cedb" />
            <circle cx={x + 9} cy="69" r="5" fill="#b6cedb" />
          </g>
        ))}
        {s === 1 ? (
          <>
            <path d="M147 72l-5 23 24 2" stroke="#9b8a78" strokeWidth="5" fill="none" />
            <Label x={246} y={92}>
              Rayure
            </Label>
          </>
        ) : s === 2 ? (
          <>
            <Arrow x1={177} y1={68} x2={177} y2={117} color={blue} />
            <Label x={107} y={94}>
              Oxygène
            </Label>
            <Label x={260} y={96}>
              Reformation
            </Label>
          </>
        ) : (
          <>
            <Label x={180} y={49}>
              Milieu extérieur
            </Label>
            <Label x={180} y={99}>
              Couche riche en chrome
            </Label>
          </>
        )}
        <Label x={180} y={204}>
          Alliage sous la surface
        </Label>
      </Frame>
    );
  if (kind === "graphenelattice")
    return (
      <Frame
        id={id}
        title={
          [
            "Un réseau en nid d’abeille",
            "Une épaisseur atomique",
            "Le graphite empile des feuillets",
          ][s]!
        }
        foot={
          s === 0
            ? "Chaque nœud représente un carbone"
            : s === 1
              ? "Une feuille, pas un bloc massif"
              : "Liaisons fortes dans chaque couche"
        }
      >
        {s === 0 ? (
          <g transform="translate(75 -4)">
            {GRAPHENE.edges.map(([a, b], i) => (
              <path
                key={i}
                data-carbon-bond={`${a}|${b}`}
                d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`}
                stroke="#7a8e9d"
                strokeWidth="2"
              />
            ))}
            {GRAPHENE.points.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#546d80" />
            ))}
            <Label x={105} y={202}>
              Trois voisins au cœur du réseau
            </Label>
          </g>
        ) : (
          <>
            {Array.from({ length: s === 1 ? 1 : 3 }, (_, layer) => (
              <g
                key={layer}
                transform={`translate(64 ${s === 1 ? 73 : 40 + layer * 25}) matrix(1 .12 -.4 .48 0 0)`}
              >
                {GRAPHENE.edges.map(([a, b], i) => (
                  <path
                    key={i}
                    d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`}
                    stroke={layer === 0 ? "#647e91" : "#8ba2b2"}
                    strokeWidth="2"
                  />
                ))}
                {GRAPHENE.points.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#647e91" />
                ))}
              </g>
            ))}
            {s === 1 ? (
              <>
                <path d="M271 112v9" stroke={red} strokeWidth="3" />
                <Label x={180} y={201}>
                  Une couche d’atomes
                </Label>
              </>
            ) : (
              <>
                <Arrow x1={234} y1={73} x2={273} y2={73} color={gold} />
                <Label x={281} y={57}>
                  Glisser
                </Label>
                <path d="M265 111v55" stroke={violet} strokeDasharray="3 4" />
              </>
            )}
          </>
        )}
      </Frame>
    );
  if (kind === "compositeply")
    return (
      <Frame
        id={id}
        title={
          ["Des fibres longues", "Une matrice autour des fibres", "Croiser les orientations"][s]!
        }
        foot={
          s === 2 ? "Choisir les directions selon les efforts" : "Deux constituants, deux fonctions"
        }
      >
        {s < 2 ? (
          <>
            {s === 1 && (
              <path
                d="M48 88L278 67 319 103 87 128Z M48 88v53l39 38 232-24v-52L87 128Z"
                fill="#d4c5aa"
                stroke="#a49477"
                strokeWidth="2"
                opacity=".85"
              />
            )}
            {[0, 1, 2, 3, 4].map((n) => (
              <path
                key={n}
                d={`M${49 + n * 8} ${100 + n * 10}L${285 + n * 6} ${78 + n * 10}`}
                stroke={s === 1 ? "#6a91a9" : "#7d9aab"}
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
            <Label x={180} y={55}>
              {s === 0 ? "Traction dans l’axe des fibres" : "Matrice : maintien et transfert"}
            </Label>
            {s === 0 && (
              <>
                <Arrow x1={75} y1={172} x2={37} y2={176} color={gold} />
                <Arrow x1={278} y1={155} x2={323} y2={151} color={gold} />
              </>
            )}
          </>
        ) : (
          <>
            {[0, 1, 2].map((layer) => (
              <Ply30 key={layer} layer={layer} id={id} />
            ))}
            <Label x={180} y={199}>
              Vue éclatée du stratifié
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "healingcapsule")
    return (
      <Frame
        id={id}
        title={
          [
            "Des capsules dans le béton",
            "La fissure rompt une capsule",
            "L’agent peut combler la fissure",
          ][s]!
        }
        foot="Réparation locale, sous conditions"
      >
        <rect x="26" y="68" width="308" height="131" rx="8" fill="#d7d3c7" stroke="#aaa79b" />
        {Array.from({ length: 19 }, (_, i) => (
          <path
            key={i}
            d={`M${43 + (i % 7) * 41} ${86 + Math.floor(i / 7) * 40}l9-5 12 7-7 11-13-3Z`}
            fill="#b5b4a6"
            stroke="#a4a69a"
          />
        ))}
        {[
          [89, 110],
          [176, 129],
          [263, 162],
          [284, 93],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill="#bdcbb2" stroke={green} strokeWidth="2" />
            <circle cx={x} cy={y} r="7" fill="#d8b56a" />
            {s > 0 && i === 1 && (
              <path
                d="M166 120l9 10 9 11"
                stroke={s === 1 ? "#faf8ee" : gold}
                strokeWidth="4"
                fill="none"
              />
            )}
          </g>
        ))}
        {s > 0 && (
          <path
            d="M174 68l-7 26 13 20-11 20 13 17-6 28 10 20"
            stroke={s === 1 ? "#f7f6f0" : "#b9c79e"}
            strokeWidth={s === 1 ? 6 : 5}
            fill="none"
          />
        )}
        {s === 1 && (
          <>
            <Arrow x1={176} y1={131} x2={172} y2={156} color={gold} width={2} />
            <Label x={263} y={57}>
              Libération
            </Label>
          </>
        )}
        {s === 2 ? (
          <Label x={180} y={54}>
            Comblement local possible
          </Label>
        ) : s === 0 ? (
          <Label x={180} y={54}>
            Capsules et granulats distincts
          </Label>
        ) : null}
      </Frame>
    );
  return null;
}
