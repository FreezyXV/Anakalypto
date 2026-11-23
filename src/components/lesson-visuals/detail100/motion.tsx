import {
  active,
  arrow,
  block,
  cable,
  call,
  cog,
  filled,
  fillPath,
  flow,
  focus,
  harm,
  ink,
  label,
  layers,
  lineGrey,
  living,
  moved,
  oval,
  prism,
  round,
  shadow,
  sheet,
  stroke,
} from "./plate";
import { bodywork, cabin, cabinRestraint, personSide, roadway } from "./vehicle";

function motorCross(id: string, x: number, y: number, lit: boolean) {
  return moved(x, y, [
    filled(id, "M0 22 17 4h59l16 16v68H5Z", "steel", "engraving"),
    ...[20, 50].map((cx) => [
      block(cx, 23, 22, 44, lit ? "#d4b28b" : "#c4cbbe", ink, 3),
      filled(id, `M${cx + 2} 46h18v10h-18Z`, "graphite"),
      stroke(`M${cx + 11} 57v18l12 6`, ink, 2.4),
    ]),
    cog(id, 81, 69, 13),
    stroke("M8 16h52m-49 61h55", "#e2ddc7", 1.7),
  ]);
}

const shoe =
  "M45 180q16-10 30-28l38-43q13-18 25-2l18 37q17 12 55 18l63 11q30 5 31 34l-19 18H58q-20-10-13-45Z";

export const motionPlates = {
  detailThermalChain: (s: number, id: string) =>
    layers([
      bodywork(id, 43, 86, 1.04, false, true),
      motorCross(id, 214, 129, s === 0),
      s === 0 && call(269, 77, "Moteur", "M264 83l-12 44"),
      s === 1 && [
        cable("M219 194H120", flow, 9),
        arrow(212, 194, 127, 194, active),
        label(178, 245, "Transmission"),
      ],
      s === 2 && [
        focus(263, 190, 34),
        arrow(269, 210, 302, 210, active),
        label(175, 245, "Effort à la roue"),
      ],
      s === 3 && [
        cable("M221 155q-41 8-77-20l-28-27", flow, 7),
        cable("M234 206q-34 25-158 23", lineGrey, 7),
        label(111, 77, "Refroidissement"),
        label(125, 251, "Échappement"),
      ],
    ]),
  detailDrivingAssistScope: (s: number, id: string) =>
    layers([
      roadway(),
      bodywork(id, 47, 105, 0.72),
      fillPath("M238 154l81-39v78Z", s === 2 ? "#e3ceae" : "#d5e0dc", flow, 1),
      stroke("M241 155l68-17m-71 17 68 20", flow, 1.2, "5 4"),
      personSide(id, 308, s === 2 ? 111 : 140, s === 2 ? 1 : 0, 0.8),
      s === 0 && call(272, 84, "Champ observé", "M271 90v46"),
      s === 1 && [arrow(234, 197, 173, 197, harm), label(174, 245, "Freinage assisté")],
      s === 2 && [prism(id, 278, 117, 25, 90, 8, "graphite"), label(177, 247, "Obstacle masquant")],
    ]),
  detailDrivingRoles: (s: number, id: string) =>
    layers([
      cabin(id, 49, 74, 0),
      ...[0, 1, 2, 3, 4, 5].map((i) => [
        block(45 + i * 46, 226, 39, 27, i === [0, 2, 3, 4][s] ? "#b9996b" : "#e3dfce", lineGrey, 3),
        label(63 + i * 46, 246, String(i)),
      ]),
      s === 0 && call(142, 66, "Conducteur", "M153 75l34 45"),
      s === 1 && call(270, 66, "Assistance", "M267 72l-28 68"),
      s === 2 && [
        arrow(239, 135, 202, 130, active, true),
        call(159, 64, "Reprise", "M161 72l27 46"),
      ],
      s === 3 && [
        block(216, 112, 65, 56, "none", active, 3),
        call(257, 66, "Zone définie", "M250 72v38"),
      ],
    ]),
  detailDeformingBodywork: (s: number, id: string) =>
    layers([
      s === 3
        ? cabinRestraint(id)
        : [cabin(id, 38, 78, 1), filled(id, "M307 77h24v150h-24Z", "graphite", "engraving")],
      s === 0 && [arrow(232, 75, 288, 75, active), label(94, 247, "Avant le choc")],
      s === 1 && [
        filled(id, "M266 171l14-10-2 17 15-3-7 21 21-4v18h-46Z", "clay", "engraving"),
        call(264, 69, "Zone plissée", "M260 75l21 112", harm),
      ],
      s === 2 && [
        stroke("M91 166l32-56q8-11 20-11h83q17 0 25 27l19 43v33H82Z", living, 2.6, "5 3"),
        label(172, 246, "Cellule de survie"),
      ],
      s === 3 && [
        call(270, 73, "Airbag", "M261 78l-22 23"),
        call(117, 244, "Ceinture", "M120 226l25-42"),
      ],
    ]),
  detailCrashLab: (s: number, id: string) =>
    layers([
      roadway(31, 201, 294),
      s < 2
        ? [
            bodywork(id, 46, 99, 0.9, false, s === 1),
            prism(id, 291, 106, 22, 99, 9, "ivory"),
            stroke("M74 89h211", lineGrey, 1.1, "4 3"),
          ]
        : [sheet(id, 58, 79, 99, 126, true), sheet(id, 202, 83, 98, 126, false)],
      s === 0 && [arrow(222, 87, 281, 87), label(156, 247, "Choc de référence")],
      s === 1 && [focus(165, 141, 23, harm), call(93, 78, "Capteurs", "M97 84l58 46")],
      s === 2 && [stroke("M170 125h25m-13-8v16", active, 2), label(178, 247, "Évaluation globale")],
    ]),
  detailRoadUsers: (s: number, id: string) =>
    layers([
      roadway(),
      bodywork(id, s === 1 ? 52 : 33, 118, 0.69, false),
      personSide(id, 268, 155, s === 1 ? 1 : 0, 0.9),
      s === 0 && [arrow(184, 198, 251, 198, harm), call(191, 88, "Vitesse", "M174 95l20 36")],
      s === 1 && [focus(210, 167, 22), call(237, 90, "Face avant", "M238 96l-28 49")],
      s === 2 && [
        filled(id, "M231 196h76l18 8H218Z", "ivory"),
        stroke("M234 210h71", ink, 1.7, "7 5"),
        call(228, 87, "Traversée", "M226 92l28 99"),
      ],
    ]),
  detailWearPaths: (s: number, id: string) =>
    layers([
      bodywork(id, 37, 93, 1, false, true),
      s === 0 && [
        focus(243, 194, 30),
        focus(95, 194, 30),
        call(180, 74, "Frottements", "M181 81l48 88"),
      ],
      s === 1 && [
        focus(177, 184, 30, harm),
        call(178, 74, "Corrosion", "M178 81v89", harm),
        ...Array.from({ length: 9 }, (_, i) =>
          round(id, 155 + i * 5, 178 + (i % 3) * 5, 2, "clay"),
        ),
      ],
      s === 2 && [sheet(id, 242, 67, 75, 102, true), label(171, 247, "Historique d’entretien")],
    ]),
  detailSwimmingDrag: (s: number, id: string) =>
    layers([
      filled(id, "M26 143q29-8 59 0t59 0 59 0 59 0 72 0v86H26Z", "glass", "dots"),
      shadow(id, 166, 196, 129, 20),
      round(id, 246, s === 1 ? 135 : 145, 13, "brass"),
      filled(
        id,
        s === 0
          ? "M79 164q34-4 77-18l66-2 8 20-98 13-65 3Z"
          : "M64 150q60-15 119-6l45 2q-14 17-44 20l-106 1Z",
        "plant",
        "engraving",
      ),
      stroke(
        s === 0 ? "M187 156l30 19 39-2m-90-12-52 25" : "M197 157l32-16 51-1m-86 12 36 15 45-5",
        ink,
        3.8,
      ),
      s === 0 && call(94, 92, "Flottaison", "M104 99l53 47"),
      s === 1 && [arrow(245, 126, 262, 102, flow), call(151, 88, "Respiration", "M152 95l79 36")],
      s === 2 && [
        stroke("M51 120h253m-251 65h240m-184 16h147", flow, 1.5, "6 4"),
        label(178, 250, "Corps dans l’axe"),
      ],
    ]),
  detailRopeStretch: (s: number, id: string) =>
    layers([
      filled(id, "M221 60h105v166H194l20-27-12-31 16-32-11-34Z", "earth", "engraving"),
      stroke("M234 78l51 24-19 43 23 32m-70 14 29-11 26 26m-47-87 55 8", lineGrey, 1.5),
      oval(217, 85, 6, 9, "none", ink),
      cable(s === 0 ? "M89 196q49-57 128-111L177 122" : "M83 196q61-55 134-111l-51 88", active, 6),
      personSide(id, 83, 187, 0, 0.7),
      personSide(id, s === 0 ? 177 : 165, s === 0 ? 130 : 175, 1, 0.84),
      s === 0 && call(132, 70, "Corde tendue", "M133 77l42 35"),
      s === 1 && [
        stroke("M136 125v47m-6-47h12m-12 47h12", flow, 1.8),
        label(88, 113, "Allongement"),
      ],
    ]),
  detailPlateShoe: (s: number, id: string) =>
    layers([
      shadow(id, 175, 226, 144, 18),
      filled(id, shoe, "ivory", "engraving"),
      filled(
        id,
        "M43 198q25 12 61 4l87-10q38-2 107 4l8 14-18 15H57Z",
        s === 0 ? "brass" : "plant",
        "dots",
      ),
      stroke(
        "M74 181l53-53q6-8 12 3l14 37 56 10m-111-21 32 10m-21-22 30 9m-17-20 22 9M65 220h217",
        lineGrey,
        1.6,
      ),
      s === 0 && call(198, 88, "Mousse", "M198 94l22 102"),
      s > 0 && [
        stroke("M53 210q69 10 119-5 34-11 120 0", ink, 4),
        call(201, 89, s === 1 ? "Plaque rigide" : "Courbure", "M205 94l31 106"),
      ],
      s === 2 && arrow(272, 178, 299, 159, active),
    ]),
};
