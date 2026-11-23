import {
  active,
  arrow,
  cable,
  call,
  cylinder,
  filled,
  flow,
  focus,
  graph,
  harm,
  ink,
  label,
  layers,
  lineGrey,
  prism,
  round,
  shadow,
  sheet,
  stroke,
} from "./plate";
import { bodywork, wheel } from "./vehicle";

function components(id: string, s: number) {
  return [
    bodywork(id, 39, 73, 0.98, false, s === 2),
    stroke("M35 198h286", lineGrey, 1.3),
    ...[66, 129, 192, 255].map((x, i) => [
      prism(id, x, 202, 36, 13, 9, i <= s ? "brass" : "ivory"),
      stroke(`M${x + 5} 226h26`, lineGrey, 1),
    ]),
  ];
}

const marketLand =
  "M35 105l14-17 35-8 22 9 23 0 15 18-21 7-14 17-26 1-12 25-16-3-7-31Z M135 83l38-10 15 14 49-9 49 15 30 24-19 9-27-5-26 21-26 1-10 22-25-3-17-23-23-1-11-18 25-8Z M88 151l24-11 20 24-6 28-25 34-13-15-7-33Z M168 144l24 2 24 20-9 28-23 26-21-19-12-34Z M271 190l15-14 28 8 10 16-22 16-31-9Z";

export const roadPlates = {
  detailOwnershipCosts: (s: number, id: string) =>
    layers([
      ...components(id, s),
      s === 0 && call(86, 68, "Achat", "M93 75l29 24"),
      s === 1 && [
        call(257, 69, "Revente", "M255 73l-32 31"),
        arrow(107, 67, 211, 67, active, true),
      ],
      s === 2 && [
        call(78, 66, "Énergie", "M82 72l44 81"),
        call(278, 65, "Entretien", "M272 73l-39 60"),
      ],
      label(180, 250, ["Prix au départ", "Achat moins revente", "Coûts sur la période"][s]!),
    ]),
  detailSuvSpace: (s: number, id: string) =>
    layers([
      bodywork(id, 49, 60, 0.76, true),
      s === 0 && [
        stroke("M114 105h102", active, 2, "5 4"),
        call(267, 87, "Assise", "M246 93l-63 14"),
      ],
      bodywork(id, 49, 158, 0.76, false),
      s === 1 && [
        stroke("M38 131V56m0 167v-73", active, 1.7),
        call(278, 122, "Gabarit", "M246 126l-38 4"),
        stroke("M49 148h194", active, 1.7, "5 4"),
      ],
      label(278, 199, "Berline"),
      s === 0 && label(278, 129, "SUV"),
    ]),
  detailLeaseReturn: (s: number, id: string) =>
    layers([
      bodywork(id, 32, 93, 0.7, false),
      sheet(id, 254, 77, 64, 100, true),
      stroke("M43 213h263", lineGrey, 1.6),
      ...[55, 117, 180, 244, 298].map((x, i) =>
        round(id, x, 213, 5, i <= s + 1 ? "brass" : "steel"),
      ),
      s === 0 && call(261, 192, "Contrat", "M264 176l15-9"),
      s === 1 && [call(97, 75, "Usage", "M99 81l25 26"), arrow(88, 230, 225, 230)],
      s === 2 && [arrow(209, 137, 249, 137), label(278, 196, "Retour")],
      s === 3 && [focus(152, 134, 40), label(115, 246, "Revente possible")],
      s !== 3 && label(66, 247, "Départ"),
    ]),
  detailCarMarket: (s: number, id: string) =>
    layers([
      filled(id, marketLand, "plant", "dots"),
      ...[
        [81, 110],
        [175, 111],
        [271, 122],
      ].map(([x, y], i) => [
        round(id, x!, y!, s === i ? 13 : 7, s === i ? "brass" : "steel"),
        s === i && focus(x!, y!, 22),
      ]),
      s === 0 && call(62, 66, "Amérique du Nord", "M77 72v18", ink, "start"),
      s === 1 && call(173, 66, "Europe", "M175 72v27"),
      s === 2 && call(282, 68, "Chine", "M282 73l-8 31"),
      s === 3 && [
        round(id, 206, 171, 8, "brass"),
        round(id, 249, 142, 8, "brass"),
        round(id, 113, 179, 8, "brass"),
        label(179, 251, "Autres marchés"),
      ],
    ]),
  detailValueCurve: (s: number, id: string) =>
    layers([
      graph(47, 77, 270, 135),
      stroke("M51 83C74 125 105 145 146 159S255 178 307 185", flow, 3),
      [
        round(id, s === 0 ? 101 : 214, s === 0 ? 137 : 173, 6, "brass"),
        stroke(s === 0 ? "M101 137v75" : "M214 173v39", active, 1.3, "4 3"),
      ],
      s === 1 && [
        stroke("M148 156q71 1 159 14M148 163q73 21 159 32", lineGrey, 1.5, "5 4"),
        label(230, 136, "État variable"),
      ],
      label(90, 71, "Valeur"),
      label(265, 239, "Années"),
    ]),
  detailInspectionBench: (s: number, id: string) =>
    layers([
      bodywork(id, 45, 73, 0.97, false, s !== 0),
      prism(id, 38, 190, 275, 9, 13, "graphite"),
      prism(id, 71, 207, 19, 25, 11, "steel"),
      prism(id, 266, 207, 19, 25, 11, "steel"),
      s === 0 && call(180, 241, "Pont de contrôle", "M180 224v-19"),
      s === 1 && [
        focus(103, 170, 26),
        focus(247, 170, 26),
        call(186, 239, "Roues et liaisons", "M184 222l49-27"),
      ],
      s === 2 && [
        sheet(id, 242, 61, 83, 100, true),
        call(215, 246, "Points constatés", "M221 224l59-49"),
      ],
    ]),
  detailAbrasionSources: (s: number, id: string) =>
    layers([
      filled(id, "M80 162h190l37 28v29H56v-46Z", "steel", "engraving"),
      wheel(id, 133, 173, 47),
      s === 0 && [
        cable("M267 165q-14 44 31 51h25", flow, 10),
        call(247, 104, "Échappement", "M248 110l41 88"),
      ],
      s === 1 && [
        round(id, 133, 173, 26, "steel"),
        prism(id, 146, 153, 15, 37, 8, "clay"),
        call(235, 101, "Plaquettes", "M210 107l-50 47"),
        ...Array.from({ length: 8 }, (_, i) =>
          round(id, 170 + i * 7, 164 + (i % 3) * 8, 2, "clay"),
        ),
      ],
      s === 2 && [
        stroke("M71 221h227", ink, 3),
        call(242, 114, "Contact au sol", "M242 119l-91 102"),
        ...Array.from({ length: 10 }, (_, i) =>
          round(id, 149 + i * 9, 217 + (i % 3) * 6, 2, "brass"),
        ),
      ],
    ]),
  detailHotCellPack: (s: number, id: string) =>
    layers([
      prism(id, 42, 183, 232, 28, 30, "graphite"),
      ...[58, 110, 162, 214].map((x, i) => [
        cylinder(id, x, 103, 38, 72, (i === 1 && s > 0) || (i === 2 && s === 2) ? "clay" : "steel"),
        s === 3 && i < 3 && filled(id, `M${x + 43} 95l9-6v92l-9 7Z`, "ivory", "engraving"),
        s > 0 && s < 3 && i === 1 && [stroke(`M${x + 7} 86q-9-11 3-21m14 21q-9-11 3-21`, harm, 2)],
      ]),
      s === 1 && call(238, 76, "Chaleur interne", "M217 81l-75 41", harm),
      s === 2 && [
        arrow(146, 142, 162, 142, harm),
        arrow(199, 142, 213, 142, harm, true),
        label(186, 247, "Transfert entre cellules"),
      ],
      s === 3 && label(181, 247, "Barrières thermiques"),
      s === 0 && label(173, 246, "Cellules dans le pack"),
    ]),
  detailDieselFilters: (s: number, id: string) =>
    layers([
      cable("M30 147h300", lineGrey, 19),
      ...[60, 143, 224].map((x, i) => [
        filled(
          id,
          `M${x} 122q35-25 64 0v48q-35 22-64 0Z`,
          s === i + 1 ? "brass" : "steel",
          "engraving",
        ),
        filled(id, `M${x + 8} 130h48v32h-48Z`, "ivory"),
        ...[0, 1, 2, 3, 4].map((y) =>
          stroke(
            `M${x + 9} ${133 + y * 6}h42`,
            i === 1 ? ink : lineGrey,
            1.1,
            i === 1 && y % 2 ? "11 4" : undefined,
          ),
        ),
      ]),
      arrow(22, 147, 51, 147, flow),
      arrow(297, 147, 333, 147, flow),
      label(92, 214, "DOC"),
      label(175, 214, "FAP"),
      label(256, 214, "SCR"),
      s === 0 && label(177, 89, "Gaz d’échappement"),
      s === 1 && call(117, 81, "Catalyseur", "M114 89l-20 23"),
      s === 2 && [
        call(156, 81, "Suie piégée", "M157 85l15 47", harm),
        ...Array.from({ length: 6 }, (_, i) =>
          round(id, 151 + i * 6, 139 + (i % 2) * 8, 2, "graphite"),
        ),
      ],
      s === 3 && [
        cylinder(id, 198, 70, 30, 26, "glass"),
        arrow(213, 102, 241, 125, flow),
        label(265, 82, "AdBlue"),
      ],
    ]),
  detailCompressionIgnition: (s: number, id: string) =>
    layers([
      shadow(id, 177, 223, 119, 15),
      filled(id, "M103 89h154v100h-15v25H117v-25h-14Z", "steel", "engraving"),
      fillChamber(id, s),
      s === 0 && call(58, 90, "Air", "M73 87l63 28"),
      s === 1 && call(279, 71, "Injecteur", "M263 77l-77 16"),
      s === 2 && [label(181, 248, "Expansion des gaz"), arrow(204, 159, 204, 196, harm)],
    ]),
};

function fillChamber(id: string, s: number) {
  const top = [159, 137, 170][s]!;
  return layers([
    filled(id, "M122 103h116v78H122Z", s === 2 ? "brass" : "glass"),
    filled(id, `M126 ${top}h108v22H126Z`, "graphite", "engraving"),
    stroke(`M173 ${top + 22}l10 50`, ink, 5),
    cylinder(id, 169, 72, 23, 23, "steel"),
    s === 0 && arrow(111, 107, 150, 119, flow),
    s >= 1 && [
      stroke("M180 96l-19 32m19-32 4 34m-4-34 25 33", harm, 2.1, "2 4"),
      s === 2 && round(id, 180, 143, 12, "clay"),
    ],
  ]);
}
