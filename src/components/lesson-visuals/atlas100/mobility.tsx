import {
  arrow,
  at,
  axis,
  blue,
  brass,
  car,
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

const fatigue = frame(
  [
    "Le regard échantillonne la scène",
    "Une attention baisse par moments",
    "Les aides gardent leurs limites",
  ],
  (s, id) => [
    face(id, "M39 71h282l-28 84H68Z", "glass"),
    path("M166 78h28l44 76H117Z", "#a7b9ba", ink),
    line("M180 87v7m0 8v11m0 12v18", chalk, 2.4),
    s === 0 && [mark(180, 103, teal, 5), mark(151, 133, teal), mark(230, 136, teal)],
    s === 1 && [ellipse(196, 115, 62, 20, "#c0c6b7", ochre), line("M142 112l105 10", rust, 2.5)],
    s === 2 && [
      rect(80, 115, 51, 32, sand, ochre),
      path("M98 141l7-21 7 20Z", brass, ochre),
      mark(179, 103, teal, 5),
    ],
    words(178, 184, pick(s, ["Repères de conduite", "Vigilance variable", "Alerte éventuelle"])),
  ],
);

const noise = frame(
  [
    "Le moteur peut être audible",
    "Le contact pneu-route ajoute du bruit",
    "Le revêtement modifie la propagation",
  ],
  (s, id) => [
    car(86, 147, 1.05),
    line("M51 148h255", ink, 3.8),
    s === 2 && face(id, "M51 151h254v17H51Z", "brass"),
    ...Array.from({ length: 3 }, (_, i) =>
      line(
        pick(s, [
          `M${93 - i * 14} ${124 - i * 3}q-11-18 0-35`,
          `M${121 - i * 13} ${150 - i * 3}q-10-14 3-32m100 32q17-17 8-29`,
          `M${123 - i * 11} ${147 - i * 3}q-8-10 3-26`,
        ]),
        s === 0 ? ochre : blue,
        2.2,
        s === 2 ? "4 3" : undefined,
      ),
    ),
    words(183, 188, pick(s, ["Groupe motopropulseur", "Pneus et chaussée", "Surface de contact"])),
  ],
);

const energy = frame(
  [
    "La vitesse varie le long du trajet",
    "Freiner dissipe ou récupère de l’énergie",
    "Anticiper change le profil de vitesse",
  ],
  (s) => [
    axis(48, 64, 264, 103),
    line("M56 157l37-59h94l40 56h73", iron, 2, "5 4"),
    line(
      pick(s, [
        "M56 157l37-59h94l40 56h73",
        "M56 157l37-59h113l21 56h73",
        "M56 157l37-59h72q53 21 68 56h67",
      ]),
      blue,
      3,
    ),
    s === 1 && note(257, 80, "Freinage", "M247 87l-24 47", rust),
    s === 2 && note(233, 78, "Transition", "M219 84l-14 40", teal),
    words(100, 58, "Vitesse"),
    words(230, 189, "Distance"),
  ],
);

const lifecycle = frame(
  [
    "La fabrication crée un premier bilan",
    "L’utilisation s’ajoute selon l’énergie",
    "La fin de vie dépend de la filière",
  ],
  (s) => [
    axis(52, 68, 256, 99),
    line("M55 150l246-65", ochre, 2.9),
    line("M55 122l246-31", blue, 2.9),
    s === 0 && [mark(55, 150, ochre, 5), mark(55, 122, blue, 5), words(174, 184, "Fabrication")],
    s === 1 && [mark(258, 96.5, teal, 5), words(187, 184, "Kilomètres parcourus")],
    s === 2 && [
      line("M301 85l9-13m-9 19 9 10", teal, 2.4, "3 3"),
      words(179, 184, "Bilan de fin de vie"),
    ],
    words(113, 64, "Émissions cumulées"),
  ],
);

const mass = frame(
  [
    "Deux véhicules de même gabarit",
    "Une masse supérieure à déplacer",
    "Le résultat dépend du parcours",
  ],
  (s, id) => [
    car(49, 135, 0.67, iron),
    car(198, 135, 0.67, slate),
    rect(98, 102, 18, 14, brass, ochre, 1),
    ...Array.from({ length: s === 0 ? 1 : 3 }, (_, i) =>
      rect(239 + i * 12, 102, 11, 14, brass, ochre, 1),
    ),
    s === 1 && [arrow(89, 159, 137, 159, blue), arrow(236, 159, 306, 159, ochre)],
    s === 2 && [
      face(id, "M45 171h115v7H45Zm154 0 118-24v31H199Z", "brass"),
      arrow(232, 169, 299, 151, teal),
    ],
    words(103, 64, "Masse 1"),
    words(251, 64, s === 0 ? "Même gabarit" : "Masse 2"),
  ],
);

const sharing = frame(
  [
    "Une voiture peut servir à plusieurs heures",
    "Des voyageurs peuvent partager un trajet",
    "Chaque formule change une variable",
  ],
  (s) => [
    s !== 1 && [
      line("M45 126h270", blue, 2),
      ...[69, 176, 284].map((x, i) => [
        mark(x, 126, i === s ? ochre : blue),
        words(x, 160, ["Matin", "Midi", "Soir"][i]),
      ]),
      car(125, 115, 0.65),
    ],
    s > 0 && [
      person(85, s === 1 ? 138 : 85, teal, 0.68),
      person(121, s === 1 ? 138 : 85, brass, 0.68),
      person(157, s === 1 ? 138 : 85, iron, 0.68),
    ],
    s === 1 && [car(217, 143, 0.62), arrow(175, 116, 209, 116, teal)],
    s === 2 && words(241, 83, "Usages combinables"),
  ],
);

const van = (x: number, y: number, id: string) =>
  at(x, y, [
    face(id, "M0 0v-64h112l41 28V0Z"),
    path("M112-60l29 23h-26Z", water, blue),
    rect(13, -52, 91, 36, mist, iron, 1),
    circle(24, 0, 13, ink, ink),
    circle(133, 0, 13, ink, ink),
    circle(24, 0, 5, water, blue),
    circle(133, 0, 5, water, blue),
  ]);
const payload = frame(
  [
    "Le volume ne donne pas la charge utile",
    "Le poids des occupants et outils compte",
    "La tournée change le besoin",
  ],
  (s, id) => [
    van(49, 139, id),
    ...Array.from({ length: s === 0 ? 1 : s === 1 ? 3 : 2 }, (_, i) =>
      rect(67 + i * 25, 100, 20, 20, [sand, brass, moss][i]!, ochre, 1),
    ),
    s === 0 && note(274, 84, "Volume", "M254 90l-113 6"),
    s === 1 && [arrow(236, 92, 236, 132, ochre), words(270, 159, "Masse")],
    s === 2 && [
      line("M223 99q35-40 70 0l-41 41 59 12", teal, 2.5, "5 3"),
      mark(255, 141),
      mark(291, 99),
      words(266, 183, "Tournée"),
    ],
  ],
);

const street = frame(
  [
    "L’espace est partagé dans la largeur",
    "Le stationnement occupe une bande",
    "La répartition change les usages",
  ],
  (s, id) => [
    face(id, "M35 104h290v64H35Z"),
    path("M36 106h288v19H36Zm0 44h288v17H36Z", sand, ochre),
    line("M43 138h270", chalk, 2.1, "8 6"),
    s < 2 && car(65, 148, 0.61),
    s === 1 && [rect(219, 125, 94, 24, brass, ochre, 1), words(266, 98, "Stationnement")],
    s === 2 && [
      rect(83, 126, 56, 22, moss, teal, 1),
      rect(218, 126, 84, 22, water, blue, 1),
      words(116, 93, "Vélos"),
      words(258, 94, "Bus"),
    ],
    words(174, 188, pick(s, ["Emprise de la rue", "Bande réservée", "Largeur totale identique"])),
  ],
);

const recover = frame(
  [
    "Repérer la matière et son état",
    "Identifier par indices croisés",
    "Orienter vers un usage possible",
  ],
  (s, id) => [
    face(id, "M46 111l37-28 84 20-37 33Z"),
    face(id, "M55 131l83 21 31-23v24l-29 20-85-23Z", "brass"),
    s === 0 && note(272, 84, "Aspect", "M252 89l-103 29"),
    s === 1 && [
      circle(255, 116, 24, mist, blue),
      line("M272 131l28 28", blue, 6),
      words(239, 176, "Identifier"),
    ],
    s === 2 && [
      arrow(171, 126, 233, 94, teal),
      arrow(173, 138, 237, 155, blue),
      words(279, 83, "Réemploi"),
      words(278, 177, "Filière"),
    ],
  ],
);

const drainage = frame(
  [
    "La chaussée transmet les charges",
    "Le profil guide l’eau vers le côté",
    "Le drainage évite une eau durable",
  ],
  (s, id) => [
    face(id, "M37 139l141-33 144 33v35H37Z", "brass"),
    face(id, "M37 126l142-39 144 39v17l-144-36-142 36Z", "alloy"),
    path("M37 126l142-39 144 39v7l-144-39-142 38Z", ink, ink),
    s === 0 && note(253, 63, "Revêtement", "M240 69l-44 27"),
    s === 1 && [arrow(156, 91, 84, 110, blue), arrow(216, 95, 291, 114, blue)],
    s === 2 && [
      circle(67, 159, 10, water, blue),
      circle(291, 159, 10, water, blue),
      arrow(105, 151, 78, 157, blue),
      arrow(260, 151, 280, 157, blue),
      words(180, 187, "Collecte latérale"),
    ],
  ],
);

export const mobility100: SceneSet = {
  drivingFatigue: fatigue,
  trafficNoise: noise,
  anticipationEnergy: energy,
  vehicleLifeCycle: lifecycle,
  vehicleMass: mass,
  sharedMobility: sharing,
  utilityPayload: payload,
  streetCrossSection: street,
  materialRecovery: recover,
  roadDrainage: drainage,
};
