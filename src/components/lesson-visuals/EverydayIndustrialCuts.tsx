import { Arrow, Label, Line } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

export function Silicon(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-silicon"} colors={["#c3ced8", "#8399ab", "#506979"]} />
        <Material id={id + "-cell"} colors={["#809cb5", "#3b5d7a", "#263d54"]} horizontal />
        <Material id={id + "-glass"} colors={["#d9ecf1", "#b1cddb", "#71a4bd"]} />
        <Hatch id={id + "-siliconHatch"} color="#374b61" space={4} opacity={0.35} />
      </defs>
      {step === 0 && (
        <>
          <path
            d="M30 93l126-15 51 31v45l-128 21-49-32Z"
            fill={`url(#${id}-silicon)`}
            stroke="#384b5a"
            strokeWidth="1.7"
          />
          <path d="M30 93l49 31 128-15-51-31Z" fill="#c5d2d8" stroke="#607782" strokeWidth="1.6" />
          <path
            d="M79 124l128-15v45L79 175Z"
            fill={`url(#${id}-siliconHatch)`}
            stroke="#4e6375"
            strokeWidth="1.4"
          />
          {Array.from({ length: 8 }, (_, i) => {
            const x = 39 + i * 15,
              y = 91 - i * 1.7;
            return (
              <Line
                key={i}
                d={`M${x} ${y}l49 31v45`}
                width={1.25}
                color={i % 2 ? "#5f7484" : "#dfeced"}
              />
            );
          })}
          <Arrow x1={211} y1={130} x2={245} y2={130} color="#546e81" width={2.5} />
          <path
            d="M253 117l58-10 32 19v7l-62 13-28-21Z"
            fill="#71899b"
            stroke="#375163"
            strokeWidth="1.7"
          />
          <path d="M253 117l58-10 32 19-62 13Z" fill="#c6d5db" stroke="#375163" strokeWidth="1.2" />
          <Callout x={107} y={68} leader="M107 74v12">
            Lingot
          </Callout>
          <Callout x={291} y={185} leader="M294 143v24">
            Plaquette
          </Callout>
        </>
      )}
      {step === 1 && (
        <>
          <path
            d="M38 105l212-39 73 48v34l-216 42-69-49Z"
            fill={`url(#${id}-silicon)`}
            stroke="#375467"
            strokeWidth="1.8"
          />
          <path
            d="M38 117l69 48 216-42v10l-216 44-69-49Z"
            fill="#7e9fb5"
            stroke="#435f72"
            strokeWidth="1.3"
          />
          <path
            d="M38 105l69 47 216-38-73-48Z"
            fill={`url(#${id}-cell)`}
            stroke="#2b465e"
            strokeWidth="1.7"
          />
          {Array.from({ length: 17 }, (_, i) => (
            <Line
              key={i}
              d={`M${47 + i * 12} ${104 - i * 2.17}l69 47`}
              color="#bbcdd7"
              width={0.9}
            />
          ))}
          <Line d="M57 117l214-39m-185 59l213-39" color="#edf4f5" width={2.7} />
          <Callout x={104} y={56} leader="M117 62l21 22v10" color="#3a5062">
            Contacts
          </Callout>
          <Callout x={248} y={213} leader="M251 194v-35l20-18" color="#40607a">
            Jonction dans le silicium
          </Callout>
        </>
      )}
      {step === 2 && (
        <>
          <path
            d="M38 146l211-32 74 27v15l-217 42-68-34Z"
            fill="#849eac"
            stroke="#3e596c"
            strokeWidth="1.8"
          />
          <path
            d="M39 142l212-33 71 33-215 41Z"
            fill="#bacad2"
            stroke="#607887"
            strokeWidth="1.7"
          />
          <path
            d="M43 112l204-32 76 29-216 41Z"
            fill="#52738a"
            stroke="#314a60"
            strokeWidth="1.5"
          />
          {Array.from({ length: 12 }, (_, i) => {
            const col = i % 4,
              row = Math.floor(i / 4),
              x = 54 + col * 48 + row * 19,
              y = 112 - col * 7 + row * 9;
            return (
              <g key={i}>
                <path
                  d={`M${x} ${y}l41-7 16 7-42 7Z`}
                  fill={`url(#${id}-cell)`}
                  stroke="#b4c7d2"
                  strokeWidth=".85"
                />
                <path
                  d={`M${x + 9} ${y - 1}l16 7m-5-9 16 7m-5-9 16 7`}
                  fill="none"
                  stroke="#b4c7d2"
                  strokeWidth=".7"
                />
              </g>
            );
          })}
          <path
            d="M38 77l214-35 71 31-217 40Z"
            fill={`url(#${id}-glass)`}
            fillOpacity=".75"
            stroke="#64889a"
            strokeWidth="1.6"
          />
          <path d="M47 78l207-33m-154 62l154-27" fill="none" stroke="#e6f4f7" strokeWidth="2" />
          <Callout x={132} y={53} leader="M130 58l21 13" color="#466478">
            Verre
          </Callout>
          <Callout x={267} y={203} leader="M266 187v-45l-9-17" color="#466478">
            Cellules reliées
          </Callout>
        </>
      )}
    </>
  );
}

const weldLeft = "M36 111h109l34 43v22H36Z";
const weldRight = "M324 111H215l-34 43v22h143Z";
const puddle = "M145 111q35-21 70 0L181 154h-2Z";

export function Welding(step: number, id: string) {
  const molten = step === 1;
  return (
    <>
      <defs>
        <Material id={id + "-steel"} colors={["#b4c4cd", "#7891a1", "#557080"]} />
        <Material id={id + "-heated"} colors={["#f3ce89", "#cb7a3d", "#81452c"]} />
        <Material id={id + "-weld"} colors={["#bfd0d8", "#799ba9", "#577487"]} />
        <Hatch id={id + "-parentSteel"} space={4} color="#29475b" opacity={0.38} />
        <clipPath id={id + "-bead"}>
          <path d={puddle} />
        </clipPath>
      </defs>
      <path
        d="M36 111l20-12h103l-14 12Zm179 0l14-12h103l-8 12Z"
        fill="#cbd5da"
        stroke="#546b7a"
        strokeWidth="1.6"
      />
      {[weldLeft, weldRight].map((d) => (
        <g key={d}>
          <path d={d} fill={`url(#${id}-steel)`} stroke="#3e5562" strokeWidth="2" />
          <path d={d} fill={`url(#${id}-parentSteel)`} />
        </g>
      ))}
      {step === 0 && (
        <Callout x={180} y={67} leader="M180 73v51">
          Bords préparés
        </Callout>
      )}
      {step > 0 && (
        <>
          <path
            d="M137 113l8-2 34 43v18l-11-4Zm84-1-6-1-34 43v18l12-5Z"
            fill={molten ? "#dca378" : "#a68e9a"}
            stroke="#80696f"
            strokeWidth="1.1"
            opacity=".88"
          />
          <path
            d={puddle}
            fill={`url(#${id}-${molten ? "heated" : "weld"})`}
            stroke={molten ? "#944a29" : "#516a79"}
            strokeWidth="1.7"
          />
          {!molten && (
            <g clipPath={`url(#${id}-bead)`} stroke="#c2d6df" fill="none" opacity=".67">
              {[105, 114, 123, 132, 141].map((y) => (
                <path key={y} d={`M146 ${y}q34 13 65 0`} strokeWidth="1.5" />
              ))}
            </g>
          )}
        </>
      )}
      {molten && (
        <>
          <path
            d="M253 45l-59 47"
            stroke="#455968"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          <Line d="M252 42l-59 47" color="#aebec3" width={2} />
          <path d="M197 88l-17 9 4 3-11 7" stroke="#b26e34" strokeWidth="4" fill="none" />
          <Callout x={104} y={67} leader="M104 73v17l36 15" color="#875231">
            Bain de fusion
          </Callout>
        </>
      )}
      {step === 2 && (
        <Callout x={180} y={68} leader="M180 74v22">
          Cordon solidifié
        </Callout>
      )}
      <Label x={180} y={216} color="#3d5668">
        {step === 0
          ? "Deux pièces en coupe"
          : step === 1
            ? "Chauffage local"
            : "Zone chauffée de part et d’autre"}
      </Label>
    </>
  );
}
