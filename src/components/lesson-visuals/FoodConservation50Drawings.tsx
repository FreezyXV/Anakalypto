import {
  ArtFrame,
  Arrow,
  Label,
  Drop,
  Microbe,
  Jar,
  blue,
  green,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
export function FoodConservation50Drawing(p: DrawingProps) {
  const { kind, step: s, id } = p;
  if (kind === "fridgezones")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "Ralentir ne signifie pas éliminer" : "La notice situe la zone la plus froide"
        }
      >
        {s < 2 ? (
          <>
            <rect
              x="45"
              y="43"
              width="153"
              height="158"
              rx="13"
              fill="#c6d9e6"
              stroke="#718da1"
              strokeWidth="2"
            />
            <rect x="56" y="54" width="130" height="136" rx="5" fill="#eff5f7" />
            {[96, 139].map((y) => (
              <path key={y} d={`M57 ${y}H185`} stroke="#8ea7b4" strokeWidth="3" />
            ))}
            <rect x="66" y="67" width="48" height="23" rx="5" fill="#b9cbdc" />
            <rect x="126" y="65" width="33" height="26" rx="5" fill="#e3d5b6" />
            <rect x="67" y="111" width="82" height="21" rx="5" fill="#edbec3" stroke={red} />
            {s === 1 && <path d="M65 108h86" stroke={ink} strokeWidth="4" />}
            <ellipse cx="93" cy="168" rx="19" ry="10" fill="#85aa73" />
            <ellipse cx="139" cy="169" rx="12" ry="9" fill="#d99d59" />
            {s === 0 ? (
              <>
                <rect x="226" y="77" width="18" height="76" rx="9" fill="#e7eff2" stroke={blue} />
                <circle cx="235" cy="151" r="12" fill={blue} />
                <path d="M235 146V111" stroke={blue} strokeWidth="6" />
                <Label x={270} y={66}>
                  0–4 °C
                </Label>
                <Label x={271} y={183}>
                  Mesurer
                </Label>
              </>
            ) : (
              <>
                <Arrow x1={169} y1={72} x2={169} y2={122} />
                <Arrow x1={169} y1={155} x2={169} y2={181} />
                <Label x={270} y={98}>
                  Cru fermé
                </Label>
                <Arrow x1={233} y1={106} x2={154} y2={121} color={red} />
                <Label x={270} y={159}>
                  Air libre
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <rect x="28" y="59" width="139" height="124" rx="14" fill="#dbe8f1" />
            <rect x="193" y="59" width="139" height="124" rx="14" fill="#f3e1cb" />
            <Label x={98} y={83}>
              Au froid
            </Label>
            <Label x={262} y={83}>
              Plus chaud
            </Label>
            {[
              [65, 118],
              [124, 148],
              [239, 116],
              [280, 112],
              [225, 150],
              [271, 153],
              [307, 148],
            ].map(([x, y], i) => (
              <Microbe key={i} x={x!} y={y!} />
            ))}
            <Arrow x1={90} y1={191} x2={272} y2={191} color={gold} />
          </>
        )}
      </ArtFrame>
    );
  if (kind === "fooddates")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Suivre les consignes du produit" : "Lire les mots, pas seulement la date"}
      >
        <rect
          x="49"
          y="52"
          width="262"
          height="145"
          rx="16"
          fill={s === 0 ? "#ead6d5" : "#dce3c7"}
          stroke="#8e9b8e"
        />
        <path d="M49 79H311" stroke="#b4b5a3" />
        {s < 2 ? (
          <>
            <rect x="72" y="94" width="216" height="77" rx="8" fill="#fffdf6" />
            <Label x={180} y={117}>
              {s === 0 ? "À consommer" : "De préférence"}
            </Label>
            <Label x={180} y={144}>
              {s === 0 ? "jusqu’au…" : "avant…"}
            </Label>
            <Label x={180} y={185} color={s === 0 ? red : green}>
              {s === 0 ? "DLC · sécurité" : "DDM · qualité"}
            </Label>
          </>
        ) : (
          <>
            <path d="M49 79l22-31h200l40 31" fill="#d0b799" />
            <Label x={180} y={119}>
              Ouvert
            </Label>
            <path d="M91 135h178m-178 11h131" stroke="#829c85" strokeWidth="3" />
            <Label x={180} y={180}>
              Nouvelle consigne
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "honeywater")
    return (
      <ArtFrame
        {...p}
        foot={
          ["Du nectar au miel concentré", "Eau disponible réduite", "L’humidité peut revenir"][s]!
        }
      >
        <Jar
          id={id}
          open={s !== 1}
          level={s === 0 ? 105 : 119}
          color={s === 0 ? "#e7c57e" : "#c59334"}
        >
          {Array.from({ length: s === 0 ? 10 : 6 }, (_, i) => (
            <Drop
              key={i}
              x={136 + (i % 4) * 27}
              y={135 + Math.floor(i / 4) * 22}
              r={3}
              color="#fbefd1"
            />
          ))}
        </Jar>
        {s === 0 ? (
          <>
            <path
              d="M150 51q-7-10 0-17m30 17q-7-10 0-17m30 17q-7-10 0-17"
              stroke={blue}
              fill="none"
              strokeWidth="2"
            />
            <Arrow x1={91} y1={137} x2={91} y2={77} color={gold} />
            <Label x={65} y={183}>
              Eau
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <circle cx="289" cy="121" r="39" fill="#ead39d" stroke={gold} />
            {Array.from({ length: 15 }, (_, i) => (
              <circle
                key={i}
                cx={267 + (i % 4) * 15}
                cy={99 + Math.floor(i / 4) * 14}
                r="4"
                fill="#a77b2a"
              />
            ))}
            <Microbe x={289} y={120} color={ink} />
            <path d="M240 135l16 9m-17-14 16-8" stroke={gold} />
            <Label x={64} y={93}>
              Sucres
            </Label>
          </>
        ) : (
          <>
            <path d="M126 59l12-18h103l-7 18" fill="#b4bec7" />
            <Arrow x1={281} y1={64} x2={225} y2={98} />
            <Drop x={272} y={55} />
            <Drop x={250} y={77} />
            <Label x={65} y={100}>
              Air
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "osmotickeeping")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Survie possible, croissance freinée" : "Membrane · eau · solutés"}
      >
        <rect
          x="33"
          y="53"
          width="294"
          height="143"
          rx="20"
          fill={s === 0 ? "#dfedf5" : "#efe3c2"}
          stroke="#b6b9ac"
        />
        <ellipse cx="176" cy="124" rx="63" ry="46" fill="#c9d8ac" stroke={green} strokeWidth="3" />
        {s > 0 && (
          <ellipse
            cx="176"
            cy="124"
            rx="41"
            ry="29"
            fill="#a3b57e"
            stroke={green}
            strokeWidth="2"
          />
        )}
        {Array.from({ length: s === 0 ? 10 : 30 }, (_, i) => (
          <circle
            key={i}
            cx={47 + (i % 10) * 29}
            cy={66 + Math.floor(i / 10) * 56}
            r="3"
            fill={gold}
          />
        ))}
        {s === 0 ? (
          <>
            <Arrow x1={83} y1={110} x2={120} y2={110} />
            <Arrow x1={120} y1={141} x2={83} y2={141} />
          </>
        ) : (
          <>
            <Arrow x1={128} y1={123} x2={70} y2={123} />
            <Arrow x1={225} y1={123} x2={283} y2={123} />
            <Drop x={96} y={145} />
            <Drop x={258} y={145} />
          </>
        )}
        <Label x={180} y={65}>
          {s === 0 ? "Milieu dilué" : s === 1 ? "Plus concentré" : "Multiplication limitée"}
        </Label>
        {s === 2 && <Microbe x={176} y={124} scale={1.5} />}
      </ArtFrame>
    );
  if (kind === "freezefood")
    return (
      <ArtFrame
        {...p}
        foot={s === 1 ? "Lente à gauche · rapide à droite" : "Coupe agrandie d’un fruit"}
      >
        {[0, 1].map((col) => (
          <g key={col}>
            {[0, 1, 2].map((row) => (
              <rect
                key={row}
                x={57 + col * 138}
                y={61 + row * 42}
                width="107"
                height="39"
                rx={s === 2 && col === 0 ? 12 : 5}
                fill={s === 2 && col === 0 ? "#dbcaa2" : "#c5d9ac"}
                stroke={green}
                strokeWidth="2"
              />
            ))}
          </g>
        ))}
        {s === 1 ? (
          <>
            {[0, 1, 2].map((r) => (
              <g key={r}>
                <path
                  d={`M105 ${68 + r * 42}l17 13-13 17-19-15Z`}
                  fill="#e4f6ff"
                  stroke={blue}
                  strokeWidth="2"
                />
                {[0, 1, 2, 3].map((c) => (
                  <path
                    key={c}
                    d={`M${212 + c * 22} ${74 + r * 42}l4 6-4 6-4-6Z`}
                    fill="#e4f6ff"
                    stroke={blue}
                  />
                ))}
              </g>
            ))}
            <path d="M158 80l10 9-8 13m-1 24 8 11-9 11" stroke={red} fill="none" strokeWidth="3" />
          </>
        ) : s === 2 ? (
          <>
            <path d="M57 81l7 10-7 9m108 19-7 9 7 9" stroke="#eff4f5" strokeWidth="5" />
            {[78, 104, 143].map((x, i) => (
              <Drop key={x} x={x} y={192 + (i % 2) * 5} r={4} />
            ))}
          </>
        ) : (
          Array.from({ length: 12 }, (_, i) => (
            <Drop key={i} x={81 + (i % 4) * 62} y={81 + Math.floor(i / 4) * 42} r={4} />
          ))
        )}
      </ArtFrame>
    );
  return null;
}
