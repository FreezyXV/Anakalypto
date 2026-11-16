import {
  sphericalOctant,
  RING_WIDTHS,
  RING_MATCH_X,
  RING_END_X,
} from "@/lib/lesson-visuals/horizons50-models";
import {
  Art,
  Tag,
  Arrow,
  blue,
  green,
  gold,
  red,
  ink,
  Box,
  type DrawingProps,
} from "./Horizons50Parts";
export function MathHorizonsDrawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "algebrabalance")
    return (
      <Art {...p} foot="La même opération des deux côtés">
        <path
          d="M180 102V189H139M180 189H221M62 101H298M62 102V147M298 102V147M22 147Q62 186 102 147ZM258 147Q298 186 338 147Z"
          fill="none"
          stroke={ink}
          strokeWidth="3"
        />
        <Tag x={180} y={56}>
          {["3x + 2 = 14", "3x = 12", "x = 4"][s]}
        </Tag>
        {Array.from({ length: s === 2 ? 1 : 3 }, (_, i) => (
          <g key={i}>
            <rect x={s === 2 ? 46 : 27 + i * 22} y="113" width="19" height="26" fill={blue} />
            <Tag x={s === 2 ? 55 : 36 + i * 22} y={134}>
              x
            </Tag>
          </g>
        ))}
        {s === 0 && (
          <>
            <circle cx="91" cy="120" r="4" fill={gold} />
            <circle cx="91" cy="133" r="4" fill={gold} />
          </>
        )}{" "}
        {Array.from({ length: s === 2 ? 4 : s === 1 ? 12 : 14 }, (_, i) => (
          <circle
            key={i}
            data-unit
            cx={274 + (i % 5) * 12}
            cy={112 + Math.floor(i / 5) * 12}
            r="4.5"
            fill={gold}
          />
        ))}
        <Tag x={180} y={88}>
          {s === 0 ? "Équilibre" : s === 1 ? "−2 de chaque côté" : "÷3 de chaque côté"}
        </Tag>
      </Art>
    );
  if (kind === "trianglegeometry")
    return (
      <Art
        {...p}
        foot={s === 0 ? "Dans le plan : somme de 180°" : "Sur la sphère : cet exemple vaut 270°"}
      >
        {s === 0 ? (
          <>
            <path d="M61 178L154 62 293 178Z" fill="#c8dce8" stroke={blue} strokeWidth="3" />
            <path
              d="M76 159q12 0 16 19M137 82q20 8 32-1M269 158q-10 9-9 20"
              stroke={gold}
              fill="none"
              strokeWidth="3"
            />
            <Tag x={180} y={198}>
              α + β + γ = 180°
            </Tag>
          </>
        ) : (
          <>
            <circle cx="180" cy="122" r="77" fill="#c7dcdd" stroke={blue} strokeWidth="2" />
            <polygon
              data-spherical-octant
              points={sphericalOctant()
                .map((p) => p.join(","))
                .join(" ")}
              fill="#b6c8a1"
              stroke={green}
              strokeWidth="3"
            />
            <Tag x={180} y={51}>
              90°
            </Tag>
            <Tag x={82} y={164}>
              90°
            </Tag>
            <Tag x={278} y={164}>
              90°
            </Tag>
            {s === 2 && (
              <Tag x={180} y={199}>
                3 × 90°
              </Tag>
            )}
          </>
        )}
      </Art>
    );
  if (kind === "tempscales") {
    const c = [0, 20, 100][s]!,
      values = [`${c} °C`, `${c * 1.8 + 32} °F`, `${(c + 273.15).toFixed(2).replace(".", ",")} K`];
    return (
      <Art {...p} foot="Même état, trois écritures">
        <Tag x={180} y={58}>
          {["Glace fondante", "Une pièce", "Eau bouillante"][s]}
        </Tag>
        {values.map((v, i) => (
          <g key={v}>
            <rect
              x={59 + i * 112}
              y="80"
              width="15"
              height="78"
              rx="7"
              fill="#d8e5ec"
              stroke="#94aab8"
            />
            <circle cx={66.5 + i * 112} cy="159" r="13" fill={red} />
            <rect
              x={63 + i * 112}
              y={145 - s * 25}
              width="7"
              height={16 + s * 25}
              rx="3"
              fill={red}
            />
            <Tag x={67 + i * 112} y={195}>
              {v}
            </Tag>
          </g>
        ))}
      </Art>
    );
  }
  if (kind === "confounder")
    return (
      <Art {...p} foot="Association ≠ preuve de causalité">
        <Box x={119} y={51} w={122} h={39} color={s > 0 ? "#e1c68e" : "#e6ebef"}>
          <Tag x={180} y={78}>
            {s === 0 ? "Facteur ?" : "Chaleur"}
          </Tag>
        </Box>
        <Box x={22} y={139} w={127} h={46}>
          <Tag x={86} y={168}>
            Glaces
          </Tag>
        </Box>
        <Box x={210} y={139} w={128} h={46}>
          <Tag x={274} y={168}>
            Baignades
          </Tag>
        </Box>
        {s === 0 ? (
          <path d="M151 162H208" stroke={blue} strokeDasharray="4 4" fill="none" strokeWidth="3" />
        ) : (
          <>
            <Arrow d="M149 90L98 135" color={gold} />
            <Arrow d="M211 90L264 135" color={gold} />
          </>
        )}
        {s === 2 && (
          <>
            <path fill="none" d="M158 154l40 17m-40 0l40-17" stroke={red} strokeWidth="3" />
            <Tag x={180} y={199}>
              Lien direct non établi
            </Tag>
          </>
        )}
      </Art>
    );
  if (kind === "treeringmatch") {
    const widths = RING_WIDTHS;
    let pos = 0;
    return (
      <Art {...p} foot="Faire correspondre les séquences">
        <Tag x={82} y={59}>
          Référence
        </Tag>
        <Tag x={84} y={156}>
          Bois étudié
        </Tag>
        {[0, 1].map((row) => (
          <g
            key={row}
            transform={`translate(${row === 0 ? 36 : s === 1 ? 135 : RING_MATCH_X} ${row === 0 ? 74 : 167})`}
          >
            {widths.slice(row === 0 ? 0 : 2).map((w, i) => {
              if (i === 0) pos = 0;
              const x = pos;
              pos += w * 1.55;
              return (
                <rect
                  key={i}
                  x={x}
                  width={w * 1.55}
                  height={row === 0 ? 39 : 26}
                  fill={i % 2 ? "#c5a16a" : "#e2cca3"}
                  stroke="#96754f"
                />
              );
            })}
          </g>
        ))}
        {s === 2 && (
          <>
            <path
              fill="none"
              data-ring-match="true"
              d={`M${RING_MATCH_X} 115V162M${RING_END_X} 115V162`}
              stroke={green}
              strokeDasharray="3 3"
            />
            <Tag x={246} y={143}>
              Correspondance
            </Tag>
          </>
        )}
      </Art>
    );
  }
  return null;
}
