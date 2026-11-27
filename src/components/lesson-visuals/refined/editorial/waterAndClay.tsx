import {
  type Study,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  grounding,
  heat,
  label,
  link,
  moved,
  oval,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tank,
} from "./art";
import { earthSlice } from "./habitats";

function houseProfile(id: string, x: number, y: number) {
  return moved(x, y, [
    surface(id, "M5 38L84 0l82 38v60H5Z", "cream", 1.3),
    surface(id, "M0 39L81-8 177 36l-11 7L83 3 12 48Z", "iron", 1.16),
    surface(id, "M24 52h53v26H24Zm72 0h48v24H96Z", "glass", 1.1),
    stroke("M49 53v25m70-25v24M11 92h151", "#b8b395", 1.25),
    ...[34, 52, 71, 91, 110, 132].map((x, i) =>
      stroke(`M${x} ${16 - Math.abs(3 - i) * 7}l7 6`, "#d4ccad", 1.1),
    ),
  ]);
}

function waterVessel(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  level: number,
  solid: boolean,
) {
  return moved(x, y, [
    surface(
      id,
      `M0 8Q0 0 ${w / 2} 0T${w} 8l-9 ${h - 16}q-1 8-${w / 2 - 9} 8T9 ${h - 8}Z`,
      "glass",
      1.21,
    ),
    fillPath(
      `M5 ${h * (1 - level)}q${w / 2 - 5} 8 ${w - 10} 0l-4 ${Math.max(4, h * level - 10)}q-${w / 2 - 9} 6-${w - 18} 0Z`,
      "#71958d",
      "#5f8c88",
      0.9,
    ),
    oval(w / 2, 8, w / 2, 8, paint(id, "glass"), dark),
    stroke(`M8 16l7 ${h - 34}m-${6} -32h11`, "#e2dfb6", 1.27),
    solid && [
      ...Array.from({ length: 13 }, (_, i) =>
        oval(
          13 + ((i % 6) * (w - 26)) / 5,
          h - 12 - Math.floor(i / 6) * 9,
          1.9 + (i % 3) * 0.45,
          2,
          paint(id, "copper"),
          "#816e50",
        ),
      ),
    ],
  ]);
}

function paperRoll(id: string, x: number, y: number, w: number) {
  return moved(x, y, [
    surface(id, `M0 7l13-7h${w - 12}v23l-11 9H0Z`, "steel", 1.22),
    oval(w, 11, 11, 12, paint(id, "iron"), dark),
    oval(w + 1, 12, 5, 6, paint(id, "steel"), dark),
    stroke(`M5 9h${w - 9}m-7 12h-${w - 19}`, "#dcd7b5", 1.5),
  ]);
}

function clayPot(id: string, x: number, y: number, s: number) {
  return moved(x, y, [
    grounding(id, 0, 45, 63),
    surface(
      id,
      "M-36-44h73l-6 15q21 16 24 40 4 25-16 33h-80q-19-8-16-33 3-24 25-40Z",
      s === 0 ? "glass" : "copper",
      1.32,
    ),
    oval(0, -44, 37, 8.5, paint(id, s === 2 ? "copper" : "cream"), dark),
    oval(0, -44, 29, 5.1, paint(id, "iron"), dark),
    stroke("M-34-31q35 10 69 0m-85 45q53 21 104 0m-100 11q50 14 95-1m-83 12h67", "#ead0a1", 1.22),
    s === 2 && [
      stroke("M-40-8q35 9 79 0m-89 16q56 12 104-1", heat, 1.6),
      ...[-27, -13, 1, 14, 27].map((a) => stroke(`M${a} -7l4 4 4-4`, "#e5bf83", 1.1)),
    ],
  ]);
}

export const waterAndClay = {
  paperloop: {
    foot: [
      "Le brassage sépare les fibres",
      "Les bulles emportent de l’encre",
      "Les fibres reforment une feuille",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            waterVessel(id, 111, 72, 142, 88, 0.58, s === 1),
            ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
              stroke(`M${123 + i * 13} ${104 + (i % 3) * 13}q5-7 11 2`, "#d2c69a", 1.41),
            ),
            s === 0
              ? [
                  surface(id, "M52 56h47l15 41H66Z", "cream"),
                  stroke("M60 64h36m-33 10h34m-31 6h25", "#94896a", 1.45, "4 2"),
                  stream(95, 83, 123, 101, cold),
                  label(75, 132, "Journal", cold),
                ]
              : [
                  ...[151, 167, 184, 199, 217].map((x, i) =>
                    oval(x, 85 + (i % 2) * 13, 3.8, 3.5, "none", "#dee0b7"),
                  ),
                  link(288, 61, "Mousse", "M274 65l-45 19", heat),
                ],
          ]
        : [
            paperRoll(id, 81, 91, 176),
            paperRoll(id, 81, 124, 176),
            fillPath("M41 118h260l25 9-27 6-258-4Z", "#e5d8ae", "#a6a17f", 1.14),
            label(174, 65, "Pressage", heat),
            stream(232, 157, 285, 157, forest),
          ],
  },
  groundwater: {
    foot: [
      "L’eau descend entre les grains",
      "Les pores saturés contiennent de l’eau",
      "Le puits atteint la zone saturée",
    ],
    draw: (s, id) => [
      earthSlice(id, 79, 172, s > 0),
      s > 0 && [
        fillPath("M29 123q55 8 111-1 75-1 113 3l78-1v40H29Z", "#7f9b90", "#678b83", 0.93),
        stroke("M31 124q47 7 110-2 68 0 111 2h75", "#c7d6b7", 1.3, "5 3"),
      ],
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) =>
        oval(
          45 + (i % 9) * 31,
          104 + Math.floor(i / 9) * 34 + (i % 3) * 6,
          2.4,
          1.9,
          i >= 9 && s > 0 ? "#b5caba" : "#d4bf93",
          i >= 9 && s > 0 ? cold : "#a38b67",
        ),
      ),
      s === 0
        ? [
            ...[74, 116, 169, 223].flatMap((x) => stream(x, 59, x, 100, cold)),
            label(278, 63, "Pluie", cold),
          ]
        : s === 1
          ? link(270, 60, "Niveau de la nappe", "M260 67l-25 55", cold)
          : [
              surface(id, "M196 60h18v104h-18Z", "steel", 1.15),
              duct("M206 150V52h61", cold),
              stream(206, 112, 206, 74, cold),
              label(281, 66, "Puits", cold),
              stroke("M198 148h14m-14 5h14m-14 5h14", "#526960", 1.23),
            ],
    ],
  },
  desalination: {
    foot: [
      "L’eau entrante contient des sels",
      "L’eau est mise sous pression",
      "L’eau et la saumure sortent séparément",
    ],
    draw: (s, id) => [
      waterVessel(id, 40, 90, 68, 64, 0.55, true),
      surface(id, "M131 84l12-12h129l13 14v57H131Z", "steel", 1.26),
      fillPath("M140 91h135v46H140Z", "#8fae9f", "#6c8f82", 0.9),
      surface(id, "M202 81h10v57h-10Z", "cream", 1.04),
      stroke("M204 85v49m6-48v47", "#899881", 1.25, "2 2"),
      ...[149, 162, 174, 187, 190].map((x, i) =>
        oval(x, 105 + (i % 2) * 15, 2.5, 2.4, paint(id, "copper"), heat),
      ),
      duct("M104 120h28", cold, true),
      s === 1 && [
        rotor(id, 137, 119, 15, "copper"),
        stream(164, 112, 197, 112, heat),
        label(156, 60, "Pression", heat),
      ],
      s === 2
        ? [
            duct("M284 104h33v-29", cold),
            duct("M188 136v22h128", heat),
            label(288, 62, "Eau filtrée", cold),
            label(293, 174, "Saumure", heat),
          ]
        : link(254, 61, "Membrane", "M239 67l-24 19", cold),
    ],
  },
  sewageplant: {
    foot: [
      "La grille retient les gros déchets",
      "L’air accompagne le traitement",
      "Les boues se séparent de l’eau",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            waterVessel(id, 94, 77, 167, 87, 0.66, true),
            surface(id, "M155 66l18 1 36 79-19 7Z", "iron", 1.02),
            ...[0, 1, 2, 3, 4].map((i) =>
              stroke(`M${159 + i * 6} ${75 + i * 12}l14-4`, "#d4cead", 1.4),
            ),
            link(273, 68, "Grille", "M249 73l-62 24", cold),
          ]
        : s === 1
          ? [
              waterVessel(id, 98, 76, 156, 97, 0.58, true),
              duct("M64 141h155v-19", cold),
              ...[124, 145, 171, 192, 218].map((x, i) =>
                oval(x, 101 + (i % 3) * 13, 3.3, 3.2, "none", "#dedac2"),
              ),
              label(282, 64, "Aération", cold),
            ]
          : [
              waterVessel(id, 99, 69, 161, 96, 0.58, true),
              fillPath("M117 147q78 12 123 0l-9 10h-103Z", "#aa8d64", "#796c4e", 0.95),
              duct("M254 111h60", cold),
              stream(263, 111, 313, 111, cold),
              link(295, 65, "Sortie", "M292 74l4 30", cold),
              label(162, 177, "Boues", heat),
            ],
  },
  rainharvest: {
    foot: [
      "La gouttière rassemble le ruissellement",
      "Le filtre retient des débris",
      "L’eau rejoint une cuve fermée",
    ],
    draw: (s, id) => [
      houseProfile(id, 45, 60),
      tank(id, 247, 109, 66, 63, s === 2 ? "glass" : "steel", 0.55),
      duct("M129 62l94 43v43h24", cold, s !== 1),
      s === 0
        ? [
            ...[109, 140, 165, 190].flatMap((x) => stream(x, 50, x + 11, 77, cold)),
            label(266, 77, "Gouttière", cold),
          ]
        : s === 1
          ? [
              panel(id, 207, 103, 30, 31, "iron"),
              stroke("M213 111l17 11m-17-2 16-8", paint(id, "copper"), 1.75),
              duct("M220 130v31h-18", heat),
              link(270, 77, "Filtre", "M257 82l-24 24", heat),
            ]
          : [stream(221, 148, 247, 148, cold), label(281, 91, "Cuve", cold)],
    ],
  },
  detailWaterTreatment: {
    foot: [
      "L’eau brute peut contenir des particules",
      "La clarification réduit les particules",
      "Contrôle et protection de l’eau",
    ],
    draw: (s, id) => [
      waterVessel(id, 41, 89, 80, 74, 0.56, s < 2),
      waterVessel(id, 141, 74, 79, 89, 0.63, s === 1),
      tank(id, 249, 92, 68, 71, s === 2 ? "glass" : "steel", 0.62),
      duct("M119 118h22m78 0h29", cold, s > 0),
      label(80, 73, "Entrée", cold),
      s === 1
        ? [
            fillPath("M150 140q29 8 59 0l-7 12h-44Z", "#ac9069", "#816b50", 0.9),
            label(176, 65, "Clarifier", cold),
          ]
        : s === 2
          ? [
              panel(id, 258, 64, 43, 20, "steel"),
              stroke("M265 73l6 4 8-8", forest, 1.8),
              label(181, 59, "Contrôle", forest),
            ]
          : label(76, 174, "Eau brute", heat),
    ],
  },
  claykiln: {
    foot: [
      "L’argile humide se laisse modeler",
      "L’eau libre s’évacue au séchage",
      "La cuisson transforme la matière",
    ],
    draw: (s, id) =>
      s === 2
        ? [
            surface(id, "M91 96q17-40 83-45 70 3 89 46v72H91Z", "iron", 1.3),
            fillPath("M108 103q17-31 69-37 52 3 68 39v50H108Z", "#a66e46", "#6a5a45", 1.0),
            moved(182, 116, [clayPot(id, 0, 0, 2)], 0.67),
            stroke("M119 152q-4-10 4-19 5 10 6 19m104 0q-4-10 3-20 4 11 4 20", "#e9b46b", 1.9),
            link(279, 76, "Four", "M269 80l-22 14", heat),
          ]
        : [
            clayPot(id, 174, 114, s),
            s === 0
              ? [
                  fillPath("M36 116q45-30 70-12l-8 27q-39 17-62 1Z", "#9da890", "#637d68", 1.08),
                  stream(99, 123, 125, 123, cold),
                  label(83, 75, "Argile humide", cold),
                ]
              : [
                  ...[144, 169, 198].map((x) => stroke(`M${x} 79q-7-13 3-25`, cold, 1.57, "4 3")),
                  link(271, 85, "Vapeur", "M257 83l-59-22", cold),
                ],
          ],
  },
} satisfies Record<string, Study>;
