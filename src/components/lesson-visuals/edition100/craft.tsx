import type { ReactNode } from "react";
import {
  active,
  arrow,
  block,
  cylinder,
  filled,
  flow,
  ink,
  label,
  layers,
  lineGrey,
  living,
  moved,
  oval,
  prism,
  round,
  shadow,
  sheet,
  stroke,
  type Plate,
  type Tone,
} from "../detail100/plate";

export function plate(
  foot: readonly [string, string, string?, string?],
  scene: (s: number, id: string) => ReactNode,
): Plate {
  return (s, id) => layers([scene(s, id), foot[s] && label(180, 249, foot[s])]);
}

export function grain(id: string, x: number, y: number, scale = 1, tone: Tone = "brass") {
  return moved(
    x,
    y,
    [
      filled(id, "M-15 4q6-15 16-14 14-1 16 11 2 7-10 10-17 4-22-7Z", tone, "dots"),
      stroke("M-12 5Q-6-4 12-6", active, 1),
    ],
    scale,
  );
}

export function leaf(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M-26 15q3-43 49-46 5 38-36 49Z", "plant", "dots"),
      stroke("M-30 27l47-49m-27 30 9-22m-4 17 20-8", living, 1.3),
    ],
    scale,
  );
}

export function vial(id: string, x: number, y: number, tone: Tone, scale = 1) {
  return moved(
    x,
    y,
    [
      cylinder(id, 0, 18, 57, 79, "glass"),
      filled(id, "M4 54q25 12 49 0v41q-26 11-49 0Z", tone, "dots"),
      filled(id, "M6 4h44v18H6Z", "steel", "engraving"),
      stroke("M9 10v10m9-10v10m9-10v10m9-10v10m9-10v10M6 28v62", lineGrey, 1.4),
    ],
    scale,
  );
}

export function chartCard(
  id: string,
  x: number,
  y: number,
  series: readonly number[],
  w = 102,
  h = 99,
  tone: Tone = "brass",
) {
  return moved(x, y, [
    filled(id, `M0 0h${w}v${h}H0Z`, "ivory", "dots"),
    stroke(`M9 ${h - 13}h${w - 19}M9 17v${h - 30}`, lineGrey, 1),
    ...series.map((n, i) => {
      const step = (w - 24) / series.length;
      const hei = (h - 30) * n;
      return filled(
        id,
        `M${14 + i * step} ${h - 14 - hei}h${step - 4}v${hei}h-${step - 4}Z`,
        tone,
        "engraving",
      );
    }),
  ]);
}

export function bench(id: string, x: number, y: number, w: number, h = 17) {
  return moved(x, y, [
    shadow(id, w / 2, h + 9, w * 0.65, 12),
    prism(id, 0, 0, w, h, 13, "earth"),
    stroke(`M4 8h${w - 9}m-6 4h-37m-55-1h-29`, "#c7ae86", 1.3),
  ]);
}

export function tileMap(id: string, x: number, y: number, w = 245, h = 125, tone: Tone = "plant") {
  return moved(x, y, [
    prism(id, 0, 0, w, h, 16, tone),
    stroke(
      `M6 ${h * 0.8}q${w * 0.3} -${h * 0.37} ${w * 0.52} -${h * 0.13}t${w * 0.45} -${h * 0.15}`,
      "#e8e4cb",
      1.7,
    ),
    stroke(
      `M10 ${h * 0.66}q${w * 0.28} -${h * 0.4} ${w * 0.51} -${h * 0.23}t${w * 0.42} -${h * 0.15}`,
      living,
      1.2,
    ),
    stroke(
      `M8 ${h * 0.36}q${w * 0.22} -${h * 0.22} ${w * 0.49} -${h * 0.12}t${w * 0.43} -${h * 0.15}`,
      living,
      1.1,
    ),
  ]);
}

export function rowTime(id: string, count: number, selected: number, y = 210) {
  const x = (n: number) => 62 + (n * 236) / (count - 1);
  return [
    stroke(`M62 ${y}h236`, lineGrey, 1.15),
    ...Array.from({ length: count }, (_, i) => [
      stroke(`M${x(i)} ${y - 11}v22`, lineGrey, 1.1),
      round(id, x(i), y, i === selected ? 8 : 4.7, i === selected ? "brass" : "steel"),
      i === selected && oval(x(i), y, 12, 12, "none", active),
    ]),
  ];
}

export function ledger(
  id: string,
  x: number,
  y: number,
  width: number,
  items: readonly string[],
  activeRow: number,
) {
  return moved(x, y, [
    sheet(id, 0, 0, width, 122),
    ...items.map((item, i) => [
      i === activeRow && block(9, 33 + i * 25, width - 18, 23, "#d1b987", active, 2),
      label(width / 2, 50 + i * 25, item),
    ]),
  ]);
}

export function arch(id: string, x: number, y: number, scale = 1, tone: Tone = "steel") {
  return moved(
    x,
    y,
    [
      shadow(id, 0, 4, 43, 9),
      filled(id, "M-42-49L0-77l42 28Z", tone, "engraving"),
      filled(id, "M-35-45h70v38h-70Z", "ivory"),
      ...[-25, -9, 9, 25].map((xx) => filled(id, `M${xx - 4} -47h8v37h-8Z`, tone, "engraving")),
      filled(id, "M-39-8h78v8h-78Z", tone),
      stroke("M-27-50h54m-52 46h50", lineGrey, 1.1),
    ],
    scale,
  );
}

export function terminal(id: string, x: number, y: number, w = 94, h = 120) {
  return moved(x, y, [
    shadow(id, w * 0.5, h, w * 0.66, 11),
    filled(
      id,
      `M0 8Q0 0 8 0h${w - 16}q8 0 8 8v${h - 16}q0 8-8 8H8q-8 0-8-8Z`,
      "graphite",
      "engraving",
    ),
    block(6, 11, w - 12, h - 24, `url(#${id}-ivory)`, ink, 4),
    stroke(`M${w * 0.32} ${h - 6}h${w * 0.36}`, "#dfdbc9", 1.3),
  ]);
}

export function coinPile(id: string, x: number, y: number, n: number, tone: Tone = "brass") {
  return moved(x, y, [
    shadow(id, 0, 4, 39, 9),
    ...Array.from({ length: n }, (_, i) => [
      filled(id, `M-28 ${-i * 10 - 8}h56v8q-28 15-56 0Z`, tone, "engraving"),
      oval(0, -i * 10 - 8, 28, 8, `url(#${id}-${tone})`, ink),
      oval(0, -i * 10 - 8, 22, 5, "none", lineGrey),
    ]),
  ]);
}

export function groups(id: string, n: number, selected: number, ghost = false) {
  return Array.from({ length: n }, (_, i) => {
    const x = 35 + (i % 6) * 49,
      y = 104 + Math.floor(i / 6) * 42;
    return [
      block(x - 13, y - 17, 37, 35, i === selected ? "#dfcf9e" : "#e7e3d4", lineGrey, 3),
      round(id, x + 6, y - 5, 4.7, i === selected ? "brass" : "steel"),
      filled(
        id,
        `M${x - 4} ${y + 14}q0-12 10-12 10 0 10 12Z`,
        ghost && i % 2 ? "ivory" : i === selected ? "clay" : "plant",
      ),
    ];
  });
}

export function markFlow(x1: number, y1: number, x2: number, y2: number, s: number) {
  return arrow(x1, y1, x2, y2, s === 0 ? flow : active, s === 0);
}
