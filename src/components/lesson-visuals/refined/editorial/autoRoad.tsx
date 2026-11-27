import {
  type Study,
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
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
  tank,
  tile,
  tire,
} from "./art";

function chassis(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 111, 59, 111),
      surface(id, "M12 30l28-28h133l43 28-23 23H32Z", "iron", 1.3),
      surface(id, "M30 30l21-19h111l30 19-17 11H46Z", "steel", 0.9),
      surface(id, "M56 16h105v14H56Z", "glass", 1),
      stroke("M42 14l-11 24m145-25 16 24m-103-36v48m29-48v52", "#d7ddc4", 1.3),
      ...[
        [-1, 27],
        [45, 3],
        [174, 5],
        [221, 27],
      ].map(([x, y]) => tire(id, x!, y!, 12.3)),
      ...[53, 92, 155, 178].flatMap((a) => fastener(a, 38, 2)),
    ],
    scale,
  );
}

function helperArm(id: string, x: number, y: number, lowered: boolean) {
  const end = lowered ? "M34-36l37 25-8 9-37-26Z" : "M34-36l28-15 6 9-35 22Z";
  return moved(x, y, [
    tile(id, -23, -5, 50, 18, "iron", 7),
    surface(id, "M-8 0l17-42 11 2L8 4Z", "steel", 1.25),
    surface(id, "M8-41l28-6 10 10-13 13-27-6Z", "copper", 1.1),
    surface(id, end, "steel", 1.1),
    ...joint(id, 9, -40, 6.6),
    ...joint(id, 37, -36, 6.4),
    stroke(lowered ? "M65-10l13 0m-9 5h11" : "M65-47l12-5m-8 10 11-2", heat, 1.9),
  ]);
}

function clipReport(id: string, x: number, y: number) {
  return moved(x, y, [
    panel(id, -45, -52, 91, 99, "iron"),
    surface(id, "M-34-44h68v82h-68Z", "cream"),
    surface(id, "M-17-48l6-9h22l6 9v8h-34Z", "steel"),
    ...[-27, -12, 4, 19].map((t, i) => [
      stroke(`M-11 ${t}h31`, "#918c73", 1.4),
      stroke(
        i === 2 ? `M-25 ${t - 4}l8 7m-8 0 8-7` : `M-25 ${t}l3 3 6-7`,
        i === 2 ? heat : forest,
        1.65,
      ),
    ]),
  ]);
}

function brakeDisc(id: string, x: number, y: number, pressure: number) {
  return moved(x, y, [
    oval(0, 0, 49, 46, paint(id, "iron"), dark),
    oval(3, 0, 43, 43, paint(id, "steel"), dark),
    oval(3, 0, 31, 31, "none", "#d0caab"),
    oval(3, 0, 19, 19, paint(id, "iron"), dark),
    ...Array.from({ length: 12 }, (_, i) => {
      const theta = (i * Math.PI) / 6;
      return oval(3 + 33 * Math.cos(theta), 32 * Math.sin(theta), 1.55, 1.55, "#657a71", dark);
    }),
    ...joint(id, 3, 0, 9),
    surface(id, `M${25 + pressure} -26l19-9 22 11v48l-23 12-19-9v-10h18v-33h-17Z`, "copper", 1.15),
    stroke(`M${26 + pressure} -13v25`, heat, 3.8),
  ]);
}

function lane(id: string, x: number, y: number) {
  return moved(x, y, [
    fillPath("M-107 69-49-67H48l64 136Z", "#aab4a0", "#677f71", 1.1),
    fillPath("M-84 69-38-67h77l49 136Z", "#697970", "#576b63", 0.9),
    stroke("M-76 68l43-136m109 136  -43-136", "#d0d2b5", 1.75),
    stroke("M0 64V-67", "#eddfb3", 1.9, "8 6"),
    ...[-94, 94].map((t) => oval(t, 53, 4, 2.4, "#9ea88c", "#6b846b")),
  ]);
}

function birdCar(id: string, x: number, y: number, tone: "steel" | "copper", scale = 1, angle = 0) {
  return moved(
    x,
    y,
    [
      <g key="car" transform={`rotate(${angle})`}>
        {surface(id, "M-18-29l8-5h19l9 5 3 42-9 16h-25l-8-16Z", tone, 1.2)}
        {surface(id, "M-12-11h23l4 15-3 13h-24l-3-13Z", "glass", 0.9)}
        {stroke("M-11-25h22m-21 7h20M-9 23H9", "#e2d7b2", 1.22)}
        {block(-23, -19, 5, 12, paint(id, "soot"), dark, 1)}
        {block(18, -19, 5, 12, paint(id, "soot"), dark, 1)}
        {block(-23, 11, 5, 12, paint(id, "soot"), dark, 1)}
        {block(18, 11, 5, 12, paint(id, "soot"), dark, 1)}
      </g>,
    ],
    scale,
  );
}

export const autoRoad = {
  movingAssembly: {
    foot: [
      "Le convoyeur fait avancer le châssis",
      "Chaque poste effectue un geste",
      "Le châssis poursuit sa route",
    ],
    draw: (s, id) => [
      tile(id, 33, 124, 305, 34, "iron", 15),
      ...Array.from({ length: 14 }, (_, i) => stroke(`M${42 + i * 20} 151l10-17`, "#a3af93", 1.3)),
      chassis(id, 60 + s * 60, 110, 0.58),
      helperArm(id, 107, 117, s === 1),
      moved(228, 117, [helperArm(id, 0, 0, s === 2)], 0.94),
      s > 0 &&
        surface(
          id,
          s === 1 ? "M161 125l16-10h33l-10 10Z" : "M219 122l16-10h33l-10 10Z",
          "copper",
          0.9,
        ),
      stream(133 + s * 34, 171, 180 + s * 37, 171, forest),
      label(111, 58, "Poste 1", cold),
      label(232, 58, "Poste 2", cold),
    ],
  },
  carMaterials: {
    foot: [
      "L’acier renforce souvent la structure",
      "L’aluminium peut alléger une pièce",
      "Les plastiques habillent et protègent",
    ],
    draw: (s, id) => [
      automobile(id, 52, 61, 1.17, true, true, s === 2 ? "glass" : "steel"),
      s === 0
        ? [
            stroke("M105 115l38-46h66l39 44-1 35H113Z", heat, 3.05, "4 2"),
            link(275, 67, "Structure acier", "M258 73l-22 26", heat),
          ]
        : s === 1
          ? [
              surface(id, "M213 115l18-11h47l13 13-20 14h-61Z", "copper", 1.2),
              link(272, 69, "Aluminium", "M268 75l-3 30", heat),
            ]
          : [
              surface(id, "M258 118l24-12 15 11v21l-18 6-19-11Z", "copper", 1.1),
              link(279, 72, "Garniture", "M275 77l3 25", heat),
            ],
    ],
  },
  sharedPlatform: {
    foot: [
      "Les ancrages restent communs",
      "Une carrosserie basse s’y assemble",
      "Une carrosserie haute peut s’y adapter",
    ],
    draw: (s, id) => [
      s > 0 &&
        automobile(id, 83, s === 1 ? 48 : 48, 0.91, s === 2, false, s === 2 ? "glass" : "steel"),
      chassis(id, 67, s === 0 ? 105 : 140, 0.94),
      ...[115, 249].map((x) => oval(x, s === 0 ? 134 : 168, 4.2, 3.2, "#d1a063", heat)),
      s === 0
        ? link(187, 79, "Ancrages", "M183 85l-61 41m64-41 58 41", heat)
        : link(284, 55, s === 1 ? "Voiture basse" : "Voiture haute", "M270 61l-23 22", cold),
    ],
  },
  detailInspectionBench: {
    foot: [
      "Le pont rend le dessous accessible",
      "Le contrôle examine les liaisons",
      "Le relevé consigne les défauts",
    ],
    draw: (s, id) =>
      s === 2
        ? [
            automobile(id, 39, 95, 0.65),
            clipReport(id, 258, 109),
            link(176, 63, "Relevé de contrôle", "M179 67l42 19", heat),
          ]
        : [
            automobile(id, 73, 53, 1.04, false, s === 1),
            tile(id, 65, 136, 250, 10, "steel", 9),
            surface(id, "M109 145h17v27h-17Zm154 0h17v27h-17Z", "iron"),
            stroke("M81 172h217", "#718367", 2.5),
            s === 1
              ? [
                  ...joint(id, 123, 128, 14, "copper"),
                  link(74, 70, "Liaison", "M91 76l25 35", heat),
                ]
              : link(284, 167, "Pont", "M272 156l-23-8", cold),
          ],
  },
  detailAbrasionSources: {
    foot: [
      "Les gaz sortent de la ligne",
      "La friction use le disque et les plaquettes",
      "Le contact use le pneu et la chaussée",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            automobile(id, 81, 73, 1.02, false, true),
            duct("M265 139h-88l-55 14H79", heat),
            stream(118, 153, 49, 153, heat),
            link(91, 67, "Échappement", "M94 74l18 71", heat),
          ]
        : s === 1
          ? [
              brakeDisc(id, 171, 111, 2),
              ...[233, 239, 254, 265, 280].map((x, i) =>
                oval(x, 123 + (i % 3) * 13, 2.3, 2.1, "#b78353", heat),
              ),
              link(291, 78, "Plaquette", "M271 85l-49 14", heat),
              link(78, 66, "Disque", "M98 73l40 15", cold),
            ]
          : [
              fillPath("M46 143l39-13h211l21 17v18H46Z", "#5f7064", "#466353", 1),
              tire(id, 174, 108, 43),
              stroke("M109 156h186", "#b6b99b", 1.35, "6 4"),
              ...[192, 202, 214, 220, 236, 255].map((x, i) =>
                oval(x, 146 + (i % 2) * 4, 2.1, 2.2, "#d4aa67", heat),
              ),
              link(264, 94, "Contact", "M254 101l-74 43", heat),
            ],
  },
  editionOilToFuel: {
    foot: [
      "L’huile usagée est récupérée",
      "L’installation convertit l’huile",
      "Le carburant est échantillonné",
    ],
    draw: (s, id) => [
      tank(id, 47, 94, 58, 66, "ember", 0.58),
      tank(id, 147, 72, 48, 92, s === 1 ? "copper" : "steel", 0.41),
      tank(id, 210, 90, 42, 71, "steel", 0.39),
      duct(
        s === 0 ? "M104 137h45" : s === 1 ? "M169 73V62h65v28" : "M251 132h33",
        s === 1 ? heat : cold,
      ),
      s === 2
        ? [
            surface(id, "M284 111h24l-4 12v41h-17v-41Z", "glass"),
            fillPath("M289 145h12v17h-12Z", "#ba8751", heat, 0.7),
            label(293, 92, "Échantillon", heat),
          ]
        : s === 0
          ? label(75, 77, "Collecte", heat)
          : label(178, 55, "Conversion", heat),
    ],
  },
  driverSensors: {
    foot: [
      "La caméra fournit une image",
      "Le radar analyse les échos",
      "Le lidar mesure des distances",
    ],
    draw: (s, id) => [
      lane(id, 192, 109),
      birdCar(id, 121, 150, "steel", 0.78, 11),
      birdCar(id, 207, 80, "copper", 0.62, 13),
      s === 0
        ? [
            <path
              key="camera-field"
              d="M126 124l43-75 81 7-47 58Z"
              fill="#d3cb9c"
              fillOpacity=".42"
              stroke="#967e55"
              strokeWidth="1.3"
            />,
            stroke("M176 56h55v47h-55Z", heat, 2, "4 3"),
            link(65, 85, "Caméra", "M70 91l53 32", heat),
          ]
        : s === 1
          ? [
              stroke(
                "M127 120l75-35m-44 42q31-13 37-29m-19 33q32-20 43-38m-27 53q39-27 45-56",
                cold,
                2.14,
              ),
              link(65, 79, "Radar", "M69 86l58 31", cold),
            ]
          : [
              ...[154, 167, 180, 193, 206, 219, 232, 245, 258].map((x, i) => [
                stroke(`M127 118L${x} ${67 + (i % 3) * 11}`, forest, 1.15, "3 3"),
                oval(x, 67 + (i % 3) * 11, 2.4, 2.2, "#ddce8c", forest),
              ]),
              link(61, 74, "Lidar", "M70 82l54 35", forest),
            ],
    ],
  },
  abscontrol: {
    foot: [
      "Le capteur suit la rotation",
      "La vanne réduit la pression",
      "La pression peut être réappliquée",
    ],
    draw: (s, id) => [
      brakeDisc(id, 113, 115, s === 1 ? 7 : 0),
      panel(id, 245, 84, 66, 61, "steel"),
      ...[256, 275, 296].flatMap((x) => joint(id, x, 107, 6, s === 1 ? "glass" : "copper")),
      duct("M168 127h78", s === 1 ? cold : heat, true),
      s === 0
        ? [
            stroke("M47 132q-6-44 28-52", cold, 2.25),
            link(162, 64, "Capteur", "M156 69l-41 22", cold),
          ]
        : [
            s === 1 ? stream(228, 128, 186, 128, cold) : stream(184, 128, 229, 128, heat),
            label(280, 70, "Vanne", s === 1 ? cold : heat),
          ],
      label(87, 173, "Roue", cold),
    ],
  },
  yawControl: {
    foot: [
      "Le volant indique la direction voulue",
      "Les capteurs repèrent un écart",
      "Le freinage aide à corriger la trajectoire",
    ],
    draw: (s, id) => [
      lane(id, 175, 111),
      birdCar(id, 168, 139, "steel", 1.0, s === 0 ? 0 : s === 1 ? -31 : -14),
      stroke("M176 105q15-24 32-51", forest, 2.35, "5 3"),
      s > 0 && stroke(s === 1 ? "M163 105q-32-37-59-43" : "M165 105q-9-24 4-45", heat, 2.5, "5 3"),
      s === 2 && oval(190, 148, 6, 6, "#d5a367", heat),
      label(269, 63, "Visée", forest),
      label(77, 84, s === 1 ? "Écart" : s === 2 ? "Correction" : "Volant", heat),
    ],
  },
  emergencyBrake: {
    foot: [
      "Le capteur repère un objet suivi",
      "Le système peut avertir",
      "Le freinage peut atténuer le choc",
    ],
    draw: (s, id) => [
      lane(id, 181, 110),
      birdCar(id, 182, s === 2 ? 130 : 146, "steel", 0.86),
      birdCar(id, 183, 68, "copper", 0.63),
      stroke(s === 0 ? "M175 114l-9-37m24 37 10-37" : "M177 106l6-16", cold, 1.6, "3 3"),
      s > 0 && [
        fillPath("M233 103l15-26 15 26Z", "#dfbf75", heat, 1.2),
        stroke("M248 87v8m0 4h.3", heat, 1.75),
      ],
      s === 2 && [stream(138, 153, 138, 130, heat), stream(229, 153, 229, 130, heat)],
      label(271, 132, s === 2 ? "Freinage" : s === 1 ? "Alerte" : "Objet suivi", heat),
    ],
  },
} satisfies Record<string, Study>;
