import { Airbag } from "./EverydayVehicleCuts";
import {
  Arrow,
  Label,
  Line,
  Plate,
  green,
  navy,
  red,
  teal,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

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

export const everydayAuto = {
  mildhybrid: MildHybrid,
  exhaustclean: Exhaust,
  airbagsequence: Airbag,
} satisfies SceneSet;
