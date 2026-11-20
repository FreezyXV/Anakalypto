import { BootDrawing, LoopDrawing } from "./SystemsReviewDrawings";
import { Art, Tag, Arrow, blue, green, gold, ink, Box, type DrawingProps } from "./Horizons50Parts";
export function DigitalHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "databaseindex")
    return (
      <Art {...p} foot="L’index renvoie vers les lignes">
        <Tag x={90} y={55}>
          {s === 0 ? "Sans index" : "Index"}
        </Tag>
        <Tag x={265} y={55}>
          Table
        </Tag>
        {["A → 3", "B → 1", "C → 2"].map((v, i) => (
          <g key={v}>
            <g opacity={s === 0 ? 0.15 : 1}>
              <Box
                x={30}
                y={72 + i * 41}
                w={110}
                h={34}
                color={s > 0 && i === 1 ? "#e1c78e" : "#e3ebf1"}
              >
                <Tag x={85} y={96 + i * 41}>
                  {v}
                </Tag>
              </Box>
            </g>
            <Box
              x={211}
              y={72 + i * 41}
              w={110}
              h={34}
              color={s === 2 && i === 0 ? "#bad0ad" : "#e3ebf1"}
            >
              <Tag x={266} y={96 + i * 41}>
                {["1 · B", "2 · C", "3 · A"][i]}
              </Tag>
            </Box>
          </g>
        ))}
        {s === 0 ? (
          <path fill="none" d="M330 75V180" stroke={gold} strokeWidth="3" strokeDasharray="4 4" />
        ) : s === 1 ? (
          <Arrow d="M21 130H29" color={gold} />
        ) : (
          <Arrow d="M142 130H174V89H209" color={green} />
        )}
      </Art>
    );
  if (kind === "runlength")
    return (
      <Art {...p} foot="Restituer exactement la suite">
        <Tag x={180} y={57}>
          {s === 1 ? "Couleur + effectif" : "Six pixels"}
        </Tag>
        {s !== 1 ? (
          <>
            {Array.from({ length: 6 }, (_, i) => (
              <rect
                key={i}
                data-pixel={i < 4 ? "blue" : "gold"}
                x={36 + i * 48}
                y="87"
                width="46"
                height="46"
                fill={i < 4 ? blue : gold}
                stroke="white"
              />
            ))}
            <path d="M37 142V151H226V142M229 142V151H322V142" stroke={ink} fill="none" />
            <Tag x={132} y={181}>
              4 bleus
            </Tag>
            <Tag x={277} y={181}>
              2 jaunes
            </Tag>
          </>
        ) : (
          <>
            <Box x={44} y={85} w={118} h={68} color="#b0cedf">
              <Tag x={103} y={126}>
                Bleu × 4
              </Tag>
            </Box>
            <Box x={199} y={85} w={118} h={68} color="#dfc586">
              <Tag x={258} y={126}>
                Or × 2
              </Tag>
            </Box>
            <Tag x={180} y={190}>
              Deux séries codées
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "branchloop") return <LoopDrawing {...p} />;
  if (kind === "bootchain") return <BootDrawing {...p} />;
  if (kind === "vigeneregrid")
    return (
      <Art
        {...p}
        foot={s === 0 ? "César : toujours le même décalage" : "Vigenère : ici la clé est BC"}
      >
        {["Message", "Clé", "Résultat"].map((v, i) => (
          <Tag key={v} x={73} y={80 + i * 52}>
            {v}
          </Tag>
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <g key={i}>
            {["A", s === 0 ? "D" : i % 2 ? "C" : "B", s === 0 ? "D" : i % 2 ? "C" : "B"].map(
              (v, j) => (
                <g key={j}>
                  <rect
                    x={147 + i * 46}
                    y={57 + j * 52}
                    width="38"
                    height="32"
                    rx="5"
                    fill={j === 2 ? "#adc7b2" : j === 1 ? "#dfc897" : "#c6d8e5"}
                  />
                  <Tag x={166 + i * 46} y={80 + j * 52}>
                    {s === 0 && j === 1 ? "+3" : s === 1 && j === 2 ? "?" : v}
                  </Tag>
                </g>
              ),
            )}
          </g>
        ))}
      </Art>
    );
  return null;
}
