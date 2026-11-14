import {
  ArtFrame,
  Arrow,
  Label,
  Drop,
  Heat,
  blue,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
function Fibres({ y = 110, pressed = false }: { y?: number; pressed?: boolean }) {
  return (
    <g stroke="#9b7b4e" strokeWidth={pressed ? 1.5 : 2} fill="none">
      {Array.from({ length: 32 }, (_, i) => (
        <path
          key={i}
          d={`M${68 + ((i * 47) % 218)} ${y + ((i * 13) % (pressed ? 30 : 64))}q${i % 2 ? 15 : -15} ${i % 3 ? 6 : -7} ${i % 2 ? 32 : -26} ${i % 3 ? 15 : -13}`}
        />
      ))}
    </g>
  );
}
export function ArtsCrafts50Drawing(p: DrawingProps) {
  const { kind, step: s, id } = p;
  if (kind === "leadtype")
    return (
      <ArtFrame
        {...p}
        foot={
          [
            "La face porte la lettre en miroir",
            "Des caractères composés en ligne",
            "Une lettre décrite par des contours",
          ][s]!
        }
      >
        {s < 2 ? (
          <>
            {(s === 0 ? [125] : [48, 125, 202]).map((x, i) => (
              <g key={x}>
                <path
                  d={`M${x} 93l19-18h68v70l-19 18H${x}Z`}
                  fill="#9baab8"
                  stroke="#516678"
                  strokeWidth="2"
                />
                <path d={`M${x} 93h68v70H${x}Z`} fill="#d4dde3" stroke="#516678" />
                <text
                  x={-(x + 34)}
                  y="145"
                  transform="scale(-1 1)"
                  fontSize="44"
                  fontFamily="serif"
                  fill={ink}
                >
                  {s === 0 ? "R" : ["R", "A", "B"][i]}
                </text>
              </g>
            ))}
            {s === 0 && (
              <>
                <Arrow x1={213} y1={126} x2={254} y2={126} />
                <rect x="264" y="87" width="60" height="77" fill="#fbf5e5" stroke="#c5b393" />
                <text x="276" y="145" fontSize="44" fontFamily="serif" fill={ink}>
                  R
                </text>
                <Label x={83} y={61}>
                  Relief encré
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <path
              d="M50 187V61H104Q169 61 169 101Q169 132 137 140L181 187H147L108 143H77V187ZM77 85v36h27q38 0 38-18t-38-18Z"
              fill="#778fa3"
              fillRule="evenodd"
              stroke={ink}
            />
            {[
              [50, 61],
              [104, 61],
              [169, 101],
              [137, 140],
              [181, 187],
              [77, 121],
            ].map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x! - 3} y={y! - 3} width="6" height="6" fill={gold} />
            ))}
            <path d="M104 61h65v40" fill="none" stroke={gold} strokeDasharray="3 3" />
            <text x="224" y="155" fontSize="76" fill={ink}>
              R
            </text>
            <Label x={263} y={187}>
              Échelle
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "claykiln")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Transformation irréversible" : "L’objet n’est pas encore une céramique"}
      >
        <path
          d="M49 95q7 75 24 83h65q17-8 24-83l-25-11H74Z"
          fill={`url(#${id}-clay)`}
          stroke="#a2754b"
          strokeWidth="2"
        />
        <ellipse cx="105" cy="95" rx="56" ry="15" fill="#c49c73" stroke="#a2754b" />
        <ellipse cx="105" cy="95" rx="39" ry="8" fill="#9a7657" />
        {s === 2 ? (
          <Heat x={105} y={75} />
        ) : s === 1 ? (
          <>
            <Drop x={71} y={56} r={4} />
            <Arrow x1={103} y1={73} x2={103} y2={44} />
          </>
        ) : (
          <path
            d="M58 81q-16-14-23 0l14 31"
            stroke="#dcb59d"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
        )}
        <circle cx="264" cy="122" r="62" fill="#f0e2ce" stroke="#bfa682" />
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i}>
            <ellipse
              cx={222 + (i % 4) * 27}
              cy={91 + Math.floor(i / 4) * 29}
              rx={s === 2 ? 16 : 10}
              ry="7"
              transform={`rotate(${i % 2 ? 20 : -17} ${222 + (i % 4) * 27} ${91 + Math.floor(i / 4) * 29})`}
              fill={s === 2 ? "#b98253" : "#caa47e"}
              stroke="#9d754d"
            />
            {s === 0 && <Drop x={233 + (i % 4) * 24} y={103 + Math.floor(i / 4) * 25} r={2} />}
          </g>
        ))}
        <path d="M159 125l44-13m-48 25 48 9" fill="none" stroke="#bfa682" />
        <Label x={264} y={200}>
          {s === 2 ? "Grains liés" : "Particules"}
        </Label>
      </ArtFrame>
    );
  if (kind === "pigmentbinder")
    return (
      <ArtFrame {...p} foot="Pigment retenu par un liant">
        <path d="M37 165H323V189H37Z" fill="#bd9e76" stroke="#8f785b" />
        {s > 0 && (
          <path
            d="M37 138q64-15 122 0t164 0v26H37Z"
            fill={s === 2 ? "#d5c49d" : "#b9d3d9"}
            stroke={s === 2 ? "#b29d76" : "#88b5bf"}
          />
        )}
        {Array.from({ length: 27 }, (_, i) => (
          <path
            key={i}
            d={`M${47 + ((i * 47) % 264)} ${s === 0 ? 154 - (i % 3) * 23 : 148 + (i % 2) * 6}l5-8 7 4-2 9Z`}
            fill={i % 3 ? "#c2944d" : "#a85e37"}
          />
        ))}
        {s === 0 ? (
          <>
            <path d="M73 78q25-25 52 0l-9 21H82Z" fill="#c2944d" stroke="#987344" />
            <path d="M106 65l28-22" stroke="#81929f" strokeWidth="10" strokeLinecap="round" />
            <Label x={248} y={87}>
              Pigment
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Drop x={180} y={75} r={18} color="#87bac5" />
            <Arrow x1={180} y1={103} x2={180} y2={132} />
            <Label x={281} y={93}>
              Liant
            </Label>
          </>
        ) : (
          <>
            <path d="M51 73l121 48-4 12L44 86Z" fill="#a78659" />
            <path d="M169 121l36 7-21 17-18-12Z" fill="#bd8a47" />
            <Label x={270} y={87}>
              Film fixé
            </Label>
          </>
        )}
        <Label x={180} y={199}>
          Support
        </Label>
      </ArtFrame>
    );
  if (kind === "papyrussheet")
    return (
      <ArtFrame
        {...p}
        foot={s === 1 ? "Deux couches, deux directions" : "Des lamelles, pas une pâte de fibres"}
      >
        {s === 0 ? (
          <>
            <path d="M59 70l41-17 26 30-41 17Z" fill="#d5cf9e" stroke="#7e9a65" />
            <path d="M59 70v93l26 25V100m41-17v80l-41 25" fill="#b1be89" stroke="#7e9a65" />
            <path d="M69 75l29-11 16 18-29 10Z" fill="#ede5bb" />
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M${189 + i * 27} 69l12-4 5 117-12 4Z`}
                fill="#e7d9a4"
                stroke="#b9a872"
              />
            ))}
            <Arrow x1={139} y1={122} x2={179} y2={122} color={gold} />
          </>
        ) : (
          <>
            {Array.from({ length: 8 }, (_, i) => (
              <rect
                key={i}
                x={77 + i * 26}
                y={s === 1 ? 110 : 80}
                width="25"
                height={s === 1 ? 81 : 106}
                fill={i % 2 ? "#ddcb92" : "#e9dbac"}
                stroke="#baa575"
              />
            ))}
            {Array.from({ length: 5 }, (_, i) => (
              <rect
                key={i}
                x="77"
                y={s === 1 ? 53 + i * 10 : 85 + i * 20}
                width="207"
                height={s === 1 ? 9 : 17}
                fill="#d1b978"
                opacity={s === 1 ? 1 : 0.45}
                stroke="#baa575"
              />
            ))}
            {s === 1 ? (
              <>
                <Arrow x1={58} y1={71} x2={58} y2={121} color={gold} />
                <Arrow x1={303} y1={71} x2={303} y2={121} color={gold} />
              </>
            ) : (
              <>
                <Arrow x1={180} y1={42} x2={180} y2={74} color={gold} />
                <Arrow x1={180} y1={207} x2={180} y2={190} color={gold} />
              </>
            )}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "paperfibres")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Fibres séparées dans l’eau" : "Une couche de fibres entrelacées"}
      >
        {s === 0 ? (
          <>
            <path d="M40 84l15 105h252l14-105Z" fill="#d7c1a0" stroke="#967851" />
            <path d="M47 103h267l-11 74H59Z" fill="#bed6da" />
            <defs>
              <clipPath id={`${id}-fibres-water`}>
                <path d="M48 104h264l-10 73H59Z" />
              </clipPath>
            </defs>
            <g clipPath={`url(#${id}-fibres-water)`}>
              <Fibres y={116} />
            </g>
            <path d="M46 104q130 11 269 0" stroke="#8cafba" fill="none" strokeWidth="2" />
          </>
        ) : (
          <>
            <path d="M49 91H312V159H49Z" fill="#ddccb0" stroke="#8d7455" strokeWidth="6" />
            {Array.from({ length: 16 }, (_, i) => (
              <path
                key={i}
                d={`M${59 + i * 16} 96v57M55 ${100 + i * 3.3}h251`}
                stroke="#b2ab99"
                strokeWidth=".7"
              />
            ))}
            <defs>
              <clipPath id={`${id}-fibres-screen`}>
                <rect x="55" y="97" width="250" height="56" />
              </clipPath>
            </defs>
            <g clipPath={`url(#${id}-fibres-screen)`}>
              <Fibres y={110} pressed />
            </g>
            {s === 1 ? (
              <>
                {[81, 139, 197, 255].map((x) => (
                  <g key={x}>
                    <Arrow x1={x} y1={164} x2={x} y2={190} />
                    <Drop x={x} y={201} r={3} />
                  </g>
                ))}
              </>
            ) : (
              <>
                <path d="M45 67h271v17H45ZM45 166h271v17H45Z" fill="#c19e73" stroke="#8d7455" />
                <Arrow x1={180} y1={40} x2={180} y2={64} color={gold} />
                <Arrow x1={180} y1={209} x2={180} y2={187} color={gold} />
                <path d="M91 59q-6-9 0-18m22 18q-6-9 0-18" stroke={blue} fill="none" />
              </>
            )}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "gothicvault")
    return (
      <ArtFrame {...p} foot="Travée fictive · forces qualitatives">
        <path d="M24 195H337" stroke="#9d9b91" strokeWidth="5" />
        <path
          d="M102 190V94Q107 65 180 42Q253 65 258 94V190H244V98Q240 77 180 55Q120 77 116 98V190Z"
          fill="#d3c7ad"
          stroke="#8d816e"
          strokeWidth="2"
        />
        <path
          d="M115 98Q132 69 180 48Q228 69 245 98"
          fill="none"
          stroke="#b4a486"
          strokeWidth="5"
        />
        {s > 0 && (
          <>
            <path
              d="M252 100Q282 100 309 144v-15q-21-33-57-42Z"
              fill="#c5b99e"
              stroke="#8d816e"
              strokeWidth="2"
            />
            <path d="M306 126h20v65h-29Z" fill="#b7aa8c" stroke="#8d816e" />
            <Arrow x1={258} y1={97} x2={307} y2={140} color={red} />
            <Arrow x1={315} y1={154} x2={315} y2={186} color={red} />
          </>
        )}
        {s === 2 ? (
          <>
            <path
              d="M146 183V105Q149 89 180 70Q211 89 214 105V183Z"
              fill="#abc6d4"
              stroke="#9e947e"
              strokeWidth="3"
            />
            <path
              d="M180 75v107M148 132h64M148 157h64M148 132l32-25 32 25m-64 25 32-25 32 25"
              stroke="#947c91"
              strokeWidth="2"
              fill="none"
            />
            <path d="M181 84l13 25-13 25-13-25Z" fill="#d5b36d" />
            <Label x={180} y={199}>
              Verrière
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={180} y1={67} x2={180} y2={99} color={red} />
            <Arrow x1={129} y1={98} x2={116} y2={145} color={red} />
            <Arrow x1={231} y1={98} x2={244} y2={145} color={red} />
            <Label x={174} y={186}>
              Appuis
            </Label>
          </>
        )}
      </ArtFrame>
    );
  return null;
}
