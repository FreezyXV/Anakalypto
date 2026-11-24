import {
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
