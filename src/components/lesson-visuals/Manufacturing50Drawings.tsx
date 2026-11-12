import {
  Scene,
  Arrow,
  Label,
  Vessel,
  Wave,
  Turning,
  blue,
  green,
  warm,
  type DrawingProps,
} from "./Batch50Parts";
import { polymerPath, polymerY, weaveOver } from "@/lib/lesson-visuals/batch50-models";
export function Manufacturing50Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "weaveloom")
    return (
      <Scene
        id={id}
        title={
          ["Tordre des fibres en fil", "Chaîne tendue et trame", "Dessus, dessous, en alternance"][
            s
          ]!
        }
        foot={
          ["Le filage précède le tissage", "Deux directions de fils", "Exemple d’armure toile"][s]!
        }
      >
        {s === 0 ? (
          <>
            {[-2, -1, 0, 1, 2].map((i) => (
              <Wave
                key={i}
                d={`M45 ${92 + i * 9}Q97 ${75 + i * 10} 144 122Q170 ${139 + i * 2} 235 ${120 + i * 2}`}
                color={i % 2 ? "#b69663" : "#d9c093"}
                width={2.5}
              />
            ))}
            <Turning x={269} y={122} />
            <path d="M240 122H315" stroke="#b28d55" strokeWidth="6" />
            <Label x={104} y={174}>
              Fibres
            </Label>
            <Label x={278} y={174}>
              Fil
            </Label>
          </>
        ) : (
          <>
            <path
              d="M75 72H286V184H75Z"
              fill="none"
              stroke={`url(#${id}-timber)`}
              strokeWidth="12"
            />
            {Array.from({ length: 9 }, (_, i) => (
              <path key={i} d={`M${93 + i * 22} 76V180`} stroke="#d5b16e" strokeWidth="5" />
            ))}
            {Array.from({ length: s === 1 ? 1 : 5 }, (_, j) => (
              <g key={j}>
                <path d={`M80 ${99 + j * 17}H284`} stroke={blue} strokeWidth="5" />
                {Array.from({ length: 9 }, (_, i) =>
                  weaveOver(i, j) ? (
                    <path
                      key={i}
                      d={`M${93 + i * 22} ${93 + j * 17}v12`}
                      stroke="#d5b16e"
                      strokeWidth="5"
                    />
                  ) : null,
                )}
              </g>
            ))}
            <Label x={180} y={54}>
              Chaîne
            </Label>
            <Label x={40} y={143}>
              Trame
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "foundrycast")
    return (
      <Scene
        id={id}
        title={["Un creux dans le sable", "Remplir la cavité", "Une pièce solidifiée"][s]!}
        foot={["Moule en coupe", "Métal liquide", "Le moule de sable est ouvert"][s]!}
      >
        {s < 2 ? (
          <>
            <path
              d="M60 92H303V188H60Z"
              fill={`url(#${id}-clay)`}
              stroke="#b3a085"
              strokeWidth="2"
            />
            <path
              d="M112 91H136V117H253V151H136V172H112Z"
              fill={s === 1 ? "#d38b46" : "#ece8dd"}
              stroke="#a39580"
              strokeWidth="2"
            />
            {s === 1 && (
              <>
                <path d="M79 49l65 5-12 30-49-8Z" fill={`url(#${id}-metal)`} stroke="#7892a5" />
                <path d="M128 79q-9 9-4 32" stroke="#d38b46" strokeWidth="7" fill="none" />
                <Arrow x1={175} y1={132} x2={235} y2={132} color={warm} />
              </>
            )}
          </>
        ) : (
          <>
            <path
              d="M100 94H124V119H249V153H124V177H100Z"
              fill={`url(#${id}-metal)`}
              stroke="#637f93"
              strokeWidth="2"
            />
            {[50, 285].map((x) => (
              <path key={x} d={`M${x} 140l18-33 21 24-11 48-25-9Z`} fill={`url(#${id}-clay)`} />
            ))}
            <Arrow x1={79} y1={92} x2={43} y2={92} />
            <Arrow x1={279} y1={92} x2={315} y2={92} />
          </>
        )}
      </Scene>
    );
  if (kind === "steeltemper")
    return (
      <Scene
        id={id}
        title={
          ["Chauffer l’acier adapté", "Refroidir rapidement", "Réchauffer plus modérément"][s]!
        }
        foot={
          ["Structure préparée", "Structure durcie, plus fragile", "Dureté et ténacité ajustées"][
            s
          ]!
        }
      >
        {s !== 1 ? (
          <>
            <path
              d="M71 184V67H289V184"
              fill={`url(#${id}-stone)`}
              stroke="#a49379"
              strokeWidth="3"
            />
            <path d="M98 174V99Q180 67 262 99V174Z" fill={s === 0 ? "#d6a56f" : "#dabd91"} />
            <rect
              x="124"
              y="131"
              width="112"
              height="17"
              rx="4"
              fill={s === 0 ? "#db7045" : "#a0886e"}
              stroke="#885b44"
            />
            {[137, 180, 223].map((x) => (
              <Wave key={x} d={`M${x} 121q-10-13 0-26`} color={warm} />
            ))}
          </>
        ) : (
          <>
            <Vessel id={id} x={78} y={82} w={204} h={111} />
            <rect
              x="124"
              y="112"
              width="112"
              height="17"
              rx="4"
              fill={`url(#${id}-metal)`}
              stroke="#637f93"
            />
            <Arrow x1={180} y1={51} x2={180} y2={93} color={warm} />
            {[113, 158, 224, 251].map((x) => (
              <Wave key={x} d={`M${x} 111q-10-13 0-26`} color="#91afbe" />
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "catalystpath")
    return (
      <Scene
        id={id}
        title={["Une barrière à franchir", "Un chemin catalysé", "Même départ, même arrivée"][s]!}
        foot={
          [
            "Progression de réaction →",
            "Barrière d’activation plus basse",
            "Le bilan d’énergie ne change pas",
          ][s]!
        }
      >
        <Arrow x1={49} y1={184} x2={49} y2={55} color="#8095a4" width={2} />
        <Arrow x1={49} y1={184} x2={324} y2={184} color="#8095a4" width={2} />
        <Label x={180} y={54}>
          Énergie
        </Label>
        <path
          d="M60 146H96C125 146 130 70 168 70S220 167 260 167H312"
          fill="none"
          stroke={s === 0 ? warm : "#b9b5af"}
          strokeWidth="3"
          strokeDasharray={s === 0 ? undefined : "5 4"}
        />
        {s > 0 && (
          <path
            d="M60 146H96C126 146 136 115 168 115S220 167 260 167H312"
            fill="none"
            stroke={blue}
            strokeWidth="4"
          />
        )}
        {s === 2 && (
          <>
            <circle cx="80" cy="146" r="5" fill={green} />
            <circle cx="290" cy="167" r="5" fill={green} />
            <Label x={91} y={124}>
              Réactifs
            </Label>
            <Label x={276} y={145}>
              Produits
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "rubberlinks")
    return (
      <Scene
        id={id}
        title={
          ["Des chaînes enchevêtrées", "Des ponts entre les chaînes", "Le réseau se déforme"][s]!
        }
        foot={["Échelle moléculaire", "Vulcanisation", "Des liaisons restent en place"][s]!}
      >
        <g transform={s === 2 ? "translate(-9 22) scale(1.05 .8)" : undefined}>
          {[0, 1, 2].map((i) => (
            <Wave key={i} d={polymerPath(83 + i * 45)} color={i % 2 ? blue : green} width={5} />
          ))}
          {s > 0 &&
            [93, 168, 243].map((x, i) => (
              <path
                key={x}
                d={`M${x} ${polymerY(x, 83 + (i % 2) * 45)} C${x + 9} ${polymerY(x, 83 + (i % 2) * 45) + 15} ${x - 9} ${polymerY(x, 128 + (i % 2) * 45) - 15} ${x} ${polymerY(x, 128 + (i % 2) * 45)}`}
                stroke={warm}
                strokeWidth="4"
                fill="none"
              />
            ))}
        </g>
        {s === 2 && (
          <>
            <Arrow x1={58} y1={193} x2={28} y2={193} color={warm} />
            <Arrow x1={302} y1={193} x2={332} y2={193} color={warm} />
          </>
        )}
      </Scene>
    );
  if (kind === "thermoplastic")
    return (
      <Scene
        id={id}
        title={
          ["Chaînes non réticulées", "Elles peuvent glisser", "Un réseau thermodurcissable"][s]!
        }
        foot={["Thermoplastique", "Ramollissement à la chaleur", "Le réseau ne refond pas"][s]!}
      >
        <rect
          x="37"
          y="66"
          width="286"
          height="125"
          rx="18"
          fill={s === 1 ? "#f2e3d0" : "#e5edef"}
          stroke="#bdcbd2"
        />
        {[0, 1, 2].map((i) => (
          <Wave
            key={i}
            d={polymerPath(93 + i * 35, s === 1 ? i * 8 : 0)}
            color={i % 2 ? blue : green}
            width={4}
          />
        ))}
        {s === 2 ? (
          [90, 150, 210, 260].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${polymerY(x, 93 + (i % 2) * 35)} C${x + 9} ${polymerY(x, 93 + (i % 2) * 35) + 12} ${x - 9} ${polymerY(x, 128 + (i % 2) * 35) - 12} ${x} ${polymerY(x, 128 + (i % 2) * 35)}`}
              stroke={warm}
              strokeWidth="4"
              fill="none"
            />
          ))
        ) : s === 1 ? (
          <>
            <Arrow x1={112} y1={62} x2={249} y2={62} color={warm} />
            <Wave d="M126 185q-8-12 0-22M180 185q-8-12 0-22M234 185q-8-12 0-22" color={warm} />
          </>
        ) : null}
      </Scene>
    );
  if (kind === "lathemill")
    return (
      <Scene
        id={id}
        title={["La pièce tourne", "L’outil de tour avance", "La fraise tourne"][s]!}
        foot={["Tour", "Enlever des copeaux", "Fraiseuse"][s]!}
      >
        <path d="M28 190H332" stroke="#91a1ab" strokeWidth="9" />
        {s < 2 ? (
          <>
            <rect x="43" y="100" width="38" height="74" rx="6" fill={`url(#${id}-metal)`} />
            <path d="M82 117H268V155H82Z" fill={`url(#${id}-copper)`} stroke="#9a754e" />
            <ellipse cx="267" cy="136" rx="9" ry="19" fill="#c79869" stroke="#9a754e" />
            <Turning x={132} y={76} />
            <path
              d={`M${s === 1 ? 184 : 232} 137l20 24v22h-23v-25Z`}
              fill="#68869c"
              stroke="#4b667b"
            />
            {s === 1 && (
              <>
                <Arrow x1={244} y1={174} x2={181} y2={174} />
                <Wave d="M187 137q-20-18-25-5t-20-7" color={warm} width={2} />
              </>
            )}
          </>
        ) : (
          <>
            <rect
              x="78"
              y="140"
              width="207"
              height="37"
              fill={`url(#${id}-copper)`}
              stroke="#9a754e"
            />
            <path d="M191 142V119H239V142" fill="#f2f5f6" stroke="#9a754e" strokeWidth="2" />
            <rect
              x="187"
              y="62"
              width="25"
              height="81"
              fill={`url(#${id}-metal)`}
              stroke="#6b859a"
            />
            {[0, 1, 2].map((i) => (
              <path key={i} d={`M187 ${104 + i * 11}l25-14`} stroke="#6b859a" strokeWidth="2" />
            ))}
            <Turning x={243} y={80} />
            <Arrow x1={98} y1={119} x2={160} y2={119} />
          </>
        )}
      </Scene>
    );
  if (kind === "printlayers")
    return (
      <Scene
        id={id}
        title={["Déposer un trajet", "Ajouter des couches", "Un volume construit"][s]!}
        foot={
          ["Dépôt de filament fondu", "La buse change de hauteur", "L’empilement fait la pièce"][s]!
        }
      >
        <path d="M64 78V186H303V78" stroke="#8e9daa" strokeWidth="9" fill="none" />
        <path d="M45 192H323" stroke="#738ca0" strokeWidth="10" />
        <path d="M65 74H304" stroke="#738ca0" strokeWidth="6" />
        {Array.from({ length: [1, 5, 10][s]! }, (_, i) => (
          <g key={i}>
            <path
              d={`M115 ${178 - i * 6}H258l-18-9H97Z`}
              fill={i % 2 ? "#88b3c6" : "#a1c6d4"}
              stroke="#537f9b"
              strokeWidth="1"
            />
          </g>
        ))}
        <path d={`M204 47v${[113, 89, 59][s]}`} stroke="#617f93" strokeWidth="5" />
        <path
          d={`M189 ${[147, 123, 93][s]}h30l-10 15h-10Z`}
          fill={`url(#${id}-metal)`}
          stroke="#617f93"
        />
        <path d={`M204 ${[161, 137, 107][s]}v12`} stroke={warm} strokeWidth="3" />
      </Scene>
    );
  if (kind === "rebarbeam")
    return (
      <Scene
        id={id}
        title={
          [
            "Une poutre sur deux appuis",
            "Haut comprimé, bas tendu",
            "De l’acier dans la zone tendue",
          ][s]!
        }
        foot={
          ["Une travée simplement appuyée", "Courbure amplifiée", "L’acier reprend la traction"][s]!
        }
      >
        <path
          d="M47 135Q180 158 313 135L313 171Q180 194 47 171Z"
          fill="#d4d6d1"
          stroke="#8c9a9a"
          strokeWidth="2"
        />
        <path d="M51 174l-14 19h28ZM307 174l-14 19h28Z" fill="#7c91a0" />
        <Arrow x1={180} y1={57} x2={180} y2={129} color={warm} />
        {s === 1 ? (
          <>
            <Arrow x1={96} y1={147} x2={145} y2={150} color={warm} />
            <Arrow x1={264} y1={147} x2={215} y2={150} color={warm} />
            <Arrow x1={140} y1={174} x2={91} y2={170} />
            <Arrow x1={220} y1={174} x2={269} y2={170} />
            <Label x={180} y={66}>
              Charge
            </Label>
          </>
        ) : s === 2 ? (
          <>
            <path d="M58 160Q180 185 302 160" fill="none" stroke={blue} strokeWidth="6" />
            {[84, 121, 158, 195, 232, 269].map((x) => (
              <path
                key={x}
                d={`M${x} ${168 + (1 - Math.abs(x - 180) / 140) * 6}l4-9`}
                stroke="#a9c0cd"
                strokeWidth="2"
              />
            ))}
            <path d="M164 179l5-12-4-9" stroke="#7c8d93" strokeWidth="1.5" />
            <Label x={283} y={99}>
              Acier
            </Label>
            <path d="M281 104L272 161" stroke="#7c8d93" fill="none" />
          </>
        ) : null}
      </Scene>
    );
  if (kind === "fatiguecrack")
    return (
      <Scene
        id={id}
        title={["Des charges répétées", "Amorcer une fissure", "La fissure progresse"][s]!}
        foot={
          [
            "Cycles, pas une seule surcharge",
            "Un défaut fortement agrandi",
            "Moins de section résistante",
          ][s]!
        }
      >
        <path d="M54 90H306V170H54Z" fill={`url(#${id}-metal)`} stroke="#6f899b" strokeWidth="2" />
        <circle cx="122" cy="130" r="23" fill="#eef3f7" stroke="#6f899b" strokeWidth="2" />
        {s > 0 && (
          <path
            d={s === 1 ? "M144 130l12-5 9 5" : "M144 130l12-5 12 7 14-8 13 4 16-8 17 2 13-9"}
            stroke="#4a5961"
            strokeWidth="2.5"
            fill="none"
          />
        )}
        <Arrow x1={49} y1={130} x2={24} y2={130} />
        <Arrow x1={311} y1={130} x2={336} y2={130} />
        <Wave d="M91 60q12-12 24 0t24 0t24 0t24 0t24 0t24 0" color={warm} />
        {s === 2 && <circle cx="241" cy="113" r="6" fill="none" stroke={warm} strokeWidth="2" />}
      </Scene>
    );
  return null;
}
