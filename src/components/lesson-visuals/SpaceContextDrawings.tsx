import { Arrow, Label, Earth, Dot, ink } from "./DrawingPrimitives";
import { Sky, Star, NightLabel } from "./AstronomyDrawings";
import { equalFluxRadius } from "@/lib/lesson-visuals/astronomy-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const round = (v: number) => Math.round(v * 100) / 100;
function Rock({
  x,
  y,
  size = 18,
  ice = false,
}: {
  x: number;
  y: number;
  size?: number;
  ice?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 18})`}>
      <path
        d="M-18-5L-10-16 4-18 16-8 18 6 8 17-7 16-19 4Z"
        fill={ice ? "#afcbd5" : "#a39a8e"}
        stroke={ice ? "#d6edf7" : "#d7cbbb"}
        strokeWidth="1.5"
      />
      <path
        d="M-11-5L-4-10 3-3-1 4-10 3ZM5 5L12 3 14 10 7 13Z"
        fill={ice ? "#e6f5fc" : "#6f6a65"}
        opacity=".65"
      />
      <path d="M-9 10L-2 14 4 8M9-11L5-4" fill="none" stroke="#687c8a" strokeWidth="1.4" />
    </g>
  );
}
function Drop({ x, y, size = 12 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 12})`}>
      <path d="M0-15Q-13 0-10 7Q0 19 10 7Q13 0 0-15Z" fill="#86c9e6" stroke="#c4e9f6" />
      <path d="M-5 2Q-8 9-2 11" fill="none" stroke="#e9f7fc" strokeWidth="2" />
    </g>
  );
}
function Human({
  x,
  y,
  floating = false,
  support = false,
}: {
  x: number;
  y: number;
  floating?: boolean;
  support?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${floating ? -22 : 0})`}>
      <circle cx="0" cy="-59" r="12" fill="#d7b68e" />
      <path d="M-11-63Q0-79 11-62" fill="#48546a" />
      <path
        d="M-14-39Q0-48 14-39L12 0Q0 8-12 0Z"
        fill={floating ? "#718ba8" : "#84a9bd"}
        stroke="#c2d6e7"
        strokeWidth="1.4"
      />
      <path
        d="M-13-34Q-25-12-22 10"
        fill="none"
        stroke="#d7b68e"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d={support ? "M13-34L32 8 60 10" : "M13-34Q25-12 22 10"}
        fill="none"
        stroke="#d7b68e"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M-7 3L-10 31-12 60M7 3L10 31 12 60"
        fill="none"
        stroke={floating ? "#718ba8" : "#84a9bd"}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M-8 13L-10 31-12 55M8 13L10 31 12 55M-7-33L-5-7H5L7-33"
        fill="none"
        stroke="#e4e8df"
        strokeWidth={floating ? 2 : 3}
        strokeLinecap="round"
      />
      <path d="M-12 61H-22M12 61H22" stroke="#ccd7e5" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}
function Voyager({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-18)`}>
      <path d="M-6 0L-14 17 6 22 13 7Z" fill={`url(#${id}-gold)`} stroke="#a28c59" />
      <path d="M-5 9L13-13M1 12L16-10" stroke="#a4b8cf" strokeWidth="1.5" />
      <path d="M-1-15Q14 6 28-15Z" fill="#e7edf4" stroke="#a3b6ce" />
      <path d="M14-15V-23" stroke="#d0dceb" strokeWidth="1.5" />
      <path d="M-8 10L-34 14M4 20L-9 40" stroke="#aebdd2" strokeWidth="2" />
      {[0, 1, 2].map((n) => (
        <rect
          key={n}
          x={-37 + n * 7}
          y="10"
          width="5"
          height="10"
          rx="1"
          fill="#6f7e94"
          stroke="#bbc9dc"
          strokeWidth=".6"
        />
      ))}
    </g>
  );
}
export function SpaceContextDrawing({ kind, step, id }: Props) {
  if (kind === "smallbodies")
    return (
      <>
        <Sky id={id} />
        {step === 0 ? (
          <>
            <Rock x={178} y={100} size={46} />
            <path d="M64 116Q172 30 290 99" fill="none" stroke="#91a4bf" strokeDasharray="4 4" />
            <NightLabel x={180} y={35}>
              Roche · métal
            </NightLabel>
          </>
        ) : step === 1 ? (
          <>
            <Star x={46} y={105} size={17} id={id} />
            <path
              d="M141 103L319 107"
              stroke="#a7d6f4"
              strokeWidth="13"
              opacity=".45"
              strokeLinecap="round"
            />
            <path
              d="M140 103Q211 53 285 50"
              stroke="#ead5ad"
              strokeWidth="22"
              fill="none"
              opacity=".4"
              strokeLinecap="round"
            />
            <circle cx="141" cy="103" r="31" fill="#adcbd8" opacity=".16" />
            <Rock x={141} y={103} size={19} ice />
            <NightLabel x={211} y={35}>
              Noyau et matière libérée
            </NightLabel>
          </>
        ) : (
          <>
            <path d="M12 87Q180 44 348 87V178H12Z" fill="#4d87ad" opacity=".6" />
            <path d="M12 166Q180 133 348 166V178H12Z" fill="#729b83" />
            <Rock x={83} y={60} size={7} />
            <path d="M114 86L205 138" stroke="#f5b87f" strokeWidth="9" opacity=".22" />
            <path d="M114 86L205 138" stroke="#f6deaa" strokeWidth="2.5" />
            <circle cx="205" cy="138" r="4" fill="#fff0c7" />
            <Rock x={263} y={154} size={5} />
            <NightLabel x={89} y={37}>
              Météoroïde
            </NightLabel>
            <NightLabel x={278} y={59}>
              Météore
            </NightLabel>
            <path d="M258 64L190 126" stroke="#b8ccdf" />
            <NightLabel x={282} y={108}>
              Météorite
            </NightLabel>
            <path d="M281 113L265 148" stroke="#c9d8e7" />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Un corps rocheux ou métallique",
              "Glaces et poussières en activité",
              "Trois noms selon la situation",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "isslife")
    return (
      <>
        <Sky id={id} />
        {step === 0 ? (
          <>
            <Drop x={49} y={71} />
            <path
              d="M32 120q10-10 19 0t19 0M32 130q10-10 19 0t19 0"
              fill="none"
              stroke="#bdd8ed"
              strokeWidth="2"
            />
            <Arrow x1={76} y1={78} x2={120} y2={97} color="#a7d9ed" width={2} />
            <Arrow x1={76} y1={123} x2={120} y2={110} color="#a7d9ed" width={2} />
            <rect
              x="125"
              y="69"
              width="88"
              height="77"
              rx="10"
              fill={`url(#${id}-metal)`}
              stroke="#a4bdd4"
            />
            {[142, 161, 180].map((x) => (
              <rect key={x} x={x} y="85" width="12" height="36" rx="3" fill="#79a6c8" />
            ))}
            <path d="M148 132l7 6 14-14" fill="none" stroke="#477b51" strokeWidth="3" />
            <Arrow x1={218} y1={107} x2={253} y2={107} color="#a7d9ed" width={2} />
            <rect x="261" y="77" width="51" height="65" rx="12" fill="#a8d9e9" stroke="#dbf2fa" />
            <path d="M265 101h43M265 111h43M265 121h43" stroke="#6caaca" />
            <NightLabel x={170} y={43}>
              Traitement et contrôle
            </NightLabel>
            <NightLabel x={280} y={163}>
              Eau propre
            </NightLabel>
          </>
        ) : step === 1 ? (
          <>
            {[68, 124].map((y) => (
              <g key={y}>
                <circle cx="61" cy={y} r="8" fill="#df8b74" />
                <circle cx="50" cy={y + 10} r="5" fill="#e7eff6" />
                <circle cx="72" cy={y + 10} r="5" fill="#e7eff6" />
              </g>
            ))}
            <rect
              x="127"
              y="65"
              width="117"
              height="77"
              rx="10"
              fill={`url(#${id}-metal)`}
              stroke="#a1b7cf"
            />
            <path d="M147 77V128M223 77V128" stroke="#7891ac" strokeWidth="5" />
            <path d="M157 90h9M209 85v10M204 90h10" stroke={ink} strokeWidth="2" />
            <path d="M181 80l-8 22h12l-9 25" fill="none" stroke="#c7963d" strokeWidth="3" />
            <Arrow x1={85} y1={103} x2={119} y2={103} color="#a9d4e9" width={2} />
            <Arrow x1={250} y1={87} x2={276} y2={75} color="#c9d7e7" width={1.5} />
            <Arrow x1={250} y1={124} x2={276} y2={137} color="#e6b4a6" width={1.5} />
            {[64, 88].map((y) => (
              <g key={y}>
                <circle cx="284" cy={y} r="5" fill="#e7eff6" />
                <circle cx="294" cy={y} r="5" fill="#e7eff6" />
              </g>
            ))}
            <circle cx="284" cy="135" r="7" fill="#df8b74" />
            <circle cx="298" cy="135" r="7" fill="#df8b74" />
            <NightLabel x={325} y={83}>
              H₂
            </NightLabel>
            <NightLabel x={326} y={143}>
              O₂
            </NightLabel>
            <NightLabel x={180} y={36}>
              Apport électrique
            </NightLabel>
          </>
        ) : (
          <>
            <g transform="translate(0 16) scale(.75)">
              <Human x={119} y={117} />
            </g>
            <path
              d="M113 75H215Q231 75 231 91V103M232 126V148H111"
              fill="none"
              stroke="#afcfe6"
              strokeWidth="2"
            />
            <Arrow x1={153} y1={75} x2={194} y2={75} color="#afcfe6" width={1.8} />
            <Arrow x1={194} y1={148} x2={151} y2={148} color="#afcfe6" width={1.8} />
            <rect
              x="225"
              y="89"
              width="89"
              height="46"
              rx="8"
              fill={`url(#${id}-metal)`}
              stroke="#a8bed4"
            />
            <path d="M244 98V126M254 98V126M264 98V126" stroke="#7793b0" strokeWidth="3" />
            <circle cx="296" cy="103" r="3" fill="#6f7a8c" />
            <circle cx="293" cy="119" r="3" fill="#6f7a8c" />
            <NightLabel x={268} y={67}>
              Capture du CO₂
            </NightLabel>
            <NightLabel x={193} y={170}>
              Air épuré
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Plusieurs étapes avant réutilisation",
              "2 H₂O → 2 H₂ + O₂",
              "Épurer l’air ≠ produire l’O₂",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "readaptation")
    return (
      <>
        <Sky id={id} />
        {step !== 1 && <path d="M32 169H219" stroke="#a8c0d8" strokeWidth="2" />}
        <Human x={119} y={100} floating={step === 1} support={step === 2} />
        {step === 0 ? (
          <Arrow x1={190} y1={116} x2={190} y2={157} color="#e3c189" />
        ) : step === 2 ? (
          <>
            <path d="M178 170V110H223V170" fill="none" stroke="#a4bad2" strokeWidth="4" />
            <Arrow x1={201} y1={74} x2={201} y2={101} color="#e3c189" width={2} />
          </>
        ) : (
          <path d="M47 40v-9h20M190 163h17v-20" fill="none" stroke="#a2b4cf" strokeWidth="1.5" />
        )}
        <NightLabel x={278} y={36}>
          Liquides
        </NightLabel>
        {Array.from({ length: 5 }, (_, i) => (
          <circle
            key={i}
            cx={268 + (i % 2) * 15}
            cy={(step === 1 ? 58 : step === 2 ? 87 : 68) + i * (step === 1 ? 8 : 13)}
            r="4"
            fill="#94c9e4"
            opacity=".85"
          />
        ))}
        {step === 1 ? (
          <Arrow x1={305} y1={132} x2={305} y2={72} color="#94c9e4" width={2} />
        ) : step === 2 ? (
          <Arrow x1={305} y1={76} x2={305} y2={139} color="#94c9e4" width={2} />
        ) : null}
        <Label x={180} y={201}>
          {
            [
              "Des appuis qui sollicitent le corps",
              "Chute libre et adaptation",
              "Réapprendre les appuis et l’équilibre",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "heliosphere") {
    const probeX = [180, 240, 300][step]!;
    return (
      <>
        <Sky id={id} />
        <ellipse
          cx="130"
          cy="99"
          rx="106"
          ry="65"
          fill="#718fbb"
          fillOpacity=".1"
          stroke="#96b3d4"
          strokeWidth={step === 1 ? 2.5 : 1.3}
          strokeDasharray="4 3"
        />
        <Star x={114} y={99} size={22} id={id} />
        {[0, 55, 110, 165, 220, 275].map((a) => (
          <g key={a} transform={`rotate(${a} 114 99)`}>
            <Arrow x1={145} y1={99} x2={169} y2={99} color="#d8bb8a" width={1.5} />
          </g>
        ))}
        <path d="M153 106H315" stroke="#b7c9e1" strokeWidth="1.3" strokeDasharray="3 4" />
        <Voyager x={probeX} y={96} id={id} />
        <NightLabel x={step === 2 ? 270 : 255} y={34}>
          {step === 2 ? "Interstellaire" : "Héliopause"}
        </NightLabel>
        {step < 2 && <path d="M237 40L232 77" stroke="#b8cde3" />}
        <Label x={180} y={201}>
          {
            [
              "La région du vent solaire",
              "Une frontière mesurée, pas une paroi",
              "Au-delà de la bulle du vent solaire",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "saturnrings")
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            <g transform={`translate(${step === 0 ? 180 : 129} 96) rotate(-18)`}>
              {[52, 62, 71, 82, 93].map((rr, i) => (
                <ellipse
                  key={rr}
                  rx={rr}
                  ry={rr * 0.34}
                  fill="none"
                  stroke={i % 2 ? "#c6bc9e" : "#ead8ad"}
                  strokeWidth={i === 2 ? 5 : 3}
                  opacity=".7"
                />
              ))}
              <circle r="32" fill={`url(#${id}-gold)`} />
              <path
                d="M-28-10h56M-31 2h62M-28 14h56"
                stroke="#bc9b65"
                strokeWidth="3"
                opacity=".65"
              />
              {[52, 62, 71, 82, 93].map((rr, i) => (
                <path
                  key={rr}
                  d={`M${-rr} 0A${rr} ${rr * 0.34} 0 0 0 ${rr} 0`}
                  fill="none"
                  stroke={i % 2 ? "#c6bc9e" : "#ead8ad"}
                  strokeWidth={i === 2 ? 5 : 3}
                  opacity=".8"
                />
              ))}
            </g>
            {step === 1 && (
              <>
                <circle cx="270" cy="103" r="52" fill="#21324b" stroke="#9eb9d5" />
                <path d="M200 85L225 77M205 111L226 130" stroke="#b8cce1" />
                {Array.from({ length: 15 }, (_, i) => {
                  const x = 242 + (i % 4) * 19,
                    y = 72 + Math.floor(i / 4) * 18;
                  return <Rock key={i} x={x} y={y} size={i % 3 === 0 ? 6 : 3} ice />;
                })}
              </>
            )}
            <NightLabel x={step === 0 ? 180 : 269} y={36}>
              {step === 0 ? "Vue oblique" : "Agrandissement"}
            </NightLabel>
          </>
        ) : (
          <>
            <path d="M35 101H326" stroke="#d9c49a" strokeWidth="2.5" />
            <circle cx="180" cy="101" r="32" fill={`url(#${id}-gold)`} />
            <path d="M151 91H209M150 107H210" stroke="#b79c6c" strokeWidth="2.5" opacity=".65" />
            <NightLabel x={180} y={36}>
              Vue par la tranche
            </NightLabel>
            <path d="M65 109v13M298 109v13M65 118H298" stroke="#b5c8e0" strokeWidth="1.2" />
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Des bandes autour de Saturne",
              "Des morceaux séparés, pas un disque",
              "Épaisseur encore très exagérée",
            ][step]
          }
        </Label>
      </>
    );
  if (kind === "sundial") {
    const phi = [0, Math.PI / 4, Math.PI / 2][step]!,
      degrees = [0, 45, 90][step]!,
      endX = 85 + 89 * Math.cos(phi),
      endY = 137 - 89 * Math.sin(phi),
      px = 277 + 31 * Math.cos(phi),
      py = 101 - 31 * Math.sin(phi),
      tx = -Math.sin(phi),
      ty = -Math.cos(phi);
    return (
      <>
        <Sky id={id} />
        <path d="M29 155H209V162H29Z" fill="#8798b0" />
        <path d="M29 137H209" stroke="#9eb3cd" strokeDasharray="3 3" />
        <path d="M85 155V137" stroke="#a8bdd4" strokeWidth="3" />
        {step > 0 && (
          <path
            d={`M85 137H115A30 30 0 0 0 ${round(85 + 30 * Math.cos(phi))} ${round(137 - 30 * Math.sin(phi))}Z`}
            fill="#d8b984"
            opacity=".3"
          />
        )}
        <path
          d={`M85 137L${round(endX)} ${round(endY)}`}
          stroke="#edcf91"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <Dot x={85} y={137} r={3} />
        <NightLabel x={158} y={127}>
          {degrees}°
        </NightLabel>
        <Earth x={277} y={101} r={31} id={id} />
        <path d="M277 49V149" stroke="#bfd1e6" strokeWidth="1.4" strokeDasharray="3 3" />
        <path
          d={`M${round(px - tx * 27)} ${round(py - ty * 27)}L${round(px + tx * 27)} ${round(py + ty * 27)}`}
          stroke="#c1d6e7"
          strokeWidth="1.5"
        />
        <path d={`M${round(px)} ${round(py)}V${round(py - 29)}`} stroke="#edcf91" strokeWidth="3" />
        <circle cx={px} cy={py} r="3" fill="#eff5fc" />
        <NightLabel x={277} y={171}>
          Latitude {degrees}°
        </NightLabel>
        <NightLabel x={100} y={32}>
          Vue en profil
        </NightLabel>
        <Label x={180} y={201}>
          Style polaire parallèle à l’axe terrestre
        </Label>
      </>
    );
  }
  if (kind === "habitable") {
    const luminosity = [0.25, 1, 2.25][step]!,
      orbit = 43,
      radius = equalFluxRadius(luminosity, orbit);
    return (
      <>
        <Sky id={id} />
        <circle
          cx="150"
          cy="95"
          r={radius}
          fill="none"
          stroke="#82b994"
          strokeWidth={radius * 0.4}
          opacity=".45"
        />
        <circle
          cx="150"
          cy="95"
          r={orbit}
          fill="none"
          stroke="#c9d7e6"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <Star x={150} y={95} size={14 + step * 5} id={id} />
        <circle cx={150 + orbit} cy="95" r="7" fill="#a5c4d5" stroke="#edf5fb" />
        <NightLabel x={287} y={35}>
          Orbite fixe
        </NightLabel>
        <path d="M274 42L190 79" stroke="#b9cde0" />
        <NightLabel x={285} y={158}>
          {["L × 0,25", "L × 1", "L × 2,25"][step]}
        </NightLabel>
        <Label x={180} y={201}>
          {
            [
              "Zone plus proche de l’étoile",
              "Dans la zone ≠ eau ou vie garanties",
              "Zone repoussée vers l’extérieur",
            ][step]
          }
        </Label>
      </>
    );
  }
  if (kind === "meteors")
    return (
      <>
        <Sky id={id} />
        {step < 2 ? (
          <>
            <Star x={123} y={99} size={17} id={id} />
            <circle
              cx="123"
              cy="99"
              r="64"
              fill="none"
              stroke="#a7bed8"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
            {Array.from({ length: 22 }, (_, i) => {
              const y = 36 + i * 6,
                x = 187 + (y - 99) * 0.7 + ((i % 3) - 1) * 4;
              return (
                <circle
                  key={i}
                  cx={round(x)}
                  cy={y}
                  r={i % 4 === 0 ? 2 : 1}
                  fill={step === 1 ? "#e1b98a" : "#c2c5ce"}
                  opacity=".8"
                />
              );
            })}
            <Earth x={step === 0 ? 170 : 187} y={step === 0 ? 55 : 99} r={12} id={id} />
            {step === 1 && (
              <circle cx="187" cy="99" r="21" fill="none" stroke="#e7c28c" strokeWidth="1.7" />
            )}
            <NightLabel x={272} y={39}>
              Débris
            </NightLabel>
            <path d="M258 45L205 75" stroke="#bccfe3" />
            <NightLabel x={180} y={169}>
              Vue de l’espace
            </NightLabel>
          </>
        ) : (
          <>
            <path d="M12 167Q81 143 148 165T348 163V178H12Z" fill="#152a3f" />
            <circle cx="154" cy="45" r="5" fill="none" stroke="#e5bd88" />
            {[
              [45, 151],
              [110, 160],
              [256, 137],
              [304, 112],
            ].map(([x, y], i) => {
              const sx = 154 + (x! - 154) * 0.42,
                sy = 45 + (y! - 45) * 0.42,
                ex = 154 + (x! - 154) * 0.84,
                ey = 45 + (y! - 45) * 0.84;
              return (
                <g key={i}>
                  <path
                    d={`M154 45L${round(sx)} ${round(sy)}`}
                    fill="none"
                    stroke="#8c9eb8"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                  <path
                    d={`M${round(sx)} ${round(sy)}L${round(ex)} ${round(ey)}`}
                    stroke="#f2d9a7"
                    strokeWidth="2"
                  />
                  <circle cx={ex} cy={ey} r="2" fill="#fff1c9" />
                </g>
              );
            })}
            <NightLabel x={264} y={37}>
              Radiant apparent
            </NightLabel>
            <NightLabel x={180} y={168}>
              Vue depuis le sol
            </NightLabel>
          </>
        )}
        <Label x={180} y={201}>
          {
            [
              "Une orbite rencontre un courant",
              "Des grains dans l’atmosphère",
              "Une convergence due à la perspective",
            ][step]
          }
        </Label>
      </>
    );
  return null;
}
