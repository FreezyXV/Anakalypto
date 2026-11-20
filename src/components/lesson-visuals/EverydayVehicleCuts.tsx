import { Arrow, Label, Line, warm } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

export function Suspension(step: number, id: string) {
  const wheelY = step === 1 ? 139 : 165;
  const top = step === 1 ? 74 : 68;
  const carrier = wheelY - 6;
  const road = [
    "M25 194h310v14H25Z",
    "M25 194h83q33 0 55-14q22-25 38-5q19 19 55 19h79v14H25Z",
    "M25 194h215q15-21 30-13q10 13 26 13h39v14H25Z",
  ][step];
  const coil = Array.from({ length: 8 }, (_, i) => {
    const bob = (carrier - top - 12) / 8,
      y = top + 5 + i * bob;
    return `Q187 ${y - 2} 155 ${y + bob * 0.42}Q133 ${y + bob * 0.76} 165 ${y + bob}`;
  }).join("");
  return (
    <>
      <defs>
        <Material id={id + "-suspensionMetal"} colors={["#d5dfe2", "#98aeba", "#6e899a"]} />
        <Material id={id + "-rubber"} colors={["#455260", "#20303d", "#344453"]} horizontal />
        <Hatch id={id + "-road"} color="#52616c" space={6} opacity={0.3} />
      </defs>
      <path d={road} fill="#b3babe" stroke="#53626c" strokeWidth="1.8" />
      <path d={road} fill={`url(#${id}-road)`} />
      <path
        d={`M71 ${top - 20}h218v13h-74l-7 7h-85l-9-7H71Z`}
        fill={`url(#${id}-suspensionMetal)`}
        stroke="#47616f"
        strokeWidth="1.9"
      />
      <path
        d={`M142 ${top}h47m-48 ${carrier - top}h63m-22 1l14 20h23`}
        fill="none"
        stroke="#384c59"
        strokeWidth="4"
      />
      <path
        d={`M165 ${top + 4}${coil}`}
        fill="none"
        stroke="#3f6874"
        strokeWidth="3.7"
        strokeLinecap="round"
      />
      <path
        d={`M165 ${top + 3}${coil}`}
        fill="none"
        stroke="#8fb1b4"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d={`M211 ${top}v${carrier - top - 15}m-6 0h13v31h-13Z`}
        fill={`url(#${id}-suspensionMetal)`}
        stroke="#475e6c"
        strokeWidth="2.2"
      />
      <Line d={`M212 ${wheelY + 3}l-15 7`} color="#475e6c" width={4} />
      <g transform={`translate(177 ${wheelY})`}>
        <circle r="28" fill={`url(#${id}-rubber)`} stroke="#182934" strokeWidth="1.5" />
        <circle r="22.5" fill="#303f4d" stroke="#70838f" strokeWidth="1.2" />
        <circle r="16.5" fill={`url(#${id}-suspensionMetal)`} stroke="#304252" strokeWidth="1.6" />
        {[0, 72, 144, 216, 288].map((a) => (
          <path key={a} transform={`rotate(${a})`} d="M-2-5l-3-10h9L1-5Z" fill="#596f7b" />
        ))}
        <circle r="5" fill="#c4d1d9" stroke="#546a75" strokeWidth="1.4" />
      </g>
      <Callout x={66} y={102} leader={`M62 109h47l28 ${top + 18 - 109}`} color="#426473">
        Ressort
      </Callout>
      <Callout x={327} y={118} anchor="end" leader={`M261 126h-22l-18 ${carrier - 12 - 126}`}>
        Amortisseur
      </Callout>
      {step === 1 && <Arrow x1={114} y1={170} x2={114} y2={141} color={warm} />}
      {step === 2 && <Line d="M241 161q9-21 18 0q9 13 18 0q9-7 18 0" color="#9e6847" width={2} />}
      <Label x={180} y={224} color="#42515c">
        {["Au niveau de la chaussée", "Débattement de la roue", "Oscillations amorties"][step]}
      </Label>
    </>
  );
}

const head =
  "M230 68q2-15 19-20q16-4 25 10q7 12-1 25l-8 9q-4 9-10 10l-14-1q-6-1-7-8l-4-5q-4-9 0-20Z";
const torso = "M245 111q10-5 26 6q9 12 7 31l-4 21q-5 14-24 12l-19-12q-3-20 2-38Z";
const arm = "M262 121q-8-8-17 8l-10 20q-16-2-63-14l-3 10q46 22 67 20q18 0 27-21q7-16-1-23Z";

function CrashDummy({ id, lean }: { id: string; lean: boolean }) {
  const paint = `url(#${id}-dummy)`;
  return (
    <>
      <path
        d="M218 166q-18-15-48-9q-9 2-16 17l-14 24h20l15-21q28 10 47 13q36 7 47-6q3-18-17-24Z"
        fill={paint}
        stroke="#564f45"
        strokeWidth="1.5"
      />
      <path
        d="M147 188l5-8q15-15 28-7m55 11q14 4 24-2"
        fill="none"
        stroke="#9b8c74"
        strokeWidth="1.4"
      />
      <circle cx="167" cy="170" r="8" fill="#c7b791" stroke="#786b56" strokeWidth="1.25" />
      <g transform={lean ? "rotate(-12 252 171) translate(-4 -1)" : undefined}>
        <path d={torso} fill={paint} stroke="#564f45" strokeWidth="1.6" />
        <path d="M249 102l18-6l8 16l-20 9Z" fill="#655f54" stroke="#4a4840" strokeWidth="1.5" />
        <path d="M251 105l14-5m-12 9 14-5m-13 9 15-5" stroke="#b9b09a" strokeWidth="1.4" />
        <path d={head} fill={paint} stroke="#564f45" strokeWidth="1.6" />
        <path
          d="M235 59q15-14 30-5m-27 36 6 6q4 3 10 2"
          fill="none"
          stroke="#a99b80"
          strokeWidth="1.2"
        />
        <circle cx="256" cy="70" r="8" fill="#777266" stroke="#524d43" />
        <path d="M248 70a8 8 0 0 1 8-8v8Zm8 0h8a8 8 0 0 1-8 8Z" fill="#e6cb85" />
      </g>
    </>
  );
}

function DriverArm({ id, lean }: { id: string; lean: boolean }) {
  return (
    <g transform={lean ? "translate(-7 2)" : undefined}>
      <path d={arm} fill={`url(#${id}-dummy)`} stroke="#5b5347" strokeWidth="1.4" />
      <circle cx="249" cy="132" r="10" fill="#c7b791" stroke="#786b56" strokeWidth="1.25" />
      <circle cx="234" cy="156" r="5.2" fill="#b8a784" stroke="#786b56" />
      {lean ? (
        <path d="M166 133l-9 1-8 7l4 8l11-3Z" fill="#d4c7a6" stroke="#786b56" />
      ) : (
        <path d="M172 135l-8-13q-3-4-7-1l-4 4l3 13l13 6Z" fill="#d4c7a6" stroke="#786b56" />
      )}
      <path d="M168 144q36 13 60 18" stroke="#a8997b" strokeWidth="1.15" fill="none" />
    </g>
  );
}

export function Airbag(step: number, id: string) {
  const contact = step === 2;
  const sash = contact ? "M295 75l-28 43-33 57" : "M295 75l-28 40-24 58";
  const lapBelt = contact ? "M233 173l34 16" : "M242 171l25 18";
  const cushion = contact
    ? "M151 120q4-15 11-32q8-24 28-27q22 1 27 16q-1 11-9 16q12 32-10 51q-21 13-41-3Z"
    : "M151 121q3-17 11-34q8-22 29-25q20-1 28 17q7 25-6 53q-13 23-39 17q-15-1-18-9Z";
  return (
    <>
      <defs>
        <Material id={id + "-cabin"} colors={["#efefea", "#c4c6c0", "#90968f"]} />
        <Material id={id + "-seat"} colors={["#777b76", "#5e635e", "#414641"]} />
        <Material id={id + "-dummy"} colors={["#e8dbbc", "#c9b996", "#a99979"]} />
        <Material id={id + "-fabric"} colors={["#fbf6e9", "#e9dfc9", "#cec1a3"]} horizontal />
        <Hatch id={id + "-cut"} color="#404640" space={5} opacity={0.32} />
        <Hatch id={id + "-seatStitch"} color="#dfdfd6" space={4} opacity={0.16} />
      </defs>
      {/* The near door is removed. The steering wheel, seat and camera stay fixed. */}
      <path
        d="M25 88l107-50h159q14 0 28 16l16 119v34H25Z"
        fill="#f1f1e9"
        stroke="#646b62"
        strokeWidth="2"
      />
      <path
        d="M26 89l107-51h159q14 0 28 17l15 119v31h-11v-27L309 60q-6-11-20-12H134L28 99Z"
        fill={`url(#${id}-cabin)`}
        stroke="#646b62"
        strokeWidth="1.3"
      />
      <path
        d="M26 89l107-51h159q14 0 28 17l15 119v31h-11v-27L309 60q-6-11-20-12H134L28 99Z"
        fill={`url(#${id}-cut)`}
      />
      <path d="M26 207v-14h306v14Z" fill={`url(#${id}-cabin)`} stroke="#646b62" strokeWidth="1.3" />
      <path d="M26 207v-14h306v14Z" fill={`url(#${id}-cut)`} />
      <path
        d="M26 119q27-11 63-15q19-2 30 9l-9 24l-32 6l-18 26v25H26Z"
        fill={`url(#${id}-seat)`}
        stroke="#424840"
        strokeWidth="1.8"
      />
      <path
        d="M33 129q32-15 71-17m-67 38l32-12l24-4m-44 25v29"
        fill="none"
        stroke="#a9aca0"
        strokeWidth="1.25"
      />
      <path d="M72 117l22-5l-4 11l-24 3Z" fill="#4f5550" stroke="#8c948a" />
      <path d="M112 133l33-12" fill="none" stroke="#4d534d" strokeWidth="12" />
      <path
        d="M129 99q-4-10 4-11q6-1 9 7l23 50q4 10-3 13q-7 2-10-6Z"
        fill="#666b63"
        stroke="#424841"
        strokeWidth="1.5"
      />
      <path d="M135 93l25 58" fill="none" stroke="#afb0a3" strokeWidth="1.4" />
      <circle cx="146" cy="124" r="9" fill="#7b7d73" stroke="#484c43" strokeWidth="1.5" />
      <path
        d="M214 178q27-9 48-8q22-23 24-59q3-11 17-8l10 7l-9 66q-8 23-24 25h-69q-9-4-6-14Z"
        fill={`url(#${id}-seat)`}
        stroke="#3f4540"
        strokeWidth="1.8"
      />
      <path
        d="M214 178q27-9 48-8q22-23 24-59q3-11 17-8l10 7l-9 66q-8 23-24 25h-69q-9-4-6-14Z"
        fill={`url(#${id}-seatStitch)`}
      />
      <path
        d="M289 99l2-14q11-6 20 0l2 15q-9 8-24-1Z"
        fill={`url(#${id}-seat)`}
        stroke="#3f4540"
        strokeWidth="1.5"
      />
      <path
        d="M291 111q1 35-19 70q-13 7-56 8"
        fill="none"
        stroke="#a8aaa0"
        strokeWidth="1.45"
        strokeDasharray="3 2"
      />
      <rect x="290" y="68" width="11" height="14" rx="3" fill="#8d9084" stroke="#595d52" />
      <CrashDummy id={id} lean={contact} />
      <path
        d={sash + " " + lapBelt}
        fill="none"
        stroke="#7d642e"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d={sash + " " + lapBelt}
        fill="none"
        stroke="#c29d50"
        strokeWidth="5.7"
        strokeLinecap="round"
      />
      <rect
        x="264"
        y="186"
        width="9"
        height="11"
        rx="2"
        fill="#646962"
        stroke="#4b5047"
        transform="rotate(-23 267 189)"
      />
      {step > 0 && (
        <>
          <path d={cushion} fill={`url(#${id}-fabric)`} stroke="#999075" strokeWidth="1.65" />
          <path
            d={
              contact
                ? "M186 63q-16 11-19 36q-4 26 12 48m12-72q-6 23-8 43"
                : "M188 64q-14 15-17 38q-5 25 11 45m14-75q5 22-5 37"
            }
            fill="none"
            stroke="#a89b7d"
            strokeWidth="1.3"
            strokeDasharray="2 1"
          />
          <path
            d="M162 115q-9 9 4 21m35-39q6 8 5 16m-35 21 9 4"
            fill="none"
            stroke="#beb18f"
            strokeWidth="1.2"
          />
        </>
      )}
      <DriverArm id={id} lean={contact} />
      {step === 0 ? (
        <>
          <rect x="40" y="155" width="13" height="10" rx="2" fill="#bb9656" stroke="#846937" />
          <Line d="M53 160h36l30-27h17" color="#a28142" width={1.7} dash="4 3" />
          <Callout x={76} y={224} leader="M61 212v-33l-11-11" color="#6a5739">
            Capteur
          </Callout>
        </>
      ) : (
        <>
          <Callout x={150} y={224} leader="M153 212v-56l18-10" color="#655b46">
            Coussin
          </Callout>
          {contact && (
            <Callout x={272} y={224} leader="M270 212v-13l-15-13" color="#765e35">
              Ceinture
            </Callout>
          )}
        </>
      )}
    </>
  );
}

export function CrumpleZone(step: number, id: string) {
  const impact = step !== 0;
  const cell = "M148 155l-1-38 21-38 28-10h51l52 34 16 24-4 28Z";
  const front = impact
    ? "M80 146v-13l10-4 8-23 14 13 13-17 11 16 11-1v38H89Z"
    : "M64 143v-12l14-13 69-8 2 45H68Z";
  const rail = impact
    ? "M82 138l16-9 8 9 11-12 10 12 10-12 15 8v9l-16-5-8 10-12-12-10 11-12-9-12 8Z"
    : "M70 132l82 1v10H70Z";
  const metal = "#425765";
  const fold = "#90552c";
  const cabin = "#426956";
  return (
    <>
      <defs>
        <Material id={id + "-crashBody"} colors={["#e3ebed", "#91a4af", "#687d8c"]} />
        <Material id={id + "-railMetal"} colors={["#e7b47f", "#c38554", "#a66538"]} />
        <Hatch id={id + "-barrierCut"} color="#475463" space={5} opacity={0.55} />
        <Hatch id={id + "-railCut"} color="#9d633b" space={4} opacity={0.5} />
      </defs>
      <path d="M27 183h304" stroke="#8797a1" strokeWidth="1.3" />
      <path d="M32 68h22v115H32Z" fill="#acbac0" stroke={metal} strokeWidth="1.5" />
      <path d="M32 68h22v115H32Z" fill={`url(#${id}-barrierCut)`} />
      <g transform={`translate(${impact ? -26 : 0} 0)`}>
        <path d={front} fill={`url(#${id}-crashBody)`} stroke={metal} strokeWidth="1.6" />
        <path d={cell} fill={`url(#${id}-crashBody)`} stroke={metal} strokeWidth="1.8" />
        <path
          d="M158 116l20-34 22-5h45l44 31 6 12Z"
          fill="#dbe5ea"
          stroke="#637988"
          strokeWidth="1.5"
        />
        <path
          d="M196 78l-8 43m59-43 8 43M188 122l-3 27m76-27 2 24m-44-13h13"
          fill="none"
          stroke="#657d8a"
          strokeWidth="1.5"
        />
        <path d="M153 151h151" stroke="#516a78" strokeWidth="5" />
        {step === 2 && (
          <path
            d="M152 151l1-31 21-38 22-9h54l46 35 8 19-3 24Z"
            fill="#729880"
            fillOpacity=".19"
            stroke={cabin}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        )}
        <path d={rail} fill={`url(#${id}-railMetal)`} stroke={fold} strokeWidth="1.7" />
        <path d={rail} fill={`url(#${id}-railCut)`} />
        {impact && (
          <path
            d="M83 134l17-13 10 8 14-15 12 11 11-4"
            fill="none"
            stroke="#84674f"
            strokeWidth="1.5"
          />
        )}
        {[impact ? 111 : 113, 283].map((x) => (
          <g key={x}>
            <circle cx={x} cy="161" r="21" fill="#344553" stroke="#687d88" strokeWidth="2" />
            <circle cx={x} cy="161" r="13" fill="#adbbc0" stroke="#546b7a" strokeWidth="2" />
            <circle cx={x} cy="161" r="5" fill="#577080" />
            <path d={`M${x - 10} 158l13 11m2-17-7 16`} stroke="#e6eceb" strokeWidth="1.3" />
          </g>
        ))}
      </g>
      {step === 0 && (
        <>
          <Arrow x1={138} y1={80} x2={81} y2={80} color={fold} width={2.8} />
          <Callout x={113} y={211} leader="M117 194l19-50" color={fold}>
            Longeron
          </Callout>
          <Callout x={266} y={210} leader="M260 193v-37" color={metal}>
            Habitacle
          </Callout>
        </>
      )}
      {step === 1 && (
        <Callout x={168} y={213} leader="M103 194L76 176V143" color={fold}>
          Le longeron se plie
        </Callout>
      )}
      {step === 2 && (
        <Callout x={224} y={213} leader="M219 195l-9-41" color={cabin}>
          Cellule de sécurité
        </Callout>
      )}
    </>
  );
}
