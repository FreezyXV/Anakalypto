import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  graph,
  ground,
  harm,
  label,
  layers,
  lineGrey,
  moved,
  oval,
  prism,
  round,
  shadow,
  stroke,
} from "./plate";
import { personSide } from "./vehicle";
import { myofiber } from "./body";

function field(id: string, x = 37, y = 95) {
  return moved(x, y, [
    prism(id, 0, 0, 249, 121, 19, "plant"),
    stroke("M9 10h231v101H9Zm115 0v101m-115-77h31v54H9m231-54h-31v54h31", "#e4e6d3", 1.55),
    oval(124, 60, 21, 21, "none", "#e4e6d3"),
  ]);
}
function upperLeg(id: string, x = 55, y = 100, flex = false) {
  return moved(x, y, [
    shadow(id, 108, 102, 120, 14),
    filled(
      id,
      flex
        ? "M19 11q46 2 105 27l28 22 17-28 33-15 17 20-40 47-23 13-38-28-102-24Z"
        : "M18 10q56 7 125 33l84 18-3 19-93-10-113-26Z",
      "ivory",
      "engraving",
    ),
    filled(
      id,
      flex
        ? "M18 13q60 0 124 39l-10 18Q71 46 21 41Z"
        : "M21 13q64 2 118 26l50 26-61-8Q65 29 21 38Z",
      "clay",
      "dots",
    ),
    stroke(flex ? "M29 24q58 5 102 35" : "M25 25q86 5 121 29", harm, 2),
  ]);
}
function redCells(id: string, n: number) {
  return [
    filled(id, "M37 118q91-24 286 0v81q-194-27-286 0Z", "clay", "dots"),
    ...Array.from({ length: n }, (_, i) =>
      moved(56 + (i % 8) * 33, 134 + Math.floor(i / 8) * 19 + (i % 3) * 2, [
        oval(0, 0, 11, 6, `url(#${id}-clay)`, harm),
        oval(0, 0, 5, 2.4, "#aa6c59", harm),
      ]),
    ),
  ];
}
const timeWave =
  "M34 157h19l7-9 5 9h6l6-15 6 36 8-61 8 44 14-4h22l7-9 5 9h5l7-15 6 36 8-61 8 44 14-4h29l7-9 5 9h5l7-15 6 36 8-61 8 44 14-4h25";
export const motionLabPlates = {
  detailFifaCount: (s: number, id: string) =>
    layers([
      field(id),
      ...[
        [55, 46],
        [102, 32],
        [171, 33],
        [210, 49],
        [151, 80],
        [68, 80],
        [100, 91],
        [211, 86],
      ].map(([x, y], i) =>
        round(id, x! + 37, y! + 95, i <= s * 3 ? 7 : 4, i <= s * 3 ? "brass" : "steel"),
      ),
      s === 0 && call(208, 75, "Un recensement", "M212 81l-25 34"),
      s === 1 && [round(id, 160, 151, 7, "ivory"), label(176, 249, "Périmètre du comptage")],
    ]),
  detailCompareTrack: (s: number, id: string) =>
    layers([
      filled(id, "M51 92h239a52 52 0 0 1 0 104H51a52 52 0 0 1 0-104Z", "clay", "engraving"),
      filled(id, "M49 128h241a16 16 0 0 1 0 32H49a16 16 0 0 1 0-32Z", "plant"),
      stroke(
        "M55 108h236a36 36 0 0 1 0 72H55a36 36 0 0 1 0-72Zm19-12v30m37-30v30m126 34v35",
        "#f2dfbf",
        2,
      ),
      round(id, s === 0 ? 94 : s === 1 ? 150 : 221, 181, 6, "brass"),
      s === 1 && [arrow(89, 215, 203, 215, active), label(178, 247, "Même épreuve")],
      s === 2 && [
        stroke("M81 219h80m35 0h83", flow, 1.8, "5 4"),
        label(179, 247, "Conditions comparables"),
      ],
      s === 0 && label(179, 246, "Une marque de référence"),
    ]),
  detailWarmupLoad: (s: number, id: string) =>
    layers([
      upperLeg(id, 41, 108, s === 2),
      ...Array.from({ length: 3 }, (_, i) =>
        stroke(
          `M${82 + i * 45} 150q17-22 8-45`,
          s === 0 ? lineGrey : harm,
          s === 0 ? 1 : 1.9,
          s === 0 ? "3 4" : undefined,
        ),
      ),
      s === 0 && label(163, 244, "Avant le mouvement"),
      s === 1 && [arrow(100, 91, 185, 91, harm), label(178, 247, "Activation progressive")],
      s === 2 && [
        stroke("M227 187q42 3 65-48", flow, 2.2, "5 4"),
        label(171, 247, "Mouvement spécifique"),
      ],
    ]),
  detailLoadRecovery: (s: number, id: string) =>
    layers([
      graph(47, 76, 267, 139),
      stroke(
        "M49 197q35-2 42-61l22 36 27-63 25 42 39-66 16 37 34-28 53 5",
        s === 2 ? lineGrey : active,
        2.8,
      ),
      s > 0 && stroke("M49 199q36 8 58-5t64-27 53-32 84-26", flow, 3),
      s === 2 && [
        filled(id, "M130 151l26-30 30 24-23 25Z", "brass", "dots"),
        call(240, 70, "Décalage", "M211 76l-34 51"),
      ],
      label(88, 69, "Niveau"),
      label(272, 244, "Temps"),
    ]),
  detailFiberSoreness: (s: number, id: string) =>
    layers([
      myofiber(id, 52, 111, 1.19),
      s === 0 && [
        round(id, 101, 87, 7, "glass"),
        round(id, 124, 80, 5, "glass"),
        call(215, 75, "Lactate", "M201 82l-71 0"),
      ],
      s === 1 && [
        stroke("M141 117l5 8-8 9 9 8-7 12m49-35 5 9-9 9 8 8-5 10", harm, 2),
        call(236, 77, "Tissu sollicité", "M228 82l-43 42"),
      ],
      s === 2 && [
        stroke("M57 213h239", lineGrey, 1.3),
        round(id, 84, 213, 5, "glass"),
        round(id, 262, 213, 6, "brass"),
        label(185, 246, "Deux moments différents"),
      ],
    ]),
  detailMuscleSpasm: (s: number, id: string) =>
    layers([
      myofiber(id, s === 0 ? 53 : 83, 126, s === 0 ? 1.18 : 0.91),
      stroke("M50 115q50-34 92-14l60 20", flow, 2.5),
      s === 0 && label(161, 247, "Fibre au repos"),
      s === 1 && [
        arrow(72, 200, 119, 200, harm),
        arrow(285, 200, 247, 200, harm),
        call(206, 78, "Contraction", "M203 84l-28 35"),
      ],
      s === 2 && [
        round(id, 246, 97, 9, "glass"),
        stroke("M180 104l64-4", flow, 1.6, "5 4"),
        label(174, 247, "Mécanismes discutés"),
      ],
    ]),
  detailMealRecovery: (s: number, id: string) =>
    layers([
      myofiber(id, 118, 123, 0.91),
      oval(67, 160, 42, 38, `url(#${id}-ivory)`, lineGrey),
      filled(id, "M42 163q-2-26 20-24 17-15 29 9l-3 25-32 4Z", "plant", "dots"),
      s === 0 && [
        round(id, 167, 139, 3, "brass"),
        round(id, 201, 156, 3, "brass"),
        label(191, 245, "Réserves mobilisées"),
      ],
      s === 1 && [
        arrow(98, 130, 148, 114, active),
        ...Array.from({ length: 9 }, (_, i) =>
          round(id, 136 + (i % 5) * 21, 144 + Math.floor(i / 5) * 17, 3, "brass"),
        ),
        label(183, 246, "Reconstituer les réserves"),
      ],
      s === 2 && [
        stroke("M94 207h192", lineGrey, 1.3),
        ...Array.from({ length: 5 }, (_, i) =>
          round(id, 102 + i * 44, 207, 5, i % 2 ? "steel" : "brass"),
        ),
        label(179, 246, "Répartition dans le temps"),
      ],
    ]),
  detailRedCellAltitude: (s: number, id: string) =>
    layers([
      ...redCells(id, s === 3 ? 19 : 13),
      s === 0 && [
        filled(id, "M50 111l61-45 84 45Z", "plant", "dots"),
        arrow(124, 89, 150, 108, flow),
        label(222, 248, "O₂ disponible"),
      ],
      s === 1 && [
        filled(id, "M231 63q28 4 25 28-2 21-27 14-15-6-10-16l-7-8q-8-13 19-18Z", "clay"),
        call(96, 90, "Rein", "M112 89l97-6"),
      ],
      s === 2 && [
        arrow(173, 85, 173, 118, active),
        label(174, 72, "Signal EPO"),
        label(177, 247, "Réponse de la moelle"),
      ],
      s === 3 && label(170, 247, "Globules rouges produits"),
    ]),
  detailPulseTiming: (s: number) =>
    layers([
      block(26, 99, 305, 105, "#ebe9da", lineGrey, 2),
      stroke("M36 116h285m-285 21h285m-285 22h285m-285 21h285", lineGrey, 0.75, "3 5"),
      stroke(timeWave, flow, 2.5),
      s > 0 && [
        stroke("M90 105v95m84-95v95m91-95v95", active, 1.2, "4 3"),
        arrow(95, 192, 169, 192, active),
        arrow(178, 192, 260, 192, active),
      ],
      s === 2 && [
        stroke("M119 154l4 14 5-23 4 21 4-11 5 8", harm, 2),
        label(177, 247, "Signal à contrôler"),
      ],
      s === 1 && label(173, 247, "Intervalles différents"),
      s === 0 && label(172, 247, "Battements successifs"),
    ]),
  detailLiftingMoment: (s: number, id: string) =>
    layers([
      ground("M28 211h303"),
      personSide(id, 129, 130, 1, 1.35),
      prism(id, s === 0 ? 240 : 196, 152, 53, 35, 13, "earth"),
      arrow(s === 0 ? 266 : 221, 143, s === 0 ? 266 : 221, 189, harm),
      stroke(
        s === 0 ? "M121 205h145m-145-10v20m145-20v20" : "M121 205h100m-100-10v20m100-20v20",
        lineGrey,
        1.35,
      ),
      s === 0 && call(134, 78, "Bras de levier", "M140 84l43 114"),
      s === 1 && label(170, 246, "Charge rapprochée"),
      s === 2 && [
        stroke("M216 109v26m-8-14h16m22-9v14", flow, 1.7),
        label(170, 246, "Charge et contexte"),
      ],
    ]),
};
