import { airframePlates } from "./refined/transport/airframes";
import { enginePlates } from "./refined/transport/aircraft";
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
  if (kind === "aeroengine") return enginePlates.aeroengine(step, id);
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
  if (kind === "landingbrakes") return enginePlates.landingbrakes(step, id);
  if (kind === "magnetos") return enginePlates.magnetos(step, id);
  if (kind === "scooper") return airframePlates.scooper(step, id);
  return null;
}
