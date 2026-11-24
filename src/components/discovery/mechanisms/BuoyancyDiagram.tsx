import { useId } from "react";
import { formatMeasurement, buoyancyModel } from "@/lib/discovery/models";
import { Arrow, C, Label, type DiagramProps } from "./primitives";

const waterline = 98;
const hullHeight = 59;
const hull = "M87 3q15 6 35 6h107q23 0 46-9l-9 24q-17 26-40 31-20 4-36 4h-43q-32 0-48-18Z";
const cavity = "M100 13h128q19 0 35-6l-7 14q-15 22-34 25-15 4-33 4h-42q-28 0-40-17Z";

export function BuoyancyDiagram({ state }: DiagramProps) {
  const id = `buoyancy-hull-${useId().replace(/:/g, "")}`;
  const m = buoyancyModel(state.amount);
  const top = waterline - hullHeight + (m.displacedLitres / 1000) * hullHeight;
  const hullY = m.condition === "sinking" ? top + 20 : top;
  const loadedWidth = (m.cargo / 800) * 85;
  const forceScale = 42 / 9810;

  return (
    <g>
      <defs>
        <linearGradient id={id + "-paper"} x2="0.05" y2="1">
          <stop stopColor="#faf5e8" />
          <stop offset="1" stopColor="#eee7d7" />
        </linearGradient>
        <linearGradient id={id + "-water"} x2="0.08" y2="1">
          <stop stopColor="#c5dbd8" />
          <stop offset="0.57" stopColor="#9bbdbc" />
          <stop offset="1" stopColor="#769fa7" />
        </linearGradient>
        <linearGradient id={id + "-metal"} x2="0" y2="1">
          <stop stopColor="#93a298" />
          <stop offset="0.19" stopColor="#52716c" />
          <stop offset="0.5" stopColor="#7f9a94" />
          <stop offset="1" stopColor="#3c5958" />
        </linearGradient>
        <linearGradient id={id + "-interior"} x2="0" y2="1">
          <stop stopColor="#e9ddbd" />
          <stop offset="0.42" stopColor="#f8efd5" />
          <stop offset="1" stopColor="#b0a182" />
        </linearGradient>
        <linearGradient id={id + "-load"} x2="0" y2="1">
          <stop stopColor="#e1ba7d" />
          <stop offset="1" stopColor="#a37648" />
        </linearGradient>
        <clipPath id={id + "-section"}>
          <path d={cavity} />
        </clipPath>
        <clipPath id={id + "-sea"}>
          <path d="M8 98h344v85H8Z" />
        </clipPath>
      </defs>
      <rect x="1" y="1" width="358" height="208" rx="13" fill={`url(#${id}-paper)`} />
      <text
        x="180"
        y="25"
        textAnchor="middle"
        fill="#303936"
        fontSize="19"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        Masse totale · {m.mass} kg
      </text>
      <path d="M19 36h322" stroke="#958e7b" strokeWidth=".65" />
      <path d="M8 98h344v85H8Z" fill={`url(#${id}-water)`} />
      <path d="M8 98h344" stroke="#507e85" strokeWidth="1.25" />
      <path
        d="M14 109q16-2 32 0m-26 13 40-2m233-12h44m-58 15q34-4 58 0M16 170q32-3 78 0m193 2h54m-221 2q34 4 57 0t64 0"
        fill="none"
        stroke="#e4ebd8"
        strokeWidth="1.3"
        opacity=".73"
      />
      <path d="M10 182h340" stroke="#809e92" strokeWidth=".9" />
      <g transform={`translate(0 ${Number(hullY.toFixed(2))})`}>
        <path d={hull} fill={`url(#${id}-metal)`} stroke="#3b534f" strokeWidth="1.8" />
        <path d={cavity} fill={`url(#${id}-interior)`} stroke="#546660" strokeWidth="1.25" />
        <g clipPath={`url(#${id}-section)`}>
          <path
            d="M107 13l15 29m11-28 12 35m12-36 5 41m14-41v42m17-42-5 41m23-41-12 39m25-40-13 39m28-45-14 40"
            fill="none"
            stroke="#8c937c"
            strokeWidth="1.35"
          />
          <path d="M115 33h135m-123 10h111" stroke="#c3bda1" strokeWidth="1.3" />
          {loadedWidth > 0 && (
            <>
              <rect
                x="137"
                y="35"
                width={loadedWidth}
                height="11"
                rx="1"
                fill={`url(#${id}-load)`}
                stroke="#7e6246"
              />
              <path
                d={`M139 38h${Math.max(0, loadedWidth - 4)}m0 4h-${Math.max(0, loadedWidth - 4)}`}
                stroke="#e9c58f"
                strokeWidth=".75"
              />
            </>
          )}
        </g>
        <path d="M89 3q18 5 34 5h107q23-1 45-8" fill="none" stroke="#405651" strokeWidth="2.1" />
        <path d="M91 7q16 4 33 4h104q27-1 40-6" fill="none" stroke="#e4e6ca" strokeWidth="1.05" />
        <path d="M104 38q18 18 42 17h48q24 0 41-6" fill="none" stroke="#a9b5a2" strokeWidth="1.1" />
        {[113, 127, 145, 165, 184, 203, 222, 243, 258].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={i < 7 ? 11 : i === 7 ? 9 : 6}
            r="1.35"
            fill="#c4b799"
            stroke="#53675e"
            strokeWidth=".55"
          />
        ))}
      </g>
      <g clipPath={`url(#${id}-sea)`}>
        <path
          d={hull}
          transform={`translate(0 ${Number(hullY.toFixed(2))})`}
          fill="#56949c"
          opacity=".22"
        />
      </g>
      <path d="M22 98h62m194 0h60" stroke="#477883" strokeWidth="1.65" />
      <path
        d={`M194 55h37l${244 - 231} ${Math.max(5, hullY + 9 - 55)}`}
        fill="none"
        stroke="#705b41"
        strokeWidth="1.1"
      />
      <Label x={188} y={53} color="#705b41">
        Coque étanche
      </Label>
      <Label x={41} y={58} color={C.green}>
        Poussée
      </Label>
      <Label x={41} y={79} color={C.green}>
        {formatMeasurement(m.buoyantForce / 1000)} kN
      </Label>
      <Arrow x={41} y={160} dx={0} dy={-m.buoyantForce * forceScale} color={C.green} />
      <Label x={319} y={58} color="#9b4e29">
        Poids
      </Label>
      <Label x={319} y={79} color="#9b4e29">
        {formatMeasurement(m.weight / 1000)} kN
      </Label>
      <Arrow x={319} y={112} dx={0} dy={m.weight * forceScale} color="#9b4e29" />
      <Label x={180} y={201}>
        Volume déplacé · {m.displacedLitres} L
      </Label>
    </g>
  );
}
