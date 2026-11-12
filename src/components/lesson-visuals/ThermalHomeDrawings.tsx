import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import { Arrow, Label, Sun, blue, warm, ink, green } from "./DrawingPrimitives";
import { Foot, Heat, Panel, Title, WorkshopPaints } from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };

function Log({
  x,
  y,
  id,
  wet = false,
  charcoal = false,
}: {
  x: number;
  y: number;
  id: string;
  wet?: boolean;
  charcoal?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-48-19L36-27Q54-25 54 0Q54 20 36 23L-48 16Z"
        fill={charcoal ? "#45494e" : `url(#${id}-timber)`}
        stroke={charcoal ? "#2d3541" : "#977043"}
        strokeWidth="2"
      />
      <ellipse
        cx="-48"
        cy="-1"
        rx="14"
        ry="18"
        fill={charcoal ? "#64686b" : "#dfc69a"}
        stroke={charcoal ? "#343a43" : "#a48558"}
        strokeWidth="1.5"
      />
      <ellipse
        cx="-48"
        cy="-1"
        rx="8"
        ry="11"
        fill="none"
        stroke={charcoal ? "#313b45" : "#b1966d"}
      />
      <path
        d="M-39-13Q-11-20 31-20M-32-1Q3-11 41-9M-32 9L34 12"
        stroke={charcoal ? "#899096" : "#e2c796"}
        opacity=".6"
        fill="none"
      />
      {wet &&
        [-20, 6, 30].map((x, i) => (
          <path
            key={x}
            transform={`translate(${x} ${i % 2 ? -8 : 3})`}
            d="M0-10Q-10 2 0 5Q10 2 0-10"
            fill="#86b9d6"
            stroke="white"
            strokeWidth="1"
          />
        ))}
    </g>
  );
}
function Stove({ id }: { id: string }) {
  return (
    <g>
      <path d="M259 87V40H289" fill="none" stroke="#75838d" strokeWidth="16" />
      <path d="M259 87V40H289" fill="none" stroke="#a3adb4" strokeWidth="10" />
      <rect
        x="204"
        y="83"
        width="107"
        height="89"
        rx="8"
        fill="#4d5c68"
        stroke="#2d4051"
        strokeWidth="2"
      />
      <path d="M216 171V182M297 171V182" stroke="#5d6a73" strokeWidth="8" />
      <rect
        x="216"
        y="95"
        width="80"
        height="56"
        rx="5"
        fill="#333840"
        stroke="#a4adb1"
        strokeWidth="2"
      />
      <path
        d="M233 142Q223 130 242 111Q237 124 251 127Q249 113 264 102Q261 124 274 130Q282 143 266 148Z"
        fill={`url(#${id}-gold)`}
      />
      <path
        d="M226 148l55-5M231 139l40 11"
        stroke="#986f4a"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="303" cy="122" r="3" fill="#c4b491" />
      <path d="M225 160H281" stroke="#9baab5" strokeWidth="3" />
    </g>
  );
}
export function ThermalHomeDrawing({ kind, step, id }: Props) {
  if (
    ![
      "insulation",
      "led",
      "firewood",
      "glazing",
      "thermalmass",
      "standby",
      "pyrolysis",
      "solaroven",
    ].includes(kind)
  )
    return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "insulation" ? (
        <>
          <Title>
            {
              [
                "Les transferts de chaleur",
                "Freiner à travers les parois",
                "Un pont dans l’isolation",
              ][step]
            }
          </Title>
          {step < 2 ? (
            <>
              <path
                d="M82 100L169 49 256 100V177H82Z"
                fill="#eee0cc"
                stroke="#a18c70"
                strokeWidth="2"
              />
              <path d="M94 106L169 61 244 106V166H94Z" fill="#fff9e9" stroke="#bbab91" />
              {step === 1 && (
                <path
                  d="M87 176V103L169 55 250 103V176"
                  stroke={`url(#${id}-wool)`}
                  strokeWidth="11"
                  fill="none"
                />
              )}
              <path
                d="M75 100L169 43 263 100"
                stroke="#8f7660"
                strokeWidth="8"
                fill="none"
                strokeLinejoin="round"
              />
              <rect
                x="124"
                y="121"
                width="31"
                height="30"
                fill={`url(#${id}-water)`}
                stroke="#958f80"
                strokeWidth="3"
              />
              <path d="M139 122V150M125 136H154" stroke="white" strokeWidth="2" />
              <rect x="181" y="127" width="28" height="39" rx="2" fill="#c4ad86" stroke="#9b8767" />
              <path d="M82 177H256" stroke="#b2a48b" strokeWidth="7" />
              <Arrow x1={169} y1={94} x2={169} y2={36} color={warm} width={step ? 2 : 4} />
              <Arrow
                x1={115}
                y1={112}
                x2={step ? 65 : 46}
                y2={112}
                color={warm}
                width={step ? 2 : 4}
              />
              <Arrow
                x1={221}
                y1={112}
                x2={step ? 274 : 292}
                y2={112}
                color={warm}
                width={step ? 2 : 4}
              />
              <Heat x={154} y={151} count={2} />
            </>
          ) : (
            <>
              <rect
                x="133"
                y="54"
                width="59"
                height="119"
                fill={`url(#${id}-stone)`}
                stroke="#ae9f85"
              />
              <path d="M199 54V173" stroke={`url(#${id}-wool)`} strokeWidth="21" />
              <path d="M111 113H265V134H111" fill="#a3b2bd" stroke="#7d939f" strokeWidth="2" />
              <path d="M197 54V110M197 137V173" stroke="#f1db94" strokeWidth="20" />
              <Arrow x1={69} y1={124} x2={293} y2={124} color={warm} width={5} />
              <Label x={74} y={71}>
                Dedans
              </Label>
              <Label x={281} y={71} color={blue}>
                Dehors
              </Label>
              <Label x={70} y={173}>
                Dalle
              </Label>
              <path d="M87 160L118 133" stroke={ink} fill="none" />
              <Label x={282} y={172}>
                Isolant
              </Label>
              <path d="M254 161L211 149" stroke={ink} />
            </>
          )}
          <Foot>{step === 2 ? "Une continuité à vérifier" : "Vue qualitative · hiver"}</Foot>
        </>
      ) : null}
      {kind === "glazing" ? (
        <>
          <Title>
            {["Un vitrage simple", "Une lame de gaz enfermée", "Limiter aussi l’infrarouge"][step]}
          </Title>
          <rect x="23" y="51" width="81" height="118" rx="10" fill="#faead7" />
          <rect x="263" y="51" width="74" height="118" rx="10" fill="#e0edf6" />
          <Label x={64} y={76} color={warm}>
            Chaud
          </Label>
          <Label x={300} y={76} color={blue}>
            Froid
          </Label>
          {step === 0 ? (
            <>
              <rect
                x="174"
                y="54"
                width="13"
                height="117"
                fill={`url(#${id}-water)`}
                stroke="#85b0c3"
                strokeWidth="2"
              />
              <Arrow x1={76} y1={120} x2={295} y2={120} color={warm} width={5} />
              <Label x={180} y={183}>
                Une vitre
              </Label>
            </>
          ) : (
            <>
              <rect x="130" y="54" width="100" height="116" fill="#ecf3f7" stroke="#b5c4cc" />
              <rect
                x="130"
                y="54"
                width="13"
                height="116"
                fill={`url(#${id}-water)`}
                stroke="#85b0c3"
                strokeWidth="2"
              />
              <rect
                x="217"
                y="54"
                width="13"
                height="116"
                fill={`url(#${id}-water)`}
                stroke="#85b0c3"
                strokeWidth="2"
              />
              <path d="M143 165H217" stroke="#9ca4a7" strokeWidth="8" />
              {[0, 1, 2, 3, 4].map((i) => (
                <circle key={i} cx={155 + i * 13} cy={165} r="1.5" fill="#e9ecea" />
              ))}
              <Label x={180} y={113}>
                Gaz
              </Label>
              {step === 1 ? (
                <>
                  <Arrow x1={77} y1={135} x2={294} y2={135} color={warm} width={2} />
                  <Label x={180} y={183}>
                    Deux vitres + gaz
                  </Label>
                </>
              ) : (
                <>
                  <path d="M144 57V161" stroke="#bd9458" strokeWidth="3" />
                  <Arrow x1={69} y1={93} x2={292} y2={93} color="#c79e33" width={2} />
                  <path
                    d="M65 129Q102 113 144 132Q115 157 80 150"
                    fill="none"
                    stroke={warm}
                    strokeWidth="2.5"
                  />
                  <Arrow x1={92} y1={151} x2={77} y2={150} color={warm} />
                  <Label x={180} y={183}>
                    Couche faible émissivité
                  </Label>
                </>
              )}
            </>
          )}
          <Foot>Des pertes subsistent</Foot>
        </>
      ) : null}
      {kind === "thermalmass" ? (
        <>
          <Title>
            {
              ["Charger la masse le jour", "Restituer progressivement", "Une nuit plus fraîche"][
                step
              ]
            }
          </Title>
          {step < 2 ? (
            <>
              <rect
                x="150"
                y="50"
                width="75"
                height="128"
                fill={`url(#${id}-stone)`}
                stroke="#a79881"
                strokeWidth="2"
              />
              <rect
                x="153"
                y="53"
                width="69"
                height="122"
                fill="#df9a61"
                opacity={step === 0 ? 0.35 : 0.18}
              />
              {step === 0 ? (
                <>
                  <Sun x={56} y={84} r={22} id={id} />
                  <Arrow x1={86} y1={84} x2={145} y2={107} color={warm} />
                  <Arrow x1={85} y1={120} x2={145} y2={129} color={warm} />
                  <Heat x={172} y={141} />
                </>
              ) : (
                <>
                  <path d="M66 53A23 23 0 1 0 82 85A20 20 0 0 1 66 53Z" fill="#a4bfd3" />
                  <Arrow x1={224} y1={112} x2={283} y2={112} color={warm} />
                  <Heat x={264} y={148} count={2} />
                  <Arrow x1={150} y1={139} x2={102} y2={139} color={warm} width={2} />
                </>
              )}
              <Label x={187} y={184}>
                Masse lourde
              </Label>
              <Label x={290} y={71}>
                Pièce
              </Label>
            </>
          ) : (
            <>
              <path d="M71 53A21 21 0 1 0 83 82A20 20 0 0 1 71 53Z" fill="#8faccc" />
              <rect
                x="151"
                y="49"
                width="66"
                height="128"
                fill={`url(#${id}-stone)`}
                stroke="#a79881"
              />
              <rect
                x="147"
                y="90"
                width="74"
                height="42"
                fill="#edf6fb"
                stroke="#9da8ab"
                strokeWidth="3"
              />
              <path
                d="M151 91L137 98V130L151 132M217 91L231 98V130L217 132"
                fill="#cce1ea"
                stroke="#8b9da5"
              />
              <Arrow x1={277} y1={99} x2={77} y2={99} color={warm} />
              <Arrow x1={77} y1={123} x2={277} y2={123} color={blue} />
              <Label x={290} y={158} color={blue}>
                Air frais
              </Label>
              <Label x={181} y={184}>
                Fenêtre ouverte
              </Label>
            </>
          )}
          <Foot>Inertie ≠ isolation</Foot>
        </>
      ) : null}
      {kind === "led" ? (
        <>
          <Title>
            {
              [
                "Une jonction semi-conductrice",
                "Une recombinaison lumineuse",
                "Une voie vers le blanc",
              ][step]
            }
          </Title>
          {step < 2 ? (
            <>
              <rect x="54" y="74" width="126" height="83" rx="5" fill="#f1ddd0" stroke="#bd9479" />
              <rect x="180" y="74" width="126" height="83" rx="5" fill="#d6e7f3" stroke="#86a9c4" />
              <path d="M180 72V160" stroke="#a08686" strokeDasharray="3 4" />
              {[0, 1, 2].map((n) => (
                <g key={n}>
                  <circle
                    cx={79 + n * 32}
                    cy="115"
                    r="8"
                    fill="white"
                    stroke={warm}
                    strokeWidth="2"
                  />
                  <path d={`M${75 + n * 32} 115h8M${79 + n * 32} 111v8`} stroke={warm} />
                  <circle cx={209 + n * 32} cy="115" r="8" fill={blue} />
                  <path d={`M${205 + n * 32} 115h8`} stroke="white" strokeWidth="1.5" />
                </g>
              ))}
              <Arrow x1={109} y1={141} x2={169} y2={141} color={warm} />
              <Arrow x1={250} y1={141} x2={191} y2={141} color={blue} />
              <Label x={110} y={64}>
                Trous
              </Label>
              <Label x={250} y={64}>
                Électrons
              </Label>
              {step === 1 && (
                <>
                  <circle cx="180" cy="115" r="17" fill="#fff2b9" stroke="#dfb24f" />
                  <path
                    d="M180 99Q170 88 180 77T180 55"
                    stroke="#cf9f27"
                    fill="none"
                    strokeWidth="3"
                  />
                  <Arrow x1={180} y1={55} x2={180} y2={41} color="#cf9f27" />
                  <Heat x={172} y={183} count={2} />
                </>
              )}
              <Foot>{step === 0 ? "Trou = absence d’électron" : "Lumière et chaleur"}</Foot>
            </>
          ) : (
            <>
              <rect
                x="138"
                y="143"
                width="84"
                height="25"
                rx="5"
                fill={`url(#${id}-metal)`}
                stroke="#829bad"
              />
              <rect x="162" y="126" width="36" height="19" rx="3" fill={blue} stroke="#2b6291" />
              <path
                d="M126 136Q126 75 180 75Q234 75 234 136"
                fill="#f3d978"
                fillOpacity=".3"
                stroke="#d3b34c"
                strokeWidth="5"
              />
              <Arrow x1={176} y1={122} x2={153} y2={89} color={blue} />
              <Arrow x1={148} y1={80} x2={105} y2={50} color={blue} />
              <Arrow x1={190} y1={80} x2={211} y2={43} color="#b9a124" />
              <Arrow x1={210} y1={92} x2={273} y2={54} color={green} />
              <Label x={180} y={188}>
                Luminophore
              </Label>
              <path d="M241 163L224 127" stroke={ink} fill="none" />
              <Foot>Un mélange perçu comme blanc</Foot>
            </>
          )}
        </>
      ) : null}
      {kind === "firewood" ? (
        <>
          <Title>
            {
              [
                "L’eau présente dans le bois",
                "Après un séchage adapté",
                "Chauffer et évacuer les fumées",
              ][step]
            }
          </Title>
          {step < 2 ? (
            <>
              <Log x={182} y={111} id={id} wet={step === 0} />
              {step === 0 ? (
                <>
                  <Heat x={135} y={177} count={5} />
                  <Arrow x1={244} y1={88} x2={276} y2={49} color={blue} />
                  <Label x={180} y={68}>
                    Évaporer l’eau
                  </Label>
                </>
              ) : (
                <>
                  {[0, 1, 2].map((n) => (
                    <Arrow
                      key={n}
                      x1={53}
                      y1={75 + n * 27}
                      x2={100}
                      y2={75 + n * 27}
                      color={blue}
                      width={2}
                    />
                  ))}
                  <path d="M122 149L236 141" stroke="#b8a78b" strokeWidth="7" />
                  <Label x={180} y={179}>
                    Moins d’eau à évaporer
                  </Label>
                </>
              )}
            </>
          ) : (
            <>
              <Log x={87} y={126} id={id} />
              <Arrow x1={146} y1={127} x2={193} y2={127} color={warm} />
              <Stove id={id} />
              <Heat x={326} y={135} count={1} />
            </>
          )}
          <Foot>
            {step === 2 ? "Même sec, le bois émet des particules" : "Aucune humidité mesurée ici"}
          </Foot>
        </>
      ) : null}
      {kind === "standby" ? (
        <>
          <Title>
            {
              [
                "L’appareil en fonctionnement",
                "En veille, des circuits actifs",
                "Une coupure de cette source",
              ][step]
            }
          </Title>
          <rect
            x="113"
            y="51"
            width="207"
            height="129"
            rx="9"
            fill={`url(#${id}-metal)`}
            stroke="#7e95a7"
            strokeWidth="2"
          />
          <rect
            x="128"
            y="65"
            width="176"
            height="67"
            rx="4"
            fill={step === 0 ? "#aacde0" : "#2f3b4b"}
            stroke="#8799a7"
          />
          {step === 0 && (
            <>
              <path d="M134 126L183 82 215 104 244 79 299 127" fill="#8fab8b" />
              <circle cx="276" cy="82" r="9" fill="#f4d98f" />
            </>
          )}
          <Panel x={127} y={140} w={61} h={28} color={step < 2 ? "#c3d3aa" : "#cad1d5"}>
            <path
              d="M136 147h10v12h-10zM155 147h21v4h-21zM155 156h21v4h-21z"
              fill={step < 2 ? "#73875f" : "#9ca5aa"}
            />
          </Panel>
          <Panel x={199} y={140} w={105} h={28} color={step < 2 ? "#cadbb8" : "#cad1d5"}>
            <circle cx="214" cy="154" r="4" fill={step < 2 ? "#bd623c" : "#99a5af"} />
            <path
              d="M228 149h25M228 158h25M265 149h29M265 158h29"
              stroke={step < 2 ? green : "#9ca5aa"}
              strokeWidth="3"
            />
          </Panel>
          <path
            d="M51 112V155H73M100 155H124"
            stroke={step < 2 ? blue : "#a5b1ba"}
            strokeWidth="3"
            fill="none"
          />
          <rect x="29" y="74" width="42" height="47" rx="8" fill="#eee7d9" stroke="#a6a39b" />
          <circle cx="42" cy="93" r="3" fill="#7f8d96" />
          <circle cx="58" cy="93" r="3" fill="#7f8d96" />
          <path d="M46 107v5h9v-5" stroke="#7f8d96" fill="none" />
          <circle cx="75" cy="155" r="3" fill={ink} />
          <circle cx="99" cy="155" r="3" fill={ink} />
          <path
            d={step === 2 ? "M75 155L94 140" : "M75 155H99"}
            stroke={step === 2 ? warm : blue}
            strokeWidth="3"
          />
          <Label x={52} y={60}>
            Prise
          </Label>
          <Foot>{step === 1 ? "Alimentation + récepteur" : "Le secteur comme seule source"}</Foot>
        </>
      ) : null}
      {kind === "pyrolysis" ? (
        <>
          <Title>
            {
              ["Du bois avant traitement", "Chaleur, peu d’oxygène", "Un résidu riche en carbone"][
                step
              ]
            }
          </Title>
          {step === 0 ? (
            <>
              <Log x={185} y={115} id={id} wet />
              <Label x={180} y={174}>
                Eau + matière organique
              </Label>
            </>
          ) : step === 1 ? (
            <>
              <path
                d="M114 74Q114 61 130 61H229Q247 61 247 75V151H114Z"
                fill={`url(#${id}-metal)`}
                stroke="#8299aa"
                strokeWidth="2"
              />
              <Log x={183} y={113} id={id} />
              <path d="M247 91H288V59" fill="none" stroke="#8098a9" strokeWidth="8" />
              <Arrow x1={288} y1={61} x2={288} y2={42} color="#839bab" />
              <Label x={321} y={65}>
                Gaz
              </Label>
              <path d="M106 154H253V178H106Z" fill="#ddd4c5" stroke="#ada391" />
              <Heat x={146} y={177} count={5} />
              <Arrow x1={57} y1={113} x2={90} y2={113} color="#9bacb5" dashed />
              <path d="M91 99L107 124M107 99L91 124" stroke={warm} strokeWidth="2.5" />
            </>
          ) : (
            <>
              <Log x={184} y={111} id={id} charcoal />
              <circle cx="266" cy="139" r="5" fill="#525c67" />
              <circle cx="252" cy="154" r="3" fill="#6c747a" />
              <Label x={180} y={177}>
                Une partie de la matière est partie
              </Label>
            </>
          )}
          <Foot>{step === 1 ? "Principe · pas un mode opératoire" : "Carbonisation du bois"}</Foot>
        </>
      ) : null}
      {kind === "solaroven" ? (
        <>
          <Title>
            {
              [
                "Réfléchir vers le cuiseur",
                "Absorber dans la boîte",
                "Limiter les pertes thermiques",
              ][step]
            }
          </Title>
          <Sun x={56} y={60} r={20} id={id} />
          <path
            d="M118 135L169 68 265 90 230 151Z"
            fill={`url(#${id}-metal)`}
            stroke="#8fa3b3"
            strokeWidth="2"
          />
          <path
            d="M123 137L170 75 257 95"
            stroke="white"
            strokeWidth="4"
            opacity=".7"
            fill="none"
          />
          <path
            d="M114 134L227 144 274 111V160L227 188 114 174Z"
            fill={`url(#${id}-timber)`}
            stroke="#9f8159"
            strokeWidth="2"
          />
          <path d="M126 135L225 144 262 117 168 107Z" fill="#525152" stroke="#5d6470" />
          <path
            d="M172 130V149Q194 163 217 148V130"
            fill="#3d444c"
            stroke="#202f40"
            strokeWidth="1.5"
          />
          <ellipse cx="194" cy="130" rx="23" ry="7" fill="#626b6f" stroke="#263747" />
          <path d="M178 124Q195 114 209 124" fill="none" stroke="#3a4852" strokeWidth="3" />
          {step === 2 && (
            <path
              d="M122 131L227 142 270 111 166 101Z"
              fill="#b5dcec"
              fillOpacity=".42"
              stroke="#80a9bf"
              strokeWidth="2"
            />
          )}
          <Arrow x1={76} y1={65} x2={188} y2={89} color="#c29a2d" />
          <Arrow x1={190} y1={91} x2={193} y2={123} color="#c29a2d" />
          {step > 0 && <Heat x={177} y={156} count={3} />}
          {step === 2 && (
            <>
              <Arrow x1={282} y1={146} x2={315} y2={146} color={warm} width={2} />
              <Label x={299} y={174}>
                Pertes
              </Label>
            </>
          )}
          <Foot>{step === 2 ? "Couvercle + parois isolantes" : "Cuiseur boîte générique"}</Foot>
        </>
      ) : null}
    </>
  );
}
