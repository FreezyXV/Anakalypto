import {
  type Study,
  block,
  cold,
  dark,
  fillPath,
  forest,
  grounding,
  heat,
  label,
  link,
  moved,
  oval,
  paint,
  stream,
  stroke,
  surface,
  tile,
} from "./art";
import { printedPage } from "./mediaWorkshop";

function sample(id: string, s: number) {
  const strata = ["#998967", "#b9a079", "#cebc91", "#ad7450"];
  return [
    grounding(id, 180, 151, 126),
    ...strata.map((c, i) =>
      fillPath(`M54 ${123 - i * 15}l46-29h203l-44 25-2 20H54Z`, c, "#7e6e52", 0.96),
    ),
    fillPath("M54 79l46-29h203l-44 29h-57l-15-3-22 3H54Z", "#a96c50", "#79573f", 1.21),
    stroke("M66 84h92l6 9m41-16-11 14 10 16m-137 15h180m-177 9h173", "#dcc191", 1.35),
    ...Array.from({ length: 30 }, (_, i) => {
      const x = 67 + ((i * 31) % 190),
        y = 83 + ((i * 11) % 52);
      return oval(x, y, 1.2 + (i % 2) * 0.5, 0.9, i % 3 ? "#d9bf95" : "#775b49");
    }),
    s >= 1 && [
      fillPath("M139 74l9-12 17 2 5 9-9 10Z", "#ad7550", "#7c5d44", 1),
      fillPath("M171 61l6-11 16 2-5 9Z", "#b07e5b", "#7b5b42", 0.83),
      ...[1, 2, 3, 4].map((i) => oval(171 + i * 6, 67 - i * 6, 1.8, 1.35, "#b3835d")),
    ],
  ];
}
function monument(id: string, x: number, y: number, s: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 3, 55, 82),
      tile(id, -77, 35, 153, 21, "iron", 9),
      surface(id, "M-57-22l11-14h97l12 14v64H-57Z", "steel", 1.22),
      surface(id, "M-61-19H58v62H-61Z", "cream", 1.14),
      fillPath("M-65-19-2-51l65 32Z", "#af9b70", "#726e52", 1.16),
      stroke("M-49-21-2-43l49 22m-102 47h110m-110 8h110", "#e0d0a4", 1.38),
      ...[-48, -29, -10, 9, 28, 47].map((a, i) => [
        surface(id, `M${a} -14h10v44h-10Z`, i % 2 ? "steel" : "cream", 0.84),
        stroke(`M${a - 3} -16h16m-18 47h19`, "#a39572", 1.2),
      ]),
    ],
    s,
  );
}
function cupboard(id: string, x: number, y: number, s: number, type: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 58, 122),
      surface(id, "M-102-47l9-11H92l11 11v105h-205Z", "copper", 1.19),
      surface(id, "M-92-43H94v91H-92Z", "soot", 1.1),
      surface(id, "M-94 3H98v7H-94ZM-94 45H98v10H-94Z", "copper", 0.91),
      stroke("M-91-53h179m-187 14v86m196-86v86", "#d6ac77", 1.3),
      ...[-63, -22, 25, 69].map((a, i) => [
        i === 0
          ? surface(id, `M${a - 16} -8l3-18 18-7 11 13-6 13Z`, "cream", 0.99)
          : i === 1
            ? [
                oval(a, -14, 16, 14, paint(id, "copper"), dark),
                oval(a, -14, 12, 10, "none", "#dcc08c"),
                stroke(`M${a} -24v19m-10-9h20`, "#baccab", 1),
              ]
            : i === 2
              ? surface(id, `M${a - 12} -11l8-22 20 15-8 10Z`, "steel", 0.9)
              : [
                  oval(a, -15, 9, 14, paint(id, "glass"), dark),
                  stroke(`M${a - 12} -4h25`, "#ddce9d", 1.44),
                ],
        ...(type > 0
          ? [
              block(a - 13, 17, 25, 12, paint(id, "cream"), "#b6996f", 1),
              stroke(`M${a - 10} 21h19m-19 4h11`, "#8e8f72", 0.87),
            ]
          : []),
      ]),
      type === 2 && stroke("M-93-42H93v88H-93Zm0 10h184", "#d7dbbb", 1.06),
    ],
    s,
  );
}
function singer(id: string, x: number, y: number, s: number, age: number, pose: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 36, 28),
      stroke("M-8 7l-4 30h-9m29-30 5 30h9", "#716d58", 7.2),
      stroke("M-8 18l-3 17m20-17 3 17", "#a89b76", 1.3),
      surface(id, "M-17-31l10-7 5 4 5-4 13 8 2 18-6 29H-12l-7-25Z", age ? "steel" : "copper", 1.08),
      stroke("M-7-33l6 12 7-13M0-19v31m-12-6h22", "#d3c39a", 1.45),
      surface(id, "M-13 13h25v8H-14Z", "iron", 0.81),
      stroke(
        pose ? "M-12-26l-12-11-14 6m53 4 14 7 16-6" : "M-12-27l-14 19-12-5m54-14 14 19 13-6",
        "#ab9771",
        5.3,
      ),
      oval(0, -47, 10, 11, paint(id, "cream"), "#8d7355"),
      fillPath(
        "M-10-47q-3-12 11-13 8 0 11 11-7-2-12-6l-8 8Z",
        age ? "#a9a18a" : "#6e6550",
        "#78684d",
        0.9,
      ),
      stroke("M-4-44h8m-14 5 5 8m10-8-4 7", "#ae8e61", 1.05),
    ],
    s,
  );
}
function workbench(id: string, s: number) {
  return [
    tile(id, 42, 144, 276, 19, "iron", 9),
    surface(id, "M64 122l24-14h158l14 13v25H63Z", "copper", 1.15),
    stroke("M73 124h171m-170 11h161m-143-22h132", "#e0b67f", 1.35),
    stroke(
      s === 2 ? "M109 139q43-10 92-3m-82-13q36-10 77-3" : "M109 139q30-15 61-8t38-3",
      "#81583d",
      2.09,
    ),
    surface(
      id,
      s === 0
        ? "M136 119l76-57 10 10-69 59Z"
        : s === 1
          ? "M146 113l63-49 11 10-65 48Z"
          : "M157 122l77-36 8 14-79 33Z",
      "steel",
      1.1,
    ),
    surface(
      id,
      s === 2 ? "M222 90l29-13 17 6-1 12-31 10Z" : "M205 68l31-23 17 5 1 9-34 21Z",
      "copper",
      1.19,
    ),
    s === 1
      ? link(106, 84, "Trace", "M106 88l50 43", cold)
      : s === 2
        ? link(109, 87, "Fil du bois", "M110 92l58 33", forest)
        : link(106, 85, "Outil", "M126 91l44 9", cold),
  ];
}
export const patrimony = {
  pigmentLayers: {
    foot: [
      "Le pigment colore une couche",
      "Une couche altérée peut s’effriter",
      "Présence et exposition se distinguent",
    ],
    draw: (s, id) => [
      ...sample(id, s),
      s === 0
        ? link(264, 109, "Peinture", "M241 104l-16-25", heat)
        : s === 1
          ? link(250, 108, "Écailles", "M224 100l-54-28", heat)
          : [
              surface(id, "M238 104h73v58h-73Z", "glass", 1.09),
              stroke("M242 109h65m-60 41h51", "#c9d3b4", 1.35),
              label(270, 100, "Barrière", cold),
              label(122, 154, "Particules", heat),
            ],
    ],
  },
  heritageListing: {
    foot: [
      "Le dossier présente le bien et sa gestion",
      "Des critères éclairent l’évaluation",
      "Le suivi porte sur la protection",
    ],
    draw: (s, id) => [
      monument(id, 113, 108, 0.9),
      printedPage(id, 252, 109, 0.92, "form", s + 3),
      s === 0
        ? [stream(175, 113, 209, 113, forest), label(248, 62, "Dossier", cold)]
        : s === 1
          ? [
              oval(250, 111, 25, 23, "#c0c6aa45", "#557963"),
              stroke("M265 127l17 14", "#a78750", 5),
              label(247, 62, "Critères", forest),
            ]
          : [
              stroke("M226 124l7 6 15-18m-20 25 7 6 18-18", "#678769", 2),
              label(248, 62, "Suivi", forest),
            ],
    ],
  },
  curiosityCabinet: {
    foot: [
      "Le meuble réunit des objets variés",
      "Une fiche garde une trace de l’objet",
      "Le classement change la lecture",
    ],
    draw: (s, id) => [
      cupboard(id, s === 1 ? 145 : 180, 107, s === 1 ? 0.86 : 1.04, s),
      s === 0
        ? label(177, 53, "Cabinet", cold)
        : s === 1
          ? [
              printedPage(id, 281, 109, 0.64, "form", 3),
              link(268, 63, "Fiche", "M267 68l-27 13", heat),
            ]
          : [label(180, 169, "Cartels", cold), stroke("M127 152h102", "#a1ab8a", 1.43, "4 3")],
    ],
  },
  livingHeritage: {
    foot: [
      "La pratique vit dans la communauté",
      "On apprend en faisant avec les autres",
      "Une autre génération reprend la pratique",
    ],
    draw: (s, id) => [
      tile(id, 47, 144, 268, 20, "iron", 10),
      ...[95, 175, 253].map((x, i) =>
        singer(id, x, 119, s === 0 ? 1 : i === 1 ? 0.83 : 1.03, (i + s) % 2, s === 0 ? 0 : i % 2),
      ),
      s === 0
        ? [
            stroke("M103 74q38-24 60-7m26-5q25-15 56 8", "#899c80", 1.75, "4 3"),
            label(181, 52, "Chant partagé", cold),
          ]
        : s === 1
          ? [stream(112, 61, 156, 68, forest), label(235, 61, "Apprendre", cold)]
          : [stream(152, 63, 197, 63, forest), label(259, 58, "Transmettre", heat)],
    ],
  },
  craftTransmission: {
    foot: [
      "Le geste rencontre la matière",
      "La trace se compare à l’effet visé",
      "La matière guide l’ajustement du geste",
    ],
    draw: (s, id) => workbench(id, s),
  },
} satisfies Record<string, Study>;
