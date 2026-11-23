import { Fragment, type ReactNode } from "react";

export const ink = "#303939";
export const lineGrey = "#677170";
export const flow = "#376878";
export const active = "#8e581d";
export const harm = "#964b3b";
export const living = "#546a4f";

const pigments = {
  steel: ["#e4e6df", "#849698", "#45545a"],
  graphite: ["#a3ada9", "#5c6664", "#303938"],
  brass: ["#f0d7a7", "#c09052", "#795331"],
  earth: ["#d7c19a", "#a9865e", "#72583b"],
  clay: ["#eaceb5", "#ba8a75", "#764d42"],
  plant: ["#d3d8b7", "#91a184", "#556951"],
  glass: ["#e5edeb", "#9fbac1", "#527884"],
  ivory: ["#fcf9e9", "#e2dac3", "#9d937d"],
} as const;
export type Tone = keyof typeof pigments;
export type Plate = (step: number, id: string) => ReactNode;
export type Plates<K extends string> = Record<K, Plate>;

export function layers(nodes: ReactNode): ReactNode {
  if (!Array.isArray(nodes)) return nodes;
  return nodes.map((node: ReactNode, index) => <Fragment key={index}>{layers(node)}</Fragment>);
}

export function PlateSurface({ id, label }: { id: string; label: string }) {
  return (
    <>
      <defs>
        {Object.entries(pigments).map(([name, [light, middle, dark]]) => (
          <linearGradient id={`${id}-${name}`} key={name} x2="0.84" y1="0" y2="1">
            <stop offset="0" stopColor={light} />
            <stop offset="0.5" stopColor={middle} />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
        ))}
        <linearGradient id={`${id}-paper`} x2="0.08" y2="1">
          <stop stopColor="#fbf8ee" />
          <stop offset="1" stopColor="#eeeadd" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`}>
          <stop stopColor="#4a4941" stopOpacity="0.26" />
          <stop offset="1" stopColor="#4a4941" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`${id}-engraving`}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(32)"
        >
          <path d="M0 0v4" fill="none" stroke="#2d3532" strokeOpacity="0.25" strokeWidth="0.6" />
        </pattern>
        <pattern id={`${id}-dots`} width="5" height="6" patternUnits="userSpaceOnUse">
          <path
            d="M1 1h.1m3 3h.1"
            stroke="#665742"
            strokeOpacity="0.31"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect
        x="1"
        y="1"
        width="358"
        height="268"
        rx="13"
        fill={`url(#${id}-paper)`}
        stroke="#ada99a"
        strokeWidth="0.85"
      />
      <path d="M19 48H341" stroke="#999787" strokeWidth="0.7" />
      <text
        x="180"
        y="34"
        textAnchor="middle"
        fill={ink}
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="20"
      >
        {label}
      </text>
    </>
  );
}

export const stroke = (d: string, color = ink, width = 1.4, dash?: string) => (
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
export const fillPath = (d: string, fill: string, color = ink, width = 1.25) => (
  <path d={d} fill={fill} stroke={color} strokeWidth={width} strokeLinejoin="round" />
);
export const filled = (id: string, d: string, tone: Tone, texture?: "engraving" | "dots") => (
  <g>
    {fillPath(d, `url(#${id}-${tone})`)}
    {texture && <path d={d} fill={`url(#${id}-${texture})`} />}
  </g>
);
export const oval = (cx: number, cy: number, rx: number, ry: number, fill: string, color = ink) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} stroke={color} strokeWidth="1.15" />
);
export const round = (id: string, x: number, y: number, r: number, tone: Tone) =>
  oval(x, y, r, r, `url(#${id}-${tone})`);
export const block = (
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  color = ink,
  rx = 2,
) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={rx}
    fill={fill}
    stroke={color}
    strokeWidth="1.05"
  />
);
export const label = (
  x: number,
  y: number,
  value: string,
  color = ink,
  align: "start" | "middle" | "end" = "middle",
) => (
  <text
    x={x}
    y={y}
    fill={color}
    textAnchor={align}
    fontSize="18"
    fontWeight="650"
    paintOrder="stroke"
    stroke="#f8f5e9"
    strokeWidth="2.8"
    strokeLinejoin="round"
  >
    {value}
  </text>
);
export const call = (
  x: number,
  y: number,
  value: string,
  leader: string,
  color = ink,
  align: "start" | "middle" | "end" = "middle",
) => (
  <g>
    {stroke(leader, color, 1.1)}
    {label(x, y, value, color, align)}
  </g>
);
export const arrow = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color = active,
  dashed = false,
) => {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      {stroke(`M${x1} ${y1}L${x2} ${y2}`, color, 2.4, dashed ? "5 4" : undefined)}
      <path d="M0 0l-8-4v8Z" fill={color} transform={`translate(${x2} ${y2}) rotate(${angle})`} />
    </g>
  );
};
export const focus = (x: number, y: number, r: number, color = active) =>
  oval(x, y, r, r, "none", color);
export const moved = (x: number, y: number, content: ReactNode, scale = 1) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>{layers(content)}</g>
);
export const shadow = (id: string, x: number, y: number, rx: number, ry: number) => (
  <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id}-shadow)`} />
);
export const ground = (d: string) => stroke(d, "#8a8778", 1, "2 4");

// Draw an orthographic front face, with a lightly hatched cut edge and a lit top.
export function prism(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  depth: number,
  tone: Tone,
) {
  return moved(x, y, [
    filled(id, `M0 0l${depth}-${depth * 0.62}h${w}l-${depth} ${depth * 0.62}Z`, tone),
    filled(
      id,
      `M${w} 0l${depth}-${depth * 0.62}v${h}l-${depth} ${depth * 0.62}Z`,
      tone,
      "engraving",
    ),
    filled(id, `M0 0h${w}v${h}H0Z`, tone),
    stroke(`M2 2h${w - 4}`, pigments[tone][0], 1.35),
  ]);
}

export function cylinder(id: string, x: number, y: number, w: number, h: number, tone: Tone) {
  const r = w / 2;
  const rim = Math.min(10, w / 4);
  return moved(x, y, [
    filled(id, `M0 0v${h}a${r} ${rim} 0 0 0 ${w} 0V0Z`, tone, "engraving"),
    oval(r, 0, r, rim, pigments[tone][0]),
    oval(r, 1, Math.max(r - 3, 1), Math.max(rim - 2, 1), "none", pigments[tone][1]),
    stroke(`M4 3v${h - 2}`, pigments[tone][0], 1.4),
  ]);
}

export function graph(x = 48, y = 81, w = 262, h = 132) {
  return moved(x, y, [
    ...[1, 2, 3, 4].map((n) =>
      stroke(`M0 ${(h * n) / 4}h${w}M${(w * n) / 4} 0v${h}`, "#b5b4a8", 0.8, "2 4"),
    ),
    stroke(`M0 0v${h}h${w}`, lineGrey, 1.7),
  ]);
}

export function sheet(id: string, x: number, y: number, w: number, h: number, seal = false) {
  return moved(x, y, [
    shadow(id, w / 2, h, w * 0.72, 12),
    filled(id, `M0 0h${w - 18}l18 18v${h - 18}H0Z`, "ivory"),
    fillPath(`M${w - 18} 0v18h18Z`, "#c5bba0", lineGrey, 0.8),
    stroke(`M12 19h${w - 37}`, active, 2.4),
    ...Array.from({ length: 5 }, (_, i) =>
      stroke(`M12 ${h * 0.34 + i * h * 0.1}h${w - 24 - (i % 2) * 13}`, lineGrey, 0.82),
    ),
    seal && round(id, w - 15, h - 15, 9, "clay"),
  ]);
}

export function cable(d: string, color = flow, width = 12) {
  return (
    <>
      {stroke(d, ink, width + 2)}
      {stroke(d, color, width)}
      {stroke(d, "#eeede0", 1, "3 5")}
    </>
  );
}

export function cog(id: string, x: number, y: number, r: number, tone: Tone = "steel") {
  return moved(x, y, [
    ...Array.from({ length: 12 }, (_, i) => (
      <rect
        key={i}
        x={-r * 0.16}
        y={-r * 1.12}
        width={r * 0.32}
        height={r * 0.37}
        rx={1}
        fill={`url(#${id}-${tone})`}
        stroke={ink}
        strokeWidth="0.85"
        transform={`rotate(${i * 30})`}
      />
    )),
    round(id, 0, 0, r, tone),
    oval(0, 0, r * 0.76, r * 0.76, "none", lineGrey),
    oval(0, 0, r * 0.24, r * 0.24, "#eee9d9", ink),
  ]);
}
