import type { ReactNode } from "react";
import { Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, type SceneSet } from "./EverydayParts";

export { Arrow, Label, Line, type SceneSet };

export const steel = "#496573";
export const blue = "#3e748b";
export const teal = "#4e796c";
export const ochre = "#976a36";
export const rust = "#a05d49";
export const dark = "#273f50";
export const paper = "#f3e8d0";
export const slate = "#a2b9c3";
export const pale = "#e3edef";

export function MetalPaint({ id }: { id: string }) {
  return (
    <defs>
      <Material id={id + "-alloy"} colors={["#dce8e7", "#94abb2", "#59717c"]} />
      <Material id={id + "-brass"} colors={["#eddbad", "#bf965f", "#94683e"]} />
      <Material id={id + "-glass"} colors={["#e7f2ef", "#a9c5cb", "#7b9ba8"]} />
      <Hatch id={id + "-section65"} color={steel} space={5} opacity={0.43} />
    </defs>
  );
}

export function Face({
  id,
  d,
  x = 0,
  y = 0,
  tone = "alloy",
}: {
  id: string;
  d: string;
  x?: number;
  y?: number;
  tone?: "alloy" | "glass" | "brass";
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={d}
        fill={`url(#${id}-${tone})`}
        stroke={steel}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d={d} fill={`url(#${id}-section65)`} opacity=".25" />
    </g>
  );
}

export function Ground({ d = "M33 176H327" }: { d?: string }) {
  return <Line d={d} color="#7c9399" width={1.1} />;
}

export function Rule({ children }: { children: ReactNode }) {
  return (
    <>
      <Line d="M37 196h286" color="#bdced0" width={1} />
      <Label x={180} y={218}>
        {children}
      </Label>
    </>
  );
}

export function Marker({
  x,
  y,
  color = ochre,
  r = 4,
}: {
  x: number;
  y: number;
  color?: string;
  r?: number;
}) {
  return <circle cx={x} cy={y} r={r} fill={color} stroke="#f0f3ef" strokeWidth="1.3" />;
}

export function Wire({
  d,
  active = true,
  tone = blue,
}: {
  d: string;
  active?: boolean;
  tone?: string;
}) {
  return (
    <Line
      d={d}
      width={active ? 2.8 : 1.4}
      color={active ? tone : "#a8babd"}
      dash={active ? undefined : "4 3"}
    />
  );
}

export function Book({
  x,
  y,
  w = 66,
  h = 84,
  open = false,
  color = blue,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  open?: boolean;
  color?: string;
}) {
  const edge = open ? 9 : 0;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0 5L${w / 2} ${edge + 4} ${w} 4V${h + 3}L${w / 2} ${h + edge + 3} 0 ${h + 3}Z`}
        fill={color}
        stroke={dark}
        strokeWidth="1.5"
      />
      <path
        d={`M5 0L${w / 2} ${edge} ${w - 5} 0V${h - 3}L${w / 2} ${h + edge - 4} 5 ${h - 2}Z`}
        fill={paper}
        stroke={ochre}
      />
      {open && <Line d={`M${w / 2} 9v${h - 4}`} color="#aa936f" width={1.3} />}
      {[0.23, 0.37, 0.53, 0.69, 0.8].map((row, i) => (
        <path
          key={row}
          d={
            open
              ? `M11 ${h * row}l${w / 2 - 18} 3m16 0 ${w / 2 - 18} -3`
              : `M14 ${h * row}h${w - 29 - (i % 3) * 5}`
          }
          stroke={i === 0 ? color : "#a59374"}
          strokeWidth={i === 0 ? 2 : 1.3}
          fill="none"
        />
      ))}
    </g>
  );
}

export function PlotGrid({
  x = 55,
  y = 73,
  w = 254,
  h = 99,
}: {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}) {
  return (
    <>
      {[0.25, 0.5, 0.75, 1].map((n) => (
        <Line
          key={n}
          d={`M${x} ${y + h * n}h${w}m${-w * (1 - n)} ${-h * n}v${h}`}
          color="#c3d0d0"
          width={1}
          dash="3 4"
        />
      ))}
      <Line d={`M${x} ${y}v${h}h${w}`} color={steel} width={1.6} />
    </>
  );
}
