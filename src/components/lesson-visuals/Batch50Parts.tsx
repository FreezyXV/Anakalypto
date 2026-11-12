import type { ReactNode } from "react";
import { Arrow, Label, blue, green, ink, warm } from "./DrawingPrimitives";
import { WorkshopPaints, Title, Foot } from "./Energy29Parts";
export { Arrow, Label, blue, green, ink, warm };
export type DrawingProps = { kind: string; step: number; id: string };
export function Scene({
  id,
  title,
  foot,
  children,
}: {
  id: string;
  title: string;
  foot: string;
  children: ReactNode;
}) {
  return (
    <>
      <WorkshopPaints id={id} />
      <Title>{title}</Title>
      {children}
      <Foot>{foot}</Foot>
    </>
  );
}
export function Ground({ id, y = 153 }: { id: string; y?: number }) {
  return (
    <>
      <path d={`M18 ${y}Q110 ${y - 5} 180 ${y}T342 ${y}V201H18Z`} fill={`url(#${id}-clay)`} />
      {Array.from({ length: 22 }, (_, i) => (
        <circle
          key={i}
          cx={28 + ((i * 41) % 300)}
          cy={y + 12 + ((i * 13) % 32)}
          r={1.5 + (i % 2)}
          fill="#9c8160"
          opacity=".45"
        />
      ))}
    </>
  );
}
export function Tree({ x = 180, y = 148, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-5 0L-3-56H4L6 0M0-25L-21-44M2-35L23-54"
        stroke="#87623d"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-38-49C-61-80-23-95-9-91C0-112 37-105 40-86C69-78 56-43 32-44C15-32-12-38-25-40Z"
        fill="#7eaa70"
        stroke="#52784c"
        strokeWidth="2"
      />
      <path
        d="M-29-75Q0-92 27-69M-21-56Q2-70 30-54"
        stroke="#bdd19c"
        strokeWidth="2"
        fill="none"
        opacity=".7"
      />
    </g>
  );
}
export function Sprout({
  x,
  y = 146,
  kind = "leaf",
}: {
  x: number;
  y?: number;
  kind?: "leaf" | "wheat" | "root";
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0V-46M0-21L-15-33M0-33L13-43" stroke={green} strokeWidth="3" fill="none" />
      {kind === "wheat" ? (
        <>
          {[-52, -44, -36].map((v) => (
            <g key={v}>
              <ellipse
                cx="-5"
                cy={v}
                rx="4"
                ry="7"
                transform={`rotate(-30 -5 ${v})`}
                fill="#dfba5f"
              />
              <ellipse cx="5" cy={v} rx="4" ry="7" transform={`rotate(30 5 ${v})`} fill="#dfba5f" />
            </g>
          ))}
        </>
      ) : (
        <>
          <ellipse cx="-12" cy="-32" rx="12" ry="5" transform="rotate(28 -12 -32)" fill="#7caa6a" />
          <ellipse cx="11" cy="-44" rx="12" ry="5" transform="rotate(-25 11 -44)" fill="#7caa6a" />
        </>
      )}
      {kind === "root" ? (
        <path d="M-9 2Q-7 31 0 44Q9 24 9 2Z" fill="#cd8246" />
      ) : (
        <path
          d="M0 0L-10 23M0 0L7 28M0 5L-18 15M0 9L18 21"
          stroke="#a78455"
          strokeWidth="2"
          fill="none"
        />
      )}
    </g>
  );
}
export function Drop({ x, y, color = blue }: { x: number; y: number; color?: string }) {
  return <path d={`M${x} ${y - 7}q-10 13 0 15q10-2 0-15Z`} fill={color} opacity=".8" />;
}
export function Vessel({
  x = 100,
  y = 72,
  w = 160,
  h = 112,
  water = blue,
}: {
  id: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  water?: string;
}) {
  return (
    <>
      <path d={`M${x} ${y}v${h}h${w}v-${h}`} fill="#f8fafc" stroke="#91a9ba" strokeWidth="3" />
      <path
        d={`M${x + 3} ${y + 30}q${w / 4} -5 ${w / 2} 0t${w / 2 - 6} 0v${h - 33}H${x + 3}Z`}
        fill={water}
        opacity=".17"
      />
      <path
        d={`M${x + 3} ${y + 30}q${w / 4} -5 ${w / 2} 0t${w / 2 - 6} 0`}
        stroke={water}
        fill="none"
        opacity=".6"
      />
      <path d={`M${x + 7} ${y + 8}v${h - 18}`} stroke="#fff" strokeWidth="3" />
    </>
  );
}
export function Wave({
  d,
  color = blue,
  width = 3,
}: {
  d: string;
  color?: string;
  width?: number;
}) {
  return (
    <path
      d={d}
      stroke={color}
      strokeWidth={width}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}
export function Turning({
  x,
  y,
  reverse = false,
  color = blue,
}: {
  x: number;
  y: number;
  reverse?: boolean;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) ${reverse ? "scale(-1 1)" : ""}`}>
      <path d="M-14-7A16 16 0 1 1 9 14" fill="none" stroke={color} strokeWidth="2.5" />
      <path d="M7 8L8 17L16 12" fill="none" stroke={color} strokeWidth="2.5" />
    </g>
  );
}
