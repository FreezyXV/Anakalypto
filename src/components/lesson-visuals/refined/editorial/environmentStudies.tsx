import {
  type Study,
  type TransportTone,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  grounding,
  heat,
  joint,
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

function pine(id: string, x: number, y: number, s: number, tone: "green" | "dry" = "green") {
  const shades =
    tone === "green" ? ["#839764", "#5f7752", "#4d6e53"] : ["#a39160", "#8c7854", "#806244"];
  return moved(
    x,
    y,
    [
      oval(0, 3, 23, 4, "#5f735630"),
      stroke("M1-42 0 6m1-24-4 18m0-22 5 22", "#796448", 3.15),
      ...[0, 1, 2].map((i) =>
        fillPath(
          `M1 ${-59 + i * 13}q-6 12-${16 + i * 3} 22l9-2-4 6q16 2 31-4l-6-4 5 1Z`,
          shades[i]!,
          "#526950",
          0.9,
        ),
      ),
      stroke("M1-52l-9 13 6-1m3 3-12 16 8-4m5-1 8 7", "#a9b083", 1.1),
    ],
    s,
  );
}
function flower(id: string, x: number, y: number, s: number) {
  return moved(
    x,
    y,
    [
      stroke("M0 32q-7-26 1-54", forest, 3),
      fillPath(
        "M-1 20q-16-21-28-14 7 12 28 14M0 27q11-19 25-16-6 13-25 16",
        "#8b9861",
        "#5d7953",
        0.95,
      ),
      ...Array.from({ length: 7 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 7;
        return oval(
          2 + 12 * Math.cos(a),
          -24 + 11 * Math.sin(a),
          6.1,
          5.5,
          paint(id, "cream"),
          "#9b8256",
        );
      }),
      oval(2, -24, 7, 5.6, "#bb8d4c", "#7e643e"),
    ],
    s,
  );
}
function shell(id: string, x: number, y: number, s: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 4, 31, 50),
      surface(id, "M-40 6q-7-24 16-33 30-20 57 2 9 9 9 31L8 32H-7Z", "cream", 1.32),
      ...[-31, -21, -11, 0, 11, 23, 33].map((x, i) =>
        stroke(`M1 29Q${x * 0.87} -1 ${x} ${-9 - Math.abs(3 - i) * 3}`, "#a88261", 1.25),
      ),
      stroke("M-36 5q37-20 74 0m-64 16q26-9 51 0", "#d9c7a3", 1.45),
    ],
    s,
  );
}
function landscape(id: string, shore = false, river = true) {
  return [
    surface(id, "M31 112l41-24 61-27 41 9 42-15 80 18 33 28v55l-26 16H32Z", "copper", 1.23),
    fillPath(
      "M32 113l40-25 61-27 41 9 42-15 80 18 33 28-31 34-80 1-65 19-62-10-59 12Z",
      shore ? "#aaa581" : "#a0a782",
      "#748665",
      1.11,
    ),
    fillPath("M32 156l61-10 60 9 65-19 81-1 29-32v54l-24 15H32Z", "#9b815b", "#75694f", 0.93),
    stroke("M40 160l53-9 62 9 62-18 84-3 20-16M55 167l42-9 54 9 67-17 77-5", "#dcc899", 1.08),
    ...[0, 1, 2].map((i) =>
      stroke(`M${55 + i * 20} ${112 + i * 8}q52-45 114-26t87 3`, "#dde0b0", 1.25),
    ),
    river && [
      stroke("M135 61q19 20 58 18 15-1 11 13-4 11 21 14 20 4 29 24", "#4b7880", 6),
      stroke("M135 61q19 20 58 18 15-1 11 13-4 11 21 14 20 4 29 24", "#abc2a6", 1.24),
    ],
  ];
}
function house(id: string, x: number, y: number, s: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 6, 26, 38),
      surface(id, "M-31-1l29-21 31 18 11 6v31h-66Z", "cream", 1.05),
      surface(id, "M-34 0l31-25 33 16 12 14-33-1-12-19-26 16Z", "copper", 1.2),
      block(-16, 7, 11, 11, paint(id, "glass"), "#6d7f6d", 1),
      block(9, 9, 11, 25, paint(id, "iron"), dark, 1),
      stroke("M-26 31h61m-32-43 26 13", "#ddcc9d", 1.12),
    ],
    s,
  );
}
function shelfWater(warm: boolean, expanded = false) {
  const level = expanded ? 87 : warm ? 92 : 107;
  const particles = expanded ? 22 : 18;
  const rows = Math.ceil(particles / 6);
  return [
    block(47, 51, 266, 106, "#a8bdab", "#758d7a", 4),
    fillPath(`M48 ${level}q133-5 263 0V156H48Z`, warm ? "#749c94" : "#7297a0", "#507780", 0.96),
    ...Array.from({ length: particles }, (_, i) => (
      <circle
        key={i}
        data-water-particle
        cx={58 + (i % 6) * 26 + (Math.floor(i / 6) % 2) * 3}
        cy={level + 9 + (Math.floor(i / 6) * (144 - level - 9)) / (rows - 1)}
        r="2.4"
        fill="#9ebab0"
        stroke="#4e7f81"
        strokeWidth=".7"
      />
    )),
    stroke(`M56 ${level + 3}q130-5 246 0`, "#c9dbb6", 1.65),
    stroke("M48 107h261", "#ebe0b4", 1.7, "5 3"),
  ];
}
function cup(
  id: string,
  x: number,
  y: number,
  scale: number,
  pct: number,
  tone: TransportTone = "glass",
) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 38, 56),
      surface(id, "M-39-36h78l-10 67q-30 13-58 0Z", tone, 1.25),
      fillPath(`M-31 ${34 - pct}q31 8 62 0l-6 ${pct - 5}q-31 8-50 0Z`, "#729f9a", "#517d75", 1),
      oval(0, -36, 39, 8, paint(id, "steel"), dark),
      oval(0, -36, 35, 5, "#91a394", "#b8c9a6"),
      oval(0, 34 - pct, 29, 4.8, "#a0beb0", "#628a82"),
      stroke("M-32-24l7 45m51-32h-10m9 9h-8m7 10h-11m9 9h-6", "#dad6ad", 1.3),
    ],
    scale,
  );
}
function bin(id: string, x: number, y: number, s: number, tone: TransportTone) {
  return moved(
    x,
    y,
    [
      surface(id, "M-33-23l13-8h49l11 8-9 60h-55Z", tone, 1.15),
      surface(id, "M-37-20h75v9h-75Z", "steel", 0.9),
      stroke("M-22-5l4 31m16-31v31m18-31-4 31", "#b5b693", 1.38),
      ...joint(id, -21, 39, 5),
      ...joint(id, 22, 39, 5),
    ],
    s,
  );
}
function particle(x: number, y: number, t: number) {
  return [
    oval(x, y, 4, 3.5, t === 0 ? "#a88459" : "#7d9c83", "#6a816b"),
    stroke(`M${x - 6} ${y}h-4m14 0h4`, t === 0 ? "#af935b" : "#91ad95", 1),
  ];
}
export const environmentStudies = {
  natureServices: {
    foot: [
      "Les insectes déplacent du pollen",
      "Une zone humide retarde l’écoulement",
      "Végétation et sol stockent du carbone",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            flower(id, 111, 121, 0.94),
            flower(id, 249, 117, 1),
            moved(174, 89, [
              oval(-6, -4, 9, 5, "#a9874f", "#726147"),
              oval(3, -5, 12, 7, "#b89754", "#6b6747"),
              stroke("M1-11v12m6-12v12M-8-6q-4-23 12-12l3 13m5-5 9-15", "#687c66", 1.5),
            ]),
            stroke("M126 93q47-34 98-4", "#9c8252", 1.85, "4 3"),
            label(171, 62, "Pollen", heat),
          ]
        : [
            ...landscape(id, false, s === 1),
            ...[
              [82, 100],
              [119, 104],
              [172, 115],
              [198, 107],
            ].map(([x, y], i) => pine(id, x!, y!, 0.53 + i * 0.09)),
            s === 1
              ? [
                  oval(231, 119, 34, 16, "#79a4a0", "#618978"),
                  stream(246, 123, 274, 135, forest),
                  label(273, 63, "Rétention", cold),
                ]
              : [
                  ...[99, 147, 186].map((a) => particle(a, 154, 0)),
                  label(261, 62, "Carbone", forest),
                ],
          ],
  },
  editionWildfireLandscape: {
    foot: [
      "Relief et végétation influencent le feu",
      "Le vent peut déplacer les fumées",
      "Priorité aux personnes exposées",
    ],
    draw: (s, id) => [
      ...landscape(id, false, false),
      ...[97, 132, 167, 196, 226].map((a, i) =>
        pine(id, a, 122 - (i % 3) * 10, 0.54, i < 2 ? "dry" : "green"),
      ),
      s < 2 && [
        fillPath("M109 127q1-12 9-20l1 11 9-22 10 20 3-7 6 21Z", "#c4874f", "#8e613c", 1.1),
        stroke(
          s === 0 ? "M120 103q-8-21 1-33t-1-15" : "M127 104q-3-20 25-27 43-5 70-22",
          "#91a395",
          4,
          "5 3",
        ),
      ],
      s === 0
        ? label(249, 73, "Végétation", forest)
        : s === 1
          ? [stream(168, 60, 237, 60, heat), label(272, 65, "Vent", heat)]
          : [
              house(id, 271, 134, 0.64),
              oval(265, 133, 34, 23, "none", "#af8857"),
              label(259, 68, "Habitations", cold),
            ],
    ],
  },
  detailForestMosaic: {
    foot: [
      "Bois et sol contiennent du carbone",
      "La croissance change les échanges",
      "Une perte d’arbres change ce stock",
    ],
    draw: (s, id) => [
      ...landscape(id, false, false),
      ...[
        [68, 120, 0.69],
        [111, 109, 0.7],
        [153, 117, 1],
        [190, 112, 0.68],
        [242, 123, 0.93],
        [282, 131, 0.6],
      ].map(([x, y, scale], i) =>
        s === 2 && i % 2 === 1
          ? [surface(id, `M${x! - 8} ${y! - 6}l7-6 8 5v9H${x! - 8}Z`, "copper", 0.88)]
          : pine(id, x!, y!, scale!),
      ),
      s === 0
        ? [...[103, 157, 212].map((a) => particle(a, 155, 0)), label(233, 151, "Sol", heat)]
        : s === 1
          ? [stream(221, 49, 221, 89, forest), label(264, 57, "Échanges", cold)]
          : label(242, 67, "Stock modifié", heat),
    ],
  },
  forestRenewal: {
    foot: [
      "Les arbres ont plusieurs âges",
      "Une ouverture peut laisser plus de lumière",
      "De jeunes arbres peuvent s’installer",
    ],
    draw: (s, id) => [
      ...landscape(id, false, false),
      pine(id, 77, 122, 0.7),
      pine(id, 118, 105, 0.92),
      pine(id, 270, 128, 1.01),
      ...(s === 0
        ? [pine(id, 182, 124, 0.88), pine(id, 223, 129, 0.6), label(204, 63, "Âges variés", cold)]
        : s === 1
          ? [
              oval(197, 66, 10, 10, paint(id, "copper"), "#a98952"),
              stream(194, 78, 182, 114, heat),
              label(147, 60, "Lumière", heat),
            ]
          : [
              pine(id, 163, 128, 0.36),
              pine(id, 188, 135, 0.32),
              pine(id, 214, 130, 0.44),
              label(205, 70, "Jeunes arbres", forest),
            ]),
    ],
  },
  seacarbon: {
    foot: [
      "Le CO₂ s’échange dans les deux sens",
      "Le brassage entraîne l’eau vers le fond",
      "L’absorption de CO₂ fait baisser le pH",
    ],
    draw: (s, id) => [
      block(42, 67, 275, 103, "#9db9a9", "#516e6b", 5),
      fillPath("M43 112q111-16 273 0v57H43Z", "#4e7380", "#466e74", 1.15),
      stroke("M50 91q80-9 257 0", "#d4ddba", 1.41),
      ...(s === 0
        ? [
            stream(123, 61, 123, 105, forest),
            stream(216, 108, 217, 61, cold),
            label(169, 60, "CO₂", heat),
          ]
        : s === 1
          ? [
              stroke("M88 111q29-13 97 16 44 28 85-3", "#bed4b5", 2.35),
              stream(176, 122, 226, 146, cold),
              label(247, 82, "Brassage", cold),
            ]
          : [
              panel(id, 103, 75, 150, 40, "steel"),
              stroke("M113 100h126", "#c9d3a5", 1.5),
              stream(202, 101, 160, 101, heat),
              label(178, 88, "pH", cold),
            ]),
    ],
  },
  oceanacid: {
    foot: [
      "Le CO₂ passe aussi dans l’eau",
      "Le pH de l’eau baisse",
      "Moins de carbonate pour les coquilles",
    ],
    draw: (s, id) => [
      block(43, 65, 273, 102, "#a8bdac", "#537b71", 6),
      fillPath("M44 93q130-9 271 0v72H44Z", "#668f93", "#5d8685", 1.1),
      s === 0
        ? [
            ...[
              [111, 74],
              [144, 82],
              [213, 66],
            ].map(([x, y]) => particle(x!, y!, 0)),
            stream(168, 78, 169, 120, heat),
            label(241, 125, "CO₂ dissous", cold),
          ]
        : s === 1
          ? [
              panel(id, 91, 95, 178, 53, "iron"),
              stroke("M117 127h127", "#bdcba8", 2),
              stream(223, 127, 147, 127, heat),
              label(138, 112, "pH plus bas", cold),
            ]
          : [
              shell(id, 114, 125, 0.9),
              [206, 244, 276].map((x) => particle(x, 127, 1)),
              label(248, 78, "Carbonate", forest),
            ],
    ],
  },
  floodAdaptation: {
    foot: [
      "Une crue peut atteindre le bâti",
      "L’eau peut s’étaler sur un espace prévu",
      "Une forte crue peut dépasser la capacité",
    ],
    draw: (s, id) => [
      ...landscape(id, true),
      house(id, 114, 118, 0.7),
      house(id, 255, 124, 0.79),
      fillPath(
        s === 0
          ? "M154 92q15 19 63 14l38 22-51 14-32 7-30-13 22-12Z"
          : s === 1
            ? "M149 89q20 9 48 8l36 10-26 24-42 8-28-17 16-12Z"
            : "M115 82q41 6 76 13l58 10 38 17-49 28-62 10-54-15-17-23Z",
        "#739c9e91",
        "#5d8890",
        1.26,
      ),
      s === 1 && stroke("M114 146q36-10 80-4 21 2 53-19", "#dcc69a", 3, "4 3"),
      label(s === 0 ? 237 : 228, 59, ["Zone exposée", "Expansion", "Capacité dépassée"][s]!, cold),
    ],
  },
  sealevelrise: {
    foot: [
      "Le repère donne un niveau de départ",
      "L’eau chaude peut se dilater",
      "La glace continentale ajoute de l’eau",
    ],
    draw: (s) => [
      ...shelfWater(s === 1, s === 2),
      fillPath("M205 120l17-30 18-11 11-23 18 7 14-13 30 32v74H204Z", "#aa9870", "#72866c", 1.21),
      s === 2 && [
        fillPath(
          "M233 85l18-28 19 8 12-14 21 21-10 8-17-5-13 13-23-6Z",
          "#dbe3ca",
          "#91aaa3",
          1.09,
        ),
        stroke("M262 80q-15 18-28 16-15 3-23 19", "#9ac2b5", 2.05),
        stream(220, 106, 202, 121, cold),
      ],
      s === 1 && stream(129, 119, 128, 86, heat),
      label(113, 69, ["Repère", "Dilatation", "Eau ajoutée"][s]!, s === 1 ? heat : cold),
    ],
  },
  detailClimateHabitats: {
    foot: [
      "Le relief abrite plusieurs habitats",
      "Les conditions peuvent se déplacer",
      "Une infrastructure peut couper le milieu",
    ],
    draw: (s, id) => [
      fillPath(
        "M39 147l49-20 44-33 39-13 31-40 48 43 24 6 48 55v18H39Z",
        "#a8ac81",
        "#758263",
        1.34,
      ),
      fillPath(
        "M39 147l49-20 44-33 39-13 31-40 48 43 24 6 48 55-50-14-30-20-24-30-28 20-33 17-56 34Z",
        "#c2c0a0",
        "#80916d",
        0.93,
      ),
      ...[99, 134, 166, 258].map((a, i) =>
        pine(id, a, [132, 113, 100, 124][i]!, [0.43, 0.48, 0.53, 0.54][i]!),
      ),
      s === 0
        ? label(272, 72, "Altitude", cold)
        : s === 1
          ? [stream(156, 131, 197, 83, heat), label(274, 61, "Déplacement", cold)]
          : [
              stroke("M110 161l128-76", "#655e4b", 7),
              stroke("M110 161l128-76", "#dfc08a", 1.3, "4 3"),
              label(270, 65, "Rupture", heat),
            ],
    ],
  },
  recyclesort: {
    foot: [
      "Une matière principale facilite le tri",
      "Certains objets réunissent des couches",
      "Collecter, trier, puis préparer",
    ],
    draw: (s, id) => [
      s < 2
        ? [
            surface(id, "M95 138l35-61h114l-33 61Z", "steel", 1.2),
            ...(s === 0
              ? [
                  stroke("M102 136h109l34-59", "#bfcaa2", 2.1),
                  label(246, 66, "Une matière", forest),
                ]
              : [
                  surface(id, "M95 145l35-61h114l-33 61Z", "copper", 1.01),
                  surface(id, "M95 153l35-61h114l-33 61Z", "glass", 0.94),
                  link(271, 108, "Couches", "M244 111l-23 15", heat),
                ]),
          ]
        : [
            bin(id, 86, 117, 0.76, "glass"),
            bin(id, 180, 117, 0.76, "copper"),
            bin(id, 272, 117, 0.76, "steel"),
            stream(119, 108, 148, 108, forest),
            stream(214, 108, 234, 108, forest),
            label(180, 64, "Tri", cold),
          ],
    ],
  },
  repairCycle: {
    foot: [
      "La panne peut venir d’une seule pièce",
      "Une pièce disponible peut être remplacée",
      "Le contrôle vérifie le fonctionnement",
    ],
    draw: (s, id) => [
      tile(id, 79, 145, 213, 18, "iron"),
      surface(id, "M88 70l12-10h162l16 11v75H88Z", "steel", 1.25),
      surface(id, "M102 76h139v60H102Z", "soot", 1.14),
      ...[117, 132, 146, 161].map((x) => stroke(`M${x} 84v44`, "#9aa888", 1.58)),
      ...joint(id, 213, 106, 16, s === 0 ? "copper" : "steel"),
      s === 0
        ? label(259, 54, "Défaut", heat)
        : s === 1
          ? [
              ...joint(id, 275, 97, 11, "copper"),
              stream(269, 110, 237, 110, forest),
              label(262, 54, "Pièce", cold),
            ]
          : [
              oval(255, 125, 4.4, 4.4, "#a9c385"),
              stroke("M110 131h83", "#b1cca2", 2.3),
              label(245, 54, "Contrôle", forest),
            ],
    ],
  },
  detailDrainagePlot: {
    foot: [
      "Les eaux usées quittent la maison",
      "La fosse retient une partie des matières",
      "Le sol peut participer au traitement",
    ],
    draw: (s, id) => [
      surface(id, "M38 114l48-11h213l24 15v50H38Z", "copper", 1.22),
      stroke("M44 123l42-12h212m-250 44h264", "#cbb184", 1.1),
      house(id, 91, 84, 0.76),
      ...(s === 0
        ? [
            duct("M91 110v27h63", cold),
            stream(111, 137, 162, 137, forest),
            label(235, 77, "Vers la fosse", cold),
          ]
        : [
            tank(id, 146, 102, 77, 57, "steel", 0.61),
            duct("M94 112v25h57m74 0h40", cold, s === 2),
            s === 1
              ? [stroke("M162 144q25 4 48 0", "#c49362", 2.8), label(258, 82, "Dépôt", heat)]
              : [
                  ...[251, 270, 291].map((x) => stream(x, 137, x, 157, forest)),
                  label(270, 93, "Sol", forest),
                ],
          ]),
    ],
  },
  algaebloom: {
    foot: [
      "Les nutriments gagnent les cours d’eau",
      "L’excès favorise certaines proliférations",
      "La décomposition peut réduire l’oxygène",
    ],
    draw: (s, id) => [
      ...landscape(id, true),
      fillPath("M222 108q52-12 93 0v46h-77Z", "#799e9b", "#648a81", 1.02),
      ...(s === 0
        ? [
            [148, 70],
            [177, 83],
            [192, 90],
            [221, 109],
          ].map(([x, y]) => particle(x!, y!, 0))
        : Array.from({ length: s === 1 ? 16 : 7 }, (_, i) =>
            oval(
              238 + ((i * 13) % 69),
              115 + ((i * 7) % 31),
              5 + (i % 3),
              2.6,
              s === 1 ? "#8ea46b" : "#7c8964",
              "#64836a",
            ),
          )),
      s === 2 && stream(221, 105, 221, 145, heat),
      label(263, 65, ["Nutriments", "Algues", "Oxygène en baisse"][s]!, cold),
    ],
  },
  waterBalance: {
    foot: [
      "La ressource varie selon lieu et saison",
      "Les secteurs prélèvent de l’eau",
      "Moins de ressource, plus de pression",
    ],
    draw: (s, id) => [
      cup(id, 93, 114, 0.94, s === 2 ? 25 : 45),
      s === 0
        ? [
            cup(id, 177, 113, 0.82, 35),
            cup(id, 256, 114, 0.92, 59),
            label(187, 62, "Variabilité", cold),
          ]
        : [
            duct("M131 119h76m-21 0V91h76m-76 27v27h99", cold),
            house(id, 258, 81, 0.64),
            ...[227, 251, 276].map((x, i) =>
              stroke(`M${x} ${143 + (i % 2) * 3}l12-7`, "#8f9b64", 1.5),
            ),
            label(251, 59, s === 1 ? "Prélèvements" : "Ressource réduite", s === 1 ? cold : heat),
          ],
    ],
  },
  detailIndoorAir: {
    foot: [
      "Des sources peuvent polluer l’air",
      "Le monoxyde de carbone est invisible",
      "L’air se renouvelle par des échanges",
    ],
    draw: (s, id) => [
      surface(id, "M49 60H305v91l-22 17H49Z", "cream", 1.22),
      fillPath("M52 149h252l-20 18H52Z", "#ad9e7a", "#7c856a", 1.1),
      block(207, 71, 66, 67, paint(id, "glass"), "#6e8a77", 2),
      stroke("M240 72v65m-31-35h62", "#c8cfaa", 1.63),
      tile(id, 73, 116, 79, 31, "iron", 8),
      stroke("M87 128h50m-49 12h47", "#b0b995", 1.5),
      s === 0
        ? [
            ...[
              [103, 100],
              [137, 91],
              [154, 110],
              [176, 103],
            ].map(([x, y]) => particle(x!, y!, 0)),
            label(134, 83, "Émissions", heat),
          ]
        : s === 1
          ? label(132, 83, "CO invisible", heat)
          : [
              stream(186, 99, 251, 99, forest),
              stream(256, 121, 187, 121, cold),
              label(127, 80, "Échanges", cold),
            ],
    ],
  },
  chartCompass: {
    foot: [
      "Carte et terrain partagent des repères",
      "L’aiguille indique le nord magnétique",
      "Deux directions aident à situer un point",
    ],
    draw: (s, id) => [
      panel(id, 54, 56, 248, 110, "cream"),
      fillPath("M65 64h224v69q-55-48-93-29t-131 30Z", "#a8b391", "#73866c", 1.1),
      stroke("M67 113q54-18 94-17t79-6m-165 37q49-25 87-23 42 3 72-9", "#d9d0a0", 1.35),
      s === 0
        ? [
            pine(id, 107, 124, 0.58),
            house(id, 253, 103, 0.63),
            label(233, 149, "Deux repères", cold),
          ]
        : s === 1
          ? [
              oval(170, 108, 47, 43, paint(id, "iron"), dark),
              oval(170, 108, 41, 38, paint(id, "cream"), dark),
              fillPath("M170 73l7 37-7 22-7-22Z", "#a97046", "#6f664d", 1.02),
              label(169, 74, "N", heat),
              label(270, 152, "Boussole", cold),
            ]
          : [
              stroke("M104 91l84 52 69-59", "#987347", 2.2, "5 3"),
              ...[
                [104, 91],
                [188, 143],
                [257, 84],
              ].map(([x, y]) => oval(x!, y!, 5, 4, paint(id, "copper"), dark)),
              label(242, 151, "Position", heat),
            ],
    ],
  },
} satisfies Record<string, Study>;
