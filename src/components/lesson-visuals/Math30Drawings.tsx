import { Frame, Arrow, Label, blue, red, gold, type DrawingProps } from "./Science30Parts";
import {
  CENTER_DATA,
  coinSeries,
  mercatorY,
  mapLocalScales,
} from "@/lib/lesson-visuals/sciences30-models";
const COINS = coinSeries();
export function Math30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "eratosthenes")
    return (
      <Frame
        id={id}
        title={
          ["Des rayons parallèles", "Deux angles correspondants", "Du petit arc au tour complet"][
            s
          ]!
        }
        foot={s === 2 ? "Circonférence = 50 × distance d" : "Angle agrandi pour la lisibilité"}
      >
        {s < 2 ? (
          <>
            <circle cx="165" cy="131" r="65" fill="#c3d9e2" stroke="#7d9ba9" strokeWidth="2" />
            <path
              d="M123 91l17 7-8 19 20 15-12 26-21-7-15-31Z M185 103l22-11 16 29-21 10 5 29-18 15-14-32Z"
              fill="#a5b58c"
            />
            <path d="M165 66V45M202.28 77.76L214.33 60.55" stroke="#6f6157" strokeWidth="4" />
            <path d="M202 78l14 10" stroke="#826b9d" strokeWidth="4" />
            <Arrow x1={165} y1={37} x2={165} y2={60} color={gold} width={2} />
            <Arrow x1={214.3} y1={37} x2={214.3} y2={86} color={gold} width={2} />
            <Label x={73} y={57}>
              Syène
            </Label>
            <path d="M105 61L160 66" stroke="#97a6ac" />
            <Label x={283} y={81}>
              Alexandrie
            </Label>
            <path d="M247 84L219 87" stroke="#97a6ac" />
            {s === 1 && (
              <>
                <path
                  d="M165 66V131L202.28 77.76M202.28 42V104"
                  stroke={red}
                  fill="none"
                  strokeDasharray="4 4"
                />
                <path
                  d="M165 107A24 24 0 0 1 179 111M202.28 59.76A18 18 0 0 1 212.60 63.01"
                  stroke={gold}
                  strokeWidth="3"
                  fill="none"
                />
                <Label x={178} y={102}>
                  θ
                </Label>
                <Label x={250} y={133}>
                  Même angle θ
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <circle cx="92" cy="124" r="57" fill="#e0eaf0" stroke="#8b9fac" />
            {Array.from({ length: 50 }, (_, i) => {
              const a = (i * Math.PI * 2) / 50;
              return (
                <path
                  key={i}
                  d={`M${92 + 52 * Math.sin(a)} ${124 - 52 * Math.cos(a)}L${92 + 57 * Math.sin(a)} ${124 - 57 * Math.cos(a)}`}
                  stroke={i === 0 ? red : "#adb9c0"}
                  strokeWidth={i === 0 ? 4 : 1}
                />
              );
            })}
            <path d="M92 67A57 57 0 0 1 99.14 67.45" stroke={red} strokeWidth="5" fill="none" />
            <Label x={92} y={198}>
              1/50 de tour
            </Label>
            <Label x={250} y={103}>
              360° / 7,2°
            </Label>
            <text x="250" y="151" fontSize="32" textAnchor="middle" fill="#263951">
              = 50
            </text>
            <Label x={250} y={181}>
              Même unité pour d
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "mapprojection")
    return (
      <Frame
        id={id}
        title={
          [
            "Des repères sur une sphère",
            "Mercator : angles locaux",
            "Équivalente : surfaces locales",
          ][s]!
        }
        foot={
          s === 0
            ? "Des repères de même taille sur le globe"
            : s === 1
              ? "Grossissement aux hautes latitudes"
              : "Formes modifiées, surfaces conservées"
        }
      >
        {s === 0 ? (
          <>
            <circle cx="180" cy="126" r="70" fill="#d4e5ec" stroke="#819eae" strokeWidth="2" />
            <ellipse cx="180" cy="126" rx="31" ry="70" fill="none" stroke="#9bb4c0" />
            <path
              d="M111 126H249M123 88Q180 106 237 88M123 164Q180 146 237 164"
              fill="none"
              stroke="#9bb4c0"
            />
            <ellipse cx="180" cy="126" rx="9" ry="9" fill="#c4b1d3" stroke="#826b9d" />
            <ellipse cx="180" cy="77" rx="9" ry="5" fill="#c4b1d3" stroke="#826b9d" />
          </>
        ) : (
          <>
            <rect x="64" y="60" width="262" height="135" fill="#e3eef1" stroke="#9cb3bf" />
            {[-60, -30, 0, 30, 60].map((lat) => {
              const p = (lat * Math.PI) / 180,
                y =
                  128 -
                  (s === 1
                    ? mercatorY(p) / mercatorY((70 * Math.PI) / 180)
                    : Math.sin(p) / Math.sin((70 * Math.PI) / 180)) *
                    61;
              const scales = mapLocalScales(p, s === 2);
              return (
                <g key={lat}>
                  <path d={`M64 ${y}H326`} stroke="#aec2cc" />
                  {[-1, 1].map((col) => (
                    <ellipse
                      key={col}
                      data-map-latitude={lat}
                      data-equal-area={s === 2}
                      cx={194 + col * 65}
                      cy={y}
                      rx={7 * scales.x}
                      ry={7 * scales.y}
                      fill="#b9a1cc"
                      stroke="#826b9d"
                    />
                  ))}
                  {Math.abs(lat) !== 30 && (
                    <Label x={35} y={y + 5}>
                      {lat === 0 ? "0°" : Math.abs(lat) + "°"}
                    </Label>
                  )}
                </g>
              );
            })}
            {[100, 165, 230, 295].map((x) => (
              <path key={x} d={`M${x} 60V195`} stroke="#aec2cc" />
            ))}
          </>
        )}
      </Frame>
    );
  if (kind === "circlepi")
    return (
      <Frame
        id={id}
        title={
          [
            "Le diamètre passe par le centre",
            "Une longueur déroulée",
            "Même rapport, tailles différentes",
          ][s]!
        }
        foot={
          s === 0
            ? "Circonférence C, diamètre d"
            : s === 1
              ? "C / d = π ≈ 3,14"
              : "C = π × d pour chaque cercle"
        }
      >
        {s === 0 ? (
          <>
            <circle cx="180" cy="122" r="62" fill="#e1edf1" stroke={gold} strokeWidth="4" />
            <circle cx="180" cy="122" r="3" fill={blue} />
            <Arrow x1={119} y1={122} x2={241} y2={122} color={blue} width={2} />
            <Label x={180} y={109}>
              d
            </Label>
            <Label x={280} y={182}>
              C
            </Label>
            <path d="M263 176L225 164" stroke={gold} />
          </>
        ) : s === 1 ? (
          <>
            <path
              data-unrolled-length={Math.PI * 90}
              d={`M38 106H${38 + Math.PI * 90}`}
              stroke={gold}
              strokeWidth="5"
              strokeLinecap="round"
            />
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path
                  d={`M${38 + i * 90} 142h90m-90-7v14m90-14v14`}
                  stroke={blue}
                  strokeWidth="2"
                />
                <Label x={83 + i * 90} y={175}>
                  d
                </Label>
              </g>
            ))}
            <path d={`M308 133h${Math.PI * 90 - 270}`} stroke={red} strokeWidth="4" />
            <Label x={180} y={73}>
              Trois diamètres… et un reste
            </Label>
            <Label x={180} y={202}>
              Le reste vaut environ 0,14 d
            </Label>
          </>
        ) : (
          <>
            {[0, 1].map((i) => (
              <g key={i}>
                <circle
                  cx={96 + i * 164}
                  cy="115"
                  r={i === 0 ? 32 : 58}
                  fill="#e1edf1"
                  stroke={gold}
                  strokeWidth="3"
                />
                <path
                  d={`M${96 + i * 164 - (i === 0 ? 32 : 58)} 115h${i === 0 ? 64 : 116}`}
                  stroke={blue}
                  strokeWidth="2"
                />
                <Label x={96 + i * 164} y={195}>
                  C / d = π
                </Label>
              </g>
            ))}
          </>
        )}
      </Frame>
    );
  if (kind === "meanmedian")
    return (
      <Frame
        id={id}
        title={["Partager un total", "La valeur du milieu", "La valeur la plus fréquente"][s]!}
        foot={
          [
            "(2 + 3 + 3 + 4 + 38) / 5 = 10",
            "Deux observations de chaque côté",
            "Le 3 apparaît deux fois",
          ][s]!
        }
      >
        <path d="M37 173H328M37 62V173" stroke="#9aaab6" />
        {[0, 10, 20, 30, 40].map((n) => (
          <g key={n}>
            <path d={`M37 ${173 - n * 2.5}H328`} stroke="#c7d2da" strokeDasharray="2 4" />
            <Label x={22} y={178 - n * 2.5}>
              {n}
            </Label>
          </g>
        ))}
        {CENTER_DATA.map((v, i) => (
          <g key={i}>
            <rect
              x={53 + i * 54}
              y={173 - v * 2.5}
              width="31"
              height={v * 2.5}
              fill={s === 1 && i === 2 ? gold : s === 2 && v === 3 ? "#a28db8" : "#9ab9c9"}
              stroke="#6f8d9f"
            />
            <Label x={68 + i * 54} y={197}>
              {v}
            </Label>
          </g>
        ))}
        {s === 0 ? (
          <>
            <path d="M37 148H328" stroke={red} strokeWidth="2" />
            <Label x={184} y={77}>
              Moyenne : 10
            </Label>
          </>
        ) : (
          <Label x={180} y={54}>
            {s === 1 ? "Médiane : 3" : "Mode : 3"}
          </Label>
        )}
      </Frame>
    );
  if (kind === "samplingmeans") {
    const n = s === 0 ? 20 : 400;
    return (
      <Frame
        id={id}
        title={
          ["Une petite série fluctue", "Une fréquence cumulée", "Le prochain lancer reste libre"][
            s
          ]!
        }
        foot={s === 2 ? "Aucune compensation due" : "Simulation : fluctuations possibles"}
      >
        {s < 2 ? (
          <>
            <rect x="54" y="61" width="268" height="121" fill="#e7eef2" />
            <path d="M54 61V182H322" fill="none" stroke="#8c9fac" />
            <path d="M54 121.5H322" stroke={red} strokeDasharray="4 4" />
            <Label x={29} y={126.5}>
              ½
            </Label>
            <path
              data-coin-count={n}
              d={COINS.slice(0, n)
                .map(
                  (p, i) =>
                    `${i ? "L" : "M"}${54 + ((p.n - 1) / (n - 1)) * 268} ${182 - p.frequency * 121}`,
                )
                .join(" ")}
              stroke={blue}
              strokeWidth="2"
              fill="none"
            />
            <Label x={179} y={52}>
              Fréquence de piles
            </Label>
            <Label x={179} y={202}>
              {n} lancers
            </Label>
          </>
        ) : (
          <>
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <circle cx={53 + i * 45} cy="99" r="14" fill="#e0c27e" stroke={gold} />
                <Label x={53 + i * 45} y={105}>
                  P
                </Label>
              </g>
            ))}
            <Arrow x1={207} y1={99} x2={241} y2={99} color={blue} />
            <circle cx="285" cy="99" r="24" fill="#e1eaf0" stroke="#8b9fac" />
            <Label x={285} y={105}>
              ?
            </Label>
            <Label x={180} y={165}>
              P(pile au prochain) = 1/2
            </Label>
            <Label x={180} y={194}>
              La pièce n’a pas de mémoire
            </Label>
          </>
        )}
      </Frame>
    );
  }
  return null;
}
