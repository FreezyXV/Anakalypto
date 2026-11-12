import {
  Scene,
  Arrow,
  Label,
  Drop,
  Vessel,
  Wave,
  Turning,
  blue,
  green,
  warm,
  type DrawingProps,
} from "./Batch50Parts";
export function Engineering50Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "rooftruss")
    return (
      <Scene
        id={id}
        title={["Un cadre peut se déformer", "La diagonale stabilise", "Une ferme triangulée"][s]!}
        foot={
          ["Assemblages articulés", "Les barres forment des triangles", "Compression et traction"][
            s
          ]!
        }
      >
        {s < 2 ? (
          <>
            <path
              d={s === 0 ? "M95 76H277L249 181H67Z" : "M86 76H268V181H86Z"}
              fill="none"
              stroke={`url(#${id}-timber)`}
              strokeWidth="10"
              strokeLinejoin="round"
            />
            {s === 1 && <path d="M86 181L268 76" stroke="#9e7146" strokeWidth="8" />}
            <Arrow x1={175} y1={56} x2={249} y2={56} color={warm} />
            {(s === 0
              ? [
                  [95, 76],
                  [277, 76],
                  [249, 181],
                  [67, 181],
                ]
              : [
                  [86, 76],
                  [268, 76],
                  [268, 181],
                  [86, 181],
                ]
            ).map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#d7bf99" stroke="#826344" />
            ))}
          </>
        ) : (
          <>
            <path
              d="M49 173L180 64L311 173Z"
              fill="none"
              stroke={`url(#${id}-timber)`}
              strokeWidth="11"
              strokeLinejoin="round"
            />
            <path
              d="M180 64V173M112 119L180 173L245 119"
              stroke="#b99161"
              strokeWidth="7"
              fill="none"
            />
            <Arrow x1={103} y1={106} x2={141} y2={76} color={warm} />
            <Arrow x1={258} y1={106} x2={220} y2={76} color={warm} />
            <Arrow x1={151} y1={174} x2={82} y2={174} />
            <Arrow x1={211} y1={174} x2={280} y2={174} />
            <Label x={180} y={199}>
              Entrait tendu
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "claybrick")
    return (
      <Scene
        id={id}
        title={["Façonner la terre humide", "Évacuer l’eau libre", "Transformer par cuisson"][s]!}
        foot={["Moulage", "Séchage avant le four", "Une céramique"][s]!}
      >
        <path
          d="M93 123l131-27 48 26-132 29Z"
          fill={s === 2 ? "#c88b6d" : "#c4aa87"}
          stroke="#9d7d60"
          strokeWidth="2"
        />
        <path d="M93 123v43l47 27v-42Z" fill={s === 2 ? "#a56850" : "#a48b70"} stroke="#9d7d60" />
        <path
          d="M140 151l132-29v44l-132 27Z"
          fill={s === 2 ? "#bc795c" : "#b49a7a"}
          stroke="#9d7d60"
        />
        {s === 0 ? (
          <>
            <path
              d="M74 113l150-32 66 36-16 7-50-27-130 27v49l-20-11Z"
              fill={`url(#${id}-timber)`}
            />
            <Drop x={184} y={69} />
          </>
        ) : s === 1 ? (
          <>
            {[128, 180, 233].map((x) => (
              <Wave key={x} d={`M${x} 101q-10-18 0-36`} />
            ))}
          </>
        ) : (
          <>
            <path d="M57 186V66H304V186" stroke="#c8b797" strokeWidth="12" fill="none" />
            {[111, 178, 245].map((x) => (
              <Wave key={x} d={`M${x} 89q-10-18 0-35`} color={warm} />
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "aqueductslope")
    return (
      <Scene
        id={id}
        title={
          [
            "Du haut vers le bas",
            "Garder la pente au-dessus du creux",
            "La gravité entretient l’écoulement",
          ][s]!
        }
        foot={
          ["Canal à surface libre", "Un franchissement de vallée", "Pente amplifiée pour la voir"][
            s
          ]!
        }
      >
        <path d="M22 153Q108 192 185 195Q268 194 338 167V202H22Z" fill="#d5d4c1" />
        {s > 0 &&
          [63, 125, 187, 249].map((x) => (
            <path
              key={x}
              d={`M${x} ${112 + x * 0.1}v61h12v-35q17-30 34 0v35h12v-${61}`}
              fill={`url(#${id}-stone)`}
              stroke="#adab98"
            />
          ))}
        <path
          d="M25 94L337 127L336 145L24 112Z"
          fill={`url(#${id}-stone)`}
          stroke="#a5a58f"
          strokeWidth="2"
        />
        <path d="M25 96L336 129" stroke={blue} strokeWidth="6" />
        <Arrow
          x1={s === 2 ? 137 : 65}
          y1={s === 2 ? 107 : 99}
          x2={s === 2 ? 270 : 153}
          y2={s === 2 ? 121 : 108}
        />
        <Label x={105} y={68}>
          Amont
        </Label>
        <Label x={285} y={94}>
          Aval
        </Label>
      </Scene>
    );
  if (kind === "baseisolation")
    return (
      <Scene
        id={id}
        title={
          ["Le sol bouge", "Des appuis se déforment", "Le bâtiment est partiellement découplé"][s]!
        }
        foot={["Bâtiment ordinaire", "Isolation à la base", "Aucune protection absolue"][s]!}
      >
        <path d="M28 193H333" stroke="#ab9a7d" strokeWidth="13" />
        {s > 0 &&
          [104, 179, 254].map((x) => (
            <g key={x} transform={`translate(${x} 168)`}>
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M${-16 + i * (s === 2 ? 2 : 1)} ${i * 5}h32`}
                  stroke={i % 2 ? "#7896a8" : "#575e60"}
                  strokeWidth="4"
                />
              ))}
            </g>
          ))}
        <g transform={`translate(${s === 0 ? 6 : s === 1 ? 0 : -6} 0)`}>
          <path
            d={`M80 ${s === 0 ? 183 : 164}V62H279V${s === 0 ? 183 : 164}Z`}
            fill="#dde7ec"
            stroke="#8b9eaa"
            strokeWidth="3"
          />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M82 ${92 + i * 28}H276M130 63V${s === 0 ? 182 : 162}M229 63V${s === 0 ? 182 : 162}`}
              fill="none"
              stroke="#a0b5c2"
              strokeWidth="4"
            />
          ))}
        </g>
        <Arrow x1={63} y1={203} x2={132} y2={203} color={warm} />
        {s > 0 && <Arrow x1={250} y1={180} x2={300} y2={180} />}
      </Scene>
    );
  if (kind === "quadcopter")
    return (
      <Scene
        id={id}
        title={
          [
            "Vue de dessus : deux sens",
            "Vue de profil : stationnaire",
            "Vue de profil : inclinaison",
          ][s]!
        }
        foot={
          [
            "Paires diagonales de même sens",
            "Poussée totale = poids",
            "Poussée oblique, déplacement",
          ][s]!
        }
      >
        {s === 0 ? (
          <>
            <path d="M111 77L249 173M111 173L249 77" stroke="#849aaa" strokeWidth="10" />
            <rect x="159" y="105" width="43" height="40" rx="10" fill={`url(#${id}-metal)`} />
            {(
              [
                [111, 77],
                [249, 77],
                [111, 173],
                [249, 173],
              ] as const
            ).map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="22" fill="#d3e3e8" stroke="#90aab8" />
                <path d={`M${x - 20} ${y}h40`} stroke="#547e9a" strokeWidth="4" />
                <Turning
                  x={x}
                  y={y}
                  reverse={i === 1 || i === 2}
                  color={i === 1 || i === 2 ? warm : blue}
                />
              </g>
            ))}
          </>
        ) : (
          <>
            <g transform={`rotate(${s === 2 ? 18 : 0} 180 129)`}>
              <path d="M83 126H277" stroke="#7892a5" strokeWidth="7" />
              <rect x="153" y="115" width="54" height="28" rx="9" fill={`url(#${id}-metal)`} />
              {[101, 259].map((x) => (
                <g key={x}>
                  <path d={`M${x} 113V133`} stroke="#63879e" strokeWidth="6" />
                  <ellipse cx={x} cy="111" rx="31" ry="5" fill="#88a9bc" />
                </g>
              ))}
              <Arrow x1={180} y1={104} x2={180} y2={51} />
            </g>
            <Arrow x1={180} y1={148} x2={180} y2={197} color={warm} />
            {s === 2 && <Arrow x1={235} y1={83} x2={299} y2={83} color={green} />}
          </>
        )}
      </Scene>
    );
  if (kind === "lidarmap")
    return (
      <Scene
        id={id}
        title={["Une impulsion lumineuse", "Mesurer un aller-retour", "Un ensemble de points"][s]!}
        foot={
          ["Du capteur vers l’obstacle", "Distance = c × temps ÷ 2", "Coupe 2D d’un balayage"][s]!
        }
      >
        <path d="M277 65V187H84" stroke="#a6a39b" strokeWidth="11" fill="none" />
        <circle cx="104" cy="112" r="22" fill={`url(#${id}-metal)`} stroke="#708a9f" />
        <circle cx="104" cy="112" r="9" fill="#6c9db3" />
        {s < 2 ? (
          <>
            <Arrow x1={132} y1={105} x2={267} y2={105} color={warm} />
            {s === 1 && <Arrow x1={267} y1={122} x2={132} y2={122} />}
            <Label x={180} y={68}>
              {s === 0 ? "Émission" : "Temps mesuré"}
            </Label>
          </>
        ) : (
          <>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i}>
                <path
                  d={`M104 112L${i < 3 ? 272 : 128 + (i - 3) * 59} ${i < 3 ? 78 + i * 36 : 181}`}
                  stroke="#9bb9c9"
                  strokeWidth="1.5"
                />
                <circle
                  cx={i < 3 ? 272 : 128 + (i - 3) * 59}
                  cy={i < 3 ? 78 + i * 36 : 181}
                  r="4"
                  fill={blue}
                />
              </g>
            ))}
            <Label x={181} y={62}>
              Points mesurés
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "motortorque")
    return (
      <Scene
        id={id}
        title={
          [
            "Rotor en coupe entre les pôles",
            "Deux forces font tourner",
            "Le collecteur inverse le courant",
          ][s]!
        }
        foot={
          [
            "Moteur à courant continu",
            "Un couple, pas une translation",
            "La rotation peut se poursuivre",
          ][s]!
        }
      >
        <path d="M49 70H109V175H49Z" fill="#cc8e7b" stroke="#ac705e" />
        <path d="M251 70H311V175H251Z" fill="#8fb5cd" stroke="#6b94ae" />
        <Label x={80} y={128}>
          N
        </Label>
        <Label x={281} y={128}>
          S
        </Label>
        {[83, 123, 163].map((y) => (
          <Arrow key={y} x1={119} y1={y} x2={241} y2={y} width={1.5} color="#b7ccd6" />
        ))}
        <g transform={`rotate(${[0, -25, -155][s]} 180 123)`}>
          <ellipse
            cx="180"
            cy="123"
            rx="36"
            ry="24"
            fill="none"
            stroke={`url(#${id}-copper)`}
            strokeWidth="6"
          />
          {[0, 1].map((i) => (
            <g key={i}>
              <circle cx={144 + i * 72} cy="123" r="9" fill={i === 0 ? warm : blue} />
              {(i === 0) !== (s === 2) ? (
                <path
                  d={`M${140 + i * 72} 119l8 8m-8 0 8-8`}
                  transform={`rotate(${-([0, -25, -155][s] ?? 0)} ${144 + i * 72} 123)`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              ) : (
                <circle cx={144 + i * 72} cy="123" r="2.5" fill="#fff" />
              )}
            </g>
          ))}
          <circle cx="180" cy="123" r="4" fill="#617c8e" />
        </g>
        {s > 0 &&
          [0, 1].map((i) => {
            const a = ([0, -25, -155][s]! * Math.PI) / 180,
              x = 180 + (i ? 36 : -36) * Math.cos(a),
              y = 123 + (i ? 36 : -36) * Math.sin(a),
              up = (i === 1) !== (s === 2);
            return (
              <Arrow
                key={i}
                x1={x}
                y1={y + (up ? -13 : 13)}
                x2={x}
                y2={y + (up ? -39 : 39)}
                color={warm}
              />
            );
          })}
        {s > 0 && <Turning x={180} y={123} color={warm} reverse />}
        {s === 2 && (
          <>
            <path
              d="M170 181q-11 15 0 20M190 181q11 15 0 20"
              stroke={warm}
              strokeWidth="5"
              fill="none"
            />
            <path d="M153 193H168M192 193H208" stroke="#4d687e" strokeWidth="5" />
          </>
        )}
      </Scene>
    );
  if (kind === "elasticplastic")
    return (
      <Scene
        id={id}
        title={
          ["Éprouvette sans charge", "Déformation sous charge", "Déchargée, mais plus longue"][s]!
        }
        foot={["Longueur initiale", "Retour possible après décharge", "Déformation permanente"][s]!}
      >
        <path d="M72 73V192M285 73V192" stroke="#bcc9d0" strokeDasharray="5 5" />
        <path
          d={`M${[73, 49, 60][s]} 101h38l13 13h${[112, 160, 138][s]}l13-13h38v43h-38l-13-13H${[124, 100, 111][s]}l-13 13H${[73, 49, 60][s]}Z`}
          fill={`url(#${id}-metal)`}
          stroke="#6f899b"
          strokeWidth="2"
        />
        {s === 1 ? (
          <>
            <Arrow x1={48} y1={122} x2={24} y2={122} color={warm} />
            <Arrow x1={312} y1={122} x2={336} y2={122} color={warm} />
            <Label x={180} y={65}>
              Charge modérée
            </Label>
          </>
        ) : s === 2 ? (
          <Label x={180} y={65}>
            Après une forte charge
          </Label>
        ) : (
          <Label x={180} y={65}>
            Repères initiaux
          </Label>
        )}
      </Scene>
    );
  if (kind === "wheatflour")
    return (
      <Scene
        id={id}
        title={["Coupe d’un grain de blé", "Moudre puis tamiser", "Blanche ou complète"][s]!}
        foot={
          ["Son, amande, germe", "Séparer les fractions", "Le choix des parties conservées"][s]!
        }
      >
        {s === 0 ? (
          <>
            <path
              d="M169 64C92 59 103 182 169 187C232 180 254 72 169 64Z"
              fill="#bd9863"
              stroke="#8b754f"
              strokeWidth="2"
            />
            <path d="M169 74C112 70 118 172 169 176C220 168 236 79 169 74Z" fill="#f1dfb0" />
            <path d="M168 157q-27-12-34 0q8 20 30 18Z" fill="#b8a25c" />
            <Label x={68} y={85}>
              Son
            </Label>
            <path d="M88 89L124 92" stroke="#8b9488" />
            <Label x={284} y={124}>
              Amande
            </Label>
            <path d="M238 126H210" stroke="#8b9488" />
            <Label x={68} y={181}>
              Germe
            </Label>
            <path d="M105 176L141 165" stroke="#8b9488" />
          </>
        ) : s === 1 ? (
          <>
            <circle cx="129" cy="100" r="32" fill={`url(#${id}-metal)`} stroke="#6b879a" />
            <circle cx="220" cy="100" r="32" fill={`url(#${id}-metal)`} stroke="#6b879a" />
            <Turning x={129} y={100} />
            <Turning x={220} y={100} reverse />
            <path d="M92 168H268" stroke="#8b9a9e" strokeWidth="3" strokeDasharray="3 4" />
            {Array.from({ length: 15 }, (_, i) => (
              <circle
                key={i}
                cx={117 + ((i * 23) % 128)}
                cy={143 + ((i * 13) % 48)}
                r={i % 3 === 0 ? 4 : 2}
                fill={i % 3 === 0 ? "#b39b6e" : "#dfce9f"}
              />
            ))}
            <Arrow x1={174} y1={53} x2={174} y2={98} />
          </>
        ) : (
          <>
            {[78, 218].map((x, i) => (
              <g key={x}>
                <path
                  d={`M${x} 85h65l9 98h-83Z`}
                  fill={i ? "#d2bd96" : "#f3e5bd"}
                  stroke="#a9936a"
                  strokeWidth="2"
                />
                {Array.from({ length: i ? 17 : 5 }, (_, j) => (
                  <circle
                    key={j}
                    cx={x + 6 + ((j * 17) % 51)}
                    cy={116 + ((j * 13) % 52)}
                    r="1.8"
                    fill="#9c8154"
                  />
                ))}
                <Label x={x + 33} y={69}>
                  {i ? "Complète" : "Blanche"}
                </Label>
              </g>
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "yogurtculture")
    return (
      <Scene
        id={id}
        title={
          ["Des bactéries dans le lait", "L’acidité augmente", "Les caséines forment un réseau"][s]!
        }
        foot={
          ["Un lait ensemencé", "Une partie du lactose transformée", "Un gel qui retient de l’eau"][
            s
          ]!
        }
      >
        <Vessel id={id} x={80} y={65} w={200} h={126} water="#d8cfaf" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            {i % 2 ? (
              <rect
                x={104 + i * 29}
                y={117 + (i % 3) * 23}
                width="18"
                height="6"
                rx="3"
                fill={green}
              />
            ) : (
              <>
                {[0, 1, 2].map((j) => (
                  <circle
                    key={j}
                    cx={109 + i * 30 + j * 5}
                    cy={123 + (i % 3) * 20}
                    r="3"
                    fill={blue}
                  />
                ))}
              </>
            )}
          </g>
        ))}
        {s === 1 && (
          <>
            <Arrow x1={123} y1={81} x2={240} y2={81} color={warm} />
            <Label x={180} y={57}>
              pH en baisse
            </Label>
          </>
        )}
        {s === 2 && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <Wave
                key={i}
                d={`M88 ${110 + i * 21}q25-17 50 0t50 0t50 0t36 0`}
                color="#baa480"
                width={2}
              />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <Wave key={i} d={`M${103 + i * 46} 101q-16 22 0 44t0 40`} color="#baa480" width={2} />
            ))}
          </>
        )}
      </Scene>
    );
  return null;
}
