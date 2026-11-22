import {
  arrow,
  at,
  axis,
  blue,
  brass,
  chalk,
  circle,
  ellipse,
  face,
  frame,
  ink,
  iron,
  line,
  mark,
  mist,
  moss,
  note,
  ochre,
  path,
  pick,
  rect,
  rust,
  sand,
  teal,
  water,
  words,
} from "./parts";
import type { SceneSet } from "../Atlas65Parts";

const molecule = (x: number, y: number, n: number, tone: string, cycle = false) =>
  at(x, y, [
    line(
      cycle
        ? "M0 25l23-30 34 8 15 31-23 27-34-7Z"
        : `M0 25${Array.from({ length: n - 1 }, (_, i) => (i % 2 ? "l22 10" : "l22-10")).join("")}`,
      ink,
      2.4,
    ),
    ...Array.from({ length: n }, (_, i) =>
      cycle
        ? circle([0, 23, 57, 72, 49, 15][i]!, [25, -5, 3, 34, 61, 54][i]!, 7, tone, ink)
        : circle(i * 22, i % 2 ? 15 : 25, 7, tone, ink),
    ),
  ]);

const macro = frame(
  [
    "Les glucides ont plusieurs formes",
    "Les lipides stockent de l’énergie",
    "Les protéines sont des chaînes",
  ],
  (s) => [
    s === 0
      ? [
          molecule(60, 79, 6, water, true),
          arrow(160, 115, 208, 115, blue),
          molecule(225, 85, 4, iron),
        ]
      : s === 1
        ? [
            circle(92, 111, 20, brass, ochre),
            ...Array.from({ length: 3 }, (_, i) => [
              line(`M110 112l24 ${-31 + i * 30}`, ochre),
              molecule(136, 65 + i * 30, 7, brass),
            ]),
          ]
        : [molecule(70, 81, 10, moss), line("M73 122q106 70 217 0", teal, 3, "5 4")],
    words(
      180,
      184,
      pick(s, ["Motifs glucidiques", "Chaînes d’acides gras", "Suite d’acides aminés"]),
    ),
  ],
);

const fats = frame(
  [
    "Le premier compte depuis l’extrémité",
    "Comparer les familles n‑3 et n‑6",
    "Les deux sont apportés par l’aliment",
  ],
  (s) => [
    ...[0, 1].slice(0, s === 0 ? 1 : 2).map((i) => {
      const y = 95 + i * 54;
      const bond = i === 0 ? 2 : 5;
      return [
        line(
          `M72 ${y}${Array.from({ length: 12 }, (_, k) => (k % 2 ? "l16 9" : "l16-9")).join("")}`,
          i === 0 ? blue : teal,
          2.5,
        ),
        ...Array.from({ length: 13 }, (_, k) =>
          circle(
            72 + k * 16,
            y - (k % 2 ? 9 : 0),
            3.7,
            k === bond ? brass : mist,
            k === bond ? ochre : blue,
          ),
        ),
        line(`M${72 + bond * 16} ${y - (bond % 2 ? 9 : 0) + 4}l16 ${bond % 2 ? 9 : -9}`, rust, 2.3),
        words(292, y + 4, i === 0 ? "n-3" : "n-6"),
      ];
    }),
    s === 0 && note(102, 151, "Extrémité", "M92 138l-20-40"),
    s === 2 && [
      ellipse(126, 176, 19, 7, brass, ochre),
      ellipse(228, 176, 27, 8, moss, teal),
      line("M126 168v-15m102 15v-15", ochre, 1.7),
    ],
  ],
);

const eye = frame(
  [
    "Un pigment alimente la conversion",
    "La rétine utilise un dérivé",
    "L’adaptation a ses limites",
  ],
  (s, id) => [
    s === 0
      ? [
          face(id, "M68 100q42-42 101-26-27 53-92 78l-22 8Z", "brass"),
          path("M153 78q10-23 26-31-2 17-17 33q18-17 32-13-7 12-29 17Z", moss, teal),
          line("M76 128l12 5m11-22 13 3m9-22 13 4", ochre, 2),
          arrow(175, 122, 244, 122, ochre),
          circle(271, 122, 21, brass, ochre),
          words(273, 163, "Bêta-carotène"),
        ]
      : [
          path("M53 120q64-72 151-50 48 10 92 50-83 82-176 48Z", mist, ink, 2.2),
          ellipse(106, 122, 33, 49, water, blue),
          ellipse(106, 122, 15, 37, iron, ink),
          line("M265 99q42 20 1 43", rust, 5),
          s === 1 && [arrow(143, 123, 246, 123, ochre), note(254, 73, "Rétine", "M249 81l25 19")],
          s === 2 && [
            line("M28 119h51", blue, 2.8, "4 4"),
            ...Array.from({ length: 5 }, (_, i) =>
              mark(251 + i * 7, 113 + i * 4, i % 2 ? teal : ochre),
            ),
            words(207, 185, "Faible lumière"),
          ],
        ],
  ],
);

const cold = frame(
  [
    "La température se suit sur le trajet",
    "Une rupture laisse une trace",
    "La rupture a déjà eu lieu",
  ],
  (s) => [
    axis(49, 62, 264, 103),
    line(
      s === 0 ? "M55 139l46-4 60 5 66-4 78 3" : "M55 139l46-4 20 3 19-53 34-7 32 59 99 2",
      s === 0 ? teal : blue,
      2.8,
    ),
    s > 0 && [
      path("M121 138l19-53 34-7 32 59Z", "#dec297", ochre, 1.1),
      note(174, 65, "Rupture", "M181 70l-7 11", rust),
    ],
    s === 2 && [arrow(245, 117, 299, 117, teal, true), words(260, 104, "De nouveau froid")],
    words(187, 188, "Transport et stockage"),
  ],
);

const jar = (id: string, x = 0) =>
  at(x, 0, [
    face(id, "M66 70h85v15h-85Z"),
    path("M73 86h70l18 13v63q0 11-12 11H65q-12 0-12-11V99Z", water, blue),
    rect(57, 119, 99, 45, sand, ochre),
    line("M62 105v47m89-47v47", chalk, 2.3),
  ]);
const preserve = frame(
  [
    "Un récipient contient l’aliment",
    "Le traitement dépend du contenu",
    "La fermeture protège ensuite",
  ],
  (s, id) => [
    jar(id, s === 0 ? 52 : 0),
    s === 0 && words(261, 120, "Récipient"),
    s === 1 && [
      ...Array.from({ length: 4 }, (_, i) =>
        line(`M${192 + i * 21} 151q22-20 1-37t3-31`, rust, 2.1),
      ),
      words(252, 173, "Traitement validé"),
    ],
    s === 2 && [
      ...Array.from({ length: 5 }, (_, i) =>
        circle(240 + (i % 2) * 34, 93 + i * 16, 3.8, brass, rust),
      ),
      arrow(234, 129, 160, 103, ochre, true),
      line("M173 113l14 16m0-16-14 16", rust, 3),
      words(251, 184, "Barrière étanche"),
    ],
  ],
);

const salting = frame(
  [
    "L’eau est présente sous plusieurs formes",
    "Le sel réduit l’eau disponible",
    "La réaction dépend du microbe",
  ],
  (s, id) => [
    face(id, "M41 96h191v63H41Z", "brass"),
    ...Array.from({ length: 13 }, (_, i) =>
      circle(54 + ((i * 61) % 156), 108 + ((i * 19) % 39), 3.5, water, blue),
    ),
    s === 0 && words(272, 124, "Eau"),
    s > 0 && [
      ...Array.from({ length: 6 }, (_, i) => rect(78 + i * 17, 78, 7, 7, chalk, blue, 0)),
      arrow(140, 113, 139, 84, blue),
      arrow(199, 114, 200, 83, blue),
    ],
    s === 2 && [
      ellipse(268, 104, 13, 7, moss, teal),
      ellipse(289, 125, 9, 6, sand, rust),
      line("M262 145l11 12m0-12-11 12", rust, 2.7),
    ],
    words(180, 182, pick(s, ["Eau dans l’aliment", "Sel en surface", "Effets variables"])),
  ],
);

const seaweed = frame(
  [
    "Les algues vivent dans l’eau",
    "La lumière soutient leur croissance",
    "Les espèces et usages diffèrent",
  ],
  (s) => [
    rect(38, 57, 284, 117, water, blue),
    path("M39 158q75-20 151 0t130 0v15H39Z", sand, ochre),
    ...[100, 176, 252].map((x, i) =>
      path(
        `M${x} 160q-17-35-9-67 16 19 15 39 15-35 33-44-11 44-39 72Z`,
        [moss, "#b99477", "#88aaa4"][i]!,
        teal,
      ),
    ),
    s === 1 && [
      arrow(99, 64, 100, 84, ochre),
      arrow(170, 64, 176, 84, ochre),
      arrow(248, 64, 252, 84, ochre),
    ],
    s === 2 && [
      note(104, 79, "Alimentation", "M114 85l7 19"),
      note(262, 81, "Matières", "M262 87l-7 24"),
    ],
  ],
);

const emulsion = frame(
  [
    "Huile et eau se séparent au repos",
    "Mélanger crée des gouttes",
    "L’émulsifiant aide à les stabiliser",
  ],
  (s) => [
    rect(81, 76, 198, 98, water, blue, 10),
    s === 0
      ? [
          path("M82 88q48-17 98 0t98 0v23H82Z", brass, ochre),
          words(180, 104, "Huile"),
          words(180, 151, "Eau"),
        ]
      : Array.from({ length: s === 1 ? 10 : 17 }, (_, i) =>
          circle(
            101 + ((i * 61) % 155),
            92 + ((i * 47) % 65),
            s === 1 ? 5 + (i % 4) : 4,
            brass,
            s === 1 ? ochre : teal,
          ),
        ),
    s === 2 && note(289, 63, "Gouttes", "M283 70l-37 33"),
  ],
);

const cooking = frame(
  [
    "Eau et nutriments dans le légume",
    "Certains passent dans l’eau de cuisson",
    "La chaleur agit aussi sur des vitamines",
  ],
  (s, id) => [
    face(id, "M54 100h203l-13 68H68Z"),
    path("M65 122q35-10 91 0t92 0l-10 39H72Z", water, blue),
    ...Array.from({ length: 5 }, (_, i) => circle(90 + i * 27, 136, 9, moss, teal)),
    s > 0 && [
      arrow(92, 130, 80, 150, teal),
      arrow(145, 137, 156, 154, teal),
      arrow(198, 137, 216, 155, teal),
    ],
    s === 2 && [
      line("M111 104q8-10 1-23m48 23q8-10 1-23m47 23q8-10 1-23", rust, 2),
      words(245, 77, "Chaleur"),
    ],
    words(291, 155, "Eau"),
  ],
);

const sweet = frame(
  [
    "Le goût sucré est une sensation",
    "La masse nécessaire peut changer",
    "Le sucre agit aussi sur la texture",
  ],
  (s, id) => [
    face(id, "M52 93h255v14H52Z"),
    ...Array.from({ length: s === 0 ? 6 : s === 1 ? 3 : 6 }, (_, i) =>
      rect(69 + (i % 3) * 24, 115 + Math.floor(i / 3) * 18, 19, 16, sand, ochre, 2),
    ),
    s === 0 && words(269, 146, "Sucre"),
    s === 1 && [circle(259, 135, 7, water, blue), words(259, 168, "Édulcorant")],
    s === 2 && [
      path("M219 154q9-56 53-41 27 9 34 41Z", brass, ochre),
      line("M246 127l6-12m12 16 8-11", chalk, 2),
      words(264, 179, "Structure"),
    ],
  ],
);

export const food100: SceneSet = {
  macroNutrients: macro,
  essentialFat: fats,
  carrotVision: eye,
  coldContinuity: cold,
  sealedPreserve: preserve,
  saltWaterActivity: salting,
  seaweedLayers: seaweed,
  emulsionAdditive: emulsion,
  cookingRetention: cooking,
  sweetnessDose: sweet,
};
