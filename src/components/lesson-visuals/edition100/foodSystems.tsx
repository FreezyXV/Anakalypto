import {
  active,
  arrow,
  block,
  call,
  cylinder,
  filled,
  flow,
  harm,
  ink,
  label,
  moved,
  oval,
  prism,
  round,
  stroke,
} from "../detail100/plate";
import { bench, grain, leaf, plate, vial } from "./craft";

function jar(id: string, x: number, y: number, w = 62) {
  return moved(x, y, [
    cylinder(id, 0, 14, w, 74, "glass"),
    filled(id, `M8 52h${w - 16}v31q-${(w - 16) / 2} 7-${w - 16} 0Z`, "brass", "dots"),
    filled(id, `M2 4h${w - 4}v15H2Z`, "steel", "engraving"),
  ]);
}

export const foodSystemsPlates = {
  editionMorningMeal: plate(["Exemple de composition", "Un repas dans la journée"], (s, id) => [
    bench(id, 39, 200, 270),
    oval(116, 142, 69, 55, `url(#${id}-ivory)`),
    oval(116, 140, 51, 40, "#eae4cf", ink),
    ...[
      [-25, 3],
      [-8, -18],
      [9, -6],
      [29, 14],
    ].map(([x, y]) => grain(id, 116 + x!, 143 + y!, 1.08)),
    vial(id, 249, 105, "glass", 0.82),
    s === 0 && [call(111, 72, "Aliments", "M109 77v19"), label(270, 86, "Boisson")],
    s === 1 && [
      round(id, 227, 86, 8, "brass"),
      arrow(222, 181, 173, 170, flow),
      call(95, 75, "Apports", "M97 81v16"),
    ],
  ]),
  editionFoodHazards: plate(["Biologique", "Chimique", "Physique"], (s, id) => [
    bench(id, 49, 202, 251),
    oval(165, 141, 100, 51, `url(#${id}-ivory)`),
    oval(165, 141, 87, 39, "#ded2b8", ink),
    filled(id, "M88 144q45-48 109-19l44 29q-39 21-111 11Z", "earth", "dots"),
    s === 0 && [
      ...Array.from({ length: 9 }, (_, i) =>
        round(id, 131 + (i % 4) * 21, 130 + Math.floor(i / 4) * 11, 3.8, "plant"),
      ),
      call(238, 78, "Microbes", "M217 85l-25 43"),
    ],
    s === 1 && [
      round(id, 174, 141, 13, "clay"),
      stroke("M174 120v-20", harm, 2),
      label(173, 85, "Substance"),
    ],
    s === 2 && [
      filled(id, "M163 120l20 8-8 26-24-11Z", "steel", "engraving"),
      call(230, 81, "Fragment", "M220 88l-42 34"),
    ],
  ]),
  editionKitchenSurfaces: plate(
    ["Contacts successifs", "Séparer les usages", "Entretenir les surfaces"],
    (s, id) => [
      bench(id, 33, 197, 288),
      prism(id, 48, 141, 106, 38, 19, "earth"),
      prism(id, 216, 141, 92, 38, 16, "ivory"),
      filled(id, "M57 154l28-18 46 8-4 18-61 7Z", "clay", "dots"),
      leaf(id, 250, 146, 0.66),
      leaf(id, 279, 147, 0.51),
      s === 0 && [arrow(145, 154, 215, 154, harm, true), label(183, 94, "Contact indirect")],
      s === 1 && [stroke("M179 106v91", harm, 2.4, "5 5"), label(180, 82, "Zone séparée")],
      s === 2 && [
        filled(id, "M103 101h41l13 17-18 16h-46Z", "glass", "dots"),
        arrow(145, 123, 177, 142, flow),
        label(229, 86, "Nettoyage"),
      ],
    ],
  ),
  editionPesticideResidue: plate(["Prélever", "Mesurer", "Comparer à la limite"], (s, id) => [
    bench(id, 33, 200, 280),
    ...[58, 84, 109].map((x, i) => grain(id, x, 151 - i * 16, 1.35, "clay")),
    vial(id, 148, 106, "glass", 0.9),
    prism(id, 232, 115, 66, 85, 11, "steel"),
    block(243, 130, 48, 31, "#c4d2cb", ink),
    s === 0 && [arrow(104, 158, 142, 153, active), call(91, 94, "Échantillon", "M95 101l-3 28")],
    s === 1 && [arrow(196, 154, 231, 146, flow), stroke("M249 150l8-5 5 3 6-10 15 0", flow, 1.5)],
    s === 2 && [
      stroke("M249 153h35m-35-10h35", harm, 1.35),
      call(242, 82, "Seuil", "M244 88l17 53", harm),
    ],
  ]),
  editionPreservationModes: plate(
    ["Ralentir les transformations", "Réduire l’eau disponible", "Protéger après traitement"],
    (s, id) => [
      bench(id, 38, 200, 276),
      s === 0
        ? [
            filled(id, "M62 88h114v109H62Z", "steel", "engraving"),
            block(78, 104, 82, 69, "#cbdad6", flow, 2),
            stroke("M100 121l40 37m-40 0 40-37m-20-10v57", flow, 2.2),
            jar(id, 245, 114, 52),
            label(120, 76, "Froid"),
          ]
        : s === 1
          ? [
              filled(id, "M48 154l38-33h194l-31 50H48Z", "earth", "engraving"),
              ...[88, 128, 169, 210, 245].map((x, i) => grain(id, x, 144 + (i % 2) * 10, 0.88)),
              arrow(158, 123, 157, 81, flow),
              label(228, 92, "Eau"),
            ]
          : [
              jar(id, 88, 102, 75),
              jar(id, 212, 102, 75),
              stroke("M171 114h35m-36 20h35", active, 1.7, "3 3"),
              call(192, 75, "Fermeture", "M192 80l52 24"),
            ],
    ],
  ),
  editionSupplementLabel: plate(
    ["Repérer la substance", "Lire la portion", "Regarder les usages cumulés"],
    (s, id) => [
      vial(id, 52, 101, "brass", 1.16),
      filled(id, "M162 86h159v121H162Z", "ivory", "dots"),
      ...[0, 1, 2].map((i) => [
        block(175, 106 + i * 28, 132, 22, s === i ? "#d5bb86" : "#e7e2d4", ink),
        label(241, 122 + i * 28, ["Substance", "Quantité", "Fréquence"][i]!),
      ]),
      s === 2 && arrow(113, 169, 159, 169, harm, true),
    ],
  ),
  editionNourishmentVariety: plate(
    ["Énergie disponible", "Acides aminés", "Vitamines et minéraux"],
    (s, id) => [
      oval(177, 149, 117, 69, `url(#${id}-ivory)`),
      oval(177, 149, 100, 56, "#ece4ca", ink),
      [...Array(7)].map((_, i) =>
        grain(
          id,
          108 + (i % 3) * 20,
          129 + Math.floor(i / 3) * 17,
          0.72,
          s === 0 ? "brass" : "earth",
        ),
      ),
      ...[176, 198, 219].map((x, i) =>
        grain(id, x, 168 + (i % 2) * 15, 0.56, s === 1 ? "clay" : "brass"),
      ),
      leaf(id, 232, 130, 0.92),
      leaf(id, 205, 120, 0.66),
      call(
        s === 0 ? 110 : s === 1 ? 181 : 261,
        74,
        ["Féculents", "Légumineuses", "Feuilles"][s]!,
        ["M111 80l12 29", "M178 81l12 77", "M249 79l-21 26"][s]!,
      ),
    ],
  ),
};
