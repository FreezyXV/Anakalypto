import {
  type Study,
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

export function earthSlice(id: string, top: number, base: number, wet = false) {
  return [
    surface(id, `M26 ${top}q60-8 119 2 70-12 189 0v${base - top}H26Z`, "copper", 1.14),
    fillPath(
      `M27 ${top + 24}q46 7 81-2 74-8 131 6l94-4v${base - top - 19}H27Z`,
      wet ? "#91a798" : "#9d8760",
      "#8d8866",
      1.05,
    ),
    stroke(`M32 ${top + 13}q75 4 120-1 75 4 174-3m-294 23q53 9 107 0 77-6 166 4`, "#cfbb8f", 1.28),
    ...Array.from({ length: 28 }, (_, i) => {
      const x = 34 + i * 10.4,
        y = top + 8 + ((i * 11) % Math.max(11, base - top - 9));
      return stroke(
        `M${x.toFixed(1)} ${y}l${3 + (i % 3)} ${i % 2 ? 2 : -2}`,
        i % 3 === 0 ? "#ad9e74" : "#746f54",
        0.87,
      );
    }),
  ];
}

function tree(
  id: string,
  x: number,
  y: number,
  scale: number,
  variant: "mangrove" | "hedge" | "city" = "hedge",
) {
  const crown =
    variant === "city"
      ? "M-58-43q-12-17 10-29-1-18 29-20 21-19 42-1 39-2 37 25 24 6 13 27 5 11-19 19-30 6-51 1-41 0-61-22Z"
      : variant === "mangrove"
        ? "M-62-44q5-18 29-17 9-27 38-20 6-23 32-10 15 34 39 39-7 22-29 19-9 10-28 4-24 13-38-2-29 7-43-13Z"
        : "M-50-42q-10-19 13-32 19 3 19-20 22-8 36 10 5 6 24 8 15 9 9 29 7 16-10 19-33 10-81 0Z";
  return moved(
    x,
    y,
    [
      grounding(id, 0, 6, 56),
      surface(id, "M-8 2l2-39-22-17 6-8 19 12 3-27 8 2 2 28 20-9 3 5-23 19V2Z", "copper", 1.15),
      fillPath(
        crown,
        variant === "city" ? "#88966a" : variant === "mangrove" ? "#778c62" : "#8c9469",
        "#526f55",
        1.2,
      ),
      fillPath(
        "M-49-46q26 16 34-3 15 14 26-11 20 17 42 5l-4 18q-26 8-52 7-22 8-46-16Z",
        "#74865e",
        "#607b5c",
        0.7,
      ),
      ...[
        [-40, -52],
        [-31, -64],
        [-20, -51],
        [-5, -79],
        [11, -58],
        [24, -70],
        [37, -47],
      ].map(([x, y], i) => [
        stroke(`M${x} ${y}q7 ${-5 - (i % 3)} 14 0`, "#b5b28a", 1.28),
        oval(x! + 6, y! - 2, 2.1, 1.8, "#a4a67b", "#879870"),
      ]),
      stroke("M-5-7l3-40m5 7 12-9", "#d0c493", 1.5),
      variant === "mangrove" && [
        stroke(
          "M-3-18q-27 0-45 47m48-40q13-15 33 32M-3-1q-15 13-18 27m29-27 14 24m-26-10 4 19",
          paint(id, "copper"),
          4.6,
        ),
        stroke("M-3-18q-27 0-45 47m48-40q13-15 33 32", "#d6bd8b", 0.95),
      ],
    ],
    scale,
  );
}

function petals(id: string, x: number, y: number, scale: number, state: number) {
  return moved(
    x,
    y,
    [
      stroke("M0 5q-5 45 4 79m-6-44q-16-8-28-14m35 24 28-23", "#718157", 3.9),
      surface(id, "M-11 42q-12-24-34-20 1 17 34 20Zm18 13q9-22 32-24-2 20-32 24Z", "glass", 1),
      ...[0, 60, 120, 180, 240, 300].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          {fillPath(
            "M-8-4q-13-17-1-35 3-4 9-2 14 7 10 20L5 0Z",
            state === 2 ? "#b29356" : "#d2ae85",
            "#956d50",
            1.16,
          )}
          {stroke("M-3-33q-1 12 4 21", "#ead0a7", 1.1)}
        </g>
      )),
      oval(0, 0, 15, 15, paint(id, "copper"), dark),
      ...[0, 72, 144, 216, 288].map((a, i) =>
        oval(
          Math.cos((a * Math.PI) / 180) * 9,
          Math.sin((a * Math.PI) / 180) * 9,
          2.2 + i * 0.14,
          2,
          paint(id, "cream"),
          heat,
        ),
      ),
      oval(0, 0, 4.7, 5.1, paint(id, "glass"), forest),
    ],
    scale,
  );
}

function bee(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      fillPath(
        "M0-2q-19-32 3-33 16 5 4 30m-2 1q14-32 29-20 9 18-21 25Z",
        "#c6d1bc",
        "#7d9a8e",
        0.92,
      ),
      oval(0, 0, 15, 9, paint(id, "copper"), dark),
      oval(-12, 0, 8, 7.2, paint(id, "iron"), dark),
      oval(-18, -1, 4, 4, paint(id, "soot"), dark),
      stroke("M-9-5l3 13m4-15 3 14m6-11 2 7m-20 4-8 10m18-11 6 9", "#625644", 1.6),
      stroke("M-19-3l-8-9m4 8-9-3", "#625644", 1.12),
    ],
    scale,
  );
}

function rivermap(id: string, x: number, y: number, s: number, marsh = false) {
  return moved(x, y, [
    tile(id, 0, 0, 285, 111, "cream", 11),
    fillPath(
      s === 1
        ? "M4 62q42-58 110-22 79 53 156-22v75q-75 38-142-12Q55 42 4 113Z"
        : "M4 85q55-55 115-27 70 42 151-19v29q-75 55-148 12Q58 54 4 105Z",
      "#8da9a0",
      "#65877e",
      1.15,
    ),
    stroke("M14 92q55-48 109-20 73 33 135-13", "#d1d8b7", 1.25),
    ...[12, 40, 58, 197, 228, 251].map((x, i) =>
      stroke(
        `M${x} ${i < 3 ? 42 + i * 6 : 99 + (i % 2) * 12}l6-11 7 5m-8 4 4-10`,
        marsh ? forest : "#9d9067",
        1.62,
      ),
    ),
    marsh && [
      ...[112, 147, 198, 228].map((x, i) =>
        stroke(`M${x} ${44 + (i % 2) * 44}l-1-10m1 4 5-6m-5 6-3-4`, forest, 1.66),
      ),
    ],
  ]);
}

export const habitats = {
  mangroveroots: {
    foot: [
      "La vague arrive vers la côte",
      "Les racines atténuent la vague",
      "Les sédiments peuvent se déposer",
    ],
    draw: (s, id) => [
      earthSlice(id, 136, 172, true),
      fillPath("M26 96h191v43H26Z", "#98b8ae", "#628780", 0.8),
      tree(id, 218, 122, 0.77, "mangrove"),
      tree(id, 286, 118, 0.56, "mangrove"),
      stroke(
        s === 0
          ? "M31 108q19-16 38 0t38 0 38 0 38 0"
          : "M32 110q18-17 37 0t37 1 38 2 37-1m18 6q19-3 30 1",
        cold,
        2.2,
      ),
      stream(41, 119, s === 0 ? 148 : 182, 119, cold),
      s === 2 && [
        fillPath("M176 145q50-9 121 4v13H176Z", "#c8ae7e", "#958663", 1.0),
        link(259, 168, "Dépôt", "M250 158l-33-10", heat),
      ],
      s === 1
        ? link(257, 61, "Racines", "M248 67l-39 49", forest)
        : s === 0
          ? label(95, 72, "Vague", cold)
          : [],
    ],
  },
  wormsoil: {
    foot: [
      "Le ver peut tirer une feuille",
      "La galerie laisse circuler air et eau",
      "Le ver rejette des turricules",
    ],
    draw: (s, id) => [
      earthSlice(id, 88, 173, true),
      stroke("M160 88q-12 22 17 39t-2 43", "#695a41", 11),
      stroke("M160 88q-12 22 17 39t-2 43", "#c8a980", 6.4),
      s === 0
        ? [
            fillPath("M113 83q26-36 64-26-10 26-64 26Z", "#929c6d", "#687b53", 1.1),
            stroke("M118 79q25-11 55-20", "#c3c5a1", 1.2),
          ]
        : s === 1
          ? link(252, 64, "Galerie", "M232 72l-66 26", cold)
          : [
              ...[208, 220, 232, 245, 255].map((x, i) =>
                oval(x, 85 - (i % 2) * 5, 7, 5, paint(id, "copper"), "#817359"),
              ),
              label(262, 61, "Turricules", heat),
            ],
      stroke(
        s === 0
          ? "M164 81q-20-17-22 4t20 23"
          : s === 1
            ? "M160 108q-3 11 15 18t8 21"
            : "M176 131q20-9 8-20t19-18",
        "#aa765b",
        7,
      ),
      stroke(
        s === 0
          ? "M164 81q-20-17-22 4t20 23"
          : s === 1
            ? "M160 108q-3 11 15 18t8 21"
            : "M176 131q20-9 8-20t19-18",
        "#e0af8d",
        1.5,
        "2 3",
      ),
      s === 1 && stream(151, 95, 160, 119, cold),
    ],
  },
  hedgerows: {
    foot: [
      "La haie ralentit une partie du vent",
      "Elle retient une partie des terres",
      "La haie crée des abris reliés",
    ],
    draw: (s, id) => [
      fillPath("M28 148l89-26 65-10 63 17 89 19v27H28Z", "#a5aa7d", "#7c8b65", 1.15),
      ...[0, 1, 2, 3].map((i) =>
        stroke(`M32 ${153 + i * 5}l89-26 59-7 64 18 86 13`, "#c0bd91", 0.89),
      ),
      tree(id, 177, 128, 0.75, "hedge"),
      tree(id, 131, 136, 0.44, "hedge"),
      tree(id, 219, 136, 0.49, "hedge"),
      s === 0
        ? [
            stream(37, 76, 108, 76, cold),
            stream(68, 102, 127, 102, cold),
            stream(250, 105, 279, 105, cold),
            label(74, 58, "Vent", cold),
          ]
        : s === 1
          ? [
              stream(64, 142, 111, 126, cold),
              link(285, 91, "Ruissellement", "M267 96l-28 28", cold),
            ]
          : [
              stroke("M254 71q6-8 12-1 6-8 12-4m-56-8q6-7 12-1 6-7 11-2", forest, 2),
              label(282, 110, "Abri", forest),
            ],
    ],
  },
  flowerpollination: {
    foot: [
      "L’insecte peut emporter du pollen",
      "Le pollen se dépose sur le stigmate",
      "Des ovules deviennent des graines",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            petals(id, 112, 112, 0.82, 0),
            petals(id, 230, 112, 0.78, 0),
            bee(id, s === 0 ? 102 : 218, 82, 0.94),
            ...[0, 1, 2, 3, 4].map((i) =>
              oval((s === 0 ? 112 : 221) + i * 4.4, 96 + (i % 2) * 6, 2.45, 2.1, "#d7ad64", heat),
            ),
            link(
              s === 0 ? 219 : 290,
              60,
              s === 0 ? "Étamine" : "Stigmate",
              s === 0 ? "M190 65l-69 27" : "M271 67l-30 37",
              heat,
            ),
          ]
        : [
            surface(id, "M176 60q46 13 57 41 13 45-52 64-60-15-64-48-2-36 59-57Z", "copper", 1.25),
            fillPath(
              "M176 73q32 12 42 32 2 30-38 44-42-9-48-31-5-25 44-45Z",
              "#e0c799",
              "#a07e59",
              1.11,
            ),
            ...[
              [-18, -9],
              [14, -12],
              [-5, 12],
              [18, 10],
              [-21, 14],
            ].map(([x, y]) => oval(177 + x!, 111 + y!, 5.2, 8.1, paint(id, "cream"), heat)),
            link(275, 106, "Graines", "M256 113l-54 2", heat),
          ],
  },
  agroforestrows: {
    foot: [
      "Les rangées d’arbres alternent",
      "Les arbres changent l’ombre et le vent",
      "Partage et concurrence coexistent",
    ],
    draw: (s, id) => [
      fillPath("M31 130l63-52h167l74 70-67 28H31Z", "#aead83", "#80906c", 1.15),
      ...[52, 88, 129, 171, 222].map((x) => stroke(`M${x} 156l61-69`, "#d2c49b", 1.35)),
      ...[
        [95, 134],
        [168, 118],
        [251, 135],
      ].map(([x, y], i) => tree(id, x!, y!, 0.53 + i * 0.06, "hedge")),
      s === 1
        ? [
            fillPath("M113 139l90-17 56 24h-113Z", "#8d9673", "#7b896c", 0.73),
            stream(38, 70, 91, 70, cold),
            label(252, 71, "Ombre", forest),
          ]
        : s === 2
          ? [
              stroke(
                "M169 119q18 48 90 44m-79-37-23 35m-58-22 28 24m126-25 19 20",
                paint(id, "copper"),
                2.4,
              ),
              label(251, 170, "Racines", heat),
            ]
          : label(175, 63, "Bandes cultivées", forest),
    ],
  },
  coralbleach: {
    foot: [
      "Les algues vivent dans les tissus",
      "Le stress altère cette association",
      "Le squelette clair devient plus visible",
    ],
    draw: (s, id) => [
      surface(id, "M29 70h301v95H29Z", "glass", 1.05),
      stroke("M38 81q26-7 53 0t56 0 55 0 51 0m-214 63q28 4 50-2m156-9h69", "#d4e4cc", 1.23),
      stroke(
        "M155 158q20-22 18-55m-14 40-28-25-3-27m39 41 28-27 12-22m-44 66 40-12 21-20m-58 43-82-23-20-18",
        s === 2 ? "#eee8cd" : s === 1 ? "#c3a484" : "#ad815e",
        12,
      ),
      stroke(
        "M155 158q20-22 18-55m-14 40-28-25-3-27m39 41 28-27 12-22m-44 66 40-12 21-20m-58 43-82-23-20-18",
        s === 2 ? "#ada78a" : "#82594a",
        1.05,
        "4 4",
      ),
      ...[
        [166, 141],
        [172, 117],
        [147, 130],
        [130, 109],
        [129, 96],
        [181, 124],
        [204, 104],
        [206, 90],
        [202, 143],
        [223, 132],
        [234, 125],
        [145, 142],
        [122, 133],
        [102, 127],
        [95, 119],
      ]
        .slice(0, [15, 6, 0][s]!)
        .map(([x, y]) => oval(x!, y!, 2.2, 2.1, paint(id, "copper"), "#8e7357")),
      s === 1 &&
        [
          [237, 105],
          [250, 91],
          [210, 74],
        ].map(([x, y]) => oval(x!, y!, 2.2, 2.1, paint(id, "copper"), "#8e7357")),
      link(
        269,
        61,
        s === 0 ? "Algues" : s === 1 ? "Perte d’algues" : "Squelette",
        "M253 68l-37 27",
        s === 2 ? cold : heat,
      ),
    ],
  },
  citycanopy: {
    foot: [
      "Le sol minéral reçoit le rayonnement",
      "Le feuillage intercepte des rayons",
      "Les feuilles libèrent de la vapeur d’eau",
    ],
    draw: (s, id) => [
      tile(id, 37, 139, 282, 30, "iron", 14),
      ...[48, 103, 251].map((x, i) => [
        tile(id, x, 70 + (i % 2) * 15, 58, 73 - (i % 2) * 14, "steel", 10),
        ...[0, 1, 2].map((n) =>
          stroke(`M${x + 8} ${86 + (i % 2) * 15 + n * 15}h35`, "#d4cda9", 1.38, "5 4"),
        ),
      ]),
      s > 0 && tree(id, 195, 145, 0.84, "city"),
      s === 0
        ? [
            ...[152, 177, 203, 229].flatMap((x) => stream(x - 20, 61, x, 134, heat)),
            label(182, 174, "Sol exposé", heat),
          ]
        : s === 1
          ? [
              fillPath("M134 154h67l48 16H100Z", "#6e8270", "#536e5e", 0.84),
              label(179, 175, "Ombre", forest),
            ]
          : [
              ...[166, 193, 217].map((x) => stroke(`M${x} 90q14-9 5-29`, cold, 1.6, "4 3")),
              link(260, 62, "Vapeur", "M248 65l-28 3", cold),
            ],
    ],
  },
  floodspace: {
    foot: [
      "L’eau reste dans le lit habituel",
      "La crue s’étale sur la plaine",
      "Un espace libre laisse l’eau s’épandre",
    ],
    draw: (s, id) => [
      rivermap(id, 43, 59, s),
      s === 0
        ? label(227, 63, "Lit ordinaire", cold)
        : s === 1
          ? [stream(160, 134, 201, 156, cold), label(258, 85, "Débordement", cold)]
          : [
              stroke("M66 74q89-24 185 15", forest, 1.65, "5 4"),
              link(219, 61, "Espace libre", "M216 67l-31 16", forest),
              stream(157, 122, 200, 130, cold),
            ],
    ],
  },
  compostlife: {
    foot: [
      "Mélanger restes et matières sèches",
      "Air et eau aident à décomposer",
      "Le compost devient plus homogène",
    ],
    draw: (s, id) => [
      surface(id, "M87 73h186l-15 91H104Z", "steel", 1.25),
      fillPath(
        "M101 101q42-16 81-5 42-12 77-2l-12 56H114Z",
        s === 2 ? "#897251" : "#a68b62",
        "#806a51",
        0.95,
      ),
      ...Array.from({ length: 18 }, (_, i) => {
        const x = 120 + (i % 7) * 17.5,
          y = 112 + Math.floor(i / 7) * 15 + (i % 3) * 3;
        return s === 0
          ? fillPath(`M${x} ${y}l8-6 5 7-10 4Z`, i % 2 ? "#a6996b" : "#b58c5a", "#8d7554", 0.7)
          : oval(x, y, s === 2 ? 2.45 : 3.3, 2.1, i % 2 ? "#bc9c69" : "#8c7c53", "#8b754d");
      }),
      ...[117, 143, 169, 195, 221, 247].map((x) => stroke(`M${x} 77v14`, "#c6c7a6", 1.23)),
      s === 1 && [
        stroke("M151 89q-7-13 0-27m21 24q-7-12 2-23m23 24q-4-16 2-25", heat, 1.8),
        label(279, 66, "Chaleur", heat),
      ],
      s === 0
        ? label(277, 65, "Mélange", forest)
        : s === 2
          ? label(264, 65, "Maturation", forest)
          : [],
    ],
  },
  wetlandsponge: {
    foot: [
      "La zone humide est reliée au cours d’eau",
      "L’eau s’étale pendant la crue",
      "L’eau peut repartir progressivement",
    ],
    draw: (s, id) => [
      rivermap(id, 43, 59, s, true),
      s === 0
        ? link(251, 62, "Connexion", "M240 66l-41 21", forest)
        : s === 1
          ? [
              stream(111, 114, 141, 130, cold),
              stream(199, 109, 228, 129, cold),
              label(257, 85, "Stockage", cold),
            ]
          : [
              stream(179, 135, 213, 122, cold),
              stream(250, 143, 301, 126, cold),
              label(253, 82, "Retour progressif", cold),
            ],
    ],
  },
} satisfies Record<string, Study>;
