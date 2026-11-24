import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  focus,
  graph,
  harm,
  ink,
  label,
  living,
  moved,
  oval,
  prism,
  round,
  sheet,
  stroke,
} from "../detail100/plate";
import { personSide } from "../detail100/vehicle";
import { chartCard, groups, plate, rowTime } from "./craft";

function sceneWindow(id: string, x: number, y: number, tall = false) {
  return moved(x, y, [
    prism(id, 0, 0, 127, tall ? 125 : 102, 11, "earth"),
    block(8, 9, 112, tall ? 109 : 86, `url(#${id}-glass)`, ink, 1),
    filled(id, tall ? "M9 115 56 70l62 45Z" : "M9 94 56 59l62 35Z", "plant", "dots"),
    stroke(tall ? "M62 9v112m-54-60h111" : "M62 9v85M8 48h111", "#e7dbc0", 3),
  ]);
}

const hill = "M31 199l34-24 43-6 28-28 35 13 54-22 60 17 42 46v13H31Z";

export const carePlates = {
  editionDepressionFrames: plate(
    [
      "Plusieurs dimensions ressenties",
      "Des changements qui persistent",
      "Relier les observations",
    ],
    (s, id) => [
      sceneWindow(id, 37, 85, true),
      personSide(id, 213, 147, s === 1 ? 1 : 0, 1.14),
      s === 0 && [
        round(id, 286, 113, 9, "glass"),
        round(id, 296, 145, 7, "brass"),
        call(245, 78, "Activités", "M244 83l-12 33"),
      ],
      s === 1 && [
        round(id, 281, 93, 15, "brass"),
        stroke("M281 83v11l8 3", ink, 1.6),
        label(272, 215, "Durée"),
      ],
      s === 2 && [
        sheet(id, 257, 124, 62, 81, true),
        arrow(236, 156, 255, 158, flow),
        label(262, 81, "Contexte"),
      ],
    ],
  ),
  editionExerciseMood: plate(
    ["Une activité dans son contexte", "Effet ressenti à un moment", "Évolution au fil du temps"],
    (s, id) => [
      filled(id, hill, "plant", "dots"),
      stroke("M35 192q90-39 167-20t117-6", flow, 1.7, "6 4"),
      personSide(id, s === 0 ? 89 : s === 1 ? 157 : 225, 128, s !== 2 ? 1 : 0, 0.86),
      ...[53, 77, 279, 301].map((x) => filled(id, `M${x} 151l10-31 13 30Z`, "plant", "engraving")),
      s === 0 && label(184, 84, "Activité"),
      s === 1 && [round(id, 268, 97, 9, "brass"), call(200, 81, "Ressenti", "M202 87l-36 37")],
      s === 2 && rowTime(id, 4, 2, 219),
    ],
  ),
  editionStressPacing: plate(
    ["Charge et réponse", "Un repère de respiration", "Revenir à la situation"],
    (s, id) => [
      graph(45, 90, 265, 121),
      stroke(
        s === 0
          ? "M48 193q45 8 65-48t39-10 33 11q48-59 115-37"
          : "M48 175q23-51 49-20t52 6 50-7 58 3 48 11",
        s === 0 ? harm : flow,
        2.7,
      ),
      s === 0 && label(127, 81, "Sollicitation"),
      s === 1 && [stroke("M83 171h190", living, 1.2, "5 4"), label(180, 81, "Rythme")],
      s === 2 && [round(id, 228, 147, 6, "brass"), label(198, 81, "Pause et reprise")],
    ],
  ),
  editionTraumaTriggers: plate(
    ["Un rappel suffit parfois", "Une réponse automatique", "Le contexte modifie la réponse"],
    (s, id) => [
      filled(id, "M39 89h281v116H39Z", "ivory", "dots"),
      sceneWindow(id, 49, 102, false),
      personSide(id, 255, 151, s === 1 ? 1 : 0, 0.84),
      s === 0 && [call(214, 80, "Indice", "M208 84l-52 28"), arrow(180, 132, 224, 132, flow, true)],
      s === 1 && [
        stroke("M217 104l9-10m1 19 13-9m-17 63 18 2", harm, 2),
        arrow(199, 133, 234, 143, harm),
      ],
      s === 2 && [block(206, 108, 97, 102, "none", living, 4), label(178, 81, "Lieu et moment")],
    ],
  ),
  editionSleepDefenses: plate(
    ["Temps de sommeil", "Échanges avec l’immunité", "Des effets à plusieurs échelles"],
    (s, id) => [
      prism(id, 53, 172, 251, 26, 12, "steel"),
      filled(id, "M74 163q19-15 58-7l10 15H69Z", "ivory"),
      round(id, 120, 143, 12, "brass"),
      filled(id, "M131 145q48-16 137 2l23 17H130Z", "plant", "engraving"),
      s === 0 && [
        round(id, 243, 92, 16, "brass"),
        stroke("M55 114h127", flow, 1.4, "6 4"),
        label(111, 95, "Sommeil"),
      ],
      s === 1 && [
        arrow(178, 121, 228, 92, flow),
        round(id, 253, 93, 18, "glass"),
        round(id, 254, 93, 7, "steel"),
      ],
      s === 2 && [
        stroke("M74 217h238", lineGreyForCare, 1.6, "4 4"),
        ...Array.from({ length: 6 }, (_, i) =>
          round(id, 82 + i * 42, 217, 5, i === 2 ? "brass" : "steel"),
        ),
      ],
    ],
  ),
  editionScreeningGroups: plate(
    [
      "Population invitée",
      "Résultats du dépistage",
      "Examens complémentaires",
      "Bénéfices et limites",
    ],
    (s, id) => [
      groups(id, 12, s === 0 ? -1 : 4, s >= 1),
      s === 1 && [focus(238, 104, 22), label(169, 203, "Test")],
      s === 2 && [arrow(239, 128, 247, 166, flow), sheet(id, 247, 178, 45, 46, true)],
      s === 3 && [stroke("M94 199h166", active, 1.8, "6 4"), label(179, 89, "Résultats possibles")],
    ],
  ),
  editionLindTrial: plate(
    ["Un contexte maritime", "Comparer des groupes", "Mesurer avec des limites"],
    (s, id) => [
      filled(id, "M33 176q142-15 290 0v38H33Z", "glass", "dots"),
      filled(id, "M54 155h254l-44 48H105Z", "earth", "engraving"),
      stroke("M113 172h155m-30 9H118m54-29V69m-8 85v-25l-26 16", ink, 2.3),
      filled(id, "M177 73l58 69h-58Z", "ivory", "engraving"),
      s === 0 && label(271, 86, "Navire"),
      s === 1 && [
        round(id, 235, 127, 11, "brass"),
        round(id, 262, 126, 11, "brass"),
        label(260, 97, "Agrumes"),
      ],
      s === 2 && [sheet(id, 253, 72, 61, 72, true), label(78, 83, "Résultats")],
    ],
  ),
  editionHandWashingHistory: plate(
    ["Deux services observés", "Une pratique change", "Comparer les résultats"],
    (s, id) => [
      prism(id, 46, 87, 108, 123, 14, "ivory"),
      prism(id, 202, 87, 108, 123, 14, "ivory"),
      ...[71, 226].map((x) => [
        filled(id, `M${x} 133h48v26h-48Z`, "glass", "engraving"),
        stroke(`M${x - 4} 160h56v17m-53-16v16`, ink, 2),
      ]),
      s === 0 && [label(98, 197, "Service A"), label(253, 197, "Service B")],
      s === 1 && [
        oval(171, 201, 23, 11, `url(#${id}-steel)`),
        arrow(172, 134, 173, 177, flow),
        label(173, 76, "Hygiène des mains"),
      ],
      s === 2 && [
        chartCard(id, 73, 106, [0.83, 0.21], 74, 86, "clay"),
        chartCard(id, 225, 106, [0.4, 0.31], 74, 86, "plant"),
      ],
    ],
  ),
  editionActivityBouts: plate(
    ["Une journée en plusieurs moments", "Activités cumulées", "Adapter au contexte"],
    (s, id) => [
      filled(id, hill, "plant", "dots"),
      ...[59, 133, 208, 277].map((x, i) =>
        personSide(id, x, 146 - (i % 2) * 8, s === 0 ? 0 : 1, 0.7),
      ),
      rowTime(id, 4, s === 0 ? 0 : s === 1 ? 2 : 3, 219),
      s === 0 && label(177, 89, "Moments de la journée"),
      s === 1 && [arrow(84, 101, 154, 101, living), arrow(205, 101, 265, 101, living)],
      s === 2 && [focus(275, 137, 27, living), label(175, 89, "Selon les capacités")],
    ],
  ),
};

const lineGreyForCare = "#677170";
