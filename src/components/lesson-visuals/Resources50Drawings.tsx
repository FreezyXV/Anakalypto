import { Callout, Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line, type SceneSet } from "./EverydayParts";

const blue = "#3f718b",
  moss = "#52796c",
  ochre = "#94673b",
  earth = "#8d6c53",
  slate = "#4d6572";

function PlotSoil({ id, y = 146, depth = 50 }: { id: string; y?: number; depth?: number }) {
  return (
    <>
      <path d={`M28 ${y}q75-8 150 0t154 0v${depth}H28Z`} fill="#ccb695" stroke="#9e876d" />
      <path d={`M28 ${y}q75-8 150 0t154 0v${depth}H28Z`} fill={`url(#${id}-soilHatch)`} />
    </>
  );
}

function Crop({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 6V-46m0 22q16-9 32-5M0-19q-14-11-24-7M0 3l-11 13m11-13 11 13"
        stroke={moss}
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4-25q10-18 27-7-4 12-27 7Zm-4 9q-18-16-28-11 3 13 28 11Z"
        fill="#89a883"
        stroke={moss}
      />
    </g>
  );
}

function Water({ id, step }: { id: string; step: number }) {
  return (
    <>
      <defs>
        <Hatch id={id + "-soilHatch"} color={earth} opacity={0.46} />
      </defs>
      <PlotSoil id={id} />
      {[76, 132, 185, 235].map((x) => (
        <Crop key={x} x={x} y={145} scale={0.78} />
      ))}
      {step === 0 && (
        <>
          <path
            d="M68 81q4-12 17-11 8-17 24-13 16 0 24 15 19-4 23 11Z"
            fill="#b6ceda"
            stroke={blue}
          />
          {[82, 105, 129].map((x) => (
            <Arrow key={x} x1={x} y1={88} x2={x - 8} y2={124} color={blue} width={1.6} />
          ))}
          <Label x={203} y={70}>
            Pluie
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <path d="M302 105v88h-30" fill="none" stroke={blue} strokeWidth="6" />
          <Arrow x1={298} y1={108} x2={244} y2={124} color={blue} width={2.5} />
          <Label x={189} y={65}>
            Prélèvement
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M240 166q35 2 90 5v23h-90Z" fill="#a7c2c6" stroke={blue} />
          <path
            d="M104 160q30-17 65 3t65 14"
            fill="none"
            stroke={ochre}
            strokeDasharray="5 4"
            strokeWidth="2.6"
          />
          <Label x={240} y={71}>
            Pollution estimée
          </Label>
        </>
      )}
      <Label x={180} y={216}>
        {
          [
            "Eau verte · pluie stockée dans le sol",
            "Eau bleue · eau prélevée",
            "Eau grise · indicateur de dilution",
          ][step]
        }
      </Label>
    </>
  );
}

function Seasons(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-soilHatch"} color={earth} opacity={0.45} />
      </defs>
      <PlotSoil id={id} y={158} depth={37} />
      {[109, 180, 249].map((x) => (
        <g key={x}>
          <Crop x={x} y={159} />
          <circle
            cx={x + 23}
            cy="137"
            r="9"
            fill={step === 0 ? "#ac6555" : "#c88268"}
            stroke="#8c5445"
          />
        </g>
      ))}
      {step === 0 ? (
        <>
          <circle cx="61" cy="66" r="17" fill="#dcb273" stroke={ochre} />
          <path d="M61 43v-9m0 53v10M37 66H26m59 0h10" stroke={ochre} strokeWidth="2" />
          <Label x={234} y={67}>
            Pleine saison
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <path
            d="M65 158V102q102-80 224 0v56Z"
            fill="#c3d7d6"
            fillOpacity=".38"
            stroke={blue}
            strokeWidth="1.8"
          />
          <path d="M180 67v91" stroke="#9bb7bb" />
          <path
            d="M53 166h44m-33 0q-6-11 2-16m11 16q-6-11 2-16"
            fill="none"
            stroke="#a9664e"
            strokeWidth="2.5"
          />
        </>
      ) : (
        <>
          <path d="M50 77h252" stroke={blue} strokeDasharray="6 4" strokeWidth="3" />
          <path d="M220 79V62h38l14 16m-49 0h49" fill="#b2bbc0" stroke={slate} />
          <circle cx="231" cy="80" r="5" fill={slate} />
          <circle cx="262" cy="80" r="5" fill={slate} />
          <Label x={116} y={65}>
            Transport
          </Label>
        </>
      )}
      <Label x={180} y={218}>
        {
          [
            "Une récolte adaptée au calendrier",
            "Autre possibilité · serre chauffée",
            "Autre possibilité · importer",
          ][step]
        }
      </Label>
    </>
  );
}

function Fish({
  x,
  y,
  r = 1,
  color = "#779ca5",
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r})`}>
      <path
        d="M-23 0q14-13 28-9 10 2 16 9-9 11-23 10-12-1-21-10Zm-1 0-13-9v18Z"
        fill={color}
        stroke={slate}
        strokeWidth="1.3"
      />
      <circle cx="12" cy="-2" r="1.8" fill={slate} />
    </g>
  );
}

function Fishery(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-fishGround"} colors={["#e0eef0", "#9cbdca"]} />
      </defs>
      <rect
        x="27"
        y="62"
        width="305"
        height="132"
        rx="10"
        fill={`url(#${id}-fishGround)`}
        stroke="#7d9cab"
      />
      <Line d="M34 164q88-23 172 2t119-3" color="#b3cccc" width={2} />
      <Fish x={103} y={111} r={1.05} />
      <Fish x={174} y={132} r={0.65} />
      <Fish x={219} y={96} r={0.85} color="#a79b7c" />
      {step > 0 && (
        <>
          <path
            d="M257 82l-28 45 31 46 51-5V89Z"
            fill="#b6c4b4"
            fillOpacity=".4"
            stroke={moss}
            strokeWidth="2"
          />
          <path
            d="M265 84l-25 53m38-51-29 63m43-61-32 73m46-71-31 80m-32-66 66 8m-75 7 76 8m-71 7 71 8m-60 8 60 8"
            fill="none"
            stroke="#79968b"
            strokeWidth="1"
          />
          <Fish x={278} y={123} r={0.61} />
        </>
      )}
      {step === 2 && (
        <>
          <path d="M257 169l6 3 19-2" stroke="#b8d0d5" strokeWidth="6" fill="none" />
          <path d="M254 171l28-4" stroke={ochre} strokeWidth="1.5" strokeDasharray="3 3" />
          <Fish x={271} y={149} r={0.4} color="#9eaa89" />
          <Arrow x1={270} y1={157} x2={257} y2={184} color={ochre} width={2} />
        </>
      )}
      <Label x={180} y={217}>
        {
          [
            "Plusieurs espèces partagent le milieu",
            "L’engin retient une partie des poissons",
            "Les petits peuvent sortir",
          ][step]
        }
      </Label>
    </>
  );
}

function Forest(step: number, id: string) {
  const tall = [65, 118, 180, 239, 295];
  return (
    <>
      <defs>
        <Hatch id={id + "-soilHatch"} color={earth} opacity={0.35} />
        <Material id={id + "-forestLeaves"} colors={["#b7c5a1", "#719386", "#4e756c"]} />
      </defs>
      <PlotSoil id={id} y={176} depth={19} />
      {tall.map((x, i) =>
        (step === 1 && i === 2) || (step === 2 && i === 0) ? (
          <path key={x} d={`M${x - 11} 175v-13h22v13Z`} fill="#a47e55" stroke={earth} />
        ) : (
          <g key={x}>
            <path d={`M${x - 5} 175l3-73h5l4 73Z`} fill="#a88462" stroke={earth} />
            <path
              d={`M${x - 35} 125q6-35 20-46 13-24 25-4 19 8 27 47-31 27-72 3Z`}
              transform={i % 2 ? "translate(0 12)" : undefined}
              fill={`url(#${id}-forestLeaves)`}
              stroke={moss}
            />
          </g>
        ),
      )}
      {step === 0 && (
        <Label x={182} y={45}>
          Inventaire
        </Label>
      )}
      {step === 1 && <Arrow x1={180} y1={91} x2={180} y2={154} color={ochre} />}
      {step === 2 && [64, 94, 151].map((x) => <Crop key={x} x={x} y={176} scale={0.4} />)}
      <Label x={180} y={216}>
        {
          [
            "Observer des arbres d’âges différents",
            "Une éclaircie libère un espace",
            "Des jeunes arbres prennent le relais",
          ][step]
        }
      </Label>
    </>
  );
}

function Repair(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-repairShell"} colors={["#d6e1dc", "#9faeae", "#72878d"]} />
      </defs>
      <path d="M84 88l65-25h111l37 27-54 27H86Z" fill="#bdc9c8" stroke={slate} />
      <path
        d="M85 88h159l53 1v74l-52 18H85Z"
        fill={`url(#${id}-repairShell)`}
        stroke={slate}
        strokeWidth="1.8"
      />
      <path d="M245 112l52-23" stroke={slate} fill="none" />
      <path d="M106 130h84v30h-84Z" fill="#576d75" stroke={slate} />
      <path d="M107 132h80" stroke="#d4ddd9" strokeWidth="2" />
      {step === 0 && (
        <>
          <path d="M209 106l20 21m-20 0 20-21" stroke="#995a49" strokeWidth="3" />
          <Label x={216} y={152}>
            Défaut
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <rect x="32" y="121" width="34" height="47" rx="4" fill="#c8af89" stroke={ochre} />
          <Arrow x1={69} y1={144} x2={102} y2={144} color={ochre} />
        </>
      )}
      {step === 2 && (
        <>
          <circle cx="214" cy="118" r="8" fill="#8ba995" stroke={moss} />
          <path d="M207 116l4 5 9-9" stroke="#e8f4e3" strokeWidth="2" fill="none" />
          <Line d="M108 190h170" color={moss} width={2.1} />
        </>
      )}
      <Label x={180} y={217}>
        {
          [
            "Localiser ce qui ne marche plus",
            "Remplacer la pièce en cause",
            "Remettre l’objet en service",
          ][step]
        }
      </Label>
    </>
  );
}

function Basin(step: number) {
  return (
    <>
      <path d="M32 66v115h130V66m21 0v115h145V66" fill="none" stroke={slate} strokeWidth="2" />
      <path
        d={`M33 ${[104, 119, 132][step]}h128v${[77, 62, 49][step]}H33Z`}
        fill="#a6c6d4"
        stroke={blue}
      />
      <path
        d={`M184 ${[154, 127, 107][step]}h143v${[27, 54, 74][step]}H184Z`}
        fill={step === 2 ? "#c4a87f" : "#c4be9e"}
        stroke={ochre}
      />
      <Line d="M35 145h126" color={moss} width={1.5} dash="5 4" />
      {step > 0 && <Arrow x1={154} y1={84} x2={210} y2={84} color={ochre} width={2.5} />}
      <Label x={99} y={59}>
        Ressource
      </Label>
      <Label x={256} y={59}>
        Prélèvements
      </Label>
      <Label x={180} y={214}>
        {
          [
            "Une ressource locale renouvelable",
            "Les usages sollicitent la ressource",
            "La pression augmente en période sèche",
          ][step]
        }
      </Label>
    </>
  );
}

const rainfall = [
  [63, 58, 56, 66, 80, 87, 92, 88, 83, 74, 69, 58],
  [12, 11, 14, 7, 9, 5, 6, 8, 8, 13, 12, 12],
  [65, 50, 54, 49, 54, 60, 54, 48, 51, 64, 73, 80],
];
const heat = [
  [79, 79, 78, 79, 79, 78, 77, 78, 78, 78, 79, 79],
  [61, 66, 73, 81, 90, 94, 96, 94, 90, 79, 68, 62],
  [43, 49, 57, 69, 77, 83, 87, 84, 77, 66, 54, 45],
];
function Climate(step: number) {
  return (
    <>
      <Line d="M44 64v111h271" color={slate} width={1.5} />
      {[89, 115, 141, 166].map((y) => (
        <Line key={y} d={`M45 ${y}h270`} color="#b7c7c8" width={1} dash="4 4" />
      ))}
      {rainfall[step]!.map((v, i) => (
        <rect
          key={i}
          x={52 + i * 21}
          y={175 - v * 0.77}
          width="15"
          height={v * 0.77}
          fill="#93b9c9"
        />
      ))}
      <Line
        d={heat[step]!.map((t, i) => `${i ? "L" : "M"}${60 + i * 21} ${201 - t * 1.27}`).join("")}
        color="#a66247"
        width={2.6}
      />
      <Label x={106} y={57} color={blue}>
        Pluie
      </Label>
      <Label x={253} y={57} color="#a66247">
        Température
      </Label>
      <Label x={64} y={196}>
        Janv.
      </Label>
      <Label x={295} y={196}>
        Déc.
      </Label>
      <Label x={180} y={219}>
        {
          [
            "Chaud et humide toute l’année",
            "Peu de précipitations",
            "Saisons de température marquées",
          ][step]
        }
      </Label>
    </>
  );
}

function Desert(step: number, id: string) {
  const polar = step === 1;
  return (
    <>
      <defs>
        <Material
          id={id + "-dryGround"}
          colors={polar ? ["#e6edec", "#a8cad5"] : ["#e9d2a5", "#c5a170"]}
        />
      </defs>
      <path
        d={
          polar
            ? "M29 178l48-32 64-33 38 27 55-63 94 102Z"
            : "M29 178q50-58 111-32t74-10q39-38 114 43Z"
        }
        fill={`url(#${id}-dryGround)`}
        stroke={polar ? blue : earth}
        strokeWidth="1.7"
      />
      {step === 0 ? (
        <>
          <path
            d="M127 94q4-14 19-12 13-20 36-11 12 1 17 13 18-2 25 12Z"
            fill="#b8c9d0"
            stroke={blue}
          />
          <path d="M167 106l-5 15m19-15-5 15" stroke={blue} strokeWidth="2" />
        </>
      ) : polar ? (
        <>
          <path d="M201 120l33-43 49 54-22-14-15 9-20-15Z" fill="#f1f6f5" stroke="#89adbc" />
          <Label x={94} y={95}>
            Froid
          </Label>
        </>
      ) : (
        <>
          <circle cx="263" cy="73" r="23" fill="#e2b675" stroke={ochre} />
          <Label x={97} y={86}>
            Chaud
          </Label>
        </>
      )}
      <Label x={180} y={216}>
        {
          [
            "Des précipitations généralement rares",
            "Antarctique · désert polaire",
            "Sahara · le plus grand désert chaud",
          ][step]
        }
      </Label>
    </>
  );
}

function Sand(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-grainSample"} colors={["#ebd9b5", "#c8a97f", "#9f805f"]} />
      </defs>
      <path d="M36 162h288v23H36Z" fill="#d2bea2" stroke={earth} />
      {[80, 128, 179, 229, 281].map((x, i) => (
        <path
          key={x}
          d={
            step === 0
              ? `M${x - 10} 129l7-17 16-2 10 13-8 13-20 5Z`
              : step === 1
                ? `M${x - 16} 134l4-19 19-8 16 8-5 24-22 7Z`
                : `M${x - 14} 131l6-14 16-3 12 14-9 12-19 3Z`
          }
          transform={`translate(0 ${(i % 2) * 18})`}
          fill={`url(#${id}-grainSample)`}
          stroke={earth}
          strokeWidth="1.3"
        />
      ))}
      {step === 0 && (
        <Callout x={180} y={78} leader="M185 83l-7 28">
          Grains agrandis
        </Callout>
      )}
      {step === 1 && (
        <>
          <path
            d="M57 155q66-17 120-12t125-14"
            fill="none"
            stroke="#738c91"
            strokeWidth="3"
            opacity=".7"
          />
          <Label x={180} y={71}>
            Granulat + liant
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M51 153q93-13 143-4t116-2" stroke="#9bb6ba" strokeWidth="5" fill="none" />
          <Arrow x1={233} y1={83} x2={188} y2={101} color={blue} />
          <Label x={142} y={77}>
            Prélèvement
          </Label>
        </>
      )}
      <Label x={180} y={216}>
        {
          [
            "Taille et forme varient selon l’origine",
            "Certains grains conviennent au béton",
            "L’extraction peut perturber le milieu",
          ][step]
        }
      </Label>
    </>
  );
}

function Maize(step: number, id: string) {
  const x = 165,
    count = [5, 12, 26][step]!;
  return (
    <>
      <defs>
        <Material id={id + "-maizeGrain"} colors={["#f2d497", "#cb9b5e", "#aa7647"]} />
      </defs>
      <path
        d="M164 171V55m0 70q-22-28-57-30 10 24 56 43m0-20q25-31 53-30-6 21-53 42"
        fill="#9eb199"
        stroke={moss}
        strokeWidth="2"
      />
      <path
        d={
          step === 0
            ? "M166 108q17-21 26-10-2 23-27 37Z"
            : "M162 112q27-36 54-27 14 24-12 63-25 7-42-36Z"
        }
        fill="#b4bb8d"
        stroke={moss}
      />
      {Array.from({ length: count }, (_, i) => (
        <ellipse
          key={i}
          cx={x + 16 + (i % [1, 3, 4][step]!) * 8}
          cy={step === 0 ? 102 + 5 * i : 94 + 7 * Math.floor(i / [1, 3, 4][step]!)}
          rx={step === 0 ? 3.4 : 4}
          ry="3.5"
          fill={`url(#${id}-maizeGrain)`}
          stroke={ochre}
          strokeWidth=".7"
        />
      ))}
      <Callout
        x={step === 2 ? 272 : 253}
        y={147}
        leader={step === 2 ? "M247 141l-31-13" : "M225 140l-34-17"}
      >
        Grains
      </Callout>
      <Label x={180} y={215}>
        {
          [
            "Téosinte · un petit épi",
            "Sélection répétée sur des générations",
            "Maïs · davantage de grains par épi",
          ][step]
        }
      </Label>
    </>
  );
}

export const resources50 = {
  hiddenWater: (step, id) => <Water step={step} id={id} />,
  growingSeason: Seasons,
  fishSelectivity: Fishery,
  forestRenewal: Forest,
  repairCycle: Repair,
  waterBalance: Basin,
  climatePlots: Climate,
  dryDesert: Desert,
  sandGrains: Sand,
  maizeSelection: Maize,
} satisfies SceneSet;
