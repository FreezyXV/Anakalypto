import { Arrow, Line, Label, type SceneSet } from "./EverydayParts";
import { Material } from "./EditorialDrawings";

const armInWater = [
  "M213 109q10 8 12 25q-12 15-37 27q-9 4-21 3",
  "M211 111q-15 22-38 34q-14 6-35 4",
  "M215 112q27-2 51 8q17 6 39 6",
] as const;
const armInAir = [
  "M209 105q-1-16 20-35q13 4 36 21",
  "M212 104q-9-15 9-38q23-1 42 13q13 8 25 7",
  "M206 104q-9-18-28-26q-17 0-29 9",
] as const;

export const Crawl: SceneSet[string] = (step, id) => (
  <>
    <defs>
      <Material id={id + "-poolCut"} colors={["#d4e8ed", "#a2c8d8", "#c0dde6"]} />
      <Material id={id + "-swimmerTextile"} colors={["#6f96a6", "#3d6377", "#2c4e62"]} />
      <Material id={id + "-swimmerSkin"} colors={["#edd3b5", "#c89670", "#a9765d"]} />
    </defs>
    <path
      d="M18 115q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 44 0v81H18Z"
      fill={`url(#${id}-poolCut)`}
      stroke="#93b8ca"
      strokeWidth="1.1"
    />
    <Line d="M20 178q51-8 104 0t100 0 114 0m-312 12 89-1m144-3 71-3" color="#d8eced" width={1.25} />
    <path
      d="M143 116q-33-10-56-7l-30 10-25 4q-7 7 5 8l23-4 34-7 48 10Z"
      fill="#a78370"
      stroke="#7c675c"
      strokeWidth="1.4"
    />
    <path
      d="M145 117q-27 1-55 17l-29 8-25 1q-5 7 6 9l24-2 31-8 50-10Z"
      fill={`url(#${id}-swimmerSkin)`}
      stroke="#8d715f"
      strokeWidth="1.5"
    />
    <path
      d="M129 113q28-11 49-8l33-4 23 5 1 14q-19 7-41 10l-64 4q-3-10-1-21Z"
      fill={`url(#${id}-swimmerTextile)`}
      stroke="#355467"
      strokeWidth="1.5"
    />
    <Line d="M140 121q45-4 85-11m-81 19 36-3" color="#80a5b2" width={1.3} />
    <path
      d="M224 107q11-18 29-16 14 1 17 13l8 11-7 3-4 11-21-1-14-7Z"
      fill={`url(#${id}-swimmerSkin)`}
      stroke="#7b665e"
      strokeWidth="1.5"
    />
    <path
      d="M235 105q3-14 18-14 12 1 16 10l-7 6-16 3-8 8Z"
      fill="#56798e"
      stroke="#3f6177"
      strokeWidth="1.5"
    />
    <path d="M242 108l20 3 7-3 1 6-9 5-14-4Z" fill="#3b5664" stroke="#ced8d8" strokeWidth="1.1" />
    <Line d="M18 115q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 44 0" color="#5f96b0" width={1.6} />
    <path
      d={armInWater[step]}
      fill="none"
      stroke="#566f7d"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d={armInWater[step]}
      fill="none"
      stroke="#a1b7b5"
      strokeWidth="10.5"
      strokeLinecap="round"
    />
    <path
      d={armInAir[step]}
      fill="none"
      stroke="#956c59"
      strokeWidth="13.5"
      strokeLinecap="round"
    />
    <path d={armInAir[step]} fill="none" stroke="#ddaf87" strokeWidth="10" strokeLinecap="round" />
    {step === 0 && <Arrow x1={174} y1={176} x2={115} y2={176} color="#346a89" width={2.7} />}
    {step === 1 && <Arrow x1={254} y1={48} x2={280} y2={65} color="#995b37" width={2.5} />}
    {step === 2 && <Arrow x1={259} y1={159} x2={314} y2={159} color="#326d6e" width={2.7} />}
    <Label x={180} y={220}>
      {
        [
          "Appui et traction sous l’eau",
          "Retour du bras hors de l’eau",
          "L’autre bras entre dans l’eau",
        ][step]
      }
    </Label>
  </>
);
