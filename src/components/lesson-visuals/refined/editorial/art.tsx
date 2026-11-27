import type { ReactNode } from "react";
import { block, fillPath, label, layers, moved, oval, stroke } from "../../detail100/plate";
import {
  cold,
  dark,
  fastener,
  forest,
  gold,
  grounding,
  heat,
  link,
  paint,
  rotor,
  stream,
  surface,
  technicalPlate,
  type TransportTone,
} from "../transport/plate";

export {
  block,
  cold,
  dark,
  fastener,
  fillPath,
  forest,
  gold,
  grounding,
  heat,
  label,
  layers,
  link,
  moved,
  oval,
  paint,
  rotor,
  stream,
  stroke,
  surface,
  type TransportTone,
};

export type Study = {
  titles?: readonly string[];
  foot: readonly string[];
  draw: (step: number, id: string) => ReactNode;
};

export function renderStudy(
  study: Study,
  spec: { steps: readonly { label: string }[]; canvasHeight?: number },
  step: number,
  id: string,
) {
  const height = spec.canvasHeight ?? 210;
  return technicalPlate(
    study.titles ?? spec.steps.map(({ label }) => label),
    study.foot,
    (step, id) => moved(0, Math.round((height - 210) / 2), study.draw(step, id)),
    height,
  )(step, id);
}

export const panel = (
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  tone: TransportTone = "cream",
) =>
  moved(x, y, [
    surface(id, `M0 5l8-5h${width - 11}l8 6v${height - 7}l-9 5H1Z`, tone, 1.05),
    stroke(`M5 8h${width - 6}M4 ${height - 2}h${width - 4}`, "#d7d1b3", 1.25),
    ...fastener(6, 7, 1.25),
    ...fastener(width - 4, height - 5, 1.25),
  ]);

export function joint(id: string, x: number, y: number, r = 9, tone: TransportTone = "steel") {
  return [
    oval(x, y, r, r, paint(id, tone), dark),
    oval(x + 1, y, r * 0.54, r * 0.52, paint(id, "iron"), dark),
    ...fastener(x + 1, y, Math.max(1.35, r * 0.18)),
  ];
}

export function duct(path: string, color = cold, active = true) {
  return [
    stroke(path, "#465e59", 8.3),
    stroke(path, "#b2beb0", 5.2),
    stroke(path, active ? color : "#8e9b90", 2.45, active ? undefined : "4 3"),
  ];
}

export function motor(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 1, 29, 53),
      surface(id, "M-40-21l14-10h64l14 11v38l-14 10h-70l-12-10v-26Z", "steel", 1.4),
      surface(id, "M-40-21h72v41h-72Z", "iron", 0.9),
      surface(id, "M29-20h17l6 9v20l-6 10H29Z", "steel", 0.9),
      oval(40, 0, 9, 16, paint(id, "iron"), dark),
      ...[-34, -26, -18, -10, -2, 6, 14, 22].map((p) => stroke(`M${p} -17v32`, "#c1c6a9", 1.65)),
      stroke("M-38-22h64m-61 43h65", "#e6dfc4", 1.2),
      surface(id, "M44-4h22v8H44Z", "copper", 1.05),
      ...fastener(-35, -15, 2),
      ...fastener(-35, 14, 2),
    ],
    scale,
  );
}

export function pack(
  id: string,
  x: number,
  y: number,
  cols: number,
  rows: number,
  tone: TransportTone = "glass",
  hot = -1,
) {
  const width = cols * 17 + 10;
  const height = rows * 20 + 8;
  return moved(x, y, [
    grounding(id, width / 2, height, width * 0.54),
    surface(id, `M0 2l12-9h${width - 12}l9 8v${height - 4}l-9 9H0Z`, "iron", 1.2),
    surface(id, `M4 5h${width - 5}v${height - 2}H4Z`, "soot", 0.9),
    ...Array.from({ length: cols * rows }, (_, i) => {
      const x = 8 + (i % cols) * 17,
        y = 8 + Math.floor(i / cols) * 20;
      return [
        surface(id, `M${x} ${y}l3-3h10v17l-3 2h-10Z`, i === hot ? "ember" : tone, 0.75),
        stroke(`M${x + 2} ${y}v14`, "#e1ddc2", 0.7),
        oval(x + 8, y, 1.6, 1.45, i === hot ? "#eed586" : "#acbdab", "#617a72"),
      ];
    }),
    ...fastener(4, 4),
    ...fastener(width - 2, height - 1),
  ]);
}

export function exchanger(
  id: string,
  x: number,
  y: number,
  scale = 1,
  tone: TransportTone = "steel",
) {
  return moved(
    x,
    y,
    [
      surface(id, "M-47-39l10-7h76l11 8v76l-8 9h-83l-9-9Z", "iron", 1.14),
      surface(id, "M-39-34h79v69h-79Z", tone, 1.05),
      surface(id, "M-51-39h12v77h-12Zm92 0h9v77h-9Z", "steel"),
      ...Array.from({ length: 13 }, (_, i) =>
        stroke(`M-36 ${-31 + i * 5}h72`, i % 2 ? "#b6bca3" : "#485e58", 1.4),
      ),
      stroke("M-43-34v67m88-67v67", "#cad3b7", 1.25),
      ...fastener(-45, -35, 1.9),
      ...fastener(45, 34, 1.9),
    ],
    scale,
  );
}

export function tire(id: string, x: number, y: number, r: number) {
  return [
    oval(x, y, r, r, paint(id, "soot"), dark),
    oval(x, y, r * 0.83, r * 0.82, "none", "#abb29c"),
    oval(x, y, r * 0.65, r * 0.64, paint(id, "steel"), dark),
    ...Array.from({ length: 5 }, (_, i) => {
      const a = (i / 5) * 2 * Math.PI;
      return stroke(
        `M${x + Math.cos(a) * r * 0.23} ${y + Math.sin(a) * r * 0.23}L${x + Math.cos(a) * r * 0.6} ${y + Math.sin(a) * r * 0.6}`,
        "#5c746b",
        Math.max(1.15, r * 0.15),
      );
    }),
    ...joint(id, x, y, Math.max(3, r * 0.24)),
  ];
}

export function automobile(
  id: string,
  x: number,
  y: number,
  scale = 1,
  high = false,
  cut = false,
  tone: TransportTone = "steel",
) {
  const cabin = high ? "M47 36l22-35h70l18 33Z" : "M47 36l29-21h58l23 20Z";
  const body = high
    ? "M7 56V47l30-13L66-4h76l25 38 29 8 13 12v18l-16 9H21Z"
    : "M7 58v-8l29-13 35-27h66l32 25 29 8 11 12v17l-17 9H22Z";
  return moved(
    x,
    y,
    [
      grounding(id, 108, 84, 105),
      surface(id, body, tone, 1.25),
      surface(id, cabin, "glass", 0.92),
      surface(id, "M16 65h178l8 6-14 9H27Z", "iron", 0.86),
      ...[85, 124].map((t) => stroke(`M${t} ${high ? 2 : 15}v25`, "#5e776e", 1.4)),
      stroke("M42 40h120l29 8m-113-4h11m39 0h12", "#e4e6cc", 1.35),
      fillPath("M191 48l11 5v5h-15Z", "#ede1ab", gold, 0.65),
      fillPath("M10 50l12-4-4 8-8 3Z", "#ad673f", heat, 0.7),
      cut && [
        surface(id, "M51 48h86v18H51Z", "cream", 0.82),
        stroke("M50 67h107m-12-5v-17l6-5h24l12 12", "#647b6f", 1.4),
      ],
      ...tire(id, 46, 74, 16.3),
      ...tire(id, 171, 74, 16.3),
    ],
    scale,
  );
}

export function tank(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: TransportTone = "glass",
  level = 0.56,
) {
  return moved(x, y, [
    grounding(id, w / 2, h, w * 0.66),
    surface(id, `M0 8Q0 0 ${w / 2} 0T${w} 8v${h - 16}q0 8-${w / 2} 8T0 ${h - 8}Z`, tone, 1.25),
    fillPath(
      `M4 ${h * (1 - level)}q${w / 2 - 4} 8 ${w - 8} 0v${Math.max(2, h * level - 10)}q-${w / 2 - 4} 7-${w - 8} 0Z`,
      tone === "ember" ? "#a96641" : "#63867c",
      "#52716a",
      0.8,
    ),
    oval(w / 2, 8, w / 2, 8, paint(id, tone), dark),
    stroke(`M6 17v${h - 32}m7-3v-14`, "#e9dfbc", 1.45),
    surface(id, `M${w / 2 - 9} 0v-7h18v7Z`, "steel", 0.9),
    ...fastener(w / 2, 5, 1.8),
  ]);
}

export function tile(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: TransportTone = "steel",
  depth = 13,
) {
  return moved(x, y, [
    surface(
      id,
      `M0 ${depth}l${depth} -${depth}h${w - depth}v${h}l-${depth} ${depth}H0Z`,
      tone,
      1.05,
    ),
    surface(id, `M0 ${depth}h${w - depth}v${h}H0Z`, tone, 1),
    stroke(`M0 ${depth}h${w - depth}l${depth} -${depth}`, "#e2d9b8", 1.2),
    stroke(`M${w - depth} ${depth + 1}v${h - 2}`, "#4d6158", 0.86),
  ]);
}
