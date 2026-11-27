import {
  type Study,
  block,
  dark,
  fillPath,
  forest,
  gold,
  grounding,
  heat,
  label,
  link,
  moved,
  oval,
  paint,
  stream,
  stroke,
  surface,
} from "./art";

function reed(id: string, x: number, y: number) {
  return moved(x, y, [
    grounding(id, 0, 27, 38),
    surface(id, "M-35 22q35-9 69 0l-7 10h-56Z", "copper"),
    stroke("M1 22q-5-27 4-60M1 15q14-18 25-27m-25 23-22-21", forest, 2.8),
    fillPath(
      "M2-18q-21-19-33-10 7 19 33 12M5-25q20-27 36-20-2 17-36 24M7 3q18-17 28-14 3 12-28 17",
      "#84996a",
      "#425d46",
      1.15,
    ),
    stroke("M-24-25 1-17m4-8 29-17M8 3l22-11", "#cad7a6", 0.9),
  ]);
}
function grasshopper(id: string, x: number, y: number) {
  return moved(x, y, [
    grounding(id, 0, 18, 30),
    stroke(
      "M-20 1-14 15h-26m36-11-3 15h20m-3-18 6 13h8m-7-22 8-16 11-2m-13 12 16-11",
      "#596443",
      1.65,
    ),
    surface(id, "M-31-3q17-13 40-6l13 6 1 8Q1 14-28 5Z", "glass", 1.2),
    fillPath("M-26-3-6-12 9-7-3 3-24 5Z", "#929f66", "#4d6549", 0.95),
    oval(18, -4, 8, 8, "#8c9a67", "#485741"),
    oval(21, -6, 2.6, 2.4, dark),
    stroke("M-21 1-5-7m-13 9L0-4", "#d0d6a5", 0.9),
  ]);
}
function bird(id: string, x: number, y: number) {
  return moved(x, y, [
    grounding(id, 0, 27, 45),
    surface(id, "M-14 1-43 13-38 19-9 10Q11 20 24 6l4-16-5-8-12-4L1-16-9-5Z", "copper", 1.1),
    fillPath("M-14 1Q7-10 12 2l-21 10-24 3Z", "#617b73", "#444f42", 1.15),
    fillPath("M2 5q20 4 25-15l-1 16Q17 22-5 12Z", "#e7d4a9", "#756d58", 0.8),
    fillPath("m26-15 17 4-16 3Z", "#ad8954", "#705a39", 0.86),
    oval(21, -14, 2.6, 2.4, "#293732"),
    stroke("M9 15v10l-6 2h13m3-12 2 11h10M-19 8-3 1", "#6a5942", 1.37),
  ]);
}
function foodChain(step: number, id: string) {
  return [
    oval(32, 54, 7, 7, "#e1bd73", "#a07a41"),
    stream(43, 61, 58, 71, gold),
    reed(id, 77, 95),
    grasshopper(id, 192, 86),
    bird(id, 301, 83),
    stream(112, 90, 150, 90, forest),
    stream(232, 90, 257, 90, forest),
    label(72, 143, "Plante"),
    label(192, 128, "Insecte"),
    label(308, 128, "Oiseau"),
    step === 1 && [
      oval(63, 54, 6, 7, "#b8894e", "#6c5431"),
      oval(75, 43, 7, 5, "#a0784e", "#6c5431"),
      stroke("M83 47q103-25 178 12", "#a38049", 2),
      stream(259, 58, 277, 63, "#957344"),
    ],
    step === 2 && [
      surface(id, "M156 152q35-9 70 0l-11 13h-48Z", "copper"),
      ...[168, 181, 195, 209].map((x, i) => [
        stroke(`M${x} 151v${i % 2 ? -14 : -9}`, "#e3d5a5", 2),
        oval(x, i % 2 ? 136 : 142, 5, 2.9, "#93684a", "#6c5540"),
      ]),
      stream(268, 135, 223, 151, gold),
      stream(155, 154, 104, 151, forest),
    ],
  ];
}

const waterTop = "#ceebde";
const waterDeep = "#254755";
const waterText = "#245568";

function abyss(step: number, id: string) {
  const anatomy = (x: number, wide: boolean) => [
    oval(x, 101, 57, 34, paint(id, "glass"), "#526e65"),
    stroke(`M${x - 46} 98q23-19 46-3 22 17 46-5m-88 21q25-13 42 2 23 14 42-4`, "#e1e9ce", 1.65),
    !wide && [
      stroke(`M${x - 17} 101a17 12 0 1 1 34 0 17 12 0 1 1-34 0`, "#52726f", 1.4, "3 3"),
      oval(x + 1, 101, 9, 6, "#e1dec0", "#658284"),
      stream(x - 31, 101, x - 12, 101, waterText),
      stream(x + 31, 101, x + 12, 101, waterText),
    ],
  ];
  return [
    block(35, 38, 314, 124, step === 0 ? waterDeep : "#9db4a6", "#416273", 7),
    ...[63, 83, 106, 130, 152].map((y) => stroke(`M45 ${y}q154-5 294 0`, "#a4c7c34d", 0.85)),
    step === 0 && [
      label(107, 62, "Surface", waterText),
      label(266, 151, "Profondeur", waterText),
      ...[75, 120].flatMap((y, i) => [
        oval(190, y, 13, 8, paint(id, "glass"), "#d3d9b8"),
        stream(160 - i * 22, y, 173, y, "#39757f"),
        stream(220 + i * 22, y, 206, y, "#39757f"),
        stream(190, y + 20 + i * 4, 190, y + 10, "#39757f"),
        stream(190, y - 20 - i * 4, 190, y - 10, "#39757f"),
      ]),
    ],
    step === 1 && [
      anatomy(106, true),
      anatomy(273, false),
      stroke("M191 76v48", "#6a887d", 1.25, "3 4"),
      label(107, 151, "Tissu aqueux"),
      label(267, 151, "Cavité à gaz"),
    ],
    step === 2 && [
      stroke(
        "M97 117q11-31 34-32t24 22q-5 20 12 20 12-1 14-24 1-34 25-30 20 3 17 20-8 21 14 25 17 3 32-28",
        "#445861",
        11.5,
      ),
      stroke(
        "M97 114q11-31 34-32t24 22q-5 20 12 20 12-1 14-24 1-34 25-30 20 3 17 20-8 21 14 25 17 3 32-28",
        "#b8c5a9",
        4,
      ),
      ...(
        [
          [108, 67],
          [148, 112],
          [190, 133],
          [238, 71],
          [276, 119],
        ] as const
      ).map(([x, y]) => [
        stroke(`M${x - 6} ${y + 3}l6-3 8 4`, "#865a35", 2),
        oval(x, y, 4, 4, "#cb9c56", "#785536"),
      ]),
      label(188, 151, "Protéine et molécules"),
    ],
  ];
}
function bread(step: number, id: string) {
  const edge = "M90 135q-7-16-4-36 3-26 24-37 12-9 31-10 37-3 70 3 52 11 63 48l-4 27-16 21-111 5Z";
  return [
    grounding(id, 190, 155, 133),
    surface(
      id,
      "M88 138Q62 121 66 91 72 64 108 56l47-11q53-8 91 24l23 32-9 43-113 15Z",
      step ? "ember" : "cream",
      1.3,
    ),
    fillPath(edge, step ? "#b77748" : "#c8b58c", "#7d6548", 1.2),
    fillPath(
      "M99 130q-7-15-3-33 10-29 44-35 52-5 89 9 23 12 34 31l-2 23-14 17-100 5Z",
      "#eed6a2",
      "#ac8153",
      1.2,
    ),
    ...Array.from({ length: 44 }, (_, i) => {
      const row = Math.floor(i / 11);
      const x = 109 + (i % 11) * 13 + ((i * 3) % 8) * 0.67;
      const y = 93 + 13 * row + ((i * 7) % 11) - 5 * Math.sin((i % 11) / 3);
      return oval(
        x,
        y,
        1.5 + ((i * 5) % 8) / 2.6,
        1 + (i % 4) * 0.7,
        i % 3 === 1 ? "#ae895c" : "#d1a96e",
        "#b68e59",
      );
    }),
    stroke("M101 90q14-33 70-32 58-2 83 29m-158 39q19 21 61 19", step ? "#dba35d" : "#f8e4b7", 2.5),
    step < 2 && link(193, 122, "Mie humide", "M190 125l-8 8"),
    step === 0 && [
      ...[118, 166, 213].map((x) => stroke(`M${x} 53q-5-4 0-9t0-9`, "#609199", 1.5, "3 2")),
      label(293, 56, "Eau"),
    ],
    step === 1 && link(299, 68, "Croûte", "M281 73l-32 19", "#865331"),
    step === 2 && [
      ...[157, 199, 236].map((x, i) =>
        stroke(`M${x} ${57 + i * 6}q-11-14 6-24`, "#b87b4c", 1.75, "4 3"),
      ),
      label(294, 52, "Arômes"),
      link(186, 128, "Croûte brune", "M220 130l16 11", "#865331"),
    ],
  ];
}

function glacialLake(step: number, id: string) {
  return [
    surface(id, "M29 70l34-29 41 36 32-14 30 18h83l24-12 34-28 48 30v88H29Z", "cream"),
    fillPath("M29 82l35-33 39 40 33-14 33 15h86l56-42 44 31v77H29Z", "#aea67c", "#7c8263", 1.1),
    ...[0, 8, 17].map((n) =>
      stroke(`M35 ${94 + n}q31-51 63-4l33 12m210 ${-12 + n}q-24-28-38-11l-30 19`, "#ede2af", 1),
    ),
    fillPath("M97 92Q152 83 191 87q47-4 98 5l-32 39q-37 26-115 8Z", "#739d9a", "#4c6c63", 1.3),
    fillPath("M108 107q103-5 170 0l-20 24q-39 25-116 8Z", "#567b83", "#466a71", 0.8),
    fillPath(
      "M99 93q98-9 190-1l-12 13q-89-3-167 5Z",
      step ? "#a4ccc5" : "#80a5a0",
      "#5a8885",
      0.85,
    ),
    block(32, 141, 54, 11, paint(id, "cream"), "#948b63", 3),
    step === 0 && [
      stream(154, 95, 155, 129),
      stream(224, 97, 222, 130),
      label(191, 157, "Eau à 4 °C", waterText),
    ],
    step === 1 && [
      label(193, 83, "Eau plus froide", waterText),
      label(193, 135, "4 °C", waterText),
    ],
    step === 2 && [
      fillPath(
        "M97 90 114 84l22 4 12-5 42 3 29-4 28 5 15-3 27 6-12 9-38-3-24 3-29-3-63 7Z",
        waterTop,
        "#5e878b",
        1.5,
      ),
      stroke("M114 87l9 12 29-10 17 8m64-9 13 9 16-8", "#86adb1", 1.2),
      label(190, 74, "Glace flottante", waterText),
      label(193, 135, "Eau liquide", waterText),
    ],
  ];
}

function layeredBed(id: string, ridge: boolean, geothermal = false) {
  const top = ridge
    ? "M26 94q68 2 105 3 27-1 54-22l13 2q23 20 45 21l113-3"
    : "M26 87q72 2 111 12l38 8q18 1 36-10l20-23 27 1 22-13 28 10 18-13 30 10";
  return [
    surface(id, top + "v67H26Z", "copper", 1),
    fillPath(
      ridge
        ? "M26 100q92 3 124 1l41-18q22 22 52 22l113-5v10l-110 6q-26-1-51-23-23 15-54 21L26 112Z"
        : top + "v10l-52-2-29 8-44-1-20 21-20 8-34-8-51-12-58-1Z",
      geothermal ? "#95a679" : "#bfa17e",
      "#746c53",
      0.85,
    ),
    ...[1, 2, 3].map((n) =>
      stroke(`M30 ${110 + n * 13}q70 ${-4 + n * 3} 136 9t102 -4l81-6`, "#f2dbaf", 1.15),
    ),
    ...[0, 1].map((j) => layersTexture(j, ridge ? 117 : 116)),
  ];
}
function layersTexture(offset: number, y: number) {
  return Array.from({ length: 12 }, (_, i) => {
    const x = 38 + i * 26 + offset * 9;
    const h = y + offset * 14 + (i % 3) * 6;
    return stroke(`M${x} ${h}l9-2 6 1`, "#674c3c82", 0.9);
  });
}
function plateMotion(step: number, id: string) {
  return step === 2
    ? [
        surface(id, "M31 49h321v111H31Z", "glass", 1.3),
        fillPath("M31 49h169l-12 19 16 17-17 24 13 16-13 35H31Z", "#b5b69a", "#6b785e", 1.25),
        stroke("M200 49l-12 19 16 17-17 24 13 16-13 35", "#574a38", 2.6),
        stroke("M48 73q34 3 64 38l20 30m182-75q-32 20-62 26l-15 42", "#dde2bb", 1.75, "5 4"),
        stream(156, 142, 156, 76, "#507568"),
        stream(226, 68, 226, 135, "#507568"),
        label(82, 126, "Plaque"),
        label(288, 120, "Plaque"),
      ]
    : [
        fillPath("M26 61h330v60H26Z", "#99bdb5", "#5f8276", 0.9),
        layeredBed(id, step === 0),
        step === 0
          ? [
              fillPath("M172 156q-6-25 16-57 14 19 21 57Z", "#b87044", "#9d5940", 1.05),
              stream(191, 143, 191, 102, heat),
              stream(165, 103, 105, 104, forest),
              stream(219, 104, 277, 104, forest),
              label(190, 59, "Dorsale"),
            ]
          : [
              surface(
                id,
                "M27 89q101 0 135 14l23 4 86 47-8 8-23-6-65-35-20-7Q98 99 27 101Z",
                "iron",
                0.95,
              ),
              stroke("M50 95q76 0 116 17l87 43", "#d0d4b8", 1.15),
              stream(87, 100, 146, 107, forest),
              stream(180, 119, 234, 149, forest),
              stream(326, 77, 269, 77, forest),
              surface(id, "M257 77l26-33 25 31Z", "ember"),
              label(110, 67, "Océan"),
              label(284, 54, "Volcan"),
            ],
      ];
}

function oceanFlow(step: number, id: string) {
  return [
    fillPath("M31 57q173-4 320 0v109H31Z", "#709798", "#4f706b", 1),
    fillPath("M31 98q171-9 320 0v68H31Z", "#3d6374", "#527782", 0.9),
    surface(id, "M31 139q30 6 60 17l66 6 63-8 45-3 45-13 13-7 28-16v51H31Z", "copper", 1),
    stroke("M38 61q33-7 65-1t71 0 64-2 82 1", "#d1e4cb", 2.1),
    stroke("M43 69q53 4 104 0m118-2 55-2", "#c5e0d9", 1.2),
    stream(99, 78, 244, 77, "#a06938"),
    label(181, 54, step === 0 ? "Vent" : "Surface"),
    step === 0 && stream(116, 49, 146, 49, "#4e7378"),
    step >= 1 && [
      stroke("M243 77q45 2 46 36", "#e4ece4", 2.8),
      stream(286, 96, 292, 120, "#387686"),
      ...[267, 298, 327].map((x) => stream(x, 64, x, 47, "#a06938")),
    ],
    step < 2 && label(201, 140, step === 0 ? "Eau profonde" : "Eau plus dense", waterText),
    step === 2 && [
      stroke("M291 122q-12 30-113 24-79-3-95-33", "#d7e8d9", 4),
      stream(246, 139, 158, 144, "#3c8493"),
      stream(86, 118, 75, 94, "#3c8493"),
      label(197, 127, "Retour profond", waterText),
    ],
  ];
}

function trench(step: number, id: string) {
  const floor =
    step === 2
      ? "M32 89q40-23 83-6l35 13 38 51 24 8 28-15 49-57q36-16 62-4"
      : "M32 84q48-28 73-3l47 37 37 3 28-13 25 1 24 36 22 11 31-36 32-17";
  return [
    block(31, 41, 321, 124, "#496e7d", "#44646c", 4),
    block(32, 44, 319, 26, "#9bbeb5", "none"),
    stroke("M35 55q60-6 102 0m59-1 61-1m30 1h55", "#d5e5d6", 1.25),
    surface(id, floor + "V168H32Z", "copper", 1.05),
    stroke(floor, "#c8b38f", 1.75),
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const x = 68 + i * 36;
      return stroke(`M${x} ${157 + (i % 2) * 4}l21 -3`, "#a77756", 0.9);
    }),
    step === 0 && [link(89, 107, "Plateau", "M91 96V77"), link(248, 91, "Fosse", "M250 96l28 47")],
    step === 1 && [
      stroke("M38 126h305", "#f0d7a4", 2, "6 4"),
      label(119, 119, "6 000 m", waterText),
      label(274, 84, "Profondeur", waterText),
    ],
    step === 2 && [
      label(164, 64, "Coupe agrandie", waterText),
      ...(
        [
          [188, 132, 0.9],
          [220, 142, 0.65],
          [239, 125, 0.7],
        ] as const
      ).map(([x, y, s]) =>
        moved(
          x,
          y,
          [
            oval(0, 0, 6.7, 2.4, "#ccbf9f", "#626c60"),
            stroke("M-5 2l-3 5m5-4-2 4m5-4v4m3-4 3 4m0-7 8-4", "#dac9a4", 0.9),
          ],
          s,
        ),
      ),
      link(279, 146, "Faune", "M261 142l-24-10"),
    ],
  ];
}

function thermalSpring(step: number, id: string) {
  return [
    layeredBed(id, false, true),
    stroke("M87 87l13 13-13 15 34 24 29-9 42 19 41-14 31 6 26-31-15-14 16-25", "#715442", 3.2),
    stroke("M87 87l13 13-13 15 34 24 29-9 42 19 41-14 31 6 26-31-15-14 16-25", "#eed2a0", 1.36),
    step <= 1 && [
      fillPath(
        "M49 57q-2-10 10-13 6-13 18-7 12-1 15 6 19-1 19 11 1 4-8 5H49Z",
        "#b2c6bb",
        "#6e8d84",
        1,
      ),
      ...[59, 76, 96].map((x) => stroke(`M${x} 64l-4 10`, "#41838b", 1.8)),
    ],
    stroke("M86 89l14 11-13 15 34 24", "#448c97", 3),
    stream(102, 125, 125, 140, "#448c97"),
    step === 0 && label(180, 83, "Pluie"),
    step >= 1 && [
      stroke("M123 139l30-9 39 19 41-14 31 6", "#a16846", 3.2),
      stream(146, 149, 146, 142, heat),
      stream(217, 153, 217, 145, heat),
      label(165, 114, "Roches chaudes", "#7b4f34"),
    ],
    step === 2 && [
      stroke("M265 141l25-31-15-14 16-25", "#a16846", 3.2),
      oval(293, 73, 24, 5, "#9fc7bf", "#598179"),
      stroke("M286 70q-7-7 2-15t-2-14m12 29q-7-8 2-14", "#8baea8", 1.7),
      stream(286, 111, 282, 98, heat),
      label(287, 61, "Source", waterText),
    ],
  ];
}

export const earthLab = {
  foodweb: {
    foot: [
      "L’énergie passe d’un organisme à l’autre",
      "Un animal a plusieurs ressources",
      "Les minéraux retournent au sol",
    ],
    draw: foodChain,
  },
  detailAbyssPressure: {
    foot: [
      "L’eau exerce une pression de tous côtés",
      "L’eau et le gaz réagissent différemment",
      "Des molécules stabilisent les protéines",
    ],
    draw: abyss,
  },
  maillardfood: {
    foot: [
      "L’évaporation emporte de l’énergie",
      "Sucres réducteurs et groupes aminés",
      "Des réactions créent couleur et arômes",
    ],
    draw: bread,
  },
  lakeice: {
    foot: [
      "L’eau la plus dense descend",
      "L’eau sous 4 °C reste près de la surface",
      "La glace se forme à la surface du lac",
    ],
    draw: glacialLake,
  },
  tectonics: {
    foot: [
      "De la lithosphère se forme à la dorsale",
      "Une plaque océanique plonge",
      "Les plaques coulissent · vue de dessus",
    ],
    draw: plateMotion,
  },
  oceancirculation: {
    foot: [
      "Les vents entraînent les eaux de surface",
      "Une eau assez dense peut plonger",
      "L’eau peut remonter dans d’autres régions",
    ],
    draw: oceanFlow,
  },
  oceanTrench: {
    foot: [
      "Coupe du fond · relief vertical accentué",
      "Zone hadale · au-delà de 6 000 m",
      "Des organismes vivent dans les fosses",
    ],
    draw: trench,
  },
  hotspring: {
    foot: [
      "La pluie pénètre dans le sol et les roches",
      "De l’énergie passe de la roche à l’eau",
      "L’eau chaude trouve un chemin de retour",
    ],
    draw: thermalSpring,
  },
} satisfies Record<string, Study>;
