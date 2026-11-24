import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  focus,
  harm,
  ink,
  label,
  living,
  moved,
  prism,
  round,
  sheet,
  stroke,
} from "../detail100/plate";
import { personSide } from "../detail100/vehicle";
import { chartCard, groups, leaf, plate, rowTime, terminal, vial } from "./craft";

function pagePair(id: string, x = 53, y = 98) {
  return moved(x, y, [
    filled(
      id,
      "M0 113V15q61-17 127 1 58-18 126 0v97q-62-14-126 5-64-17-127-5Z",
      "earth",
      "engraving",
    ),
    filled(id, "M6 105V9q57-14 121 4 63-17 120-4v97q-56-14-120 6-62-18-121-7Z", "ivory"),
    ...[0, 1, 2, 3, 4].map((y) =>
      stroke(`M17 ${29 + y * 15}q42-8 96 5m27-4q52-14 92-8`, "#8c826d", 0.9),
    ),
    stroke("M127 14v94", ink, 1.3),
  ]);
}

export const researchPlates = {
  editionProgramLayers: plate(
    ["Une intention exprimée", "Traduire ou interpréter", "Exécution observable"],
    (s, id) => [
      terminal(id, 47, 85, 87, 122),
      prism(id, 236, 117, 69, 67, 13, "steel"),
      ...[117, 137, 156, 177].map((y, i) => stroke(`M61 ${y}h${49 - (i % 2) * 14}`, flow, 1.55)),
      s === 0 && call(176, 78, "Code source", "M173 85l-49 32"),
      s === 1 && [
        prism(id, 149, 123, 59, 48, 11, "brass"),
        arrow(136, 148, 148, 148, flow),
        arrow(212, 148, 234, 148, flow),
        label(176, 91, "Traduction"),
      ],
      s === 2 && [
        stroke("M249 139h46m-46 12h26", ink, 1.7),
        arrow(156, 159, 230, 159, active),
        label(243, 81, "Exécution"),
      ],
    ],
  ),
  editionBlindTrial: plate(
    ["Des groupes comparables", "Masquer l’attribution", "Comparer après observation"],
    (s, id) => [
      groups(id, 12, s === 2 ? 8 : -1, s !== 0),
      s === 0 && [
        stroke("M176 83v91", flow, 1.5, "5 4"),
        label(177, 211, "Répartition des groupes"),
      ],
      s === 1 && [
        filled(id, "M137 153l13-16h67l13 16v59h-93Z", "steel", "engraving"),
        label(181, 189, "A / B"),
      ],
      s === 2 && [arrow(142, 196, 219, 196, flow), label(178, 224, "Comparer les résultats")],
    ],
  ),
  editionEvidenceComparison: plate(
    ["Observer un cas", "Comparer des groupes", "Synthétiser plusieurs études"],
    (s, id) => [
      s === 0
        ? [
            sheet(id, 108, 90, 134, 119, true),
            round(id, 241, 167, 28, "glass"),
            stroke("M260 185l20 24", ink, 5),
            label(81, 85, "Cas"),
          ]
        : s === 1
          ? [
              chartCard(id, 66, 100, [0.42, 0.51], 92, 104, "plant"),
              chartCard(id, 197, 100, [0.35, 0.49], 92, 104, "brass"),
              label(177, 82, "Comparaison"),
            ]
          : [
              sheet(id, 59, 95, 89, 116),
              sheet(id, 100, 86, 85, 115),
              sheet(id, 147, 93, 82, 114),
              chartCard(id, 234, 95, [0.41, 0.63, 0.54], 83, 100, "glass"),
            ],
    ],
  ),
  editionPlaceboTrial: plate(
    ["Contexte de soin", "Comparer deux groupes", "Plusieurs effets se mêlent"],
    (s, id) => [
      vial(id, 65, 112, "ivory", 0.86),
      vial(id, 244, 112, s === 0 ? "glass" : "ivory", 0.86),
      s === 0 && [personSide(id, 180, 158, 0, 0.7), label(177, 82, "Attentes")],
      s === 1 && [
        label(88, 93, "Groupe A"),
        label(268, 93, "Groupe B"),
        stroke("M128 150h105", flow, 1.45, "4 4"),
      ],
      s === 2 && [
        chartCard(id, 130, 102, [0.35, 0.47, 0.63], 103, 97, "glass"),
        call(181, 76, "Résultats", "M183 82v20"),
      ],
    ],
  ),
  editionWillowMedicine: plate(
    ["Préparations historiques", "Identifier des molécules", "Une substance définie"],
    (s, id) => [
      filled(id, "M43 198l18-85 42-36 19 25-32 31-4 65Z", "earth", "engraving"),
      stroke("M57 190l18-65 30-42m-35 77 17-28m-36 40 14-29", ink, 1.3),
      leaf(id, 124, 80, 0.78),
      leaf(id, 84, 108, 0.62),
      s === 0 && call(249, 100, "Écorce", "M234 106l-123 10"),
      s === 1 && [
        filled(id, "M199 127l30-18 33 18v38l-33 17-30-17Z", "brass", "dots"),
        arrow(124, 150, 191, 150, flow),
        label(232, 203, "Salicylés"),
      ],
      s === 2 && [
        vial(id, 217, 105, "ivory", 1.04),
        call(193, 80, "Aspirine", "M190 86l43 20"),
        arrow(125, 149, 206, 149, active),
      ],
    ],
  ),
  editionPhasesTrial: plate(
    [
      "Premières études humaines",
      "Explorer un effet",
      "Confirmer avec comparaison",
      "Suivre après autorisation",
    ],
    (s, id) => [
      ...[52, 122, 192, 262].map((x, i) => [
        sheet(id, x, 106 - (i % 2) * 14, 49, 81, i === s),
        label(x + 25, 199, ["I", "II", "III", "IV"][i]!),
      ]),
      s < 3 &&
        call(
          179,
          71,
          ["Sécurité", "Effet", "Confirmation"][s]!,
          ["M176 77l-99 31", "M179 77l-32 18", "M179 77l42 27"][s]!,
        ),
      s === 3 && [stroke("M53 210h255", flow, 1.45, "5 4"), label(179, 77, "Suivi en usage réel")],
      rowTime(id, 4, s, 220),
    ],
  ),
  editionLaborWorkshop: plate(
    ["Atelier en mutation", "Actions collectives", "Transcrire des règles"],
    (s, id) => [
      prism(id, 42, 171, 266, 25, 15, "earth"),
      filled(id, "M57 87h148v75H57Z", "steel", "engraving"),
      ...[80, 127, 172].map((x, i) => [
        round(id, x, 127, 16, i === s ? "brass" : "graphite"),
        stroke(`M${x - 9} 127h18m-9-9v18`, "#d4d7cb", 1.5),
      ]),
      personSide(id, 248, 145, s === 1 ? 1 : 0, 0.74),
      s === 0 && call(245, 77, "Usine", "M239 83l-36 33"),
      s === 1 && [personSide(id, 290, 150, 0, 0.67), call(243, 79, "Collectif", "M244 84l10 32")],
      s === 2 && [sheet(id, 224, 72, 81, 106, true), label(178, 222, "Textes sociaux")],
    ],
  ),
  editionEmotionContext: plate(
    ["Percevoir une situation", "Évaluer les options", "Réexaminer selon le contexte"],
    (s, id) => [
      personSide(id, 79, 157, 0, 1.05),
      sheet(id, 232, 92, 76, 108, s === 2),
      s === 0 && [
        round(id, 161, 120, 21, "clay"),
        stroke("M153 122h15", harm, 2),
        arrow(108, 150, 139, 131, flow),
      ],
      s === 1 && [
        block(132, 111, 41, 38, "#d3b989", active),
        block(132, 159, 41, 37, "#b5c5b7", living),
        arrow(177, 128, 223, 142, active),
      ],
      s === 2 && [
        stroke("M221 171q-30 47-114 27", flow, 1.8, "5 4"),
        label(181, 82, "Nouvel indice"),
      ],
    ],
  ),
  editionClaimRepetition: plate(
    ["Une même affirmation", "La familiarité augmente", "Chercher un indice indépendant"],
    (s, id) => [
      ...[55, 143, 231].map((x, i) => [
        sheet(id, x, 87 + (i % 2) * 16, 70, 113, s === 2 && i === 2),
        s !== 0 || i === 0 ? stroke(`M${x + 11} ${136 + (i % 2) * 16}h47`, active, 4) : null,
      ]),
      s === 0 && label(176, 74, "Premier contact"),
      s === 1 && [stroke("M95 218h171", flow, 1.4, "6 4"), label(176, 75, "Répétition")],
      s === 2 && [
        round(id, 264, 158, 24, "glass"),
        stroke("M283 174l17 20", ink, 5),
        label(177, 74, "Vérification"),
      ],
    ],
  ),
  editionSpacedRecall: plate(
    ["Une séance concentrée", "Plusieurs rappels espacés", "Un rappel plus tard"],
    (s, id) => [
      pagePair(id, 49, 81),
      stroke("M60 221h240", flow, 1.45),
      ...[73, 105, 143, 215, 288].map((x, i) =>
        round(
          id,
          x,
          221,
          (s === 0 && i < 3) || (s > 0 && i % 2 === 0) ? 6 : 3,
          (s === 0 && i < 3) || (s > 0 && i % 2 === 0) ? "brass" : "steel",
        ),
      ),
      s === 0 && label(174, 77, "Séance groupée"),
      s === 1 && [arrow(120, 206, 183, 206, flow, true), label(172, 77, "Espacement")],
      s === 2 && [focus(288, 221, 11), call(236, 73, "Rappel", "M242 79l38 124")],
    ],
  ),
};
