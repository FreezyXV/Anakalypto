import { Plane } from "./AeronauticsDrawings";
import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import { Satellite } from "./AstronomyDrawings";
import { windTriangle, inertialBiasDisplacement } from "@/lib/lesson-visuals/aeronautics-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (n: number) => Math.round(n * 100) / 100;
function Aircraft({
  x,
  y,
  angle = 0,
  scale = 1,
  id,
}: {
  x: number;
  y: number;
  angle?: number;
  scale?: number;
  id: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path
        d="M-3-32Q0-39 3-32L5-8 30 9 30 15 5 7 4 26 13 32 13 36 0 32-13 36-13 32-4 26-5 7-30 15-30 9-5-8Z"
        fill={`url(#${id}-metal)`}
        stroke={ink}
        strokeWidth="1.8"
      />
      <path d="M-3-23Q0-28 3-23V-16H-3Z" fill="#719fbd" />
      <path d="M0-10V27" stroke="#b0c2d5" strokeWidth="1.2" />
    </g>
  );
}
function Map({ id }: { id: string }) {
  return (
    <>
      <rect x="16" y="43" width="328" height="137" rx="13" fill="#e1eadf" stroke="#c3d1c5" />
      <path d="M19 145Q92 91 155 141T342 113" fill="none" stroke="#abd1e6" strokeWidth="13" />
      <path
        d="M23 78L132 159 198 77 340 150M75 47L119 179M243 45L278 180"
        fill="none"
        stroke="#fbfaf3"
        strokeWidth="5"
      />
      {[0, 1, 2, 3, 4].map((n) => (
        <path
          key={n}
          d={`M${42 + n * 65} 45V178M18 ${64 + n * 26}H342`}
          stroke="#9bb3a8"
          opacity=".3"
          strokeWidth=".8"
        />
      ))}
      <path
        d="M34 47L57 53 52 81 27 73ZM281 110L327 120 319 151 277 138Z"
        fill={`url(#${id}-leaf)`}
        opacity=".5"
      />
    </>
  );
}
function Recorder({
  x,
  y,
  id,
  label,
  open = false,
}: {
  x: number;
  y: number;
  id: string;
  label: string;
  open?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-44-21L-31-32H37L46-20V30H-44Z" fill="#d78342" stroke="#93572f" strokeWidth="1.5" />
      <rect x="-39" y="-22" width="78" height="46" rx="5" fill="#e8a268" stroke="#a76538" />
      <path d="M-26-27V25M26-27V25" stroke="#f2eee0" strokeWidth="5" />
      {open ? (
        <>
          <rect x="-20" y="-14" width="40" height="28" rx="4" fill="#cbd4d9" stroke={ink} />
          <rect x="-14" y="-9" width="28" height="18" rx="3" fill="#617e67" />
          {[-1, 1].map((a) => (
            <g key={a}>
              <path
                d={`M${a * 15}-4h${a * 6}M${a * 15} 2h${a * 6}`}
                stroke="#d7c589"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </>
      ) : (
        <text x="0" y="7" fontSize="18" fontWeight="700" textAnchor="middle" fill="#5e3828">
          {label}
        </text>
      )}
      <path d="M-16-34V-40H17V-34" fill="none" stroke="#6c7f91" strokeWidth="3" />
      <circle cx="43" cy="18" r="6" fill={`url(#${id}-metal)`} stroke={ink} />
    </g>
  );
}
function Paper({
  x,
  y,
  checked = false,
  id,
}: {
  x: number;
  y: number;
  checked?: boolean;
  id: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-25-34H12L26-20V35H-25Z" fill="white" stroke="#7b8fa7" strokeWidth="1.6" />
      <path d="M12-34V-20H26" fill={`url(#${id}-metal)`} stroke="#7b8fa7" />
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <rect
            x="-17"
            y={-14 + n * 15}
            width="8"
            height="8"
            rx="1"
            fill={checked ? "#d4e5cf" : "#edf2f6"}
            stroke="#7b8fa7"
          />
          {checked && (
            <path d={`M-16 ${-10 + n * 15}l2 2 4-6`} fill="none" stroke={green} strokeWidth="1.6" />
          )}
          <path d={`M-3 ${-10 + n * 15}H16`} stroke="#97a8bb" strokeWidth="2" />
        </g>
      ))}
    </g>
  );
}
export function FlightSystemsDrawing({ kind, step, id }: Props) {
  if (kind === "inertial") {
    const actual = "M52 135L300 90";
    const estimated = Array.from({ length: 21 }, (_, i) => {
      const t = i / 20;
      return `${i ? "L" : "M"}${round(52 + 248 * t)} ${round(135 - 45 * t + inertialBiasDisplacement(82, t))}`;
    }).join("");
    return (
      <>
        {step === 0 ? (
          <>
            <rect
              x="105"
              y="64"
              width="150"
              height="98"
              rx="15"
              fill={`url(#${id}-metal)`}
              stroke="#738ba5"
              strokeWidth="1.8"
            />
            <path d="M128 85H232V139H128Z" fill="#718d88" stroke="#4f6e65" />
            {[0, 1, 2].map((n) => (
              <rect
                key={n}
                x={140 + n * 27}
                y="102"
                width="16"
                height="19"
                rx="2"
                fill="#364a5c"
                stroke="#c1b581"
              />
            ))}
            <Arrow x1={180} y1={101} x2={180} y2={45} color={green} />
            <Arrow x1={180} y1={101} x2={272} y2={101} />
            <Arrow x1={180} y1={101} x2={129} y2={143} color={warm} />
            <Label x={180} y={28}>
              Accéléromètres · gyromètres
            </Label>
          </>
        ) : (
          <>
            <Map id={id} />
            <path d={actual} fill="none" stroke={blue} strokeWidth="3" strokeDasharray="5 4" />
            <path d={estimated} fill="none" stroke={warm} strokeWidth="3" />
            <Aircraft x={300} y={90} angle={80} scale={0.35} id={id} />
            {step === 2 ? (
              <>
                <Satellite x={82} y={56} id={id} />
                <Arrow x1={104} y1={65} x2={277} y2={88} dashed color={green} />
                <Arrow x1={300} y1={131} x2={300} y2={99} color={green} />
                <Dot x={300} y={90} color={green} />
              </>
            ) : (
              <Dot x={300} y={131} color={warm} />
            )}
            <Label x={180} y={29}>
              {step === 1 ? "Référence et estimation divergentes" : "Recalage par une autre source"}
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Calculer à partir des mesures",
              "Orange : un biais fictif accumulé",
              "Combiner ne rend pas infaillible",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "reckoning") {
    const f = windTriangle(178, step === 0 ? 0 : 65, step === 2);
    const o = { x: 62, y: step === 2 ? 142 : 92 },
      end = { x: o.x + f.air.x, y: o.y + f.air.y },
      result = { x: o.x + f.ground.x, y: o.y + f.ground.y };
    return (
      <>
        <Map id={id} />
        <path d={`M${o.x} ${o.y}H315`} stroke="#7c9b92" strokeDasharray="4 4" />
        <Arrow x1={o.x} y1={o.y} x2={round(end.x)} y2={round(end.y)} width={4} />
        {step > 0 && (
          <>
            <Arrow
              x1={round(end.x)}
              y1={round(end.y)}
              x2={round(result.x)}
              y2={round(result.y)}
              color={warm}
            />
            <Arrow
              x1={o.x}
              y1={o.y}
              x2={round(result.x)}
              y2={round(result.y)}
              color={green}
              dashed
              width={2.3}
            />
            <Label x={285} y={step === 2 ? 111 : 128} color={warm}>
              Vent
            </Label>
          </>
        )}
        <Aircraft
          x={124}
          y={o.y + (f.air.y / f.air.x) * 62}
          angle={90 + (Math.atan2(f.air.y, f.air.x) * 180) / Math.PI}
          scale={0.42}
          id={id}
        />
        <Dot x={o.x} y={o.y} />
        <Label x={180} y={29}>
          {
            [
              "Mouvement dans l’air = au sol",
              "Le vent décale le résultat",
              "Un cap différent de la route",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          {step === 0 ? "Distance = vitesse × temps" : "Bleu + orange = vert"}
        </Label>
      </>
    );
  }
  if (kind === "aircontrol")
    return (
      <>
        <path d="M25 172H336V182H25Z" fill="#d1ddca" />
        <rect x="29" y="158" width="91" height="11" rx="2" fill="#8494a4" />
        <path d="M34 163H115" stroke="white" strokeDasharray="8 5" />
        <path d="M39 153V125H62V153M35 125V113H66V125Z" fill={`url(#${id}-metal)`} stroke={ink} />
        <rect x="39" y="115" width="23" height="7" fill="#75a5c2" />
        <path
          d="M29 99L99 90 130 113V161H29Z"
          fill={step === 0 ? "#afd3e4" : "#dbe7ee"}
          opacity=".6"
          stroke={blue}
        />
        <path
          d="M105 74L205 57 224 88V159H105Z"
          fill={step === 1 ? "#c3dfb3" : "#dce8df"}
          opacity=".6"
          stroke={green}
        />
        <path
          d="M216 40L314 28 337 54V156H216Z"
          fill={step === 2 ? "#f0d29b" : "#e9e2d4"}
          opacity=".6"
          stroke={warm}
        />
        <path d="M265 35V156M216 96H337" stroke="#b39772" strokeDasharray="4 4" />
        <path
          d="M68 150Q129 117 165 99T296 60"
          fill="none"
          stroke={blue}
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <Aircraft
          x={[68, 165, 296][step]!}
          y={[150, 99, 60][step]!}
          angle={65}
          scale={0.38}
          id={id}
        />
        {step > 0 && (
          <Dot x={step === 1 ? 116 : 221} y={step === 1 ? 121 : 80} color={green} r={4} />
        )}
        <Label x={180} y={201}>
          {
            [
              "Tour : piste et abords",
              "Approche : arrivées et départs",
              "En route : secteurs coordonnés",
            ][step]
          }
        </Label>
        <Label x={180} y={23}>
          Transferts de contrôle coordonnés
        </Label>
      </>
    );
  if (kind === "airrates")
    return (
      <>
        <rect
          x="20"
          y="46"
          width="320"
          height="132"
          rx="15"
          fill={step === 0 ? "#f4ece1" : step === 1 ? "#e1edf4" : "#e5eddf"}
          stroke="#c6d4df"
        />
        <Label x={180} y={28}>
          OACI · données de 2024
        </Label>
        {step === 0 ? (
          <>
            <Label x={180} y={73}>
              95 accidents
            </Label>
            {Array.from({ length: 95 }, (_, n) => (
              <circle
                key={n}
                cx={47 + (n % 19) * 14.7}
                cy={90 + Math.floor(n / 19) * 12}
                r="3"
                fill={n < 10 ? warm : blue}
              />
            ))}
            <circle cx="103" cy="158" r="4" fill={warm} />
            <Label x={195} y={165}>
              dont 10 mortels
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <text x="180" y="112" textAnchor="middle" fill={blue} fontSize="46" fontWeight="700">
              37,09
            </text>
            <Label x={180} y={146}>
              millions de départs
            </Label>
          </>
        ) : (
          <>
            <Label x={87} y={83}>
              95
            </Label>
            <path d="M43 93H132" stroke={ink} strokeWidth="2" />
            <Label x={87} y={121}>
              37,09
            </Label>
            <Label x={154} y={104}>
              ≈
            </Label>
            <text x="245" y="115" textAnchor="middle" fill={green} fontSize="43" fontWeight="700">
              2,56
            </text>
            <Label x={180} y={158}>
              accidents par million de départs
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          Vols commerciaux réguliers &gt; 5 700 kg
        </Label>
      </>
    );
  if (kind === "tcas")
    return (
      <>
        <path d="M26 53H334M26 100H334M26 148H334" stroke="#b4c8d7" strokeDasharray="6 5" />
        <Plane x={90} y={100} scale={0.52} id={id} />
        <g transform="translate(269 100) scale(-1 1)">
          <Plane x={0} y={0} scale={0.52} id={id} />
        </g>
        {step === 0 ? (
          <>
            <Arrow x1={121} y1={86} x2={236} y2={86} dashed />
            <Arrow x1={236} y1={117} x2={121} y2={117} dashed color={warm} />
            <Label x={180} y={30}>
              Questions · réponses radio
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <rect
              x="228"
              y="61"
              width="82"
              height="78"
              rx="8"
              fill="#efd3a7"
              fillOpacity=".5"
              stroke={warm}
              strokeWidth="2"
            />
            <path d="M170 85L187 116H153Z" fill="#f1c76c" stroke={warm} />
            <path d="M170 95V105M170 110V112" stroke={ink} strokeWidth="2.3" />
            <Label x={180} y={30}>
              TA · alerte de trafic
            </Label>
          </>
        ) : (
          <>
            <path d="M120 99Q169 87 205 48" fill="none" stroke={green} strokeWidth="3" />
            <path d="M240 101Q200 120 157 158" fill="none" stroke={blue} strokeWidth="3" />
            <Arrow x1={183} y1={71} x2={205} y2={48} color={green} />
            <Arrow x1={179} y1={140} x2={157} y2={158} color={blue} />
            <Label x={180} y={28}>
              RA · avis coordonnés
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Surveillance entre équipements",
              "Attirer l’attention sur un trafic",
              "Vue de profil · évitement vertical",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "adsb")
    return (
      <>
        <path d="M19 158Q165 148 341 159V181H19Z" fill="#d6e1cd" />
        <Aircraft x={171} y={91} angle={80} scale={0.7} id={id} />
        <Satellite x={59} y={52} id={id} />
        <Satellite x={287} y={42} id={id} />
        {step === 0 ? (
          <>
            <Arrow x1={78} y1={58} x2={150} y2={81} dashed />
            <Arrow x1={265} y1={48} x2={188} y2={79} dashed />
          </>
        ) : (
          <>
            <path
              d="M126 64Q112 85 124 105M117 56Q96 87 115 116M216 70Q233 92 218 113M226 61Q250 92 230 123"
              fill="none"
              stroke={warm}
              strokeWidth="2"
            />
            <Arrow x1={164} y1={118} x2={119} y2={148} color={warm} />
            <Aircraft x={286} y={112} angle={-90} scale={0.35} id={id} />
            <Arrow x1={213} y1={104} x2={263} y2={109} color={warm} />
          </>
        )}
        <path
          d="M104 168L116 140 128 168M109 157H123M112 149H120"
          fill="none"
          stroke={ink}
          strokeWidth="2"
        />
        <circle cx="116" cy="139" r="3" fill={warm} />
        {step === 2 && (
          <>
            <Arrow x1={136} y1={158} x2={224} y2={158} color={green} />
            <rect x="233" y="131" width="89" height="50" rx="5" fill="#263e53" stroke="#718ba3" />
            <path
              d="M244 166L260 155 278 160 303 143M250 135V176M281 135V176M237 149H317"
              fill="none"
              stroke="#81b6bf"
              strokeWidth="1"
            />
            <Dot x={303} y={143} color="#c9dd8b" r={3} />
          </>
        )}
        <Label x={180} y={25}>
          {
            [
              "Signaux vers le récepteur",
              "Message depuis l’avion",
              "Station → traitement → affichage",
            ][step]
          }
        </Label>
        <Label x={180} y={204}>
          {step === 0 ? "Navigation satellitaire" : "Diffusion ADS-B distincte du GPS"}
        </Label>
      </>
    );
  if (kind === "recorders")
    return (
      <>
        <Recorder
          x={step === 2 ? 110 : 241}
          y={116}
          id={id}
          label={step === 0 ? "CVR" : "FDR"}
          open={step === 2}
        />
        {step === 2 ? (
          <>
            <path d="M214 67L310 73V149L214 143Z" fill="#d8e0e7" stroke="#6b819b" />
            <rect x="233" y="88" width="54" height="40" rx="4" fill="#74927d" stroke={ink} />
            <rect x="248" y="99" width="24" height="18" rx="2" fill="#263d52" />
            {[0, 1, 2, 3].map((n) => (
              <path
                key={n}
                d={`M${243 + n * 8} 96V90M${243 + n * 8} 119V126`}
                stroke="#e3cb8c"
                strokeWidth="1.4"
              />
            ))}
            <Arrow x1={162} y1={116} x2={203} y2={116} color={green} />
            <Label x={180} y={34}>
              Enveloppe et mémoire protégée
            </Label>
          </>
        ) : (
          <>
            <rect x="25" y="71" width="124" height="83" rx="9" fill="#233c51" stroke="#6d8aa4" />
            {step === 0 ? (
              <path
                d="M34 113h10l5-12 6 28 7-43 6 55 7-60 7 51 7-36 7 27 7-14h15l5-8 6 14h9"
                stroke="#e4bc85"
                strokeWidth="2"
                fill="none"
              />
            ) : (
              [0, 1, 2].map((n) => (
                <path
                  key={n}
                  d={`M34 ${95 + n * 17}q15-16 29-3t25-5t22-2t29 0`}
                  fill="none"
                  stroke={["#9ad2e5", "#e4c58a", "#a8cca1"][n]}
                  strokeWidth="2"
                />
              ))
            )}
            <Arrow x1={157} y1={113} x2={186} y2={113} color={warm} />
            <Label x={180} y={33}>
              {step === 0 ? "Sons : CVR" : "Paramètres : FDR"}
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {step === 2
            ? "Coupe fonctionnelle · forme générique"
            : "Signaux fictifs · aucune donnée réelle"}
        </Label>
      </>
    );
  if (kind === "investigation")
    return (
      <>
        {step === 0 ? (
          <>
            <Recorder x={76} y={105} id={id} label="FDR" />
            <path d="M152 130L168 67 194 73 200 134Z" fill={`url(#${id}-metal)`} stroke="#768da3" />
            <path d="M164 84L190 90M162 98L194 104" stroke="#859bb0" />
            <path
              d="M243 62H300Q315 64 315 79V107Q315 122 299 122H267L248 137 250 122H243Q231 120 231 108V78Q231 64 243 62Z"
              fill="#d9e8f2"
              stroke="#7e9cb5"
            />
            <path d="M246 83H300M246 98H289" stroke="#7696b0" strokeWidth="2" />
          </>
        ) : step === 1 ? (
          <>
            <rect x="35" y="52" width="289" height="115" rx="10" fill="#edf2f5" stroke="#b2c3d1" />
            <path d="M55 142H308" stroke="#7a92aa" strokeWidth="2" />
            {[0, 1, 2].map((n) => (
              <g key={n}>
                <Dot x={83 + n * 91} y={142} color={n === 1 ? warm : blue} />
                <path
                  d={`M${83 + n * 91} 136V${87 - (n % 2) * 15}`}
                  stroke="#8198ae"
                  strokeDasharray="3 3"
                />
                <rect
                  x={59 + n * 91}
                  y={67 - (n % 2) * 15}
                  width="48"
                  height="23"
                  rx="4"
                  fill={n === 1 ? "#f1dbb8" : "#c9dce8"}
                  stroke="#8da6bb"
                />
              </g>
            ))}
            <path
              d="M69 110Q107 95 142 107T218 107T292 89"
              fill="none"
              stroke={green}
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <Paper x={114} y={108} checked id={id} />
            <Arrow x1={153} y1={107} x2={202} y2={107} color={green} />
            <path d="M221 72H300V145H221Z" fill="#e0e8df" stroke="#7b9583" />
            <path d="M233 100L247 114 285 86" fill="none" stroke={green} strokeWidth="5" />
            <path d="M238 130H285" stroke="#8ca292" strokeWidth="3" />
          </>
        )}
        <Label x={180} y={28}>
          {
            [
              "Plusieurs sources d’information",
              "Une chronologie à confronter",
              "Des recommandations de prévention",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          {
            [
              "Données · pièces · témoignages",
              "Exemple fictif, sans accident identifié",
              "Proposer une action ≠ la réaliser",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "certification")
    return (
      <>
        {step === 0 ? (
          <>
            <Paper x={99} y={109} id={id} />
            <Paper x={251} y={109} checked id={id} />
            <Arrow x1={141} y1={108} x2={204} y2={108} />
            <Label x={99} y={172}>
              Exigences
            </Label>
            <Label x={251} y={172}>
              Programme
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <path d="M24 173H335M36 172V51M323 172V51M28 51H331" stroke="#a6b7c8" strokeWidth="5" />
            <path
              d="M43 89Q115 124 180 123Q244 124 316 89L317 99Q242 134 180 133Q115 134 43 99Z"
              fill={`url(#${id}-metal)`}
              stroke={ink}
              strokeWidth="1.6"
            />
            <path d="M168 118H192V173H168Z" fill="#9baec0" stroke={ink} />
            {[63, 108, 252, 297].map((x, n) => (
              <g key={x}>
                <path
                  d={`M${x} 158V${n === 0 || n === 3 ? 105 : 123}`}
                  stroke="#b5c1cc"
                  strokeWidth="2"
                />
                <Arrow x1={x} y1={154} x2={x} y2={n === 0 || n === 3 ? 103 : 121} color={green} />
              </g>
            ))}
            <Arrow x1={180} y1={131} x2={180} y2={169} color={warm} />
          </>
        ) : (
          <>
            <Paper x={107} y={111} checked id={id} />
            <circle cx="245" cy="110" r="39" fill="#dcebd7" stroke="#80a077" strokeWidth="2" />
            <path d="M222 109L238 125 270 92" fill="none" stroke={green} strokeWidth="5" />
            <Arrow x1={150} y1={110} x2={193} y2={110} color={green} />
          </>
        )}
        <Label x={180} y={28}>
          {
            [
              "Définir les preuves attendues",
              "Exemple : charger une voilure",
              "Examiner la conformité",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          {step === 1
            ? "Flexion agrandie · reprise des charges"
            : step === 2
              ? "Approbation de type si conformité"
              : "Base et programme de certification"}
        </Label>
      </>
    );
  return null;
}
