import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  red,
  ink,
  Box,
  Microbe,
  type DrawingProps,
} from "./Horizons50Parts";
export function FoodHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "dietfibre")
    return (
      <Art {...p} foot="Certaines fibres sont fermentées">
        <path
          d="M47 81H296Q321 81 321 104V159Q321 181 296 181H61Q38 181 38 159V108Q38 97 49 97H279Q298 97 298 115V148Q298 159 279 159H76"
          fill="none"
          stroke="#c69991"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {Array.from({ length: 4 }, (_, i) => (
          <path key={i} d={`M${68 + i * 19} 118l7-8 7 8-7 8Z`} fill={gold} stroke="#b28d46" />
        ))}
        {s > 0 && [167, 209, 252].map((x) => <Microbe key={x} x={x} y={120} color={green} />)}
        {s === 2 ? (
          <>
            <Arrow d="M184 132V156" color={green} />
            {[168, 184, 200].map((x) => (
              <circle key={x} cx={x} cy="149" r="3" fill={blue} />
            ))}
            <Tag x={181} y={65}>
              Côlon
            </Tag>
            <Tag x={180} y={198}>
              Fibres · microbes · échanges
            </Tag>
          </>
        ) : (
          <Tag x={180} y={198}>
            Fibres non digérées en amont
          </Tag>
        )}
      </Art>
    );
  if (kind === "essentialamino")
    return (
      <Art {...p} foot="Les acides aminés, des unités">
        <Tag x={180} y={54}>
          {["Une protéine alimentaire", "Des unités absorbées", "Une protéine du corps"][s]}
        </Tag>
        {Array.from({ length: 8 }, (_, i) => {
          const x = s === 1 ? 61 + (i % 4) * 76 : 42 + i * 39,
            y =
              s === 1 ? 99 + Math.floor(i / 4) * 58 : s === 2 ? 123 + Math.sin(i * 0.9) * 23 : 111;
          return (
            <g key={i}>
              {s !== 1 && i < 7 && (
                <path
                  fill="none"
                  d={`M${x} ${y}L${42 + (i + 1) * 39} ${s === 2 ? 123 + Math.sin((i + 1) * 0.9) * 23 : 111}`}
                  stroke={ink}
                  strokeWidth="3"
                />
              )}
              <circle
                cx={x}
                cy={y}
                r="12"
                fill={[blue, gold, red, green][s === 2 ? (7 - i) % 4 : i % 4]}
              />
            </g>
          );
        })}
        {s === 0 && <path fill="none" d="M151 83l17 56m-17 0l17-56" stroke={red} strokeWidth="2" />}
        {s === 2 && (
          <Tag x={180} y={191}>
            9 acides aminés indispensables
          </Tag>
        )}
      </Art>
    );
  if (kind === "nutritionlabel")
    return (
      <Art {...p} foot="Exemple fictif : comparer pour 100 g">
        <Box x={27} y={54} w={132} h={146} color="#f3ecda">
          <Tag x={93} y={80}>
            Produit A
          </Tag>
          <path fill="none" d="M39 92H147M39 145H147" stroke="#a5a794" />
          <Tag x={93} y={119}>
            100 g
          </Tag>
          <Tag x={93} y={171}>
            10 g sucres
          </Tag>
        </Box>
        <Box x={201} y={54} w={132} h={146} color="#e1ebdc">
          <Tag x={267} y={80}>
            {s === 2 ? "Portion A" : "Produit B"}
          </Tag>
          <path fill="none" d="M213 92H321M213 145H321" stroke="#a5a794" />
          <Tag x={267} y={119}>
            {s === 2 ? "30 g" : "100 g"}
          </Tag>
          <Tag x={267} y={171}>
            {s === 2 ? "3 g sucres" : "6 g sucres"}
          </Tag>
        </Box>
        {s > 0 && <Arrow d="M161 120H198" color={s === 2 ? green : blue} />}
      </Art>
    );
  if (kind === "barrierpack")
    return (
      <Art {...p} foot={s === 2 ? "Le vide ne stérilise pas" : "Une barrière autour de l’aliment"}>
        <rect
          x="81"
          y="67"
          width="198"
          height="131"
          rx="14"
          fill="#d7e6eb"
          stroke={blue}
          strokeWidth="3"
        />
        <path fill="none" d="M94 78H266" stroke={ink} strokeWidth="5" />
        <path
          d="M119 147Q128 101 180 108Q232 105 241 149Q204 178 153 166Z"
          fill="#d5ab85"
          stroke="#997253"
        />
        {Array.from({ length: s === 0 ? 13 : 3 }, (_, i) => (
          <circle key={i} cx={100 + ((i * 41) % 161)} cy={88 + ((i * 29) % 93)} r="3" fill={blue} />
        ))}
        <Microbe x={48} y={126} color={red} />
        {s === 0 && <path fill="none" d="M60 126H77m-7-8l8 16" stroke={red} strokeWidth="2" />}
        {s === 1 && <Arrow d="M183 89V49" color={blue} />}{" "}
        {s === 2 && (
          <>
            <Microbe x={178} y={134} />
            <Tag x={180} y={52}>
              Microbes possibles
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "pasteurheat")
    return (
      <Art
        {...p}
        foot={s === 2 ? "Traitement + emballage adaptés" : "Spores résistantes possibles"}
      >
        <Box
          x={46}
          y={65}
          w={269}
          h={123}
          color={s === 0 ? "#e1e9ed" : s === 1 ? "#efd4b2" : "#e9c2a2"}
        >
          {[83, 131, 179, 227, 275].map((x, i) => (
            <g key={x}>
              {s === 0 ? (
                <Microbe x={x} y={115} />
              ) : s === 1 && i < 2 ? (
                <Microbe x={x} y={115} color="#a8aaa0" />
              ) : null}
              {s < 2 && i % 2 === 0 && (
                <g>
                  <ellipse
                    cx={x}
                    cy="158"
                    rx="11"
                    ry="7"
                    fill="#dfc07d"
                    stroke={ink}
                    strokeWidth="2"
                  />
                  <ellipse cx={x} cy="158" rx="5" ry="3" fill={gold} />
                </g>
              )}
            </g>
          ))}
          {s === 2 && (
            <Tag x={180} y={134}>
              Stabilité commerciale
            </Tag>
          )}
        </Box>
        <Tag x={180} y={51}>
          {["Cellules et spores", "Cellules ciblées détruites", "Traitement plus intense"][s]}
        </Tag>
      </Art>
    );
  return null;
}
