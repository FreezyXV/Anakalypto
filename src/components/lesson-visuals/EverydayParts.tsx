import type { ReactNode } from "react";

export { Arrow, Label, blue, green, ink, warm, Sun, Earth } from "./DrawingPrimitives";
export { Scene, Tree } from "./Batch50Parts";
export const violet = "#765f9c";
export const red = "#a7464c";
export const gold = "#a57127";
export const teal = "#3b7c84";
export const paper = "#fff8e7";
export const muted = "#9eacb9";
export const navy = "#273e58";

export type SceneSet = Record<string, (step: number, id: string) => ReactNode>;

export function Line({
  d,
  color = navy,
  width = 2.5,
  dash,
}: {
  d: string;
  color?: string;
  width?: number;
  dash?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeDasharray={dash}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export function Plate({
  x,
  y,
  width,
  height,
  color = "#e4eef4",
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  children?: ReactNode;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="9"
        fill={color}
        stroke="#a2b5c3"
        strokeWidth="1.5"
      />
      {children}
    </g>
  );
}

export function Wave({
  x,
  y,
  width,
  amplitude,
  cycles,
  color = navy,
}: {
  x: number;
  y: number;
  width: number;
  amplitude: number;
  cycles: number;
  color?: string;
}) {
  const samples = 96;
  const points = Array.from({ length: samples + 1 }, (_, i) => {
    const progress = i / samples;
    return [x + width * progress, y - Math.sin(progress * cycles * Math.PI * 2) * amplitude]
      .map((coordinate) => coordinate.toFixed(2))
      .join(" ");
  });
  return (
    <Line d={points.map((point, index) => (index ? "L" : "M") + point).join("")} color={color} />
  );
}

export function Cloud({
  x,
  y,
  scale = 1,
  tint = "#fafcfd",
}: {
  x: number;
  y: number;
  scale?: number;
  tint?: string;
}) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${scale})`}
      d="M-36 12Q-44-6-24-13Q-26-34-4-34Q15-35 20-18Q41-19 41 2Q41 12 31 12Z"
      fill={tint}
      stroke="#819dad"
      strokeWidth="1.4"
    />
  );
}
