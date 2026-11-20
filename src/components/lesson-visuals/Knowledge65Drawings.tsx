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
  dark,
  ochre,
  rust,
  steel,
  teal,
  type SceneSet,
} from "./Atlas65Parts";

function SearchCost(step: number) {
  const values = step === 2 ? [20, 12, 28, 8, 24, 4, 32, 16] : [4, 8, 12, 16, 20, 24, 28, 32];
  const checked = [[0, 1, 2, 3, 4, 5, 6], [3, 5, 6], [3]][step]!;
  return (
    <>
      <Line d="M37 81h284" color="#9ab2b8" width={1.3} dash={step === 2 ? "5 4" : undefined} />
      <Marker x={48 + 37 * (step === 2 ? 2 : 6)} y={79} color={ochre} r={5} />
      {values.map((n, i) => (
        <g key={n}>
          <rect
            x={32 + i * 37}
            y="102"
            width="31"
            height="28"
            rx="3"
            fill={n === 28 ? "#dcc194" : checked.includes(i) ? "#bbd0d5" : "#e7edef"}
            stroke={n === 28 ? ochre : blue}
          />
          <Label x={48 + i * 37} y={122}>
            {n}
          </Label>
          {checked.includes(i) && (
            <path d={`M${48 + i * 37} 136v8`} stroke={n === 28 ? ochre : blue} strokeWidth="2" />
          )}
        </g>
      ))}
      <Label x={180} y={175}>
        {["7 comparaisons", "3 comparaisons", "Les mêmes valeurs, mélangées"][step]}
      </Label>
      <Rule>
        {
          [
            "Tester les valeurs une par une",
            "Écarter une moitié à chaque étape",
            "Sans tri, la moitié ne suffit pas",
          ][step]
        }
      </Rule>
    </>
  );
}

function Scheduler(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {[73, 180, 287].map((x, i) => (
        <g key={x}>
          <Face id={id} x={x - 39} y={68} d="M0 0h78v35H0Z" tone={i === 1 ? "brass" : "glass"} />
          <Label x={x} y={91}>
            {["Web", "Texte", "Jeu"][i]}
          </Label>
          <Wire
            d={`M${x} 104v18h${180 - x}`}
            active={step === 2 || i === step}
            tone={i === 1 ? ochre : blue}
          />
        </g>
      ))}
      <Face id={id} d="M133 120h94v26h-94Z" />
      <Label x={180} y={139}>
        {step === 2 ? "Mémoire" : "Système"}
      </Label>
      {step === 2 ? (
        [119, 167, 215].map((x, i) => (
          <rect
            key={x}
            x={x}
            y="157"
            width="30"
            height="19"
            rx="3"
            fill={[blue, ochre, teal][i]}
            stroke={steel}
          />
        ))
      ) : (
        <>
          <Wire d="M180 148v16" tone={step === 0 ? blue : ochre} />
          <Label x={180} y={183}>
            Processeur
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Une application obtient un créneau",
            "Le système alterne les créneaux",
            "La mémoire est répartie et isolée",
          ][step]
        }
      </Rule>
    </>
  );
}

function DigitalPreservation(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M49 85h78v72H49Z" />
      <circle cx="87.5" cy="118" r="20" fill="#c2d0ce" stroke={steel} />
      <circle cx="87.5" cy="118" r="6" fill={steel} />
      <Face id={id} d="M142 84h78v73h-78Z" tone="brass" />
      <circle cx="164" cy="113" r="10" fill="#8d7e63" stroke={ochre} />
      <circle cx="197" cy="113" r="10" fill="#8d7e63" stroke={ochre} />
      <path d="M164 121h33" stroke={ochre} strokeWidth="2" />
      <Face id={id} d="M234 85h77v71h-77Z" tone="glass" />
      <path d="M248 114h46m-45 12h26" stroke={steel} strokeWidth="3" strokeDasharray="5 3" />
      {step === 0 && (
        <>
          <Wire d="M127 106h15m78 0h14" tone={ochre} />
          <Label x={180} y={182}>
            Copies séparées
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          {[88, 180, 272].map((x, i) => (
            <path
              key={x}
              d={i === 1 ? `M${x - 6} 69l12 12m0-12-12 12` : `M${x - 6} 75l4 4 9-9`}
              fill="none"
              stroke={i === 1 ? rust : teal}
              strokeWidth="2.4"
            />
          ))}
          <Label x={180} y={182}>
            Empreintes comparées
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <Arrow x1={179} y1={165} x2={252} y2={165} color={teal} />
          <Label x={277} y={186}>
            Nouveau support
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Multiplier les supports et les lieux",
            "Vérifier l’intégrité des copies",
            "Migrer avant la perte de lecture",
          ][step]
        }
      </Rule>
    </>
  );
}

function Wafer(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <defs>
        <Hatch id={id + "-wafer65"} color={blue} space={5} opacity={0.6} />
      </defs>
      {step < 2 ? (
        <>
          <ellipse
            cx="153"
            cy="119"
            rx="100"
            ry="56"
            fill={`url(#${id}-glass)`}
            stroke={steel}
            strokeWidth="2"
          />
          <path
            d="M78 95h150m-174 17h199m-196 19h191m-174 17h151M99 77v84m25-95v105m28-108v112m27-110v101m25-90v78"
            fill="none"
            stroke="#7198a4"
            strokeWidth="1.25"
          />
          {step === 1 && (
            <>
              <rect
                x="152"
                y="112"
                width="27"
                height="18"
                fill="#d2b37f"
                stroke={ochre}
                strokeWidth="2"
              />
              <Arrow x1={183} y1={122} x2={271} y2={105} color={ochre} />
              <Face id={id} d="M275 88h50v34h-50Z" tone="brass" />
            </>
          )}
        </>
      ) : (
        <>
          <Face id={id} d="M85 105l50-36h123l-49 36Z" />
          <Face id={id} d="M85 105h124v52H85Zm124 0 49-36v50l-49 38Z" />
          <path d="M138 93l25-18h47l-24 18Z" fill="#6c8c96" stroke={dark} />
          <path d="M94 118h114m-114 10h114m-114 11h114" stroke="#c6d6d4" strokeWidth="2" />
          {[105, 124, 145, 165, 185].map((x) => (
            <path key={x} d={`M${x} 156v13`} stroke={ochre} strokeWidth="3" />
          ))}
          <Label x={286} y={148}>
            Boîtier
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Un disque porte plusieurs circuits",
            "Le disque est découpé en dés",
            "Le boîtier protège et relie la puce",
          ][step]
        }
      </Rule>
    </>
  );
}

function Orbit(step: number, id: string) {
  const spot = step === 0 ? [229, 112] : [146, 127];
  const sat = step === 0 ? [310, 112] : [90, 151];
  return (
    <>
      <MetalPaint id={id} />
      <ellipse
        cx="180"
        cy="112"
        rx="130"
        ry="57"
        fill="none"
        stroke="#9eafb7"
        strokeDasharray="4 4"
      />
      <circle cx="180" cy="112" r="49" fill={`url(#${id}-glass)`} stroke={blue} strokeWidth="2" />
      <path
        d="M149 93l13-14 17 2 9 10-18 7-7 14-13-3Zm37 28 16-8 12 13-9 12-15 5Z"
        fill="#8da590"
        stroke={teal}
      />
      <ellipse
        cx="180"
        cy="112"
        rx="49"
        ry="21"
        stroke={blue}
        strokeWidth="1"
        opacity=".75"
        fill="none"
      />
      <Marker x={spot[0]!} y={spot[1]!} color={rust} r={5} />
      <Wire d={`M${spot[0]} ${spot[1]}L${sat[0]} ${sat[1]}`} tone={ochre} />
      <path d={`M${sat[0]! - 16} ${sat[1]! - 3}h32v7h-32Z`} fill="#7798a9" stroke={blue} />
      <rect
        x={sat[0]! - 5}
        y={sat[1]! - 7}
        width="10"
        height="14"
        rx="2"
        fill="#d5b983"
        stroke={ochre}
      />
      {step === 2 && (
        <>
          <Callout x={258} y={62} leader="M243 67l-52 10">
            Même période
          </Callout>
          <Arrow x1={62} y1={89} x2={84} y2={72} color={teal} width={2} />
        </>
      )}
      <Rule>
        {
          [
            "Le satellite reste dans le plan équatorial",
            "Le sol et le satellite tournent ensemble",
            "Depuis le sol, la direction reste fixe",
          ][step]
        }
      </Rule>
    </>
  );
}

function Walking(step: number) {
  const center = [
    [110, 100],
    [180, 80],
    [249, 100],
  ][step]!;
  const [x, y] = center as [number, number];
  return (
    <>
      <Ground d="M43 178h274" />
      <path
        d="M64 115q117-77 231 1"
        fill="none"
        stroke="#a9bec1"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx={x} cy={y - 25} r="10" fill="#cfaa87" stroke="#8f7158" />
      <path d={`M${x - 7} ${y - 13}q-11 20-7 36h27q3-18-6-36Z`} fill="#83a6ad" stroke={steel} />
      <path
        d={
          step === 0
            ? "M104 120l18 25-16 29m11-54-29 26-21 26"
            : step === 1
              ? "M175 101l8 35-3 40m6-74 27 35 25 1"
              : "M243 121l-16 25-21 29m49-54 15 25 3 28"
        }
        fill="none"
        stroke={steel}
        strokeWidth="4.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Marker x={x} y={y + 14} color={rust} r={4.6} />
      {step === 0 && <Arrow x1={128} y1={101} x2={150} y2={91} color={ochre} width={2} />}
      {step === 1 && <Line d="M180 144v27" color={ochre} dash="3 3" width={2} />}
      {step === 2 && <Arrow x1={266} y1={93} x2={289} y2={112} color={ochre} width={2} />}
      <Rule>
        {
          [
            "Le centre de masse monte",
            "Il passe au-dessus du pied d’appui",
            "Il redescend vers l’appui suivant",
          ][step]
        }
      </Rule>
    </>
  );
}

function Lorenz(step: number) {
  const x = 76;
  return (
    <>
      <PlotGrid x={x} y={62} w={227} h={105} />
      <Line d="M76 167l227-105" color="#8ba9ae" width={1.7} dash={step > 0 ? "5 3" : undefined} />
      {step > 0 && (
        <path
          d={step === 1 ? "M76 167q110-15 227-105" : "M76 167q146-5 227-105"}
          fill="none"
          stroke={ochre}
          strokeWidth="2.7"
        />
      )}
      {step === 2 && <path d="M76 167 303 62Q222 162 76 167Z" fill="#d9b786" fillOpacity=".45" />}
      <Label x={113} y={54}>
        Revenu cumulé
      </Label>
      <Label x={196} y={186}>
        Population cumulée
      </Label>
      <Rule>
        {
          [
            "La diagonale représente l’égalité",
            "La courbe s’écarte de la diagonale",
            "L’aire mesure un écart à l’égalité",
          ][step]
        }
      </Rule>
    </>
  );
}

function Accounts(step: number) {
  return (
    <>
      <path d="M35 64h290v109H35Z" fill="#ede7d7" stroke="#a5977d" />
      <path
        d="M180 68v102m-136-59h271m-271 40h271"
        fill="none"
        stroke="#b3a78a"
        strokeWidth="1.5"
      />
      <Label x={106} y={94}>
        Débit
      </Label>
      <Label x={253} y={94}>
        Crédit
      </Label>
      <Label x={106} y={137}>
        Stock
      </Label>
      <Label x={251} y={137}>
        Caisse
      </Label>
      {step === 0 && (
        <path
          d="M77 113h58v32H77Z"
          fill="none"
          stroke={ochre}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
      )}
      {step > 0 && (
        <>
          <Label x={108} y={168}>
            60 €
          </Label>
          <Label x={251} y={168}>
            60 €
          </Label>
          <Arrow x1={177} y1={129} x2={202} y2={129} width={1.8} color={ochre} />
        </>
      )}
      {step === 2 && <Line d="M129 175h100" color={teal} width={3} />}
      <Rule>
        {
          [
            "Identifier ce que l’achat modifie",
            "Écrire dans deux comptes distincts",
            "Les deux montants s’équilibrent",
          ][step]
        }
      </Rule>
    </>
  );
}

function External(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step < 2 ? (
        <>
          <Face id={id} d="M45 154v-39l27 10v-20l24 17v-39h17v71Z" />
          <path
            d="M101 80q7-22 33-14t43-9"
            fill="none"
            stroke="#a2afb0"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <Face id={id} d="M243 154v-44l40-29 36 29v44Z" tone="brass" />
          <path d="M254 111h21v18h-21Z" fill="#a3bdbe" stroke={steel} />
          <Label x={77} y={180}>
            Usine
          </Label>
          <Label x={280} y={180}>
            Voisin
          </Label>
        </>
      ) : (
        <>
          <Face id={id} d="M54 109h56v47H54Z" tone="brass" />
          <path d="M58 120h48m-48 12h48m-48 13h48" stroke={ochre} />
          <path
            d="M280 151v-43m-24 16q-11-43 34-48 29 9 21 41-24 24-55 7Z"
            fill="#a9b592"
            stroke={teal}
            strokeWidth="2"
          />
          <Label x={81} y={180}>
            Ruche
          </Label>
          <Label x={284} y={180}>
            Verger
          </Label>
        </>
      )}
      {step > 0 && (
        <Arrow
          x1={126}
          y1={115}
          x2={237}
          y2={116}
          color={step === 1 ? rust : teal}
          dashed
          width={2.2}
        />
      )}
      <Rule>
        {
          [
            "Un acteur et un voisin distincts",
            "La pollution impose un coût au voisin",
            "La pollinisation lui rend un service",
          ][step]
        }
      </Rule>
    </>
  );
}

function Commons(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-commonPond"} colors={["#d7e8e5", "#9fbecc"]} />
      </defs>
      <ellipse
        cx="180"
        cy="115"
        rx="138"
        ry="53"
        fill={`url(#${id}-commonPond)`}
        stroke={blue}
        strokeWidth="1.8"
      />
      {[0, 1, 2, 3, 4, 5].slice(0, step === 1 ? 2 : 6).map((i) => (
        <path
          key={i}
          d={`M${86 + i * 32} ${104 + (i % 2) * 28}q9-8 22 0-13 8-22 0l-7-5v10Z`}
          fill="#7397a3"
          stroke={blue}
        />
      ))}
      {step === 0 && (
        <Label x={180} y={184}>
          Ressource commune
        </Label>
      )}
      {step === 1 &&
        [70, 155, 242].map((x) => (
          <Arrow key={x} x1={x + 10} y1={92} x2={x} y2={62} color={rust} width={2} />
        ))}
      {step === 2 && (
        <>
          <path d="M183 70v92" stroke={teal} strokeWidth="2.3" strokeDasharray="4 4" />
          <Label x={180} y={185}>
            Règles partagées
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Plusieurs personnes partagent un stock",
            "Trop de prélèvements l’appauvrissent",
            "On peut organiser son usage ensemble",
          ][step]
        }
      </Rule>
    </>
  );
}

function Conformity(step: number) {
  return (
    <>
      <rect x="38" y="59" width="284" height="113" rx="7" fill="#e2eceb" stroke="#9db0b2" />
      <path d="M72 83v65" stroke={dark} strokeWidth="3.5" />
      {[139, 203, 267].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${[107, 83, 70][i]}v${[41, 65, 78][i]}`}
          stroke={step === 2 && i === 1 ? teal : dark}
          strokeWidth="3.5"
        />
      ))}
      {[139, 203, 267].map((x, i) => (
        <Label key={x} x={x} y={165}>
          {["A", "B", "C"][i]}
        </Label>
      ))}
      {step > 0 && (
        <>
          <Label x={175} y={188}>
            {step === 1 ? "Le groupe répond « C »" : "Une personne répond « B »"}
          </Label>
          <Marker x={step === 1 ? 267 : 203} y={63} color={step === 1 ? rust : teal} />
        </>
      )}
      <Rule>
        {
          [
            "Associer deux traits de même taille",
            "L’unanimité peut mettre sous pression",
            "Une voix différente change la situation",
          ][step]
        }
      </Rule>
    </>
  );
}

function TaskSwitch(step: number) {
  const lanes: [number, number, number, string][][] = [
    [
      [56, 111, 96, blue],
      [152, 111, 84, teal],
    ],
    [
      [56, 111, 48, blue],
      [104, 111, 42, teal],
      [146, 111, 48, blue],
      [194, 111, 42, teal],
    ],
    [
      [56, 111, 48, blue],
      [119, 111, 42, teal],
      [175, 111, 48, blue],
      [238, 111, 42, teal],
    ],
  ];
  return (
    <>
      <Line d="M49 151h264" color={steel} width={1.4} />
      <Arrow x1={287} y1={151} x2={315} y2={151} color={steel} width={1.5} />
      {(lanes[step] ?? []).map(([x, y, w, c]) => (
        <rect key={x} x={x} y={y} width={w} height="24" rx="3" fill={c} stroke={steel} />
      ))}
      {step === 2 &&
        [112, 168, 230].map((x) => (
          <path
            key={x}
            d={`M${x - 4} 108v30m8-30v30`}
            stroke={ochre}
            strokeWidth="1.6"
            strokeDasharray="3 3"
          />
        ))}
      <Label x={112} y={86} color={blue}>
        Tâche A
      </Label>
      <Label x={249} y={86} color={teal}>
        Tâche B
      </Label>
      <Label x={274} y={176}>
        Temps
      </Label>
      <Rule>
        {
          [
            "On peut traiter chaque tâche à la suite",
            "On peut alterner souvent les tâches",
            "Chaque bascule peut ajouter un délai",
          ][step]
        }
      </Rule>
    </>
  );
}

const balance = [1000, 1050, 1102.5];
function Compound(step: number) {
  return (
    <>
      <PlotGrid x={48} y={70} w={262} h={97} />
      {balance.slice(0, step + 1).map((value, i) => (
        <g key={i}>
          <rect x={70 + i * 81} y="94" width="54" height="73" fill="#a7bcc3" stroke={blue} />
          <path
            d={`M${70 + i * 81} 140l15-3 15 3 13-3 11 3`}
            fill="none"
            stroke="#f1f3ea"
            strokeWidth="3"
          />
          {i > 0 && (
            <rect x={70 + i * 81} y="71.5" width="54" height="22.5" fill="#caa973" stroke={ochre} />
          )}
          {i === 2 && (
            <rect
              x="232"
              y={94 - (value - 1000) * 0.45}
              width="54"
              height="23.625"
              fill="#b98d5d"
              stroke={ochre}
            />
          )}

          <Label x={97 + i * 81} y={188}>
            {["Départ", "An 1", "An 2"][i]}
          </Label>
        </g>
      ))}
      {step === 0 && (
        <Label x={210} y={119}>
          1 000 €
        </Label>
      )}
      {step === 1 && (
        <Label x={263} y={119}>
          + 50 €
        </Label>
      )}
      {step === 2 && (
        <Callout x={109} y={60} leader="M156 57l69 3">
          + 52,50 €
        </Callout>
      )}
      <Rule>
        {
          [
            "Point de départ fictif · 1 000 €",
            "À 5 %, le premier gain est de 50 €",
            "Les intérêts reportés portent intérêt",
          ][step]
        }
      </Rule>
    </>
  );
}

export const knowledge65: SceneSet = {
  algorithmCost: SearchCost,
  osResources: Scheduler,
  digitalArchives: DigitalPreservation,
  chipFabrication: Wafer,
  geostationary: Orbit,
  walkPendulum: Walking,
  lorenzCurve: Lorenz,
  accountingEntries: Accounts,
  externalCost: External,
  commonResource: Commons,
  groupConformity: Conformity,
  taskSwitching: TaskSwitch,
  compoundGrowth: Compound,
};
