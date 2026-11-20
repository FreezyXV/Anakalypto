import { SteelProcessDrawing } from "./SteelProcessDrawing";
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
  type DrawingProps,
} from "./Horizons50Parts";
export function IndustryHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "ammoniasynthesis")
    return (
      <Art {...p} foot="N₂ + 3 H₂ ⇌ 2 NH₃">
        <Tag x={72} y={60}>
          {s === 2 ? "Gaz entrants" : "Azote"}
        </Tag>
        <Tag x={279} y={60}>
          {s === 2 ? "NH₃" : "Hydrogène"}
        </Tag>
        {s === 0 ? (
          <>
            <path fill="none" d="M66 103H90" stroke={blue} strokeWidth="8" />
            {[66, 90].map((x) => (
              <circle key={x} data-nitrogen cx={x} cy="103" r="17" fill={blue} />
            ))}
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path fill="none" d={`M${225 + i * 38} 115v-15`} stroke={ink} />
                {[100, 115].map((y) => (
                  <circle
                    key={y}
                    data-hydrogen
                    cx={225 + i * 38}
                    cy={y}
                    r="9"
                    fill="#ecedf2"
                    stroke={ink}
                  />
                ))}
              </g>
            ))}
          </>
        ) : s === 1 ? (
          <>
            {[105, 255].map((x) => (
              <g key={x}>
                <circle data-nitrogen cx={x} cy="126" r="17" fill={blue} />
                {[-90, 30, 150].map((a) => (
                  <g key={a} transform={`translate(${x} 126) rotate(${a})`}>
                    <path fill="none" d="M0 0H29" stroke={ink} />
                    <circle data-hydrogen cx="29" r="9" fill="#ecedf2" stroke={ink} />
                  </g>
                ))}
              </g>
            ))}
          </>
        ) : (
          <>
            <Box x={116} y={82} w={128} h={62}>
              <Tag x={180} y={119}>
                Réacteur
              </Tag>
            </Box>
            <Arrow d="M35 112H115" color={blue} />
            <Arrow d="M245 113H318V178H180V146" color={gold} />
            <Arrow d="M268 112V66" color={green} />
            <Tag x={278} y={193}>
              Gaz restants
            </Tag>
          </>
        )}{" "}
        {s === 0 && (
          <Tag x={180} y={181}>
            2 N et 6 H
          </Tag>
        )}
        {s === 1 && (
          <Tag x={180} y={189}>
            Mêmes atomes
          </Tag>
        )}
      </Art>
    );
  if (kind === "floatglass")
    return (
      <Art
        {...p}
        foot={s === 2 ? "Recuisson : limiter les contraintes" : "Un verre sodocalcique, simplifié"}
      >
        {s === 0 ? (
          <>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path
                  d={`M${30 + i * 109} 160l37-51 37 51Z`}
                  fill={["#c8b88b", "#dbdfe1", "#b7c8ab"][i]}
                  stroke="#8a8d80"
                />
                <Tag x={67 + i * 109} y={192}>
                  {["Silice", "Fondant", "Chaux"][i]}
                </Tag>
              </g>
            ))}
          </>
        ) : s === 1 ? (
          <>
            <path d="M48 72H312V190H48Z" fill="#b9a08d" stroke={ink} />
            <path d="M66 95H294V175H66Z" fill="#dfb57c" />
            <path d="M66 141Q180 126 294 141V175H66Z" fill="#d68b56" />
            {[109, 166, 231].map((x, i) => (
              <circle key={x} cx={x} cy={120 - i * 8} r={6 + i} fill="#f8d4a4" stroke="#b97949" />
            ))}
            <Tag x={180} y={60}>
              Fusion et affinage
            </Tag>
          </>
        ) : (
          <>
            <path fill="none" d="M31 93H195" stroke={ink} strokeWidth="6" />
            <path
              d="M196 78C253 69 278 109 257 147C232 179 186 151 190 119Z"
              fill="#c1dedb"
              stroke={blue}
              strokeWidth="3"
            />
            <path d="M204 94Q245 89 251 116" stroke="#f9fbf8" fill="none" strokeWidth="4" />
            <Arrow d="M66 121H157" color={blue} />
            <Tag x={180} y={192}>
              Soufflage
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "steelroutes") return <SteelProcessDrawing {...p} />;
  if (kind === "visionreject")
    return (
      <Art {...p} foot="Un défaut visible, un critère">
        <path d="M22 151H336V175H22Z" fill="#bccbd4" stroke={ink} />
        {[50, 120, 190, 260, 322].map((x) => (
          <circle key={x} cx={x} cy="164" r="8" fill="#718a99" />
        ))}
        {[80, 180, 280].map((x, i) => (
          <g key={x} transform={s === 2 && i === 1 ? "translate(40 52)" : ""}>
            <rect
              x={x - 22}
              y="118"
              width="44"
              height="30"
              rx="3"
              fill={i === 1 ? gold : "#a9c2a0"}
              stroke={ink}
            />
            {i !== 1 && <circle cx={x} cy="133" r="7" fill="#edf2f6" stroke={ink} />}
          </g>
        ))}
        <rect x="157" y="48" width="46" height="34" rx="5" fill={ink} />
        <circle cx="180" cy="71" r="12" fill={blue} />
        <path d="M170 84L150 117H210L190 84" fill={gold} opacity=".2" />
        {s > 0 && (
          <>
            <path d="M157 113h-9v37h9m47-37h9v37h-9" stroke={red} fill="none" strokeWidth="3" />
            <Tag x={281} y={86}>
              Trou absent
            </Tag>
          </>
        )}
        {s === 2 && <Arrow d="M188 171L208 193" color={red} />}
        <Tag x={77} y={74}>
          Caméra
        </Tag>
      </Art>
    );
  if (kind === "interchangefit") {
    const shaft = s === 0 ? 40 : 14;
    return (
      <Art {...p} foot="Conforme à une plage de dimensions">
        <path
          d="M34 86H126V162H34ZM58 109V139H102V109Z"
          fill="#b5c8d5"
          fillRule="evenodd"
          stroke={ink}
          strokeWidth="2"
        />
        <rect
          x={s === 2 ? 59 : 183}
          y={s === 2 ? 113 : 115}
          width="43"
          height={shaft}
          rx="2"
          fill={gold}
          stroke={ink}
        />
        <path d="M211 98V80H262V98M262 80H296" stroke={ink} fill="none" strokeWidth="4" />
        {s === 0 ? (
          <path fill="none" d="M148 114l16 16m-16 0l16-16" stroke={red} strokeWidth="3" />
        ) : s === 1 ? (
          <>
            <path d="M185 141V157H225V141" fill="none" stroke={green} strokeWidth="4" />
            <Tag x={231} y={193}>
              Jauge
            </Tag>
          </>
        ) : (
          <Arrow d="M189 125H133" color={green} />
        )}
        <Tag x={80} y={59}>
          Logement
        </Tag>
        <Tag x={240} y={59}>
          Pièce
        </Tag>
      </Art>
    );
  }
  return null;
}
