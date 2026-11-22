import {
  arrow,
  axis,
  blue,
  book,
  brass,
  chalk,
  circle,
  face,
  frame,
  ink,
  iron,
  line,
  mark,
  mist,
  moss,
  ochre,
  path,
  person,
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

const options = frame(
  [
    "Les mêmes règles pour chaque option",
    "La place change ce qu’on voit d’abord",
    "L’effet demande une comparaison",
  ],
  (s) => [
    rect(51, 58, 258, 109, mist, iron, 7),
    ...pick(s, [
      [
        ["Eau", 121],
        ["Jus", 77],
      ],
      [
        ["Eau", 77],
        ["Jus", 121],
      ],
      [
        ["Eau", 77],
        ["Jus", 121],
      ],
    ]).map(([t, y], i) => [
      rect(
        72,
        y as number,
        167,
        31,
        s === 1 && i === 0 ? moss : chalk,
        s === 1 && i === 0 ? teal : blue,
      ),
      words(151, (y as number) + 21, t),
    ]),
    s === 0 && line("M255 94v41", blue, 1.8, "3 3"),
    s === 1 && arrow(288, 123, 246, 92, teal),
    s === 2 && [rect(252, 94, 15, 37, iron, ink), rect(279, 81, 15, 50, brass, ochre)],
    words(177, 185, pick(s, ["Même choix", "Première option mise en vue", "Résultat à mesurer"])),
  ],
);

const losses = frame(
  [
    "Chacun juge à partir d’un repère",
    "Un gain se compare au point de départ",
    "Une perte peut peser davantage",
  ],
  (s) => [
    line("M49 113h262m-131-52v114", blue, 1.7),
    mark(180, 113, ink),
    s > 0 && [line("M180 113q52-29 102-34", teal, 3), mark(245, 87, teal), words(268, 71, "Gain")],
    s === 2 && [
      line("M77 172q58-18 103-59", rust, 3),
      mark(114, 158, rust),
      words(85, 139, "Perte"),
    ],
    words(182, 188, "Écart au point de repère"),
  ],
);

const calibration = frame(
  ["Annoncer une estimation", "Comparer avec un résultat", "Réviser le jugement avec un retour"],
  (s) => [
    axis(49, 62, 264, 103),
    rect(82, 88, 53, 77, brass, ochre),
    s > 0 && rect(157, 122, 53, 43, iron, blue),
    s === 2 && rect(235, 114, 53, 51, moss, teal),
    words(108, 186, "Estimé"),
    s > 0 && words(184, 186, "Résultat"),
    s === 2 && words(262, 186, "Ajusté"),
    s === 2 && arrow(200, 111, 241, 104, teal, true),
  ],
);

const delay = frame(
  [
    "La tâche paraît inconfortable",
    "Le report peut soulager sur le moment",
    "Un premier geste crée un autre choix",
  ],
  (s, id) => [
    face(id, "M48 75h101v76H48Z"),
    line("M64 94h62m-62 14h56m-56 14h41", chalk, 2),
    s === 0 && words(238, 117, "Devoir à rendre"),
    s === 1 && [
      arrow(153, 115, 212, 88, ochre),
      rect(215, 70, 94, 43, sand, ochre),
      words(263, 97, "Plus tard"),
    ],
    s === 2 && [
      arrow(153, 115, 219, 115, teal),
      rect(223, 93, 85, 49, moss, teal),
      words(265, 124, "Ouvrir"),
      words(185, 177, "Premier geste"),
    ],
  ],
);

const recall = frame(
  ["Lire crée une familiarité", "Se rappeler demande une réponse", "Le retour aide à corriger"],
  (s) => [
    book(58, 72, 110, 93, s === 0, blue),
    s === 0 && [line("M82 97h62m-62 25h56", ochre, 2.4), words(250, 115, "Exemple lu")],
    s > 0 && [
      arrow(172, 113, 209, 113, teal),
      rect(215, 78, 94, 76, mist, blue, 7),
      words(263, 121, s === 1 ? "Réponse ?" : "Vérifiée"),
    ],
    s === 2 && [line("M238 134l9 8 15-15", teal, 2.5), line("M112 175h139", ochre, 1.5, "4 3")],
  ],
);

const habit = frame(
  [
    "Un contexte sert de déclencheur",
    "L’action est répétée dans ce contexte",
    "Le déclencheur peut évoquer l’action",
  ],
  (s) => [
    circle(90, 111, 35, sand, ochre),
    line("M90 88v22l14 11", ink, 3),
    words(90, 176, "Contexte"),
    s > 0 && [
      arrow(127, 110, 173, 110, ochre),
      book(187, 84, 66, 61, true, teal),
      words(221, 176, "Action"),
    ],
    s === 2 && [
      line("M264 100q42-61-111-44-31 6-40 20", teal, 2.3, "5 4"),
      words(281, 144, "Répétition"),
    ],
  ],
);

const attention = frame(
  [
    "Plusieurs signaux sont disponibles",
    "L’attention privilégie certains signaux",
    "Le souvenir peut se reconstruire",
  ],
  (s) => [
    ...[72, 101, 130, 159].map((y, i) => [
      circle(75, y, 8, [brass, iron, moss, water][i]!, ink),
      line(
        `M87 ${y}l61 ${114 - y}`,
        s === 0 ? iron : i === 1 ? teal : slate,
        1.6,
        i === 1 ? undefined : "4 3",
      ),
    ]),
    path("M149 74h64l-16 31v21l-33 10v-31Z", mist, blue),
    s > 0 && [
      arrow(199, 114, 230, 114, teal),
      rect(238, 87, 69, 55, s === 2 ? sand : mist, s === 2 ? ochre : blue, 7),
    ],
    s === 2 && [
      circle(253, 105, 6, iron, blue),
      circle(272, 115, 6, brass, ochre),
      circle(287, 102, 6, moss, teal),
    ],
    words(
      180,
      185,
      pick(s, ["Entrées multiples", "Information privilégiée", "Souvenir recomposé"]),
    ),
  ],
);

const permanence = frame(
  ["L’objet est d’abord visible", "Un écran le masque", "Le retrouver demande une attente"],
  (s, id) => [
    line("M46 162h268", blue, 2.2),
    circle(218, 137, 19, brass, ochre),
    person(82, 136, teal, 0.95),
    s === 1 && face(id, "M177 85h78v78H177Z", "alloy"),
    s === 2 && [face(id, "M256 84h49v79h-49Z", "alloy"), arrow(108, 117, 185, 132, ochre, true)],
    s === 0 && line("M105 111l90 21", blue, 1.65, "5 4"),
    words(198, 187, pick(s, ["Visible", "Masqué par l’écran", "Visible à nouveau"])),
  ],
);

const transfer = frame(
  [
    "Observer un geste en contexte",
    "Garder une trace et la transmettre",
    "La pratique rend la trace utilisable",
  ],
  (s, id) => [
    person(71, 133, teal, 1),
    person(122, 139, iron, 0.8),
    face(id, "M46 151h104v13H46Z", "brass"),
    s > 0 && [book(178, 81, 66, 73, false, blue), arrow(149, 123, 173, 123, ochre)],
    s === 2 && [
      person(286, 122, brass, 0.75),
      arrow(248, 115, 266, 115, teal),
      rect(265, 143, 52, 15, moss, teal),
    ],
    words(180, 185, pick(s, ["Démonstration", "Trace consultable", "Geste réutilisé"])),
  ],
);

const listening = frame(
  [
    "L’autre personne décrit son point de vue",
    "Reformuler permet de vérifier le sens",
    "Une question peut ouvrir la suite",
  ],
  (s) => [
    person(90, 132, teal, 1.1),
    person(270, 132, iron, 1.1),
    s === 0 && [
      path("M52 59h102v27H91l-12 13-2-13H52Z", water, blue),
      line("M66 70h70m-70 9h43", blue, 1.5),
    ],
    s === 1 && [
      path("M206 61h103v26h-33l-12 12-4-12h-54Z", sand, ochre),
      line("M220 73h71m-71 8h43", ochre, 1.5),
      arrow(244, 111, 117, 111, ochre),
    ],
    s === 2 && [
      rect(140, 67, 81, 49, moss, teal, 10),
      words(180, 99, "?"),
      arrow(236, 120, 111, 120, teal, true),
    ],
    words(180, 177, pick(s, ["Écouter", "Reformuler", "Questionner"])),
  ],
);

export const learning100: SceneSet = {
  choiceArchitecture: options,
  gainLoss: losses,
  skillCalibration: calibration,
  smallStart: delay,
  retrievalPractice: recall,
  habitCue: habit,
  attentionGate: attention,
  objectPermanence: permanence,
  skillTransfer: transfer,
  activeListening: listening,
};
