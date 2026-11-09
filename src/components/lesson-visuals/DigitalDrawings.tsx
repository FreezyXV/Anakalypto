import { Label, Arrow, ink, blue, warm } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function DigitalDrawing({ kind, step, id }: Props) {
  if (kind === "binary") {
    const bits = [
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
      ][step] ?? [0, 0, 0, 1],
      weights = [8, 4, 2, 1];
    return (
      <>
        <Label x={180} y={33}>
          Valeur de chaque position
        </Label>
        {weights.map((w, i) => (
          <g key={w}>
            <Label x={63 + i * 78} y={66}>
              {w}
            </Label>
            <rect
              x={34 + i * 78}
              y="81"
              width="58"
              height="61"
              rx="10"
              fill={bits[i] ? `url(#${id}-gold)` : "#e5edf4"}
              stroke={bits[i] ? "#b88e37" : "#a9b9c9"}
              strokeWidth="2"
            />
            <text
              x={63 + i * 78}
              y="123"
              textAnchor="middle"
              fontSize="32"
              fontWeight="700"
              fill={ink}
            >
              {bits[i]}
            </text>
            <Label x={63 + i * 78} y={168} color={bits[i] ? warm : "#6f8296"}>
              {bits[i] ? w : 0}
            </Label>
          </g>
        ))}
        <Label x={180} y={199}>
          {["1 = 1", "4 + 1 = 5", "8 + 4 + 1 = 13"][step]}
        </Label>
      </>
    );
  }
  if (kind === "pixels") {
    const size = step === 1 ? 12 : 17,
      left = 28,
      top = 51;
    const pattern = (x: number, y: number) =>
      x >= 1 && x <= 4 && y >= 1 && y <= 4
        ? x === 1 || y === 1 || x === 4 || y === 4
          ? "#d59849"
          : "#f6dca1"
        : "#c9ddeb";
    return (
      <>
        <rect
          x="18"
          y="37"
          width="143"
          height="135"
          rx="10"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        {Array.from({ length: 6 }, (_, y) =>
          Array.from({ length: 6 }, (_, x) => (
            <rect
              key={`${x}-${y}`}
              x={left + x * size}
              y={top + y * size}
              width={size}
              height={size}
              fill={pattern(x, y)}
              stroke={step === 0 ? "#fff" : "#eef3f8"}
              strokeWidth=".5"
            />
          )),
        )}
        {step === 1 && (
          <>
            <rect
              x={left + size}
              y={top + size}
              width={4 * size}
              height={4 * size}
              fill="none"
              stroke={ink}
              strokeWidth="2"
            />
            <path d={`M28 ${top + 6 * size + 8}h${6 * size}`} stroke={blue} />
            <Arrow x1={161} y1={108} x2={187} y2={108} />
            <g>
              {Array.from({ length: 4 }, (_, y) =>
                Array.from({ length: 4 }, (_, x) => (
                  <rect
                    key={`${x}-${y}`}
                    x={201 + x * 28}
                    y={52 + y * 28}
                    width="28"
                    height="28"
                    fill={pattern(x + 1, y + 1)}
                    stroke="#fff"
                    strokeWidth=".5"
                  />
                )),
              )}
            </g>
          </>
        )}
        {step === 0 && (
          <>
            <path d="M185 56H319V164H185Z" fill="#edf4f8" stroke="#9eb1c4" />
            <Label x={252} y={93}>
              6 × 6
            </Label>
            <Label x={252} y={124}>
              36 pixels
            </Label>
          </>
        )}
        {step === 2 && (
          <>
            <Arrow x1={161} y1={107} x2={193} y2={107} />
            <rect x="203" y="57" width="109" height="104" rx="7" fill="#172231" />
            {["#e74840", "#48b65b", "#416ee1"].map((color, i) => (
              <rect
                key={color}
                x={213 + i * 31}
                y="67"
                width="25"
                height="84"
                rx="3"
                fill={color}
              />
            ))}
            <Label x={225} y={184} color={warm}>
              R
            </Label>
            <Label x={256} y={184}>
              V
            </Label>
            <Label x={287} y={184} color={blue}>
              B
            </Label>
          </>
        )}
        <Label x={180} y={204}>
          {
            [
              "Une couleur par échantillon",
              "Détail agrandi, mêmes pixels",
              "Un arrangement RVB possible",
            ][step]
          }
        </Label>
        <Label x={88} y={27}>
          {step === 1 ? "Grille 6 × 6" : "Image matricielle"}
        </Label>
      </>
    );
  }
  return null;
}
