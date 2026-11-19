import {
  Arrow,
  Label,
  Line,
  Plate,
  Sun,
  blue,
  green,
  navy,
  teal,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

function Building({ x, y, wide = false }: { x: number; y: number; wide?: boolean }) {
  const w = wide ? 50 : 31;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M${-w} 0v-31h${w * 2}V0Z`} fill="#c2ac94" stroke={navy} strokeWidth="2" />
      <path
        d={`M${-w - 5} -30L0 -${wide ? 44 : 56}L${w + 5} -30Z`}
        fill="#9b7567"
        stroke={navy}
        strokeWidth="2"
      />
      {(wide ? [-34, 0, 34] : [-12, 12]).map((wx) => (
        <rect key={wx} x={wx - 5} y="-24" width="10" height="10" fill="#e1eaee" stroke={navy} />
      ))}
    </g>
  );
}
function GeoHeat(step: number) {
  const y = step === 0 ? 137 : step === 1 ? 166 : 189;
  return (
    <>
      <path d="M37 94h286v100H37Z" fill="#d4bd9c" stroke="#ac9171" strokeWidth="1.5" />
      <path d="M38 128q55-12 110-3t93 0t82-1v20q-40 9-81 1t-98 0t-106 3Z" fill="#bba081" />
      <path d="M38 167q74-14 140-2t145-4v33H38Z" fill="#b88b78" />
      <Line d={`M106 95v${y - 95}h95V95`} color={navy} width={7} />
      <Line d={`M106 95V${y}h47`} color={blue} width={4} />
      <Line d={`M153 ${y}h48V95`} color={warm} width={4} />
      <Arrow x1={106} y1={y - 19} x2={106} y2={y - 3} color={blue} width={3} />
      <Arrow x1={201} y1={y - 10} x2={201} y2={y - 35} color={warm} width={3} />
      <Line d="M106 95V81h41" color={blue} width={3} />
      <Line d="M201 95V63h-43" color={warm} width={3} />
      <Plate x={143} y={56} width={36} height={33} color={step === 0 ? "#ccdce5" : "#ddd4e6"}>
        <path d="M151 69h8v-7m1 18h10v-8" fill="none" stroke={navy} strokeWidth="2" />
      </Plate>
      {step === 0 && (
        <>
          <Building x={269} y={94} />
          <Arrow x1={180} y1={78} x2={231} y2={78} color={warm} />
        </>
      )}
      {step === 1 && (
        <>
          <Building x={268} y={94} wide />
          <Arrow x1={180} y1={78} x2={211} y2={78} color={warm} />
          <Line d="M113 160q42-9 82 0m-82 12q42-9 82 0" color="#85694d" width={1.4} dash="4 4" />
        </>
      )}
      {step === 2 && (
        <>
          <Arrow x1={181} y1={78} x2={229} y2={78} color={warm} />
          <circle cx="246" cy="76" r="16" fill="#a7c7cd" stroke={navy} strokeWidth="2" />
          <Line d="M239 76h14m-7-8v16" color={teal} />
          <Arrow x1={265} y1={76} x2={300} y2={76} color={green} />
        </>
      )}
      <Label x={180} y={216}>
        {["Boucle et pompe à chaleur", "Réseau de chaleur", "Groupe électrique"][step]}
      </Label>
    </>
  );
}

function SolarRoof(step: number, id: string) {
  const night = step === 2;
  return (
    <>
      {night ? (
        <path
          d="M66 61q-20 35 29 32q-7 20-29 15q-26-9 0-47Z"
          fill="#b9b5cc"
          stroke={violet}
          strokeWidth="2"
        />
      ) : (
        <Sun x={77} y={71} r={15} id={id} />
      )}
      <path
        d="M49 115h65l17 29H34Z"
        fill={night ? "#8b91a8" : "#5d9dbc"}
        stroke={navy}
        strokeWidth="2"
      />
      <Line
        d="M44 130h75m-61-15-8 29m25-29-4 29m19-29 5 29m9-29 11 29"
        color="#bacbd7"
        width={1.3}
      />
      <Building x={278} y={146} />
      <Plate x={144} y={139} width={73} height={42} color={night ? "#c4d3cc" : "#d8d5e7"}>
        <path
          d="M161 150h37v19h-37Zm37 5h4v9h-4Z"
          fill={night ? green : violet}
          stroke={navy}
          strokeWidth="1.4"
        />
        <path
          d={step === 0 ? "M167 157h8m-4-4v8" : "M167 156h24v7h-24Z"}
          stroke="#edf4f5"
          fill={step === 0 ? "none" : "#edf4f5"}
          strokeWidth="2"
        />
      </Plate>
      {step === 0 && <Arrow x1={123} y1={111} x2={228} y2={111} color={blue} width={4} />}
      {step === 1 && (
        <>
          <Line d="M128 121h52v15" color={blue} width={3.8} />
          <Arrow x1={180} y1={118} x2={180} y2={136} color={blue} />
        </>
      )}
      {night && <Arrow x1={220} y1={161} x2={270} y2={151} color={green} width={4} />}
      <Label x={78} y={197}>
        Panneau
      </Label>
      <Label x={180} y={208}>
        Batterie
      </Label>
      <Label x={286} y={195}>
        Maison
      </Label>
    </>
  );
}

function Sodium(step: number) {
  return (
    <>
      <Plate x={43} y={94} width={274} height={85} color="#dcebf1" />
      <rect
        x="58"
        y="101"
        width="46"
        height="71"
        rx="4"
        fill="#789eb7"
        stroke={blue}
        strokeWidth="2"
      />
      <rect
        x="256"
        y="101"
        width="46"
        height="71"
        rx="4"
        fill="#bba7c7"
        stroke={violet}
        strokeWidth="2"
      />
      <Line d="M180 98v75" color="#8ea5b6" width={4} dash="3 5" />
      <Line d="M79 98V65h202v33" color={navy} width={3} />
      <rect
        x="159"
        y="52"
        width="42"
        height="26"
        rx="4"
        fill={step === 1 ? "#94bbc9" : "#e9c795"}
        stroke={navy}
        strokeWidth="1.7"
      />
      {step > 0 && (
        <>
          <Arrow
            x1={step === 1 ? 156 : 206}
            y1={65}
            x2={step === 1 ? 105 : 251}
            y2={65}
            color={teal}
          />
          <Arrow
            x1={step === 1 ? 245 : 114}
            y1={136}
            x2={step === 1 ? 114 : 246}
            y2={136}
            color={blue}
            width={4}
          />
        </>
      )}
      {[0, 1, 2].map((i) => {
        const x = step === 0 ? 137 + 43 * i : step === 1 ? 119 + 33 * i : 172 + 34 * i;
        return (
          <circle key={i} cx={x} cy={step === 0 ? 133 : 150} r="6" fill="#7db4cf" stroke={blue} />
        );
      })}
      <Label x={81} y={127}>
        −
      </Label>
      <Label x={280} y={128}>
        +
      </Label>
      <Label x={180} y={206}>
        {step === 0 ? "Deux électrodes" : step === 1 ? "Na⁺ vers le −" : "Na⁺ vers le +"}
      </Label>
    </>
  );
}

function Radioactivity(step: number) {
  return (
    <>
      <path d="M39 162h282v30H39Z" fill="#ccad8b" stroke="#a68469" strokeWidth="1.5" />
      <path
        d="M129 116l-10-15 61-40 60 40-10 15-11-11v56h-79v-57Z"
        fill="#d9e6e9"
        stroke={navy}
        strokeWidth="2"
      />
      <path d="M145 104l35-22 34 22v57h-69Z" fill="#f1f6f7" />
      <circle cx="182" cy="112" r="10" fill="#cea888" stroke="#8d6e59" />
      <path
        d="M174 125h16l6 23h-7l-2 12h-10l-2-12h-7Z"
        fill="#799bb2"
        stroke={navy}
        strokeWidth="1.5"
      />
      {step === 0 &&
        [102, 178, 260].map((x, i) => (
          <Arrow
            key={x}
            x1={x + 29}
            y1={49 - i * 4}
            x2={x}
            y2={88 - i * 2}
            color={violet}
            width={3}
          />
        ))}
      {step === 1 && (
        <>
          {[78, 112, 164, 190, 259, 283].map((x, i) => (
            <circle key={x} cx={x} cy={174 + (i % 2) * 8} r="4" fill="#b27c50" />
          ))}
          <Arrow x1={162} y1={180} x2={153} y2={126} color={warm} dashed />
          <Arrow x1={205} y1={180} x2={205} y2={131} color={warm} dashed />
        </>
      )}
      {step === 2 && (
        <>
          {[1, 2, 3].map((i) => (
            <circle
              key={i}
              cx="181"
              cy="134"
              r={i * 7}
              fill="none"
              stroke={teal}
              opacity={1 - i * 0.21}
              strokeWidth="2"
            />
          ))}
          <Arrow x1={255} y1={128} x2={207} y2={135} color={teal} />
        </>
      )}
      <Label x={180} y={216}>
        {["Origine cosmique", "Voie du radon", "Potassium-40"][step]}
      </Label>
    </>
  );
}

export const everydayEnergy = {
  geoloop: GeoHeat,
  offgridsolar: SolarRoof,
  sodiumcell: Sodium,
  backgroundrad: Radioactivity,
} satisfies SceneSet;
