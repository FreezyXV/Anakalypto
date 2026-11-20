import { Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, Plate, type SceneSet } from "./EverydayParts";

const ink = "#384f5f",
  blue = "#47778b",
  ochre = "#92673c",
  moss = "#55796c",
  rust = "#975946";
const linen = "#f2e9d6",
  steel = "#afc2ca",
  pale = "#e4edf0";

function Mountain({
  id,
  x,
  y,
  scale = 1,
  cropped = false,
}: {
  id: string;
  x: number;
  y: number;
  scale?: number;
  cropped?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={cropped ? 72 : 112} height="69" rx="3" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="112" height="69" fill="#b9ccd1" />
        <circle cx="82" cy="14" r="8" fill="#ead3a9" />
        <path d="M-4 58 36 16 56 44 72 30 113 62V70H-4Z" fill="#597680" />
        <path d="m20 34 16-18 15 21-13-6-5 4-3-4ZM58 43l14-13 15 11-13-5-5 5Z" fill="#eef1ea" />
        <path d="M0 48q30-8 54 9 29 9 58-8v21H0Z" fill={moss} />
        <path d="M0 61q36-5 68 4t44-3v8H0Z" fill="#87a0a2" />
      </g>
      <rect width={cropped ? 72 : 112} height="69" rx="3" fill="none" stroke={ink} />
    </g>
  );
}

function Provenance(step: number, id: string) {
  return (
    <>
      <Mountain
        id={id + "-whole"}
        x={step === 0 ? 106 : 39}
        y={67}
        scale={step === 0 ? 1.32 : 1.1}
      />
      {step > 0 && (
        <>
          <Arrow x1={168} y1={105} x2={204} y2={105} color={ochre} width={2.5} />
          <Mountain id={id + "-crop"} x={211} y={67} scale={1.1} cropped />
          <rect
            x="40"
            y="68"
            width="78"
            height="74"
            stroke={ochre}
            strokeWidth="2"
            strokeDasharray="5 3"
            fill="none"
          />
        </>
      )}
      {step === 2 ? (
        <>
          <Line d="M53 170H306" color={blue} />
          <circle cx="93" cy="170" r="5" fill={blue} />
          <circle cx="262" cy="170" r="5" fill={ochre} />
          <Label x={92} y={192}>
            Mai 2019
          </Label>
          <Label x={257} y={192}>
            Juin 2024
          </Label>
        </>
      ) : (
        <Label x={180} y={181}>
          {step === 0 ? "Image trouvée en ligne" : "La même crête dans un autre cadre"}
        </Label>
      )}
      <Label x={180} y={217}>
        {
          [
            "Retenir les détails reconnaissables",
            "Comparer l’original et le recadrage",
            "Vérifier les dates sur les pages",
          ][step]
        }
      </Label>
    </>
  );
}

const cards = [
  { tone: "#708f9b", path: "M0 21 12 6l8 10 8-6 12 13Z", label: "Mer" },
  { tone: "#9b7757", path: "M5 22V11L20 3l15 8v11Z", label: "Musée" },
  { tone: "#688476", path: "M13 24 9 4m7 11L28 5m-10 16 16-3", label: "Forêt" },
];

function Feed(step: number) {
  const order = [
    [0, 1, 2],
    [1, 2, 0],
    [2, 0, 1],
  ][step]!;
  return (
    <>
      <Plate x={55} y={55} width={250} height={47} color={linen}>
        <Label x={180} y={84}>
          {
            [
              "Contenus disponibles",
              "Exemple · intérêt pour l’art",
              "Exemple · goût pour la nature",
            ][step]
          }
        </Label>
      </Plate>
      {order.map((content, position) => {
        const card = cards[content]!;
        const x = 37 + 102 * position;
        return (
          <g key={card.label}>
            <rect
              x={x}
              y="122"
              width="82"
              height="64"
              rx="6"
              fill={step > 0 && position === 0 ? "#ede0cb" : "#f2f7f7"}
              stroke={step > 0 && position === 0 ? ochre : "#a1b4bd"}
            />
            <path
              d={card.path}
              transform={`translate(${x + 21} 129)`}
              fill={card.label === "Forêt" ? "none" : card.tone}
              stroke={card.tone}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <Label x={x + 41} y={176}>
              {card.label}
            </Label>
          </g>
        );
      })}
      <Label x={180} y={216}>
        {step === 0 ? "Trois contenus, un même ensemble" : "Le premier contenu affiché change"}
      </Label>
    </>
  );
}

function Document({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 0H37l13 13v56H0Z"
        fill={active ? linen : "#f5f8f8"}
        stroke={ink}
        strokeWidth="1.5"
      />
      <path
        d="M37 1v12h12M10 25h29M10 35h24M10 46h29M10 56h18"
        fill="none"
        stroke={active ? ochre : blue}
        strokeWidth="1.5"
      />
    </g>
  );
}

function Hypertext(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-crt"} colors={["#b6c7ce", "#758b96"]} />
      </defs>
      <rect
        x="37"
        y="67"
        width="112"
        height="91"
        rx="7"
        fill={`url(#${id}-crt)`}
        stroke={ink}
        strokeWidth="2"
      />
      <rect x="47" y="77" width="92" height="64" rx="5" fill="#293e49" stroke="#172b36" />
      <path d="M67 158v16h53v-16m-72 17h94" fill="none" stroke={ink} strokeWidth="3" />
      <path d="M57 91h71m-71 11h57m-57 11h41" stroke="#d7e2df" strokeWidth="2" />
      {step === 1 && <path d="M57 125h58m-58 4h58" stroke="#e0b37a" strokeWidth="2" />}
      {step === 2 && <path d="M57 122h54m-54 7h39" stroke="#b7ce9a" strokeWidth="2.5" />}
      <Document x={211} y={61} active={step === 1} />
      <Document x={274} y={103} active={step === 2} />
      {step > 0 && (
        <Arrow
          x1={157}
          y1={step === 1 ? 103 : 143}
          x2={step === 1 ? 205 : 267}
          y2={step === 1 ? 95 : 144}
          color={ochre}
          width={2.6}
        />
      )}
      <Label x={103} y={195}>
        Navigateur
      </Label>
      <Label x={267} y={195}>
        Documents
      </Label>
      <Label x={180} y={218}>
        {
          [
            "Des documents à relier",
            "Un lien pointe vers une adresse",
            "Le navigateur affiche la page liée",
          ][step]
        }
      </Label>
    </>
  );
}

function Encoding(step: number) {
  const bits = step === 2 ? 16 : step === 1 ? 7 : 8;
  return (
    <>
      <rect x="33" y="58" width="294" height="94" rx="8" fill="#f6f7f5" stroke="#93a8b1" />
      <Label x={180} y={82}>
        1 120 bits disponibles
      </Label>
      <path d="M54 122h252" stroke="#c5d2d5" strokeWidth="16" strokeLinecap="round" />
      {Array.from({ length: 32 }, (_, i) => (
        <rect
          key={i}
          x={54 + i * 7.8}
          y="112"
          width="6.5"
          height="20"
          rx="1.1"
          fill={i >= 2 * bits ? "#d9e3e5" : Math.floor(i / bits) % 2 ? "#d3ad79" : "#6893a8"}
        />
      ))}
      <Label x={180} y={174}>
        {
          [
            "140 octets dans le SMS",
            "7 bits par caractère GSM simple",
            "16 bits pour un caractère UCS-2",
          ][step]
        }
      </Label>
      <Label x={180} y={216}>
        {["Une capacité fixe", "Jusqu’à 160 caractères", "Jusqu’à 70 caractères"][step]}
      </Label>
    </>
  );
}

function Chip({
  x,
  y,
  scale = 1,
  tone = ink,
}: {
  x: number;
  y: number;
  scale?: number;
  tone?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-26-20h52v40h-52Z" fill={tone} stroke={ink} />
      <path d="M-17-13h34v26h-34Z" fill="#d4dfe1" opacity=".35" />
      <path
        d="M-17-20v-7m11 7v-7m11 7v-7m12 7v-7m-34 47v7m11-7v7m11-7v7m12-7v7M-26-13h-7m7 13h-7m7 13h-7m59-26h7m-7 13h7m-7 13h7"
        fill="none"
        stroke="#9d8a66"
        strokeWidth="2.6"
      />
    </g>
  );
}

function Runtime(step: number) {
  return (
    <>
      <Document x={36} y={80} active={step === 0} />
      <Chip x={286} y={116} scale={1.16} />
      {step > 0 && (
        <>
          <Arrow x1={92} y1={117} x2={129} y2={117} color={blue} width={2.4} />
          <Arrow x1={228} y1={117} x2={248} y2={117} color={ochre} width={2.4} />
          <Plate x={137} y={86} width={89} height={62} color={linen}>
            <Label x={181} y={111}>
              {step === 1 ? "Code" : "Moteur"}
            </Label>
            <Label x={181} y={132}>
              {step === 1 ? "machine" : "d’exécution"}
            </Label>
          </Plate>
        </>
      )}
      <Label x={62} y={174}>
        Source
      </Label>
      <Label x={288} y={174}>
        Processeur
      </Label>
      <Label x={180} y={215}>
        {
          [
            "Le texte doit être traduit",
            "Traduire avant le lancement",
            "Traduire pendant l’exécution",
          ][step]
        }
      </Label>
    </>
  );
}

function Storage(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-ssd"} color="#889ba1" opacity={0.3} />
      </defs>
      <rect x="36" y="73" width="110" height="71" rx="7" fill="#6d8187" stroke={ink} />
      <rect x="43" y="80" width="96" height="57" rx="3" fill={`url(#${id}-ssd)`} stroke="#b7c7c9" />
      {[46, 134].map((x) => (
        <circle key={x} cx={x} cy="133" r="2.5" fill="#d9e4e4" />
      ))}
      <rect x="211" y="88" width="116" height="42" rx="3" fill={moss} stroke={ink} />
      {[229, 253, 277, 302].map((x) => (
        <g key={x}>
          <rect x={x - 8} y="96" width="16" height="18" fill="#365461" />
          <path d={`M${x - 8} 128h16`} stroke="#cfb67f" strokeWidth="4" strokeDasharray="2 2" />
        </g>
      ))}
      {step === 0 && <Document x={68} y={64} active />}
      {step === 1 && (
        <>
          <Arrow x1={153} y1={109} x2={204} y2={109} color={blue} width={2.5} />
          <Document x={243} y={59} active />
        </>
      )}
      {step === 2 && (
        <>
          <Arrow x1={205} y1={109} x2={153} y2={109} color={ochre} width={2.5} />
          <Document x={68} y={64} active />
          <Document x={243} y={59} />
        </>
      )}
      <Label x={89} y={177}>
        Stockage
      </Label>
      <Label x={267} y={177}>
        Mémoire vive
      </Label>
      <Label x={180} y={217}>
        {
          [
            "Le fichier est conservé sur le SSD",
            "Ouvrir une copie de travail en RAM",
            "Écrire la nouvelle version sur le SSD",
          ][step]
        }
      </Label>
    </>
  );
}

function Parallel(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-tile"} color={blue} opacity={0.4} />
      </defs>
      {[0, 1, 2, 3].map((i) => {
        const y = 65 + i * 32;
        return (
          <g key={i}>
            <rect x="41" y={y} width="53" height="24" rx="3" fill={pale} stroke={blue} />
            <path d={`M47 ${y + 18}q16-22 39 0Z`} fill={i % 2 ? moss : steel} stroke={blue} />
            {step === 1 && (
              <Arrow
                x1={100}
                y1={y + 12}
                x2={146}
                y2={111 + i * 3}
                width={1.7}
                color={i === 0 ? ochre : "#91a6ad"}
              />
            )}
            {step === 2 && (
              <Arrow x1={100} y1={y + 12} x2={144} y2={y + 12} width={1.7} color={ochre} />
            )}
            {step === 2 && (
              <>
                <Chip x={181} y={y + 12} scale={0.46} />
                <Arrow x1={209} y1={y + 12} x2={258} y2={y + 12} width={1.5} color={blue} />
                <rect
                  x="266"
                  y={y + 2}
                  width="45"
                  height="20"
                  fill={`url(#${id}-tile)`}
                  stroke={blue}
                />
              </>
            )}
          </g>
        );
      })}
      {step === 1 && <Chip x={181} y={116} scale={0.88} />}
      {step === 0 && (
        <Label x={210} y={119}>
          Image divisée
        </Label>
      )}
      <Label x={180} y={216}>
        {
          [
            "Quatre tuiles d’une même image",
            "Exemple · calculer une tuile à la fois",
            "Exemple · calculer plusieurs tuiles",
          ][step]
        }
      </Label>
    </>
  );
}

function Specialization(step: number) {
  return (
    <>
      <path d="M36 141h288v16H36Z" fill={steel} stroke={ink} />
      <path d="M46 150h268" stroke={ink} strokeDasharray="7 5" />
      {[0, 1, 2].map((i) => {
        const x = 64 + 116 * i;
        const color = [blue, ochre, moss][i];
        return (
          <g key={i} transform={`translate(${x} 0)`} opacity={step === 0 && i > 0 ? 0.64 : 1}>
            <rect
              x="-26"
              y="77"
              width="52"
              height="54"
              rx="5"
              fill={i === 1 ? linen : pale}
              stroke={color}
            />
            <path
              d={
                [
                  "M-16 93q20-11 26 2t-12 15L16 115",
                  "M-15 114h29m-23-24 10 13 10-13",
                  "M-13 117h24l7-10m-26 10v-24",
                ][i]
              }
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <Label x={0} y={185}>
              {["Étirer", "Couper", "Former"][i]}
            </Label>
          </g>
        );
      })}
      {step > 0 &&
        [102, 219].map((x) => (
          <Arrow key={x} x1={x} y1={109} x2={x + 33} y2={109} width={2.2} color={ochre} />
        ))}
      {step === 2 &&
        [100, 130, 160, 190, 220, 250].map((x) => (
          <path key={x} d={`M${x} 133v-9m-3 0h6`} fill="none" stroke={moss} strokeWidth="2" />
        ))}
      <Label x={180} y={218}>
        {
          [
            "Une personne réalise les opérations",
            "Les postes se partagent les gestes",
            "Les postes doivent rester coordonnés",
          ][step]
        }
      </Label>
    </>
  );
}

function Survivor(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-missing"} color={rust} opacity={0.6} />
      </defs>
      {Array.from({ length: 12 }, (_, i) => {
        const x = 41 + (i % 6) * 48;
        const y = 69 + Math.floor(i / 6) * 52;
        const hit = [0, 1, 3, 8, 10].includes(i);
        const shown = step !== 1 || hit;
        return (
          <g key={i} opacity={shown ? 1 : 0.2}>
            <rect
              x={x}
              y={y}
              width="37"
              height="37"
              rx="5"
              fill={step === 0 ? pale : hit ? "#cbded4" : `url(#${id}-missing)`}
              stroke={step === 0 ? blue : hit ? moss : rust}
              strokeDasharray={shown ? undefined : "3 3"}
            />
            {step === 0 ? (
              <path
                d={`M${x + 11} ${y + 13}h15m-15 6h15m-15 6h10`}
                stroke={blue}
                strokeWidth="1.6"
              />
            ) : hit ? (
              <path
                d={`M${x + 10} ${y + 19}l6 6 11-13`}
                stroke={moss}
                strokeWidth="2.6"
                fill="none"
              />
            ) : (
              shown && (
                <path d={`M${x + 13} ${y + 13}l11 11m0-11-11 11`} stroke={rust} strokeWidth="2.4" />
              )
            )}
          </g>
        );
      })}
      <Label x={180} y={181}>
        {["12 projets au départ", "5 réussites visibles", "5 réussites sur 12 projets"][step]}
      </Label>
      <Label x={180} y={216}>
        {
          [
            "Définir le groupe de départ",
            "Les abandons deviennent invisibles",
            "Retrouver les 7 cas manquants",
          ][step]
        }
      </Label>
    </>
  );
}

function Rumor(step: number) {
  const phrases = [
    ["Le musée ferme", "plus tôt samedi."],
    ["Le musée ferme", "samedi."],
    ["Le musée ferme", "tout le week-end."],
  ];
  return (
    <>
      {[67, 180, 293].map((x, i) => (
        <g key={x} opacity={i > step ? 0.45 : 1}>
          <circle
            cx={x}
            cy="71"
            r="11"
            fill={i === step ? "#dec4a1" : steel}
            stroke={i === step ? ochre : blue}
          />
          <path
            d={`M${x - 17} 101q0-15 17-15t17 15Z`}
            fill={i === step ? "#dec4a1" : steel}
            stroke={i === step ? ochre : blue}
          />
        </g>
      ))}
      {[87, 199].map((x, i) => (
        <Arrow
          key={x}
          x1={x}
          y1={83}
          x2={x + 70}
          y2={83}
          color={step > i ? ochre : "#9eafb7"}
          width={1.9}
        />
      ))}
      <path
        d={`M53 127h${[16, 128, 241][step]}l12-14 12 14h${[214, 102, 0][step]}q14 0 14 13v35q0 13-14 13H53q-14 0-14-13v-35q0-13 14-13Z`}
        fill={linen}
        stroke={ochre}
        strokeWidth="1.7"
      />
      <Label x={180} y={151}>
        {phrases[step]![0]}
      </Label>
      <Label x={180} y={176}>
        {phrases[step]![1]}
      </Label>
      <Label x={180} y={216}>
        {["Le message de départ", "Un détail est omis", "Une version plus large apparaît"][step]}
      </Label>
    </>
  );
}

export const information50: SceneSet = {
  imageProvenance: Provenance,
  feedRanking: Feed,
  webHyperlink: Hypertext,
  textEncoding: Encoding,
  languageRuntime: Runtime,
  memoryStorage: Storage,
  graphicParallel: Parallel,
  taskSpecialization: Specialization,
  missingFailures: Survivor,
  rumorChain: Rumor,
};
