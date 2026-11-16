import {
  Art,
  Tag,
  Arrow,
  blue,
  gold,
  red,
  ink,
  Drop,
  Ship,
  Sprout,
  type DrawingProps,
} from "./Horizons50Parts";
export function GeographyHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "monsoonwind")
    return (
      <Art
        {...p}
        foot={s === 2 ? "Hiver : circulation inversée" : "Été : de la mer vers les terres"}
      >
        <path d="M18 160H176V202H18Z" fill="#a9cfde" />
        <path d="M176 159L219 150 267 156 309 108 342 151V202H176Z" fill="#bdc59b" />
        <Tag x={81} y={188}>
          Océan
        </Tag>
        <Tag x={257} y={188}>
          Continent
        </Tag>
        <circle cx="290" cy="61" r="19" fill={s === 2 ? "#bac9dd" : "#e0b95e"} />
        {s === 0 ? (
          <>
            <Arrow d="M238 136V82" color={red} />
            <Tag x={102} y={91}>
              Plus frais
            </Tag>
          </>
        ) : s === 1 ? (
          <>
            <Arrow d="M61 124H228Q253 124 253 86" color={blue} />
            <path d="M235 75q-15-17 0-23q13-17 25 0q27-5 24 23Z" fill="#9bafc0" />
            {[235, 253, 271].map((x) => (
              <Drop key={x} x={x} y={105} />
            ))}
          </>
        ) : (
          <Arrow d="M265 122H69" color={blue} />
        )}
      </Art>
    );
  if (kind === "pressureair")
    return (
      <Art {...p} foot={s === 2 ? "Subsidence : réchauffement" : "Ascendance : refroidissement"}>
        <path d="M18 189Q180 177 342 189V202H18Z" fill="#becda9" />
        {s < 2 ? (
          <>
            <Arrow d="M37 162H128Q180 162 180 108V70" color={blue} />
            <Arrow d="M323 162H233" color={blue} />
            <Tag x={180} y={194}>
              Basse pression
            </Tag>
            {s === 1 && (
              <>
                <path
                  d="M132 88Q114 73 132 60Q134 44 156 51Q169 30 191 52Q224 40 232 62Q252 83 226 91Z"
                  fill="#a9bdcd"
                />
                {[147, 181, 216].map((x) => (
                  <Drop key={x} x={x} y={119} />
                ))}
              </>
            )}
            {s === 0 && (
              <Tag x={180} y={51}>
                Air ascendant
              </Tag>
            )}
          </>
        ) : (
          <>
            <Arrow d="M180 60V125Q180 160 120 160H41" color={gold} />
            <Arrow d="M198 159H318" color={gold} />
            <Tag x={180} y={194}>
              Haute pression
            </Tag>
            <Tag x={180} y={51}>
              Air descendant
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "riverdelta")
    return (
      <Art {...p} foot="Apports et pertes de sédiments">
        <path d="M18 44H206Q179 102 213 143L245 202H18Z" fill="#c4cba7" />
        <path d="M206 44H342V202H245L213 143Q179 102 206 44" fill="#b5d8e5" />
        {s > 0 && (
          <path
            d={
              s === 1
                ? "M166 105L232 145 218 178 172 151Z"
                : "M162 89L285 143 271 193 200 196 165 159Z"
            }
            fill="#d0bd83"
          />
        )}
        <path
          d={
            s === 2
              ? "M113 42Q123 99 169 119L247 151M169 119L200 186M169 119L266 130"
              : "M113 42Q123 114 205 151"
          }
          stroke={blue}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={i}
            cx={s === 0 ? 124 + i * 10 : 184 + (i % 3) * 15}
            cy={s === 0 ? 88 + i * 8 : 151 + Math.floor(i / 3) * 15}
            r="3"
            fill={gold}
          />
        ))}
        <Tag x={281} y={73}>
          Mer
        </Tag>
        <Tag x={70} y={181}>
          Fleuve
        </Tag>
      </Art>
    );
  if (kind === "terracefield")
    return (
      <Art
        {...p}
        foot={s === 0 ? "Le ruissellement emporte du sol" : "Retenir, infiltrer et drainer"}
      >
        <path
          d={s === 0 ? "M18 71L342 189V202H18Z" : "M18 76H100V110H182V145H264V180H342V202H18Z"}
          fill="#c1b18c"
          stroke="#8a7859"
          strokeWidth="3"
        />
        {s > 0 &&
          [100, 182, 264].map((x, i) => (
            <g key={x}>
              <rect x={x - 10} y={76 + i * 35} width="10" height="34" fill="#8f9386" />
              <Sprout x={x - 47} y={76 + i * 35} />
            </g>
          ))}
        {[54, 136, 218, 300].map((x, i) => (
          <Drop key={x} x={x} y={44 + (i % 2) * 10} />
        ))}
        {s === 0 ? (
          <Arrow d="M78 80L305 163" color={blue} />
        ) : s === 1 ? (
          <>
            <Arrow d="M27 65H80" color={blue} />
            <Arrow d="M108 99H160" color={blue} />
          </>
        ) : (
          <>
            {[57, 139, 221].map((x, i) => (
              <Arrow key={x} d={`M${x} ${83 + i * 35}v26`} color={blue} />
            ))}
          </>
        )}
      </Art>
    );
  if (kind === "canallock") {
    const low = 170,
      high = 99,
      level = [low, 137, high][s]!;
    return (
      <Art {...p} foot="Les portes s’ouvrent à niveau égal">
        <path d="M18 172H98V199H18Z" fill="#adcfdc" />
        <path d="M98 187H107V199H98ZM253 187H262V199H253Z" fill="#a4aaa4" />
        <rect x="107" y={level} width="146" height={199 - level} fill="#a6ccdf" />
        <rect x="262" y="99" width="80" height="100" fill="#a6ccdf" />
        <path fill="none" d="M18 200H342" stroke={ink} strokeWidth="4" />
        <path
          fill="none"
          data-lock-gates="true"
          d={`M104 47V${s === 0 ? 113 : 199}M258 47V${s === 2 ? 68 : 199}`}
          stroke={gold}
          strokeWidth="7"
        />
        <Ship x={s === 0 ? 160 : s === 1 ? 180 : 274} y={level - 16} />
        {s === 1 && <Arrow d="M300 116V186H220V164" color={blue} />}
        <Tag x={180} y={53}>
          Sas
        </Tag>
        <Tag x={56} y={145}>
          Bas
        </Tag>
        <Tag x={312} y={50}>
          Haut
        </Tag>
      </Art>
    );
  }
  return null;
}
