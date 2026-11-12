import {
  Scene,
  Arrow,
  Label,
  Tree,
  Ground,
  Drop,
  Vessel,
  Wave,
  Sprout,
  blue,
  green,
  warm,
  ink,
  type DrawingProps,
} from "./Batch50Parts";
export function Environment50Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "desalination")
    return (
      <Scene
        id={id}
        title={["Une eau chargée en sel", "Pomper contre la membrane", "Eau douce et saumure"][s]!}
        foot={["Les sels sont dissous", "Osmose inverse", "Séparer consomme de l’énergie"][s]!}
      >
        <rect
          x="116"
          y="75"
          width="130"
          height="103"
          rx="9"
          fill={`url(#${id}-water)`}
          opacity=".25"
          stroke={blue}
        />
        <path d="M184 75V177" stroke="#97a29e" strokeWidth="8" />
        {Array.from({ length: 8 }, (_, i) => (
          <circle
            key={i}
            cx={130 + ((i * 17) % 42)}
            cy={88 + ((i * 23) % 75)}
            r="3.5"
            fill={warm}
          />
        ))}
        <path
          d="M35 126H116M246 103H318M160 178V192H316"
          stroke="#819cae"
          strokeWidth="7"
          fill="none"
          strokeLinejoin="round"
        />
        <Arrow x1={45} y1={126} x2={105} y2={126} />
        {s > 0 && (
          <>
            <circle cx="75" cy="126" r="15" fill={`url(#${id}-metal)`} stroke={ink} />
            <path d="M68 118l15 8-15 8Z" fill={blue} />
            <Arrow x1={146} y1={126} x2={220} y2={126} />
          </>
        )}
        {s === 2 && (
          <>
            <Arrow x1={260} y1={103} x2={317} y2={103} />
            <Arrow x1={240} y1={192} x2={317} y2={192} color={warm} />
            <Label x={286} y={76}>
              Eau douce
            </Label>
            <Label x={272} y={166}>
              Saumure
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "compostlife")
    return (
      <Scene
        id={id}
        title={["Restes humides et secs", "Les microbes respirent", "Le compost mûrit"][s]!}
        foot={["Matières variées", "Air + eau, chaleur libérée", "Un amendement stable"][s]!}
      >
        <Ground id={id} y={178} />
        <path d="M61 176V70H299V176" stroke={`url(#${id}-timber)`} strokeWidth="11" fill="none" />
        {[88, 115, 143, 171].map((y) => (
          <path key={y} d={`M62 ${y}H298`} stroke="#b89361" strokeWidth="5" opacity=".5" />
        ))}
        <path
          d={`M68 175V${[112, 107, 138][s]}Q180 ${[85, 90, 122][s]} 292 ${[110, 109, 139][s]}V175Z`}
          fill={s === 2 ? "#796046" : "#a78c62"}
        />
        {s === 0 ? (
          <>
            {Array.from({ length: 13 }, (_, i) => (
              <ellipse
                key={i}
                cx={88 + ((i * 37) % 175)}
                cy={119 + ((i * 17) % 48)}
                rx="12"
                ry="5"
                fill={i % 2 ? "#9cba6c" : "#ddbc79"}
                transform={`rotate(${i * 23} ${88 + ((i * 37) % 175)} ${119 + ((i * 17) % 48)})`}
              />
            ))}
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={30} y1={132} x2={105} y2={132} />
            <Drop x={240} y={78} />
            {[150, 180, 210].map((x) => (
              <Wave key={x} d={`M${x} 100q-10-15 0-26t0-23`} color={warm} />
            ))}
          </>
        ) : (
          <>
            {[110, 145, 180, 215, 250].map((x) => (
              <circle key={x} cx={x} cy={150 + (x % 17)} r="3" fill="#c8b28b" />
            ))}
            <Sprout x={179} y={135} />
          </>
        )}
      </Scene>
    );
  if (kind === "paperloop")
    return (
      <Scene
        id={id}
        title={["Défaire une feuille", "Bulles et encre", "Resserrer les fibres"][s]!}
        foot={["Des fibres en suspension", "La mousse est retirée", "Presser puis sécher"][s]!}
      >
        {s < 2 ? (
          <>
            <Vessel id={id} x={57} y={66} w={246} h={124} />
            {Array.from({ length: 20 }, (_, i) => (
              <path
                key={i}
                d={`M${75 + ((i * 43) % 206)} ${115 + ((i * 19) % 60)}l9-3 7 4`}
                stroke="#ae9e7e"
                strokeWidth="2"
                fill="none"
              />
            ))}
            {s === 0 ? (
              <>
                <path d="M96 67l62-16 20 43-61 14Z" fill="#f5eedc" stroke="#a8a18d" />
                {[0, 1, 2].map((i) => (
                  <path key={i} d={`M112 ${74 + i * 7}l33-7`} stroke="#9c9c90" strokeWidth="2" />
                ))}
              </>
            ) : (
              <>
                {[97, 132, 175, 220, 264].map((x, i) => (
                  <g key={x}>
                    <circle cx={x} cy={167 - i * 17} r="7" fill="#e7f4fa" stroke={blue} />
                    <circle cx={x + 4} cy={163 - i * 17} r="2.5" fill={ink} />
                  </g>
                ))}
                <path d="M65 97q110-14 230 0" stroke="#6d7e8b" strokeWidth="9" />
                <Arrow x1={244} y1={80} x2={319} y2={80} />
              </>
            )}
          </>
        ) : (
          <>
            <path d="M66 129l211-37 22 65-208 36Z" fill="#ece6d6" stroke="#b5b1a2" />
            {Array.from({ length: 35 }, (_, i) => (
              <path
                key={i}
                d={`M${87 + ((i * 43) % 187)} ${127 + ((i * 17) % 35)}l10-3 6 2`}
                stroke="#c2b697"
                strokeWidth="1.7"
                fill="none"
              />
            ))}
            <Arrow x1={160} y1={56} x2={160} y2={101} />
            <Arrow x1={191} y1={193} x2={191} y2={171} />
          </>
        )}
      </Scene>
    );
  if (kind === "mangroveroots")
    return (
      <Scene
        id={id}
        title={["Une vague arrive", "Des obstacles perméables", "La vase se dépose"][s]!}
        foot={
          ["Vers le rivage", "Une partie de l’énergie dissipée", "Racines, sédiments, abris"][s]!
        }
      >
        <path d="M20 135H340V193H20Z" fill={`url(#${id}-water)`} opacity=".45" />
        <path d="M20 190Q160 175 340 167V201H20Z" fill={`url(#${id}-clay)`} />
        {[180, 250, 305].map((x) => (
          <g key={x}>
            <Tree x={x} y={128} scale={0.62} />
            <path
              d={`M${x} 105Q${x - 25} 142 ${x - 32} 181M${x} 110Q${x + 20} 148 ${x + 26} 174M${x} 118L${x - 9} 178`}
              stroke="#806448"
              strokeWidth="5"
              fill="none"
            />
          </g>
        ))}
        <Wave
          d={
            s === 0
              ? "M22 135q13-23 26 0t26 0t26 0t26 0"
              : "M22 135q13-23 26 0t26 0t26 0t26 0q13-12 26 0t26 0q13-5 26 0t26 0t26 0t26 0"
          }
        />
        <Arrow x1={30} y1={84} x2={111} y2={84} />
        {s === 2 &&
          Array.from({ length: 14 }, (_, i) => (
            <circle
              key={i}
              cx={154 + ((i * 19) % 158)}
              cy={176 + ((i * 11) % 13)}
              r="2.5"
              fill="#8f7659"
            />
          ))}
      </Scene>
    );
  if (kind === "citycanopy")
    return (
      <Scene
        id={id}
        title={["Sol minéral exposé", "L’ombre du feuillage", "L’eau devient vapeur"][s]!}
        foot={
          [
            "Rayonnement absorbé",
            "Moins d’énergie atteint le sol",
            "Un effet lié à l’eau disponible",
          ][s]!
        }
      >
        <path d="M22 166H338V196H22Z" fill="#bdc4c7" />
        <path d="M24 184H336" stroke="#edf0f0" strokeWidth="2" />
        <rect x="259" y="72" width="57" height="94" rx="3" fill="#d4dfe5" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="270" y={84 + i * 25} width="33" height="13" fill="#91afc4" />
        ))}
        <circle cx="57" cy="61" r="17" fill={`url(#${id}-gold)`} />
        {s > 0 && (
          <>
            <path d="M99 164H249L208 150H152Z" fill="#5f7969" opacity=".25" />
            <Tree x={178} y={164} scale={0.9} />
          </>
        )}
        {[0, 1, 2].map((i) => (
          <Arrow
            key={i}
            x1={72 + i * 27}
            y1={67 + i * 4}
            x2={s ? 110 + i * 14 : 123 + i * 27}
            y2={s ? 103 : 158}
            color={warm}
          />
        ))}
        {s === 2 && (
          <>
            <Arrow x1={178} y1={177} x2={178} y2={130} />
            <Wave d="M212 74q13-13 0-26M230 83q13-13 0-26" />
            <Drop x={178} y={185} />
          </>
        )}
      </Scene>
    );
  if (kind === "ozonecycle")
    return (
      <Scene
        id={id}
        title={["Une absorption des UV", "Du chlore réactif", "Protection diminuée"][s]!}
        foot={
          [
            "Stratosphère riche en ozone",
            "Destruction catalytique simplifiée",
            "Davantage d’UV transmis",
          ][s]!
        }
      >
        <path d="M20 78H340V147H20Z" fill="#c3dce9" opacity=".55" />
        <path d="M20 195Q180 153 340 195" stroke={green} strokeWidth="8" fill="none" />
        {Array.from({ length: s === 2 ? 3 : 7 }, (_, i) => (
          <g key={i} transform={`translate(${48 + i * 42} ${100 + (i % 2) * 22})`}>
            <circle r="7" fill={blue} />
            <circle cx="10" cy="5" r="7" fill="#5d95bf" />
            <circle cx="2" cy="12" r="7" fill="#89b3d0" />
          </g>
        ))}
        {[60, 175, 293].map((x, i) => (
          <Arrow key={x} x1={x} y1={42} x2={x} y2={s === 2 || i === 1 ? 176 : 78} color="#8567b0" />
        ))}
        {s === 1 && (
          <>
            <circle cx="232" cy="122" r="9" fill={warm} />
            <Label x={262} y={163}>
              Chlore
            </Label>
          </>
        )}
        <Label x={180} y={64}>
          UV
        </Label>
      </Scene>
    );
  if (kind === "algaebloom")
    return (
      <Scene
        id={id}
        title={["Du champ à la rivière", "Des algues prolifèrent", "L’oxygène est consommé"][s]!}
        foot={
          ["Transport de nutriments", "Lumière + nutriments + milieu", "Décomposition aquatique"][
            s
          ]!
        }
      >
        <path d="M20 112L160 143V196H20Z" fill="#c6bf88" />
        <path d="M160 143H340V196H160Z" fill={`url(#${id}-water)`} opacity=".6" />
        {[50, 90, 130].map((x) => (
          <Sprout key={x} x={x} y={109 + x * 0.2} />
        ))}
        <path
          d="M46 145Q120 137 166 161T276 169"
          stroke={blue}
          strokeWidth="9"
          fill="none"
          opacity=".7"
        />
        {[70, 100, 130].map((x) => (
          <circle key={x} cx={x} cy="151" r="3" fill={warm} />
        ))}
        <Arrow x1={119} y1={158} x2={180} y2={171} />
        {s > 0 && (
          <>
            {Array.from({ length: s === 1 ? 12 : 4 }, (_, i) => (
              <ellipse
                key={i}
                cx={198 + ((i * 29) % 123)}
                cy={144 + ((i * 11) % 12)}
                rx="13"
                ry="4"
                fill={green}
              />
            ))}
            {s === 2 && (
              <>
                <path d="M211 181q30 8 94 3" stroke="#7b7155" strokeWidth="7" />
                <Label x={265} y={87}>
                  O₂ ↓
                </Label>
              </>
            )}
          </>
        )}
      </Scene>
    );
  if (kind === "rainharvest")
    return (
      <Scene
        id={id}
        title={["Ruissellement du toit", "Première chasse et grille", "Cuve non potable"][s]!}
        foot={
          ["Gouttière", "Écarter les premiers écoulements", "Pas de raccord à l’eau potable"][s]!
        }
      >
        <path
          d="M27 122L112 65L190 116Z"
          fill={`url(#${id}-timber)`}
          stroke="#876744"
          strokeWidth="3"
        />
        <path d="M47 126V196H170V126" fill="#e1ded1" />
        <path d="M183 119H212V184H233" fill="none" stroke="#7799b0" strokeWidth="8" />
        {s > 0 && (
          <>
            <path d="M212 141H197V183" stroke="#7799b0" strokeWidth="6" fill="none" />
            <path d="M203 132h18m-18 6h18" stroke="#5b6d70" strokeWidth="2" />
            <Arrow x1={197} y1={151} x2={197} y2={183} color={warm} />
          </>
        )}
        <rect
          x="236"
          y="135"
          width="90"
          height="62"
          rx="8"
          fill={`url(#${id}-metal)`}
          stroke="#5c7a89"
        />
        <path d="M237 140h88" stroke="#50667c" strokeWidth="9" />
        {[80, 110, 140].map((x) => (
          <Drop key={x} x={x} y={44} />
        ))}
        {s === 2 ? (
          <>
            <path d="M249 164h62v22h-62Z" fill={blue} opacity=".3" />
            <Label x={280} y={112}>
              Cuve fermée
            </Label>
          </>
        ) : (
          <Arrow x1={124} y1={84} x2={178} y2={116} />
        )}
      </Scene>
    );
  if (kind === "hedgerows")
    return (
      <Scene
        id={id}
        title={["Freiner le vent", "Freiner le ruissellement", "Relier des habitats"][s]!}
        foot={
          ["Une haie laisse passer de l’air", "Des racines sur un talus", "Un refuge, pas un mur"][
            s
          ]!
        }
      >
        <Ground id={id} y={159} />
        {[155, 184, 214].map((x) => (
          <Tree key={x} x={x} y={158} scale={0.67} />
        ))}
        {s === 0 ? (
          <>
            {[77, 104, 131].map((y) => (
              <g key={y}>
                <Arrow x1={30} y1={y} x2={126} y2={y} />
                <Arrow x1={242} y1={y} x2={283} y2={y} width={2} />
              </g>
            ))}
          </>
        ) : s === 1 ? (
          <>
            <Wave d="M30 155Q92 159 129 163" />
            <Arrow x1={124} y1={164} x2={158} y2={164} />
            <Arrow x1={180} y1={168} x2={180} y2={192} />
            <path d="M160 160l-13 28m34-28 8 31m16-31 16 24" stroke="#a28154" strokeWidth="3" />
          </>
        ) : (
          <>
            <Wave d="M30 102q19-20 38 0M271 93q19-20 38 0" color={ink} />
            <ellipse cx="81" cy="151" rx="13" ry="8" fill={warm} />
            <circle cx="75" cy="148" r="2" fill={ink} />
            <Arrow x1={90} y1={177} x2={275} y2={177} color={green} />
          </>
        )}
      </Scene>
    );
  if (kind === "wormsoil")
    return (
      <Scene
        id={id}
        title={["Attirer une feuille", "Un passage dans le sol", "Mélanger puis rejeter"][s]!}
        foot={["Un ver anécique", "Eau et air peuvent entrer", "Des turricules en surface"][s]!}
      >
        <Ground id={id} y={89} />
        <path d="M170 90q-23 33 5 55t-11 49" stroke="#6c5942" strokeWidth="17" fill="none" />
        <path d="M170 90q-23 33 5 55t-11 49" stroke="#d3bd99" strokeWidth="10" fill="none" />
        {s === 0 ? (
          <>
            <path d="M176 90q-43 1-46-23q38-8 46 23Z" fill="#aa9159" stroke="#7e704c" />
            <Wave d="M162 104q15 15 10 33" color="#ac6f58" width={7} />
          </>
        ) : s === 1 ? (
          <>
            <Drop x={170} y={62} />
            <Arrow x1={170} y1={103} x2={170} y2={142} />
            <Label x={263} y={135}>
              Galerie
            </Label>
          </>
        ) : (
          <>
            <Wave d="M169 144q25-24 1-49" color="#ac6f58" width={7} />
            {[0, 1, 2, 3].map((i) => (
              <ellipse
                key={i}
                cx={212 + (i % 2) * 12}
                cy={84 - Math.floor(i / 2) * 7}
                rx="9"
                ry="5"
                fill="#907655"
              />
            ))}
            <Label x={267} y={58}>
              Turricules
            </Label>
          </>
        )}
      </Scene>
    );
  return null;
}
