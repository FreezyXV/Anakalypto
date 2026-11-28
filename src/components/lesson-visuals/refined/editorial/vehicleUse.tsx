import {
  type Study,
  type TransportTone,
  automobile,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  gold,
  grounding,
  heat,
  joint,
  label,
  layers,
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

function cabin(id: string, belt: boolean, bag: boolean, pose = 0) {
  return [
    grounding(id, 185, 168, 145),
    surface(id, "M32 146l21-43 50-13 56-41h103l49 46 15 26v47H32Z", "glass", 1.35),
    fillPath("M46 144l22-36 47-7L168 56h91l43 43 13 24v39H45Z", "#e0e4cb", "#657a6c", 1.2),
    stroke("M47 146l25-36h52l48-47h89l35 41m-246 50h256", "#82948a", 2.1),
    surface(id, "M41 125l59-19h37v37H39Z", "soot", 1.16),
    surface(id, "M203 139h43l15-65q4-9 15-6l8 8-10 79-12 8h-63Z", "iron", 1.16),
    stroke("M253 77l-9 62h-34m-107-31 34 5 8 16", "#c9c8a2", 2),
    oval(154, 113, 11, 19, "none", dark),
    stroke("M149 117l-30 14", "#597063", 3),
    moved(pose === 2 ? 214 : 220, 111, [
      surface(id, "M-6-22l13 1 17 32-6 17-24 6-13-13 4-29Z", "copper", 1.04),
      ...joint(id, 1, 19, 7, "copper"),
      stroke("M-5 23l-37 4q-5 1-7 7l-15 17h-18m42-12-10 14m39-72-20 10-24 1", "#746651", 10),
      stroke("M-7-15l-20 10-22-1m5 32-16 18", "#ddc59a", 5.2),
      oval(-12, -35, 15, 17, paint(id, "cream"), "#817055"),
      surface(id, "M-23-42q3-9 12-9l8 5-2 16-6 4-15-7Z", "copper", 0.8),
      stroke("M-20-38l-5 5 5 4", "#70634d", 0.85),
      ...joint(id, -2, 0, 5, "steel"),
    ]),
    belt && [stroke("M260 75l-34 22-30 42", dark, 7.9), stroke("M260 75l-34 22-30 42", gold, 4.1)],
    bag && [
      fillPath(
        "M157 112q-3-23 17-26 30-3 32 29-4 24-26 19-14-4-23-13Z",
        "#e8d0a1",
        "#9d8b65",
        1.25,
      ),
      stroke("M166 114q8-26 30-19m-23 34q14-12 23-10", "#ba9b67", 1.42, "4 2"),
    ],
  ];
}
function brakeAssembly(id: string, s: number) {
  return [
    grounding(id, 138, 166, 73),
    tire(id, 135, 111, 51),
    oval(135, 111, 34, 34, paint(id, "steel"), "#647969"),
    ...Array.from({ length: 14 }, (_, i) => {
      const a = (Math.PI * i) / 7;
      return oval(135 + Math.cos(a) * 26, 111 + Math.sin(a) * 26, 1.85, 1.85, "#64786c");
    }),
    surface(id, "M150 77l23-13 19 12v66l-18 13-23-15 9-12h12V94h-12Z", "copper", 1.32),
    ...joint(id, 135, 111, 8),
    duct("M183 86h30v-7h27", heat),
    panel(id, 242, 56, 68, 57, "iron"),
    stroke("M249 94h11V71h11v22h11V74h19", "#d9c8a1", 2.35),
    label(276, 141, s ? "ABS" : "Pression", cold),
  ];
}
function road(id: string, warning = false) {
  return [
    fillPath("M28 170 119 47h121l91 123Z", "#a9b497", "#667d68", 1.18),
    fillPath("M52 169 126 47h108l77 122Z", "#637c73", "#4f6b60", 1.13),
    stroke("M53 169 126 49m185 120-76-120", "#d2d4ae", 1.5),
    stroke("M181 49v116", "#d8cda8", 1.9, "11 11"),
    warning && [
      ...Array.from({ length: 7 }, (_, i) => stroke(`M${110 + i * 23} 111v15`, "#e8dfb8", 4)),
      surface(id, "M104 96V68h12v28Z", "iron", 0.92),
    ],
  ];
}
function overhead(
  id: string,
  x: number,
  y: number,
  scale: number,
  tone: TransportTone = "steel",
  angle = 0,
) {
  return moved(
    x,
    y,
    [
      <g key="vehicle" transform={`rotate(${angle})`}>
        {surface(id, "M-20-27l6-11h26l8 11 5 42-8 18h-34l-7-19Z", tone, 1.4)}
        {surface(id, "M-15-13l3-9h24l4 9-3 19H-12Z", "glass", 0.9)}
        {surface(id, "M-14 10h27l3 12-5 5h-25Z", "iron", 0.86)}
        {stroke("M-13-31H12m-28 55 5 3m21 1 6-3", "#e6dcbc", 1.45)}
        {layers(
          [-23, 20].flatMap((a) =>
            [-22, 13].map((b) => block(a, b, 5, 13, paint(id, "soot"), dark, 1)),
          ),
        )}
      </g>,
    ],
    scale,
  );
}
function witness(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      oval(1, -28, 6, 7, paint(id, "cream"), "#726b52"),
      surface(id, "M-6-20 5-22l8 24-7 5-3-13v11l7 20H3l-7-14-4 14h-5l5-25-5-6Z", "copper", 1),
      stroke("M-4-17l-7 13m16-11 7 14", "#b69167", 1.6),
    ],
    scale,
  );
}
function clipboard(id: string, x: number, y: number, scale: number, stage: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 53, 50),
      panel(id, -41, -47, 82, 101, "iron"),
      surface(id, "M-32-40h60v82h-60Z", "cream", 1),
      surface(id, "M-16-45l5-7h21l4 7v8h-30Z", "steel", 0.9),
      ...[-22, -4, 14, 31].map((t, i) => [
        stroke(`M-24 ${t}h8m11-1h23`, "#a39775", 1.1),
        stage >= i && stroke(`M-24 ${t}l3 3 8-8`, forest, 1.45),
      ]),
    ],
    scale,
  );
}
function antenna(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      tile(id, -23, 25, 49, 12, "iron", 7),
      surface(id, "M-9 26l7-64h5l7 64Z", "steel", 1),
      oval(1, -38, 5.5, 4.7, paint(id, "copper"), dark),
      stroke(
        "M-14-46q-10 10 0 20m29-20q11 10 0 20M-23-54q-17 16 0 36m47-36q16 16 0 36",
        "#80a4a0",
        1.9,
      ),
    ],
    scale,
  );
}
function building(id: string, x: number, y: number, scale: number, tone: TransportTone = "steel") {
  return moved(
    x,
    y,
    [
      surface(id, "M-32-32l17-10h38l9 8v67l-13 11h-51Z", tone, 1.3),
      surface(id, "M-33-32h48v75h-48Z", "cream", 1.14),
      ...Array.from({ length: 9 }, (_, i) =>
        block(
          -26 + (i % 3) * 12,
          -25 + Math.floor(i / 3) * 15,
          8,
          9,
          paint(id, "glass"),
          "#6b7d6e",
          1,
        ),
      ),
      block(-19, 25, 22, 16, paint(id, "iron"), dark, 1),
    ],
    scale,
  );
}
function mapWorld(id: string, s: number) {
  return [
    panel(id, 36, 54, 284, 107, "glass"),
    fillPath(
      "M51 80l17-12 39-5 13 10 15-8 11 11-12 11-15 3-3 16-18-2-20-13-14-1Zm57 28 13-4 13 8 20 9-7 17-14 10-9-17ZM152 83l17-15h41l6-8 49 3 38 10 1 19-23 8-18 18-15-9-9-17-15 4-9 15-31-10-9-9Zm25 21 19-5 18 10-10 21-15 8-8-12ZM260 131l22-8 18 8v13l-35 1Z",
      "#b3b28a",
      "#72866d",
      1.06,
    ),
    stroke("M42 103q128-16 267 0m-263 23q128-10 264 1", "#d1dfc0", 1.04, "4 4"),
    ...[
      [91, 84],
      [185, 81],
      [257, 91],
      [132, 125],
      [282, 136],
    ].map(([a, b], i) => [
      oval(
        a!,
        b!,
        i === s ? 11 : 5.3,
        i === s ? 10 : 5.1,
        paint(id, i === s || (s === 3 && i === 4) ? "copper" : "steel"),
        "#64735a",
      ),
      (i === s || (s === 3 && i === 4)) && oval(a!, b!, 15, 14, "none", "#986d46"),
    ]),
    label(184, 154, ["Amérique du Nord", "Europe", "Chine", "Autres marchés"][s]!, cold),
  ];
}
export const vehicleUse = {
  autoInnovations: {
    foot: [
      "La ceinture retient le corps",
      "L’ABS réduit le risque de blocage",
      "Le coussin amortit certains contacts",
    ],
    draw: (s, id) => (s === 1 ? brakeAssembly(id, s) : cabin(id, true, s === 2, s)),
  },
  detailOwnershipCosts: {
    foot: [
      "Le prix d’achat ouvre le budget",
      "La revente peut valoir moins que l’achat",
      "L’usage ajoute plusieurs postes",
    ],
    draw: (s, id) => [
      s === 0
        ? [
            automobile(id, 41, 92, 0.8),
            clipboard(id, 263, 104, 0.93, 0),
            label(263, 163, "Prix payé", cold),
          ]
        : s === 1
          ? [
              panel(id, 65, 55, 234, 112, "cream"),
              stroke("M88 67v79h182", "#789585", 1.68),
              surface(id, "M110 82h40v63h-40Z", "copper"),
              surface(id, "M225 109h40v36h-40Z", "steel"),
              stream(154, 84, 218, 111, heat),
              label(127, 165, "Achat"),
              label(246, 165, "Revente"),
            ]
          : [
              automobile(id, 56, 88, 0.7),
              [0, 1, 2].map((i) => clipboard(id, 231 + i * 32, 113 + i * 9, 0.39, i)),
              label(244, 72, "Dépenses", heat),
              stroke("M227 147h91", "#728a73", 1.2),
            ],
    ],
  },
  detailLeaseReturn: {
    foot: [
      "L’accord fixe durée et conditions",
      "Le kilométrage est suivi",
      "La restitution termine l’usage prévu",
      "Le propriétaire peut revendre le véhicule",
    ],
    draw: (s, id) => [
      automobile(id, 100, 100, 0.65, false, true, s === 2 ? "copper" : "steel"),
      s === 0
        ? [clipboard(id, 78, 105, 0.75, 3), label(80, 169, "Contrat", cold)]
        : s === 1
          ? [
              panel(id, 96, 53, 169, 47, "iron"),
              stroke("M109 87q41-29 79-7t59-6", "#cbcca4", 2.1),
              label(180, 71, "Kilométrage"),
            ]
          : s === 2
            ? [
                building(id, 267, 101, 0.92),
                stream(203, 127, 232, 127, heat),
                label(272, 51, "Retour", heat),
              ]
            : [
                oval(250, 111, 13, 12, paint(id, "copper"), dark),
                surface(id, "M252 107h43v9h-12v8h-10v-9h-21Z", "copper"),
                label(274, 83, "Clés", heat),
              ],
    ],
  },
  detailCarMarket: {
    foot: [
      "Plusieurs marchés en Amérique du Nord",
      "Les marchés européens diffèrent",
      "La Chine est un marché majeur",
      "Les trajectoires varient selon les lieux",
    ],
    draw: (s, id) => mapWorld(id, s),
  },
  detailDrivingAssistScope: {
    foot: [
      "Le champ observé a des limites",
      "Le système peut freiner",
      "Un obstacle peut cacher un usager",
    ],
    draw: (s, id) => [
      road(id, true),
      overhead(id, 189, 150, 0.55, "copper"),
      witness(id, 194, 90, 0.55),
      fillPath(
        s === 2 ? "M170 134l-18-45 14-28 50 1-12 35-3 38Z" : "M172 133l-27-62h76l-20 62Z",
        "#a5c69f65",
        "#81a785",
        1.14,
      ),
      s === 0
        ? label(258, 67, "Champ", cold)
        : s === 1
          ? [stream(206, 130, 207, 112, heat), label(266, 100, "Freinage", heat)]
          : [overhead(id, 174, 104, 0.62, "iron", 82), label(260, 82, "Masque", heat)],
    ],
  },
  trafficMessages: {
    foot: [
      "La vue directe peut être bloquée",
      "Une voiture compatible peut transmettre",
      "Un équipement peut émettre aussi",
    ],
    draw: (s, id) => [
      road(id),
      overhead(id, 170, 143, 0.56, "steel"),
      overhead(id, 194, 71, 0.46, "copper"),
      surface(id, "M134 103l17-6h50v19l-9 9h-59Z", "iron", 1.15),
      s === 0
        ? [stroke("M171 129v-14", "#daa66a", 2.1, "4 3"), label(252, 108, "Obstacle", heat)]
        : s === 1
          ? [stroke("M188 76q95 16-17 59", "#c8d1a7", 2.9, "4 3"), label(261, 84, "Alerte", forest)]
          : [
              antenna(id, 274, 100, 0.69),
              stroke("M270 85q-13 40-95 52", "#c6d6ae", 2.16, "4 3"),
              label(274, 59, "Relais", cold),
            ],
    ],
  },
  detailDrivingRoles: {
    foot: [
      "Le conducteur assure la conduite",
      "Le conducteur surveille l’assistance",
      "Le conducteur reste prêt à reprendre",
      "Le système gère le repli dans sa zone",
    ],
    draw: (s, id) => [
      s === 3
        ? [
            road(id),
            stroke("M137 55h83l42 86H98Z", "#e1cc94", 2.4, "7 3"),
            overhead(id, 179, 107, 0.72, "steel"),
            label(266, 84, "Zone prévue", cold),
          ]
        : [
            cabin(id, true, false),
            s === 0
              ? link(265, 63, "Conducteur", "M245 65l-17 8", forest)
              : s === 1
                ? [
                    stroke("M128 126h-32v19m34-27v-16", "#d7a969", 2.5),
                    label(106, 70, "Direction + vitesse", heat),
                  ]
                : [
                    panel(id, 52, 54, 115, 32, "soot"),
                    label(109, 77, "Reprise", cold),
                    stroke("M169 74q12 1 23 9", "#c79d63", 1.8, "3 3"),
                  ],
          ],
    ],
  },
  editionRobotaxiZone: {
    foot: [
      "Une zone et des conditions sont prévues",
      "Le service réagit à la limite",
      "Une équipe peut suivre le service",
    ],
    draw: (s, id) => [
      road(id),
      overhead(id, s === 1 ? 225 : 176, s === 2 ? 102 : 122, 0.68, "copper"),
      stroke("M147 60h58l49 107H103Z", "#e5c574", 2.1, "6 4"),
      s === 0
        ? label(259, 69, "Domaine", cold)
        : s === 1
          ? [stroke("M203 151l47-27", "#e2dfb8", 3), label(268, 83, "Limite", heat)]
          : [
              antenna(id, 81, 110, 0.58),
              stroke("M83 84q41-17 80 9", "#98bdad", 2, "4 3"),
              label(103, 56, "Suivi", cold),
            ],
    ],
  },
  editionCarDataRoute: {
    foot: [
      "Des capteurs alimentent des fonctions",
      "Des données peuvent être envoyées",
      "La finalité encadre l’usage",
    ],
    draw: (s, id) => [
      automobile(id, 43, 95, 0.87, false, true),
      ...[82, 132, 187]
        .slice(0, s === 0 ? 3 : 1)
        .map((x) => oval(x, 130, 4.3, 4.3, paint(id, "copper"), dark)),
      s === 0
        ? link(181, 76, "Capteurs", "M176 82l-34 45", cold)
        : s === 1
          ? [
              antenna(id, 266, 103, 0.73),
              stroke("M174 101q42-34 84-24", "#799d8c", 1.99, "4 3"),
              label(272, 65, "Service", forest),
            ]
          : [clipboard(id, 258, 106, 0.88, 2), link(261, 166, "Finalité", "M262 154v-18", cold)],
    ],
  },
  drivingFatigue: {
    foot: [
      "La perception dépend de la vigilance",
      "La fatigue peut réduire l’attention",
      "Une alerte est une aide possible",
    ],
    draw: (s, id) => [
      panel(id, 45, 48, 270, 117, "iron"),
      fillPath("M56 55h244l-20 102H76Z", "#b8c6a5", "#647a66", 1.08),
      fillPath("M102 150l60-67h34l74 67Z", "#668079", "#5f7869", 1.35),
      stroke("M176 91l3 57", "#dbca94", 2, "7 4"),
      ...[130, 218, 172]
        .slice(0, s === 1 ? 1 : 3)
        .map((x, i) => [
          oval(x, [101, 90, 125][i]!, 7, 7, "none", s === 1 ? "#9b704c" : "#e4cf97"),
          stroke(`M${x - 8} ${[101, 90, 125][i]}h16`, "#d7c79a", 1.1),
        ]),
      label(181, 74, s === 0 ? "Indices" : s === 1 ? "Attention" : "Alerte", s === 0 ? cold : heat),
      s === 2 && [
        surface(id, "M254 98l19 30h-37Z", "ember", 1.05),
        stroke("M254 108v9m0 4v2", "#ddd4af", 2.2),
      ],
    ],
  },
  detailCrashLab: {
    foot: [
      "Le scénario est défini pour l’essai",
      "Les capteurs enregistrent le choc",
      "Le protocole assemble les résultats",
    ],
    draw: (s, id) => [
      tile(id, 39, 151, 274, 16, "iron"),
      automobile(id, 43, 91, 0.91, false, true, "copper"),
      s === 0
        ? [
            surface(id, "M239 83h54v75h-54Z", "iron", 1.15),
            ...Array.from({ length: 8 }, (_, i) =>
              stroke(`M241 ${90 + i * 8}l48 13`, "#d0b27f", 1.4),
            ),
            stream(89, 73, 168, 73, heat),
            label(260, 70, "Barrière"),
          ]
        : s === 1
          ? [
              ...[
                [89, 130],
                [137, 112],
                [178, 133],
              ].map(([x, y]) => oval(x!, y!, 5, 5, paint(id, "copper"), dark)),
              panel(id, 233, 74, 79, 58, "iron"),
              stroke("M241 105h10l11-19 10 36 11-15h19", "#e0ca8c", 2),
              label(256, 65, "Mesures", cold),
            ]
          : [clipboard(id, 269, 106, 0.89, 3), label(256, 171, "Évaluation", forest)],
    ],
  },
  detailRoadUsers: {
    foot: [
      "La vitesse change le temps disponible",
      "La face avant change le point de contact",
      "La traversée change l’exposition",
    ],
    draw: (s, id) => [
      s === 2
        ? [
            road(id, true),
            overhead(id, 176, 144, 0.57, "copper"),
            witness(id, 207, 108, 0.64),
            label(272, 74, "Traversée", forest),
          ]
        : [
            automobile(id, 55, s === 1 ? 85 : 96, 0.82, s === 1, false, "copper"),
            witness(id, 279, 119, 1.08),
            stroke("M50 166h266", "#8ba089", 1.7),
            s === 0
              ? [stream(135, 79, 227, 79, heat), label(215, 64, "Approche", heat)]
              : [stroke("M225 122h61", "#9d7549", 2.2, "5 3"), label(236, 75, "Contact", cold)],
          ],
    ],
  },
  trafficNoise: {
    foot: [
      "Le moteur et la transmission font du bruit",
      "Le contact pneu-sol produit du bruit",
      "La surface influence le bruit de roulement",
    ],
    draw: (s, id) => [
      automobile(id, 73, 92, 1.02, false, true, "steel"),
      tile(id, 64, 162, 226, 12, s === 2 ? "copper" : "iron", 6),
      s < 2
        ? [
            ...[0, 1, 2].map((i) =>
              stroke(
                s === 0
                  ? `M${266 + i * 8} 112q${12 + 4 * i} 8 0 17`
                  : `M${236 + i * 9} 147q${15 + 3 * i}-14 0-23`,
                "#a57a4b",
                1.36,
              ),
            ),
            label(230, 70, s === 0 ? "Groupe moteur" : "Roulement", heat),
          ]
        : [stroke("M66 169h221", "#d7bc8d", 2, "3 4"), label(200, 78, "Revêtement", cold)],
    ],
  },
  sharedMobility: {
    foot: [
      "Un véhicule sert à différents horaires",
      "Des personnes partagent le même trajet",
      "Un véhicule partagé peut être covoituré",
    ],
    draw: (s, id) => [
      automobile(id, 96, 102, 0.79, false, true, s === 2 ? "copper" : "steel"),
      s !== 0 && [
        witness(id, 143, 147, 0.37),
        witness(id, 170, 146, 0.37),
        witness(id, 191, 146, 0.37),
      ],
      s !== 1 && [
        stroke("M73 70h215", "#6d8a75", 2),
        ...[91, 175, 267].map((x, i) => [
          oval(x, 70, 5, 5, paint(id, "copper"), dark),
          label(x, 59, ["Matin", "Midi", "Soir"][i]!, cold),
        ]),
      ],
      s === 1 && [stream(100, 78, 260, 78, forest), label(178, 63, "Trajet commun", cold)],
    ],
  },
} satisfies Record<string, Study>;
