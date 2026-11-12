import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
import { Arrow, Label, Lamp, blue, warm, ink } from "./DrawingPrimitives";
import { Bolt, Foot, Heat, Tank, Title, WorkshopPaints } from "./Energy29Parts";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Molecule({ x, y, kind }: { x: number; y: number; kind: "hydrogen" | "oxygen" | "water" }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {kind === "water" ? (
        <>
          <path d="M0 0L-10 9M0 0L10 9" stroke="#91a9b9" strokeWidth="3" />
          <circle r="8" fill="#c77c62" />
          <circle cx="-10" cy="9" r="5" fill="#edf3f7" stroke="#93aabc" />
          <circle cx="10" cy="9" r="5" fill="#edf3f7" stroke="#93aabc" />
        </>
      ) : (
        <>
          <path d="M-5 0H5" stroke="#91a9b9" strokeWidth="3" />
          {[-6, 6].map((v) => (
            <circle
              key={v}
              cx={v}
              r={kind === "oxygen" ? 7 : 5}
              fill={kind === "oxygen" ? "#c77c62" : "#d9e9f1"}
              stroke={kind === "oxygen" ? "#a96750" : "#8faabc"}
            />
          ))}
        </>
      )}
    </g>
  );
}
export function ElectrochemicalDrawing({ kind, step, id }: Props) {
  if (!["leadacid", "electrolyser", "voltapile", "fuelcell", "flowbattery"].includes(kind))
    return null;
  return (
    <>
      <WorkshopPaints id={id} />
      {kind === "leadacid" ? (
        <>
          <Title>
            {
              [
                "Deux matériaux, un électrolyte",
                "Des électrons dans le circuit",
                "Fournir l’énergie de recharge",
              ][step]
            }
          </Title>
          <path
            d="M69 92V169Q180 185 291 169V92"
            fill={`url(#${id}-water)`}
            fillOpacity=".45"
            stroke="#8aa5b7"
            strokeWidth="2"
          />
          <rect
            x="111"
            y="89"
            width="29"
            height="74"
            rx="3"
            fill={step === 1 ? "#d8d5bc" : "#7e8b96"}
            stroke="#6c8395"
            strokeWidth="2"
          />
          <rect
            x="222"
            y="89"
            width="29"
            height="74"
            rx="3"
            fill={step === 1 ? "#d8d5bc" : "#94745d"}
            stroke="#796650"
            strokeWidth="2"
          />
          <rect
            x="175"
            y="96"
            width="10"
            height="67"
            fill="#e6e8e0"
            stroke="#b2c2c3"
            strokeDasharray="2 3"
          />
          <path
            d="M125 89V59H160M202 59H236V89"
            fill="none"
            stroke={step === 0 ? "#9aabb8" : blue}
            strokeWidth="2.5"
          />
          {step === 2 ? (
            <>
              <rect x="158" y="44" width="45" height="31" rx="6" fill="#e8ded0" stroke="#a48e6e" />
              <Bolt x={181} y={60} size={0.65} />
              <Arrow x1={158} y1={59} x2={132} y2={59} />
              <Arrow x1={231} y1={59} x2={205} y2={59} />
            </>
          ) : (
            <>
              <Lamp x={181} y={59} active={step === 1} id={id} />
              {step === 1 && (
                <>
                  <Arrow x1={133} y1={59} x2={158} y2={59} />
                  <Arrow x1={204} y1={59} x2={231} y2={59} />
                </>
              )}
            </>
          )}
          <Label x={95} y={86}>
            −
          </Label>
          <Label x={268} y={86}>
            +
          </Label>
          <Label x={125} y={153}>
            {step === 1 ? "PbSO₄" : "Pb"}
          </Label>
          <Label x={236} y={153}>
            {step === 1 ? "PbSO₄" : "PbO₂"}
          </Label>
          {step === 1 && (
            <Label x={180} y={191}>
              Électrolyte moins concentré
            </Label>
          )}
          {step !== 1 && (
            <Foot>
              {step === 2
                ? "Réactions inversées par le chargeur"
                : "Une cellule au plomb simplifiée"}
            </Foot>
          )}
        </>
      ) : null}
      {kind === "electrolyser" ? (
        <>
          <Title>
            {
              [
                "Une alimentation, une cellule PEM",
                "Protons et électrons séparés",
                "Deux gaz, des sorties distinctes",
              ][step]
            }
          </Title>
          <rect
            x="104"
            y="91"
            width="153"
            height="78"
            rx="10"
            fill="#dfeaf0"
            stroke="#9ab0bf"
            strokeWidth="2"
          />
          <rect x="116" y="99" width="12" height="62" fill="#ad8265" />
          <rect x="232" y="99" width="12" height="62" fill="#6489a7" />
          <rect x="175" y="96" width="11" height="68" fill="#eed2a5" stroke="#c6a36a" />
          <path d="M122 99V63H150M210 63H238V99" fill="none" stroke={blue} strokeWidth="2.5" />
          <rect
            x="149"
            y="47"
            width="62"
            height="31"
            rx="6"
            fill={`url(#${id}-metal)`}
            stroke="#9caab0"
          />
          <Bolt x={180} y={63} size={0.66} />
          <Label x={129} y={54}>
            +
          </Label>
          <Label x={234} y={54}>
            −
          </Label>
          <Arrow x1={41} y1={153} x2={112} y2={153} color={blue} />
          <Label x={62} y={178}>
            Eau
          </Label>
          {step > 0 && (
            <>
              <Arrow x1={129} y1={126} x2={228} y2={126} color={warm} />
              <Label x={157} y={116} color={warm}>
                H⁺
              </Label>
              <Arrow x1={129} y1={63} x2={146} y2={63} />
              <Arrow x1={213} y1={63} x2={233} y2={63} />
              <Label x={181} y={184}>
                Membrane
              </Label>
            </>
          )}
          <path d="M116 112H78M244 112H283" fill="none" stroke="#98b6c8" strokeWidth="3" />
          <Label x={56} y={92}>
            O₂
          </Label>
          <Label x={303} y={92}>
            H₂
          </Label>
          {step === 2 ? (
            <>
              <Molecule x={59} y={113} kind="oxygen" />
              <Molecule x={296} y={108} kind="hydrogen" />
              <Molecule x={318} y={128} kind="hydrogen" />
            </>
          ) : (
            <>
              <path d="M78 113l-11-4 5 11M283 113l11-4-5 11" fill={blue} />
            </>
          )}
          <Foot>{step === 2 ? "2 H₂O → 2 H₂ + O₂" : "Les gaz ne sont pas mélangés"}</Foot>
        </>
      ) : null}
      {kind === "fuelcell" ? (
        <>
          <Title>
            {
              [
                "Hydrogène et oxygène à l’entrée",
                "Deux chemins pour les charges",
                "Former l’eau et libérer l’énergie",
              ][step]
            }
          </Title>
          <rect
            x="104"
            y="88"
            width="153"
            height="82"
            rx="10"
            fill="#e4ebef"
            stroke="#9ab0bf"
            strokeWidth="2"
          />
          <rect x="116" y="96" width="12" height="66" fill="#6489a7" />
          <rect x="232" y="96" width="12" height="66" fill="#ad8265" />
          <rect x="175" y="94" width="11" height="69" fill="#eed2a5" stroke="#c6a36a" />
          <path
            d="M122 97V60H160M202 60H238V97"
            stroke={step ? blue : "#9cabb3"}
            fill="none"
            strokeWidth="2.5"
          />
          <Lamp x={181} y={60} id={id} active={step > 0} />
          <Label x={99} y={82}>
            −
          </Label>
          <Label x={261} y={82}>
            +
          </Label>
          <Molecule x={55} y={110} kind="hydrogen" />
          <Molecule x={305} y={110} kind="oxygen" />
          <Label x={54} y={93}>
            H₂
          </Label>
          <Label x={303} y={92}>
            O₂
          </Label>
          <Arrow x1={77} y1={111} x2={113} y2={111} />
          <Arrow x1={285} y1={111} x2={248} y2={111} color={warm} />
          {step > 0 && (
            <>
              <Arrow x1={130} y1={129} x2={227} y2={129} color={warm} />
              <Label x={158} y={118} color={warm}>
                H⁺
              </Label>
              <Arrow x1={129} y1={60} x2={156} y2={60} />
              <Arrow x1={206} y1={60} x2={234} y2={60} />
            </>
          )}
          {step === 2 ? (
            <>
              <Arrow x1={247} y1={152} x2={290} y2={152} />
              <Molecule x={310} y={152} kind="water" />
              <Heat x={133} y={180} count={2} />
              <Label x={76} y={176} color={warm}>
                Chaleur
              </Label>
            </>
          ) : (
            <Label x={180} y={184}>
              Membrane PEM
            </Label>
          )}
          <Foot>
            {step === 0
              ? "Apporter les réactifs"
              : step === 1
                ? "Électrons dans le fil extérieur"
                : "Eau + chaleur, sans flamme"}
          </Foot>
        </>
      ) : null}
      {kind === "voltapile" ? (
        <>
          <Title>
            {
              [
                "Deux métaux et un tissu humide",
                "Des étages dans le même sens",
                "Un circuit fermé, une pile qui s’use",
              ][step]
            }
          </Title>
          {step === 0 ? (
            <>
              {[0, 1, 2].map((n) => {
                const y = 151 - n * 31,
                  fill = n === 0 ? `url(#${id}-metal)` : n === 1 ? "#e7dbad" : `url(#${id}-copper)`;
                return (
                  <g key={n}>
                    <path
                      d={`M129 ${y}V${y + 8}Q180 ${y + 21} 231 ${y + 8}V${y}Z`}
                      fill={fill}
                      stroke="#9c9a8a"
                    />
                    <ellipse cx="180" cy={y} rx="51" ry="11" fill={fill} stroke="#9c9a8a" />
                  </g>
                );
              })}
              <Label x={79} y={94}>
                Cuivre
              </Label>
              <Label x={75} y={126}>
                Tissu
              </Label>
              <Label x={77} y={159}>
                Zinc
              </Label>
              <path d="M109 91L132 89M103 123L130 120M103 156L132 151" stroke={ink} />
            </>
          ) : (
            <>
              <path d="M134 171H226M142 171V177M218 171V177" stroke="#a58d69" strokeWidth="5" />
              {Array.from({ length: 12 }, (_, n) => {
                const y = 157 - n * 9,
                  fill =
                    n % 3 === 0
                      ? `url(#${id}-metal)`
                      : n % 3 === 1
                        ? "#ded2a2"
                        : `url(#${id}-copper)`;
                return (
                  <g key={n}>
                    <path
                      d={`M143 ${y}V${y + 5}Q180 ${y + 16} 217 ${y + 5}V${y}Z`}
                      fill={fill}
                      stroke="#8f8e82"
                    />
                    <ellipse
                      cx="180"
                      cy={y}
                      rx="37"
                      ry="7"
                      fill={fill}
                      stroke="#a49a84"
                      strokeWidth=".8"
                    />
                  </g>
                );
              })}
              <Label x={127} y={64}>
                +
              </Label>
              <Label x={127} y={179}>
                −
              </Label>
              {step === 1 ? (
                <>
                  <path
                    d="M218 59H287V101M143 157H287V132"
                    fill="none"
                    stroke="#92a6b6"
                    strokeWidth="2"
                  />
                  <circle cx="287" cy="117" r="16" fill="#f3f6f7" stroke="#97acbb" />
                  <Label x={287} y={123}>
                    V
                  </Label>
                </>
              ) : (
                <>
                  <path
                    d="M143 157H67V39H283V68M283 99V113H225V59H217"
                    fill="none"
                    stroke={blue}
                    strokeWidth="2.5"
                  />
                  <Lamp x={283} y={84} active id={id} />
                  <Arrow x1={84} y1={39} x2={129} y2={39} />
                  <Arrow x1={224} y1={39} x2={265} y2={39} />
                  <Label x={83} y={141}>
                    e⁻
                  </Label>
                </>
              )}
            </>
          )}
          <Foot>
            {step === 0
              ? "Le tissu conduit les ions"
              : step === 1
                ? "U = U₁ + U₂ + …"
                : "Électrons dans le circuit extérieur"}
          </Foot>
        </>
      ) : null}
      {kind === "flowbattery" ? (
        <>
          <Title>
            {
              [
                "Deux boucles de liquide séparées",
                "Plus de liquide actif",
                "Un empilement plus grand",
              ][step]
            }
          </Title>
          <Tank
            x={24}
            y={step === 0 ? 111 : 87}
            w={step === 0 ? 60 : 84}
            h={step === 0 ? 61 : 85}
            color="#91bad6"
            id={id}
          />
          <Tank
            x={252}
            y={step === 0 ? 111 : 87}
            w={step === 0 ? 60 : 84}
            h={step === 0 ? 61 : 85}
            color="#d8ad88"
            id={id}
          />
          <path
            d={`M${step === 0 ? 84 : 108} 126H${step === 2 ? 142 : 157}M${step === 2 ? 142 : 157} 150H124V177H54V160`}
            fill="none"
            stroke={blue}
            strokeWidth="3"
          />
          <path
            d={`M252 126H${step === 2 ? 218 : 203}M${step === 2 ? 218 : 203} 150H236V177H292V160`}
            fill="none"
            stroke={warm}
            strokeWidth="3"
          />
          {[124, 236].map((x, n) => (
            <g key={x}>
              <circle
                cx={x}
                cy="151"
                r="8"
                fill="#e9eff3"
                stroke={n ? warm : blue}
                strokeWidth="2"
              />
              <path
                d={n ? `M${x + 3} 147l-6 4 6 4Z` : `M${x - 3} 147l6 4-6 4Z`}
                fill={n ? warm : blue}
              />
            </g>
          ))}
          <rect
            x={step === 2 ? 141 : 156}
            y="105"
            width={step === 2 ? 78 : 48}
            height="53"
            rx="5"
            fill={`url(#${id}-metal)`}
            stroke="#879baa"
            strokeWidth="2"
          />
          {(step === 2 ? [147, 157, 167, 177, 187, 197, 207, 217] : [162, 172, 182, 192, 202]).map(
            (x, n) => (
              <path
                key={x}
                d={`M${x} 109V154`}
                stroke={n % 2 ? "#d1b69d" : "#9eb8ca"}
                strokeWidth="4"
              />
            ),
          )}
          <path d="M163 105V67H166M196 67H197V105" stroke={blue} strokeWidth="2.5" fill="none" />
          <Lamp x={181} y={67} active id={id} />
          <Arrow x1={133} y1={126} x2={109} y2={126} />
          <Arrow x1={228} y1={126} x2={247} y2={126} color={warm} />
          <Label x={58} y={step === 0 ? 99 : 75}>
            Liquide A
          </Label>
          <Label x={292} y={step === 0 ? 99 : 75}>
            Liquide B
          </Label>
          <Label x={180} y={198}>
            Pompes + cellules
          </Label>
          <Foot>
            {step === 0
              ? "Un aller et un retour de chaque côté"
              : step === 1
                ? "Réserve d’énergie augmentée"
                : "La puissance dépend des cellules"}
          </Foot>
        </>
      ) : null}
    </>
  );
}
