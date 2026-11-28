import {
  type Study,
  type TransportTone,
  block,
  cold,
  dark,
  fastener,
  fillPath,
  forest,
  grounding,
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
} from "./art";

export function printedPage(
  id: string,
  x: number,
  y: number,
  scale: number,
  kind: "news" | "form" | "plain",
  cut = 0,
) {
  return moved(
    x,
    y,
    [
      grounding(id, 1, 49, 51),
      surface(id, "M-48-47l6-7h69l19 17-3 82-12 7h-79Z", "copper", 1.13),
      surface(id, "M-46-53h70l19 16v84h-89Z", "cream", 1.1),
      fillPath("M24-53v16h19Z", "#b7a786", "#7a806b", 0.85),
      stroke("M-36-35h51m-51 6h66", "#91856d", 2.25),
      ...(kind === "news"
        ? [
            surface(id, "M-35-21H-3V5h-32Z", "glass", 0.73),
            stroke("M-34 2l12-12 8 5 9-8", "#d0d0a5", 1.08),
            ...Array.from({ length: cut === 1 ? 4 : 9 }, (_, i) => [
              stroke(`M7 ${-20 + i * 6}h${i % 3 === 2 ? 20 : 27}`, "#6d7b65", 1.03),
              i >= 5 && stroke(`M-35 ${-20 + i * 6}h${i % 2 ? 31 : 15}`, "#849074", 1.05),
            ]),
          ]
        : Array.from({ length: cut === 1 ? 3 : 8 }, (_, i) =>
            stroke(
              `M-34 ${-20 + i * 7}h${i % 3 === 2 ? 39 : 66}`,
              i === cut - 2 ? heat : "#a59a77",
              i === cut - 2 ? 3 : 1.2,
              kind === "plain" ? "3 2" : undefined,
            ),
          )),
      cut === 1 &&
        fillPath("M-47 10l10 5 11-5 8 5 15-5 9 5 15-5 11 5 11-5v38h-90Z", "#c0b6a496", "none"),
    ],
    scale,
  );
}
export function screen(
  id: string,
  x: number,
  y: number,
  scale: number,
  tone: TransportTone = "soot",
) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 42, 75),
      surface(id, "M-66-40l9-7H59l9 9v74l-9 7H-67Z", "iron", 1.18),
      surface(id, "M-60-34H58v62H-60Z", tone, 0.94),
      stroke("M-61-35h117m-115 65h116m-45 5h10", "#b8c4aa", 1.1),
      ...fastener(-58, 36, 2.4),
      ...fastener(57, 36, 2.3),
    ],
    scale,
  );
}
export function imagePrint(id: string, x: number, y: number, scale: number, variant: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M-65-46h130v92H-65Z", "cream", 1.19),
      fillPath("M-59-39h118v72H-59Z", variant === 1 ? "#a2b9a3" : "#a0b5ad", "#72867a", 0.86),
      fillPath(
        variant === 2
          ? "M-58 19l28-26 17-3 20-20 42 32 10-3v31H-59Z"
          : "M-59 18l26-16 25 5 25-33 21 24 20 12v22H-59Z",
        "#6f8575",
        "#637a69",
        1,
      ),
      stroke(
        variant === 2
          ? "M-31-3l16-4 21-19 13 11m-68 39 18-11"
          : "M4-8l13-18L35-7 21-13 14-11m-67 35h100",
        "#dddbb0",
        1.32,
      ),
      oval(-32, -20, 7, 6.4, "#d5b788", "#977b57"),
      stroke("M-51 39h78", "#a49774", 1),
    ],
    scale,
  );
}
function printingRolls(id: string, x: number, y: number, scale: number, s: number) {
  return moved(
    x,
    y,
    [
      tile(id, -84, 38, 165, 22, "iron"),
      surface(id, "M-73-34l10-9h122l16 9v73H-73Z", "copper", 1.29),
      surface(id, "M-65-29H63v61H-65Z", "iron", 1.14),
      ...[-16, 15].map((v, i) => [
        surface(
          id,
          `M-58 ${v - 11}h104q15 0 15 11t-15 11H-58Z`,
          i === s ? "copper" : "steel",
          0.87,
        ),
        oval(45, v, 12, 12, paint(id, "steel"), dark),
        ...joint(id, 46, v, 5.3),
      ]),
      stroke("M-65-35h128m-129 70h127m-116-69v69", "#d2c599", 1.23),
      fillPath("M-25 6 63 6l28 24-28 13-64-21Z", "#eadcb1", "#9c8b67", 1),
      stroke("M-9 14l70 10m-64-5 67 12m-58-6 62 11", "#8f8b6e", 1.22, "3 2"),
    ],
    scale,
  );
}
function tv(id: string, x: number, y: number, scale: number, color: boolean) {
  return moved(
    x,
    y,
    [
      surface(id, "M-65-40l13-10H62l9 10v74l-9 12H-65Z", "copper", 1.32),
      surface(id, "M-54-35H61v63h-115Z", "soot", 0.99),
      block(-49, -30, 98, 53, paint(id, "glass"), dark, 8),
      fillPath(
        "M-46 16l17-22 22 9 18-20 33 28v8h-90Z",
        color ? "#a28458" : "#6e8178",
        "#657568",
        0.88,
      ),
      oval(21, -15, 6, 6, color ? "#d5ad62" : "#b4b6a1"),
      ...[57, 63].map((a) => oval(a, 12, 2.7, 2.4, paint(id, "steel"), dark)),
      stroke("M-42 31h90m-68 23h-22m73 0h-18", "#a89369", 1.3),
    ],
    scale,
  );
}
function mountRadio(
  id: string,
  x: number,
  y: number,
  scale: number,
  model: "studio" | "radio" | "stack",
) {
  return moved(
    x,
    y,
    [
      surface(
        id,
        "M-63-33l17-10H56l11 9v61l-13 11H-64Z",
        model === "radio" ? "copper" : "steel",
        1.24,
      ),
      surface(id, "M-56-29H57v57H-56Z", "iron", 1.02),
      model === "studio"
        ? [-42, -19, 6, 30].map((a, i) => [
            stroke(`M${a} -19v38`, "#c4c6a1", 1.7),
            block(a - 5, [-10, 5, -4, 11][i]!, 11, 6, paint(id, "copper"), dark, 1),
          ])
        : model === "stack"
          ? [-22, -4, 14].map((v) => [
              block(-48, v, 74, 10, paint(id, "glass"), dark, 1),
              oval(43, v + 5, 3, 3, "#dbb67a"),
            ])
          : [
              block(-47, -20, 70, 37, paint(id, "soot"), dark, 2),
              ...[0, 1, 2, 3, 4, 5].map((i) => stroke(`M-42 ${-15 + i * 5}h58`, "#b4bea1", 1.44)),
              ...joint(id, 39, 7, 9, "copper"),
              stroke("M19-38l31-37m-1-1 5-6", "#788c78", 2.15),
            ],
      stroke("M-51-31h104m-104 63h104", "#d1ca9f", 1.27),
    ],
    scale,
  );
}
export function mast(id: string, x: number, y: number, scale: number, transmit: boolean) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 42, 34),
      surface(id, "M-21 39-5-46H5l17 85Z", "iron", 1.16),
      fillPath("M-16 34-2-40h3l14 74Z", "#c6ccad", "#728578", 0.95),
      stroke("M-14 20l27-14-21-14 14-14M-17 32l33-17-25-20 13-13", "#71867a", 1.15),
      oval(0, -44, 5.7, 5.4, paint(id, "copper"), dark),
      transmit &&
        [8, 15, 22].map((r) =>
          stroke(
            `M${r} ${-44 - r}q${r} ${r} 0 ${r * 2}m-${r * 2} 0q-${r} -${r} 0 -${r * 2}`,
            "#7faaa0",
            1.58,
          ),
        ),
      tile(id, -24, 37, 51, 8, "iron", 8),
    ],
    scale,
  );
}
function scopeTrace(x: number, y: number, mode: number) {
  const d =
    mode === 0
      ? "M0 11h11V2h6v9h8V2h6v9h8V2h6v9h27"
      : mode === 1
        ? "M0 11h8V2h15v9h9V2h15v9h9V2h15v9h16"
        : "M0 11h6V2h5v9h6V2h5v9h6V2h5v9h14V2h18v9h8V2h18v9h8V2h18v9h11";
  return moved(x, y, [stroke(d, "#b9d4b1", 2.16)]);
}
function newsFlow(id: string, s: number) {
  return [
    s === 0
      ? [
          tile(id, 47, 92, 105, 50, "iron", 13),
          ...Array.from({ length: 15 }, (_, i) => {
            const x = 57 + (i % 5) * 17,
              y = 100 + Math.floor(i / 5) * 14;
            return [
              surface(id, `M${x} ${y}l4-5h12v12l-4 5h-12Z`, i < 5 ? "copper" : "steel", 0.82),
              stroke(`M${x + 4} ${y + 2}h7m-4-4v7`, "#d1ca9b", 0.9),
            ];
          }),
        ]
      : printingRolls(id, 89, 110, 0.62, s),
    stream(150, 123, 194, 123, forest),
    ...Array.from({ length: s === 0 ? 1 : s === 1 ? 3 : 2 }, (_, i) =>
      printedPage(id, 214 + i * 32, 109 + i * 6, 0.56, "news"),
    ),
    label(108, 61, s === 2 ? "Atelier" : "Composition", cold),
    s === 2
      ? [label(246, 61, "Parution", heat), stroke("M203 87h88", "#a17b4c", 1.1, "5 4")]
      : label(250, 157, s === 1 ? "Tirage" : "Première page", heat),
  ];
}
export const mediaWorkshop = {
  newswire: {
    foot: [
      "Les faits utiles sont placés en tête",
      "Une coupure peut laisser le début seul",
      "Le contexte suit les faits principaux",
    ],
    draw: (s, id) => [
      printedPage(id, 104, 108, 0.97, "form", [2, 1, 7][s]!),
      mountRadio(id, 254, 105, 0.69, "stack"),
      stroke(s === 1 ? "M152 112h24m15 0h17" : "M152 112h61", "#729585", 2.3, "5 3"),
      label(106, 160, s === 0 ? "Ouverture" : s === 1 ? "Début reçu" : "Contexte", cold),
      label(250, 62, "Transmission", heat),
    ],
  },
  cheapPrint: {
    foot: [
      "Les abonnements financent le journal",
      "L’espace publicitaire peut être vendu",
      "La vente au numéro élargit l’accès",
    ],
    draw: (s, id) => [
      printedPage(id, 124, 107, 1.01, "news"),
      s === 0
        ? [printedPage(id, 249, 104, 0.76, "form", 3), label(249, 158, "Abonnement", cold)]
        : s === 1
          ? [
              surface(id, "M200 77h94v64h-94Z", "copper"),
              fillPath("M216 116l37-24 24 12-37 24Z", "#e0c388", "#ac8a58", 0.95),
              link(247, 65, "Annonce", "M249 72v13", heat),
            ]
          : [
              tile(id, 201, 117, 100, 33, "steel"),
              ...Array.from({ length: 3 }, (_, i) =>
                oval(235 + 12 * i, 107 - 4 * i, 11, 4, paint(id, "copper"), dark),
              ),
              label(249, 75, "Au numéro", cold),
            ],
    ],
  },
  printPress: {
    foot: [
      "Les caractères composent une page",
      "Une composition donne plusieurs feuilles",
      "Les numéros paraissent à intervalles",
    ],
    draw: (s, id) => newsFlow(id, s),
  },
  colourtv: {
    foot: [
      "Rouge, vert et bleu composent l’image",
      "Luma et chrominance sont séparées",
      "Deux postes lisent des parts du signal",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            tv(id, 127, 112, 1.04, true),
            ...["#b9664c", "#728f64", "#4f8496"].map((c, i) =>
              block(236 + i * 21, 82, 17, 54, c, "#647967", 3),
            ),
            label(260, 159, "R · V · B", cold),
          ]
        : s === 1
          ? [
              panel(id, 52, 63, 260, 99, "iron"),
              stroke("M69 97q25-20 51-1t63 0 52 0 58 0", "#d0d6b0", 2.15),
              stroke(
                "M71 127q6-11 12 0t12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0 12 0",
                "#cfab73",
                1.7,
              ),
              label(241, 84, "Luma", cold),
              label(221, 155, "Chrominance", heat),
            ]
          : [
              tv(id, 99, 113, 0.79, false),
              tv(id, 256, 113, 0.79, true),
              label(100, 161, "Monochrome", cold),
              label(255, 161, "Couleur", heat),
            ],
  },
  wirelessmorse: {
    foot: [
      "S se code avec trois signaux courts",
      "O se code avec trois signaux longs",
      "Le rythme distingue les lettres",
    ],
    draw: (s, id) => [
      surface(id, "M48 123l12-9h114l13 10v29H48Z", "iron", 1),
      ...joint(id, 98, 102, 11, "copper"),
      stroke("M94 99l45-19h22", "#b99b6b", 6),
      oval(154, 78, 13, 4, paint(id, "soot"), dark),
      mast(id, 271, 110, 0.82, true),
      panel(id, 56, 47, s === 2 ? 170 : 114, 29, "soot"),
      scopeTrace(66, 55, s),
      label(122, 170, s === 0 ? "S · court" : s === 1 ? "O · long" : "Rythme transmis", cold),
    ],
  },
  crystalradio: {
    foot: [
      "Antenne, accord, détecteur, écouteur",
      "Le détecteur fait ressortir une enveloppe",
      "Le récepteur utilise l’énergie du signal",
    ],
    draw: (s, id) => [
      tile(id, 49, 132, 264, 34, "iron", 10),
      mast(id, 78, 97, 0.53, s !== 2),
      ...Array.from({ length: 12 }, (_, i) => oval(113 + i * 4, 109, 8, 14, "none", "#ac865b")),
      surface(id, "M180 103l13-16 18 14-6 19h-21Z", "cream", 1.1),
      stroke("M198 74l-5 27-37 9m47 2h38m28 12h23", "#c4a478", 1.5),
      stroke("M247 123V94q15-24 31 0v30", "#4f6d60", 4.8),
      block(244, 108, 11, 16, paint(id, "soot"), dark, 3),
      block(274, 108, 10, 16, paint(id, "soot"), dark, 3),
      s === 1
        ? [
            stroke("M97 75q11-20 22 0t22 0 22 0", "#91ac96", 1.28),
            stroke("M174 78q7-24 14-1 7-24 14-1 7-15 14-1 7-12 14-1", heat, 1.75),
            label(250, 63, "Détecteur", heat),
          ]
        : label(191, 65, s === 2 ? "Sans pile" : "Cristal", cold),
    ],
  },
  radioAlert: {
    foot: [
      "Un émetteur couvre une zone",
      "Plusieurs postes, un même signal",
      "Un poste autonome reste indépendant",
    ],
    draw: (s, id) => [
      mast(id, 93, 104, 1.06, true),
      mountRadio(id, 201, 117, 0.59, "radio"),
      s >= 1 && mountRadio(id, 289, 128, 0.45, "radio"),
      stroke("M106 72q80-27 176 19", "#8da992", 1.6, "5 4"),
      s === 2
        ? [
            surface(id, "M207 136h41v15h-41Z", "ember"),
            stroke("M240 139v8m-4-4h8", "#eee0b4", 1.4),
            label(224, 62, "Autonome", cold),
          ]
        : label(233, 61, s === 0 ? "Zone couverte" : "Postes récepteurs", cold),
    ],
  },
  broadcast: {
    foot: [
      "Le studio alimente l’émetteur",
      "La diffusion atteint plusieurs postes",
      "Un haut-parleur restitue le programme",
    ],
    draw: (s, id) => [
      ...(s < 2
        ? [
            mountRadio(id, 86, 118, 0.62, "studio"),
            mast(id, 180, 104, 0.76, true),
            mountRadio(id, 261, 117, 0.48, "radio"),
            stream(110, 110, 155, 110, forest),
            s === 1 && mountRadio(id, 297, 146, 0.35, "radio"),
            label(90, 65, "Studio", cold),
            label(232, 66, s === 0 ? "Émetteur" : "Même émission", heat),
          ]
        : [
            mountRadio(id, 107, 105, 0.87, "radio"),
            oval(250, 106, 49, 45, paint(id, "soot"), dark),
            oval(250, 106, 39, 36, paint(id, "iron"), "#a6b899"),
            ...joint(id, 250, 106, 15),
            ...Array.from({ length: 3 }, (_, i) =>
              stroke(
                `M${292 + i * 7} ${84 - i * 6}q${13 + i * 4} 20 0 ${42 + i * 10}`,
                "#a77b53",
                1.55,
              ),
            ),
            label(245, 163, "Haut-parleur", cold),
          ]),
    ],
  },
  webHyperlink: {
    foot: [
      "Les ressources ont des adresses",
      "Le lien désigne une autre ressource",
      "Le navigateur demande puis affiche",
    ],
    draw: (s, id) => [
      screen(id, 108, 108, 0.93),
      screen(id, 255, 108, 0.93, s === 2 ? "glass" : "soot"),
      surface(id, "M55 83h97v14H55Z", "steel", 0.7),
      surface(id, "M201 83h100v14H201Z", s === 2 ? "cream" : "steel", 0.7),
      stroke("M67 90h27m-28 14h49m-49 8h39m111-22h37m-37 14h62", "#cbd2ad", 1.68),
      s >= 1 && stream(137, 111, 207, 111, heat),
      label(108, 161, "Page A", cold),
      label(256, 161, s === 2 ? "Page affichée" : "Ressource B", heat),
    ],
  },
  webSnapshots: {
    foot: [
      "Une collecte conserve un état daté",
      "La même adresse peut changer",
      "Deux états se comparent dans le temps",
    ],
    draw: (s, id) => [
      screen(id, 107, 104, 0.92),
      screen(id, 257, 104, 0.92),
      imagePrint(id, 107, 104, 0.71, 0),
      imagePrint(id, 257, 104, 0.71, s === 0 ? 0 : 2),
      label(106, 162, "Capture 1", cold),
      label(257, 162, s === 0 ? "Même adresse" : "Capture 2", heat),
      s === 2 && [
        stroke("M147 101q35-30 69-7", "#c49058", 2.1, "4 3"),
        oval(257, 101, 31, 20, "none", "#b58151"),
      ],
    ],
  },
  imageProvenance: {
    foot: [
      "Repérer un relief ou un horizon",
      "Comparer le cadrage des copies",
      "Replacer la copie dans sa publication",
    ],
    draw: (s, id) => [
      imagePrint(id, 115, 111, 0.92, 0),
      s === 0
        ? [
            link(246, 80, "Relief", "M224 85l-52 11", cold),
            link(253, 126, "Horizon", "M221 126l-51 3", forest),
          ]
        : [
            imagePrint(id, 253, 108, s === 1 ? 0.7 : 0.8, s === 1 ? 0 : 2),
            stroke("M169 105h26", "#9c8c66", 1.5, "4 3"),
            s === 1
              ? stroke("M226 91h52v28h-52Z", heat, 2, "5 3")
              : stroke("M218 153h78", "#97977b", 2.1, "4 3"),
            label(246, 66, s === 1 ? "Copie" : "Publication", heat),
          ],
    ],
  },
  detailSyntheticProvenance: {
    foot: [
      "L’apparence ne suffit pas à établir l’origine",
      "Le contexte fournit des indices",
      "Un historique peut documenter les étapes",
    ],
    draw: (s, id) => [
      imagePrint(id, 106, 112, 1.02, 0),
      s === 0
        ? [imagePrint(id, 248, 112, 1.02, 1), label(176, 60, "Deux origines possibles", cold)]
        : [
            printedPage(id, 255, 110, 0.88, "form", s === 1 ? 4 : 7),
            stream(173, 113, 204, 113, heat),
            label(260, 63, s === 1 ? "Contexte" : "Historique", forest),
          ],
    ],
  },
} satisfies Record<string, Study>;
