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
import { personSide } from "./vehicle";

function institution(
  id: string,
  x: number,
  y: number,
  n: number,
  tone: "steel" | "brass" = "steel",
) {
  return moved(x, y, [
    filled(id, "M-36 0h72v-7h-72Z", tone),
    filled(id, "M-41-57 0-84l41 27Z", tone, "engraving"),
    filled(id, "M-34-56h68v49h-68Z", "ivory"),
    ...[-24, -8, 8, 24].map((cx) => filled(id, `M${cx - 4} -54h8v41h-8Z`, tone, "engraving")),
    ...Array.from({ length: n }, (_, i) => stroke(`M-37 ${-2 - i * 3}h74`, ink, 0.8)),
  ]);
}
function lensRock(id: string, x: number, y: number, variant = 0) {
  return moved(x, y, [
    shadow(id, 0, 55, 66, 15),
    filled(
      id,
      variant === 0
        ? "M-57 10q8-46 57-59 31-4 49 24 22 28 0 59L3 51-40 40Z"
        : variant === 1
          ? "M-55 22l15-46 42-22 49 14 15 38-41 37-54 3Z"
          : "M-16-55l41 38 24 28-13 39-48 12-32-37 16-55Z",
      "earth",
      "engraving",
    ),
    filled(
      id,
      variant === 0
        ? "M-48 13l25-36 38 15L1 29-34 34Z"
        : variant === 1
          ? "M-40 18l16-40 41-13 31 16-24 34-48 19Z"
          : "M-13-43l35 47 10 24-17 19-33-2-12-27Z",
      "brass",
      "dots",
    ),
    stroke("M-30-10l20 9 23 5 17 21m-15-35-7 24-15 17", lineGrey, 1.3),
  ]);
}

export const systemsPlates = {
  detailNormReview: (s: number, id: string) =>
    layers([
      ...["Constitution", "Traités", "Lois", "Règlements"].map((name, i) => [
        prism(id, 105 - i * 18, 91 + i * 39, 132 + i * 36, 22, 14, s === i ? "brass" : "steel"),
        label(171, 108 + i * 39, name),
      ]),
      s === 1 && arrow(290, 179, 267, 143, active),
      s === 2 && [sheet(id, 255, 67, 62, 69, true), arrow(274, 139, 263, 163, flow)],
      s === 0 && call(171, 68, "Norme supérieure", "M173 73v9"),
    ]),
  detailSeparateInstitutions: (s: number, id: string) =>
    layers([
      ...[78, 180, 283].map((x, i) => institution(id, x, 185, i + 1, i === s ? "brass" : "steel")),
      label(77, 214, "Voter"),
      label(180, 214, "Exécuter"),
      label(282, 214, "Juger"),
      s === 0 && [sheet(id, 42, 72, 37, 44), arrow(119, 164, 132, 164, active)],
      s === 1 && [round(id, 178, 78, 8, "brass"), arrow(229, 161, 242, 161, active)],
      s === 2 && [
        round(id, 281, 75, 8, "brass"),
        stroke("M52 238h252m-176-6v10m100-10v10", flow, 1.35),
      ],
    ]),
  detailCourtroomRoles: (s: number, id: string) =>
    layers([
      filled(id, "M31 83h299v133H31Z", "ivory", "engraving"),
      stroke("M52 94h258m-259 24h260m-259 20h259", lineGrey, 1.05),
      ...[
        [93, 157],
        [180, 124],
        [267, 157],
      ].map(([x, y], i) => personSide(id, x!, y!, 0, i === s ? 0.76 : 0.64)),
      prism(id, 124, 145, 111, 27, 17, s === 1 ? "brass" : "earth"),
      prism(id, 57, 182, 72, 17, 13, s === 0 ? "brass" : "earth"),
      prism(id, 228, 182, 72, 17, 13, s === 2 ? "brass" : "earth"),
      s === 3 && sheet(id, 291, 123, 28, 44, true),
      label(
        177,
        247,
        ["Accusation publique", "Décision du juge", "Défense d’une partie", "Greffe et audience"][
          s
        ]!,
      ),
    ]),
  detailPayslipFlow: (s: number, id: string) =>
    layers([
      sheet(id, 53, 75, 104, 144, true),
      sheet(id, 205, 85, 94, 132, false),
      s === 0 && [block(64, 112, 65, 21, "#ccb288", active, 2), label(105, 248, "Salaire brut")],
      s === 1 && [stroke("M176 136h20", harm, 2.8), label(186, 248, "Cotisations")],
      s === 2 && [
        block(215, 138, 69, 20, "#c3d0bb", living, 2),
        label(180, 248, "Net avant impôt"),
      ],
      s === 3 && [block(213, 190, 69, 19, "#c7ab7b", active, 2), label(179, 248, "Net versé")],
    ]),
  detailFreeFallGrid: (s: number, id: string) =>
    layers([
      ...Array.from({ length: 6 }, (_, i) =>
        stroke(
          s === 0 ? `M35 ${92 + i * 23}h286` : `M35 ${75 + i * 23}q61-17 116 6t76 21q50 7 94-27`,
          flow,
          1.15,
        ),
      ),
      ...Array.from({ length: 7 }, (_, i) =>
        stroke(
          s === 0 ? `M${44 + i * 45} 78v146` : `M${44 + i * 45} 77q-12 44 14 77t-14 68`,
          flow,
          1.15,
        ),
      ),
      round(id, 201, 158, 24, "steel"),
      s === 0 && [arrow(128, 108, 175, 143, active), label(173, 249, "Attraction newtonienne")],
      s === 1 && [
        stroke("M47 89q74-20 140 24t130-17", active, 2.4),
        label(172, 247, "Trajectoire en espace-temps"),
      ],
      s === 2 && [
        oval(197, 152, 92, 55, "none", active),
        round(id, 278, 132, 9, "brass"),
        label(175, 247, "Chute libre en orbite"),
      ],
    ]),
  detailInteractionsScale: (s: number, id: string) =>
    layers([
      s === 0
        ? [
            round(id, 194, 144, 46, "steel"),
            oval(194, 145, 107, 38, "none", flow),
            round(id, 86, 145, 11, "brass"),
            call(179, 80, "Masses", "M179 86l11 15"),
          ]
        : s === 1
          ? [
              round(id, 102, 140, 34, "glass"),
              round(id, 251, 140, 34, "clay"),
              label(102, 146, "−"),
              label(251, 146, "+"),
              arrow(148, 140, 207, 140, flow),
            ]
          : [
              ...[
                [148, 136],
                [192, 126],
                [177, 169],
                [214, 164],
              ].map(([x, y], i) => round(id, x!, y!, 25, i % 2 ? "brass" : "clay")),
              s === 3 && [arrow(233, 145, 295, 111, flow), round(id, 300, 108, 5, "glass")],
            ],
      label(
        175,
        246,
        ["Gravitation", "Électromagnétisme", "Interaction forte", "Interaction faible"][s]!,
      ),
    ]),
  detailLogicalQubit: (s: number, id: string) =>
    layers([
      prism(id, 51, 100, 233, 121, 25, "graphite"),
      ...Array.from({ length: 9 }, (_, i) => [
        block(
          71 + (i % 3) * 70,
          117 + Math.floor(i / 3) * 36,
          45,
          24,
          i === 4 && s === 1 ? "#bd8b76" : i % 2 ? "#b0c3ba" : "#c4b18b",
          ink,
          2,
        ),
        stroke(`M${82 + (i % 3) * 70} ${127 + Math.floor(i / 3) * 36}h18`, lineGrey, 1.2),
      ]),
      s === 0 && [
        stroke("M96 143l70 35 71-35m-141 70 70-35 71 35", flow, 2.1),
        label(178, 247, "Qubits physiques"),
      ],
      s === 1 && [
        focus(163, 165, 23, harm),
        call(234, 71, "Indice d’erreur", "M227 78l-51 64", harm),
      ],
      s === 2 && [
        stroke("M66 110h204v111H66Z", "#e4d1a0", 2.1, "5 4"),
        label(177, 247, "Un qubit logique"),
      ],
    ]),
  detailGeologicalOre: (s: number, id: string) =>
    layers([
      filled(id, "M29 115l74-28 68 23 61-28 100 28v107H29Z", "earth", "dots"),
      filled(
        id,
        "M29 149l87-30 52 26 55-32 109 33v24l-109-28-56 34-57-31-81 29Z",
        "brass",
        "engraving",
      ),
      filled(id, "M149 99l14 3 55 115h-17Z", "clay", "dots"),
      s === 0 && call(250, 68, "Fracture", "M246 74l-84 33"),
      s === 0 && [
        ...Array.from({ length: 8 }, (_, i) => round(id, 167 + i * 5, 132 + i * 9, 2.7, "brass")),
        label(178, 247, "Indices en surface"),
      ],
      s === 1 && [lensRock(id, 264, 172, 1), label(178, 247, "Échantillon à analyser")],
    ]),
  detailNalediLayers: (s: number, id: string) =>
    layers([
      filled(id, "M29 129l52-50h226l24 44v101H29Z", "earth", "engraving"),
      filled(id, "M53 176q31-77 115-61 99-24 142 47v52H53Z", "graphite", "dots"),
      filled(id, "M31 197l68 4 41-20 47 9 69-22 73 23v34H31Z", "earth", "dots"),
      filled(id, "M109 188q-5-7 6-10l40 6q14-5 18 2-1 9-18 7l-43 2Z", "ivory"),
      s === 0 && call(207, 72, "Contexte de grotte", "M216 77l21 49"),
      s === 1 && [focus(141, 185, 24), label(173, 248, "Position des vestiges")],
      s === 2 && [
        stroke("M144 161q25-41 70-35", flow, 1.8, "4 3"),
        label(179, 247, "Interprétations discutées"),
      ],
    ]),
  detailChippedStone: (s: number, id: string) =>
    layers([
      lensRock(id, 119, 155, s),
      s > 0 && [lensRock(id, 235, 150, Math.min(s, 2)), stroke("M168 151h17", flow, 1.8, "4 4")],
      s === 0 && call(239, 111, "Galet", "M214 115l-69 15"),
      s === 1 && call(233, 77, "Facettes", "M231 82l-3 31"),
      s === 2 && label(177, 246, "Bords et géométries"),
    ]),
};
