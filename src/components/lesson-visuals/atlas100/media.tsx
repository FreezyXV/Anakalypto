import {
  arrow,
  blue,
  book,
  brass,
  chalk,
  circle,
  display,
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

const paint = frame(
  [
    "La couleur reste dans une couche",
    "Une particule peut se détacher",
    "Le risque dépend du contact",
  ],
  (s, id) => [
    face(id, "M42 126l126-52 144 47-112 52Z", "brass"),
    path("M42 126l158 47 112-52v18l-111 53-159-48Z", "#b89772", ochre),
    path("M47 125l121-49 140 45-108 43Z", pick(s, ["#bd8e74", "#cda586", "#c0a99b"]), ochre),
    line("M80 128l76-32m-25 43 99-41m-52 54 100-39", chalk, 2.4),
    s === 0 && note(80, 69, "Pigment", "M83 76l33 22"),
    s === 1 && [
      circle(259, 82, 18, sand, ochre),
      ...Array.from({ length: 5 }, (_, i) =>
        circle(251 + ((i * 7) % 17), 74 + ((i * 9) % 17), 2.2, rust, ochre),
      ),
      arrow(225, 111, 247, 94, ochre),
    ],
    s === 2 && [
      rect(229, 53, 78, 42, mist, blue, 8),
      line("M254 64h25m-24 9h20m-19 9h13", blue, 1.8),
      note(146, 63, "Exposition", "M143 71l23 32"),
    ],
  ],
);

const auction = frame(
  [
    "Un objet change de dossier",
    "L’attribution change les attentes",
    "L’adjudication fixe un prix",
  ],
  (s, id) => [
    face(id, "M45 58h104v111H45Z", "brass"),
    path("M56 69h82v89H56Z", "#6d7f82", ink),
    path("M60 130l26-40 23 24 24-19v59H60Z", moss, teal),
    s < 2
      ? [
          book(206, 66, 100, 86, false, s === 0 ? iron : teal),
          words(255, 176, s === 0 ? "Historique" : "Attribution"),
          s === 1 && mark(289, 80, rust, 5),
        ]
      : [
          face(id, "M222 89l49-20 12 22-49 22Z", "brass"),
          line("M249 104l30 52", ochre, 8),
          rect(218, 161, 88, 10, sand, ochre),
          words(259, 191, "Prix payé"),
        ],
  ],
);

const heritage = frame(
  ["Décrire une valeur et un lieu", "Examiner le dossier", "Suivre la conservation du site"],
  (s, id) => [
    path("M43 149l20-61 37-30 47 6 29 36 58-19 76 41-15 51H49Z", moss, teal),
    face(id, "M88 141v-31h21V87h28v18h27v36Z", "brass"),
    rect(195, 69, 106, 82, s === 0 ? mist : chalk, blue, 6),
    s === 0 && [line("M202 86h55m-55 11h81m-81 12h74", iron, 1.7), words(243, 175, "Dossier")],
    s === 1 && [
      circle(247, 102, 17, water, blue),
      line("M238 103l7 7 12-15", teal, 2.5),
      words(245, 174, "Évaluation"),
    ],
    s === 2 && [line("M205 132l23-18 17 10 15-24 31 5", teal, 2.4), words(246, 173, "Suivi")],
  ],
);

const radio = frame(
  [
    "Un émetteur dessert une zone",
    "Plusieurs récepteurs entendent l’alerte",
    "Il faut aussi une alimentation disponible",
  ],
  (s, id) => [
    path("M36 160q95-31 171-15t117 13v21H36Z", moss, teal),
    face(id, "M77 155l17-87h8l17 87Z"),
    line("M83 126h30m-25-24h22m-24 26 19-25m2 47-21-26", ink, 1.4),
    ...Array.from({ length: s === 0 ? 2 : 4 }, (_, i) =>
      line(`M${118 + i * 20} ${79 - i * 4}q18 17 0 ${30 + i * 8}`, blue, 2.3),
    ),
    s === 1 && [house(204, 146), house(262, 157, slate, 0.75)],
    s === 2 && [
      rect(222, 94, 86, 59, iron, ink, 8),
      line("M229 92l46-25m-42 47h32m-32 10h32m-32 10h32", chalk, 2),
      circle(287, 123, 7, brass, ochre),
      words(255, 179, "Poste autonome"),
    ],
  ],
);

const tv = frame(
  [
    "Une émission occupe une heure",
    "Le différé décale le visionnage",
    "La demande dissocie les horaires",
  ],
  (s) => [
    line("M56 142h250", ink, 1.5),
    ...[65, 122, 179, 236, 293].map((x) => line(`M${x} 138v8`, blue, 1.4)),
    words(64, 169, "18 h"),
    words(178, 169, "20 h"),
    words(294, 169, "22 h"),
    ...pick(s, [[154], [154, 254], [71, 183, 254]]).map((x, i) => [
      rect(x - 25, 89, 50, 37, i === 0 ? iron : brass, ink),
      path(`M${x - 4} 98l15 10-15 10Z`, chalk, ink),
    ]),
    s === 1 && arrow(190, 107, 222, 107, ochre),
    s === 2 && line("M71 68h184", teal, 1.75, "5 3"),
  ],
);

const verify = frame(
  ["Identifier qui publie", "Chercher ailleurs sur la source", "Retrouver le document de départ"],
  (s) => [
    display(34, 83, "Publication", s === 0),
    s === 0 && [
      circle(206, 118, 20, water, blue),
      line("M219 132l23 23", blue, 6),
      words(270, 123, "Auteur ?"),
    ],
    s === 1 && [
      display(135, 60, "Source A"),
      display(238, 110, "Source B"),
      arrow(121, 107, 140, 96),
      arrow(123, 128, 234, 137, blue, true),
    ],
    s === 2 && [
      display(137, 90, "Relais", false),
      book(252, 71, 62, 81, false, teal),
      arrow(120, 116, 133, 116),
      arrow(225, 116, 248, 116),
      words(273, 177, "Original"),
    ],
  ],
);

const newsroom = frame(
  [
    "Isoler une affirmation vérifiable",
    "Comparer des preuves indépendantes",
    "Publier avec les éléments établis",
  ],
  (s) => [
    book(42, 72, 74, 89, false, blue),
    line("M63 101h31", rust, 3.8),
    s > 0 && [
      book(145, 62, 74, 92, false, teal),
      line("M169 96h33", teal, 3.4),
      arrow(120, 119, 141, 119, ochre),
    ],
    s === 2 && [
      book(245, 71, 70, 88, false, ochre),
      arrow(222, 119, 241, 119, teal),
      mark(283, 139, teal, 5),
    ],
    words(78, 180, "Affirmation"),
    s > 0 && words(182, 180, "Traces"),
    s === 2 && words(278, 180, "Article"),
  ],
);

const revenue = frame(
  [
    "Le prix payé par le lecteur",
    "Les annonces financent une part",
    "Les recettes changent de répartition",
  ],
  (s) => [
    line("M48 154h266", blue, 1.7),
    ...pick(s, [[52], [52, 77], [52, 25, 61]]).map((h, i) => [
      rect(67 + i * 89, 154 - h, 49, h, [blue, brass, moss][i]!, ink, 3),
      words(91 + i * 89, 180, ["Vente", "Annonces", "Abonnés"][i]),
    ]),
    s === 2 && arrow(196, 74, 202, 116, rust, true),
  ],
);

const confidential = frame(
  [
    "Une personne fournit un élément",
    "L’information est recoupée",
    "L’article peut taire son identité",
  ],
  (s) => [
    person(71, 129, s === 2 ? slate : teal, 0.9),
    person(172, 124, iron, 0.9),
    book(250, 79, 66, 73, false, s === 2 ? teal : blue),
    s < 2 && arrow(96, 118, 145, 118, ochre),
    s === 1 && [book(135, 53, 52, 43, false, teal), arrow(160, 105, 162, 94, blue)],
    s === 2 && [
      rect(47, 94, 46, 51, ink, blue),
      line("M56 115h27m-26 9h20", mist, 2.2),
      arrow(196, 117, 245, 117, teal),
    ],
    words(73, 178, "Source"),
    words(174, 178, "Journaliste"),
    words(285, 178, "Public"),
  ],
);

const open = frame(
  [
    "Des pages se relient par des adresses",
    "Un espace peut exiger un compte",
    "Une page ouverte reste partageable",
  ],
  (s) => [
    s === 1 && rect(123, 59, 209, 111, "#e0e9e9", blue, 12),
    display(36, 87, "Site A", s !== 1),
    display(138, 87, s === 1 ? "Compte" : "Site B"),
    display(240, 87, "Page C", s !== 1),
    s === 0 && [arrow(122, 109, 134, 109, teal), arrow(224, 109, 237, 109, teal)],
    s === 1 && [line("M99 164h33", rust, 2, "4 4"), mark(125, 164, rust, 4)],
    s === 2 && [arrow(91, 167, 286, 167, blue, true), words(185, 65, "Lien direct")],
  ],
);

export const media100: SceneSet = {
  pigmentLayers: paint,
  paintingAuction: auction,
  heritageListing: heritage,
  radioAlert: radio,
  tvSchedule: tv,
  verifyClaim: verify,
  newsroomCheck: newsroom,
  pressRevenue: revenue,
  protectedSource: confidential,
  openWeb: open,
};
