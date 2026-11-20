import { Callout, Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, type SceneSet } from "./EverydayParts";

const slate = "#445b67",
  blue = "#47758d",
  ochre = "#956735",
  green = "#51786d",
  red = "#985a45";

function Survey(step: number) {
  return (
    <>
      <path d="M30 176q45-42 88-33t83-30 109-17l19 89H30Z" fill="#dce3d5" stroke="#a2b19d" />
      <path
        d="M46 142q89-41 145-36t120-38M48 155q83-30 147-24t115-29"
        fill="none"
        stroke="#aabca7"
        strokeWidth="1.3"
      />
      <Line d="M64 165h228" color={blue} width={step === 0 ? 4 : 2.4} />
      {step > 0 && <path d="M64 165L178 70l114 95" fill="none" stroke={ochre} strokeWidth="2.5" />}
      {step === 1 && (
        <path
          d="M101 165q-3-16-13-21m168 21q3-16 13-21"
          stroke={blue}
          strokeWidth="2.6"
          fill="none"
        />
      )}
      {step === 2 && (
        <path
          d="M178 70l141-13-27 108"
          fill="#d3b983"
          fillOpacity=".28"
          stroke={green}
          strokeWidth="1.7"
        />
      )}
      {[
        [64, 165],
        [292, 165],
        ...(step > 0 ? [[178, 70]] : []),
        ...(step === 2 ? [[319, 57]] : []),
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.5" fill={slate} />
      ))}
      <Label x={61} y={151}>
        A
      </Label>
      <Label x={294} y={151}>
        B
      </Label>
      {step > 0 && (
        <Label x={163} y={69}>
          C
        </Label>
      )}
      {step === 2 && (
        <Label x={322} y={40}>
          D
        </Label>
      )}
      <Label x={180} y={218}>
        {
          [
            "Une distance de départ connue",
            "Deux angles placent C",
            "Un côté sert à un autre triangle",
          ][step]
        }
      </Label>
    </>
  );
}

function Passage(step: number) {
  return (
    <>
      <rect x="23" y="48" width="314" height="143" rx="10" fill="#cbdde3" stroke="#91adb8" />
      <path
        d="M32 89l49-10 38 11 28-15 58-2 36-16 83 21V57H32ZM92 122l46-22 49 6 34-21 51 21-18 25-42 7-44 19-52-14Z"
        fill="#aaa98d"
        stroke="#7b8e82"
      />
      <path
        d="M41 166q114 23 211-8t68-48M282 88l41 2"
        fill="none"
        stroke="#a3bac5"
        strokeDasharray="3 4"
      />
      <path
        d={
          step === 2
            ? "M46 109q-17 43 47 54l66 10q45-2 78-14t56-33q14-11 20-30"
            : "M46 109q35-1 66-13l18-6q21-2 54 3 22 2 46-17 36-7 83 20"
        }
        fill="none"
        stroke={step === 2 ? ochre : blue}
        strokeWidth="4"
        strokeDasharray={step === 2 ? "6 4" : undefined}
      />
      <path d="M37 99h27l-8 10h-17Z" fill={slate} />
      <path d="M43 94h15v5H43Z" fill="#b9885c" stroke={ochre} />
      {step === 1 && (
        <>
          <circle cx="185" cy="91" r="13" fill="none" stroke={ochre} strokeWidth="2.4" />
          <Callout x={206} y={63} leader="M202 68l-13 12">
            Détroit
          </Callout>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M176 82l15 17m-15 0 15-17" stroke={red} strokeWidth="3" />
          <Callout x={294} y={175} leader="M278 168l-23-18">
            Détour
          </Callout>
        </>
      )}
      <Label x={180} y={215}>
        {
          [
            "Une route entre deux bassins",
            "Un trafic concentré dans un passage",
            "Une autre route peut être plus longue",
          ][step]
        }
      </Label>
    </>
  );
}

function Bearing({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <circle r="48" fill="#b2c0c4" stroke={slate} strokeWidth="2" />
      <circle r="38" fill="#dbe4e6" stroke="#647e8c" />
      <circle r="24" fill="#b3c4cd" stroke={slate} strokeWidth="1.8" />
      <circle r="14" fill="#eaf0ef" stroke={slate} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <circle key={a} transform={`rotate(${a})`} cy="-31" r="4.5" fill="#738c9a" stroke={slate} />
      ))}
    </g>
  );
}

function Sensor(step: number) {
  return (
    <>
      <Bearing x={111} y={121} size={1.15} />
      <path d="M99 50h25v19H99Z" fill="#cdad85" stroke={ochre} strokeWidth="1.5" />
      <path d="M123 59h53v25h-8" fill="none" stroke={ochre} strokeWidth="1.5" />
      <rect x="182" y="59" width="149" height="128" rx="7" fill="#e1e9eb" stroke="#9bacb3" />
      <path d="M195 151h124m-124-58v58" fill="none" stroke="#a0b2b9" />
      <Line
        d={
          [
            "M197 132l13-7 11 10 15-8 12 8 13-6 13 5 12-6 13 6 16-8",
            "M197 132l13-8 12 13 12-17 14 16 13-25 13 21 14-34 12 31 15-5",
            "M197 140l20-3 16 5 15-7 18-9 19 2 15-12 15-14",
          ][step]!
        }
        color={step ? ochre : blue}
        width={2.5}
      />
      {step === 2 && <Line d="M196 112h121" color={red} width={1.5} dash="4 4" />}
      <Label x={256} y={177}>
        {step === 2 ? "Tendance" : "Vibrations"}
      </Label>
      <Label x={180} y={214}>
        {
          [
            "Un capteur écoute le roulement",
            "Une signature change avec l’usure",
            "La tendance déclenche un contrôle",
          ][step]
        }
      </Label>
    </>
  );
}

function Twin(step: number) {
  return (
    <>
      <path d="M38 122h121v40H38Z" fill="#b0c0c1" stroke={slate} />
      <path d="M44 159h112v13H44Z" fill="#7b929d" stroke={slate} />
      <Bearing x={100} y={121} size={0.82} />
      <path d="M86 77h27v21H86Z" fill={step ? "#d6b893" : "#b8c5c6"} stroke={ochre} />
      <rect
        x="211"
        y="62"
        width="116"
        height="114"
        rx="9"
        fill={step === 2 ? "#daebe1" : "#deeaee"}
        stroke={blue}
      />
      <circle
        cx="273"
        cy="116"
        r="29"
        fill="none"
        stroke={blue}
        strokeWidth="4"
        strokeDasharray="4 4"
      />
      <path
        d={step === 2 ? "M243 135l17-13 12 5 22-20 10-16" : "M244 130l12-13 10 7 22-17 14 6"}
        fill="none"
        stroke={step === 2 ? green : blue}
        strokeWidth="2.5"
      />
      {step > 0 && <Arrow x1={151} y1={112} x2={206} y2={112} color={ochre} width={2.5} />}
      {step === 2 && <path d="M301 77l5 5 10-11" stroke={green} strokeWidth="2.2" fill="none" />}
      <Label x={93} y={194}>
        Machine
      </Label>
      <Label x={269} y={195}>
        Modèle
      </Label>
      <Label x={180} y={219}>
        {
          [
            "Le modèle représente la machine",
            "Les données relient les deux",
            "On essaie une variante dans le modèle",
          ][step]
        }
      </Label>
    </>
  );
}

function IronReduction(step: number, id: string) {
  const oxide = "M53 110l27-20 34 8 21 22-11 27-37 10-30-15Z";
  return (
    <>
      <defs>
        <Material id={id + "-ironProduct"} colors={["#cad2ce", "#83979e", "#6c7e84"]} />
      </defs>
      <path d={oxide} fill="#b4856d" stroke={red} strokeWidth="1.7" />
      {[72, 91, 110].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={118 + (i % 2) * 12} r="7" fill="#737e80" />
          <circle cx={x + 7} cy={110 + (i % 2) * 12} r="4" fill={red} />
        </g>
      ))}
      <Arrow x1={141} y1={121} x2={225} y2={121} color={step === 2 ? blue : ochre} width={3} />
      <path
        d="M229 104l44-14 31 20v38l-33 10-42-16Z"
        fill={`url(#${id}-ironProduct)`}
        stroke={slate}
        strokeWidth="1.7"
      />
      <Label x={93} y={181}>
        Minerai
      </Label>
      <Label x={270} y={181}>
        Fer
      </Label>
      {step > 0 && (
        <>
          <Line d="M180 113V82" color={step === 2 ? blue : red} width={2} />
          <Label x={180} y={70} color={step === 2 ? blue : red}>
            {step === 2 ? "H₂O" : "CO₂"}
          </Label>
        </>
      )}
      <Label x={180} y={217}>
        {
          [
            "Le minerai contient de l’oxygène",
            "Voie carbonée · rejet de CO₂",
            "Voie à l’hydrogène · formation d’eau",
          ][step]
        }
      </Label>
    </>
  );
}

function Bloom(step: number, id: string) {
  const outline = "M120 184l18-111 16-21h55l15 22 19 110Z";
  return (
    <>
      <defs>
        <Material id={id + "-clayStack"} colors={["#d5b293", "#a67a5d", "#865d4c"]} />
        <Hatch id={id + "-oldClay"} color="#7f594b" />
      </defs>
      <path d={outline} fill={`url(#${id}-clayStack)`} stroke={red} strokeWidth="1.8" />
      <path d={outline} fill={`url(#${id}-oldClay)`} />
      <path d="M144 172l12-98h51l15 98Z" fill="#e2c3a3" stroke={red} />
      <path
        d="M152 103q26 7 59 0l2 14q-32 9-63 0Zm-5 37q37 9 69 0l2 12q-34 10-72 1Z"
        fill="#665c59"
      />
      <path d="M150 119q33 9 64 0l3 15q-37 9-69-2Z" fill={step > 0 ? "#a9694f" : "#b59677"} />
      {step === 0 && <Arrow x1={182} y1={39} x2={182} y2={67} color={ochre} width={2.8} />}
      {step === 1 && (
        <>
          <path d="M79 150h68" stroke={slate} strokeWidth="8" />
          <Arrow x1={84} y1={150} x2={155} y2={150} color={blue} />
          <Label x={68} y={131}>
            Air
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M164 153l13-9 22 2 11 14-9 9-25 2Z" fill="#6f7b78" stroke={slate} />
          <Arrow x1={212} y1={160} x2={291} y2={158} color={ochre} />
          <Label x={293} y={139}>
            Loupe
          </Label>
        </>
      )}
      <Label x={180} y={217}>
        {
          [
            "Minerai et charbon de bois",
            "Le minerai est réduit dans la cuve",
            "Un bloc de fer mêlé de scories",
          ][step]
        }
      </Label>
    </>
  );
}

function Carbon(step: number, id: string) {
  const count = [3, 10, 23][step]!;
  return (
    <>
      <defs>
        <Material id={id + "-carbonSample"} colors={["#d2dedb", "#9caaac", "#728a90"]} />
        <Hatch id={id + "-metalSection"} color={slate} space={5} />
      </defs>
      <path
        d="M66 128l160-38 68 38-154 46Z"
        fill={`url(#${id}-carbonSample)`}
        stroke={slate}
        strokeWidth="1.7"
      />
      <path
        d="M66 128l74 46 154-46v16l-153 45-75-45Z"
        fill={`url(#${id}-metalSection)`}
        stroke={slate}
        strokeWidth="1.5"
      />
      {Array.from({ length: count }, (_, i) => (
        <circle
          key={i}
          cx={115 + ((i * 43) % 106)}
          cy={123 + ((i * 17) % 20)}
          r={step === 2 ? 3.6 : 3}
          fill={ochre}
          opacity=".82"
        />
      ))}
      <Callout x={274} y={77} leader="M251 81l-22 34" color={ochre}>
        Carbone
      </Callout>
      <Label x={180} y={216}>
        {
          [
            "Fer forgé · très peu de carbone",
            "Acier · la teneur varie",
            "Fonte · plus riche en carbone",
          ][step]
        }
      </Label>
    </>
  );
}

function Thread(step: number, id: string) {
  const bolt = "M49 93h26v21h202l14 15-14 18H75v20H49Z";
  return (
    <>
      <defs>
        <Material id={id + "-threadMetal"} colors={["#d7e0e0", "#a6b7be", "#748c97"]} />
        <Hatch id={id + "-nutCut"} color={slate} space={4} />
      </defs>
      <path d={bolt} fill={`url(#${id}-threadMetal)`} stroke={slate} strokeWidth="1.7" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${110 + 20 * i} 112l11 35`} stroke={slate} strokeWidth="1.5" />
      ))}
      {step === 0 ? (
        <>
          <Line d="M151 83h20m-20-6v26m20-26v26" color={ochre} width={1.5} />
          <Label x={162} y={72}>
            Pas
          </Label>
        </>
      ) : (
        <>
          <path d="M218 73h79v35h-79ZM218 154h79v34h-79Z" fill="#c6b49b" stroke={ochre} />
          <path d="M218 73h79v35h-79ZM218 154h79v34h-79Z" fill={`url(#${id}-nutCut)`} />
          {Array.from({ length: 4 }, (_, i) => (
            <path
              key={i}
              d={`M${219 + (step === 1 ? 20 : 24) * i} 108l7 10 7-10`}
              fill="none"
              stroke={step === 1 ? green : red}
              strokeWidth="2.3"
            />
          ))}
        </>
      )}
      <Label x={180} y={215}>
        {
          [
            "Mesurer d’un filet au suivant",
            "Un pas et un diamètre compatibles",
            "Un pas différent décale les filets",
          ][step]
        }
      </Label>
    </>
  );
}

function MaterialChoice(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-beamModel"} colors={["#cfd7d5", "#9eb1b6", "#7c9297"]} />
      </defs>
      <path d="M55 170l15-25 16 25Z M274 170l16-25 15 25Z" fill="#9aa8ab" stroke={slate} />
      <path d="M64 137h234" stroke="#9aaeb4" strokeWidth="1.6" strokeDasharray="4 4" />
      <path
        d={
          step === 0
            ? "M66 129Q181 145 295 129v10Q181 156 66 139Z"
            : step === 1
              ? "M66 129Q181 181 295 129v10Q181 194 66 139Z"
              : "M66 128q58 20 104 23l8 12 8-15q61-4 109-20v10q-60 21-112 22l-6 11-14-12q-48-2-97-21Z"
        }
        fill={`url(#${id}-beamModel)`}
        stroke={slate}
        strokeWidth="1.8"
      />
      <Arrow x1={180} y1={63} x2={180} y2={115} color={ochre} width={3} />
      <Label x={180} y={57}>
        Charge
      </Label>
      <Label x={180} y={214}>
        {
          ["Une faible déformation", "Une flèche plus grande", "Un autre critère : la rupture"][
            step
          ]
        }
      </Label>
    </>
  );
}

function Exoskeleton(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-wearableMetal"} colors={["#c7d7d9", "#92acb7", "#65818f"]} />
      </defs>
      <circle cx="166" cy="58" r="14" fill="#cba487" stroke="#8d6b5c" />
      <path
        d="M151 79q18-10 31 1l12 49-24 13-24-24Z"
        fill="#879d9f"
        stroke={slate}
        strokeWidth="1.7"
      />
      <path
        d="M174 133l41 25-1 32 24 2m-66-60-25 22-15 29h-31"
        fill="none"
        stroke="#627b88"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M174 84l19 27 25-2"
        fill="none"
        stroke="#aa8973"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M157 91l6 43 48 22-2 33"
        fill="none"
        stroke={`url(#${id}-wearableMetal)`}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {[
        { x: 163, y: 134 },
        { x: 210, y: 157 },
      ].map(({ x, y }) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r={step === 2 ? 8 : 5}
          fill={step === 2 ? "#779a9b" : "#c4a379"}
          stroke={slate}
        />
      ))}
      {step === 0 && (
        <Callout x={264} y={114} leader="M230 122l-56 16">
          Articulation
        </Callout>
      )}
      {step === 1 && (
        <>
          <Line d="M168 127l3-7 7 14 7-3 7 12 7-3 7 13" color={ochre} width={2.4} />
          <Callout x={263} y={113} leader="M239 122l-48 13">
            Ressort
          </Callout>
        </>
      )}
      {step === 2 && (
        <Callout x={270} y={111} leader="M246 117l-33 35">
          Moteur
        </Callout>
      )}
      <Label x={180} y={218}>
        {
          [
            "La structure suit le membre",
            "Le ressort rend de l’énergie",
            "Le moteur apporte une assistance",
          ][step]
        }
      </Label>
    </>
  );
}
export const workshop50 = {
  surveyTriangle: Survey,
  seaPassage: Passage,
  factorySensor: Sensor,
  digitalTwin: Twin,
  ironReduction: IronReduction,
  bloomFurnace: Bloom,
  ironCarbon: Carbon,
  threadFit: Thread,
  materialChoice: MaterialChoice,
  assistExoskeleton: Exoskeleton,
} satisfies SceneSet;
