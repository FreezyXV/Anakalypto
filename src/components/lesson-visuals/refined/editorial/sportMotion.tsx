import {
  type Study,
  type TransportTone,
  cold,
  dark,
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
  tile,
  tire,
} from "./art";

type Point = readonly [number, number];
type Stance = readonly [Point, Point, Point, Point, Point, Point];
const runnerStances: readonly Stance[] = [
  [
    [-7, 10],
    [-22, 33],
    [5, 11],
    [34, 37],
    [23, -19],
    [-14, -17],
  ],
  [
    [10, 10],
    [1, 36],
    [-18, 18],
    [-33, 32],
    [21, -32],
    [-19, -6],
  ],
  [
    [18, 12],
    [42, 35],
    [-4, 18],
    [-25, 37],
    [25, -23],
    [-13, -20],
  ],
];
function arm(path: string, near: boolean) {
  return [
    stroke(path, near ? "#886d52" : "#756e56", 8.2),
    stroke(path, near ? "#d1af82" : "#b99c77", 5.8),
  ];
}
export function runner(
  id: string,
  x: number,
  y: number,
  scale: number,
  pose: number,
  tone: TransportTone = "steel",
) {
  const [nearKnee, nearFoot, farKnee, farFoot, nearHand, farHand] = runnerStances[pose % 3]!;
  return moved(
    x,
    y,
    [
      grounding(id, 1, 42, 44),
      ...arm(`M3-14 13-6 ${farHand[0]} ${farHand[1]}`, false),
      stroke(`M-2 2 ${farKnee.join(" ")} ${farFoot.join(" ")}`, "#70674c", 11),
      stroke(`M-2 2 ${farKnee.join(" ")} ${farFoot.join(" ")}`, "#a58b68", 7.3),
      stroke(`M-5 3 ${nearKnee.join(" ")} ${nearFoot.join(" ")}`, "#675b46", 12.6),
      stroke(`M-5 3 ${nearKnee.join(" ")} ${nearFoot.join(" ")}`, "#ccaa7c", 8.6),
      ...[nearFoot, farFoot].map(([a, b], i) =>
        surface(id, `M${a - 4} ${b - 4}l9 2 9 6-4 3-15-2Z`, i ? "steel" : "iron", 0.93),
      ),
      surface(id, "M-14-6l21-5 9 21-9 9-9-2-8-7-12 4-7-7Z", "iron", 1.13),
      fillPath("M-9-14q3-11 15-15 13-1 15 11L10-7-12 0l-4-10Z", paint(id, tone), "#516a60", 1.05),
      stroke("M-11-12l13-10 10-2", "#dbd7b0", 1.1),
      ...arm(`M9-21 4-11 ${nearHand[0]} ${nearHand[1]}`, true),
      stroke("M13-24l3-8", "#ac8a66", 5.5),
      oval(19, -37, 9, 11, "#c4a27a", "#826a51"),
      fillPath("M10-40q0-13 12-13 9 0 10 12l-9-2-8 5Z", "#635d48", "#6e644c", 0.93),
      stroke("M27-39l3 5-4 2m-10-4v2", "#82664d", 0.9),
    ],
    scale,
  );
}
function field(id: string, kind: "court" | "grass") {
  const base = kind === "court" ? "#b6a17b" : "#819a75";
  return [
    fillPath("M28 154 63 77h224l45 77-18 13H28Z", base, "#687d64", 1.25),
    stroke("M35 151 67 81h218l43 71M31 160h283", "#e7d6ac", 1.43),
    stroke("M175 81v71m-77-68-20 67m168-68 21 70", "#dbcfa4", 1.4, "5 3"),
    oval(175, 117, 28, 17, "none", "#e0d8ad"),
    ...(kind === "court"
      ? [0, 1, 2, 3, 4, 5].map((i) =>
          stroke(`M${50 + i * 44} 151l${11 - i * 3} -65`, "#9e855d", 0.7),
        )
      : []),
  ];
}
function basket(id: string, x: number, y: number, scale: number, open: boolean) {
  return moved(
    x,
    y,
    [
      ...(open
        ? [
            stroke("M45 47V-29", "#526d61", 7.8),
            stroke("M47 41v-67", "#b0bca0", 1.52),
            surface(id, "M-10-29h67v31h-67Z", "steel", 1.11),
            surface(id, "M-5-24h57v24h-57Z", "cream", 0.87),
            stroke("M6-15h25v16H6Z", "#ad7d52", 2.05),
          ]
        : [
            surface(id, "M-34-28h98v14H-34Z", "copper", 1.09),
            ...[-27, -6, 18, 42, 60].map((a) => stroke(`M${a} -27v-8`, "#887052", 2.1)),
            stroke("M24-17v14m-9 0 18-1", "#927050", 2.8),
          ]),
      fillPath(
        open ? "M-15 1h44l-7 27H-7Z" : "M-17 0h45l-6 31q-19 8-34 0Z",
        open ? "#c7caaa54" : "#b59266",
        "#867755",
        1.2,
      ),
      ...[-11, -4, 4, 11, 19].map((a, i) =>
        stroke(
          `M${a} 4l${(2 - i) * 1.5} 26m${(i - 1) * 0.8 - 3} -8 15-6`,
          open ? "#d0c8a9" : "#745d43",
          0.89,
        ),
      ),
      !open && [7, 14, 21, 28].map((v) => stroke(`M-10 ${v}q16 5 31 0`, "#80654a", 0.85)),
      oval(5, 1, 23, 5.6, "none", "#a66d49"),
    ],
    scale,
  );
}
function ball(id: string, x: number, y: number, r: number, rugby = false) {
  return [
    oval(x, y, r, rugby ? r * 0.61 : r, paint(id, rugby ? "cream" : "copper"), "#815d45"),
    stroke(
      rugby
        ? `M${x - r * 0.55} ${y}q${r * 0.6} -5 ${r * 1.2} 0`
        : `M${x - r} ${y}h${r * 2}m-${r} -${r}q-${r * 0.62} ${r} 0 ${r * 2}`,
      "#8c6245",
      1.07,
    ),
  ];
}
function chair(id: string, x: number, y: number, scale: number, pose: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 6, 33, 48),
      tire(id, -11, 15, 31),
      tire(id, 32, 29, 10),
      stroke("M-6 11l29 11h17m-48-7 6-26 30 5 10 26m-50-21-3-20", "#abb99b", 3.1),
      fillPath("M-18 2-26-17-19-21l14 17 29 2 4 10H-23Z", "#637f71", "#4e685e", 1.2),
      oval(1, -43, 9, 11, "#c4a480", "#806850"),
      fillPath("M-8-47q4-10 13-7l7 9-10-2-9 4Z", "#655b47", "#726350", 0.95),
      surface(id, "M-11-30q10-7 23 3l9 24-11 10-26-9Z", "glass", 1),
      stroke("M8 3l16 5 13 15", "#bb9973", 7.3),
      ...arm(
        pose === 0 ? "M-4-24l-4 13 18 13" : pose === 1 ? "M-4-24l-14 6-9 14" : "M-4-24l20 3 24 4",
        true,
      ),
      ...(pose < 2 ? ball(id, 22, -4, 7) : ball(id, 52, 4, 7)),
    ],
    scale,
  );
}
function swimmer(id: string, x: number, y: number, s: number, pose: number) {
  return moved(
    x,
    y,
    [
      fillPath(
        "M-79 9q31-15 58-10L37-15q15 1 24 12l-3 15-23 11-60-3-37 9Z",
        "#b9a27c",
        "#826e56",
        1.05,
      ),
      fillPath("M-21-1 4-8l24 5 1 23-30 3-20-6Z", "#668a83", "#546e62", 1.12),
      oval(62, pose === 1 ? -6 : -1, 16, 9.9, paint(id, "cream"), "#7d7058"),
      stroke("M58-8q6-5 14 1m-4 3v1", "#526d66", 2.2),
      ...arm(
        pose === 0 ? "M42 7l-2 18-44 10" : pose === 1 ? "M39-6l-11-25 42-11" : "M39 5 62 22 98 13",
        true,
      ),
      ...arm(pose === 0 ? "M38-10 54-35 93-22" : "M36 13 24 32-14 31", false),
      stroke("M-73 13l-46-2m53 6-53 18", "#c7ad81", 4.8),
      stroke("M-116 11l-13-6m13 28-12 6", "#a78b6a", 3),
    ],
    s,
  );
}
function waterPanel(id: string, s: number, side = false) {
  return [
    panel(id, 39, 57, 282, 107, "glass"),
    fillPath(
      s === 0 ? "M41 106q137-13 278 0v55H41Z" : "M41 112q137-13 278 0v49H41Z",
      "#81aca5",
      "#628d86",
      1.05,
    ),
    stroke("M47 112q64-11 119-6t147 0", "#d7e1bd", 1.6),
    ...(side
      ? [0, 1, 2].map((i) => stroke(`M55 ${123 + i * 12}q125-7 250-5`, "#b6cdb0", 0.9))
      : []),
  ];
}
function trace(x: number, y: number, s: number, c: string) {
  return moved(x, y, [
    stroke(
      s === 0
        ? "M0 22h25l9-4 5-9 6 30 7-16 14-2h39"
        : s === 1
          ? "M0 22h11l9-4 5-9 6 30 7-16h11l9-4 5-9 6 30 7-16h12 14"
          : "M0 22h16l9-4 5-9 6 30 7-16h15l9-4 5-9 6 30 7-16h17",
      c,
      2.1,
    ),
  ]);
}
export const sportMotion = {
  firstBasket: {
    foot: [
      "Le panier se trouve en hauteur",
      "Le ballon doit franchir l’ouverture",
      "Le cercle ouvert laisse retomber le ballon",
    ],
    draw: (s, id) => [
      ...field(id, "court"),
      runner(id, 110, 125, 0.84, s === 1 ? 1 : 0, "copper"),
      basket(id, 247, 76, 1.14, s === 2),
      stroke("M127 100q41-61 116-37", "#956e46", 1.9, "4 4"),
      ...ball(id, [152, 240, 253][s]!, [76, 66, 124][s]!, 10),
      s === 2 && stream(267, 84, 267, 115, forest),
    ],
  },
  rugbypass: {
    foot: [
      "L’équipe progresse vers l’en-but",
      "Le geste envoie le ballon en arrière",
      "Le receveur peut poursuivre sa course",
    ],
    draw: (s, id) => [
      ...field(id, "grass"),
      runner(id, 217, 113, 0.83, s === 1 ? 1 : 0, "copper"),
      runner(id, 111, 133, 0.82, s === 2 ? 1 : 0, "glass"),
      s === 1
        ? [...ball(id, 175, 105, 8, true), stream(197, 96, 145, 112, heat)]
        : ball(id, s === 0 ? 234 : 133, s === 0 ? 85 : 107, 8, true),
      stream(180, 63, 289, 63, forest),
      label(238, 56, "En-but", forest),
    ],
  },
  wheelchaircourt: {
    foot: [
      "Le ballon peut reposer sur les genoux",
      "Deux poussées avec le ballon tenu",
      "Puis dribble, passe ou tir",
    ],
    draw: (s, id) => [
      ...field(id, "court"),
      chair(id, 156, 118, 1.14, s),
      s === 0
        ? link(265, 82, "Ballon", "M245 91l-63 18", heat)
        : s === 1
          ? [
              stream(82, 96, 105, 96, forest),
              stream(82, 114, 105, 114, forest),
              label(272, 65, "Deux poussées", cold),
            ]
          : [stroke("M210 133q31-6 50-11", "#c5a879", 2.1, "4 3"), label(265, 80, "Dribble", cold)],
    ],
  },
  paraClassification: {
    foot: [
      "Les actions diffèrent selon le sport",
      "On évalue l’effet sur les actions du sport",
      "La classe est propre à la discipline",
    ],
    draw: (s, id) => [
      ...field(id, s === 0 ? "grass" : "court"),
      s === 0
        ? [
            runner(id, 89, 114, 0.86, 0),
            chair(id, 241, 112, 0.87, 2),
            label(233, 58, "Actions", cold),
          ]
        : [
            chair(id, 128, 112, 0.95, 1),
            panel(id, 212, 65, 91, 80, "cream"),
            ...[80, 97, 114].map((v, i) =>
              stroke(`M225 ${v}l4 5 9-11m7 7h40`, i === s ? "#a77e50" : "#799376", 1.65),
            ),
            label(259, 161, s === 1 ? "Évaluation" : "Classe", forest),
          ],
    ],
  },
  detailSwimmingDrag: {
    foot: [
      "L’eau exerce une poussée vers le haut",
      "La tête modifie la position du corps",
      "L’orientation change la résistance",
    ],
    draw: (s, id) => [
      ...waterPanel(id, s, true),
      moved(180, s === 1 ? 111 : 124, [
        <g key="swimmer" transform={`rotate(${s === 2 ? -13 : 0})`}>
          {swimmer(id, 0, 0, 0.91, s === 0 ? 0 : 1)}
        </g>,
      ]),
      s === 0
        ? [
            stream(176, 144, 176, 118, forest),
            stream(223, 131, 223, 153, heat),
            label(272, 77, "Poussée", cold),
          ]
        : s === 1
          ? [link(265, 73, "Tête", "M260 79l-23 13", cold)]
          : [stream(158, 148, 88, 148, heat), label(258, 75, "Traînée", heat)],
    ],
  },
  detailRopeStretch: {
    foot: ["La corde transmet un effort", "Une corde dynamique s’allonge"],
    draw: (s, id) => [
      surface(id, "M42 57h99l-7 37 14 33-25 34H42Z", "copper", 1.3),
      stroke("M48 80l68-9m-62 30 68 3m-74 22 66 15m-36-66 5 49", "#d1b788", 1.23),
      runner(id, 204, s === 0 ? 115 : 129, 0.78, s === 0 ? 1 : 2, "glass"),
      stroke(s === 0 ? "M113 76q31 4 86 41" : "M113 76q30 19 87 55", "#b48553", 3.6),
      stroke(s === 0 ? "M113 76q31 4 86 41" : "M113 76q30 19 87 55", "#e4c48b", 1.08),
      ...joint(id, 112, 77, 6, "steel"),
      s === 1 && stream(233, 111, 233, 142, heat),
      label(260, 71, s === 0 ? "Liaison" : "Allongement", cold),
    ],
  },
  altitudeTrack: {
    foot: [
      "La pression diminue avec l’altitude",
      "Air moins dense, traînée moindre",
      "L’oxygène disponible peut limiter l’effort",
    ],
    draw: (s, id) => [
      fillPath(
        "M40 149 80 92l34 28 52-75 31 31 19-18 54 72 48 18v18H40Z",
        "#a6aa83",
        "#71866e",
        1.16,
      ),
      fillPath("M144 76l22-31 31 31-14 7-14-16-11 19Z", "#d8d9bc", "#91a089", 0.91),
      stroke("M42 161h270", "#8c8063", 2),
      runner(id, 240, 119, 0.83, s === 2 ? 2 : 0),
      s === 0
        ? [stream(99, 128, 99, 74, forest), label(78, 62, "Altitude", cold)]
        : s === 1
          ? [stream(308, 123, 281, 123, heat), label(258, 70, "Traînée", heat)]
          : [
              label(253, 76, "O₂ disponible", cold),
              stroke("M236 81q-12 9-8 18", "#688e7c", 1.6, "4 2"),
            ],
    ],
  },
  crawl: {
    foot: [
      "Le bras immergé repousse l’eau",
      "L’autre bras revient au-dessus de l’eau",
      "Les bras se relaient avec le roulis",
    ],
    draw: (s, id) => [
      ...waterPanel(id, s, true),
      swimmer(id, 165, 118, 0.98, s),
      s === 0
        ? [stream(149, 151, 90, 151, forest), label(245, 73, "Appui", cold)]
        : s === 1
          ? [stream(196, 71, 252, 74, forest), label(138, 73, "Retour", cold)]
          : [stroke("M117 109q28-25 49-2l-7 5", "#d9d6ad", 2.5), label(238, 74, "Relais", cold)],
    ],
  },
  walkPendulum: {
    foot: [
      "Le centre de masse monte sur l’appui",
      "Le simple appui passe près du point haut",
      "La descente relance le mouvement",
    ],
    draw: (s, id) => {
      const x = [111, 181, 250][s]!,
        y = s === 1 ? 103 : 115;
      return [
        tile(id, 40, 148, 274, 19, "iron", 10),
        stroke("M78 124q102-43 204 0", "#8f926f", 1.7, "5 3"),
        moved(x, y, [
          stroke(
            s === 1 ? "M1-1 0 23-5 44m4-43-13 23-25 8" : "M-2 0l-17 21-17 12m37-33l13 17 12 16",
            "#766b52",
            9,
          ),
          stroke(
            s === 1 ? "M1-1 0 23-5 44m4-43-13 23-25 8" : "M-2 0l-17 21-17 12m37-33l13 17 12 16",
            "#c3a47a",
            5.7,
          ),
          surface(id, "M-11-35l10-6 12 5 3 19-4 21h-23l3-21Z", "glass", 1.13),
          stroke(s === 1 ? "M8-31l-12 18-8 11" : "M8-31l10 15 9 3", "#ad9065", 6),
          oval(4, -48, 8.8, 10.9, "#c5a27b", "#76674d"),
          fillPath("M-4-53q4-8 13-4l5 8-10-4-8 5Z", "#68614d", "#6b634c", 0.93),
          oval(0, -6, 5.3, 5.3, paint(id, "copper"), dark),
        ]),
        link(
          s === 0 ? 240 : 93,
          68,
          s === 1 ? "Point haut" : "Centre de masse",
          s === 0 ? "M193 72l-77 30" : s === 1 ? "M134 73l41 23" : "M144 73l98 29",
          cold,
        ),
      ];
    },
  },
  effortHeart: {
    foot: [
      "Une contraction propulse du sang",
      "La fréquence peut augmenter à l’effort",
      "Le retour après l’effort est progressif",
    ],
    draw: (s, id) => [
      grounding(id, 102, 153, 57),
      surface(id, "M72 93q-12-21 7-34 9-8 34-3 25 3 22 25l-12 18-31 5Z", "iron", 1.19),
      stroke("M107 99q18-19 11-39-7-15-22-7m27 16 12-8 10 9m-54 5-9-16", "#a77351", 7),
      fillPath(
        "M67 97q9-15 31-11 8-5 24-1 18 7 16 24-4 27-24 42-13 2-31-12-16-18-16-42Z",
        "#a96852",
        "#715946",
        1.34,
      ),
      fillPath("M105 102q12-10 23 1 3 16-8 30l-10 11-9-13Z", "#b9815e", "#8c6552", 1),
      stroke("M94 95q15 12 8 30l8 16m-40-39q11 8 18 24", "#e0aa7d", 1.6),
      panel(id, 176, 84, 131, 61, "soot"),
      trace(187, 96, s, "#aec4a1"),
      label(243, 71, ["Battement", "Fréquence", "Récupération"][s]!, cold),
    ],
  },
  detailLiftingMoment: {
    foot: [
      "Plus de distance, plus de moment",
      "À force égale, le moment diminue",
      "La distance est un facteur de la tâche",
    ],
    draw: (s, id) => [
      tile(id, 36, 148, 278, 16, "iron", 9),
      runner(id, 128, 109, 0.94, s === 0 ? 2 : 1, "copper"),
      stroke(s === 0 ? "M151 90h91" : "M151 90h55", "#94754d", 3.9),
      tile(id, s === 0 ? 238 : 205, 81, 47, 28, "copper", 8),
      stream(s === 0 ? 260 : 226, 112, s === 0 ? 260 : 226, 142, heat),
      stroke(s === 0 ? "M130 145h124" : "M130 145h89", "#a1bf9b", 1.95, "5 3"),
      label(
        242,
        65,
        s === 0 ? "Distance longue" : s === 1 ? "Distance réduite" : "Même force",
        cold,
      ),
    ],
  },
  detailPlateShoe: {
    foot: [
      "La mousse peut se comprimer",
      "La plaque est intégrée à la semelle",
      "La forme guide le déroulé du pied",
    ],
    draw: (s, id) => [
      grounding(id, 173, 165, 128),
      surface(id, "M49 125l20-9 21-19 20-34 40 9 31 38 43 8 48 2 35 17-8 15H52Z", "glass", 1.21),
      fillPath("M55 126l26-8 33-38 65 35 44 9 52 1 31 13-10 15H54Z", "#9cae8d", "#698777", 1.1),
      stroke("M99 111l44-24m-34 28 44-20m-31 27 40-20", "#e0dcb0", 1.44, "4 2"),
      surface(
        id,
        s === 0
          ? "M52 145h248l-12 10h-47l-67-5H52Z"
          : "M52 144q123 16 248-10l-12 19q-112 17-236 3Z",
        "cream",
        1.02,
      ),
      s === 0
        ? [stream(98, 142, 98, 156, heat), label(253, 78, "Mousse", cold)]
        : s === 1
          ? [
              stroke("M69 146q131 13 222-7", "#8e6e43", 2.7),
              link(259, 78, "Plaque", "M259 83l-25 61", heat),
            ]
          : [
              stroke("M81 160q83-8 182-18", "#588167", 1.89, "4 3"),
              stream(232, 159, 272, 148, forest),
              label(257, 76, "Déroulé", cold),
            ],
    ],
  },
} satisfies Record<string, Study>;
