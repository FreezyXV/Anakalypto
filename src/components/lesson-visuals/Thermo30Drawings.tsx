import {
  Frame,
  Arrow,
  Label,
  Atom,
  Panel,
  blue,
  red,
  gold,
  type DrawingProps,
} from "./Science30Parts";
function Methane({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x - 25} ${y}h50M${x} ${y - 26}v52`} stroke="#8395a2" strokeWidth="3" />
      <Atom x={x} y={y} element="C" r={14} />
      {[
        [-26, 0],
        [26, 0],
        [0, -26],
        [0, 26],
      ].map(([dx, dy], i) => (
        <Atom key={i} x={x + dx!} y={y + dy!} element="H" r={10} />
      ))}
    </g>
  );
}
export function Thermo30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "methaneflame")
    return (
      <Frame
        id={id}
        title={
          ["Méthane et dioxygène", "Franchir une barrière", "Les mêmes atomes, réorganisés"][s]!
        }
        foot="CH₄ + 2 O₂ → CO₂ + 2 H₂O"
      >
        {s < 2 ? (
          <>
            <Methane x={91} y={129} />
            {[207, 281].map((x) => (
              <g key={x}>
                <path d={`M${x - 13} 130h26`} stroke={red} strokeWidth="4" />
                <Atom x={x - 13} y={130} element="O" />
                <Atom x={x + 13} y={130} element="O" />
              </g>
            ))}
            <Label x={91} y={192}>
              CH₄
            </Label>
            <Label x={244} y={192}>
              2 O₂
            </Label>
            {s === 1 ? (
              <>
                <path
                  d="M163 88q-17-17 2-41q-2 19 10 15q14 20-12 26Z"
                  fill="#e0ac52"
                  stroke={gold}
                />
                <Label x={269} y={64}>
                  Amorçage
                </Label>
                <path d="M235 70L179 75" stroke={gold} />
              </>
            ) : (
              <Label x={180} y={62}>
                1 C · 4 H · 4 O
              </Label>
            )}
          </>
        ) : (
          <>
            <path d="M48 127H116" stroke="#8395a2" strokeWidth="4" />
            <Atom x={48} y={127} element="O" />
            <Atom x={82} y={127} element="C" r={14} />
            <Atom x={116} y={127} element="O" />
            {[205, 292].map((x) => (
              <g key={x}>
                <path d={`M${x} 115l-20 25m20-25 20 25`} stroke="#8395a2" strokeWidth="3" />
                <Atom x={x} y={115} element="O" />
                <Atom x={x - 20} y={140} element="H" r={10} />
                <Atom x={x + 20} y={140} element="H" r={10} />
              </g>
            ))}
            <Label x={82} y={188}>
              CO₂
            </Label>
            <Label x={248} y={188}>
              2 H₂O
            </Label>
            <Label x={180} y={61}>
              Énergie libérée
            </Label>
            <path d="M151 77l-8 15m40-15v15m35-15 8 15" stroke={gold} strokeWidth="2" />
          </>
        )}
      </Frame>
    );
  if (kind === "dynamicbalance") {
    const nB = s === 0 ? 2 : s === 1 ? 5 : 7;
    return (
      <Frame
        id={id}
        title={
          ["Majorité de A au départ", "Les deux transformations", "Un équilibre dynamique"][s]!
        }
        foot={
          s === 2 ? "Vitesses égales ≠ quantités égales" : "Modèle de réaction réversible A ⇌ B"
        }
      >
        <Panel y={77} h={118} />
        {Array.from({ length: 18 }, (_, i) => (
          <g key={i}>
            <circle
              cx={58 + (i % 6) * 49}
              cy={104 + Math.floor(i / 6) * 33}
              r="9"
              fill={i < nB ? "#b2a0c8" : "#e4be7b"}
              stroke={i < nB ? "#826b9d" : gold}
            />
          </g>
        ))}
        <Arrow x1={105} y1={53} x2={s === 2 ? 161 : 197} y2={53} color={gold} />
        <Arrow x1={256} y1={53} x2={s === 2 ? 200 : 236} y2={53} color="#826b9d" />
        <Label x={50} y={57}>
          A
        </Label>
        <Label x={312} y={57}>
          B
        </Label>
        {s === 2 && (
          <>
            <Label x={82} y={204}>
              11 A
            </Label>
            <Label x={280} y={204}>
              7 B
            </Label>
          </>
        )}
      </Frame>
    );
  }
  if (kind === "maillardfood")
    return (
      <Frame
        id={id}
        title={["De l’eau à la surface", "La croûte brunit", "Arômes et pigments"][s]!}
        foot={
          s === 2 ? "Groupes aminés + sucres réducteurs" : "Coupe de pain : conditions qualitatives"
        }
      >
        <path
          d="M54 110Q51 59 128 62Q210 48 263 83Q296 97 307 125L287 190H66Z"
          fill={s === 0 ? "#e9d2a0" : "#b78045"}
          stroke="#a17a50"
          strokeWidth="3"
        />
        <path
          d="M69 119Q76 80 130 79Q197 65 253 98L288 129 273 180H78Z"
          fill="#f2dfb8"
          stroke="#c4a776"
        />
        {Array.from({ length: 14 }, (_, i) => (
          <ellipse
            key={i}
            cx={98 + (i % 5) * 36}
            cy={118 + Math.floor(i / 5) * 23}
            rx={4 + (i % 3)}
            ry={3 + (i % 2)}
            fill="#d4b98b"
          />
        ))}
        <path
          d="M90 94l11-9m28 5 10-10m28 8 9-9m27 13 10-8"
          stroke={s === 0 ? "#dac391" : "#845a32"}
          strokeWidth="3"
        />
        {s === 0 ? (
          <>
            <path
              d="M95 70q-8-14 0-24m29 20q-8-14 0-24"
              stroke={blue}
              fill="none"
              strokeDasharray="3 3"
            />
            <Label x={260} y={58}>
              Vapeur d’eau
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={31} y1={172} x2={58} y2={156} color={red} />
            <Arrow x1={329} y1={172} x2={300} y2={156} color={red} />
            <Label x={180} y={53}>
              Surface plus chaude
            </Label>
          </>
        ) : (
          <>
            <path d="M109 68q-11-12 0-25m34 22q-11-12 0-25" stroke={gold} fill="none" />
            <Label x={257} y={56}>
              Arômes
            </Label>
            <Label x={180} y={205}>
              Un réseau de réactions
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "thermalcontact") {
    const temps = [
      [60, 20],
      [50, 30],
      [40, 40],
    ][s]!;
    return (
      <Frame
        id={id}
        title={["Deux blocs identiques", "Échanger de l’énergie", "Même température finale"][s]!}
        foot={s === 2 ? "Équilibre, pas immobilité" : "Capacités thermiques égales"}
      >
        {[0, 1].map((i) => (
          <g key={i}>
            <rect
              x={43 + i * 167}
              y="87"
              width="106"
              height="96"
              rx="9"
              fill={
                i === 0
                  ? ["#db9f87", "#d5ab97", "#c8b7ad"][s]
                  : ["#a5c7d8", "#afc2cc", "#c8b7ad"][s]
              }
              stroke="#8498a5"
            />
            {Array.from({ length: 9 }, (_, n) => (
              <g key={n}>
                <circle
                  cx={64 + i * 167 + (n % 3) * 31}
                  cy={111 + Math.floor(n / 3) * 24}
                  r="3"
                  fill="#647b8c"
                />
                <path
                  d={`M${65 + i * 167 + (n % 3) * 31} ${110 + Math.floor(n / 3) * 24}l${4 * Math.sqrt((temps[i]! + 273.15) / 293.15)} -5`}
                  stroke="#647b8c"
                />
              </g>
            ))}
            <Label x={96 + i * 167} y={65}>
              {temps[i]} °C
            </Label>
          </g>
        ))}
        {s === 1 && <Arrow x1={153} y1={132} x2={207} y2={132} color={gold} />}
        <Label x={180} y={204}>
          {s === 1 ? "Du chaud vers le froid" : "Système idéal isolé"}
        </Label>
      </Frame>
    );
  }
  if (kind === "fridgecycle")
    return (
      <Frame
        id={id}
        title={
          [
            "Prendre de la chaleur dedans",
            "Le compresseur reçoit du travail",
            "La pièce reçoit la chaleur",
          ][s]!
        }
        foot={s === 2 ? "Q sortie = Q entrée + W" : "Un cycle fermé, quatre fonctions"}
      >
        <rect
          x="30"
          y="54"
          width="113"
          height="145"
          rx="9"
          fill="#e0edf2"
          stroke="#91a8b8"
          strokeWidth="2"
        />
        <path d="M41 119h58M41 159h58" stroke="#adbac2" />
        <rect x="49" y="134" width="15" height="23" rx="3" fill="#d7c7a7" />
        <path d="M50 134v-5h13v5" stroke="#9d9c82" fill="none" />
        <path
          d="M125 82V99h-14v12h14v13h-14v13h14v17h-14v18H173"
          fill="none"
          stroke={blue}
          strokeWidth="5"
          opacity={s === 0 ? 1 : 0.45}
        />
        <path
          d="M199 172H271V157h-14v-13h14v-13h-14v-13h14V82H202"
          fill="none"
          stroke={red}
          strokeWidth="5"
          opacity={s === 2 ? 1 : 0.45}
        />
        <path d="M179 82H125" stroke="#73aeb4" strokeWidth="4" />
        <circle cx="187" cy="172" r="16" fill="#e0c487" stroke={gold} strokeWidth="2" />
        <path d="M182 164l13 8-13 8Z" fill={gold} />
        <path d="M178 75l12 14 12-14v14l-12-14-12 14Z" fill="#a1c7c5" stroke="#508b90" />
        <Arrow x1={152} y1={172} x2={169} y2={172} color={blue} width={2} />
        <Arrow x1={271} y1={105} x2={271} y2={87} color={red} width={2} />
        <Arrow x1={161} y1={82} x2={136} y2={82} color={blue} width={2} />
        {s === 0 ? (
          <>
            <Arrow x1={59} y1={100} x2={102} y2={100} color={gold} />
            <Label x={84} y={72}>
              Intérieur
            </Label>
            <Label x={226} y={54}>
              Évaporer
            </Label>
            <path d="M206 60L129 111" stroke={blue} />
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={187} y1={131} x2={187} y2={152} color={gold} />
            <Label x={199} y={117}>
              Travail
            </Label>
            <Label x={235} y={202}>
              Compresseur
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={284} y1={122} x2={327} y2={122} color={gold} />
            <Label x={128} y={57}>
              Détendeur
            </Label>
            <path d="M156 63L181 75" stroke="#508b90" />
            <Label x={272} y={57}>
              Condenseur
            </Label>
            <Label x={180} y={203}>
              Rejet vers la pièce
            </Label>
          </>
        )}
      </Frame>
    );
  return null;
}
