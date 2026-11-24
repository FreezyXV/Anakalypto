import { Fragment, type ReactNode } from "react";

type Stop = readonly [number, string];

export function gradient(id: string, stops: readonly Stop[], vertical = false) {
  return (
    <linearGradient id={id} x1={0} y1={0} x2={vertical ? 0 : 1} y2={vertical ? 1 : 0}>
      {stops.map(([offset, color]) => (
        <stop key={offset} offset={offset} stopColor={color} />
      ))}
    </linearGradient>
  );
}

export function clip(id: string, outline: string, drawing: ReactNode) {
  return (
    <Fragment>
      <defs>
        <clipPath id={id}>
          <path d={outline} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>{drawing}</g>
    </Fragment>
  );
}

export function position(index: number, seed: number) {
  const phase = Math.sin((index + 1) * (seed * 11.73 + 23.17)) * 43758.5453;
  return phase - Math.floor(phase);
}

export function pin(x: number, y: number, color: string) {
  return <circle cx={x} cy={y} r={2.2} fill={color} stroke="#fbf4e3" strokeWidth="0.9" />;
}
