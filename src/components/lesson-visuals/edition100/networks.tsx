import {
  active,
  arrow,
  block,
  cable,
  call,
  cylinder,
  filled,
  flow,
  focus,
  harm,
  ink,
  label,
  prism,
  round,
  sheet,
  stroke,
} from "../detail100/plate";
import { bodywork } from "../detail100/vehicle";
import { arch, chartCard, leaf, plate, terminal, tileMap, vial } from "./craft";

function town(id: string) {
  return [
    tileMap(id, 38, 86, 269, 118, "plant"),
    filled(id, "M41 154h266v23H41Z", "graphite", "engraving"),
    filled(id, "M141 89h25v113h-25Z", "graphite", "engraving"),
    stroke("M45 166h252m-144-75v110", "#eee6d0", 1.3, "6 4"),
    ...[
      [60, 125],
      [91, 126],
      [184, 123],
      [219, 126],
      [254, 121],
      [244, 188],
    ].map(([x, y], i) => prism(id, x!, y!, 22, 18, 8, i % 2 ? "earth" : "ivory")),
  ];
}

export const networkPlates = {
  editionEmissionsTest: plate(
    ["Un cycle de mesure", "Distinguer les polluants", "Vérifier la conformité"],
    (s, id) => [
      bodywork(id, 47, 83, 0.92, false, false),
      prism(id, 46, 194, 249, 13, 12, "graphite"),
      s === 0 && [
        round(id, 101, 196, 10, "steel"),
        round(id, 225, 196, 10, "steel"),
        label(177, 77, "Cycle d’essai"),
      ],
      s === 1 && [
        cable("M57 170q-26 5-18 25h36", flow, 5),
        call(225, 74, "Particules et gaz", "M213 79l-42 96"),
      ],
      s === 2 && [sheet(id, 228, 70, 72, 102, true), label(183, 225, "Exigences applicables")],
    ],
  ),
  editionRoadZone: plate(
    ["Lire le périmètre", "Relier restriction et véhicule", "Vérifier localement"],
    (s, id) => [
      ...town(id),
      <path
        key="zone-perimeter"
        d="M177 101h104l15 30v54l-40 11h-79Z"
        fill={s === 1 ? "#ae7037" : "#386272"}
        opacity={0.25}
      />,
      stroke("M177 101h104l15 30v54l-40 11h-79Z", harm, 1.8, "5 4"),
      s === 0 && call(180, 74, "Périmètre", "M178 81l31 20", harm),
      s === 1 && [bodywork(id, 58, 143, 0.4), label(207, 223, "Accès réglementé")],
      s === 2 && [sheet(id, 64, 108, 57, 79, true), label(211, 224, "Règles locales")],
    ],
  ),
  editionFuelOrigins: plate(
    ["Matières d’origine biologique", "Voie de synthèse", "Regarder tout le cycle"],
    (s, id) => [
      s === 0
        ? [leaf(id, 88, 149, 1.27), leaf(id, 108, 173, 0.61), label(97, 89, "Biomasse")]
        : [
            cylinder(id, 59, 103, 50, 82, "steel"),
            cylinder(id, 125, 124, 39, 62, "glass"),
            label(111, 79, s === 1 ? "Carbone et H₂" : "Énergie"),
          ],
      vial(id, 254, 110, "brass", 0.9),
      s !== 2
        ? arrow(167, 152, 247, 152, flow)
        : [arrow(165, 178, 250, 176, active), arrow(237, 118, 169, 116, flow, true)],
      s !== 0 && label(267, 87, "Carburant"),
    ],
  ),
  editionOilToFuel: plate(
    ["Collecter l’huile usagée", "Conversion en installation", "Contrôler le produit"],
    (s, id) => [
      cylinder(id, 46, 114, 64, 77, "brass"),
      cylinder(id, 149, 109, 66, 79, s === 1 ? "brass" : "steel"),
      vial(id, 257, 119, "glass", 0.77),
      ...[54, 157].map((x) => stroke(`M${x} 135h49m-49 37h49`, ink, 1.2)),
      s === 0 && [call(88, 86, "Collecte", "M85 91v17"), arrow(112, 164, 143, 163, flow)],
      s === 1 && [cable("M109 138h34m73 1h37", flow, 6), label(173, 84, "Conversion")],
      s === 2 && [arrow(221, 162, 251, 161, flow), call(264, 88, "Qualité", "M263 94l13 22")],
    ],
  ),
  editionRobotaxiZone: plate(
    ["Un domaine d’exploitation", "Observer les limites", "Suivi du service"],
    (s, id) => [
      ...town(id),
      bodywork(id, 62, 132, 0.46),
      <path key="service-area" d="M184 99h113v91H184Z" fill="#326e74" opacity={0.28} />,
      stroke("M184 99h113v91H184Z", flow, 1.8, "6 4"),
      stroke("M187 165h105m-54-42v57", "#e7f2e3", 1.55, "4 4"),
      s === 0 && call(211, 73, "Zone desservie", "M214 79v18"),
      s === 1 && [
        arrow(148, 162, 178, 162, harm),
        stroke("M183 150v24", harm, 2),
        label(181, 225, "Limite du domaine"),
      ],
      s === 2 && [terminal(id, 225, 110, 52, 75), label(202, 225, "Supervision")],
    ],
  ),
  editionCarDataRoute: plate(
    ["Des capteurs dans la voiture", "Transfert possible", "Conservation et droits"],
    (s, id) => [
      bodywork(id, 38, 114, 0.77, false, true),
      terminal(id, 261, 90, 58, 104),
      ...[
        [80, 159],
        [137, 143],
        [196, 158],
      ].map(([x, y]) => round(id, x!, y!, 5, s === 0 ? "brass" : "steel")),
      s === 0 && call(137, 82, "Mesures", "M139 89l-1 48"),
      s === 1 && [arrow(220, 154, 253, 132, flow), label(229, 78, "Partage")],
      s === 2 && [sheet(id, 214, 177, 49, 54, true), label(181, 81, "Données et finalité")],
    ],
  ),
  editionMediaTrustSurvey: plate(
    ["Question et échantillon", "Comparer les réponses", "Même contexte de mesure"],
    (s, id) => [
      sheet(id, 53, 81, 90, 124, true),
      chartCard(id, 186, 96, s === 0 ? [0.35, 0.35, 0.35] : [0.58, 0.44, 0.28], 118, 107, "plant"),
      s === 0 && label(257, 80, "Question posée"),
      s === 1 && [arrow(143, 141, 180, 141, flow), label(244, 80, "Réponses")],
      s === 2 && [
        stroke("M193 216h103m-104-6v10m104-10v10", active, 1.3),
        label(186, 78, "Comparabilité"),
      ],
    ],
  ),
  editionOversightPlatform: plate(
    ["Obligations de transparence", "Risques systémiques", "Contrôles prévus"],
    (s, id) => [
      terminal(id, 52, 85, 87, 121),
      arch(id, 266, 205, 1.07, s === 2 ? "brass" : "steel"),
      sheet(id, 157, 99, 59, 88, s > 0),
      s === 0 && [arrow(138, 138, 153, 138, flow), label(176, 79, "Information")],
      s === 1 && [focus(185, 142, 24, harm), label(177, 81, "Évaluation")],
      s === 2 && [arrow(216, 161, 230, 161, active), label(177, 80, "Contrôle")],
    ],
  ),
  editionModerationQueue: plate(
    [
      "Trier les signalements",
      "Appliquer des règles",
      "Expliquer la décision",
      "Traiter un recours",
    ],
    (s, id) => [
      ...[
        [57, 112],
        [143, 101],
        [230, 114],
      ].map(([x, y], i) => [
        sheet(id, x!, y!, 68, 89, s === i),
        i === s && block(x! + 11, y! + 34, 43, 17, "#d4b989", active),
      ]),
      s < 2 && arrow(128, 156, 141, 156, flow),
      s === 0 && label(178, 81, "Signalement"),
      s === 1 && label(178, 81, "Examen du contenu"),
      s === 2 && [arrow(215, 155, 227, 155, flow), label(178, 81, "Motif communiqué")],
      s === 3 && [
        stroke("M262 209q-63 25-128-7", active, 2, "5 4"),
        arrow(143, 208, 128, 201, active),
        label(176, 81, "Réexamen"),
      ],
    ],
  ),
  editionRegulatorRoles: plate(
    ["Observer un système", "Demander des comptes", "Agir dans un cadre défini"],
    (s, id) => [
      terminal(id, 48, 96, 79, 107),
      arch(id, 257, 200, 1.1, s === 2 ? "brass" : "steel"),
      ...[128, 150, 173].map((y) => stroke(`M59 ${y}h56`, flow, 1.45)),
      s === 0 && [
        round(id, 177, 144, 24, "glass"),
        stroke("M193 159l22 18", ink, 5),
        label(182, 82, "Observation"),
      ],
      s === 1 && [
        sheet(id, 154, 103, 58, 93, true),
        arrow(135, 148, 151, 148, flow),
        label(177, 82, "Transparence"),
      ],
      s === 2 && [stroke("M136 152h68", active, 1.5, "5 4"), label(173, 82, "Compétence")],
    ],
  ),
};
