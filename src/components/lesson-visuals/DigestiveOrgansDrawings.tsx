import {
  AnatomyScene,
  Arrow,
  Label,
  BloodCell,
  LiverOrgan,
  Stomach,
  Intestine,
  blood,
  vein,
  gold,
  green,
  type DrawingProps,
} from "./OrgansParts";
function Glucose({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x - 5} ${y - 3}l5-3 5 3v6l-5 3-5-3Z`}
      fill="#8db9cd"
      stroke={vein}
      strokeWidth="1.2"
    />
  );
}
export function DigestiveOrgansDrawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "gutabsorption")
    return (
      <AnatomyScene
        id={id}
        title={
          [
            "Situer les organes et découper",
            "Une villosité, vue agrandie",
            "Après la paroi, deux voies",
          ][s]!
        }
        foot={
          [
            "Découper avant d’absorber",
            "Des cellules séparent les milieux",
            "Sucres et lipides : deux exemples",
          ][s]!
        }
      >
        {s === 0 ? (
          <>
            <path
              d="M84 44Q109 32 129 46L149 58Q172 83 165 114L156 195H61L54 114Q48 80 65 59Z"
              fill="#eee5df"
              stroke="#c7b5af"
              strokeWidth="1.5"
            />
            <path d="M117 52V79" stroke="#c58f91" strokeWidth="9" fill="none" />
            <path d="M117 52V79" stroke="#fae1cd" strokeWidth="5" />
            <Stomach id={id} x={122} y={102} scale={0.64} />
            <Intestine id={id} x={107} y={161} scale={0.5} />
            <Label x={269} y={66}>
              Amidon
            </Label>
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <g key={n}>
                <path d={`M${220 + n * 18} 88h18`} stroke={gold} strokeWidth="2" />
                <circle cx={220 + n * 18} cy="88" r="6" fill="#e6c97b" stroke={gold} />
              </g>
            ))}
            <Arrow x1={265} y1={103} x2={265} y2={129} color={gold} />
            <Label x={269} y={155}>
              Glucose
            </Label>
            {[0, 1, 2, 3, 4].map((n) => (
              <Glucose key={n} x={224 + n * 20} y={177} />
            ))}
            <Label x={207} y={121}>
              Enzymes
            </Label>
            <path d="M242 117L263 117" stroke="#9ba7b2" />
            <Label x={75} y={201}>
              Intestin grêle
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <path
              d="M98 192H139V106C139 60 217 60 217 106V192H262"
              fill={`url(#${id}-tissue)`}
              stroke="#b28184"
              strokeWidth="2"
            />
            {[0, 1, 2, 3, 4].map((n) => (
              <g key={n}>
                <rect
                  x="132"
                  y={113 + n * 15}
                  width="14"
                  height="14"
                  rx="4"
                  fill="#e9cbb8"
                  stroke="#b88e89"
                />
                <rect
                  x="210"
                  y={113 + n * 15}
                  width="14"
                  height="14"
                  rx="4"
                  fill="#e9cbb8"
                  stroke="#b88e89"
                />
              </g>
            ))}
            {[
              [143, 96, -35],
              [153, 83, -20],
              [170, 76, -5],
              [186, 76, 5],
              [203, 84, 25],
              [213, 98, 35],
            ].map(([x, y, a], i) => (
              <rect
                key={i}
                x={x! - 6}
                y={y! - 6}
                width="14"
                height="14"
                rx="4"
                transform={`rotate(${a} ${x} ${y})`}
                fill="#e9cbb8"
                stroke="#b88e89"
              />
            ))}
            <path
              d="M164 191V116C164 89 198 89 198 116V191"
              fill="none"
              stroke={blood}
              strokeWidth="5"
            />
            <path d="M164 191V128" stroke={vein} strokeWidth="5" />
            <path d="M183 191V121" stroke={green} strokeWidth="7" strokeLinecap="round" />
            <circle cx="183" cy="120" r="6" fill="#9fb58c" />
            <BloodCell x={164} y={163} scale={0.55} />
            <BloodCell x={198} y={151} scale={0.55} />
            {[
              [115, 106],
              [113, 141],
              [244, 101],
              [242, 150],
            ].map(([x, y], i) => (
              <Glucose key={i} x={x!} y={y!} />
            ))}
            <Arrow x1={118} y1={139} x2={153} y2={139} color={gold} width={2} />
            <Arrow x1={241} y1={149} x2={207} y2={149} color={gold} width={2} />
            <Label x={70} y={58}>
              Villosité
            </Label>
            <path d="M104 62L148 87" stroke="#9ba7b2" />
            <Label x={277} y={58}>
              Nutriments
            </Label>
            <path d="M268 64L243 93" stroke="#9ba7b2" />
            <Label x={70} y={185}>
              Sang
            </Label>
            <path d="M96 179L160 172" stroke={blood} />
            <Label x={293} y={185}>
              Lymphe
            </Label>
            <path d="M263 179L187 184" stroke={green} />
          </>
        ) : (
          <>
            <rect x="40" y="58" width="38" height="139" rx="7" fill="#ead2bd" stroke="#b48d87" />
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <g key={n}>
                <path d={`M40 ${60 + n * 19}h38`} stroke="#b48d87" />
                <ellipse cx="58" cy={69 + n * 19} rx="6" ry="4" fill="#bd9cb4" />
              </g>
            ))}
            <path data-transport="blood" d="M92 100H327" stroke="#d996a3" strokeWidth="24" />
            <path d="M92 100H327" stroke="#f5d5d6" strokeWidth="18" />
            <path data-transport="lymph" d="M92 169H327" stroke="#8fae86" strokeWidth="24" />
            <path d="M92 169H327" stroke="#d4e3b9" strokeWidth="18" />
            <Arrow x1={79} y1={100} x2={118} y2={100} color={blood} />
            <Arrow x1={79} y1={169} x2={118} y2={169} color={green} />
            <BloodCell x={167} y={100} scale={0.75} />
            <BloodCell x={266} y={100} scale={0.75} />
            {[139, 210, 302].map((x) => (
              <Glucose key={x} x={x} y={100} />
            ))}
            {[150, 218, 287].map((x) => (
              <g key={x}>
                <circle cx={x} cy="169" r="7" fill="#dec77b" stroke={gold} />
                <circle cx={x - 2} cy="167" r="2" fill="#f6edca" />
              </g>
            ))}
            <Label x={175} y={72}>
              Glucose
            </Label>
            <Label x={303} y={72}>
              Sang
            </Label>
            <Label x={174} y={143}>
              Lipides
            </Label>
            <Label x={300} y={143}>
              Lymphe
            </Label>
            <Label x={95} y={49}>
              Paroi intestinale
            </Label>
          </>
        )}
      </AnatomyScene>
    );
  if (kind === "gastricbarrier")
    return (
      <AnatomyScene
        id={id}
        title={
          ["Une coupe de l’estomac", "Un gel au contact des cellules", "Un gradient dans le mucus"][
            s
          ]!
        }
        foot={s === 0 ? "Le suc agit dans la cavité" : "Une protection entretenue"}
      >
        {s === 0 ? (
          <>
            <Stomach id={id} x={156} y={122} scale={1.07} />
            <Label x={73} y={51}>
              Œsophage
            </Label>
            <path d="M116 55L143 66" stroke="#9ba7b2" />
            <Label x={286} y={105}>
              Suc acide
            </Label>
            <path d="M248 112L187 118" stroke={gold} />
            <Label x={284} y={180}>
              Paroi
            </Label>
            <path d="M258 173L210 155" stroke="#9ba7b2" />
            <path
              d="M166 105q-9 8-1 16M181 127q-8 8-1 15M143 125q-7 7-1 12"
              fill="none"
              stroke="#c9a47b"
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <rect
              x="24"
              y="93"
              width="312"
              height="60"
              rx="5"
              fill={s === 2 ? `url(#${id}-mucus)` : "#dce6bb"}
              stroke="#b6bd90"
            />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <g key={n}>
                <rect
                  x={25 + n * 28}
                  y="154"
                  width="27"
                  height="30"
                  rx="6"
                  fill={`url(#${id}-tissue)`}
                  stroke="#b9898f"
                />
                <ellipse cx={38 + n * 28} cy="176" rx="6" ry="8" fill="#b38fa4" />
                {n < 10 && <path d={`M${52 + n * 28} 155v8`} stroke={green} strokeWidth="3" />}
              </g>
            ))}
            {[50, 102, 154, 206, 258, 310].map((x) => (
              <text key={x} x={x} y="69" fill="#b37439" fontSize="18" textAnchor="middle">
                H⁺
              </text>
            ))}
            {s === 1 ? (
              <>
                <Label x={180} y={117}>
                  Gel de mucus
                </Label>
                <Arrow x1={75} y1={157} x2={75} y2={132} color={green} width={2} />
                <Arrow x1={285} y1={157} x2={285} y2={132} color={green} width={2} />
              </>
            ) : (
              <>
                <Label x={180} y={87}>
                  Très acide
                </Label>
                <Label x={180} y={135}>
                  Moins acide
                </Label>
                {[76, 284].map((x) => (
                  <g key={x}>
                    <path
                      d={`M${x} 77V100`}
                      stroke="#b37439"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                    />
                    <circle cx={x} cy="111" r="3" fill="#c6c892" />
                    <text x={x} y="142" textAnchor="middle" fill={green} fontSize="18">
                      HCO₃⁻
                    </text>
                  </g>
                ))}
              </>
            )}
            <Label x={180} y={202}>
              {s === 1 ? "Cellules de la paroi" : "Bicarbonate dans le gel"}
            </Label>
          </>
        )}
      </AnatomyScene>
    );
  if (kind === "liverlobule") {
    const points = Array.from({ length: 6 }, (_, i) => ({
      x: 180 + 68 * Math.cos(((-90 + i * 60) * Math.PI) / 180),
      y: 131 + 68 * Math.sin(((-90 + i * 60) * Math.PI) / 180),
    }));
    return (
      <AnatomyScene
        id={id}
        title={
          [
            "Le foie reçoit deux arrivées",
            "Le sang rejoint le centre",
            "La bile rejoint les bords",
          ][s]!
        }
        foot={s === 0 ? "Sang et bile restent distincts" : "Coupe d’un lobule hépatique"}
      >
        {s === 0 ? (
          <>
            <LiverOrgan id={id} x={141} y={119} scale={1} />
            <path d="M312 83H224L199 103" stroke={blood} strokeWidth="6" fill="none" />
            <path d="M312 133H229L198 115" stroke={vein} strokeWidth="7" fill="none" />
            <Arrow x1={275} y1={83} x2={244} y2={83} color={blood} />
            <Arrow x1={275} y1={133} x2={244} y2={133} color={vein} />
            <path d="M112 90V55" stroke="#887ca7" strokeWidth="7" />
            <Arrow x1={112} y1={80} x2={112} y2={56} color="#887ca7" />
            <path d="M136 135V182H204" stroke={green} strokeWidth="5" fill="none" />
            <Arrow x1={156} y1={182} x2={195} y2={182} color={green} />
            <Label x={289} y={63}>
              Artère
            </Label>
            <Label x={289} y={162}>
              Veine porte
            </Label>
            <Label x={218} y={192}>
              Bile
            </Label>
            <Label x={62} y={54}>
              Sortie
            </Label>
          </>
        ) : (
          <>
            <polygon
              points={points.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="#eed5bf"
              stroke="#b68a7c"
              strokeWidth="2"
            />
            {points.map((p, i) => (
              <g key={i}>
                <path d={`M${p.x} ${p.y}L180 131`} stroke="#ccab8f" strokeWidth="15" />
                {[0.3, 0.55, 0.8].map((t) => (
                  <circle
                    key={t}
                    cx={180 + (p.x - 180) * t + 5}
                    cy={131 + (p.y - 131) * t + 3}
                    r="4"
                    fill="#b97d83"
                    opacity=".5"
                  />
                ))}
                <path
                  data-liver-flow="blood"
                  d={`M${p.x} ${p.y}L180 131`}
                  stroke={vein}
                  strokeWidth="3"
                  fill="none"
                  opacity={s === 1 ? 0.85 : 0.22}
                />
                <Arrow
                  x1={180 + (p.x - 180) * 0.72}
                  y1={131 + (p.y - 131) * 0.72}
                  x2={180 + (p.x - 180) * 0.4}
                  y2={131 + (p.y - 131) * 0.4}
                  color={s === 1 ? vein : "#b5c5c5"}
                  width={2}
                />
                {s === 2 && (
                  <Arrow
                    x1={184 + (p.x - 180) * 0.34}
                    y1={135 + (p.y - 131) * 0.34}
                    x2={184 + (p.x - 180) * 0.73}
                    y2={135 + (p.y - 131) * 0.73}
                    color={green}
                    width={2}
                  />
                )}
                <circle cx={p.x - 4} cy={p.y - 3} r="4" fill={blood} />
                <circle cx={p.x + 4} cy={p.y - 3} r="5" fill={vein} />
                <circle cx={p.x} cy={p.y + 5} r="3" fill={green} />
              </g>
            ))}
            <circle cx="180" cy="131" r="13" fill="#a6c2d3" stroke={vein} strokeWidth="2" />
            <Label x={52} y={67}>
              Lobule
            </Label>
            <path d="M78 73L125 96" stroke="#9ba7b2" />
            <Label x={301} y={129}>
              Veine
            </Label>
            <Label x={301} y={152}>
              centrale
            </Label>
            <path d="M267 136H196" stroke={vein} />
            <Label x={52} y={169}>
              {s === 1 ? "Sang" : "Bile"}
            </Label>
            <path d="M75 166L117 157" stroke={s === 1 ? vein : green} />
          </>
        )}
      </AnatomyScene>
    );
  }
  return null;
}
