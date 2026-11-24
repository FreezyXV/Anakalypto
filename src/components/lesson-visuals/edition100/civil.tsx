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
import { arch, coinPile, ledger, plate } from "./craft";

function keyShape(id: string, x: number, y: number, tone: "steel" | "brass" = "brass") {
  return moved(x, y, [
    filled(
      id,
      "M-36 7q-20-10-10-29 12-15 28-4l11 12h72v21H50v-7H35v7H12v-8H-9q-13 18-27 8Z",
      tone,
      "engraving",
    ),
    oval(-30, -10, 8, 7, "#efe8d4", ink),
    stroke("M-3-7h53", ink, 1.3),
  ]);
}

function tenancy(id: string) {
  return [
    prism(id, 65, 112, 154, 84, 29, "ivory"),
    filled(id, "M57 115l90-55 82 54ZM147 60l26-14 84 54-27 14Z", "clay", "engraving"),
    block(93, 129, 42, 37, "#b7c8c0", ink, 1),
    block(165, 141, 27, 54, "#a28b64", ink, 1),
    stroke("M113 131v32m-19-16h38m-62 45h142", ink, 1.3),
  ];
}

export const civilPlates = {
  editionRentedRooms: plate(
    ["Logement et cadre écrit", "Usage et paiement", "Constater l’état"],
    (s, id) => [
      tenancy(id),
      sheet(id, 239, 100, 77, 105, true),
      s === 0 && [keyShape(id, 131, 207), call(278, 70, "Bail", "M278 76v25")],
      s === 1 && [
        coinPile(id, 276, 196, 3),
        arrow(212, 177, 243, 177, active),
        label(127, 221, "Occupation"),
      ],
      s === 2 && [focus(114, 147, 29, flow), call(273, 74, "État des lieux", "M272 81v19")],
    ],
  ),
  editionContractTerms: plate(
    ["Accord libre et éclairé", "Capacité de contracter", "Contenu défini et licite"],
    (s, id) => [
      ledger(id, 101, 83, 159, ["Consentement", "Capacité", "Contenu"], s),
      ...[63, 286].map((x, i) => [
        round(id, x, 164, 9, i === s ? "brass" : "steel"),
        stroke(`M${x - 13} 195q3-25 26 0`, ink, 2),
      ]),
      s === 0 && arrow(74, 146, 101, 138, flow),
      s === 1 && focus(285, 161, 19),
      s === 2 && call(286, 75, "Clause", "M283 82l-33 86"),
    ],
  ),
  editionHoldingTitle: plate(["Usage observable", "Droit de propriété"], (s, id) => [
    keyShape(id, 96, 142, s === 0 ? "brass" : "steel"),
    sheet(id, 195, 83, 112, 126, s === 1),
    s === 0 && call(113, 81, "Possession", "M107 87l-7 33"),
    s === 1 && [call(267, 65, "Titre", "M265 70v13"), arrow(164, 139, 193, 142, active, true)],
  ]),
  editionSharedRisk: plate(
    ["Une prime finance la couverture", "Un événement survient", "Vérifier le contrat"],
    (s, id) => [
      sheet(id, 62, 81, 105, 126, true),
      coinPile(id, 95, 193, s === 0 ? 4 : 2),
      prism(id, 209, 127, 81, 71, 17, "earth"),
      filled(id, "M198 134l52-40 48 40Z", "clay", "engraving"),
      s === 0 && [arrow(165, 145, 204, 145, flow), label(251, 77, "Risque couvert")],
      s === 1 && [
        stroke("M246 124l13 17-11 13 13 15", harm, 2.4),
        call(272, 80, "Sinistre", "M273 85v24", harm),
      ],
      s === 2 && [round(id, 219, 179, 9, "brass"), call(113, 66, "Conditions", "M113 72v23")],
    ],
  ),
  editionLiabilityChain: plate(["Un fait", "Un dommage", "Un lien à établir"], (s, id) => [
    filled(id, "M38 182h283v32H38Z", "earth", "engraving"),
    filled(id, "M57 143l47-33 47 36-49 37Z", s === 0 ? "brass" : "steel", "dots"),
    filled(id, "M222 151l29-30 47 17-10 42h-66Z", s > 0 ? "clay" : "steel", "engraving"),
    s === 0 && call(102, 80, "Fait", "M104 85v25"),
    s === 1 && [
      stroke("M270 133l-11 11 13 8-6 13", harm, 2.5),
      call(260, 79, "Dommage", "M262 85v43", harm),
    ],
    s === 2 && [arrow(157, 146, 216, 146, active, true), label(179, 103, "Lien")],
  ]),
  editionLegalAccess: plate(
    ["Identifier le besoin", "Examiner l’éligibilité", "Accompagner la procédure"],
    (s, id) => [
      arch(id, 255, 194, 1.25, s === 2 ? "brass" : "steel"),
      sheet(id, 57, 90, 105, 112, s !== 0),
      s === 0 && call(82, 73, "Dossier", "M85 79l-9 12"),
      s === 1 && [focus(108, 150, 29), label(252, 90, "Conditions")],
      s === 2 && [arrow(161, 170, 205, 170, flow), label(89, 224, "Aide possible")],
    ],
  ),
  editionMediationRoom: plate(
    ["Un tiers facilite l’accord", "Un tiers tranche le conflit"],
    (s, id) => [
      oval(181, 156, 117, 43, `url(#${id}-earth)`, ink),
      oval(181, 153, 105, 32, "none", "#c6b087"),
      personSide(id, 78, 115, 0, 0.7),
      personSide(id, 281, 115, 0, 0.7),
      personSide(id, 177, 107, 0, 0.75),
      s === 0 && [
        arrow(131, 156, 160, 146, flow),
        arrow(230, 156, 197, 146, flow),
        label(176, 216, "Accord éventuel"),
      ],
      s === 1 && [
        sheet(id, 160, 128, 40, 44, true),
        arrow(181, 174, 181, 198, active),
        label(181, 222, "Décision"),
      ],
    ],
  ),
  editionProofBurden: plate(
    ["Accusation à démontrer", "Examiner des éléments", "Décision motivée"],
    (s, id) => [
      stroke("M180 98v98m-29 0h59", ink, 4),
      round(id, 180, 99, 8, "brass"),
      stroke("M80 119l100-20 100 20m-200 0-22 52m22-52 22 52m178-52-22 52m22-52 22 52", ink, 1.75),
      filled(id, "M53 170h54q-27 26-54 0Zm200 0h54q-27 26-54 0Z", "brass", "engraving"),
      s === 0 && label(178, 81, "Charge de la preuve"),
      s === 1 && [sheet(id, 260, 131, 37, 43), label(180, 82, "Débat contradictoire")],
      s === 2 && [arch(id, 181, 215, 0.54, "steel"), label(177, 77, "Décision")],
    ],
  ),
  editionConstitutionMap: plate(
    ["Une règle de référence", "Institutions et compétences", "Organiser leurs rapports"],
    (s, id) => [
      sheet(id, 134, 67, 90, 120, true),
      ...[63, 180, 293].map((x, i) => arch(id, x, 222, 0.76, s === i ? "brass" : "steel")),
      s === 0 && call(72, 79, "Texte", "M82 84l51 18"),
      s === 1 && [arrow(155, 146, 82, 156, flow), arrow(215, 145, 277, 156, flow)],
      s === 2 && [
        stroke("M96 204h46m74 0h49", active, 1.6, "4 4"),
        call(278, 75, "Pouvoirs", "M272 81l-51 49"),
      ],
    ],
  ),
  editionDeclarationRights: plate(
    ["Dignité commune", "Libertés reconnues", "Principe d’universalité"],
    (s, id) => [
      sheet(id, 129, 78, 100, 124, true),
      ...[63, 103, 257, 298].map((x, i) => personSide(id, x, 161, i % 2, 0.66)),
      s === 0 && call(177, 70, "Dignité", "M178 74v26"),
      s === 1 && [
        arrow(133, 157, 107, 151, flow),
        arrow(227, 157, 253, 151, flow),
        label(180, 219, "Libertés"),
      ],
      s === 2 && [stroke("M51 218h257", active, 1.4, "5 4"), label(178, 72, "Toute personne")],
    ],
  ),
};
