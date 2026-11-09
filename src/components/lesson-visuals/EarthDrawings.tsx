import { Arrow, Label, Sun, Earth, Dot, ink, blue, warm } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function EarthDrawing({ kind, step, id }: Props) {
  if (kind === "greenhouse")
    return (
      <>
        <path
          d="M17 173Q180 138 343 173V194H17Z"
          fill="#b0c9a5"
          stroke="#68866a"
          strokeWidth="1.5"
        />
        <path
          d="M35 100Q180 40 325 100"
          fill="none"
          stroke="#c6dce9"
          strokeWidth="36"
          strokeLinecap="round"
          opacity=".7"
        />
        <Sun x={48} y={36} r={15} id={id} />
        <Arrow x1={68} y1={54} x2={132} y2={151} color="#b38d2b" />
        <Arrow x1={98} y1={106} x2={102} y2={49} color="#b38d2b" dashed />
        {step > 0 && (
          <>
            <Arrow x1={213} y1={153} x2={213} y2={23} color={warm} />
            <Arrow x1={166} y1={151} x2={181} y2={72} color={warm} />
          </>
        )}
        {step === 2 && (
          <>
            <Dot x={181} y={72} color={warm} r={7} />
            <Arrow x1={181} y1={80} x2={165} y2={144} color={warm} />
            <Arrow x1={185} y1={63} x2={201} y2={26} color={warm} />
            <Arrow x1={191} y1={75} x2={241} y2={100} color={warm} />
          </>
        )}
        <Label x={280} y={43}>
          Espace
        </Label>
        <Label x={288} y={139}>
          Sol
        </Label>
        <Label x={177} y={201}>
          {step === 2 ? "Absorption · réémission" : "Solaire ≠ infrarouge"}
        </Label>
      </>
    );
  if (kind === "groundwater")
    return (
      <>
        <path
          d="M17 81Q100 69 181 81T343 78V179H17Z"
          fill="#eadbc3"
          stroke="#9c8d72"
          strokeWidth="1.5"
        />
        <path d="M17 130Q180 116 343 132V179H17Z" fill={`url(#${id}-water)`} />
        <path
          d="M17 130Q180 116 343 132"
          fill="none"
          stroke={blue}
          strokeDasharray="5 4"
          strokeWidth="2"
        />
        {Array.from({ length: 56 }, (_, i) => (
          <ellipse
            key={i}
            cx={31 + (i % 14) * 23 + (Math.floor(i / 14) % 2) * 7}
            cy={96 + Math.floor(i / 14) * 23}
            rx="7"
            ry="5"
            fill="#bfae8e"
            stroke="#a7977c"
            strokeWidth=".6"
          />
        ))}
        {[55, 110, 165].map((x) => (
          <path
            key={x}
            d={`M${x} 30l-7 12M${x + 8} 49l-7 12`}
            stroke={blue}
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        {step === 0 && [56, 111, 166].map((x) => <Arrow key={x} x1={x} y1={67} x2={x} y2={111} />)}
        {step === 1 && (
          <>
            <rect
              x="77"
              y="134"
              width="143"
              height="35"
              rx="6"
              fill="none"
              stroke={blue}
              strokeWidth="2"
            />
            <Label x={169} y={41}>
              Pores remplis d’eau
            </Label>
            <path d="M210 48L210 132" stroke={ink} />
          </>
        )}
        {step === 2 && (
          <>
            <path d="M275 60V153H290V60" fill="white" stroke={ink} strokeWidth="2" />
            <path d="M277 130V152H288V130" fill="#88bddb" />
            <Arrow x1={283} y1={134} x2={283} y2={88} />
            <Label x={282} y={43}>
              Puits
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          Roche + eau dans les pores
        </Label>
      </>
    );
  if (kind === "tectonics")
    return (
      <>
        {step < 2 ? (
          <>
            <rect x="18" y="124" width="324" height="54" rx="5" fill="#efcfb3" />
            {step === 0 ? (
              <>
                <path
                  d="M18 93H144L166 112 142 128H18Z"
                  fill="#a3b4be"
                  stroke={ink}
                  strokeWidth="1.5"
                />
                <path
                  d="M342 93H216L194 112 218 128H342Z"
                  fill="#a3b4be"
                  stroke={ink}
                  strokeWidth="1.5"
                />
                <path d="M160 178Q158 140 180 115Q201 142 199 178" fill="#d48a58" />
                <Arrow x1={142} y1={74} x2={75} y2={74} />
                <Arrow x1={216} y1={74} x2={283} y2={74} />
                <Arrow x1={180} y1={160} x2={180} y2={121} color={warm} />
              </>
            ) : (
              <>
                <path
                  d="M18 95H142Q181 95 211 127L260 170 243 183 191 139Q166 116 143 116H18Z"
                  fill="#9eb4c2"
                  stroke={ink}
                  strokeWidth="1.5"
                />
                <path
                  d="M188 93H236L258 74 282 93H342V123H218Z"
                  fill="#c2b89d"
                  stroke={ink}
                  strokeWidth="1.5"
                />
                <Arrow x1={62} y1={68} x2={133} y2={68} />
                <Arrow x1={325} y1={60} x2={285} y2={60} />
                <Arrow x1={191} y1={125} x2={235} y2={162} />
              </>
            )}
            <Label x={180} y={35}>
              Vue en coupe
            </Label>
          </>
        ) : (
          <>
            <path
              d="M30 65H177L156 101 178 128 161 169H30Z"
              fill="#c3c8b3"
              stroke={ink}
              strokeWidth="2"
            />
            <path
              d="M177 65H330V169H161L178 128 156 101Z"
              fill="#b9cbd8"
              stroke={ink}
              strokeWidth="2"
            />
            <Arrow x1={112} y1={153} x2={112} y2={82} />
            <Arrow x1={231} y1={82} x2={231} y2={153} />
            <Label x={180} y={35}>
              Vue de dessus
            </Label>
          </>
        )}
        <Label x={180} y={201}>
          {["Divergence", "Subduction", "Coulissage"][step]}
        </Label>
      </>
    );
  if (kind === "eclipse") {
    const lunar = step === 2;
    const earthX = lunar ? 180 : 290,
      moonX = lunar ? 290 : 180,
      moonY = step === 0 ? 53 : 108;
    return (
      <>
        <path d="M60 108H337" stroke="#a8b9cb" strokeDasharray="5 5" />
        <Sun x={47} y={108} r={28} id={id} />
        {step === 0 ? (
          <path d="M191 48L340 29V69L191 58Z" fill="#6c7b8c" opacity=".17" />
        ) : lunar ? (
          <path d="M199 77L341 93V123L199 139Z" fill="#59697c" opacity=".26" />
        ) : (
          <path d="M192 99L315 104V112L192 117Z" fill="#59697c" opacity=".3" />
        )}
        <Earth x={earthX} y={108} r={lunar ? 31 : 35} id={id} />
        <circle
          cx={moonX}
          cy={moonY}
          r="12"
          fill={lunar ? "#9e8985" : "#b9b7b1"}
          stroke={ink}
          strokeWidth="1.3"
        />
        <circle cx={moonX - 3} cy={moonY - 3} r="3" fill="#93948f" />
        <Label x={47} y={170}>
          Soleil
        </Label>
        <Label x={earthX} y={170}>
          Terre
        </Label>
        <Label x={moonX} y={moonY === 53 ? 29 : 77}>
          Lune
        </Label>
        <Label x={180} y={201}>
          {["L’ombre manque la Terre", "L’ombre de la Lune", "L’ombre de la Terre"][step]}
        </Label>
      </>
    );
  }
  if (kind === "orbit") {
    const px = step < 2 ? 180 : 260,
      py = step < 2 ? 31 : 111;
    return (
      <>
        <Earth x={180} y={111} r={53} id={id} />
        {step === 0 ? (
          <path d="M180 31V58" fill="none" stroke={blue} strokeWidth="3" />
        ) : step === 1 ? (
          <path d="M180 31Q249 27 224 81" fill="none" stroke={blue} strokeWidth="3" />
        ) : (
          <circle
            cx="180"
            cy="111"
            r="80"
            fill="none"
            stroke={blue}
            strokeWidth="2"
            strokeDasharray="5 4"
          />
        )}
        <g transform={`translate(${px} ${py})`}>
          <path d="M-20-6h12v12h-12ZM8-6h12v12H8Z" fill="#7399bb" stroke={ink} />
          <rect
            x="-6"
            y="-8"
            width="12"
            height="16"
            rx="2"
            fill={`url(#${id}-gold)`}
            stroke={ink}
          />
        </g>
        {step < 2 ? (
          <Arrow x1={px} y1={py + 9} x2={180} y2={75} color={warm} />
        ) : (
          <>
            <Arrow x1={250} y1={111} x2={220} y2={111} color={warm} />
            <Arrow x1={260} y1={100} x2={260} y2={49} />
          </>
        )}
        {step === 1 && <Arrow x1={180} y1={31} x2={225} y2={31} />}
        <Label x={53} y={84} color={warm}>
          Gravité
        </Label>
        <path d="M85 88L144 94" stroke={warm} />
        <Label x={180} y={201}>
          {["Chute vers le sol", "Chute plus loin", "Gravité vers le centre"][step]}
        </Label>
      </>
    );
  }
  return null;
}
