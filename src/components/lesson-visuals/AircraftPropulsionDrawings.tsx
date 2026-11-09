import { Arrow, Label, Rotor, ink, blue, warm, green } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Tank({ x, y, id, small = false }: { x: number; y: number; id: string; small?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})${small ? " scale(.6)" : ""}`}>
      <rect
        x="-50"
        y="-29"
        width="100"
        height="58"
        rx="28"
        fill={`url(#${id}-metal)`}
        stroke="#7c95aa"
        strokeWidth="2"
      />
      <rect
        x="-42"
        y="-21"
        width="84"
        height="42"
        rx="21"
        fill="#b8deed"
        stroke="#73aac5"
        strokeWidth="1.3"
      />
      <path d="M-31-10Q-2-19 30-10" fill="none" stroke="white" strokeWidth="3" />
      <path d="M50-4H61V6H50" fill="#b0c4d4" stroke={ink} />
    </g>
  );
}
function Battery({ x, y, id, charge = 4 }: { x: number; y: number; id: string; charge?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-39"
        y="-25"
        width="78"
        height="50"
        rx="7"
        fill={`url(#${id}-metal)`}
        stroke={ink}
        strokeWidth="1.7"
      />
      <rect x="-15" y="-29" width="9" height="4" fill="#8497ab" />
      <rect x="10" y="-29" width="9" height="4" fill="#8497ab" />
      {[0, 1, 2, 3].map((n) => (
        <rect
          key={n}
          x={-31 + n * 17}
          y="-16"
          width="12"
          height="32"
          rx="2"
          fill={n < charge ? "#86ac84" : "#e2e8ed"}
          stroke="#91a493"
        />
      ))}
      <path d="M29-20H34M-31-20H-26" stroke={ink} strokeWidth="1.3" />
    </g>
  );
}
function Motor({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-22"
        y="-25"
        width="44"
        height="50"
        rx="8"
        fill={`url(#${id}-metal)`}
        stroke={ink}
        strokeWidth="1.6"
      />
      <path d="M-12-19V19M-4-21V21M4-21V21M12-19V19" stroke="#9caec0" />
      <circle r="11" fill="#b4d0d0" stroke="#6c8e98" />
      <path d="M0-7V7M-7 0H7" stroke="#52707f" strokeWidth="2" />
    </g>
  );
}
function Propeller({ x, y, id, angle = 0 }: { x: number; y: number; id: string; angle?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse
        rx="11"
        ry="48"
        fill="#c5dbe9"
        fillOpacity=".3"
        stroke="#abc4d7"
        strokeDasharray="4 4"
      />
      <g transform={`rotate(${angle})`}>
        <path
          d="M-3-2Q-18-39-3-46Q8-41 4-5Q22 36 5 46Q-5 42-3 3Z"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="1.5"
        />
        <circle r="7" fill="#8da5b9" stroke={ink} />
      </g>
    </g>
  );
}
function Factory({ x = 175, y = 120, id }: { x?: number; y?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-32 29V-22L-9-10V-22L15-9 32-18V29Z"
        fill={`url(#${id}-metal)`}
        stroke="#728ba2"
        strokeWidth="1.5"
      />
      <path d="M-24-21V-45H-13V-15" fill="#b2c3d2" stroke="#728ba2" />
      {[-17, 1, 19].map((x) => (
        <rect key={x} x={x - 5} y="5" width="10" height="14" fill="#84b5c7" stroke="#6e96ac" />
      ))}
      <path d="M-36 30H37" stroke="#6f899e" strokeWidth="2" />
    </g>
  );
}
function CutCylinder({ id }: { id: string }) {
  return (
    <>
      <path d="M77 48H153V135H77Z" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="2" />
      <path d="M85 58H145V118H85Z" fill="#f2c58b" />
      <path
        d="M91 74Q100 48 108 69Q116 49 127 73Q140 63 138 89Q118 107 91 91Z"
        fill="#db8d4c"
        opacity=".7"
      />
      <path d="M86 108H144V120H86Z" fill="#9dadbf" stroke={ink} />
      <path d="M115 120L149 164" stroke="#607b95" strokeWidth="7" />
      <circle cx="163" cy="164" r="23" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="1.6" />
      <path d="M163 164L149 164" stroke="#5b768d" strokeWidth="7" />
      <circle cx="149" cy="164" r="4" fill="white" stroke={ink} />
      <circle cx="163" cy="164" r="5" fill="#66849d" />
      <path d="M115 43V61" stroke="#7d8ea2" strokeWidth="5" />
      <path d="M110 65L116 61 114 70 121 66" stroke="#f5d461" strokeWidth="2" fill="none" />
      <Arrow x1={115} y1={82} x2={115} y2={105} color={warm} />
    </>
  );
}
export function AircraftPropulsionDrawing({ kind, step, id }: Props) {
  if (kind === "hydrogenair")
    return (
      <>
        {step === 0 ? (
          <>
            <Tank x={160} y={112} id={id} />
            <Label x={160} y={119}>
              H₂
            </Label>
            <path
              d="M110 112H79V164H287V113H230"
              fill="none"
              stroke="#7e9bb4"
              strokeDasharray="5 4"
            />
            <Label x={180} y={35}>
              Liquide · environ −253 °C
            </Label>
            <Label x={180} y={201}>
              Paroi isolée · intégration à repenser
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Tank x={58} y={111} id={id} small />
            <Arrow x1={98} y1={111} x2={130} y2={111} color={blue} />
            <path
              d="M139 86H220L247 103V130L219 144H139Z"
              fill={`url(#${id}-metal)`}
              stroke={ink}
            />
            <path d="M156 107Q170 72 187 106Q202 85 217 113Q205 137 173 129Z" fill="#e4aa67" />
            <Rotor x={228} y={115} id={id} r={17} />
            <Arrow x1={251} y1={116} x2={331} y2={116} color={warm} />
            <Label x={180} y={32}>
              Hydrogène + air → turbine
            </Label>
            <Label x={180} y={178}>
              Eau · NOₓ possibles
            </Label>
            <Label x={180} y={201}>
              Pas de carbone dans le combustible
            </Label>
          </>
        ) : (
          <>
            <Tank x={49} y={94} id={id} small />
            <Arrow x1={91} y1={94} x2={116} y2={94} />
            <rect x="123" y="66" width="65" height="58" rx="7" fill="#d6e5d4" stroke="#779375" />
            {[0, 1, 2, 3, 4].map((n) => (
              <path key={n} d={`M${134 + n * 10} 74V116`} stroke="#92ad8d" strokeWidth="3" />
            ))}
            <Arrow x1={156} y1={40} x2={156} y2={61} />
            <Label x={209} y={49}>
              O₂ de l’air
            </Label>
            <Label x={155} y={102}>
              Pile
            </Label>
            <Arrow x1={195} y1={94} x2={227} y2={94} color={green} />
            <Motor x={258} y={94} id={id} />
            <Label x={258} y={141}>
              Moteur
            </Label>
            <path d="M281 94H311" stroke="#849baf" strokeWidth="5" />
            <Propeller x={314} y={94} id={id} />
            <Arrow x1={155} y1={129} x2={155} y2={153} color={warm} />
            <Label x={160} y={177}>
              Eau + chaleur
            </Label>
            <Label x={180} y={201}>
              Pile → électricité → moteur → hélice
            </Label>
          </>
        )}
      </>
    );
  if (kind === "zeroe")
    return (
      <>
        {step < 2 ? (
          <>
            <path
              d="M165 45Q180 18 195 45L195 85 309 125 309 136 195 114 191 158 222 174 222 181 180 173 138 181 138 174 169 158 165 114 51 136 51 125 165 85Z"
              fill={`url(#${id}-metal)`}
              stroke={ink}
              strokeWidth="1.6"
            />
            <path d="M171 47Q180 37 189 47V54H171Z" fill="#799fb9" />
            <path d="M173 65V109M187 65V109" stroke="#9db4c9" strokeWidth="2.5" />
            {[109, 251].map((x) => (
              <g key={x}>
                <rect
                  x={x - 9}
                  y={step === 1 ? 90 : 109}
                  width="18"
                  height="32"
                  rx="8"
                  fill="#9cb7ca"
                  stroke={ink}
                />
                {step === 1 ? (
                  <>
                    <path
                      d={`M${x - 27} 90H${x + 27}M${x} 69V108`}
                      stroke="#566f87"
                      strokeWidth="3"
                    />
                    <circle cx={x} cy="90" r="5" fill="#d6e2e9" stroke={ink} />
                  </>
                ) : (
                  <ellipse cx={x} cy="112" rx="7" ry="3" fill="#344f67" />
                )}
              </g>
            ))}
            <rect x="171" y="124" width="18" height="34" rx="8" fill="#9ed0e0" stroke="#6299ad" />
            <path d="M194 142L261 160" stroke="#7995aa" />
            <Label x={285} y={175}>
              H₂
            </Label>
          </>
        ) : (
          <>
            <path
              d="M180 34Q204 39 217 73L322 146 321 166 230 151 212 173H148L130 151 39 166 38 146 143 73Q156 39 180 34Z"
              fill={`url(#${id}-metal)`}
              stroke={ink}
              strokeWidth="1.8"
            />
            <path d="M167 60Q180 50 193 60L199 67H161Z" fill="#789eb7" />
            <path
              d="M124 103Q180 70 236 103V143H124Z"
              fill="#b0d5df"
              fillOpacity=".5"
              stroke="#75a4b4"
              strokeDasharray="4 4"
            />
            <path d="M153 92V132M180 84V134M207 92V132" stroke="#b2c4d3" />
            {[152, 208].map((x) => (
              <rect
                key={x}
                x={x - 7}
                y="149"
                width="14"
                height="25"
                rx="6"
                fill="#8ca7bc"
                stroke={ink}
              />
            ))}
          </>
        )}
        <Label x={180} y={23}>
          {
            ["Concept à turbosoufflantes", "Concept à turbopropulseurs", "Corps et ailes intégrés"][
              step
            ]
          }
        </Label>
        <Label x={180} y={201}>
          Interprétation des concepts de 2020
        </Label>
      </>
    );
  if (kind === "electricair")
    return (
      <>
        {step === 0 ? (
          <>
            <Battery x={66} y={108} id={id} />
            <Arrow x1={114} y1={108} x2={178} y2={108} color={green} />
            <Motor x={213} y={108} id={id} />
            <path d="M237 108H283" stroke="#8299ae" strokeWidth="5" />
            <Propeller x={285} y={108} id={id} />
            <Label x={66} y={161}>
              Batterie
            </Label>
            <Label x={214} y={161}>
              Moteur
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Battery x={91} y={107} id={id} />
            <Battery x={269} y={107} id={id} charge={0} />
            <path d="M55 143H126M233 143H305" stroke="#93aabf" strokeWidth="3" />
            <path
              d="M73 143L65 154H117L109 143M251 143L243 154H295L287 143"
              fill="#e1e8ee"
              stroke="#8ba2b9"
            />
            <Label x={91} y={65}>
              Chargée
            </Label>
            <Label x={269} y={65}>
              Déchargée
            </Label>
          </>
        ) : (
          <>
            <path d="M25 76H98L116 90V119L98 133H25Z" fill={`url(#${id}-metal)`} stroke={ink} />
            <path d="M40 91Q56 68 67 94Q79 78 94 105Q76 127 48 115Z" fill="#e1ac6a" />
            <Rotor x={99} y={105} id={id} r={12} />
            <Arrow x1={119} y1={105} x2={150} y2={105} color={green} />
            <rect x="157" y="84" width="35" height="42" rx="6" fill="#d7e5d4" stroke={ink} />
            <path d="M166 92V119M175 92V119M184 92V119" stroke="#98af92" />
            <g transform="translate(175 164) scale(.7)">
              <Battery x={0} y={0} id={id} charge={2} />
            </g>
            <Arrow x1={175} y1={146} x2={175} y2={129} color={green} />
            <Arrow x1={199} y1={105} x2={237} y2={105} color={green} />
            <Motor x={267} y={105} id={id} />
            <path d="M290 105H316" stroke="#8299ae" strokeWidth="5" />
            <Propeller x={316} y={105} id={id} />
            <Label x={76} y={59}>
              Thermique
            </Label>
          </>
        )}
        <Label x={180} y={29}>
          {
            [
              "Chaîne tout électrique",
              "L’énergie change, les cellules restent",
              "Exemple : hybride série",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          {step === 2
            ? "Thermique → générateur → électricité"
            : step === 1
              ? "Masse presque inchangée"
              : "Batterie → moteur → hélice"}
        </Label>
      </>
    );
  if (kind === "aeroengine")
    return (
      <>
        {step === 0 ? (
          <>
            <rect
              x="142"
              y="57"
              width="77"
              height="109"
              rx="15"
              fill={`url(#${id}-metal)`}
              stroke={ink}
              strokeWidth="1.8"
            />
            {[-1, 1].map((side) => (
              <g key={side}>
                {[0, 1].map((n) => (
                  <g key={n}>
                    <rect
                      x={side === -1 ? 65 : 217}
                      y={69 + n * 58}
                      width="78"
                      height="32"
                      rx="4"
                      fill="#c6d2de"
                      stroke={ink}
                    />
                    {[0, 1, 2, 3].map((k) => (
                      <path
                        key={k}
                        d={`M${side === -1 ? 70 + k * 6 : 270 + k * 6} ${64 + n * 58}V${106 + n * 58}`}
                        stroke="#8aa0b5"
                        strokeWidth="2"
                      />
                    ))}
                    <rect
                      x={side === -1 ? 114 : 225}
                      y={73 + n * 58}
                      width="14"
                      height="24"
                      rx="2"
                      fill="#879eb5"
                    />
                    <path
                      d={`M${side === -1 ? 129 : 224} ${85 + n * 58}H180`}
                      stroke="#6d879d"
                      strokeWidth="4"
                    />
                  </g>
                ))}
              </g>
            ))}
            <path d="M180 42V176" stroke="#667f97" strokeWidth="8" />
            <circle cx="180" cy="85" r="8" fill="#d4dfe8" stroke={ink} />
            <circle cx="180" cy="143" r="8" fill="#d4dfe8" stroke={ink} />
            <Label x={180} y={25}>
              Exemple à quatre cylindres opposés
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <CutCylinder id={id} />
            <Label x={242} y={52}>
              Piston
            </Label>
            <path d="M215 57L144 109" stroke="#7a92a8" />
            <Label x={262} y={112}>
              Bielle
            </Label>
            <path d="M231 117L137 149" stroke="#7a92a8" />
            <Label x={278} y={170}>
              Vilebrequin
            </Label>
            <path d="M230 166H187" stroke="#7a92a8" />
          </>
        ) : (
          <>
            <rect
              x="56"
              y="76"
              width="109"
              height="70"
              rx="15"
              fill={`url(#${id}-metal)`}
              stroke={ink}
            />
            {[0, 1, 2, 3].map((n) => (
              <path key={n} d={`M${69 + n * 25} 83V139`} stroke="#9eafc0" strokeWidth="3" />
            ))}
            <path d="M164 111H257" stroke="#6e879e" strokeWidth="8" />
            <Propeller x={261} y={111} id={id} />
            <Arrow x1={319} y1={86} x2={278} y2={86} />
            <Arrow x1={319} y1={137} x2={278} y2={137} />
            <Arrow x1={245} y1={63} x2={204} y2={63} />
            <Label x={180} y={30}>
              L’hélice accélère l’air vers l’arrière
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Architecture vue de dessus",
              "Un instant du temps moteur",
              "Transmission directe ou avec réducteur",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "saf")
    return (
      <>
        {step === 0 ? (
          <>
            <path d="M36 76H77V91H88V151H32V91H36Z" fill="#e0c996" stroke="#9e8657" />
            <path d="M42 112H77V142H42Z" fill="#d9ac58" />
            <path d="M41 75V66H73V75" stroke="#9e8657" fill="none" strokeWidth="3" />
            <Label x={66} y={46}>
              Huiles usées
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <path d="M30 133L103 111V137L30 159Z" fill="#bda378" stroke="#8a7655" />
            <ellipse cx="99" cy="124" rx="7" ry="12" fill="#dfc7a2" stroke="#8a7655" />
            <path d="M43 106L85 85M43 99L84 78M45 114L88 92" stroke="#c7ac61" strokeWidth="4" />
            <path d="M60 119L64 91M67 115L71 88" stroke="#886c3f" strokeWidth="2" />
            <Label x={67} y={47}>
              Résidus
            </Label>
          </>
        ) : (
          <>
            <rect x="24" y="68" width="82" height="40" rx="17" fill="#d8e4ea" stroke="#829baa" />
            <Label x={65} y={95}>
              CO₂ capté
            </Label>
            <rect x="24" y="121" width="82" height="35" rx="17" fill="#cde5ef" stroke="#7da6ba" />
            <Label x={65} y={146}>
              H₂
            </Label>
          </>
        )}
        {step === 2 && (
          <path d="M106 88L121 108V123M106 138L121 123" fill="none" stroke={blue} strokeWidth="2" />
        )}
        <Arrow x1={111} y1={123} x2={133} y2={123} />
        <Factory id={id} />
        <Arrow x1={218} y1={123} x2={242} y2={123} color={green} />
        <path d="M260 88H307V153H260Z" fill="#cedce5" stroke="#718da5" />
        <ellipse cx="283.5" cy="88" rx="23.5" ry="7" fill="#e9eff4" stroke="#718da5" />
        <ellipse cx="283.5" cy="153" rx="23.5" ry="7" fill="#bccdd9" stroke="#718da5" />
        <Label x={283} y={126}>
          SAF
        </Label>
        <Label x={183} y={45}>
          Conversion
        </Label>
        <Label x={180} y={201}>
          À la combustion : du CO₂
        </Label>
      </>
    );
  if (kind === "landingbrakes")
    return (
      <>
        {step === 0 ? (
          <>
            <path d="M22 154H336V169H22Z" fill="#d7dfe6" />
            <circle cx="132" cy="106" r="47" fill="#354452" stroke="#1e3044" strokeWidth="2" />
            <circle cx="132" cy="106" r="29" fill={`url(#${id}-metal)`} stroke="#a8bccd" />
            <circle cx="132" cy="106" r="18" fill="#a99d90" stroke="#7c756b" />
            <path d="M151 84H166V117H151Z" fill="#bb7854" stroke="#8c5e43" />
            <path d="M132 89V123M115 106H149" stroke="#d6dfe5" strokeWidth="2" />
            <Arrow x1={132} y1={152} x2={63} y2={152} color={warm} />
            <Arrow x1={219} y1={76} x2={307} y2={76} />
            <Label x={259} y={107}>
              Avion →
            </Label>
            <Label x={246} y={145}>
              Piste sur pneu
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <path d="M24 165H337V180H24Z" fill="#d6dfe5" />
            <path
              d="M65 118L47 78H60L89 109H249Q275 105 296 124Q282 139 90 135L66 129Z"
              fill={`url(#${id}-metal)`}
              stroke={ink}
              strokeWidth="1.7"
            />
            <path d="M246 115L264 116 276 123H246Z" fill="#7facc7" stroke="#6d91ad" />
            <path d="M151 124L113 150H137L205 128Z" fill="#bacbd9" stroke={ink} />
            <path
              d="M160 124V101L181 112 186 127Z"
              fill="#d8b287"
              stroke="#8c694c"
              strokeWidth="1.8"
            />
            <path d="M203 40L174 106" stroke="#a68866" />
            <path d="M160 120V154M226 121V154" stroke="#758ca3" strokeWidth="3" />
            <circle cx="160" cy="157" r="8" fill="#435466" />
            <circle cx="226" cy="157" r="8" fill="#435466" />
            <Arrow x1={140} y1={73} x2={83} y2={73} color={warm} />
            <Arrow x1={185} y1={136} x2={185} y2={159} color={green} />
            <Label x={180} y={29}>
              Spoilers : portance réduite
            </Label>
          </>
        ) : (
          <>
            <path
              d="M302 64H111L70 89V135L111 153H302V137H120L94 124V102L120 80H302Z"
              fill={`url(#${id}-metal)`}
              stroke="#718ba3"
              strokeWidth="1.5"
            />
            <path d="M111 99Q183 83 258 98V125Q183 139 111 126Z" fill="#e1c197" stroke="#9e886d" />
            <path d="M276 72V146" stroke="#7b9bad" strokeWidth="6" />
            <path d="M188 75L210 98M188 144L210 125" stroke="#637e95" strokeWidth="4" />
            <Arrow x1={331} y1={110} x2={290} y2={110} />
            <Arrow x1={239} y1={111} x2={64} y2={111} color={warm} />
            <path
              d="M268 81H220Q201 81 207 64T242 39M268 138H220Q201 138 207 155T242 180"
              fill="none"
              stroke={blue}
              strokeWidth="3"
            />
            <Arrow x1={242} y1={39} x2={276} y2={30} />
            <Arrow x1={242} y1={180} x2={276} y2={189} />
            <Label x={94} y={32}>
              Avant →
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Effort de freinage vers l’arrière",
              "Traînée accrue · roues chargées",
              "Flux secondaire dévié vers l’avant",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "magnetos") {
    const a = step !== 1,
      b = step !== 2;
    return (
      <>
        <path d="M142 58H218V150H142Z" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="1.8" />
        <path d="M150 78H210V122H150Z" fill="#ebc995" />
        <path d="M151 122H209V133H151Z" fill="#92a7ba" stroke={ink} />
        <path d="M180 133V173" stroke="#718ba1" strokeWidth="6" />
        {[
          { x: 67, color: blue, active: a, label: "A" },
          { x: 293, color: green, active: b, label: "B" },
        ].map((m, i) => (
          <g key={m.label}>
            <rect
              x={m.x - 28}
              y="85"
              width="56"
              height="51"
              rx="9"
              fill={m.active ? "#d4e3ec" : "#e1e5e9"}
              stroke={m.active ? m.color : "#a0acb9"}
              strokeWidth="1.7"
            />
            <circle
              cx={m.x}
              cy="109"
              r="13"
              fill={`url(#${id}-metal)`}
              stroke={m.active ? m.color : "#9ca9b6"}
            />
            <path
              d={`M${m.x - 6} 109h12M${m.x} 103v12`}
              stroke={m.active ? m.color : "#9ca9b6"}
              strokeWidth="2"
            />
            <path
              d={`M${m.x} 84V44H${i ? 198 : 162}V69`}
              fill="none"
              stroke={m.active ? m.color : "#a6b1bd"}
              strokeWidth="3"
            />
            <path d={`M${i ? 198 : 162} 61V78`} stroke="#879aad" strokeWidth="5" />
            {m.active ? (
              <path
                d={`M${i ? 192 : 156} 84l7-6-3 10 7-4`}
                stroke="#d59735"
                fill="none"
                strokeWidth="2"
              />
            ) : (
              <path
                d={`M${m.x - 17} 94l34 30M${m.x - 17} 124l34-30`}
                stroke="#ad6258"
                strokeWidth="3"
              />
            )}
            <Label x={m.x} y={165}>
              Magnéto {m.label}
            </Label>
          </g>
        ))}
        <Label x={180} y={24}>
          {
            [
              "Deux bougies, deux voies",
              "Panne de A : B reste active",
              "Panne de B : A reste active",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          Un cylindre · deux alimentations
        </Label>
      </>
    );
  }
  if (kind === "scooper") {
    if (step === 1)
      return (
        <>
          <path
            d="M17 148Q70 142 120 148T230 148T343 148V181H17Z"
            fill={`url(#${id}-water)`}
            stroke="#8cb9d2"
          />
          <path
            d="M37 127H320L301 145H61Z"
            fill={`url(#${id}-metal)`}
            stroke="#7d91a4"
            strokeWidth="2"
          />
          <rect
            x="136"
            y="57"
            width="99"
            height="62"
            rx="8"
            fill="#e3f0f6"
            stroke="#789eb4"
            strokeWidth="2"
          />
          <path d="M139 93Q165 86 189 93T232 93V115H139Z" fill="#89bed9" />
          <path
            d="M217 160H204V118"
            stroke="#6f91a7"
            strokeWidth="12"
            fill="none"
            strokeLinejoin="round"
          />
          <path d="M217 160H204V118" stroke="#afdaed" strokeWidth="7" fill="none" />
          <Arrow x1={280} y1={160} x2={223} y2={160} width={2.5} />
          <Arrow x1={204} y1={149} x2={204} y2={104} width={2.5} />
          <path d="M155 57V42" stroke="#8a9dac" strokeWidth="3" />
          <Arrow x1={155} y1={43} x2={155} y2={29} color="#8499aa" width={1.7} />
          <Label x={275} y={71}>
            Soute
          </Label>
          <path d="M255 76L232 83" stroke="#789eb4" />
          <Label x={180} y={201}>
            Repère de l’avion · une écope agrandie
          </Label>
          <Arrow x1={40} y1={27} x2={104} y2={27} />
          <Label x={286} y={31}>
            Coque →
          </Label>
        </>
      );
    const flight = step === 2;
    return (
      <>
        <path
          d="M17 149Q55 143 93 149T170 149T247 149T343 149V181H17Z"
          fill={`url(#${id}-water)`}
          stroke="#8cb9d2"
          strokeWidth="1.5"
        />
        <g transform={flight ? "translate(0 -31)" : "translate(0 8)"}>
          <path
            d="M56 119L42 81 53 83 78 107 237 107Q270 101 294 127Q261 143 94 137L68 130Z"
            fill="#e6c477"
            stroke="#8c7652"
            strokeWidth="1.8"
          />
          <path d="M69 131L95 143H259L294 127" fill="#b7bdbe" stroke="#7d888f" />
          <path d="M257 112L274 112 287 124H257Z" fill="#7eabc4" stroke="#66869d" />
          <path d="M99 99L197 83 240 96 152 111Z" fill="#e3be6d" stroke="#8c7652" />
          {[124, 217].map((x) => (
            <g key={x}>
              <rect
                x={x - 10}
                y="87"
                width="27"
                height="17"
                rx="6"
                fill="#9fadb7"
                stroke="#657f95"
              />
              <path d={`M${x + 19} 75v41`} stroke="#4f6b82" strokeWidth="3" />
              <circle cx={x + 19} cy="96" r="4" fill="#c9d7e0" stroke="#4f6b82" />
            </g>
          ))}
          {flight && (
            <>
              <rect x="141" y="109" width="44" height="25" rx="4" fill="#d7e9f2" stroke="#789eb4" />
              <rect x="188" y="109" width="44" height="25" rx="4" fill="#d7e9f2" stroke="#789eb4" />
              {[143, 190].map((x) => (
                <rect key={x} x={x} y={112} width="40" height={20} rx="2" fill="#7eb9d5" />
              ))}
            </>
          )}
        </g>
        {flight && (
          <>
            <Label x={286} y={128}>
              Eau
            </Label>
            <path d="M266 123L227 102" stroke="#789eb4" />
          </>
        )}
        <Arrow x1={92} y1={54} x2={171} y2={flight ? 35 : 54} />
        <Label x={251} y={45}>
          {flight ? "Charge transportée" : "Avancement →"}
        </Label>
        <Label x={180} y={201}>
          {
            [
              "La coque touche la surface",
              "Eau reçue par les écopes immergées",
              "L’écopage s’arrête, l’avion s’éloigne",
            ][step]
          }
        </Label>
      </>
    );
  }
  return null;
}
