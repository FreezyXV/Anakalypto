import {
  type Study,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  grounding,
  heat,
  joint,
  label,
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
} from "./art";
import { runner } from "./sportMotion";

function muscle(id: string, x: number, y: number, scale: number, active: number, spasm = false) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 34, 122),
      surface(
        id,
        "M-105-9l26-6 36 7 34 11 36-10 42-9 34 6v19l-39 6-43-9-33 5-31 9-40-6-22 6Z",
        "cream",
        1.04,
      ),
      surface(
        id,
        spasm
          ? "M-66-2q38-27 57-25 19-19 33-4 25 5 42 29L46 23 21 26-4 24-34 29-64 12Z"
          : "M-79-7q26-8 53-24 14-10 35-10t32 10q23 18 41 22l-4 19q-22 6-44 20-32 15-56 4-28-13-56-21Z",
        active ? "ember" : "copper",
        1.27,
      ),
      ...Array.from({ length: 8 }, (_, i) =>
        stroke(
          spasm
            ? `M-56 ${-5 + i * 3}q19-9 34 ${i * 3 - 19}t40 0 31 13`
            : `M-66 ${i * 3 - 6}q23 ${i * 4 - 25} 58 ${i * 5 - 24}t66 ${24 - i * 5}l13 3`,
          i % 3 ? "#e2b68a" : "#9a674e",
          i % 3 ? 1.36 : 1.08,
        ),
      ),
      stroke("M-100 0h17m164-1h17", "#d9be94", 1.25),
    ],
    scale,
  );
}
function redCell(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      oval(0, 0, 13, 8, paint(id, "ember"), "#8b5948"),
      oval(-1, -1, 5, 2.5, "#9c6550", "#b48761"),
      stroke("M-10-2q8-7 16-2m1 8 3-2", "#e5b282", 0.91),
    ],
    scale,
  );
}
function kidney(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      surface(
        id,
        "M-30-33q26-20 48 0 13 12 0 23-14 8-2 20 11 11 2 25-10 12-33 3-30-16-26-45Z",
        "ember",
        1.21,
      ),
      stroke("M-32-17q13-14 28-11m3 15q-11 7-3 17l7 12m-24 8q-9-5-12-17", "#e2b283", 1.5),
      duct("M12-2h28m-28 8h28", cold),
    ],
    scale,
  );
}
function energyTray(id: string, x: number, y: number, s: number) {
  return moved(x, y, [
    panel(id, 0, 0, 104, 66, "iron"),
    ...Array.from({ length: 9 }, (_, i) =>
      surface(
        id,
        `M${10 + (i % 3) * 29} ${9 + Math.floor(i / 3) * 18}h23v13h-23Z`,
        i < s ? "copper" : "steel",
        0.72,
      ),
    ),
    stroke("M5 62h95", "#b2b49b", 1.34),
  ]);
}
function trackline(x: number, y: number, variant: number) {
  return moved(x, y, [
    stroke("M0 0v91h248", "#687e6e", 1.42),
    stroke("M4 40h243m-243 25h243", "#a3ae8b", 0.9, "4 4"),
    stroke(
      variant === 0
        ? "M5 85q24-58 47-55 24 5 60 49 18 6 122 6"
        : "M5 85h61q26-18 48-49 23-17 49 6t65 36",
      variant === 0 ? "#a67654" : "#517b71",
      2.7,
    ),
    variant === 2 && stroke("M5 85q24-58 47-55 24 5 60 49 18 6 122 6", "#a67654", 2.7),
  ]);
}
function skin(id: string, s: number) {
  return [
    surface(id, "M42 106q70-15 138 0 69-14 137 0v55H42Z", "copper", 1.19),
    fillPath(
      "M43 107q69-15 137 0 69-14 136 0v13q-70-14-136 1-69-15-137 0Z",
      "#d7b988",
      "#a78663",
      1.04,
    ),
    duct("M48 144q64-8 128 0t131-2", heat),
    ...[90, 168, 246].map((x, i) => [
      stroke(`M${x} 143q-16-9 0-25l${i % 2 ? 4 : -4}-22`, "#628e85", 2),
      s !== 2 && fillPath(`M${x} 80q-12 13-4 17t9-7Z`, "#84a7a1", "#507a75", 0.84),
    ]),
  ];
}
function dayClock(id: string, x: number, y: number, s: number, angles: [number, number]) {
  return moved(
    x,
    y,
    [
      oval(0, 0, 34, 34, paint(id, "iron"), dark),
      oval(0, 0, 29, 29, paint(id, "cream"), "#716d55"),
      ...Array.from({ length: 12 }, (_, i) => {
        const a = (Math.PI * i) / 6;
        return stroke(
          `M${Math.cos(a) * 23} ${Math.sin(a) * 23}L${Math.cos(a) * 27} ${Math.sin(a) * 27}`,
          "#8e805f",
          1.13,
        );
      }),
      ...angles.map((a, i) => {
        const r = i ? 18 : 14;
        return stroke(`M0 0 ${Math.cos(a) * r} ${Math.sin(a) * r}`, i ? heat : cold, 2);
      }),
      oval(0, 0, 2.5, 2.5, "#6f785b"),
    ],
    s,
  );
}
export const sportBody = {
  detailWarmupLoad: {
    foot: [
      "Le muscle part d’un état de repos",
      "Le mouvement progressif échauffe",
      "Répéter le geste prépare la coordination",
    ],
    draw: (s, id) => [
      s < 2
        ? [
            muscle(id, 182, 116, 1.07, s),
            ...(s === 0
              ? [label(258, 70, "Au repos", cold)]
              : [
                  duct("M78 142q95 22 204-4", heat),
                  stream(161, 152, 210, 153, forest),
                  label(262, 70, "Circulation", heat),
                ]),
          ]
        : [
            runner(id, 99, 111, 0.9, 0),
            runner(id, 187, 108, 0.94, 1, "copper"),
            runner(id, 273, 111, 0.96, 2),
            stroke("M61 154h249", "#81967f", 1.6),
            label(193, 58, "Coordination", forest),
          ],
    ],
  },
  detailFiberSoreness: {
    foot: [
      "Le lactate est produit et réutilisé",
      "Les courbatures peuvent être différées",
      "Les deux chronologies diffèrent",
    ],
    draw: (s, id) => [
      panel(id, 48, 54, 264, 110, "cream"),
      trackline(56, 59, s),
      label(
        s === 0 ? 126 : 235,
        75,
        s === 0 ? "Lactate" : s === 1 ? "Courbatures" : "Décalage",
        s === 0 ? heat : cold,
      ),
      label(102, 161, "Effort", cold),
      label(266, 161, "Après", cold),
    ],
  },
  sweatcool: {
    foot: [
      "Les glandes libèrent de la sueur",
      "L’évaporation retire de la chaleur",
      "L’humidité ralentit l’évaporation",
    ],
    draw: (s, id) => [
      ...skin(id, s),
      ...(s === 0
        ? [label(236, 69, "Sueur", cold)]
        : s === 1
          ? [
              ...[93, 169, 244].map((x) => stream(x, 81, x, 58, heat)),
              label(282, 77, "Vapeur", cold),
            ]
          : [
              stroke("M49 85q62-13 130 0t128-5", "#719b8e", 3, "6 4"),
              label(181, 71, "Air humide", cold),
            ]),
    ],
  },
  detailMuscleSpasm: {
    foot: [
      "Le nerf active des fibres",
      "La crampe survient involontairement",
      "Plusieurs facteurs sont étudiés",
    ],
    draw: (s, id) => [
      muscle(id, 178, 119, s === 1 ? 1.07 : 1.02, s > 0 ? 1 : 0, s === 1),
      stroke("M72 69h42l14 10 31 4m-12-1 12 12 31-2", "#739b83", s === 1 ? 3 : 1.85),
      ...(s === 2
        ? [...joint(id, 248, 78, 11, "iron"), label(247, 58, "Facteurs", cold)]
        : [label(250, 66, s === 0 ? "Activation" : "Contraction", s === 0 ? cold : heat)]),
    ],
  },
  muscleAdaptation: {
    foot: [
      "Un nerf active plusieurs fibres",
      "L’activation peut se réorganiser",
      "Certaines fibres peuvent grossir",
    ],
    draw: (s, id) => [
      muscle(id, 178, 124, 1.03, s > 0 ? 1 : 0),
      stroke("M70 62h41l28 32m-26-32 39 17 15 13m-18-13 53 4 20 14", forest, s === 1 ? 2.5 : 1.35),
      s === 2
        ? [
            oval(259, 73, 16, 13, paint(id, "copper"), dark),
            oval(298, 72, 21, 17, paint(id, "ember"), dark),
            label(275, 56, "Section", cold),
          ]
        : label(251, 62, s === 0 ? "Nerf" : "Activation", cold),
    ],
  },
  detailMealRecovery: {
    foot: [
      "L’effort utilise une part des réserves",
      "Les réserves peuvent se reconstituer",
      "Apports et séances se suivent",
    ],
    draw: (s, id) => [
      energyTray(id, 64, 78, s === 0 ? 3 : s === 1 ? 6 : 8),
      s === 0
        ? [runner(id, 247, 113, 0.91, 0), label(126, 63, "Réserves", cold)]
        : [
            oval(254, 113, 41, 33, paint(id, "cream"), "#877a5b"),
            oval(253, 112, 34, 27, "none", "#bda87e"),
            ...[237, 255, 271].map((x, i) =>
              oval(x, 110 + (i % 2) * 9, 10, 7, paint(id, i ? "copper" : "glass"), "#937a56"),
            ),
            stream(211, 114, 174, 114, forest),
            label(247, 72, s === 1 ? "Après l’effort" : "Plusieurs repas", cold),
          ],
    ],
  },
  detailRedCellAltitude: {
    foot: [
      "La pression d’oxygène baisse",
      "Le rein participe à la réponse",
      "L’EPO agit sur la moelle osseuse",
      "La masse des globules peut augmenter",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [
            fillPath(
              "M47 156 99 111l20 8 39-61 27 31 17-16 48 65 61 18Z",
              "#9ba588",
              "#65796a",
              1.29,
            ),
            stroke("M142 84l16-26 27 31", "#e2dec0", 2.5),
            stream(119, 133, 119, 91, cold),
            label(262, 77, "Pression d’O₂", cold),
          ]
        : s === 1
          ? [
              kidney(id, 141, 108, 1.13),
              stream(217, 109, 265, 109, forest),
              label(232, 65, "Réponse du rein", cold),
            ]
          : [
              surface(
                id,
                "M50 107q-16-18 0-24 13-3 23 11h72l12-10q17-6 22 8 5 12-6 29 9 16-7 25-14 5-22-10H72q-13 14-25 1-10-12 3-30Z",
                "cream",
                1.23,
              ),
              fillPath("M71 108h83v15H71Z", "#bb8867", "#9d7455", 0.95),
              stream(182, 114, 213, 114, heat),
              ...Array.from({ length: s === 2 ? 3 : 8 }, (_, i) =>
                redCell(id, 228 + (i % 3) * 32, 92 + Math.floor(i / 3) * 25, 0.85),
              ),
              label(255, 64, s === 2 ? "Production" : "Globules rouges", heat),
            ]),
    ],
  },
  editionActivityBouts: {
    foot: [
      "Le mouvement se répartit dans la journée",
      "Plusieurs périodes contribuent au total",
      "Les possibilités dépendent du contexte",
    ],
    draw: (s, id) => [
      ...[73, 177, 278].map((x, i) =>
        dayClock(
          id,
          x,
          104,
          0.78,
          (
            [
              [-1, -2],
              [1, -1.3],
              [2.1, -1.9],
            ] as [number, number][]
          )[i]!,
        ),
      ),
      ...(s === 0
        ? [stroke("M52 143h243", "#a1895d", 1.7, "5 4"), label(178, 163, "Journée", cold)]
        : s === 1
          ? [
              stroke("M72 134v13h208v-13m-105 13v10", "#668a71", 1.74),
              label(178, 172, "Total", cold),
            ]
          : [
              runner(id, 86, 151, 0.37, 1),
              runner(id, 176, 152, 0.39, 2, "copper"),
              runner(id, 266, 152, 0.32, 0),
              label(177, 62, "À son rythme", forest),
            ]),
    ],
  },
  opticalWatch: {
    foot: [
      "La diode éclaire, le capteur reçoit",
      "Le volume sanguin module le signal",
      "Le mouvement peut brouiller la mesure",
    ],
    draw: (s, id) => [
      surface(id, "M45 122q125-18 267 0v37H45Z", "copper", 1.18),
      stroke("M51 141q52-14 103-9t101 6 54 4", "#b05c4f", s === 1 ? 5 : 3.7),
      panel(id, 104, s === 2 ? 64 : 72, 132, 43, "iron"),
      ...[133, 197].map((x, i) =>
        block(x, 102 - (s === 2 ? 10 : 0), 16, 9, paint(id, i ? "glass" : "copper"), dark, 2),
      ),
      stroke(
        s === 2 ? "M141 105l14 8 12-11m15 1 17-5" : "M144 114l16 15 37-15",
        "#e0cf7e",
        2.4,
        "4 3",
      ),
      s === 0
        ? label(278, 81, "Lumière", cold)
        : s === 1
          ? label(276, 81, "Signal", forest)
          : [stream(123, 58, 154, 58, heat), label(273, 80, "Contact", heat)],
    ],
  },
  editionSportRevenue: {
    foot: [
      "Les billets financent une partie du sport",
      "La diffusion peut être vendue",
      "Le partenariat peut compléter les revenus",
    ],
    draw: (s, id) => [
      surface(id, "M45 130q3-50 89-63 91-15 162 35l18 28-22 29H67Z", "iron", 1.2),
      fillPath("M71 122q31-49 99-43 56 2 109 48l-13 24H95Z", "#84a184", "#516e62", 1.13),
      stroke("M98 120h168M105 138h153m-78-36v46", "#d7d4af", 1.2),
      ...(s === 0
        ? [
            surface(id, "M66 87l48-15 9 21-49 16Z", "copper"),
            stroke("M78 90l29-9", "#e2c38a", 1.17, "4 2"),
            label(237, 67, "Billets", cold),
          ]
        : s === 1
          ? [
              panel(id, 231, 57, 76, 55, "soot"),
              stroke("M242 81h42l10 16h-50Z", "#a6bc9d", 1.6),
              label(106, 60, "Diffusion", cold),
            ]
          : [
              surface(id, "M197 142h87v15h-87Z", "ember", 0.97),
              stroke("M211 150h60", "#d9c295", 1.28, "4 3"),
              label(236, 61, "Partenaires", heat),
            ]),
    ],
  },
} satisfies Record<string, Study>;
