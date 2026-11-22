import {
  arrow,
  at,
  axis,
  blue,
  brass,
  building,
  car,
  chalk,
  circle,
  display,
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
  slate,
  teal,
  water,
  words,
} from "./parts";
import type { SceneSet } from "../Atlas65Parts";

const driveMotor = (x: number, y: number, id: string) =>
  at(x, y, [
    face(id, "M-23-23h47v46h-47Z"),
    circle(0, 0, 15, water, blue),
    circle(0, 0, 5, ink, blue),
    line("M-12 0h24m-12-12v24", blue, 1.8),
  ]);
const battery = (x: number, y: number, id: string) =>
  at(x, y, [
    face(id, "M-33-19h66v38h-66Z"),
    rect(33, -7, 7, 14, iron, ink, 1),
    line("M-21-1h12m-6-6v12m24-6h13", chalk, 2),
  ]);
const chip = (x: number, y: number, id: string, scale = 1) =>
  at(
    x,
    y,
    [
      face(id, "M-26-19h52v38h-52Z"),
      rect(-15, -10, 30, 20, water, ink, 2),
      ...[-18, -9, 0, 9, 18].map((n) => line(`M${n} -22v-6m0 50v6`, ochre, 1.9)),
    ],
    scale,
  );

const innovation = frame(
  ["La ceinture retient le corps", "L’ABS module le freinage", "Le coussin complète la ceinture"],
  (s, id) => [
    s === 1
      ? [
          circle(135, 111, 51, iron, ink),
          circle(135, 111, 32, mist, blue),
          circle(135, 111, 8, ink, ink),
          ...[0, 60, 120, 180, 240, 300].map((a) =>
            at(
              135,
              111,
              <line transform={`rotate(${a})`} y1="-26" y2="-12" stroke={blue} strokeWidth="2" />,
            ),
          ),
          rect(166, 88, 25, 48, brass, ochre),
          line("M194 108h76", rust, 2.1, "3 3"),
          words(263, 149, "Pression modulée"),
        ]
      : [
          line("M46 157h252l7-21m-29 13 6-84h-49", iron, 2.4),
          face(id, "M235 109h56l-4 44h-33l-4-25h-15Z"),
          line("M244 114l-20-10m-3-18 10 34", ink, 2.8),
          face(id, "M61 75h26l28 61h71v18H92Z"),
          circle(124, 76, 11, "#d4b28e", "#93745e"),
          path("M110 100q0-12 13-12 13 0 15 13l6 19 29 1 11 30h-12l-15-18-32 1Z", moss, teal, 2),
          line("M132 100l21 8 61-1", teal, 2.5),
          s === 0
            ? [
                line("M94 84l50 39m0 0-22 10", rust, 4.5),
                note(170, 61, "Ceinture", "M165 69l-44 36"),
              ]
            : [
                path("M223 105q-11 20-30 20-23 0-29-24-4-26 20-37 29-10 42 17Z", water, blue, 2),
                line("M176 89q14-18 32-11m-91 23 27 22-22 10", rust, 2.6),
                note(271, 79, "Coussin", "M258 87h-37"),
              ],
        ],
  ],
);

const materials = frame(
  [
    "Le minerai est un point de départ",
    "Le raffinage change la matière",
    "Les composants ont leurs exigences",
  ],
  (s, id) => [
    face(id, "M40 143l47-65 77 19 29 46-37 25H40Z", "brass"),
    ...[
      [63, 140],
      [94, 109],
      [110, 142],
      [147, 127],
    ].map(([x, y]) => circle(x!, y!, 7, iron, ink)),
    s === 0 && words(261, 124, "Minerai"),
    s === 1 && [
      arrow(192, 121, 227, 121),
      face(id, "M236 96h75v60h-75Z"),
      words(272, 180, "Matière raffinée"),
    ],
    s === 2 && [
      arrow(194, 130, 220, 130),
      chip(268, 102, id, 0.85),
      line("M242 154h65", ochre, 4),
      words(265, 180, "Composants"),
    ],
  ],
);

const factory = frame(
  [
    "Les pièces viennent de plusieurs sites",
    "L’assemblage rassemble les flux",
    "Les voitures repartent vers des marchés",
  ],
  (s) => [
    rect(36, 55, 288, 116, water, blue),
    path("M37 55h287v91l-49 14-50-25-57 17-44-44-87 37Z", moss, teal),
    building(68, 122, 28, 21, brass),
    building(145, 96, 23, 21, iron),
    building(207, 133, 41, 38, iron),
    s > 0 && [arrow(101, 114, 200, 120, blue, true), arrow(169, 89, 202, 110, blue, true)],
    s === 2 && [car(261, 154, 0.35, brass), arrow(250, 122, 287, 134, ochre, true)],
    words(182, 185, pick(s, ["Sites composants", "Site d’assemblage", "Distribution"])),
  ],
);

const supply = frame(
  [
    "Une puce entre dans un module",
    "Le module commande une fonction",
    "Une absence peut bloquer l’ensemble",
  ],
  (s, id) => [
    chip(69, 113, id, 0.87),
    rect(130, 81, 91, 67, mist, iron, 7),
    ...Array.from({ length: 3 }, (_, i) => line(`M144 ${94 + i * 16}h58`, teal, 1.3)),
    s !== 2 && [chip(173, 112, id, 0.65), arrow(101, 112, 127, 112, blue)],
    s > 0 && car(253, 146, 0.49, iron),
    s === 1 && arrow(224, 112, 249, 112, ochre),
    s === 2 && [line("M162 101l20 21m0-21-20 21", rust, 3), line("M224 112h25", rust, 2, "4 4")],
    words(176, 178, "Module électronique"),
  ],
);

const recalls = frame(
  [
    "Le défaut concerne une série possible",
    "La référence repère les véhicules",
    "Le suivi vérifie l’intervention",
  ],
  (s) => [
    ...[46, 151, 257].map((x, i) => car(x, 140, 0.42, s === 0 ? iron : i === 1 ? brass : slate)),
    ...[86, 188, 295].map((x, i) => [
      rect(x - 25, 151, 50, 24, s === 2 && i === 1 ? moss : mist, iron),
      words(x, 169, ["A01", "B02", "C03"][i]),
    ]),
    s === 0 && [line("M80 77h211", blue, 1.8, "5 4"), words(185, 65, "Lot à vérifier")],
    s === 1 && [arrow(184, 62, 184, 105, ochre), words(247, 78, "Référence")],
    s === 2 && [line("M173 82l9 9 16-21", teal, 3.8), words(241, 81, "Corrigé")],
  ],
);

const electric = frame(
  [
    "La batterie stocke l’énergie",
    "L’électronique commande le moteur",
    "Le freinage peut renvoyer de l’énergie",
  ],
  (s, id) => [
    battery(81, 107, id),
    rect(142, 85, 69, 44, mist, iron),
    driveMotor(271, 107, id),
    line("M153 106q8-11 16 0t16 0 16 0", blue, 2.3),
    s === 0 && [mark(78, 75, ochre), words(84, 163, "Batterie")],
    s === 1 && [
      arrow(120, 105, 139, 105, ochre),
      arrow(215, 105, 245, 105, teal),
      words(174, 163, "Onduleur"),
    ],
    s === 2 && [
      arrow(247, 105, 216, 105, teal),
      arrow(141, 105, 121, 105, ochre),
      words(260, 163, "Génératrice"),
    ],
  ],
);

const valves = frame(
  [
    "Une ouverture a un début et une fin",
    "Un déphasage déplace l’ouverture",
    "Le turbo agit sur l’air admis",
  ],
  (s, id) => [
    s < 2
      ? [
          axis(50, 67, 255, 86),
          line("M54 149h39q39-8 71-66 37 62 70 66h68", iron, 2, "5 4"),
          line(
            s === 0
              ? "M54 149h39q39-8 71-66 37 62 70 66h68"
              : "M54 149h71q45-8 67-66 32 62 61 66h49",
            s === 0 ? blue : ochre,
            3,
          ),
          words(177, 181, "Angle du moteur"),
        ]
      : [
          driveMotor(153, 108, id),
          path("M178 108h76l30 20v33h-34v-25l-26-12h-47Z", water, blue),
          ...[93, 121].map((y) => arrow(62, y, 124, 111, blue)),
          arrow(188, 108, 233, 108, teal),
          words(267, 183, "Air comprimé"),
        ],
  ],
);

const pumps = frame(
  [
    "Une pompe met un fluide en circulation",
    "Le trajet dépend du fluide",
    "Chaque circuit remplit une fonction",
  ],
  (s, id) => [
    driveMotor(176, 106, id),
    path(
      pick(s, [
        "M150 91l-41-16H64v60h45l41-15",
        "M200 86h64v70h-64l-16-23",
        "M78 144h32l36-19m61-20h56l23-21",
      ]),
      "none",
      pick(s, [ochre, blue, rust]),
      4,
    ),
    arrow(
      pick(s, [110, 223, 227]),
      pick(s, [126, 86, 105]),
      pick(s, [145, 258, 263]),
      pick(s, [117, 86, 105]),
      pick(s, [ochre, blue, rust]),
    ),
    s === 0 && rect(46, 102, 53, 43, brass, ochre),
    s === 1 && [
      rect(260, 92, 42, 50, water, blue),
      line("M273 97v38m10-38v38m10-38v38", blue, 1.2),
    ],
    s === 2 && [rect(49, 126, 56, 30, brass, ochre), rect(276, 68, 31, 21, iron, ink)],
    words(180, 184, pick(s, ["Huile", "Liquide de refroidissement", "Carburant"])),
  ],
);

const diagnosis = frame(
  [
    "Un code signale une observation",
    "Plusieurs causes peuvent convenir",
    "Une mesure teste une hypothèse",
  ],
  (s) => [
    display(37, 76, "Code défaut"),
    s > 0 && [
      rect(166, 60, 86, 30, mist, blue),
      rect(166, 108, 86, 30, s === 2 ? moss : sand, s === 2 ? teal : ochre),
      words(210, 81, "Capteur"),
      words(210, 129, "Liaison"),
      line("M122 103h18l18-28h8m-27 28 18 20h8", blue, 1.85),
    ],
    s === 2 && [
      arrow(254, 125, 280, 125, teal),
      circle(303, 125, 17, water, blue),
      line("M295 123l6 7 11-13", teal, 2.6),
    ],
    words(181, 176, pick(s, ["Signal observé", "Hypothèses", "Vérification"])),
  ],
);

const recycle = frame(
  [
    "Identifier la batterie en fin d’usage",
    "Séparer ses fractions",
    "Traiter les matières selon la filière",
  ],
  (s, id) => [
    s === 0
      ? [battery(146, 111, id), note(258, 94, "État", "M244 101l-58 8")]
      : [
          face(id, "M49 85h99v57H49Z"),
          line("M70 97h57m-57 11h57m-57 11h57", chalk, 2),
          arrow(152, 115, 187, 115),
          ...Array.from({ length: 7 }, (_, i) =>
            rect(
              194 + ((i * 29) % 82),
              83 + ((i * 31) % 54),
              9 + (i % 3) * 3,
              8 + (i % 2) * 4,
              [iron, brass, moss][i % 3]!,
              ink,
              1,
            ),
          ),
        ],
    s === 2 && [arrow(254, 146, 295, 165, teal), words(147, 179, "Matières récupérables")],
  ],
);

export const automotive100: SceneSet = {
  autoInnovations: innovation,
  carMaterialChain: materials,
  carFactoryNetwork: factory,
  autoChipSupply: supply,
  recallTrace: recalls,
  evPower: electric,
  valveTiming: valves,
  enginePumps: pumps,
  diagnosticChain: diagnosis,
  batteryMaterials: recycle,
};
