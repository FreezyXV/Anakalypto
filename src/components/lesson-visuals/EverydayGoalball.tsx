import { Label, Line } from "./EverydayParts";
import { Material } from "./EditorialDrawings";

function GoalballPlayer({
  x,
  y,
  dive = false,
  jersey,
  attacker = false,
}: {
  x: number;
  y: number;
  dive?: boolean;
  jersey: string;
  attacker?: boolean;
}) {
  return (
    <g
      transform={`translate(${x} ${y})${dive ? " rotate(90) scale(.78)" : attacker ? "" : " rotate(180)"}`}
    >
      <ellipse cx="0" cy="5" rx={dive ? 18 : 13} ry="9" fill="#32434d" opacity=".28" />
      <path
        d={dive ? "M-1 0l-12 2h-13m25 3l-13 3-10-1" : "M-3 4l-7 9-9-2m15-4-6 10-8 0"}
        fill="none"
        stroke="#344552"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d={dive ? "M-7-6h13l7 3-2 9H-7Z" : "M-8-7H4l7 4v8L3 9H-8Z"}
        fill={jersey}
        stroke="#414f55"
        strokeWidth="1"
      />
      <path
        d={dive ? "M8-4l11-4h9m-18 10 12-2h9" : "M9-4l6-5-4-7m1 19 7-5"}
        fill="none"
        stroke="#9e7964"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      <ellipse
        cx={dive ? 15 : 12}
        cy="-1"
        rx="4.6"
        ry="4.2"
        fill="#bd967c"
        stroke="#775d52"
        strokeWidth=".9"
      />
      <path
        d={dive ? "M16-4l2 5" : "M14-4l1 6"}
        stroke="#283e48"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </g>
  );
}

export function Goalball(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-court"} colors={["#cbd8d5", "#aec3c4", "#819fa5"]} />
      </defs>
      <rect
        x="29"
        y="45"
        width="302"
        height="155"
        rx="5"
        fill={`url(#${id}-court)`}
        stroke="#4e6975"
        strokeWidth="1.8"
      />
      <path
        d="M43 51h274v143H43ZM80 51v143m37-143v143m63-143v143m63-143v143m37-143v143"
        stroke="#f4f7f1"
        strokeWidth="1.7"
        fill="none"
        opacity=".93"
      />
      <path d="M39 52h-6v142h6m283-142h6v142h-6" stroke="#354c5a" strokeWidth="2.6" fill="none" />
      <path
        d="M32 56v136m3-136v136m290-136v136m3-136v136"
        stroke="#5d777e"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      {[77, 123, 169].map((y, i) => (
        <g key={y}>
          <path
            d={`M247 ${y}h18m25 0h16`}
            stroke={step === 0 ? "#415f67" : "#dfe9e5"}
            strokeWidth={step === 0 ? 2 : 1.2}
            strokeDasharray={step === 0 ? "3 2" : undefined}
          />
          <GoalballPlayer
            x={step === 2 ? 292 : 279}
            y={y}
            dive={step === 2}
            jersey={["#745d59", "#695c72", "#5a6377"][i]!}
          />
        </g>
      ))}
      <GoalballPlayer x={72} y={129} jersey="#596855" attacker />
      {(step === 1 || step === 2) && (
        <>
          <path
            d={`M99 121q92 11 ${step === 2 ? 178 : 72} -1`}
            stroke="#fbfaf1"
            strokeWidth="2.4"
            fill="none"
            strokeDasharray="4 4"
          />
          <circle
            cx={step === 1 ? 174 : 279}
            cy="122"
            r="8"
            fill="#3f687a"
            stroke="#2e4c5a"
            strokeWidth="2"
          />
          <path
            d={step === 1 ? "M175 116l-2 11m-5-7 13 4" : "M281 116l-4 11m-4-7 12 5"}
            stroke="#8fadb4"
            strokeWidth="1.2"
          />
          {step === 1 && (
            <Line
              d="M159 108q-10 12 0 25m31-25q11 12 0 25m-35-30q-15 20 0 36m39-36q14 20 0 36"
              color="#425f69"
              width={1.3}
            />
          )}
        </>
      )}
      <Label x={180} y={225} color="#3b5662">
        {["Lignes tactiles au sol", "Ballon sonore", "Couverture latérale du but"][step]}
      </Label>
    </>
  );
}
