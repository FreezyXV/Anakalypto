import {
  active,
  arrow,
  call,
  fillPath,
  filled,
  flow,
  harm,
  label,
  layers,
  living,
  moved,
  oval,
  shadow,
  stroke,
} from "../detail100/plate";
import { plate } from "../edition100/craft";
import { clip, gradient, pin, position } from "./material";

function microscopeColors(id: string) {
  return (
    <defs>
      {gradient(
        id + "-stroma",
        [
          [0, "#e8c1aa"],
          [0.28, "#c88472"],
          [0.54, "#e2af93"],
          [1, "#905751"],
        ],
        true,
      )}
      {gradient(
        id + "-blood-lumen",
        [
          [0, "#923f3c"],
          [0.43, "#cb8272"],
          [0.65, "#dfa194"],
          [1, "#93504d"],
        ],
        true,
      )}
      {gradient(
        id + "-membrane",
        [
          [0, "#b58c68"],
          [0.4, "#eacda9"],
          [0.68, "#af785e"],
          [1, "#9f655c"],
        ],
        true,
      )}
      {gradient(
        id + "-plaque",
        [
          [0, "#f0d7a4"],
          [0.46, "#c69464"],
          [1, "#966751"],
        ],
        true,
      )}
      {gradient(
        id + "-immune",
        [
          [0, "#d7e5d6"],
          [0.31, "#a5c4ba"],
          [0.64, "#779b98"],
          [1, "#4a686f"],
        ],
        true,
      )}
      {gradient(
        id + "-vesicle",
        [
          [0, "#dac7ac"],
          [0.3, "#dab27c"],
          [0.69, "#ac8057"],
          [1, "#79554a"],
        ],
        true,
      )}
    </defs>
  );
}

function erythrocyte(id: string, x: number, y: number, scale: number, angle: number) {
  return moved(
    x,
    y,
    [
      <g key="red-cell-orientation" transform={`rotate(${angle})`}>
        {fillPath(
          "M-21 1c2-7 11-11 21-11 11 0 20 4 21 9 2 7-11 11-20 11-11 0-23-4-22-9Z",
          `url(#${id}-blood-lumen)`,
          "#84453f",
          1.25,
        )}
        {fillPath("M-11 1c2-6 19-6 22-1-2 4-18 5-22 1Z", "#9e554c", "#a66b5b", 1)}
        {stroke("M-15-3q10-8 22-4m-19 13q12 4 22 0", "#ebaf8e", 1)}
      </g>,
    ],
    scale,
  );
}

const vesselOuter = "M36 115q143 16 283-2v92q-142 31-283 0Z";
const vesselInner = "M36 134q143 15 283-3v53q-145 34-283 1Z";
const plaque = "M175 198c19-20 32-35 47-36 17-2 29 10 42 21l17 11q-49 14-106 4Z";

function artery(id: string, plaquePresent: boolean) {
  return [
    microscopeColors(id),
    shadow(id, 179, 221, 152, 10),
    fillPath("M35 119l21-21q140 23 272-3l-9 20q-143 24-284 4Z", `url(#${id}-stroma)`, "#96584e"),
    fillPath(vesselOuter, `url(#${id}-stroma)`, "#884c45", 1.35),
    fillPath(vesselInner, `url(#${id}-blood-lumen)`, "#924c43", 1.25),
    clip(
      id + "-red-wall",
      vesselOuter,
      layers(
        Array.from({ length: 86 }, (_, i) => {
          const x = 35 + position(i, 4) * 282,
            y = 113 + position(i, 5) * 115;
          if (y > 142 && y < 189) return null;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q4-2 10 .8`,
            i % 2 ? "#aa695c" : "#efbd9c",
            0.62,
          );
        }),
      ),
    ),
    ...[34, 47, 63, 78, 94, 110, 265, 280, 296, 310].map((x, i) =>
      stroke(`M${x} ${137 + (i % 3) * 1.3}l2 5`, "#dbaf8d", 0.75),
    ),
    stroke("M37 139q139 24 281-3m-280 53q143 28 280-2", "#efbd9e", 1.8),
    plaquePresent && [
      fillPath(plaque, `url(#${id}-plaque)`, "#823f37", 1.2),
      clip(
        id + "-plaque-body",
        plaque,
        layers(
          Array.from({ length: 33 }, (_, i) => {
            const x = 175 + position(i, 2) * 100,
              y = 162 + position(i, 6) * 41;
            return oval(x, y, 1.35, 1.05, i % 2 ? "#eac48b" : "#b88560", "#ad7b66");
          }),
        ),
      ),
      stroke("M178 194c21-21 30-31 45-32 19 0 29 12 41 23", "#f0c7a1", 2.3),
    ],
  ];
}

const lipidRoutes = plate(
  ["LDL vers les tissus", "HDL vers le foie", "Des lipides dans la paroi"],
  (s, id) => [
    ...artery(id, s === 2),
    ...[
      [80, 161],
      [126, 174],
      [174, 161],
      [222, 154],
      [270, 157],
    ].map(([x, y], i) => [
      oval(x!, y!, 7.6, 6.1, s === 1 ? "#a8c4ba" : "#d4ab6f", "#814d43"),
      oval(x!, y!, 3.1, 2.55, s === 1 ? "#709a91" : "#976341", "#8c6550"),
      stroke(`M${x! - 4} ${y! - 3}q5-4 9 0`, "#efcc98", 0.65),
      s === 2 && i === 4 && oval(238, 179, 3.8, 2.8, "#bf915e", "#a06b53"),
    ]),
    s === 0 && [arrow(91, 104, 235, 104, active), call(82, 80, "LDL", "M85 86l-3 66", active)],
    s === 1 && [arrow(240, 103, 116, 103, flow), call(230, 81, "HDL", "M231 88l30 57", flow)],
    s === 2 && [call(239, 82, "Plaque", "M234 89l-11 69", harm), pin(223, 160, harm)],
  ],
);

const vesselRisks = plate(
  [
    "Le sang circule dans l’artère",
    "La plaque prend place dans la paroi",
    "Plusieurs facteurs influencent le risque",
  ],
  (s, id) => [
    ...artery(id, s > 0),
    ...[
      [78, 159, 0.62, -6],
      [130, 174, 0.54, 7],
      [176, 154, 0.55, 10],
      [263, 150, 0.54, -10],
      [291, 169, 0.48, 10],
    ].map(([x, y, k, a]) => erythrocyte(id, x!, y!, k!, a!)),
    s === 0 && [
      call(226, 76, "Paroi artérielle", "M223 83l-12 38", harm),
      arrow(87, 178, 128, 187, "#f5d6b3"),
    ],
    s === 1 && [call(234, 82, "Plaque", "M231 89l-8 69", harm), pin(223, 162, harm)],
    s === 2 && [
      label(77, 83, "Tabac", harm),
      label(172, 83, "Tension", harm),
      label(278, 83, "Cholestérol", harm),
      stroke("M67 93q105 21 218 0", harm, 1.2, "4 4"),
    ],
  ],
);

const ironCarrier = plate(
  [
    "Une partie du fer est stockée",
    "Les globules rouges transportent l’O₂",
    "Les réserves peuvent diminuer",
  ],
  (s, id) => [
    ...artery(id, false),
    ...[
      [67, 160, 0.8, -9],
      [118, 180, 0.7, 12],
      [177, 151, 0.8, 4],
      [231, 169, 0.7, 18],
      [287, 159, 0.76, -10],
    ].map(([x, y, k, a]) => erythrocyte(id, x!, y!, k!, a!)),
    s === 0 && [
      fillPath(
        "M209 90q14-26 50-16 32 2 47 14-12 11-33 10l-18 28q-30-2-42-10Z",
        `url(#${id}-stroma)`,
        harm,
        1.05,
      ),
      ...[228, 250, 278].map((x, i) => pin(x, 87 + (i % 2) * 10, "#b88343")),
      call(105, 79, "Réserves du foie", "M109 86l103 8", active),
    ],
    s === 1 && [
      ...[
        [73, 154],
        [118, 175],
        [181, 147],
        [234, 163],
        [281, 154],
      ].map(([x, y]) => pin(x!, y!, flow)),
      call(190, 76, "Hémoglobine", "M190 82l-12 65", flow),
      pin(178, 147, flow),
    ],
    s === 2 && [
      label(164, 79, "Disponibilité en fer", active),
      stroke("M67 98h224", "#aa9881", 1.35, "4 4"),
      ...[97, 134, 170, 208, 246].map((x, i) =>
        oval(x, 98, 5.2, 5.2, i > 2 ? "#eee6d4" : "#cca169", active),
      ),
    ],
  ],
);

function proteins(id: string, x: number, y: number, highlighted: boolean) {
  return moved(x, y, [
    fillPath(
      "M-18 4q-5-7 5-14-2-10 8-11 8 3 8 14l-2 19h-21Z",
      `url(#${id}-${highlighted ? "glass" : "steel"})`,
      flow,
      1.15,
    ),
    fillPath(
      "M17 4q5-7-5-14 3-10-8-11-8 3-8 14l2 19h21Z",
      `url(#${id}-${highlighted ? "glass" : "steel"})`,
      flow,
      1.15,
    ),
    stroke("M-10 1l2-11m16 0-1 11", "#cfddd0", 1.3),
  ]);
}

const glucoseGates = plate(
  [
    "Le signal facilite l’entrée du glucose",
    "La réponse au signal diminue",
    "Du glucose reste dans le sang",
  ],
  (s, id) => [
    microscopeColors(id),
    filled(id, "M27 89h308v61H27Z", "ivory", "dots"),
    fillPath("M27 155q136 17 308 0v59q-146 23-308 1Z", `url(#${id}-membrane)`, "#926b5a"),
    ...Array.from({ length: 26 }, (_, i) => {
      const x = 31 + i * 11.7,
        y = 155 + Math.sin(i * 0.14) * 8;
      return [
        oval(x, y, 3.4, 3.2, "#f0d1a1", "#a57e64"),
        oval(x, y + 21, 3.4, 3.2, "#c69577", "#a27a62"),
        stroke(`M${x - 1.6} ${y + 4}v7m4-7v7m-4 6v-5m3 5v-5`, "#9b795e", 0.68),
      ];
    }),
    proteins(id, 161, 171, s === 0),
    ...Array.from({ length: s === 0 ? 5 : 12 }, (_, i) =>
      oval(
        56 + (i % 6) * 46,
        108 + Math.floor(i / 6) * 20,
        4.6,
        4.25,
        `url(#${id}-vesicle)`,
        active,
      ),
    ),
    s === 0 && [
      call(257, 76, "Glucose", "M255 83l-11 18", active),
      fillPath("M112 127l6-6 7 6-7 6Z", "#7c9982", living, 1),
      call(83, 77, "Insuline", "M85 85l34 35", living),
      arrow(163, 117, 163, 203, flow),
      oval(162, 207, 4.75, 4.45, `url(#${id}-vesicle)`, active),
    ],
    s === 1 && [
      label(181, 77, "Signal moins efficace", harm),
      stroke("M152 138l18 13m0-14-17 13", harm, 2),
    ],
    s === 2 && [
      label(170, 76, "Glucose dans le sang", active),
      stroke("M55 140q128 8 236 0", active, 1.25, "4 5"),
    ],
  ],
);

function mastCell(id: string, x: number, y: number, activated: boolean) {
  const membrane =
    "M-50 6c-6-21 7-40 29-47 20-7 44-1 61 11 14 10 18 27 9 43-12 21-42 28-68 20-16-5-26-14-31-27Z";
  return moved(x, y, [
    fillPath(membrane, `url(#${id}-immune)`, "#526e6b", 1.5),
    oval(1, 1, 16, 13, "#729391", "#506f70"),
    stroke("M-10 3q7-11 19-5m-14-8 2-1", "#a1b5a9", 1.1),
    ...Array.from({ length: 27 }, (_, i) => {
      const a = (i / 27) * 2 * Math.PI,
        r = 21 + position(i, 7) * 13;
      return oval(
        Math.cos(a) * r * 1.25,
        Math.sin(a) * r,
        2.2 + position(i, 3) * 1.5,
        2.1,
        activated ? "#c3976b" : "#9ea88c",
        "#627a70",
      );
    }),
    ...[
      [-32, -33],
      [-6, -43],
      [20, -37],
    ].map(([a, b]) => stroke(`M${a} ${b}l-1-9m1 1-7-6m7 6 6-6`, "#8a5548", 1.65)),
  ]);
}

function intestinalEdge(id: string) {
  return [
    fillPath(
      "M34 174q32-17 56 0t59 0 62 0 60 0 54 0v47H34Z",
      `url(#${id}-stroma)`,
      "#965b51",
      1.15,
    ),
    ...Array.from({ length: 20 }, (_, i) => {
      const x = 41 + i * 14.5,
        y = 180 + Math.sin(i * 1.3) * 3;
      return [
        oval(x, y, 7.75, 4.2, "#e5af91", "#bb806a"),
        oval(x, y + 1.6, 1.6, 1.25, "#b97766", "#ba7b68"),
      ];
    }),
    stroke("M42 202q62-12 128 1t146 0", "#b7665a", 1.75),
  ];
}

const foodReactions = plate(
  ["Une protéine est reconnue", "Le lactose est décomposé", "Comparer les mécanismes"],
  (s, id) => [
    microscopeColors(id),
    ...intestinalEdge(id),
    s === 0 && [
      mastCell(id, 230, 124, false),
      fillPath("M64 109q14-14 21 0t20 8q-8 17-24 13T64 109Z", `url(#${id}-vesicle)`, "#9e714c"),
      arrow(105, 119, 164, 119, harm),
      call(80, 77, "Protéine", "M79 83v23", active),
      call(246, 76, "Cellule immunitaire", "M242 82l-2 17", flow),
    ],
    s === 1 && [
      fillPath("M136 132q8-34 40-30 20 5 31 16l-12 24-28-14-20 17Z", `url(#${id}-immune)`, flow),
      ...[69, 91, 254, 283].map((x, i) =>
        oval(x, 125 + (i % 2) * 7, 9, 7, `url(#${id}-vesicle)`, active),
      ),
      arrow(108, 132, 132, 131, harm),
      arrow(210, 133, 232, 133, harm),
      label(82, 85, "Lactose", active),
      label(173, 81, "Lactase", flow),
      label(270, 85, "Deux sucres", active),
    ],
    s === 2 && [
      mastCell(id, 96, 123, false),
      ...[220, 241, 281, 302].map((x, i) =>
        oval(x, 126 + (i % 2) * 9, 7.5, 6.1, `url(#${id}-vesicle)`, active),
      ),
      stroke("M179 86v83", "#a2a292", 1.45, "4 4"),
      label(101, 76, "Immunité", flow),
      label(259, 76, "Digestion", active),
    ],
  ],
);

const allergyResponse = plate(
  [
    "L’allergène lie des anticorps",
    "La cellule libère des médiateurs",
    "Les molécules agissent sur les tissus",
  ],
  (s, id) => [
    microscopeColors(id),
    ...intestinalEdge(id),
    mastCell(id, 148, 131, s > 0),
    s === 0 && [
      fillPath("M105 67q11-10 18-3 7 9-2 16t-21-3Z", `url(#${id}-vesicle)`, active),
      call(238, 79, "Allergène", "M233 86l-110-12", active),
      pin(123, 74, active),
    ],
    s >= 1 && [
      ...[
        [202, 111],
        [218, 102],
        [227, 123],
        [241, 110],
        [260, 122],
        [232, 151],
        [260, 148],
        [276, 163],
      ].map(([x, y], i) => oval(x!, y!, i < 2 ? 3.7 : 3, i < 2 ? 3.4 : 2.7, "#d1a36f", "#9d6c4e")),
      s === 1 && call(260, 79, "Médiateurs", "M258 86l-15 24", harm),
    ],
    s === 2 && [
      label(254, 82, "Tissu voisin", flow),
      arrow(251, 132, 278, 171, flow),
      oval(265, 185, 43, 20, "none", "#f2deba"),
    ],
  ],
);

export const microscopyRefinements = {
  editionLipidRoutes: lipidRoutes,
  editionVesselRisks: vesselRisks,
  editionIronCarrier: ironCarrier,
  editionGlucoseGates: glucoseGates,
  editionFoodReactions: foodReactions,
  editionAllergyResponse: allergyResponse,
};
