import {
  type Study,
  block,
  cold,
  dark,
  fillPath,
  forest,
  heat,
  label,
  link,
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
  tank,
  tile,
} from "./art";

function letter(id: string, x: number, y: number, char: string, mirror = false) {
  return moved(x, y, [
    tile(id, -23, -29, 56, 48, "steel", 10),
    <text
      key="letter"
      transform={mirror ? "translate(-4 0) scale(-1 1)" : undefined}
      textAnchor="middle"
      x="-4"
      y="12"
      fill="#eadfc1"
      stroke="#5b655b"
      strokeWidth=".45"
      fontFamily="Georgia, serif"
      fontSize="30"
      fontWeight="bold"
    >
      {char}
    </text>,
  ]);
}
function rollers(id: string, x: number, y: number, r: number) {
  return moved(x, y, [
    surface(id, `M-59 ${-r}h105v${2 * r}h-105Z`, "iron", 1.24),
    oval(46, 0, r * 0.64, r, paint(id, "steel"), dark),
    stroke(`M-55 ${-r * 0.56}h98m-98 ${r * 0.9}h99`, "#cfccaa", 1.2),
    surface(id, "M53-3h30v6H53Z", "copper"),
  ]);
}
function quill(id: string, x: number, y: number, scale: number, mode: number) {
  return moved(
    x,
    y,
    [
      surface(
        id,
        mode === 0 ? "M-14 3L89-46q26-13 30-7L74-22 8 8Z" : "M-20 1L92-42l8 3 3 9L-16 7Z",
        "copper",
        1.11,
      ),
      surface(id, "M-23 4l16-10 10 5-11 13Z", "steel", 0.9),
      stroke("M2-1l97-43m-96 47 20-8", "#e9d8a8", 1.15),
    ],
    scale,
  );
}
function framePicture(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      panel(id, 0, 0, 140, 109, "copper"),
      surface(id, "M12 12h114v83H12Z", "glass", 1.05),
      fillPath("M13 78l38-30 20 17 30-22 27 31v21H13Z", "#978968", "#7a886f", 0.9),
      stroke("M17 81l38-20 22 17m-4-10 32-19", "#d9c9a0", 1.6),
    ],
    scale,
  );
}
function press(id: string, y: number) {
  return [
    tile(id, 56, 150, 252, 23, "iron", 11),
    surface(id, "M69 62h21v89H69Zm203 0h21v89h-21Z", "copper", 1.15),
    surface(id, "M62 50h234v18H62Z", "copper", 1.31),
    stroke("M78 53h206m-212 21v67m203-66v68", "#e3c18d", 1.2),
    surface(id, `M173 54h14v${y - 54}h-14Z`, "steel", 1.1),
    ...Array.from({ length: 6 }, (_, i) => stroke(`M172 ${61 + i * 5}l17-4`, "#566961", 1.35)),
    surface(id, `M111 ${y}h135v12H111Z`, "iron", 1.14),
    stroke("M179 74h61l16-10", "#5d5244", 7.2),
    stroke("M179 72h61l16-10", "#c1a06c", 2.7),
    oval(258, 62, 6, 4.5, paint(id, "copper"), "#6d5841"),
    ...[73, 278].map((x) => [71, 145].map((v) => oval(x + 5, v, 2.8, 2.8, "#dfc38d", "#806647"))),
    ...[0, 1, 2].map((i) => stroke(`M${77 + i * 3} 82v54m${204 - i * 3} -54v54`, "#93704c", 0.73)),
    stroke("M64 65h228", "#946c48", 1.25),
  ];
}
function handSheet(id: string, x: number, y: number, scale: number, s: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M0 50l45-40h158l37 36-39 44H32Z", s === 2 ? "cream" : "glass", 1.18),
      ...[0, 1, 2, 3, 4, 5, 6].map((i) =>
        stroke(`M${30 + i * 24} 67l64-45`, s === 0 ? "#a8a076" : "#d7cba4", 1.36),
      ),
      ...(s > 0
        ? [25, 33, 42, 52, 60, 69].map((y) => stroke(`M32 ${y}h168`, "#ab9a70", 1.15))
        : []),
    ],
    scale,
  );
}
export const craftArts = {
  leadtype: {
    foot: [
      "Le caractère porte une lettre en miroir",
      "Les caractères composent une ligne",
      "Le contour numérique change d’échelle",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            tile(id, 52, 136, 260, 20, "iron", 11),
            ...(s === 0
              ? [letter(id, 171, 104, "R", true)]
              : [
                  letter(id, 87, 105, "R", true),
                  letter(id, 139, 105, "O", true),
                  letter(id, 191, 105, "M", true),
                  letter(id, 243, 105, "E", true),
                ]),
            s === 0
              ? link(258, 72, "Face encrée", "M242 78l-62 8", heat)
              : label(179, 61, "Composition", cold),
          ]
        : [
            panel(id, 87, 57, 182, 117, "cream"),
            stroke("M146 159v-80h37q34 0 34 31t-35 22h-35m37 0 31 27", cold, 2.52),
            ...[
              [146, 79],
              [183, 79],
              [217, 110],
              [182, 132],
              [146, 132],
              [215, 159],
            ].map(([x, y]) => oval(x!, y!, 3, 3, paint(id, "copper"), dark)),
            label(289, 80, "Contour", cold),
          ],
  },
  engraving: {
    foot: [
      "Les surfaces hautes impriment",
      "Le rouleau encre les reliefs",
      "Le papier reçoit le motif",
    ],
    draw: (s, id) => [
      tile(id, 62, 103, 251, 54, "copper", 15),
      surface(id, "M85 114l35-22h137l24 17-28 25H106Z", s === 2 ? "cream" : "steel", 1.05),
      stroke(
        "M120 111l20-10 16 11 19-17 18 10 18-7m-110 29h154",
        s === 0 ? "#a89771" : "#637963",
        2.3,
      ),
      s === 0
        ? [quill(id, 167, 119, 0.84, 0), link(274, 71, "Relief", "M255 77l-36 24", cold)]
        : s === 1
          ? [rollers(id, 169, 81, 12), stream(230, 77, 280, 77, heat)]
          : [
              surface(id, "M106 104l30-24h128l38 23-38 25H126Z", "cream"),
              stroke("M152 101l20-7 12 6 14-9 13 3", dark, 1.67),
              label(183, 64, "Tirage", cold),
            ],
    ],
  },
  letterForms: {
    foot: [
      "La plume plate varie le trait",
      "La gravure accentue les contrastes",
      "La grille forme des marches",
    ],
    draw: (s, id) => [
      panel(id, 68, 63, 224, 106, "cream"),
      s < 2
        ? [
            fillPath(
              s === 0
                ? "M114 147l30-62 28 62h-11l-9-21h-22l-10 21Zm19-29h16l-8-19Z"
                : "M114 148l30-66 28 66h-11l-9-22h-23l-10 22Zm19-27h17l-9-23Z",
              "#56544a",
              "#504f43",
              0.77,
            ),
            s === 0
              ? quill(id, 220, 117, 0.72, 0)
              : stroke("M197 85v69m14-69v69m14-69v69", heat, 1.2),
            label(246, 76, s === 0 ? "Plume" : "Pleins et déliés", heat),
          ]
        : [
            ...Array.from({ length: 8 }, (_, i) => [
              stroke(`M111 ${82 + i * 10}h128m-128 0`, "#aca785", 0.66),
              stroke(`M${111 + i * 18} 82v73`, "#aca785", 0.66),
            ]),
            ...[128, 146, 164, 182, 200, 218].map((x, i) =>
              block(x, 149 - i * 11, 16, 10, paint(id, "iron"), dark, 0),
            ),
            label(259, 74, "Pixel", cold),
          ],
    ],
  },
  pigmentbinder: {
    foot: [
      "Les grains donnent la couleur",
      "Le liant disperse les grains",
      "Les pigments restent dans le film",
    ],
    draw: (s, id) => [
      s === 0
        ? [
            oval(162, 135, 90, 25, paint(id, "copper"), dark),
            fillPath("M80 134q41-41 81-49 61 14 82 44-86 26-163 5Z", "#b97f5f", "#9a6250", 1.13),
            ...Array.from({ length: 17 }, (_, i) =>
              oval(
                103 + (i % 9) * 13,
                114 + Math.floor(i / 9) * 11 + (i % 3) * 3,
                2.2,
                1.8,
                "#e0ad81",
                "#a76e54",
              ),
            ),
            link(263, 79, "Poudre", "M246 84l-32 31", heat),
          ]
        : [
            tile(id, 61, 126, 259, 34, "cream", 16),
            fillPath(
              "M73 135l31-27h188l-26 22H90Z",
              s === 1 ? "#c7ab77" : "#bb815f",
              "#9f7657",
              0.92,
            ),
            ...Array.from({ length: 15 }, (_, i) =>
              oval(92 + i * 13, 127 - (i % 3) * 4, 2.5, 2.2, "#a87659", "#8f6550"),
            ),
            label(184, 87, s === 1 ? "Liant" : "Film sec", heat),
          ],
    ],
  },
  papyrussheet: {
    foot: [
      "La moelle donne des lamelles",
      "Les deux couches se croisent",
      "Pressage et séchage forment la feuille",
    ],
    draw: (s, id) => [
      s === 0
        ? [
            surface(id, "M88 127l97-63 25 14-95 68Z", "glass", 1.21),
            stroke("M101 127l90-57m-82 68 90-64", "#c8c79c", 1.33),
            ...[0, 1, 2].map((n) =>
              surface(id, `M${152 + n * 17} ${151 + n * 4}l87-52 8 7-86 57Z`, "cream", 0.94),
            ),
            fillPath("M86 127l25 16 6-7-25-15Z", "#c8bd90", "#788067", 1),
            ...[0, 1, 2, 3].map((i) =>
              stroke(`M${91 + i * 4} ${126 + i * 2.8}l94-62`, "#ddd1a4", 0.85),
            ),
            link(263, 77, "Moelle", "M238 82l-35 22", cold),
          ]
        : [
            handSheet(id, 64, 58, 0.92, 2),
            s === 1
              ? link(282, 68, "Lamelles", "M270 75l-43 38", heat)
              : [
                  tile(id, 110, 93, 164, 18, "steel", 11),
                  stream(185, 65, 185, 94, heat),
                  label(280, 70, "Presser", heat),
                ],
          ],
    ],
  },
  inkTools: {
    foot: [
      "Le carbone donne la couleur sombre",
      "Le vieillissement peut brunir l’encre",
      "La pointe et l’appui modifient le trait",
    ],
    draw: (s, id) => [
      panel(id, 64, 95, 232, 69, "cream"),
      stroke(
        s === 2 ? "M88 139q35 10 53-10 16-10 40 4t90 1" : "M95 133q27-21 56-13 39 15 110-2",
        s === 0 ? "#454b43" : "#976b4b",
        s === 2 ? 3.9 : 2.55,
      ),
      s < 2
        ? [
            tank(id, 81, 60, 39, 50, s === 0 ? "soot" : "ember", 0.48),
            quill(id, 181, 99, 0.9, 0),
            label(273, 71, s === 0 ? "Carbone" : "Teinte brune", heat),
          ]
        : [quill(id, 169, 131, 1.03, 1), link(270, 78, "Pointe", "M255 84l-76 39", cold)],
    ],
  },
  paperfibres: {
    foot: [
      "Les fibres se dispersent dans l’eau",
      "Le tamis laisse passer l’eau",
      "Le retrait d’eau rapproche les fibres",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            tank(id, 109, 66, 143, 97, "glass", 0.55),
            ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
              stroke(`M${121 + i * 13} ${110 + (i % 3) * 11}q4-6 10 0`, "#dbcb9c", 1.4),
            ),
            label(277, 71, "Fibres", cold),
          ]
        : s === 1
          ? [
              handSheet(id, 64, 49, 0.92, 1),
              ...[121, 150, 180, 212, 239].map((t) =>
                fillPath(`M${t} 137l4-7 4 7q-4 7-8 0Z`, "#8bab9f", "#567d79", 0.85),
              ),
              label(273, 65, "Tamis", cold),
            ]
          : [
              handSheet(id, 68, 85, 0.9, 2),
              rollers(id, 176, 77, 13),
              stream(238, 167, 289, 167, heat),
              label(281, 63, "Pressage", heat),
            ],
  },
  printing: {
    foot: [
      "Les caractères alignés sont encrés",
      "La vis abaisse la platine",
      "La composition peut être réutilisée",
    ],
    draw: (s, id) => [
      ...press(id, s === 1 ? 119 : 86),
      ...[124, 139, 154, 169, 185, 201, 218].map((x) =>
        surface(id, `M${x} 135h12v10h-12Z`, s === 0 ? "copper" : "steel", 0.91),
      ),
      s === 0
        ? [rollers(id, 196, 125, 8), label(272, 124, "Encre", heat)]
        : s === 1
          ? [
              fillPath("M109 130h143v5H109Z", "#e5d7af", "#b1a17f", 1.0),
              stream(257, 84, 257, 119, heat),
            ]
          : [
              surface(id, "M111 111l45-8 116 11-27 21-117-8Z", "cream", 1.06),
              stroke("M150 116l70 8m-71-2 50 6", dark, 1.3, "3 2"),
              label(269, 101, "Feuille", cold),
            ],
    ],
  },
  archivesClimate: {
    foot: [
      "Les boîtes protègent les documents",
      "Le climat est surveillé",
      "Un support ménage la reliure",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            panel(id, 47, 63, 258, 109, "iron"),
            ...[67, 126, 187, 246].map((x, i) => [
              tile(id, x, 75 + (i % 2) * 4, 49, 59, s === 0 ? "cream" : "steel", 7),
              stroke(`M${x + 4} ${100 + (i % 2) * 4}h34`, "#c0ab82", 1.28),
            ]),
            s === 1
              ? [
                  panel(id, 211, 95, 76, 45, "glass"),
                  stroke("M221 125l11-8 8 2 11-10 15 2", forest, 1.64),
                  label(172, 159, "Climat", creamText),
                ]
              : label(166, 158, "Boîtes", creamText),
          ]
        : [
            surface(id, "M68 153l53-60 61 21 55-20 58 57Z", "copper", 1.12),
            surface(
              id,
              "M98 125q45-36 81-6 43-33 86 0l-17 22q-36-16-69 4-42-21-66-7Z",
              "cream",
              1.1,
            ),
            stroke("M178 118v26m-68-15q34-18 54-3m32-2q30-12 47 0", "#aa9973", 1.36),
            label(272, 70, "Support", cold),
          ],
  },
  artRestoration: {
    foot: [
      "L’état de l’œuvre est documenté",
      "L’essai porte sur une petite zone",
      "Le traitement peut rester local",
    ],
    draw: (s, id) => [
      framePicture(id, 69, 69, 1.01),
      s === 0
        ? [
            panel(id, 234, 79, 72, 61, "cream"),
            stroke("M246 96h47m-47 15h38m-38 13h39", cold, 1.4, "3 2"),
            label(267, 63, "Constat", cold),
          ]
        : [
            stroke(s === 1 ? "M161 128h15v14h-15Z" : "M124 104h56v47h-56Z", heat, 2.1, "4 2"),
            quill(id, 225, 129, 0.63, 1),
            link(276, 65, s === 1 ? "Essai" : "Zone traitée", "M261 70l-67 42", heat),
          ],
    ],
  },
  diglayers: {
    foot: [
      "Les sondages ouvrent des fenêtres",
      "Chaque objet est relevé en place",
      "Plans et prélèvements gardent la trace",
    ],
    draw: (s, id) => [
      surface(id, "M44 76h251l28 28v49H44Z", "copper", 1.19),
      fillPath("M45 99l79 5 62-4 136 15v20H45Z", "#b7a982", "#82785d", 0.9),
      fillPath("M45 135h277v23H45Z", "#938365", "#776e58", 0.9),
      stroke(s === 0 ? "M101 78v65h70V81" : "M100 78v64m0 1h121v-45", "#daceaa", 1.7, "5 2"),
      s > 0 && [
        fillPath("M138 131l11-11 14 6 4 9-22 1Z", "#c0a76e", "#827957", 0.87),
        oval(191, 122, 5.6, 4.1, paint(id, "copper"), dark),
      ],
      s === 2
        ? [
            panel(id, 234, 59, 83, 60, "cream"),
            stroke("M247 74h54m-51 8 43 23m-49-9h51", cold, 1.22),
            label(272, 60, "Plan", cold),
          ]
        : link(252, 60, s === 1 ? "Relevé" : "Tranchée", "M237 66l-62 24", cold),
    ],
  },
  tapestryLoom: {
    foot: [
      "La chaîne est tendue à la verticale",
      "La trame traverse la chaîne",
      "Le motif couvre les fils",
    ],
    draw: (s, id) => [
      surface(id, "M69 56h18v114H69Zm203 0h18v114h-18Z", "copper", 1.15),
      surface(id, "M65 70h230v13H65Zm0 78h230v13H65Z", "iron", 1.2),
      ...Array.from({ length: 16 }, (_, i) => stroke(`M${93 + i * 11} 81v66`, "#b5a47a", 1.32)),
      s > 0 && [
        fillPath(s === 1 ? "M93 125h166v21H93Z" : "M93 92h166v54H93Z", "#9eae89", "#74896e", 0.94),
        stroke("M97 139q40-21 71 0 42-26 88-10m-147 2q54-24 105 3", heat, 2.06),
      ],
      s === 1 && stream(132, 110, 220, 110, heat),
      label(175, 64, ["Chaîne", "Trame", "Motif"][s]!, cold),
    ],
  },
} satisfies Record<string, Study>;
const creamText = "#f4e7c1";
