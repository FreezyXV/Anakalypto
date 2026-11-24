import {
  active,
  arrow,
  call,
  filled,
  flow,
  focus,
  graph,
  harm,
  ink,
  label,
  living,
  moved,
  oval,
  round,
  stroke,
} from "../detail100/plate";
import { plate } from "./craft";

export const physiologyPlates = {
  editionPressureWaves: plate(["Valeur haute", "Valeur basse", "Mesures rapprochées"], (s, id) => [
    graph(52, 86, 261, 123),
    stroke(
      "M56 183C80 183 83 110 106 110S133 183 162 183 184 110 208 110 235 183 263 183 278 128 306 128",
      flow,
      2.6,
    ),
    s === 0 && [
      stroke("M52 110h260", harm, 1.2, "5 4"),
      round(id, 106, 110, 4.4, "brass"),
      label(137, 77, "Systolique"),
    ],
    s === 1 && [
      stroke("M52 183h260", living, 1.2, "5 4"),
      round(id, 162, 183, 4.4, "brass"),
      label(145, 77, "Diastolique"),
    ],
    s === 2 && [
      stroke("M90 204v14m75-14v14m76-14v14", active, 1.2),
      label(189, 77, "Plusieurs mesures"),
    ],
  ]),
  editionDeficitCurve: plate(
    ["Apport et utilisation", "Réserves au fil du temps", "Comparer les fonctions"],
    (s, id) => [
      graph(51, 85, 257, 123),
      stroke("M60 117h232", flow, 2, "5 4"),
      stroke(
        s === 0
          ? "M62 149q87-9 155 1l78 1"
          : s === 1
            ? "M62 149q89 1 151 25l83 17"
            : "M62 159q60 3 114 18 48 10 119 23",
        active,
        2.9,
      ),
      s === 0 && label(181, 78, "Besoins variables"),
      s === 1 && call(236, 147, "Réserves", "M230 152l-15 25"),
      s === 2 && [
        round(id, 274, 198, 6, "brass"),
        call(225, 79, "Fonction touchée", "M242 86l28 94"),
      ],
    ],
  ),
  editionYawnObservation: plate(
    ["Comportement observé", "Réponse variable", "Mesurer le contexte"],
    (s, id) => [
      ...[
        [105, 135],
        [252, 144],
      ].map(([x, y], i) =>
        moved(
          x!,
          y!,
          [
            filled(
              id,
              "M-36 58v-37l-14-23q-12-24 8-42 17-17 43-16 31 5 36 39l17 16-15 8v22l-24 7-7 26Z",
              "clay",
              "dots",
            ),
            stroke("M8-22h13m-4 28 21-4", ink, 2),
            (s === 0 ? i === 0 : s === 1 ? i === 1 : false) && oval(33, 13, 10, 9, "#79614e", ink),
          ],
          0.83,
        ),
      ),
      s < 2 && arrow(162, 122, 196, 122, flow, true),
      s === 2 && [stroke("M81 213h195", active, 1.2, "5 4"), label(178, 87, "Observation")],
    ],
  ),
  editionCellCycleControl: plate(
    ["Contrôle de la division", "Barrières de contrôle altérées", "Croissance locale"],
    (s, id) => [
      filled(id, "M29 79h301v136H29Z", "ivory", "dots"),
      ...Array.from({ length: s === 2 ? 14 : s === 1 ? 9 : 6 }, (_, i) => {
        const x = 59 + (i % 7) * 39,
          y = 126 + Math.floor(i / 7) * 49;
        return [
          round(id, x, y, 15, i > 4 && s > 0 ? "clay" : "glass"),
          round(id, x + 3, y - 2, 5.5, i > 4 && s > 0 ? "brass" : "steel"),
        ];
      }),
      s === 0 && [stroke("M70 181h197", living, 2.3, "7 8"), label(176, 202, "Contrôles")],
      s === 1 && call(198, 199, "Division persistante", "M229 180l-17-41", harm),
      s === 2 && focus(276, 155, 42, harm),
    ],
  ),
  editionThermalBalance: plate(
    ["Échanges avec le milieu", "Perte de chaleur", "Accumulation de chaleur"],
    (s, id) => [
      filled(id, "M138 206l13-55-23-23 14-22 26-9 28 2 28 23-19 28 15 56Z", "clay", "engraving"),
      round(id, 177, 89, 20, "brass"),
      ...[0, 1, 2].map((i) => stroke(`M${153 + i * 18} 143q14 15 0 36`, harm, 1.4)),
      s === 0 && [arrow(77, 139, 128, 139, flow), arrow(224, 140, 281, 140, active)],
      s === 1 && [
        arrow(130, 123, 69, 105, flow),
        arrow(226, 148, 292, 147, flow),
        label(64, 183, "Froid"),
      ],
      s === 2 && [
        arrow(73, 121, 133, 124, harm),
        arrow(294, 137, 226, 137, harm),
        label(284, 186, "Chaleur"),
      ],
    ],
  ),
  editionImmuneTimeline: plate(
    ["Reconnaissance rapide", "Réponse spécifique", "Mémoire possible"],
    (s, id) => [
      ...[76, 177, 275].map((x, i) => [
        round(id, x, 147, 29, i === s ? "plant" : "glass"),
        round(id, x, 147, 12, i === s ? "brass" : "steel"),
        stroke(`M${x - 19} 145q6-19 24-16m-24 29h19`, living, 1.45),
      ]),
      arrow(107, 147, 145, 147, flow, s === 0),
      arrow(207, 147, 245, 147, flow, s < 2),
      s === 0 && [
        filled(id, "M37 101l8-1 6 6-3 9-9 1-5-7Z", "clay"),
        arrow(52, 111, 63, 124, harm, true),
      ],
      s === 1 && [
        ...[154, 179, 201].map((x) => stroke(`M${x - 6} 204l6 8 6-8m-6 8v11`, harm, 1.9)),
        arrow(178, 179, 178, 200, harm, true),
      ],
      s === 2 && [
        stroke("M275 177v24h-22m22 0h22", living, 1.45, "4 3"),
        round(id, 245, 201, 6, "plant"),
        round(id, 304, 201, 6, "plant"),
      ],
      s === 0 && call(86, 82, "Innée", "M86 89l-8 26"),
      s === 1 && call(179, 80, "Adaptative", "M178 88v27"),
      s === 2 && call(256, 80, "Mémoire", "M254 88l17 28"),
    ],
  ),
};
