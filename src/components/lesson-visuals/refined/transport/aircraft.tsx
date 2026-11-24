import { fillPath, label, layers, moved, oval, stroke } from "../../detail100/plate";
import {
  cold,
  dark,
  fastener,
  forest,
  gold,
  grounding,
  heat,
  link,
  paint,
  rotor,
  stream,
  surface,
  technicalPlate,
} from "./plate";

function propeller(id: string, x: number, y: number, angle = 0) {
  return moved(x, y, [
    <g key="propeller-blades" transform={`rotate(${angle})`}>
      {surface(
        id,
        "M-2-2q-9-24-3-60 2-8 7-5 12 27 4 69Zm4 4q10 27 3 62-2 6-7 5-12-29-4-68Z",
        "steel",
        1,
      )}
      {stroke("M-3-6q1-29 1-52m5 62Q3 39 1 60", "#e1e3cc", 0.94)}
    </g>,
    oval(0, 0, 9, 7.8, paint(id, "copper"), dark),
    ...fastener(0, 0, 2.1),
  ]);
}

const nacelle = "M49 73q33-27 79-19l167 12 26 19v55l-21 17-179 13q-44 4-72-19Z";
function rings(
  id: string,
  x: number,
  middle: number,
  n: number,
  spacing: number,
  tone: "steel" | "copper",
  maxHeight: number,
) {
  return Array.from({ length: n }, (_, i) => {
    const xx = x + i * spacing,
      y = middle - maxHeight + i * 1.3;
    const h = (middle - y) * 2;
    return [
      surface(id, `M${xx} ${y}l9 3-3 ${h - 6}-6 3Z`, tone, 0.85),
      stroke(`M${xx + 2.3} ${y + 3}v${h - 6}`, "#d1c6a9", 0.8),
    ];
  });
}
function combustionCase(id: string, x: number, y: number, lit: boolean) {
  return moved(x, y, [
    surface(id, "M-36 0l11-19q23-7 52 0L42 0l-15 19q-27 5-52 0Z", "cream"),
    surface(id, "M-24-11l44-2 8 13-9 10h-43l-7-10Z", lit ? "ember" : "iron", 0.82),
    stroke("M-25-10h48m-48 21h49", "#e9d8ae", 0.85, "4 3"),
    lit && [
      fillPath("M-19 0q12-13 25-8l-3 5q16-10 21 3-14 8-30 6l-12-3Z", "#e8b26a", "#a86b41", 0.8),
      stroke("M-17 1q8-2 18 2l9-2", "#fae1a4", 0.9),
    ],
  ]);
}
function jetSection(id: string, s: number) {
  return [
    grounding(id, 184, 172, 140),
    surface(id, nacelle, "steel", 1.3),
    surface(id, "M55 81q39-27 72-18l169 13 14 12v45l-13 13-176 14q-35 3-65-17Z", "glass"),
    stroke("M101 69q78-5 175 11m-165 72 176-16", "#d8e6d3", 1.12),
    surface(id, "M104 101l67-10h87l38 10 5 22-49 14-148-6Z", "iron"),
    surface(id, "M119 107h167l16 8-19 8H119Z", "steel"),
    ...rings(id, 117, 116, 5, 11, "steel", 20),
    combustionCase(id, 204, 115, s > 0),
    ...rings(id, 246, 116, 3, 11, "copper", 17),
    surface(id, "M76 78l7 3v69l-10 3Z", "steel"),
    stroke("M63 81q-4 35 1 69m18-61q21 19 14 37m-13-7-6 28", "#dee2c7", 1.33),
    ...[55, 95, 147, 197, 245, 291].flatMap((x, i) => fastener(x, 72 + i * 0.5, 1.64)),
    stroke("M311 93v38M303 101v23", "#ede8cc", 1.24),
  ];
}
const jet = technicalPlate(
  ["Entrée et dérivation", "Compresseur, chambre, turbine", "Accélération des deux flux"],
  [
    "Une partie contourne le cœur",
    "Le cœur chauffe et détend les gaz",
    "Les jets partent vers l’arrière",
  ],
  (s, id) => [
    ...jetSection(id, s),
    s === 0 && [
      stream(21, 101, 64, 101),
      stream(97, 82, 151, 82),
      link(94, 57, "Soufflante", "M94 61l-14 20", cold),
    ],
    s === 1 && [
      stream(154, 115, 176, 115, heat),
      link(128, 58, "Compresseur", "M130 63l12 35", cold),
      link(236, 57, "Turbine", "M236 63l20 38", heat),
    ],
    s === 2 && [
      stream(302, 88, 339, 88),
      stream(303, 114, 339, 114, heat),
      stream(295, 140, 335, 140),
      stream(116, 173, 67, 173, forest),
    ],
  ],
);

function cylinderBlock(id: string, x: number, y: number, scale: number, mirror = false) {
  return moved(
    x,
    y,
    [
      <g key="opposed-cylinder" transform={`scale(${mirror ? -1 : 1} 1)`}>
        {surface(id, "M0-29h63l9 12v36l-11 10H0Z", "iron")}
        {layers(
          Array.from({ length: 9 }, (_, i) => [
            stroke(`M${i * 6 + 5} -28v56`, "#bcc3a9", 1.6),
            stroke(`M${i * 6 + 7} -28v56`, "#435952", 1),
          ]),
        )}
        {surface(id, "M49-24h15l8 7v36l-9 5H49Z", "steel")}
        {stroke("M7 17h42m8-25 7 4v13l-6 6", "#879c8f", 1.4)}
        {layers(fastener(61, -13, 2))}
        {layers(fastener(61, 14, 2))}
      </g>,
    ],
    scale,
  );
}

const aeroengine = technicalPlate(
  ["Cylindres opposés", "Du piston au vilebrequin", "L’hélice entraînée"],
  ["Les cylindres bordent le carter", "La bielle transmet l’effort", "L’hélice accélère l’air"],
  (s, id) => [
    grounding(id, 183, 173, 124),
    ...(s === 0
      ? [
          cylinderBlock(id, 126, 104, 0.97, true),
          cylinderBlock(id, 235, 104, 0.97),
          cylinderBlock(id, 112, 134, 0.8, true),
          cylinderBlock(id, 247, 134, 0.8),
          surface(id, "M137 98l34-14h28l33 12 12 49-42 21h-46l-31-24Z", "steel"),
          oval(184, 123, 27, 24, paint(id, "iron"), dark),
          oval(184, 123, 14, 13, paint(id, "copper"), dark),
          ...[
            [155, 107],
            [209, 106],
            [199, 153],
            [165, 153],
          ].flatMap(([x, y]) => fastener(x!, y!, 2.2)),
          link(264, 63, "Cylindre", "M260 69l7 15", gold),
          link(119, 163, "Carter", "M141 160l17-12", cold),
        ]
      : s === 1
        ? [
            surface(id, "M121 64h116l10 10v75h-21V86h-94v63h-23V79Z", "iron"),
            ...[83, 93, 105, 117, 129, 141].map((y) =>
              stroke(`M111 ${y}h21m96 0h18`, "#b8c2a8", 1.3),
            ),
            surface(id, "M133 77h93v45h-93Z", "ember", 0.85),
            surface(id, "M132 118h96v16h-96Z", "steel"),
            stroke("M135 122h90m-89 4h89", "#51685e", 1.35),
            stroke("M180 129l-17 30", dark, 11),
            stroke("M180 129l-17 30", paint(id, "steel"), 7.3),
            oval(174, 157, 24, 18, paint(id, "steel"), dark),
            ...fastener(165, 153, 3),
            stream(183, 94, 183, 113, heat),
            link(77, 102, "Piston", "M85 108l48 16", gold),
            link(265, 154, "Bielle", "M245 148l-70-11", gold),
          ]
        : [
            cylinderBlock(id, 161, 111, 0.96),
            cylinderBlock(id, 191, 113, 1),
            surface(id, "M120 85l32 4 8 19 1 39-41 5-17-21V99Z", "iron"),
            oval(131, 115, 27, 24, paint(id, "steel"), dark),
            surface(id, "M92 109h33v13H92Z", "copper"),
            propeller(id, 89, 115, 12),
            link(278, 70, "Moteur", "M252 79l-31 13", gold),
            stream(108, 150, 149, 150),
            stream(104, 171, 150, 171),
          ]),
  ],
);

const turboprop = technicalPlate(
  ["Du compresseur aux gaz chauds", "Arbre et réducteur", "L’air accéléré par l’hélice"],
  [
    "La combustion fournit de l’énergie",
    "La turbine transmet sa rotation",
    "Le flux de l’hélice va vers l’arrière",
  ],
  (s, id) => [
    grounding(id, 190, 170, 134),
    surface(id, "M63 89l49-22h147l56 24v45l-40 24H114l-49-20Z", "steel"),
    surface(id, "M74 98l42-19h142l44 16v34l-31 18H113l-39-15Z", "cream"),
    surface(id, "M87 106h186v15H87Z", "steel"),
    propeller(id, 70, 114, s === 2 ? -15 : 0),
    surface(id, "M102 91l33 4v35l-32 6-8-22Z", "copper"),
    ...rings(id, 141, 113, 5, 10, "steel", 25),
    combustionCase(id, 219, 114, s === 0),
    ...rings(id, 263, 113, 3, 9, "copper", 24),
    s === 0 && [
      stream(175, 113, 212, 113, heat),
      link(234, 62, "Combustion", "M234 67l-5 22", heat),
    ],
    s === 1 && [
      stroke("M262 115H99", heat, 3.8),
      ...[112, 124].map((x) => [
        oval(x, 114, 9, 8, paint(id, "steel"), dark),
        ...fastener(x, 114, 2),
      ]),
      link(133, 63, "Réducteur", "M134 69l-15 33", gold),
    ],
    s === 2 && [
      stream(26, 73, 125, 73),
      stream(24, 152, 125, 152),
      link(263, 68, "Turbine", "M261 73l11 15", gold),
    ],
  ],
);

function magneto(id: string, x: number, y: number) {
  return moved(x, y, [
    surface(id, "M-41-22l13-10h44l15 13v37L18 31h-41L-42 16Z", "iron"),
    surface(id, "M-35-20l9-6h34v42l-12 9h-22l-9-5Z", "steel"),
    rotor(id, -1, -1, 19, "copper"),
    ...fastener(-28, -20, 2),
    ...fastener(20, 19, 2),
  ]);
}
const magnetos = technicalPlate(
  ["Deux allumages actifs", "La voie A est indisponible", "La voie B est indisponible"],
  [
    "Deux sources alimentent deux bougies",
    "B continue d’alimenter sa bougie",
    "A continue d’alimenter sa bougie",
  ],
  (s, id) => [
    grounding(id, 180, 167, 133),
    surface(id, "M138 76h85l10 13v60l-10 10h-87l-7-12V89Z", "iron"),
    surface(id, "M141 88h77v57h-77Z", "ember"),
    ...[89, 101, 116, 132, 147].map((y) => stroke(`M130 ${y}h8m84 0h9`, "#c4c6a9", 1.55)),
    magneto(id, 71, 123),
    magneto(id, 300, 123),
    stroke("M77 98V72q0-9 10-9h72v24", "#e6dcc0", 4.4),
    stroke("M295 98V72q0-9-10-9h-85v24", "#e6dcc0", 4.4),
    stroke(
      "M77 98V72q0-9 10-9h72v24",
      s === 1 ? "#747f74" : cold,
      2.4,
      s === 1 ? "4 3" : undefined,
    ),
    stroke(
      "M295 98V72q0-9-10-9h-85v24",
      s === 2 ? "#747f74" : heat,
      2.4,
      s === 2 ? "4 3" : undefined,
    ),
    ...[159, 200].map((x) => [
      surface(id, `M${x - 4} 77h8v20h-8Z`, "cream", 0.82),
      stroke(`M${x - 4} 87h8m-8 3h8`, "#a99368", 0.68),
    ]),
    s !== 1 && stroke("M159 98l5 4-8 2 4 5", cold, 2.15),
    s !== 2 && stroke("M200 98l5 4-8 2 4 5", heat, 2.15),
    s === 1 && stroke("M85 58l10 10m0-10-10 10", heat, 2.25),
    s === 2 && stroke("M265 58l10 10m0-10-10 10", cold, 2.25),
    label(70, 170, "Magnéto A", cold),
    label(290, 170, "Magnéto B", heat),
  ],
);

const landingbrakes = technicalPlate(
  ["Freiner les roues", "Déployer les aérofreins", "Détourner le flux"],
  [
    "Les disques dissipent de l’énergie",
    "L’aile porte moins après le toucher",
    "Une partie de l’air est déviée",
  ],
  (s, id) => [
    grounding(id, 183, 166, 135),
    ...(s === 0
      ? [
          oval(172, 113, 60, 54, paint(id, "soot"), dark),
          oval(172, 113, 43, 39, paint(id, "steel"), dark),
          oval(172, 113, 31, 29, paint(id, "copper"), dark),
          oval(172, 113, 18, 15, paint(id, "iron"), dark),
          ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((i) =>
            fastener(172 + Math.cos(i * 0.628) * 35, 113 + Math.sin(i * 0.628) * 31, 1.9),
          ),
          surface(id, "M185 78l22-8 23 14 4 29-19 12-19-9 5-17Z", "ember"),
          link(75, 73, "Roue", "M77 79l41 10", cold),
          link(283, 66, "Frein", "M277 72l-57 14", heat),
        ]
      : s === 1
        ? [
            surface(id, "M48 143l61-35 191-45 30 18-21 32-190 50Z", "steel"),
            surface(id, "M117 119l132-39 38 3-133 41Z", "iron"),
            surface(id, "M129 115l38-39 109-35-23 45Z", "copper"),
            stroke("M133 116l108-32m-74-8 86 10m-103 40 127-38", "#e1d2ae", 1.4),
            stroke("M158 117l18-31m31 15 18-29", dark, 2),
            link(134, 58, "Panneau", "M144 62l35 10", heat),
            stream(43, 82, 99, 82),
            stream(74, 66, 119, 66),
          ]
        : [
            surface(id, "M68 90q26-21 67-22l172 13 17 10v47l-24 17-160 11q-49 1-72-24Z", "steel"),
            surface(id, "M82 95q22-16 51-16l173 18v32l-21 14-150 11q-33 0-54-16Z", "glass"),
            surface(id, "M136 105h130l32 8v12l-31 13H136Z", "iron"),
            ...rings(id, 142, 121, 5, 16, "steel", 17),
            surface(id, "M207 88l30 25 12 22-18-1-38-31Z", "copper"),
            stream(279, 92, 214, 65, heat),
            stream(298, 147, 251, 166, heat),
            link(91, 59, "Inverseur", "M113 63l94 31", heat),
          ]),
  ],
);

export const enginePlates = { jet, aeroengine, turboprop, magnetos, landingbrakes };
