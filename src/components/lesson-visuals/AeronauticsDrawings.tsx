import { enginePlates } from "./refined/transport/aircraft";
import { airflowPlates } from "./refined/transport/airflow";
import { Arrow, Label, Dot, Sun, ink, blue, warm, green } from "./DrawingPrimitives";
import { machAngle, glideForces } from "@/lib/lesson-visuals/aeronautics-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const r = (n: number) => Math.round(n * 100) / 100;
const profile = "M0 0C12-32 94-29 220 0C133 8 48 9 0 0Z";
function Foil({
  x = 70,
  y = 115,
  scale = 1,
  id,
}: {
  x?: number;
  y?: number;
  scale?: number;
  id: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d={profile} fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="1.8" />
      <path d="M15-3Q70-19 187-3" fill="none" stroke="white" strokeWidth="2" />
    </g>
  );
}
export function Plane({
  x,
  y,
  angle = 0,
  id,
  scale = 1,
}: {
  x: number;
  y: number;
  angle?: number;
  id: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path
        d="M-55 5L-68-20-57-19-37 2-5 0-23-35-11-34 20 0Q45-2 57 7Q40 18-44 13L-66 17-60 8Z"
        fill={`url(#${id}-metal)`}
        stroke={ink}
        strokeWidth="1.6"
      />
      <path d="M21 3L33 2 41 6 23 7Z" fill="#769fbc" />
      {[-30, -20, -10, 0, 10].map((x) => (
        <rect key={x} x={x} y="4" width="4" height="3" rx="1" fill="#5c7f9e" />
      ))}
      <path d="M-35 11L-8 38 2 37-9 10" fill="#b4c4d5" stroke={ink} />
    </g>
  );
}
function Spiral({
  x,
  y,
  flip = false,
  small = false,
}: {
  x: number;
  y: number;
  flip?: boolean;
  small?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <path
        d={
          small
            ? "M-25 0C-21-22 15-27 22-5C29 14 5 28-9 15C-22 4-3-10 6-1C13 8 1 14-3 7"
            : "M-33 0C-27-32 22-37 33-8C43 22 6 41-14 23C-34 6-5-16 10-2C21 12 2 24-5 13C-10 6 0 2 4 7"
        }
        fill="none"
        stroke={small ? green : blue}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </g>
  );
}
function AttitudeDial({
  id,
  bank = 0,
  pitch = 0,
  x = 180,
  y = 108,
  radius = 76,
}: {
  id: string;
  bank?: number;
  pitch?: number;
  x?: number;
  y?: number;
  radius?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <defs>
        <clipPath id={`${id}-attitude`}>
          <circle r={radius} />
        </clipPath>
      </defs>
      <circle r={radius + 6} fill="#27394f" stroke="#7890aa" strokeWidth="2" />
      <g clipPath={`url(#${id}-attitude)`}>
        <g transform={`rotate(${bank}) translate(0 ${pitch})`}>
          <rect
            x={-radius * 2}
            y={-radius * 3}
            width={radius * 4}
            height={radius * 3}
            fill="#6ea4c4"
          />
          <rect x={-radius * 2} y="0" width={radius * 4} height={radius * 3} fill="#9d775b" />
          <path d={`M${-radius * 2} 0H${radius * 2}`} stroke="#edf6fc" strokeWidth="3" />
          <path
            d={`M${-radius * 0.3} ${-radius * 0.25}H${radius * 0.3}M${-radius * 0.3} ${radius * 0.25}H${radius * 0.3}`}
            stroke="white"
            opacity=".65"
            strokeWidth="1.5"
          />
        </g>
      </g>
      <path
        d={`M${-radius * 0.65} 0H${-radius * 0.2}L0 8 ${radius * 0.2} 0H${radius * 0.65}`}
        fill="none"
        stroke="#ffe49a"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle r="3" fill="#ffe49a" />
      <path d={`M-5 ${-radius + 9}L0 ${-radius + 2} 5 ${-radius + 9}Z`} fill="white" />
    </g>
  );
}
export function AeronauticsDrawing({ kind, step, id }: Props) {
  if (kind === "winglet") return airflowPlates.winglet(step, id);
  if (kind === "boundary")
    return (
      <>
        <path d="M37 151H326V169H37Z" fill={`url(#${id}-metal)`} stroke={ink} />
        <path d="M41 149Q177 107 323 76V149Z" fill="#b9dbec" opacity=".65" />
        <path d="M41 149Q177 107 323 76" fill="none" stroke="#6299b9" strokeDasharray="5 4" />
        {[145, 130, 110, 80].map((y, i) => (
          <Arrow
            key={y}
            x1={230}
            y1={y}
            x2={230 + (step === 2 ? [42, 59, 68, 70] : [15, 32, 52, 70])[i]!}
            y2={y}
            width={2.4}
          />
        ))}
        <Dot x={230} y={150} r={3} />
        {step > 0 &&
          (step === 1
            ? [0, 1, 2].map((n) => (
                <path
                  key={n}
                  d={`M90 ${143 - n * 4}Q144 ${129 - n * 6} 206 ${124 - n * 7}`}
                  fill="none"
                  stroke="#4f8faf"
                  strokeWidth="1.7"
                />
              ))
            : [0, 1, 2].map((n) => (
                <path
                  key={n}
                  d={`M102 ${142 - n * 5}q10-12 18-2t18-3t18-2t18-5t25-6`}
                  fill="none"
                  stroke="#4f8faf"
                  strokeWidth="1.7"
                />
              )))}
        <Label x={180} y={30}>
          {["Vitesse loin de la paroi", "Couches ordonnées", "Fluctuations et mélange"][step]}
        </Label>
        <Label x={180} y={201}>
          Paroi fixe · vitesse nulle au contact
        </Label>
      </>
    );
  if (kind === "transonic")
    return (
      <>
        {step > 0 && <path d="M96 93Q151 38 222 68V99Q151 76 96 93Z" fill="#f3cf99" opacity=".8" />}
        {[0, 1, 2].map((n) => (
          <path
            key={n}
            d={`M24 ${74 - n * 16}Q133 ${31 - n * 10} 221 ${63 - n * 13}Q285 ${78 - n * 14} 338 ${90 - n * 15}`}
            fill="none"
            stroke={n === 0 && step > 0 ? warm : blue}
            strokeWidth="2"
          />
        ))}
        <Foil id={id} />
        <Arrow x1={25} y1={146} x2={100} y2={146} />
        <Arrow x1={263} y1={146} x2={337} y2={146} />
        {step > 0 && (
          <>
            <path d="M222 63V102" stroke={warm} strokeWidth="4" />
            <Label x={161} y={42} color={warm}>
              Mach &gt; 1 local
            </Label>
            <path d="M250 31L223 61" stroke={warm} />
            <Label x={283} y={28} color={warm}>
              Choc
            </Label>
          </>
        )}
        {step === 0 && (
          <Label x={180} y={31}>
            Mach &lt; 1 partout ici
          </Label>
        )}
        {step === 2 && (
          <path d="M226 94q17-15 32 0t30 0t32 5" fill="none" stroke={warm} strokeWidth="2.5" />
        )}
        <Label x={180} y={201}>
          {
            [
              "Air entièrement subsonique",
              "Avion encore subsonique",
              "Séparation possible après le choc",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "sonicboom") {
    const M = [0.5, 1, 2][step]!;
    const mu = step === 2 ? machAngle(M) : 0;
    return (
      <>
        {[4, 3, 2, 1].map((age) => (
          <circle
            key={age}
            cx={255 - M * 20 * age}
            cy="103"
            r={20 * age}
            fill="none"
            stroke="#6299ba"
            strokeWidth="1.8"
            opacity={0.45 + age * 0.1}
          />
        ))}
        {step === 2 && (
          <>
            <path
              d={`M105 ${r(103 - 150 * Math.tan(mu))}L255 103 105 ${r(103 + 150 * Math.tan(mu))}`}
              fill="#d4e8f2"
              fillOpacity=".38"
              stroke={warm}
              strokeWidth="2.7"
            />
            <path d="M213 103A42 42 0 0 1 218.63 82" fill="none" stroke={warm} />
            <Label x={191} y={94} color={warm}>
              30°
            </Label>
          </>
        )}
        <path d="M241 99L270 103 241 107 247 103Z" fill={ink} />
        <Arrow x1={278} y1={103} x2={332} y2={103} />
        <Label x={180} y={27}>
          Source → Mach {String(M).replace(".", ",")}
        </Label>
        <Label x={180} y={201}>
          {step === 2 ? "Cône des petites perturbations" : "Ondes émises aux positions passées"}
        </Label>
      </>
    );
  }
  if (kind === "turboprop") return enginePlates.turboprop(step, id);
  if (kind === "sixpack") {
    const names = ["Vitesse", "Assiette", "Altitude", "Virage", "Cap", "Var. alt."];
    return (
      <>
        <rect x="18" y="12" width="324" height="184" rx="14" fill="#293b51" stroke="#7890a4" />
        {names.map((name, n) => {
          const x = 65 + (n % 3) * 115,
            y = n < 3 ? 72 : 159;
          const active = step === 2 || (step === 0 ? [0, 2, 5] : [1, 3, 4]).includes(n);
          const color = active ? (step === 1 ? "#eabb87" : "#9ed6f1") : "#96a4b8";
          return (
            <g key={name}>
              <text
                x={x}
                y={y - 37}
                fill={color}
                fontSize="18"
                textAnchor="middle"
                fontWeight="650"
              >
                {name}
              </text>
              {n === 1 ? (
                <AttitudeDial id={`${id}-mini`} x={x} y={y} radius={28} />
              ) : (
                <>
                  <circle
                    cx={x}
                    cy={y}
                    r="29"
                    fill="#162539"
                    stroke={color}
                    strokeWidth={active ? 3 : 1}
                  />
                  {[0, 60, 120, 180, 240, 300].map((a) => (
                    <path
                      key={a}
                      d={`M${x} ${y - 22}v4`}
                      transform={`rotate(${a} ${x} ${y})`}
                      stroke={color}
                    />
                  ))}
                  <path
                    d={
                      n === 3
                        ? `M${x - 18} ${y}H${x + 18}M${x} ${y}l-12-8`
                        : `M${x} ${y}l${n === 5 ? 15 : 10} ${n === 5 ? -3 : -15}`
                    }
                    stroke={active ? "#f1d69e" : "#b4bfce"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx={x} cy={y} r="3" fill={color} />
                </>
              )}
            </g>
          );
        })}
      </>
    );
  }
  if (kind === "attitude")
    return (
      <>
        <AttitudeDial id={id} bank={step === 1 ? -25 : 0} pitch={step === 2 ? 26 : 0} />
        <Label x={180} y={201}>
          {["Symbole d’avion fixe", "Avion incliné à droite", "Nez au-dessus de l’horizon"][step]}
        </Label>
      </>
    );
  if (kind === "drag") return airflowPlates.drag(step, id);
  if (kind === "windtunnel") return airflowPlates.windtunnel(step, id);
  if (kind === "flaps") return airflowPlates.flaps(step, id);
  if (kind === "glide") {
    const f = glideForces(3, 75);
    return (
      <>
        <path d="M35 178Q174 170 333 178V189H35Z" fill="#d3dfcc" />
        <path d="M70 60L310 140" stroke={blue} strokeWidth="2.5" strokeDasharray="6 4" />
        {step === 2 && (
          <>
            <path d="M70 60H310V140" fill="none" stroke="#8b9db1" strokeWidth="1.8" />
            <path d="M300 60V70H310" fill="none" stroke="#8b9db1" />
            <Label x={190} y={43}>
              Distance : 3
            </Label>
            <Label x={318} y={96}>
              1
            </Label>
          </>
        )}
        <Plane x={190} y={100} angle={(f.angle * 180) / Math.PI} scale={0.58} id={id} />
        {step === 1 && (
          <>
            <Arrow x1={190} y1={100} x2={r(190 + f.lift.x)} y2={r(100 + f.lift.y)} color={green} />
            <Arrow x1={190} y1={100} x2={r(190 + f.drag.x)} y2={r(100 + f.drag.y)} color={warm} />
            <Arrow x1={190} y1={100} x2={190} y2={175} color={ink} />
            <Label x={254} y={32} color={green}>
              Portance
            </Label>
            <Label x={112} y={87} color={warm}>
              Traînée
            </Label>
            <Label x={238} y={173}>
              Poids
            </Label>
          </>
        )}
        {step === 0 && (
          <>
            <Label x={180} y={30}>
              L’aile continue de porter
            </Label>
            <Arrow x1={249} y1={120} x2={288} y2={133} />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Descendre dans la masse d’air",
              "Trois forces en équilibre",
              "Exemple : finesse 3, air immobile",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "icing") return airflowPlates.icing(step, id);
  if (kind === "helicopter") return airflowPlates.helicopter(step, id);
  if (kind === "turbulence")
    return (
      <>
        {step === 0 ? (
          <>
            <Sun x={58} y={44} r={19} id={id} />
            <path d="M18 168H342V184H18Z" fill="#c9d9bd" />
            <path d="M81 168H173" stroke="#d8a15f" strokeWidth="8" />
            <Arrow x1={115} y1={148} x2={115} y2={69} color={warm} />
            <Arrow x1={233} y1={72} x2={233} y2={149} />
            <path
              d="M124 65Q167 39 221 65M224 155Q166 178 127 155"
              fill="none"
              stroke="#9eb5c6"
              strokeWidth="2"
            />
            <Label x={201} y={35}>
              Convection
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <path d="M17 173L92 78 153 173H343V185H17Z" fill="#a9b9b5" stroke="#6e8990" />
            <path
              d="M17 101Q93 20 155 101T251 96T343 96M18 122Q92 25 155 122T251 118T343 118"
              fill="none"
              stroke={blue}
              strokeWidth="2"
            />
            <Spiral x={187} y={151} small />
            <Arrow x1={19} y1={47} x2={62} y2={47} />
            <Label x={253} y={36}>
              Sous le vent
            </Label>
          </>
        ) : (
          <>
            <rect x="20" y="36" width="320" height="62" rx="12" fill="#d7e8f2" />
            <rect x="20" y="105" width="320" height="62" rx="12" fill="#e6edf2" />
            {[0, 1, 2].map((n) => (
              <g key={n}>
                <Arrow x1={39 + n * 102} y1={65} x2={119 + n * 102} y2={65} />
                <Arrow x1={39 + n * 102} y1={140} x2={76 + n * 102} y2={140} />
              </g>
            ))}
            <path
              d="M80 102q14-19 29 0t30 0t30 0t30 0t30 0t30 0t30 0"
              fill="none"
              stroke={warm}
              strokeWidth="2.5"
            />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Chauffage inégal du sol",
              "Onde et rotor possibles",
              "Vent différent selon la hauteur",
            ][step]
          }
        </Label>
      </>
    );
  return null;
}
