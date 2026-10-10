import type { ReactNode } from "react";
import type { MechanismState } from "@/lib/discovery/mechanisms";
export type DiagramProps = { state: MechanismState };
export const C = {
  ink: "#15142b",
  blue: "#2860c8",
  orange: "#b85c16",
  green: "#267749",
  muted: "#697789",
  yellow: "#ffc83d",
  water: "#a8d9f4",
};
export function Label({
  x,
  y,
  children,
  color = C.ink,
  size = 14,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
  size?: number;
  anchor?: "middle" | "start" | "end";
}) {
  return (
    <text x={x} y={y} fill={color} stroke="none" textAnchor={anchor} fontSize={Math.max(14, size)}>
      {children}
    </text>
  );
}
export function Title({ children }: { children: ReactNode }) {
  return (
    <text x="180" y="24" fill={C.ink} textAnchor="middle" fontSize="16" fontWeight="700">
      {children}
    </text>
  );
}
export function Arrow({
  x,
  y,
  dx,
  dy,
  color = C.blue,
  dim = false,
}: {
  x: number;
  y: number;
  dx: number;
  dy: number;
  color?: string;
  dim?: boolean;
}) {
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (
    <g stroke={color} strokeWidth="2.5" fill="none" opacity={dim ? 0.3 : 1}>
      <path d={`M${x} ${y} l${dx} ${dy}`} strokeDasharray={dim ? "4 4" : undefined} />
      <path d="M-7 -4 L0 0 L-7 4" transform={`translate(${x + dx} ${y + dy}) rotate(${angle})`} />
    </g>
  );
}
export function Stop({ x, y }: { x: number; y: number }) {
  return (
    <g stroke={C.orange} strokeWidth="3">
      <circle cx={x} cy={y} r="10" fill="#fff4e9" />
      <path d={`M${x - 4} ${y - 4} l8 8 m0 -8 l-8 8`} />
    </g>
  );
}
export function Bottle({
  x,
  y,
  fill = "#91cfaf",
  scale = 1,
}: {
  x: number;
  y: number;
  fill?: string;
  scale?: number;
}) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${scale})`}
      d="M-6 0 H6 V15 Q16 20 16 29 V64 Q16 68 12 68 H-12 Q-16 68 -16 64 V29 Q-16 20 -6 15 Z"
      fill={fill}
      stroke={C.ink}
      strokeWidth="2.5"
    />
  );
}
export function StageRail({
  stage,
  labels,
  currentLabel,
}: {
  stage: number;
  labels: readonly string[];
  currentLabel?: string;
}) {
  return (
    <g>
      {labels.map((label, i) => (
        <g key={label}>
          <circle
            cx={30 + i * 75}
            cy="185"
            r="8"
            fill={i <= stage ? C.yellow : "#fff"}
            stroke={C.ink}
          />
          <Label x={30 + i * 75} y={189} size={11}>
            {i + 1}
          </Label>
        </g>
      ))}
      <Label x={180} y={169} size={14}>
        {currentLabel ?? labels[stage]}
      </Label>
    </g>
  );
}
