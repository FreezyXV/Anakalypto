import { pistonState } from "@/lib/discovery/visual-state";

const INK = "#15142b";
const BLUE = "#2860c8";
const ORANGE = "#b84b17";

/** Original SVG. Timing, geometry and gas colours are illustrative, not a simulation. */
export function PistonDiagram({ value, phase }: { value: number; phase?: number }) {
  const state = pistonState(value, phase);
  const y = state.pistonY;
  const pinX = state.crankX;
  const pinY = state.crankY;
  const gas = ["#c4e9ff", "#ffe5a4", "#ffb184", "#ddd6d0"][state.phase];
  return (
    <>
      <text x="180" y="20" textAnchor="middle" fill={INK} fontSize="16" fontWeight="700">
        {state.phase + 1}. {state.name}
      </text>
      <path
        d="M133 61 H70 V43 H35 M227 61 H290 V43 H325"
        stroke={INK}
        strokeWidth="3"
        fill="none"
      />
      <text x="20" y="84" fill={BLUE} fontSize="12">
        Admission
      </text>
      <text x="258" y="84" fill={ORANGE} fontSize="12">
        Échappement
      </text>
      <path d={`M131 56 H229 V${y} H131 Z`} fill={gas} />
      <path d="M128 147 V55 H232 V147" stroke={INK} strokeWidth="4" fill="none" />
      <g transform={`translate(148 ${state.intakeOpen ? 9 : 0})`}>
        <path d="M0 39 V57 M-12 57 H12" stroke={INK} strokeWidth="4" />
      </g>
      <g transform={`translate(212 ${state.exhaustOpen ? 9 : 0})`}>
        <path d="M0 39 V57 M-12 57 H12" stroke={INK} strokeWidth="4" />
      </g>
      <path d="M176 39 H184 V56 H176 Z" stroke={INK} strokeWidth="2" fill="#fff" />
      <text x="180" y="35" textAnchor="middle" fill={INK} fontSize="12">
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
      <path d={`M180 ${y + 9} L${pinX} ${pinY}`} stroke={INK} strokeWidth="6" />
      <circle cx="180" cy="181" r="25" stroke={INK} strokeWidth="2" fill="#fff" />
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
          fill="#f9fbff"
        />
        <path d="M133 5 H227" stroke={INK} strokeWidth="2" />
      </g>
      <path
        d={state.downward ? "M251 106 V126 l-5 -6 m5 6 l5 -6" : "M251 126 V106 l-5 6 m5 -6 l5 6"}
        stroke={state.phase === 2 ? ORANGE : INK}
        strokeWidth="3"
        fill="none"
      />
      <text x="260" y="116" fill={INK} fontSize="13">
        {state.downward ? "Descend" : "Monte"}
      </text>
      <text x="20" y="151" fill={INK} fontSize="13">
        Piston
      </text>
      <path d={`M60 146 L127 ${y + 7}`} stroke={INK} fill="none" />
      <text x="246" y="177" fill={INK} fontSize="13">
        Vilebrequin
      </text>
      <path d="M240 174 L203 181" stroke={INK} fill="none" />
      <text x="82" y="198" fill={INK} fontSize="13">
        {Math.round(state.crankAngle)}° / 720°
      </text>
      <path
        d="M302 137 C324 144 324 163 302 170 C280 163 280 144 301 137 l-6 -2 m6 2 l-3 5"
        fill="none"
        stroke={BLUE}
        strokeWidth="2"
      />
      <text x="302" y="194" textAnchor="middle" fill={BLUE} fontSize="12">
        2 tours / cycle
      </text>
    </>
  );
}
