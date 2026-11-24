import {
  active,
  arrow,
  call,
  filled,
  flow,
  focus,
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
import { chartCard, coinPile, ledger, plate, rowTime, terminal } from "./craft";

function parcel(id: string, x: number, y: number, tone: "earth" | "ivory" = "earth") {
  return moved(x, y, [
    prism(id, 0, 0, 88, 68, 25, tone),
    stroke("M8 16h31m-31 6h22m42-32 12 2m-30 4 12 3", ink, 1.15),
    filled(id, "M99-8l9-5v51l-9 4Z", "ivory"),
  ]);
}

export const marketsPlates = {
  editionLoanSchedule: plate(
    ["Capital emprunté", "Remboursement et coût", "Comparer les offres"],
    (s, id) => [
      coinPile(id, 85, 200, s === 0 ? 5 : 3),
      sheet(id, 217, 90, 90, 108, true),
      s === 0 && [arrow(119, 153, 211, 153, active), label(94, 90, "Capital")],
      s === 1 && [rowTime(id, 5, 2, 218), call(205, 73, "Échéances", "M203 80l-22 60")],
      s === 2 && [
        ledger(id, 145, 98, 142, ["Capital", "Intérêts", "Frais"], 2),
        label(79, 83, "TAEG"),
        call(77, 110, "Coût total", "M81 117v40"),
      ],
    ],
  ),
  editionGoodsConformity: plate(
    ["Produit annoncé", "Écart observé", "Solution selon le cadre"],
    (s, id) => [
      parcel(id, 67, 123, "ivory"),
      parcel(id, 214, 124, s === 0 ? "ivory" : "earth"),
      s === 0 && [label(116, 89, "Annonce"), label(260, 89, "Produit")],
      s === 1 && [
        focus(258, 143, 29, harm),
        stroke("M251 132l15 18m0-18-15 18", harm, 2),
        label(175, 89, "Comparer"),
      ],
      s === 2 && [
        sheet(id, 152, 125, 56, 81, true),
        arrow(212, 186, 189, 186, flow),
        label(178, 88, "Garantie"),
      ],
    ],
  ),
  editionOrderReturn: plate(
    ["Commande reçue", "Rétractation éventuelle", "Retour et suites"],
    (s, id) => [
      terminal(id, 48, 81, 73, 125),
      parcel(id, 212, 117),
      s === 0 && [arrow(125, 149, 207, 149, flow), call(176, 82, "Achat", "M177 88v53")],
      s === 1 && [sheet(id, 151, 117, 51, 78, true), label(176, 83, "Déclaration")],
      s === 2 && [
        arrow(217, 150, 132, 150, active),
        rowTime(id, 4, 3, 214),
        label(176, 82, "Retour"),
      ],
    ],
  ),
  editionAdvertisingClaims: plate(
    ["Une affirmation", "Chercher ses preuves", "Effet sur le choix"],
    (s, id) => [
      prism(id, 54, 86, 151, 115, 22, s === 0 ? "brass" : "ivory"),
      filled(id, "M69 121h122v42H69Z", "glass", "dots"),
      stroke("M82 141h96m-91 45h63", flow, 2.1),
      s === 0 && label(129, 113, "Promesse"),
      s === 1 && [
        round(id, 264, 139, 27, "glass"),
        stroke("M283 159l25 23", ink, 7),
        label(256, 89, "Preuve"),
      ],
      s === 2 && [
        personSide(id, 265, 151, 0, 0.85),
        arrow(207, 155, 233, 155, active),
        label(251, 90, "Décision"),
      ],
    ],
  ),
  editionVacationTimeline: plate(
    ["Premiers congés généralisés", "Trois semaines", "Quatre semaines", "Cinq semaines"],
    (s, id) => [
      sheet(id, 121, 67, 113, 115, true),
      ...[0, 1, 2, 3, 4].map((i) =>
        prism(id, 56 + i * 48, 155, 31, 31, 7, i < [2, 3, 4, 5][s]! ? "brass" : "ivory"),
      ),
      rowTime(id, 4, s, 219),
      label(61, 205, "1936"),
      label(140, 205, "1956"),
      label(219, 205, "1969"),
      label(299, 205, "1982"),
    ],
  ),
  editionStrikeDialogue: plate(
    ["Cesser le travail collectivement", "Formuler des revendications", "Discuter d’une issue"],
    (s, id) => [
      prism(id, 56, 83, 245, 129, 15, "ivory"),
      ...[87, 120, 247, 281].map((x, i) => personSide(id, x, 151, i % 2, 0.7)),
      filled(id, "M125 162h116v36H125Z", "earth", "engraving"),
      s === 0 && [stroke("M130 112h105", harm, 2, "4 4"), label(182, 102, "Travail suspendu")],
      s === 1 && [sheet(id, 156, 111, 58, 77, true), label(179, 91, "Revendications")],
      s === 2 && [
        arrow(143, 149, 169, 149, flow),
        arrow(225, 149, 197, 149, flow),
        label(180, 99, "Dialogue"),
      ],
    ],
  ),
  editionBodinPrices: plate(
    ["Comparer une quantité de monnaie", "Observer les prix", "Une explication historique"],
    (s, id) => [
      coinPile(id, 100, 196, s === 0 ? 2 : 5),
      chartCard(id, 195, 102, s === 0 ? [0.28, 0.34, 0.29] : [0.4, 0.53, 0.73], 111, 97, "clay"),
      s === 0 && label(119, 90, "Monnaie"),
      s === 1 && label(253, 86, "Prix"),
      s === 2 && [arrow(135, 148, 185, 148, active, true), label(176, 82, "Lien proposé")],
    ],
  ),
  editionReserveBuffer: plate(
    ["Une réserve disponible", "Absorber un imprévu", "Reconstituer la réserve"],
    (s, id) => [
      filled(id, "M40 107h171v91H40Z", "steel", "engraving"),
      filled(id, "M48 115h151v75H48Z", "graphite"),
      coinPile(id, 103, 181, s === 1 ? 2 : 4),
      coinPile(id, 177, 181, s === 0 ? 3 : 2),
      prism(id, 235, 144, 61, 52, 15, s === 1 ? "clay" : "ivory"),
      s === 0 && call(120, 74, "Réserve", "M120 81l-17 38"),
      s === 1 && [arrow(201, 147, 231, 147, harm), label(265, 120, "Imprévu")],
      s === 2 && [arrow(231, 171, 205, 172, flow), label(252, 87, "Recharger")],
    ],
  ),
  editionBudgetEnvelope: plate(
    ["Revenus disponibles", "Dépenses réparties", "Comparer avec le prévu"],
    (s, id) => [
      ...[42, 144, 246].map((x, i) => [
        filled(id, `M${x} 127h76v65h-76Z`, i === s ? "brass" : "ivory", "dots"),
        stroke(`M${x + 4} 130l33 28 35-28`, ink, 1.5),
        label(x + 38, 219, ["Revenu", "Charges", "Solde"][i]!),
      ]),
      s === 0 && coinPile(id, 81, 127, 3),
      s === 1 && [arrow(120, 160, 139, 160, flow), arrow(223, 160, 244, 160, flow)],
      s === 2 && [
        chartCard(id, 177, 70, [0.76, 0.46], 57, 65, "plant"),
        label(107, 83, "Prévu et réel"),
      ],
    ],
  ),
  editionSportRevenue: plate(
    ["Billetterie et public", "Diffusion", "Partenariats et autres revenus"],
    (s, id) => [
      oval(173, 143, 132, 60, `url(#${id}-steel)`, ink),
      oval(173, 143, 110, 43, `url(#${id}-plant)`, living),
      stroke("M76 141h195m-97-40v84m-80-48h18v13H94m176-13h-19v13h19", "#e4e6d3", 1.3),
      s === 0 && [sheet(id, 207, 111, 67, 37, true), label(172, 88, "Billetterie")],
      s === 1 && [
        terminal(id, 194, 88, 67, 74),
        stroke("M209 128h37", flow, 2),
        label(119, 82, "Diffusion"),
      ],
      s === 2 && [
        prism(id, 207, 106, 65, 41, 9, "brass"),
        call(123, 79, "Partenariats", "M142 84l63 28"),
      ],
    ],
  ),
};
