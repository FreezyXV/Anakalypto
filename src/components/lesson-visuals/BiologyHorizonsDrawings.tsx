import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  red,
  ink,
  violet,
  Microbe,
  Sprout,
  Box,
  type DrawingProps,
} from "./Horizons50Parts";
export function BiologyHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "rootmicrobes")
    return (
      <Art {...p} foot="Carbone contre ressources du sol">
        <path d="M18 106Q180 98 342 106V202H18Z" fill="#d0c3a0" />
        <Sprout x={127} y={108} />
        <path
          d="M127 108v70m0-43l-34 28m34-14l21 32m-21-17l-24 20"
          stroke="#96774c"
          fill="none"
          strokeWidth="6"
        />
        {s > 0 && (
          <path
            d="M140 136Q171 105 203 131T283 126M186 128L206 169 247 190M219 138L274 167M204 165L181 190M253 138L296 105"
            stroke={violet}
            strokeWidth="3"
            fill="none"
          />
        )}
        <Microbe x={66} y={153} />
        {s === 0 ? (
          <Arrow d="M115 130L84 147" color={gold} />
        ) : s === 1 ? (
          <>
            <circle cx="289" cy="145" r="5" fill={blue} />
            <Tag x={272} y={79}>
              Filaments
            </Tag>
          </>
        ) : (
          <>
            <Arrow d="M147 118H212" color={gold} />
            <Arrow d="M212 158H150" color={blue} />
            <Tag x={274} y={111}>
              Carbone
            </Tag>
            <Tag x={251} y={197}>
              Eau, minéraux
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "ultrasoundecho")
    return (
      <Art
        {...p}
        foot={s === 2 ? "Profondeur = vitesse × délai / 2" : "Une partie du son est réfléchie"}
      >
        <path d="M30 96H330V191H30Z" fill="#dac5bd" />
        <path d="M30 145Q180 124 330 145V191H30Z" fill="#bd9f9b" />
        <path d="M134 47H226L213 91H147Z" fill="#7a9bad" stroke={ink} strokeWidth="2" />
        <path fill="none" d="M151 91H209" stroke={blue} strokeWidth="7" />
        {s === 0 ? (
          <>
            <Arrow d="M170 98V125" color={blue} />
            <path d="M147 115Q180 128 213 115" stroke={blue} fill="none" strokeWidth="2" />
          </>
        ) : (
          <>
            <Arrow d="M166 100V133" color={blue} />
            <Arrow d="M194 132V98" color={gold} />
            <path d="M163 146V172" stroke={blue} strokeDasharray="4 4" fill="none" />
            {s === 2 && (
              <>
                <path d="M267 99V137M259 99H275M259 137H275" stroke={ink} fill="none" />
                <Tag x={297} y={124}>
                  d
                </Tag>
              </>
            )}
          </>
        )}
        <Tag x={75} y={70}>
          Sonde
        </Tag>
        <Tag x={180} y={184}>
          Interface entre tissus
        </Tag>
      </Art>
    );
  if (kind === "mriprotons")
    return (
      <Art {...p} foot="Une aimantation collective">
        <Box x={81} y={63} w={198} h={126} color="#d6e3eb">
          <ellipse
            cx="180"
            cy="143"
            rx="65"
            ry="23"
            fill="none"
            stroke="#9cb3c4"
            strokeDasharray="4 4"
          />
          <path fill="none" d="M180 77V175" stroke="#8b9dab" strokeDasharray="4 4" />
          <Arrow
            d={s === 0 ? "M180 151V85" : s === 1 ? "M180 145H242" : "M180 145L213 100"}
            color={s === 1 ? gold : blue}
          />
          <circle cx="180" cy="145" r="5" fill={ink} />
        </Box>
        <Arrow d="M51 183V74" color={green} />
        <Tag x={46} y={54}>
          B₀
        </Tag>
        {s === 1 && (
          <path d="M290 125q8-16 15 0t15 0t15 0" stroke={gold} fill="none" strokeWidth="3" />
        )}
        {s === 2 && (
          <>
            <path d="M285 119q9-15 17 0t17 0t12 0" stroke={blue} fill="none" strokeWidth="3" />
            <Tag x={180} y={52}>
              Signal + gradients
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "antibiotictarget")
    return (
      <Art {...p} foot="Une cible absente des cellules humaines">
        <rect
          x="61"
          y="78"
          width="238"
          height="101"
          rx="49"
          fill="#bdd1b0"
          stroke={green}
          strokeWidth="11"
        />
        <rect
          x="73"
          y="90"
          width="214"
          height="77"
          rx="38"
          fill="#dfe7d1"
          stroke="#819c78"
          strokeWidth="2"
        />
        <path d="M111 125q19-24 38 0t38 0t38 0" stroke={violet} fill="none" strokeWidth="3" />
        {[117, 168, 222].map((x) => (
          <circle key={x} cx={x} cy="151" r="4" fill={green} />
        ))}
        {s > 0 && (
          <>
            <path fill="none" d="M240 65V92" stroke={red} strokeWidth="6" />
            <path fill="none" d="M223 61H258" stroke={red} strokeWidth="6" />
            <path fill="none" d="M228 73L250 87m-22 0l22-14" stroke={red} strokeWidth="3" />
          </>
        )}
        {s === 2 && (
          <path
            d="M265 82l-5 14 12 16-16 15 14 16-6 21"
            stroke="#edf2f3"
            fill="none"
            strokeWidth="9"
          />
        )}
        <Tag x={180} y={53}>
          {s === 0 ? "Paroi bactérienne" : s === 1 ? "Construction bloquée" : "Paroi fragilisée"}
        </Tag>
        <Tag x={180} y={198}>
          Bactérie sensible en croissance
        </Tag>
      </Art>
    );
  if (kind === "mrnavaccine")
    return (
      <Art {...p} foot="Traduction dans le cytoplasme">
        <ellipse cx="214" cy="123" rx="121" ry="77" fill="#dce9df" stroke={green} strokeWidth="3" />
        <ellipse cx="265" cy="112" rx="40" ry="39" fill="#d7c9e2" stroke={violet} strokeWidth="2" />
        <Tag x={265} y={118}>
          ADN
        </Tag>
        {s === 0 ? (
          <>
            <circle cx="61" cy="121" r="25" fill="#e1c794" stroke={gold} strokeWidth="4" />
            <path d="M43 120q9-15 16 0t17 0" stroke={red} fill="none" strokeWidth="3" />
            <Arrow d="M89 121H122" color={gold} />
          </>
        ) : (
          <>
            <path d="M112 140q13-18 25 0t25 0t25 0" stroke={red} fill="none" strokeWidth="3" />
            <ellipse cx="155" cy="137" rx="19" ry="13" fill={blue} />
            <path d="M155 127L149 116 166 109 153 98" stroke={gold} strokeWidth="5" fill="none" />
          </>
        )}
        {s === 2 && (
          <>
            <path d="M121 96l-7-14 13-10-9-10" stroke={gold} strokeWidth="5" fill="none" />
            <Arrow d="M115 77L83 64" color={gold} />
            <Tag x={111} y={53}>
              Antigène
            </Tag>
            <path fill="none" d="M126 158l8 5m15-5l8 5m13-5l8 5" stroke={red} strokeWidth="3" />
          </>
        )}
        {s < 2 && (
          <Tag x={162} y={65}>
            ARN
          </Tag>
        )}
      </Art>
    );
  return null;
}
