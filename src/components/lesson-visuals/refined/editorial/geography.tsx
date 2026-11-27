import {
  type Study,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  heat,
  label,
  link,
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
  tank,
  tile,
} from "./art";

function build(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: "cream" | "steel" | "copper" = "cream",
) {
  return [
    tile(id, x, y, w, h, tone, 8),
    ...Array.from({ length: Math.max(1, Math.floor(h / 10)) }, (_, i) =>
      stroke(`M${x + 4} ${y + 13 + i * 10}h${w - 17}`, "#b8b292", 1.3, "3 2"),
    ),
  ];
}
function terrain(id: string, x = 0, y = 0, mode: "inland" | "coast" | "harbor" = "inland") {
  const land =
    mode === "inland"
      ? "M43 69h280v96H32V82Z"
      : mode === "coast"
        ? "M43 70h218q-15 17-44 20 24 13 7 28-14 3-37 16 15 14 2 32H33V83Z"
        : "M43 70h278v30q-73-15-99 19-30 29-46 5-18-28-63-24-51 9-79 14V83Zm-11 88q48-14 81-3 19 6 36 11H32Z";
  const clip = id + "-terrain-clip";
  return moved(x, y, [
    tile(id, 30, 57, 299, 110, mode === "inland" ? "cream" : "glass", 13),
    fillPath(land, mode === "inland" ? "#aeb18d" : "#b5a680", "#77866c", 1.15),
    <defs key="terrain-shape">
      <clipPath id={clip}>
        <path d={land} />
      </clipPath>
    </defs>,
    <g key="terrain-texture" clipPath={`url(#${clip})`}>
      {fillPath(
        "M23 95q103-49 187-11 63 26 113 8v62q-50-39-114-20Q75 175 23 141Z",
        "#8698766b",
        "none",
      )}
      {fillPath("M13 136q83 18 174-5 80-20 142-3v37H13Z", "#c5b88e72", "none")}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${18 + i * 6} ${94 + i * 13}q38-${20 + i * 3} 90-12 55 15 96 10t115-2`}
          fill="none"
          stroke={i % 2 ? "#d9c9a1" : "#6e846675"}
          strokeWidth={i % 2 ? 1.1 : 0.85}
        />
      ))}
      {Array.from({ length: 19 }, (_, i) => {
        const x = 45 + ((i * 43) % 266),
          y = 81 + ((i * 31) % 76);
        return (
          <path
            key={i}
            d={`M${x} ${y}l4-2 5 1`}
            fill="none"
            stroke={i % 3 ? "#778b6d84" : "#eee0b996"}
            strokeWidth=".76"
          />
        );
      })}
    </g>,
    mode !== "inland" && stroke("M238 142q34-4 78 3m-64-20h58m-51 32q23-6 55 0", "#ccdfbf", 1.18),
    stroke("M33 166h284m-280 5h267", "#53675d", 0.85),
  ]);
}
function village(id: string, x: number, y: number, scale: number, n: number) {
  return moved(
    x,
    y,
    [
      ...(
        [
          [0, 14],
          [27, 4],
          [55, 14],
          [28, 31],
          [63, 41],
          [4, 43],
          [85, 14],
          [93, 41],
        ] as const
      )
        .slice(0, n)
        .map(([a, b], i) => {
          const wall = i % 2 ? 18 : 13;
          const roof = i % 3 === 0 ? "#687e70" : i % 3 === 1 ? "#a0825b" : "#987052";
          return moved(a, b, [
            fillPath(`M0 10 11 2h13v${wall}l-9 7H0Z`, "#b3a17a", "#62715e", 0.92),
            fillPath(`M0 10l7-7 9 7v${wall}H0Z`, "#e2d6af", "#7c8268", 0.9),
            fillPath("M-2 11 6 1 17-4 26 3 16 11 6 2Z", roof, "#5e6c57", 0.82),
            stroke("M-1 10l7-8 9 8m-11 8v5m6-4v4", "#847554", 1.1),
          ]);
        }),
    ],
    scale,
  );
}
function cloud(
  id: string,
  x: number,
  y: number,
  scale: number,
  shape: "cumulus" | "cirrus" | "tower" | "fog",
) {
  return moved(
    x,
    y,
    [
      shape === "cirrus"
        ? [
            stroke(
              "M-67 3q50-19 97-15 20-5 41-15m-115 30q33-27 79-31m-48 18q-38 9-53 24m38-7q33-23 74-24",
              "#8fa7a1",
              2.05,
            ),
            stroke("M-61 8q51-20 106-19m-39-5q41-10 58-26", "#d2d7b8", 1.65),
          ]
        : shape === "fog"
          ? stroke("M-87-6q42-13 88-4t88-1m-167 14q40-13 84-3t77-2", "#acb6a4", 4.4)
          : [
              surface(
                id,
                shape === "tower"
                  ? "M-61 18q-19-24 16-32-3-18 17-24-8-15 14-27 4-23 37-19l44 3 12 13-38 8-2 17 18 15-1 18 18 12-10 16Z"
                  : "M-64 14q-10-19 20-21-3-19 23-22 9-28 37-13 15 4 17 23 25-7 39 15 4 10-4 18Z",
                "steel",
                1.16,
              ),
              fillPath(
                shape === "tower"
                  ? "M-57 14q-1-12 20-16-3-18 17-19 1-15 16-17 1-26 31-31l36 3q-27 4-36 14l-11 16q17 8 8 23 21 8 25 24-37-15-76 6Z"
                  : "M-60 12q-1-13 22-16 0-22 26-21 7-25 34-10 9 8 9 18 22-4 35 12l3 13q-27-13-61-4-36-5-68 8Z",
                "#cdd6b6ad",
                "none",
              ),
              stroke(
                shape === "tower"
                  ? "M-55 13q44-14 113 2m-65-62q11-10 38-13"
                  : "M-56 10q41-13 115-2m-51-35q28 14 35 13",
                "#e2dfc0",
                1.21,
              ),
            ],
    ],
    scale,
  );
}
function strata(id: string, x: number, y: number, s: number, kind: "fold" | "terrace" | "ridge") {
  return moved(x, y, [
    tile(id, 0, 85, 275, 24, "iron", 11),
    ...Array.from({ length: 5 }, (_, i) => {
      const a = 85 - i * 10;
      const d =
        kind === "fold"
          ? s === 0
            ? `M0 ${a}q80-1 142 0h130`
            : s === 1
              ? `M0 ${a}q64 2 87-21t73-3q43 29 112 24`
              : `M0 ${a}q70 12 97-29t59-11q57 39 116 40`
          : kind === "terrace"
            ? s === 0
              ? `M0 ${a - 36}l275 39`
              : `M0 ${a - 38}h70v11h65v12h64v10h73`
            : `M0 ${a}l84-18 55-${20 + i * 3} 57 33 76 ${8 + i * 3}`;
      return [stroke(d, i % 2 ? "#aa8d64" : "#768876", 10.8), stroke(d, "#c9b48b", 1.0)];
    }),
  ]);
}
function buildingMap(id: string, s: number) {
  return [
    terrain(id),
    stroke("M47 140q86-9 135-39 61-28 128-17M191 98l-22 62", "#777e66", 3.1),
    village(id, 131, 84, 0.91, s === 0 ? 3 : s === 1 ? 8 : 6),
  ];
}
function river(id: string, s: number, kind: "delta" | "basin" | "cycle") {
  return [
    terrain(id, 0, 0, kind === "delta" ? "coast" : "inland"),
    stroke("M45 89q57-5 86 13t75 15l60 20", cold, 8),
    stroke("M45 88q57-5 86 13t75 15l60 20", "#adcdb9", 2.2),
    kind === "delta" &&
      s > 0 && [
        fillPath("M200 119l33-14 60 14 8 26-35 15-45-11Z", "#cfb886", "#9f9873", 0.96),
        stroke("M185 116l55 5 41 13", cold, 4),
      ],
    kind === "delta" && s === 2 && stroke("M216 121q23-16 60-9m-64 12q38 26 65 21", cold, 3.8),
    kind === "basin" && s > 0 && stroke("M97 127l25-25m24-22 25 30 48 9m15 26-33-24", cold, 4.1),
    kind === "cycle" &&
      s === 2 && [stream(123, 115, 128, 146, cold), stream(204, 119, 216, 149, cold)],
  ];
}
export const geography = {
  migrationStock: {
    foot: [
      "Le déplacement peut être interne",
      "Changer de pays de résidence",
      "Un stock se compte à une date",
    ],
    draw: (s, id) => [
      terrain(id),
      stroke("M190 70l-22 29 21 28-14 38", dark, 2, "5 3"),
      ...[
        [85, 121],
        [136, 96],
        [237, 117],
        [273, 94],
      ]
        .slice(0, s === 2 ? 4 : 3)
        .map(([x, y], i) => [
          oval(x!, y! - 10, 4.5, 4.5, paint(id, i % 2 ? "copper" : "steel"), dark),
          surface(id, `M${x! - 6} ${y! - 4}h12v17h-12Z`, i % 2 ? "copper" : "steel", 0.67),
        ]),
      s < 2
        ? stream(103, 117, s === 0 ? 129 : 222, 116, s === 0 ? forest : heat)
        : label(244, 152, "Résidence", cold),
      label(187, 66, "Frontière", cold),
    ],
  },
  crowdedCoast: {
    foot: [
      "Le relief organise le littoral",
      "Le bâti peut se concentrer sur une bande",
      "Le trait de côte peut se déplacer",
    ],
    draw: (s, id) => [
      terrain(id, 0, 0, "coast"),
      s === 0
        ? [
            stroke("M60 129q41-40 111-36m-118 58q56-31 137-31", "#d2c49b", 1.55),
            link(99, 64, "Relief", "M104 69l19 28", cold),
          ]
        : s === 1
          ? [village(id, 87, 91, 0.83, 8), label(215, 67, "Bâti", heat)]
          : [
              stroke("M270 72q-59 28-30 45t-21 49", heat, 2.25, "5 4"),
              link(261, 67, "Trait de côte", "M257 71l-18 22", heat),
            ],
    ],
  },
  cityWaste: {
    foot: [
      "La collecte rassemble les déchets",
      "Le tri sépare certaines matières",
      "Les matières suivent des filières",
    ],
    draw: (s, id) => [
      tile(id, 39, 144, 285, 22, "iron", 10),
      ...[67, 126, 185, 244].map((x, i) => [
        surface(id, `M${x} 94h38v54h-38Z`, i === s ? "copper" : "steel", 1.11),
        surface(id, `M${x - 4} 87h46v10h-46Z`, "iron", 0.98),
        stroke(`M${x + 6} 105v32m11-32v34m11-33v35`, "#bec2a4", 1.07),
        ...[x + 7, x + 30].map((p) => oval(p, 147, 4, 4, paint(id, "soot"), dark)),
      ]),
      s === 1
        ? [stream(118, 74, 164, 74, forest), label(248, 66, "Tri", cold)]
        : s === 2
          ? [stream(174, 74, 221, 74, heat), label(250, 66, "Filières", cold)]
          : label(156, 65, "Collecte", cold),
    ],
  },
  detailVillageServices: {
    foot: [
      "Ressource et distribution ont leur rôle",
      "Les cultures occupent des parcelles",
      "Un équipement alimente des usages",
      "Les déchets doivent être traités",
    ],
    draw: (s, id) => [
      buildingMap(id, 0),
      s === 0
        ? [
            tank(id, 63, 82, 42, 63, "glass", 0.55),
            duct("M105 128h40v-13", cold),
            label(84, 69, "Réserve", cold),
          ]
        : s === 1
          ? [
              fillPath("M52 91h68v51H52Z", "#9da97e", "#7c8c68", 0.93),
              stroke("M57 102h55m-55 9h55m-55 10h55m-55 10h55", "#d6c494", 1.48),
              label(85, 71, "Cultures", forest),
            ]
          : s === 2
            ? [
                surface(id, "M53 114l22-24h42l-12 24Z", "soot", 1.2),
                stroke("M65 104h47m-26-12-9 21", cyanGeo, 1.08),
                duct("M89 118l53 17", heat),
                label(85, 71, "Panneau", heat),
              ]
            : [
                surface(id, "M61 91h41v39H61Z", "iron"),
                stroke("M64 98h35m-35 10h35", forest, 1.55),
                label(85, 72, "Collecte", forest),
              ],
    ],
  },
  cityGrowth: {
    foot: [
      "Le noyau concentre le bâti",
      "Le bâti s’étend le long des axes",
      "La part urbaine peut augmenter",
    ],
    draw: (s, id) => [
      buildingMap(id, s),
      s === 0
        ? link(258, 70, "Noyau", "M249 75l-61 39", heat)
        : s === 1
          ? [stroke("M50 145l106-40 143-24", heat, 1.65, "5 3"), label(267, 69, "Axes", heat)]
          : [
              panel(id, 239, 94, 75, 60, "cream"),
              block(250, 115, 20, 24, paint(id, "steel"), dark, 1),
              block(278, 103, 23, 36, paint(id, "copper"), dark, 1),
              label(275, 83, "Part urbaine", cold),
            ],
    ],
  },
  detailSeasonalBeds: {
    foot: [
      "Le gel peut retarder le semis",
      "Le sol se réchauffe",
      "Lumière et chaleur changent la saison",
      "Les conditions varient selon le lieu",
    ],
    draw: (s, id) => [
      tile(id, 51, 110, 260, 55, "copper", 15),
      ...[64, 106, 148, 190, 232, 274].map((x, i) => [
        stroke(`M${x} 120l18-20`, "#beaa7e", 1.22),
        s > 0 &&
          stroke(
            `M${x + 7} 116v-${s === 2 ? 34 + (i % 3) * 3 : 12 + (i % 2) * 4}m0 7 6-5m-6 2-6-4`,
            forest,
            2.12,
          ),
      ]),
      s === 0
        ? [
            stroke("M69 121l42-4m-22 12h72m-7 13h92", "#dddec3", 1.7, "3 2"),
            label(184, 75, "Gel", cold),
          ]
        : [
            oval(271, 70, 12, 12, paint(id, s === 3 ? "glass" : "copper"), dark),
            label(
              148,
              68,
              s === 1 ? "Sol plus chaud" : s === 2 ? "Croissance" : "Exposition",
              s === 3 ? cold : heat,
            ),
          ],
    ],
  },
  cloudtypes: {
    foot: [
      "Base assez plate et sommets arrondis",
      "Des filaments à haute altitude",
      "Le sommet peut former une enclume",
    ],
    draw: (s, id) => [
      block(30, 53, 298, 114, paint(id, "glass"), "#71877c", 8),
      cloud(
        id,
        181,
        s === 2 ? 142 : 120,
        s === 1 ? 1.13 : s === 2 ? 0.94 : 0.92,
        (["cumulus", "cirrus", "tower"] as const)[s]!,
      ),
      stroke("M38 157q48-10 95-5t109-2l76 6", "#adb997", 1.25),
      label(270, 74, ["Cumulus", "Cirrus", "Enclume"][s]!, dark),
    ],
  },
  monsoonwind: {
    foot: [
      "Terre et mer se réchauffent différemment",
      "Le vent d’été apporte de l’humidité",
      "Les vents dominants changent de sens",
    ],
    draw: (s, id) => [
      terrain(id, 0, 0, "coast"),
      oval(71, 73, 11, 11, paint(id, s === 2 ? "glass" : "copper"), dark),
      s === 0
        ? [stream(123, 140, 123, 101, heat), label(160, 63, "Continent", heat)]
        : s === 1
          ? [
              cloud(id, 173, 92, 0.48, "cumulus"),
              stream(287, 118, 186, 118, cold),
              label(267, 64, "Océan", cold),
            ]
          : [stream(107, 117, 253, 117, cold), label(96, 66, "Hiver", cold)],
    ],
  },
  pressureair: {
    foot: [
      "Les flux peuvent converger au sol",
      "L’air ascendant se refroidit",
      "L’air descendant se réchauffe",
    ],
    draw: (s, id) => [
      block(31, 53, 297, 113, paint(id, "glass"), "#71877c", 7),
      tile(id, 35, 147, 287, 17, "cream", 8),
      s < 2
        ? [
            stream(54, 141, 157, 141, cold),
            stream(304, 141, 207, 141, cold),
            stream(180, 137, 180, 77, forest),
          ]
        : [
            stream(179, 68, 179, 128, heat),
            stream(156, 140, 77, 140, cold),
            stream(207, 140, 288, 140, cold),
          ],
      s === 1
        ? cloud(id, 181, 74, 0.45, "cumulus")
        : label(267, 70, s === 0 ? "Montée" : "Descente", s === 0 ? cold : heat),
    ],
  },
  timezone: {
    foot: [
      "La région éclairée fait face au Soleil",
      "Les tranches théoriques font 15°",
      "Les fuseaux civils suivent des limites",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            oval(99, 115, 27, 27, paint(id, "copper"), "#977d5b"),
            oval(240, 116, 49, 49, paint(id, "glass"), dark),
            fillPath("M241 67q48 6 48 49t-48 49q22-30 0-98Z", "#476b6b", "#55776e", 0.94),
            stream(135, 116, 181, 116, heat),
            label(236, 58, "Midi solaire", cold),
          ]
        : [
            panel(id, 49, 70, 265, 90, "glass"),
            fillPath(
              "M76 91l36-14 37 15 43-12 31 16 50-7 19 26-42 28-28-12-46 17-23-24-38 4-39-17Z",
              "#a7ad85",
              "#81916d",
              0.93,
            ),
            ...[91, 127, 164, 201, 239, 274].map((x) =>
              stroke(
                s === 1 ? `M${x} 77v72` : `M${x} 81q-12 15 3 24l-4 17 7 16`,
                s === 1 ? cold : heat,
                1.65,
                s === 1 ? "5 3" : undefined,
              ),
            ),
            label(181, 59, s === 1 ? "15° par tranche" : "Limites civiles", s === 1 ? cold : heat),
          ],
  },
  detailFutureClouds: {
    foot: [
      "Les filaments apparaissent en altitude",
      "Un nuage épais se développe en hauteur",
      "Le brouillard réduit la visibilité",
    ],
    draw: (s, id) => [
      block(35, 52, 290, 114, paint(id, "glass"), "#859a89", 7),
      ...[53, 111, 214, 272].map((x, i) => build(id, x, 132 + (i % 2) * 7, 36, 23, "cream")),
      cloud(
        id,
        176,
        s === 0 ? 85 : s === 1 ? 139 : 140,
        s === 1 ? 0.83 : 0.87,
        (["cirrus", "tower", "fog"] as const)[s]!,
      ),
      label(269, 68, ["Cirrus", "Développement", "Brouillard"][s]!, cold),
    ],
  },
  waterjourney: {
    foot: [
      "L’énergie du Soleil vaporise l’eau",
      "L’eau se condense puis peut retomber",
      "L’eau ruisselle ou s’infiltre",
    ],
    draw: (s, id) => [
      river(id, s, "cycle"),
      s === 0
        ? [
            oval(268, 71, 12, 12, paint(id, "copper"), dark),
            stream(111, 107, 111, 72, cold),
            label(181, 66, "Vapeur", cold),
          ]
        : s === 1
          ? [
              cloud(id, 175, 81, 0.58, "cumulus"),
              ...[142, 168, 196].flatMap((x) => stream(x, 93, x, 115, cold)),
              label(273, 71, "Pluie", cold),
            ]
          : label(121, 69, "Infiltration", cold),
    ],
  },
  riverdelta: {
    foot: [
      "Le fleuve transporte des sédiments",
      "Il peut les déposer à l’embouchure",
      "Le fleuve peut se diviser en bras",
    ],
    draw: (s, id) => [
      river(id, s, "delta"),
      s === 0
        ? [stream(94, 103, 149, 112, cold), label(266, 67, "Sédiments", heat)]
        : label(269, 69, s === 1 ? "Dépôt" : "Bras", s === 1 ? heat : cold),
    ],
  },
  watershedridge: {
    foot: [
      "La crête sépare les eaux de surface",
      "Les deux versants ont leurs réseaux",
      "Les cours d’eau rejoignent un exutoire",
    ],
    draw: (s, id) => [
      strata(id, 42, 60, s, "ridge"),
      stroke("M161 67l22-14 23 23", heat, 1.59, "4 3"),
      s === 0
        ? link(259, 68, "Crête", "M244 73l-45-7", heat)
        : [
            stream(160, 87, 119, 115, cold),
            stream(195, 83, 246, 116, cold),
            s === 2 && [
              duct("M87 128l31-13 37 22m69 0 22-21 43 16", cold),
              label(278, 68, "Exutoire", cold),
            ],
          ],
    ],
  },
  rainshadow: {
    foot: [
      "L’air chaud et humide s’élève",
      "L’air redescend vers les subtropiques",
      "Une partie revient près du sol",
    ],
    draw: (s, id) => [
      block(36, 51, 289, 118, paint(id, "glass"), "#71877c", 7),
      tile(id, 39, 147, 283, 15, "cream", 9),
      stroke("M80 143V96q-1-30 31-31h143q18 5 19 33v45H80Z", "#718a75", 1.46, "5 3"),
      s === 0
        ? [stream(80, 131, 80, 89, cold), cloud(id, 122, 89, 0.38, "cumulus")]
        : s === 1
          ? stream(273, 97, 273, 138, heat)
          : stream(250, 143, 119, 143, forest),
      label(97, 168, "Équateur", cold),
      label(257, 168, "Subtropiques", cold),
    ],
  },
  overseasScale: {
    foot: [
      "Des terres sont réparties dans les océans",
      "La zone maritime peut être plus large",
      "Des aires éloignées s’additionnent",
    ],
    draw: (s, id) => [
      block(35, 57, 288, 114, paint(id, "glass"), "#668480", 8),
      ...[
        [80, 94],
        [177, 128],
        [271, 89],
      ].map(([x, y], i) => [
        s > 0 &&
          oval(
            x!,
            y!,
            s === 1 && i === 1 ? 46 : 32,
            s === 1 && i === 1 ? 28 : 21,
            "#a4b8a4",
            "#bfc9aa",
          ),
        fillPath(`M${x! - 9} ${y! + 1}l6-9 9 2 7 6-8 7-11-3Z`, "#bdab7d", "#8c9272", 0.9),
      ]),
      s === 2
        ? stroke("M80 110l99 33 93-40", heat, 1.6, "4 3")
        : label(179, 70, s === 0 ? "Terres" : "Zone maritime", cold),
    ],
  },
  terracefield: {
    foot: [
      "La pente peut emporter du sol",
      "Les terrasses raccourcissent la pente",
      "L’eau peut s’infiltrer davantage",
    ],
    draw: (s, id) => [
      strata(id, 43, 59, s, "terrace"),
      s === 0
        ? stream(84, 91, 254, 119, cold)
        : s === 1
          ? link(272, 69, "Murets", "M263 74l-25 34", heat)
          : [
              stream(99, 81, 99, 111, cold),
              stream(169, 91, 169, 121, cold),
              stream(248, 100, 248, 129, cold),
            ],
    ],
  },
  mountainfold: {
    foot: [
      "Les continents convergent",
      "Les couches se plissent et se décalent",
      "Soulèvement et érosion coexistent",
    ],
    draw: (s, id) => [
      strata(id, 43, 59, s, "fold"),
      s === 0
        ? [stream(48, 77, 113, 77, heat), stream(311, 77, 246, 77, heat)]
        : s === 1
          ? link(271, 61, "Pli", "M254 67l-54 15", heat)
          : [stroke("M183 60q-12 17 14 25t42 32", cold, 2.12), label(274, 71, "Érosion", cold)],
    ],
  },
  dryDesert: {
    foot: [
      "Les précipitations sont très faibles",
      "Une grande région polaire est désertique",
      "Le Sahara est un désert chaud",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            block(37, 56, 285, 110, paint(id, "glass"), "#778982", 8),
            fillPath(
              "M38 146l29-20 24 4 33-43 27 19 38-54 19 57 40-28 42 38 32 12v34H38Z",
              "#e0dbc1",
              "#a1af9c",
              1.18,
            ),
            stroke("M152 105l36-50 20 48m-111 58q78-18 183-16", "#b4c6b1", 1.34),
            label(242, 71, "Antarctique", cold),
          ]
        : [
            fillPath(
              "M36 144q57-70 104-31 56-75 119-13 39 8 63 44v28H36Z",
              s === 2 ? "#bc9769" : "#c3ab80",
              "#a08863",
              1.22,
            ),
            stroke("M41 144q81-33 113-20t93-1q34-16 68 18", "#e3c697", 1.6),
            label(253, 63, s === 2 ? "Sahara" : "Peu de pluie", heat),
          ],
  },
  sandGrains: {
    foot: [
      "Les grains varient de taille et de forme",
      "Le granulat répond à des critères",
      "L’extraction peut modifier le milieu",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            panel(id, 58, 66, 244, 99, "cream"),
            ...Array.from({ length: 17 }, (_, i) => {
              const x = 74 + (i % 9) * 25,
                y = 102 + Math.floor(i / 9) * 34 + (i % 3) * 4;
              return s === 1
                ? oval(x, y, 5 + (i % 2), 5, paint(id, "copper"), dark)
                : surface(
                    id,
                    `M${x} ${y}l${4 + (i % 4)}-6 7 4 2 8-10 3Z`,
                    i % 3 ? "cream" : "copper",
                    0.9,
                  );
            }),
            label(178, 61, s === 1 ? "Sélection" : "Grains", cold),
          ]
        : [
            river(id, 0, "basin"),
            surface(id, "M147 87h31l11 22h-42Z", "copper"),
            stroke("M179 90l42 15-10 23", heat, 2.6),
            link(264, 65, "Extraction", "M253 70l-40 50", heat),
          ],
  },
  territoryAssets: {
    foot: [
      "Eau, sols et bois sont cartographiés",
      "Une coupe révèle d’autres ressources",
      "L’accès et l’usage comptent",
    ],
    draw: (s, id) =>
      s === 1
        ? [strata(id, 44, 58, s, "ridge"), link(255, 66, "Sous-sol", "M247 72l-28 48", heat)]
        : [
            terrain(id),
            village(id, 144, 101, 0.72, 5),
            stroke("M61 104q22 22 58 16t59 22", cold, 3),
            s === 0
              ? [label(83, 68, "Eau", cold), label(260, 66, "Sol", forest)]
              : [stream(212, 124, 271, 124, heat), label(272, 67, "Accès", heat)],
          ],
  },
  seaPassage: {
    foot: [
      "Le détroit relie deux bassins",
      "Des navires empruntent la même voie",
      "Le détour peut être plus long",
    ],
    draw: (s, id) => [
      terrain(id, 0, 0, "harbor"),
      s === 0
        ? link(227, 66, "Détroit", "M220 73l-27 48", cold)
        : s === 1
          ? [stream(75, 126, 162, 133, cold), stream(271, 129, 205, 127, cold)]
          : [
              stroke("M70 115q24 68 124 39t104-47", heat, 2.3, "5 3"),
              label(266, 67, "Détour", heat),
            ],
    ],
  },
} satisfies Record<string, Study>;
const cyanGeo = "#b0cac1";
