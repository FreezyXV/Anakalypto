import {
  type Study,
  cold,
  dark,
  duct,
  fastener,
  fillPath,
  forest,
  grounding,
  heat,
  label,
  link,
  motor,
  moved,
  oval,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tank,
  tile,
} from "./art";

function furnace(
  id: string,
  x: number,
  y: number,
  profile: "shaft" | "arc" | "convert",
  lit = true,
  scale = 1,
) {
  const shape =
    profile === "shaft"
      ? "M-48 59l11-35-9-24 13-38 4-24H30l2 24L46 0 37 26l12 33Z"
      : profile === "arc"
        ? "M-63-14h125v33l-19 35h-87l-19-34Z"
        : "M-43-39h87l-8 26 15 31-23 39h-54l-23-39 17-31Z";
  return moved(
    x,
    y,
    [
      grounding(id, 0, 66, 74),
      surface(id, shape, "iron", 1.3),
      surface(
        id,
        profile === "shaft"
          ? "M-33 48l10-25-10-24 10-34 2-17h43l4 17L33 0l-9 24 11 24Z"
          : profile === "arc"
            ? "M-53-5h105v26l-15 24h-73l-17-24Z"
            : "M-27-33h56l-4 23 14 29-20 27h-38l-21-26 16-31Z",
        lit ? "ember" : "cream",
        1.12,
      ),
      ...[0, 1, 2, 3, 4, 5, 6].map((i) =>
        stroke(`M${-35 + i * 2} ${23 - i * 7}h${22 + i * 5}`, "#d4b98e", 0.92),
      ),
      profile === "arc" &&
        [-24, 0, 25].map((a) => surface(id, `M${a - 4} -52h8v45h-8Z`, "steel", 0.9)),
      profile === "convert" && surface(id, "M-5-60h10v63H-5Z", "steel", 0.92),
      ...fastener(-34, 28, 2.1),
      ...fastener(34, 30, 2.1),
      lit && fillPath("M-26 33q13-5 24-1 12 3 26-2l-3 15h-43Z", "#e2ad61", "#9a633c", 1.05),
    ],
    scale,
  );
}

function anvil(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 55, 80),
      surface(
        id,
        "M-62 51l14-10h21l5-25-11-9-35-3-13-12 20-8h100l40 6-37 17-16 13 4 22h23l12 9Z",
        "iron",
        1.35,
      ),
      surface(id, "M-60-16h97l39 6-38 5H-68l-13-3Z", "steel", 1.18),
      stroke("M-55-1h103m-68 23h41m-79 22h110", "#a4ab91", 1.45),
      ...fastener(-50, 47, 2),
      ...fastener(50, 47, 2),
    ],
    scale,
  );
}

function hammer(id: string, x: number, y: number, angle: number) {
  return moved(x, y, [
    <g key="hammer" transform={`rotate(${angle})`}>
      {surface(id, "M-5-2h10l10 69-2 7H4Z", "copper", 1.15)}
      {surface(id, "M-37-15l6-9h56l11 8v22l-10 8h-58l-5-7Z", "steel", 1.22)}
      {stroke("M-31-16h57m-61 24h61", "#d8d6b7", 1.1)}
    </g>,
  ]);
}

function specimen(
  id: string,
  x: number,
  y: number,
  w: number,
  tone: "steel" | "copper" | "iron",
  angle = 0,
) {
  return moved(x, y, [
    <g key="specimen" transform={`rotate(${angle})`}>
      {surface(id, `M0 5l8-5h${w - 8}v10l-8 5H0Z`, tone, 1.05)}
      {stroke(`M8 3h${w - 12}`, "#e8d4a9", 1.6)}
    </g>,
  ]);
}

function nozzle(id: string, x: number, y: number, angle = 0) {
  return moved(x, y, [
    <g key="nozzle" transform={`rotate(${angle})`}>
      {surface(id, "M-24-36h49v19l-7 12H-18l-7-12Z", "steel", 1.2)}
      {surface(id, "M-12-5h23L6 10H-6Z", "copper", 1.15)}
      {stroke("M-18-28h36m-36 5h36", "#e9dbc0", 1.28)}
    </g>,
  ]);
}

function printBody(id: string, s: number, x = 92, y = 143) {
  return [
    tile(id, 64, 147, 233, 17, "iron", 12),
    ...Array.from({ length: [1, 6, 9][s]! }, (_, i) =>
      surface(id, `M${x} ${y - i * 5}l46-16h84l26 11-27 12h-87Z`, i % 2 ? "glass" : "steel", 0.94),
    ),
    s < 2 && [
      nozzle(id, 183, y - 36 - s * 19),
      stroke(`M183 ${y - 26 - s * 19}v${s === 0 ? 18 : 15}`, heat, 1.8, "3 2"),
    ],
  ];
}

function glassVessel(id: string, x: number, y: number, s: number) {
  return moved(x, y, [
    surface(
      id,
      "M-20-45h40l-6 10v17q30 10 30 39-2 29-44 31-44-2-44-31 1-28 29-39v-17Z",
      "glass",
      1.24,
    ),
    stroke("M-24-3q-25 16-10 38m20 9q28 12 46-3M-12-37h25", "#ebedcd", 1.4),
    s === 1 && fillPath("M-39 24q43-14 78 0-5 24-40 24-29 0-38-24Z", "#c99e63", "#9c764c", 0.92),
    ...[
      [-20, 18],
      [16, 23],
      [-12, 32],
    ].map(([x, y]) => oval(x!, y!, 2.8, 2.6, "none", "#ddd4af")),
  ]);
}

export const industryMaterial = {
  floatglass: {
    foot: [
      "Silice, fondant et stabilisant",
      "La fusion puis l’affinage",
      "Le verre prend forme avant recuisson",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            ...[72, 178, 283].map((x, i) => [
              surface(
                id,
                `M${x - 42} 131q21-29 42-${47 - i * 5} 20 21 41 ${47 - i * 5}Z`,
                i === 0 ? "cream" : i === 1 ? "steel" : "copper",
                1.1,
              ),
              ...Array.from({ length: 11 }, (_, n) =>
                oval(
                  x - 25 + n * 5,
                  122 - (n % 3) * 7,
                  1.5,
                  1.5,
                  ["#bdab80", "#a1af9b", "#b08863"][i]!,
                  "none",
                ),
              ),
              label(x, 158, ["Silice", "Fondant", "Chaux"][i]!, cold),
            ]),
          ]
        : s === 1
          ? [
              furnace(id, 178, 108, "arc", true, 0.79),
              ...[162, 178, 193].map((x, i) =>
                oval(x, 123 - (i % 2) * 13, 3, 3, "none", "#ebc686"),
              ),
              link(282, 110, "Bulles", "M262 116l-75 7", heat),
            ]
          : [
              glassVessel(id, 179, 109, s),
              duct("M179 65V49H89", cold),
              stream(72, 49, 135, 49, cold),
              link(274, 134, "Verre soufflé", "M246 139l-35 3", cold),
            ],
  },
  steelroutes: {
    foot: [
      "Le minerai est transformé en fonte",
      "L’oxygène réduit la teneur en carbone",
      "L’arc électrique fond des ferrailles",
    ],
    draw: (s, id) => [
      furnace(id, 178, 111, (["shaft", "convert", "arc"] as const)[s]!, true, 0.94),
      s === 0
        ? [
            duct("M42 67h104", cold),
            stream(71, 67, 134, 67, cold),
            link(281, 153, "Fonte", "M261 155l-45-9", heat),
          ]
        : s === 1
          ? [
              stream(180, 49, 180, 83, cold),
              label(253, 64, "Oxygène", cold),
              label(279, 155, "Acier", heat),
            ]
          : [
              ...[72, 101, 125].map((x, i) =>
                specimen(id, x, 120 - i * 8, 26, "iron", -19 + i * 17),
              ),
              link(278, 63, "Électrodes", "M259 70l-59 8", cold),
            ],
    ],
  },
  anvilforge: {
    foot: [
      "Le métal chaud se forme plus facilement",
      "Le marteau déforme la pièce",
      "Le profil obtenu est contrôlé",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            furnace(id, 163, 105, "arc", true, 0.79),
            specimen(id, 165, 128, 96, "copper", -9),
            link(286, 75, "Métal chaud", "M272 81l-45 44", heat),
          ]
        : [
            anvil(id, 179, 124, 0.97),
            specimen(id, 125, s === 1 ? 97 : 98, s === 1 ? 111 : 144, "copper", -2),
            s === 1
              ? [
                  hammer(id, 174, 73, -46),
                  stream(125, 69, 125, 94, heat),
                  label(276, 72, "Frapper", heat),
                ]
              : [
                  stroke("M127 96q51-5 117 0l24 7", "#546f62", 1.54, "4 3"),
                  link(298, 86, "Profil", "M285 91l-29 8", cold),
                ],
          ],
  },
  ironReduction: {
    foot: [
      "Le fer est lié à de l’oxygène",
      "Le monoxyde emporte de l’oxygène",
      "L’hydrogène l’emporte sous forme d’eau",
    ],
    draw: (s, id) => [
      surface(id, "M61 132l-14-26 20-32 58 7 28 32-19 37-45 8Z", "iron", 1.3),
      ...[0, 1, 2, 3, 4, 5, 6].map((i) => [
        oval(69 + i * 10, 95 + (i % 3) * 17, 4.6, 4.3, paint(id, "copper"), dark),
        oval(76 + i * 10, 101 + (i % 3) * 17, 2.2, 2.2, paint(id, "glass"), cold),
      ]),
      s === 0
        ? link(242, 110, "Oxygène lié", "M206 116l-69 1", cold)
        : [
            stream(160, 115, 221, 115, heat),
            tank(id, 228, 86, 69, 63, s === 1 ? "steel" : "glass", 0.55),
            label(267, 69, s === 1 ? "CO₂" : "H₂O", s === 1 ? heat : cold),
            label(180, 97, s === 1 ? "CO" : "H₂", heat),
          ],
    ],
  },
  bloomFurnace: {
    foot: [
      "Le four reçoit minerai et charbon",
      "Le gaz retire une part d’oxygène",
      "Le fer reste mêlé de scories",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            furnace(id, 181, 114, "shaft", s === 1, 0.92),
            ...[125, 151, 172, 196].map((x, i) =>
              oval(x, 59 + (i % 2) * 11, 3.8, 3.7, paint(id, i % 2 ? "copper" : "soot"), dark),
            ),
            s === 1 ? stream(183, 139, 183, 94, heat) : stream(183, 53, 183, 76, cold),
            link(
              280,
              76,
              s === 0 ? "Charge" : "Gaz réducteur",
              "M254 82l-52 16",
              s === 0 ? cold : heat,
            ),
          ]
        : [
            surface(id, "M87 128l25-31 29 3 42-19 42 13 46 32-29 24-89 13-55-11Z", "iron", 1.35),
            ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
              fillPath(
                `M${110 + i * 14} ${115 + (i % 3) * 9}l13-10 10 9-5 10Z`,
                i % 3 ? "#a98c65" : "#5f6e5e",
                dark,
                0.82,
              ),
            ),
            link(254, 69, "Loupe", "M249 76l-41 19", heat),
            link(88, 170, "Scories", "M96 159l19-20", cold),
          ],
  },
  ironCarbon: {
    foot: [
      "Le fer forgé est très pauvre en carbone",
      "Les aciers couvrent une plage",
      "La fonte est plus riche en carbone",
    ],
    draw: (s, id) => [
      tile(id, 58, 79, 244, 72, s === 0 ? "steel" : s === 1 ? "iron" : "soot", 15),
      ...[0, 1, 2, 3, 4].map((y) => stroke(`M63 ${103 + y * 12}h221`, "#a4ac93", 0.72, "4 4")),
      ...Array.from({ length: [3, 10, 28][s]! }, (_, i) =>
        oval(
          74 + (i % 9) * 24 + (i % 3) * 2,
          109 + Math.floor(i / 9) * 14 + (i % 3) * 2,
          2.7,
          2.7,
          paint(id, "copper"),
          "#97764c",
        ),
      ),
      label(174, 62, ["Fer forgé", "Acier", "Fonte"][s]!, cold),
      label(178, 177, "Carbone · présence illustrée", heat),
    ],
  },
  steeltemper: {
    foot: [
      "L’acier chauffe avant la trempe",
      "La trempe refroidit rapidement",
      "Le revenu ajuste les propriétés",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            tank(id, 121, 88, 122, 66, "glass", 0.47),
            specimen(id, 171, 67, 69, "copper", 72),
            ...[132, 149, 170, 215].map((x, i) =>
              oval(x, 108 + (i % 2) * 13, 3, 4, "none", "#cbd9b9"),
            ),
            link(270, 69, "Trempe", "M257 75l-45 20", cold),
          ]
        : [
            furnace(id, 173, 110, s === 0 ? "arc" : "convert", true, 0.8),
            specimen(id, 141, 121, 74, s === 0 ? "copper" : "steel", -2),
            label(268, 72, s === 0 ? "Chauffer" : "Réchauffer", heat),
          ],
  },
  threadFit: {
    foot: [
      "Le pas se mesure le long de l’axe",
      "Les profils compatibles s’emboîtent",
      "Le décalage se cumule",
    ],
    draw: (s, id) => {
      const pitch = s === 2 ? 31 : 24;
      return [
        surface(id, "M39 88l21-18h37v76H60l-21-18Z", "iron", 1.24),
        surface(id, "M97 96h211v29H97Z", "steel", 1.15),
        ...Array.from({ length: 8 }, (_, i) => stroke(`M${108 + i * 24} 92l-8 35`, "#435e56", 2.5)),
        s === 0
          ? [stroke("M156 68h24m-24-6v15m24-15v15", heat, 1.58), label(168, 55, "Pas", heat)]
          : [
              surface(id, "M102 142h204v28H102Z", "copper", 1.18),
              ...Array.from({ length: s === 2 ? 6 : 8 }, (_, i) =>
                stroke(`M${110 + i * pitch} 144l-8 20`, s === 2 ? heat : forest, 2.4),
              ),
              s === 2
                ? link(264, 68, "Décalage", "M265 75l-13 67", heat)
                : label(273, 71, "Compatible", forest),
            ],
      ];
    },
  },
  interchangefit: {
    foot: [
      "Les dimensions peuvent différer",
      "La jauge vérifie la cote",
      "Une pièce conforme peut se substituer",
    ],
    draw: (s, id) => [
      ...[68, 196].map((x, i) => [
        tile(id, x, 96, 99, 42, s === 0 && i === 1 ? "copper" : "steel", 13),
        oval(
          x + 42,
          112,
          i === 1 && s === 0 ? 18 : 12,
          i === 1 && s === 0 ? 15 : 10,
          paint(id, "soot"),
          dark,
        ),
      ]),
      s === 1
        ? [
            surface(id, "M80 55h202v14H80Z", "iron"),
            stroke("M120 69v29m41-28v28m5-38h94", paint(id, "steel"), 5),
            label(200, 59, "Jauge", cold),
          ]
        : s === 2
          ? [stream(186, 159, 237, 159, forest), label(187, 71, "Même cote", forest)]
          : label(175, 63, "Écart de taille", heat),
    ],
  },
  compositeply: {
    foot: [
      "Les fibres résistent selon leur axe",
      "La matrice solidarise les fibres",
      "Les orientations se complètent",
    ],
    draw: (s, id) => [
      ...Array.from({ length: s === 2 ? 3 : 1 }, (_, i) => [
        tile(id, 67, 83 + i * 20, 238, 28, s === 1 ? "glass" : i % 2 ? "copper" : "steel", 15),
        ...Array.from({ length: 11 }, (_, n) =>
          stroke(
            `M${78 + n * 19} ${102 + i * 20}l${i % 2 ? -13 : 12} -13`,
            i % 2 ? "#eddaa0" : "#4f756b",
            1.62,
          ),
        ),
      ]),
      link(
        245,
        60,
        s === 0 ? "Fibres" : s === 1 ? "Matrice" : "Couches",
        "M235 66l-25 26",
        s === 0 ? cold : heat,
      ),
    ],
  },
  lathemill: {
    foot: ["Au tour, la pièce tourne", "L’outil suit une avance", "À la fraiseuse, l’outil tourne"],
    draw: (s, id) => [
      tile(id, 42, 141, 282, 25, "iron", 12),
      s === 2
        ? [
            motor(id, 175, 59, 0.55),
            nozzle(id, 184, 99),
            specimen(id, 130, 128, 99, "steel"),
            stream(137, 160, 209, 160, heat),
            link(275, 83, "Fraise", "M252 87l-60 12", heat),
          ]
        : [
            rotor(id, 104, 108, 32, "copper"),
            surface(id, "M104 92h116l17 14-13 14H104Z", "steel", 1.23),
            oval(226, 105, 14, 13, paint(id, "iron"), dark),
            nozzle(id, s === 1 ? 201 : 258, 119, 112),
            s === 1
              ? stream(266, 139, 220, 139, heat)
              : link(185, 65, "Pièce", "M185 70l-32 21", cold),
          ],
    ],
  },
  printlayers: {
    foot: ["Le trajet trace la base", "Les couches s’empilent", "Le volume vient des trajets"],
    draw: (s, id) => [
      ...printBody(id, s),
      link(
        284,
        63,
        s === 0 ? "Buse" : s === 1 ? "Couches" : "Pièce",
        "M267 69l-44 22",
        s === 0 ? heat : cold,
      ),
    ],
  },
  weaveloom: {
    foot: [
      "Les fibres s’étirent et se tordent",
      "La trame croise la chaîne",
      "Le fil passe dessus puis dessous",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            ...[0, 1, 2, 3, 4].map((i) =>
              stroke(`M42 ${78 + i * 17}q49-7 90 ${31 - i * 17}t86 0`, "#ac8860", 1.67),
            ),
            surface(id, "M227 95h63v27h-63Z", "copper"),
            oval(290, 109, 15, 14, paint(id, "cream"), dark),
            ...Array.from({ length: 9 }, (_, i) =>
              stroke(`M${229 + i * 6} 98v18`, "#efe0b3", 1.12),
            ),
            label(275, 161, "Fil", heat),
          ]
        : [
            panel(id, 63, 59, 236, 108, "iron"),
            ...[83, 104, 125, 146, 167, 188, 209, 230, 251, 272].map((x) =>
              stroke(`M${x} 71v83`, "#d9c295", 2.2),
            ),
            ...[87, 104, 120, 138].map((y, i) =>
              stroke(
                s === 1
                  ? `M73 ${y}h216`
                  : `M73 ${y}h26l7 ${i % 2 ? 7 : -7}h12l10 ${i % 2 ? -7 : 7}h21l9 ${i % 2 ? 7 : -7}h13l9 ${i % 2 ? -7 : 7}h17l8 ${i % 2 ? 7 : -7}h12l8 ${i % 2 ? -7 : 7}h48`,
                "#8bab9d",
                2.65,
              ),
            ),
            label(142, 177, "Chaîne", heat),
            label(221, 177, "Trame", cold),
          ],
  },
  foundrycast: {
    foot: [
      "Le modèle laisse une cavité",
      "Le métal remplit le moule",
      "On récupère la forme solidifiée",
    ],
    draw: (s, id) =>
      s === 2
        ? [
            anvil(id, 173, 127, 0.56),
            surface(id, "M96 102l29-21h118l21 22-18 17h-113Z", "steel", 1.35),
            ...fastener(131, 100, 6),
            ...fastener(228, 100, 6),
            label(184, 69, "Pièce extraite", cold),
          ]
        : [
            tile(id, 61, 72, 243, 92, "cream", 16),
            surface(
              id,
              "M89 118l38-10 44 21h41l36-22 28 10v21l-37 11H125l-36-14Z",
              s === 1 ? "copper" : "soot",
              1.2,
            ),
            stroke("M61 118h31m183 0h14", "#a99b73", 1.3),
            s === 1
              ? [
                  duct("M184 79v53", heat),
                  stream(184, 81, 184, 120, heat),
                  label(278, 62, "Coulée", heat),
                ]
              : link(284, 65, "Cavité", "M265 72l-28 39", cold),
          ],
  },
  materialForming: {
    foot: [
      "L’outil enlève de la matière",
      "La presse déforme le métal",
      "Le dépôt ajoute de la matière",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            tile(id, 64, 119, 244, 27, "steel", 14),
            nozzle(id, 168, 103, 124),
            ...[129, 139, 151, 167, 175].map((x, i) =>
              stroke(`M${x} ${101 - (i % 2) * 13}l8-5`, heat, 1.7),
            ),
            label(255, 73, "Usiner", heat),
          ]
        : s === 1
          ? [
              tile(id, 54, 143, 249, 22, "iron", 13),
              surface(id, "M137 67h98v31l-49 28-49-25Z", "steel"),
              surface(id, "M77 128h50l54 11 56-10h47v10h-49l-55 12-55-13H77Z", "copper"),
              stream(259, 74, 259, 123, heat),
              label(280, 60, "Presse", cold),
            ]
          : [...printBody(id, 1, 114, 142), label(282, 74, "Dépôt", heat)],
  },
  weldjoint: {
    foot: [
      "Deux bords se rencontrent",
      "Une zone limitée entre en fusion",
      "Le cordon solidifié relie les pièces",
    ],
    draw: (s, id) => [
      tile(id, 45, 91, 135, 57, "steel", 16),
      tile(id, 182, 91, 135, 57, "iron", 16),
      stroke("M173 102v61", "#d9c297", 2),
      s === 1
        ? [
            nozzle(id, 176, 107, -34),
            oval(177, 130, 17, 7, paint(id, "ember"), heat),
            ...[0, 1, 2, 3, 4].map((i) =>
              stroke(`M177 129l${(i - 2) * 9} -${14 + (i % 2) * 6}`, heat, 1.3),
            ),
          ]
        : s === 2
          ? [
              stroke("M178 108v48", paint(id, "copper"), 7),
              stroke("M177 110v47", "#ead6a1", 1.9, "4 4"),
            ]
          : [],
      link(
        268,
        65,
        s === 0 ? "Joint" : s === 1 ? "Bain" : "Cordon",
        "M254 72l-67 43",
        s === 0 ? cold : heat,
      ),
    ],
  },
} satisfies Record<string, Study>;
