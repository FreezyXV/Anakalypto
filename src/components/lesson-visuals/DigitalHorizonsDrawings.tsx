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
  if (kind === "branchloop")
    return (
      <Art {...p} foot={s === 2 ? "3 < 3 : faux, sortie" : "Compteur initialisé à zéro"}>
        <path d="M180 50L245 92 180 134 115 92Z" fill="#d5e6ef" stroke={ink} strokeWidth="2" />
        <Tag x={180} y={99}>
          i &lt; 3 ?
        </Tag>
        <path
          d="M180 134V145M115 92H61V178H137M245 92H305V178H229"
          fill="none"
          stroke="#9aafbd"
          strokeWidth="2"
        />
        <Box x={140} y={150} w={88} h={42}>
          <Tag x={184} y={178}>
            {s === 2 ? "Fin" : "i = i + 1"}
          </Tag>
        </Box>
        {s === 2 ? (
          <Arrow d="M245 92H305V178H231" color={green} />
        ) : (
          <>
            <Arrow d="M115 92H61V171H137" color={blue} />
            <Arrow d="M185 194V201H26V43H181V48" color={blue} />
          </>
        )}
        <Tag x={69} y={73}>
          Oui
        </Tag>
        <Tag x={302} y={73}>
          Non
        </Tag>
        <Tag x={184} y={44}>
          i = {s === 0 ? 0 : s === 1 ? 2 : 3}
        </Tag>
      </Art>
    );
  if (kind === "bootchain")
    return (
      <Art {...p} foot="Le processeur exécute le code">
        <Box x={25} y={86} w={78} h={88} color={s === 0 ? "#dac28d" : "#e0e7ed"}>
          <path d="M40 104H88V148H40Z" stroke={ink} fill="none" strokeWidth="2" />
          <Tag x={64} y={136}>
            UEFI
          </Tag>
        </Box>
        <Box x={142} y={86} w={78} h={88} color="#d0dce6">
          <circle cx="181" cy="124" r="23" stroke={ink} fill="#b2c4d0" />
          <circle cx="181" cy="124" r="6" fill={ink} />
        </Box>
        <Box x={257} y={86} w={78} h={88} color={s > 0 ? "#b8cfae" : "#e0e7ed"}>
          <path d="M271 104H321V151H271Z" fill="#849e87" />
          {s > 0 && (
            <Tag x={296} y={136}>
              OS
            </Tag>
          )}
        </Box>
        <Tag x={65} y={195}>
          Puce
        </Tag>
        <Tag x={181} y={195}>
          Disque
        </Tag>
        <Tag x={296} y={195}>
          RAM
        </Tag>
        {s === 0 ? (
          <Arrow d="M105 122H139" color={gold} />
        ) : (
          <Arrow d="M222 122H254" color={green} />
        )}
        <Tag x={180} y={57}>
          {["Initialisation", "Chargement du noyau", "Noyau et services"][s]}
        </Tag>
      </Art>
    );
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
