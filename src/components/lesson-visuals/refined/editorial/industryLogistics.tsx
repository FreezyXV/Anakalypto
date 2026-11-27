import {
  type Study,
  block,
  cold,
  dark,
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
  stream,
  stroke,
  surface,
  tile,
  tire,
} from "./art";

export function makerArm(id: string, x: number, y: number, scale: number, mode: number) {
  const tips = [
      [52, -64],
      [85, -28],
      [68, -54],
    ] as const,
    [a, b] = tips[mode]!;
  return moved(
    x,
    y,
    [
      tile(id, -30, -7, 65, 21, "iron", 11),
      surface(id, "M-12 0l19-57 14 2-17 58Z", "steel", 1.3),
      surface(id, `M11-54l${a - 10} ${b + 53} 4 14 ${11 - a} ${-b - 60}Z`, "copper", 1.2),
      surface(id, `M${a} ${b}l14-4 9 10-10 8-14-6Z`, "steel", 1.22),
      ...joint(id, 13, -57, 8.3),
      ...joint(id, a + 2, b + 3, 6.1),
      ...joint(id, -4, 1, 7.2),
      stroke(`M${a + 17} ${b + 2}l11 8m-14-2 9 10`, dark, 2.1),
    ],
    scale,
  );
}

function belt(id: string, y: number) {
  return [
    tile(id, 40, y, 280, 29, "iron", 12),
    ...Array.from({ length: 13 }, (_, i) =>
      stroke(`M${52 + i * 20} ${y + 15}l10-12`, "#adb99d", 1.32),
    ),
    stroke(`M51 ${y + 30}h250`, "#c8d1b3", 1.13),
  ];
}

function box(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: "cream" | "copper" | "steel" = "cream",
) {
  return [
    tile(id, x, y, w, h, tone, 12),
    stroke(
      `M${x + w * 0.48} ${y + 12}v${h - 4}m0-${h - 4} 11-11`,
      tone === "steel" ? "#dce0bb" : "#b58d5b",
      1.75,
    ),
    ...fastener(x + w - 17, y + h + 5, 1.8),
  ];
}

function crateShip(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      tile(id, 0, 0, 144, 63, "copper", 13),
      ...Array.from({ length: 16 }, (_, i) =>
        stroke(`M${6 + i * 7.7} 16v53`, i % 2 ? "#7f785a" : "#d6b487", 1.09),
      ),
      stroke("M2 14h128v59H2Zm125 0 15-12v58l-13 13", "#7d6a53", 1.5),
      ...[5, 126].flatMap((a) => [...fastener(a, 18, 2.4), ...fastener(a, 68, 2.4)]),
    ],
    scale,
  );
}

function logisticsTruck(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, "M10 24h152l34 13 12 23-10 12H10Z", "iron", 1.2),
      surface(id, "M147 16h37l13 17 10 24h-60Z", "steel", 1.1),
      surface(id, "M173 21h11l11 19h-21Z", "glass", 1),
      block(2, 7, 143, 45, paint(id, "cream"), dark, 2),
      ...tire(id, 46, 72, 15),
      ...tire(id, 166, 72, 15),
      ...[20, 40, 58, 76, 94, 112, 130].map((a) => stroke(`M${a} 12v33`, "#b2ae8b", 0.85)),
    ],
    scale,
  );
}

export const industryLogistics = {
  factoryArm: {
    foot: [
      "Les axes placent l’outil",
      "La commande coordonne les axes",
      "Changer l’outil change l’opération",
    ],
    draw: (s, id) => [
      ...belt(id, 143),
      makerArm(id, 119, 133, 1.22, s),
      box(id, s === 1 ? 204 : 225, 133, 51, 13, "steel"),
      s === 0
        ? [link(75, 63, "Axes", "M84 69l43 5"), oval(134, 65, 5, 5, "none", heat)]
        : s === 1
          ? [stroke("M187 72q49 16 54 46", heat, 1.6, "4 3"), label(229, 72, "Trajectoire", heat)]
          : [
              stroke("M236 88l13 17m-11-3 15 9m-15-1 12 9", heat, 1.8),
              label(276, 65, "Outil", cold),
            ],
    ],
  },
  factoryNavigation: {
    foot: [
      "Le tracé matérialise un trajet",
      "Les repères jalonnent l’atelier",
      "La carte permet un détour",
    ],
    draw: (s, id) => [
      tile(id, 33, 63, 287, 100, "cream", 8),
      ...[0, 1, 2, 3, 4, 5].map((i) => stroke(`M${65 + i * 43} 73v84`, "#c9c19a", 0.8)),
      ...[82, 105, 129, 152].map((y) => stroke(`M45 ${y}h260`, "#c9c19a", 0.8)),
      box(id, 226, 75, 78, 27, "steel"),
      box(id, 81, 74, 56, 28, "cream"),
      tile(id, 156, 110, 62, 24, "iron", 10),
      ...fastener(168, 132, 2.8),
      ...fastener(200, 132, 2.8),
      stroke(
        s === 2 ? "M58 144h62V118h40m49 4h26v27h58" : "M49 148h244",
        s === 0 ? heat : forest,
        2.3,
        s === 1 ? "5 5" : undefined,
      ),
      s === 1 && [85, 142, 234, 276].map((x) => oval(x, 149, 3.8, 3.8, paint(id, "copper"), dark)),
      label(180, 59, s === 0 ? "Ligne" : s === 1 ? "Repères" : "Carte", cold),
    ],
  },
  visionreject: {
    foot: [
      "La caméra image la pièce",
      "Une mesure est comparée au critère",
      "La pièce détectée peut être écartée",
    ],
    draw: (s, id) => [
      ...belt(id, 132),
      ...[66, 151, 241].map((x, i) =>
        box(id, x, i === 1 && s === 2 ? 150 : 119, 56, 15, i === 1 ? "copper" : "steel"),
      ),
      panel(id, 152, 55, 59, 39, "iron"),
      ...joint(id, 183, 91, 9, "glass"),
      fillPath(s === 0 ? "M181 98l-23 27h52Z" : "M181 98l-15 26h36Z", "#ccbd85", "#a9976c", 0.62),
      s === 1
        ? [stroke("M155 124h55m-54-4v8m53-8v8", heat, 1.6), label(254, 69, "Tolérance", heat)]
        : s === 2
          ? [stream(180, 129, 180, 158, heat), label(258, 68, "Éjection", heat)]
          : label(76, 67, "Éclairage", cold),
    ],
  },
  coldlogistics: {
    foot: [
      "Le chargement doit rester au froid",
      "Un capteur enregistre le trajet",
      "Le retour au froid laisse une trace",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            surface(id, "M39 78l51-28 45 26v77H39Z", "steel"),
            surface(id, "M51 83h70v68H51Z", "iron"),
            ...[92, 106, 120, 134].map((y) => stroke(`M56 ${y}h61`, "#b6bca0", 1.22)),
            logisticsTruck(id, 124, 94, 0.88),
            label(89, 66, "Entrepôt", cold),
          ]
        : [
            logisticsTruck(id, 46, 112, 0.65),
            panel(id, 210, 63, 108, 102, "iron"),
            surface(id, "M220 73h87v63h-87Z", "cream"),
            stroke("M227 112h70", "#83a292", 1.0, "3 3"),
            stroke(
              s === 1
                ? "M226 112l14-3 13 4 12-4 18 2 14-1"
                : "M225 114l16-3 13-27 15 12 11 15 17 2",
              s === 1 ? cold : heat,
              2.4,
            ),
            label(265, 154, s === 1 ? "Enregistreur" : "Pic observé", s === 1 ? cold : heat),
          ],
  },
  barcode: {
    foot: [
      "Le lecteur éclaire les barres",
      "Plus de lumière revient des espaces",
      "La caisse recherche l’identifiant",
    ],
    draw: (s, id) => [
      surface(id, "M41 89l14-17h149l19 11v70H41Z", "cream", 1.11),
      block(57, 86, 147, 55, "#f3edda", "#b7ac8a", 2),
      ...[2, 3, 1, 4, 1, 2, 5, 2, 3, 1, 3, 1, 4, 2, 1, 4, 2, 1, 2, 3].map((w, i) =>
        block(67 + i * 6, 94, w, 33, "#354741", "#354741", 0),
      ),
      surface(id, "M228 108l26-32 58 13-2 24-21 6-16 33h-27l9-38Z", "steel", 1.23),
      surface(id, "M230 106l22-24 13 8-22 24Z", "soot", 0.86),
      stroke(
        s === 1 ? "M231 106l-107-3m107 3-71 15M231 106l-43-15" : "M233 105L112 111",
        heat,
        s === 0 ? 1.8 : 1.35,
        s === 2 ? "3 3" : undefined,
      ),
      s === 2
        ? label(177, 168, "Identifiant décodé", cold)
        : label(264, 65, s === 0 ? "Lecteur" : "Réflexion", s === 0 ? cold : heat),
    ],
  },
  intermodal: {
    foot: [
      "La grue prend les coins du caisson",
      "Le conteneur reste fermé sur le rail",
      "Les coins se fixent au châssis routier",
    ],
    draw: (s, id) => [
      crateShip(id, 117, s === 0 ? 100 : 75, 1.05),
      s === 0
        ? [
            stroke("M79 65h199v16m-151 0V64m138 0v17M127 80H266", paint(id, "iron"), 4),
            stroke("M124 81v26m139-26v26", forest, 2),
            label(195, 61, "Palonnier", cold),
          ]
        : s === 1
          ? [
              tile(id, 63, 151, 242, 14, "iron", 10),
              ...[107, 140, 237, 270].map((x) => tire(id, x, 168, 10)),
              stroke("M55 175h252", dark, 2.2),
              label(185, 65, "Caisson fermé", cold),
            ]
          : [
              tile(id, 83, 151, 239, 18, "iron", 10),
              surface(id, "M51 118h46l15 20v33H48Z", "steel"),
              surface(id, "M53 125h25l12 16H54Z", "glass", 0.82),
              ...[72, 214, 278].map((x) => tire(id, x, 166, 12)),
              label(266, 66, "Fixations", heat),
            ],
    ],
  },
  fabPrototype: {
    foot: [
      "Le modèle fixe une première forme",
      "L’atelier fabrique une première pièce",
      "L’essai indique où reprendre",
    ],
    draw: (s, id) => [
      panel(id, 52, 61, 126, 97, "iron"),
      block(62, 72, 103, 63, paint(id, s === 0 ? "glass" : "cream"), dark, 2),
      stroke("M76 120V100l17-14h44l13 14v20h-74m17-35v36m43-35v37", "#5e867a", 1.55, "3 2"),
      tile(id, 202, 115, 105, 31, s === 2 ? "copper" : "steel", 13),
      ...joint(id, 236, 132, 13),
      s === 0
        ? label(113, 169, "Modèle", cold)
        : s === 1
          ? stream(179, 107, 208, 113, forest)
          : [
              link(262, 65, "Vérifier la cote", "M255 73l-9 45", heat),
              stroke("M217 106h75m-76-5v12m76-12v12", heat, 1.45),
            ],
    ],
  },
  warehouseFlow: {
    foot: [
      "Chaque lot a un emplacement",
      "Le plus ancien peut partir d’abord",
      "L’échéance peut changer la priorité",
    ],
    draw: (s, id) => [
      panel(id, 48, 55, 264, 111, "iron"),
      ...[88, 134].map((y) => stroke(`M54 ${y}h253`, "#c4c6a9", 2.5)),
      ...[72, 153, 232].map((x, i) => [
        box(id, x, 66, 59, 18, i === s ? "copper" : "cream"),
        box(id, x, 114, 59, 18, "steel"),
        label(
          x + 25,
          109,
          s === 2
            ? ["J+6", "J+4", "J+2"][i]!
            : s === 1
              ? ["Entré 2", "Entré 1", "Entré 3"][i]!
              : ["A", "B", "C"][i]!,
          i === s ? heat : cold,
        ),
      ]),
      s > 0 && stream(s === 1 ? 181 : 261, 150, s === 1 ? 181 : 261, 168, heat),
    ],
  },
} satisfies Record<string, Study>;
