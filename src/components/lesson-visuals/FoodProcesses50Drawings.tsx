import {
  ArtFrame,
  Arrow,
  Label,
  Jar,
  Microbe,
  Drop,
  blue,
  green,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
function Salad({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[-17, 0, 17].map((v, i) => (
        <path
          key={v}
          d={`M${v} 15q-22-19-5-33q18-9 24 10q3 19-19 23Z`}
          fill={i % 2 ? "#83af74" : "#b0c68c"}
          stroke={green}
        />
      ))}
    </g>
  );
}
export function FoodProcesses50Drawing(p: DrawingProps) {
  const { kind, step: s, id } = p;
  if (kind === "lactase")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Fermentation possible dans le côlon" : "Deux sucres, formes symboliques"}
      >
        <path
          d="M26 79Q100 47 174 79T334 79M26 181Q100 149 174 181T334 181"
          fill="none"
          stroke="#c99da4"
          strokeWidth="9"
        />
        {s < 2 ? (
          <>
            <circle cx={s === 1 ? 112 : 147} cy="118" r="22" fill="#d7b76d" stroke={gold} />
            <path
              d={`M${s === 1 ? 225 : 206} 96l22 13v25l-22 13-22-13v-25Z`}
              fill="#a6c9d3"
              stroke={blue}
            />
            {s === 0 ? (
              <path d="M169 118h15" stroke={ink} strokeWidth="5" />
            ) : (
              <>
                <path
                  d="M157 126q-5-29 22-30l10 15 12-10q23 25-2 38Z"
                  fill="#acbd91"
                  stroke={green}
                />
                <Label x={180} y={177}>
                  Lactase
                </Label>
                <Arrow x1={150} y1={67} x2={105} y2={81} />
                <Arrow x1={210} y1={67} x2={255} y2={81} />
              </>
            )}
            <Label x={95} y={57}>
              {s === 0 ? "Lactose" : "Unités séparées"}
            </Label>
          </>
        ) : (
          <>
            <circle cx="85" cy="118" r="18" fill="#d7b76d" />
            <path d="M122 103l16 10v19l-16 9-16-9v-19Z" fill="#a6c9d3" />
            <path d="M103 119h4" stroke={ink} strokeWidth="4" />
            <Arrow x1={151} y1={121} x2={201} y2={121} />
            <Microbe x={236} y={118} scale={1.5} />
            <Microbe x={285} y={151} />
            {[
              [265, 77],
              [285, 91],
              [310, 65],
            ].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="7" fill="none" stroke={blue} />
            ))}
            <Label x={268} y={194}>
              Gaz possibles
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "vinegarair")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 0 ? "Une première transformation a eu lieu" : "L’acétification utilise de l’oxygène"
        }
      >
        <Jar id={id} open level={103} color={s === 2 ? "#b88452" : "#a9687c"}>
          {s > 0 && (
            <>
              <path d="M118 110q50-7 124 0" fill="none" stroke="#d6c2a9" strokeWidth="6" />
              {[145, 175, 205].map((x) => (
                <Microbe key={x} x={x} y={116} color="#e8d0a3" scale={0.7} />
              ))}
            </>
          )}
        </Jar>
        {s === 0 ? (
          <>
            <path d="M49 112q-9-23 9-27t18 22q2 19-14 21Z" fill="#83608a" />
            <path d="M61 87l5-15" stroke={green} strokeWidth="3" />
            <Label x={65} y={161}>
              Alcool
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={66} y1={73} x2={142} y2={98} />
            <Label x={64} y={61}>
              O₂
            </Label>
            <Arrow x1={293} y1={74} x2={217} y2={98} />
            <Label x={296} y={61}>
              O₂
            </Label>
          </>
        )}
        {s === 2 && (
          <>
            <Label x={180} y={154}>
              Acide
            </Label>
            <Label x={180} y={178}>
              acétique
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "lactojar")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Acidité croissante · tendance" : "Mécanisme, pas une recette"}
      >
        <Jar id={id} level={95} color="#c8d8ac">
          {Array.from({ length: 15 }, (_, i) => (
            <path
              key={i}
              d={`M${134 + (i % 4) * 27} ${130 + Math.floor(i / 4) * 16}l${i % 2 ? 16 : -10} 11`}
              stroke={i % 3 ? green : "#d49c5b"}
              strokeWidth="7"
              strokeLinecap="round"
            />
          ))}
          <rect x="125" y="107" width="110" height="11" rx="3" fill="#9ca7a0" />
          {s > 0 &&
            [132, 178, 218].map((x, i) => (
              <g key={x}>
                <Microbe x={x} y={137 + i * 17} scale={0.65} />
                <circle cx={x + 5} cy={100 - i * 5} r="3" fill="none" stroke="#fff" />
              </g>
            ))}
        </Jar>
        <path d="M95 94H120" stroke={blue} strokeWidth="2" />
        <Label x={63} y={85}>
          Liquide
        </Label>
        {s === 0 ? (
          <>
            <Label x={294} y={93}>
              Poids
            </Label>
            <Arrow x1={275} y1={100} x2={233} y2={110} color={ink} />
          </>
        ) : s === 1 ? (
          <>
            <Microbe x={293} y={146} scale={1.6} />
            <Label x={294} y={187}>
              Bactéries
            </Label>
          </>
        ) : (
          <>
            <rect x="280" y="80" width="16" height="91" rx="8" fill="#e0e6cf" />
            <rect x="280" y="112" width="16" height="59" rx="8" fill={gold} />
            <Arrow x1={311} y1={91} x2={311} y2={163} color={gold} />
            <Label x={294} y={197}>
              Acides
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "crossboard")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Séparer, nettoyer, laver les mains" : "Les points figurent des microbes"}
      >
        <rect x="27" y="104" width="129" height="70" rx="11" fill="#d6b894" stroke="#ad8c64" />
        <rect
          x="204"
          y="104"
          width="129"
          height="70"
          rx="11"
          fill={s === 2 ? "#b8d1ad" : "#d6b894"}
          stroke={s === 2 ? green : "#ad8c64"}
        />
        <path
          d="M54 132q-3-31 27-36q30-2 30 22l14 9-3 10-20-3q-30 20-48-2Z"
          fill="#dfadb0"
          stroke={red}
        />
        <Salad x={266} y={123} />
        {[66, 90, 121].map((x, i) => (
          <Microbe key={x} x={x} y={150 - i * 7} scale={0.5} color={red} />
        ))}
        {s === 1 ? (
          <>
            <Arrow x1={155} y1={137} x2={205} y2={137} color={red} />
            {[242, 266, 292].map((x, i) => (
              <Microbe key={x} x={x} y={145 - i * 9} scale={0.5} color={red} />
            ))}
            <path d="M116 85l33-27 5 10-29 26Z" fill="#b9c9d3" stroke={ink} />
          </>
        ) : s === 2 ? (
          <>
            <path d="M180 90v92" stroke={green} strokeWidth="3" strokeDasharray="5 5" />
            <path d="M164 65l10 10 21-23" fill="none" stroke={green} strokeWidth="4" />
          </>
        ) : (
          <Arrow x1={91} y1={111} x2={91} y2={145} color={red} />
        )}
        <Label x={91} y={197}>
          Cru
        </Label>
        <Label x={269} y={197}>
          Prêt à manger
        </Label>
      </ArtFrame>
    );
  if (kind === "solardryer")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Séchoir indirect en coupe" : "L’air emporte la vapeur d’eau"}
      >
        <path d="M33 181L119 104 166 124 95 192Z" fill="#6e8088" stroke={ink} strokeWidth="2" />
        <path d="M38 171L119 96 166 114 91 184Z" fill="#c1dae1" opacity=".65" stroke="#7c9dad" />
        <rect
          x="163"
          y="70"
          width="124"
          height="122"
          rx="6"
          fill="#b7a080"
          stroke="#795f46"
          strokeWidth="2"
        />
        <rect x="175" y="83" width="99" height="96" fill="#e9dfc7" />
        {[112, 143, 171].map((y) => (
          <g key={y}>
            <path d={`M176 ${y}h97`} stroke="#80684e" strokeWidth="3" />
            {[192, 220, 249].map((x, i) => (
              <ellipse
                key={x}
                cx={x}
                cy={y - 7}
                rx={s === 2 ? 8 : 11}
                ry={s === 2 ? 3 : 5}
                fill={i % 2 ? "#d09a50" : "#b85d4f"}
              />
            ))}
          </g>
        ))}
        <path d="M165 169H144m143-79h25V59" stroke="#9aa7a2" strokeWidth="11" fill="none" />
        <circle cx="61" cy="62" r="15" fill="#edd27f" />
        <Arrow x1={78} y1={78} x2={105} y2={104} color={gold} />
        {s > 0 && (
          <>
            <Arrow x1={32} y1={188} x2={105} y2={151} color={gold} />
            <Arrow x1={112} y1={151} x2={172} y2={158} color={gold} />
            <Arrow x1={262} y1={160} x2={262} y2={92} color={gold} />
            <Arrow x1={310} y1={82} x2={310} y2={42} />
            {s === 2 && [289, 312, 331].map((x, i) => <Drop key={x} x={x} y={52 + i * 12} r={3} />)}
          </>
        )}
      </ArtFrame>
    );
  return null;
}
