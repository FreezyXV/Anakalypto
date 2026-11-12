import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import {
  demandShiftExample,
  illustrativeDay,
  residualDemand,
  idealStorageHours,
} from "@/lib/lesson-visuals/energy29-models";
import { Arrow, Label, Rotor, Sun, blue, warm } from "./DrawingPrimitives";
import {
  Bolt,
  Foot,
  GridTower,
  House,
  Panel,
  Shaft,
  Tank,
  Title,
  WorkshopPaints,
} from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };
const points = (values: readonly number[]) =>
  values.map((v, i) => `${45 + i * 54},${155 - v * 1.35}`).join(" ");
function SolarPanel({ x, y, w, id }: { x: number; y: number; w: number; id: string }) {
  return (
    <g>
      <path
        d={`M${x + 9} ${y + 11}V173M${x + w - 12} ${y + 6}V173`}
        stroke="#9caeb3"
        strokeWidth="4"
      />
      <path
        d={`M${x} ${y}l${w - 12}-15 12 23-${w - 12} 15Z`}
        fill="#5b829f"
        stroke="#a0bdcc"
        strokeWidth="2"
      />
      {[1, 2, 3, 4].map((n) => (
        <path
          key={n}
          d={`M${x + ((w - 12) * n) / 5} ${y - (15 * n) / 5}l12 23`}
          stroke="#bdd2dc"
          strokeWidth=".8"
        />
      ))}
      <path d={`M${x + 6} ${y + 11.5}l${w - 12}-15`} stroke="#adc9d7" strokeWidth="1" />
      <circle cx={x + 10} cy={y + 31} r="2.5" fill={`url(#${id}-metal)`} />
    </g>
  );
}
function Sprout({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0V-23" stroke="#6c8d5d" strokeWidth="2" />
      <path
        d="M0-11Q-17-26-19-13Q-12-8 0-9M0-15Q18-29 18-16Q10-10 0-13"
        fill="#88ac71"
        stroke="#6a8b56"
        strokeWidth="1"
      />
    </g>
  );
}
function BatteryCabinet({ x, y, id }: { x: number; y: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0l17-9h80L80 0Z" fill="#e2eaf0" stroke="#96aab7" />
      <path d="M80 0l17-9v67L80 67Z" fill="#afbfca" stroke="#96aab7" />
      <rect
        width="80"
        height="67"
        rx="3"
        fill={`url(#${id}-metal)`}
        stroke="#91a6b6"
        strokeWidth="1.5"
      />
      <path d="M40 3V64M5 8h29M45 8h29M5 53h29M45 53h29M5 57h29M45 57h29" stroke="#9fb0ba" />
      <path d="M34 27v14M46 27v14" stroke="#7c919f" strokeWidth="2.5" />
      <Bolt x={21} y={31} size={0.6} />
      <Bolt x={62} y={31} size={0.6} />
    </g>
  );
}
export function GridStorageDrawing({ kind, step, id }: Props) {
  if (
    ![
      "duckcurve",
      "gridcascade",
      "demandshift",
      "agrivoltaic",
      "compressedair",
      "gridbattery",
    ].includes(kind)
  )
    return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "duckcurve" ? (
        <>
          <Title>
            {
              [
                "La demande d’une journée fictive",
                "Superposer le solaire",
                "Demande moins solaire",
              ][step]
            }
          </Title>
          <path d="M43 63V155H325" stroke="#8b9da9" fill="none" strokeWidth="1.5" />
          {[20, 40, 60].map((v) => (
            <path key={v} d={`M43 ${155 - v * 1.35}H323`} stroke="#dae4eb" strokeDasharray="3 4" />
          ))}
          {step > 0 && (
            <polygon
              points={`45,155 ${points(illustrativeDay.solar)} 315,155`}
              fill="#f1d482"
              opacity=".6"
            />
          )}
          <polyline
            points={points(illustrativeDay.demand)}
            stroke={blue}
            strokeWidth="3"
            fill="none"
          />
          {step > 0 && (
            <polyline
              points={points(illustrativeDay.solar)}
              stroke="#b38e2d"
              strokeWidth="2.5"
              fill="none"
            />
          )}
          {step === 2 && (
            <polyline
              points={points(residualDemand(illustrativeDay.demand, illustrativeDay.solar))}
              stroke={warm}
              strokeWidth="3"
              fill="none"
            />
          )}
          <Label x={87} y={52} color={blue}>
            Demande
          </Label>
          {step > 0 && (
            <Label x={204} y={52} color="#9b7c2a">
              Solaire
            </Label>
          )}
          {step === 2 && (
            <Label x={289} y={52} color={warm}>
              Reste
            </Label>
          )}
          {[0, 2, 4, 5].map((i) => (
            <Label key={i} x={45 + i * 54} y={178}>
              {illustrativeDay.hours[i]} h
            </Label>
          ))}
          <Foot>Puissances en unités arbitraires</Foot>
        </>
      ) : null}
      {kind === "demandshift" ? (
        <>
          <Title>
            {
              [
                "Un usage ajouté le soir",
                "Un signal pour décaler l’usage",
                "Même énergie, un autre créneau",
              ][step]
            }
          </Title>
          {step === 1 ? (
            <>
              <Panel x={31} y={75} w={70} h={82}>
                <rect x="44" y="89" width="44" height="25" rx="3" fill="#abc8d4" stroke="#7e9ba8" />
                <Bolt x={66} y={134} size={0.65} />
              </Panel>
              <path d="M112 109H209" stroke={warm} strokeDasharray="5 5" strokeWidth="2.5" />
              <Arrow x1={183} y1={109} x2={207} y2={109} color={warm} dashed />
              <Tank x={243} y={77} w={56} h={80} color="#a5c2d3" id={id} />
              <path d="M264 103q-9 5 0 10t0 10t0 10" fill="none" stroke={warm} strokeWidth="3" />
              <Label x={66} y={177}>
                Commande
              </Label>
              <Label x={270} y={178}>
                Chauffe-eau
              </Label>
              <circle cx="158" cy="66" r="18" fill="#f7f2e5" stroke="#b1a389" />
              <path d="M158 54V66L169 71" stroke="#9a7d55" fill="none" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M48 66V155H316" stroke="#91a4b1" fill="none" />
              {(step === 0 ? demandShiftExample.before : demandShiftExample.after).map((v, i) => (
                <g key={i}>
                  {step === 2 && (
                    <rect
                      x={81 + i * 92}
                      y={155 - demandShiftExample.before[i]! * 17}
                      width="46"
                      height={demandShiftExample.before[i]! * 17}
                      fill="none"
                      stroke="#b9a992"
                      strokeDasharray="4 4"
                    />
                  )}
                  <rect
                    x={85 + i * 92}
                    y={155 - v * 17}
                    width="38"
                    height={v * 17}
                    rx="3"
                    fill="#b1c4d2"
                  />
                  {v > demandShiftExample.base[i]! && (
                    <rect
                      x={85 + i * 92}
                      y={155 - v * 17}
                      width="38"
                      height={(v - demandShiftExample.base[i]!) * 17}
                      rx="3"
                      fill={warm}
                    />
                  )}
                  <Label x={104 + i * 92} y={149 - v * 17}>
                    {v}
                  </Label>
                  <Label x={104 + i * 92} y={178}>
                    {["Matin", "Midi", "Soir"][i]}
                  </Label>
                </g>
              ))}
              <Label x={180} y={53}>
                kWh par créneau
              </Label>
            </>
          )}
          <Foot>
            {step === 1 ? "Pointillés = information" : "Exemple fictif · total de 10 kWh"}
          </Foot>
        </>
      ) : null}
      {kind === "agrivoltaic" ? (
        <>
          <Title>
            {
              [
                "Une parcelle, deux productions",
                "Une ombre partielle",
                "Une autre répartition de lumière",
              ][step]
            }
          </Title>
          <Sun x={43} y={57} id={id} r={17} />
          <path d="M19 172Q180 166 341 172V187H19Z" fill="#d7d1ad" stroke="#b8b18d" />
          {step > 0 &&
            [34, 142, 250].map((x) => (
              <path
                key={x}
                d={`M${x + 5} 172l${step === 2 ? 54 : 80} 0 20-13-${step === 2 ? 54 : 80} 0Z`}
                fill="#8197a8"
                opacity=".23"
              />
            ))}
          {[36, 144, 252].map((x) => (
            <SolarPanel key={x} x={x} y={94} w={step === 2 ? 64 : 87} id={id} />
          ))}
          {[52, 88, 157, 197, 266, 306].map((x) => (
            <Sprout key={x} x={x} y={174} />
          ))}
          {step === 0 ? (
            <>
              <Bolt x={329} y={125} size={0.7} />
              <Arrow x1={309} y1={113} x2={326} y2={113} />
            </>
          ) : (
            <>
              <Arrow x1={115} y1={55} x2={151} y2={145} color="#b29a3a" width={2} />
              <Arrow x1={226} y1={55} x2={246} y2={145} color="#b29a3a" width={2} />
            </>
          )}
          <Foot>
            {step === 0
              ? "Cultiver sous des panneaux surélevés"
              : "Pas de rendement agricole garanti"}
          </Foot>
        </>
      ) : null}
      {kind === "gridcascade" ? (
        <>
          <Title>
            {
              [
                "Deux liaisons disponibles",
                "Une liaison perdue, un report",
                "Délester une branche",
              ][step]
            }
          </Title>
          <circle cx="47" cy="117" r="24" fill={`url(#${id}-metal)`} stroke="#9bafbd" />
          <Bolt x={47} y={117} />
          <path
            d="M71 116L143 77M71 119L143 150M159 77V150M175 77H265M175 150H265"
            stroke={step === 1 ? warm : blue}
            strokeWidth={step === 1 ? 4 : 3}
            fill="none"
          />
          {step > 0 && (
            <>
              <path d="M75 112L136 81" stroke="#f7fafc" strokeWidth="9" />
              <path d="M75 112L136 81" stroke="#a7b6c2" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M96 83L116 110M96 110L116 83" stroke={warm} strokeWidth="3" />
            </>
          )}
          {[77, 150].map((y) => (
            <g key={y}>
              <rect
                x="143"
                y={y - 12}
                width="32"
                height="24"
                rx="5"
                fill={`url(#${id}-metal)`}
                stroke="#8da4b6"
              />
              <path d={`M149 ${y}h20`} stroke="#8096a7" strokeWidth="3" />
            </g>
          ))}
          <g opacity={step === 2 ? 0.3 : 1}>
            <House x={294} y={64} scale={0.58} id={id} />
          </g>
          <House x={294} y={137} scale={0.58} id={id} />
          {step === 1 && (
            <>
              <path d="M205 95l-11 20h22Z" fill="#e3b368" stroke="#b18549" />
              <Label x={205} y={111}>
                !
              </Label>
              <Label x={131} y={184} color={warm}>
                Contraintes reportées
              </Label>
            </>
          )}
          {step === 2 && (
            <>
              <path d="M215 77H242" stroke="#f6fafb" strokeWidth="9" />
              <path d="M217 77l18-14" stroke={warm} strokeWidth="3" />
              <Label x={211} y={57}>
                Coupure ciblée
              </Label>
            </>
          )}
          <Foot>Réseau fictif · pas de calcul de flux</Foot>
        </>
      ) : null}
      {kind === "compressedair" ? (
        <>
          <Title>
            {["Comprimer l’air", "Conserver l’air et la chaleur", "Réchauffer puis détendre"][step]}
          </Title>
          <path d="M18 132Q180 126 342 132V190H18Z" fill="#d9d0bb" stroke="#bcb096" />
          {[143, 153, 166, 181].map((y) => (
            <path
              key={y}
              d={`M20 ${y}q78-4 132 1t187 0`}
              fill="none"
              stroke="#c1b59d"
              strokeWidth="1"
            />
          ))}
          <path
            d="M72 148Q180 134 287 148V174Q180 189 72 174Z"
            fill="#cfdfeb"
            stroke="#869caf"
            strokeWidth="2"
          />
          {Array.from({ length: step === 0 ? 10 : step === 1 ? 22 : 9 }, (_, i) => (
            <circle
              key={i}
              cx={84 + (i % 12) * 17}
              cy={154 + Math.floor(i / 12) * 15}
              r="2.2"
              fill="#7e9eb5"
            />
          ))}
          <g opacity={step === 2 ? 0.4 : 1}>
            <circle cx="48" cy="95" r="16" fill={`url(#${id}-metal)`} stroke="#9aaebc" />
            <Bolt x={48} y={95} size={0.65} />
            <Shaft d="M64 95H77" width={5} />
            <path d="M78 78H105L117 108H78Z" fill={`url(#${id}-metal)`} stroke="#8ea5b6" />
            <path d="M117 95H135V146" fill="none" stroke={blue} strokeWidth="3" />
          </g>
          <Tank x={161} y={55} w={44} h={48} color="#d6a46b" id={id} />
          <path
            d="M137 94H160M205 94H239"
            stroke={warm}
            strokeWidth="3"
            strokeDasharray={step === 1 ? "4 3" : undefined}
          />
          <path
            d={step === 2 ? "M252 146V126H239V91H265" : "M252 146V115H265"}
            fill="none"
            stroke={step === 2 ? blue : "#a8b9c5"}
            strokeWidth="3"
          />
          {step === 2 && (
            <>
              <rect
                x="227"
                y="80"
                width="25"
                height="39"
                rx="4"
                fill={`url(#${id}-metal)`}
                stroke="#8b9fac"
              />
              <path d="M232 83q9 5 0 9t0 9t0 9" fill="none" stroke={warm} strokeWidth="2" />
              <path d="M239 119V91H265" fill="none" stroke={blue} strokeWidth="2" />
              <Label x={259} y={75}>
                Échangeur
              </Label>
            </>
          )}
          <Rotor x={281} y={99} r={18} id={id} angle={step * 25} />
          <Shaft d="M299 99H313" width={4} />
          <circle cx="326" cy="99" r="12" fill={`url(#${id}-metal)`} stroke="#8ca2b2" />
          <Bolt x={326} y={99} size={0.5} />
          <Label x={182} y={47} color={warm}>
            Chaleur
          </Label>
          <Label x={180} y={174}>
            Air sous pression
          </Label>
          {step === 0 ? (
            <Arrow x1={135} y1={110} x2={135} y2={140} />
          ) : step === 1 ? (
            <>
              <path d="M124 123h22M129 118l12 10" stroke="#ab825c" strokeWidth="2.5" />
              <path d="M241 123h22M246 118l12 10" stroke="#ab825c" strokeWidth="2.5" />
            </>
          ) : (
            <>
              <Arrow x1={252} y1={139} x2={252} y2={118} />
              <Arrow x1={210} y1={94} x2={237} y2={94} color={warm} />
              <Arrow x1={325} y1={83} x2={325} y2={61} />
            </>
          )}
          <Foot>Variante adiabatique simplifiée</Foot>
        </>
      ) : null}
      {kind === "gridbattery" ? (
        <>
          <Title>
            {
              [
                "Absorber de l’énergie du réseau",
                "Restituer vers le réseau",
                "Une puissance et une capacité",
              ][step]
            }
          </Title>
          {step < 2 ? (
            <>
              <BatteryCabinet x={41} y={99} id={id} />
              <Panel x={177} y={103} w={44} h={59}>
                <path
                  d="M185 118h28M185 124h28M184 146q5-12 10 0t18 0"
                  stroke="#7b97ac"
                  strokeWidth="2"
                  fill="none"
                />
              </Panel>
              <path d="M138 128H177M221 128H269" stroke={blue} strokeWidth="3" />
              <GridTower x={296} y={116} size={0.8} />
              {step === 0 ? (
                <>
                  <Arrow x1={260} y1={82} x2={202} y2={82} />
                  <Arrow x1={187} y1={82} x2={123} y2={82} />
                </>
              ) : (
                <>
                  <Arrow x1={124} y1={82} x2={188} y2={82} />
                  <Arrow x1={203} y1={82} x2={264} y2={82} />
                </>
              )}
              <Label x={86} y={183}>
                Batteries
              </Label>
              <Label x={285} y={181}>
                Réseau
              </Label>
              <Label x={195} y={61}>
                Convertisseur
              </Label>
            </>
          ) : (
            <>
              <rect
                x="48"
                y="80"
                width="115"
                height="72"
                rx="9"
                fill={`url(#${id}-metal)`}
                stroke="#90a7b7"
                strokeWidth="2"
              />
              <rect x="163" y="99" width="9" height="33" rx="2" fill="#7d98ae" />
              {[0, 1, 2, 3].map((n) => (
                <rect key={n} x={58 + n * 24} y="90" width="18" height="52" rx="3" fill="#88aa89" />
              ))}
              <Label x={106} y={176}>
                4 MWh
              </Label>
              <Arrow x1={184} y1={107} x2={271} y2={107} />
              <Label x={233} y={87}>
                2 MW
              </Label>
              <circle cx="288" cy="149" r="25" fill="#f3eedf" stroke="#b7a88b" strokeWidth="2" />
              <path d="M288 127V149L303 158" fill="none" stroke="#a0804d" strokeWidth="2" />
              <Label x={234} y={173}>
                {idealStorageHours(4, 2)} h
              </Label>
            </>
          )}
          <Foot>
            {step === 0
              ? "Stockage sous forme chimique"
              : step === 1
                ? "Dans les limites du système"
                : "4 MWh ÷ 2 MW = 2 h · cas idéal"}
          </Foot>
        </>
      ) : null}
    </>
  );
}
