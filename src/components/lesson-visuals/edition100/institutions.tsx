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
  moved,
  oval,
  prism,
  round,
  sheet,
  stroke,
} from "../detail100/plate";
import { personSide } from "../detail100/vehicle";
import { arch, plate, terminal, tileMap } from "./craft";

function desk(id: string, x: number, y: number) {
  return moved(x, y, [
    prism(id, 0, 32, 104, 11, 11, "earth"),
    prism(id, 9, 47, 10, 35, 7, "earth"),
    prism(id, 88, 47, 10, 35, 7, "earth"),
    terminal(id, 35, 0, 48, 34),
    stroke("M48 38h21", ink, 2),
  ]);
}

export const institutionsPlates = {
  editionParkZoning: plate(
    ["Cœur protégé", "Aire d’adhésion", "Une charte pour l’ensemble"],
    (s, id) => [
      tileMap(id, 38, 86, 269, 118, "plant"),
      filled(
        id,
        "M76 177l19-58 53-18 83 11 38 57-47 20-84 1Z",
        s === 1 ? "earth" : "plant",
        "dots",
      ),
      filled(
        id,
        "M138 166l6-31 34-18 45 14 12 33-59 13Z",
        s === 0 ? "brass" : "plant",
        "engraving",
      ),
      s === 0 && call(181, 74, "Cœur", "M180 80v38"),
      s === 1 && call(273, 73, "Communes", "M263 81l-25 34"),
      s === 2 && [sheet(id, 242, 102, 52, 80, true), label(98, 72, "Charte")],
    ],
  ),
  editionUncertaintyPrecaution: plate(
    ["Repérer un risque plausible", "Apprécier les incertitudes", "Mesures et réévaluation"],
    (s, id) => [
      sheet(id, 56, 89, 113, 117, true),
      tileMap(id, 194, 106, 108, 77, "plant"),
      s === 0 && [round(id, 246, 144, 12, "clay"), call(238, 76, "Signal", "M241 81v49", harm)],
      s === 1 && [
        focus(248, 145, 27),
        stroke("M176 145h34", active, 1.9, "4 4"),
        label(177, 78, "Évaluer"),
      ],
      s === 2 && [
        arrow(233, 202, 166, 202, flow, true),
        label(253, 226, "Suivi"),
        label(108, 75, "Mesure temporaire"),
      ],
    ],
  ),
  editionInternationalCourt: plate(
    ["Compétence sous conditions", "Des personnes jugées", "Coopération des États"],
    (s, id) => [
      oval(86, 145, 45, 43, `url(#${id}-glass)`, flow),
      stroke("M44 145h84m-76-20h68m-68 40h68m-36-62q-33 42 0 84m6-84q32 42 0 84", flow, 1.25),
      arch(id, 250, 194, 1.18, s === 1 ? "brass" : "steel"),
      s === 0 && [arrow(132, 144, 196, 144, flow, true), label(241, 85, "Compétence")],
      s === 1 && [personSide(id, 167, 166, 0, 0.7), label(177, 88, "Personne")],
      s === 2 && [sheet(id, 141, 121, 54, 76, true), arrow(199, 166, 216, 166, active)],
    ],
  ),
  editionPersonalData: plate(
    ["Collecte et finalité", "Conserver pour un usage défini", "Exercer des droits"],
    (s, id) => [
      terminal(id, 44, 86, 84, 118),
      ...[127, 147, 167].map((y) => stroke(`M55 ${y}h59`, flow, 1.6)),
      prism(id, 235, 106, 69, 96, 12, "steel"),
      ...[128, 150, 172].map((y) => [
        stroke(`M243 ${y}h51`, ink, 1.55),
        round(id, 287, y - 4, 2.4, "brass"),
      ]),
      s === 0 && [arrow(134, 127, 230, 127, flow), label(177, 92, "Finalité")],
      s === 1 && [stroke("M140 154h84", active, 1.4, "5 4"), call(180, 88, "Durée", "M180 94v51")],
      s === 2 && [
        sheet(id, 158, 115, 53, 70, true),
        arrow(229, 161, 210, 161, active),
        label(174, 217, "Accès ou correction"),
      ],
    ],
  ),
  editionExpressionBounds: plate(
    ["Exprimer et recevoir", "Des textes fixent des limites", "Apprécier le contexte"],
    (s, id) => [
      personSide(id, 83, 153, 0, 1.02),
      personSide(id, 280, 153, 0, 1.02),
      s === 0 && [
        stroke("M123 95h106v48h-54l-14 14v-14h-38Z", flow, 1.7),
        stroke("M137 109h79m-79 13h56", flow, 1.6),
      ],
      s === 1 && [sheet(id, 145, 92, 72, 100, true), label(180, 219, "Règles applicables")],
      s === 2 && [
        round(id, 183, 143, 26, "glass"),
        stroke("M202 158l24 23", ink, 5),
        label(177, 88, "Contexte"),
      ],
    ],
  ),
  editionIndependentCourt: plate(
    ["Autonomie de la juridiction", "Absence de parti pris", "Garanties de procédure"],
    (s, id) => [
      arch(id, 179, 187, 1.43, s === 0 ? "brass" : "steel"),
      personSide(id, 75, 147, 0, 0.75),
      personSide(id, 285, 147, 0, 0.75),
      s === 0 && [
        stroke("M100 121v74m159-74v74", harm, 1.5, "4 4"),
        label(180, 77, "Indépendance"),
      ],
      s === 1 && [
        arrow(102, 202, 149, 202, flow),
        arrow(258, 202, 211, 202, flow),
        label(180, 77, "Impartialité"),
      ],
      s === 2 && [sheet(id, 151, 148, 55, 66, true), label(180, 77, "Débat équitable")],
    ],
  ),
  editionCourtLevels: plate(
    ["Première instance", "Appel selon les recours", "Contrôle de droit"],
    (s, id) => [
      ...[
        [71, 196],
        [181, 166],
        [286, 134],
      ].map(([x, y], i) => arch(id, x!, y!, 0.84, i === s ? "brass" : "steel")),
      arrow(107, 177, 142, 163, flow, s === 0),
      arrow(216, 142, 249, 130, flow, s < 2),
      label(72, 220, "Jugement"),
      label(182, 194, "Appel"),
      label(275, 158, "Cassation"),
      s === 0 && call(77, 81, "Dossier", "M80 86v43"),
      s === 1 && call(176, 78, "Réexaminer", "M177 85v25"),
      s === 2 && label(274, 74, "Règle de droit"),
    ],
  ),
  editionTwoJurisdictions: plate(
    ["Ordre judiciaire", "Ordre administratif", "Une question de compétence"],
    (s, id) => [
      arch(id, 90, 183, 1.14, s === 0 ? "brass" : "steel"),
      arch(id, 273, 183, 1.14, s === 1 ? "brass" : "steel"),
      sheet(id, 151, 112, 58, 80, true),
      s === 0 && [arrow(148, 155, 136, 155, active), label(88, 215, "Judiciaire")],
      s === 1 && [arrow(211, 155, 232, 155, active), label(268, 215, "Administratif")],
      s === 2 && [stroke("M124 213h112", flow, 1.3, "4 4"), label(176, 88, "Compétence")],
    ],
  ),
  editionEmploymentExchange: plate(
    ["Une prestation de travail", "Rémunération", "Lien de subordination"],
    (s, id) => [
      desk(id, 49, 126),
      sheet(id, 229, 83, 81, 119, true),
      personSide(id, 175, 144, 0, 0.81),
      s === 0 && [arrow(169, 158, 149, 163, flow), label(90, 83, "Activité")],
      s === 1 && [block(229, 169, 70, 21, "#d4b989", active), label(263, 185, "Salaire")],
      s === 2 && [arrow(229, 130, 195, 136, active), label(188, 83, "Organisation")],
    ],
  ),
  editionRemoteWork: plate(
    ["Activité hors des locaux", "Organisation convenue", "Temps et droits"],
    (s, id) => [
      desk(id, 42, 127),
      desk(id, 212, 127),
      stroke("M110 119q66-37 135 0", flow, 1.5, "6 4"),
      s === 0 && [label(86, 90, "Domicile"), label(267, 90, "Entreprise")],
      s === 1 && [sheet(id, 146, 97, 64, 95, true), label(183, 79, "Cadre")],
      s === 2 && [
        round(id, 178, 133, 23, "brass"),
        stroke("M180 117v17l11 6", ink, 2),
        label(179, 87, "Horaires"),
      ],
    ],
  ),
};
