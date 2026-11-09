import type { ReactNode } from "react";

export const ink = "#263951";
export const blue = "#246fa8";
export const warm = "#bd6229";
export const green = "#477b51";
export function Label({
  x,
  y,
  children,
  color = ink,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill={color}
      textAnchor={anchor}
      fontSize="18"
      fontWeight="650"
      stroke="#f8fafc"
      strokeWidth="4"
      paintOrder="stroke"
      strokeLinejoin="round"
    >
      {children}
    </text>
  );
}
export function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = blue,
  dashed = false,
  width = 3,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  dashed?: boolean;
  width?: number;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const round = (n: number) => Math.round(n * 100) / 100;
  const points = [
    [x2, y2],
    [x2 - 9 * Math.cos(angle - 0.5), y2 - 9 * Math.sin(angle - 0.5)],
    [x2 - 9 * Math.cos(angle + 0.5), y2 - 9 * Math.sin(angle + 0.5)],
  ]
    .map((p) => p.map(round).join(","))
    .join(" ");
  return (
    <g>
      <path
        d={`M${x1} ${y1}L${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={dashed ? "5 5" : undefined}
      />
      <polygon points={points} fill={color} />
    </g>
  );
}
export function Dot({
  x,
  y,
  color = blue,
  r = 5,
}: {
  x: number;
  y: number;
  color?: string;
  r?: number;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 2} fill="white" />
      <circle cx={x} cy={y} r={r} fill={color} />
      <circle cx={x - 1} cy={y - 1} r={r * 0.3} fill="white" opacity=".7" />
    </g>
  );
}
export function Sun({ x, y, r = 21, id }: { x: number; y: number; r?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r + 9} fill="#edbd47" opacity=".12" />
      <circle r={r} fill={`url(#${id}-gold)`} stroke="#c89b36" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <path
          key={a}
          d={`M0 ${-r - 5}v-6`}
          transform={`rotate(${a})`}
          stroke="#d4a53a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}
export function Earth({ x, y, r = 32, id }: { x: number; y: number; r?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r / 32})`}>
      <circle r="32" fill={`url(#${id}-water)`} stroke={blue} strokeWidth="1.5" />
      <path
        d="M-19-23l12 5 5 12-9 7-10-4-7-12M-7 2l17 1 7 8-5 15-8-2-5-14M18-22l9 10-3 14-9-5-7-13"
        fill="#7eaf80"
        stroke="#5d9267"
        strokeWidth="1"
      />
      <ellipse rx="14" ry="31" fill="none" stroke="white" opacity=".4" />
      <path d="M-29-12h58M-32 3h64M-26 18h52" stroke="white" opacity=".4" />
    </g>
  );
}
export function Rotor({
  x,
  y,
  r = 20,
  angle = 0,
  id,
}: {
  x: number;
  y: number;
  r?: number;
  angle?: number;
  id: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <circle r={r} fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path
          key={a}
          d={`M3-3Q${r * 0.9} ${-r * 0.7} ${r * 0.8} 2L6 6Z`}
          transform={`rotate(${a})`}
          fill="#8c9eb4"
          stroke="#536d86"
          strokeWidth=".7"
        />
      ))}
      <circle r="4" fill="#fff" stroke={ink} />
    </g>
  );
}
export function Lamp({ x, y, active, id }: { x: number; y: number; active: boolean; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {active && <circle r="23" fill="#f4cc60" opacity=".25" />}
      <circle
        r="15"
        fill={active ? `url(#${id}-gold)` : `url(#${id}-metal)`}
        stroke={ink}
        strokeWidth="2"
      />
      <path d="M-7-5L7 5M-7 5L7-5M-6 15v7H6v-7" fill="none" stroke={ink} strokeWidth="2" />
    </g>
  );
}
