import {
  type Study,
  automobile,
  block,
  cold,
  dark,
  duct,
  fastener,
  forest,
  gold,
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
  tire,
} from "./art";

function charger(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 4, 43, 33),
      surface(id, "M-26-41l10-9h35l9 9v79L18 47h-40Z", "iron", 1.24),
      surface(id, "M-22-40h40v80h-40Z", "steel"),
      block(-13, -31, 22, 18, paint(id, "soot"), dark, 2),
      stroke("M-8-22h13m-13 6h13", "#c8d2b7", 1.15),
      duct("M12 15q42 0 32 28-2 9-14 3", cold),
      ...fastener(-16, 29, 1.8),
      ...fastener(10, 29, 1.8),
    ],
    scale,
  );
}

function converter(id: string, x: number, y: number, scale = 1, active = true) {
  return moved(
    x,
    y,
    [
      panel(id, -29, -21, 58, 43, active ? "steel" : "iron"),
      surface(id, "M-18-13h34v27h-34Z", active ? "glass" : "soot", 0.9),
      stroke("M-13 8l7-10 5 4 5-9 7 11", active ? "#e1ddc2" : "#a6aa95", 1.4),
      ...[-13, -6, 1, 8, 15].map((t) => stroke(`M${t} 19v5`, "#d4cda9", 1.2)),
    ],
    scale,
  );
}

function fieldRing(id: string, x: number, y: number, style: "magnets" | "cage" | "empty") {
  return moved(x, y, [
    oval(0, 0, 66, 61, paint(id, "iron"), dark),
    oval(0, 0, 59, 53, paint(id, "steel"), dark),
    oval(0, 0, 49, 44, paint(id, "soot"), dark),
    oval(0, 0, 39, 34, paint(id, "cream"), dark),
    ...Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      return [
        oval(
          48 * Math.cos(a),
          43 * Math.sin(a),
          6.4,
          6.1,
          paint(id, i % 3 === 0 ? "ember" : "copper"),
          dark,
        ),
        stroke(
          `M${51 * Math.cos(a)} ${45 * Math.sin(a)}L${45 * Math.cos(a)} ${40 * Math.sin(a)}`,
          "#ead1a2",
          1.1,
        ),
      ];
    }),
    style !== "empty" && [
      oval(0, 0, 33, 30, paint(id, "iron"), dark),
      ...Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        return oval(
          24 * Math.cos(a),
          21 * Math.sin(a),
          style === "cage" ? 3.2 : 5.1,
          style === "cage" ? 3.2 : 4.7,
          paint(id, style === "cage" ? "copper" : i % 2 ? "glass" : "ember"),
          dark,
        );
      }),
      ...joint(id, 0, 0, 11),
    ],
    ...fastener(-41, -38, 2.1),
    ...fastener(42, 38, 2.1),
  ]);
}

function house(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 42, 60),
      surface(id, "M-43-4L1-39 49-6v48h-92Z", "cream"),
      surface(id, "M-47-5L0-44 53-7h-13L1-35-39-5Z", "iron"),
      block(-26, 12, 16, 15, paint(id, "glass"), dark, 1),
      block(15, 9, 16, 17, paint(id, "glass"), dark, 1),
      block(-9, 13, 16, 28, paint(id, "copper"), dark, 1),
      stroke("M-43 35h90m-65-44h39", "#918268", 1.08),
    ],
    scale,
  );
}

function pylon(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, "M-30 47-8-25H8l22 72H18L3-16h-7l-14 63Z", "steel"),
      stroke("M-25 34l39-16m-34 7 32 12m-25-30 18-14M-34-18h68m-58 13h48m-17-19h32", dark, 1.6),
      ...[-28, 28, -19, 20].map((x, i) =>
        oval(x, i < 2 ? -15 : 0, 2.1, 3.8, paint(id, "copper"), dark),
      ),
    ],
    scale,
  );
}

const drivingUnits = (id: string, s: number, variant: "power" | "hybrid") => [
  automobile(id, 66, 66, 1.12, false, true),
  pack(id, 126, 126, 4, 1, s === 2 ? "copper" : "glass"),
  motor(id, 237, 131, 0.58),
  converter(id, 201, 97, 0.57, s !== 0),
  duct("M189 115l-11 10m30-13 16 13", s === 0 ? forest : cold),
  variant === "power"
    ? [
        s === 0
          ? link(126, 161, "Batterie", "M139 154l19-17", forest)
          : s === 1
            ? link(184, 61, "Électronique", "M189 68l11 15", gold)
            : link(253, 169, "Génératrice", "M247 159l-10-15", cold),
        s === 2 && stream(216, 135, 195, 135, forest),
      ]
    : [
        motor(id, 100, 122, 0.54),
        s === 0
          ? stream(119, 139, 145, 139, cold)
          : s === 1
            ? stream(137, 139, 116, 139, heat)
            : stream(190, 140, 216, 140, cold),
        s !== 2 && label(94, 159, "Thermique", heat),
      ],
];

export const autoElectric = {
  detailHotCellPack: {
    foot: [
      "Des cellules montées dans un pack",
      "La chaleur peut s’entretenir",
      "La chaleur peut atteindre une voisine",
      "Une barrière retarde le transfert",
    ],
    draw: (s, id) => [
      pack(id, 100, 73, 9, 3, "glass", s === 0 ? -1 : 13),
      s > 0 && [
        <ellipse key="heat-ring" cx="178" cy="107" rx="25" ry="24" fill="#b87545" opacity=".32" />,
        <ellipse key="hot-cell" cx="178" cy="107" rx="13" ry="12" fill="#d4a466" opacity=".60" />,
        link(183, 54, "Cellule chaude", "M187 61l-7 32", heat),
      ],
      s === 2 && [stream(185, 110, 211, 110, heat), stream(167, 110, 139, 110, heat)],
      s === 3 && [
        surface(id, "M190 74h6v62h-6Z", "cream", 0.8),
        link(273, 163, "Barrière", "M255 154l-63-31", cold),
      ],
      s === 0 && link(287, 151, "Modules", "M268 149l-30-14", cold),
    ],
  },
  motorMagnets: {
    foot: [
      "Les bobines créent le champ tournant",
      "Les aimants sont sur le rotor",
      "L’induction se passe d’aimants",
    ],
    draw: (s, id) => [
      fieldRing(id, 180, 111, s === 0 ? "empty" : s === 1 ? "magnets" : "cage"),
      s === 0
        ? [
            stroke("M150 91q29-20 58 2m-11-3 11 3-6-10", heat, 2.1),
            link(81, 78, "Bobines", "M100 80l39 10", heat),
          ]
        : s === 1
          ? link(277, 82, "Aimants", "M254 85l-47 20", heat)
          : link(269, 85, "Cage", "M256 89l-51 26", cold),
      s !== 0 && label(88, 157, "Stator", cold),
    ],
  },
  dcfastcharge: {
    foot: [
      "La voiture convertit le courant",
      "La borne convertit le courant",
      "Le véhicule fixe la puissance admise",
    ],
    draw: (s, id) => [
      charger(id, 68, 108, 0.93),
      automobile(id, 146, 69, 0.9, false, true),
      pack(id, 250, 124, 3, 1, s === 2 ? "copper" : "glass"),
      converter(id, s === 1 ? 68 : 174, s === 1 ? 116 : 132, 0.68, s !== 2),
      duct(
        s === 0 ? "M98 132h47m56 2h45" : s === 1 ? "M99 133h147" : "M100 133h142",
        s === 1 ? heat : cold,
        s !== 2,
      ),
      s === 0
        ? link(166, 164, "Chargeur embarqué", "M170 151l3-12", cold)
        : s === 1
          ? label(78, 61, "Conversion DC", heat)
          : link(267, 61, "Batterie", "M264 68l17 53", heat),
    ],
  },
  vehicleGrid: {
    foot: [
      "L’énergie entre dans le véhicule",
      "La voiture peut alimenter la maison",
      "L’énergie peut repartir au réseau",
    ],
    draw: (s, id) => [
      pylon(id, 75, 95, 0.83),
      house(id, 170, 100, 0.88),
      automobile(id, 218, 101, 0.57, false, true),
      charger(id, 223, 108, 0.42),
      duct("M75 143h94v17h71v-11", s === 0 ? cold : forest),
      s === 0
        ? stream(175, 160, 236, 160, cold)
        : s === 1
          ? stream(227, 160, 174, 160, forest)
          : stream(138, 143, 93, 143, forest),
      s === 2
        ? label(76, 58, "Réseau", forest)
        : s === 1
          ? label(171, 59, "Maison", forest)
          : label(285, 91, "Batterie", cold),
    ],
  },
  evPower: {
    foot: [
      "La batterie conserve l’énergie",
      "Le moteur entraîne les roues",
      "Le moteur peut redevenir génératrice",
    ],
    draw: (s, id) => drivingUnits(id, s, "power"),
  },
  regenbrake: {
    foot: [
      "L’énergie va de la batterie aux roues",
      "Les roues entraînent la génératrice",
      "Les freins à friction restent utiles",
    ],
    draw: (s, id) => [
      pack(id, 42, 99, 4, 2, s === 1 ? "copper" : "glass"),
      motor(id, 181, 114, 0.62),
      ...tire(id, 286, 112, 46),
      duct("M125 131h31m65-14h28", s === 1 ? forest : cold, s < 2),
      s === 0
        ? [stream(133, 131, 157, 131, cold), stream(224, 116, 253, 116, cold)]
        : s === 1
          ? [stream(252, 115, 223, 115, forest), stream(155, 132, 129, 132, forest)]
          : [
              oval(286, 112, 28, 27, paint(id, "steel"), dark),
              oval(286, 112, 18, 19, "none", "#d7ddc0"),
              surface(id, "M297 91l15-3 15 13v25l-16 7-14-6v-8h14v-21h-14Z", "copper", 1.3),
              link(218, 65, "Étrier", "M227 70l77 22", heat),
            ],
      label(84, 69, "Batterie", cold),
      label(183, 167, s === 1 ? "Génératrice" : "Moteur", forest),
    ],
  },
  hybridPower: {
    foot: [
      "En série, le courant alimente le moteur",
      "En parallèle, le thermique peut entraîner",
      "Au freinage, l’énergie peut remonter",
    ],
    draw: (s, id) => [
      ...drivingUnits(id, s, "hybrid"),
      s === 0
        ? link(109, 59, "Génératrice", "M117 65l63 32", cold)
        : s === 1
          ? duct("M110 115h141l15 19", heat)
          : link(174, 62, "Recharger", "M178 68l-22 52", forest),
    ],
  },
  mildhybrid: {
    foot: [
      "La machine peut récupérer de l’énergie",
      "La machine aide à l’accélération",
      "La machine relance le moteur",
    ],
    draw: (s, id) => [
      pack(id, 54, 112, 3, 1, "glass"),
      motor(id, 180, 115, 0.62),
      surface(id, "M246 78l27-12h43l12 16v61l-16 10h-70Z", "iron", 1.15),
      ...[263, 278, 293, 308].map((x) => surface(id, `M${x} 79v33h-9V79Z`, "steel", 0.93)),
      ...joint(id, 274, 130, 16, "copper"),
      ...joint(id, 221, 115, 10),
      stroke("M222 105l50 10m-48 12 50 18", paint(id, "iron"), 4),
      duct("M118 124h34", s === 0 ? cold : forest),
      s === 0 ? stream(152, 124, 120, 124, cold) : stream(119, 124, 155, 124, forest),
      s === 2 && stream(253, 160, 299, 160, heat),
      label(88, 159, "Batterie", cold),
      label(182, 164, "Machine", forest),
      label(282, 60, "Thermique", heat),
    ],
  },
  startingCircuit: {
    foot: [
      "La batterie conserve l’énergie",
      "Le démarreur fait tourner le moteur",
      "L’alternateur alimente le circuit",
    ],
    draw: (s, id) => [
      pack(id, 49, 100, 3, 2, s === 0 ? "copper" : "glass"),
      motor(id, 174, 110, 0.74),
      surface(id, "M248 90l11-12h58l11 12v39l-11 11h-59l-11-10Z", "iron"),
      rotor(id, 285, 109, 25, s === 2 ? "copper" : "steel"),
      duct("M115 113h31m76 0h24", s === 1 ? heat : forest, s > 0),
      s === 1
        ? stream(118, 113, 144, 113, heat)
        : s === 2
          ? stream(247, 153, 119, 153, forest)
          : [],
      label(80, 81, "Batterie", cold),
      label(177, 159, "Démarreur", s === 1 ? heat : cold),
      label(282, 65, "Alternateur", s === 2 ? forest : cold),
    ],
  },
} satisfies Record<string, Study>;
