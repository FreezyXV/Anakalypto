import {
  type Study,
  block,
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
  moved,
  oval,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tile,
} from "./art";

function circuit(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: "glass" | "cream" = "glass",
) {
  return moved(x, y, [
    panel(id, 0, 0, w, h, tone),
    ...[0.22, 0.35, 0.52, 0.73].map((t, i) =>
      stroke(
        `M8 ${h * t}h${w * 0.27}l11 ${i % 2 ? 7 : -7}h${w * 0.21}m8 0h${w * 0.22}`,
        i % 2 ? "#bca178" : "#718b75",
        1.33,
      ),
    ),
    ...[0.24, 0.39, 0.61, 0.8].map((t) =>
      oval(w * t, h * 0.82, 2.4, 2.1, paint(id, "copper"), dark),
    ),
  ]);
}
function processor(
  id: string,
  x: number,
  y: number,
  r: number,
  tone: "steel" | "copper" = "steel",
) {
  return moved(x, y, [
    ...Array.from({ length: 7 }, (_, i) =>
      stroke(
        `M${-r + (i * r) / 3} ${-r - 7}v${2 * r + 14}M${-r - 7} ${-r + (i * r) / 3}h${2 * r + 14}`,
        paint(id, "steel"),
        2.9,
      ),
    ),
    surface(id, `M${-r} ${-r + 1}l6-6h${r * 2 - 10}l8 7v${r * 2 - 6}l-7 6H${-r}Z`, tone, 1.15),
    block(-r * 0.62, -r * 0.64, r * 1.24, r * 1.23, paint(id, "soot"), dark, 2),
    stroke(`M${-r * 0.5} ${-r * 0.5}h${r}v${r}`, "#acb19a", 1.19),
    ...fastener(-r + 5, -r + 4, 1.75),
  ]);
}
function display(id: string, x: number, y: number, w: number, h: number, active = true) {
  return moved(x, y, [
    panel(id, 0, 0, w, h, "iron"),
    block(7, 8, w - 12, h - 20, paint(id, active ? "glass" : "soot"), dark, 2),
    stroke(`M${w * 0.46} ${h}v10m-15 1h38`, dark, 3),
    ...fastener(w - 11, h - 7, 1.75),
  ]);
}
function hardDisk(id: string, x: number, y: number, scale: number, s: number) {
  return moved(
    x,
    y,
    [
      panel(id, -56, -53, 113, 104, "iron"),
      oval(-8, 1, 39, 39, paint(id, "steel"), dark),
      ...[20, 28, 34].map((r) => oval(-8, 1, r, r, "none", "#667b70")),
      ...joint(id, -8, 1, 11),
      ...joint(id, 41, 31, 9, "copper"),
      surface(id, s === 2 ? "M38 31l-34-39 4-5 42 39Z" : "M38 31l-46-17 1-7 55 18Z", "copper", 1.2),
      ...fastener(-44, -43),
      ...fastener(45, -42),
    ],
    scale,
  );
}
function flash(id: string, x: number, y: number, scale: number, active = false) {
  return moved(
    x,
    y,
    [
      circuit(id, -54, -40, 108, 76),
      ...[-32, 17].flatMap((a) =>
        [-21, 16].map((b) => processor(id, a, b, 12, active && a < 0 ? "copper" : "steel")),
      ),
      surface(id, "M-36 35h66v7h-66Z", "copper", 0.88),
      stroke("M-30 37h55", "#e2ce9c", 1.02, "3 2"),
    ],
    scale,
  );
}
function folio(id: string, x: number, y: number, w: number, h: number, s: number) {
  return moved(x, y, [
    surface(id, `M0 0h${w - 12}l12 12v${h - 12}H0Z`, "cream", 1.16),
    stroke(`M${w - 12} 0v12h12`, "#8d805e", 1.0),
    ...Array.from({ length: 5 }, (_, i) =>
      stroke(
        `M9 ${19 + (i * (h - 27)) / 5}h${(w - 22) * (i % 3 === 0 ? 0.73 : 0.97)}`,
        i === s ? heat : "#958968",
        i === s ? 2.16 : 1.04,
        "4 2",
      ),
    ),
  ]);
}
function wafer(id: string, x: number, y: number, r: number, step: number) {
  return moved(x, y, [
    oval(0, 0, r, r * 0.75, paint(id, "steel"), dark),
    oval(0, -3, r - 4, (r - 4) * 0.75, paint(id, "glass"), dark),
    ...[-2, -1, 0, 1, 2].flatMap((i) =>
      [-2, -1, 0, 1, 2]
        .filter((j) => i * i + j * j < 7)
        .map((j) =>
          block(
            i * r * 0.26 - 7,
            j * r * 0.18 - 8,
            14,
            13,
            paint(id, step === 1 && i === 0 && j === 0 ? "copper" : "steel"),
            "#5e7d72",
            0.3,
          ),
        ),
    ),
    stroke(`M${-r * 0.69} ${r * 0.35}q${r * 0.63} 14 ${r * 1.29} 0`, "#d7d9bb", 1.25),
  ]);
}
function transistor(id: string, x: number, y: number, version: number, active: boolean) {
  return moved(x, y, [
    tile(id, -104, -5, 220, 48, "steel", 14),
    surface(id, "M-86 7h48v24h-48Zm129 0h48v24H43Z", "copper", 1.16),
    active && stroke("M-38 18h81", forest, 5.5, "3 2"),
    version === 0
      ? surface(id, "M-29-34l11-12h47l12 12v24h-70Z", "iron", 1.3)
      : version === 1
        ? [
            surface(id, "M-35-32h77v43H-35Z", "iron"),
            surface(id, "M-26 4v-41h15V5Zm44 0v-41h15V5Z", "glass", 1.2),
          ]
        : [
            surface(id, "M-35-38h77v58H-35Z", "iron"),
            ...[-23, -6, 10].map((y) => surface(id, `M-28 ${y}h63v7H-28Z`, "glass", 0.9)),
          ],
    stroke("M-26-30h65", "#acb6a1", 1.12),
    ...fastener(-77, 26),
    ...fastener(82, 26),
  ]);
}
function socket(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      tile(id, -35, -18, 80, 31, "iron", 11),
      ...[-25, -15, -5, 5, 15, 25].flatMap((t) => [stroke(`M${t} -11v-7m0 40v10`, "#c0aa7c", 2.4)]),
      block(-18, -5, 39, 21, paint(id, "glass"), dark, 1.4),
    ],
    scale,
  );
}
function dish(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, "M-23 42-7 0H7l17 42Z", "iron"),
      stroke("M-17 33l30-8-27-7 24-9", "#adba9d", 1.22),
      surface(id, "M-26-13q27 13 53-18-1 22-21 32-19 8-32-14Z", "steel", 1.26),
      stroke("M-17-10l20-13m-4 9 10-7", dark, 1.45),
    ],
    scale,
  );
}

export const computing = {
  pixels: {
    foot: [
      "Chaque case représente une couleur",
      "Agrandir garde les mêmes pixels",
      "L’écran combine rouge, vert et bleu",
    ],
    draw: (s, id) => {
      const colors = ["#78998b", "#8eaa94", "#bec6a0", "#ae8f56", "#d0aa60", "#e1bc78", "#5e867f"];
      const data = [
        0, 0, 1, 1, 2, 2, 0, 2, 1, 3, 2, 1, 0, 1, 3, 4, 0, 0, 6, 6, 4, 5, 0, 1, 6, 0, 5, 3, 1, 2, 6,
        0, 0, 1, 2, 2,
      ];
      const w = s === 0 ? 17 : 12,
        x = s === 0 ? 126 : 62,
        y = s === 0 ? 65 : 86;
      return [
        panel(id, x - 7, y - 7, w * 6 + 14, w * 6 + 13, "iron"),
        ...data.map((v, i) =>
          block(x + (i % 6) * w, y + Math.floor(i / 6) * w, w - 1, w - 1, colors[v]!, "none", 0),
        ),
        s === 1 && [
          panel(id, 189, 63, 117, 105, "iron"),
          ...[14, 15, 20, 21].map((k, i) =>
            block(
              202 + (i % 2) * 43,
              77 + Math.floor(i / 2) * 37,
              42,
              36,
              colors[data[k]!]!,
              "none",
              0,
            ),
          ),
          link(159, 69, "Zoom", "M163 73l27 17", cold),
        ],
        s === 2 && [
          panel(id, 190, 75, 124, 84, "iron"),
          ...["#ba6860", "#829c72", "#6292b1"].map((c, i) =>
            block(205 + i * 31, 86, 24, 52, c, "#596966", 2),
          ),
          [211, 242, 273].map((p, i) => label(p + 5, 158, ["R", "V", "B"][i]!, dark)),
        ],
      ];
    },
  },
  editionProgramLayers: {
    foot: [
      "La syntaxe exprime une opération",
      "Un environnement traite les instructions",
      "L’exécution produit un résultat",
    ],
    draw: (s, id) => [
      folio(id, 49, 66, 79, 88, s),
      processor(id, 176, 112, 26, s === 1 ? "copper" : "steel"),
      display(id, 229, 75, 93, 76, s === 2),
      s === 2 && stroke("M245 128l15-12 9 4 25-18 17 2", "#dbe0c0", 1.72),
      duct("M129 111h16m61 0h23", s === 1 ? heat : cold, s > 0),
      s === 0
        ? label(85, 174, "Source", cold)
        : s === 1
          ? label(180, 167, "Traduction", heat)
          : label(275, 174, "Résultat", forest),
    ],
  },
  bootchain: {
    foot: [
      "Le micrologiciel initialise la machine",
      "Le noyau est chargé en mémoire",
      "Le noyau prépare la session",
    ],
    draw: (s, id) => [
      circuit(id, 46, 74, 271, 86),
      processor(id, 99, 112, 21, s === 0 ? "copper" : "steel"),
      flash(id, 175, 111, 0.54, s === 1),
      ...[246, 263, 280].map((t) =>
        surface(id, `M${t} 94h10v45h-10Z`, s >= 1 ? "copper" : "steel", 0.72),
      ),
      s === 1 && stream(199, 114, 239, 114, heat),
      s === 2 && stream(231, 112, 128, 112, forest),
      label(98, 66, s === 0 ? "Micrologiciel" : "Processeur", s === 0 ? heat : cold),
      label(265, 172, "Mémoire vive", forest),
    ],
  },
  detailArchivedComputer: {
    foot: [
      "Le matériel reçoit de l’énergie",
      "Le support conserve les fichiers",
      "Le système doit piloter le matériel",
    ],
    draw: (s, id) => [
      display(id, 46, 56, 145, 111, s === 2),
      surface(id, "M212 65l15-10h63l16 16v83l-12 10h-83Z", "steel", 1.35),
      ...[83, 99, 114, 132].map((y) =>
        stroke(`M221 ${y}h67`, y === 83 ? "#dcc7a0" : "#8c9b8c", 1.8, "6 2"),
      ),
      s === 0
        ? [duct("M213 144h-26v30h-25", heat), label(262, 174, "Alimentation", heat)]
        : s === 1
          ? [hardDisk(id, 259, 106, 0.61, 0), link(170, 165, "Disque", "M183 157l54-30", cold)]
          : [
              stroke("M65 89h53m-53 11h81m-77 16h59", "#d5dec8", 1.55),
              label(143, 149, "Système", forest),
            ],
    ],
  },
  digitalArchives: {
    foot: [
      "Les copies réduisent les pertes",
      "L’empreinte révèle un changement",
      "Après migration, vérifier la lecture",
    ],
    draw: (s, id) => [
      folio(id, 60, 74, 65, 84, 0),
      s < 2
        ? [
            ...[155, 236].map((x, i) =>
              moved(x, 90 + i * 4, [folio(id, 0, 0, 63, 71, s === 1 ? i : 0)], 1),
            ),
            s === 1 && [
              label(172, 75, "Empreinte", cold),
              stroke("M157 144h60m23 0h60", "#718a70", 2, "4 2"),
            ],
          ]
        : [
            flash(id, 191, 112, 0.68, true),
            display(id, 244, 85, 81, 62, true),
            stream(123, 115, 153, 115, forest),
            stream(224, 111, 245, 111, forest),
          ],
    ],
  },
  ssdanddisk: {
    foot: [
      "La tête survole un plateau tournant",
      "Les puces stockent les données",
      "Deux façons d’accéder aux données",
    ],
    draw: (s, id) =>
      s === 0
        ? [hardDisk(id, 171, 108, 1.11, 0), link(278, 65, "Tête", "M260 72l-53 41", heat)]
        : s === 1
          ? [flash(id, 173, 113, 1.17, true), link(285, 73, "Flash", "M264 79l-42 17", heat)]
          : [
              hardDisk(id, 98, 107, 0.79, 2),
              flash(id, 257, 107, 0.82, true),
              label(102, 169, "Mécanique", heat),
              label(256, 169, "Électronique", forest),
            ],
  },
  memoryStorage: {
    foot: [
      "Le fichier reste sur le stockage",
      "La RAM porte le travail en cours",
      "Enregistrer écrit sur le stockage",
    ],
    draw: (s, id) => [
      hardDisk(id, 87, 105, 0.72, 0),
      circuit(id, 173, 83, 151, 64),
      ...[193, 229, 265, 299].map((p) => processor(id, p, 111, 11, s === 1 ? "copper" : "steel")),
      s === 1
        ? stream(133, 114, 170, 114, forest)
        : s === 2
          ? stream(171, 114, 130, 114, heat)
          : [],
      label(83, 165, "Stockage", cold),
      label(245, 165, "Mémoire vive", forest),
    ],
  },
  capacitivetouch: {
    foot: [
      "Des électrodes forment une grille",
      "Le doigt modifie la mesure locale",
      "Le contrôleur estime la position",
    ],
    draw: (s, id) => [
      surface(id, "M45 134l52-63h214l-48 63Z", "glass", 1.2),
      ...Array.from({ length: 9 }, (_, i) => stroke(`M${54 + i * 24} 131l49-57`, "#536f68", 1.42)),
      ...[80, 94, 109, 122].map((y, i) => stroke(`M${92 - i * 10} ${y}h209`, "#d6c394", 1.5)),
      s === 1
        ? [
            surface(id, "M191 104q-19 0-19-17l6-36 16-9 13 6 2 17-11 38Z", "cream", 1.22),
            oval(193, 104, 13, 7, "none", heat),
            label(262, 62, "Doigt", heat),
          ]
        : s === 2
          ? [
              oval(184, 103, 15, 10, paint(id, "copper"), heat),
              link(256, 61, "Position", "M240 67l-48 33", heat),
            ]
          : label(191, 164, "Électrodes", cold),
    ],
  },
  inkjetdrops: {
    foot: [
      "La tête contient de petites buses",
      "Une commande fait sortir une goutte",
      "Le mouvement place les points",
    ],
    draw: (s, id) => [
      tile(id, 64, 67, 228, 35, "iron", 14),
      ...[95, 128, 162, 200, 234, 265].map((x, i) => [
        oval(x, 108, 4, 3, paint(id, "copper"), dark),
        s > 0 &&
          oval(x, 121 + (i % 2) * 6, 2.7, 3.8, ["#56858c", "#c68064", "#d1b063"][i % 3]!, "none"),
      ]),
      surface(id, "M65 153l43-19h189l-36 21H65Z", "cream"),
      s === 2 && [
        ...Array.from({ length: 17 }, (_, i) =>
          oval(
            103 + i * 8.7,
            145 + (i % 3) * 3,
            2,
            1.8,
            ["#5b9290", "#c78067", "#ceae6f"][i % 3]!,
            "none",
          ),
        ),
        stream(264, 169, 298, 169, forest),
      ],
      link(
        272,
        61,
        s === 0 ? "Tête" : s === 1 ? "Gouttes" : "Papier",
        "M260 66l-35 22",
        s === 1 ? heat : cold,
      ),
    ],
  },
  euvMirrors: {
    foot: [
      "Des miroirs guident la lumière EUV",
      "Le masque porte le motif",
      "La lumière expose la couche sensible",
    ],
    draw: (s, id) => [
      surface(id, "M49 103l31-31h33l-19 27-36 16Z", "steel", 1.4),
      surface(id, "M194 55h94l-13 18h-92Z", "iron", 1.14),
      ...[202, 220, 238, 257].map((x) => stroke(`M${x} 60h12`, s === 1 ? heat : "#d6cda7", 2.1)),
      surface(id, "M166 107q41-8 71 16l-7 9q-22-17-69-15Z", "steel", 1.1),
      wafer(id, 272, 151, 31, s),
      stroke(
        s === 0 ? "M48 53l33 43 118-31" : "M78 96l120-32-2 53 73 22",
        s === 2 ? heat : forest,
        2,
        "4 3",
      ),
      s === 2
        ? label(103, 159, "Projection", heat)
        : link(
            284,
            93,
            s === 1 ? "Masque" : "Miroir",
            s === 1 ? "M268 88l-17-16" : "M268 88l-38 26",
            cold,
          ),
    ],
  },
  graphicParallel: {
    foot: [
      "On répartit l’image en tuiles",
      "Le calcul traite les tuiles en série",
      "Le GPU peut les traiter en parallèle",
    ],
    draw: (s, id) => [
      panel(id, 47, 63, 98, 107, "iron"),
      ...Array.from({ length: 6 }, (_, i) =>
        block(
          62 + (i % 2) * 35,
          72 + Math.floor(i / 2) * 25,
          29,
          20,
          paint(id, i < s ? "copper" : "glass"),
          dark,
          1,
        ),
      ),
      processor(id, 189, 111, 24, s === 2 ? "copper" : "steel"),
      panel(id, 244, 64, 69, 105, "iron"),
      ...Array.from({ length: 6 }, (_, i) =>
        block(
          251 + (i % 2) * 29,
          75 + Math.floor(i / 2) * 25,
          25,
          19,
          paint(id, s === 2 || (s === 1 && i === 0) ? "copper" : "glass"),
          dark,
          1,
        ),
      ),
      s > 0 && stream(145, 111, 159, 111, s === 2 ? forest : cold),
      s === 2 && [84, 110, 135].flatMap((y) => stream(221, y, 244, y, forest)),
    ],
  },
  superconductingQubit: {
    foot: [
      "Deux niveaux servent de repère",
      "Un signal agit sur l’état",
      "La lecture produit un signal",
    ],
    draw: (s, id) => [
      circuit(id, 66, 76, 237, 80, "cream"),
      surface(id, "M105 99h44v26h-44Zm107 0h44v26h-44Z", "steel", 1.04),
      stroke("M149 112h17m31 0h15M167 102l27 19m-26 0 25-19", heat, 2.35),
      s === 0
        ? [label(112, 66, "État 0", cold), label(249, 66, "État 1", cold)]
        : s === 1
          ? [stroke("M37 114q6-23 15 0t15 0 15 0", forest, 1.75), label(146, 66, "Commande", heat)]
          : [
              stroke("M229 134q7-11 13 0t13 0 13 0 13 0", forest, 1.65),
              label(265, 66, "Lecture", forest),
            ],
    ],
  },
  transistorgate: {
    foot: ["Le canal est fermé", "La grille ouvre le canal", "La commande alterne les états"],
    draw: (s, id) => [
      transistor(id, 177, 116, 0, s === 1 || s === 2),
      label(86, 177, "Source", cold),
      label(267, 177, "Drain", cold),
      s > 0 && [
        stream(138, 134, 219, 134, forest),
        label(177, 64, s === 1 ? "Grille" : "Commande", heat),
      ],
      s === 0 && stroke("M166 128l20 16m-20 0 20-16", heat, 1.65),
    ],
  },
  detailGateThickness: {
    foot: [
      "La grille est au-dessus du canal",
      "La grille agit sur plusieurs faces",
      "La grille entoure des feuillets",
    ],
    draw: (s, id) => [
      transistor(id, 177, 112, s, true),
      link(
        279,
        64,
        s === 0 ? "Surface" : s === 1 ? "Ailette" : "Feuillets",
        "M256 68l-66 16",
        cold,
      ),
      label(180, 176, "Canal", forest),
    ],
  },
  chipFabrication: {
    foot: [
      "La tranche porte plusieurs circuits",
      "La découpe isole les dés",
      "Le boîtier relie la puce aux contacts",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            wafer(id, 161, 111, 75, s),
            s === 0
              ? link(287, 68, "Tranche", "M263 74l-46 17", cold)
              : [
                  socket(id, 274, 129, 0.72),
                  stream(209, 112, 252, 117, heat),
                  label(268, 71, "Dé", heat),
                ],
          ]
        : [
            socket(id, 171, 120, 1.66),
            processor(id, 171, 100, 26, "copper"),
            link(285, 62, "Boîtier", "M268 70l-54 42", heat),
            label(89, 163, "Contacts", cold),
          ],
  },
  cpucooling: {
    foot: [
      "La chaleur rejoint la base",
      "Les ailettes augmentent la surface",
      "Le ventilateur renouvelle l’air",
    ],
    draw: (s, id) => [
      circuit(id, 63, 131, 232, 41),
      processor(id, 174, 126, 21, "copper"),
      tile(id, 112, 106, 144, 16, "copper", 11),
      s > 0 && [
        ...Array.from({ length: 8 }, (_, i) =>
          surface(id, `M${115 + i * 17} 109l8-10v-44l-8 12Z`, "steel", 1.04),
        ),
      ],
      s === 2
        ? [
            rotor(id, 275, 96, 26, "steel"),
            stream(256, 99, 228, 99, cold),
            label(264, 55, "Air", cold),
          ]
        : s === 1
          ? link(283, 65, "Ailettes", "M265 70l-34 2", cold)
          : [stream(177, 126, 177, 99, heat), label(235, 67, "Base", heat)],
    ],
  },
  editionChipSupplyMap: {
    foot: [
      "La conception définit les circuits",
      "La fonderie produit des tranches",
      "Le boîtier relie le dé aux contacts",
    ],
    draw: (s, id) => [
      display(id, 43, 83, 86, 72, s === 0),
      stroke("M53 109h60m-54 10h21l8 8h27", "#dae1c7", 1.2),
      wafer(id, 186, 113, 31, s === 1 ? 1 : 0),
      socket(id, 282, 111, 0.91),
      label(84, 71, "Conception", s === 0 ? heat : cold),
      label(189, 166, "Fonderie", s === 1 ? heat : cold),
      label(282, 64, "Essais", s === 2 ? heat : cold),
      s > 0 && stream(s === 1 ? 129 : 222, 118, s === 1 ? 150 : 245, 118, forest),
    ],
  },
  satelliteBackhaul: {
    foot: [
      "Le terminal envoie un signal",
      "Le satellite relaie vers le sol",
      "La passerelle rejoint le réseau",
    ],
    draw: (s, id) => [
      fillPath("M24 161q99-65 311-21v41H24Z", "#a7b095", "#80947c", 1.15),
      dish(id, 74, 127, 0.77),
      dish(id, 261, 116, 0.98),
      surface(id, "M151 62h49v24h-49Z", "iron"),
      surface(id, "M109 65h40v19h-40Zm94 0h48v19h-48Z", "glass", 0.95),
      stroke("M113 72h29m64 0h41", "#c6d3ac", 1.2, "5 2"),
      stroke(s === 0 ? "M75 110l98-35" : "M75 110l98-35 87 36", cold, 1.8, "5 3"),
      s === 2 && [duct("M266 151h39l19-14", forest), label(282, 174, "Réseau", forest)],
      s === 1 ? label(274, 71, "Station", cold) : label(83, 83, "Terminal", cold),
    ],
  },
  subseacable: {
    foot: [
      "Le câble relie deux stations côtières",
      "La lumière circule dans les fibres",
      "Les répéteurs renforcent le signal",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            surface(id, "M65 105l43-20h166l-29 44-50 17H80Z", "iron", 1.35),
            oval(223, 111, 46, 35, paint(id, "steel"), dark),
            oval(226, 111, 34, 27, paint(id, "soot"), dark),
            ...[0, 1, 2, 3, 4].map((i) =>
              oval(
                211 + i * 8,
                107 + (i % 2) * 12,
                4,
                4,
                paint(id, i % 2 ? "copper" : "glass"),
                dark,
              ),
            ),
            link(283, 68, "Fibres", "M268 74l-38 28", cold),
          ]
        : [
            fillPath("M29 79h301v95H29Z", "#86a9a2", "#618684", 1.1),
            fillPath(
              "M29 115l36-18 49 53 40 14 46-9 94-53 37 17v55H29Z",
              "#b6a781",
              "#8f8767",
              1.1,
            ),
            duct("M70 101l45 48 59 12 51-16 65-42", forest),
            s === 2 && [
              panel(id, 148, 149, 53, 19, "copper"),
              link(219, 70, "Répéteur", "M215 75l-43 70", heat),
            ],
            s === 0 && label(185, 64, "Deux stations", cold),
          ],
  },
} satisfies Record<string, Study>;
