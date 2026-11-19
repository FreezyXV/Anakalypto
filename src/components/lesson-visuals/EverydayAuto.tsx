import {
  Arrow,
  Label,
  Line,
  Plate,
  blue,
  gold,
  green,
  muted,
  navy,
  red,
  teal,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

function CarProfile({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M53 141v-17l13-19 61-10 34-33h63l31 31 35 10 6 38Z"
        fill="#7d9cad"
        stroke={navy}
        strokeWidth="2.7"
      />
      <path d="M140 94l27-24h53l24 24Z" fill="#d6e9ef" stroke="#587484" strokeWidth="2" />
      <path d="M196 71v23" stroke={navy} strokeWidth="2.7" />
      <path d="M56 121h18m204-9h13" stroke="#f2d6a8" strokeWidth="4" />
      {[107, 250].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="142" r="17" fill={navy} stroke="#8d9fae" strokeWidth="2" />
          <circle cx={cx} cy="142" r="7" fill="#bfcbd2" />
        </g>
      ))}
    </g>
  );
}

function Drag(step: number) {
  if (step === 2)
    return (
      <>
        <Line d="M49 176h270" color={muted} />
        <rect x="111" y="147" width="48" height="29" rx="4" fill="#95b8ca" />
        <rect x="214" y="60" width="48" height="116" rx="4" fill="#487f9e" />
        <Label x={135} y={135}>
          1×
        </Label>
        <Label x={238} y={52}>
          4×
        </Label>
        <Label x={135} y={204}>
          Vitesse 1×
        </Label>
        <Label x={238} y={204}>
          Vitesse 2×
        </Label>
      </>
    );
  return (
    <>
      <CarProfile x={13} y={28} scale={0.86} />
      <Line d="M27 105Q72 104 106 72Q151 47 201 54Q266 60 328 86" color={blue} width={2.3} />
      <Line d="M27 124Q67 122 91 102Q122 65 197 69Q242 75 264 100" color={blue} width={2.3} />
      <Line d="M26 163Q91 181 154 176H323" color={blue} width={2.3} />
      <Arrow x1={284} y1={81} x2={328} y2={90} color={blue} />
      {step === 1 && (
        <>
          <path d="M263 105q51 3 64 26q-21 31-64 29Z" fill="#e5c49f" opacity=".72" />
          <path
            d="M267 117q34 14 16 25q-12 5-13-9m22-10q25-1 24 10q-1 10-14 9"
            stroke={warm}
            strokeWidth="2.8"
            fill="none"
          />
          <Label x={287} y={197} color={warm}>
            Sillage
          </Label>
        </>
      )}
    </>
  );
}

function MildHybrid(step: number) {
  return (
    <>
      <Plate x={36} y={82} width={78} height={81} color="#d4d2e7">
        <rect
          x="52"
          y="102"
          width="47"
          height="33"
          rx="4"
          fill="#9884b3"
          stroke={violet}
          strokeWidth="2"
        />
        <path d="M62 96h9v7m11-7h9v7m-29 16h11m12 0h9m-4-5v10" stroke="#f2eef8" strokeWidth="2" />
      </Plate>
      <Plate x={145} y={83} width={72} height={79}>
        <circle cx="181" cy="120" r="25" fill="#82afc1" stroke={teal} strokeWidth="2" />
        <path d="M172 133v-26l9 15 9-15v26" fill="none" stroke="#254d60" strokeWidth="3" />
      </Plate>
      <Plate x={252} y={82} width={77} height={79} color="#e8dfd2">
        <path
          d="M264 113h13v-12h27v9h13v26h-26l-5 8h-21Z"
          fill="#b28362"
          stroke="#76583f"
          strokeWidth="2"
        />
      </Plate>
      <Arrow
        x1={step === 0 ? 141 : 119}
        y1={120}
        x2={step === 0 ? 118 : 142}
        y2={120}
        color={violet}
        width={4}
      />
      <Line d="M221 111h27m-27 18h27" color={step === 1 ? warm : navy} width={step === 1 ? 4 : 2} />
      {step !== 0 && <Arrow x1={229} y1={70} x2={step === 2 ? 305 : 280} y2={70} color={warm} />}
      <Label x={76} y={192}>
        Batterie
      </Label>
      <Label x={181} y={192}>
        Machine élec.
      </Label>
      <Label x={290} y={192}>
        Moteur
      </Label>
    </>
  );
}

function Exhaust(step: number) {
  const filtered = step === 2;
  return (
    <>
      <path
        d="M29 104h75l18-25h117l18 25h74v35h-74l-18 25H122l-18-25H29Z"
        fill="#c6d4da"
        stroke={navy}
        strokeWidth="2"
      />
      {step > 0 && (
        <rect
          x="129"
          y="89"
          width="104"
          height="65"
          rx="3"
          fill={filtered ? "#dab996" : "#b4adcc"}
          stroke={navy}
        />
      )}
      {step > 0 &&
        (filtered ? [97, 111, 127, 143] : [101, 116, 131, 145]).map((y) => (
          <Line
            key={y}
            d={`M132 ${y}h98`}
            color={filtered ? "#956d57" : violet}
            width={step === 2 ? 2.5 : 1.8}
            dash={filtered ? "3 2" : undefined}
          />
        ))}
      <Arrow x1={40} y1={120} x2={92} y2={120} color={red} />
      <Arrow x1={270} y1={120} x2={320} y2={120} color={step === 1 ? green : red} />
      {(filtered ? [133, 145, 163, 179, 202] : [60, 93, 140, 182, 231, 270, 291]).map((x, i) => (
        <circle key={x} cx={x} cy={106 + ((i * 13) % 30)} r="3.6" fill={navy} />
      ))}
      {filtered && (
        <>
          <Line d="M229 97v14m-97 0v16m97 0v16" color="#6b5042" width={5} />
          <Line d="M135 104h33q12 0 12 13v2h32" color={teal} width={2.8} />
          <Arrow x1={210} y1={119} x2={232} y2={119} color={teal} width={2.8} />
        </>
      )}
      <Label x={180} y={58}>
        {["Gaz et particules", "Réactions en surface", "Parois poreuses"][step]}
      </Label>
      <Label x={180} y={204}>
        {["Points = suie", "Gaz transformés", "Suie retenue"][step]}
      </Label>
    </>
  );
}

function Tyre(step: number) {
  if (step === 2)
    return (
      <>
        <ellipse cx="180" cy="110" rx="68" ry="59" fill="#415366" stroke={navy} strokeWidth="3" />
        <ellipse cx="180" cy="108" rx="28" ry="29" fill="#a7b9c7" stroke={navy} strokeWidth="3" />
        <path
          d="M53 153q47-12 83 0t88 0t83 0v19H53Z"
          fill="#85bed7"
          stroke={blue}
          strokeWidth="2"
        />
        <path d="M53 173h254v18H53Z" fill="#94a1aa" stroke={navy} strokeWidth="2" />
        <Arrow x1={198} y1={208} x2={221} y2={163} color={blue} />
        <Label x={143} y={217}>
          Film d’eau
        </Label>
      </>
    );
  return (
    <>
      <Plate x={37} y={45} width={286} height={142} color={step === 0 ? "#d9dfe0" : "#c5deeb"}>
        <rect
          x="114"
          y="56"
          width="132"
          height="120"
          rx="21"
          fill="#536773"
          stroke={navy}
          strokeWidth="3"
        />
        <Line
          d="M147 59v115M180 58v116M213 59v115M115 102l32 13m35-24 32 13m31-10-32 13M115 134l32 12m65-12 33-13"
          width={5}
          color={step === 1 ? "#81c1d9" : "#334756"}
        />
        {step === 1 && (
          <>
            <Arrow x1={146} y1={120} x2={146} y2={62} color="#e1f4f8" />
            <Arrow x1={214} y1={114} x2={214} y2={168} color="#e1f4f8" />
            <Arrow x1={212} y1={141} x2={243} y2={127} color="#e1f4f8" />
          </>
        )}
      </Plate>
      <Label x={180} y={212}>
        {step === 0 ? "Empreinte au sol" : "Rainures et eau"}
      </Label>
    </>
  );
}

function Suspension(step: number) {
  const wheelY = step === 1 ? 128 : 153;
  const top = step === 1 ? 80 : 75;
  const bottom = wheelY - 13;
  const spring = Array.from(
    { length: 9 },
    (_, i) => `L${i % 2 ? 166 : 129} ${top + ((bottom - top) * i) / 8}`,
  ).join("");
  return (
    <>
      <path
        d={
          [
            "M37 180h286v17H37Z",
            "M37 180h87q61-49 101 0h98v17H37Z",
            "M37 180h201q35-30 62 0h23v17H37Z",
          ][step]
        }
        fill="#bdab8a"
        stroke="#8f7d62"
        strokeWidth="2"
      />
      <Line d={`M148 ${bottom + 8}h61`} color={navy} width={4} />
      <circle cx="180" cy={wheelY} r="26" fill={navy} stroke="#9fb1bc" strokeWidth="3" />
      <circle cx="180" cy={wheelY} r="11" fill="#a4b3bc" />
      <rect
        x="84"
        y={top - 22}
        width="192"
        height="22"
        rx="4"
        fill="#8cb0bf"
        stroke={navy}
        strokeWidth="2"
      />
      <Line d={`M148 ${top - 3}${spring}L148 ${bottom + 8}`} color={teal} width={4.2} />
      <path
        d={`M209 ${top}v${bottom - top + 8}m-8-34h16v24h-16Z`}
        fill="#abbbc5"
        stroke={navy}
        strokeWidth="2.5"
      />
      {step === 1 && <Arrow x1={276} y1={159} x2={276} y2={118} color={warm} />}
      {step === 2 && <Line d="M247 110q9-25 18 0q9 18 18 0q9-9 18 0" color={warm} width={2.5} />}
      <Label x={91} y={133} color={teal}>
        Ressort
      </Label>
      <Label x={267} y={216}>
        {["Roue au sol", "Compression", "Amortissement"][step]}
      </Label>
    </>
  );
}

function Airbag(step: number) {
  const bent = step === 2;
  return (
    <>
      <path
        d="M67 160l26-23 19-45 45-30h102l45 51 10 71H67Z"
        fill="#dbe8ed"
        stroke="#7291a5"
        strokeWidth="2"
      />
      <path d="M70 159h80v-17l-15-14-35-6" fill="#718e9e" stroke={navy} strokeWidth="2" />
      <Line d="M264 112v56h-62" color="#8aa1b4" width={13} />
      <path
        d={bent ? "M246 159q-8-38-34-51l-14 24 20 31Z" : "M246 159q13-37-3-48l-24 8-11 43Z"}
        fill="#7196b9"
        stroke={navy}
        strokeWidth="2"
      />
      <circle
        cx={bent ? 201 : 231}
        cy={bent ? 97 : 93}
        r="17"
        fill="#d5ad87"
        stroke="#80634f"
        strokeWidth="2"
      />
      <Line d={bent ? "M263 107l-46 52" : "M263 107l-25 51"} color={red} width={5} />
      {step > 0 && (
        <path
          d={
            bent
              ? "M155 137q-13-49 17-49q27 0 20 35q-5 20-28 22Z"
              : "M149 135q-19-55 10-62q48-4 49 32q-8 26-49 40Z"
          }
          fill="#ede0a8"
          stroke={gold}
          strokeWidth="2.5"
        />
      )}
      {step === 0 && (
        <>
          <circle cx="92" cy="163" r="9" fill={warm} />
          <Line d="M94 151v-38h25" color={warm} dash="4 3" />
          <Label x={109} y={205} color={warm}>
            Capteur
          </Label>
        </>
      )}
      {step > 0 && (
        <Label x={180} y={213}>
          {step === 1 ? "Coussin déployé" : "Ceinture et coussin"}
        </Label>
      )}
    </>
  );
}

function CrumpleZone(step: number) {
  const fold = step > 0;
  return (
    <>
      <path d="M37 60h25v125H37Z" fill="#aab4bd" stroke={navy} strokeWidth="2" />
      {[77, 98, 119, 140, 161, 182].map((y) => (
        <Line key={y} d={`M38 ${y}l23-13`} color="#e2e7ea" width={2} />
      ))}
      <path
        d={fold ? "M62 129l14-28 11 18 16-21 17 6v53H62Z" : "M78 114l72-10v52H81L74 138Z"}
        fill={fold ? "#c88c67" : "#afc0cc"}
        stroke={navy}
        strokeWidth="2"
      />
      <path
        d="M0 150l37-84h96l64 50v39H0Z"
        transform={`translate(${fold ? 118 : 147} 0)`}
        fill={step === 2 ? "#a9c3b5" : "#97b0bf"}
        stroke={navy}
        strokeWidth="3"
      />
      <path
        d="M0 116l20-39h87l50 39Z"
        transform={`translate(${fold ? 148 : 177} 0)`}
        fill="#d2e3e9"
        stroke={navy}
        strokeWidth="2"
      />
      {[fold ? 105 : 132, fold ? 276 : 306].map((x) => (
        <circle key={x} cx={x} cy="157" r="15" fill={navy} stroke="#91a6b5" strokeWidth="2" />
      ))}
      {step === 0 && <Arrow x1={132} y1={75} x2={80} y2={75} color={red} width={4} />}
      {step === 1 && <Arrow x1={108} y1={195} x2={88} y2={139} color={warm} />}
      {step === 2 && <Line d="M172 96v35h93V96Z" color={green} width={4} />}
      <Label x={180} y={216}>
        {["Approche", "Avant déformé", "Espace préservé"][step]}
      </Label>
    </>
  );
}

export const everydayAuto = {
  dragwake: Drag,
  mildhybrid: MildHybrid,
  exhaustclean: Exhaust,
  tyregrip: Tyre,
  shocks: Suspension,
  airbagsequence: Airbag,
  crumplefront: CrumpleZone,
} satisfies SceneSet;
