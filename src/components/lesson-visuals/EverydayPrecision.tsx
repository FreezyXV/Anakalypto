import { Arrow, Label, Line } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

const steel = "#425767";
const ochre = "#905f2a";
const resin = "#775d87";

export function Caliper(step: number, id: string) {
  if (step === 2) {
    return (
      <>
        <rect x="32" y="61" width="296" height="134" rx="9" fill="#eef1ef" stroke="#b8c2bb" />
        <Label x={180} y={90}>
          Intervalle admis
        </Label>
        <path d="M66 125H294" stroke="#bac5c8" strokeWidth="2" />
        <rect x="94" y="116" width="172" height="18" rx="3" fill="#c8d9c9" stroke="#55715b" />
        <Line d="M94 108v33M266 108v33" color="#55715b" width={1.6} />
        <circle cx="180" cy="125" r="6" fill={ochre} stroke="#fff9ec" strokeWidth="2" />
        <Line d="M180 132v15" color={ochre} width={1.5} />
        <Label x={94} y={173}>
          12,2
        </Label>
        <Label x={266} y={173}>
          12,6
        </Label>
        <Label x={180} y={173} color={ochre}>
          12,4
        </Label>
        <Label x={180} y={217}>
          Mesure en millimètres
        </Label>
      </>
    );
  }

  const closed = step === 0;
  const jaw = closed ? 85 : 144;
  const start = closed ? 70 : 77.2;
  const match = closed ? 0 : 4;
  const aligned = 70 + 18 * match;
  return (
    <>
      <defs>
        <Material id={id + "-rulerMetal"} colors={["#dce6e9", "#aabac4", "#edf1ef"]} />
        <Material id={id + "-sliderMetal"} colors={["#e3eaeb", "#b4c0ca", "#7a8d9b"]} />
        <Hatch id={id + "-caliperPart"} color="#9c7946" opacity={0.45} />
      </defs>
      <path
        d="M70 76H328v28H70Z"
        fill={`url(#${id}-rulerMetal)`}
        stroke={steel}
        strokeWidth="1.6"
      />
      <path
        d="M67 76V62l9-11 8 3v22h7v9h-6v45l-15 7v-35h-6V80Z"
        fill={`url(#${id}-sliderMetal)`}
        stroke={steel}
        strokeWidth="1.7"
      />
      {!closed && (
        <>
          <path d="M85 110h59v25H85Z" fill="#dfc89d" stroke="#9e8054" strokeWidth="1.5" />
          <path d="M85 110h59v25H85Z" fill={`url(#${id}-caliperPart)`} />
        </>
      )}
      <Line d="M92 82h226" color="#f4f8f7" width={1.3} />
      {Array.from({ length: 28 }, (_, i) => (
        <Line key={i} d={`M${94 + i * 8.3} 88v${i % 5 === 0 ? 12 : 7}`} color={steel} width={1} />
      ))}
      <g transform={`translate(${jaw} 0)`}>
        <path
          d="M0 105V82h3V60l10-8 6 6-7 10v15h72v25H17v23l-17 6Z"
          fill={`url(#${id}-sliderMetal)`}
          stroke={steel}
          strokeWidth="1.7"
        />
        <path d="M12 89h67v14H12Z" fill="#dde6e7" stroke="#8498a4" />
        <Line d="M30 79v-7h12v7m28 29v6H54v-6" color={steel} width={2} />
        {Array.from({ length: 11 }, (_, i) => (
          <Line key={i} d={`M${15 + i * 5.8} 101v-${i % 5 ? 5 : 9}`} color={steel} width={1} />
        ))}
      </g>
      <Line d={`M${jaw + 78} 112l13 18v10`} color="#8698a3" width={1.2} />
      <rect x="25" y="142" width="310" height="57" rx="6" fill="#f3f5f4" stroke="#b7c3c9" />
      <path d="M49 172h213" stroke="#b8c4ca" strokeWidth="1" />
      <path d={`M${aligned - 2} 155h4v40h-4Z`} fill="#d0a467" opacity=".6" />
      {Array.from({ length: 11 }, (_, i) => (
        <g key={i}>
          <Line d={`M${70 + 18 * i} 171v-${i % 5 ? 8 : 12}`} color={steel} width={1.5} />
          <Line
            d={`M${start + 16.2 * i} 178v${i % 5 ? 8 : 13}`}
            color={i === match ? ochre : steel}
            width={1.5}
          />
        </g>
      ))}
      <Label x={47} y={164}>
        {closed ? "0" : "12"}
      </Label>
      <Label x={47} y={190}>
        0
      </Label>
      <Label x={297} y={164}>
        Règle
      </Label>
      <Label x={297} y={190}>
        Vernier
      </Label>
      <Label x={180} y={219} color={closed ? steel : ochre}>
        {closed ? "Zéros alignés" : "12 mm + 0,4 mm = 12,4 mm"}
      </Label>
    </>
  );
}

export function Lithography(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-maskGlass"} colors={["#ecf3f7", "#b1c5d4", "#8ca7b9"]} />
        <Material id={id + "-waferCut"} colors={["#bac9d1", "#8ea3b0", "#758e9b"]} />
        <Material id={id + "-objective"} colors={["#bdced8", "#eff5f5", "#6f8799"]} horizontal />
        <Hatch id={id + "-lithoLayer"} color="#475c6c" space={4} />
      </defs>
      {step === 0 && (
        <>
          <ellipse cx="174" cy="166" rx="134" ry="12" fill="#c7d1d7" opacity=".5" />
          <path
            d="M48 103l206-25 56 35-204 34Z"
            fill={`url(#${id}-maskGlass)`}
            stroke={steel}
            strokeWidth="1.5"
          />
          <path
            d="M48 103l58 44 204-34v11l-204 33-58-44Z"
            fill="#8da7b7"
            stroke={steel}
            strokeWidth="1.5"
          />
          <path
            d="M66 107l186-24 42 26-186 31Z"
            fill="#ebf2f2"
            stroke="#7e98a8"
            strokeWidth="1.2"
          />
          <path
            d="M91 106l157-20 33 23-159 26Z
                   M128 107l16-2 16 11-16 2Z
                   M170 102l18-3 15 14-17 3Z
                   M213 96l19-2 11 12-18 3Z"
            fill="#526a7a"
            fillRule="evenodd"
            stroke="#294656"
            strokeWidth="1"
          />
          <Callout x={95} y={66} leader="M101 71l34 32">
            Masque
          </Callout>
          <Callout x={246} y={191} leader="M231 173l-23-41-22-19">
            Ouvertures
          </Callout>
          <Label x={180} y={217}>
            Motif optique en coupe
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <path d="M118 45H244L228 63H134Z" fill="#9b7aac" opacity=".23" />
          <rect
            x="95"
            y="63"
            width="171"
            height="12"
            rx="3"
            fill={`url(#${id}-maskGlass)`}
            stroke={steel}
          />
          <path d="M98 75h29m13 0h27m13 0h27m13 0h43" stroke="#445a68" strokeWidth="4" />
          {[133, 173, 213].map((x, i) => {
            const imageX = 159 + i * 25;
            return (
              <path
                key={x}
                d={`M${x - 5} 78h10L${imageX + 4} 164h-8Z`}
                fill="#9c72b4"
                opacity=".24"
              />
            );
          })}
          <path
            d="M107 97H253V132H107Z M115 103H245V126H115Z"
            fill={`url(#${id}-objective)`}
            fillRule="evenodd"
            stroke={steel}
            strokeWidth="1.4"
          />
          <path
            d="M118 105q58 12 124 0q-59 29-124 0Z"
            fill="#b1d0d9"
            fillOpacity=".76"
            stroke="#577887"
          />
          <path d="M116 126q61-8 126 0" fill="none" stroke="#577887" strokeWidth="1.1" />
          <path d="M72 174h216v19H72Z" fill={`url(#${id}-waferCut)`} stroke={steel} />
          <path d="M72 173h216" stroke="#657b84" strokeWidth="4" />
          <path d="M73 164h214v7H73Z" fill="#bfa7cc" stroke={resin} />
          {[155, 180, 205].map((x) => (
            <path key={x} d={`M${x} 164h8v7h-8Z`} fill="#775d87" />
          ))}
          <Callout x={37} y={70} leader="M65 65h28" anchor="middle">
            Masque
          </Callout>
          <Callout x={300} y={114} leader="M263 110h-10" anchor="middle">
            Lentilles
          </Callout>
          <Callout x={307} y={152} leader="M291 155l-19 9">
            Résine
          </Callout>
          <Label x={180} y={217}>
            Image réduite sur la résine
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <Label x={24} y={64} anchor="start">
            Résine développée
          </Label>
          <path d="M25 99h243v27H25Z" fill={`url(#${id}-waferCut)`} stroke={steel} />
          <path d="M25 99h243v8H25Z" fill="#a2b6ba" stroke={steel} />
          <path
            d="M25 88h45v11H25ZM88 88h50v11H88ZM156 88h50v11h-50ZM224 88h44v11h-44Z"
            fill="#bca6cb"
            stroke={resin}
          />
          <Arrow x1={301} y1={99} x2={301} y2={164} color={ochre} width={2.5} />
          <Label x={24} y={150} anchor="start">
            Couche gravée
          </Label>
          <path d="M25 184h243v24H25Z" fill={`url(#${id}-waferCut)`} stroke={steel} />
          <path
            d="M25 172h45v12H25ZM88 172h50v12H88ZM156 172h50v12h-50ZM224 172h44v12h-44Z"
            fill="#a2b6ba"
            stroke={steel}
          />
          <path
            d="M25 172h45v12H25ZM88 172h50v12H88ZM156 172h50v12h-50ZM224 172h44v12h-44Z"
            fill={`url(#${id}-lithoLayer)`}
          />
          <Line d="M79 107v75m68-75v75m68-75v75" color="#9c879e" width={1.2} dash="3 4" />
        </>
      )}
    </>
  );
}
