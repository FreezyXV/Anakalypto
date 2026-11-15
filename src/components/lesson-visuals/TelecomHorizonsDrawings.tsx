import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  ink,
  Satellite,
  Tower,
  Box,
  type DrawingProps,
} from "./Horizons50Parts";
export function TelecomHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "cellhandoff") {
    const px = [115, 180, 235][s]!;
    return (
      <Art {...p} foot="Le réseau organise le transfert">
        <ellipse cx="96" cy="131" rx="89" ry="57" fill="#deebf4" />
        <ellipse cx="264" cy="131" rx="89" ry="57" fill="#dcebdc" />
        <Tower x={85} y={170} active={s < 2} />
        <Tower x={275} y={170} active={s > 0} />
        <path d="M85 170V194H275V170" stroke={ink} fill="none" strokeWidth="2" />
        <Tag x={180} y={194}>
          Réseau
        </Tag>
        <rect x={px - 10} y="104" width="20" height="36" rx="4" fill={ink} />
        <rect x={px - 6} y="110" width="12" height="21" fill="#b3cfde" />
        <path
          fill="none"
          d={`M${px} 104L${s === 2 ? 275 : 85} 94`}
          stroke={s === 2 ? green : blue}
          strokeWidth="3"
          strokeDasharray="5 3"
        />
        {s === 1 && (
          <path
            fill="none"
            d="M180 104L275 94"
            stroke={green}
            strokeWidth="3"
            strokeDasharray="5 3"
          />
        )}
        <Arrow d="M142 64H220" color={gold} />
        <Tag x={76} y={54}>
          Cellule A
        </Tag>
        <Tag x={276} y={54}>
          Cellule B
        </Tag>
      </Art>
    );
  }
  if (kind === "radiospectrum")
    return (
      <Art {...p} foot="Bandes fictives, sans échelle">
        <path fill="none" d="M30 165H330" stroke={ink} strokeWidth="2" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={35 + i * 104}
              y={s === 0 ? 112 : 83}
              width="82"
              height={s === 0 ? 40 : 69}
              rx="7"
              fill={[blue, green, gold][i]}
              opacity={s === 0 && i > 0 ? 0.13 : 1}
            />
            <Tag x={76 + i * 104} y={187}>
              {["Mobile", "Radio", "Satellite"][i]}
            </Tag>
          </g>
        ))}
        <path
          d={
            "M35 65" +
            Array.from(
              { length: 55 },
              (_, i) => `L${35 + i * 5} ${65 + Math.sin(i * 0.75) * 15}`,
            ).join("")
          }
          stroke={blue}
          fill="none"
          strokeWidth="2"
        />
        {s === 2 && (
          <>
            <path
              fill="none"
              d="M139 82V155M243 82V155"
              stroke={ink}
              strokeWidth="3"
              strokeDasharray="4 4"
            />
            <Tag x={180} y={45}>
              Coordonner les usages
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "satrelay")
    return (
      <Art {...p} foot="Émission → relais → réception">
        <path d="M18 179Q180 111 342 179V203H18Z" fill="#b5cedc" />
        <Satellite x={180} y={66} />
        <Tower x={64} y={187} />
        {[265, 300].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 15} 158q12 27 29 0M${x} 174v18`}
              stroke={ink}
              fill="none"
              strokeWidth="3"
            />
          </g>
        ))}
        <Arrow d="M77 130L149 83" color={blue} />
        {s > 0 && <Arrow d="M204 85L269 145" color={green} />}{" "}
        {s === 2 && <Arrow d="M210 81L302 143" color={green} />}
        <Tag x={76} y={113}>
          Sol
        </Tag>
        <Tag x={281} y={116}>
          Réception
        </Tag>
      </Art>
    );
  if (kind === "leoconstellation")
    return (
      <Art {...p} foot="Déplacement vu du sol">
        <path d="M18 189Q180 114 342 189V203H18Z" fill="#b2d0ca" />
        <path
          d="M28 112Q180 9 332 112"
          stroke="#8b9baa"
          fill="none"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <Satellite x={s === 0 ? 107 : 66} y={s === 0 ? 74 : 96} />
        {s > 0 && <Satellite x={218} y={64} />} {s === 2 && <Satellite x={304} y={99} />}
        <Tower x={180} y={191} />
        <path
          d={s === 0 ? "M107 92L176 140" : "M218 80L184 140"}
          stroke={blue}
          strokeWidth="3"
          fill="none"
        />
        {s > 0 && <path d="M218 80L139 161H268Z" fill={blue} opacity=".12" />}
        <Tag x={180} y={45}>
          {s === 0 ? "Un passage" : "Une zone à la fois"}
        </Tag>
      </Art>
    );
  if (kind === "subseacable")
    return (
      <Art {...p} foot="Des répéteurs sur la liaison">
        <path d="M18 100Q55 91 100 101T190 101T280 101T342 100V194H18Z" fill="#c6e0eb" />
        <path d="M18 89L59 115 93 169Q180 188 278 166L317 115 342 87V202H18Z" fill="#c6b697" />
        <path
          d="M32 92L61 117 95 168Q180 185 277 165L317 115 330 93"
          fill="none"
          stroke={ink}
          strokeWidth="6"
        />
        <Box x={18} y={55} w={50} h={32} />
        <Box x={292} y={55} w={50} h={32} />
        <Tag x={180} y={59}>
          Océan
        </Tag>
        {s > 0 && (
          <path
            d="M61 117L95 168Q180 185 277 165L317 115"
            stroke={gold}
            fill="none"
            strokeWidth="3"
            strokeDasharray="10 8"
          />
        )}
        {s === 2 &&
          [124, 237].map((x) => (
            <g key={x}>
              <rect x={x - 12} y="165" width="24" height="14" rx="5" fill={green} stroke={ink} />
              <path fill="none" d={`M${x} 163v-28`} stroke={green} />
            </g>
          ))}
        {s === 2 && (
          <Tag x={180} y={128}>
            Amplification
          </Tag>
        )}
      </Art>
    );
  return null;
}
