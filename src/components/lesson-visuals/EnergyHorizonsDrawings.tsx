import { steamLink } from "@/lib/lesson-visuals/horizons50-models";
import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  red,
  ink,
  Box,
  Rotor,
  Microbe,
  type DrawingProps,
} from "./Horizons50Parts";
export function EnergyHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "steamengine") {
    const { pistonX: x, cx, cy, jointX } = steamLink(([225, 330, 145][s]! * Math.PI) / 180);
    return (
      <Art {...p} foot="Pression → piston → bielle">
        <path d="M36 85H177V177H36Z" fill="#c8d4dc" stroke={ink} strokeWidth="3" />
        <rect x="40" y="91" width={x - 40} height="80" fill={s === 2 ? "#e2ecf2" : "#dfbf8e"} />
        <rect x={x + 8} y="91" width={169 - x} height="80" fill={s === 2 ? "#dfbf8e" : "#e2ecf2"} />
        <rect x={x} y="90" width="9" height="82" fill={ink} />
        <path
          data-steam-link="true"
          d={`M${jointX} 132L${cx} ${cy}`}
          stroke="#947b5c"
          strokeWidth="7"
          fill="none"
        />
        <path d={`M${x + 8} 132H${jointX}`} stroke={ink} strokeWidth="5" fill="none" />
        <circle cx="278" cy="143" r="43" stroke={ink} strokeWidth="5" fill="none" />
        <path fill="none" d={`M278 143L${cx} ${cy}`} stroke={ink} strokeWidth="5" />
        <circle cx={cx} cy={cy} r="6" fill={gold} />
        <path d="M55 85V55H89M160 85V55H201" stroke={ink} fill="none" strokeWidth="8" />
        <Arrow d={s === 2 ? "M200 55H160V82" : "M89 55H55V82"} color={red} />
        <Tag x={122} y={198}>
          Piston
        </Tag>
        <Tag x={283} y={198}>
          Manivelle
        </Tag>
      </Art>
    );
  }
  if (kind === "biogasdigester")
    return (
      <Art {...p} foot="Sans oxygène, plusieurs microbes">
        <path d="M103 93Q180 35 257 93V191H103Z" fill="#d2ddd5" stroke={ink} strokeWidth="3" />
        <path d="M108 129H252V186H108Z" fill="#a49f74" />
        <path
          d="M26 109H119V143M250 165H328V187M180 60V41H284V73"
          stroke="#808d87"
          fill="none"
          strokeWidth="7"
        />
        <Tag x={54} y={93}>
          Entrée
        </Tag>
        <Tag x={292} y={106}>
          Biogaz
        </Tag>
        <Tag x={293} y={157}>
          Digestat
        </Tag>
        {s > 0 && [142, 181, 220].map((x) => <Microbe key={x} x={x} y={154} color="#eff0ce" />)}
        {s === 2 && (
          <>
            <Arrow d="M181 63V42H247" color={gold} />
            <Arrow d="M262 165H317" color={green} />
            {[152, 180, 210].map((x) => (
              <circle key={x} cx={x} cy="108" r="5" fill={gold} />
            ))}
          </>
        )}
      </Art>
    );
  if (kind === "pumpedstorage") {
    const top = [16, 66, 16][s]!,
      bottom = 90 - top;
    return (
      <Art {...p} foot="Le cycle consomme plus qu’il ne rend">
        <path d="M18 56H146V139L342 190V202H18Z" fill="#bac3af" />
        <path d="M30 58V133H139V58M228 135V201H335V135" stroke={ink} fill="none" strokeWidth="3" />
        <rect
          data-reservoir="upper"
          data-volume={top}
          x="32"
          y={131 - top}
          width="105"
          height={top}
          fill="#86b8d0"
        />
        <rect
          data-reservoir="lower"
          data-volume={bottom}
          x="230"
          y={199 - bottom * 0.8}
          width="103"
          height={bottom * 0.8}
          fill="#86b8d0"
        />
        <path d="M138 120L218 177H230" stroke={ink} fill="none" strokeWidth="9" />
        <circle cx="204" cy="167" r="18" fill="#dde8ec" stroke={blue} />
        {s !== 1 && (
          <Arrow
            d={s === 0 ? "M222 153L157 108" : "M151 136L175 153"}
            color={s === 0 ? gold : green}
          />
        )}
        <Tag x={82} y={50}>
          Bassin haut
        </Tag>
        <Tag x={274} y={122}>
          Bassin bas
        </Tag>
        {s === 1 && (
          <Tag x={255} y={58}>
            Stockage
          </Tag>
        )}
      </Art>
    );
  }
  if (kind === "tidalturbine")
    return (
      <Art {...p} foot="Le courant entraîne la génératrice">
        <path d="M18 61Q72 49 126 61T234 61T342 61V192H18Z" fill="#c1dde7" />
        <path d="M18 191Q180 180 342 193V203H18Z" fill="#bcba9d" />
        <path fill="none" d="M190 163V193H247" stroke={ink} strokeWidth="9" />
        <path d="M206 141H252V163H206Z" fill="#a0bac6" stroke={ink} />
        <Rotor x={185} y={130} angle={s * 45} />
        {[91, 124, 159].map((y) => (
          <Arrow key={y} d={`M29 ${y}H128`} color={blue} />
        ))}
        {s > 0 && (
          <Tag x={270} y={100}>
            Rotation
          </Tag>
        )}
        {s === 2 && (
          <>
            <path d="M248 163V189H333" stroke={gold} fill="none" strokeWidth="4" />
            <Tag x={292} y={178}>
              Câble
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "batteryage")
    return (
      <Art {...p} foot="Deux mécanismes parmi d’autres">
        <Box x={35} y={65} w={288} h={128}>
          <path d="M47 77H137V181H47Z" fill="#899ca8" />
          <path d={`M137 77H${s === 0 ? 146 : 167}V181H137Z`} fill="#bea88a" />
          {Array.from({ length: 10 }, (_, i) => (
            <circle
              key={i}
              cx={s === 0 ? 184 + (i % 5) * 25 : i < 4 ? 149 : 189 + (i % 3) * 38}
              cy={
                s === 0
                  ? 103 + Math.floor(i / 5) * 47
                  : i < 4
                    ? 88 + i * 26
                    : 106 + Math.floor((i - 4) / 3) * 45
              }
              r="5"
              fill={s > 0 && i < 4 ? gold : blue}
            />
          ))}
          {s === 2 && (
            <>
              <path
                d="M57 86L91 122 73 160M91 122L119 166"
                stroke="#e7edf2"
                strokeWidth="5"
                fill="none"
              />
              <path d="M99 131L128 156 118 177H93Z" fill="#c7d0d5" />
            </>
          )}
        </Box>
        <Tag x={89} y={53}>
          Électrode
        </Tag>
        <Tag x={250} y={53}>
          Électrolyte
        </Tag>
        <Tag x={180} y={198}>
          {s === 0 ? "Couche protectrice" : s === 1 ? "Lithium immobilisé" : "Zones isolées"}
        </Tag>
      </Art>
    );
  return null;
}
