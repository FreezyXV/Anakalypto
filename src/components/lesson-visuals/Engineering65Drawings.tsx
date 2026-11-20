import { Callout, Hatch, Material } from "./EditorialDrawings";
import {
  Arrow,
  Face,
  Ground,
  Label,
  Line,
  Marker,
  MetalPaint,
  PlotGrid,
  Rule,
  Wire,
  blue,
  ochre,
  rust,
  steel,
  teal,
  type SceneSet,
} from "./Atlas65Parts";

function House({ id }: { id: string }) {
  return (
    <>
      <Face id={id} d="M92 159V95l58-43 80 46v61Z" />
      <path
        d="M90 95l59-44 85 48"
        stroke={steel}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M109 106h37v38h-37Zm51 0h54v14h-54Zm2 26h51v15h-51Z" fill="#e2ece9" stroke={steel} />
      <Ground d="M70 161h185" />
    </>
  );
}

function Isolated(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <House id={id} />
      {step === 0 && (
        <path
          d="M91 96l59-44 80 46v63H92Z"
          stroke={ochre}
          strokeWidth="3"
          strokeDasharray="5 3"
          fill="none"
        />
      )}
      {step === 1 && (
        <>
          <path d="M160 63l46 24 11-11-46-24Z" fill="#86a8b8" stroke={blue} strokeWidth="1.7" />
          <path d="M179 58l-10 12m25-6-10 12m24-5-9 12" stroke="#cee1e3" />
          <Face id={id} d="M267 108h48v43h-48Z" tone="brass" />
          <Arrow x1={231} y1={119} x2={265} y2={119} color={ochre} />
        </>
      )}
      {step === 2 && (
        <>
          <path d="M231 90h31v54h23" fill="none" stroke={blue} strokeWidth="3" />
          <path d="M270 124h51v34h-51Z" fill="#a9c8d0" stroke={blue} />
          <path d="M272 135q11-4 23 0t25 0" fill="none" stroke={blue} />
          <Arrow x1={266} y1={128} x2={265} y2={143} color={blue} width={1.6} />
        </>
      )}
      <Rule>
        {
          [
            "L’enveloppe réduit les besoins",
            "Produire et décaler certains usages",
            "L’eau demande son propre bilan",
          ][step]
        }
      </Rule>
    </>
  );
}

function HomeEnergy(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <House id={id} />
      {step === 0 && (
        <>
          <path
            d="M113 126h29v14h-29m4-13v13m6-13v13m6-13v13m6-13v13"
            stroke={rust}
            strokeWidth="2"
            fill="none"
          />
          <Arrow x1={125} y1={91} x2={125} y2={70} color={rust} width={2} />
          <Arrow x1={233} y1={108} x2={274} y2={93} color={rust} width={2} />
          <Label x={279} y={140}>
            Chauffage
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <path d="M175 93h27v50h-27Z" fill="#b9c9c4" stroke={steel} />
          <path d="M198 100h33v33h16" fill="none" stroke={blue} strokeWidth="3" />
          <Label x={276} y={150}>
            Eau chaude
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M175 100v28m-15-20h29l8 13h-46Z" fill="#dcc48b" stroke={ochre} />
          <path d="M198 143h22v-21h-22Z" fill="#8ca7b2" stroke={blue} />
          <Label x={271} y={146}>
            Appareils
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "On chauffe selon l’enveloppe",
            "L’eau chaude demande de l’énergie",
            "Les usages varient selon le foyer",
          ][step]
        }
      </Rule>
    </>
  );
}

function Hydrogen(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M38 85h77v71H38Z" tone="glass" />
      <path d="M63 122l16-26-6 22h15l-19 25 6-21Z" fill="#d2a770" stroke={ochre} />
      <path d="M149 93h63v57h-63Z" fill="#d2c19c" stroke={ochre} />
      <ellipse cx="180" cy="93" rx="31.5" ry="7" fill="#e5d7b4" stroke={ochre} />
      <Label x={181} y={130}>
        H₂
      </Label>
      <Face id={id} d="M249 84h69v69h-69Z" />
      <path d="M275 105l14 3 8 13-7 12-15 2-11-13Z" fill="#9ab6b1" stroke={teal} />
      {step > 0 && <Arrow x1={119} y1={120} x2={144} y2={120} color={blue} width={2.2} />}
      {step === 2 && (
        <>
          <Arrow x1={216} y1={120} x2={246} y2={120} color={ochre} width={2.2} />
          <Arrow x1={280} y1={84} x2={296} y2={57} color={rust} width={1.8} />
          <Label x={249} y={58}>
            Pertes
          </Label>
        </>
      )}
      <Label x={76} y={181}>
        Énergie
      </Label>
      <Label x={284} y={181}>
        Usage
      </Label>
      <Rule>
        {
          [
            "Il faut une énergie de départ",
            "On produit un vecteur d’énergie",
            "Les conversions ont des pertes",
          ][step]
        }
      </Rule>
    </>
  );
}

function Petroleum(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step === 0 ? (
        <>
          <Face id={id} d="M59 66h80v102H59Z" />
          <ellipse cx="99" cy="67" rx="40" ry="9" fill="#adbbc0" stroke={steel} />
          <path d="M62 112h74v51H62Z" fill="#8a765e" fillOpacity=".75" />
          <Label x={250} y={119}>
            Matière première
          </Label>
        </>
      ) : step === 1 ? (
        <>
          {[83, 178, 273].map((x) => (
            <g key={x}>
              <path d={`M${x - 13} 119h26`} stroke={steel} strokeWidth="3" />
              <circle cx={x - 17} cy="119" r="13" fill="#98b9c3" stroke={blue} />
              <circle cx={x + 17} cy="119" r="13" fill="#98b9c3" stroke={blue} />
            </g>
          ))}
          <Label x={179} y={177}>
            Briques moléculaires
          </Label>
        </>
      ) : (
        <>
          <path d="M67 134q47-81 101-26t116-13" stroke={steel} strokeWidth="3" fill="none" />
          {[
            [67, 134],
            [93, 104],
            [127, 90],
            [163, 104],
            [197, 119],
            [234, 114],
            [278, 98],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="10" fill="#a2c2cb" stroke={blue} />
          ))}
          <Label x={181} y={173}>
            Une chaîne polymère
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Une fraction alimente la pétrochimie",
            "Des matières donnent des molécules",
            "Des motifs s’assemblent en chaîne",
          ][step]
        }
      </Rule>
    </>
  );
}

function Forming(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M55 158h250v13H55Z" fill="#98afb7" stroke={steel} />
      {step === 0 ? (
        <>
          <Face id={id} d="M89 117h171v39H89Zm171 0 18-12v39l-18 12Z" />
          <path d="M176 66h22l-5 61-13 9Z" fill="#8aabb7" stroke={steel} />
          <path
            d="M176 119l-11 13m34-15 14 12m-48-15-11-8"
            stroke={ochre}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : step === 1 ? (
        <>
          <Face
            id={id}
            d="M90 117h49l25 23h41l24-23h47v20h-36l-27 21h-58l-28-21H90Z"
            tone="brass"
          />
          <Face id={id} d="M139 58h87v49l-28 17h-32l-27-17Z" />
          <Arrow x1={112} y1={83} x2={112} y2={110} color={ochre} />
        </>
      ) : (
        <>
          <path d="M165 65h37v25l-13 15h-12l-12-15Z" fill="#9bb5bd" stroke={steel} />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${100 + i * 9} ${151 - i * 8}H${260 - i * 9}`}
              stroke={ochre}
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
          <Arrow x1={183} y1={105} x2={183} y2={117} color={rust} width={1.8} />
        </>
      )}
      <Rule>
        {
          ["Enlever par usinage", "Déformer par mise en forme", "Ajouter par couches successives"][
            step
          ]
        }
      </Rule>
    </>
  );
}

function Logistics(step: number) {
  const traces = [
    "M65 124h31l16-8 22 10 18-6h126",
    "M65 124h31l16-21 22 28 18-12h126",
    "M65 124h31l16-43 22 57 18-23h126",
  ];
  return (
    <>
      <PlotGrid x={56} y={67} w={246} h={97} />
      {traces.slice(0, step + 1).map((d, i) => (
        <Line
          key={d}
          d={d!}
          color={[blue, teal, ochre][i]}
          width={i === step ? 3 : 1.55}
          dash={i === step ? undefined : "5 4"}
        />
      ))}
      <Label x={180} y={187}>
        {["Demande des clients", "Commande du magasin", "Commande au fournisseur"][step]}
      </Label>
      <Rule>
        {
          [
            "Une demande varie un peu",
            "Une commande peut amplifier l’écart",
            "L’amont peut amplifier à son tour",
          ][step]
        }
      </Rule>
    </>
  );
}

function FactoryNav(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M36 56h287v123H36Z" fill="#e0e9e9" stroke={steel} />
      {[76, 136, 208, 269].map((x) => (
        <path d={`M${x} 60h33v27h-33Zm0 87h33v29h-33Z`} key={x} fill="#b3bfad" stroke="#889f96" />
      ))}
      {step === 0 ? (
        <Wire d="M55 117h112v17h133" tone={ochre} />
      ) : step === 1 ? (
        <>
          <Wire d="M55 112h69l38 20h135" tone={blue} />
          {[97, 152, 232, 290].map((x) => (
            <rect key={x} x={x - 4} y="108" width="9" height="9" fill={teal} />
          ))}
        </>
      ) : (
        <>
          <Wire d="M55 118h69l41-24h42l38 28h55" tone={teal} />
          <circle cx="185" cy="135" r="14" fill="#bf886e" stroke={rust} />
          <path
            d="M170 125q5-18 28-14"
            fill="none"
            stroke={rust}
            strokeDasharray="3 3"
            strokeWidth="2"
          />
        </>
      )}
      <Face
        id={id}
        x={step === 2 ? 221 : step === 1 ? 184 : 100}
        y={step === 2 ? 91 : step === 1 ? 117 : 102}
        d="M0 0h37v25H0Z"
        tone="brass"
      />
      <Rule>
        {
          [
            "Un guidage fixe définit le trajet",
            "Des repères aident à se localiser",
            "Une carte peut permettre un détour",
          ][step]
        }
      </Rule>
    </>
  );
}

function Aggregate({ x, y, id, step }: { x: number; y: number; id: string; step: number }) {
  return (
    <>
      <Face
        id={id}
        x={x}
        y={y}
        d="M0 27l47-27 109 26-44 24Z"
        tone={step === 2 ? "glass" : "alloy"}
      />
      <Face
        id={id}
        x={x}
        y={y}
        d="M0 27l112 23v37L0 62Zm112 23 44-24v36l-44 25Z"
        tone={step === 0 ? "alloy" : step === 1 ? "brass" : "glass"}
      />
      {[
        [26, 44],
        [44, 56],
        [68, 47],
        [88, 62],
        [99, 71],
        [125, 60],
        [141, 46],
      ].map(([dx, dy], i) => (
        <path
          key={dx}
          d={`M${x + dx!} ${y + dy!}l6-3 5 5-6 4Z`}
          fill={i % 2 ? "#7d8d85" : "#ba9978"}
          stroke={steel}
          strokeWidth=".7"
        />
      ))}
    </>
  );
}

function Concrete(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Aggregate x={41} y={76} id={id} step={step} />
      <Callout x={259} y={83} leader="M243 88l-61 40">
        {["Ciment Portland", "Ciment composé", "Autre liant"][step]!}
      </Callout>
      {step > 0 && (
        <path
          d="M216 136h100v29H216Z"
          fill={step === 1 ? "#c8af85" : "#a8c1be"}
          stroke={step === 1 ? ochre : teal}
        />
      )}
      {step > 0 && (
        <Label x={264} y={157}>
          {step === 1 ? "Moins de clinker" : "Liant activé"}
        </Label>
      )}
      <Rule>
        {
          [
            "Le liant assemble les granulats",
            "Une partie du clinker est remplacée",
            "D’autres liants sont possibles",
          ][step]
        }
      </Rule>
    </>
  );
}

function Structure(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Ground d="M31 165h298" />
      <Face id={id} d="M57 145h36v20H57Zm209 0h36v20h-36Z" />
      {step === 0 ? (
        <>
          <path d="M73 144q108-151 213 0" fill="none" stroke="#ad9374" strokeWidth="14" />
          <path
            d="M89 126q91-110 180 0"
            fill="none"
            stroke={ochre}
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <Arrow x1={157} y1={85} x2={124} y2={105} color={rust} width={2} />
          <Arrow x1={201} y1={85} x2={235} y2={105} color={rust} width={2} />
        </>
      ) : step === 1 ? (
        <>
          <Line d="M75 77v68m211-68v68" color={steel} width={4} />
          <path d="M75 78q111 123 211 0" fill="none" stroke={blue} strokeWidth="4" />
          <Arrow x1={162} y1={131} x2={119} y2={116} color={blue} width={2} />
          <Arrow x1={198} y1={131} x2={243} y2={115} color={blue} width={2} />
        </>
      ) : (
        <>
          <Face id={id} d="M67 121h17v24H67Zm210 0h17v24h-17Z" />
          <Face id={id} d="M66 110q110 27 226 0v12q-113 30-226 0Z" tone="glass" />
          <path
            d="M82 114q93 22 196 0m-197 11q94 24 197 1"
            fill="none"
            stroke={rust}
            strokeWidth="1.7"
          />
          <path d="M83 125q94 22 193 0" fill="none" stroke={blue} strokeWidth="2" />
        </>
      )}
      <Arrow x1={179} y1={48} x2={179} y2={step === 0 ? 68 : 104} color={ochre} width={2.5} />
      <Rule>
        {
          [
            "Un arc travaille en compression",
            "Un câble travaille en traction",
            "Une poutre combine les deux",
          ][step]
        }
      </Rule>
    </>
  );
}

function Printed(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step < 2 ? (
        <>
          <Ground d="M47 167h266" />
          <path
            d="M73 159q107-52 214 0"
            fill="none"
            stroke={ochre}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {step === 1 &&
            [0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M75 ${152 - i * 6}q104-48 210 0`}
                fill="none"
                stroke={i % 2 ? "#b69a72" : "#c3ac87"}
                strokeWidth="4.3"
                strokeLinecap="round"
              />
            ))}
          <Face
            id={id}
            x={step === 0 ? 83 : 199}
            y={step === 0 ? 65 : 51}
            d="M0 0h42v41l-14 17H14L0 41Z"
          />
          <Wire d={step === 0 ? "M104 124v17" : "M219 110v12"} tone={ochre} />
        </>
      ) : (
        <>
          <path d="M55 156h250v15H55Z" fill="#b1bab1" stroke={steel} />
          <path
            d="M69 156q108-131 224 0h-24q-93-97-177 0Z"
            fill="#c6ab83"
            stroke={ochre}
            strokeWidth="2"
          />
          <path
            d="M109 115l-12 17m40-40-8 18m37-33-2 17m36-15 4 17m27-5 9 18m16 2 12 19"
            stroke="#806f57"
            strokeWidth="2"
          />
          <Arrow x1={179} y1={53} x2={179} y2={72} color={blue} width={2} />
        </>
      )}
      <Rule>
        {
          [
            "Déposer de la matière selon un trajet",
            "Construire la forme couche après couche",
            "Assembler des éléments imprimés",
          ][step]
        }
      </Rule>
    </>
  );
}

function Robot(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <rect x="34" y="58" width="292" height="121" rx="8" fill="#e0e9e8" stroke={steel} />
      <Face id={id} d="M55 116h54v32H55Z" />
      <path d="M68 116V91h27v25" fill="#92b0b9" stroke={steel} />
      <circle cx="82" cy="99" r="4" fill={ochre} />
      <path d="M248 89h51v67h-51Z" fill={step === 2 ? "#c4c6a9" : "#b1b8ab"} stroke={steel} />
      <path
        d="M117 103l125-29v88Z"
        fill="#abcdcc"
        fillOpacity=".32"
        stroke="#83a6ab"
        strokeDasharray="4 3"
      />
      {step === 0 ? (
        [86, 104, 121, 140, 151].map((y) => <Marker key={y} x={245} y={y} color={blue} r={3.5} />)
      ) : step === 1 ? (
        <>
          <path
            d="M240 82h68v82h-68Z"
            fill="none"
            stroke={ochre}
            strokeWidth="2.3"
            strokeDasharray="5 3"
          />
          <Label x={181} y={70}>
            Objet probable
          </Label>
        </>
      ) : (
        <>
          <Wire d="M111 153h48l39-43h36" tone={teal} />
          <Arrow x1={178} y1={137} x2={199} y2={114} color={teal} width={2} />
        </>
      )}
      <Rule>
        {
          [
            "Les capteurs fournissent des mesures",
            "Un modèle propose une interprétation",
            "La carte oriente la prochaine action",
          ][step]
        }
      </Rule>
    </>
  );
}

function Topological(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M62 117l52-43h146l39 42-48 36H104Z" tone="glass" />
      <Face id={id} d="M62 117l42 35h147l48-36v22l-47 34H104l-42-34Z" />
      {step === 0 ? (
        <>
          <path
            d="M117 109l118 21m-102-20 89 17"
            stroke={steel}
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path d="M170 113l16 16m0-16-16 16" stroke={rust} strokeWidth="2.5" />
        </>
      ) : (
        <>
          <path
            d={
              step === 1
                ? "M111 85h143l32 29-34 25H111l-30-23Z"
                : "M111 85h143l32 29-34 25H111l-30-23Z M126 97h110l21 19-25 12h-99l-20-13Z"
            }
            fill="none"
            stroke={teal}
            strokeWidth={step === 1 ? 3 : 2.4}
          />
          <Arrow x1={151} y1={85} x2={198} y2={85} color={teal} width={2.3} />
          {step === 2 && (
            <>
              <Marker x={219} y={102} r={4.5} />
              <Marker x={113} y={137} r={4.5} />
            </>
          )}
        </>
      )}
      <Rule>
        {
          [
            "Le volume bloque la conduction",
            "La surface peut conduire",
            "La conduction se mesure en surface",
          ][step]
        }
      </Rule>
    </>
  );
}

function Trench(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-ocean"} colors={["#d7e8e9", "#5d8497", "#384f69"]} />
        <Hatch id={id + "-oceanRock"} color="#8f765c" opacity={0.45} />
      </defs>
      <path d="M36 63h288v118H36Z" fill={`url(#${id}-ocean)`} stroke={steel} />
      <path d="M36 127l56 5 59 12 28 26 35-63 39-10 71-15v99H36Z" fill="#a99b7f" stroke="#796b57" />
      <path d="M36 127l56 5 59 12 28 26 35-63 39-10 71-15v99H36Z" fill={`url(#${id}-oceanRock)`} />
      {step > 0 && <path d="M36 155h155" stroke="#e5d1a2" strokeDasharray="5 4" strokeWidth="2" />}
      {step === 0 && (
        <Label x={198} y={85}>
          Surface de l’océan
        </Label>
      )}
      {step === 1 && (
        <Callout x={118} y={129} leader="M131 134l34 21" color={steel}>
          6 000 m
        </Callout>
      )}
      {step === 2 && (
        <>
          <Arrow x1={200} y1={98} x2={181} y2={157} color="#e2b87d" width={2.5} />
          <Label x={246} y={154}>
            Fosse
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Le fond océanique prend du relief",
            "La zone hadale débute vers 6 000 m",
            "Les fosses prolongent ce domaine",
          ][step]
        }
      </Rule>
    </>
  );
}

export const engineering65: SceneSet = {
  isolatedHome: Isolated,
  householdEnergy: HomeEnergy,
  hydrogenVector: Hydrogen,
  petroleumMaterials: Petroleum,
  materialForming: Forming,
  logisticsChain: Logistics,
  factoryNavigation: FactoryNav,
  concreteBinder: Concrete,
  loadStructure: Structure,
  printedBridge: Printed,
  robotSensing: Robot,
  topologicalSurface: Topological,
  oceanTrench: Trench,
};
