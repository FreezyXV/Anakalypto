import {
  ArtFrame,
  Arrow,
  Label,
  blue,
  green,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
function Staff() {
  return (
    <g fill="none" stroke="#7e8d99" strokeWidth="1.3">
      {[98, 110, 122, 134, 146].map((y) => (
        <path key={y} d={`M36 ${y}H326`} />
      ))}
      <path
        d="M64 161C20 142 48 104 63 121C86 148 38 160 47 130L63 80Q67 62 58 70Q44 83 63 116L70 164Q70 182 58 174"
        strokeWidth="2.7"
        stroke={ink}
      />
    </g>
  );
}
function Note({ x, y = 134, white = false }: { x: number; y?: number; white?: boolean }) {
  return (
    <g>
      <ellipse
        cx={x}
        cy={y}
        rx="9"
        ry="6"
        transform={`rotate(-17 ${x} ${y})`}
        fill={white ? "#f6f8f5" : ink}
        stroke={ink}
        strokeWidth="2"
      />
      <path d={`M${x + 8} ${y}v-45`} stroke={ink} strokeWidth="2.5" />
    </g>
  );
}
export function MusicOptics50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "musicscore")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 0
            ? "Clé de sol · exemple mi, fa, sol"
            : s === 1
              ? "Une blanche vaut deux noires"
              : "Quatre pulsations égales"
        }
      >
        <Staff />
        {s === 0 ? (
          [120, 200, 280].map((x, i) => (
            <g key={x}>
              <Note x={x} y={146 - i * 6} />
              <Label x={x} y={187}>
                {["mi", "fa", "sol"][i]}
              </Label>
            </g>
          ))
        ) : s === 1 ? (
          <>
            <Note x={111} white />
            <Note x={235} />
            <Note x={291} />
            <Label x={111} y={187}>
              2 temps
            </Label>
            <Label x={264} y={187}>
              1 + 1 temps
            </Label>
            <Label x={175} y={118}>
              =
            </Label>
          </>
        ) : (
          <>
            <Label x={88} y={115}>
              4
            </Label>
            <Label x={88} y={140}>
              4
            </Label>
            {[122, 178, 234, 290].map((x, i) => (
              <g key={x}>
                <Note x={x} />
                <Label x={x} y={187}>
                  {i + 1}
                </Label>
              </g>
            ))}
            <path d="M315 98v48" stroke={ink} strokeWidth="3" />
          </>
        )}
      </ArtFrame>
    );
  if (kind === "fluteair") {
    const end = s === 2 ? 192 : 317;
    const wave = Array.from({ length: 51 }, (_, i) => {
      const x = 91 + ((end - 91) * i) / 50;
      return `${i ? "L" : "M"}${x} ${121 - Math.sin((Math.PI * i) / 50) * 22}`;
    }).join(" ");
    return (
      <ArtFrame
        {...p}
        foot={
          [
            "Jet oscillant au biseau",
            "Longue colonne · note plus grave",
            "Plus courte · note plus aiguë",
          ][s]!
        }
      >
        <path d="M40 108H76L85 94H321V144H38Z" fill="#d8bb8f" stroke="#8a6e4d" strokeWidth="2" />
        <path d="M39 115h38l13-12h230v30H40Z" fill="#eef5f7" />
        <rect x="317" y="103" width="8" height="30" fill="#eef5f7" />
        <path d="M76 115l18-15-5 17Z" fill="#867156" />
        {[140, 192, 243, 284].map((x) => (
          <circle
            key={x}
            cx={x}
            cy="99"
            r="6"
            fill={s === 2 && x === 192 ? "#1a394e" : "#927a57"}
            stroke="#665941"
          />
        ))}
        {s === 0 ? (
          <>
            <Arrow x1={24} y1={117} x2={73} y2={117} />
            <path d="M66 116q8-16 18-3t20 0" stroke={blue} strokeWidth="2" fill="none" />
            <Label x={78} y={70}>
              Biseau
            </Label>
            <path d="M86 77v17" stroke={ink} />
            <Label x={225} y={181}>
              Air qui vibre
            </Label>
          </>
        ) : (
          <>
            <path d={wave} stroke={blue} strokeWidth="3" fill="none" />
            <path d={`M91 164H${end}M91 157v14M${end} 157v14`} stroke={green} strokeWidth="2" />
            <Label x={(91 + end) / 2} y={194}>
              Longueur acoustique
            </Label>
            {s === 2 && <Arrow x1={192} y1={89} x2={192} y2={58} />}
          </>
        )}
      </ArtFrame>
    );
  }
  if (kind === "shadowstage") {
    const x = s === 1 ? 96 : 137,
      scale = (224 - 35) / (x - 35),
      top = 126 - 24 * scale,
      bottom = 126 + 29 * scale;
    return (
      <ArtFrame
        {...p}
        foot={s === 1 ? "Plus près de la lampe : plus grand" : "Lampe → silhouette → écran"}
      >
        <circle cx="35" cy="126" r="8" fill="#eed37f" stroke={gold} />
        <path d={`M35 126L224 ${top}V${bottom}Z`} fill="#e8d6a1" opacity=".35" />
        <path
          data-shadow-rays
          d={`M35 126L224 ${top}M35 126L224 ${bottom}`}
          stroke={gold}
          fill="none"
          strokeWidth="1.5"
        />
        <path d="M224 48v147" stroke="#98b3c1" strokeWidth="6" />
        <path
          d={`M${x} 112v35m0-25l-13 12m13-12 15 ${s === 2 ? -9 : 12}M${x} 146l-7 9m7-9 8 9`}
          fill="none"
          stroke={ink}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx={x} cy="108" r="6" fill={ink} />
        <path d={`M${x} 147v28`} stroke="#9a7851" strokeWidth="2" />
        <rect x="244" y="62" width="92" height="126" rx="4" fill="#f5e6bc" stroke="#bba777" />
        <g transform={`translate(289 126) scale(${scale * 0.63})`}>
          <circle cy="-18" r="6" fill="#53616b" />
          <path
            d={`M0-12v33m0-24-13 12m13-12 15 ${s === 2 ? -9 : 12}M0 20l-7 9m7-9 8 9`}
            stroke="#53616b"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <Label x={290} y={205}>
          Ombre
        </Label>
      </ArtFrame>
    );
  }
  if (kind === "pinholebox")
    return (
      <ArtFrame {...p} foot="Des rayons droits, sans lentille">
        <path
          d="M170 56H324V186H170V129m0-7V56"
          fill="#d4e1e8"
          fillOpacity=".4"
          stroke="#5a7589"
          strokeWidth="3"
        />
        <path d="M313 62v118" stroke="#f9fcfc" strokeWidth="7" />
        <Arrow x1={47} y1={165} x2={47} y2={83} color={red} width={5} />
        <path
          data-pinhole-top
          d="M47 83L170 125 313 173.8292682926829"
          fill="none"
          stroke={red}
          strokeWidth="2.2"
        />
        {s > 0 && (
          <path
            data-pinhole-bottom
            d="M47 165L170 125 313 78.4959349593496"
            fill="none"
            stroke={blue}
            strokeWidth="2.2"
          />
        )}
        {s === 2 && (
          <Arrow
            x1={313}
            y1={78.4959349593496}
            x2={313}
            y2={173.8292682926829}
            color={red}
            width={5}
          />
        )}
        <circle cx="170" cy="125" r="3" fill={ink} />
        <Label x={71} y={195}>
          Objet
        </Label>
        <Label x={170} y={48}>
          Trou
        </Label>
        <Label x={277} y={205}>
          {s === 2 ? "Image inversée" : "Fond"}
        </Label>
      </ArtFrame>
    );
  return null;
}
