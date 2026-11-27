import {
  type Study,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  heat,
  joint,
  label,
  moved,
  oval,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tile,
  tire,
} from "./art";

function coilTurns(
  id: string,
  x: number,
  y: number,
  n: number,
  tone: "copper" | "steel" = "copper",
) {
  return moved(x, y, [
    surface(id, `M0 26h${n * 7 + 14}v17H0Z`, "iron", 1),
    ...Array.from({ length: n }, (_, i) => [
      stroke(`M${8 + i * 7} 11q-15 21 1 43q12 11 8-7`, paint(id, tone), 3.7),
      stroke(`M${8 + i * 7} 13q-13 20 1 40`, "#dfc99c", 1.17),
    ]),
  ]);
}
function dial(id: string, x: number, y: number, offset: number, scale: number) {
  return moved(
    x,
    y,
    [
      panel(id, -52, -31, 104, 75, "iron"),
      block(-43, -22, 86, 51, paint(id, "cream"), dark, 5),
      stroke("M-29 12q28-37 57 0m-53-4-3-7m15-3-2-8m14 4v-9m14 13 3-9m11 18 4-7", "#726847", 1.3),
      stroke(`M0 24l${offset} -34`, heat, 2.38),
      ...joint(id, 0, 24, 5.1),
    ],
    scale,
  );
}
function balance(id: string, x: number, y: number) {
  return moved(x, y, [
    tile(id, -42, 49, 82, 16, "iron", 10),
    surface(id, "M-6 44l4-77h5l5 77Z", "steel", 1.17),
    surface(id, "M-115-29h225v8h-225Z", "copper", 1.16),
    ...joint(id, 0, -26, 8, "copper"),
    stroke("M-94-24l-29 49h57l-28-49m192 0-28 49h57l-29-49", dark, 1.3),
    fillPath("M-124 25h58q-29 16-58 0Zm194 0h58q-28 16-58 0Z", "#b6a780", "#6d7965", 0.98),
  ]);
}
function buggy(id: string, x: number, y: number, w: number, tone: "steel" | "copper") {
  return moved(x, y, [
    tile(id, 0, 0, w, 25, tone, 11),
    ...[14, w - 19].map((x) => tire(id, x, 32, 12.2)),
    stroke(`M9 17h${w - 25}`, "#d4ccb1", 1.2),
  ]);
}
function electromagnet(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, "M-40-18h43v36h-43Z", "steel", 1.2),
      surface(id, "M3-18h37v36H3Z", "ember", 1.2),
      stroke("M-34-12h31m11 0h27", "#e5d4ac", 1.22),
    ],
    scale,
  );
}

export const physicsStudies = {
  algebrabalance: {
    foot: [
      "Les deux côtés sont égaux",
      "On retire la même quantité",
      "Une part inconnue vaut quatre unités",
    ],
    draw: (s, id) => [
      balance(id, 181, 104),
      ...Array.from({ length: s === 2 ? 1 : 3 }, (_, i) => [
        surface(id, `M${52 + i * 22} 107h17v24h-17Z`, "copper", 0.8),
        label(61 + i * 22, 124, "x", dark),
      ]),
      s === 0 && [114, 127].map((x) => oval(x, 123, 4.7, 4.4, paint(id, "steel"), dark)),
      ...Array.from({ length: [14, 12, 4][s]! }, (_, i) =>
        oval(246 + (i % 7) * 9, 119 - Math.floor(i / 7) * 11, 4.2, 4.2, paint(id, "steel"), dark),
      ),
      label(181, 62, ["3x + 2 = 14", "3x = 12", "x = 4"][s]!, heat),
    ],
  },
  eratosthenes: {
    foot: [
      "Les verticales suivent la Terre courbe",
      "Les deux angles se correspondent",
      "Le tour vaut ici 50 fois la distance",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            oval(181, 148, 91, 61, paint(id, "glass"), dark),
            fillPath("M112 125l28-28 29 8 4 25-42 9Z", "#a7a982", "#85916d", 0.86),
            stroke("M170 149l-23-54m23 54 37-55", cold, 1.55, "5 3"),
            stroke("M148 95l-12-27m72 27 19-28", heat, 2.45),
            ...[136, 228].flatMap((x) => stream(x - 5, 49, x - 5, 69, heat)),
            s === 1
              ? [
                  stroke("M160 121q20-9 29 0m22-44q5-6 10-5", heat, 2.0),
                  label(285, 91, "Même angle", heat),
                ]
              : label(279, 83, "Verticales", cold),
          ]
        : [
            oval(125, 115, 49, 49, paint(id, "glass"), dark),
            stroke("M126 114v-48m0 48 15-45", heat, 1.35),
            label(126, 176, "Tour complet", cold),
            panel(id, 198, 75, 120, 88, "cream"),
            label(260, 104, "360° ÷ 7,2°", heat),
            label(260, 135, "50 × d", forest),
          ],
  },
  induction: {
    foot: [
      "Un aimant immobile ne suffit pas",
      "Approcher change le flux",
      "Le courant induit change de sens",
    ],
    draw: (s, id) => [
      electromagnet(id, [93, 114, 83][s]!, 115, 0.86),
      coilTurns(id, 152, 79, 8),
      dial(id, 278, 96, s === 0 ? 0 : s === 1 ? 18 : -20, 0.78),
      duct("M215 121h24v20h40", cold, s !== 0),
      s > 0 && stream(s === 1 ? 61 : 124, 148, s === 1 ? 123 : 64, 148, heat),
      label(183, 64, "Bobine", cold),
    ],
  },
  electricMagnetic: {
    foot: [
      "La bobine parcourue crée un champ",
      "Un flux variable induit une tension",
      "Un flux constant n’induit pas ici",
    ],
    draw: (s, id) => [
      coilTurns(id, 98, 78, 11),
      dial(id, 271, 104, s === 1 ? 19 : 0, 0.77),
      stroke("M111 112q69-61 112 0m-112 6q59 60 113 0", cold, 1.68, s === 2 ? "4 3" : undefined),
      s > 0 && [
        stroke("M199 87q21-12 28 8v29q-9 12-29 1Z", "#986343", 4),
        stroke("M222 89l14-10h16m-28 47 12 13h31", "#6a856e", 2),
      ],
      s === 0 ? duct("M81 134h23m84 0h47", heat) : s === 1 ? stream(103, 77, 157, 77, forest) : [],
      label(138, 162, s === 0 ? "Courant" : s === 1 ? "Flux variable" : "Flux constant", cold),
    ],
  },
  transformercoil: {
    foot: [
      "Le primaire reçoit une tension variable",
      "Le flux traverse les deux bobines",
      "Deux fois moins de spires, demi-tension",
    ],
    draw: (s, id) => [
      surface(id, "M86 78h187v77H86Zm29 16v44h131V94Z", "iron", 1.24),
      coilTurns(id, 80, 75, 12),
      moved(203, 75, [coilTurns(id, 0, 0, s === 2 ? 6 : 9, "steel")], 0.91),
      stroke("M115 84h128m-1 67H120", forest, 2.0, s === 0 ? "4 3" : undefined),
      s > 0 && stream(152, 82, 223, 82, forest),
      label(112, 60, s === 2 ? "12 spires" : "Primaire", heat),
      label(259, 64, s === 2 ? "6 spires" : "Secondaire", cold),
    ],
  },
  newtonmotion: {
    foot: [
      "Sans force nette, la vitesse se maintient",
      "La force résultante accélère le chariot",
      "Les forces agissent sur deux objets",
    ],
    draw: (s, id) => [
      tile(id, 38, 151, 284, 17, "iron", 11),
      buggy(id, s === 2 ? 68 : 121, 100, 103, "steel"),
      s === 2 && buggy(id, 188, 100, 103, "copper"),
      s === 0
        ? [stream(118, 83, 222, 83, cold), label(169, 67, "Vitesse", cold)]
        : s === 1
          ? [stream(74, 114, 123, 114, heat), label(263, 68, "Force nette", heat)]
          : [
              stream(172, 87, 119, 87, cold),
              stream(185, 87, 242, 87, heat),
              label(182, 65, "Forces opposées", cold),
            ],
    ],
  },
  moonweight: {
    foot: [
      "La masse vaut un kilogramme",
      "Même masse, poids plus faible",
      "La balance compare des masses",
    ],
    draw: (s, id) =>
      s === 2
        ? [
            balance(id, 181, 105),
            ...[75, 263].map((x) => surface(id, `M${x} 108h22v24h-22Z`, "copper", 0.91)),
            label(178, 61, "Deux masses", cold),
          ]
        : [
            panel(id, 108, 61, 136, 82, "steel"),
            stroke(
              "M124 104h105m-105-6v15m17-13v10m17-10v10m17-10v10m17-10v10m17-10v10",
              "#c0c6a9",
              1.28,
            ),
            stroke(`M129 103h${s === 0 ? 88 : 19}`, heat, 2.98),
            duct("M177 145v16", cold),
            surface(id, "M163 158h28v18h-28Z", "copper", 1.0),
            label(76, 80, s === 0 ? "Terre" : "Lune", cold),
            label(275, 114, s === 0 ? "≈ 9,8 N" : "≈ 1,6 N", heat),
          ],
  },
  detailInteractionsScale: {
    foot: [
      "Les masses interagissent à distance",
      "Les charges exercent des forces",
      "Elle participe à la cohésion du noyau",
      "Elle peut transformer une particule",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            oval(177, 115, 38, 38, paint(id, "glass"), dark),
            oval(177, 115, 107, 33, "none", "#98aa8f"),
            oval(269, 104, 11, 11, paint(id, "copper"), dark),
            label(267, 63, "Orbite", cold),
          ]
        : s === 1
          ? [
              oval(105, 114, 36, 36, paint(id, "steel"), dark),
              oval(252, 114, 37, 35, paint(id, "copper"), dark),
              label(105, 121, "−", cold),
              label(253, 121, "+", heat),
              stream(146, 114, 170, 114, cold),
              stream(211, 114, 187, 114, heat),
            ]
          : s === 2
            ? [
                ...[
                  [164, 82],
                  [196, 115],
                  [155, 132],
                  [202, 77],
                  [146, 102],
                  [187, 148],
                ].map(([x, y], i) =>
                  oval(x!, y!, 19, 19, paint(id, i % 2 ? "copper" : "glass"), dark),
                ),
                label(267, 123, "Noyau", cold),
              ]
            : [
                oval(88, 113, 26, 26, paint(id, "glass"), dark),
                oval(264, 113, 26, 26, paint(id, "copper"), dark),
                stream(120, 113, 224, 113, forest),
                label(178, 76, "Transformation", cold),
              ],
  },
  particleWave: {
    foot: [
      "Un événement produit un impact",
      "Les événements forment une répartition",
      "Des franges révèlent les interférences",
    ],
    draw: (s, id) => [
      tile(id, 48, 148, 266, 25, "iron", 11),
      surface(id, "M64 101h31v43H64Z", "steel"),
      surface(id, "M137 69h12v73h-12Z", "iron"),
      stroke("M140 96h7m-7 21h7", "#e0d5b5", 2.5),
      panel(id, 211, 61, 101, 87, "steel"),
      block(220, 70, 82, 67, paint(id, "soot"), dark, 1),
      stroke("M98 122h29", cold, 1.15, "3 3"),
      s === 2 &&
        [0, 1, 2, 3, 4].map((i) =>
          stroke(`M${229 + i * 15} 79v49`, i === 2 ? "#b9ad7e" : "#7f927a", i === 2 ? 3.6 : 2.4),
        ),
      ...Array.from({ length: s === 0 ? 1 : s === 1 ? 26 : 44 }, (_, i) => {
        const x = s === 2 ? 229 + (i % 5) * 15 + ((i * 3) % 5) - 2 : 228 + ((i * 37) % 64);
        return oval(
          x,
          78 + ((i * 19 + 18) % 49),
          1.55,
          1.55,
          s === 2 && i % 2 ? "#76948a" : "#d0c397",
          "none",
        );
      }),
      label(252, 167, "Écran", cold),
    ],
  },
  microwavefood: {
    foot: [
      "Le magnétron alimente l’enceinte",
      "Le champ sollicite les molécules",
      "L’aliment peut chauffer inégalement",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            panel(id, 54, 68, 252, 95, "steel"),
            ...Array.from({ length: 6 }, (_, i) =>
              moved(91 + (i % 3) * 89, 96 + Math.floor(i / 3) * 40, [
                oval(0, 0, 7, 7, paint(id, "glass"), dark),
                oval(-9, i % 2 ? 7 : -7, 4, 4, paint(id, "copper"), dark),
                oval(9, i % 2 ? -6 : 6, 4, 4, paint(id, "copper"), dark),
                stroke("M-10 5l20-10", heat, 1.11),
              ]),
            ),
            stream(52, 112, 77, 112, cold),
          ]
        : [
            panel(id, 57, 65, 251, 101, "iron"),
            surface(id, "M70 75h177v78H70Z", "glass", 1.1),
            oval(154, 133, 64, 16, paint(id, "cream"), dark),
            s === 0
              ? [
                  rotor(id, 275, 108, 18, "copper"),
                  stroke("M248 100q-16-15-26 0t-26 0-26 0-26 0", heat, 1.65),
                  label(279, 58, "Magnétron", heat),
                ]
              : [
                  ...[126, 153, 187].map((x, i) =>
                    oval(
                      x,
                      130 - (i % 2) * 4,
                      11 + (i % 2) * 4,
                      7,
                      paint(id, i % 2 ? "ember" : "glass"),
                      dark,
                    ),
                  ),
                  label(159, 112, "Zones chaudes", heat),
                ],
          ],
  },
  distillation: {
    foot: [
      "Le composé volatil enrichit la vapeur",
      "Le réfrigérant condense la vapeur",
      "Le liquide arrive dans un autre récipient",
    ],
    draw: (s, id) => [
      surface(id, "M77 91h24v28q26 7 28 31-4 18-40 18-34-2-35-20 1-19 23-28Z", "glass", 1.26),
      fillPath("M64 143q27-10 54 0-5 15-28 16-23 0-26-16Z", "#b28b60", "#907554", 0.88),
      surface(id, "M124 95l13-18L253 117l-11 20Z", "steel", 1.15),
      duct("M89 89V75h40l119 51 24 11", s === 0 ? heat : cold, s > 0),
      surface(id, "M270 124h30l-5 11 4 25-7 8h-23l-5-7 8-30Z", "glass"),
      s === 2 && fillPath("M270 154h25l-3 10h-20Z", "#a6a877", "#829273", 0.9),
      s === 1
        ? label(195, 63, "Refroidir", cold)
        : s === 2
          ? label(279, 91, "Distillat", cold)
          : label(80, 60, "Vapeur", heat),
    ],
  },
} satisfies Record<string, Study>;
