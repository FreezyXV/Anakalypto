import {
  Scene,
  Arrow,
  Label,
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
export function Agriculture50Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "graftunion")
    return (
      <Scene
        id={id}
        title={
          ["Greffon et porte-greffe", "Mettre les cambiums en contact", "Continuité des tissus"][s]!
        }
        foot={
          [
            "Deux partenaires compatibles",
            "Coupe longitudinale simplifiée",
            "Une seule plante greffée",
          ][s]!
        }
      >
        <path
          d="M172 192V126L185 111L198 126V192"
          fill={`url(#${id}-timber)`}
          stroke="#92704f"
          strokeWidth="2"
        />
        <path d="M176 187V131L185 121L194 131V187" fill="none" stroke={green} strokeWidth="3" />
        <path
          d={`M177 ${s ? 126 : 104}V${s ? 57 : 38}H193V${s ? 126 : 104}L185 ${s ? 111 : 89}Z`}
          fill={`url(#${id}-timber)`}
          stroke="#92704f"
          strokeWidth="2"
        />
        <path
          d={`M180 ${s ? 118 : 96}V${s ? 60 : 41}M190 ${s ? 118 : 96}V${s ? 60 : 41}`}
          stroke={green}
          strokeWidth="3"
        />
        {s === 0 ? (
          <>
            <Label x={80} y={74}>
              Greffon
            </Label>
            <Label x={76} y={159}>
              Racines
            </Label>
            <Arrow x1={185} y1={106} x2={185} y2={119} />
          </>
        ) : s === 1 ? (
          <>
            <circle cx="185" cy="124" r="24" fill="none" stroke={warm} strokeWidth="3" />
            <Label x={85} y={88}>
              Cambium
            </Label>
            <path d="M122 91L165 115" stroke="#99a8aa" strokeWidth="2" />
          </>
        ) : (
          <>
            <path d="M175 121H196M175 130H196M175 139H196" stroke="#d0b28b" strokeWidth="5" />
            <Arrow x1={153} y1={171} x2={153} y2={84} />
            <Arrow x1={218} y1={84} x2={218} y2={171} color={green} />
            <path d="M188 63q35-17 34 3q-20 17-34-3Z" fill="#81a96e" />
          </>
        )}
        <path d="M184 191l-33 10m34-10 21 11" stroke="#987550" strokeWidth="3" />
      </Scene>
    );
  if (kind === "croprotation")
    return (
      <Scene
        id={id}
        title={["Saison 1 : légumineuse", "Saison 2 : céréale", "Saison 3 : autre famille"][s]!}
        foot="La même parcelle au fil du temps"
      >
        <Ground id={id} y={146} />
        {[85, 180, 275].map((x) => (
          <Sprout key={x} x={x} y={146} kind={s === 1 ? "wheat" : s === 2 ? "root" : "leaf"} />
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={111 + i * 69} cy="66" r="11" fill={i === s ? blue : "#d3dfe7"} />
            <Label x={111 + i * 69} y={72} color={i === s ? "#fff" : ink}>
              {i + 1}
            </Label>
          </g>
        ))}
      </Scene>
    );
  if (kind === "rootnodules")
    return (
      <Scene
        id={id}
        title={
          ["Des bactéries dans les nodules", "De l’azote utilisable", "Du carbone en échange"][s]!
        }
        foot={["Une symbiose", "Les bactéries fixent le N₂", "La plante fournit des sucres"][s]!}
      >
        <Ground id={id} y={100} />
        <Sprout x={129} y={101} />
        <path
          d="M129 103q-35 35-20 83M129 110q45 34 23 79"
          stroke="#997149"
          strokeWidth="5"
          fill="none"
        />
        {[112, 121, 148, 159].map((x, i) => (
          <circle key={x} cx={x} cy={137 + i * 11} r="9" fill="#cf9b82" stroke="#a16c54" />
        ))}
        <circle cx="267" cy="142" r="43" fill="#f2dfcf" stroke="#c09a7a" strokeWidth="2" />
        <path d="M166 151L224 142" stroke="#9aa6a7" strokeDasharray="4 4" />
        {[247, 268, 287].map((x, i) => (
          <rect
            key={x}
            x={x - 5}
            y={127 + (i % 2) * 20}
            width="10"
            height="20"
            rx="5"
            fill={warm}
            transform={`rotate(${i * 25} ${x} 140)`}
          />
        ))}
        {s === 1 ? (
          <>
            <Label x={268} y={69}>
              N₂
            </Label>
            <Arrow x1={268} y1={78} x2={268} y2={96} />
            <Arrow x1={224} y1={178} x2={177} y2={178} color={green} />
          </>
        ) : s === 2 ? (
          <>
            <Label x={264} y={69}>
              Sucres
            </Label>
            <Arrow x1={187} y1={79} x2={242} y2={102} color={green} />
          </>
        ) : (
          <Label x={267} y={77}>
            Nodule agrandi
          </Label>
        )}
      </Scene>
    );
  if (kind === "biocontrol")
    return (
      <Scene
        id={id}
        title={
          ["Des pucerons sur une plante", "Un prédateur arrive", "Un habitat pour les auxiliaires"][
            s
          ]!
        }
        foot={
          [
            "Une population de ravageurs",
            "La coccinelle mange des pucerons",
            "Réguler sans tout éliminer",
          ][s]!
        }
      >
        <Ground id={id} y={180} />
        <path
          d="M174 178V94M175 128Q122 88 90 105Q125 157 174 128M175 107Q211 75 259 85Q227 129 175 107"
          stroke={green}
          strokeWidth="3"
          fill="#a0bd7b"
        />
        {Array.from({ length: s === 0 ? 8 : 3 }, (_, i) => (
          <g key={i} transform={`translate(${110 + ((i * 19) % 51)} ${111 + ((i * 9) % 16)})`}>
            <ellipse rx="5" ry="3" fill="#758c40" />
            <path d="M-3-3l-2-4M3-3l2-4" stroke="#547031" />
          </g>
        ))}
        {s > 0 && (
          <g transform="translate(226 99) rotate(30)">
            <ellipse rx="17" ry="13" fill="#c96d53" stroke="#714637" strokeWidth="2" />
            <path d="M0-13V13" stroke="#493d35" />
            {[-1, 1].map((v) => (
              <g key={v}>
                <circle cx={v * 8} cy="-5" r="2.5" fill={ink} />
                <circle cx={v * 7} cy="5" r="2.5" fill={ink} />
              </g>
            ))}
            <circle cx="-20" cy="0" r="5" fill={ink} />
          </g>
        )}
        {s === 2 && (
          <>
            {[51, 295].map((x) => (
              <g key={x}>
                <path d={`M${x} 180V145`} stroke={green} strokeWidth="3" />
                {[0, 72, 144, 216, 288].map((a) => (
                  <circle
                    key={a}
                    cx={x + 8 * Math.cos((a * Math.PI) / 180)}
                    cy={137 + 8 * Math.sin((a * Math.PI) / 180)}
                    r="6"
                    fill="#dca893"
                  />
                ))}
                <circle cx={x} cy="137" r="5" fill="#deb85b" />
              </g>
            ))}
          </>
        )}
      </Scene>
    );
  if (kind === "dripwater")
    return (
      <Scene
        id={id}
        title={
          [
            "Distribuer le long de la rangée",
            "Libérer des gouttes",
            "Humidifier la zone racinaire",
          ][s]!
        }
        foot={["Un tuyau et des goutteurs", "Apport localisé", "Le sol répartit l’eau"][s]!}
      >
        <Ground id={id} y={128} />
        {[85, 180, 275].map((x) => (
          <Sprout key={x} x={x} y={129} />
        ))}
        <path d="M25 128H335" stroke="#4b697a" strokeWidth="7" />
        {[75, 170, 265].map((x) => (
          <g key={x}>
            <rect x={x - 5} y="124" width="10" height="15" rx="2" fill={blue} />
            {s > 0 && <Drop x={x} y={147} />}
            {s === 2 && <ellipse cx={x} cy="166" rx="35" ry="30" fill={blue} opacity=".18" />}
          </g>
        ))}
        {s === 0 && <Arrow x1={40} y1={158} x2={130} y2={158} />}
      </Scene>
    );
  if (kind === "mulchsoil")
    return (
      <Scene
        id={id}
        title={["Une surface exposée", "Une couche protectrice", "Moins d’évaporation"][s]!}
        foot={
          ["Soleil, vent et pluie", "Paille autour des cultures", "Une partie de l’eau conservée"][
            s
          ]!
        }
      >
        <Ground id={id} y={143} />
        <Sprout x={181} y={145} />
        {s > 0 && (
          <>
            {Array.from({ length: 30 }, (_, i) => (
              <path
                key={i}
                d={`M${28 + ((i * 41) % 285)} ${134 + ((i * 7) % 14)}l18 ${i % 2 ? 5 : -5}`}
                stroke="#d4b565"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
          </>
        )}
        {[60, 120, 240, 300].map((x, i) =>
          s === 0 ? (
            <Arrow key={x} x1={x} y1={124} x2={x} y2={75} color={warm} />
          ) : s === 1 ? (
            <Drop key={x} x={x} y={91} />
          ) : (
            <ellipse
              key={x}
              cx={x}
              cy={173 + (i % 2) * 7}
              rx="20"
              ry="8"
              fill={blue}
              opacity=".2"
            />
          ),
        )}
        {s === 2 && <Arrow x1={98} y1={122} x2={98} y2={104} color={warm} width={2} />}
      </Scene>
    );
  if (kind === "seedvault")
    return (
      <Scene
        id={id}
        title={
          ["Conserver une collection", "Déposer un duplicata", "Récupérer ses propres graines"][s]!
        }
        foot={
          ["Banque de semences", "Une sauvegarde au Svalbard", "Reconstituer une collection"][s]!
        }
      >
        <rect x="35" y="83" width="74" height="104" rx="5" fill={`url(#${id}-metal)`} />
        {[94, 124, 154].map((y) => (
          <g key={y}>
            <path d={`M43 ${y + 23}H101`} stroke="#738997" strokeWidth="3" />
            {[55, 82].map((x) => (
              <rect key={x} x={x} y={y} width="13" height="20" rx="2" fill="#e8d9b6" />
            ))}
          </g>
        ))}
        <path d="M209 184L253 57L334 184Z" fill="#d7e3e8" stroke="#acbfc7" />
        <path d="M216 184l53-95 52 95Z" fill="#f1f7f9" />
        <rect x="261" y="134" width="36" height="50" rx="2" fill="#8b9da9" />
        {s > 0 && (
          <>
            <Arrow
              x1={s === 2 ? 245 : 125}
              y1={113}
              x2={s === 2 ? 125 : 245}
              y2={113}
              color={s === 2 ? green : blue}
            />
            <rect x="170" y="98" width="29" height="35" rx="3" fill="#e8d9b6" stroke="#b6a17a" />
            <Label x={183} y={82}>
              {s === 2 ? "Retour" : "Copie"}
            </Label>
          </>
        )}
        {s === 1 && (
          <Label x={278} y={203}>
            −18 °C
          </Label>
        )}
        {s === 2 && <Sprout x={180} y={174} />}
      </Scene>
    );
  if (kind === "insulinmicrobe")
    return (
      <Scene
        id={id}
        title={
          ["Une information génétique", "Des microbes en culture", "Récupérer et purifier"][s]!
        }
        foot={["ADN vecteur", "Production contrôlée", "Une protéine, pas une bactérie"][s]!}
      >
        {s === 0 ? (
          <>
            <ellipse cx="110" cy="127" rx="49" ry="36" fill="none" stroke={blue} strokeWidth="6" />
            <path d="M81 98Q109 84 139 99" stroke={warm} strokeWidth="8" fill="none" />
            <Label x={110} y={70}>
              ADN
            </Label>
            <Arrow x1={173} y1={126} x2={219} y2={126} />
            <rect x="239" y="85" width="65" height="90" rx="32" fill="#bfd8c1" stroke={green} />
            <ellipse cx="270" cy="130" rx="15" ry="22" fill="none" stroke={blue} strokeWidth="3" />
          </>
        ) : s === 1 ? (
          <>
            <Vessel id={id} x={95} y={68} w={170} h={119} water={green} />
            <path d="M180 46V169M159 169H201M159 128H201" stroke="#728894" strokeWidth="5" />
            {[123, 154, 208, 235].map((x, i) => (
              <rect
                key={x}
                x={x}
                y={113 + (i % 2) * 36}
                width="9"
                height="19"
                rx="4"
                fill={green}
                transform={`rotate(${i * 30} ${x} 140)`}
              />
            ))}
            <path d="M90 191H270" stroke="#91a3ac" strokeWidth="5" />
          </>
        ) : (
          <>
            <Label x={90} y={66}>
              Purifier
            </Label>
            <rect
              x="62"
              y="85"
              width="39"
              height="78"
              rx="5"
              fill="#d7e5ec"
              stroke="#7295ac"
              strokeWidth="2"
            />
            {Array.from({ length: 12 }, (_, i) => (
              <circle
                key={i}
                cx={70 + (i % 3) * 11}
                cy={98 + Math.floor(i / 3) * 15}
                r="3"
                fill="#9bb5bc"
              />
            ))}
            <path d="M72 164H195V142" stroke={blue} strokeWidth="5" fill="none" />
            <rect x="175" y="125" width="56" height="68" rx="8" fill="#e5eff3" stroke="#7295ac" />
            <rect x="186" y="113" width="34" height="13" fill="#728e9f" />
            <path d="M242 157H300" stroke="#7295ac" strokeDasharray="3 4" />
            <Wave d="M276 102q14-20 25 0t25 0" color={warm} width={4} />
            <Label x={292} y={82}>
              Insuline
            </Label>
          </>
        )}
      </Scene>
    );
  if (kind === "washenzyme")
    return (
      <Scene
        id={id}
        title={["Reconnaître un substrat", "Faciliter sa coupure", "Libérer les fragments"][s]!}
        foot={["Une enzyme spécifique", "Une réaction catalysée", "L’enzyme peut recommencer"][s]!}
      >
        <path
          d="M92 112Q58 136 83 173Q129 201 168 167Q183 137 157 111L135 132L113 111Z"
          fill="#a8c6b1"
          stroke={green}
          strokeWidth="3"
        />
        {s < 2 ? (
          <path
            d={`M${s ? 113 : 206} ${s ? 111 : 87}l22 21 22-21v-20h-44Z`}
            fill="#e1b27d"
            stroke={warm}
            strokeWidth="2"
          />
        ) : (
          <>
            <path d="M205 90l22 21V70h-22Z" fill="#e1b27d" stroke={warm} strokeWidth="2" />
            <path d="M250 105l22-21V64h-22Z" fill="#e1b27d" stroke={warm} strokeWidth="2" />
            <Arrow x1={178} y1={124} x2={227} y2={124} />
          </>
        )}
        {s === 1 && <path d="M135 94V126" stroke="#f8fafc" strokeWidth="4" strokeDasharray="3 3" />}
        <Label x={121} y={64}>
          Enzyme
        </Label>
        {s === 0 && <Arrow x1={204} y1={133} x2={159} y2={133} />}
      </Scene>
    );
  if (kind === "quorumlight")
    return (
      <Scene
        id={id}
        title={["Peu de signal dans le milieu", "Le signal s’accumule", "Un gène est activé"][s]!}
        foot={["Molécules signal", "La concentration compte", "Bioluminescence coordonnée"][s]!}
      >
        <rect
          x="37"
          y="65"
          width="286"
          height="128"
          rx="30"
          fill={s === 2 ? "#223e52" : "#e5eff1"}
          stroke="#9bb1bd"
        />
        {Array.from({ length: s === 0 ? 3 : 10 }, (_, i) => {
          const x = 67 + ((i * 47) % 226),
            y = 90 + ((i * 31) % 75);
          return (
            <g key={i}>
              {s === 2 && <ellipse cx={x} cy={y} rx="21" ry="17" fill="#74d7ba" opacity=".2" />}
              <rect
                x={x - 9}
                y={y - 5}
                width="21"
                height="10"
                rx="5"
                transform={`rotate(${i * 27} ${x} ${y})`}
                fill={s === 2 ? "#a0ecce" : "#79a28f"}
              />
            </g>
          );
        })}
        {Array.from({ length: s === 0 ? 5 : 35 }, (_, i) => (
          <circle
            key={i}
            cx={51 + ((i * 43) % 252)}
            cy={77 + ((i * 23) % 101)}
            r="2"
            fill={s === 2 ? "#e1d786" : warm}
            opacity=".75"
          />
        ))}
      </Scene>
    );
  return null;
}
