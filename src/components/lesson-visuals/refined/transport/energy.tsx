import { block, fillPath, label, moved, oval, stroke } from "../../detail100/plate";
import { pin } from "../material";
import {
  cold,
  dark,
  fastener,
  forest,
  gold,
  heat,
  link,
  paint,
  rotor,
  stream,
  surface,
  technicalPlate,
} from "./plate";

function vessel(id: string, x: number, y: number, cutaway: boolean) {
  return moved(x, y, [
    surface(id, "M-43-22h77q20 1 20 24t-20 23h-77q-17-2-17-23t17-24Z", "steel", 1.5),
    oval(32, 2, 20, 23, paint(id, "iron"), dark),
    oval(32, 2, 15, 18, paint(id, "steel"), dark),
    oval(32, 2, 10, 12, paint(id, "glass"), dark),
    stroke("M-51-13h72m-69 29h65", "#e7dec1", 1.3),
    surface(id, "M-35-23h6v47h-6Zm40 0h6v47H5Z", "iron", 0.7),
    surface(id, "M-47 21h7v10h-7Zm62 0h7v10h-7Z", "copper", 0.85),
    cutaway && [
      surface(id, "M-28-15h34l-7 32h-34Z", "cream"),
      surface(id, "M-32 4h35l-4 13h-34Z", "glass", 0.65),
      stroke("M-25-13l-6 28m32-28-6 28", "#ad8958", 1.4),
    ],
  ]);
}

function electricDrive(id: string, x: number, y: number) {
  return moved(x, y, [
    surface(id, "M-43-25h76l13 11v29L33 27h-76Z", "iron", 1.3),
    surface(id, "M-40-18h55v37h-55Z", "steel"),
    ...[-36, -30, -24, -18, -12, -6, 0, 6].map((x) =>
      stroke(`M${x} -15v30`, x % 4 === 0 ? "#e4d7b7" : dark, 1.25),
    ),
    oval(30, 0, 14, 24, paint(id, "steel"), dark),
    oval(32, 0, 7, 13, paint(id, "iron"), dark),
    surface(id, "M32-3h39v6H32Z", "copper"),
    surface(id, "M66-4Q57-41 64-47q11 13 10 43l-1 7q9 31 1 43-12-10-11-43Z", "steel"),
    oval(69, 0, 6, 5, paint(id, "copper"), dark),
    ...fastener(-36, -13),
    ...fastener(-36, 13),
  ]);
}

const hydrogenair = technicalPlate(
  ["Isoler le réservoir", "Brûler l’hydrogène", "Alimenter une pile"],
  [
    "Le réservoir conserve un liquide très froid",
    "La combustion peut former des NOₓ",
    "La pile fournit aussi eau et chaleur",
  ],
  (s, id) =>
    s === 0
      ? [
          surface(
            id,
            "M34 140q-4-39 66-48l145-10 33-27h20l-7 53 24 21-4 12-29 6H69q-24 0-35-7Z",
            "steel",
            1.25,
          ),
          surface(id, "M77 106h159l21-9 12 33H81Z", "cream"),
          ...[91, 106, 121, 136, 151, 166, 181].map((x) =>
            oval(x, 116, 3.2, 2.85, "#5b7876", "#868c72"),
          ),
          moved(228, 115, [vessel(id, 0, 0, true)], 0.69),
          link(240, 66, "Isolation", "M224 73l11 30", cold),
          link(112, 165, "Cabine", "M112 154l24-27", gold),
        ]
      : [
          moved(78, 105, [vessel(id, 0, 0, false)], 0.76),
          stream(119, 105, 163, 105, cold),
          label(72, 152, "H₂ liquide", cold),
          s === 1
            ? [
                surface(id, "M164 77l21-11h66l39 25v32l-39 24h-66l-21-9Z", "steel", 1.3),
                ...[187, 195, 203, 211].map((x, i) =>
                  oval(x, 105, 4, 19 - i * 1.6, paint(id, "iron"), dark),
                ),
                fillPath("M217 91h28l19 11-18 17h-29Z", "#ab6c44", dark, 1),
                fillPath("M224 108q4-14 15-11-1 7 11 8-7 3-7 8Z", "#edbc66", heat, 0.8),
                ...[267, 273].map((x) => oval(x, 105, 3, 14, paint(id, "copper"), dark)),
                stream(291, 105, 329, 105, heat),
                stream(174, 60, 191, 83, cold),
                label(163, 56, "Air", cold),
                link(216, 167, "Turbine", "M229 155l41-32", heat),
                label(305, 68, "Gaz", heat),
              ]
            : [
                surface(id, "M164 77l10-8h35l12 9v49l-12 8h-45Z", "glass", 1.3),
                ...[169, 176, 183, 190, 197, 204, 211].map((x) =>
                  stroke(`M${x} 80v44`, "#e7e5cd", 1.55),
                ),
                label(191, 157, "Pile", cold),
                stream(191, 58, 191, 76, cold),
                label(207, 54, "O₂", cold),
                stream(221, 105, 244, 105, forest),
                moved(276, 112, [electricDrive(id, 0, 0)], 0.7),
                label(278, 169, "Moteur", forest),
              ],
        ],
);

function battery(id: string, x: number, y: number, charge: number, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, "M-56-25l14-10h85l14 10v53l-13 9h-100Z", "iron", 1.1),
      surface(id, "M-57-25h113v53H-57Z", "glass", 1.3),
      block(-49, -18, 98, 37, paint(id, "soot"), dark, 2),
      ...[-43, -27, -11, 5, 21, 37].map((x, i) => [
        surface(id, `M${x} -12h11v24h-11Z`, i < charge ? "glass" : "iron", 0.75),
        stroke(`M${x + 2} -11v21m3-22v-3`, "#dddcc3", 0.85),
      ]),
      ...fastener(-51, -20, 1.8),
      ...fastener(51, 22, 1.8),
      surface(id, "M55-8h11v13H55Z", "copper", 1),
    ],
    scale,
  );
}

const electricair = technicalPlate(
  ["De la batterie à l’hélice", "Décharger la batterie", "Une architecture hybride"],
  [
    "Le moteur électrique fait tourner l’hélice",
    "La masse reste pratiquement la même",
    "Le générateur alimente aussi le moteur",
  ],
  (s, id) =>
    s === 0
      ? [
          battery(id, 92, 107, 6, 0.96),
          stream(157, 107, 225, 107, forest),
          electricDrive(id, 272, 107),
          label(87, 165, "Batterie", cold),
          label(260, 169, "Moteur", forest),
        ]
      : s === 1
        ? [
            battery(id, 93, 105, 6, 1),
            battery(id, 260, 105, 1, 1),
            stroke("M123 160h110", dark, 1.1, "4 4"),
            label(93, 165, "Chargée", cold),
            label(266, 165, "Déchargée", dark),
          ]
        : [
            battery(id, 76, 83, 4, 0.63),
            moved(75, 144, [
              surface(id, "M-36-17 19-17l17 11v18l-16 11h-53Z", "steel"),
              rotor(id, -12, 4, 17, "copper"),
              oval(25, 4, 9, 16, paint(id, "iron"), dark),
              stroke("M-28-10h41m-29 28h31", "#d7cba7", 1.3),
            ]),
            stream(120, 83, 173, 110, forest),
            stream(115, 145, 173, 115, forest),
            block(174, 100, 26, 26, paint(id, "glass"), dark, 3),
            stream(201, 112, 236, 112, forest),
            moved(273, 115, [electricDrive(id, 0, 0)], 0.82),
            label(82, 176, "Générateur", heat),
            label(274, 177, "Moteur", forest),
          ],
);

function historicalAircraft(id: string, propellers: boolean) {
  return [
    surface(id, "M42 132 27 72h20l38 41 156-1q46-1 79 27-3 15-32 18l-216 2-31-13Z", "cream", 1.25),
    surface(id, "M69 142h206l41-9 4 6q-3 15-32 18l-216 2Z", "steel"),
    stroke("M79 119h155q38 1 55 10", "#f7eed2", 1.5),
    ...Array.from({ length: 14 }, (_, i) =>
      oval(101 + i * 11, 132, 2.4, 2.4, "#5c7975", "#9c9b82"),
    ),
    fillPath("M273 125h16l10 6-24-1Z", "#526d68", dark, 0.7),
    surface(id, propellers ? "M166 109l91-12-44 27-69 4Z" : "M169 137l81-6-44 41-28 1Z", "steel"),
    propellers
      ? [
          surface(id, "M184 84h34l9 8-7 11h-39l-6-9Z", "iron", 0.9),
          surface(id, "M226 92q-7-22-3-31 7 3 9 31 4 22-1 26-6-6-5-26Z", "steel", 0.95),
          oval(228, 92, 4, 3, paint(id, "copper"), dark),
          surface(id, "M195 98h58l10 15-8 9h-53l-14-10Z", "iron"),
          surface(id, "M259 108q-3-31 6-37 7 10 2 38 6 29-3 35-6-7-5-36Z", "steel"),
          oval(265, 111, 6, 4, paint(id, "copper"), dark),
          stroke("M265 70q12 11 9 44m-18-43q-9 18-3 31", cold, 0.85, "3 3"),
        ]
      : [
          surface(id, "M199 159h51v16l-13 7h-31l-11-8Z", "iron", 1),
          oval(248, 168, 7, 10, paint(id, "soot"), dark),
          oval(247, 169, 4, 7, paint(id, "glass"), dark),
          moved(94, 135, [vessel(id, 0, 0, false)], 0.34),
        ],
  ];
}

const zeroe = technicalPlate(
  ["Concept à turbosoufflantes", "Concept à turbopropulseurs", "Concept à aile intégrée"],
  [
    "Le stockage est prévu derrière la cabine",
    "Le dessin d’origine garde une aile haute",
    "Le corps et les ailes forment un volume",
  ],
  (s, id) =>
    s < 2
      ? [
          historicalAircraft(id, s === 1),
          s === 0
            ? [
                link(104, 79, "Réservoir", "M106 86l-10 39", cold),
                link(280, 86, "Nacelle", "M285 91l-38 62", heat),
              ]
            : link(279, 64, "Hélices", "M263 66l-31 14m28-13 5 4", heat),
        ]
      : [
          surface(
            id,
            "M181 54q19 1 47 39l99 59-5 12-99-23-44 29-42-29-99 23-5-12 99-59q29-38 49-39Z",
            "steel",
            1.4,
          ),
          surface(id, "M181 56q29 18 42 79l-44 35-41-31q9-60 43-83Z", "cream", 1),
          surface(id, "M169 58l-9 20q20-10 40 0l-11-20q-11-3-20 0Z", "glass", 1),
          surface(id, "M117 103h23l-11 38H98Zm102 0h23l19 38h-33Z", "iron", 0.9),
          stroke("M54 150l83-43m85 0 84 43m-152-27q25-14 51 0m-61 16q41-19 73 0", "#e8e4c9", 1.2),
          stroke("M155 103q23-19 51 0l10 31-37 26-35-24Z", cold, 1.5, "5 3"),
          link(69, 69, "Corps large", "M90 73l55 50", cold),
        ],
);

function refinery(id: string) {
  return [
    surface(id, "M126 136v-24h91v42h-91Z", "iron"),
    surface(id, "M135 73h19v71h-19Zm32 18h17v57h-17Zm32-26h16v81h-16Z", "steel", 1),
    stroke("M144 74v-11h38v20m-5 7v-8h30m-2-16V53h11m-20 96h25", "#927744", 2),
    stroke(
      "M137 98h15m-15 17h15m-15 15h15m17-18h14m-14 17h14m18-47h13m-13 26h13m-13 23h13",
      "#e2d4b8",
      1.1,
    ),
    label(173, 174, "Conversion", dark),
  ];
}

const saf = technicalPlate(
  ["Des huiles usagées", "Des résidus végétaux", "Des molécules de synthèse"],
  [
    "La matière première est transformée",
    "La provenance des résidus compte",
    "La synthèse demande de l’énergie",
  ],
  (s, id) => [
    refinery(id),
    ...(s === 0
      ? [
          surface(id, "M47 75h25v11l10 13v36H38V99l9-13Z", "cream"),
          surface(id, "M40 107h39v26H41Z", "copper", 0.8),
          stroke("M47 77h24m-20-4v-6h16v6m4 31v21", "#9e8058", 1.2),
          label(60, 162, "Huile", heat),
        ]
      : s === 1
        ? [
            ...[0, 1, 2, 3, 4, 5].map((i) => [
              surface(
                id,
                `M${36 + i * 8} ${134 - (i % 2) * 4}l21-${33 + (i % 3) * 5} 5 3-17 31Z`,
                "copper",
                0.75,
              ),
              stroke(`M${41 + i * 7} ${124 - i * 2}l19-36`, "#92905a", 1.4),
              oval(61 + i * 7, 87 - (i % 3) * 5, 2.8, 5, "#9f935a", "#6d724f"),
            ]),
            label(66, 163, "Résidus", forest),
          ]
        : [
            ...[
              [50, 99, "CO₂"],
              [75, 125, "H₂"],
            ].map(([x, y, name], i) =>
              moved(Number(x), Number(y), [
                surface(id, "M-12-17q11-11 24 0v30q-10 10-24 0Z", i ? "glass" : "iron", 1),
                stroke("M-5-20h10v-6h-10m-3 23h16", "#a9b5a3", 1.45),
                label(0, 5, String(name), i ? cold : "#fff4d8"),
              ]),
            ),
            label(64, 163, "Réactifs", cold),
          ]),
    stream(98, 117, 127, 117),
    stream(219, 117, 253, 117),
    surface(id, "M286 80q10 20 24 38 10 22-10 32-19 8-33-10-10-14 4-33Z", "copper", 1.4),
    stroke("M282 105q-18 26-3 32", "#e6bf82", 2),
    pin(292, 128, heat),
    label(286, 174, "Carburant", heat),
  ],
);

export const energyPlates = { hydrogenair, electricair, zeroe, saf };
