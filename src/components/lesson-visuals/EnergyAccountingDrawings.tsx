import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import {
  energyWh,
  reboundFraction,
  energyChainExample as e,
} from "@/lib/lesson-visuals/energy29-models";
import { Arrow, Label, Lamp, blue, warm, green } from "./DrawingPrimitives";
import { Foot, House, Title, WorkshopPaints } from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function EnergyAccountingDrawing({ kind, step, id }: Props) {
  if (!["rebound", "energychain"].includes(kind)) return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "rebound" ? (
        <>
          <Title>
            {
              [
                "Avant : une lampe de 60 W",
                "Après : 10 W au même usage",
                "Si la durée devient plus longue",
              ][step]
            }
          </Title>
          <Lamp x={80} y={89} active id={id} />
          <circle cx="81" cy="149" r="22" fill="#f4efdf" stroke="#b6a58a" strokeWidth="2" />
          <path
            d={`M81 131V149L${step === 2 ? "64 156" : "92 154"}`}
            stroke="#9d7b4d"
            strokeWidth="2"
            fill="none"
          />
          <Label x={80} y={185}>
            {step === 2 ? "3 heures" : "1 heure"}
          </Label>
          <path d="M148 66V165H319" fill="none" stroke="#9caebb" />
          {[60, 10, 30].slice(0, step + 1).map((v, i) => (
            <g key={i}>
              <rect
                x={165 + i * 52}
                y={165 - v * 1.35}
                width="33"
                height={v * 1.35}
                rx="4"
                fill={[blue, green, warm][i]}
              />
              <Label x={181 + i * 52} y={157 - v * 1.35}>
                {energyWh(i === 0 ? 60 : 10, i === 2 ? 3 : 1)}
              </Label>
            </g>
          ))}
          <Label x={234} y={185}>
            Énergie · Wh
          </Label>
          <Foot>
            {step === 2
              ? `${reboundFraction(60, 10, 30) * 100} % du gain attendu repris ici`
              : "Exemple fictif · même lumière supposée"}
          </Foot>
        </>
      ) : null}
      {kind === "energychain" ? (
        <>
          <Title>
            {
              ["L’énergie du combustible", "La livraison à l’usager", "Le service vraiment rendu"][
                step
              ]
            }
          </Title>
          <path d="M35 69H197V97H90V149H35Z" fill={blue} opacity=".8" />
          <path
            d="M90 97Q136 97 162 143V163H110V149Q110 149 90 149Z"
            fill={step > 0 ? "#d0a16e" : "#d3dce2"}
            stroke="#b7b2a4"
          />
          <path d="M197 69H326V91.4H245V97H197Z" fill={step === 2 ? green : "#c8d6df"} />
          <path
            d="M245 91.4Q271 91.4 271 117V129H265.4V117Q265.4 97 245 97Z"
            fill={step === 2 ? warm : "#d7dfe4"}
          />
          <Label x={67} y={56}>
            {e.primary}
          </Label>
          <Label x={179} y={56}>
            {step > 0 ? e.final : "—"}
          </Label>
          <Label x={301} y={56}>
            {step === 2 ? e.useful : "—"}
          </Label>
          <Label x={69} y={183}>
            Primaire
          </Label>
          <Label x={181} y={183}>
            Finale
          </Label>
          <Label x={296} y={183}>
            Utile
          </Label>
          {step > 0 && (
            <>
              <Label x={147} y={150}>
                {e.conversionLoss}
              </Label>
              <Label x={157} y={125}>
                Pertes
              </Label>
            </>
          )}
          {step === 2 && (
            <Label x={262} y={150}>
              {e.useLoss}
            </Label>
          )}
          {step === 0 && (
            <>
              <path d="M47 112l17-10 16 12-11 21H49Z" fill="#5d6062" stroke="#424e59" />
              <path d="M53 115l12-4 8 5" stroke="#939a9d" fill="none" />
            </>
          )}
          {step === 1 && <Arrow x1={182} y1={107} x2={182} y2={161} />}{" "}
          {step === 2 && <House x={302} y={139} id={id} scale={0.47} />}
          <Foot>
            {step === 2
              ? "65 + 7 + 28 = 100 unités fictives"
              : "Bilan fictif, pas un coefficient DPE"}
          </Foot>
        </>
      ) : null}
    </>
  );
}
