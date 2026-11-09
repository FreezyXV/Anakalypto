import type { ReactNode } from "react";
import { Arrow, Label, Earth, Dot, ink, blue, warm } from "./DrawingPrimitives";
import { pointLensAmplification, transitFlux } from "@/lib/lesson-visuals/astronomy-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const r = (n: number) => Math.round(n * 100) / 100;
function NightLabel({
  x,
  y,
  children,
  color = "#edf2fc",
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
}) {
  return (
    <text x={x} y={y} textAnchor="middle" fill={color} fontSize="18" fontWeight="650">
      {children}
    </text>
  );
}
function Sky({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-space`} x2=".7" y2="1">
          <stop stopColor="#101d36" />
          <stop offset="1" stopColor="#303957" />
        </linearGradient>
        <radialGradient id={`${id}-star`}>
          <stop stopColor="#fff9d7" />
          <stop offset=".65" stopColor="#ffcf70" />
          <stop offset="1" stopColor="#ed9544" />
        </radialGradient>
        <radialGradient id={`${id}-nebula`}>
          <stop stopColor="#d9bcf5" stopOpacity=".75" />
          <stop offset="1" stopColor="#9f8de0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="12" y="12" width="336" height="166" rx="15" fill={`url(#${id}-space)`} />
      {[
        [30, 30],
        [102, 25],
        [329, 48],
        [48, 158],
        [265, 152],
        [319, 162],
        [233, 27],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 0.8} fill="#d2dfef" opacity=".65" />
      ))}
    </>
  );
}
function Star({
  x,
  y,
  size = 20,
  id,
  color,
}: {
  x: number;
  y: number;
  size?: number;
  id: string;
  color?: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={size + 8} fill={color ?? "#ffd38c"} opacity=".07" />
      <circle cx={x} cy={y} r={size + 3} fill={color ?? "#ffd38c"} opacity=".15" />
      <circle cx={x} cy={y} r={size} fill={color ?? `url(#${id}-star)`} />
    </g>
  );
}
function Galaxy({ x, y, color = "#a8c4ec" }: { x: number; y: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-25)`}>
      <ellipse rx="11" ry="5" fill={color} opacity=".22" />
      <ellipse rx="8" ry="3" fill="none" stroke={color} strokeWidth="1.5" />
      <circle r="2.5" fill="#fff6d5" />
    </g>
  );
}
function Satellite({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-23-7H-9V7H-23ZM9-7H23V7H9Z" fill="#3e80b8" stroke="#9fcaea" />
      <path d="M-19-7V7M-14-7V7M14-7V7M19-7V7" stroke="#8fb9da" strokeWidth=".7" />
      <rect
        x="-8"
        y="-10"
        width="16"
        height="20"
        rx="3"
        fill={`url(#${id}-metal)`}
        stroke="#899fb8"
      />
      <path d="M-6 11L6 11 0 17Z" fill="#ddc285" />
    </g>
  );
}
export function AstronomyDrawing({ kind, step, id }: Props) {
  if (kind === "tides")
    return (
      <>
        <Sky id={id} />
        <ellipse
          cx="145"
          cy="101"
          rx="77"
          ry="49"
          fill="#65b7e2"
          opacity=".28"
          stroke="#86c8eb"
          strokeWidth="1.5"
        />
        <Earth x={145} y={101} r={40} id={id} />
        <circle cx="307" cy="101" r="16" fill={`url(#${id}-metal)`} />
        <NightLabel x={307} y={140}>
          Lune
        </NightLabel>
        {step === 0 ? (
          <>
            {[
              [105, 22],
              [145, 35],
              [185, 52],
            ].map(([x, len]) => (
              <Arrow key={x} x1={x!} y1={101} x2={x! + len!} y2={101} color="#efb56e" width={2.5} />
            ))}
          </>
        ) : step === 1 ? (
          <>
            <Arrow x1={105} y1={101} x2={68} y2={101} color="#97daff" />
            <Arrow x1={185} y1={101} x2={222} y2={101} color="#97daff" />
            <Dot x={145} y={101} r={3} />
          </>
        ) : (
          <>
            {[
              [185, 101, "A"],
              [145, 61, "B"],
              [105, 101, "C"],
            ].map(([x, y, t]) => (
              <g key={String(t)}>
                <circle cx={Number(x)} cy={Number(y)} r="4" fill="#ffd17d" stroke="#172a44" />
                <NightLabel x={Number(x)} y={Number(y) + (t === "B" ? -9 : 26)} color="#ffe6ae">
                  {t}
                </NightLabel>
              </g>
            ))}
            <path
              d="M177 77A40 40 0 00 113 77"
              fill="none"
              stroke="#e6effa"
              strokeDasharray="3 3"
            />
            <Arrow x1={118} y1={69} x2={110} y2={80} color="#e6effa" width={1.5} />
          </>
        )}
        <NightLabel x={170} y={35}>
          {["Attraction vers la Lune", "Effet relatif au centre", "Une côte : A → B → C"][step]}
        </NightLabel>
        <Label x={180} y={201}>
          {
            [
              "Proche : plus forte · loin : plus faible",
              "Deux directions opposées",
              "Haute · basse · haute (modèle)",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "starbirth")
    return (
      <>
        <Sky id={id} />
        {step < 2 && (
          <>
            {[
              [132, 84, 61],
              [211, 100, 68],
              [159, 133, 46],
              [220, 61, 41],
            ].map(([x, y, s], i) => (
              <ellipse key={i} cx={x} cy={y} rx={s} ry={s! * 0.65} fill={`url(#${id}-nebula)`} />
            ))}
          </>
        )}
        {step === 0 ? (
          <>
            {[
              [87, 74, 132, 87],
              [267, 75, 222, 90],
              [126, 150, 150, 127],
              [231, 147, 211, 125],
            ].map(([x, y, xx, yy], i) => (
              <Arrow key={i} x1={x!} y1={y!} x2={xx!} y2={yy!} color="#d5c3ed" width={2} />
            ))}
            <circle cx="180" cy="104" r="16" fill="#cba5ca" opacity=".5" />
          </>
        ) : step === 1 ? (
          <>
            <ellipse
              cx="180"
              cy="106"
              rx="73"
              ry="17"
              transform="rotate(-14 180 106)"
              fill="none"
              stroke="#d8af86"
              strokeWidth="9"
              opacity=".6"
            />
            <path d="M174 91L158 37 169 80M187 121L206 166 196 129" fill="#77b8ed" opacity=".75" />
            <Star x={180} y={105} size={15} id={id} />
            <Arrow x1={116} y1={121} x2={152} y2={112} color="#efd1b5" width={2} />
          </>
        ) : (
          <>
            <Star x={180} y={101} size={46} id={id} />
            <circle cx="180" cy="101" r="16" fill="#fff6d7" />
            {[0, 90, 180, 270].map((a) => (
              <g key={a} transform={`rotate(${a} 180 101)`}>
                <Arrow x1={240} y1={101} x2={219} y2={101} color="#99c7f7" width={2} />
                <Arrow x1={189} y1={101} x2={210} y2={101} color="#fff2ae" width={2} />
              </g>
            ))}
          </>
        )}
        <NightLabel x={180} y={35}>
          {["Nuage moléculaire", "Disque · jets · protoétoile", "Fusion durable au cœur"][step]}
        </NightLabel>
        <Label x={180} y={201}>
          {
            [
              "La gravité rassemble la matière",
              "Accrétion avant la fusion durable",
              "Gravité et pression s’équilibrent",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "starlife")
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            <NightLabel x={91} y={62}>
              Type solaire
            </NightLabel>
            <NightLabel x={91} y={134}>
              Étoile massive
            </NightLabel>
            <Star
              x={246}
              y={58}
              size={step === 0 ? 17 : 29}
              id={id}
              color={step === 1 ? "#e88b65" : undefined}
            />
            <Star
              x={246}
              y={131}
              size={step === 0 ? 26 : 34}
              id={id}
              color={step === 1 ? "#d96655" : "#a9d4ff"}
            />
          </>
        ) : (
          <>
            <ellipse
              cx="75"
              cy="59"
              rx="31"
              ry="22"
              fill="none"
              stroke="#a6cbd2"
              strokeWidth="10"
              opacity=".4"
            />
            <circle cx="75" cy="59" r="7" fill="#eef7ff" />
            <NightLabel x={231} y={65}>
              Naine blanche
            </NightLabel>
            <path
              d="M70 112L77 129 96 122 87 139 100 151 81 151 75 169 67 151 47 151 59 137 49 121 67 128Z"
              fill="#efab75"
            />
            <path
              d="M102 140L186 117M102 140L232 152"
              fill="none"
              stroke="#c9d7ed"
              strokeWidth="1.5"
            />
            <circle cx="204" cy="117" r="5" fill="#e9f7ff" />
            <NightLabel x={253} y={97}>
              Étoile à neutrons
            </NightLabel>
            <circle cx="261" cy="151" r="10" fill="#080d1a" stroke="#e7bc7c" strokeWidth="2" />
            <NightLabel x={211} y={139}>
              ou
            </NightLabel>
            <NightLabel x={284} y={174}>
              Trou noir
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Deux masses, deux évolutions",
              "Géante rouge · supergéante",
              "Issues possibles, non exhaustives",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "transit") {
    const distance = [-60, 0, 60][step]!,
      samples = Array.from(
        { length: 121 },
        (_, i) =>
          `${i ? "L" : "M"}${30 + i * 2.5} ${r(129 + (1 - transitFlux(i - 60, 32, 8)) * 540)}`,
      ).join(" ");
    return (
      <>
        <Sky id={id} />
        <Star x={180} y={72} size={32} id={id} />
        <path d="M94 72H270" stroke="#8095b5" strokeDasharray="3 4" />
        <circle cx={180 + distance} cy="72" r="8" fill="#101927" stroke="#9ab2cc" />
        <NightLabel x={180} y={34}>
          Vue depuis l’observateur
        </NightLabel>
        <rect x="24" y="117" width="312" height="55" rx="7" fill="#f6f9fe" />
        <path d="M30 125V167H330" fill="none" stroke="#b9c7d7" />
        <path d={samples} fill="none" stroke={blue} strokeWidth="2" />
        <Dot
          x={30 + (distance + 60) * 2.5}
          y={129 + (1 - transitFlux(distance, 32, 8)) * 540}
          color={warm}
          r={3}
        />
        <Label x={180} y={201}>
          Lumière reçue au fil du temps →
        </Label>
      </>
    );
  }
  if (kind === "transmission") {
    const curve = Array.from({ length: 151 }, (_, i) => {
      const dip = 24 * Math.exp(-(((i - 40) / 7) ** 2)) + 17 * Math.exp(-(((i - 98) / 11) ** 2));
      return `${i ? "L" : "M"}${30 + i * 2} ${r(135 + (step > 0 ? dip : 0))}`;
    }).join(" ");
    return (
      <>
        <Sky id={id} />
        <Star x={48} y={76} size={35} id={id} />
        <circle cx="177" cy="76" r="33" fill="#4aa8c7" opacity=".25" stroke="#81c9df" />
        <circle cx="177" cy="76" r="23" fill="#223852" stroke="#c0d2e5" />
        <path d="M71 51H323M71 101H323" stroke="#d6c7c0" strokeWidth="1.5" opacity=".3" />
        <Arrow
          x1={66}
          y1={48}
          x2={320}
          y2={48}
          color={step === 0 ? "#ffe2a1" : "#9dbce2"}
          width={2}
        />
        <Arrow x1={66} y1={104} x2={320} y2={104} color="#d5b4e8" width={2} />
        {step > 0 && (
          <>
            <circle cx="171" cy="48" r="4" fill="#ffe2a1" />
            <circle cx="190" cy="105" r="4" fill="#d5b4e8" />
          </>
        )}
        <NightLabel x={230} y={32}>
          Atmosphère
        </NightLabel>
        <path d="M222 36L200 52" stroke="#bccfe2" />
        <rect x="24" y="119" width="312" height="54" rx="7" fill="#f7f9fc" />
        {step === 2 && (
          <path d="M30 135H330" stroke="#a9b4c3" strokeDasharray="4 3" strokeWidth="2" />
        )}
        <path d={curve} fill="none" stroke={blue} strokeWidth="2.2" />
        <Label x={180} y={201}>
          {
            [
              "Le bord atmosphérique est traversé",
              "Absorption selon la longueur d’onde",
              "Spectre fictif · référence en gris",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "microlensing") {
    const curve = (anomaly: boolean) =>
      Array.from({ length: 161 }, (_, i) => {
        const t = (i - 80) / 21,
          u = Math.hypot(0.4, t),
          a = pointLensAmplification(u),
          b = anomaly ? 0.5 * Math.exp(-(((i - 98) / 5) ** 2)) : 0;
        return `${i ? "L" : "M"}${25 + i * 1.94} ${r(164 - (a - 1 + b) * 26)}`;
      }).join(" ");
    const selected = step === 0 ? 7 : step === 1 ? 80 : 98,
      selectedU = Math.hypot(0.4, (selected - 80) / 21),
      selectedBump = step === 2 ? 0.5 * Math.exp(-(((selected - 98) / 5) ** 2)) : 0;
    return (
      <>
        <Sky id={id} />
        <Star x={74} y={63} size={14} id={id} />
        <Star x={177} y={step === 0 ? 88 : 62} size={11} id={id} color="#dc956f" />
        <path
          d={`M91 63Q166 ${step === 0 ? 60 : 31} 317 63M91 63Q166 ${step === 0 ? 66 : 94} 317 63`}
          fill="none"
          stroke={step === 0 ? "#8292af" : "#f5d59d"}
          strokeWidth="1.5"
        />
        <path
          d="M317 51Q333 62 317 76M317 51Q305 64 317 76"
          fill="none"
          stroke="#d2dfef"
          strokeWidth="1.5"
        />
        {step === 2 && <circle cx="197" cy="78" r="4" fill="#83c7d5" />}
        <NightLabel x={74} y={33}>
          Source
        </NightLabel>
        <NightLabel x={182} y={33}>
          Lentille
        </NightLabel>
        <rect x="20" y="105" width="320" height="68" rx="7" fill="#f8fafc" />
        <path d="M25 164H335" stroke="#bdc9d7" />
        <path d={curve(false)} fill="none" stroke={blue} strokeWidth="2" />
        {step === 2 && <path d={curve(true)} fill="none" stroke={warm} strokeWidth="2.5" />}
        <Dot
          x={25 + selected * 1.94}
          y={164 - (pointLensAmplification(selectedU) - 1 + selectedBump) * 26}
          color={warm}
          r={3}
        />
        <Label x={180} y={201}>
          {
            [
              "Avant l’amplification maximale",
              "La lumière reçue augmente",
              "Orange : anomalie illustrative",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "lensing")
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            <Galaxy x={56} y={101} />
            {[
              [176, 77],
              [191, 105],
              [161, 118],
              [192, 130],
              [162, 93],
            ].map(([x, y], i) => (
              <Galaxy key={i} x={x!} y={y!} color="#d3bd95" />
            ))}
            <path
              d="M318 88Q336 101 318 115M318 88Q304 101 318 115"
              fill="none"
              stroke="#d7e5f7"
              strokeWidth="2"
            />
            {step === 0 ? (
              <path d="M70 101H307" stroke="#a5b3ca" strokeDasharray="4 4" />
            ) : (
              <>
                <path
                  d="M70 101Q158 34 182 60Q237 89 307 101M70 101Q159 168 182 142Q237 114 307 101"
                  fill="none"
                  stroke="#b6d7f7"
                  strokeWidth="2.4"
                />
                <Arrow x1={251} y1={90} x2={276} y2={96} color="#b6d7f7" width={1.5} />
              </>
            )}
            <NightLabel x={56} y={35}>
              Source
            </NightLabel>
            <NightLabel x={180} y={35}>
              Amas
            </NightLabel>
            <NightLabel x={180} y={164}>
              Coupe des trajets
            </NightLabel>
          </>
        ) : (
          <>
            {[
              [176, 77],
              [191, 105],
              [161, 118],
              [192, 130],
              [162, 93],
            ].map(([x, y], i) => (
              <Galaxy key={i} x={x!} y={y!} color="#d3bd95" />
            ))}
            <path
              d="M114 71A74 63 0 01 177 39M224 48A73 62 0 01 247 122M224 155A72 63 0 01 124 151"
              fill="none"
              stroke="#9bd9f2"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <NightLabel x={180} y={30}>
              Vue du ciel
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Une source derrière l’amas",
              "Plusieurs chemins vers l’observateur",
              "Arcs et images d’une même source",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "expansion") {
    const scale = step === 0 ? 1 : 1.5;
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            {[-2, -1, 0, 1, 2].map((n) => (
              <g key={n}>
                <path
                  d={`M${r(180 + n * 42 * scale)} 35V153M40 ${r(95 + n * 23 * scale)}H320`}
                  stroke="#8193af"
                  opacity=".24"
                />
              </g>
            ))}
            {[
              [-2, -1],
              [-1, 1],
              [0, 0],
              [1, -1],
              [2, 1],
            ].map(([x, y], i) => (
              <Galaxy key={i} x={180 + x! * 42 * scale} y={95 + y! * 23 * scale} />
            ))}
            <circle cx="180" cy="95" r="17" fill="none" stroke="#e1b777" strokeDasharray="3 3" />
            <path
              d={`M180 143H${180 + 42 * scale}M180 139V147M${180 + 42 * scale} 139V147`}
              stroke="#d2dfed"
            />
            <NightLabel x={180 + 21 * scale} y={166}>
              {step === 0 ? "d" : "1,5 d"}
            </NightLabel>
          </>
        ) : (
          <>
            {[0, 1].map((n) => (
              <g key={n}>
                <path
                  d={Array.from(
                    { length: 121 },
                    (_, i) =>
                      `${i ? "L" : "M"}${35 + i * (n ? 2.4 : 1.6)} ${r((n ? 133 : 64) + 15 * Math.sin((i * Math.PI) / 15))}`,
                  ).join(" ")}
                  fill="none"
                  stroke={n ? "#f2ac94" : "#a6ccff"}
                  strokeWidth="2.5"
                />
                <path d={`M35 ${n ? 158 : 89}h${n ? 72 : 48}`} stroke="#d4e4f5" />
                <NightLabel x={n ? 274 : 274} y={n ? 106 : 70}>
                  {n ? "λ étirée" : "λ émise"}
                </NightLabel>
              </g>
            ))}
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Référence choisie, sans centre absolu",
              "Les symboles ne grossissent pas",
              "Une lumière décalée vers le rouge",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "comet") {
    const x = step === 0 ? 290 : step === 1 ? 160 : 191,
      y = step === 0 ? 70 : step === 1 ? 89 : 128,
      vx = x - 66,
      vy = y - 101,
      len = Math.hypot(vx, vy),
      ux = vx / len,
      uy = vy / len;
    return (
      <>
        <Sky id={id} />
        <Star x={66} y={101} size={24} id={id} />
        <path
          d="M299 60Q115 17 131 99Q140 172 303 150"
          fill="none"
          stroke="#8d9ab7"
          strokeDasharray="4 4"
        />
        {step > 0 && (
          <>
            <path
              d={`M${x} ${y}L${r(x + ux * 100)} ${r(y + uy * 100)}`}
              stroke="#8bd3f3"
              strokeWidth="10"
              opacity=".55"
              strokeLinecap="round"
            />
            <path
              d={`M${x} ${y}Q${r(x + ux * 49)} ${r(y + uy * 49 - 20)} ${r(x + ux * 93)} ${r(y + uy * 93 - 31)}`}
              fill="none"
              stroke="#e3c99f"
              strokeWidth="15"
              opacity=".4"
              strokeLinecap="round"
            />
            <circle cx={x} cy={y} r="17" fill="#b9dbe5" opacity=".2" />
          </>
        )}
        <circle cx={x} cy={y} r="6" fill="#b8b2a9" stroke="#ddd5c4" />
        {step === 0 ? (
          <Arrow x1={288} y1={84} x2={250} y2={74} color="#d5e3f5" width={2} />
        ) : step === 1 ? (
          <Arrow x1={142} y1={73} x2={138} y2={101} color="#d5e3f5" width={2} />
        ) : (
          <Arrow x1={184} y1={147} x2={225} y2={153} color="#d5e3f5" width={2} />
        )}
        <NightLabel x={77} y={40}>
          Soleil
        </NightLabel>
        <NightLabel x={250} y={32}>
          Flèche : mouvement
        </NightLabel>
        <Label x={180} y={201}>
          {
            [
              "Noyau lointain peu actif",
              "Bleu : ions · clair : poussière",
              "La queue ne suit pas le mouvement",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "skyglow")
    return (
      <>
        <defs>
          <linearGradient id={`${id}-glow`} x2="0" y2="1">
            <stop stopColor={step === 0 ? "#102039" : step === 1 ? "#6b6a79" : "#23344d"} />
            <stop
              offset="1"
              stopColor={step === 0 ? "#263653" : step === 1 ? "#c9a185" : "#6e6b6d"}
            />
          </linearGradient>
        </defs>
        <rect x="12" y="12" width="336" height="166" rx="15" fill={`url(#${id}-glow)`} />
        {Array.from({ length: 31 }, (_, i) => {
          const bright = i % 6 === 0;
          return (
            <circle
              key={i}
              cx={30 + ((i * 67) % 299)}
              cy={28 + ((i * 37) % 92)}
              r={bright ? 1.7 : 1}
              fill={step === 1 && !bright ? "#b9a08c" : "#eff5ff"}
              opacity={step === 1 && !bright ? 0.45 : 1}
            />
          );
        })}
        <path
          d="M12 166H42V141H68V158H91V123H123V151H139V133H167V161H190V127H215V155H240V139H268V119H293V157H315V140H348V178H12Z"
          fill="#15263b"
        />
        {[70, 175, 300].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 164V126Q${x} 117 ${x + 11} 117`}
              fill="none"
              stroke="#acbdd0"
              strokeWidth="2"
            />
            <circle cx={x + 11} cy="117" r="3" fill={step === 0 ? "#7789a0" : "#fbe6a0"} />
            {step > 0 && (
              <path
                d={
                  step === 1
                    ? `M${x + 11} 117L${x - 17} 68H${x + 39}Z`
                    : `M${x + 11} 118L${x - 8} 162H${x + 32}Z`
                }
                fill="#fce6b8"
                opacity={step === 1 ? 0.16 : 0.25}
              />
            )}
            {step === 2 && <path d={`M${x + 4} 116Q${x + 11} 108 ${x + 18} 116Z`} fill="#5d7d9c" />}
          </g>
        ))}
        <Label x={180} y={201}>
          {
            [
              "Même champ d’étoiles, ciel sombre",
              "Fond plus clair : contraste réduit",
              "Éclairer les surfaces utiles",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "gps")
    return (
      <>
        <Sky id={id} />
        <path d="M55 177Q180 99 305 177" fill="#346e9a" stroke="#87b6d8" strokeWidth="2" />
        <path d="M97 157L115 159 125 147 145 153 153 166 178 152 195 155 207 167" fill="#79a57c" />
        <rect x="172" y="142" width="17" height="29" rx="4" fill="#dbe8f5" stroke="#8eaec7" />
        <circle cx="180" cy="166" r="1.5" fill={ink} />
        {[
          [61, 77],
          [127, 43],
          [236, 42],
          [303, 78],
        ].map(([x, y], i) => (
          <g key={i}>
            <Satellite x={x!} y={y!} id={id} />
            {i < (step === 0 ? 1 : step === 1 ? 3 : 4) && (
              <Arrow
                x1={x!}
                y1={y! + 19}
                x2={180}
                y2={143}
                color={i === 3 ? "#d3b7f1" : "#f0d39b"}
                width={1.5}
              />
            )}
          </g>
        ))}
        <Label x={180} y={201}>
          {
            [
              "Le récepteur écoute le satellite",
              "Des trajets, pas des angles",
              "Quatre inconnues à déterminer",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "planets") {
    const names = ["Mercure", "Vénus", "Terre", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune"],
      cols = [
        "#a6a3a0",
        "#d6b27d",
        "#5b9bc7",
        "#c57f59",
        "#c8ab8b",
        "#d7bf86",
        "#87c3c9",
        "#6b8acc",
      ];
    const selected =
      step === 0 ? [0, 1, 2, 3] : step === 1 ? [4, 5, 6, 7] : [0, 1, 2, 3, 4, 5, 6, 7];
    return (
      <>
        <Sky id={id} />
        <defs>
          <radialGradient id={`${id}-planet-shade`} cx=".3" cy=".25" r=".8">
            <stop stopColor="white" stopOpacity=".25" />
            <stop offset=".45" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#102039" stopOpacity=".55" />
          </radialGradient>
        </defs>
        {selected.map((n, i) => {
          const x = 53 + (i % 4) * 85,
            y = step < 2 ? 91 : i < 4 ? 55 : 125,
            sz = step < 2 ? [8, 12, 13, 10, 22, 18, 16, 15][n]! : n < 4 ? 7 : 12;
          return (
            <g key={n}>
              <defs>
                <clipPath id={`${id}-planet-${n}`}>
                  <circle cx={x} cy={y} r={sz} />
                </clipPath>
              </defs>
              {n >= 4 && (
                <ellipse
                  cx={x}
                  cy={y}
                  rx={sz + 8}
                  ry={sz * 0.38}
                  fill="none"
                  stroke={cols[n]}
                  strokeWidth={n === 5 ? 3 : 1}
                  opacity={n === 5 ? 0.8 : 0.5}
                  transform={`rotate(${n === 6 ? -65 : -18} ${x} ${y})`}
                />
              )}
              <circle cx={x} cy={y} r={sz} fill={cols[n]} />
              <g clipPath={`url(#${id}-planet-${n})`}>
                {n === 0 &&
                  [
                    [-0.4, -0.3, 0.22],
                    [0.3, 0.3, 0.3],
                    [-0.3, 0.5, 0.16],
                  ].map(([dx, dy, rr], j) => (
                    <circle
                      key={j}
                      cx={x + dx! * sz}
                      cy={y + dy! * sz}
                      r={rr! * sz}
                      fill="#686d76"
                      opacity=".5"
                    />
                  ))}
                {n === 1 && (
                  <path
                    d={`M${x - sz} ${y - sz * 0.25}q${sz} ${sz * 0.6} ${sz * 2} 0M${x - sz} ${y + sz * 0.3}q${sz} ${-sz * 0.6} ${sz * 2} 0`}
                    fill="none"
                    stroke="#f5d9a4"
                    strokeWidth={sz * 0.25}
                    opacity=".6"
                  />
                )}
                {n === 3 && (
                  <path
                    d={`M${x - sz * 0.6} ${y + sz * 0.5}q${sz * 0.8} ${-sz} ${sz} 0l${sz * 0.5} ${-sz * 0.8}`}
                    fill="none"
                    stroke="#8d5848"
                    strokeWidth={sz * 0.35}
                    opacity=".65"
                  />
                )}
                {n >= 4 &&
                  [-0.45, 0, 0.5].map((dy, j) => (
                    <path
                      key={j}
                      d={`M${x - sz} ${y + dy * sz}h${sz * 2}`}
                      stroke={n < 6 ? "#9b7d60" : "#4b85a8"}
                      strokeWidth={sz * 0.12}
                      opacity=".5"
                    />
                  ))}
                {n === 4 && (
                  <ellipse
                    cx={x + sz * 0.4}
                    cy={y + sz * 0.3}
                    rx={sz * 0.28}
                    ry={sz * 0.12}
                    fill="#af795c"
                  />
                )}
                {n === 7 && (
                  <ellipse
                    cx={x - sz * 0.3}
                    cy={y + sz * 0.1}
                    rx={sz * 0.25}
                    ry={sz * 0.12}
                    fill="#37649b"
                  />
                )}
              </g>
              {n === 2 && <path d={`M${x - 5} ${y - 6}l8 1-1 6-6 2Z`} fill="#93b37d" />}
              {n === 4 && (
                <path
                  d={`M${x - sz + 2} ${y - 5}h${sz * 2 - 4}M${x - sz + 3} ${y + 5}h${sz * 2 - 6}`}
                  stroke="#9c795e"
                  strokeWidth="2"
                />
              )}
              <circle cx={x} cy={y} r={sz} fill={`url(#${id}-planet-shade)`} />
              {n >= 4 && (
                <path
                  d={`M${x - sz - 8} ${y}A${sz + 8} ${sz * 0.38} 0 0 0 ${x + sz + 8} ${y}`}
                  fill="none"
                  stroke={cols[n]}
                  strokeWidth={n === 5 ? 3 : 1}
                  opacity={n === 5 ? 0.8 : 0.5}
                  transform={`rotate(${n === 6 ? -65 : -18} ${x} ${y})`}
                />
              )}
              <NightLabel x={x} y={y + sz + 23}>
                {names[n]}
              </NightLabel>
            </g>
          );
        })}
        <Label x={180} y={201}>
          {
            [
              "Les quatre planètes rocheuses",
              "Quatre géantes avec des anneaux",
              "Ordre depuis le Soleil, sans échelle",
            ][step]
          }
        </Label>
      </>
    );
  }
  return null;
}

export { Sky, Star, NightLabel, Galaxy, Satellite };
