import {
  type Study,
  cold,
  dark,
  duct,
  fastener,
  fillPath,
  forest,
  heat,
  joint,
  label,
  link,
  motor,
  moved,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tank,
  tile,
} from "./art";
import { makerArm } from "./industryLogistics";

function masonry(id: string, x: number, y: number, n: number, tone: "cream" | "copper" | "steel") {
  return moved(x, y, [
    ...Array.from({ length: n }, (_, i) => {
      const x = (i % 3) * 51 + (Math.floor(i / 3) % 2) * 12,
        y = Math.floor(i / 3) * 22;
      return [
        tile(id, x, y, 58, 18, tone, 9),
        stroke(`M${x + 4} ${y + 15}l22 2m4 6 13-1`, "#b39767", 0.96, "4 3"),
      ];
    }),
  ]);
}

function rock(
  id: string,
  x: number,
  y: number,
  scale: number,
  tone: "cream" | "iron" | "copper" | "steel" = "cream",
) {
  return moved(
    x,
    y,
    [
      surface(id, "M-36 17l-5-26 16-20 39-2 24 18 2 24-20 17h-38Z", tone, 1.22),
      surface(id, "M-36 17l14-17 42-16 20 27-20 17h-38Z", tone, 0.94),
      stroke("M-24-26l7 16 22-4 14 8m-52 15 15 2 16-6m13 13 19-9", "#ad9c70", 1.25),
    ],
    scale,
  );
}

function kiln(id: string, x: number, y: number, s: number, w = 141) {
  return moved(x, y, [
    surface(id, `M0 13l20-13h${w - 30}l15 13v73l-12 11H2Z`, "iron", 1.26),
    surface(id, `M12 19h${w - 20}v64H12Z`, s > 0 ? "ember" : "cream"),
    stroke(
      `M14 34h${w - 24}m-${w - 24} 12h${w - 24}m-${w - 24} 13h${w - 24}m-${w - 24} 11h${w - 24}`,
      "#bd9c72",
      1.25,
      "7 3",
    ),
    ...fastener(9, 12),
    ...fastener(w - 5, 82),
    s > 0 && fillPath(`M22 75l10-17 13 8 12-15 18 16 14-9 10 16Z`, "#eab368", "#956b47", 0.95),
  ]);
}

function concreteModel(id: string, s: number, bridge: boolean) {
  const projection = bridge ? 45 : 61;
  return [
    tile(id, 52, 153, 254, 15, "iron", 10),
    ...Array.from({ length: [1, 6, 10][s]! }, (_, i) => {
      const y = 147 - i * 6,
        end = bridge ? 212 : 224;
      const d = bridge ? `M83 ${y}q86 -73 183 -5` : `M84 ${y}l48 -23h${end - 132}l36 23h-73`;
      return [stroke(d, i % 2 ? "#667d6c" : "#a8a78b", 6.4), stroke(d, "#cfc7a3", 1.18)];
    }),
    s < 2 && [
      surface(id, `M164 ${79 - s * 17}h33v26l-15 16-18-15Z`, "steel", 1.2),
      stream(182, 112 - s * 17, 182, 135 - s * 17, heat),
      stroke(`M132 ${projection}h111`, dark, 3.8),
    ],
  ];
}

function supports(id: string, y: number) {
  return [
    surface(id, `M59 ${y}l17-26 16 26ZM267 ${y}l17-26 16 26Z`, "iron", 1.2),
    tile(id, 43, y, 66, 8, "steel", 7),
    tile(id, 249, y, 68, 8, "steel", 7),
  ];
}

function bridgeProfile(id: string, y: number, s: number) {
  return [
    surface(id, `M36 ${y}l21-12h250l16 12v15H36Z`, "steel", 1.3),
    surface(id, `M65 ${y + 15}h21v50H65Zm201 0h21v50h-21Z`, "iron"),
    stroke(`M43 ${y + 6}h271m-203-8h14m14 0h14m14 0h14m14 0h14m14 0h14`, "#e1ddc2", 1.38),
    ...[73, 277].map((x) => tile(id, x - 14, y + 60, 46, 8, "steel", 7)),
    s > 0 && stroke(`M193 ${y - 11}v23l-5 12 7 11 2 11`, s === 1 ? heat : cold, 1.6, "3 2"),
  ];
}

function topDrone(id: string, x: number, y: number, scale: number, angle = 0) {
  return moved(
    x,
    y,
    [
      <g key="airframe" transform={`rotate(${angle})`}>
        {stroke("M-67-35L67 35M-67 35L67-35", paint(id, "iron"), 8.2)}
        {surface(id, "M-23-17l14-8h17l16 9v32l-16 8h-18l-13-8Z", "glass", 1.25)}
      </g>,
    ],
    scale,
  );
}

export const structures = {
  materialRecovery: {
    foot: [
      "L’aspect fournit de premiers indices",
      "Une mesure peut confirmer la matière",
      "L’état aide à choisir une filière",
    ],
    draw: (s, id) => [
      tile(id, 61, 97, 128, 26, s === 0 ? "steel" : "iron", 14),
      tile(id, 93, 119, 107, 30, "copper", 12),
      stroke("M75 110l41-4m-28 15 31-4m-20 21 41-3", "#dfcbaa", 1.2, "5 3"),
      s === 0
        ? link(238, 76, "Surface", "M220 82l-62 24", cold)
        : s === 1
          ? [
              panel(id, 225, 75, 67, 71, "steel"),
              stroke("M237 92h44m-38 10h34m-39 16h43", forest, 1.4),
              label(262, 62, "Mesure", cold),
            ]
          : [
              stream(211, 115, 254, 89, forest),
              stream(211, 130, 253, 151, heat),
              label(280, 70, "Réemploi", forest),
              label(281, 173, "Recyclage", heat),
            ],
    ],
  },
  claybrick: {
    foot: [
      "La terre prend la forme du moule",
      "L’eau libre s’évacue",
      "La brique devient une céramique",
    ],
    draw: (s, id) =>
      s === 2
        ? [
            kiln(id, 74, 63, 2, 208),
            masonry(id, 122, 98, 6, "copper"),
            label(277, 174, "Cuisson", heat),
          ]
        : [
            tile(id, 62, 136, 224, 20, "steel", 12),
            masonry(id, s === 0 ? 124 : 91, s === 0 ? 109 : 103, s === 0 ? 2 : 6, "copper"),
            s === 0
              ? [
                  surface(id, "M104 74h140v23H104Z", "steel"),
                  stream(181, 91, 181, 108, heat),
                  label(180, 63, "Moule", cold),
                ]
              : [
                  ...[107, 160, 209].map((x) => stroke(`M${x} 111q12-27 4-49`, cold, 1.5, "4 3")),
                  label(262, 60, "Vapeur", cold),
                ],
          ],
  },
  limecycle: {
    foot: [
      "La cuisson libère du CO₂",
      "La chaux vive réagit avec l’eau",
      "La chaux aérienne reprend du CO₂",
    ],
    draw: (s, id) => [
      s === 0
        ? [
            rock(id, 73, 112, 0.82),
            kiln(id, 124, 80, 1, 118),
            rock(id, 286, 113, 0.65, "steel"),
            duct("M195 81V66h64", heat),
            label(284, 63, "CO₂", heat),
          ]
        : s === 1
          ? [
              rock(id, 74, 111, 0.81, "cream"),
              tank(id, 221, 94, 91, 57, "glass", 0.55),
              stream(122, 109, 212, 109, cold),
              label(163, 86, "Eau", cold),
            ]
          : [
              tile(id, 76, 108, 217, 46, "cream", 14),
              ...[96, 132, 174, 217, 262].flatMap((x) => stream(x, 68, x, 114, cold)),
              label(179, 58, "CO₂ de l’air", cold),
              label(183, 167, "Carbonatation", heat),
            ],
    ],
  },
  detailCementKiln: {
    foot: [
      "Le mélange apporte du calcium",
      "Le four produit le clinker",
      "Calcination et énergie émettent du CO₂",
      "Le clinker entre dans le ciment",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            ...[85, 127, 162].map((x, i) => rock(id, x, 106 + (i % 2) * 13, 0.68, "cream")),
            tile(id, 194, 88, 114, 49, "steel", 13),
            stream(173, 112, 208, 112, forest),
            label(118, 62, "Calcaire", cold),
          ]
        : s < 3
          ? [
              surface(id, "M48 99l29-21 189 16 28 23-19 29-203-18Z", "steel", 1.4),
              surface(id, "M77 88l187 14 21 16-16 17-199-17Z", "ember", 1.2),
              stroke("M83 106l22-6 146 12 16 10", "#e8be78", 1.4),
              ...fastener(114, 101, 2.1),
              ...fastener(227, 111, 2.1),
              s === 2
                ? [
                    stream(118, 89, 118, 62, heat),
                    stream(243, 96, 243, 62, heat),
                    label(95, 58, "Matière", heat),
                    label(260, 58, "Énergie", heat),
                  ]
                : [link(236, 62, "Four rotatif", "M228 70l-20 27", heat)],
            ]
          : [
              ...[73, 109, 143].map((x, i) => rock(id, x, 127 - (i % 2) * 21, 0.54, "copper")),
              surface(id, "M220 86l18-11h47l15 11v65h-80Z", "cream"),
              stroke("M228 90h65m-64 44h63", "#a7a383", 1.4),
              stream(158, 116, 216, 116, cold),
              label(95, 75, "Clinker", heat),
              label(262, 63, "Ciment", cold),
            ],
  },
  concreteprint: {
    foot: [
      "La buse suit un trajet calculé",
      "Les cordons s’empilent",
      "La paroi est une partie du bâtiment",
    ],
    draw: (s, id) => [
      ...concreteModel(id, s, false),
      s === 2
        ? [
            stroke("M82 94l91-48 103 41m-81-32v64", "#657b6f", 1.5, "4 3"),
            label(283, 55, "Toit à ajouter", cold),
          ]
        : label(271, 76, s === 0 ? "Buse" : "Cordons", heat),
    ],
  },
  rebarbeam: {
    foot: [
      "La charge courbe la poutre",
      "Le haut se comprime, le bas s’étire",
      "L’acier travaille dans la partie tendue",
    ],
    draw: (s, id) => [
      ...supports(id, 149),
      surface(id, "M62 112q116 39 236 0v19q-123 36-236 0Z", "cream", 1.35),
      stream(178, 58, 178, 118, heat),
      s > 0 &&
        stroke(
          "M66 118q109 26 224 1m-224 8q102 35 224 0",
          s === 1 ? heat : cold,
          2.2,
          s === 1 ? "5 3" : undefined,
        ),
      s === 1
        ? [label(271, 79, "Compression", heat), label(98, 174, "Traction", cold)]
        : s === 2
          ? link(263, 81, "Armatures", "M249 86l-32 58", cold)
          : label(261, 71, "Charge", heat),
    ],
  },
  aqueductslope: {
    foot: [
      "Une pente faible suit le trajet",
      "L’ouvrage franchit le creux",
      "L’eau descend à surface libre",
    ],
    draw: (s, id) => [
      fillPath("M24 104l82-16 68 65 67-39 95-23v79H24Z", "#c1b58a", "#858269", 1.06),
      stroke("M30 133l65-16 75 54 68-32 90-18", "#e0ce9e", 1.55),
      s > 0 && [
        surface(id, "M101 104l23-8v62h-22Zm57 11h23v50h-23Zm63 3h22v34h-22Z", "cream", 1.13),
        stroke("M103 123h21m34 14h23m40-6h23", "#aaa380", 1),
      ],
      stroke("M34 87l290 38", paint(id, "iron"), 8.3),
      stroke("M34 85l290 38", cold, 3.2),
      s === 2
        ? stream(160, 103, 238, 113, cold)
        : link(172, 61, s === 0 ? "Canal" : "Franchissement", "M181 66l-16 32", cold),
    ],
  },
  gravitydam: {
    foot: [
      "La pression augmente en profondeur",
      "L’assise transmet l’effort au rocher",
      "La voûte transmet vers les flancs",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            fillPath("M37 73h126v85H37Z", "#8aa9a5", "#5d8581", 1.06),
            stroke("M44 79q20-4 39 0t45 0", "#c7ddd1", 1.28),
            surface(id, s === 0 ? "M155 58h25v103h-25Z" : "M150 58h20l67 103h-87Z", "steel", 1.24),
            tile(id, 42, 158, 270, 11, "iron", 10),
            ...[82, 105, 129, 150].flatMap((y, i) => stream(132 - i * 17, y, 152, y, cold)),
            s === 1 && link(272, 92, "Base large", "M251 101l-53 53", heat),
          ]
        : [
            fillPath("M45 73h272v74H45Z", "#8aa9a5", "#5d8581", 1.05),
            stroke("M63 148q116-96 234 0", paint(id, "steel"), 13),
            fillPath("M37 73h23v90H37Zm264 0h22v90h-22Z", "#a89673", "#766d55", 1),
            stream(152, 101, 78, 140, heat),
            stream(217, 104, 286, 140, heat),
            label(177, 64, "Vue de dessus", cold),
          ],
  },
  roadDrainage: {
    foot: [
      "La chaussée transmet les charges",
      "Le bombement guide l’eau vers les bords",
      "Un drain peut capter l’eau",
    ],
    draw: (s, id) => [
      ...[0, 1, 2].map((i) =>
        surface(
          id,
          `M45 ${116 + i * 16}l134-${s === 0 ? 0 : 12} 136 ${s === 0 ? 0 : 12}v12H45Z`,
          i === 0 ? "iron" : i === 1 ? "copper" : "cream",
          1.15,
        ),
      ),
      stroke("M53 119h252m-253 31h250", "#c1bc94", 1.1, "7 3"),
      s === 0
        ? stream(180, 60, 180, 112, heat)
        : [
            stream(146, 106, 94, 112, cold),
            stream(215, 106, 264, 112, cold),
            s === 2 && [duct("M288 123v25h29", cold), ...joint(id, 316, 148, 9, "glass")],
          ],
      label(
        s === 2 ? 278 : 180,
        66,
        s === 0 ? "Charge" : s === 1 ? "Profil" : "Drain",
        s === 0 ? heat : cold,
      ),
    ],
  },
  bridgeinspection: {
    foot: [
      "L’eau peut passer par un joint",
      "La trace guide l’inspection",
      "Les relevés suivent l’évolution",
    ],
    draw: (s, id) => [
      ...bridgeProfile(id, 89, s),
      s < 2
        ? [
            stroke("M182 76q-7-14-14-23m31 23q3-10 13-19", "#527d7d", 1.8, "3 2"),
            stream(193, 62, 193, 90, cold),
            s === 1 && link(272, 159, "Trace humide", "M255 151l-56-29", heat),
            s === 0 && label(274, 59, "Joint", cold),
          ]
        : [
            panel(id, 210, 47, 105, 76, "cream"),
            stroke("M223 90l15-9 16 1 11-11 38 3", heat, 1.78),
            label(260, 62, "Relevés", cold),
          ],
    ],
  },
  arch: {
    foot: [
      "Le cintre porte les pierres",
      "La clé ferme l’anneau",
      "Les appuis reprennent une poussée",
    ],
    draw: (s, id) => [
      ...Array.from({ length: 9 }, (_, i) => {
        if (i === 4 && s === 0) return null;
        const start = Math.PI - (i * Math.PI) / 9 - 0.008;
        const end = Math.PI - ((i + 1) * Math.PI) / 9 + 0.008;
        const polar = (r: number, a: number) =>
          `${(180 + r * Math.cos(a)).toFixed(2)} ${(154 - r * Math.sin(a)).toFixed(2)}`;
        const outline = `M${polar(103, start)}A103 103 0 0 1 ${polar(103, end)}L${polar(73, end)}A73 73 0 0 0 ${polar(73, start)}Z`;
        return [
          surface(id, outline, i === 4 ? "copper" : "cream", 1.08),
          stroke(
            `M${polar(99, start - 0.027)}A99 99 0 0 1 ${polar(99, end + 0.027)}`,
            "#e8dcc0",
            1.1,
          ),
        ];
      }),
      tile(id, 64, 151, 64, 25, "cream", 9),
      tile(id, 235, 151, 64, 25, "cream", 9),
      stroke("M73 174h47m127 0h44", "#9d9272", 1.3),
      s === 0
        ? [
            stroke("M104 154q76-149 151 0m-130-19 32 19 24-81 19 81 31-23", paint(id, "iron"), 2.6),
            label(181, 157, "Cintre", cold),
          ]
        : s === 1
          ? link(269, 61, "Clé", "M248 65l-65-5", heat)
          : [stream(91, 147, 51, 154, heat), stream(269, 147, 306, 154, heat)],
    ],
  },
  baseisolation: {
    foot: [
      "Le sol entraîne les fondations",
      "Les appuis autorisent un déplacement",
      "Le bâtiment peut moins bouger",
    ],
    draw: (s, id) => [
      tile(id, 38, 151, 289, 19, "iron", 10),
      tile(id, s === 0 ? 86 : 100, 133, 176, 15, "steel", 10),
      surface(id, "M114 57h133v75H114Z", "glass", 1.2),
      ...[0, 1, 2, 3].map((i) => stroke(`M${122 + i * 37} 62v68`, "#637c72", 1.38)),
      stroke("M116 81h129m-129 25h129m-129 18h129", "#ebead0", 1.5),
      s > 0 &&
        [137, 221].map((x) => [
          surface(id, `M${x} 141h17l9 15h-17Z`, "copper"),
          stroke(`M${x - 1} 145h20m-16 5h20`, "#e6d4a3", 1.12),
        ]),
      stream(46, 156, 93, 156, heat),
      s === 2
        ? stream(251, 77, 275, 77, cold)
        : s === 1
          ? link(275, 137, "Appui souple", "M255 141l-25 9", heat)
          : label(279, 125, "Sol mobile", heat),
    ],
  },
  printedBridge: {
    foot: [
      "Une buse trace le cordon",
      "Les couches construisent l’élément",
      "Les éléments sont assemblés en arc",
    ],
    draw: (s, id) => [
      ...concreteModel(id, s, true),
      s === 2
        ? [
            surface(id, "M61 91h234v12H61Z", "steel"),
            ...supports(id, 167),
            label(272, 68, "Assemblage", cold),
          ]
        : link(284, 68, s === 0 ? "Trajet" : "Couches", "M261 74l-33 19", heat),
    ],
  },
  deploystructure: {
    foot: [
      "Le faisceau occupe peu de place",
      "Les barres gardent leur longueur",
      "Le maintien stabilise la structure",
    ],
    draw: (s, id) => {
      const x = [156, 116, 85][s]!;
      const shift = 180 - x;
      const apex = Math.round(151 - Math.sqrt(108 ** 2 - shift ** 2));
      return [
        tile(id, 48, 153, 269, 15, "iron", 10),
        stroke(`M${x} 151L180 ${apex}l${shift} ${151 - apex}`, "#43564d", 9),
        stroke(`M${x} 151L180 ${apex}l${shift} ${151 - apex}`, paint(id, "steel"), 6.2),
        ...joint(id, x, 152, 8),
        ...joint(id, 360 - x, 152, 8),
        ...joint(id, 180, apex, 8, "copper"),
        s === 2 && [
          stroke(`M${x} 149h${shift * 2}`, paint(id, "copper"), 4),
          label(179, 141, "Maintien", heat),
        ],
        s === 1 && [stream(137, 113, 106, 113, cold), stream(225, 113, 255, 113, cold)],
        s === 0 && label(242, 106, "Articulations", cold),
      ];
    },
  },
  actuatorarm: {
    foot: [
      "Le moteur donne une rotation",
      "Le liquide pousse le piston",
      "L’air comprimé pousse le piston",
    ],
    draw: (s, id) => [
      makerArm(id, 181, 146, 1.04, s),
      s === 0
        ? motor(id, 102, 108, 0.61)
        : [
            surface(id, "M47 98h90l14 19-12 21H47Z", s === 1 ? "glass" : "steel"),
            surface(id, `M${s === 1 ? 92 : 118} 101h9v32h-9Z`, "copper"),
            duct("M53 99V76h46", s === 1 ? cold : heat),
            stream(65, 118, s === 1 ? 91 : 113, 118, s === 1 ? cold : heat),
          ],
      label(92, 62, s === 0 ? "Moteur" : s === 1 ? "Liquide" : "Air", s === 1 ? cold : heat),
      label(234, 174, "Articulation", cold),
    ],
  },
  motortorque: {
    foot: [
      "La bobine est dans le champ",
      "Les forces créent une rotation",
      "La commutation entretient le mouvement",
    ],
    draw: (s, id) => [
      surface(id, "M46 80h73v62H46Z", "steel"),
      surface(id, "M243 80h70v62h-70Z", "copper"),
      stroke("M56 90h52m145 0h47", "#e9dcc2", 1.32),
      ...[92, 115, 131].map((y) => stroke(`M118 ${y}h122`, cold, 1.2, "5 3")),
      surface(
        id,
        s === 0
          ? "M142 96l64-19 21 36-64 18Z"
          : s === 1
            ? "M135 111l79-23 11 22-79 22Z"
            : "M153 81l25-5 40 48-26 11Z",
        "copper",
        1.25,
      ),
      stroke("M160 97l43-12m-48 18 54-13m-51 19 53-13", heat, 1.35),
      ...joint(id, 181, 111, 8),
      s > 0 && [stream(143, 115, 143, 89, heat), stream(219, 104, 219, 131, heat)],
      s === 2 ? label(177, 163, "Courant inversé", heat) : label(178, 163, "Bobine", cold),
    ],
  },
  quadcopter: {
    foot: [
      "Les diagonales tournent en sens opposés",
      "La poussée équilibre le poids",
      "L’inclinaison ajoute une poussée latérale",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            topDrone(id, 180, 107, 1.28),
            ...[
              [95, 62],
              [265, 62],
              [95, 152],
              [265, 152],
            ].map(([x, y], i) => [
              rotor(id, x!, y!, 19, i === 0 || i === 3 ? "copper" : "steel", (i % 2) * 18),
              s === 0
                ? stroke(
                    i === 0 || i === 3
                      ? `M${x! - 17} ${y! - 2}q7-20 26-9m-6-4 6 4-7 1`
                      : `M${x! + 14} ${y! - 11}q-19-11-29 10m1-7-1 7 6-4`,
                    i === 0 || i === 3 ? heat : cold,
                    1.65,
                  )
                : stream(x!, y! + 13, x!, y! - 12, forest),
            ]),
            s === 1 ? label(180, 58, "Poussée", forest) : [],
          ]
        : [
            topDrone(id, 176, 108, 1.2, -16),
            ...[
              [91, 88],
              [251, 72],
              [106, 155],
              [266, 136],
            ].map(([x, y], i) => rotor(id, x!, y!, 18, i % 2 ? "copper" : "steel")),
            stream(176, 106, 236, 48, forest),
            stream(181, 107, 235, 107, cold),
            link(284, 108, "Vers l’avant", "M264 113l-21-5", cold),
          ],
  },
} satisfies Record<string, Study>;
