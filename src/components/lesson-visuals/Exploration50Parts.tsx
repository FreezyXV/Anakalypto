import type { ReactNode } from "react";
import { EXPLORATIONS50_DIAGRAMS } from "@/lib/lesson-visuals/explorations50";
import { Frame, blue, green, gold, red, ink, Label, type DrawingProps } from "./Science30Parts";
export {
  Arrow,
  Label,
  blue,
  green,
  gold,
  red,
  violet,
  teal,
  ink,
  warm,
  type DrawingProps,
} from "./Science30Parts";
export function ArtFrame({
  kind,
  step,
  id,
  foot,
  children,
}: DrawingProps & { foot: string; children: ReactNode }) {
  const spec = EXPLORATIONS50_DIAGRAMS.find((s) => s.id === kind)!;
  return (
    <Frame id={id} title={spec.steps[step]!.label} foot={foot}>
      {children}
    </Frame>
  );
}
export function Drop({
  x,
  y,
  r = 5,
  color = blue,
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
}) {
  return (
    <path
      d={`M${x} ${y - r * 1.6}Q${x - r * 1.4} ${y} ${x - r * 0.6} ${y + r * 0.7}Q${x} ${y + r * 1.4} ${x + r * 0.6} ${y + r * 0.7}Q${x + r * 1.4} ${y} ${x} ${y - r * 1.6}`}
      fill={color}
      opacity=".8"
    />
  );
}
export function Microbe({
  x,
  y,
  color = green,
  scale = 1,
}: {
  x: number;
  y: number;
  color?: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-9" y="-4" width="18" height="8" rx="4" fill={color} />
      <path d="M-7-5l-3-4M0-5v-4M7-5l3-4M-7 5l-3 4M0 5v4M7 5l3 4" stroke={color} fill="none" />
      <circle cx="-3" r="1" fill="#e8efd9" />
      <circle cx="4" r="1" fill="#e8efd9" />
    </g>
  );
}
export function Jar({
  id,
  level = 100,
  open = false,
  color = "#c0a368",
  children,
}: {
  id: string;
  level?: number;
  open?: boolean;
  color?: string;
  children?: ReactNode;
}) {
  return (
    <g>
      <defs>
        <clipPath id={`${id}-jar`}>
          <path d="M130 69H230V84Q243 90 243 106V181Q243 192 232 192H128Q117 192 117 181V106Q117 90 130 84Z" />
        </clipPath>
      </defs>
      <path
        d="M130 69H230V84Q243 90 243 106V181Q243 192 232 192H128Q117 192 117 181V106Q117 90 130 84Z"
        fill="#f3f8fa"
        stroke="#8babb7"
        strokeWidth="2"
      />
      <g clipPath={`url(#${id}-jar)`}>
        <rect x="117" y={level} width="126" height={192 - level} fill={color} />
        {children}
      </g>
      {!open && (
        <rect x="126" y="60" width="108" height="11" rx="3" fill="#b4bec7" stroke="#738b99" />
      )}
      <path d="M123 110v58" stroke="#fff" strokeWidth="3" opacity=".6" />
    </g>
  );
}
export function Wheel({
  x,
  y,
  r = 28,
  angle = 0,
}: {
  x: number;
  y: number;
  r?: number;
  angle?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <circle r={r} fill="#425363" />
      <circle r={r * 0.67} fill="#c6d3dd" stroke="#8294a1" />
      {[0, 60, 120].map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d={`M${-r * 0.55} 0H${r * 0.55}`}
          stroke="#74889b"
          strokeWidth="3"
        />
      ))}
      <circle r="5" fill={ink} />
      <path d={`M0 ${-r + 2}v8`} stroke={gold} strokeWidth="4" />
    </g>
  );
}
export function Heat({ x, y, color = red }: { x: number; y: number; color?: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="2">
      {[-12, 0, 12].map((d) => (
        <path key={d} d={`M${x + d} ${y}q-6-7 0-14t0-14`} />
      ))}
    </g>
  );
}
export function Chip({
  x,
  y,
  w = 65,
  h = 46,
  label,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label?: string;
}) {
  return (
    <g>
      {Array.from({ length: 5 }, (_, i) => (
        <path
          key={i}
          d={`M${x + 8 + (i * (w - 16)) / 4} ${y - 7}v7m0 ${h}v7`}
          stroke="#8197a9"
          strokeWidth="3"
        />
      ))}
      <rect x={x} y={y} width={w} height={h} rx="5" fill="#4a6379" stroke="#253c52" />
      <rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx="3" fill="#78939e" />
      {label && (
        <Label x={x + w / 2} y={y + h / 2 + 6}>
          {label}
        </Label>
      )}
    </g>
  );
}
