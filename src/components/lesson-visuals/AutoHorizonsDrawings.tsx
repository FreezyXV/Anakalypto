import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  red,
  ink,
  Drop,
  Box,
  type DrawingProps,
} from "./Horizons50Parts";
export function AutoHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "fuelcellcar")
    return (
      <Art {...p} foot="Protons dedans, électrons dehors">
        <rect x="105" y="90" width="150" height="103" rx="10" fill="#e0e9ed" stroke={ink} />
        <rect x="167" y="90" width="26" height="103" fill="#d5b1bd" />
        <path d="M126 100V63H234V100" stroke={ink} strokeWidth="3" fill="none" />
        <circle cx="180" cy="63" r="18" fill="#c6dbd4" stroke={green} />
        <Tag x={180} y={69}>
          M
        </Tag>
        <Tag x={56} y={128}>
          H₂
        </Tag>
        <Tag x={306} y={128}>
          O₂
        </Tag>
        <Arrow d="M75 136H110" color={blue} />
        <Arrow d="M285 136H250" color={green} />
        {s > 0 && (
          <>
            <Arrow d="M134 147H220" color={red} />
            <Tag x={180} y={180}>
              H⁺
            </Tag>
            <Arrow d="M125 63H151" color={blue} />
            <Tag x={120} y={46}>
              e⁻
            </Tag>
          </>
        )}
        {s === 2 && (
          <>
            <Drop x={278} y={180} r={12} />
            <Arrow d="M253 174H265" color={blue} />
            <Tag x={306} y={195}>
              Eau
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "dcfastcharge")
    return (
      <Art {...p} foot={s === 2 ? "La puissance acceptée varie" : "AC : alternatif · DC : continu"}>
        <Box x={25} y={70} w={75} h={104}>
          <Tag x={63} y={100}>
            Borne
          </Tag>
          <Tag x={63} y={139}>
            {s === 0 ? "AC" : "DC"}
          </Tag>
        </Box>
        <path d="M116 91H309L338 130V181H116Z" fill="#c8dce8" stroke={ink} strokeWidth="2" />
        <Box x={129} y={123} w={76} h={44} color={s === 0 ? "#dfc695" : "#e4e8ec"}>
          <Tag x={167} y={151}>
            AC/DC
          </Tag>
        </Box>
        <Box x={245} y={128} w={67} h={38} color="#b1c5a4">
          <path d="M252 134H302V158H252Z" fill={s === 2 ? "#779e6d" : green} />
        </Box>
        {s === 0 ? (
          <>
            <Arrow d="M100 143H129" color={gold} />
            <Arrow d="M205 143H243" color={green} />
          </>
        ) : (
          <Arrow d="M100 117H277V128" color={green} />
        )}
        <Tag x={266} y={76}>
          Batterie
        </Tag>
        {s === 2 && (
          <path
            d="M244 97L262 99 277 105 297 111 319 113"
            stroke={red}
            fill="none"
            strokeWidth="3"
          />
        )}
      </Art>
    );
  if (kind === "injectorjet")
    return (
      <Art {...p} foot="Coupe d’un injecteur direct">
        <path
          d="M137 44H223V134L198 157H162L137 134Z"
          fill="#b4c6d2"
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M148 53H212V127L191 144H169L148 127Z" fill="#f0d495" />
        <path
          d={`M175 48H185V${s === 0 ? 138 : 119}L180 ${s === 0 ? 146 : 127}L175 ${s === 0 ? 138 : 119}Z`}
          fill={ink}
        />
        <path
          fill="none"
          d="M165 151L158 160M180 153V163M195 151L202 160"
          stroke={ink}
          strokeWidth="3"
        />
        {s > 0 &&
          [0, 1, 2, 3, 4].map((i) => (
            <Drop
              key={i}
              x={151 + i * 15}
              y={s === 1 ? 173 : 178 + (i % 2) * 14}
              color={gold}
              r={s === 1 ? 4 : 3}
            />
          ))}
        {s === 2 &&
          [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Drop key={i} x={126 + i * 15} y={194 + (i % 2) * 5} color={gold} r={2} />
          ))}
        <Tag x={68} y={89}>
          Aiguille
        </Tag>
        <path d="M107 86H171" stroke={ink} fill="none" />
        <Tag x={285} y={139}>
          Buse
        </Tag>
        <path fill="none" d="M257 144L203 153" stroke={ink} />
      </Art>
    );
  if (kind === "egrloop")
    return (
      <Art
        {...p}
        foot={s === 0 ? "Vanne fermée · trajet direct" : "Une partie des gaz est recirculée"}
      >
        <Box x={136} y={120} w={88} h={75}>
          <Tag x={180} y={159}>
            Moteur
          </Tag>
        </Box>
        <Arrow d="M25 148H134" color={blue} />
        <Arrow d="M226 148H335" color={red} />
        <path
          d={s === 0 ? "M282 147V76H201M159 76H82V146" : "M282 147V76H82V146"}
          stroke={s === 0 ? "#a5b1bc" : gold}
          strokeWidth="9"
          fill="none"
        />
        <circle cx="180" cy="76" r="18" fill="#e3e8ed" stroke={ink} />
        <path
          fill="none"
          d={s === 0 ? "M180 60V92" : "M165 82L195 70"}
          stroke={ink}
          strokeWidth="4"
        />
        {s > 0 && (
          <>
            <Arrow d="M259 76H211" color={red} />
            <Arrow d="M146 76H83V111" color={gold} />
          </>
        )}
        <Tag x={180} y={49}>
          Vanne EGR
        </Tag>
        <Tag x={55} y={181}>
          Air
        </Tag>
        <Tag x={293} y={181}>
          Gaz
        </Tag>
        {s === 2 && (
          <Tag x={180} y={113}>
            NOx limités
          </Tag>
        )}
      </Art>
    );
  if (kind === "beltreel") {
    const teeth = Array.from({ length: 48 }, (_, i) => {
      const a = (i * Math.PI) / 24,
        r = i % 4 < 2 ? 49 : 42;
      return `${180 + Math.cos(a) * r},${117 + Math.sin(a) * r}`;
    }).join(" ");
    return (
      <Art
        {...p}
        foot={s === 2 ? "Le cliquet retient la roue" : "Capteur sensible à la décélération"}
      >
        <path d="M29 47H319V198H29Z" fill="#e0e9ee" stroke="#9aaebc" />
        <polygon points={teeth} fill="#97b1c1" stroke={ink} strokeWidth="2" />
        <circle cx="180" cy="117" r="28" fill="#d8be90" stroke={ink} />
        <circle cx="180" cy="117" r="7" fill={ink} />
        <path fill="none" d="M180 89H323" stroke="#b89a70" strokeWidth="12" />
        <path
          d={s === 0 ? "M260 157L242 143 249 131 273 146Z" : "M254 155L223 143 218 127 267 143Z"}
          fill={gold}
          stroke={ink}
          strokeWidth="2"
        />
        <circle cx="264" cy="149" r="5" fill={ink} />
        <path
          fill="none"
          d={s === 0 ? "M276 164V181" : "M276 164L290 178"}
          stroke={ink}
          strokeWidth="3"
        />
        <circle cx={s === 0 ? 276 : 290} cy={s === 0 ? 185 : 180} r="9" fill={blue} />
        <Tag x={88} y={187}>
          Enrouleur
        </Tag>
        <Tag x={78} y={76}>
          Sangle
        </Tag>
        {s === 2 && <path fill="none" d="M213 132l8 11m-8 0l8-11" stroke={red} strokeWidth="3" />}
      </Art>
    );
  }
  return null;
}
