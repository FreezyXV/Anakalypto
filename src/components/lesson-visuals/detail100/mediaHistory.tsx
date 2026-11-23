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

function news(
  id: string,
  x: number,
  y: number,
  w = 125,
  h = 136,
  tone: "ivory" | "brass" = "ivory",
) {
  return moved(x, y, [
    shadow(id, w * 0.5, h, w * 0.66, 11),
    filled(id, `M0 0h${w}v${h - 10}l-9 10H0Z`, tone, "dots"),
    stroke(`M8 16h${w - 17}m-${w - 17} 6h${w - 17}`, lineGrey, 2),
    filled(id, `M8 31h${(w - 24) / 2}v${h * 0.43}H8Z`, "glass", "engraving"),
    filled(id, `M10 ${h * 0.43 + 19}l${(w - 30) / 4}-18 ${(w - 30) / 4} 18Z`, "plant"),
    ...Array.from({ length: 6 }, (_, i) =>
      stroke(`M${w * 0.5 + 7} ${35 + i * 10}h${w * 0.43 - 5 - (i % 2) * 4}`, lineGrey, 1.15),
    ),
    stroke(`M8 ${h - 22}h${w - 19}m-${w - 19} 9h${w - 19}`, lineGrey, 0.9),
  ]);
}
function lens(id: string, x: number, y: number, r = 31) {
  return moved(x, y, [
    oval(0, 0, r, r, "#a5bac052", flow),
    oval(0, 0, r - 4, r - 4, "none", ink),
    stroke(`M${r * 0.77} ${r * 0.77}l${r * 0.64} ${r * 0.65}`, ink, 10),
    stroke(`M${r * 0.79} ${r * 0.79}l${r * 0.63} ${r * 0.64}`, "#b49562", 6),
  ]);
}
function phone(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      shadow(id, 48, 143, 58, 14),
      filled(
        id,
        "M0 12Q0 0 11 0h75q11 0 11 11v132q0 11-11 11H11Q0 154 0 143Z",
        "graphite",
        "engraving",
      ),
      block(7, 11, 82, 127, `url(#${id}-ivory)`, ink, 5),
      stroke("M35 145h26", "#e5e3d3", 1.8),
      round(id, 52, 5, 1.5, "brass"),
    ],
    scale,
  );
}
function miniature(id: string, x: number, y: number, variant = 0) {
  return moved(x, y, [
    filled(id, "M0 0h89v68H0Z", "glass", "dots"),
    round(id, 61, 19, 8, variant ? "clay" : "brass"),
    filled(
      id,
      variant ? "M2 66l32-34 20 17 20-9 13 26Z" : "M2 66l29-21 25-16 31 37Z",
      "plant",
      "engraving",
    ),
    stroke("M10 58h73m-68-46h17", "#e1e2d2", 1.1),
  ]);
}
const parcelLand = "M30 90l213-31 86 103-185 69-115-52Z";
const latticeSites = Array.from({ length: 6 }, (_, row) =>
  Array.from({ length: 12 }, (_, column) => {
    const c = column - 2;
    return { x: 58 + 30 * c + 15 * row, y: 86 + 26 * row, gap: c % 2 === 0 && row % 2 === 0 };
  }),
)
  .flat()
  .filter(({ x, gap }) => x >= 49 && x <= 311 && !gap);
const latticeLinks = latticeSites.flatMap(({ x, y }, i) =>
  latticeSites.slice(i + 1).flatMap(({ x: x2, y: y2 }) => {
    const dx = x2 - x;
    const dy = y2 - y;
    return (dy === 0 && Math.abs(dx) === 30) || (dy === 26 && Math.abs(dx) === 15)
      ? [{ d: `M${x} ${y}L${x2} ${y2}`, slant: Math.sign(dy * dx) }]
      : [];
  }),
);

export const mediaHistoryPlates = {
  detailInformationSample: (s: number, id: string) =>
    layers([
      news(id, 45, 95, 101, 110),
      news(id, 138, 84, 100, 111, s === 1 ? "brass" : "ivory"),
      news(id, 229, 106, 82, 102),
      s === 0 && [lens(id, 95, 151, 35), label(186, 246, "Échantillon observé")],
      s === 1 && [lens(id, 182, 132, 34), label(183, 246, "Vérifier le contenu")],
      s === 2 && [
        stroke("M130 218h128m-133-7v15m136-15v15", flow, 1.4),
        label(188, 247, "Diffusion et exposition"),
      ],
    ]),
  detailSyntheticProvenance: (s: number, id: string) =>
    layers([
      miniature(id, 50, 109),
      miniature(id, 216, 109, s === 0 ? 0 : 1),
      s === 0 && [
        stroke("M156 94h46m-46 98h46", flow, 1.2, "4 3"),
        label(179, 246, "Une apparence plausible"),
      ],
      s === 1 && [
        lens(id, 267, 143, 33),
        arrow(149, 148, 207, 148, active),
        label(177, 247, "Vérifier le contexte"),
      ],
      s === 2 && [
        sheet(id, 154, 102, 52, 84, true),
        stroke("M137 182h16m53 0h15", flow, 1.7, "4 3"),
        label(176, 243, "Historique du fichier"),
      ],
    ]),
  detailNewsAvoidance: (s: number, id: string) =>
    layers([
      phone(id, 61, 74, 0.99),
      news(id, 221, 104, 89, 99, s === 1 ? "brass" : "ivory"),
      ...[102, 127, 152, 177].map((y, i) => [
        block(75, y, 70, 19, i <= s ? "#d9b8a2" : "#c4cfc5", lineGrey, 2),
        stroke(`M82 ${y + 7}h45m-45 5h31`, ink, 1.05),
      ]),
      s === 0 && [arrow(163, 118, 211, 131, flow), label(180, 249, "Exposition répétée")],
      s === 1 && [
        stroke("M171 152h45m-30-10 14 17m0-17-14 17", harm, 2),
        label(176, 246, "Évitement ponctuel"),
      ],
      s === 2 && [focus(259, 144, 26), label(176, 247, "Sélection d’un sujet")],
    ]),
  detailFeedRanking: (s: number, id: string) =>
    layers([
      phone(id, 50, 72),
      phone(id, 219, 72),
      ...[0, 1, 2].map((i) => [
        block(65, 99 + i * 36, 66, 30, ["#a3b8b2", "#cfb482", "#bf9e86"][i]!, lineGrey, 3),
        block(
          233,
          99 + i * 36,
          66,
          30,
          ["#a3b8b2", "#cfb482", "#bf9e86"][s === 0 ? i : [2, 0, 1][i]!]!,
          lineGrey,
          3,
        ),
        stroke(`M71 ${110 + i * 36}h48m-48 8h34M240 ${110 + i * 36}h48m-48 8h34`, ink, 1.1),
      ]),
      s > 0 && [arrow(137, 181, 231, 112, active, true), arrow(141, 112, 227, 144, flow, true)],
      s === 2 && [arrow(192, 147, 192, 185, harm), round(id, 192, 194, 8, "brass")],
      label(175, 247, ["Ordre chronologique", "Ordre recalculé", "Attention mesurée"][s]!),
    ]),
  detailAccountCounts: (s: number, id: string) =>
    layers([
      ...[65, 171, 264].map((x, i) => [
        phone(id, x, 92, 0.61),
        round(id, x + 29, 129, 12, i === s ? "brass" : "steel"),
        stroke(`M${x + 15} 155h28m-28 9h24`, lineGrey, 1.4),
      ]),
      s > 0 && [stroke("M99 143q25-31 87-10", active, 2, "4 4"), arrow(159, 130, 176, 131, active)],
      s === 0 && label(174, 245, "Identités comptées"),
      s === 1 && label(169, 245, "Comptes multiples"),
    ]),
  detailCivilCode: (s: number, id: string) =>
    layers([
      s === 0
        ? [
            sheet(id, 41, 97, 82, 107, true),
            sheet(id, 141, 81, 76, 108, true),
            sheet(id, 232, 100, 76, 106, true),
          ]
        : [
            shadow(id, 176, 224, 141, 15),
            filled(
              id,
              "M65 193V94q47-20 114 2 58-19 119-5v110q-62-14-119 11-70-25-114-7Z",
              "earth",
              "engraving",
            ),
            filled(
              id,
              "M71 189V87q57-14 108 7 61-19 112-7v100q-59-11-112 13-65-25-108-11Z",
              "ivory",
            ),
            ...[0, 1, 2, 3, 4].map((y) =>
              stroke(`M83 ${112 + y * 13}q39-8 83 7m24-6q42-14 89-9`, lineGrey, 1),
            ),
            stroke("M179 95v103", active, 1.6),
          ],
      s === 0 && label(177, 246, "Règles dispersées"),
      s === 1 && label(177, 244, "Un texte commun"),
      s === 2 && [sheet(id, 219, 93, 76, 86), label(178, 246, "Modifications dans le temps")],
    ]),
  detailParcelTitle: (s: number, id: string) =>
    layers([
      filled(id, parcelLand, "plant", "dots"),
      stroke(
        "M89 81l25 74-56 38m56-38 49-31 49 56m-49-56-15-51m15 50 107-32m-54 93 83-42m-156 88-26-74",
        ink,
        1.9,
      ),
      prism(id, 105, 117, 43, 23, 11, "ivory"),
      s === 0 && call(236, 76, "Parcelles", "M235 82l-21 52"),
      s === 1 && [sheet(id, 227, 97, 86, 121, true), label(172, 252, "Titre de propriété")],
    ]),
  detailInventionRights: (s: number, id: string) =>
    layers([
      sheet(id, 197, 75, 111, 143, true),
      s === 0
        ? [news(id, 49, 92, 102, 117), call(122, 73, "Œuvre", "M122 80l-16 29")]
        : s === 1
          ? [
              prism(id, 55, 114, 89, 48, 15, "steel"),
              round(id, 81, 137, 11, "brass"),
              stroke("M63 190h77m-71-9v17m68-17v17", lineGrey, 1.4),
              label(102, 234, "Invention"),
            ]
          : [
              prism(id, 56, 110, 91, 72, 17, "ivory"),
              filled(id, "M77 134l24-17 25 17-11 29H88Z", "clay", "dots"),
              label(103, 233, "Signe"),
            ],
      stroke("M164 151h26", flow, 1.8, "4 3"),
      label(254, 248, ["Droit d’auteur", "Brevet", "Marque"][s]!),
    ]),
  detailSurveyBaseline: (s: number, id: string) =>
    layers([
      filled(id, "M29 81l289-15 13 134-130 28-172-24Z", "plant", "dots"),
      stroke("M43 134q94-58 150-10 61 39 126-6m-267 36q112-55 151-11 43 40 104 1", living, 1.45),
      ...[
        [88, 186],
        [269, 179],
        [205, 100],
      ].map(([x, y]) => round(id, x!, y!, 5, "brass")),
      stroke("M88 186l181-7", ink, 2.4),
      s === 0 && label(177, 248, "Base mesurée"),
      s === 1 && [
        stroke("M88 186l117-86 64 79", flow, 2.1, "4 3"),
        call(233, 76, "Visées", "M227 84l-14 16"),
      ],
      s === 2 && [
        filled(id, "M88 186l117-86 64 79Z", "glass"),
        stroke("M204 105l3 77", active, 2, "4 4"),
        label(180, 248, "Distance déduite"),
      ],
    ]),
  detailKagomeWeave: (s: number, id: string) =>
    layers([
      filled(id, "M44 74h270v151H44Z", s === 0 ? "earth" : "ivory", s === 0 ? "dots" : undefined),
      s === 1 && [
        filled(id, "M178 138l15-26h30l15 26-15 26h-30Z", "glass", "dots"),
        filled(id, "M193 112l15-26 15 26Z", "brass", "dots"),
      ],
      ...latticeLinks.map(({ d, slant }) =>
        s === 0
          ? [
              stroke(d, "#6b5135", 7.5),
              stroke(d, slant === -1 ? "#c5a36d" : slant === 0 ? "#e0c596" : "#c7ab80", 5.5),
              stroke(d, "#f0d7aa", 0.65, "2 2"),
            ]
          : stroke(d, flow, 1.65),
      ),
      s === 2 && latticeSites.map(({ x, y }) => round(id, x, y, 3.8, "brass")),
      label(179, 248, ["Motif tressé", "Triangles et hexagones", "Sites du réseau"][s]!),
    ]),
};
