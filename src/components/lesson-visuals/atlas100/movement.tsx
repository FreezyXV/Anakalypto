import {
  arrow,
  axis,
  blue,
  brass,
  chalk,
  circle,
  ellipse,
  face,
  frame,
  iron,
  line,
  mark,
  mist,
  moss,
  note,
  ochre,
  path,
  person,
  pick,
  rect,
  rust,
  sand,
  teal,
  water,
  words,
} from "./parts";
import type { SceneSet } from "../Atlas65Parts";

const basket = frame(
  [
    "Placer une cible en hauteur",
    "Le ballon doit entrer dans la cible",
    "Le panier change avec le jeu",
  ],
  (s, id) => [
    face(id, "M249 63h64v84h-64Z"),
    ellipse(251, 119, 29, 8, brass, ochre),
    s < 2
      ? [
          path("M222 119l8 40h40l10-40", sand, ochre),
          line("M233 128v26m11-26v30m13-30v30m12-30v23", ochre, 1.3),
        ]
      : [
          path("M224 121l13 42h27l14-42", mist, iron),
          line("M228 129l38 29m-36-14 40-15m-38 27 38-15", blue, 1.1),
        ],
    circle(pick(s, [111, 213, 250]), pick(s, [124, 85, 157]), 11, brass, ochre),
    s > 0 && line("M103 123q66-101 137-19", rust, 2, "5 4"),
    person(77, 139, iron, 0.77),
    s === 0 && note(199, 67, "Cible", "M218 72l28 39"),
  ],
);

const tracking = frame(
  [
    "Relever les positions des joueurs",
    "Les positions forment une trajectoire",
    "Une mesure répond à une question",
  ],
  (s) => [
    rect(39, 62, 282, 110, "#b5c8af", teal, 3),
    line("M180 63v109m-141-86h45v60H39m282-60h-45v60h45", chalk, 2.1),
    circle(180, 117, 21, "none", chalk),
    ...[
      [91, 132],
      [127, 98],
      [162, 130],
      [212, 91],
      [244, 125],
    ].map(([x, y], i) => mark(x!, y!, i < 3 ? blue : ochre, 5)),
    s > 0 && line("M91 132l36-34 35 32", blue, 2.5, "4 4"),
    s === 2 && [rect(203, 114, 64, 37, "#d4d7b4", ochre, 4), arrow(212, 134, 258, 134, teal)],
    words(179, 189, pick(s, ["Relevé de positions", "Trajet mesuré", "Zone d’intérêt"])),
  ],
);

const classification = frame(
  [
    "Le sport fixe la fonction observée",
    "On évalue l’impact sur cette activité",
    "Une classe relève de ce sport",
  ],
  (s, id) => [
    person(81, 135, teal, 1.07),
    face(id, "M127 72h92v73h-92Z"),
    line("M144 89h59m-59 13h49m-49 14h59m-59 13h39", chalk, 2),
    s > 0 && [arrow(107, 121, 125, 109, ochre), mark(210, 119, ochre, 5)],
    s === 2 && [
      rect(249, 83, 60, 28, sand, ochre),
      rect(248, 124, 62, 28, water, blue),
      words(279, 103, "A"),
      words(279, 144, "B"),
      arrow(221, 117, 246, 97, teal),
    ],
    words(
      177,
      181,
      pick(s, ["Exigences de l’épreuve", "Évaluation fonctionnelle", "Classes fictives"]),
    ),
  ],
);

const altitude = frame(
  [
    "La pression baisse avec l’altitude",
    "La traînée peut être moindre",
    "L’endurance implique aussi l’oxygène",
  ],
  (s) => [
    path("M39 163l61-39 53 12 63-75 41 35 64 67Z", moss, teal),
    line("M173 115l88-11m-161 20 60-9", chalk, 2.3, "4 3"),
    s === 0 && [
      line("M65 89h83m-83 14h62m-62 13h45", blue, 1.8),
      words(250, 177, "Air moins dense"),
    ],
    s === 1 && [
      person(199, 109, iron, 0.67),
      arrow(218, 83, 274, 81, ochre),
      words(254, 177, "Traînée"),
    ],
    s === 2 && [
      person(198, 107, teal, 0.68),
      ...Array.from({ length: 5 }, (_, i) =>
        circle(223 + i * 17, 76 + (i % 2) * 13, 3.8, water, blue),
      ),
      words(238, 179, "Pression d’oxygène"),
    ],
  ],
);

const record = frame(
  [
    "Un record est une meilleure marque",
    "Les progrès arrivent par paliers",
    "L’écart entre paliers peut s’allonger",
  ],
  (s) => [
    axis(50, 64, 257, 105),
    line(
      pick(s, [
        "M58 156h44v-18h39v-25h53",
        "M58 156h44v-18h39v-25h53v-20h40",
        "M58 156h44v-18h39v-25h53v-20h40v-10h71",
      ]),
      blue,
      3,
    ),
    ...pick(s, [
      [
        [102, 138],
        [141, 113],
      ],
      [
        [102, 138],
        [141, 113],
        [194, 93],
      ],
      [
        [102, 138],
        [141, 113],
        [194, 93],
        [234, 83],
      ],
    ]).map(([x, y]) => mark(x!, y!, ochre, 4)),
    words(118, 59, "Performance"),
    words(257, 189, "Temps"),
  ],
);

const muscle = frame(
  [
    "L’ATP alimente la contraction",
    "Des voies le reconstituent vite",
    "Plusieurs voies restent actives",
  ],
  (s) => [
    axis(48, 64, 265, 101),
    line("M54 100q42-55 86 5t151 49", ochre, 2.5),
    s > 0 && line("M55 150q64-71 117-43t130 44", blue, 2.5),
    s === 2 && line("M54 160q103-6 145-38t103-43", teal, 2.8),
    words(173, 184, pick(s, ["Phosphocréatine", "Glycolyse ajoutée", "Voie oxydative ajoutée"])),
    words(110, 58, "Contribution"),
  ],
);

const heart = frame(
  [
    "Le cœur propulse le sang",
    "À l’effort, le débit peut augmenter",
    "Le retour dépend de la situation",
  ],
  (s, id) => [
    path("M107 99V74l-10-11h14l13 13v23Zm45 7V79q0-24 18-21l14 3-4 11-11-3-4 37Z", water, blue, 2),
    path("M127 114V76q0-25 25-26l9-1 1 11-12 3q-11 3-11 15v34Z", brass, ochre, 2),
    face(
      id,
      "M85 117q-11-24 7-35 15-10 37 7 11 9 23 2l12-5q28-6 28 24 0 26-23 45l-31 16q-20-13-38-31Z",
      "brass",
    ),
    line("M130 100q-16 20-1 51l9 15m-4-51q26-15 47-14m-44 15 17 20m-28-20-16 15", rust, 2.3),
    rect(221, 78, 94, 77, mist, blue, 7),
    line(
      pick(s, [
        "M227 126h10l10-27 6 42 13-15h44",
        "M225 125l6-18 6 32 10-14h7l8-21 6 35 8-14h7l9-21 6 35 8-14",
        "M225 125l13-14 6 24 9-10h13l11-20 6 33 8-13h16",
      ]),
      s === 1 ? rust : teal,
      2.25,
    ),
    words(185, 186, pick(s, ["Repos", "Effort", "Récupération"])),
  ],
);

const strength = frame(
  [
    "Les nerfs activent les fibres",
    "Le recrutement peut évoluer",
    "La taille des fibres peut aussi évoluer",
  ],
  (s, id) => [
    face(
      id,
      s === 2 ? "M92 76q105 5 206 22v49q-105 25-206 26Z" : "M92 91q105 5 206 15v31q-105 15-206 24Z",
      "brass",
    ),
    ...Array.from({ length: s === 2 ? 6 : 5 }, (_, i) =>
      line(`M110 ${98 + i * 10}q89 4 175 6`, i >= 3 && s === 0 ? iron : rust, 2.2),
    ),
    line("M45 117h21l24-16m-24 16 24 15", blue, 3),
    s > 0 && [arrow(61, 103, 87, 82, blue), mark(88, 129, teal, 5)],
    words(182, 185, pick(s, ["Commande nerveuse", "Recrutement illustré", "Fibres agrandies"])),
  ],
);

const watch = frame(
  [
    "La montre éclaire la peau",
    "La lumière reçue change avec le pouls",
    "Les mouvements brouillent la mesure",
  ],
  (s, id) => [
    face(id, "M55 58h124v52H55Z"),
    circle(85, 94, 9, moss, teal),
    circle(147, 94, 9, water, blue),
    rect(55, 113, 124, 53, "#d8b099", rust, 4),
    line("M64 145q29-13 104 0", rust, 4),
    arrow(86, 105, 98, 141, teal),
    arrow(116, 139, 145, 106, blue),
    s > 0 && [
      rect(210, 76, 108, 76, mist, blue, 5),
      line(
        s === 1
          ? "M218 126q8-30 19 0t21 0 21 0 31 0"
          : "M218 128l12-27 9 23 13-30 10 38 14-7 12-29 17 26",
        s === 1 ? teal : rust,
        2.3,
      ),
    ],
    s === 2 && arrow(190, 122, 191, 93, ochre),
    words(181, 185, pick(s, ["Diode et détecteur", "Signal optique", "Signal perturbé"])),
  ],
);

const training = frame(
  [
    "Une séance peut créer de la fatigue",
    "La récupération change la suite",
    "Le rythme et le contexte comptent",
  ],
  (s) => [
    axis(50, 66, 256, 99),
    line("M55 105h245", iron, 1.5, "4 4"),
    line(
      pick(s, [
        "M56 105h45q14 55 42 53",
        "M56 105h45q14 55 42 53 54-3 83-46",
        "M56 105h45q14 55 42 53 44-1 67-46t86-13",
      ]),
      blue,
      2.8,
    ),
    mark(pick(s, [143, 227, 296]), pick(s, [158, 112, 99]), ochre, 5),
    words(
      182,
      185,
      pick(s, ["Fatigue transitoire", "Retour vers le repère", "Adaptation possible"]),
    ),
  ],
);

export const movement100: SceneSet = {
  firstBasket: basket,
  sportTracking: tracking,
  paraClassification: classification,
  altitudeTrack: altitude,
  recordFrontier: record,
  muscleEnergy: muscle,
  effortHeart: heart,
  muscleAdaptation: strength,
  opticalWatch: watch,
  trainingCycle: training,
};
