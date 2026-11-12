import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import { mirrorEndpoints } from "@/lib/lesson-visuals/energy29-models";
import { Arrow, Label, Rotor, Sun, blue, warm, ink } from "./DrawingPrimitives";
import {
  Bolt,
  Foot,
  Gear,
  Heat,
  House,
  Meules,
  Shaft,
  Tank,
  Title,
  Turn,
  WorkshopPaints,
} from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function HeatExchanger({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-20"
        y="-22"
        width="40"
        height="44"
        rx="6"
        fill={`url(#${id}-metal)`}
        stroke="#8b9fae"
        strokeWidth="1.5"
      />
      <path d="M-12-15Q12-15 12-8T-12-1T12 6T-12 14" fill="none" stroke={warm} strokeWidth="3" />
    </g>
  );
}
function MillRenvoi({ id, x = 0, y = 0 }: { id: string; x?: number; y?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Shaft d="M40 113H126" />
      <Gear x={114} y={113} r={37} id={id} />
      <Shaft d="M169 56V174" />
      <path d="M150 105V123Q168 134 188 123V105Z" fill={`url(#${id}-timber)`} stroke="#9c7a4d" />
      <ellipse cx="169" cy="105" rx="19" ry="7" fill="#d8b986" stroke="#8d7046" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${153 + i * 8} 108V125`} stroke="#83653d" strokeWidth="3" />
      ))}
      <path d="M163 59H175M163 168H175" stroke="#596b7b" strokeWidth="4" />
    </g>
  );
}
function MillSails({ x, y, r = 61, id }: { x: number; y: number; r?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(35)`}>
      {[0, 90, 180, 270].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d={`M0 0V${-r}`} stroke="#8e6b40" strokeWidth="4" />
          <path d={`M2 -17H17V${-r}H2Z`} fill="#eee0bd" stroke="#9a7a4c" strokeWidth="1.2" />
          {[0, 1, 2, 3, 4].map((n) => (
            <path key={n} d={`M3 ${-20 - (n * (r - 22)) / 4}H17`} stroke="#b89c6c" />
          ))}
          <path d={`M9-18V${-r}`} stroke="#b59768" />
        </g>
      ))}
      <circle r="7" fill={`url(#${id}-timber)`} stroke="#85673e" />
    </g>
  );
}
export function ConversionDrawing({ kind, step, id }: Props) {
  if (!["refinery", "csp", "watermill", "windmill", "cogeneration"].includes(kind)) return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "refinery" ? (
        <>
          <Title>
            {
              [
                "Un tri par volatilité",
                "Des coupes à plusieurs niveaux",
                "Craquer est une autre opération",
              ][step]
            }
          </Title>
          {step < 2 ? (
            <>
              <defs>
                <linearGradient id={`${id}-column`} x2="0" y2="1">
                  <stop stopColor="#a8d0e3" />
                  <stop offset=".5" stopColor="#ebd9b0" />
                  <stop offset="1" stopColor="#d9915e" />
                </linearGradient>
              </defs>
              <rect
                x="139"
                y="49"
                width="58"
                height="132"
                rx="15"
                fill={`url(#${id}-column)`}
                stroke="#8c9da5"
                strokeWidth="2"
              />
              {[76, 103, 130, 157].map((y) => (
                <path
                  key={y}
                  d={`M145 ${y}H190M145 ${y + 4}H181`}
                  stroke="#8b9290"
                  strokeWidth="1.5"
                />
              ))}
              <path d="M161 49V39H182V49" fill={`url(#${id}-metal)`} stroke="#8399a9" />
              <path
                d="M197 64H238M197 92H238M197 121H238M197 154H238"
                stroke={step === 0 ? "#b1bfca" : warm}
                strokeWidth="4"
              />
              {step === 1 && (
                <>
                  <Label x={276} y={69}>
                    Gaz
                  </Label>
                  <Label x={279} y={97}>
                    Essence
                  </Label>
                  <Label x={279} y={126}>
                    Gazole
                  </Label>
                  <Label x={277} y={159}>
                    Résidu
                  </Label>
                </>
              )}
              <path d="M39 150V113H88V151Z" fill="#e4d8c6" stroke="#b29c7d" strokeWidth="2" />
              <path
                d="M49 145Q43 133 56 124Q55 133 65 134Q65 125 73 121Q84 138 73 145Z"
                fill={`url(#${id}-gold)`}
              />
              <Arrow x1={90} y1={140} x2={135} y2={140} color={warm} />
              <Label x={62} y={176}>
                Brut chauffé
              </Label>
              <Label x={96} y={60} color={blue}>
                Froid
              </Label>
              <Label x={228} y={182} color={warm}>
                Chaud
              </Label>
            </>
          ) : (
            <>
              <Label x={180} y={58}>
                Une longue chaîne
              </Label>
              {Array.from({ length: 8 }, (_, i) => (
                <g key={i}>
                  {i < 7 && <path d={`M${82 + i * 28} 83h28`} stroke="#9a8471" strokeWidth="3" />}
                  <circle
                    cx={82 + i * 28}
                    cy="83"
                    r="9"
                    fill="#57606a"
                    stroke="#eff4f7"
                    strokeWidth="2"
                  />
                </g>
              ))}
              <Arrow x1={166} y1={102} x2={112} y2={133} color={warm} />
              <Arrow x1={196} y1={102} x2={251} y2={133} color={warm} />
              {[0, 1].map((g) => (
                <g key={g}>
                  {[0, 1, 2, 3].map((i) => (
                    <g key={i}>
                      {i < 3 && (
                        <path
                          d={`M${48 + g * 175 + i * 28} 150h28`}
                          stroke="#9a8471"
                          strokeWidth="3"
                        />
                      )}
                      <circle
                        cx={48 + g * 175 + i * 28}
                        cy="150"
                        r="9"
                        fill={g ? blue : warm}
                        stroke="#eff4f7"
                        strokeWidth="2"
                      />
                    </g>
                  ))}
                </g>
              ))}
              <Label x={180} y={182}>
                Deux chaînes plus courtes
              </Label>
            </>
          )}
          <Foot>{step === 2 ? "8 carbones → 4 + 4" : "Une coupe n’est pas un produit pur"}</Foot>
        </>
      ) : null}
      {kind === "csp" ? (
        <>
          <Title>
            {
              [
                "Miroirs vers un récepteur",
                "Un stockage à deux réservoirs",
                "Après le coucher du Soleil",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <Sun x={47} y={57} id={id} r={19} />
              <path
                d="M247 81L236 173H274L263 81"
                fill={`url(#${id}-metal)`}
                stroke="#92a8b9"
                strokeWidth="2"
              />
              <rect x="243" y="53" width="25" height="35" rx="5" fill="#cf8050" stroke="#a86943" />
              <path d="M247 58H264M247 64H264M247 70H264M247 76H264" stroke="#e6ad78" />
              {[72, 129, 186].map((x) => {
                const p = mirrorEndpoints(x, 157, 255, 70, 0.55, 0.83);
                return (
                  <g key={x}>
                    <path
                      d={`M${x - 55} 74L${x} 157 255 70`}
                      fill="none"
                      stroke="#c7a13d"
                      strokeWidth="1.8"
                    />
                    <path
                      d={`M${p[0]} ${p[1]}L${p[2]} ${p[3]}`}
                      stroke="#7c96aa"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M${p[0]} ${p[1] - 1}L${p[2]} ${p[3] - 1}`}
                      stroke="#dceaf1"
                      strokeWidth="3"
                    />
                    <path d={`M${x} 157V177`} stroke="#9fadaf" strokeWidth="3" />
                  </g>
                );
              })}
              <Label x={255} y={45}>
                Récepteur
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <Sun x={42} y={64} id={id} r={17} />
              <path d="M77 88V162H102V88" fill={`url(#${id}-metal)`} stroke="#9daeb8" />
              <rect x="72" y="72" width="35" height="31" rx="4" fill="#c37d4d" />
              <Tank x={156} y={85} id={id} color="#d7a06b" />
              <Tank x={267} y={85} id={id} color="#a6c1d0" />
              <path
                d="M108 84H181V87M292 156V174H88V106"
                stroke={blue}
                strokeWidth="3"
                fill="none"
              />
              <Arrow x1={111} y1={84} x2={150} y2={84} color={warm} />
              <Label x={181} y={74} color={warm}>
                Chaud
              </Label>
              <Label x={292} y={74} color={blue}>
                Moins chaud
              </Label>
              <Arrow x1={121} y1={174} x2={94} y2={174} color={blue} />
            </>
          ) : (
            <>
              <path d="M43 46A15 15 0 1 0 57 68A16 16 0 0 1 43 46Z" fill="#89a7c2" />
              <Tank x={27} y={89} w={46} h={68} id={id} color="#d5a06a" level={0.48} />
              <Tank x={88} y={116} w={43} h={41} id={id} color="#9ebbcf" />
              <path d="M72 107H147M147 136V165H110V158" stroke={warm} strokeWidth="3" fill="none" />
              <HeatExchanger x={167} y={112} id={id} />
              <path d="M187 102H219M219 133H187" stroke={blue} strokeWidth="2.5" />
              <Rotor x={236} y={115} r={20} id={id} angle={35} />
              <Shaft d="M256 115H283" color="#9fadb4" width={5} />
              <circle cx="300" cy="115" r="20" fill={`url(#${id}-metal)`} stroke="#9aaebb" />
              <Bolt x={300} y={115} />
              <Label x={51} y={179}>
                Chaud
              </Label>
              <Label x={113} y={179}>
                Retour
              </Label>
              <Label x={278} y={174}>
                Alternateur
              </Label>
            </>
          )}
          <Foot>
            {step === 0
              ? "Principe optique simplifié"
              : step === 1
                ? "Fluide chaud, puis retour refroidi"
                : "Le stock thermique diminue"}
          </Foot>
        </>
      ) : null}
      {kind === "watermill" ? (
        <>
          <Title>
            {
              [
                "Une roue alimentée par le haut",
                "Un renvoi vers l’axe vertical",
                "Deux meules, une seule tourne",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <path d="M20 70H143V80H20" fill="#9d835e" stroke="#8a7252" />
              <path d="M20 65H144" stroke="#91c1dd" strokeWidth="7" />
              <Arrow x1={96} y1={64} x2={139} y2={64} />
              <circle
                cx="123"
                cy="125"
                r="47"
                fill={`url(#${id}-timber)`}
                stroke="#98764c"
                strokeWidth="3"
              />
              <circle cx="123" cy="125" r="36" fill="#d6b989" stroke="#a28760" />
              {Array.from({ length: 12 }, (_, n) => (
                <g key={n} transform={`translate(123 125) rotate(${n * 30})`}>
                  <path d="M4 0H38" stroke="#957447" strokeWidth="3" />
                  <path
                    d="M35-8H47V7H40"
                    fill={n < 3 || n > 10 ? "#8fb9d2" : "#c6a574"}
                    stroke="#8d6e45"
                  />
                </g>
              ))}
              <circle cx="123" cy="125" r="7" fill="#665b4d" />
              <path
                d="M145 71Q182 102 167 144Q158 170 140 175H20M141 175H324"
                stroke="#a3cbe0"
                strokeWidth="7"
                fill="none"
              />
              <Turn x={124} y={125} r={27} />
              <Label x={258} y={105}>
                Augets
              </Label>
              <path d="M227 110L174 116" stroke={ink} />
            </>
          ) : step === 1 ? (
            <>
              <MillRenvoi id={id} />
              <Label x={75} y={66}>
                Arbre
              </Label>
              <Label x={258} y={96}>
                Axe vertical
              </Label>
              <path d="M217 106L181 131" stroke={ink} />
              <Turn x={115} y={113} r={26} />
              <Label x={253} y={165}>
                Engrenages
              </Label>
            </>
          ) : (
            <>
              <Meules x={180} y={132} id={id} active />
              <Label x={70} y={68}>
                Grain
              </Label>
              <path d="M96 70L159 78" stroke={ink} />
              <Label x={292} y={105}>
                Tourne
              </Label>
              <path d="M258 109L224 112" stroke={ink} />
              <Label x={289} y={145}>
                Fixe
              </Label>
              <path d="M264 140L225 141" stroke={ink} />
            </>
          )}
          <Foot>
            {step === 0
              ? "L’eau descend du côté chargé"
              : step === 1
                ? "Géométrie et vitesse simplifiées"
                : "Le grain va du centre vers le bord"}
          </Foot>
        </>
      ) : null}
      {kind === "windmill" ? (
        <>
          <Title>
            {
              [
                "Les ailes entraînent l’arbre",
                "Rouet, lanterne, axe vertical",
                "Le grain devient farine",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              <path
                d="M137 95L120 180H241L224 95"
                fill={`url(#${id}-stone)`}
                stroke="#a49984"
                strokeWidth="2"
              />
              <path d="M125 95L181 61 236 95Z" fill={`url(#${id}-timber)`} stroke="#93714c" />
              <path d="M172 180V153Q181 143 190 153V180" fill="#99805b" stroke="#8b795d" />
              <MillSails x={181} y={101} id={id} />
              {[70, 105, 140].map((y) => (
                <Arrow key={y} x1={24} y1={y} x2={85} y2={y} color={blue} width={2} />
              ))}
            </>
          ) : step === 1 ? (
            <>
              <path
                d="M128 181V59L223 42 275 59V181"
                fill="#ebe0cb"
                stroke="#b5a386"
                strokeWidth="2"
              />
              <Shaft d="M75 90L166 84" />
              <MillSails x={74} y={90} r={34} id={id} />
              <Gear x={174} y={84} r={27} id={id} />
              <Shaft d="M217 65V169" />
              <path
                d="M202 77V93Q217 103 233 93V77Z"
                fill={`url(#${id}-timber)`}
                stroke="#937245"
              />
              <ellipse cx="217" cy="77" rx="16" ry="6" fill="#d1b487" stroke="#937245" />
              {[0, 1, 2, 3].map((n) => (
                <path key={n} d={`M${204 + n * 8} 79V94`} stroke="#917043" strokeWidth="3" />
              ))}
              <Label x={64} y={161}>
                Ailes
              </Label>
              <Label x={270} y={134}>
                Lanterne
              </Label>
              <path d="M245 121L230 94" stroke={ink} />
            </>
          ) : (
            <>
              <Meules x={180} y={131} id={id} active />
              <Label x={70} y={76}>
                Grain
              </Label>
              <Label x={285} y={113}>
                Mobile
              </Label>
              <Label x={282} y={149}>
                Fixe
              </Label>
              <path d="M250 111L224 111M260 142L225 140" stroke={ink} />
            </>
          )}
          <Foot>
            {step === 0
              ? "Moulin-tour générique"
              : step === 1
                ? "Un changement d’axe"
                : "Une meule supérieure tournante"}
          </Foot>
        </>
      ) : null}
      {kind === "cogeneration" ? (
        <>
          <Title>
            {
              [
                "Électricité et chaleur produites",
                "Récupérer une partie de la chaleur",
                "Deux usages sur le même site",
              ][step]
            }
          </Title>
          <rect
            x="34"
            y="92"
            width="89"
            height="57"
            rx="6"
            fill={`url(#${id}-metal)`}
            stroke="#8c9fad"
            strokeWidth="2"
          />
          <path d="M43 92V75H105V92" fill="#aab6bd" stroke="#8199a9" />
          <path d="M47 80H102M47 86H102" stroke="#e8eef1" strokeWidth="2" />
          <path d="M32 155H130" stroke="#9ca6a4" strokeWidth="5" />
          <circle cx="81" cy="126" r="12" fill="#7990a5" stroke="#50687e" />
          <path d="M81 126l9-6" stroke="#edf1f2" strokeWidth="3" />
          <Shaft d="M124 112H160" width={6} />
          <circle
            cx="178"
            cy="112"
            r="23"
            fill={`url(#${id}-metal)`}
            stroke="#88a0b2"
            strokeWidth="2"
          />
          <Bolt x={178} y={112} />
          <path
            d={step === 2 ? "M201 111H257V133H270" : "M201 111H272V82H294"}
            stroke={blue}
            strokeWidth="3"
            fill="none"
          />
          <Arrow x1={214} y1={111} x2={251} y2={111} />
          <Label x={284} y={63}>
            Courant
          </Label>
          {step === 0 ? (
            <>
              <Heat x={63} y={181} count={3} />
              <Label x={268} y={171} color={warm}>
                Chaleur rejetée
              </Label>
            </>
          ) : (
            <>
              <path d="M81 148V163H149" stroke={warm} strokeWidth="4" fill="none" />
              <HeatExchanger x={169} y={163} id={id} />
              <path
                d={step === 2 ? "M189 154H270V172H189" : "M189 154H247M247 172H189"}
                stroke={warm}
                strokeWidth="3"
                fill="none"
              />
              {step === 1 ? (
                <>
                  <path
                    d="M250 145v37M263 145v37M276 145v37M289 145v37"
                    stroke="#b8835d"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path d="M246 150H293M246 177H293" stroke="#d1a07b" strokeWidth="3" />
                </>
              ) : (
                <House x={287} y={130} scale={0.62} id={id} />
              )}
            </>
          )}
          <Foot>
            {step === 0
              ? "Un seul combustible"
              : step === 1
                ? "Échangeur : fluides séparés"
                : "La chaleur doit avoir un usage"}
          </Foot>
        </>
      ) : null}
    </>
  );
}
