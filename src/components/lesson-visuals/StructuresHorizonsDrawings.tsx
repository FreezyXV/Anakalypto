import { Art, Tag, Arrow, blue, green, gold, red, ink, type DrawingProps } from "./Horizons50Parts";
export function StructuresHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "safetymargin")
    return (
      <Art {...p} foot="Valeurs fictives, sans norme de calcul">
        <path fill="none" d="M51 172H309" stroke={ink} strokeWidth="3" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            x={54 + i * 25}
            y="119"
            width="22"
            height="41"
            fill={i < (s === 2 ? 8 : 5) ? blue : "#c9d6de"}
          />
        ))}
        <path
          d="M53 101V88H177V101M179 101V88H302V101"
          fill="none"
          stroke={s === 2 ? red : green}
          strokeWidth="2"
        />
        <Tag x={180} y={61}>
          {s === 0 ? "Charge et résistance" : s === 1 ? "10 / 5 = 2" : "10 / 8 = 1,25"}
        </Tag>
        <Tag x={180} y={196}>
          {s === 2 ? "La marge se réduit" : "5 de charge · 10 de résistance"}
        </Tag>
      </Art>
    );
  if (kind === "concreteprint") {
    const n = [2, 5, 8][s]!;
    return (
      <Art {...p} foot="Parois imprimées, bâtiment à compléter">
        <path d="M31 184H333L294 201H70Z" fill="#c3c9ca" />
        {Array.from({ length: n }, (_, i) => (
          <g key={i}>
            <path
              d={`M69 ${185 - i * 12}H282L313 ${170 - i * 12}H101Z`}
              fill={i % 2 ? "#b9b4a5" : "#d2cbb8"}
              stroke="#8c8c82"
              strokeWidth="2"
            />
            {s === 2 && i < 5 && (
              <path fill="none" d={`M155 ${185 - i * 12}H197`} stroke="#e5edf2" strokeWidth="8" />
            )}
          </g>
        ))}
        <path
          d={`M${s === 0 ? 211 : 269} ${172 - n * 12}V${143 - n * 12}H327V46`}
          stroke={ink}
          fill="none"
          strokeWidth="12"
        />
        <path
          fill="none"
          d={`M${s === 0 ? 211 : 269} ${172 - n * 12}v9`}
          stroke={gold}
          strokeWidth="7"
        />
        <Tag x={97} y={55}>
          Buse
        </Tag>
        <path d={`M123 53L${s === 0 ? 203 : 258} ${143 - n * 12}`} stroke={ink} fill="none" />
        {s === 2 && (
          <Tag x={180} y={80}>
            Ouverture prévue
          </Tag>
        )}
      </Art>
    );
  }
  if (kind === "topologyshape")
    return (
      <Art {...p} foot="Une forme illustrative, à valider">
        <path
          fill="none"
          d="M43 57V188M32 65l11-8m-11 28l11-8m-11 28l11-8m-11 28l11-8m-11 28l11-8m-11 28l11-8"
          stroke={ink}
          strokeWidth="2"
        />
        {s === 0 ? (
          <rect
            x="45"
            y="78"
            width="252"
            height="89"
            fill="#b9c9d3"
            stroke={blue}
            strokeWidth="2"
          />
        ) : (
          <path
            d="M45 78H297V106L67 167H45V141L241 91H45ZM45 89L280 147H297V167L45 112Z"
            fill={s === 1 ? "#bfccd5" : "#9ebbb3"}
            stroke={s === 1 ? blue : green}
            strokeWidth="2"
            fillRule="evenodd"
          />
        )}
        <circle cx="291" cy="91" r="7" fill={ink} />
        <Arrow d="M291 54V80" color={red} />
        <Tag x={180} y={198}>
          {s === 0
            ? "Volume disponible"
            : s === 1
              ? "Retirer certaines zones"
              : "Valider sous ces charges"}
        </Tag>
        {s === 2 && <path d="M277 49l10 10 21-22" stroke={green} strokeWidth="3" fill="none" />}
      </Art>
    );
  if (kind === "deploystructure") {
    const a = [0.1, 0.55, 1.1][s]!,
      len = 90,
      dx = len * Math.sin(a),
      dy = len * Math.cos(a);
    return (
      <Art {...p} foot="Les barres gardent leur longueur">
        <path fill="none" d="M180 53V193" stroke={ink} strokeWidth="4" />
        <path
          d={`M${180 - dx} ${68 + dy}L180 68L${180 + dx} ${68 + dy}`}
          stroke={blue}
          strokeWidth="5"
          fill="none"
          data-bar-length={len}
        />
        <path
          d={`M${180 - dx} ${68 + dy}Q180 ${45 + dy} ${180 + dx} ${68 + dy}`}
          fill="#b7cfdc"
          stroke={blue}
          strokeWidth="2"
        />
        <path
          d={`M180 ${100 + dy * 0.3}L${180 - dx * 0.65} ${68 + dy * 0.65}M180 ${100 + dy * 0.3}L${180 + dx * 0.65} ${68 + dy * 0.65}`}
          stroke={gold}
          strokeWidth="3"
          fill="none"
        />
        <circle cx="180" cy="68" r="6" fill={ink} />
        <rect x="174" y={97 + dy * 0.3} width="12" height="13" fill={s === 2 ? green : gold} />
        <Tag x={83} y={54}>
          {s === 0 ? "Compact" : s === 1 ? "Articulé" : "Ouvert"}
        </Tag>
        {s === 2 && (
          <Tag x={180} y={199}>
            Maintien nécessaire
          </Tag>
        )}
      </Art>
    );
  }
  if (kind === "radarecho")
    return (
      <Art {...p} foot={s === 2 ? "Distance = vitesse × délai / 2" : "Le radar émet puis écoute"}>
        <path
          d="M42 118Q74 149 102 112M75 132V179H41M75 179H104"
          stroke={ink}
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M284 70L306 94 331 98 313 109 312 132 295 111 272 102 289 95Z"
          fill="#9fb8c9"
          stroke={ink}
        />
        {s === 0 ? (
          <Arrow d="M100 117L267 97" color={blue} />
        ) : (
          <>
            <Arrow d="M100 109L267 89" color={blue} />
            <Arrow d="M268 112L104 136" color={gold} />
          </>
        )}
        <Tag x={178} y={74}>
          Aller
        </Tag>
        {s > 0 && (
          <Tag x={187} y={157}>
            Retour
          </Tag>
        )}
        {s === 2 && (
          <>
            <path fill="none" d="M81 182H301M81 176V188M301 176V188" stroke={ink} />
            <Tag x={191} y={199}>
              d
            </Tag>
          </>
        )}
      </Art>
    );
  return null;
}
