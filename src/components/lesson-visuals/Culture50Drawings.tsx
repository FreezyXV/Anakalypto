import { Callout, Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, type SceneSet } from "./EverydayParts";

const dark = "#405463";
const brown = "#825d43";
const ochre = "#9b6833";
const teal = "#3c6870";
const paper = "#f4e8c8";
const burgundy = "#895451";

function stageOutline(id: string) {
  return (
    <>
      <path
        d="M58 183V77Q180 31 302 77V183Z"
        fill={`url(#${id}-theater)`}
        stroke={brown}
        strokeWidth="2"
      />
      <path d="M75 166V87Q180 49 285 87V166Z" fill="#e5d7c3" stroke="#ad8462" />
      <path
        d="M75 86Q98 123 91 157l-16 9m210-80q-23 37-16 71l16 9"
        fill="#974f4a"
        stroke={burgundy}
      />
      <path d="M67 176H294" stroke="#d6ac74" strokeWidth="5" />
    </>
  );
}

function Opera(step: number, id: string) {
  const lines = [
    "M51 95q29-32 63 0t60 0 65 0 68 0",
    "M51 116q22 35 57 2t64 0 68 0 67 0",
    "M51 137q29-30 64-2t65 0 62 0 65 0",
  ];
  if (step < 2)
    return (
      <>
        <rect x="29" y="58" width="302" height="118" rx="8" fill={paper} stroke="#af9d79" />
        {[78, 98, 118, 138, 158].map((y) => (
          <Line key={y} d={`M40 ${y}h281`} color="#cdbd99" width={1} />
        ))}
        {step === 0 ? (
          lines.map((d, i) => <Line key={d} d={d} color={[burgundy, teal, ochre][i]} width={3} />)
        ) : (
          <>
            <Line
              d="M49 107q14-15 30 0l28 9q21-39 51-25l29 18q30 27 62-3l45 1"
              color={burgundy}
              width={3.3}
            />
            <Line d="M49 146h64l35 8h73l37-7h36" color={teal} width={3} />
            <Label x={282} y={93} color={burgundy}>
              Voix
            </Label>
            <Label x={272} y={136} color={teal}>
              Basse
            </Label>
          </>
        )}
        <Label x={180} y={211}>
          {step ? "Les paroles gardent le premier plan" : "Plusieurs lignes vocales simultanées"}
        </Label>
      </>
    );
  return (
    <>
      <defs>
        <Material id={id + "-theater"} colors={["#bc876d", "#855846", "#644439"]} />
      </defs>
      {stageOutline(id)}
      {[131, 180, 230].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={107 + (i % 2) * 9} r="8" fill="#c59b7b" stroke={brown} />
          <path
            d={`M${x - 14} 148q6-30 14-30t14 30Z`}
            fill={i === 1 ? "#92614b" : "#5b756f"}
            stroke="#58483d"
          />
        </g>
      ))}
      <path d="M106 152q75 24 150 0v13q-75 21-150 0Z" fill="#7d6357" />
      {[133, 155, 180, 205, 229].map((x) => (
        <circle key={x} cx={x} cy="162" r="3.5" fill="#d4aa6d" />
      ))}
      <Label x={180} y={213}>
        Voix, instruments et action scénique
      </Label>
    </>
  );
}

function Ballet(step: number, id: string) {
  if (step === 1)
    return (
      <>
        <path d="M48 162h264M180 69v96" stroke="#aec0c6" strokeDasharray="5 5" />
        <path
          d="M175 145q-38-3-62-14-17-10-33 1l-47 10q-13 4-3 14h144Zm10 0q38-3 62-14 17-10 33 1l47 10q13 4 3 14H186Z"
          fill="#c69485"
          stroke="#785950"
          strokeWidth="1.8"
        />
        <path d="M132 148l32-2m64 2-32-2" stroke="#e9c0ad" strokeWidth="2" />
        <Callout x={180} y={94} leader="M180 102v37">
          Talons rapprochés
        </Callout>
        <Label x={180} y={211}>
          Première position · vue du dessus
        </Label>
      </>
    );
  return (
    <>
      <defs>
        <Material id={id + "-theater"} colors={["#c6a084", "#90675a", "#624f49"]} />
      </defs>
      {stageOutline(id)}
      <ellipse cx="180" cy="163" rx="66" ry="10" fill="#b1a18e" opacity=".48" />
      <g
        stroke="#6b5752"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {step === 0 && (
          <path d="M111 108l-14 23-15-5m29-18 16 21 17-9m-32 5-9 30 13 6m-4-36 13 30-7 9" />
        )}
        <path
          d={
            step === 0
              ? "M204 104l-25 16-17-4m42-12 19 17 17-5M198 131l-12 29-13 2m25-31 19 29 12 1"
              : "M188 101q-17-8-32-26m33 25q18 2 41-9M181 131l-14 28-12 4m26-32 28 12 21-10"
          }
        />
      </g>
      <circle cx={step === 0 ? 205 : 191} cy="91" r="9" fill="#cfa38a" stroke="#855e53" />
      {step === 0 && <circle cx="111" cy="96" r="8" fill="#cfa38a" stroke="#855e53" />}
      <path
        d={
          step === 0
            ? "M112 105q-18 14-12 38h24l-4-39Zm95-3q-29 17-23 41h39l-9-40Z"
            : "M189 102l-10 25-24 18 34-3 32-12-30-8 4-19Z"
        }
        fill={step === 0 ? "#89968b" : "#d2ad91"}
        stroke="#6b5752"
      />
      <Label x={180} y={212}>
        {step === 0 ? "Spectacle dansé à la cour" : "La technique au service de la scène"}
      </Label>
    </>
  );
}

function Wayfinding(step: number) {
  const stair = "M67 162h38v-22h35v-22h34V96h44";
  return (
    <>
      <rect
        x="34"
        y="56"
        width={step === 2 ? 226 : 288}
        height="124"
        rx="10"
        fill={step === 0 ? "#eee1c3" : "#24536a"}
        stroke={step === 0 ? "#b89566" : "#1b3b4d"}
        strokeWidth="1.7"
      />
      <path
        d={stair}
        fill="none"
        stroke={step ? "#edf4ed" : "#5b625a"}
        strokeWidth={step ? 8 : 4}
        strokeLinejoin="round"
      />
      {!step && (
        <>
          <path
            d="M72 169h37v-22h35v-23h35v-21h45M74 156v-27l94-61h51"
            fill="none"
            stroke="#8d8a79"
            strokeWidth="2"
          />
          {[94, 125, 159, 188].map((x, i) => (
            <path key={x} d={`M${x} ${143 - i * 18}v-26`} stroke="#8d8a79" strokeWidth="2" />
          ))}
          <Callout x={268} y={129} leader="M234 123l-36-36">
            Rampe
          </Callout>
        </>
      )}
      {step === 1 && <Arrow x1={244} y1={146} x2={283} y2={89} color="#f0ddab" width={5} />}
      {step === 2 && (
        <>
          <Arrow x1={266} y1={112} x2={327} y2={112} color={ochre} width={4} />
          <Label x={291} y={158}>
            Par ici
          </Label>
        </>
      )}
      <Label x={180} y={211}>
        {
          [
            "Un escalier dans son contexte",
            "Les marches suffisent à le reconnaître",
            "La flèche indique le chemin",
          ][step]
        }
      </Label>
    </>
  );
}

function LetterForms(step: number, id: string) {
  if (step === 2)
    return (
      <>
        <rect x="57" y="51" width="246" height="134" rx="9" fill="#dbe8e8" stroke="#8ca5ae" />
        {Array.from({ length: 14 }, (_, i) => (
          <path key={i} d={`M${65 + i * 17} 57v119`} stroke="#bbced2" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={`M65 ${57 + i * 17}h228`} stroke="#bbced2" />
        ))}
        <path
          d="M124 159h20v-35h69v35h20V91h-17V74h-72v17h-20Zm20-52V91h69v16Z"
          fill={dark}
          fillRule="evenodd"
        />
        <Label x={180} y={212}>
          Une grille impose des choix de dessin
        </Label>
      </>
    );
  return (
    <>
      <defs>
        <Material id={id + "-nib"} colors={["#dfc397", "#8c775d", "#c8a572"]} />
      </defs>
      <path d="M32 61h155v116H32Z" fill={paper} stroke="#b6a47e" />
      <path d="M42 88h134m-134 48h134m-134 26h134" stroke="#c2ae88" strokeDasharray="4 4" />
      <path
        d={
          step
            ? "M56 159H75L106 71h11l39 88h17v3h-49v-3h14l-13-34H91l-13 34h16v3H56Zm37-38h29l-16-40Z"
            : "M60 159l47-83h12l40 83h-17l-14-30H87l-17 30Zm30-36h35l-17-37Z"
        }
        fill={dark}
        fillRule="evenodd"
      />
      <path
        d={step ? "M226 63l76 45-12 14-61-42-18 2Z" : "M240 65l66 40-13 19-57-38-30-6Z"}
        fill={`url(#${id}-nib)`}
        stroke={brown}
        strokeWidth="1.6"
      />
      <path d={step ? "M211 82l10 11 9-12Z" : "M206 80l19 15 11-9Z"} fill="#c8c8bf" stroke={dark} />
      <Label x={269} y={154}>
        {step ? "Burin" : "Plume taillée"}
      </Label>
      <Label x={180} y={211}>
        {step
          ? "Traits fins et contrastes plus marqués"
          : "L’orientation change la largeur du trait"}
      </Label>
    </>
  );
}

function Cinema(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-cinemaBody"} colors={["#bd9871", "#785b46", "#987659"]} />
      </defs>
      <path d="M34 158h120v12H34Z" fill="#867864" />
      <path
        d="M47 82l79-10 31 19v59l-82 12-28-15Z"
        fill={`url(#${id}-cinemaBody)`}
        stroke={brown}
        strokeWidth="1.5"
      />
      <path d="M75 94l82-11v65l-82 14Z" fill="#967757" stroke={brown} />
      <path d="M139 102h26v22h-26Z" fill="#4d5552" stroke={dark} />
      <ellipse cx="166" cy="113" rx="8" ry="12" fill="#637a83" stroke={dark} />
      <path d="M65 116h-17v22H30" fill="none" stroke="#5e6260" strokeWidth="5" />
      {step < 2 ? (
        <>
          <path d="M187 69h131v86H187Z" fill="#48535c" stroke={dark} />
          {[73, 145].map((y) => (
            <path
              key={y}
              d={`M194 ${y}h116`}
              stroke="#eae1d1"
              strokeDasharray="6 5"
              strokeWidth="4"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={198 + i * 39}
              y="87"
              width="31"
              height="46"
              fill={i === step ? "#ead19c" : "#888d89"}
            />
          ))}
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${203 + i * 39} 127l${10 + i} -15 10 12Z`} fill="#514b48" />
          ))}
          <Label x={251} y={186}>
            {step ? "Images successives" : "Bande perforée"}
          </Label>
        </>
      ) : (
        <>
          <path d="M170 106l139-46v105l-139-46Z" fill="#ddb977" opacity=".33" />
          <path d="M304 63v99" stroke={dark} strokeWidth="5" />
          <path d="M284 136l13-23v26Z" fill="#8f745a" />
          <Label x={277} y={184}>
            Écran
          </Label>
        </>
      )}
      <Label x={91} y={191}>
        Appareil
      </Label>
      <Label x={180} y={216}>
        {
          [
            "Enregistrer une suite de vues",
            "Faire défiler la pellicule",
            "Agrandir l’image par la lumière",
          ][step]
        }
      </Label>
    </>
  );
}

function InkTools(step: number) {
  const colors = ["#3d4649", "#7a5b47", "#4e676c"];
  return (
    <>
      <path d="M37 62h286l-4 112H41Z" fill={paper} stroke="#ad9a77" strokeWidth="1.5" />
      <path d="M49 86h261m-261 36h261m-261 35h261" stroke="#ccbc96" strokeDasharray="4 4" />
      {step < 2 ? (
        <>
          <path d="M71 108q2-17 25-17t26 17l-4 37H75Z" fill={colors[step]} stroke="#504840" />
          <path d="M78 101h35v9H78Z" fill="#e3d5bb" stroke="#816f58" />
          <path d="M164 130q36-40 59-17q18 24 61 6q-2 22-42 22q-56-22-78-11Z" fill={colors[step]} />
          <Label x={214} y={91}>
            {step ? "Encre ferro-gallique" : "Encre au carbone"}
          </Label>
        </>
      ) : (
        <>
          <path
            d="M86 150q53-49 93-66l-28 48-58 25Zm127-1q29-62 70-73l-18 46-47 35Z"
            fill="#ae8b58"
            stroke={brown}
            strokeWidth="1.6"
          />
          <path d="M86 156l85-66m42 66 60-64" stroke={dark} strokeWidth="1.6" />
          <Label x={91} y={95}>
            Calame
          </Label>
          <Label x={243} y={159}>
            Plume
          </Label>
        </>
      )}
      <Label x={180} y={214}>
        {
          [
            "Des particules donnent la couleur",
            "La trace peut brunir en vieillissant",
            "La pointe façonne le trait",
          ][step]
        }
      </Label>
    </>
  );
}

function Vernacular(step: number, id: string) {
  const house = ["M68 163V100h222v63Z", "M77 161V101h205v60Z", "M84 145V98h193v47Z"][step]!;
  return (
    <>
      <defs>
        <Hatch id={id + "-vernacularWall"} color="#745c47" space={5} opacity={0.36} />
      </defs>
      <path d="M28 182h303" stroke="#8f987b" strokeWidth="2" />
      <path
        d={house}
        fill={["#ceae88", "#bbb4a4", "#d1b480"][step]}
        stroke={brown}
        strokeWidth="1.8"
      />
      <path d={house} fill={`url(#${id}-vernacularWall)`} />
      <path
        d={
          [
            "M60 103h237v-9H60Z",
            "M57 102l121-57 122 57Z",
            "M49 103l133-59 131 59-23 3-108-44-108 44Z",
          ][step]
        }
        fill={["#b89166", "#927a75", "#978255"][step]}
        stroke={brown}
        strokeWidth="1.7"
      />
      {[106, 180, 249].map((x) => (
        <rect
          key={x}
          x={x - 12}
          y="120"
          width={24}
          height={step === 0 ? 19 : 24}
          fill="#687e7e"
          stroke={dark}
        />
      ))}
      {step === 0 && <Arrow x1={40} y1={133} x2={66} y2={133} color={ochre} />}
      {step === 1 && <Arrow x1={242} y1={53} x2={275} y2={77} color={teal} />}
      {step === 2 && (
        <>
          <path d="M97 145v37m62-37v37m63-37v37m42-37v37" stroke={brown} strokeWidth="5" />
          <Arrow x1={49} y1={169} x2={111} y2={169} color={teal} />
        </>
      )}
      <Label x={180} y={215}>
        {
          [
            "Murs en terre · forte inertie",
            "Toit pentu · rejeter l’eau",
            "Plancher surélevé · sol humide",
          ][step]
        }
      </Label>
    </>
  );
}

function Restoration(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-paintingGround"} colors={["#c5d6c4", "#9baaa2", "#688783"]} />
      </defs>
      <path d="M56 53h248v130H56Z" fill="#ac916f" stroke={brown} strokeWidth="2" />
      <path d="M66 62h228v112H66Z" fill={`url(#${id}-paintingGround)`} stroke="#726451" />
      <path d="M68 150l49-51 43 31 62-33 70 58v17H68Z" fill="#77918c" />
      <path d="M113 159q38-18 60-9t64-15" fill="none" stroke="#ddd0ad" strokeWidth="4" />
      <path
        d="M200 75q-9 19 4 29l-10 27 13 22"
        fill="none"
        stroke="#4f4942"
        strokeWidth={step === 2 ? 1.2 : 2.6}
      />
      <rect
        x="67"
        y="63"
        width={step === 2 ? 113 : 226}
        height="110"
        fill="#b68b4b"
        opacity=".23"
      />
      {step === 0 && (
        <Callout x={262} y={105} leader="M228 110l-24 13">
          Fissure
        </Callout>
      )}
      {step === 1 && (
        <>
          <rect
            x="232"
            y="83"
            width="36"
            height="38"
            fill="#f1e6c2"
            fillOpacity=".25"
            stroke="#f5e5b9"
            strokeDasharray="4 4"
          />
          <Callout x={158} y={109} leader="M181 113l50-15">
            Zone d’essai
          </Callout>
        </>
      )}
      {step === 2 && <Line d="M180 64v109" color="#e4ecdd" width={1.4} dash="5 5" />}
      <Label x={180} y={214}>
        {
          [
            "Repérer et documenter l’état",
            "Vérifier l’effet sur une petite zone",
            "Intervenir localement si nécessaire",
          ][step]
        }
      </Label>
    </>
  );
}

function Cabinet(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-cabinetWood"} colors={["#b49570", "#8c6d58", "#a2856b"]} />
      </defs>
      <rect
        x="47"
        y="53"
        width="266"
        height="134"
        rx="3"
        fill={`url(#${id}-cabinetWood)`}
        stroke={brown}
        strokeWidth="2"
      />
      <path d="M57 61h246v114H57Z" fill="#ded1b7" stroke={brown} />
      <path d="M141 61v114m76-114v114" stroke="#90735c" strokeWidth="4" />
      <path d="M100 88q-33 13-20 38q20 19 34-4q-5-24-14-34Z" fill="#b49173" stroke="#6f574b" />
      <path d="M93 111q-10 12 8 13q11-6 0-15" fill="none" stroke="#eee2be" strokeWidth="2" />
      <circle cx="178" cy="111" r="23" fill="#aca88c" stroke="#777251" />
      <path d="M160 111h36m-18-18v36m-13-5 26-26" stroke="#685f50" strokeWidth="1.5" />
      <rect x="234" y="88" width="51" height="39" fill="#c1ad83" stroke="#806349" />
      <path d="M239 121l13-17 8 8 9-13 12 22Z" fill="#677b73" />
      {step > 0 &&
        [101, 179, 257].map((x, i) => (
          <g key={x}>
            <rect x={x - 24} y="139" width="48" height="24" fill="#eee6d1" stroke="#b19172" />
            <Label x={x} y={157}>
              {step === 1 ? String(i + 1) : ["Nature", "Mesure", "Art"][i]}
            </Label>
          </g>
        ))}
      <Label x={180} y={216}>
        {
          [
            "Des objets de natures très différentes",
            "Une fiche identifie chaque objet",
            "Une collection ordonnée se visite",
          ][step]
        }
      </Label>
    </>
  );
}

function Tapestry(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-wovenWool"} colors={["#d9b785", "#ba916b", "#c4ab88"]} />
        <Hatch id={id + "-tapestryThreads"} color="#7a5847" space={3} opacity={0.48} />
      </defs>
      <path d="M76 52h207v137H76Z" fill="none" stroke="#9a7355" strokeWidth="8" />
      <path
        d="M94 123q38-31 83-16t89-33M98 146q34-22 68-18t93-34"
        fill="none"
        stroke="#8b8675"
        strokeDasharray={step === 0 ? "4 3" : undefined}
      />
      {[94, 107, 120, 133, 146, 159, 172, 185, 198, 211, 224, 237, 250, 263].map((x) => (
        <Line key={x} d={`M${x} 57v127`} color="#c3ad8a" width={1.4} />
      ))}
      {step > 0 && (
        <>
          <path
            d={step === 1 ? "M91 150q54-25 92-11v44H91Z" : "M91 126q48-31 85-16t90-31v104H91Z"}
            fill={`url(#${id}-wovenWool)`}
            stroke="#a27d57"
          />
          <path
            d={step === 1 ? "M91 150q54-25 92-11v44H91Z" : "M91 126q48-31 85-16t90-31v104H91Z"}
            fill={`url(#${id}-tapestryThreads)`}
          />
        </>
      )}
      {step === 0 && (
        <Callout x={177} y={85} leader="M179 90l-22 24">
          Contour du carton
        </Callout>
      )}
      {step === 1 && (
        <Callout x={246} y={105} leader="M225 111l-45 29">
          Trame
        </Callout>
      )}
      {step === 2 && (
        <path d="M101 163q62-31 83-23t76-27" fill="none" stroke="#577d77" strokeWidth="8" />
      )}
      <Label x={180} y={216}>
        {
          [
            "Les fils de chaîne restent tendus",
            "La trame colorée forme chaque zone",
            "Le motif est construit par les fils",
          ][step]
        }
      </Label>
    </>
  );
}

export const culture50 = {
  operaStage: Opera,
  balletPose: Ballet,
  wayfindingSign: Wayfinding,
  letterForms: LetterForms,
  earlyCinema: Cinema,
  inkTools: InkTools,
  vernacularHouse: Vernacular,
  artRestoration: Restoration,
  curiosityCabinet: Cabinet,
  tapestryLoom: Tapestry,
} satisfies SceneSet;
