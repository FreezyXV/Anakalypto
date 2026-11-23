import {
  active,
  arrow,
  block,
  call,
  cylinder,
  filled,
  flow,
  focus,
  graph,
  harm,
  ink,
  label,
  layers,
  lineGrey,
  living,
  moved,
  oval,
  prism,
  round,
  shadow,
  stroke,
} from "./plate";

function tumbler(id: string, x: number, y: number, level: number) {
  return moved(x, y, [
    shadow(id, 39, 106, 47, 10),
    filled(id, "M0 0h78l-8 94q-31 16-62 0Z", "glass"),
    filled(
      id,
      `M${(4 + level * 0.08).toFixed(1)} ${level}q32 8 ${(70 - level * 0.16).toFixed(1)} 0L66 91q-26 11-54 0Z`,
      "glass",
      "dots",
    ),
    oval(39, 0, 39, 9, "#e3eaeb", flow),
    stroke("M6 9l8 83m46-4 9-75", "#f0f3e7", 2),
  ]);
}
function grain(id: string, x: number, y: number, s = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M-31 8q7-33 42-32 31 4 21 29-8 21-40 24-19-3-23-21Z", "brass", "dots"),
      stroke("M-23 13q17-27 53-25m-46 28q8-11 20-12", active, 1.3),
    ],
    s,
  );
}
function plateFood(id: string, x: number, y: number, style: number) {
  return moved(x, y, [
    shadow(id, 0, 24, 90, 16),
    round(id, 0, 0, 61, "ivory"),
    oval(0, 0, 47, 47, "#eee9d9", lineGrey),
    style === 0 &&
      Array.from({ length: 8 }, (_, i) =>
        grain(id, -32 + (i % 4) * 21, -16 + Math.floor(i / 4) * 24, 0.44),
      ),
    style === 1 && [
      filled(id, "M-35-16q0-20 27-22 41-4 43 23l-5 41-29 10-34-12Z", "plant", "dots"),
      stroke("M3-26q-14 16-5 48m-27-33 27 9m2 5 26-18", living, 2),
    ],
    style === 2 && [
      filled(id, "M-31-12q24-22 63-4l-3 32q-23 17-64 4Z", "clay", "dots"),
      stroke("M-29 1q36 8 57-10m-47 20 37-6", harm, 2),
    ],
  ]);
}
const molar =
  "M108 121q-21-26-12-52 10-24 34-18 25 8 48 0 25-6 34 21 7 28-13 51l-13 48q-7 22-16 7l-10-30q-5-17-12 0l-10 30q-7 16-16-6Z";
const bone =
  "M61 133q-18-6-18-25 0-22 24-27 23-5 38 14l140 8q19-16 40-12 22 3 26 24 6 22-19 35-20 12-45-6l-142-12q-19 17-44 1Z";

export const producePlates = {
  detailWaterBalance: (s: number, id: string) =>
    layers([
      tumbler(id, 41, 108, s === 0 ? 36 : 62),
      plateFood(id, 250, 151, s === 1 ? 1 : 0),
      s === 0 && [call(80, 75, "Boissons", "M78 83v17"), call(257, 76, "Aliments", "M256 84v12")],
      s === 1 && [
        arrow(140, 126, 180, 99, active),
        arrow(132, 146, 185, 158, active),
        label(193, 247, "Pertes variables"),
      ],
    ]),
  detailThirstSignal: (s: number, id: string) =>
    layers([
      filled(id, "M33 140q54-28 132 0v58q-80-32-132 0Z", "clay", "dots"),
      ...Array.from({ length: s === 0 ? 19 : 11 }, (_, i) =>
        round(id, 45 + (i % 7) * 17, 149 + Math.floor(i / 7) * 15, 2.4, "brass"),
      ),
      filled(
        id,
        "M205 132q-15-17-2-36 1-29 35-30 20-14 48 6 23 3 28 26 17 20 0 38l-15 9-9 23-18-1-2-22Z",
        "ivory",
        "engraving",
      ),
      stroke("M223 99q42-27 74 9m-71 15q13-19 25-11l35 18m-6-49q-8 21 11 31", lineGrey, 1.2),
      s === 0 && label(101, 235, "Concentration"),
      s === 1 && [
        arrow(167, 158, 247, 134, flow),
        focus(259, 131, 12),
        label(233, 225, "Hypothalamus"),
      ],
      s === 2 && [
        tumbler(id, 46, 74, 45),
        arrow(136, 115, 214, 106, flow, true),
        label(177, 247, "Signal apaisé"),
      ],
    ]),
  detailGlycemicCurve: (s: number, id: string) =>
    layers([
      graph(45, 82, 265, 131),
      stroke(
        "M47 198C76 198 88 93 141 102 192 110 198 187 306 199",
        s === 2 ? lineGrey : active,
        s === 2 ? 1.4 : 3,
        s === 2 ? "5 4" : undefined,
      ),
      s > 0 && stroke("M47 198C76 199 102 139 152 142S222 191 306 200", flow, 3),
      s === 2 && [
        round(id, 188, 171, 5, "glass"),
        call(224, 111, "Portion", "M221 119l-31 46", flow),
      ],
      label(92, 75, "Glycémie"),
      label(281, 241, "Temps"),
    ]),
  detailMineralBinding: (s: number, id: string) =>
    layers([
      grain(id, 80, 149, 1.46),
      filled(id, "M187 80h141v140H187Z", "ivory"),
      stroke("M219 122l32-20 34 20v38l-34 20-32-20Z", living, 2.7),
      ...[
        [224, 121],
        [249, 106],
        [283, 124],
        [279, 159],
        [253, 177],
        [221, 158],
      ].map(([x, y]) => round(id, x!, y!, 7, "plant")),
      ...[
        [196, 136],
        [312, 144],
        [262, 196],
      ].map(([x, y], i) =>
        round(id, s > 0 ? [211, 292, 255][i]! : x!, s > 0 ? [139, 145, 181][i]! : y!, 6, "brass"),
      ),
      s === 0 && call(107, 83, "Grain", "M106 91l-26 35"),
      s === 1 && label(251, 249, "Association possible"),
      s === 2 && [arrow(155, 164, 185, 164, living, true), label(96, 241, "Aliment entier")],
    ]),
  detailMicroNutrients: (s: number, id: string) =>
    layers([
      plateFood(id, 96, 148, s === 2 ? 2 : 1),
      filled(
        id,
        s === 0
          ? "M219 162q24-47 40-69 27 40 33 67 5 38-42 38-40 0-31-36Z"
          : s === 1
            ? "M217 146q-9-33 30-58 32 19 39 52 13 44-25 56-46 0-44-50Z"
            : "M214 120l37-20 43 20-15 69-52 0Z",
        s === 0 ? "glass" : s === 1 ? "brass" : "steel",
        "engraving",
      ),
      label(252, 158, ["B et C", "A, D, E, K", "Fe, Ca…"][s]!),
      label(179, 247, ["Vitamines hydrosolubles", "Vitamines liposolubles", "Minéraux"][s]!),
    ]),
  detailToothFood: (s: number, id: string) =>
    layers([
      filled(id, "M42 126q80-12 147 8 64 7 126-8v62H42Z", "clay", "dots"),
      filled(id, molar, "ivory", "engraving"),
      filled(
        id,
        "M119 107q-14-27-8-35 7-10 24-6 20 9 38 1 17-5 23 8 6 10-5 30l-11 41-13-21q-12-14-19 0l-12 25Z",
        "brass",
        "dots",
      ),
      stroke("M151 115q10-12 17 0l4 24m-20-10-8 22", harm, 2.4),
      s === 0 && call(265, 89, "Émail", "M247 91l-41 19"),
      s === 1 && [
        focus(182, 61, 12, harm),
        arrow(238, 69, 199, 62, harm),
        label(264, 93, "Acides"),
      ],
      s === 2 && [
        stroke("M101 68q 19-28 47-12 15 7 48-5", flow, 3, "4 3"),
        label(181, 247, "Surface minérale"),
      ],
    ]),
  detailBoneMatrix: (s: number, id: string) =>
    layers([
      shadow(id, 180, 165, 143, 17),
      filled(id, bone, "ivory", "engraving"),
      filled(
        id,
        "M78 106q12-10 24 4l142 7q24-15 45-5l-20 20-28-3-140-8q-8 9-24-9Z",
        "clay",
        "dots",
      ),
      s === 0 && call(123, 76, "Matrice", "M126 81l25 35"),
      s === 1 && [
        ...Array.from({ length: 13 }, (_, i) =>
          round(id, 76 + (i % 7) * 32, 117 + (i % 2) * 8, 2, "brass"),
        ),
        call(227, 77, "Minéraux", "M224 83l-24 39"),
      ],
      s === 2 && [
        cylinder(id, 140, 183, 70, 23, "glass"),
        arrow(176, 180, 176, 146, flow),
        label(278, 214, "Absorption"),
      ],
    ]),
  detailRetinaNutrients: (s: number, id: string) =>
    layers([
      filled(
        id,
        "M65 138q41-64 130-65 61-1 111 64-46 63-111 63-91 0-130-62Z",
        "ivory",
        "engraving",
      ),
      filled(id, "M75 137q44-51 120-51 51 0 98 51-40 50-98 50-78 0-120-50Z", "glass"),
      oval(108, 138, 20, 45, "#c1d0cc", flow),
      oval(113, 138, 8, 33, "#9fb5bb", flow),
      stroke("M280 117q29 18 2 43", s === 0 ? harm : active, 4),
      s === 0 && call(282, 81, "Rétine", "M278 85l9 33"),
      s === 1 && [focus(287, 139, 14), call(247, 223, "Macula", "M250 206l33-52")],
    ]),
  detailScoreLabel: (s: number, id: string) =>
    layers([
      prism(id, 48, 93, 95, 118, 22, "ivory"),
      prism(id, 193, 93, 95, 118, 22, "ivory"),
      ...[69, 214].map((x, i) => [
        block(x, 134, 55, 31, i === s ? "#a3af89" : "#ccb286", lineGrey, 2),
        label(x + 27, 155, i === 0 ? "B" : "C"),
        stroke(`M${x} 176h55m-55 10h41`, lineGrey, 1.1),
      ]),
      s === 0 && label(177, 246, "Même famille"),
      s === 1 && [arrow(125, 149, 212, 149, active, true), label(177, 246, "Scores fictifs")],
      s === 2 && [focus(247, 183, 22), label(177, 246, "Liste d’ingrédients")],
    ]),
  detailIngredientStages: (s: number, id: string) =>
    layers([
      s === 0
        ? [grain(id, 105, 141, 1.6), grain(id, 177, 150, 1.1), grain(id, 237, 135, 1.4)]
        : [
            prism(id, 57, 94, 93, 103, 23, "ivory"),
            s === 1
              ? [cylinder(id, 214, 115, 76, 76, "glass"), stroke("M225 154h51", flow, 2)]
              : [
                  prism(id, 205, 83, 100, 123, 14, "brass"),
                  block(224, 104, 62, 70, "#ece4ca", lineGrey),
                  stroke("M235 122h44m-44 12h32m-32 12h38m-38 12h29", ink, 1.4),
                ],
          ],
      s > 0 && arrow(162, 146, 193, 146, flow),
      label(178, 244, ["Aliment brut", "Préparation simple", "Formulation industrielle"][s]!),
    ]),
};
