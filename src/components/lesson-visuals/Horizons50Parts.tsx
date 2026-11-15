import { useId, type ReactNode } from "react";
import { HORIZONS50_DIAGRAMS } from "@/lib/lesson-visuals/horizons50";
import {
  Frame,
  Label,
  ink,
  blue,
  green,
  warm,
  gold,
  red,
  violet,
  teal,
  type DrawingProps,
} from "./Science30Parts";
export { Label, ink, blue, green, warm, gold, red, violet, teal, type DrawingProps };
export { Drop, Microbe, Wheel, Heat, Chip } from "./Exploration50Parts";
export { Tree, Sprout } from "./Batch50Parts";
export function Art({
  kind,
  step,
  id,
  foot,
  children,
}: DrawingProps & { foot: string; children: ReactNode }) {
  return (
    <Frame
      id={id}
      title={HORIZONS50_DIAGRAMS.find((s) => s.id === kind)!.steps[step]!.label}
      foot={foot}
    >
      {children}
    </Frame>
  );
}
export function Tag({
  x,
  y,
  children,
  color = ink,
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
}) {
  return (
    <Label x={x} y={y} color={color}>
      {children}
    </Label>
  );
}
export function Satellite({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-35-10h22v20h-22zm48 0h22v20H13" fill="#6d92ba" stroke={ink} />
      <path fill="none" d="M-28-10v20m7-20v20m41-20v20m7-20v20" stroke="#b4d1e9" />
      <rect x="-11" y="-13" width="22" height="26" rx="4" fill="#d8bd78" stroke={ink} />
      <path d="M-4 14q15 12 24-3M9 15l7 10" fill="none" stroke={ink} strokeWidth="2" />
    </g>
  );
}
export function Tower({ x, y, active = true }: { x: number; y: number; active?: boolean }) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      stroke={active ? blue : "#b1bec8"}
      strokeWidth="3"
      fill="none"
    >
      <path d="M0-60L-19 0H19ZM-12-20H12M-6-40H6M0-78V-55" />
      <path d="M-13-77Q-25-65-13-53M13-77Q25-65 13-53" />
    </g>
  );
}
export function Ship({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-38 0H40L29 17H-25Z" fill={ink} />
      <path d="M-19-20H13V0H-19Z" fill="#d0e2e9" stroke={ink} />
      <rect x="-10" y="-31" width="12" height="11" fill={warm} />
      <path fill="none" d="M-12-12H7" stroke={blue} strokeWidth="3" />
    </g>
  );
}
export function DotRow({
  n = 6,
  y = 115,
  color = blue,
}: {
  n?: number;
  y?: number;
  color?: string;
}) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={55 + i * 42} cy={y} r="12" fill={color} />
      ))}
    </>
  );
}
export function Box({
  x,
  y,
  w,
  h,
  children,
  color = "#e1eaf0",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children?: ReactNode;
  color?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="9" fill={color} stroke="#94aabc" strokeWidth="2" />
      {children}
    </g>
  );
}
export function Rotor({ x, y, angle = 0 }: { x: number; y: number; angle?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <circle r="31" fill="#e1edf3" stroke={blue} />
      {[0, 120, 240].map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d="M-2 0Q-28-28-14-37Q-7-38 4-7Z"
          fill="#79a8bf"
          stroke={blue}
        />
      ))}
      <circle r="7" fill={ink} />
    </g>
  );
}

export function Arrow({ d, color = blue }: { d: string; color?: string }) {
  const id = "h-arrow-" + useId().replace(/:/g, "");
  return (
    <g>
      <defs>
        <marker
          id={id}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10Z" fill={color} />
        </marker>
      </defs>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        markerEnd={`url(#${id})`}
      />
    </g>
  );
}
