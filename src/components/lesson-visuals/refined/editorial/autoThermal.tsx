import {
  type Study,
  block,
  cold,
  dark,
  duct,
  exchanger,
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
  rotor,
  stream,
  stroke,
  surface,
  tank,
  tile,
} from "./art";

function injector(id: string, x: number, y: number, open: boolean) {
  return moved(x, y, [
    surface(id, "M-30-49h58l8 13v46l-17 16-6 15h-26l-8-15-16-16v-45Z", "iron", 1.3),
    surface(id, "M-24-45h48v51L10 22 7 37H-7l-4-15-13-16Z", "steel", 1.14),
    surface(id, "M-8-36H8v46l-6 18h-4l-6-18Z", "soot", 0.9),
    surface(id, `M-4 ${open ? -35 : -24}h8v36l-4 9-4-9Z`, "copper", 0.92),
    stroke("M-30-25h20m19 28h23m-41 28h21", "#dfd7b6", 1.15),
    ...fastener(-27, -36),
    ...fastener(27, -36),
    ...fastener(-21, 4, 1.7),
    ...fastener(22, 4, 1.7),
  ]);
}

function piston(id: string, x: number, y: number, position: number, withJet = false) {
  return moved(x, y, [
    surface(id, "M-60-43l14-10h93l13 11v91l-11 12h-99l-10-12Z", "iron", 1.35),
    surface(id, "M-49-33h98v82h-98Z", "steel", 1),
    fillPath("M-34-29h68v76h-68Z", "#e0ceaa", "#667a70", 1.05),
    stroke(
      "M-50-31h-8m8 13h-8m8 13h-8m8 13h-8m8 13h-8m8 13h-8m109-78h-8m8 13h-8m8 13h-8m8 13h-8m8 13h-8m8 13h-8",
      "#c7cbb0",
      1.1,
    ),
    surface(id, `M-33 ${position}h66v16l-5 5h-56l-5-5Z`, "steel", 1.1),
    stroke(`M-31 ${position + 4}h62m-62 4h62`, "#596f65", 1.35),
    surface(id, `M-7 ${position + 15}h14l10 ${37 - position}h-15Z`, "copper", 0.9),
    ...joint(id, 12, 52, 7),
    withJet && [
      surface(id, "M-11-55h22v24H-11Z", "steel", 1.05),
      ...[-20, -12, 0, 12, 20].map((t) => stroke(`M0 -31l${t} 20`, heat, 1.12, "2 2")),
      fillPath("M-22-9q10-2 17-11-1 10 5 10 5-2 9-8l8 8 7 1-7 7h-29Z", "#dda059", heat, 0.85),
    ],
  ]);
}

function exhaustCore(
  id: string,
  x: number,
  y: number,
  grade: "open" | "catalyst" | "filter" | "scr",
  scale = 1,
) {
  return moved(
    x,
    y,
    [
      surface(id, "M-87-7h25l21-22h77l30 19h23V9H64L40 29h-86L-62 8h-25Z", "steel", 1.4),
      surface(id, "M-51-12h111l-13 30h-96Z", "cream", 1),
      grade === "open"
        ? stroke("M-59 6h114", heat, 2, "4 3")
        : [
            surface(id, "M-38-22h74V23h-74Z", grade === "scr" ? "glass" : "copper", 1),
            ...Array.from({ length: 6 }, (_, i) => [
              stroke(
                `M-36 ${-17 + i * 7}h70`,
                grade === "filter" ? "#4c625a" : "#e7d5a5",
                1.25,
                grade === "filter" ? (i % 2 ? "9 3" : undefined) : undefined,
              ),
              oval(
                -36 + (i % 3) * 7,
                -17 + i * 7,
                1.6,
                1.6,
                grade === "filter" ? "#524b3e" : "#d4b784",
                "#8e7655",
              ),
            ]),
            stroke("M-32-21v43m63-43v43", "#795c42", 1.18),
          ],
      ...fastener(-44, -22, 2),
      ...fastener(44, 23, 2),
      stroke("M-83-4h23m123 0h19", "#eee9cd", 1.13),
    ],
    scale,
  );
}

function controlUnit(id: string, x: number, y: number) {
  return moved(x, y, [
    panel(id, -46, -26, 92, 55, "iron"),
    surface(id, "M-30-16h59v35h-59Z", "glass", 1),
    surface(id, "M-11-8h23v18h-23Z", "iron", 0.8),
    stroke("M-23-8h10m27 0h10m-47 8h10m27 0h10m-47 9h10m27 0h10", "#d7ddc0", 1.35),
    stroke("M-31 25h63", "#c4c5a5", 2.4, "3 2"),
  ]);
}

function pistonValve(id: string, x: number, y: number, angle: number, open: boolean) {
  return moved(x, y, [
    surface(id, "M-69 27l14-15h111l13 15v20H-69Z", "steel", 1.15),
    surface(id, "M-58 36h118v13H-58Z", "iron", 0.9),
    block(-49, -21, 25, 9, paint(id, "iron"), dark, 2),
    block(29, -21, 25, 9, paint(id, "iron"), dark, 2),
    stroke("M-51-17H54", paint(id, "steel"), 7),
    <g key="cam" transform={`rotate(${angle})`}>
      {surface(id, "M-24-9q4-18 25-16 20 1 26 19 4 17-10 23L4 36-9 22q-18-8-15-31Z", "iron", 1.2)}
      {layers(joint(id, 0, 0, 9))}
    </g>,
    stroke(`M2 23v${open ? 25 : 21}`, paint(id, "copper"), 7),
    stroke(`M-10 ${open ? 48 : 44}h24`, paint(id, "iron"), 5.9),
    stroke("M-10 29l24 5-24 4 23 5", "#d9c896", 1.28),
    ...fastener(-62, 32),
    ...fastener(62, 32),
  ]);
}

import { layers } from "./art";

export const autoThermal = {
  injectorjet: {
    foot: [
      "L’aiguille obstrue la buse",
      "La commande ouvre le passage",
      "Le jet se disperse en gouttelettes",
    ],
    draw: (s, id) => [
      grounding(id, 180, 167, 108),
      injector(id, 181, 101, s > 0),
      duct("M39 76h104", heat),
      stream(51, 76, 122, 76, heat),
      link(93, 56, "Carburant", "M94 61l18 11", heat),
      link(273, 96, "Aiguille", "M252 102l-49 5", cold),
      s > 0 && stream(226, 116, 226, 79, cold),
      s === 2 &&
        [-28, -18, -9, 0, 9, 18, 28].map((x, i) => [
          stroke(`M181 142l${x} 23`, heat, 1.4, "2 3"),
          oval(181 + x, 166 + (i % 2) * 4, 2, 2, "#b67643", "#8d5f40"),
        ]),
      s !== 2 && link(264, 148, "Buse", "M248 150l-56-9", cold),
    ],
  },
  dieselignition: {
    foot: [
      "Seul l’air remplit le cylindre",
      "L’air se réchauffe en se comprimant",
      "Le gazole s’enflamme dans l’air chaud",
    ],
    draw: (s, id) => [
      piston(id, 182, 112, s === 0 ? 28 : s === 1 ? -4 : 7, s === 2),
      s === 0
        ? [
            stream(87, 81, 138, 84, cold),
            ...[154, 166, 183, 200, 215].map((x, i) =>
              oval(x, 94 + (i % 3) * 9, 2, 2, "#80a09d", cold),
            ),
            label(77, 67, "Air", cold),
          ]
        : s === 1
          ? [
              stream(111, 144, 111, 105, heat),
              link(277, 105, "Air comprimé", "M246 108l-32-10", heat),
              link(80, 153, "Piston", "M100 149l45-32", cold),
            ]
          : [
              link(276, 69, "Injecteur", "M249 75l-50-17", heat),
              link(283, 118, "Combustion", "M243 121l-36-14", heat),
            ],
    ],
  },
  engineFeedback: {
    foot: [
      "Le calculateur reçoit une mesure",
      "Le calculateur commande l’injecteur",
      "La sonde renseigne sur les gaz",
    ],
    draw: (s, id) => [
      controlUnit(id, 179, 93),
      moved(276, 120, [injector(id, 0, 0, s === 1)], 0.65),
      exhaustCore(id, 100, 147, "open", 0.63),
      duct("M51 88h82", cold, s === 0),
      duct("M229 94h22l15 13", heat, s === 1),
      stroke("M89 123q12-43 43-30", forest, 2.4, s === 2 ? undefined : "5 4"),
      s === 0
        ? [
            ...joint(id, 74, 89, 13),
            label(89, 65, "Débitmètre", cold),
            stream(101, 89, 133, 89, cold),
          ]
        : s === 1
          ? [stream(227, 95, 257, 103, heat), label(279, 72, "Injecteur", heat)]
          : [
              panel(id, 68, 109, 35, 20, "steel"),
              stream(111, 106, 135, 94, forest),
              link(73, 66, "Sonde", "M75 72l17 37", forest),
            ],
      label(180, 140, "Calculateur", dark),
    ],
  },
  valveTiming: {
    foot: [
      "La came commande l’ouverture",
      "Le calage décale l’ouverture",
      "Le turbo comprime l’air entrant",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            pistonValve(id, 179, 101, s === 0 ? 0 : 67, s === 0),
            link(101, 65, "Came", "M113 70l38 19", heat),
            link(278, 148, "Soupape", "M255 146l-57 2", cold),
            s === 1 && [stroke("M217 84q21 19 8 38", heat, 2), stream(226, 108, 224, 121, heat)],
          ]
        : [
            surface(id, "M87 102l35-39h106l37 33v35l-25 16H100Z", "steel", 1.25),
            rotor(id, 164, 101, 39, "copper"),
            duct("M31 109h99m55-21 27-24h108", cold),
            stream(43, 109, 105, 109, cold),
            stream(247, 65, 306, 65, cold),
            link(260, 157, "Compresseur", "M252 146l-68-22", cold),
          ],
  },
  exhaustclean: {
    foot: [
      "Le flux transporte gaz et suie",
      "Le catalyseur transforme certains gaz",
      "Le filtre retient une partie de la suie",
    ],
    draw: (s, id) => [
      exhaustCore(id, 179, 112, (["open", "catalyst", "filter"] as const)[s]!),
      stream(38, 113, 88, 113, heat),
      stream(275, 114, 326, 114, cold),
      link(
        176,
        63,
        ["Gaz et suie", "Catalyseur", "Parois poreuses"][s]!,
        "M177 69v19",
        s === 0 ? heat : cold,
      ),
      ...Array.from({ length: 10 }, (_, i) => [
        oval(53 + i * 6, 101 + (i % 3) * 9, 1.85, 1.85, "#514840", "#514840"),
        (s === 0 || (s === 2 && i % 4 === 0)) &&
          oval(276 + i * 5, 102 + (i % 3) * 9, 1.55, 1.55, "#514840", "#514840"),
      ]),
      s === 2 && [
        oval(158, 109, 3.8, 3.8, "#574336", "#534436"),
        oval(172, 113, 3, 3, "#574336", "#534436"),
      ],
    ],
  },
  detailDieselFilters: {
    titles: [
      "Plusieurs traitements",
      "Catalyseur d’oxydation",
      "Filtre à particules",
      "Traitement des NOₓ",
    ],
    foot: [
      "Chaque étage traite une partie du flux",
      "Le catalyseur agit sur certains gaz",
      "La suie est retenue par le FAP",
      "Le réactif aide à traiter les NOₓ",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            ...[72, 179, 286].map((x, i) => [
              exhaustCore(id, x, 106, (["catalyst", "filter", "scr"] as const)[i]!, 0.55),
              label(x, 152, ["Oxydation", "FAP", "SCR"][i]!, i === 2 ? cold : heat),
            ]),
            stroke("M20 111h318", "#777b62", 1.4, "4 3"),
          ]
        : [
            exhaustCore(id, 179, 111, (["open", "catalyst", "filter", "scr"] as const)[s]!, 1.25),
            stream(31, 111, 83, 111, heat),
            stream(281, 111, 331, 111, cold),
            s === 3
              ? [duct("M222 50v19l-15 17", cold), link(277, 61, "Réactif", "M250 67l-25 2", cold)]
              : link(
                  179,
                  61,
                  s === 1 ? "Surface active" : "Parois poreuses",
                  "M178 68l-6 19",
                  s === 1 ? heat : cold,
                ),
          ],
  },
  intercoolerair: {
    foot: [
      "La compression réchauffe l’air",
      "L’air comprimé cède de la chaleur",
      "L’admission reçoit l’air refroidi",
    ],
    draw: (s, id) => [
      rotor(id, 76, 114, 32, s === 0 ? "copper" : "steel"),
      exchanger(id, 175, 114, 0.77, s === 1 ? "copper" : "steel"),
      moved(277, 106, [piston(id, 0, 0, 20)], 0.65),
      duct("M106 113h30m79 0h25", s === 2 ? cold : heat),
      s === 0
        ? [
            stream(24, 113, 44, 113, cold),
            stream(105, 111, 135, 111, heat),
            label(76, 65, "Compresseur", heat),
          ]
        : s === 1
          ? [
              ...[151, 178, 205].flatMap((x) => stream(x, 60, x, 88, cold)),
              label(179, 171, "Échangeur", heat),
            ]
          : [stream(212, 113, 245, 113, cold), label(267, 162, "Cylindre", cold)],
    ],
  },
  sparkCoil: {
    foot: [
      "Le primaire crée un champ",
      "La coupure fait varier le champ",
      "La tension crée une étincelle",
    ],
    draw: (s, id) => [
      surface(id, "M59 74l18-13h118l15 15v73H59Z", "iron"),
      surface(id, "M68 81h132v59H68Z", "cream"),
      surface(id, "M75 108h114v16H75Z", "steel", 1.2),
      ...Array.from({ length: 18 }, (_, i) =>
        stroke(`M${78 + i * 6.2} 94q8 17 2 42`, i < 8 ? heat : cold, i < 8 ? 2.45 : 1.55),
      ),
      fillPath("M233 93h30v28h-30Z", "#e6dcc0", dark, 1.1),
      surface(id, "M227 104h7v8h-7Zm36 0h31v8h-31Zm31 0h12v10h-12Z", "steel", 1),
      stroke("M306 110h12v13h-8", dark, 2.6),
      duct(s === 1 ? "M209 82h36v-14h28" : "M209 82h36v12", s === 2 ? heat : cold, s !== 1),
      s === 2 && fillPath("M305 113l6 1-4 6 6 1-10 4 2-6-5-2Z", "#eab263", heat, 0.6),
      label(84, 158, "Primaire", heat),
      label(181, 158, "Secondaire", cold),
      label(270, 157, "Bougie", dark),
    ],
  },
  enginePumps: {
    titles: ["Faire circuler l’huile", "Faire circuler le liquide", "Alimenter l’injection"],
    foot: [
      "L’huile rejoint les points à lubrifier",
      "Le liquide passe par le radiateur",
      "La pompe alimente le rail",
    ],
    draw: (s, id) => [
      tank(id, 40, 78, 64, 69, s === 0 ? "ember" : "glass"),
      surface(id, "M134 86l14-11h54l17 13v49l-14 12h-62l-9-13Z", "steel"),
      rotor(id, 178, 111, 29, s === 0 ? "copper" : "steel"),
      duct("M105 113h31m81 0h29", s === 0 ? heat : cold),
      stream(105, 113, 135, 113, s === 0 ? heat : cold),
      stream(217, 113, 249, 113, s === 0 ? heat : cold),
      s === 1
        ? exchanger(id, 290, 110, 0.75)
        : s === 2
          ? [
              surface(id, "M248 99h73v19h-73Z", "steel"),
              ...[260, 285, 309].map((x) => moved(x, 128, [injector(id, 0, 0, false)], 0.23)),
            ]
          : [moved(281, 106, [piston(id, 0, 0, 20)], 0.64)],
      label(176, 171, "Pompe", dark),
      label(72, 167, s === 0 ? "Carter" : s === 1 ? "Liquide" : "Réservoir", s === 0 ? heat : cold),
    ],
  },
  enginecoolant: {
    foot: [
      "Le trajet court reste ouvert",
      "Le liquide rejoint le radiateur",
      "L’air extérieur évacue la chaleur",
    ],
    draw: (s, id) => [
      moved(86, 106, [piston(id, 0, 0, 20)], 0.66),
      exchanger(id, 276, 106, 0.83, s === 2 ? "copper" : "steel"),
      duct("M123 79h112m0 54H126V88", s === 0 ? cold : heat, s > 0),
      duct("M122 91h39v42h-30", heat, true),
      ...joint(id, 173, 79, 12, s === 0 ? "iron" : "copper"),
      s === 0 ? stroke("M173 69v20", heat, 2.85) : stroke("M163 79h20", forest, 2.85),
      s === 2 && [95, 112, 129].flatMap((y) => stream(329, y, 301, y, cold)),
      label(169, 59, "Thermostat", s > 0 ? heat : cold),
      label(274, 166, "Radiateur", cold),
    ],
  },
  egrloop: {
    foot: [
      "Admission et échappement distincts",
      "La vanne ouvre le retour des gaz",
      "Les gaz rejoignent l’admission",
    ],
    draw: (s, id) => [
      moved(174, 118, [piston(id, 0, 0, 24)], 0.78),
      duct("M37 121h83m109 0h94", cold),
      duct("M247 121V70H114v49", heat, s > 0),
      ...joint(id, 175, 70, 12, s > 0 ? "copper" : "iron"),
      stroke(s === 0 ? "M175 60v20" : "M165 70h20", s === 0 ? heat : forest, 2.7),
      s > 0 && stream(227, 70, 193, 70, heat),
      s === 2 && stream(113, 81, 113, 108, heat),
      label(175, 53, "Vanne EGR", heat),
      label(68, 158, "Admission", cold),
      label(278, 158, "Échappement", heat),
    ],
  },
  carCooling: {
    foot: [
      "La résistance dégage de la chaleur",
      "La pompe transfère de la chaleur",
      "Le câble fournit l’énergie au départ",
    ],
    draw: (s, id) => [
      surface(id, "M71 130l30-44 34-32h77l43 52 21 24-19 25H91Z", "steel", 1.45),
      surface(id, "M112 88l30-27h66l20 30Z", "glass"),
      surface(id, "M106 100h130v38H106Z", "cream"),
      exchanger(id, 165, 118, 0.43, s === 0 ? "copper" : "steel"),
      s === 0
        ? [stroke("M154 105l7 6-7 7 7 8-7 5", heat, 2.75), label(116, 56, "Résistance", heat)]
        : s === 1
          ? [
              duct("M182 117h35V98", heat),
              rotor(id, 237, 128, 15, "steel"),
              stream(208, 106, 185, 106, heat),
            ]
          : [
              panel(id, 27, 73, 30, 44, "iron"),
              duct("M44 120q12 33 60 17", cold),
              stream(66, 137, 101, 137, cold),
              label(61, 62, "Prise", cold),
            ],
      link(280, 66, "Habitacle", "M259 70l-40 35", heat),
    ],
  },
  engineoil: {
    foot: [
      "Les aspérités peuvent se toucher",
      "Le film sépare les surfaces",
      "L’huile retourne vers le carter",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            surface(
              id,
              "M50 72h267v30l-23 4-24-5-20 8-25-10-34 7-25-5-28 7-31-9-30 6-27-5Z",
              "steel",
              1.25,
            ),
            moved(0, s === 0 ? 0 : 15, [
              surface(
                id,
                "M52 119l25-13 34 8 29-8 22 8 30-7 27 7 29-7 22 8 22-8 26 7v36H52Z",
                "iron",
                1.2,
              ),
            ]),
            ...[0, 1, 2, 3, 4, 5].flatMap((i) => [
              stroke(`M${80 + i * 39} 81l25-6m-25 10 13-4`, "#e3dfbf", 1.2),
            ]),
            s === 1
              ? [
                  fillPath("M52 113q65 7 133-2t131 3v9H52Z", "#c89752", "#9e7447", 0.9),
                  stream(140, 113, 217, 113, heat),
                  label(177, 70, "Film d’huile", heat),
                ]
              : [
                  ...[78, 139, 249, 293].map((x) => oval(x, 108, 3.9, 3.4, "#be8155", heat)),
                  label(178, 168, "Contacts locaux", heat),
                ],
          ]
        : [
            moved(181, 104, [piston(id, 0, 0, 24)], 0.73),
            tile(id, 132, 147, 102, 20, "copper"),
            duct("M148 157H79v-50h58m89 0h52v53h-46", heat),
            rotor(id, 79, 132, 18, "copper"),
            stream(80, 104, 121, 104, heat),
            label(68, 165, "Pompe", heat),
            link(259, 74, "Lubrifier", "M256 80l-35 22", heat),
          ],
  },
} satisfies Record<string, Study>;
