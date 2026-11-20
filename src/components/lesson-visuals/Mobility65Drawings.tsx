import { Callout } from "./EditorialDrawings";
import {
  Arrow,
  Face,
  Label,
  Line,
  Marker,
  MetalPaint,
  PlotGrid,
  Rule,
  Wire,
  blue,
  dark,
  ochre,
  pale,
  rust,
  steel,
  teal,
  type SceneSet,
} from "./Atlas65Parts";

function Wheel({
  x,
  y,
  angle = 0,
  tone = dark,
}: {
  x: number;
  y: number;
  angle?: number;
  tone?: string;
}) {
  return (
    <rect
      x={x - 9}
      y={y - 17}
      width="18"
      height="34"
      rx="4"
      transform={`rotate(${angle} ${x} ${y})`}
      fill={tone}
      stroke="#4a646a"
      strokeWidth="1.6"
    />
  );
}
function TopCar({
  x = 180,
  y = 113,
  scale = 1,
  tone = "#b5cbd0",
  angle = 0,
  braked = false,
}: {
  x?: number;
  y?: number;
  scale?: number;
  tone?: string;
  angle?: number;
  braked?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path
        d="M-25-47q25-12 50 0l6 18v67l-7 12h-48l-7-12v-67Z"
        fill={tone}
        stroke={steel}
        strokeWidth="1.6"
      />
      <path d="M-22-22l6-14h32l6 14-7 10h-30Zm4 43h36l4 14h-44Z" fill="#70919b" stroke={steel} />
      <path d="M-22-40h12m20 0h12m-45 84h12m22 0h12" stroke="#f4e8cc" strokeWidth="3" />
      {[-34, 34].map((x) => (
        <g key={x}>
          <Wheel x={x} y={-28} />
          <Wheel x={x} y={32} tone={braked && x < 0 ? rust : dark} />
        </g>
      ))}
    </g>
  );
}

function Electrolyte(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <rect x="57" y="58" width="246" height="108" rx="10" fill="#e1edef" stroke="#8da7ae" />
      <Face id={id} x={69} y={70} d="M0 0h33v83H0Z" tone="brass" />
      <Face id={id} x={258} y={70} d="M0 0h33v83H0Z" />
      <path
        d={step === 0 ? "M104 71h151v82H104Z" : "M105 75h150v74H105Z"}
        fill={step === 0 ? "#c5dbe2" : "#d4cdae"}
        stroke={step === 0 ? blue : ochre}
        strokeWidth="1.3"
      />
      {step === 0 ? (
        <>
          <Line
            d="M105 97q23-7 49 0t49 0 52 0m-150 27q24-8 49 0t49 0 52 0"
            color="#8fb9cb"
            width={1.7}
          />
          <path d="M177 73h8v79h-8Z" fill="#edf5f2" stroke="#8da9ad" strokeDasharray="3 3" />
        </>
      ) : (
        <path d="M108 77h145v70H108Z" fill={`url(#${id}-section65)`} />
      )}
      {step === 2 && (
        <path
          d="M106 80l11 8-11 13 10 14-10 14m148-46-11 12 11 14-8 13 8 12"
          fill="none"
          stroke={rust}
          strokeWidth="3"
        />
      )}
      {[133, 161, 205, 232].map((x, i) => (
        <Marker key={x} x={x} y={step === 1 ? 116 : 111 + (i % 2) * 11} color={blue} r={5} />
      ))}
      <Arrow x1={142} y1={139} x2={227} y2={139} color={blue} width={1.8} />
      <Label x={180} y={187}>
        {["Liquide + séparateur", "Électrolyte solide", "Interfaces entre matériaux"][step]}
      </Label>
      <Rule>
        {
          [
            "Les ions traversent le milieu",
            "Le passage se fait dans un solide",
            "Le contact entre les couches compte",
          ][step]
        }
      </Rule>
    </>
  );
}

function Transfer(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M64 82h241v80H64Z" fill="none" stroke="#a9bdc2" strokeDasharray="4 3" />
      {[100, 272].map((x) => (
        <g key={x}>
          <Wheel x={x} y={78} />
          <Wheel x={x} y={165} />
          <Wire d={`M${x} 94v55`} active={x === 272 || step > 0} tone={blue} />
        </g>
      ))}
      <Wire d="M100 121h140" active={step > 0} />
      <Wire d="M182 121h90" tone={teal} />
      <Face id={id} d="M153 98h57v47h-57Z" tone="brass" />
      <circle
        cx="181"
        cy="122"
        r={step === 2 ? 15 : 10}
        fill="none"
        stroke={ochre}
        strokeWidth={step === 2 ? 3 : 2}
      />
      {step === 2 && <circle cx="181" cy="122" r="5" fill={steel} />}
      <Label x={180} y={69}>
        Boîte de transfert
      </Label>
      {step > 0 && <Arrow x1={145} y1={136} x2={111} y2={136} color={blue} width={2} />}
      <Arrow x1={224} y1={136} x2={257} y2={136} color={teal} width={2} />
      <Rule>
        {
          [
            "Un essieu reçoit le couple",
            "Le transfert relie deux essieux",
            "La gamme courte augmente le rapport",
          ][step]
        }
      </Rule>
    </>
  );
}

function Gearbox(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Arrow x1={43} y1={122} x2={83} y2={122} width={2.2} />
      <Arrow x1={276} y1={122} x2={316} y2={122} width={2.2} />
      {step === 0 ? (
        <>
          <ellipse
            cx="153"
            cy="119"
            rx="58"
            ry="48"
            fill={`url(#${id}-glass)`}
            stroke={steel}
            strokeWidth="2"
          />
          <path
            d="M141 81q-43 38 0 77m21-77q44 38 0 77M135 93l-11 16m48 28 11-16"
            stroke={blue}
            strokeWidth="3"
            fill="none"
          />
          <circle cx="231" cy="119" r="29" fill={`url(#${id}-alloy)`} stroke={steel} />
          {[0, 120, 240].map((a) => (
            <circle
              key={a}
              cx="231"
              cy="104"
              r="6"
              transform={`rotate(${a} 231 119)`}
              fill="#ccb380"
              stroke={ochre}
            />
          ))}
          <Label x={157} y={186}>
            Convertisseur
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <Line d="M85 122h29m34 0 20-33h99m-119 33 20 31h99" color={steel} width={3} />
          {[174, 203, 233].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="91" r={8 + i * 2} fill="#b3c9cf" stroke={blue} />
              <circle cx={x} cy="153" r={12 - i * 2} fill="#b5c4ba" stroke={teal} />
            </g>
          ))}
          <path d="M119 100v43m12-43v43m12-43v43" stroke={ochre} strokeWidth="4" />
          <Label x={179} y={186}>
            Deux embrayages
          </Label>
        </>
      ) : (
        <>
          <circle cx="125" cy="121" r="27" fill={`url(#${id}-alloy)`} stroke={steel} />
          <circle cx="235" cy="121" r="43" fill={`url(#${id}-alloy)`} stroke={steel} />
          <path
            d="M126 94l109-16a43 43 0 0 1 0 86l-109-16a27 27 0 0 1 0-54Z"
            fill="none"
            stroke={ochre}
            strokeWidth="4"
          />
          <Label x={180} y={186}>
            Poulies et courroie
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Le fluide transmet le couple",
            "Deux chemins pour les rapports",
            "Le rapport varie sans paliers",
          ][step]
        }
      </Rule>
    </>
  );
}

function Starter(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Wire d="M94 116h50" active={step === 1} />
      <Wire d="M80 149v20h197v-21" active={step === 2} tone={teal} />
      <Face id={id} d="M34 92h59v57H34Z" />
      <path
        d="M44 91v-9h14v9m12 0v-9h14v9m-29 30h-12m6-6v12m20-6h15"
        stroke={steel}
        strokeWidth="2"
      />
      <Face id={id} d="M146 99h61v34h-61Zm51-12h13v57h-13Z" tone="brass" />
      <circle
        cx="276"
        cy="118"
        r="28"
        fill={`url(#${id}-alloy)`}
        stroke={steel}
        strokeWidth="1.6"
      />
      <path d="M264 119q6-17 13 0t13 0" fill="none" stroke={steel} strokeWidth="2.2" />
      {step === 1 && <Arrow x1={100} y1={112} x2={143} y2={112} color={blue} width={2.6} />}
      {step === 2 && <Arrow x1={233} y1={168} x2={103} y2={168} color={teal} width={2.6} />}
      <Label x={64} y={190}>
        Batterie
      </Label>
      <Label x={175} y={190}>
        Démarreur
      </Label>
      <Label x={283} y={190}>
        Alternateur
      </Label>
      <Rule>
        {
          [
            "L’énergie est stockée à l’arrêt",
            "La batterie entraîne le démarreur",
            "L’alternateur recharge la batterie",
          ][step]
        }
      </Rule>
    </>
  );
}

function Links(step: number, id: string) {
  const turn = step === 2 ? -12 : 0;
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M50 72h104v90H50Z" />
      <path
        d={
          step === 1
            ? "M87 103l78 29 66-39-9 24-63 30-76-28Z"
            : "M87 103l78 37 66-31-9 24-63 23-76-35Z"
        }
        fill="#a5bec3"
        stroke={steel}
        strokeWidth="2"
      />
      <Line
        d={["M132 84l97 24", "M132 84l97 11", "M130 84l94 22 20 26"][step]!}
        color={ochre}
        width={3}
      />
      {[87, 165, 228].map((x, i) => (
        <Marker
          key={x}
          x={x}
          y={(step === 1 ? [112, 139, 99] : [112, 147, 114])[i]!}
          r={6}
          color={i === 2 ? rust : teal}
        />
      ))}
      <ellipse
        cx="265"
        cy={step === 1 ? 98 : 115}
        rx="29"
        ry="55"
        transform={`rotate(${turn} 265 115)`}
        fill="#789098"
        stroke={dark}
        strokeWidth="2"
      />
      <ellipse
        cx="261"
        cy={step === 1 ? 98 : 115}
        rx="18"
        ry="35"
        transform={`rotate(${turn} 261 115)`}
        fill="#ccd6d2"
        stroke={steel}
      />
      {step === 0 && (
        <Callout x={147} y={182} leader="M148 166l12-16">
          Triangle
        </Callout>
      )}
      {step === 1 && <Arrow x1={309} y1={139} x2={309} y2={99} color={blue} />}
      {step === 2 && (
        <Callout x={213} y={63} leader="M205 71l-39 21">
          Biellette
        </Callout>
      )}
      <Rule>
        {
          [
            "Le bras guide la roue",
            "Les articulations la laissent débattre",
            "La biellette participe au braquage",
          ][step]
        }
      </Rule>
    </>
  );
}

function RecycleBody(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step < 2 ? (
        <>
          <Face id={id} d="M46 133l20-29 71-7 40-28h69l48 35 29 24v25H46Z" />
          <path d="M153 104l30-25h53l35 25Z" fill={`url(#${id}-glass)`} stroke={steel} />
          {[108, 265].map((x) => (
            <circle key={x} cx={x} cy="150" r="23" fill={pale} stroke={steel} strokeWidth="3" />
          ))}
          {step === 1 && (
            <>
              <path d="M157 109h69v41h-69Z" fill="#caa872" stroke={ochre} strokeWidth="2" />
              <Arrow x1={188} y1={110} x2={208} y2={63} color={ochre} />
            </>
          )}
        </>
      ) : (
        <>
          <path d="M133 65h94v36h-94v-12h22V77h-22Z" fill="#829ea6" stroke={steel} />
          <Arrow x1={170} y1={109} x2={99} y2={149} color={blue} />
          <Arrow x1={195} y1={109} x2={263} y2={149} color={ochre} />
          <Face id={id} d="M48 147h99v27H48Z" />
          <Face id={id} d="M214 147h99v27h-99Z" tone="brass" />
          <Label x={98} y={188}>
            Acier
          </Label>
          <Label x={263} y={188}>
            Autres métaux
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "La carrosserie arrive en fin de vie",
            "Des pièces peuvent être séparées",
            "L’aimantation aide à séparer l’acier",
          ][step]
        }
      </Rule>
    </>
  );
}

function SensorRoad(step: number) {
  return (
    <>
      <path d="M48 58h264v116H48Z" fill="#dbe5e4" stroke="#91aaa9" />
      <path
        d="M62 112h235m-235-30h235m-235 60h235"
        stroke="#a4babc"
        strokeDasharray="8 7"
        fill="none"
      />
      <TopCar x={111} y={117} scale={0.65} angle={90} />
      {step === 0 ? (
        <path d="M148 116l133-49v97Z" fill="#acbecb" fillOpacity=".42" stroke={blue} />
      ) : step === 1 ? (
        <>
          {[54, 80, 106].map((d, i) => (
            <path
              key={d}
              d={`M${149 + d} ${82 - i * 3}q21 34 0 ${68 + i * 6}`}
              fill="none"
              stroke={teal}
              strokeWidth="2.2"
            />
          ))}
        </>
      ) : (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M148 116L${271 - (i % 3) * 13} ${78 + i * 16}`}
              stroke={ochre}
              strokeWidth="1.25"
              opacity=".8"
            />
          ))}
          {[94, 108, 124, 141].map((y) => (
            <Marker key={y} x={268} y={y} color={rust} r={3.5} />
          ))}
        </>
      )}
      <TopCar x={273} y={117} scale={0.49} angle={90} tone="#c9bc9e" />
      <Rule>
        {
          [
            "La caméra distingue les formes",
            "Le radar mesure distance et vitesse",
            "Le lidar relève des distances",
          ][step]
        }
      </Rule>
    </>
  );
}

function Stability(step: number) {
  return (
    <>
      <path
        d="M92 174q59-103 191-112m-129 115q50-65 144-68"
        fill="none"
        stroke="#a8bdc2"
        strokeWidth="3"
      />
      <Line d="M122 171q51-81 167-86" color={blue} width={2.4} dash="5 4" />
      <TopCar x={181} y={113} scale={0.72} angle={53 + (step === 1 ? 18 : 0)} braked={step === 2} />
      {step === 1 && <Arrow x1={206} y1={103} x2={276} y2={122} color={rust} width={2.8} />}
      {step === 2 && (
        <>
          <Arrow x1={203} y1={102} x2={248} y2={89} color={teal} width={2.5} />
          <Callout x={102} y={75} leader="M123 80l35 28" color={rust}>
            Frein ciblé
          </Callout>
        </>
      )}
      {step === 0 && (
        <Callout x={281} y={58} leader="M273 61l-19 26">
          Trajectoire visée
        </Callout>
      )}
      <Rule>
        {
          [
            "Le conducteur indique une trajectoire",
            "La trajectoire réelle s’écarte",
            "Un freinage ciblé aide à corriger",
          ][step]
        }
      </Rule>
    </>
  );
}

function Aeb(step: number) {
  return (
    <>
      <path d="M37 78h286v78H37Z" fill="#e1e9e9" stroke="#9aafb3" />
      <Line d="M42 117h276" color="#9ab0b5" width={1.4} dash="7 6" />
      <TopCar x={[88, 115, 142][step]!} y={117} angle={90} scale={0.65} />
      <TopCar x={268} y={117} angle={90} scale={0.65} tone="#bdab94" />
      <Line
        d={`M${[123, 150, 177][step]} 115h${[109, 82, 55][step]}`}
        color={step === 0 ? blue : ochre}
        width={2.3}
        dash="6 4"
      />
      {step === 1 && (
        <>
          <path d="M140 69l14-25 14 25Z" fill="#e4c288" stroke={ochre} />
          <path d="M154 52v9m0 4h.1" stroke={dark} strokeWidth="2" />
        </>
      )}
      {step === 2 && (
        <path d="M91 96h26m-26 40h26" stroke={rust} strokeWidth="3" strokeLinecap="round" />
      )}
      <Label x={180} y={183}>
        {["Obstacle suivi", "Risque évalué", "Freinage demandé"][step]}
      </Label>
      <Rule>
        {
          [
            "Les capteurs suivent les véhicules",
            "Une alerte peut précéder le freinage",
            "Le véhicule réduit sa vitesse",
          ][step]
        }
      </Rule>
    </>
  );
}

function Software(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M42 72h276v100H42Z" fill="#e2eceb" stroke="#95acb0" strokeDasharray="4 4" />
      {[80, 146, 212, 278].map((x, i) => (
        <g key={x}>
          <Face id={id} d={`M${x - 16} 138h32v21h-32Z`} />
          <Wire
            d={step === 0 ? `M${x} 138V102` : `M${x} 138v-10h${180 - x}v-35`}
            tone={step === 2 && i === 2 ? ochre : blue}
          />
          {step === 0 && (
            <rect x={x - 14} y="81" width="28" height="21" rx="3" fill="#a4bfbf" stroke={steel} />
          )}
        </g>
      ))}
      {step > 0 && <Face id={id} d="M151 68h58v32h-58Z" tone={step === 2 ? "brass" : "alloy"} />}
      {step === 2 && (
        <>
          <Arrow x1={244} y1={84} x2={215} y2={84} color={ochre} />
          <Label x={262} y={62}>
            Mise à jour
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Chaque fonction a son calculateur",
            "Des contrôleurs partagent les tâches",
            "Une fonction peut évoluer par logiciel",
          ][step]
        }
      </Rule>
    </>
  );
}

function Traffic(step: number) {
  return (
    <>
      <path
        d="M39 101h76q33 0 47 28h39q15-28 48-28h73v55h-70q-29 1-41 24h-65q-13-24-40-24H39Z"
        fill="#e3e9e8"
        stroke="#9aafb3"
      />
      <Line d="M45 129h67q34 0 49 26h45q19-26 48-26h63" color="#a6babb" width={1.6} dash="7 6" />
      <TopCar x={85} y={121} angle={90} scale={0.61} />
      <TopCar x={252} y={121} angle={90} scale={0.61} tone="#cbbd9e" />
      <path d="M147 119V94l13-10h39v35Z" fill="#b2b5a2" stroke={steel} />
      {step > 0 && (
        <>
          <Arrow x1={237} y1={68} x2={104} y2={68} color={ochre} width={2.2} dashed />
          <Label x={171} y={57}>
            Alerte reçue
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M275 88V57h17v24h-17" fill="#9cb1b3" stroke={steel} />
          <Marker x={283} y={69} color={teal} />
          <Arrow x1={277} y1={89} x2={247} y2={94} color={teal} width={1.65} />
        </>
      )}
      <Rule>
        {
          [
            "La visibilité peut être masquée",
            "Un véhicule transmet une alerte",
            "L’infrastructure peut aussi informer",
          ][step]
        }
      </Rule>
    </>
  );
}

function Charging(step: number) {
  const profile = "M61 155q15-63 61-64h93q42 3 65 37l27 33";
  return (
    <>
      <PlotGrid x={56} y={69} w={256} h={97} />
      <Label x={111} y={62}>
        Puissance
      </Label>
      <Label x={222} y={188}>
        Charge de la batterie
      </Label>
      <Line d={profile} color={blue} width={3} />
      {step === 0 && <Marker x={88} y={108} />}
      {step === 1 && (
        <>
          <Marker x={165} y={91} />
          <path d="M123 91h84" stroke={teal} strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {step === 2 && (
        <>
          <Marker x={280} y={129} />
          <Line d="M215 91q42 3 65 37l27 33" color={ochre} width={4} />
        </>
      )}
      <Rule>
        {
          [
            "La puissance peut monter au début",
            "Un plateau peut se former",
            "La puissance baisse vers la fin",
          ][step]
        }
      </Rule>
    </>
  );
}

function Hybrid(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M37 66h69v38H37Z" tone="brass" />
      <Face id={id} d="M35 134h73v34H35Z" />
      <Face id={id} d="M151 105h64v39h-64Z" tone="glass" />
      <Wheel x={286} y={119} />
      <Label x={72} y={92}>
        Thermique
      </Label>
      <Label x={72} y={157}>
        Batterie
      </Label>
      <Label x={183} y={130}>
        Moteur
      </Label>
      <Label x={288} y={163}>
        Roue
      </Label>
      <Wire d="M108 82h148v37h20" active={step === 1} tone={rust} />
      {step === 0 && (
        <>
          <Wire d="M107 93h27v19h15" tone={ochre} />
          <circle cx="133" cy="104" r="7" fill="#dbba86" stroke={ochre} />
        </>
      )}
      <Wire d="M110 151h23v-26h16" active={step !== 1} tone={blue} />
      <Wire d="M215 124h59" active={step !== 1} tone={teal} />
      {step === 2 && <Arrow x1={260} y1={124} x2={221} y2={124} color={teal} width={2.2} />}
      <Rule>
        {
          [
            "En série, le thermique alimente",
            "En parallèle, le thermique entraîne",
            "Au freinage, l’énergie peut revenir",
          ][step]
        }
      </Rule>
    </>
  );
}

export const mobility65: SceneSet = {
  solidElectrolyte: Electrolyte,
  transferCase: Transfer,
  automaticGearbox: Gearbox,
  startingCircuit: Starter,
  suspensionLinks: Links,
  bodyRecycling: RecycleBody,
  driverSensors: SensorRoad,
  yawControl: Stability,
  emergencyBrake: Aeb,
  carSoftware: Software,
  trafficMessages: Traffic,
  vehicleCharging: Charging,
  hybridPower: Hybrid,
};
