import {
  type Study,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  grounding,
  heat,
  joint,
  label,
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
  tile,
} from "./art";
import { imagePrint, mast, printedPage, screen } from "./mediaWorkshop";

function telephone(id: string, x: number, y: number, scale: number, digital = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 1, 45, 38),
      surface(
        id,
        digital === 0 ? "M-26-39l9-7h33l12 9v75l-7 9h-47Z" : "M-32-45l9-7h49l10 9v83l-8 9h-60Z",
        "iron",
        1.15,
      ),
      block(
        digital === 0 ? -20 : -26,
        -36,
        digital === 0 ? 41 : 55,
        digital === 0 ? 33 : 72,
        paint(id, "glass"),
        "#516c60",
        4,
      ),
      stroke(
        digital === 0
          ? "M-15 9h32m-32 7h32m-32 7h32m-31 7h32"
          : "M-20-27h37m-36 9h25m-25 9h35m-35 9h41m-41 9h27",
        "#cfcca2",
        1.6,
        "4 2",
      ),
      ...joint(id, 1, 42, 3.2, "steel"),
      digital === 0 && stroke("M-18-43v-15", "#798779", 3),
    ],
    scale,
  );
}
function orbitalRelay(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      ...[-55, 20].map((a) => [
        surface(id, `M${a} -19h33v36h-33Z`, "glass", 1),
        stroke(`M${a + 4} -10h25m-25 9h25m-25 9h25m-12-24v29`, "#cad5af", 1.2),
      ]),
      surface(id, "M-23-15l13-11h23l12 10v45h-48Z", "steel", 1.12),
      oval(0, -21, 20, 9, paint(id, "copper"), dark),
      stroke("M0-23l8-13m-11 65v10m15-10 8 6", "#d8d3a9", 1.25),
      ...joint(id, 4, 2, 8, "copper"),
    ],
    scale,
  );
}
function dish(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 29, 42),
      surface(id, "M-18 26-6-13h12l12 39Z", "iron", 1.15),
      surface(id, "M-33-13Q0 14 32-29 11 35-33-13Z", "steel", 1.25),
      stroke("M-27-10l40-13 14-7m-31 8 11 21", "#97ad96", 1.42),
      oval(12, -23, 5, 4, paint(id, "copper"), dark),
      tile(id, -21, 25, 45, 8, "iron", 7),
    ],
    scale,
  );
}
function tableRow(id: string, x: number, y: number, scale: number, subject: number) {
  const papers: ["steel", "glass", "copper"] = ["steel", "glass", "copper"];
  return moved(
    x,
    y,
    [
      panel(id, 0, 0, 116, 24, "cream"),
      block(7, 5, 20, 13, paint(id, papers[subject]!), dark, 1),
      stroke(
        subject === 0
          ? "M9 15l4-7 5 3 5-2"
          : subject === 1
            ? "M9 13h15m-9-5v8"
            : "M10 15l4-8 4 5 4-4",
        "#e1d6ad",
        1.23,
      ),
      stroke("M35 8h60m-60 6h49", "#8a9273", 1.16, subject === 2 ? "4 2" : undefined),
    ],
    scale,
  );
}
function cards(id: string, order: number[], x = 106, y = 62) {
  return order.map((subject, i) => tableRow(id, x, y + i * 31, 1.34, subject));
}
function magnifier(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      stroke("M15 13l22 23", "#6d664d", 9),
      stroke("M17 12l18 21", "#b49665", 4.8),
      oval(0, 0, 25, 24, "#d6e3ce40", "#495f50"),
      oval(0, 0, 22, 21, "none", "#b99462"),
      stroke("M-17-5q2-11 15-14", "#e4dfb3", 2.1),
    ],
    scale,
  );
}
function notes(id: string, s: number, kind: "survey" | "institution" | "report") {
  return [
    printedPage(id, 101, 107, 0.94, kind === "report" ? "news" : "form", s + 2),
    ...(s === 0
      ? [magnifier(id, 168, 115, 0.7), printedPage(id, 258, 112, 0.71, "form", 2)]
      : s === 1
        ? [
            stream(151, 114, 207, 113, forest),
            panel(id, 211, 81, 83, 61, kind === "survey" ? "steel" : "glass"),
            ...[0, 1, 2].map((i) =>
              stroke(
                `M220 ${95 + i * 16}h${[41, 58, 26][i]}`,
                i === 1 ? "#e0c384" : "#718b77",
                3.4,
              ),
            ),
          ]
        : [
            printedPage(id, 252, 108, 0.9, "form", 7),
            surface(id, "M240 139l9 8 19-17 8 7-24 25-19-15Z", "glass", 0.94),
          ]),
  ];
}
function earthStrip(id: string) {
  return [
    surface(id, "M38 138q140-42 284 0v30H38Z", "glass", 1.19),
    fillPath("M46 139 92 126l32-5 39 4 34 17 28 8-8 17H46Z", "#a4a483", "#698679", 1.02),
    stroke("M53 140q70-24 128-10m48 22q50-11 85-8", "#c0cd9c", 1.25),
  ];
}
export const mediaSystems = {
  detailInformationSample: {
    foot: [
      "Le résultat dépend des messages retenus",
      "Faits, sources et contexte se vérifient",
      "Un volume diffère de son exposition",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [
            ...cards(id, [0, 1, 2], 74, 63),
            stroke("M90 64h-18v71h18", "#b28b59", 2.3),
            label(261, 65, "Échantillon", cold),
          ]
        : s === 1
          ? [
              printedPage(id, 106, 112, 0.94, "news", 3),
              magnifier(id, 158, 95, 0.86),
              printedPage(id, 254, 109, 0.84, "form", 4),
              label(254, 63, "Vérifier", forest),
            ]
          : [
              panel(id, 53, 64, 253, 102, "glass"),
              ...Array.from({ length: 5 }, (_, i) =>
                oval(95 + i * 17, 117, 5, 5, paint(id, "steel"), dark),
              ),
              ...[0, 1, 2].map((i) =>
                oval(243, 118, 14 + i * 7, 12 + i * 6, "none", i ? "#91ab95" : "#976e4a"),
              ),
              label(117, 94, "Messages"),
              label(244, 90, "Exposition", cold),
            ]),
    ],
  },
  detailNewsAvoidance: {
    foot: [
      "Le flux peut répéter certains sujets",
      "On peut filtrer une partie du flux",
      "D’autres nouvelles restent accessibles",
    ],
    draw: (s, id) => [
      telephone(id, 65, 106, 0.81),
      ...cards(id, s === 0 ? [0, 0, 1] : s === 1 ? [0, 1, 2] : [1, 2], 124, 63),
      s === 1 && stroke("M122 82h162", "#a17352", 2.25, "4 3"),
      s === 2 && label(219, 151, "Sujets choisis", forest),
    ],
  },
  newsroomCheck: {
    foot: [
      "Définir précisément ce qui est affirmé",
      "Une source indépendante aide à vérifier",
      "La publication cite ses appuis",
    ],
    draw: (s, id) => [
      ...notes(id, s, "report"),
      label(250, 61, ["Phrase ciblée", "Vérification", "Sources citées"][s]!, forest),
    ],
  },
  editionMediaTrustSurvey: {
    foot: [
      "La question et l’échantillon comptent",
      "Comparer avec la même méthode",
      "Date, formulation et échantillon comptent",
    ],
    draw: (s, id) => [
      ...notes(id, s, "survey"),
      label(250, 61, ["Question", "Réponses", "Méthode"][s]!, cold),
    ],
  },
  protectedSource: {
    foot: [
      "Un témoignage peut ouvrir l’enquête",
      "Des éléments indépendants l’étayent",
      "Le fait établi peut être publié",
    ],
    draw: (s, id) => [
      panel(id, 49, 67, 114, 91, "soot"),
      oval(106, 96, 16, 19, paint(id, "iron"), "#819786"),
      fillPath("M70 148q0-25 18-26h35q16 3 18 26Z", "#657c70", "#9dad91", 1.13),
      printedPage(id, 255, 111, 0.89, s === 2 ? "news" : "form", s + 2),
      s === 0
        ? stroke("M148 103q27-15 62 0", "#859e8a", 1.53, "4 3")
        : s === 1
          ? [magnifier(id, 217, 116, 0.83), label(255, 59, "Documents", forest)]
          : [stroke("M80 147h53", "#9c9e7d", 3), label(255, 63, "Article", cold)],
    ],
  },
  editionOversightPlatform: {
    foot: [
      "Expliquer certaines pratiques",
      "Les services visés évaluent des risques",
      "Les autorités examinent les obligations",
    ],
    draw: (s, id) => [
      screen(id, 106, 109, 1.03),
      ...(s < 2
        ? [
            stroke("M53 86h105m-100 8h75m-71 10h61m-65 8h96m-96 9h77", "#bac99e", 1.75, "5 3"),
            printedPage(id, 260, 116, 0.8, "form", s + 2),
            label(253, 64, s === 0 ? "Pratiques" : "Risques", cold),
          ]
        : [
            printedPage(id, 254, 106, 0.83, "form", 4),
            magnifier(id, 241, 122, 0.83),
            label(254, 63, "Contrôle", forest),
          ]),
    ],
  },
  editionModerationQueue: {
    foot: [
      "Les signalements sont orientés",
      "Le contexte éclaire l’examen",
      "Une décision peut être motivée",
      "Un recours peut demander un réexamen",
    ],
    draw: (s, id) => [
      ...cards(id, [0, 1, 2], 42, 64),
      printedPage(id, 265, 108, 0.81, "form", s + 2),
      s === 0
        ? stream(174, 80, 218, 102, forest)
        : s === 1
          ? magnifier(id, 242, 121, 0.65)
          : s === 2
            ? [stroke("M238 105h56m-53 9h48", heat, 2.2), label(266, 63, "Motifs", cold)]
            : [stream(220, 155, 177, 146, heat), label(266, 63, "Recours", cold)],
    ],
  },
  feedRanking: {
    foot: [
      "Trois publications sont disponibles",
      "L’intérêt pour le musée change l’ordre",
      "Un autre signal fait remonter la forêt",
    ],
    draw: (s, id) => [
      ...cards(id, s === 0 ? [0, 1, 2] : s === 1 ? [1, 0, 2] : [2, 0, 1]),
      telephone(id, 63, 105, 0.81),
      s > 0 && [
        stream(87, 96, 105, 86, s === 1 ? heat : forest),
        label(264, 57, s === 1 ? "Musée" : "Forêt", s === 1 ? heat : forest),
      ],
    ],
  },
  editionRegulatorRoles: {
    foot: [
      "Le suivi porte sur des obligations",
      "Le contrôle peut demander des pièces",
      "La procédure fixe les suites possibles",
    ],
    draw: (s, id) => [
      ...notes(id, s, "institution"),
      label(257, 61, ["Suivi", "Demande", "Procédure"][s]!, forest),
    ],
  },
  detailFeedRanking: {
    foot: [
      "Les contenus suivent d’abord leur date",
      "Les mêmes contenus changent d’ordre",
      "Le système réutilise des signaux",
    ],
    draw: (s, id) => [
      ...cards(id, s === 0 ? [2, 0, 1] : [1, 2, 0], 114),
      s === 0
        ? [
            stroke("M78 65v94", "#869a7d", 1.55),
            ...Array.from({ length: 3 }, (_, i) =>
              oval(78, 78 + i * 32, 4.5, 4.5, paint(id, "copper"), dark),
            ),
            label(70, 58, "Date", cold),
          ]
        : s === 1
          ? [stream(78, 146, 78, 80, forest), label(70, 66, "Rang", cold)]
          : [telephone(id, 62, 109, 0.66), stroke("M90 104q32-14 23-25", "#ac8b56", 1.85, "4 3")],
    ],
  },
  detailAccountCounts: {
    foot: ["Un compte est une unité de mesure", "Une personne, plusieurs comptes"],
    draw: (s, id) => [
      oval(86, 86, 18, 20, paint(id, "copper"), dark),
      surface(id, "M50 148v-15q5-24 22-24h30q20 1 24 24v15Z", "steel", 1.12),
      stroke("M67 145l3-22m28 23v-23", "#c5d1ab", 1.45),
      ...cards(id, s === 0 ? [0] : [0, 1, 2], 174, s === 0 ? 103 : 63),
      stroke(s === 0 ? "M130 111h44" : "M129 112h31V76h14m-14 33h14m-14 1v29h14", "#819e83", 1.95),
      label(86, 169, "Personne", cold),
    ],
  },
  cellhandoff: {
    foot: [
      "Le mobile est relié à une station",
      "Le recouvrement aide le transfert",
      "La deuxième station reprend la liaison",
    ],
    draw: (s, id) => [
      ...earthStrip(id),
      mast(id, 84, 107, 0.8, s !== 2),
      mast(id, 272, 107, 0.8, s !== 0),
      telephone(id, [119, 180, 228][s]!, 131, 0.47),
      duct("M83 156v9h191v-9", forest),
      ...(s === 0
        ? [stream(91, 102, 121, 117, forest), label(134, 59, "Station A", cold)]
        : s === 1
          ? [
              oval(145, 114, 54, 31, "none", "#84a987"),
              oval(219, 114, 54, 31, "none", "#af9b6c"),
              label(180, 65, "Recouvrement", cold),
            ]
          : [stream(265, 102, 226, 121, forest), label(224, 59, "Station B", cold)]),
    ],
  },
  detailRadioCapacity: {
    foot: [
      "Le débit compte les données par durée",
      "Les cellules répartissent les liaisons",
      "La latence mesure un délai de réponse",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [
            mast(id, 82, 113, 0.86, true),
            telephone(id, 272, 113, 0.69),
            ...Array.from({ length: 5 }, (_, i) =>
              block(116 + i * 24, 101, 16, 13, paint(id, i % 2 ? "glass" : "copper"), dark, 2),
            ),
            label(179, 72, "Données / temps", cold),
          ]
        : s === 1
          ? [
              ...earthStrip(id),
              ...[100, 178, 264].map((p, i) => [
                mast(id, p, 114, 0.51, true),
                oval(p, 135, 34, 12, "none", i % 2 ? "#a18052" : "#668d72"),
              ]),
              label(173, 65, "Cellules", cold),
            ]
          : [
              telephone(id, 82, 116, 0.68),
              screen(id, 260, 114, 0.65),
              stream(105, 87, 209, 87, forest),
              stream(215, 137, 112, 137, heat),
              label(173, 122, "Délai", cold),
            ]),
    ],
  },
  detailMobileGenerations: {
    foot: [
      "Voix et SMS passent au numérique",
      "Les données mobiles prennent de la place",
      "Des usages plus riches en données",
      "Les objectifs varient selon les usages",
    ],
    draw: (s, id) => [
      telephone(id, 104, 111, s === 0 ? 1.08 : 0.97, s === 0 ? 0 : 1),
      ...(s === 0
        ? [
            panel(id, 188, 83, 106, 51, "cream"),
            stroke("M202 110q10-11 19 0t19 0 19 0 19 0", "#719277", 1.74),
            label(242, 76, "Voix et SMS", cold),
          ]
        : s === 1
          ? [...cards(id, [0, 1], 177, 75), label(245, 62, "Données")]
          : s === 2
            ? [imagePrint(id, 240, 113, 0.78, 0), label(245, 67, "Images", cold)]
            : [
                mast(id, 226, 107, 0.83, true),
                telephone(id, 287, 127, 0.39),
                label(240, 62, "Usages", cold),
              ]),
    ],
  },
  satrelay: {
    foot: [
      "La station envoie le signal vers l’orbite",
      "Le satellite traite et retransmet",
      "Les antennes de la zone peuvent recevoir",
    ],
    draw: (s, id) => [
      ...earthStrip(id),
      orbitalRelay(id, 175, 81, 0.8),
      dish(id, 89, 130, 0.65),
      dish(id, 249, 135, 0.63),
      s === 0
        ? [stream(99, 121, 151, 90, forest), label(238, 60, "Montée", cold)]
        : s === 1
          ? [stream(184, 90, 240, 119, heat), label(247, 63, "Relais", heat)]
          : [
              dish(id, 289, 147, 0.44),
              stream(179, 90, 284, 132, heat),
              stream(179, 89, 244, 122, heat),
              label(247, 63, "Couverture", cold),
            ],
    ],
  },
  detailHandsetRelay: {
    foot: [
      "Le satellite doit être à portée de liaison",
      "Il relaie au-delà du réseau local",
      "Une station se relie au réseau terrestre",
      "La zone visible se déplace avec l’orbite",
    ],
    draw: (s, id) => [
      ...earthStrip(id),
      orbitalRelay(id, s === 3 ? 244 : 161, 75, 0.72),
      telephone(id, 89, 133, 0.54),
      stream(99, 117, s === 3 ? 206 : 140, 87, forest),
      ...(s > 0 ? [dish(id, 260, 132, 0.72), stream(s === 3 ? 240 : 180, 82, 248, 116, heat)] : []),
      s === 2
        ? [duct("M261 150h52", cold), label(271, 81, "Passerelle", cold)]
        : s === 3
          ? [stroke("M118 80q62-42 147-18", "#879d87", 1.75, "4 3"), label(91, 66, "Orbite", cold)]
          : label(253, 63, s === 0 ? "Téléphone" : "Relais", cold),
    ],
  },
  leoconstellation: {
    foot: [
      "Le satellite défile au-dessus du sol",
      "Chaque satellite couvre une zone à la fois",
      "Les satellites se relaient pour la liaison",
    ],
    draw: (s, id) => [
      ...earthStrip(id),
      stroke("M37 99q122-75 285-32", "#829d8c", 1.73, "4 3"),
      orbitalRelay(id, s === 0 ? 109 : 155, s === 0 ? 78 : 72, 0.61),
      s === 2 && orbitalRelay(id, 263, 66, 0.58),
      dish(id, 168, 136, 0.66),
      s === 0
        ? stream(141, 57, 207, 52, forest)
        : [
            fillPath(
              s === 1 ? "M155 83l-51 73h110Z" : "M263 79l-77 77h118Z",
              "#a1b89164",
              "#799a84",
              1.05,
            ),
            stream(s === 1 ? 156 : 243, 86, 175, 131, forest),
          ],
      label(
        s === 0 ? 267 : 79,
        s === 0 ? 101 : 58,
        s === 0 ? "Déplacement" : s === 1 ? "Empreinte" : "Relais",
        cold,
      ),
    ],
  },
} satisfies Record<string, Study>;
