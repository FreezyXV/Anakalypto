import { Frame, Arrow, Label, blue, red, gold, green, type DrawingProps } from "./Science30Parts";
function Wave({
  x = 30,
  y = 120,
  w = 115,
  color = red,
}: {
  x?: number;
  y?: number;
  w?: number;
  color?: string;
}) {
  return (
    <path
      d={Array.from(
        { length: 61 },
        (_, i) => `${i ? "L" : "M"}${x + (i * w) / 60} ${y + 6 * Math.sin((i / 60) * Math.PI * 8)}`,
      ).join(" ")}
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  );
}
export function EarthPhysics30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "moonweight")
    return (
      <Frame
        id={id}
        title={
          [
            "Un dynamomètre sur Terre",
            "Le même objet sur la Lune",
            "Une balance compare les masses",
          ][s]!
        }
        foot={s < 2 ? "La masse reste 1 kg" : "Deux bras égaux, un même champ local"}
      >
        {s < 2 ? (
          <>
            <path d="M98 57H220M159 57v13" stroke="#8a9aa5" strokeWidth="4" />
            <rect x="141" y="70" width="38" height="43" rx="6" fill="#d6e2e9" stroke="#8a9aa5" />
            <path
              data-spring-extension={s === 0 ? 54 : 9}
              d={`M160 80l-8 5 16 5-16 5 16 5-8 5v${s === 0 ? 54 : 9}`}
              fill="none"
              stroke={blue}
              strokeWidth="2.5"
            />
            <rect
              x="141"
              y={s === 0 ? 159 : 114}
              width="38"
              height="26"
              rx="3"
              fill="#d7ba7e"
              stroke={gold}
            />
            <Label x={263} y={107}>
              {s === 0 ? "9,8 N" : "1,6 N"}
            </Label>
            <Label x={263} y={158}>
              1 kg
            </Label>
            <Arrow x1={206} y1={113} x2={206} y2={s === 0 ? 176 : 123} color={red} />
            <path d="M43 199Q180 180 317 199V205H43Z" fill={s === 0 ? "#abb99e" : "#c8c7c2"} />
            <Label x={77} y={78}>
              {s === 0 ? "Terre" : "Lune"}
            </Label>
          </>
        ) : (
          <>
            <path d="M180 81V185M140 192h80M87 100H273" stroke="#7d8f9c" strokeWidth="5" />
            <path d="M180 82l-9 16h18Z" fill={gold} />
            {[102, 258].map((x) => (
              <g key={x}>
                <path d={`M${x - 29} 152l29-50 29 50Z`} stroke="#8797a2" fill="none" />
                <path d={`M${x - 31} 152q31 29 62 0Z`} fill="#b8cdd7" stroke="#8797a2" />
                <rect x={x - 17} y="129" width="34" height="23" fill="#d6ba7f" stroke={gold} />
                <Label x={x} y={73}>
                  1 kg
                </Label>
              </g>
            ))}
          </>
        )}
      </Frame>
    );
  if (kind === "laserbeam")
    return (
      <Frame
        id={id}
        title={
          ["Exciter le milieu", "Un photon stimule une émission", "Des allers-retours amplifiés"][
            s
          ]!
        }
        foot={s === 2 ? "Une sortie partiellement transmissive" : "Niveaux et ondes symboliques"}
      >
        {s < 2 ? (
          <>
            <path d="M117 82H241M117 174H241" stroke="#8fa1af" strokeWidth="2" />
            <circle cx="180" cy={s === 0 ? 82 : 174} r="10" fill="#ae98bd" stroke="#826b9d" />
            {s === 0 ? (
              <>
                <Arrow x1={180} y1={159} x2={180} y2={96} color={gold} />
                <Label x={79} y={132}>
                  Pompage
                </Label>
              </>
            ) : (
              <>
                <Arrow x1={180} y1={97} x2={180} y2={159} color={gold} />
                <Wave x={29} y={107} w={108} />
                <Wave x={220} y={106} w={108} />
                <Wave x={220} y={128} w={108} />
                <Label x={80} y={77}>
                  1 photon
                </Label>
                <Label x={282} y={76}>
                  2 photons
                </Label>
              </>
            )}
            <Label x={81} y={202}>
              Bas
            </Label>
            <Label x={250} y={202}>
              Niveaux d’énergie
            </Label>
          </>
        ) : (
          <>
            <rect x="86" y="86" width="144" height="76" rx="7" fill="#e3d3df" stroke="#a392aa" />
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <circle key={n} cx={103 + n * 22} cy={n % 2 ? 104 : 146} r="4" fill="#a18ab2" />
            ))}
            <path d="M63 74V177" stroke="#6b879c" strokeWidth="8" />
            <path d="M253 74V177" stroke="#6b879c" strokeWidth="6" strokeDasharray="7 4" />
            <Wave x={69} y={119} w={180} />
            <Wave x={256} y={119} w={77} />
            <Arrow x1={102} y1={96} x2={214} y2={96} color={red} width={2} />
            <Arrow x1={214} y1={151} x2={102} y2={151} color={red} width={2} />
            <Label x={180} y={61}>
              Milieu amplificateur
            </Label>
            <Label x={297} y={188}>
              Faisceau
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "hotspring")
    return (
      <Frame
        id={id}
        title={
          [
            "La pluie rejoint les fissures",
            "Les roches réchauffent l’eau",
            "Une autre voie vers la surface",
          ][s]!
        }
        foot="Sans magma obligatoire"
      >
        <path d="M20 91L79 66 149 97 228 84 340 95V204H20Z" fill="#d3c0a2" stroke="#a5937d" />
        <path
          d="M20 126Q140 140 340 126M20 165Q190 153 340 172"
          stroke="#b49b7d"
          fill="none"
          strokeWidth="3"
        />
        <path
          d="M86 81l37 36-13 30 46 32 55-11 26-44 42-31"
          stroke="#998b7b"
          strokeWidth="12"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M86 81l37 36-13 30"
          fill="none"
          stroke={blue}
          strokeWidth="5"
          opacity={s === 0 ? 1 : 0.4}
        />
        <path
          d="M110 147l46 32 55-11"
          fill="none"
          stroke={red}
          strokeWidth="5"
          opacity={s === 1 ? 1 : 0.4}
        />
        <path
          d="M211 168l26-44 42-31"
          fill="none"
          stroke={red}
          strokeWidth="5"
          opacity={s === 2 ? 1 : 0.35}
        />
        {s === 0 ? (
          <>
            {[65, 85, 105].map((x) => (
              <path key={x} d={`M${x} 40l-5 13`} stroke={blue} strokeWidth="2" />
            ))}
            <Arrow x1={109} y1={102} x2={120} y2={115} color={blue} />
            <Label x={236} y={58}>
              Eau de pluie
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={157} y1={197} x2={157} y2={184} color={gold} />
            <Arrow x1={188} y1={198} x2={188} y2={181} color={gold} />
            <Label x={180} y={62}>
              Roches plus chaudes
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={230} y1={140} x2={238} y2={123} color={red} />
            <ellipse cx="288" cy="95" rx="27" ry="5" fill="#b6d3dc" stroke={blue} />
            <path d="M277 78q-6-13 0-22m18 22q-6-13 0-22" stroke="#8ca6b3" fill="none" />
            <Label x={170} y={58}>
              Source chaude
            </Label>
            <path d="M221 64L272 92" stroke="#8ca6b3" />
          </>
        )}
      </Frame>
    );
  if (kind === "oceancirculation")
    return (
      <Frame
        id={id}
        title={
          [
            "Transporter en surface",
            "Perdre de la chaleur et plonger",
            "Relier surface et profondeur",
          ][s]!
        }
        foot="Coupe de principe, pas une carte du trajet"
      >
        <path d="M30 90Q180 82 330 90V191H30Z" fill="#c7dfe8" stroke="#8aafc1" />
        <path d="M30 172L68 188 127 180 192 192 259 178 330 184V201H30Z" fill="#b3b8ac" />
        <path
          d="M65 107H275Q296 107 296 132V164H102Q71 164 65 143V107"
          stroke="#8ab4c7"
          strokeWidth="10"
          fill="none"
          strokeLinejoin="round"
          opacity=".45"
        />
        <Arrow x1={78} y1={106} x2={266} y2={106} color={red} />
        {s === 0 ? (
          <>
            <Arrow x1={88} y1={63} x2={239} y2={63} color={blue} />
            <Label x={174} y={53}>
              Vent
            </Label>
            <Label x={180} y={145}>
              Eau de surface
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={291} y1={119} x2={291} y2={158} color={blue} />
            <Arrow x1={266} y1={71} x2={266} y2={43} color={gold} />
            <Label x={155} y={59}>
              Refroidissement
            </Label>
            {s === 1 ? (
              <Label x={174} y={151}>
                Plus dense : plongée possible
              </Label>
            ) : (
              <>
                <Arrow x1={268} y1={164} x2={102} y2={164} color={blue} />
                <Arrow x1={65} y1={149} x2={65} y2={117} color={blue} />
                <Label x={179} y={143}>
                  Retour profond et mélange
                </Label>
              </>
            )}
          </>
        )}
      </Frame>
    );
  if (kind === "gravitydam")
    return (
      <Frame
        id={id}
        title={
          [
            "Une pression croissante",
            "Vue en coupe : barrage-poids",
            "Vue de dessus : barrage-voûte",
          ][s]!
        }
        foot={s === 2 ? "Les efforts rejoignent les appuis rocheux" : "Schéma d’efforts simplifié"}
      >
        {s < 2 ? (
          <>
            <path d="M27 78H184V188H27Z" fill="#c4dfe9" stroke="#86acbf" />
            <path
              d={s === 0 ? "M184 62h12v126h-12Z" : "M184 62h20l69 126h-89Z"}
              fill="#bac0bd"
              stroke="#7e8b8a"
              strokeWidth="2"
            />
            <path d="M22 191H329V204H22Z" fill="#b3a38a" />
            {[0, 1, 2, 3].map((n) => (
              <Arrow
                key={n}
                x1={171 - (n + 1) * 18}
                y1={94 + n * 25}
                x2={178}
                y2={94 + n * 25}
                color={blue}
                width={2}
              />
            ))}
            {s === 0 ? (
              <Label x={130} y={56}>
                La pression augmente
              </Label>
            ) : (
              <>
                <Arrow x1={221} y1={108} x2={221} y2={175} color={gold} />
                <Arrow x1={253} y1={195} x2={253} y2={171} color={green} />
                <Label x={280} y={84}>
                  Poids
                </Label>
                <Label x={108} y={202}>
                  Rocher
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <path
              d="M27 58H83L103 104 101 173 82 200H27Z M333 58H277L257 104 259 173 278 200H333Z"
              fill="#c1b69f"
              stroke="#a2937b"
            />
            <path d="M84 65H276V114Q180 65 84 114Z" fill="#c4dfe9" />
            <path
              d="M83 114Q180 39 277 114L272 129Q180 67 88 129Z"
              fill="#b8c0bd"
              stroke="#7e8b8a"
              strokeWidth="2"
            />
            <Arrow x1={180} y1={59} x2={180} y2={83} color={blue} />
            <Arrow x1={123} y1={69} x2={127} y2={91} color={blue} />
            <Arrow x1={237} y1={69} x2={233} y2={91} color={blue} />
            <Arrow x1={145} y1={96} x2={95} y2={121} color={gold} />
            <Arrow x1={215} y1={96} x2={265} y2={121} color={gold} />
            <Label x={180} y={169}>
              Appuis sur les deux rives
            </Label>
            <Label x={180} y={52}>
              Retenue
            </Label>
          </>
        )}
      </Frame>
    );
  return null;
}
