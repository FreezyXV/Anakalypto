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
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
import { differentialRates } from "@/lib/lesson-visuals/explorations50-models";
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
  if (kind === "differentialturn") {
    const rates = differentialRates(2, 1);
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "La moyenne des sorties reste égale à 2" : "Pneus égaux, sans glissement"}
      >
        {s < 2 ? (
          <>
            {s === 0 ? (
              <>
                <path
                  d="M113 55v136m123-136v136"
                  stroke="#9aafba"
                  strokeWidth="16"
                  strokeDasharray="8 8"
                />
                <Arrow x1={113} y1={112} x2={113} y2={68} />
                <Arrow x1={236} y1={112} x2={236} y2={68} />
              </>
            ) : (
              <>
                <path
                  d="M126 182A80 80 0 0 0 102.5685 125.4315"
                  fill="none"
                  stroke={green}
                  strokeWidth="12"
                />
                <path
                  d="M236 182A190 190 0 0 0 180.3503 47.6497"
                  fill="none"
                  stroke={blue}
                  strokeWidth="12"
                />
                <circle cx="46" cy="182" r="4" fill={ink} />
                <path d="M46 182H236" stroke="#aebcc1" strokeDasharray="3 3" />
                <Label x={65} y={99}>
                  Int.
                </Label>
                <Label x={273} y={67}>
                  Ext.
                </Label>
              </>
            )}
            <path d="M123 169H236" stroke="#7791a6" strokeWidth="7" />
            <rect x="160" y="149" width="38" height="38" rx="8" fill="#b6c7d3" stroke="#6c879b" />
            {[123, 236].map((x) => (
              <rect key={x} x={x - 9} y="149" width="18" height="39" rx="5" fill="#445867" />
            ))}
            <Label x={180} y={198}>
              {s === 0 ? "Même distance" : "Distances différentes"}
            </Label>
          </>
        ) : (
          <>
            <circle cx="180" cy="120" r="39" fill="#c6d7df" stroke="#7694a6" strokeWidth="2" />
            <path d="M180 49v33M140 120H71m148 0h70" stroke="#6f879a" strokeWidth="9" />
            <Wheel x={57} y={121} r={25} />
            <Wheel x={303} y={121} r={25} angle={75} />
            <Arrow x1={180} y1={49} x2={180} y2={83} color={gold} />
            <Label x={231} y={61}>
              Entrée 2
            </Label>
            <Label x={180} y={126}>
              Diff.
            </Label>
            <Label x={62} y={182}>{`Sortie ${rates.inner}`}</Label>
            <Label x={297} y={182}>{`Sortie ${rates.outer}`}</Label>
            <Arrow x1={139} y1={120} x2={94} y2={120} />
            <Arrow x1={219} y1={120} x2={264} y2={120} />
          </>
        )}
      </ArtFrame>
    );
  }
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
