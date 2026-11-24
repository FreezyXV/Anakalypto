import type { ReactNode } from "react";
import { arrow, fillPath, ink, label, layers, moved, oval, stroke } from "../../detail100/plate";
import { gradient } from "../material";

export const dark = "#43544f";
export const cold = "#2d6073";
export const heat = "#935234";
export const gold = "#99713e";
export const forest = "#587255";

const materials = {
  steel: [
    [0, "#4f625c"],
    [0.28, "#94a59b"],
    [0.47, "#e7e5d1"],
    [0.72, "#879c93"],
    [1, "#485a54"],
  ],
  iron: [
    [0, "#8d9890"],
    [0.42, "#5a6e66"],
    [1, "#334842"],
  ],
  copper: [
    [0, "#704938"],
    [0.32, "#b78958"],
    [0.52, "#f0cb8e"],
    [0.78, "#a16d50"],
    [1, "#6e4a39"],
  ],
  glass: [
    [0, "#c0d0c0"],
    [0.53, "#9ab7ad"],
    [1, "#647f78"],
  ],
  cream: [
    [0, "#fff8e4"],
    [0.49, "#e3d6bc"],
    [1, "#a9997c"],
  ],
  soot: [
    [0, "#65726a"],
    [0.49, "#404d47"],
    [1, "#243630"],
  ],
  ember: [
    [0, "#e5bf79"],
    [0.42, "#c47a50"],
    [1, "#7f4b39"],
  ],
} as const;
export type TransportTone = keyof typeof materials;
export const paint = (id: string, tone: TransportTone) => `url(#${id}-aft-${tone})`;
export const surface = (id: string, d: string, tone: TransportTone, width = 1.1) =>
  fillPath(d, paint(id, tone), dark, width);
export const fastener = (x: number, y: number, r = 2.2) => [
  oval(x, y, r, r, "#b9aa90", "#5d685d"),
  stroke(`M${x - r * 0.45} ${y + 0.35}l${r * 0.9} -.7`, "#657467", 0.67),
];

export function technicalPlate(
  titles: readonly [string, string, string],
  footers: readonly [string, string, string],
  scene: (step: number, id: string) => ReactNode,
  height = 210,
) {
  return function drawPlate(step: number, id: string) {
    const title = titles[step] ?? titles[0];
    const footer = footers[step] ?? footers[0];
    return (
      <>
        <defs>
          {layers(
            Object.entries(materials).map(([name, stops]) =>
              gradient(id + "-aft-" + name, stops, true),
            ),
          )}
          {gradient(
            id + "-aft-paper",
            [
              [0, "#faf5e8"],
              [0.58, "#f2ebdb"],
              [1, "#e6e2d4"],
            ],
            true,
          )}
          <radialGradient id={id + "-aft-ground"}>
            <stop stopColor="#505749" stopOpacity=".24" />
            <stop offset="1" stopColor="#505749" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="358"
          height={height - 2}
          rx="13"
          fill={`url(#${id}-aft-paper)`}
          stroke="#a9a495"
          strokeWidth=".8"
        />
        <path d="M19 36h322" stroke="#958e7b" strokeWidth=".65" />
        <text
          x="180"
          y="25"
          textAnchor="middle"
          fill={ink}
          fontFamily="Georgia, serif"
          fontSize="19"
          fontWeight="700"
        >
          {title}
        </text>
        {layers(scene(step, id))}
        {label(180, height - 12, footer)}
      </>
    );
  };
}
export const grounding = (id: string, x: number, y: number, r: number) => (
  <ellipse cx={x} cy={y} rx={r} ry="7.5" fill={`url(#${id}-aft-ground)`} />
);

export function rotor(
  id: string,
  x: number,
  y: number,
  r: number,
  tone: TransportTone = "steel",
  phase = 0,
) {
  return moved(x, y, [
    oval(0, 0, r, r, paint(id, "soot"), dark),
    oval(0, 0, r - 2.6, r - 2.6, "none", "#bec5ad"),
    ...Array.from({ length: 10 }, (_, i) => {
      const s = r / 25,
        a = i * 36 + phase;
      return (
        <g key={i} transform={`rotate(${a}) scale(${s})`}>
          {surface(id, "M3-3Q6-15 18-21q-2 8-7 15l-1 6Z", tone, 0.8)}
          {stroke("M7-5q3-8 9-13", "#d9ceaf", 0.8)}
        </g>
      );
    }),
    oval(0, 0, r * 0.25, r * 0.25, paint(id, tone), "#4c6258"),
    ...fastener(0, 0, Math.max(1.45, r * 0.1)),
  ]);
}

export function link(x: number, y: number, name: string, line: string, color = dark) {
  return [stroke(line, "#fff3d3", 2.5), stroke(line, color, 0.9), label(x, y, name, color)];
}

export function stream(x1: number, y1: number, x2: number, y2: number, color = cold) {
  return [stroke(`M${x1} ${y1}L${x2} ${y2}`, "#fbf2da", 4.4), arrow(x1, y1, x2, y2, color)];
}
