import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import {
  pendulumPeriod,
  radiocarbonFraction,
  insertionTrace,
  ean13,
} from "@/lib/lesson-visuals/models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (n: number) => Math.round(n * 100) / 100;
export function InquiryDrawing({ kind, step, id }: Props) {
  if (kind === "pendulum") {
    const length = [0.5, 1, 2][step]!,
      pixels = length * 56,
      angle = -Math.PI / 15;
    const x = round(180 + pixels * Math.sin(angle)),
      y = round(46 + pixels * Math.cos(angle));
    return (
      <>
        <path d="M128 38H232" stroke="#8195a7" strokeWidth="9" strokeLinecap="round" />
        <path d={`M180 46V${46 + pixels + 8}`} stroke="#b4c1ce" strokeDasharray="4 4" />
        <path d={`M180 46L${x} ${y}`} stroke={ink} strokeWidth="2" />
        <circle cx={x} cy={y} r="10" fill={`url(#${id}-gold)`} stroke="#9c7c3d" strokeWidth="2" />
        <path
          d={`M${round(180 + pixels * Math.sin(-angle))} ${y}A${pixels} ${pixels} 0 0 1 ${x} ${y}`}
          fill="none"
          stroke="#a3b7cb"
          strokeDasharray="3 3"
        />
        <Dot x={180} y={46} r={3} />
        <Label x={278} y={83}>
          L = {String(length).replace(".", ",")} m
        </Label>
        <Label x={277} y={126}>
          T ≈ {pendulumPeriod(length).toFixed(2).replace(".", ",")} s
        </Label>
        <Label x={180} y={201}>
          T : durée d’un aller-retour
        </Label>
      </>
    );
  }
  if (kind === "radiocarbon") {
    const years = [0, 5730, 11460][step]!,
      fraction = radiocarbonFraction(years),
      remaining = 64 * fraction;
    return (
      <>
        <rect x="25" y="51" width="185" height="115" rx="13" fill="#f0e4cf" stroke="#bba786" />
        {Array.from({ length: 64 }, (_, i) => (
          <circle
            key={i}
            cx={39 + (i % 8) * 22}
            cy={64 + Math.floor(i / 8) * 13}
            r="4"
            fill={i < remaining ? warm : "#cbc8bf"}
            stroke={i < remaining ? "#9b5125" : "#b2b0aa"}
            strokeWidth=".7"
          />
        ))}
        <Label x={120} y={30}>
          Fraction de C¹⁴
        </Label>
        <text x="278" y="108" fontSize="35" fontWeight="700" fill={warm} textAnchor="middle">
          {fraction * 100} %
        </text>
        <Label x={278} y={140}>
          {years.toLocaleString("fr-FR")} ans
        </Label>
        <Label x={180} y={201}>
          Gris : noyaux transformés
        </Label>
      </>
    );
  }
  if (kind === "probability")
    return (
      <>
        <circle
          cx="57"
          cy="107"
          r="23"
          fill={`url(#${id}-gold)`}
          stroke="#ab8844"
          strokeWidth="2"
        />
        <Label x={57} y={113}>
          ?
        </Label>
        <path d="M81 107L142 65M81 107L142 149" fill="none" stroke={blue} strokeWidth="2" />
        <Label x={157} y={71}>
          P
        </Label>
        <Label x={157} y={155}>
          F
        </Label>
        {step === 0 ? (
          <>
            <Label x={235} y={71}>
              1 / 2
            </Label>
            <Label x={235} y={155}>
              1 / 2
            </Label>
          </>
        ) : (
          <>
            {[
              [71, 46, "PP"],
              [71, 90, "PF"],
              [149, 130, "FP"],
              [149, 174, "FF"],
            ].map(([start, end, text], i) => (
              <g key={String(text)}>
                <path
                  d={`M174 ${start}L240 ${end}`}
                  fill="none"
                  stroke={step === 2 && (i === 1 || i === 2) ? green : "#a2b2c1"}
                  strokeWidth={step === 2 && (i === 1 || i === 2) ? 4 : 2}
                />
                <rect
                  x="244"
                  y={Number(end) - 17}
                  width="88"
                  height="29"
                  rx="7"
                  fill={step === 2 && (i === 1 || i === 2) ? "#d4e7ce" : "#edf2f8"}
                  stroke="#b2c0ce"
                />
                <Label x={288} y={Number(end) + 4}>
                  {text}
                </Label>
              </g>
            ))}
          </>
        )}
        <Label x={180} y={27}>
          Pièce idéale équilibrée
        </Label>
        <Label x={180} y={204}>
          {step === 2
            ? "PF ou FP : 2/4 = 1/2"
            : step === 1
              ? "Chaque suite : 1/4"
              : "P : Pile · F : Face"}
        </Label>
      </>
    );
  if (kind === "sorting") {
    const trace = insertionTrace([4, 1, 3, 2]),
      values = trace[step === 0 ? 0 : step === 1 ? 1 : 3]!,
      prefix = step === 0 ? 1 : step === 1 ? 2 : 4;
    return (
      <>
        <path d="M24 159H337" stroke="#a8b7c6" strokeWidth="1.5" />
        {values.map((n, i) => (
          <g key={i}>
            <rect
              x={41 + i * 78}
              y={159 - n * 23}
              width="45"
              height={n * 23}
              rx="5"
              fill={i < prefix ? "#b8d3aa" : `url(#${id}-metal)`}
              stroke={i < prefix ? green : ink}
              strokeWidth="1.5"
            />
            <Label x={63 + i * 78} y={153 - n * 23}>
              {n}
            </Label>
          </g>
        ))}
        {step === 1 && (
          <>
            <path d="M137 40Q104 13 67 40" fill="none" stroke={warm} strokeWidth="2" />
            <Arrow x1={81} y1={30} x2={65} y2={41} color={warm} width={2} />
          </>
        )}
        <path
          d={`M41 174v5H${86 + (prefix - 1) * 78}v-5`}
          fill="none"
          stroke={green}
          strokeWidth="2"
        />
        <Label x={180} y={204}>
          Vert : partie déjà triée
        </Label>
      </>
    );
  }
  if (kind === "cpu")
    return (
      <>
        <rect
          x="116"
          y="48"
          width="220"
          height="127"
          rx="13"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        {Array.from({ length: 8 }, (_, i) => (
          <path
            key={i}
            d={`M${130 + i * 26} 40v8M${130 + i * 26} 175v8`}
            stroke="#9b8256"
            strokeWidth="4"
          />
        ))}
        <rect x="23" y="65" width="66" height="94" rx="7" fill="#e8e0c7" stroke="#9d8f6e" />
        {[80, 96, 112, 128, 144].map((y) => (
          <path key={y} d={`M33 ${y}h46`} stroke="#b8ad92" strokeWidth="2" />
        ))}
        <path d="M89 92H125M89 134H125" stroke="#91a6ba" strokeWidth="3" />
        <rect
          x="133"
          y="65"
          width="182"
          height="36"
          rx="7"
          fill={step === 1 ? "#f3d396" : "#e8eef5"}
          stroke={ink}
        />
        <Label x={224} y={90}>
          Commande
        </Label>
        <rect x="133" y="114" width="89" height="43" rx="6" fill="#e4edf5" stroke={blue} />
        <Label x={177} y={143}>
          {step === 2 ? "5" : "2 · 3"}
        </Label>
        <path
          d="M246 114H313L296 157H261Z"
          fill={step === 2 ? "#f3d396" : "#d8e1e9"}
          stroke={ink}
        />
        <Label x={280} y={141}>
          +
        </Label>
        <path d="M177 101V113M280 101V113" stroke="#8fa5b9" strokeWidth="2" />
        {step === 0 && <Arrow x1={85} y1={92} x2={126} y2={92} color={warm} />}
        {step === 1 && <Arrow x1={226} y1={94} x2={226} y2={111} color={warm} />}
        {step === 2 && (
          <>
            <path d="M280 159V168H176V158" fill="none" stroke={warm} strokeWidth="2" />
          </>
        )}
        <Label x={56} y={39}>
          Mémoire
        </Label>
        <Label x={225} y={28}>
          Processeur
        </Label>
        <Label x={180} y={205}>
          {step === 2 ? "Résultat rangé dans un registre" : "Registres et unité de calcul"}
        </Label>
      </>
    );
  if (kind === "barcode") {
    const code = ean13("590123412345");
    return (
      <>
        <rect x="15" y="39" width="234" height="99" rx="8" fill="white" stroke="#c7d3df" />
        {[...code.modules].map((b, i) =>
          b === "1" ? (
            <rect
              key={i}
              x={39 + i * 2}
              y="52"
              width="2"
              height={i < 3 || i >= 92 || (i >= 45 && i < 50) ? 60 : 53}
              fill={ink}
            />
          ) : null,
        )}
        <Label x={133} y={130}>
          {code.digits}
        </Label>
        <path
          d="M277 66H320L329 90 311 104 300 143H279L285 103 270 91Z"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M277 74h35l4 12h-38Z" fill="#a5c9df" stroke={blue} />
        {step === 0 && <path d="M288 82H28" stroke="#cb5c4e" strokeWidth="2" opacity=".7" />}
        {step === 1 && (
          <path
            d={[...code.modules]
              .map((b, i) => `${i ? "L" : "M"}${39 + i * 2} ${b === "1" ? 167 : 151}H${41 + i * 2}`)
              .join(" ")}
            fill="none"
            stroke={blue}
            strokeWidth="1.7"
          />
        )}
        {step === 2 && (
          <>
            <Arrow x1={276} y1={157} x2={242} y2={157} />
            <rect x="42" y="147" width="192" height="31" rx="6" fill="#e5efd9" stroke={green} />
            <Label x={138} y={169}>
              Fiche article
            </Label>
          </>
        )}
        <Label x={180} y={203}>
          {step === 2 ? "Identifiant ≠ prix" : "EAN-13 · exemple technique"}
        </Label>
      </>
    );
  }
  return null;
}
