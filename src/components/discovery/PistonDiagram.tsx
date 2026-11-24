import { useId } from "react";
import { gradient } from "../lesson-visuals/refined/material";
import { pistonState } from "@/lib/discovery/visual-state";

const INK = "#15142b";
const BLUE = "#2860c8";
const ORANGE = "#b84b17";

/** Original SVG. Timing, geometry and gas colours are illustrative, not a simulation. */
export function PistonDiagram({ value, phase }: { value: number; phase?: number }) {
  const id = `piston-cutaway-${useId().replace(/:/g, "")}`;
  const metal = `url(#${id}-metal)`;
  const darkMetal = `url(#${id}-cast)`;
  const state = pistonState(value, phase);
  const y = state.pistonY;
  const pinX = state.crankX;
  const pinY = state.crankY;
  const gas = ["#c4e9ff", "#ffe5a4", "#ffb184", "#ddd6d0"][state.phase];
  return (
    <>
      <defs>
        {gradient(id + "-metal", [
          [0, "#5a6660"],
          [0.24, "#aeb4a3"],
          [0.49, "#eae6d1"],
          [0.65, "#aeb7ad"],
          [0.9, "#7f8e89"],
          [1, "#485a55"],
        ])}
        {gradient(
          id + "-cast",
          [
            [0, "#a4aaa0"],
            [0.5, "#5e716b"],
            [1, "#485652"],
          ],
          true,
        )}
        {gradient(
          id + "-gas",
          [
            [0, gas ?? "#e6dac5"],
            [0.66, gas ?? "#e6dac5"],
            [1, "#f6ead1"],
          ],
          true,
        )}
        <pattern
          id={id + "-cut"}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <path d="M0 0v4" stroke="#404e49" strokeWidth=".65" opacity=".54" />
        </pattern>
      </defs>
      <ellipse cx="181" cy="204" rx="100" ry="5" fill="#676a61" opacity=".18" />
      <text x="180" y="17" textAnchor="middle" fill={INK} fontSize="16" fontWeight="700">
        {state.phase + 1}. {state.name}
      </text>
      <path d="M116 56 H244 V149 H232 V61 H128 V149 H116 Z" fill={metal} stroke="#536461" />
      <path
        d="M111 51l14-8h113l11 8v101l-12 9-9-10V62H132v89l-4 9-17-10Z"
        fill={darkMetal}
        stroke="#3b514e"
        strokeWidth="1.25"
      />
      <path
        d="M112 54l15-3 2 101-8 5-9-8Zm117-3h10v102l-8 8-2-11Z"
        fill={`url(#${id}-cut)`}
        opacity=".9"
      />
      <path
        d="M100 150h23l7 19 13 7 1 19-29-5-13-15Zm160 0h-26l-6 19-12 7-1 19 31-5 12-15Z"
        fill={metal}
        stroke="#40504c"
        strokeWidth="1.1"
      />
      <path
        d="M128 50h104m-117 55h9m-9 15h9m-9 16h9m113-31h9m-9 15h9m-9 16h9"
        fill="none"
        stroke="#b8c2ad"
        strokeWidth="1.05"
      />
      {[
        [117, 55],
        [244, 55],
        [117, 146],
        [243, 147],
        [108, 157],
        [252, 157],
      ].map(([x, y]) => (
        <circle
          key={`${x}:${y}`}
          cx={x}
          cy={y}
          r="2.55"
          fill="#d1ba8c"
          stroke="#50635b"
          strokeWidth=".8"
        />
      ))}
      <path
        d="M119 77 H126 M119 94 H126 M119 111 H126 M119 128 H126 M234 77 H241 M234 94 H241 M234 111 H241 M234 128 H241"
        stroke="#91a0b0"
        strokeWidth="2"
      />
      <g fill="none" strokeLinecap="round">
        <path
          d="M132 61h-24Q81 61 74 52T46 43H35M229 61h24q26 0 33-9t28-9h11"
          stroke={darkMetal}
          strokeWidth="14"
        />
        <path
          d="M132 61h-24Q81 61 74 52T46 43H35M229 61h24q26 0 33-9t28-9h11"
          stroke="#e4d8bc"
          strokeWidth="8"
        />
      </g>
      <path d="M30 35h8v17h-8Zm293 0h8v17h-8Z" fill={metal} stroke="#556862" strokeWidth="1.1" />
      <text x="20" y="84" fill={BLUE} fontSize="15">
        Admission
      </text>
      <text x="351" y="86" textAnchor="end" fill={ORANGE} fontSize="15">
        Échappement
      </text>
      <path d={`M131 56 H229 V${y} H131 Z`} fill={`url(#${id}-gas)`} />
      <path d="M128 147 V55 H232 V147" stroke={INK} strokeWidth="4" fill="none" />
      <g transform={`translate(148 ${state.intakeOpen ? 9 : 0})`}>
        <path d="M0 35v18l-12 4v3h24v-3L0 53" fill={metal} stroke="#405450" strokeWidth="1.35" />
        <path d="M-5 40l10 2-10 2 10 2-10 2" fill="none" stroke="#74664d" strokeWidth="1.02" />
        <circle cy="36" r="3.2" fill="#b0ad95" stroke="#596b62" strokeWidth=".9" />
      </g>
      <g transform={`translate(212 ${state.exhaustOpen ? 9 : 0})`}>
        <path d="M0 35v18l-12 4v3h24v-3L0 53" fill={metal} stroke="#405450" strokeWidth="1.35" />
        <path d="M-5 40l10 2-10 2 10 2-10 2" fill="none" stroke="#74664d" strokeWidth="1.02" />
        <circle cy="36" r="3.2" fill="#b0ad95" stroke="#596b62" strokeWidth=".9" />
      </g>
      <path
        d="M178 41h4v11l4 4v4l-3 4h-3v-4h-6v-4l4-4Z"
        stroke="#55665a"
        strokeWidth="1.25"
        fill="#f3edda"
      />
      <path d="M176 53h8m-8 3h8" stroke="#a5a58d" strokeWidth=".9" />
      <text x="180" y="38" textAnchor="middle" fill={INK} fontSize="15">
        Bougie
      </text>
      {state.spark && (
        <path d="M176 58 L183 64 L177 65 L184 71" stroke={ORANGE} fill="none" strokeWidth="3" />
      )}
      {state.intakeOpen && (
        <path
          d={`M94 61 H117 L112 56 M117 61 L112 66 M148 71 V${Math.min(y - 7, 90)} l-4 -4 m4 4 l4 -4`}
          stroke={BLUE}
          fill="none"
          strokeWidth="3"
        />
      )}
      {state.exhaustOpen && (
        <path
          d="M212 89 V73 L207 78 M212 73 L217 78 M243 61 H266 L261 56 M266 61 L261 66"
          stroke={ORANGE}
          fill="none"
          strokeWidth="3"
        />
      )}
      <path
        d={`M180 ${y + 7} L${pinX} ${pinY}`}
        stroke="#40534f"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d={`M180 ${y + 7} L${pinX} ${pinY}`} stroke={metal} strokeWidth="7" />
      <circle cx="180" cy="181" r="25" stroke="#6c7f93" strokeWidth="2" fill={metal} />
      <circle cx="180" cy="181" r="20" stroke="#d8d2ba" fill="none" />
      <circle cx="180" cy="181" r="14" stroke="#80968b" fill="none" />
      <circle cx="180" cy="181" r="5" stroke="#a8ad97" fill={darkMetal} />
      <path d={`M180 181 L${pinX} ${pinY}`} stroke={INK} strokeWidth="5" />
      <circle cx={pinX} cy={pinY} r="4" fill={ORANGE} />
      <g className="discovery-piston" style={{ transform: `translateY(${y}px)` }}>
        <rect
          x="132"
          y="0"
          width="96"
          height="14"
          rx="2"
          stroke={INK}
          strokeWidth="3"
          fill={metal}
        />
        <path d="M134 3h92m-92 3h92m-92 3h92" stroke="#526a61" strokeWidth=".95" />
        <path d="M142 10q8 4 18 2m38 0q11 2 20-2" stroke="#f0ead4" strokeWidth="1.15" fill="none" />
        <circle cx="180" cy="10" r="2" fill="#6c7f93" />
      </g>
      <path
        d={state.downward ? "M251 106 V126 l-5 -6 m5 6 l5 -6" : "M251 126 V106 l-5 6 m5 -6 l5 6"}
        stroke={state.phase === 2 ? ORANGE : INK}
        strokeWidth="3"
        fill="none"
      />
      <text x="260" y="116" fill={INK} fontSize="15">
        {state.downward ? "Descend" : "Monte"}
      </text>
      <text x="20" y="151" fill={INK} fontSize="15">
        Piston
      </text>
      <path d={`M76 146 L131 ${y + 7}`} stroke={INK} fill="none" />
      <text x="260" y="169" fill={INK} fontSize="15">
        Vilebrequin
      </text>
      <path d="M253 171 L204 181" stroke={INK} fill="none" />
      <text x="30" y="198" fill={INK} fontSize="15">
        {Math.round(state.crankAngle)}° / 720°
      </text>
      <text x="302" y="194" textAnchor="middle" fill={BLUE} fontSize="15">
        2 tours
      </text>
    </>
  );
}
