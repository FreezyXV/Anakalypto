import {
  ArtFrame,
  Arrow,
  Label,
  Chip,
  Heat,
  gold,
  red,
  type DrawingProps,
} from "./Exploration50Parts";
function Disk({ x = 161, y = 129, r = 56 }: { x?: number; y?: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#b9ceda" stroke="#7c9bb0" strokeWidth="2" />
      {[0.35, 0.55, 0.75, 0.9].map((t) => (
        <circle key={t} cx={x} cy={y} r={r * t} fill="none" stroke="#8eafc0" strokeWidth="1" />
      ))}
      <circle cx={x} cy={y} r={r * 0.18} fill="#5b778e" />
      <path
        d={`M${x + r * 1.4} ${y - r * 0.9}L${x + r * 0.25} ${y + r * 0.05}l10 7 ${r * 1.05} ${-r * 0.65}Z`}
        fill="#92aabb"
        stroke="#5d7c93"
      />
      <circle cx={x + r * 1.4} cy={y - r * 0.9} r="7" fill="#58788f" />
    </g>
  );
}
export function Hardware50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "ssdanddisk")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 0
            ? "La tête survole le plateau"
            : s === 1
              ? "Aucune pièce mobile"
              : "Déplacement mécanique ou adressage"
        }
      >
        {s === 0 ? (
          <>
            <rect x="49" y="52" width="266" height="148" rx="12" fill="#d4e0e6" stroke="#8ba6b6" />
            <Disk />
            <Label x={90} y={80}>
              Plateau
            </Label>
            <Label x={278} y={180}>
              Tête
            </Label>
            <Arrow x1={254} y1={166} x2={196} y2={140} color={gold} />
          </>
        ) : s === 1 ? (
          <>
            <rect x="38" y="66" width="284" height="128" rx="8" fill="#89aaa2" stroke="#527a70" />
            {[57, 130, 203].map((x) => (
              <Chip key={x} x={x} y={85} w={53} h={42} />
            ))}
            <Chip x={141} y={147} w={68} h={33} />
            <path d="M67 140v25h61m100-29v29h-16" fill="none" stroke="#c3ca87" strokeWidth="2" />
            <Label x={180} y={56}>
              Puces flash
            </Label>
            <Label x={274} y={175}>
              Contrôle
            </Label>
          </>
        ) : (
          <>
            <Disk x={102} y={127} r={43} />
            <rect x="212" y="87" width="109" height="87" rx="7" fill="#89aaa2" stroke="#527a70" />
            <Chip x={225} y={101} w={35} h={25} />
            <Chip x={275} y={101} w={35} h={25} />
            <path d="M234 144h55" stroke="#d4d99a" strokeWidth="3" />
            <Label x={105} y={198}>
              Disque dur
            </Label>
            <Label x={267} y={198}>
              SSD
            </Label>
            <Arrow x1={92} y1={66} x2={140} y2={81} color={gold} />
          </>
        )}
      </ArtFrame>
    );
  if (kind === "capacitivetouch")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Électrodes sous le verre" : "Mesurer un couplage électrique"}
      >
        <rect
          x="49"
          y="101"
          width="264"
          height="85"
          rx="7"
          fill="#d6e8ee"
          stroke="#8fb0c1"
          strokeWidth="2"
        />
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={`M${66 + i * 32} 113v61`} stroke="#7c9eaf" strokeWidth="2" />
        ))}
        {[119, 136, 153, 170].map((y) => (
          <path key={y} d={`M60 ${y}h242`} stroke="#b5a389" strokeWidth="2" />
        ))}
        {s > 0 && (
          <>
            <ellipse cx="186" cy="123" rx="27" ry="17" fill="#ddc07a" opacity=".65" />
            <path
              d="M176 44V79Q161 80 162 91Q163 98 179 99H192Q205 99 205 86V44"
              fill="#dcb59d"
              stroke="#b58b76"
              strokeWidth="2"
            />
            <path d="M187 51v34" stroke="#efcfb7" strokeWidth="3" />
          </>
        )}
        {s === 2 ? (
          <>
            <path d="M305 145h28v49H187v-20" fill="none" stroke={gold} strokeWidth="3" />
            <circle cx="194" cy="136" r="8" stroke={red} fill="none" strokeWidth="2" />
            <path d="M184 136h20m-10-10v20" stroke={red} strokeWidth="2" />
            <Label x={86} y={78}>
              Position estimée
            </Label>
          </>
        ) : (
          <Label x={180} y={197}>
            {s === 0 ? "Grille de mesure" : "Variation locale"}
          </Label>
        )}
      </ArtFrame>
    );
  if (kind === "inkjetdrops")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Tête de jet d’encre, vue en coupe" : "Points et gouttes agrandis"}
      >
        <path d="M49 73H311V111H49Z" fill="#c1d1dc" stroke="#7896ac" />
        <path d="M32 179H328V197H32Z" fill="#faf6e9" stroke="#c9c2a9" />
        {["#43a5bb", "#bb6396", "#ddbd4b", "#35485a"].map((c, i) => (
          <g key={c}>
            <path d={`M${75 + i * 67} 78h22v24l-7 12h-8l-7-12Z`} fill={c} stroke="#688294" />
            {s > 0 && (
              <path d={`M${86 + i * 67} ${s === 1 ? 139 : 158}q-9 13 0 14t0-14Z`} fill={c} />
            )}
          </g>
        ))}
        {s === 0 ? (
          <Label x={180} y={158}>
            Buses microscopiques
          </Label>
        ) : s === 1 ? (
          <>
            <Arrow x1={58} y1={125} x2={58} y2={160} />
            <Label x={180} y={57}>
              Commande d’éjection
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={53} y1={52} x2={300} y2={52} color={gold} />
            {Array.from({ length: 32 }, (_, i) => (
              <circle
                key={i}
                cx={70 + (i % 16) * 14}
                cy={184 + Math.floor(i / 16) * 8}
                r="2.7"
                fill={["#43a5bb", "#bb6396", "#ddbd4b", "#35485a"][i % 4]}
              />
            ))}
            <Label x={180} y={145}>
              Points placés sur le papier
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "transistorgate")
    return (
      <ArtFrame
        {...p}
        foot={s === 1 ? "Le courant ne traverse pas l’isolant" : "La tension commande le canal"}
      >
        <rect x="34" y="130" width="292" height="58" fill="#c3d3df" stroke="#7d9aae" />
        <rect x="57" y="120" width="69" height="30" fill="#9ebdcf" stroke="#7898ac" />
        <rect x="234" y="120" width="69" height="30" fill="#9ebdcf" stroke="#7898ac" />
        <path d="M40 125h27m226 0h27" stroke="#9f8657" strokeWidth="5" />
        <rect x="127" y="108" width="107" height="9" fill="#f4e6b5" stroke="#bca465" />
        <rect x="127" y="80" width="107" height="27" fill="#9aaab7" stroke="#6c8599" />
        <path d="M180 79V47" stroke={s === 1 ? red : "#899ca8"} strokeWidth="4" />
        {s === 1 ? (
          <>
            <path d="M123 137H238" stroke={red} strokeWidth="6" />
            <Arrow x1={276} y1={156} x2={87} y2={156} color={red} />
            <Label x={180} y={180}>
              Canal conducteur
            </Label>
          </>
        ) : (
          <>
            <path d="M131 137h98" stroke="#7d99ac" strokeDasharray="4 4" />
            <Label x={180} y={179}>
              {s === 0 ? "Pas de canal" : "Canal supprimé"}
            </Label>
          </>
        )}
        <Label x={73} y={105}>
          Source
        </Label>
        <Label x={289} y={105}>
          Drain
        </Label>
        <Label x={243} y={59}>
          Grille
        </Label>
        {s === 2 && <Arrow x1={140} y1={54} x2={171} y2={54} color={gold} />}
      </ArtFrame>
    );
  if (kind === "cpucooling")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "L’air renouvelé emporte la chaleur" : "Le dissipateur ne fabrique pas de froid"
        }
      >
        <rect x="76" y="166" width="208" height="25" rx="4" fill="#547f77" />
        <Chip x={130} y={145} w={101} h={27} />
        <path d="M118 140h123" stroke="#d0c9b2" strokeWidth="5" />
        <rect x="109" y="125" width="141" height="15" fill="#a5becd" stroke="#698da6" />
        {Array.from({ length: 10 }, (_, i) => (
          <path
            key={i}
            d={`M${115 + i * 14} 125V78h5v47Z`}
            fill="#b8cdd7"
            stroke="#789aac"
            strokeWidth="1"
          />
        ))}
        <Arrow x1={180} y1={159} x2={180} y2={97} color={red} />
        {s === 0 ? (
          <Label x={180} y={65}>
            Contact thermique
          </Label>
        ) : s === 1 ? (
          <>
            <Heat x={140} y={72} />
            <Heat x={222} y={72} />
            <Label x={298} y={174}>
              Ailettes
            </Label>
          </>
        ) : (
          <>
            <circle cx="61" cy="104" r="29" fill="#d3e0e6" stroke="#7595aa" />
            {[0, 120, 240].map((a) => (
              <path
                key={a}
                transform={`rotate(${a} 61 104)`}
                d="M61 104q-23-9-18-21q21-8 23 15Z"
                fill="#8faebb"
              />
            ))}
            <circle cx="61" cy="104" r="5" fill="#6d8ea3" />
            <Arrow x1={85} y1={98} x2={305} y2={98} />
            <Arrow x1={85} y1={115} x2={305} y2={115} />
          </>
        )}
      </ArtFrame>
    );
  return null;
}
