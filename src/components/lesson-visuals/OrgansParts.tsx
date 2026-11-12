import type { ReactNode } from "react";
import { Scene, Arrow, Label, ink, blue, green, warm, type DrawingProps } from "./Batch50Parts";
export { Arrow, Label, ink, blue, green, warm, type DrawingProps };
export const blood = "#b55065",
  vein = "#447f9f",
  gold = "#b58a32",
  purple = "#82699f";
export function AnatomyScene({
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
    <Scene id={id} title={title} foot={foot}>
      <defs>
        <linearGradient id={`${id}-tissue`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff0e7" />
          <stop offset=".6" stopColor="#e5b7ac" />
          <stop offset="1" stopColor="#c88991" />
        </linearGradient>
        <linearGradient id={`${id}-blood`} x2=".2" y2="1">
          <stop stopColor="#f3d6d9" />
          <stop offset=".5" stopColor="#c86b7c" />
          <stop offset="1" stopColor="#a94960" />
        </linearGradient>
        <linearGradient id={`${id}-vein`} x2=".2" y2="1">
          <stop stopColor="#d4e8ef" />
          <stop offset=".6" stopColor="#85b3c7" />
          <stop offset="1" stopColor="#5486a6" />
        </linearGradient>
        <linearGradient id={`${id}-liver`} x2=".5" y2="1">
          <stop stopColor="#dca691" />
          <stop offset=".55" stopColor="#b97c6c" />
          <stop offset="1" stopColor="#89565b" />
        </linearGradient>
        <linearGradient id={`${id}-brain`} x2=".8" y2="1">
          <stop stopColor="#f3e7df" />
          <stop offset="1" stopColor="#b5acc2" />
        </linearGradient>
        <linearGradient id={`${id}-mucus`} x2="0" y2="1">
          <stop stopColor="#efc5a7" />
          <stop offset=".5" stopColor="#e3e3ad" />
          <stop offset="1" stopColor="#bddac8" />
        </linearGradient>
      </defs>
      {children}
    </Scene>
  );
}
export function BloodCell({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g data-blood-cell="true" transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse rx="10" ry="6" fill="#bc6675" stroke="#914855" strokeWidth="1.2" />
      <ellipse rx="5" ry="2.6" fill="#e6a4ac" />
    </g>
  );
}
export function Platelet({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0-8L3-4 8-5 6 0 9 4 4 5 2 9-2 5-7 6-5 1-8-3-3-4Z"
        fill="#ab94b8"
        stroke="#705985"
        strokeWidth="1.1"
      />
      <circle r="2" fill="#77618f" />
    </g>
  );
}
export function LiverOrgan({
  id,
  x = 180,
  y = 120,
  scale = 1,
}: {
  id: string;
  x?: number;
  y?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-84-24C-64-49-12-43 17-36C45-31 73-43 85-22C90 1 59 7 38 14C24 18 9 31-7 33C-31 31-60 16-80 7C-89 1-93-12-84-24Z"
        fill={`url(#${id}-liver)`}
        stroke="#7b5156"
        strokeWidth="2"
      />
      <path
        d="M8-34Q-5-7 1 26M-76-20Q-33-34-2-22"
        stroke="#ebbaa2"
        strokeWidth="2"
        fill="none"
        opacity=".65"
      />
      <path
        d="M-12 23C-27 36-20 52-12 50C0 44-1 30-6 24"
        fill="#8aa77a"
        stroke="#55795a"
        strokeWidth="1.5"
      />
    </g>
  );
}
export function Brain({
  id,
  x = 180,
  y = 110,
  scale = 1,
}: {
  id: string;
  x?: number;
  y?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-52 12C-70-1-61-24-46-28C-51-45-26-53-15-45C0-62 25-53 30-44C53-48 65-29 59-15C75 0 60 25 42 26L22 35 13 52 1 50-1 31C-20 39-41 32-52 12Z"
        fill={`url(#${id}-brain)`}
        stroke="#7c718a"
        strokeWidth="2"
      />
      <path
        d="M-43-20Q-27-35-13-18T16-23Q34-43 44-22M-47 4Q-34-12-20 2T9 3Q26-12 47 3M-32 21Q-16 8-5 24M13-35Q4-26 15-15M30 7Q17 20 29 25"
        stroke="#b49ba7"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}
export function Stomach({
  id,
  x = 135,
  y = 125,
  scale = 1,
}: {
  id: string;
  x?: number;
  y?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-8-64V-39C20-72 61-53 61-14C65 20 33 47 4 44C-22 45-33 25-46 24L-63 26-69 13-51 9C-22 4-26-22-23-42V-64Z"
        fill={`url(#${id}-tissue)`}
        stroke="#a16d77"
        strokeWidth="2.2"
      />
      <path
        d="M-9-32C12-55 43-44 45-15C48 12 24 33 5 28C-9 25-11 5-31 12C-12 1-16-14-9-32Z"
        fill="#f9d9ba"
        stroke="#cf9c91"
        strokeWidth="1.5"
      />
      <path
        d="M6-28Q35-30 30-8T9 15M-3-7Q16-9 13 10M24-35Q46-12 32 13"
        stroke="#d4a098"
        fill="none"
        strokeWidth="2"
      />
      <path d="M-16-61V-37" stroke="#fff4e5" strokeWidth="7" />
    </g>
  );
}
export function Intestine({
  id,
  x = 100,
  y = 150,
  scale = 1,
}: {
  id: string;
  x?: number;
  y?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-39 37V-35Q-39-46-26-46H28Q41-46 41-32V24Q41 37 28 37H4V49"
        fill="none"
        stroke="#a5757f"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M-39 37V-35Q-39-46-26-46H28Q41-46 41-32V24Q41 37 28 37H4V49"
        fill="none"
        stroke="#dcb1a7"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M-20-24H20Q30-24 25-12H-20Q-31-10-20 1H20Q31 3 20 14H-18Q-28 18-15 27H8"
        stroke="#b77b82"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M-20-24H20Q30-24 25-12H-20Q-31-10-20 1H20Q31 3 20 14H-18Q-28 18-15 27H8"
        stroke={`url(#${id}-tissue)`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
}
export function Antibody({
  x,
  y,
  scale = 1,
  rotate = 0,
  color = purple,
}: {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} data-antibody="IgG">
      <path
        d="M-4 38V4L-30-30M4 38V4L30-30"
        stroke={color}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M-36-23L-18-3M36-23L18-3" stroke="#a4b9cf" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M-36-32L-30-25-24-32M24-32L30-25 36-32"
        stroke={green}
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  );
}
