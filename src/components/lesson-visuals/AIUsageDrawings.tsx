import { Arrow, Label, blue, green } from "./DrawingPrimitives";
import { Cup, Wave, Processor, Speaker } from "./AIPrimitives";
import { toyQuantization } from "@/lib/lesson-visuals/learning-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function AIUsageDrawing({ kind, step, id }: Props) {
  if (kind === "multimodal")
    return (
      <>
        {step === 0 ? (
          <>
            <Wave x={30} y={102} />
            {["Écouter", "Répondre", "Parler"].map((v, i) => (
              <g key={v}>
                <rect
                  x={63 + i * 96}
                  y="73"
                  width="79"
                  height="58"
                  rx="8"
                  fill={`url(#${id}-metal)`}
                  stroke="#8aa7be"
                />
                <Label x={102 + i * 96} y={108}>
                  {v}
                </Label>
                {i < 2 && (
                  <Arrow x1={145 + i * 96} y1={101} x2={156 + i * 96} y2={101} width={1.7} />
                )}
              </g>
            ))}
            <Label x={180} y={166}>
              Trois modèles · du texte entre eux
            </Label>
          </>
        ) : (
          <>
            <Cup x={70} y={step === 1 ? 65 : 87} id={id} />
            <rect x="28" y="146" width="86" height="32" rx="6" fill="#e0eaf2" stroke="#a2b9ca" />
            <Label x={71} y={168}>
              {step === 1 ? "Texte" : "Objet ?"}
            </Label>
            {step === 1 && <Wave x={70} y={123} />}
            <path
              d={
                step === 1
                  ? "M118 71H130V120H139M96 123H130M118 154H130V120"
                  : "M118 88H130V120H139M118 154H130V120"
              }
              fill="none"
              stroke={blue}
              strokeWidth="2"
            />
            <Arrow x1={132} y1={120} x2={139} y2={120} />
            <Processor x={188} y={120} id={id} />
            <Arrow x1={241} y1={120} x2={263} y2={120} color={green} />
            {step === 1 ? (
              <>
                <Speaker x={295} y={120} />
                <Label x={295} y={167}>
                  Sortie
                </Label>
              </>
            ) : (
              <>
                <rect
                  x="268"
                  y="81"
                  width="75"
                  height="67"
                  rx="8"
                  fill="#d5e5ce"
                  stroke="#9fb596"
                />
                <Label x={305} y={108}>
                  Une
                </Label>
                <Label x={305} y={134}>
                  tasse
                </Label>
              </>
            )}
          </>
        )}
        <Label x={180} y={23}>
          {
            [
              "Exemple de chaîne vocale séparée",
              "Des modalités dans un même modèle",
              "Une réponse préparée pour l’exemple",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          {step === 0 ? "Voix → texte → réponse → voix" : "Image et consigne peuvent se compléter"}
        </Label>
      </>
    );
  if (kind === "visionlanguage")
    return (
      <>
        {step === 0 ? (
          <>
            <Cup x={94} y={112} id={id} patches />
            <rect x="177" y="82" width="151" height="63" rx="9" fill="#e0eaf1" stroke="#a2b9ca" />
            <Label x={252} y={108}>
              Quel est
            </Label>
            <Label x={252} y={134}>
              cet objet ?
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Cup x={65} y={91} id={id} patches />
            <Arrow x1={115} y1={89} x2={139} y2={89} />
            <rect
              x="146"
              y="58"
              width="80"
              height="62"
              rx="8"
              fill={`url(#${id}-metal)`}
              stroke="#9db4c5"
            />
            <Label x={186} y={84}>
              Encodeur
            </Label>
            <Label x={186} y={109}>
              visuel
            </Label>
            <Arrow x1={232} y1={89} x2={253} y2={89} />
            {[0, 1, 2].map((n) => (
              <rect
                key={n}
                x={261 + n * 25}
                y="74"
                width="19"
                height="32"
                rx="3"
                fill={["#aac8da", "#9abcab", "#d0ba8a"][n]}
              />
            ))}
            <Label x={290} y={143}>
              Liaison
            </Label>
            <Label x={180} y={176}>
              Caractéristiques → jetons visuels
            </Label>
          </>
        ) : (
          <>
            <rect x="20" y="61" width="83" height="86" rx="8" fill="#e5edf3" stroke="#aac0d0" />
            <Label x={61} y={88}>
              Image
            </Label>
            <path d="M34 99H87" stroke="#bacbda" />
            <Label x={61} y={132}>
              Question
            </Label>
            <Arrow x1={110} y1={104} x2={132} y2={104} />
            <Processor x={184} y={104} id={id} />
            <Arrow x1={238} y1={104} x2={261} y2={104} color={green} />
            <rect x="268" y="72" width="75" height="65" rx="8" fill="#d6e5ce" stroke="#99b38f" />
            <Label x={305} y={99}>
              Une
            </Label>
            <Label x={305} y={125}>
              tasse
            </Label>
            <Label x={180} y={176}>
              Réponse préparée pour l’exemple
            </Label>
          </>
        )}
        <Label x={180} y={27}>
          {
            [
              "Deux entrées complémentaires",
              "Une architecture inspirée de LLaVA",
              "Utiliser les informations ensemble",
            ][step]
          }
        </Label>
        <Label x={180} y={201}>
          Cet exemple produit seulement du texte
        </Label>
      </>
    );
  if (kind === "localmodel")
    return (
      <>
        {step === 1 ? (
          <>
            {toyQuantization([232, 147, 75, 11]).map((v, i) => (
              <g key={i}>
                <Label x={65} y={67 + i * 31}>
                  {v.original.toFixed(2).replace(".", ",")}
                </Label>
                <Arrow x1={106} y1={61 + i * 31} x2={144} y2={61 + i * 31} />
                <rect
                  x="157"
                  y={43 + i * 31}
                  width="64"
                  height="26"
                  rx="5"
                  fill="#d5e6ce"
                  stroke="#9db592"
                />
                <Label x={189} y={64 + i * 31}>
                  {v.code.toString(2).padStart(2, "0")}
                </Label>
                <Label x={283} y={67 + i * 31}>
                  ≈ {v.reconstructed.toFixed(2).replace(".", ",")}
                </Label>
              </g>
            ))}
            <Label x={180} y={25}>
              Valeur → code 2 bits → approximation
            </Label>
            <Label x={180} y={201}>
              Jouet : 4 × 8 bits → 4 × 2 bits
            </Label>
          </>
        ) : (
          <>
            <path
              d="M52 44H308Q316 44 316 52V164H44V52Q44 44 52 44Z"
              fill={`url(#${id}-metal)`}
              stroke="#7f99ae"
              strokeWidth="2"
            />
            <rect x="53" y="54" width="254" height="101" rx="5" fill="#e5edf2" />
            <path
              d="M44 164H316L335 173Q337 178 328 179H32Q23 178 25 173Z"
              fill="#c3d1dd"
              stroke="#8aa1b5"
            />
            <path d="M153 169H207L215 175H145Z" fill="#adbfcd" />
            {step === 0 ? (
              <>
                <path d="M73 70H103L115 83V132H73Z" fill="#f8fafb" stroke="#a3b9c9" />
                <path d="M103 70V83H115" fill="none" stroke="#8ea7bb" />
                <path d="M82 95H104M82 105H104M82 115H99" stroke={blue} strokeWidth="2" />
                <Arrow x1={124} y1={104} x2={152} y2={104} />
                <Processor x={210} y={104} id={id} />
              </>
            ) : (
              <>
                {[
                  ["Poids", 67, 64],
                  ["Contexte", 139, 90],
                  ["Logiciel", 237, 64],
                ].map(([v, x, w]) => (
                  <g key={v}>
                    <rect
                      x={Number(x)}
                      y="71"
                      width={Number(w)}
                      height="61"
                      rx="6"
                      fill={v === "Poids" ? "#9dbed3" : v === "Contexte" ? "#bed4b3" : "#d9c69e"}
                      stroke="#95acbd"
                    />
                    <Label x={Number(x) + Number(w) / 2} y={107}>
                      {v}
                    </Label>
                  </g>
                ))}
              </>
            )}
            <Label x={180} y={25}>
              {step === 0 ? "Calcul dans l’ordinateur" : "Plusieurs usages de la mémoire"}
            </Label>
            <Label x={180} y={201}>
              {step === 0
                ? "Fichiers et logiciel déjà disponibles"
                : "Zones indicatives, pas à l’échelle"}
            </Label>
          </>
        )}
      </>
    );
  if (kind === "retrieval")
    return (
      <>
        <rect
          x="125"
          y="75"
          width="110"
          height="76"
          rx="10"
          fill={`url(#${id}-metal)`}
          stroke="#8da8bd"
        />
        <Label x={180} y={105}>
          Modèle
        </Label>
        <path d="M171 128v-10a9 9 0 0 1 18 0v10" fill="none" stroke="#6d8ca4" strokeWidth="2" />
        <rect x="168" y="125" width="24" height="18" rx="3" fill="#c0d3df" stroke="#7293ab" />
        {step === 0 ? (
          <>
            <path d="M32 100H105M255 100H328" stroke="#b5c7d6" strokeDasharray="4 4" />
            <Label x={180} y={44}>
              Poids fixés pendant l’utilisation
            </Label>
            <Label x={180} y={181}>
              Question → calcul → réponse
            </Label>
          </>
        ) : (
          <>
            {[0, 1, 2].map((n) => (
              <g key={n} transform={`translate(${24 + n * 5} ${61 - n * 7})`}>
                <path d="M0 0H52L63 11V69H0Z" fill="#f5f8fa" stroke="#a4bccd" />
                <path
                  d="M10 23H51M10 34H51M10 45H42"
                  stroke={n === 2 ? blue : "#c6d5df"}
                  strokeWidth="2"
                />
              </g>
            ))}
            <Arrow x1={98} y1={103} x2={117} y2={103} />
            <Label x={58} y={162}>
              Sources
            </Label>
            {step === 1 ? (
              <>
                <path
                  d="M257 108a23 23 0 1 0 46 0a23 23 0 1 0-46 0"
                  fill="#dce9f0"
                  stroke="#93b0c4"
                />
                <path
                  d="M264 92H296M261 108H300M266 124H294M280 85Q260 108 280 131M280 85Q300 108 280 131"
                  stroke="#92afc3"
                  fill="none"
                />
                <Label x={281} y={163}>
                  Un outil
                </Label>
                <Arrow x1={265} y1={74} x2={98} y2={54} color={blue} />
              </>
            ) : (
              <>
                <Arrow x1={242} y1={112} x2={265} y2={112} color={green} />
                <rect
                  x="272"
                  y="73"
                  width="66"
                  height="78"
                  rx="7"
                  fill="#d8e5d0"
                  stroke="#a4b99a"
                />
                <path d="M282 91H328M282 103H328M282 115H316" stroke="#91ad86" strokeWidth="2" />
                <Label x={305} y={140}>
                  [1]
                </Label>
                <Label x={300} y={175}>
                  Réponse
                </Label>
              </>
            )}
            <Label x={180} y={28}>
              {step === 1
                ? "Récupérer des passages pertinents"
                : "Ajouter du contexte à la question"}
            </Label>
            <Label x={180} y={201}>
              Lire une source ≠ réentraîner les poids
            </Label>
          </>
        )}
      </>
    );
  return null;
}
