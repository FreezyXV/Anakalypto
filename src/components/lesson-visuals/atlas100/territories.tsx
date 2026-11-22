import {
  arrow,
  blue,
  brass,
  building,
  chalk,
  circle,
  ellipse,
  face,
  frame,
  house,
  ink,
  iron,
  line,
  mark,
  mist,
  moss,
  note,
  ochre,
  path,
  person,
  pick,
  rect,
  rust,
  sand,
  slate,
  teal,
  water,
  words,
} from "./parts";
import type { SceneSet } from "../Atlas65Parts";

const shore = "M33 59h294v49l-46 12-38-16-37 18-51-9-33 32-89 16Z";
const inland = "M52 87q43-11 80 13t75-5 109 1";

const population = frame(
  [
    "Dix points valent un milliard",
    "Comparer deux accroissements",
    "Huit milliards estimés en 2022",
  ],
  (s) => {
    const count = pick(s, [40, 70, 80]);
    return [
      ...Array.from({ length: 80 }, (_, i) =>
        circle(
          56 + (i % 16) * 16.4,
          64 + Math.floor(i / 16) * 21,
          4.3,
          i < count ? (i >= 70 ? brass : iron) : mist,
          i < count ? blue : slate,
        ),
      ),
      words(180, 173, pick(s, ["4 milliards", "7 milliards", "8 milliards"])),
    ];
  },
);

const balances = frame(
  ["Naissances moins décès", "Arrivées moins départs", "Les deux soldes s’additionnent"],
  (s) => [
    rect(117, 64, 126, 97, sand, ochre),
    building(154, 135, 49, 44, iron),
    s === 0 && [
      person(70, 118, teal, 0.68),
      person(292, 118, rust, 0.68),
      arrow(87, 112, 112, 112, teal),
      arrow(249, 112, 274, 112, rust),
    ],
    s === 1 && [
      arrow(47, 95, 111, 95, teal),
      arrow(249, 135, 314, 135, rust),
      words(74, 77, "Arrivées"),
      words(287, 157, "Départs"),
    ],
    s === 2 && [
      rect(43, 75, 56, 36, water, blue),
      rect(263, 75, 56, 36, sand, ochre),
      words(70, 99, "+ 3"),
      words(291, 99, "− 1"),
      arrow(99, 95, 112, 95),
      arrow(262, 95, 247, 95),
      words(180, 183, "Solde total : + 2"),
    ],
    s < 2 && words(180, 183, s === 0 ? "Solde naturel" : "Solde migratoire"),
  ],
);

const migration = frame(
  ["Un changement de résidence", "Un passage de frontière", "Le stock se lit à une date"],
  (s) => [
    rect(42, 59, 276, 111, water, blue),
    path("M48 69h120l22 41-18 50H48Z", moss, teal),
    path("M171 69h140v91H174l18-50Z", sand, ochre),
    line("M168 69l24 42-19 49", ink, 2, "4 4"),
    person(77, 139, iron, 0.65),
    person(275, 137, brass, 0.65),
    s === 0
      ? [arrow(84, 122, 136, 92, teal), mark(138, 91, teal), words(91, 86, "Interne")]
      : s === 1
        ? [arrow(108, 96, 238, 120, ochre, true), mark(243, 121), words(216, 89, "International")]
        : [
            person(220, 133, teal, 0.65),
            person(251, 103, iron, 0.62),
            words(197, 184, "Résidents recensés"),
          ],
  ],
);

const coast = frame(
  [
    "Le littoral concentre des usages",
    "Le bâti occupe la bande côtière",
    "La côte bouge dans le temps",
  ],
  (s) => [
    rect(33, 50, 294, 131, water, blue),
    path(shore, moss, teal),
    line(inland, "#7f9a82", 1.3, "4 3"),
    ...[
      [91, 130],
      [123, 112],
      [161, 99],
      [194, 112],
      [223, 100],
      [271, 108],
    ]
      .slice(0, s === 0 ? 2 : 6)
      .map(([x, y], i) => building(x!, y!, 18, 13 + (i % 2) * 4, i % 2 ? brass : iron)),
    s === 0 && words(252, 158, "Mer"),
    s === 1 && arrow(277, 153, 242, 121, rust),
    s === 2 && [
      line("M36 165l83-12 40-30 47 8 38-17 37 15 43-10", rust, 2.1, "4 4"),
      words(187, 177, "Ligne de côte déplacée"),
    ],
  ],
);

const urban = frame(
  ["L’habitat occupe un noyau", "Le bâti s’étend par les axes", "La part urbaine peut augmenter"],
  (s) => [
    path("M40 143l62-70 113-17 106 92-60 29H91Z", moss, teal),
    line("M49 148l218-56M102 164l111-96m-77 10 119 92", chalk, 4),
    ...[
      [146, 128],
      [174, 124],
      [202, 119],
      [227, 104],
      [115, 136],
      [235, 137],
      [254, 154],
      [270, 122],
    ]
      .slice(0, pick(s, [3, 6, 8]))
      .map(([x, y], i) => building(x!, y!, 16, i < 3 ? 22 : 14, i < 3 ? iron : brass)),
    s === 2 && [
      line("M103 118q120-66 190-17l-26 57H99Z", blue, 2, "5 4"),
      words(181, 185, "Extension stylisée"),
    ],
  ],
);

const overseas = frame(
  [
    "Des terres loin les unes des autres",
    "Chaque terre a une façade maritime",
    "La superficie en mer se mesure",
  ],
  (s, id) => [
    face(id, "M39 69h282v99H39Z", "glass"),
    path(
      "M49 83l38-9 24 13-13 23-25 16-21-19Zm83 26 30-26 36 4 22 17-11 23-35-6-25 21Zm129 21 32-18 17 10-10 27-27 4Z",
      moss,
      teal,
    ),
    ...[
      [87, 143],
      [184, 142],
      [269, 109],
    ].map(([x, y]) =>
      s === 0
        ? mark(x!, y!, rust, 5)
        : [
            ellipse(x!, y!, s === 1 ? 17 : 24, s === 1 ? 13 : 19, "#a3c6d1", blue),
            mark(x!, y!, rust, 4),
          ],
    ),
    s === 2 && words(180, 187, "Un domaine maritime dispersé"),
  ],
);

const sea = frame(
  [
    "La côte fixe un premier repère",
    "La souveraineté s’étend près du bord",
    "Plus au large, les droits changent",
  ],
  (s) => [
    rect(37, 66, 286, 101, water, blue),
    path("M38 66h73l21 24-11 21 15 35-20 21H38Z", moss, teal),
    s > 0 && path("M130 67h42v100h-47l13-23-15-34 11-20Z", "#a1c1c6", blue),
    s === 2 && [rect(172, 67, 113, 99, "#d4e4e6", iron, 0), line("M284 67v100", blue, 2, "4 3")],
    s === 0
      ? note(199, 101, "Ligne de base", "M132 90l23 18h44")
      : arrow(136, 146, s === 1 ? 170 : 283, 146, ochre),
    words(82, 96, "Terre"),
    s > 0 && words(s === 1 ? 214 : 226, 124, s === 1 ? "Mer territoriale" : "ZEE"),
    words(
      182,
      185,
      pick(s, ["Depuis la ligne de base", "Jusqu’à 12 milles", "Jusqu’à 200 milles"]),
    ),
  ],
);

const frontiers = frame(
  [
    "Le relief peut servir de repère",
    "Une ligne peut venir d’un accord",
    "La carte montre un choix humain",
  ],
  (s) => [
    rect(42, 56, 275, 116, "#d3d9b8", teal),
    path("M166 57q-25 29 1 43t38 28l-29 44", "none", blue, 8),
    line("M197 61q45 8 110 0M55 151q38-19 75-14", mist, 1.3),
    s === 0
      ? [
          line("M166 57q-25 29 1 43t38 28l-29 44", ochre, 1.7, "4 4"),
          words(247, 153, "Cours d’eau"),
        ]
      : s === 1
        ? [line("M94 57l165 115", rust, 2.5, "5 4"), words(239, 93, "Ligne convenue")]
        : [
            line("M149 57v36l51 26-18 53", rust, 2.4, "5 4"),
            mark(148, 92),
            mark(201, 119),
            words(265, 152, "Bornes"),
          ],
  ],
);

const resources = frame(
  ["Repérer les ressources visibles", "Lire aussi le sous-sol", "Relier ressource, accès et usage"],
  (s, id) => [
    face(id, "M34 138l48-55 94 18 42-41 106 49v66H34Z", "brass"),
    path("M34 138l48-55 94 18 42-41 106 49v13l-108-47-38 44-95-20-49 57Z", moss, teal),
    path("M111 104l30 8 20 34", "none", blue, 6),
    s === 0 && [words(96, 146, "Cultures"), words(258, 106, "Bois")],
    s === 1 && [ellipse(237, 145, 38, 13, iron, ink), note(264, 78, "Argile", "M248 85l-11 45")],
    s === 2 && [
      ellipse(237, 145, 38, 13, iron, ink),
      arrow(227, 139, 179, 161, ochre),
      house(106, 171, mist, 0.62),
      words(250, 123, "Accès"),
    ],
  ],
);

const compass = frame(
  ["La carte donne des repères", "La boussole indique le nord", "Deux directions se recoupent"],
  (s, id) => [
    rect(38, 58, 284, 112, water, blue),
    path("M39 59h100l-28 29 19 24-91 46Z", moss, teal),
    path("M322 59h-54l-14 40 22 16 46-11Z", sand, ochre),
    mark(117, 108),
    mark(272, 105),
    s === 0 && [words(108, 83, "Repère A"), words(272, 86, "Repère B")],
    s === 1 && [
      circle(176, 117, 38, mist, blue),
      face(id, "M176 82l-7 40 7-6 7 6Z", "brass"),
      words(177, 159, "Nord"),
    ],
    s === 2 && [
      line("M117 108l65 37 90-40", blue, 2.2, "5 4"),
      mark(182, 145, rust, 5),
      words(183, 185, "Position estimée"),
    ],
  ],
);

export const territories100: SceneSet = {
  populationGrid: population,
  departmentBalance: balances,
  migrationStock: migration,
  crowdedCoast: coast,
  cityGrowth: urban,
  overseasScale: overseas,
  marineZones: sea,
  borderMap: frontiers,
  territoryAssets: resources,
  chartCompass: compass,
};
