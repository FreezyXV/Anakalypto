import {
  Frame,
  Arrow,
  Label,
  Panel,
  Beetle,
  Plant,
  Bird,
  DNA,
  blue,
  green,
  red,
  gold,
  violet,
  type DrawingProps,
} from "./Science30Parts";
export function Biology30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "cellmap")
    return (
      <Frame
        id={id}
        title={
          ["Des structures communes", "Bactérie : sans noyau", "Cellule animale : avec noyau"][s]!
        }
        foot={
          [
            "Un même socle cellulaire",
            "ADN dans une région du cytoplasme",
            "Compartiments spécialisés",
          ][s]!
        }
      >
        <path
          d={
            s === 2
              ? "M80 81C115 39 255 42 283 92C320 135 275 187 199 191C102 201 53 143 80 81Z"
              : "M97 71H253C314 71 314 179 253 179H97C36 179 36 71 97 71Z"
          }
          fill={s === 2 ? "#eee0df" : "#e1e8c9"}
          stroke={s === 2 ? "#af8f9b" : "#76916f"}
          strokeWidth="5"
        />
        {s === 1 && (
          <path d="M302 133q23 0 17 20t20 21" stroke={green} strokeWidth="3" fill="none" />
        )}
        {s === 2 ? (
          <>
            <ellipse
              cx="174"
              cy="117"
              rx="38"
              ry="32"
              fill="#d0bfd7"
              stroke={violet}
              strokeWidth="2"
            />
            <DNA x={153} y={118} />
            {[
              [105, 131],
              [239, 143],
              [226, 82],
            ].map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(-20)`}>
                <ellipse rx="19" ry="10" fill="#dca59e" stroke={red} />
                <path d="M-12 0l5-5 5 10 5-10 6 6" stroke={red} fill="none" />
              </g>
            ))}
            <Label x={71} y={61}>
              Noyau
            </Label>
            <path d="M96 66L147 95" stroke={violet} />
            <Label x={270} y={198}>
              Mitochondrie
            </Label>
            <path d="M257 182L241 153" stroke={red} />
          </>
        ) : (
          <>
            <DNA x={147} y={126} w={70} h={s === 1 ? 44 : 28} />
            <Label x={183} y={59}>
              ADN
            </Label>
            <path d="M183 65V103" stroke={violet} />
            <Label x={61} y={199}>
              Membrane
            </Label>
            <path d="M88 182L92 176" stroke={green} />
          </>
        )}
        {[
          [109, 103],
          [124, 153],
          [230, 117],
          [247, 158],
          [210, 166],
          [91, 149],
          [264, 110],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill={blue} />
            <circle cx={x! + 3} cy={y! + 1} r="2" fill={blue} />
          </g>
        ))}
        {s !== 2 && (
          <>
            <Label x={279} y={59}>
              Ribosomes
            </Label>
            <path d="M264 65L263 103" stroke={blue} />
            <Label x={249} y={199}>
              Cytoplasme
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "foodweb")
    return (
      <Frame
        id={id}
        title={
          ["Suivre une ressource", "Des chemins se croisent", "Les restes retournent au sol"][s]!
        }
        foot={
          s === 2 ? "Matière recyclée, énergie dissipée" : "Flèche : de la ressource au mangeur"
        }
      >
        <circle cx="44" cy="65" r="14" fill="#e7cb76" stroke={gold} />
        <Plant x={68} y={126} scale={1.2} />
        <Beetle x={174} y={132} />
        <Bird x={281} y={116} />
        <Arrow x1={47} y1={85} x2={56} y2={103} color={gold} width={2} />
        <Arrow x1={99} y1={125} x2={150} y2={125} color={green} />
        <Arrow x1={198} y1={125} x2={248} y2={121} color={green} />
        {s >= 1 && (
          <>
            <path d="M69 104Q159 54 252 98" stroke={gold} strokeWidth="2" fill="none" />
            <Arrow x1={226} y1={85} x2={252} y2={98} color={gold} width={2} />
            <Label x={180} y={57}>
              {s === 2 ? "Voies multiples" : "Autre ressource végétale"}
            </Label>
          </>
        )}
        {s === 2 ? (
          <>
            <path d="M36 186Q180 178 324 186V204H36Z" fill="#c7b397" />
            <path d="M153 177q0-21 21-21t21 21Z" fill="#b39286" stroke="#8e746d" />
            <path d="M174 177v24" stroke="#8e746d" strokeWidth="4" />
            <Arrow x1={278} y1={140} x2={204} y2={169} color="#8e746d" width={2} />
            <path d="M68 146v49m0-7-9 9m9-12 9 8" stroke={green} strokeWidth="2" fill="none" />
            <Arrow x1={168} y1={199} x2={80} y2={188} color={green} width={2} />
            <Label x={274} y={188}>
              Restes
            </Label>
            <Label x={123} y={151}>
              Sol
            </Label>
            <path d="M227 174q7-10 0-20m13 17q7-10 0-20" stroke={red} fill="none" />
            <Label x={299} y={61}>
              Chaleur
            </Label>
          </>
        ) : (
          <>
            <Label x={68} y={183}>
              Plante
            </Label>
            <Label x={175} y={183}>
              Insecte
            </Label>
            <Label x={280} y={183}>
              Oiseau
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "selectionbeetles")
    return (
      <Frame
        id={id}
        title={
          ["Des variations déjà présentes", "Un exemple de prédation", "Une génération suivante"][
            s
          ]!
        }
        foot="Camouflage héritable, exemple fictif"
      >
        <Panel y={80} h={110}>
          <path
            d="M26 98l309 51M26 152l309-42M39 189l266-91"
            stroke="#bec1aa"
            strokeWidth="13"
            opacity=".45"
          />
        </Panel>
        {Array.from({ length: 12 }, (_, i) => {
          const dark = s === 2 ? i % 4 !== 0 : i % 3 === 0;
          return (
            <Beetle
              key={i}
              x={63 + (i % 6) * 46}
              y={113 + Math.floor(i / 6) * 48}
              dark={dark}
              opacity={s === 1 && !dark && i !== 1 ? 0.18 : 1}
            />
          );
        })}
        {s === 1 ? (
          <>
            <Bird x={266} y={54} />
            <Arrow x1={249} y1={64} x2={246} y2={94} color={red} width={2} />
            <Label x={109} y={58}>
              Plus ou moins visibles
            </Label>
          </>
        ) : (
          <Label x={180} y={58}>
            {s === 0 ? "Clairs et foncés coexistent" : "Plus de descendants foncés"}
          </Label>
        )}
      </Frame>
    );
  if (kind === "resistantpopulation")
    return (
      <Frame
        id={id}
        title={
          ["Une population variée", "Exposer à un antibiotique", "Les survivantes se divisent"][s]!
        }
        foot={
          s === 0
            ? "R = résistance déjà présente"
            : s === 1
              ? "Les sensibles sont affectées"
              : "La résistance peut être transmise"
        }
      >
        <Panel y={71} h={120} />
        {Array.from({ length: 12 }, (_, i) => {
          const resistant = s === 2 ? true : i === 2 || i === 9;
          return (
            <g
              key={i}
              transform={`translate(${58 + (i % 6) * 49} ${106 + Math.floor(i / 6) * 47})`}
              opacity={s === 1 && !resistant ? 0.17 : 1}
            >
              <rect
                x="-15"
                y="-9"
                width="30"
                height="18"
                rx="9"
                fill={resistant ? "#a18ab2" : "#a8c6ab"}
                stroke={resistant ? violet : green}
                strokeWidth="2"
              />
              {resistant ? (
                <text y="5" textAnchor="middle" fontSize="18" fill="#263951">
                  R
                </text>
              ) : (
                <path d="M-8 0q8-8 16 0" stroke={green} fill="none" />
              )}
              {s === 1 && !resistant && <path d="M-13-13l26 26" stroke={red} strokeWidth="2" />}
            </g>
          );
        })}
        {s === 1 ? (
          <>
            <path d="M153 47h54v14h-54Z" fill="#e1bb8a" stroke={gold} />
            <Arrow x1={180} y1={63} x2={180} y2={84} color={gold} />
          </>
        ) : (
          <Label x={180} y={56}>
            {s === 0 ? "La variation précède la sélection" : "Population issue des survivantes"}
          </Label>
        )}
      </Frame>
    );
  if (kind === "abomarkers")
    return (
      <Frame
        id={id}
        title={["Deux types de marques", "Deux autres combinaisons", "Un exemple d’héritage"][s]!}
        foot="ABO seul : aucune règle de transfusion"
      >
        {s < 2 ? (
          <>
            {[0, 1].map((i) => {
              const label = s === 0 ? ["A", "B"][i] : ["AB", "O"][i];
              return (
                <g key={i} transform={`translate(${105 + i * 150} 128)`}>
                  <ellipse rx="47" ry="34" fill="#d59099" stroke={red} strokeWidth="2" />
                  <ellipse rx="28" ry="17" fill="#e8b5b9" />
                  {Array.from({ length: 8 }, (_, n) => {
                    const a = (n * Math.PI) / 4,
                      x = 47 * Math.cos(a),
                      y = 34 * Math.sin(a),
                      type = label === "AB" ? n % 2 : label === "A" ? 0 : 1;
                    return label === "O" ? null : (
                      <g key={n} transform={`translate(${x} ${y}) rotate(${n * 45})`}>
                        {type === 0 ? (
                          <path d="M0 0l-6-13 12 0Z" fill={gold} stroke="#8e7436" />
                        ) : (
                          <rect
                            x="-5"
                            y="-12"
                            width="10"
                            height="10"
                            fill="#a497c4"
                            stroke={violet}
                          />
                        )}
                      </g>
                    );
                  })}
                  <Label x={0} y={-64}>
                    {label}
                  </Label>
                </g>
              );
            })}
            <Label x={180} y={192}>
              {s === 0 ? "Motifs A et B symbolisés" : "O : aucune marque A ou B"}
            </Label>
          </>
        ) : (
          <>
            <circle cx="98" cy="78" r="23" fill="#e7d49f" stroke={gold} />
            <Label x={98} y={84}>
              A
            </Label>
            <circle cx="263" cy="78" r="23" fill="#c7b8d7" stroke={violet} />
            <Label x={263} y={84}>
              B
            </Label>
            <Arrow x1={115} y1={104} x2={158} y2={137} color={gold} />
            <Arrow x1={246} y1={104} x2={204} y2={137} color={violet} />
            <ellipse cx="180" cy="165" rx="42" ry="25" fill="#d59099" stroke={red} />
            <Label x={180} y={171}>
              AB
            </Label>
            <Label x={180} y={48}>
              Un allèle de chaque parent
            </Label>
          </>
        )}
      </Frame>
    );
  return null;
}
