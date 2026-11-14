import {
  ArtFrame,
  Arrow,
  Label,
  Microbe,
  Drop,
  blue,
  green,
  gold,
  red,
  type DrawingProps,
} from "./Exploration50Parts";
function Cloud({ x = 180, y = 78 }: { x?: number; y?: number }) {
  return (
    <path
      d={`M${x - 64} ${y + 18}q-20-28 8-40q10-30 39-19q28-19 43 9q35-4 41 23q3 27-28 27Z`}
      fill="#cddce4"
      stroke="#8da7b7"
      strokeWidth="1.5"
    />
  );
}
export function Hydrology50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "wetlandsponge")
    return (
      <ArtFrame
        {...p}
        foot={s === 1 ? "Le stockage a une capacité limitée" : "Les échanges dépendent du milieu"}
      >
        <path d="M24 151q50 0 90 14t100-3t122-11v49H24Z" fill="#cab891" />
        <path d="M24 148q50 0 90 14t100-3t122-11" stroke="#78986b" strokeWidth="5" fill="none" />
        <path
          d={`M24 ${s === 1 ? 118 : 150}q43-9 76 6t90 1t146-7v32q-77 20-125 16t-99-1t-88 0Z`}
          fill="#b8d6df"
          opacity=".8"
        />
        {[70, 97, 230, 268, 298].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 156v-50m0 22-10-9m10 0 9-12`} stroke={green} strokeWidth="2" />
            <path d={`M${x} 105v-14`} stroke="#92774c" strokeWidth="5" strokeLinecap="round" />
            {s === 1 && <Drop x={x + 12} y={61 + (i % 2) * 15} r={4} />}
          </g>
        ))}
        {s === 0 ? (
          <>
            <Arrow x1={41} y1={135} x2={96} y2={143} />
            <Label x={179} y={75}>
              Sol et dépressions
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={28} y1={113} x2={101} y2={128} />
            <Arrow x1={288} y1={139} x2={218} y2={151} />
            <Label x={177} y={73}>
              Stockage temporaire
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={174} y1={169} x2={319} y2={159} />
            <Arrow x1={184} y1={173} x2={184} y2={194} />
            <Label x={177} y={75}>
              Restitution progressive
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "sewageplant")
    return (
      <ArtFrame {...p} foot="Rejet traité, pas d’eau potable">
        <path
          d="M26 95v67h78V95m35 0v67h83V95m28 0v50l15 17h51l17-17V95"
          fill="#bfd9e3"
          stroke="#7e9eae"
          strokeWidth="2"
        />
        <path d="M62 99v58m7-58v58m7-58v58" stroke="#748997" strokeWidth="3" />
        {[
          [39, 116],
          [51, 138],
          [42, 151],
        ].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y}l7-4 5 7-8 5Z`} fill="#947c58" />
        ))}
        <path d="M105 119h30m89 0h24m87 0h10" stroke={blue} strokeWidth="4" />
        <Label x={65} y={80}>
          Grille
        </Label>
        <Label x={180} y={80}>
          Bactéries
        </Label>
        <Label x={292} y={80}>
          Clarifier
        </Label>
        {s > 0 && (
          <>
            {[155, 178, 204].map((x, i) => (
              <g key={x}>
                <Microbe x={x} y={125 + i * 8} scale={0.6} />
                <circle cx={x} cy={112 - i * 5} r="3" stroke="#fff" fill="none" />
              </g>
            ))}
            <path d="M145 153h69" stroke="#8c9da7" strokeWidth="3" />
          </>
        )}
        {s === 2 ? (
          <>
            <path d="M260 146l14 14h40l12-14Z" fill="#a29177" />
            <path d="M291 162v24H182v-22" fill="none" stroke={gold} strokeWidth="3" />
            <Arrow x1={258} y1={186} x2={206} y2={186} color={gold} />
            <Label x={278} y={198}>
              Boues recyclées
            </Label>
            <Arrow x1={337} y1={119} x2={347} y2={119} />
          </>
        ) : (
          <>
            <Arrow
              x1={s === 0 ? 84 : 169}
              y1={176}
              x2={s === 0 ? 112 : 202}
              y2={176}
              color={gold}
            />
            <Label x={180} y={204}>
              {s === 0 ? "Retenir les gros déchets" : "Air pour le traitement biologique"}
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "stormcharges")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "L’air chauffé produit le tonnerre" : "Exemple de foudre négative au sol"}
      >
        <Cloud x={180} y={91} />
        <path d="M24 193H336" stroke="#8b9b77" strokeWidth="7" />
        {s === 0 ? (
          <>
            <path
              d="M133 69l12 12m0-12-12 12m-3-6h18m-9-9v18M208 59l12 12m0-12-12 12m-3-6h18m-9-9v18"
              stroke="#eef8fc"
              strokeWidth="2"
            />
            <circle cx="172" cy="107" r="7" fill="#8fa6b5" />
            <circle cx="215" cy="112" r="8" fill="#8fa6b5" />
            <Arrow x1={267} y1={125} x2={267} y2={59} />
            <Label x={82} y={162}>
              Collisions
            </Label>
          </>
        ) : (
          <>
            {[137, 178, 219].map((x) => (
              <g key={x}>
                <Label x={x} y={75} color={red}>
                  +
                </Label>
                <Label x={x} y={103} color={blue}>
                  −
                </Label>
                <Label x={x} y={185} color={red}>
                  +
                </Label>
              </g>
            ))}
            {s === 2 && (
              <>
                <path
                  d="M187 105l-18 36 13 4-19 24 8 3-14 19"
                  stroke="#d7ac38"
                  strokeWidth="7"
                  fill="none"
                />
                <path
                  d="M187 105l-18 36 13 4-19 24 8 3-14 19"
                  stroke="#fff1bb"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M211 152q17 3 19 18m-14-27q24 3 27 27"
                  stroke={gold}
                  strokeWidth="2"
                  fill="none"
                />
              </>
            )}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "waterjourney")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Évaporation : vapeur invisible" : "Nuages : gouttes ou cristaux"}
      >
        <path d="M25 156q62-11 128 2v41H25Z" fill="#b6d8e5" />
        <path d="M145 159l67-66 48 41 32-17 44 43v39H145Z" fill="#b5c0a2" stroke="#91a083" />
        <path d="M191 113l21-20 23 20-13-3-10 7-9-7Z" fill="#f0f4e8" />
        <path d="M25 158q34-8 68 0t60 0" fill="none" stroke="#84b5c9" strokeWidth="2" />
        <circle cx="46" cy="56" r="17" fill="#ead082" />
        {s === 0 ? (
          <>
            <Arrow x1={72} y1={145} x2={72} y2={79} />
            <Arrow x1={106} y1={145} x2={106} y2={102} />
            <Label x={223} y={59}>
              Énergie solaire
            </Label>
          </>
        ) : (
          <>
            <Cloud x={206} y={73} />
            {[183, 212, 244].map((x, i) => (
              <Drop key={x} x={x} y={111 + i * 8} r={4} />
            ))}
            <Arrow x1={94} y1={131} x2={94} y2={82} />
          </>
        )}
        {s === 2 && (
          <>
            <path d="M236 141q-40 2-42 14t-51 11" stroke={blue} strokeWidth="4" fill="none" />
            <Arrow x1={193} y1={158} x2={146} y2={166} />
            <Arrow x1={270} y1={162} x2={270} y2={187} />
            <Arrow x1={251} y1={187} x2={154} y2={187} dashed />
            <Label x={92} y={197}>
              Mer
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "watershedridge")
    return (
      <ArtFrame {...p} foot={s === 2 ? "Les affluents convergent" : "Partage des eaux de surface"}>
        {s < 2 ? (
          <>
            <path
              d="M24 183l156-122 156 122v17H24Z"
              fill="#c0bc9e"
              stroke="#948e72"
              strokeWidth="2"
            />
            <path d="M24 183L180 61v139H24Z" fill="#a4c1be" opacity=".7" />
            <path d="M180 61l156 122v17H180Z" fill="#bed19f" opacity=".7" />
            <path d="M180 53v145" stroke={gold} strokeDasharray="5 4" strokeWidth="3" />
            <Label x={180} y={43}>
              Crête
            </Label>
            {s === 0 ? (
              <>
                <Drop x={160} y={90} r={5} />
                <Drop x={201} y={90} r={5} />
              </>
            ) : (
              <>
                <Arrow x1={140} y1={107} x2={73} y2={162} />
                <Arrow x1={219} y1={107} x2={286} y2={162} color={green} />
                <Drop x={120} y={89} r={4} />
                <Drop x={245} y={109} r={4} />
              </>
            )}
            <Label x={94} y={197}>
              Bassin A
            </Label>
            <Label x={267} y={197}>
              Bassin B
            </Label>
          </>
        ) : (
          <>
            <path d="M28 83q72-78 137-19l-15 113-54 20-67-41Z" fill="#bdd6d9" stroke="#8fadb4" />
            <path d="M195 64q65-59 137 19l1 73-67 41-54-20Z" fill="#c7d9b3" stroke="#91ac7b" />
            {[0, 1].map((col) => (
              <g key={col} transform={`translate(${col * 168} 0)`}>
                <path
                  d="M62 81l36 42 30-35m-30 35-4 49M48 123l48 19m-2 30-11 18"
                  fill="none"
                  stroke={col ? green : blue}
                  strokeWidth="3"
                />
                <Arrow x1={95} y1={147} x2={94} y2={177} color={col ? green : blue} />
                <circle cx="83" cy="190" r="5" fill={col ? green : blue} />
              </g>
            ))}
            <path d="M180 50v142" stroke={gold} strokeDasharray="5 4" />
            <Label x={180} y={198}>
              Deux exutoires
            </Label>
          </>
        )}
      </ArtFrame>
    );
  return null;
}
