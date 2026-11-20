import { Callout, Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, type SceneSet } from "./EverydayParts";

const steel = "#476071",
  rust = "#9b5e36",
  green = "#427467",
  blue = "#376e8e";
const lower = "M48 139v-23l28-15 51-9 42-35h62l56 35 24 14v34H48Z";
const upper = "M135 94l39-32h54l49 32Z";
const frame = "M54 136h251v12H54Z";

function Wheel({ x, y, r = 17 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#374751" stroke="#657783" strokeWidth="1.7" />
      <circle cx={x} cy={y} r={r * 0.61} fill="#b7c3c6" stroke={steel} strokeWidth="1.3" />
      <path
        d={`M${x - r * 0.4} ${y - 1}l${r * 0.72} ${r * 0.24}m-${r * 0.13} -${r * 0.6}l-${r * 0.36} ${r * 0.69}`}
        fill="none"
        stroke="#e8ede9"
        strokeWidth="1.5"
      />
    </g>
  );
}

function Vehicle({
  id,
  shell = lower,
  outlines = false,
}: {
  id: string;
  shell?: string;
  outlines?: boolean;
}) {
  return (
    <>
      <path
        d={shell}
        fill={outlines ? "#dbe4e8" : `url(#${id}-vehicleMetal)`}
        fillOpacity={outlines ? ".4" : "1"}
        stroke={steel}
        strokeWidth="1.6"
      />
      {shell === lower && <path d={upper} fill="#c7dbe3" stroke={steel} strokeWidth="1.4" />}
      <path d={frame} fill="#8198a4" stroke={steel} />
      <Wheel x={91} y={145} />
      <Wheel x={267} y={145} />
    </>
  );
}

function VehiclePaint({ id }: { id: string }) {
  return (
    <defs>
      <Material id={id + "-vehicleMetal"} colors={["#e0e8e9", "#9eb0b8", "#718b9b"]} />
      <Hatch id={id + "-vehicleCut"} color="#405665" space={4} />
    </defs>
  );
}

function Assembly(step: number, id: string) {
  const x = [87, 158, 244][step]!;
  return (
    <>
      <defs>
        <Material id={id + "-assemblyMetal"} colors={["#d4dedc", "#83969e", "#506575"]} />
      </defs>
      <path d="M30 172h300v12H30Z" fill="#9dadb4" stroke={steel} />
      {[50, 81, 112, 143, 174, 205, 236, 267, 298].map((t) => (
        <circle key={t} cx={t} cy="178" r="3" fill="#6f858d" />
      ))}
      {[89, 176, 265].map((t, i) => (
        <g key={t}>
          <path
            d={`M${t - 13} 64h26v29h-26Z`}
            fill={i === step ? "#e1c398" : "#d8ded9"}
            stroke="#a6a491"
          />
          <Label x={t} y={85}>
            {i + 1}
          </Label>
        </g>
      ))}
      <path d={`M${x - 39} 150h78v9h-78Z`} fill={`url(#${id}-assemblyMetal)`} stroke={steel} />
      {step > 0 && <path d={`M${x - 28} 148l8-22h29l14 22Z`} fill="#b38a69" stroke={rust} />}
      {step === 2 && <path d={`M${x + 2} 125v-16h18l17 38h-12Z`} fill="#7a949e" stroke={steel} />}
      <Wheel x={x - 27} y={158} r={10} />
      <Wheel x={x + 25} y={158} r={10} />
      <Arrow x1={x - 14} y1={106} x2={x + 23} y2={106} color={rust} width={2.5} />
      <Label x={180} y={219}>
        {
          ["Le châssis avance", "Le poste ajoute un ensemble", "Le poste suivant prend le relais"][
            step
          ]
        }
      </Label>
    </>
  );
}

function CarMaterials(step: number, id: string) {
  return (
    <>
      <VehiclePaint id={id} />
      <Vehicle id={id} outlines />
      <path
        d={
          [
            "M100 134h155V96l-31-23h-48l-43 42Z",
            "M50 130v-13l31-16 51-3-18 29Z",
            "M281 100l31 13v24h-24l-11-14Z",
          ][step]
        }
        fill={["#658ea0", "#a2b9bd", "#b78d66"][step]}
        fillOpacity=".69"
        stroke={[blue, steel, rust][step]}
        strokeWidth="2.3"
      />
      {step === 0 && (
        <path
          d="M101 133h151M132 111l47-34h45l29 22v33"
          fill="none"
          stroke="#456a7b"
          strokeWidth="2.8"
        />
      )}
      <Callout
        x={step === 0 ? 173 : step === 1 ? 107 : 283}
        y={185}
        leader={["M174 167l13-34", "M106 166l-18-40", "M282 166l14-30"][step]!}
      >
        {["Structure", "Panneau léger", "Garniture"][step]!}
      </Callout>
      <Label x={180} y={214}>
        {
          [
            "L’acier forme souvent la cellule",
            "L’aluminium peut alléger une pièce",
            "Des plastiques aussi à l’extérieur",
          ][step]
        }
      </Label>
    </>
  );
}

function Platform(step: number, id: string) {
  const shell = [
    "M48 139v-15h263v15Z",
    "M48 139v-23l28-15 51-9 42-35h62l56 35 24 14v34Z",
    "M48 139v-29l22-16 42-8 40-29h93l39 21 27 16v45Z",
  ][step]!;
  return (
    <>
      <VehiclePaint id={id} />
      <Vehicle id={id} shell={shell} outlines={step > 0} />
      <path d="M56 125h247v16H56Z" fill="#859f9f" stroke={green} strokeWidth="1.7" />
      <path d="M98 129h159" stroke="#d6e0cf" strokeWidth="3" strokeDasharray="6 4" />
      <Callout x={180} y={184} leader="M180 166v-24" color={green}>
        Base commune
      </Callout>
      <Label x={180} y={215}>
        {
          [
            "Ancrages et organes réutilisables",
            "Une carrosserie basse",
            "Une carrosserie plus haute",
          ][step]
        }
      </Label>
    </>
  );
}

function Range(step: number, id: string) {
  if (step < 2)
    return (
      <>
        <VehiclePaint id={id} />
        <g transform="translate(63 39) scale(.68)">
          <Vehicle id={id} />
        </g>
        {[73, 101, 158].map((y, i) => (
          <Line
            key={y}
            color={i === 1 ? blue : "#9eb5bf"}
            width={step === 1 && i === 1 ? 4 : 2}
            d={`M27 ${y}q70 ${step === 0 ? -4 : -9} 117 0t186 0`}
          />
        ))}
        <Label x={180} y={57}>
          {step === 0 ? "110 km/h" : "130 km/h"}
        </Label>
        <Arrow x1={150} y1={174} x2={step === 0 ? 215 : 250} y2={174} color={blue} width={3} />
        <Label x={180} y={214}>
          Même voiture, même air
        </Label>
      </>
    );
  return (
    <>
      <Line d="M61 181V63m0 118h247" color={steel} width={1.5} />
      <rect x="96" y="115" width="58" height="66" fill="#94b1be" stroke={blue} />
      <rect x="204" y="89" width="58" height="92" fill="#577f94" stroke={blue} />
      <Label x={125} y={106}>
        1,00
      </Label>
      <Label x={233} y={79}>
        1,40
      </Label>
      <Label x={125} y={202}>
        110
      </Label>
      <Label x={233} y={202}>
        130
      </Label>
      <Label x={185} y={222}>
        Énergie par km liée à l’air · indice
      </Label>
    </>
  );
}

function Motor(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-magnetRotor"} colors={["#c8d4d8", "#9aabb4", "#748b98"]} />
      </defs>
      <circle cx="180" cy="119" r="74" fill="#c1ced1" stroke={steel} strokeWidth="2" />
      <circle cx="180" cy="119" r="62" fill="#ecf2f3" stroke={steel} strokeWidth="1.4" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <g key={deg} transform={`rotate(${deg} 180 119)`}>
          <path
            d="M172 51h16v22h-16Z"
            fill={step === 0 && i % 3 === 0 ? "#c5895f" : "#9aadb6"}
            stroke={steel}
          />
          <path
            d="M171 55h18m-18 5h18m-18 5h18"
            stroke={i % 2 === 0 ? "#a66d45" : "#778c98"}
            strokeWidth="1.1"
          />
        </g>
      ))}
      <g transform={`rotate(${step === 1 ? 45 : step === 2 ? 72 : 0} 180 119)`}>
        <circle
          cx="180"
          cy="119"
          r="39"
          fill={`url(#${id}-magnetRotor)`}
          stroke={steel}
          strokeWidth="1.8"
        />
        {step < 2
          ? [0, 90, 180, 270].map((deg, i) => (
              <rect
                key={deg}
                transform={`rotate(${deg} 180 119)`}
                x="166"
                y="88"
                width="28"
                height="8"
                fill={i % 2 ? "#558ba1" : "#b27356"}
                stroke={steel}
              />
            ))
          : [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <circle
                key={deg}
                transform={`rotate(${deg} 180 119)`}
                cx="180"
                cy="89"
                r="2.8"
                fill="#8b633d"
              />
            ))}
        <circle cx="180" cy="119" r="11" fill="#e9eeed" stroke={steel} />
      </g>
      <Callout x={63} y={98} leader="M88 100l18-6">
        Stator
      </Callout>
      <Callout x={289} y={153} leader="M264 145l-49-16">
        Rotor
      </Callout>
      <Label x={180} y={216}>
        {
          [
            "Les bobines créent un champ tournant",
            "Les aimants suivent le champ",
            "Exemple d’un rotor sans aimants",
          ][step]
        }
      </Label>
    </>
  );
}

function VehicleGrid(step: number, id: string) {
  return (
    <>
      <VehiclePaint id={id} />
      <g transform="translate(3 68) scale(.62)">
        <Vehicle id={id} />
      </g>
      {step === 2 ? (
        <g>
          <path
            d="M248 146h83m-63-1 14-76h9l15 76m-30-62h22m-26 15h31m-34 18h37m-34 23 23-22-20-18 17-16m6 56-23-23 23-18-22-14"
            fill="none"
            stroke={steel}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M256 84h18m25 0h24m-71 15h19m34 0h25m-81 17h19m39 0h24"
            stroke="#758e98"
            strokeWidth="1.8"
          />
        </g>
      ) : (
        <>
          <path d="M232 146V94l45-33 49 33v52Z" fill="#d3d3c2" stroke={steel} strokeWidth="1.7" />
          <path d="M225 98l52-39 55 39" fill="none" stroke="#7d7264" strokeWidth="3" />
          <rect x="267" y="108" width="25" height="24" fill="#dfc086" stroke="#9b8056" />
        </>
      )}
      <rect x="195" y="108" width="26" height="43" rx="4" fill="#a8bbc2" stroke={steel} />
      <path d="M198 128h19m-16 10h12" stroke="#647e8b" fill="none" />
      {step === 0 ? (
        <Arrow x1={258} y1={155} x2={164} y2={155} color={blue} />
      ) : (
        <Arrow x1={164} y1={155} x2={step === 1 ? 265 : 313} y2={155} color={green} />
      )}
      <Label x={180} y={191}>
        {["Recharge", "Vers la maison", "Vers le réseau"][step]}
      </Label>
      <Label x={180} y={216}>
        Véhicule et borne compatibles
      </Label>
    </>
  );
}

function EngineFeedback(step: number, id: string) {
  const pipe = "M28 142h107m96 0h99";
  return (
    <>
      <defs>
        <Material id={id + "-engineCase"} colors={["#ced9dc", "#9aadb5", "#6b8a99"]} />
      </defs>
      <path d={pipe} stroke="#a6b6bf" strokeWidth="17" />
      <Arrow x1={34} y1={142} x2={122} y2={142} color={blue} width={2.6} />
      <Arrow x1={235} y1={142} x2={324} y2={142} color={rust} width={2.6} />
      <path
        d="M133 102h102v73H133Z"
        fill={`url(#${id}-engineCase)`}
        stroke={steel}
        strokeWidth="1.5"
      />
      <path d="M160 114h49v49h-49Z" fill="#e3c396" stroke={rust} />
      <path d="M181 105v27m-8 9 8-7 7 7" fill="none" stroke={rust} strokeWidth="2.3" />
      <rect x="133" y="44" width="101" height="36" rx="5" fill="#d0dfdd" stroke={green} />
      <Label x={183} y={69}>
        Calculateur
      </Label>
      <circle cx="79" cy="142" r="6" fill={blue} />
      <circle cx="276" cy="142" r="6" fill={rust} />
      {step === 0 && <Line d="M80 135V62h52" color={blue} width={2.2} />}
      {step === 1 && <Arrow x1={183} y1={82} x2={183} y2={107} color={green} />}
      {step === 2 && <Line d="M275 136V62h-40m-52 20v23" color={rust} width={2.4} />}
      <Label x={180} y={213}>
        {
          [
            "Le débitmètre observe l’entrée",
            "Le calculateur commande l’injection",
            "La sonde permet de corriger la suite",
          ][step]
        }
      </Label>
    </>
  );
}

function Spark(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-plugShell"} colors={["#d9e0df", "#b1b9b7", "#87989b"]} />
      </defs>
      <path d="M39 142h72v31H39Z" fill="#b3c4c9" stroke={steel} />
      <path d="M56 138v-11h15v11m15 0v-7h12v7" fill="#768d96" stroke={steel} />
      <Label x={74} y={193}>
        Batterie
      </Label>
      <path
        d={step === 0 ? "M109 152h17v-39h16" : "M109 152h10v-28m13-11h10"}
        fill="none"
        stroke={step === 0 ? blue : "#8093a0"}
        strokeWidth="2.5"
      />
      <path d="M143 95h66v43h-66Z" fill="#94aab3" stroke={steel} />
      <path d="M144 101h64m-64 29h64" stroke="#cbd8d8" strokeWidth="1.5" strokeDasharray="3 2" />
      {[145, 153, 161].map((x) => (
        <Line key={x} d={`M${x} 94q-8 22 0 46`} width={2.2} color={blue} />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <Line key={i} d={`M${174 + i * 4.7} 94q-7 22 0 46`} width={1.6} color={rust} />
      ))}
      <path
        d="M207 95V67h48v62"
        fill="none"
        stroke={step === 0 ? "#a88a79" : rust}
        strokeWidth="2.5"
      />
      {step === 1 && (
        <path d="M119 124v-7m0-14v-6l11 15" fill="none" stroke={blue} strokeWidth="2.3" />
      )}
      <Label x={172} y={170}>
        Bobine
      </Label>
      <path d="M241 92h29v59l-8 13h-13l-8-13Z" fill={`url(#${id}-plugShell)`} stroke={steel} />
      <path d="M254 124v43m17-23v28h-10" fill="none" stroke={steel} strokeWidth="2.5" />
      {step === 2 && <path d="M255 166l5 1-3 5 5-2" fill="none" stroke="#b47432" strokeWidth="3" />}
      {step === 0 && <Arrow x1={124} y1={114} x2={140} y2={114} color={blue} width={2} />}
      {step === 1 && <Arrow x1={218} y1={67} x2={247} y2={67} color={rust} width={2} />}
      <Label x={294} y={189}>
        Bougie
      </Label>
      <Label x={180} y={216}>
        {
          [
            "Le primaire reçoit du courant",
            "La coupure induit une haute tension",
            "L’étincelle franchit l’intervalle",
          ][step]
        }
      </Label>
    </>
  );
}

function Steering(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-steeringRack"} colors={["#cedce0", "#9bafb8", "#6b8795"]} />
      </defs>
      <circle cx="119" cy="75" r="25" fill="none" stroke={steel} strokeWidth="6" />
      <path d="M97 75h44m-22 0v22l60 49" fill="none" stroke={steel} strokeWidth="4" />
      <path d="M70 145h221v16H70Z" fill={`url(#${id}-steeringRack)`} stroke={steel} />
      <path d="M151 145h58" stroke="#687c88" strokeDasharray="3 4" strokeWidth="3" />
      {[57, 303].map((x) => (
        <rect
          key={x}
          x={x - 10}
          y="130"
          width="20"
          height="51"
          rx="5"
          transform={`rotate(${step === 2 ? -19 : 0} ${x} 152)`}
          fill="#566b75"
          stroke={steel}
        />
      ))}
      {step > 0 && (
        <>
          <rect x="212" y="80" width="57" height="40" rx="7" fill="#b5cfca" stroke={green} />
          <path d="M240 120v25" stroke={green} strokeWidth="4" />
          <Label x={239} y={107} color={green}>
            Moteur
          </Label>
        </>
      )}
      {step === 1 && <Arrow x1={193} y1={163} x2={224} y2={163} color={green} />}
      {step === 2 && <Arrow x1={124} y1={180} x2={182} y2={180} color={blue} />}
      <Label x={180} y={214}>
        {
          [
            "Volant, colonne et crémaillère",
            "L’assistance ajoute un effort",
            "La crémaillère oriente les roues",
          ][step]
        }
      </Label>
    </>
  );
}

function Heating(step: number, id: string) {
  return (
    <>
      <VehiclePaint id={id} />
      <g transform="translate(65 53) scale(.73)">
        <Vehicle id={id} outlines />
      </g>
      <path d="M173 105h51v24h-51Z" fill="#d7a57b" stroke={rust} opacity=".8" />
      <Label x={199} y={99}>
        Habitacle
      </Label>
      {step === 0 ? (
        <>
          <path d="M46 155h35v27H46Z" fill="#a0b6be" stroke={steel} />
          <path d="M81 168q18-31 57-38" fill="none" stroke={rust} strokeWidth="2.6" />
          <path d="M138 130l8 9 8-10 8 8" fill="none" stroke={rust} strokeWidth="2.5" />
          <Label x={68} y={199}>
            Batterie
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <rect x="42" y="122" width="74" height="43" rx="8" fill="#c8dcda" stroke={green} />
          <path d="M51 140h12l6-6 8 13 8-13 9 6h11" stroke={green} strokeWidth="2.4" fill="none" />
          <Arrow x1={116} y1={141} x2={167} y2={124} color={rust} />
          <Label x={85} y={187}>
            Pompe
          </Label>
        </>
      ) : (
        <>
          <path d="M273 136h35v32h-35Z" fill="#adbec3" stroke={steel} />
          <path d="M289 141v16m-6-12 12 8" stroke={steel} strokeWidth="1.7" />
          <Arrow x1={272} y1={155} x2={232} y2={129} color={blue} />
          <Label x={288} y={192}>
            Borne
          </Label>
        </>
      )}
      <Label x={180} y={218}>
        {
          [
            "La résistance transforme l’électricité",
            "La pompe déplace de la chaleur",
            "Préchauffer pendant le branchement",
          ][step]
        }
      </Label>
    </>
  );
}

export const mobility50 = {
  movingAssembly: Assembly,
  carMaterials: CarMaterials,
  sharedPlatform: Platform,
  energyRange: Range,
  motorMagnets: Motor,
  vehicleGrid: VehicleGrid,
  engineFeedback: EngineFeedback,
  sparkCoil: Spark,
  steeringAssist: Steering,
  carCooling: Heating,
} satisfies SceneSet;
