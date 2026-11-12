import type { ReactNode } from "react";
export {
  Scene as Frame,
  Arrow,
  Label,
  ink,
  blue,
  green,
  warm,
  type DrawingProps,
} from "./Batch50Parts";
export const red = "#b85b67",
  gold = "#b58b32",
  violet = "#826b9d",
  teal = "#4c9395";
export function Atom({
  x,
  y,
  element,
  r = 12,
}: {
  x: number;
  y: number;
  element: string;
  r?: number;
}) {
  const colors: Record<string, string> = {
    C: "#667c8e",
    H: "#eff5f8",
    O: "#d18d91",
    Zn: "#b9c9d3",
    Cu: "#cf9b73",
  };
  return (
    <g data-element={element} transform={`translate(${x} ${y})`}>
      <circle r={r} fill={colors[element] ?? "#c8b3d1"} stroke="#536777" strokeWidth="1.4" />
      <text
        y="5"
        textAnchor="middle"
        fontSize="18"
        fontWeight="650"
        fill={element === "C" ? "white" : "#263951"}
      >
        {element}
      </text>
    </g>
  );
}
export function Panel({
  x = 25,
  y = 65,
  w = 310,
  h = 126,
  children,
}: {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  children?: ReactNode;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="15" fill="#e8eff3" stroke="#b4c3ce" />
      {children}
    </g>
  );
}
export function Beetle({
  x,
  y,
  dark = false,
  opacity = 1,
}: {
  x: number;
  y: number;
  dark?: boolean;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`} opacity={opacity}>
      <path
        d="M-7-7l-7-5m7 12-9 1m10 6-8 7M7-7l7-5M7 0l9 1M6 6l8 7"
        fill="none"
        stroke="#506247"
        strokeWidth="2"
      />
      <ellipse rx="9" ry="12" fill={dark ? "#5b644c" : "#d9c17e"} stroke="#536046" />
      <path d="M0-11v21" stroke="#536046" />
      <circle cy="-14" r="5" fill={dark ? "#536046" : "#bca169"} />
    </g>
  );
}
export function Plant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 17V-23M0 0l-13-11M0-9l13-12" stroke="#477b51" strokeWidth="3" />
      <path
        d="M-1-6C-23-6-25-24-12-21Q-2-19-1-6M1-16C1-35 25-34 21-21Q17-12 1-16"
        fill="#93b77f"
        stroke="#5c8553"
      />
    </g>
  );
}
export function Bird({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse rx="18" ry="11" fill="#b1b4a1" stroke="#647365" />
      <circle cx="13" cy="-11" r="8" fill="#b1b4a1" stroke="#647365" />
      <path
        d="M20-13l12 3-12 3M-16-2l-16-9 6 13M-1 10v10m10-12v12"
        fill="#caa369"
        stroke="#647365"
      />
      <circle cx="16" cy="-13" r="1.7" fill="#263951" />
      <path d="M-9-4Q2-12 12-1Q-1 12-9-4" fill="#849b91" />
    </g>
  );
}
export function DNA({ x, y, w = 40, h = 28 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke={violet} strokeWidth="2">
      <path
        d={`M0 0C${w * 0.3} ${-h} ${w * 0.7} ${h} ${w} 0M0 0C${w * 0.3} ${h} ${w * 0.7} ${-h} ${w} 0`}
      />
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((t) => (
        <path
          key={t}
          d={`M${t * w} ${Math.sin(t * Math.PI * 2) * h * 0.28}v${-Math.sin(t * Math.PI * 2) * h * 0.56}`}
        />
      ))}
    </g>
  );
}
