import {
  active,
  arrow,
  block,
  call,
  cylinder,
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
  stroke,
} from "../detail100/plate";
import { bench, grain, leaf, plate, vial } from "./craft";

function fish(
  id: string,
  x: number,
  y: number,
  scale: number,
  tone: "glass" | "steel" | "brass" = "glass",
) {
  return moved(
    x,
    y,
    [
      filled(id, "M-36 0q25-35 77-11l29-21-9 31 9 23-32-14q-50 26-74-8Z", tone, "engraving"),
      filled(id, "M-4-16l19-16 13 14ZM3 12l18 13 7-15Z", tone),
      round(id, -23, -2, 3, "graphite"),
      stroke("M-15-10q10 10-1 20m20-5 17-3", ink, 1.3),
    ],
    scale,
  );
}

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
  editionFishTrophic: plate(
    ["Organismes consommés", "Accumulation au fil du temps", "Espèces et niveaux variables"],
    (s, id) => [
      filled(id, "M30 89h300v127H30Z", "glass", "dots"),
      stroke("M33 105h294m-280 85h267", flow, 1.1, "3 5"),
      ...[65, 84, 108].map((x, i) => fish(id, x, 173 - (i % 2) * 18, 0.28)),
      fish(id, 173, 155, 0.53, "steel"),
      fish(id, 252, 131, 0.77, s > 0 ? "brass" : "steel"),
      s > 0 && [
        arrow(109, 166, 135, 158, flow),
        arrow(197, 149, 220, 138, flow),
        ...[
          [80, 171],
          [171, 152],
          [184, 155],
          [241, 130],
          [254, 123],
          [265, 132],
          [276, 125],
          [279, 138],
        ].map(([x, y]) => round(id, x!, y!, 2.7, "clay")),
      ],
      s === 1 && call(174, 78, "Mercure", "M181 83l58 42", harm),
      s === 2 && [focus(260, 131, 45, harm), call(182, 82, "Prédateur", "M203 89l28 22", harm)],
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
  editionGrainSilo: plate(
    ["Suivre l’entrée du grain", "Humidité et air", "Surveiller le stock"],
    (s, id) => [
      cylinder(id, 92, 98, 165, 102, "steel"),
      filled(id, "M88 98l84-39 88 39Z", "steel", "engraving"),
      ...[109, 128, 147, 166, 185].map((y) => stroke(`M94 ${y}q81 23 161 0`, "#626e69", 1.5)),
      filled(id, "M108 122q32 16 59-4 38-18 75 4v66q-64 19-134 0Z", "brass", "dots"),
      ...Array.from({ length: 42 }, (_, i) => {
        const x = 116 + (i % 10) * 12,
          y = 142 + Math.floor(i / 10) * 10;
        return stroke(
          `M${x} ${y}l${3 + (i % 4)} ${(i % 3) - 2}`,
          i % 3 === 0 ? "#806139" : "#f1d8a1",
          1.25,
        );
      }),
      stroke("M110 128v55q61 18 129 1m-129-31q63 18 129 1", active, 1.25, "5 4"),
      ...[116, 231].map((x) => prism(id, x, 200, 14, 24, 7, "graphite")),
      s === 0 && [
        stroke("M121 71h23l22 10v32", ink, 5),
        stroke("M121 71h23l22 10v32", "#bc8c4b", 2),
        arrow(169, 99, 169, 122, active),
        label(68, 133, "Récolte"),
      ],
      s === 1 && [
        arrow(73, 186, 106, 186, flow),
        arrow(129, 166, 129, 120, flow),
        call(281, 77, "Air", "M280 83l-38 38", flow),
      ],
      s === 2 && [
        stroke("M198 100v74", harm, 1.7, "4 3"),
        round(id, 198, 174, 4.7, "clay"),
        call(268, 72, "Sonde", "M262 76l-62 28"),
      ],
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
  editionNitrogenReturn: plate(
    ["Apports organiques", "Transformation dans le sol", "Échanges avec les racines"],
    (s, id) => [
      filled(id, "M33 139q87-13 147 1t147-2v79H33Z", "earth", "dots"),
      filled(id, "M33 182q122-14 294-4v39H33Z", "clay", "engraving"),
      leaf(id, 171, 126, 0.83),
      stroke("M173 137q-8 15 14 53m-12-24-21 13m26-8 28 12", living, 2.2),
      s === 0 && [
        filled(id, "M56 137l24-29 30-10 31 38Z", "earth", "engraving"),
        label(84, 84, "Matière"),
      ],
      s === 1 && [
        ...Array.from({ length: 10 }, (_, i) =>
          round(id, 88 + (i % 5) * 30, 155 + Math.floor(i / 5) * 17, 3, "brass"),
        ),
        call(248, 88, "Minéraux", "M243 95l-26 52"),
      ],
      s === 2 && [
        arrow(106, 174, 160, 169, living),
        arrow(237, 172, 196, 171, living),
        ...[
          [169, 164],
          [157, 178],
          [186, 178],
          [198, 174],
          [202, 178],
        ].map(([x, y]) => round(id, x!, y!, 3.3, "brass")),
        call(234, 84, "Nodules", "M226 92l-32 73", living),
      ],
    ],
  ),
};
