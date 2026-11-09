import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (n: number) => Math.round(n * 100) / 100;
export function CultureDrawing({ kind, step, id }: Props) {
  if (kind === "perspective")
    return (
      <>
        <path d="M25 185L180 65 335 185Z" fill="#e6e4d9" />
        <path d="M18 65H342" stroke="#a8b7c9" strokeDasharray="5 5" />
        {[-150, -90, -30, 30, 90, 150].map((x) => (
          <path key={x} d={`M180 65L${180 + x} 185`} stroke={blue} strokeWidth="1.7" />
        ))}
        {step > 0 &&
          [0, 1, 2, 3, 4, 6].map((z) => (
            <path
              key={z}
              d={`M${round(180 - 150 / (z + 1))} ${round(65 + 120 / (z + 1))}H${round(180 + 150 / (z + 1))}`}
              stroke="#889dac"
              strokeWidth="1.5"
            />
          ))}
        <Dot x={180} y={65} color={warm} />
        <Label x={180} y={30}>
          Point de fuite
        </Label>
        <path d="M180 35V54" stroke={warm} />
        {step === 2 &&
          [0.3, 2].map((z) => {
            const scale = round(1 / (z + 1)),
              x = round(180 - 60 / (z + 1)),
              y = round(65 + 120 / (z + 1));
            return (
              <g key={z} transform={`translate(${x} ${y}) scale(${scale})`}>
                <circle cy="-64" r="7" fill={`url(#${id}-gold)`} stroke={ink} />
                <path
                  d="M0-56V-23M-15-37L0-48 15-37M0-23L-12 0M0-23L12 0"
                  fill="none"
                  stroke={ink}
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        <Label x={180} y={205}>
          {step === 2 ? "Même taille réelle" : "Horizon à hauteur de l’œil"}
        </Label>
      </>
    );
  if (kind === "printing") {
    const y = step === 1 ? 113 : 88;
    return (
      <>
        <path
          d="M69 174V39H239V174M59 41H249M61 174H246"
          fill="none"
          stroke="#977353"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <path d="M148 42V112" stroke="#75654f" strokeWidth="14" />
        {[54, 65, 76, 87, 98].map((y) => (
          <path key={y} d={`M139 ${y}l18-7`} stroke="#cbb491" strokeWidth="2" />
        ))}
        <path d="M118 60H188" stroke={ink} strokeWidth="5" strokeLinecap="round" />
        <rect x="107" y={y} width="86" height="13" rx="3" fill={`url(#${id}-metal)`} stroke={ink} />
        <rect x="91" y="147" width="117" height="10" fill="#ac9475" stroke={ink} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={104 + i * 23}
              y="129"
              width="20"
              height="17"
              fill={`url(#${id}-metal)`}
              stroke={ink}
            />
            <path
              d={`M${108 + i * 23} 129v-3h10v3`}
              stroke={step === 0 ? ink : warm}
              strokeWidth="3"
              fill="none"
            />
          </g>
        ))}
        {step === 1 && (
          <>
            <path d="M96 126H203" stroke="#faf5df" strokeWidth="4" />
            <Arrow x1={264} y1={82} x2={264} y2={117} color={warm} />
          </>
        )}
        {step === 2 && (
          <>
            <path d="M259 62H327V146H259Z" fill="#fcf7e4" stroke="#b5a485" />
            <text x="293" y="107" fontSize="24" fontWeight="700" fill={ink} textAnchor="middle">
              ABCD
            </text>
            <path d="M268 118h50M268 125h37" stroke="#a5a08c" />
            <Arrow x1={218} y1={124} x2={247} y2={105} />
          </>
        )}
        <Label x={180} y={201}>
          {
            ["Caractères mobiles encrés", "Pression de la platine", "Composition réutilisable"][
              step
            ]
          }
        </Label>
      </>
    );
  }
  if (kind === "engraving")
    return (
      <>
        <path
          d="M27 155V117H69V140H111V117H180V140H220V117H256V155Z"
          fill="#d2b790"
          stroke="#8d7354"
          strokeWidth="2"
        />
        {step === 0 && (
          <>
            <path d="M98 62L74 108 88 115 114 70Z" fill={`url(#${id}-metal)`} stroke={ink} />
            <path d="M80 106L74 117H89Z" fill={ink} />
            <Label x={266} y={45}>
              Creux
            </Label>
            <path d="M252 51L201 138" stroke={ink} />
          </>
        )}
        {step > 0 && (
          <>
            <path d="M27 116H69M111 116H180M220 116H256" stroke={ink} strokeWidth="4" />
            {step === 1 && (
              <>
                <rect x="118" y="94" width="62" height="22" rx="9" fill={ink} />
                <path d="M147 92V72H198" fill="none" stroke="#788b9f" strokeWidth="4" />
              </>
            )}
          </>
        )}
        {step === 2 && (
          <>
            <path
              d="M22 113H69Q90 114 111 113H180Q200 114 220 113H264"
              stroke="#f3e8ce"
              strokeWidth="7"
              fill="none"
            />
            <Arrow x1={66} y1={63} x2={66} y2={99} color={warm} />
            <Arrow x1={211} y1={63} x2={211} y2={99} color={warm} />
          </>
        )}
        <Label x={296} y={112}>
          Coupe
        </Label>
        <Label x={180} y={193}>
          {
            ["Zones hautes conservées", "Encre sur les reliefs", "Papier pressé sur le relief"][
              step
            ]
          }
        </Label>
      </>
    );
  if (kind === "arch") {
    const point = (a: number, r: number) =>
      [round(180 + r * Math.cos(a)), round(158 - r * Math.sin(a))].join(" ");
    return (
      <>
        <path
          d="M48 158V181H98V158M262 158V181H312V158"
          fill="#c2b59d"
          stroke="#7c756a"
          strokeWidth="2"
        />
        {Array.from({ length: 11 }, (_, i) => {
          const a = (i * Math.PI) / 11,
            b = ((i + 1) * Math.PI) / 11;
          if (i === 5 && step === 0) return null;
          return (
            <path
              key={i}
              d={`M${point(a, 115)}A115 115 0 00${point(b, 115)}L${point(b, 83)}A83 83 0 01${point(a, 83)}Z`}
              fill={i === 5 ? `url(#${id}-gold)` : i % 2 ? "#d9c8a6" : "#c1ae8b"}
              stroke="#7c756a"
              strokeWidth="1.7"
            />
          );
        })}
        {step === 0 && (
          <>
            <path
              d="M98 158A82 82 0 01180 76A82 82 0 01262 158Z"
              fill="#d7b58a"
              fillOpacity=".7"
              stroke="#96714d"
              strokeWidth="3"
            />
            {[124, 152, 180, 208, 236].map((x) => (
              <path key={x} d={`M180 158L${x} 103`} stroke="#96714d" strokeWidth="2" />
            ))}
            <path d="M108 168L249 168" stroke="#96714d" strokeWidth="6" />
          </>
        )}
        {step > 0 && <Arrow x1={180} y1={15} x2={180} y2={40} color={warm} />}
        {step === 2 && (
          <>
            <Arrow x1={94} y1={163} x2={36} y2={182} color={warm} />
            <Arrow x1={265} y1={163} x2={323} y2={182} color={warm} />
            <Arrow x1={36} y1={149} x2={91} y2={132} />
            <Arrow x1={323} y1={149} x2={268} y2={132} />
          </>
        )}
        <Label x={180} y={203}>
          {["Cintre provisoire", "La clé ferme l’arc", "Actions et réactions aux appuis"][step]}
        </Label>
      </>
    );
  }
  if (kind === "timbre") {
    const amplitudes = step === 0 ? [1, 0, 0] : step === 1 ? [0.7, 0.3, 0] : [0.55, 0.15, 0.3];
    const curve = Array.from({ length: 161 }, (_, i) => {
      const t = (i / 160) * 4 * Math.PI;
      const v = amplitudes.reduce((s, a, j) => s + a * Math.sin(t * (j + 1)), 0);
      return `${i ? "L" : "M"}${round(23 + i * 1.22)} ${round(104 - 40 * v)}`;
    }).join(" ");
    return (
      <>
        <rect x="18" y="48" width="203" height="112" rx="10" fill="#f9fbfe" stroke="#d3deea" />
        <path d="M23 104H217M23 59V153" stroke="#a3b5c6" />
        <path d={curve} fill="none" stroke={blue} strokeWidth="2.5" />
        <Arrow x1={178} y1={165} x2={216} y2={165} color="#71859b" width={1.5} />
        <Label x={119} y={32}>
          Signal
        </Label>
        <Label x={288} y={32}>
          Composantes
        </Label>
        <path d="M247 149H339" stroke="#a3b5c6" />
        {amplitudes.map((a, i) => (
          <g key={i}>
            {a > 0 && (
              <path
                d={`M${259 + i * 31} 148V${round(148 - a * 82)}`}
                stroke={i === 0 ? warm : green}
                strokeWidth="9"
                strokeLinecap="round"
              />
            )}
            <Label x={259 + i * 31} y={174}>
              {["f", "2f", "3f"][i]}
            </Label>
          </g>
        ))}
        <Label x={180} y={201}>
          Même fréquence fondamentale f
        </Label>
      </>
    );
  }
  if (kind === "camera")
    return (
      <>
        <rect
          x="131"
          y="43"
          width="201"
          height="126"
          rx="7"
          fill="#e9edf3"
          stroke={ink}
          strokeWidth="3"
        />
        <path d="M131 89V122" stroke="#f4f7fa" strokeWidth="5" />
        <path d="M131 89V101M131 109V122" stroke={ink} strokeWidth="3" />
        <path d="M313 56V158" stroke="#d3b780" strokeWidth="5" />
        <path d="M131 104H313" stroke="#a3b5c6" strokeDasharray="4 4" />
        <path
          d="M36 125V85M36 85L29 99M36 85L43 99"
          fill="none"
          stroke={green}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M36 85L131 105 313 143.32" fill="none" stroke={warm} strokeWidth="2.2" />
        {step > 0 && (
          <path d="M36 125L131 105 313 66.68" fill="none" stroke={blue} strokeWidth="2.2" />
        )}
        {step === 2 && (
          <path
            d="M313 66.68V143.32M313 143.32L306 129.32M313 143.32L320 129.32"
            fill="none"
            stroke={green}
            strokeWidth="4"
          />
        )}
        <Dot x={131} y={105} r={3} />
        <Label x={85} y={31}>
          Objet
        </Label>
        <Label x={247} y={31}>
          Écran
        </Label>
        <Label x={180} y={201}>
          Boîte en coupe · image inversée
        </Label>
      </>
    );
  return null;
}
