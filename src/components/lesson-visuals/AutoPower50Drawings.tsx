import {
  ArtFrame,
  Arrow,
  Label,
  Wheel,
  Heat,
  blue,
  green,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
import { gearOutline } from "@/lib/lesson-visuals/explorations50-models";
function Gear({
  x,
  y,
  teeth,
  r,
  phase = 0,
}: {
  x: number;
  y: number;
  teeth: number;
  r: number;
  phase?: number;
}) {
  const points = gearOutline(teeth, r, phase);
  return (
    <g transform={`translate(${x} ${y})`} data-teeth={teeth}>
      <polygon
        points={points.map((p) => p.join(",")).join(" ")}
        fill="#afc2d0"
        stroke="#617c90"
        strokeWidth="1.5"
      />
      <circle r={r * 0.58} fill="#d7e3e8" stroke="#7a94a7" />
      <circle r="7" fill="#5e778b" />
      <path d={`M0 ${-r * 0.57}V${-r * 0.85}`} stroke={gold} strokeWidth="3" />
    </g>
  );
}
export function AutoPower50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "regenbrake")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 0
            ? "Électricité → mouvement"
            : s === 1
              ? "Mouvement → électricité, avec pertes"
              : "La friction complète la récupération"
        }
      >
        <rect
          x="32"
          y="103"
          width="72"
          height="51"
          rx="7"
          fill="#b8c8a5"
          stroke={green}
          strokeWidth="2"
        />
        <path d="M104 118h7v20h-7M48 116v24m-9-12h18m22 0h14" stroke={green} strokeWidth="3" />
        <rect
          x="151"
          y="100"
          width="74"
          height="57"
          rx="12"
          fill="#9fb7cb"
          stroke="#5e7e99"
          strokeWidth="2"
        />
        <path d="M164 112q12 32 23 0t24 0" stroke="#d5ab6b" strokeWidth="4" fill="none" />
        <path d="M225 129h31" stroke="#6c8291" strokeWidth="7" />
        <Wheel x={290} y={129} r={34} />
        <Label x={68} y={183}>
          Batterie
        </Label>
        <Label x={186} y={183}>
          {s === 1 ? "Génératrice" : "Moteur"}
        </Label>
        {s === 0 ? (
          <>
            <Arrow x1={69} y1={84} x2={180} y2={84} />
            <Arrow x1={203} y1={84} x2={289} y2={84} color={gold} />
          </>
        ) : s === 1 ? (
          <>
            <Arrow x1={291} y1={83} x2={205} y2={83} color={gold} />
            <Arrow x1={179} y1={83} x2={70} y2={83} />
            <Heat x={188} y={65} />
          </>
        ) : (
          <>
            <rect x="310" y="114" width="13" height="30" rx="3" fill={red} />
            <Heat x={293} y={86} />
            <path d="M122 120l14 15m0-15-14 15" stroke="#98a5ad" strokeWidth="2" />
            <Label x={180} y={64}>
              Récupération limitée
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "dieselignition") {
    const py = [169, 104, 149][s]!;
    return (
      <ArtFrame
        {...p}
        foot={
          [
            "L’air entre sans mélange carburé",
            "Même air dans un volume réduit",
            "Combustion sans étincelle",
          ][s]!
        }
      >
        <path d="M111 194V57H249V194" fill="#bdcbd6" stroke="#71899c" strokeWidth="3" />
        <rect
          x="123"
          y="64"
          width="114"
          height={py - 64}
          fill={s === 0 ? "#c8e0ec" : s === 1 ? "#efd59a" : "#e3a468"}
        />
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={i}
            cx={137 + (i % 4) * 29}
            cy={75 + (Math.floor(i / 4) * (py - 82)) / 3}
            r="3"
            fill={s === 0 ? blue : red}
          />
        ))}
        {s === 2 && (
          <>
            <path d="M173 43h14v28h-14Z" fill="#8399a9" stroke={ink} />
            {[-1, 0, 1].map((v) => (
              <path
                key={v}
                d={`M180 72l${v * 28} 36`}
                stroke="#6d533b"
                strokeWidth="2"
                strokeDasharray="2 4"
              />
            ))}
            <path
              d="M145 130q-4-18 10-27q-2 16 12 18q-3-21 13-28q3 23 15 20q-4-10 7-17q18 25 7 34Z"
              fill="#f8e2a3"
            />
          </>
        )}
        <rect
          x="123"
          y={py}
          width="114"
          height="17"
          fill="#9daebb"
          stroke="#5e778b"
          strokeWidth="2"
        />
        <path d={`M180 ${py + 17}V205`} stroke="#7e94a5" strokeWidth="10" />
        {s > 0 && (
          <Arrow
            x1={286}
            y1={s === 1 ? 170 : 95}
            x2={286}
            y2={s === 1 ? 105 : 165}
            color={s === 1 ? blue : red}
          />
        )}
        <Label x={59} y={124}>
          {s === 0 ? "Air" : s === 1 ? "Chaud" : "Gazole"}
        </Label>
      </ArtFrame>
    );
  }
  if (kind === "clutchplates")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Ressorts entre deux masses" : "Coupe par la tranche · jeu exagéré"}
      >
        {s < 2 ? (
          <>
            <path
              d={`M30 130h79M${s === 0 ? 141 : 175} 130H330`}
              stroke="#7891a5"
              strokeWidth="11"
            />
            <rect
              x="106"
              y="71"
              width="27"
              height="117"
              rx="5"
              fill="#b5c4cf"
              stroke="#617c90"
              strokeWidth="2"
            />
            <rect
              x={s === 0 ? 134 : 168}
              y="81"
              width="13"
              height="96"
              fill="#b79c78"
              stroke="#866b48"
              strokeWidth="2"
            />
            <rect
              x={s === 0 ? 148 : 211}
              y="71"
              width="23"
              height="117"
              rx="4"
              fill="#9db2c4"
              stroke="#617c90"
              strokeWidth="2"
            />
            {s === 0 ? (
              <>
                <Arrow x1={47} y1={53} x2={292} y2={53} color={gold} />
                <Label x={58} y={203}>
                  Moteur
                </Label>
                <Label x={295} y={203}>
                  Boîte
                </Label>
              </>
            ) : (
              <>
                <Arrow x1={195} y1={54} x2={234} y2={54} color={red} />
                <path d="M144 118l10 12-10 12" fill="none" stroke={red} strokeWidth="3" />
                <Label x={180} y={203}>
                  Disque libéré
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <circle cx="180" cy="125" r="72" fill="#b8c9d4" stroke="#607b8e" strokeWidth="3" />
            <circle cx="180" cy="125" r="52" fill="#e1e8e8" stroke="#8ea1ad" />
            <circle cx="180" cy="125" r="22" fill="#879cab" stroke="#506b7e" />
            {[0, 90, 180, 270].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 180 125)`}>
                <path
                  d="M152 80l6-5 6 10 6-10 6 10 6-10 6 10 6-10 6 10 7-5"
                  stroke={gold}
                  strokeWidth="4"
                  fill="none"
                />
                <path d="M151 76v9m57-9v9" stroke="#6c7e88" strokeWidth="4" />
              </g>
            ))}
            <Label x={62} y={66}>
              Masse 1
            </Label>
            <Label x={298} y={189}>
              Masse 2
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "gearboxpair")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 0
            ? "2 tours d’entrée → 1 tour de sortie"
            : s === 1
              ? "1 tour d’entrée → 2 tours de sortie"
              : "Deux rapports de transmission"
        }
      >
        {s < 2 ? (
          <>
            <Gear x={s === 0 ? 123 : 153} y={128} teeth={s === 0 ? 12 : 24} r={s === 0 ? 30 : 60} />
            <Gear
              x={s === 0 ? 213 : 243}
              y={128}
              teeth={s === 0 ? 24 : 12}
              r={s === 0 ? 60 : 30}
              phase={Math.PI / (s === 0 ? 24 : 12)}
            />
            <Label x={s === 0 ? 123 : 153} y={s === 0 ? 81 : 53}>
              {s === 0 ? "12 dents" : "24 dents"}
            </Label>
            <Label x={s === 0 ? 213 : 243} y={s === 0 ? 53 : 81}>
              {s === 0 ? "24 dents" : "12 dents"}
            </Label>
            <Arrow x1={39} y1={128} x2={77} y2={128} color={gold} />
            <Arrow x1={285} y1={128} x2={326} y2={128} color={green} />
            <Label x={68} y={198}>
              Entrée
            </Label>
            <Label x={293} y={198}>
              Sortie
            </Label>
          </>
        ) : (
          <>
            <Gear x={130} y={86} teeth={12} r={18} />
            <Gear x={184} y={86} teeth={24} r={36} phase={Math.PI / 24} />
            <Gear x={130} y={163} teeth={24} r={36} />
            <Gear x={184} y={163} teeth={12} r={18} phase={Math.PI / 12} />
            <Label x={280} y={91}>
              Réduire
            </Label>
            <Label x={280} y={169}>
              Accélérer
            </Label>
            <path d="M65 60v128" stroke="#95a8b3" strokeWidth="4" />
            <path d="M58 122h14" stroke={gold} strokeWidth="7" />
          </>
        )}
      </ArtFrame>
    );
  if (kind === "intercoolerair")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Plus dense à pression comparable" : "Deux circuits sans mélange"}
      >
        <path d="M27 115H107M139 115h27m83 0h39" stroke={blue} strokeWidth="17" fill="none" />
        <path d="M139 115h27" stroke={red} strokeWidth="17" />
        <circle cx="113" cy="115" r="27" fill="#b7c9d7" stroke="#69879d" strokeWidth="2" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path
            key={a}
            transform={`rotate(${a} 113 115)`}
            d="M113 111q-22-20-7-21l8 19"
            fill="#7e9bad"
          />
        ))}
        <rect x="162" y="75" width="88" height="92" rx="6" fill="#d5e0e6" stroke="#7e9bab" />
        {Array.from({ length: 7 }, (_, i) => (
          <path key={i} d={`M${169 + i * 12} 80v82`} stroke="#8ba6b6" strokeWidth="3" />
        ))}
        <path d="M165 106h82m-82 18h82" stroke={red} strokeWidth="5" />
        <rect x="288" y="92" width="44" height="62" rx="6" fill="#b8cad6" stroke="#6a8498" />
        {Array.from({ length: s === 2 ? 9 : 5 }, (_, i) => (
          <circle
            key={i}
            cx={296 + (i % 3) * 13}
            cy={105 + Math.floor(i / 3) * 17}
            r="3"
            fill={blue}
          />
        ))}
        {s > 0 && (
          <>
            <Arrow x1={181} y1={68} x2={181} y2={178} />
            <Arrow x1={231} y1={68} x2={231} y2={178} />
            <Heat x={263} y={72} />
          </>
        )}
        <Label x={80} y={194}>
          Compresser
        </Label>
        <Label x={231} y={201}>
          {s === 2 ? "Admettre" : "Échanger"}
        </Label>
        {s === 0 && <Heat x={143} y={67} />}
      </ArtFrame>
    );
  return null;
}
