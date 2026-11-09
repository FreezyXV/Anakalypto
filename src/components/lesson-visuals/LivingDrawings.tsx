import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function LivingDrawing({ kind, step, id }: Props) {
  if (kind === "neuron")
    return (
      <>
        <path
          d="M49 107L26 72M39 91L17 99M49 108L18 135M39 119L35 146M51 102L62 69M57 86L78 75"
          stroke="#778eaa"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M49 107Q60 86 78 105L142 106"
          fill="none"
          stroke="#c6d8e8"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path d="M83 107H142" stroke="#778eaa" strokeWidth="3" />
        <circle cx="63" cy="108" r="16" fill="#d9e8f2" stroke={blue} strokeWidth="2" />
        <circle cx="63" cy="108" r="6" fill="#98b8d3" />
        <path d="M145 107L166 85M145 107L166 126" stroke="#9baabc" strokeDasharray="3 3" />
        <circle cx="249" cy="105" r="77" fill="#f4f8fc" stroke="#b6c8d8" strokeWidth="1.5" />
        <path
          d="M191 64Q239 66 243 84V132Q233 151 191 146"
          fill="#c5d9eb"
          stroke={blue}
          strokeWidth="2"
        />
        <path
          d="M284 52Q257 74 268 105Q256 138 284 158L312 146V65Z"
          fill="#e3d4bd"
          stroke="#a08055"
          strokeWidth="2"
        />
        {[79, 105, 131].map((y) => (
          <path key={y} d={`M267 ${y - 5}h8v10h-8`} fill="none" stroke={warm} strokeWidth="3" />
        ))}
        {[81, 107, 131].map((y) => (
          <circle key={y} cx="220" cy={y} r="7" fill="white" stroke={blue} />
        ))}
        {step === 0 && <Arrow x1={84} y1={106} x2={132} y2={106} color={warm} />}
        {step > 0 &&
          [0, 1, 2].map((i) => (
            <Dot key={i} x={step === 2 ? 262 : 250} y={82 + i * 25} color={warm} r={3} />
          ))}
        <Label x={72} y={42}>
          Neurone
        </Label>
        <Label x={250} y={25}>
          Synapse agrandie
        </Label>
        <Label x={180} y={202}>
          {["Signal dans l’axone", "Messagers dans la fente", "Récepteurs activés"][step]}
        </Label>
      </>
    );
  if (kind === "alveoli")
    return (
      <>
        <path
          d="M128 37V66Q70 72 72 113Q72 153 123 158Q172 153 175 112Q176 75 143 66V37"
          fill="#f7e1d7"
          stroke="#b18477"
          strokeWidth="2"
        />
        <path
          d="M183 67Q214 117 182 158L215 171Q257 116 214 54Z"
          fill={`url(#${id}-metal)`}
          stroke="#ad6770"
          strokeWidth="2"
        />
        <path d="M198 65Q236 119 198 163" fill="none" stroke="#bf8891" strokeWidth="17" />
        {[77, 106, 143].map((y, i) => (
          <ellipse
            key={y}
            cx={i === 1 ? 215 : 203}
            cy={y}
            rx="7"
            ry="5"
            fill={step === 2 ? "#b9474e" : "#965963"}
            stroke="#843c48"
          />
        ))}
        {step === 0 && <Arrow x1={135} y1={34} x2={135} y2={82} />}
        {step > 0 && (
          <>
            <Arrow x1={138} y1={97} x2={200} y2={97} color={warm} />
            <Arrow x1={201} y1={132} x2={140} y2={132} />
            <Label x={125} y={91} color={warm}>
              O₂
            </Label>
            <Label x={127} y={152} color={blue}>
              CO₂
            </Label>
          </>
        )}
        {step === 2 && <Arrow x1={215} y1={145} x2={244} y2={173} color={warm} />}
        <Label x={71} y={29}>
          Air
        </Label>
        <Label x={275} y={49}>
          Capillaire
        </Label>
        <path d="M265 54L222 78" stroke={ink} />
        <Label x={89} y={188}>
          Alvéole
        </Label>
        <Label x={275} y={196}>
          Sang
        </Label>
      </>
    );
  if (kind === "dna") {
    const bases = ["A", "G", "T", "C"],
      other = ["T", "C", "A", "G"];
    if (step === 0) {
      const coordinate = (y: number, side: number) =>
        Math.round((180 + side * 43 * Math.sin(((y - 30) * Math.PI) / 42 + 0.5)) * 100) / 100;
      const strand = (side: number) =>
        Array.from(
          { length: 76 },
          (_, i) => `${i ? "L" : "M"}${coordinate(30 + i * 2, side)} ${30 + i * 2}`,
        ).join(" ");
      return (
        <>
          {Array.from({ length: 13 }, (_, i) => 33 + i * 12).map((y, i) => (
            <path
              key={y}
              d={`M${coordinate(y, 1)} ${y}H${coordinate(y, -1)}`}
              stroke={i % 2 ? "#a8b791" : "#c8ad74"}
              strokeWidth="4"
            />
          ))}
          <path d={strand(1)} fill="none" stroke={blue} strokeWidth="6" strokeLinecap="round" />
          <path d={strand(-1)} fill="none" stroke={warm} strokeWidth="6" strokeLinecap="round" />
          <Label x={74} y={96}>
            Brin
          </Label>
          <path d="M98 99L145 105" stroke={blue} />
          <Label x={282} y={96}>
            Brin
          </Label>
          <path d="M256 99L215 115" stroke={warm} />
          <Label x={180} y={204}>
            Deux brins enroulés
          </Label>
        </>
      );
    }
    return (
      <>
        {(step === 1 ? [111, 249] : [36, 158, 203, 325]).map((x, i) => (
          <path
            key={x}
            d={`M${x} 38V173`}
            stroke={step === 1 ? (i === 0 ? blue : warm) : i === 0 ? blue : i === 2 ? warm : green}
            strokeWidth="6"
            strokeLinecap="round"
          />
        ))}
        {bases.map((b, i) => (
          <g key={i}>
            {step === 1 ? (
              <>
                <path d={`M114 ${58 + i * 32}H246`} stroke="#adbbca" strokeDasharray="4 4" />
                <Label x={143} y={64 + i * 32} color={blue}>
                  {b}
                </Label>
                <Label x={216} y={64 + i * 32} color={warm}>
                  {other[i]}
                </Label>
              </>
            ) : (
              <>
                <path
                  d={`M39 ${58 + i * 32}H155M206 ${58 + i * 32}H322`}
                  stroke="#adbbca"
                  strokeDasharray="4 4"
                />
                <Label x={66} y={64 + i * 32} color={blue}>
                  {b}
                </Label>
                <Label x={128} y={64 + i * 32} color={green}>
                  {other[i]}
                </Label>
                <Label x={234} y={64 + i * 32} color={warm}>
                  {other[i]}
                </Label>
                <Label x={296} y={64 + i * 32} color={green}>
                  {b}
                </Label>
              </>
            )}
          </g>
        ))}
        <Label x={180} y={22}>
          {step === 1 ? "A—T · G—C" : "Un ancien + un nouveau brin"}
        </Label>
        <Label x={180} y={201}>
          {step === 1 ? "Bases complémentaires" : "Deux molécules filles"}
        </Label>
      </>
    );
  }
  return null;
}
