import { chassisPlates } from "./refined/transport/chassis";
import { automotivePlates } from "./refined/transport/automotive";
import {
  ArtFrame,
  Arrow,
  Label,
  Wheel,
  Heat,
  Drop,
  blue,
  green,
  gold,
  red,
  type DrawingProps,
} from "./Exploration50Parts";
export function AutoControl50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "enginecoolant")
    return (
      <ArtFrame
        {...p}
        foot={s === 0 ? "Une petite boucle reste active" : "Le liquide transporte, l’air évacue"}
      >
        <path
          d="M125 166V78H279V166H125M188 78V166"
          stroke="#b5c3cc"
          strokeWidth="13"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d={s === 0 ? "M125 166V78H188V166H125" : "M125 166V78H279V166H125"}
          stroke={s === 0 ? gold : red}
          strokeWidth="6"
          fill="none"
          strokeLinejoin="round"
        />
        <rect x="89" y="93" width="75" height="53" rx="7" fill="#b3c4cf" stroke="#6a8599" />
        <path d="M122 99v39m-20-37v35m45-35v35" stroke="#d6e5ec" strokeWidth="3" />
        <Heat x={125} y={137} />
        <circle cx="125" cy="166" r="16" fill="#94b4c7" stroke={blue} />
        <path d="M116 169q6-15 14 0t-4-12" stroke={blue} fill="none" strokeWidth="2" />
        <rect x="258" y="88" width="43" height="68" rx="4" fill="#cadce3" stroke="#7292a5" />
        {Array.from({ length: 7 }, (_, i) => (
          <path key={i} d={`M${262 + i * 5} 92v61`} stroke="#8ea9b6" strokeWidth="2" />
        ))}
        <circle cx="188" cy="78" r="11" fill="#ecdbab" stroke={gold} />
        <path
          d={s === 0 ? "M188 68v20" : "M178 78h20"}
          stroke={s === 0 ? red : green}
          strokeWidth="4"
        />
        <Label x={153} y={55}>
          Thermostat
        </Label>
        <Label x={76} y={199}>
          Pompe
        </Label>
        <Label x={265} y={199}>
          Radiateur
        </Label>
        <Arrow x1={125} y1={115} x2={125} y2={86} color={s === 0 ? gold : red} />
        {s > 0 && (
          <>
            <Arrow x1={227} y1={166} x2={174} y2={166} />
            <Arrow x1={225} y1={78} x2={258} y2={78} color={red} />
          </>
        )}
        {s === 2 && (
          <>
            <Arrow x1={244} y1={110} x2={326} y2={110} />
            <Arrow x1={244} y1={139} x2={326} y2={139} />
          </>
        )}
      </ArtFrame>
    );
  if (kind === "differentialturn") return chassisPlates.differentialturn(s, p.id);
  if (kind === "abscontrol")
    return (
      <ArtFrame {...p} foot="Commande pointillée · pression en bleu">
        <Wheel x={80} y={139} r={33} angle={s === 1 ? 20 : 65} />
        <rect x="101" y="121" width="12" height="29" rx="3" fill={red} />
        <rect x="68" y="65" width="28" height="15" rx="3" fill="#d9c38c" stroke={gold} />
        <path d="M82 82v20" stroke={gold} strokeDasharray="3 3" strokeWidth="2" />
        <rect x="213" y="58" width="99" height="46" rx="7" fill="#c4d6e2" stroke="#6b899f" />
        <Label x={263} y={86}>
          Calculateur
        </Label>
        <rect x="232" y="132" width="62" height="34" rx="5" fill="#b4cad6" stroke="#65889b" />
        <Label x={263} y={155}>
          Vanne
        </Label>
        <Arrow x1={102} y1={73} x2={206} y2={73} color={gold} dashed />
        <Arrow x1={263} y1={106} x2={263} y2={128} color={gold} dashed />
        <path d="M231 150H140V136H114" fill="none" stroke={blue} strokeWidth={s === 1 ? 3 : 7} />
        <Arrow x1={208} y1={150} x2={154} y2={150} />
        <Label x={79} y={195}>
          Roue
        </Label>
        <Label x={252} y={195}>
          {s === 0 ? "Mesure" : s === 1 ? "Pression réduite" : "Pression modulée"}
        </Label>
      </ArtFrame>
    );
  if (kind === "discbrake") return automotivePlates.discbrake(p.step, p.id);
  if (kind === "engineoil")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "Circuit de lubrification simplifié" : "Reliefs et épaisseur fortement agrandis"
        }
      >
        {s < 2 ? (
          <>
            <path
              d="M38 68H322V106l-24 3-22-8-22 11-22-8-22 10-22-7-22 9-22-6-22 9-22-6-22 9-18-10-24 7Z"
              fill="#b5c7d3"
              stroke="#718da1"
            />
            <path
              d={`M38 ${s === 0 ? 121 : 145}l24-7 18 10 22-9 22 6 22-9 22 6 22-9 22 7 22-10 22 8 22-11 22 8 24-3V185H38Z`}
              fill="#b5c7d3"
              stroke="#718da1"
            />
            {s === 1 && (
              <path
                d="M38 121q60-10 142-6t142-6v24q-80-1-147 6T38 145Z"
                fill="#d7b85d"
                opacity=".8"
              />
            )}
            <Arrow x1={49} y1={53} x2={131} y2={53} />
            <Arrow x1={308} y1={198} x2={226} y2={198} />
            {s === 0 ? (
              <>
                <circle cx="79" cy="120" r="9" fill="#bd6b57" opacity=".5" />
                <Label x={241} y={160}>
                  Contacts
                </Label>
              </>
            ) : (
              <>
                <Drop x={70} y={152} color={gold} />
                <Label x={238} y={165}>
                  Film d’huile
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <path
              d="M56 165H302V73H73V165"
              fill="none"
              stroke="#d1ad51"
              strokeWidth="9"
              strokeLinejoin="round"
            />
            <path d="M47 157v32h100v-32" fill="#e2c27b" stroke="#7b887f" strokeWidth="3" />
            <circle cx="72" cy="121" r="18" fill="#b7ccda" stroke={blue} />
            <rect x="154" y="56" width="39" height="37" rx="6" fill="#cad8de" stroke="#7493a4" />
            <path d="M161 62l25 25m-25-12 13 13m-3-25 15 13" stroke="#8da4ad" />
            <rect x="255" y="100" width="69" height="45" rx="6" fill="#b5c7d3" stroke="#6c8598" />
            <Arrow x1={76} y1={76} x2={136} y2={76} color={gold} />
            <Arrow x1={300} y1={151} x2={300} y2={171} color={gold} />
            <Label x={173} y={48}>
              Filtre
            </Label>
            <Label x={96} y={199}>
              Carter
            </Label>
            <Label x={269} y={205}>
              Surfaces
            </Label>
          </>
        )}
      </ArtFrame>
    );
  return null;
}
