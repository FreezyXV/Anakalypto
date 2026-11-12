import { Arrow, Label, blue } from "./DrawingPrimitives";
import type { ReactNode } from "react";

export function WorkshopPaints({ id }: { id: string }) {
  return (
    <>
      <rect
        x="1"
        y="1"
        width="358"
        height="228"
        rx="20"
        fill={`url(#${id}-surface)`}
        stroke="#dce4ee"
      />
      <defs>
        <linearGradient id={`${id}-timber`} x2=".3" y2="1">
          <stop stopColor="#e6ca99" />
          <stop offset=".5" stopColor="#b68b57" />
          <stop offset="1" stopColor="#8b643d" />
        </linearGradient>
        <linearGradient id={`${id}-copper`} x2=".4" y2="1">
          <stop stopColor="#efceb0" />
          <stop offset=".5" stopColor="#c88859" />
          <stop offset="1" stopColor="#a66c46" />
        </linearGradient>
        <linearGradient id={`${id}-clay`} x2=".8" y2=".8">
          <stop stopColor="#eee3d0" />
          <stop offset="1" stopColor="#bfab8e" />
        </linearGradient>
        <pattern id={`${id}-stone`} width="26" height="14" patternUnits="userSpaceOnUse">
          <rect width="26" height="14" fill="#d6cdbb" />
          <path d="M0 0H26M0 14H26M13 0V7M0 7H26M4 7V14M22 7V14" stroke="#b8ae99" strokeWidth="1" />
        </pattern>
        <pattern id={`${id}-wool`} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#f1dc9c" />
          <path d="M0 4Q3 0 5 5T10 4M1 9Q4 5 8 9" stroke="#d8ba61" strokeWidth=".8" fill="none" />
        </pattern>
      </defs>
    </>
  );
}
export function Panel({
  x,
  y,
  w,
  h,
  color = "#e3edf3",
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;
  children?: ReactNode;
}) {
  return (
    <g>
      <rect x={x + 2} y={y + 3} width={w} height={h} rx="8" fill="#324d65" opacity=".07" />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={color}
        stroke="#a7bbc9"
        strokeWidth="1.4"
      />
      {children}
    </g>
  );
}
export function Title({ children }: { children: ReactNode }) {
  return (
    <Label x={180} y={25}>
      {children}
    </Label>
  );
}
export function Foot({ children }: { children: ReactNode }) {
  return (
    <Label x={180} y={223}>
      {children}
    </Label>
  );
}
export function Shaft({
  d,
  color = "#8b755b",
  width = 7,
}: {
  d: string;
  color?: string;
  width?: number;
}) {
  return (
    <g>
      <path d={d} stroke="#344b60" strokeWidth={width + 2} fill="none" strokeLinecap="round" />
      <path d={d} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" />
    </g>
  );
}
export function Gear({
  x,
  y,
  r = 24,
  angle = 0,
  id,
}: {
  x: number;
  y: number;
  r?: number;
  angle?: number;
  id: string;
}) {
  const points = Array.from({ length: 48 }, (_, i) => {
    const a = (i * Math.PI) / 24,
      radius = r * (i % 4 < 2 ? 1 : 0.85);
    return `${Math.round(radius * Math.cos(a) * 100) / 100},${Math.round(radius * Math.sin(a) * 100) / 100}`;
  }).join(" ");
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <polygon points={points} fill={`url(#${id}-timber)`} stroke="#886841" strokeWidth="1.4" />
      <circle r={r * 0.67} fill="#d4b583" stroke="#96784f" />
      {[0, 90, 180, 270].map((a) => (
        <ellipse
          key={a}
          cx={r * 0.43}
          rx={r * 0.14}
          ry={r * 0.1}
          transform={`rotate(${a})`}
          fill="#927249"
        />
      ))}
      <circle r="4" fill="#59687a" stroke="#eee8d6" />
    </g>
  );
}
export function Turn({
  x,
  y,
  r = 22,
  clockwise = true,
  color = blue,
}: {
  x: number;
  y: number;
  r?: number;
  clockwise?: boolean;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) ${clockwise ? "" : "scale(-1 1)"}`}>
      <path
        d={`M${-r} 0A${r} ${r} 0 1 1 ${r * 0.55} ${r * 0.84}`}
        fill="none"
        stroke={color}
        strokeWidth="2.4"
      />
      <path
        d={`M${r * 0.55 - 1} ${r * 0.84 - 9}l-2 11 10-4`}
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </g>
  );
}
export function Tank({
  x,
  y,
  w = 50,
  h = 68,
  color = "#9acbe8",
  id,
  level = 0.7,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  color?: string;
  id: string;
  level?: number;
}) {
  const surface = y + h * (1 - level);
  return (
    <g>
      <path
        d={`M${x} ${y + 6}V${y + h - 5}Q${x + w / 2} ${y + h + 8} ${x + w} ${y + h - 5}V${y + 6}Z`}
        fill={`url(#${id}-metal)`}
        stroke="#8399aa"
        strokeWidth="1.5"
      />
      <path
        d={`M${x + 3} ${surface}V${y + h - 6}Q${x + w / 2} ${y + h + 4} ${x + w - 3} ${y + h - 6}V${surface}Z`}
        fill={color}
        opacity=".85"
      />
      <ellipse
        cx={x + w / 2}
        cy={surface}
        rx={w / 2 - 3}
        ry="5"
        fill={color}
        stroke="#fff"
        opacity=".8"
      />
      <ellipse
        cx={x + w / 2}
        cy={y + 6}
        rx={w / 2}
        ry="7"
        fill={`url(#${id}-metal)`}
        stroke="#8399aa"
      />
      <path d={`M${x + 7} ${y + 17}V${y + h - 12}`} stroke="white" strokeWidth="2" opacity=".7" />
    </g>
  );
}
export function Bolt({
  x,
  y,
  color = "#c0902c",
  size = 1,
}: {
  x: number;
  y: number;
  color?: string;
  size?: number;
}) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${size})`}
      d="M3-16L-10 3H0L-3 17 11-4H1Z"
      fill={color}
      stroke="white"
      strokeWidth="1.2"
    />
  );
}
export function Heat({
  x,
  y,
  count = 3,
  color = "#bd6229",
}: {
  x: number;
  y: number;
  count?: number;
  color?: string;
}) {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M${x + i * 12} ${y}q-5-6 0-12t0-12`}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}
export function House({
  x,
  y,
  id,
  scale = 1,
}: {
  x: number;
  y: number;
  id: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cy="52" rx="53" ry="4" fill="#718a9e" opacity=".12" />
      <path
        d="M-45-5V49H45V-5L0-37Z"
        fill={`url(#${id}-clay)`}
        stroke="#9c8c77"
        strokeWidth="1.6"
      />
      <path
        d="M-53-2L0-43 53-2"
        fill="none"
        stroke="#8a6b53"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path d="M-48 1L0-35 48 1" fill="none" stroke="#c29c74" strokeWidth="2" />
      <rect x="10" y="15" width="22" height="34" rx="2" fill="#ae8b61" stroke="#826d51" />
      <rect x="-32" y="11" width="27" height="22" fill={`url(#${id}-water)`} stroke="#897e6d" />
      <path d="M-18 12V32M-31 22H-6" stroke="white" strokeWidth="2" />
      <circle cx="27" cy="33" r="1.5" fill="#e9d6a1" />
    </g>
  );
}
export function GridTower({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <path
        d="M-21 41L0-44 21 41M-14 21H14M-9 1H9M-21 41L11 7-7-19M21 41L-11 7 7-19M-28-17H28M-21-30H21"
        fill="none"
        stroke="#7d96aa"
        strokeWidth="2.5"
      />
      <path d="M-27-17v10M27-17v10M-20-30v9M20-30v9" stroke="#b68e5a" strokeWidth="3" />
    </g>
  );
}
export function Meules({
  x,
  y,
  id,
  active = false,
}: {
  x: number;
  y: number;
  id: string;
  active?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-43 7V19A43 11 0 0 0 43 19V7" fill="#a9a49a" stroke="#7e817e" />
      <ellipse cy="7" rx="43" ry="11" fill="#d8d3c5" stroke="#8c8b81" />
      <path d="M-43-20V-9A43 11 0 0 0 43-9V-20" fill="#beb8aa" stroke="#8b887c" />
      <ellipse cy="-20" rx="43" ry="11" fill={`url(#${id}-clay)`} stroke="#8b887c" />
      {[-28, -14, 0, 14, 28].map((v) => (
        <path key={v} d={`M${v} -27l8 13`} stroke="#a2957f" />
      ))}
      <ellipse cy="-20" rx="7" ry="3.5" fill="#675e50" />
      <path d="M-21-57H21L8-35H-8Z" fill={`url(#${id}-timber)`} stroke="#9c7d50" />
      <path d="M-13-54H13L0-38Z" fill="#e6ca7f" />
      {active && (
        <>
          <Arrow x1={0} y1={-35} x2={0} y2={-22} color="#bd6229" />
          <Arrow x1={9} y1={-3} x2={40} y2={2} color="#bd6229" />
          <path d="M38 7l13 13v11H32" stroke="#b29163" fill="none" strokeWidth="3" />
          <path d="M32 29l21 3 5 23H25Z" fill="#e7d5a8" stroke="#b4a07a" />
          <path
            d="M-32-20A32 8 0 1 1 20-14M20-14L14-19M20-14L13-12"
            fill="none"
            stroke={blue}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </g>
  );
}
