import {
  arrow,
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

const euv = frame(
  [
    "La lumière EUV suit des réflexions",
    "Le masque porte le motif",
    "Le motif est projeté sur le disque",
  ],
  (s, id) => [
    rect(38, 51, 288, 125, mist, iron, 9),
    path("M59 145q46 37 74-8M138 78q34-30 65-10M207 131q25 22 52 5", "none", ink, 5.5),
    circle(65, 118, 9, brass, rust),
    line("M68 118l32 32 73-81 60 72", ochre, 2.4),
    s > 0 && [
      face(id, "M146 68l51-10 4 10-53 11Z", "brass"),
      line("M167 67l3 5m5-7 3 6m5-7 3 6", ink, 2.2),
      note(264, 65, "Masque", "M243 72l-45-5"),
    ],
    s === 2 && [
      ellipse(288, 159, 29, 8, water, blue),
      arrow(236, 141, 278, 155, teal),
      rect(286, 154, 10, 5, brass, ochre, 0),
    ],
    words(181, 189, pick(s, ["Miroirs", "Motif réfléchissant", "Traitement de la résine"])),
  ],
);

const quantum = frame(
  [
    "Le circuit possède des états d’énergie",
    "Une impulsion modifie l’état",
    "La lecture produit un signal mesurable",
  ],
  (s, id) => [
    face(id, "M45 144V84l43-24h111v77l-26 24H75Z"),
    line("M58 97h37v39h40v-36h51m-85-21h52v15h-52Z", blue, 3),
    rect(104, 104, 23, 16, brass, ochre, 2),
    s === 0 && [
      line("M238 139h74m-74-44h74", blue, 2.4),
      mark(274, 139),
      words(275, 164, "Deux niveaux"),
    ],
    s === 1 && [
      line("M219 110q9-22 19 0t21 0 21 0 30 0", ochre, 2.2),
      arrow(211, 113, 188, 113, ochre),
      words(255, 176, "Commande"),
    ],
    s === 2 && [
      arrow(201, 112, 226, 112, teal),
      rect(230, 77, 82, 73, mist, blue),
      line("M240 132l15-18 17 2 19-25", teal, 2.4),
      words(269, 173, "Lecture"),
    ],
  ],
);

const matrix = frame(
  [
    "Les opérandes entrent dans la grille",
    "Des unités calculent en parallèle",
    "Les contributions s’accumulent",
  ],
  (s) => [
    ...Array.from({ length: 16 }, (_, i) =>
      rect(
        128 + (i % 4) * 27,
        65 + Math.floor(i / 4) * 24,
        23,
        20,
        s === 0
          ? i % 4 === 0
            ? water
            : mist
          : s === 1
            ? ((i % 4) + Math.floor(i / 4)) % 3 === 0
              ? brass
              : water
            : moss,
        s === 2 ? teal : blue,
        2,
      ),
    ),
    ...Array.from({ length: 4 }, (_, i) =>
      arrow(71, 75 + i * 24, 123, 75 + i * 24, blue, i > 0 && s === 0),
    ),
    s > 0 && arrow(239, 110, 282, 110, ochre),
    s === 2 && rect(284, 93, 35, 34, sand, ochre),
    words(
      181,
      185,
      pick(s, ["Données et coefficients", "Multiplications et additions", "Résultat accumulé"]),
    ),
  ],
);

const risc = frame(
  [
    "Le programme exprime des instructions",
    "Le jeu d’instructions fixe leur sens",
    "Plusieurs circuits peuvent les exécuter",
  ],
  (s, id) => [
    display(37, 84, "Programme"),
    rect(156, 73, 137, 46, s === 1 ? sand : mist, s === 1 ? ochre : blue, 6),
    words(224, 103, s === 0 ? "Instructions" : "Spécification"),
    arrow(124, 113, 153, 100, blue),
    s === 2 && [
      face(id, "M173 137h45v40h-45Z"),
      face(id, "M237 136h60v41h-60Z", "brass"),
      arrow(195, 120, 195, 134, teal),
      arrow(267, 120, 267, 134, teal),
      words(238, 191, "Deux implémentations"),
    ],
  ],
);

const moore = frame(
  ["Le nombre augmente par paliers", "Doubler accélère la hausse", "Le rythme réel peut s’écarter"],
  (s) => [
    axis(50, 63, 255, 100),
    ...pick(s, [
      [1, 2, 4],
      [1, 2, 4, 8],
      [1, 2, 4, 6],
    ]).map((v, i) => [
      rect(
        75 + i * 54,
        163 - v * 11,
        35,
        v * 11,
        i === 3 && s === 2 ? brass : water,
        i === 3 && s === 2 ? ochre : blue,
        2,
      ),
      words(91 + i * 54, 185, "T" + i),
    ]),
    s === 2 && line("M224 75h62", rust, 2, "4 4"),
    words(130, 58, "Nombre relatif"),
  ],
);

const lan = frame(
  [
    "Un lien local relie deux appareils",
    "Un point central distribue les échanges",
    "Internet demande une liaison externe",
  ],
  (s) => [
    display(39, 77, "Poste A"),
    display(238, 77, "Poste B"),
    s === 0 && line("M126 107h110", blue, 3),
    s > 0 && [
      rect(152, 91, 57, 38, sand, ochre),
      line("M124 108h28m57 0h29", blue, 2.5),
      words(181, 154, "Réseau local"),
    ],
    s === 2 && [
      line("M181 129v42h93", teal, 2.2, "5 4"),
      mark(275, 171, teal),
      words(89, 182, "Accès externe"),
    ],
  ],
);

const satellite = frame(
  [
    "Le terminal vise le relais en orbite",
    "Une station relie le réseau terrestre",
    "Le trajet comporte plusieurs liaisons",
  ],
  (s, id) => [
    path("M32 153q150-54 296 0v30H32Z", moss, teal),
    house(48, 154, slate, 0.75),
    face(id, "M162 78h36v22h-36Z"),
    rect(137, 82, 22, 12, water, blue),
    rect(201, 82, 22, 12, water, blue),
    line("M90 128l76-32", blue, 2.4),
    s > 0 && [
      arrow(197, 96, 267, 123, teal),
      path("M258 105q32 2 39 25-35-5-39-25Z", brass, ochre),
      line("M277 125v30", ink, 2.1),
    ],
    s === 2 && [line("M279 150h36m-20 1v18", blue, 2.5, "5 3"), words(252, 182, "Réseau au sol")],
    words(180, 63, "Satellite"),
  ],
);

const induction = frame(
  [
    "Un courant crée un champ",
    "Un champ qui change peut induire",
    "Sans variation, cet effet cesse",
  ],
  (s, id) => [
    face(id, "M80 107h126v28H80Z"),
    ...Array.from({ length: 8 }, (_, i) =>
      line(`M${95 + i * 15} 101q-15 19 0 39`, s === 0 ? blue : ochre, 2),
    ),
    s === 0 && [
      path("M82 116q0-61 111-58 66 8 34 39-48 38-141 16Z", "none", teal, 2),
      arrow(218, 85, 195, 70, teal),
    ],
    s > 0 && [
      rect(250, 109, 66, 34, rust, ink, 3),
      rect(283, 109, 33, 34, water, blue, 3),
      words(266, 133, "N"),
      words(300, 133, "S"),
    ],
    s === 1 && arrow(244, 126, 207, 126, ochre),
    s === 2 && [circle(230, 83, 12, mist, iron), line("M224 79l12 9m-12 0 12-9", rust, 2.3)],
    words(171, 183, pick(s, ["Courant dans la bobine", "Aimant en mouvement", "Aimant immobile"])),
  ],
);

const wave = frame(
  [
    "Un impact apparaît en un point",
    "Plusieurs impacts forment un motif",
    "Deux fentes changent la répartition",
  ],
  (s) => [
    rect(40, 71, 280, 98, "#e8eef0", iron, 7),
    rect(51, 108, 24, 21, sand, ochre, 3),
    circle(74, 119, 4, brass, ochre),
    line("M84 119h44", blue, 2.3, "4 4"),
    line("M148 78v23m0 11v12m0 11v27", ink, 5.3),
    rect(211, 78, 101, 84, chalk, blue, 3),
    ...Array.from({ length: pick(s, [1, 16, 32]) }, (_, i) =>
      mark(
        s === 0 ? 260 : 223 + ((i * 17) % 79),
        s === 0 ? 119 : 91 + (i % 4) * 17 + ((i * 11) % 7),
        blue,
        2.6,
      ),
    ),
    words(86, 188, "Deux fentes"),
    words(263, 188, s === 2 ? "Franges" : "Écran"),
  ],
);

const thermo = frame(
  [
    "L’énergie du système se comptabilise",
    "La chaleur peut aller vers le plus froid",
    "Le sens inverse exige une intervention",
  ],
  (s, id) => [
    face(id, "M46 86h70v60H46Z", "brass"),
    face(id, "M245 86h70v60h-70Z", "glass"),
    words(80, 122, "Chaud"),
    words(279, 122, "Froid"),
    s === 0 && [
      face(id, "M146 101h67v41h-67Z"),
      arrow(119, 122, 143, 122, ochre),
      arrow(217, 122, 242, 122, blue),
      arrow(178, 100, 178, 70, teal),
      words(202, 68, "Travail"),
    ],
    s === 1 && [arrow(121, 118, 237, 118, ochre), words(181, 165, "Transfert spontané")],
    s === 2 && [
      rect(149, 99, 63, 38, mist, blue),
      arrow(238, 123, 218, 123, teal),
      arrow(144, 123, 122, 123, teal),
      arrow(181, 70, 181, 96, ochre),
      words(180, 168, "Apport de travail"),
    ],
  ],
);

export const science100: SceneSet = {
  euvMirrors: euv,
  superconductingQubit: quantum,
  matrixProcessor: matrix,
  riscInterface: risc,
  mooreGrowth: moore,
  localNetwork: lan,
  satelliteBackhaul: satellite,
  electricMagnetic: induction,
  particleWave: wave,
  thermoLaws: thermo,
};
