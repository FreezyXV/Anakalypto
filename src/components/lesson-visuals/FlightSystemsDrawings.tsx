import { operationsPlates } from "./refined/transport/operations";
import { airframePlates } from "./refined/transport/airframes";
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
  if (kind === "aircontrol") return operationsPlates.aircontrol(step, id);
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
  if (kind === "adsb") return airframePlates.adsb(step, id);
  if (kind === "recorders") return airframePlates.recorders(step, id);
  if (kind === "investigation") return operationsPlates.investigation(step, id);
  if (kind === "certification") return operationsPlates.certification(step, id);
  return null;
}
