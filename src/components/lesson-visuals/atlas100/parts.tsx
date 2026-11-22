import { Fragment, type ReactNode } from "react";
import { Callout } from "../EditorialDrawings";
import { Arrow, Book, Face, Label, Line, Marker, PlotGrid, Rule } from "../Atlas65Parts";

export const ink = "#304a5b";
export const blue = "#3e748b";
export const water = "#b8d2d8";
export const iron = "#8ba6b0";
export const teal = "#4e796c";
export const moss = "#a9bd9e";
export const brass = "#c8a373";
export const ochre = "#936638";
export const rust = "#a05d49";
export const sand = "#e9dec4";
export const slate = "#a7bdc5";
export const mist = "#e3edef";
export const chalk = "#f3f5ef";
export const light = "#bccbce";

export const pick = <T,>(index: number, values: readonly [T, T, T]): T => values[index]!;
export const words = (x: number, y: number, value: ReactNode, color = ink) => (
  <Label x={x} y={y} color={color}>
    {value}
  </Label>
);
export const note = (x: number, y: number, value: string, leader: string, color = ink) => (
  <Callout x={x} y={y} leader={leader} color={color}>
    {value}
  </Callout>
);
export const path = (d: string, fill: string, stroke = ink, width = 1.45) => (
  <path d={d} fill={fill} stroke={stroke} strokeWidth={width} strokeLinejoin="round" />
);
export const line = (d: string, color = ink, width = 1.65, dash?: string) => (
  <Line d={d} color={color} width={width} dash={dash} />
);
export const rect = (
  x: number,
  y: number,
  width: number,
  height: number,
  fill = mist,
  stroke = iron,
  radius = 4,
) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={radius}
    fill={fill}
    stroke={stroke}
    strokeWidth="1.35"
  />
);
export const circle = (x: number, y: number, r: number, fill = water, stroke = blue) => (
  <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="1.35" />
);
export const ellipse = (
  x: number,
  y: number,
  rx: number,
  ry: number,
  fill: string,
  stroke = iron,
) => <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth="1.35" />;
export const arrow = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color = ochre,
  dashed = false,
) => <Arrow x1={x1} y1={y1} x2={x2} y2={y2} color={color} width={2.25} dashed={dashed} />;
export const mark = (x: number, y: number, color = ochre, r = 4) => (
  <Marker x={x} y={y} color={color} r={r} />
);
export const face = (id: string, d: string, tone?: "alloy" | "glass" | "brass") => (
  <Face id={id} d={d} tone={tone} />
);
export const axis = (x = 44, y = 65, w = 263, h = 104) => <PlotGrid x={x} y={y} w={w} h={h} />;
export const book = (x: number, y: number, w: number, h: number, open = false, color = blue) => (
  <Book x={x} y={y} w={w} h={h} open={open} color={color} />
);

function renderLayers(content: ReactNode): ReactNode {
  if (!Array.isArray(content)) return content;
  return content.map((layer: ReactNode, position) => (
    <Fragment key={position}>{renderLayers(layer)}</Fragment>
  ));
}

export function at(x: number, y: number, content: ReactNode, scale = 1) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>{renderLayers(content)}</g>;
}
export function frame(
  foot: readonly [string, string, string],
  layers: (step: number, id: string) => ReactNode,
) {
  return function DrawFrame(step: number, id: string) {
    return (
      <>
        {renderLayers(layers(step, id))}
        <Rule>{pick(step, foot)}</Rule>
      </>
    );
  };
}

export function display(x: number, y: number, title: string, active = true) {
  return at(x, y, [
    rect(0, 0, 85, 57, active ? chalk : mist, active ? blue : iron),
    line("M0 13h85", iron, 1.3),
    circle(8, 7, 1.5, brass, ochre),
    circle(15, 7, 1.5, water, blue),
    words(42.5, 41, title),
  ]);
}

export function building(x: number, y: number, width = 45, height = 42, tone = iron) {
  return at(x, y, [
    path(`M0 0h${width}v-${height}H0Z`, tone),
    ...[0.28, 0.65].flatMap((cx) =>
      [0.32, 0.68].map((cy) => rect(width * cx - 2.5, -height * cy, 5, 5, chalk, blue, 0)),
    ),
  ]);
}

export function house(x: number, y: number, tone = slate, scale = 1) {
  return at(
    x,
    y,
    [
      path("M0 0v-30l26-20 27 20V0Z", tone),
      line("M-4-29l30-23 31 23", ink, 2.4),
      rect(8, -25, 12, 10, chalk, blue, 0),
      rect(35, -20, 11, 20, sand, ochre, 0),
    ],
    scale,
  );
}

export function person(x: number, y: number, tone = iron, scale = 1) {
  return at(
    x,
    y,
    [
      circle(0, -32, 7, "#d4b28e", "#93745e"),
      path("M-11-7q0-15 11-16 10 1 11 16v9h-22Z", tone),
      line("M-5 2l-3 15m13-15 3 15", ink, 2.4),
    ],
    scale,
  );
}

export function car(x: number, y: number, scale = 1, tone = iron) {
  return at(
    x,
    y,
    [
      path("M0-15v-16l32-9 29-20h46l30 20 24 6v19Z", tone),
      path("M50-38l16-15h37l23 15Z", water, blue),
      circle(31, -13, 13, ink),
      circle(129, -13, 13, ink),
      circle(31, -13, 6, mist, iron),
      circle(129, -13, 6, mist, iron),
      line("M8-30h12m121-1h12", chalk, 2.4),
    ],
    scale,
  );
}
