import { Label, blue, green } from "./DrawingPrimitives";
export function Cup({
  x,
  y,
  id,
  patches = false,
}: {
  x: number;
  y: number;
  id: string;
  patches?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-44" y="-34" width="88" height="68" rx="7" fill="#d8e7ef" stroke="#9db5c7" />
      <path d="M-42 21H42V32H-42Z" fill="#bdcfc4" />
      <path d="M14-10H24Q37-10 34 4Q31 15 17 11" fill="none" stroke="#688eaa" strokeWidth="7" />
      <path
        d="M-25-14H19L15 20Q-3 27-21 20Z"
        fill={`url(#${id}-metal)`}
        stroke="#6c91aa"
        strokeWidth="1.5"
      />
      <ellipse cx="-3" cy="-14" rx="22" ry="6" fill="#e7eef1" stroke="#7698ac" />
      <ellipse cx="-3" cy="-14" rx="17" ry="3" fill="#8b7058" />
      {patches && (
        <path
          d="M-15-34V34M15-34V34M-44-11H44M-44 12H44"
          fill="none"
          stroke={blue}
          strokeDasharray="3 3"
          opacity=".7"
        />
      )}
    </g>
  );
}
export function Wave({ x, y, color = blue }: { x: number; y: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[-2, -1, 0, 1, 2].map((n) => (
        <path
          key={n}
          d={`M${n * 9} ${-(18 - Math.abs(n) * 6)}v${36 - Math.abs(n) * 12}`}
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}
export function Processor({
  x,
  y,
  id,
  label = "Modèle",
}: {
  x: number;
  y: number;
  id: string;
  label?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[-1, 1].map((side) =>
        [0, 1, 2, 3].map((n) => (
          <path
            key={`${side}-${n}`}
            d={`M${side * 43} ${-20 + n * 13}h${side * 8}`}
            stroke="#829cb2"
            strokeWidth="2"
          />
        )),
      )}
      <rect
        x="-43"
        y="-35"
        width="86"
        height="70"
        rx="10"
        fill={`url(#${id}-metal)`}
        stroke="#7692aa"
        strokeWidth="1.6"
      />
      <rect x="-35" y="-23" width="70" height="46" rx="5" fill="#d2e2d0" stroke="#a3ba9c" />
      <Label x={0} y={6} color={green}>
        {label}
      </Label>
    </g>
  );
}
export function Speaker({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-20-9H-12L2-20V20L-12 9H-20Z" fill="#86aac2" stroke="#5c829e" />
      <path
        d="M10-11Q21 0 10 11M17-18Q34 0 17 18"
        fill="none"
        stroke={blue}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </g>
  );
}
