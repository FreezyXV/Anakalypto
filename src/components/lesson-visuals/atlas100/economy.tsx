import {
  arrow,
  axis,
  blue,
  book,
  brass,
  building,
  circle,
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
  person,
  pick,
  rect,
  rust,
  sand,
  slate,
  teal,
  words,
} from "./parts";
import type { SceneSet } from "../Atlas65Parts";

const prices = frame(
  [
    "On garde les produits du panier",
    "Un seul prix peut bouger",
    "Le total donne la variation du panier",
  ],
  (s) => [
    ...[72, 180, 288].map((x, i) => [
      rect(x - 34, 73, 68, 72, [mist, sand, "#dce7d7"][i]!, iron, 6),
      i === 0
        ? ellipse(x, 96, 19, 10, brass, ochre)
        : i === 1
          ? circle(x, 96, 11, rust, ochre)
          : path(`M${x - 12} 83h24v23h-24Z`, moss, teal),
      words(
        x,
        129,
        pick(s, [
          ["4 €", "2 €", "4 €"],
          ["4 €", "3 €", "4 €"],
          ["5 €", "3 €", "4 €"],
        ])[i],
        s > 0 && i === 1 ? rust : ink,
      ),
    ]),
    words(181, 181, pick(s, ["Panier : 10 €", "Panier : 11 €", "Panier : 12 €"])),
  ],
);

const labour = frame(
  [
    "La population de départ est plus large",
    "Les actifs regroupent deux états",
    "On divise par les actifs",
  ],
  (s) => [
    s > 0 && rect(36, 67, 228, 86, "#dbe7db", teal, 7),
    ...Array.from({ length: 10 }, (_, i) =>
      person(
        56 + (i % 5) * 55,
        104 + Math.floor(i / 5) * 42,
        s === 0 ? iron : i === 4 || i === 9 ? slate : i === 3 || i === 8 ? brass : teal,
        0.58,
      ),
    ),
    s === 2 && [
      rect(55, 164, 250, 24, sand, ochre, 4),
      words(179, 182, "2 personnes sur 8 actives"),
    ],
    s === 1 && words(182, 185, "Six en emploi, deux au chômage"),
  ],
);

const output = frame(
  [
    "La valeur initiale mélange prix et volume",
    "La hausse en valeur peut venir du prix",
    "À prix d’origine, le volume est isolé",
  ],
  (s, id) => [
    ...Array.from({ length: s === 2 ? 5 : 4 }, (_, i) =>
      face(id, `M${52 + i * 53} ${100 - (i % 2) * 4}h43v37h-43Z`, i % 2 ? "brass" : "alloy"),
    ),
    s === 0 && [words(182, 89, "4 objets à 2 €"), words(183, 176, "Valeur : 8 €")],
    s === 1 && [
      words(188, 82, "4 objets à 3 €"),
      words(185, 176, "Valeur : 12 €"),
      arrow(290, 111, 290, 149, ochre),
    ],
    s === 2 && [words(186, 82, "5 objets à 2 € de référence"), words(183, 176, "Volume : + 25 %")],
  ],
);

const barter = frame(
  [
    "Le troc est un échange direct",
    "Il faut que les besoins coïncident",
    "La monnaie sépare vente et achat",
  ],
  (s, id) => [
    person(77, 139, teal, 1),
    person(282, 139, blue, 1),
    face(id, "M110 82h42v29h-42Z", "brass"),
    ellipse(225, 97, 19, 10, moss, teal),
    s === 0 && [arrow(154, 93, 207, 93, ochre), arrow(212, 124, 145, 124, teal)],
    s === 1 && [
      line("M150 123h61", rust, 2, "4 4"),
      line("M173 116l16 16m0-16-16 16", rust, 3),
      words(181, 174, "Besoins différents"),
    ],
    s === 2 && [
      circle(182, 114, 19, brass, ochre),
      arrow(152, 134, 168, 123, teal),
      arrow(207, 123, 225, 137, teal),
      words(182, 177, "Moyen d’échange"),
    ],
  ],
);

const market = frame(
  [
    "Plusieurs entreprises sur un marché",
    "Une barrière peut freiner l’entrée",
    "Une seule offre transforme les choix",
  ],
  (s, id) => [
    building(50, 150, 55, 60, iron),
    s === 0 && building(148, 150, 57, 55, brass),
    s < 2 && building(251, 150, 53, 48, moss),
    s > 0 && [
      face(id, "M126 81h38v74h-38Z", "brass"),
      line("M134 92l21 49m-21 0 21-49", ochre, 2.4),
    ],
    s === 2 && [
      ...Array.from({ length: 3 }, (_, i) => person(245 + i * 36, 141, slate, 0.57)),
      arrow(231, 115, 171, 115, teal, true),
    ],
    words(177, 181, pick(s, ["Plusieurs offres", "Entrée freinée", "Offre unique dans le modèle"])),
  ],
);

const equilibrium = frame(
  [
    "L’offre et la demande se rencontrent",
    "Le croisement donne un prix possible",
    "Une demande différente peut le déplacer",
  ],
  (s) => [
    axis(50, 60, 256, 105),
    line("M63 150l222-76", teal, 2.9),
    line("M63 77l222 74", blue, s === 2 ? 1.7 : 2.9, s === 2 ? "5 4" : undefined),
    s > 0 && [
      mark(s === 1 ? 171 : 208, s === 1 ? 113 : 100.4, ochre, 5),
      line(s === 1 ? "M52 113h119v52" : "M52 100.4h156v64.6", ochre, 1.3, "4 4"),
    ],
    s === 2 && line("M99 62l193 73", blue, 2.9),
    words(104, 56, "Prix"),
    words(259, 186, "Quantité"),
    words(265, 65, "Offre", teal),
    words(291, 158, "Demande", blue),
  ],
);

const industry = frame(
  [
    "Les ateliers se dispersent",
    "Les machines concentrent l’activité",
    "Les transports étendent les marchés",
  ],
  (s, id) => [
    path("M38 145q82-42 155-13t130 5v41H38Z", moss, teal),
    s === 0
      ? [
          house(64, 144, sand, 0.9),
          house(231, 143, iron, 0.77),
          words(178, 168, "Ateliers dispersés"),
        ]
      : [
          building(109, 158, 76, 51, iron),
          face(id, "M163 110V64h14v46Z"),
          line("M175 63q12-21 42-11", iron, 4),
          building(214, 157, 48, 39, brass),
        ],
    s === 2 && [
      line("M43 171h276m-270 10h263", ink, 2.5),
      rect(78, 150, 40, 18, sand, ochre, 1),
      circle(86, 169, 4, ink, ink),
      circle(113, 169, 4, ink, ink),
    ],
  ],
);

const marshall = frame(
  [
    "L’Europe reconstruit après la guerre",
    "Les aides financent des achats",
    "Les effets passent par plusieurs canaux",
  ],
  (s, id) => [
    face(id, "M44 145v-48l49-28 43 26v50Z", "alloy"),
    path("M49 103l28-23 13 17 18-21 20 24", mist, ink),
    s === 0 && [line("M82 103l22 36m-21-19 20-9", rust, 3), words(239, 121, "Capacité abîmée")],
    s > 0 && [
      arrow(146, 116, 204, 116, ochre),
      ...Array.from({ length: s === 1 ? 3 : 2 }, (_, i) =>
        rect(211 + i * 27, 99, 23, 23, brass, ochre, 2),
      ),
      words(235, 163, s === 1 ? "Approvisionner" : "Accroître la capacité"),
    ],
    s === 2 && building(288, 133, 33, 45, iron),
  ],
);

const village = frame(
  [
    "Des traces indiquent des lieux habités",
    "Culture et élevage transforment le milieu",
    "Le stockage laisse d’autres indices",
  ],
  (s, id) => [
    path("M36 143q118-54 289 0v34H36Z", moss, teal),
    house(61, 148, sand, 0.79),
    house(213, 141, iron, 0.67),
    s === 0 && [mark(181, 117, ochre, 4), words(181, 67, "Habitat")],
    s > 0 && [
      ...Array.from({ length: 5 }, (_, i) => line(`M${111 + i * 15} 145l22-22`, ochre, 2.6)),
      words(163, 92, "Cultures"),
    ],
    s === 2 && [face(id, "M246 134h54v29h-54Z", "brass"), note(273, 73, "Réserve", "M264 81v49")],
  ],
);

const literacy = frame(
  [
    "Apprendre à lire des signes",
    "La pratique s’étend par plusieurs voies",
    "Les conditions d’apprentissage comptent",
  ],
  (s) => [
    book(49, 70, 111, 94, true, blue),
    s === 0 && [
      words(235, 103, "Signe"),
      arrow(206, 122, 257, 122, teal),
      words(245, 150, "Son ou sens"),
    ],
    s === 1 && [
      person(215, 122, teal, 0.78),
      person(283, 122, brass, 0.78),
      book(221, 132, 52, 32, false, ochre),
    ],
    s === 2 && [
      building(206, 152, 52, 61, iron),
      person(286, 134, teal, 0.72),
      note(264, 74, "Accès", "M254 78l-22 11"),
    ],
  ],
);

export const economy100: SceneSet = {
  priceBasket: prices,
  unemploymentBase: labour,
  realProduction: output,
  barterExchange: barter,
  marketEntry: market,
  priceIntersection: equilibrium,
  industrialTransition: industry,
  marshallAid: marshall,
  neolithicVillage: village,
  writingSystems: literacy,
};
