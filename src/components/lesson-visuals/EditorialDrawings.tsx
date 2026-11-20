import { Label, Line } from "./EverydayParts";

export function Material({
  id,
  colors,
  horizontal = false,
}: {
  id: string;
  colors: readonly string[];
  horizontal?: boolean;
}) {
  return (
    <linearGradient
      id={id}
      x1="0%"
      y1="0%"
      x2={horizontal ? "100%" : "0%"}
      y2={horizontal ? "0%" : "100%"}
    >
      {colors.map((color, index) => (
        <stop key={index} offset={index / (colors.length - 1)} stopColor={color} />
      ))}
    </linearGradient>
  );
}

export function Hatch({
  id,
  color = "#35414d",
  space = 5,
  opacity = 0.27,
}: {
  id: string;
  color?: string;
  space?: number;
  opacity?: number;
}) {
  return (
    <pattern
      id={id}
      width={space}
      height={space}
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(38)"
    >
      <path d={`M0 0v${space}`} stroke={color} strokeWidth="1.2" opacity={opacity} />
    </pattern>
  );
}

export function Callout({
  x,
  y,
  leader,
  color = "#4b5b66",
  anchor = "middle",
  children,
}: {
  x: number;
  y: number;
  leader: string;
  color?: string;
  anchor?: "start" | "middle" | "end";
  children: string;
}) {
  return (
    <g>
      <Line d={leader} color={color} width={1.35} />
      <Label x={x} y={y} anchor={anchor} color={color}>
        {children}
      </Label>
    </g>
  );
}
