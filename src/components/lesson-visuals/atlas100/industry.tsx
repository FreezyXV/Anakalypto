import {
  arrow,
  at,
  axis,
  blue,
  brass,
  chalk,
  circle,
  display,
  ellipse,
  face,
  frame,
  house,
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

const energyChain = frame(
  [
    "Une ressource fournit un flux",
    "Un équipement transforme le flux",
    "Le stockage sépare deux moments",
  ],
  (s, id) => [
    circle(70, 87, 19, sand, ochre),
    line("M70 62v-9m-29 34h-8m59 0h8m-8-18 7-5", ochre, 2),
    face(id, "M103 112l40-30 66 31-37 33Z", "glass"),
    line("M118 101l66 30m-48-42 65 29m-65 6 39-30", blue, 1.3),
    s > 0 && [
      arrow(207, 122, 245, 122, teal),
      face(id, "M253 101h54v51h-54Z"),
      line("M270 118l17-12-5 14 12 1-15 17", ochre, 2.1),
    ],
    s === 2 && [
      rect(252, 75, 56, 13, sand, ochre, 3),
      arrow(279, 98, 279, 89, ochre),
      words(220, 179, "Usage plus tard"),
    ],
    s < 2 && words(176, 178, s === 0 ? "Rayonnement" : "Électricité"),
  ],
);

const renewable = frame(
  [
    "Le solaire suit l’éclairement",
    "Le vent fluctue autrement",
    "L’hydraulique dépend des apports",
  ],
  (s) => [
    axis(50, 65, 257, 100),
    path(
      pick(s, [
        "M54 162h37q34-104 70-76t71 76h72Z",
        "M54 142l30-38 28 24 21-42 29 26 24-16 30 55 31-29 29 31 27-16v25H54Z",
        "M54 139h45v-14h44v8h41v-15h49v8h71v36H54Z",
      ]),
      pick(s, [sand, water, moss]),
      pick(s, [ochre, blue, teal]),
      2.15,
    ),
    words(102, 58, "Production"),
    words(254, 182, "Temps"),
  ],
);

const lfp = frame(
  [
    "La cathode distingue la chimie",
    "Le matériau change les propriétés",
    "Le choix dépend du service attendu",
  ],
  (s, id) => [
    face(id, "M43 69h177v101H43Z"),
    ...Array.from({ length: 5 }, (_, i) =>
      rect(
        64 + i * 28,
        87,
        17,
        64,
        i % 2 ? water : i === 2 && s > 0 ? moss : brass,
        i % 2 ? blue : ochre,
        2,
      ),
    ),
    s === 0 && note(274, 94, "Cathode", "M246 100l-105 19"),
    s === 1 && [circle(265, 115, 22, moss, teal), words(265, 122, "LFP")],
    s === 2 && [
      circle(265, 88, 18, moss, teal),
      circle(287, 140, 18, iron, ink),
      line("M268 111l14 9", ochre, 2.3),
      words(185, 190, "Deux profils de cellule"),
    ],
  ],
);

const robot = frame(
  [
    "Les axes organisent le mouvement",
    "L’outil suit sa trajectoire",
    "Une autre tâche change l’outil",
  ],
  (s, id) => [
    face(id, "M52 157h90v16H52Z"),
    line(
      s === 0
        ? "M98 157l21-56 57-31 31 25"
        : s === 1
          ? "M98 157l25-48 61-16 41 36"
          : "M98 157l27-68 69 14 42 13",
      iron,
      15,
    ),
    ...pick(s, [
      [
        [98, 150],
        [119, 101],
        [176, 70],
        [207, 95],
      ],
      [
        [98, 150],
        [123, 109],
        [184, 93],
        [225, 129],
      ],
      [
        [98, 150],
        [125, 89],
        [194, 103],
        [236, 116],
      ],
    ]).map(([x, y]) => circle(x!, y!, 10, brass, ochre)),
    s === 1 && [face(id, "M214 137h86v24h-86Z", "glass"), arrow(228, 118, 266, 141, teal, true)],
    s === 2 && [
      path("M244 114l22-8v22l-22-9Z", ink, ink),
      rect(267, 99, 29, 39, sand, ochre, 2),
      words(279, 178, "Préhenseur"),
    ],
    s === 0 && note(271, 72, "Articulation", "M233 77l-54-4"),
  ],
);

const fab = frame(
  [
    "Un projet part d’une forme à vérifier",
    "L’atelier réalise un prototype",
    "L’essai indique ce qu’il faut reprendre",
  ],
  (s, id) => [
    display(37, 76, "Dessin"),
    s > 0 && [
      arrow(124, 112, 159, 112, blue),
      face(id, "M162 78h62v31h-62Z"),
      line("M193 108v17", ochre, 3),
      face(id, s === 1 ? "M156 147h76l-14-19h-47Z" : "M156 147h76l-19-24h-34Z", "brass"),
    ],
    s === 2 && [
      arrow(238, 127, 263, 127, teal),
      circle(285, 127, 20, mist, blue),
      line("M276 130l8 6 11-16", teal, 2.6),
    ],
    s === 0 && [
      path("M190 115l38-39 64 18-34 51Z", water, blue),
      line("M190 115l68 30m-30-69 30 69", blue, 1.3, "3 3"),
    ],
    words(185, 184, pick(s, ["Modèle numérique", "Pièce d’essai", "Itération"])),
  ],
);

const stash = frame(
  [
    "Des repères pour organiser le stock",
    "La rotation détermine ce qui sort",
    "Une date peut modifier la priorité",
  ],
  (s, id) => [
    face(id, "M40 60h280v108H40Z"),
    line("M45 113h267m-181-51v103m106-103v103", chalk, 2.7),
    ...[57, 152, 252].map((x, i) => [
      rect(x, 77, 52, 29, s === 0 ? sand : i === pick(s, [0, 0, 2]) ? moss : sand, ochre, 2),
      words(
        x + 26,
        98,
        pick(s, [
          ["A", "B", "C"],
          ["1", "2", "3"],
          ["J 8", "J 9", "J 4"],
        ])[i],
      ),
    ]),
    s > 0 && arrow(pick(s, [83, 83, 278]), 113, pick(s, [83, 83, 278]), 153, teal),
    words(179, 187, pick(s, ["Adresses de stockage", "Entré d’abord", "Échéance la plus proche"])),
  ],
);

const norm = frame(
  [
    "Le même objet doit s’accorder ailleurs",
    "Une spécification fixe des repères",
    "Les fabricants vérifient la compatibilité",
  ],
  (s, id) => [
    face(id, "M48 91h111v54H48Z"),
    face(
      id,
      s === 0 ? "M203 78h107v75H203Z" : s === 1 ? "M223 92h86v53h-86Z" : "M183 92h126v53H183Z",
      "brass",
    ),
    ...[104, 117, 131].map((y) => line(`M130 ${y}h45`, blue, 2.4)),
    ...[104, 117, 131].map((y) =>
      line(`M${s === 2 ? 181 : 203} ${y - (s === 0 ? 8 : 0)}h33`, ochre, 2.4),
    ),
    s === 1 && [line("M184 90v54m-8-53h17m-17 52h17", teal, 1.3), words(242, 71, "Cotes communes")],
    s === 2 && [arrow(155, 164, 203, 164, teal), words(181, 189, "Contrôle d’ajustement")],
  ],
);

const magnets = frame(
  [
    "Un aimant est intégré à une pièce",
    "Il faut séparer sa matière",
    "Le matériau repart vers une filière",
  ],
  (s, id) => [
    s === 0
      ? [
          circle(125, 115, 50, iron, ink),
          circle(125, 115, 26, mist, blue),
          ...[0, 90, 180, 270].map((a) =>
            at(
              125,
              115,
              <rect
                x="-7"
                y="-49"
                width="14"
                height="15"
                rx="1"
                transform={`rotate(${a})`}
                fill={brass}
                stroke={ochre}
              />,
            ),
          ),
          note(267, 99, "Aimants", "M241 105l-72 8"),
        ]
      : [
          face(id, "M57 89h77v57H57Z", "brass"),
          arrow(144, 120, 182, 120, ochre),
          ...Array.from({ length: 8 }, (_, i) =>
            rect(
              185 + ((i * 29) % 72),
              82 + ((i * 13) % 57),
              10,
              8,
              i % 2 ? brass : iron,
              ochre,
              1,
            ),
          ),
        ],
    s === 2 && [
      arrow(244, 145, 282, 149, teal),
      rect(289, 125, 24, 38, moss, teal, 3),
      words(188, 183, "Remise en matière"),
    ],
  ],
);

const redList = frame(
  [
    "L’évaluation part de données",
    "Le risque s’exprime par catégorie",
    "Un manque de données reste possible",
  ],
  (s) => [
    s === 0
      ? [
          axis(50, 64, 256, 99),
          line("M68 92l47 4 46 12 47 12 54 28", teal, 3),
          words(184, 183, "Tendance fictive"),
        ]
      : [
          ...["LC", "NT", "VU", "EN", "CR"].map((x, i) => [
            rect(41 + i * 56, 94, 49, 43, [moss, water, sand, brass, "#b97966"][i]!, ink, 3),
            words(65 + i * 56, 122, x),
          ]),
          s === 1 && [mark(177, 88, rust, 5), words(181, 174, "Catégorie illustrée")],
          s === 2 && [
            rect(249, 149, 61, 24, mist, iron),
            words(279, 168, "DD"),
            words(131, 168, "Données insuffisantes"),
          ],
        ],
  ],
);

const adaptation = frame(
  [
    "La crue rencontre les usages existants",
    "L’aménagement donne une place à l’eau",
    "Le risque résiduel doit être suivi",
  ],
  (s, id) => [
    face(id, "M39 92h281v85H39Z", "brass"),
    path(
      s === 0 ? "M41 145q75-43 113-7t160-9v38H41Z" : "M41 138q82-20 118 16t155-28v38H41Z",
      water,
      blue,
    ),
    house(66, 126, slate, 0.75),
    house(262, 123, iron, 0.75),
    s === 1 && [ellipse(170, 153, 42, 12, moss, teal), words(179, 101, "Zone d’expansion")],
    s === 2 && [
      ellipse(170, 153, 42, 12, moss, teal),
      line("M43 117h274", rust, 2, "5 4"),
      words(179, 83, "Crue plus forte"),
    ],
    s === 0 && [line("M45 135h271", blue, 1.5, "4 4"), words(177, 82, "Crue illustrée")],
  ],
);

export const industry100: SceneSet = {
  energyServices: energyChain,
  renewableProfiles: renewable,
  lfpCell: lfp,
  factoryArm: robot,
  fabPrototype: fab,
  warehouseFlow: stash,
  sharedStandard: norm,
  magnetLoop: magnets,
  extinctionRisk: redList,
  floodAdaptation: adaptation,
};
