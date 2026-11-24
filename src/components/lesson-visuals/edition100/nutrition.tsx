import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  focus,
  harm,
  ink,
  label,
  living,
  moved,
  oval,
  round,
  shadow,
  stroke,
} from "../detail100/plate";
import { grain, leaf, plate, vial } from "./craft";

function vessel(id: string, width = 280) {
  return [
    filled(
      id,
      `M40 107q${width / 2} 24 ${width} 0v92q-${width / 2} 23-${width} 0Z`,
      "clay",
      "dots",
    ),
    stroke(`M40 122q${width / 2} 22 ${width} 0m-${width} 66q${width / 2} 24 ${width} 0`, harm, 1.3),
  ];
}

function gut(id: string) {
  return [
    filled(id, "M31 90h298v121H31Z", "clay", "engraving"),
    filled(
      id,
      "M36 97h288v96q-27-15-47 4-24 13-43-4-23-16-47 3-23 13-45-4-27-16-48 5-30 7-58-5Z",
      "ivory",
    ),
    [
      round(id, 184, 147, 10, "plant"),
      round(id, 203, 139, 7, "plant"),
      round(id, 218, 162, 9, "glass"),
      stroke("M172 151l6 2m25-28v9m24 37 8 4", living, 2.1),
    ],
  ];
}

function meal(id: string, x: number, y: number, variant: number, scale = 1) {
  return moved(
    x,
    y,
    [
      shadow(id, 0, 45, 73, 14),
      round(id, 0, 0, 62, "ivory"),
      oval(0, 0, 53, 53, "none", ink),
      leaf(id, -17, -10, 0.83),
      leaf(id, 11, 17, 0.6),
      ...[
        [-33, 15],
        [-7, 37],
        [17, -27],
        [31, -9],
        [34, 21],
      ].map(([xx, yy], i) => grain(id, xx!, yy!, 0.5, i === variant ? "clay" : "brass")),
      variant === 0
        ? filled(id, "M8-30q14-14 40 4-8 13-30 12Z", "glass", "engraving")
        : variant === 2
          ? [oval(29, -21, 18, 14, "#f6ead6", ink), round(id, 31, -21, 7, "brass")]
          : stroke("M18-34q24 6 23 25", living, 1.7),
    ],
    scale,
  );
}

export const nutritionPlates = {
  editionLipidRoutes: plate(
    ["Vers les tissus", "Retour d’une partie du cholestérol", "Dans la paroi"],
    (s, id) => [
      vessel(id),
      ...[75, 126, 180, 231, 279].map((x, i) => [
        round(id, x, 151 + (i % 2) * 18, 9, s === 1 ? "glass" : "brass"),
        oval(x, 151 + (i % 2) * 18, 4, 4, "none", ink),
      ]),
      s === 0 && [arrow(78, 93, 270, 93, flow), call(114, 76, "LDL", "M110 82l15 56")],
      s === 1 && [arrow(277, 92, 81, 92, living), call(241, 76, "HDL", "M238 82l-5 75")],
      s === 2 && [
        filled(id, "M159 199q29-42 58-19l22 30h-80Z", "brass", "engraving"),
        call(258, 86, "Paroi", "M252 92l-32 84", harm),
      ],
    ],
  ),
  editionFibreColon: plate(
    ["Substrat de certains microbes", "Micro-organisme vivant", "Actions distinctes"],
    (s, id) => [
      gut(id),
      s !== 1 && [
        grain(id, 71, 141, 1.37),
        grain(id, 102, 165, 0.85),
        arrow(126, 149, 164, 149, flow),
      ],
      s !== 0 && [vial(id, 257, 105, "plant", 0.68), arrow(257, 145, 229, 148, living)],
      s === 0 && call(102, 77, "Prébiotique", "M105 82l-22 48"),
      s === 1 && call(265, 78, "Probiotique", "M273 85v20", living),
      s === 2 && stroke("M181 115v64", ink, 1.2, "4 4"),
    ],
  ),
  editionIronCarrier: plate(
    ["Réserve de fer", "Transport de l’oxygène", "Des réserves peuvent baisser"],
    (s, id) => [
      vessel(id),
      ...[72, 129, 190, 251, 288].map((x, i) => [
        oval(x, 151 + (i % 2) * 22, 16, 10, `url(#${id}-clay)`, harm),
        oval(x, 151 + (i % 2) * 22, 8, 4, "#9f6a58", harm),
      ]),
      s === 0 && [
        round(id, 91, 82, 9, "brass"),
        round(id, 113, 80, 7, "brass"),
        label(229, 86, "Réserves"),
      ],
      s === 1 && [
        round(id, 190, 131, 5, "glass"),
        round(id, 129, 150, 5, "glass"),
        call(260, 82, "Hémoglobine", "M249 86l-52 57"),
      ],
      s === 2 && [
        stroke("M58 91h152", flow, 2, "5 5"),
        arrow(221, 91, 278, 91, harm),
        label(161, 78, "Disponibilité"),
      ],
    ],
  ),
  editionHairFollicle: plate(["La racine est vivante", "Fabrication de la fibre"], (s, id) => [
    filled(id, "M37 121h285v87H37Z", "clay", "dots"),
    filled(id, "M37 121h285v21H37Z", "ivory", "engraving"),
    stroke("M46 154c25-9 49-9 75 0m93-1c35-13 69-12 103-1", harm, 1.1),
    ...[66, 94, 237, 266, 293].map((x, i) => oval(x, 189 - (i % 3) * 7, 9, 4, "#bc886c", harm)),
    filled(id, "M148 110q-22 34-13 67t39 35q35-2 36-32 0-23-32-66Z", "brass", "dots"),
    stroke("M148 135c-15 33 0 74 28 67 20-5 19-33 10-53", "#87674f", 1.7),
    filled(id, "M138 136c-32 5-30 27-9 27l14-10Zm48-3c33-16 40 14 22 17l-15-1Z", "ivory", "dots"),
    stroke("M101 193q28 1 43-22m39 44q20-18 37-19", harm, 2.2),
    stroke("M170 195q16-49-33-126", ink, 9),
    stroke("M169 188q8-46-31-111", "#a08d71", 2),
    s === 0 && call(251, 187, "Follicule", "M236 191l-41 4"),
    s === 1 && [
      arrow(125, 215, 162, 199, flow),
      call(238, 87, "Tige", "M224 92l-56 17"),
      round(id, 167, 194, 5, "clay"),
      stroke("M163 187q8-30-10-66", flow, 1.8, "4 3"),
    ],
  ]),
  editionSkinBarrier: plate(
    ["Couches superficielles", "Renouvellement", "Facteurs combinés"],
    (s, id) => [
      filled(id, "M34 99q86-12 165 0t127 0v110H34Z", "clay", "dots"),
      filled(id, "M34 99q86-12 165 0t127 0v33q-96 16-150 2-81-11-142 0Z", "ivory", "engraving"),
      stroke("M35 165q67-13 139 1t151-1", harm, 2),
      ...[60, 108, 159, 208, 254, 302].map((x, i) =>
        stroke(`M${x} ${103 + (i % 2) * 3}v23`, ink, 1.1),
      ),
      s === 0 && call(255, 73, "Barrière", "M251 79l-6 28"),
      s === 1 && [arrow(179, 176, 179, 128, living), call(88, 208, "Cellules", "M101 199l67-26")],
      s === 2 && [
        arrow(92, 75, 93, 106, flow),
        arrow(250, 108, 253, 73, flow),
        label(182, 83, "Échanges"),
      ],
    ],
  ),
  editionFoodReactions: plate(
    ["Réponse immunitaire", "Digestion du lactose", "Mécanismes différents"],
    (s, id) => [
      filled(id, "M34 150h292v57H34Z", "clay", "engraving"),
      ...[61, 107, 153, 200, 246, 291].map((x) =>
        filled(id, `M${x - 12} 152q7-36 24 0v27h-24Z`, "ivory"),
      ),
      ...(s === 0
        ? [
            vial(id, 46, 71, "brass", 0.54),
            round(id, 178, 131, 15, "glass"),
            round(id, 239, 130, 12, "clay"),
            stroke("M175 130l10-17m-10 17-11-15m11 15v20", harm, 2.65),
            arrow(96, 128, 154, 128, harm),
          ]
        : s === 1
          ? [
              [96, 120, 143].map((x) => round(id, x, 125, 8, "brass")),
              [222, 240].map((x) => round(id, x, 125, 6, "glass")),
              stroke("M164 125h40", flow, 2, "4 4"),
            ]
          : [
              block(46, 90, 116, 43, "#e0c493", harm),
              block(200, 90, 116, 43, "#b7c8c0", flow),
              label(104, 116, "Immunité"),
              label(258, 116, "Digestion"),
            ]),
    ],
  ),
  editionGlutenVillous: plate(["Surface plissée", "Surface réduite"], (s, id) => [
    filled(id, "M33 177q38 3 66 0t75 0 88 0 64-1v40H33Z", "clay", "dots"),
    stroke("M40 204q67-15 140-3t137-2", harm, 2),
    ...[48, 91, 134, 177, 220, 263].map((x, i) => {
      const apex = s === 0 ? 112 + (i % 3) * 7 : 161 - (i % 2) * 4;
      return [
        filled(
          id,
          `M${x} 191C${x + 11} 163 ${x - 4} ${apex} ${x + 16} ${apex}S${x + 29} 169 ${x + 40} 191Z`,
          "ivory",
          "engraving",
        ),
        stroke(
          `M${x + 13} 187q${(i % 2) * 5 + 3} -9 3 -${169 - apex}m0 ${153 - apex} 12 23`,
          harm,
          1.05,
        ),
        stroke(`M${x + 3} 185q9-36 5-${166 - apex}m19 0q1 23 10 ${166 - apex}`, active, 1.3, "2 4"),
      ];
    }),
    s === 0 && [call(185, 79, "Villosités", "M185 85l4 24"), arrow(89, 84, 105, 117, flow)],
    s === 1 && [
      call(206, 119, "Villosités aplaties", "M199 125l-8 26", harm),
      stroke("M52 150h249", harm, 1.1, "6 4"),
    ],
  ]),
  editionMediterraneanTable: plate(
    ["Aliments végétaux", "Huile et autres aliments", "Habitudes dans la durée"],
    (s, id) => [
      meal(id, 125, 149, s === 1 ? 0 : 1, 1.19),
      s === 0 && call(265, 102, "Végétaux", "M247 110l-85 25", living),
      s === 1 && [vial(id, 246, 111, "brass", 0.86), call(265, 88, "Huile", "M265 94v18")],
      s === 2 && [meal(id, 270, 148, 0, 0.68), stroke("M198 216h77", flow, 1.7, "5 3")],
    ],
  ),
  editionPlantTable: plate(
    ["Deux façons de composer", "Diversité sur la durée", "Un nutriment à repérer"],
    (s, id) => [
      meal(id, 104, 144, 1, 0.95),
      meal(id, 262, 144, s === 0 ? 2 : 1, 0.95),
      s === 0 && [label(104, 220, "Végétalien"), label(260, 220, "Végétarien")],
      s === 1 && [
        arrow(167, 142, 198, 142, living, true),
        call(201, 73, "Varier", "M197 80l-11 38"),
      ],
      s === 2 && [block(160, 77, 43, 33, "#d4b989", harm), label(181, 99, "B12")],
    ],
  ),
  editionFatGeometry: plate(
    ["Coude de la chaîne", "Chaîne plus rectiligne", "Configuration au niveau de C=C"],
    (s, id) => [
      filled(id, "M36 83h288v128H36Z", "ivory", "dots"),
      stroke(
        s === 0
          ? "M51 131l36 19 29-20 38 20h51l35-10 34-18 37 6"
          : s === 1
            ? "M51 131l36 19 29-20 38 20h51l35 18 34-18 37 17"
            : "M51 131l36 19 29-20 38 20h51l35 18 34-18 37 17",
        ink,
        3.8,
      ),
      stroke("M156 142h47", harm, 2.8),
      ...[154, 205].map((x) => round(id, x, 150, 7, "brass")),
      s === 2 && [focus(179, 147, 41, harm), call(181, 104, "Double liaison", "M180 110v29", harm)],
    ],
  ),
};
