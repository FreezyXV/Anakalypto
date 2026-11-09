import { Arrow, Label, Sun, Dot, Rotor, Lamp, ink, blue, warm } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };

export function EnergyDrawing({ kind, step, id }: Props) {
  if (kind === "solar")
    return (
      <>
        <Sun x={61} y={51} id={id} />
        {[0, 1, 2].map((n) => (
          <Arrow key={n} x1={79 + n * 8} y1={66} x2={116 + n * 28} y2={92} color="#c39630" />
        ))}
        <path d="M45 112H249V151H45Z" fill="#c5dbf4" stroke={blue} strokeWidth="2" />
        <path d="M45 112H249V130H45Z" fill="#7da9d4" />
        <path d="M45 130H249" stroke="white" strokeWidth="3" strokeDasharray="5 4" />
        <path
          d="M57 113V104H260V64H309V110M57 150V169H309V141"
          fill="none"
          stroke={ink}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {step < 2 && (
          <>
            <path d="M277 64H296" stroke="#f3f7fb" strokeWidth="9" />
            <path d="M277 64L295 52" stroke={ink} strokeWidth="2" />
          </>
        )}
        <Lamp x={309} y={125} active={step === 2} id={id} />
        {step > 0 && (
          <>
            <Arrow x1={173} y1={147} x2={173} y2={116} />
            <Dot x={154} y={120} />
            <Dot x={154} y={144} color={warm} />
            <Label x={226} y={69}>
              Jonction
            </Label>
            <path d="M223 75L218 126" stroke={ink} />
          </>
        )}
        {step === 2 && <Arrow x1={269} y1={64} x2={294} y2={64} color={warm} />}
        <Label x={139} y={193}>
          {["Lumière reçue", "Charges séparées", "Circuit fermé"][step]}
        </Label>
      </>
    );
  if (kind === "wind")
    return (
      <>
        <path d="M18 175Q80 158 168 177T344 174" fill="none" stroke="#a8bfa7" strokeWidth="3" />
        <path
          d="M114 175L122 71H130L138 175Z"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="1.5"
        />
        <rect
          x="126"
          y="60"
          width="85"
          height="29"
          rx="10"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M128 73H181" stroke="#b78a37" strokeWidth="6" />
        <g transform={`translate(125 73) rotate(${step * 35})`}>
          {[0, 120, 240].map((a) => (
            <path
              key={a}
              d="M-4 0Q-7-21 1-51Q6-56 7-46L6-3Z"
              transform={`rotate(${a})`}
              fill="#f8fafc"
              stroke={ink}
              strokeWidth="1.5"
            />
          ))}
          <circle r="7" fill={`url(#${id}-gold)`} stroke={ink} />
        </g>
        {[45, 95, 136].map((y) => (
          <Arrow key={y} x1={20} y1={y} x2={70} y2={y} color={blue} />
        ))}
        {step > 0 && (
          <>
            <Rotor x={181} y={75} r={15} angle={step * 35} id={id} />
            <path
              d="M181 90V155H293"
              fill="none"
              stroke={step === 2 ? warm : ink}
              strokeWidth="3"
            />
            <Label x={264} y={49}>
              Génératrice
            </Label>
            <path d="M239 56L196 67" stroke={ink} />
          </>
        )}
        {step === 2 && <Lamp x={309} y={155} active id={id} />}
        <Label x={98} y={199}>
          Vent → rotation
        </Label>
        <Label x={281} y={199}>
          {step === 2 ? "→ électricité" : "Nacelle"}
        </Label>
      </>
    );
  if (kind === "hydro")
    return (
      <>
        <path d="M15 78H139L158 171H15Z" fill={`url(#${id}-water)`} />
        {[95, 112, 130].map((y) => (
          <path key={y} d={`M18 ${y}h94`} stroke="#a0cbe2" strokeWidth="1" />
        ))}
        <path
          d="M125 53H146L192 173H125Z"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        <path
          d="M76 118H147Q164 118 173 141L186 162H234"
          fill="none"
          stroke={ink}
          strokeWidth="17"
          strokeLinejoin="round"
        />
        <path
          d="M76 118H147Q164 118 173 141L186 162H234"
          fill="none"
          stroke="#9acbe8"
          strokeWidth="12"
        />
        <path d="M234 162H345V186H236Z" fill={`url(#${id}-water)`} />
        <Rotor x={220} y={162} r={20} angle={step * 35} id={id} />
        <path d="M220 141V110H272" stroke={ink} strokeWidth="5" fill="none" />
        <rect
          x="263"
          y="90"
          width="60"
          height="39"
          rx="8"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        <Label x={293} y={116} color={step === 2 ? warm : ink}>
          G
        </Label>
        <Label x={66} y={53}>
          Retenue
        </Label>
        <Label x={285} y={58}>
          Génératrice
        </Label>
        {step > 0 && (
          <>
            <Arrow x1={95} y1={118} x2={135} y2={118} />
            <Arrow x1={247} y1={173} x2={309} y2={173} />
          </>
        )}
        {step === 2 && <Arrow x1={324} y1={110} x2={345} y2={110} color={warm} />}
        <Label x={196} y={200}>
          Eau → turbine → arbre
        </Label>
      </>
    );
  if (kind === "heatpump")
    return (
      <>
        <rect x="19" y="50" width="101" height="113" rx="15" fill="#e2f1f9" />
        <path
          d="M253 68L295 34 337 68V164H253Z"
          fill="#f9ead8"
          stroke="#c5aa8c"
          strokeWidth="1.5"
        />
        <path
          d="M75 109V66H291V126H75V109"
          fill="none"
          stroke="#b1c5d6"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M75 109V66H178"
          fill="none"
          stroke={step === 0 ? blue : "#7897ac"}
          strokeWidth="4"
        />
        <path
          d="M202 66H291V126H197"
          fill="none"
          stroke={step > 0 ? warm : "#7897ac"}
          strokeWidth="4"
        />
        <path d="M178 126H75V109" fill="none" stroke={blue} strokeWidth="4" />
        {[74, 87, 100, 113, 126].map((y) => (
          <g key={y}>
            <path d={`M64 ${y}h22`} stroke={blue} strokeWidth="3" />
            <path d={`M279 ${y}h24`} stroke={warm} strokeWidth="3" />
          </g>
        ))}
        <circle cx="189" cy="66" r="16" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="2" />
        <path d="M180 73L199 66 180 59Z" fill={step === 1 ? warm : ink} />
        <path d="M181 119L197 133M181 133L197 119" stroke={ink} strokeWidth="3" />
        <Label x={70} y={190}>
          Dehors
        </Label>
        <Label x={293} y={190}>
          Dedans
        </Label>
        <Label x={189} y={25}>
          Électricité
        </Label>
        <Arrow x1={189} y1={31} x2={189} y2={46} color={warm} />
        {step === 0 && <Arrow x1={28} y1={101} x2={59} y2={101} color={warm} />}
        {step === 2 && <Arrow x1={308} y1={100} x2={335} y2={100} color={warm} />}
        <Label x={188} y={166}>
          {step === 1 ? "Compression" : "Circuit fermé"}
        </Label>
      </>
    );
  if (kind === "battery") {
    const charge = step === 2;
    return (
      <>
        <rect
          x="40"
          y="76"
          width="280"
          height="103"
          rx="12"
          fill="#ecf2f7"
          stroke={ink}
          strokeWidth="2"
        />
        <rect x="61" y="87" width="44" height="81" rx="5" fill="#7f9cac" />
        <rect x="255" y="87" width="44" height="81" rx="5" fill="#c48c62" />
        <rect
          x="173"
          y="82"
          width="14"
          height="91"
          fill="#fff"
          stroke="#93abbc"
          strokeDasharray="3 3"
        />
        <path
          d={charge ? "M83 87V41H156M204 41H278V87" : "M83 87V41H165M195 41H278V87"}
          fill="none"
          stroke={ink}
          strokeWidth="3"
        />
        {charge ? (
          <>
            <rect x="156" y="25" width="48" height="33" rx="7" fill="#e7edf4" stroke={ink} />
            <Label x={180} y={47}>
              ±
            </Label>
          </>
        ) : (
          <Lamp x={180} y={41} active={true} id={id} />
        )}
        <Label x={83} y={108}>
          −
        </Label>
        <Label x={278} y={108}>
          +
        </Label>
        {[0, 1, 2].map((i) => (
          <Dot key={i} x={charge ? 226 - i * 28 : 125 + i * 28} y={137} />
        ))}
        <Arrow x1={charge ? 230 : 122} y1={157} x2={charge ? 122 : 230} y2={157} />
        <Label x={180} y={121} color={blue}>
          Li⁺
        </Label>
        <Arrow x1={charge ? 143 : 110} y1={41} x2={charge ? 110 : 143} y2={41} color={warm} />
        <Label x={115} y={25} color={warm}>
          e⁻
        </Label>
        <Label x={180} y={199}>
          {charge ? "Charge : trajets inversés" : "Ions dedans · e⁻ dehors"}
        </Label>
        {step === 1 && (
          <path d="M80 63H151M210 63H281" stroke={warm} strokeWidth="3" strokeDasharray="4 4" />
        )}
      </>
    );
  }
  if (kind === "induction")
    return (
      <>
        <path d="M166 128V171H306V124" fill="none" stroke={ink} strokeWidth="3" />
        <g transform={`translate(${step === 1 ? 29 : 0} 0)`}>
          <rect
            x="25"
            y="86"
            width="105"
            height="42"
            rx="5"
            fill="#c8dfef"
            stroke={ink}
            strokeWidth="2"
          />
          <path d="M25 91a5 5 0 015-5h47v42H30a5 5 0 01-5-5Z" fill="#c67666" />
          <Label x={51} y={113} color="white">
            N
          </Label>
          <Label x={103} y={113}>
            S
          </Label>
        </g>
        <path d="M161 129V88" stroke="#b68c42" strokeWidth="3" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <ellipse
            key={i}
            cx={169 + i * 9}
            cy="107"
            rx="8"
            ry="28"
            fill="none"
            stroke="#b2813c"
            strokeWidth="3"
          />
        ))}
        <path d="M215 129V171" stroke="#b2813c" strokeWidth="3" />
        <circle cx="306" cy="105" r="29" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="2" />
        <path d="M285 105A21 21 0 01327 105" fill="none" stroke="#8aa0b3" strokeWidth="1.5" />
        <path
          d={step === 0 ? "M306 114V88" : step === 1 ? "M306 114L323 95" : "M306 114L289 95"}
          stroke={step === 0 ? ink : warm}
          strokeWidth="3"
        />
        <circle cx="306" cy="114" r="3" fill={ink} />
        {step > 0 && (
          <Arrow
            x1={step === 1 ? 53 : 121}
            y1={64}
            x2={step === 1 ? 121 : 53}
            y2={64}
            color={warm}
          />
        )}
        <Label x={84} y={194}>
          Aimant
        </Label>
        <Label x={194} y={194}>
          Bobine
        </Label>
        <Label x={305} y={53}>
          Mesure
        </Label>
      </>
    );
  return null;
}
