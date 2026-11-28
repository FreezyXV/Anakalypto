import {
  type Study,
  type TransportTone,
  automobile,
  block,
  cold,
  dark,
  duct,
  fastener,
  fillPath,
  forest,
  grounding,
  heat,
  joint,
  label,
  link,
  motor,
  moved,
  oval,
  pack,
  paint,
  panel,
  rotor,
  stream,
  stroke,
  surface,
  tank,
  tile,
  tire,
} from "./art";

function mineral(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 33, 59),
      surface(id, "M-51 13l17-32 36-16 39 12 14 30-20 26h-56Z", "iron", 1.35),
      fillPath("M-50 12l22-20 36 13 23-26 11 16-7 28-19 4-30-16-24 9Z", "#9d8b65", "#5f6b58", 1.1),
      stroke("M-38 0l11 11 25-1 14 13m-18-41 10 13 13-9 19 10m-50 24 12 9", "#d4af7b", 1.85),
      ...[
        [-30, 10],
        [-11, -12],
        [22, 6],
        [11, 22],
      ].map(([a, b]) => oval(a!, b!, 4, 2.1, "#bd8858", "#806545")),
    ],
    scale,
  );
}
function moduleBoard(id: string, x: number, y: number, scale = 1, missing = false) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 43, 77),
      surface(id, "M-72-25l19-16H51l22 16v48L54 39H-57l-15-16Z", "iron", 1.3),
      fillPath("M-68-22h133l3 42-18 13H-56l-12-11Z", "#5b7562", "#384f45", 1),
      stroke(
        "M-61-15h24l17 13m-42 11h49l11 13h42l20-12m0-25H39L25-4h-8m-61 27h24m47-37h17",
        "#dbbc78",
        1.12,
      ),
      block(-25, -15, 49, 42, missing ? "#826654" : paint(id, "soot"), "#c9bd91", 2),
      !missing && surface(id, "M-16-9h31v28h-31Z", "steel", 0.78),
      ...Array.from({ length: 8 }, (_, i) =>
        stroke(`M${-24 + i * 6} -21v6m0 41v6`, "#d8c38f", 1.45),
      ),
      ...[-54, 55].flatMap((a) => [...fastener(a, -15), ...fastener(a, 23)]),
    ],
    scale,
  );
}
function plant(id: string, x: number, y: number, scale: number, tone: TransportTone, kind = 0) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 44, 78),
      surface(id, "M-65 8l22-29 23 12 22-23 22 12 38-15v67l-16 11H-65Z", tone, 1.14),
      surface(id, "M-65 8h112v35H-65Z", "iron", 0.9),
      surface(id, "M47 8l15-23v47L47 43Z", "steel", 0.98),
      ...[-54, -29, -4, 21].map((a, i) =>
        block(a, 14, 17, 19, i === kind ? "#ddc28b" : paint(id, "glass"), dark, 2),
      ),
      stroke("M-56 10h96m-90-20 20 8 20-20m10 5 16 7 31-11", "#d9cba4", 1.28),
      surface(id, "M53-26v-15h9v12l8-2V1L53 12Z", "steel", 0.93),
    ],
    scale,
  );
}
function deliveryTruck(id: string, x: number, y: number, scale = 1, load = 0) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 48, 96),
      surface(id, "M-90 35v-12l19-22h36l10 9h97l18 14v15H-90Z", "iron", 1.18),
      surface(id, "M-79 17l15-14h27l4 17h-47Z", "glass", 0.85),
      surface(id, "M-23-26l15-8h79l13 8v54H-23Z", "steel", 1.16),
      surface(id, "M-20-22h97v45h-97Z", load === 1 ? "cream" : "glass", 1),
      ...Array.from({ length: load === 1 ? 5 : 0 }, (_, i) => {
        const a = -14 + (i % 3) * 25,
          b = i > 2 ? -14 : 4;
        return surface(id, `M${a} ${b}l4-3h18v17h-22Z`, "copper", 0.8);
      }),
      stroke("M-20-22h97m-137 44h19m-1-11h9m101 6v24", "#d9d4af", 1.27),
      tire(id, -58, 38, 14),
      tire(id, 51, 38, 14),
    ],
    scale,
  );
}
function paper(id: string, x: number, y: number, scale = 1, checked = false) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 51, 45),
      surface(id, "M-37-54h55l18 16v84l-8 6h-65Z", "cream", 1.14),
      fillPath("M18-54v16h18Z", "#ae9f7b", "#867c67", 0.85),
      stroke("M-26-35h30m-30 5h45m-45 9h50m-50 6h46m-45 15h46m-47 8h35m-35 6h38", "#9b967a", 1.26),
      stroke(checked ? "M-25 34l6 6 16-18m10 15h16" : "M-23 37h49", "#55785a", 1.8),
    ],
    scale,
  );
}
function oilBarrel(id: string, x: number, y: number) {
  return moved(x, y, [
    grounding(id, 0, 49, 42),
    surface(id, "M-32-41q32-14 64 0v76q-4 18-32 18t-32-17Z", "copper", 1.2),
    oval(0, -39, 32, 9, paint(id, "steel"), dark),
    stroke("M-31-19q31 12 62 0m-62 34q31 12 62 0m-47-56v62m34-58v61", "#d9b37f", 1.5),
    surface(id, "M-10-5h20v18h-20Z", "cream", 0.8),
  ]);
}
function sideSill(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M-85 17l11-25 33-11 30-29h69l33 27 50 15 12 18-6 24H-78Z", "steel", 1.43),
      surface(id, "M-43-17l35-26h61l30 24Z", "glass", 1.1),
      surface(id, "M-76 13l32-17h135l44 16v18H-75Z", "iron", 1.06),
      stroke("M-37-14h123m-46-28v23m-56 22h28m45 0h12", "#d2d6b5", 1.49),
      tire(id, -54, 28, 18),
      tire(id, 113, 28, 18),
    ],
    scale,
  );
}
function drum(id: string, x: number, y: number, width: number, tone: TransportTone) {
  return moved(x, y, [
    grounding(id, width / 2, 17, width * 0.64),
    surface(id, `M0-17h${width}q12 0 12 18t-12 18H0q-10-2-10-18t10-18Z`, tone, 1.12),
    oval(width, 1, 12, 18, paint(id, tone), dark),
    oval(width, 1, 6.4, 10.4, paint(id, "iron"), "#bac4aa"),
    stroke(`M2-12h${width - 4}m-${width - 4} 24h${width - 2}`, "#e0cca4", 1.28),
  ]);
}
function piston(s: number, id: string) {
  const y = [130, 77, 120][s]!;
  return [
    surface(id, "M120 57h126v101l-18 18h-93l-15-17Z", "iron", 1.38),
    surface(id, "M139 66h91v86h-91Z", "glass", 1.05),
    block(150, 68, 69, y - 68, s === 2 ? "#b66a44" : "#97b9a9", dark, 1),
    surface(id, `M146 ${y}h77v22h-20l-5 8h-25l-7-8h-20Z`, "steel", 1.14),
    stroke(`M150 ${y + 5}h70m-70 6h70m-37 19 20 ${166 - y - 30}`, "#ded8b7", 2.1),
    ...joint(id, 187, y + 15, 6.1),
    ...joint(id, 202, 168, 12, "copper"),
    surface(id, "M126 55h51v12h-38v12h-13Zm73 0h40v12h-40Z", "steel", 0.85),
    s === 0
      ? [stream(97, 64, 147, 64, cold), stream(165, 78, 165, 111, cold), label(92, 91, "Air", cold)]
      : s === 1
        ? [stream(261, 122, 261, 83, heat), label(98, 80, "Air chaud", heat)]
        : [
            surface(id, "M180 51h8v23h-8Z", "copper", 0.9),
            stroke("M167 83l12 3 4 12 9-9 11 5-5-13 9-3", "#f2cf85", 2.6),
            stream(262, 79, 262, 121, heat),
          ],
  ];
}
export const vehicleWork = {
  carMaterialChain: {
    foot: [
      "Le minerai contient plusieurs matières",
      "Le raffinage sépare ou purifie",
      "La matière est choisie pour la pièce",
    ],
    draw: (s, id) => [
      s === 0
        ? [mineral(id, 167, 108, 1.23), link(259, 87, "Veine", "M245 91l-38 19", heat)]
        : s === 1
          ? [
              mineral(id, 73, 111, 0.58),
              stream(109, 111, 137, 111),
              plant(id, 184, 108, 0.63, "copper"),
              drum(id, 257, 120, 44, "steel"),
              stream(226, 109, 248, 109),
              label(179, 66, "Séparation", cold),
            ]
          : [
              drum(id, 82, 111, 52, "steel"),
              stream(153, 111, 193, 111, forest),
              rotor(id, 250, 111, 45, "steel"),
              link(301, 69, "Pièce", "M291 73l-22 13", cold),
            ],
    ],
  },
  carFactoryNetwork: {
    foot: [
      "Les pièces viennent de sites différents",
      "Pièces et délais convergent sur un site",
      "Les véhicules rejoignent les marchés",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            plant(id, 85, 102, 0.55, "steel"),
            plant(id, 177, 102, 0.55, "copper", 1),
            plant(id, 267, 102, 0.55, "glass", 2),
            label(84, 150, "Sièges"),
            label(178, 150, "Caisse"),
            label(272, 150, "Modules"),
          ]
        : s === 1
          ? [
              plant(id, 180, 105, 0.87, "steel"),
              stream(72, 83, 121, 99),
              stream(285, 83, 237, 99),
              sideSill(id, 158, 150, 0.44),
              label(180, 61, "Assemblage", cold),
            ]
          : [
              plant(id, 74, 94, 0.54, "iron"),
              deliveryTruck(id, 197, 120, 0.71),
              surface(id, "M200 68h112l-14 15h-83Z", "iron"),
              stroke("M236 66V53h36v13", "#769487", 2),
              stream(102, 107, 129, 114),
              label(262, 63, "Port"),
            ],
  },
  autoChipSupply: {
    foot: [
      "Une puce équipe un module",
      "Le module relie une mesure à une action",
      "Une puce absente peut bloquer",
    ],
    draw: (s, id) => [
      moduleBoard(id, [177, 101, 106][s]!, 112, s === 0 ? 1.03 : 0.7, s === 2),
      s === 0
        ? link(268, 75, "Puce", "M247 78l-50 20", heat)
        : [
            automobile(id, 182, 93, 0.69, false, true),
            s === 1
              ? stream(150, 113, 193, 113, forest)
              : stroke("M167 105l14 15m0-15-14 15", heat, 3),
            label(104, 63, s === 1 ? "Module" : "Référence absente", cold),
          ],
    ],
  },
  editionEmissionsTest: {
    foot: [
      "Un cycle fixe le déroulement de l’essai",
      "L’instrument distingue des polluants",
      "Résultat et limite suivent une procédure",
    ],
    draw: (s, id) => [
      tile(id, 55, 139, 251, 23, "iron", 11),
      automobile(id, 57, 78, 0.87, false, true),
      ...[97, 206].map((a) => oval(a, 147, 22, 5, paint(id, "soot"), "#8b9e8b")),
      duct("M65 131H45V89H73", heat, s > 0),
      ...(s === 0
        ? [link(243, 59, "Sur rouleaux", "M239 64l-25 73", cold)]
        : [
            panel(id, 252, 68, 62, 61, "iron"),
            stroke("M260 109l9-11 9 5 13-15 13 13", "#d0d1a0", 1.8),
            label(281, 60, s === 1 ? "Analyse" : "Limite", cold),
          ]),
      s === 2 && stroke("M258 93h50", "#e1bb80", 1.4, "3 2"),
    ],
  },
  recallTrace: {
    foot: [
      "Une série concernée est isolée",
      "Une référence permet de l’identifier",
      "Le suivi indique la correction effectuée",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [0, 1, 2].map((i) =>
            automobile(
              id,
              36 + i * 102,
              95 + i * 4,
              0.43,
              false,
              false,
              i === 1 ? "copper" : "steel",
            ),
          )
        : [
            automobile(id, 54, 107, 0.66, false, true, s === 2 ? "steel" : "copper"),
            paper(id, 247, 112, 0.83, s === 2),
            link(119, 78, s === 1 ? "Identifiant" : "Suivi", "M125 83l18 26", cold),
          ]),
      s === 0 && label(170, 75, "Série concernée", heat),
    ],
  },
  editionFuelOrigins: {
    foot: [
      "Une matière biologique fournit un intrant",
      "Hydrogène + source de carbone",
      "Le bilan couvre tout le cycle de vie",
    ],
    draw: (s, id) => [
      oilBarrel(id, 258, 111),
      s === 0
        ? [
            surface(id, "M47 123l14-22h57l17 21v26H47Z", "copper"),
            stroke("M88 125q-8-26-1-55m0 34-17-16m18 3 15-17", forest, 2.45),
            label(88, 64, "Biomasse", forest),
            stream(140, 112, 218, 113, forest),
          ]
        : s === 1
          ? [
              tank(id, 45, 82, 51, 69, "steel"),
              tank(id, 121, 82, 53, 69, "glass"),
              label(70, 66, "H₂", cold),
              label(150, 66, "Carbone", forest),
              stream(178, 114, 216, 114, forest),
            ]
          : [
              plant(id, 85, 111, 0.5, "steel"),
              deliveryTruck(id, 160, 122, 0.4, 0),
              stream(200, 113, 225, 113),
              label(101, 67, "Production"),
              label(195, 83, "Transport", cold),
            ],
    ],
  },
  energyRange: {
    foot: [
      "Indice de départ pour la traînée",
      "La traînée croît avec le carré de la vitesse",
      "Traînée seule · environ +40 %",
    ],
    draw: (s, id) => [
      ...(s < 2
        ? [
            automobile(id, 75, 90, 1.02),
            ...([66, 77, 89] as const).map((y, i) =>
              stroke(
                `M${310 + i * 7} ${y}q-86-8-153 ${i * 5}`,
                s ? "#508185" : "#93a9a1",
                s ? 2.4 : 1.6,
              ),
            ),
            stream(s ? 310 : 273, 144, 234, 144, cold),
            label(269, 60, s ? "130 km/h" : "110 km/h", cold),
          ]
        : [
            panel(id, 55, 59, 250, 106, "cream"),
            stroke("M86 144h195", "#8a9174", 1.3),
            surface(id, "M108 99h53v45h-53Z", "steel", 1),
            surface(id, "M201 81h54v63h-54Z", "copper", 1),
            label(135, 91, "1,00", cold),
            label(227, 73, "1,40", heat),
            label(136, 161, "110 km/h"),
            label(228, 161, "130 km/h"),
          ]),
    ],
  },
  detailCompressionIgnition: {
    foot: [
      "L’air seul entre dans le cylindre",
      "La compression échauffe l’air",
      "Les gaz poussent le piston",
    ],
    draw: piston,
  },
  detailThermalChain: {
    foot: [
      "Le moteur entraîne un arbre",
      "La transmission adapte et transmet",
      "Le pneu exerce un effort sur le sol",
      "Deux circuits remplissent deux fonctions",
    ],
    draw: (s, id) => [
      tile(id, 46, 144, 265, 23, "iron", 12),
      motor(id, 91, 107, 0.78),
      drum(id, 137, 110, 62, s === 1 ? "copper" : "steel"),
      tire(id, 262, 112, 39),
      stroke("M204 112h28", "#b5ab80", 5),
      s === 0
        ? link(81, 59, "Moteur", "M81 65v15", heat)
        : s === 1
          ? link(174, 61, "Transmission", "M181 67v24", cold)
          : s === 2
            ? [stream(248, 154, 280, 154, forest), label(262, 64, "Pneu", forest)]
            : [
                duct("M89 91V67h58v20", cold),
                duct("M80 124v15h113", heat),
                label(179, 60, "Refroidissement", cold),
                label(90, 163, "Échappement", heat),
              ],
    ],
  },
  vehicleMass: {
    foot: [
      "Même gabarit, masses différentes",
      "Même vitesse, plus d’énergie",
      "Montées et relances changent le bilan",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            automobile(id, 55, 61, 0.65, false, true),
            automobile(id, 55, 116, 0.65, false, true, "copper"),
            ...(s === 0
              ? [label(261, 99, "Plus léger", cold), label(259, 152, "Plus lourd", heat)]
              : [
                  stream(208, 100, 255, 100, cold),
                  stream(205, 152, 302, 152, heat),
                  label(264, 75, "Même vitesse", forest),
                ]),
          ]
        : [
            surface(id, "M48 139h75l115-56h68v57l-50 14H48Z", "cream", 1.09),
            stroke("M54 137h60l125-55h65", "#596e64", 3.5),
            moved(157, 95, [
              <g key="slope" transform="rotate(-24)">
                {automobile(id, -30, -18, 0.5, false, true, "copper")}
              </g>,
            ]),
            label(263, 70, "Montée", heat),
          ],
  },
  detailWearPaths: {
    foot: [
      "L’usage laisse des traces sur les pièces",
      "L’âge agit aussi à l’arrêt",
      "L’entretien se lit dans les documents",
    ],
    draw: (s, id) => [
      s < 2
        ? [
            tire(id, 156, 111, 53),
            ...(s === 0
              ? Array.from({ length: 9 }, (_, i) =>
                  stroke(`M${105 + i * 7} ${126 + (i % 2) * 3}l4 9`, "#c7af7d", 1.8),
                )
              : [
                  ...[
                    [-21, 24],
                    [24, -37],
                    [41, 6],
                    [2, 38],
                  ].map(([a, b]) => oval(156 + a!, 111 + b!, 7, 4, "#9c6948", "#76533c")),
                ]),
            link(
              263,
              75,
              s === 0 ? "Gomme usée" : "Corrosion",
              s === 0 ? "M242 81l-67 64" : "M233 81l-46-5",
              heat,
            ),
          ]
        : [
            rotor(id, 105, 112, 35, "iron"),
            paper(id, 234, 114, 0.94, true),
            label(109, 62, "Pièce", cold),
            label(250, 61, "Historique", forest),
          ],
    ],
  },
  bodyRecycling: {
    foot: [
      "Une carrosserie mêle des matériaux",
      "Les pièces séparées suivent des filières",
      "L’aimant attire certains métaux",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [sideSill(id, 133, 112, 1.01), link(256, 66, "Assemblage", "M242 71l-35 24", cold)]
        : s === 1
          ? [
              sideSill(id, 108, 128, 0.72),
              surface(id, "M205 91l29-25 55-2 13 29-15 18h-83Z", "glass", 1.25),
              stream(189, 117, 221, 104, forest),
              label(264, 61, "Vitrage", cold),
            ]
          : [
              surface(id, "M70 81q109-24 194-2l22 18-20 10-42-13-153 11Z", "iron", 1.26),
              ...[95, 128, 150, 190, 231, 259].map((x, i) =>
                surface(
                  id,
                  `M${x} ${i % 2 ? 138 : 120}l16-3 9 12-20 5Z`,
                  i % 2 ? "glass" : "steel",
                  0.84,
                ),
              ),
              ...[95, 151, 232].map((x) => stream(x + 8, 118, x + 8, 96, heat)),
              label(178, 58, "Aimant", heat),
            ]),
    ],
  },
  batteryMaterials: {
    foot: [
      "L’état du pack oriente la suite",
      "Le traitement sépare plusieurs fractions",
      "Des matières peuvent être récupérées",
    ],
    draw: (s, id) => [
      s === 0
        ? [
            pack(id, 66, 76, 8, 3, "glass", 15),
            panel(id, 232, 90, 70, 51, "iron"),
            stroke("M244 122l12-16 8 9 15-15 13 8", "#d0d6a9", 1.8),
            label(260, 65, "Diagnostic", cold),
          ]
        : s === 1
          ? [
              pack(id, 42, 91, 4, 2, "glass", 2),
              stream(130, 113, 169, 112, forest),
              ...["steel", "copper", "soot"].map((t, i) =>
                tile(id, 191 + i * 35, 92 + i * 8, 31, 36, t as TransportTone, 8),
              ),
              label(248, 72, "Fractions", cold),
            ]
          : [
              mineral(id, 91, 118, 0.7),
              stream(136, 115, 184, 115, forest),
              drum(id, 204, 112, 70, "copper"),
              link(256, 66, "Matière", "M255 73l-13 24", forest),
            ],
    ],
  },
  utilityPayload: {
    foot: [
      "Le volume indique la place disponible",
      "La charge utile s’exprime en masse",
      "Les arrêts structurent la tournée",
    ],
    draw: (s, id) => [
      deliveryTruck(id, 157, s === 2 ? 105 : 113, 1.12, s === 0 ? 1 : 0),
      s === 0
        ? link(221, 62, "Espace", "M214 68l-21 20", cold)
        : s === 1
          ? [
              tile(id, 54, 157, 211, 11, "iron", 9),
              panel(id, 268, 132, 42, 29, "glass"),
              label(289, 155, "kg", cold),
              label(251, 68, "Charge", heat),
            ]
          : [
              stroke("M68 163q67 9 103 0t109-14", "#718f76", 2.25, "5 3"),
              ...[91, 171, 257].map((a) => oval(a, a === 257 ? 151 : 165, 4, 4, "#b9965d", dark)),
              label(276, 75, "Arrêts", forest),
            ],
    ],
  },
} satisfies Record<string, Study>;
