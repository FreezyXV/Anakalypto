import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import {
  quadraticTraining,
  generalizationExample,
  attentionWeights,
  correlateValid,
} from "@/lib/lesson-visuals/learning-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (n: number) => Math.round(n * 100) / 100;
const french = (n: number) => String(round(n)).replace(".", ",");
export function LearningDrawing({ kind, step, id }: Props) {
  if (kind === "gradient") {
    const states = quadraticTraining(2),
      s = states[step]!,
      x = (w: number) => 53 + 40 * w,
      y = (l: number) => 170 - 12 * l,
      curve = Array.from({ length: 61 }, (_, n) => {
        const w = n / 10;
        return `${n ? "L" : "M"}${x(w)} ${round(y((w - 3) ** 2))}`;
      }).join("");
    return (
      <>
        <path d="M43 44V176H323" fill="none" stroke="#8da5ba" strokeWidth="1.5" />
        <path d="M53 116H310M53 62H310" stroke="#d4e0e9" strokeDasharray="4 4" />
        <path d={curve} fill="none" stroke={blue} strokeWidth="3" />
        {step > 0 && (
          <Arrow
            x1={round(x(states[step - 1]!.weight))}
            y1={round(y(states[step - 1]!.loss))}
            x2={round(x(s.weight))}
            y2={round(y(s.loss))}
            color={warm}
          />
        )}
        <path
          d={`M${round(x(s.weight))} ${round(y(s.loss))}V175`}
          stroke={warm}
          strokeDasharray="4 4"
        />
        <Dot x={round(x(s.weight))} y={round(y(s.loss))} color={warm} />
        <circle cx={x(3)} cy={y(0)} r="3" fill={green} />
        <Label x={180} y={27}>
          Exemple : L = (w − 3)²
        </Label>
        <Label x={180} y={65}>
          w = {french(s.weight)}
        </Label>
        <Label x={180} y={92}>
          L ≈ {french(s.loss)}
        </Label>
        <Label x={52} y={27}>
          Perte
        </Label>
        <Label x={280} y={201}>
          Paramètre w
        </Label>
      </>
    );
  }
  if (kind === "overfitting") {
    const t = [1, 5, 10][step]!,
      x = (v: number) => 55 + 25 * v,
      y = (v: number) => 170 - 116 * v,
      selected = generalizationExample(t);
    const path = (key: "training" | "validation") =>
      Array.from({ length: 41 }, (_, n) => {
        const time = n / 4;
        return `${n ? "L" : "M"}${x(time)} ${round(y(generalizationExample(time)[key]))}`;
      }).join("");
    return (
      <>
        <path d="M42 53V176H326" fill="none" stroke="#8da5ba" strokeWidth="1.5" />
        <path d="M50 80H315M50 125H315" stroke="#d5e0e9" strokeDasharray="4 4" />
        <path d={path("training")} fill="none" stroke={blue} strokeWidth="3" />
        <path d={path("validation")} fill="none" stroke={warm} strokeWidth="3" />
        <path d={`M${x(t)} 54V173`} stroke="#8298ac" strokeDasharray="4 4" />
        <Dot x={x(t)} y={round(y(selected.training))} />
        <Dot x={x(t)} y={round(y(selected.validation))} color={warm} />
        <Label x={99} y={29} color={blue}>
          Entraînement
        </Label>
        <Label x={272} y={29} color={warm}>
          Validation
        </Label>
        <Label x={180} y={201}>
          Durée d’entraînement →
        </Label>
      </>
    );
  }
  if (kind === "attention") {
    const tokens = ["Le", "chat", "dort"];
    if (step === 2) {
      const rows = [
        [0, 0, 0],
        [Math.log(0.25), Math.log(0.75), 0],
        [Math.log(0.1), Math.log(0.2), Math.log(0.7)],
      ].map((row, i) => attentionWeights(row, i));
      return (
        <>
          {tokens.map((token, i) => (
            <g key={token}>
              <Label x={149 + i * 47} y={45}>
                {token}
              </Label>
              <Label x={109} y={78 + i * 39} anchor="end">
                {token}
              </Label>
            </g>
          ))}
          {rows.map((row, i) =>
            row.map((v, j) => (
              <g key={`${i}-${j}`}>
                <rect
                  x={127 + j * 47}
                  y={52 + i * 39}
                  width="44"
                  height="36"
                  rx="4"
                  fill={
                    j > i
                      ? "#e5e9ee"
                      : `rgb(${round(218 - v * 126)} ${round(235 - v * 85)} ${round(244 - v * 43)})`
                  }
                  stroke="#adbfce"
                />
                {j > i ? (
                  <path
                    d={`M${140 + j * 47} ${62 + i * 39}l17 17m0-17-17 17`}
                    stroke="#a1b1bf"
                    strokeWidth="1.5"
                  />
                ) : (
                  <text
                    x={149 + j * 47}
                    y={76 + i * 39}
                    fontSize="18"
                    textAnchor="middle"
                    fill={v > 0.65 ? "white" : ink}
                  >
                    {french(v)}
                  </text>
                )}
              </g>
            )),
          )}
          <Label x={180} y={24}>
            Ligne : jeton qui reçoit
          </Label>
          <Label x={180} y={201}>
            Causal : le futur est masqué
          </Label>
        </>
      );
    }
    const weights = attentionWeights([Math.log(0.2), Math.log(0.5), Math.log(0.3)]);
    return (
      <>
        {tokens.map((token, i) => (
          <g key={token}>
            <rect
              x={34 + i * 111}
              y="58"
              width="70"
              height="42"
              rx="8"
              fill={i === 1 ? "#d5e6d1" : `url(#${id}-metal)`}
              stroke={i === 1 ? green : "#8ca3b9"}
              strokeWidth="1.6"
            />
            <Label x={69 + i * 111} y={85}>
              {token}
            </Label>
            {step === 0 ? (
              <>
                <Label x={69 + i * 111} y={137}>
                  Position {i + 1}
                </Label>
                <path
                  d={`M${48 + i * 111} 156h${22 + i * 7}`}
                  stroke="#94adbf"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <path
                  d={`M${69 + i * 111} 104Q${69 + i * 111} 145 180 159`}
                  fill="none"
                  stroke={i === 1 ? green : blue}
                  strokeWidth={2 + weights[i]! * 5}
                />
                <Label x={69 + i * 111} y={128}>
                  {french(weights[i]!)}
                </Label>
              </>
            )}
          </g>
        ))}
        <Label x={180} y={27}>
          {step === 0
            ? "Des représentations et des positions"
            : "Une tête · poids choisis pour l’exemple"}
        </Label>
        {step === 1 && (
          <>
            <rect x="130" y="157" width="100" height="26" rx="7" fill="#d2e4cf" stroke={green} />
            <Label x={180} y={177}>
              Combiner
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {step === 0 ? "Jeton ≠ forcément un mot" : "Somme des poids : 1"}
        </Label>
      </>
    );
  }
  if (kind === "convolution") {
    const image = Array.from({ length: 5 }, () => [0, 0, 1, 1, 1]),
      kernel = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ],
      response = correlateValid(image, kernel);
    return (
      <>
        {image.map((row, y) =>
          row.map((v, x) => (
            <g key={`${x}-${y}`}>
              <rect
                x={25 + x * 23}
                y={55 + y * 23}
                width="23"
                height="23"
                fill={v ? "#739ebd" : "#edf3f7"}
                stroke="#b2c4d3"
                strokeWidth=".8"
              />
              <text
                x={36.5 + x * 23}
                y={72 + y * 23}
                fontSize="18"
                textAnchor="middle"
                fill={v ? "white" : ink}
              >
                {v}
              </text>
            </g>
          )),
        )}
        {step === 0 ? (
          <>
            {kernel.map((row, y) =>
              row.map((v, x) => (
                <g key={`${x}-${y}`}>
                  <rect
                    x={203 + x * 28}
                    y={75 + y * 28}
                    width="28"
                    height="28"
                    fill={v < 0 ? "#edcfad" : v > 0 ? "#c5ddbf" : "#edf1f4"}
                    stroke="#a2b6c8"
                  />
                  <text
                    x={217 + x * 28}
                    y={95 + y * 28}
                    fontSize="18"
                    textAnchor="middle"
                    fill={ink}
                  >
                    {v}
                  </text>
                </g>
              )),
            )}
            <Label x={248} y={52}>
              Filtre 3 × 3
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <rect x="25" y="55" width="69" height="69" fill="none" stroke={warm} strokeWidth="3" />
            <Arrow x1={149} y1={105} x2={229} y2={105} color={warm} />
            <rect x="244" y="82" width="57" height="50" rx="8" fill="#cadfbe" stroke={green} />
            <text x="272" y="116" fontSize="30" fontWeight="700" textAnchor="middle" fill={green}>
              {response[0]![0]}
            </text>
            <Label x={272} y={156}>
              Somme locale
            </Label>
          </>
        ) : (
          <>
            {response.map((row, y) =>
              row.map((v, x) => (
                <g key={`${x}-${y}`}>
                  <rect
                    x={220 + x * 31}
                    y={77 + y * 31}
                    width="31"
                    height="31"
                    fill={v ? "#6998b7" : "#edf3f7"}
                    stroke="#acc1d1"
                  />
                  <text
                    x={235.5 + x * 31}
                    y={99 + y * 31}
                    fontSize="18"
                    textAnchor="middle"
                    fill={v ? "white" : ink}
                  >
                    {v}
                  </text>
                </g>
              )),
            )}
            <Arrow x1={153} y1={117} x2={207} y2={117} />
            <Label x={266} y={53}>
              Carte 3 × 3
            </Label>
          </>
        )}
        <Label x={85} y={32}>
          Image 5 × 5
        </Label>
        <Label x={180} y={201}>
          {
            [
              "Coefficients de démonstration",
              "Neuf produits, une somme",
              "Même filtre · pas 1 · sans bordure",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "recurrent") {
    return (
      <>
        {["Le", "chat", "dort"].map((word, i) => (
          <g key={word}>
            <rect
              x={47 + i * 101}
              y="61"
              width="67"
              height="46"
              rx="8"
              fill={i === step ? "#c7dfbe" : i < step ? "#dce8d8" : "#e7edf2"}
              stroke={i === step ? green : "#9fb2c3"}
              strokeWidth={i === step ? 2.5 : 1.5}
            />
            <text
              x={80 + i * 101}
              y="91"
              fontSize="24"
              textAnchor="middle"
              fill={i > step ? "#8c9eae" : ink}
            >
              h{["₁", "₂", "₃"][i]}
            </text>
            <rect
              x={47 + i * 101}
              y="145"
              width="67"
              height="30"
              rx="6"
              fill={i === step ? "#d3e5f0" : "#e8eff4"}
              stroke="#b1c3d1"
            />
            <Label x={80 + i * 101} y={167}>
              {word}
            </Label>
            <Arrow
              x1={80 + i * 101}
              y1={139}
              x2={80 + i * 101}
              y2={113}
              color={i === step ? blue : "#9bafc0"}
            />
            {i < 2 && (
              <Arrow
                x1={120 + i * 101}
                y1={83}
                x2={141 + i * 101}
                y2={83}
                color={i < step ? green : "#a3b5c5"}
              />
            )}
          </g>
        ))}
        <Label x={18} y={91}>
          h₀
        </Label>
        <Arrow x1={31} y1={83} x2={43} y2={83} width={1.8} />
        <Label x={180} y={28}>
          Un même calcul répété dans le temps
        </Label>
        <Label x={180} y={201}>
          État précédent + nouvel élément
        </Label>
      </>
    );
  }
  return null;
}
