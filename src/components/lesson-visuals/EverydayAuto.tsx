import { Airbag, CrumpleZone, Suspension } from "./EverydayVehicleCuts";
import {
  Arrow,
  Label,
  Line,
  Plate,
  blue,
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

export const everydayAuto = {
  dragwake: Drag,
  mildhybrid: MildHybrid,
  exhaustclean: Exhaust,
  tyregrip: Tyre,
  shocks: Suspension,
  airbagsequence: Airbag,
  crumplefront: CrumpleZone,
} satisfies SceneSet;
