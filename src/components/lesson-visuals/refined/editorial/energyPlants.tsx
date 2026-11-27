import { steamLink } from "@/lib/lesson-visuals/horizons50-models";
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
  heat,
  joint,
  label,
  link,
  motor,
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

function turbine(id: string, x: number, y: number, scale = 1, tone: "steel" | "copper" = "steel") {
  return moved(
    x,
    y,
    [
      surface(id, "M-36 24v-37l16-20h48l13 15v40l-17 13h-48Z", "iron", 1.3),
      surface(id, "M-31-10l13-16h38l13 14v33l-14 8h-33l-17-7Z", "steel", 1.1),
      rotor(id, 1, 1, 25, tone),
      ...fastener(-28, -7, 1.9),
      ...fastener(29, 20, 1.9),
      surface(id, "M26-3h24v7H26Z", "copper", 0.9),
    ],
    scale,
  );
}

function windRotor(
  id: string,
  x: number,
  y: number,
  scale: number,
  angle = 0,
  tone: "steel" | "copper" = "steel",
) {
  return moved(
    x,
    y,
    [
      <g key="blades" transform={`rotate(${angle})`}>
        {[0, 120, 240].map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            {surface(id, "M-6 2l-5-21q-6-44 3-69 7-11 13-9 4 41 1 77L5 2Z", tone, 1.24)}
            {stroke("M-2-9l-3-31 2-38", "#d9dfc6", 1.3)}
          </g>
        ))}
      </g>,
      ...joint(id, 0, 0, 8.5),
    ],
    scale,
  );
}

function windScenery(id: string, s: number) {
  return [
    fillPath("M24 166l66-20 56 7 39-12 69 5 79-19v38H24Z", "#c0c5a5", "#a4ad8c", 1.0),
    stroke("M35 162l59-9 50 4 39-8 67 5 73-16", "#e1dfbd", 1.4),
    surface(id, "M158 153l10-65h12l10 65Z", "steel", 1.15),
    surface(id, "M167 83l12-5h36l9 9-11 8h-43Z", "iron"),
    windRotor(id, 165, 87, 0.47, s * 28),
  ];
}

function waterwheel(id: string, x: number, y: number, r: number, step: number) {
  return moved(x, y, [
    oval(0, 0, r, r, paint(id, "iron"), dark),
    oval(0, 0, r - 7, r - 7, "none", "#ccb17a"),
    <g key="buckets" transform={`rotate(${step * 15})`}>
      {Array.from({ length: 10 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 36})`}>
          {surface(id, `M-8 ${-r}h16v9H-8Z`, "copper", 0.8)}
          {stroke(`M0 ${-r + 9}v${r - 16}`, "#cfbb8c", 2.4)}
        </g>
      ))}
    </g>,
    ...joint(id, 0, 0, r * 0.25, "copper"),
  ]);
}

function reservoir(id: string, s: number) {
  const high = "M31 77h112v39H31Z";
  return [
    surface(id, "M31 91h99l13 21 35 31h142v26H31Z", "cream"),
    fillPath(high, "#83a7a4", "#557f7d", 1.05),
    fillPath("M205 145h115v24H205Z", "#84a8a4", "#5c827c", 1.0),
    stroke("M38 84q14 3 28 0t28 0 32 0m94 70q21 2 38 0m18 4h31", "#dce2c4", 1.18),
    surface(id, "M129 71h20l29 72h-38Z", "steel", 1.28),
    stroke("M136 82l18 57m-14-52 15 13", "#7d9082", 1.3),
    duct("M118 110h26l47 43h53", cold, s > 0),
    turbine(id, 221, 150, 0.52, s === 2 ? "copper" : "steel"),
    s === 2 && [motor(id, 254, 123, 0.56), stroke("M220 137v-20h14", "#a87754", 4)],
  ];
}

const generatorCounter = (id: string, x: number, y: number, scale = 1) =>
  moved(
    x,
    y,
    [
      panel(id, -30, -24, 60, 48, "iron"),
      block(-23, -16, 46, 24, paint(id, "cream"), dark, 2),
      stroke("M-20 2q6-19 13 0t13 0 13 0", forest, 1.65),
      ...fastener(2, 15, 2),
    ],
    scale,
  );

export const energyPlants = {
  cogeneration: {
    foot: [
      "Le moteur entraîne l’alternateur",
      "L’échangeur récupère de la chaleur",
      "Le site utilise les deux formes d’énergie",
    ],
    draw: (s, id) => [
      motor(id, 89, 110, 0.78),
      generatorCounter(id, 177, 89, 0.98),
      exchanger(id, 274, 113, 0.75, s > 0 ? "copper" : "steel"),
      duct("M119 110h23v-21h7", cold),
      duct("M97 127v31h177v-12", heat, s > 0),
      s > 0 && stream(168, 158, 242, 158, heat),
      s !== 1 && stream(204, 89, 231, 89, forest),
      label(88, 63, "Moteur", cold),
      label(175, 56, "Alternateur", forest),
      label(271, 172, "Chaleur", heat),
    ],
  },
  steamengine: {
    foot: [
      "La vapeur entre d’un côté",
      "La pression déplace le piston",
      "La distribution inverse les trajets",
    ],
    draw: (s, id) => {
      const {
        pistonX: x,
        cx,
        cy,
        jointX,
      } = steamLink((([225, 330, 145][s] ?? 225) * Math.PI) / 180);
      const rod = `M${jointX} 132L${cx} ${cy}`;
      return [
        surface(id, "M31 85l13-10h127l14 11v74l-10 13H40l-9-13Z", "iron", 1.3),
        surface(id, "M40 89h135v74H40Z", "cream", 1.1),
        fillPath(
          s !== 2 ? `M42 92H${x}v68H42Z` : `M${x + 8} 92H173v68H${x + 8}Z`,
          "#e0b777",
          "#ad8559",
          1,
        ),
        surface(id, `M${x} 88h8v76h-8Z`, "steel", 1.16),
        waterwheel(id, 278, 143, 39, s),
        stroke(`M278 143L${cx} ${cy}`, "#596e65", 7),
        stroke(`M${x + 8} 132h${jointX - x - 8}`, "#637b70", 7),
        stroke(`M${x + 8} 130h${jointX - x - 8}`, "#d8d5b6", 1.24),
        <path
          key="steam-link"
          data-steam-link="true"
          d={rod}
          stroke={paint(id, "copper")}
          strokeWidth="7.5"
          strokeLinecap="round"
          fill="none"
        />,
        stroke(rod, "#dfc194", 1.1),
        ...joint(id, cx, cy, 5.1, "copper"),
        duct(s === 2 ? "M162 62v26m-108 0v-26" : "M54 62v26m108-1V62", heat),
        stream(s === 2 ? 162 : 54, 62, s === 2 ? 162 : 54, 89, heat),
        label(s === 2 ? 162 : 64, 53, "Vapeur", heat),
        label(269, 77, "Manivelle", cold),
      ];
    },
  },
  biogasdigester: {
    foot: [
      "La matière entre dans la cuve",
      "Des microbes transforment la matière",
      "Gaz et digestat sortent séparément",
    ],
    draw: (s, id) => [
      surface(id, "M91 96q87-89 176 0v55q-86 39-176 0Z", "steel", 1.36),
      fillPath("M103 115q76 12 151 0v32q-77 29-151 0Z", "#9a8b61", "#716f50"),
      stroke("M98 97q80-78 162 0", "#d9e3c9", 2.25),
      ...[114, 134, 158, 181, 212, 231, 241].map((x, i) =>
        oval(x, 129 + (i % 3) * 12, 2.1, 2.6, "#cec5a1", "#756c4c"),
      ),
      duct("M38 109h56", forest, s === 0),
      duct("M177 66V57h113m-25 91h68", cold, s === 2),
      s === 0
        ? stream(48, 109, 91, 109, forest)
        : s === 1
          ? [
              ...[147, 160, 197, 221].map((x, i) =>
                oval(x, 98 - (i % 2) * 13, 2.5 + i * 0.38, 2.2 + i * 0.33, "none", "#8fa899"),
              ),
              label(176, 106, "Microbes", forest),
            ]
          : [
              stream(195, 57, 280, 57, cold),
              stream(275, 149, 326, 149, forest),
              label(305, 78, "Biogaz", cold),
              label(293, 173, "Digestat", forest),
            ],
      s !== 2 && label(69, 142, "Matière", forest),
    ],
  },
  refinery: {
    foot: [
      "La colonne sépare les fractions",
      "Les coupes sortent à plusieurs niveaux",
      "Le craquage est une autre opération",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            tank(id, 126, 60, 75, 111, "steel", 0.35),
            ...[80, 100, 121, 143].map((y) => stroke(`M130 ${y}h68`, "#e1d3a9", 1.6, "6 3")),
            duct("M44 145h84", heat),
            s === 1 &&
              [82, 105, 126, 148].map((y, i) => [
                duct(`M199 ${y}h${70 + i * 5}`, i === 0 ? cold : heat),
                stream(224, y, 257 + i * 5, y, i === 0 ? cold : heat),
              ]),
            label(75, 131, "Brut", heat),
            s === 0
              ? label(275, 110, "Colonne", cold)
              : [label(286, 62, "Gaz", cold), label(286, 173, "Coupes lourdes", heat)],
          ]
        : [
            panel(id, 51, 62, 256, 97, "glass"),
            stroke("M67 115l18-13 18 13 18-13 18 13 18-13 18 13 18-13 18 13", heat, 3.8),
            ...[67, 85, 103, 121, 139, 157, 175, 193, 211].map((x, i) =>
              oval(x, i % 2 ? 102 : 115, 4.1, 4, paint(id, "copper"), dark),
            ),
            stroke("M156 94l-9-13m14 11 5-15", heat, 1.4),
            stroke("M222 105l14-10 14 10m-29 26 15 9 15-9 16 8m-31-44h11", cold, 2.7),
            label(176, 174, "Chaînes plus courtes", cold),
          ],
  },
  wind: {
    foot: [
      "Les pales prélèvent de l’énergie",
      "L’arbre transmet la rotation",
      "La génératrice produit du courant",
    ],
    draw: (s, id) =>
      s === 0
        ? [
            ...windScenery(id, s),
            stream(46, 102, 107, 102, cold),
            stream(54, 128, 117, 128, cold),
            link(244, 73, "Pales", "M224 79l-42-13", cold),
          ]
        : [
            surface(id, "M91 92l31-31h136l21 24-19 49H102Z", "steel", 1.3),
            windRotor(id, 86, 106, 0.55, 9 + s * 25),
            duct("M106 106h129", heat, true),
            turbine(id, 207, 105, 0.67, s === 2 ? "copper" : "steel"),
            s === 1
              ? label(173, 164, "Arbre", heat)
              : [generatorCounter(id, 303, 113, 0.65), label(249, 164, "Courant", forest)],
          ],
  },
  detailRotorInduction: {
    foot: [
      "Le vent entraîne le rotor",
      "La rotation entraîne la génératrice",
      "Le courant est adapté à l’usage",
    ],
    draw: (s, id) => [
      ...(s === 0
        ? [
            windRotor(id, 143, 109, 0.72, 62),
            stream(43, 117, 102, 117, cold),
            link(254, 79, "Rotor", "M235 83l-73 26", heat),
          ]
        : s === 1
          ? [
              turbine(id, 125, 109, 1.25, "copper"),
              motor(id, 247, 110, 0.95),
              duct("M174 109h36", heat),
              label(232, 155, "Génératrice", forest),
            ]
          : [
              motor(id, 87, 116, 0.61),
              generatorCounter(id, 164, 101, 0.71),
              panel(id, 225, 81, 69, 62, "cream"),
              duct("M119 112h24m44-11h38", forest),
              link(244, 157, "Adaptation", "M250 145v-8", cold),
            ]),
    ],
  },
  windmill: {
    foot: [
      "Les ailes tournent avec le vent",
      "L’engrenage entraîne un axe vertical",
      "La meule supérieure tourne",
    ],
    draw: (s, id) => [
      surface(id, "M96 155l28-90h109l30 90Z", "cream", 1.38),
      surface(id, "M111 67l57-27 79 27Z", "iron"),
      stroke("M105 144h148m-143-15h137m-131-14h125m-118-13h109", "#a39472", 1.1),
      s === 0
        ? [
            ...[0, 90, 180, 270].map((a) => (
              <g key={a} transform={`translate(135 89) rotate(${a + 31})`}>
                {surface(id, "M-3-4h8v-42h-15v23Z", "copper", 1)}
                {stroke("M-8-29h11m-13-7h14m-8-10v26", "#dec590", 0.86)}
              </g>
            )),
            ...joint(id, 135, 90, 8),
            stream(37, 111, 86, 111, cold),
            label(279, 123, "Ailes", cold),
          ]
        : s === 1
          ? [
              waterwheel(id, 150, 99, 31, 1),
              waterwheel(id, 193, 123, 17, 1),
              stroke("M192 124v39", paint(id, "copper"), 6),
              label(265, 97, "Rouet", heat),
              label(255, 154, "Axe", cold),
            ]
          : [
              tile(id, 132, 99, 112, 23, "iron"),
              tile(id, 131, 129, 114, 19, "steel"),
              stream(213, 101, 171, 101, heat),
              label(267, 118, "Meule", heat),
            ],
    ],
  },
  hydro: {
    foot: [
      "L’eau est stockée en hauteur",
      "L’eau descend et entraîne la turbine",
      "L’arbre entraîne la génératrice",
    ],
    draw: (s, id) => [
      ...reservoir(id, s),
      s === 0
        ? link(93, 56, "Retenue", "M96 62l-8 19", cold)
        : s === 1
          ? [stream(155, 122, 191, 151, cold), link(237, 75, "Conduite", "M224 81l-64 44", cold)]
          : [
              link(282, 64, "Génératrice", "M272 70l-22 35", forest),
              stream(264, 91, 319, 91, forest),
            ],
    ],
  },
  pumpedstorage: {
    foot: [
      "La pompe remonte l’eau",
      "L’eau haute conserve de l’énergie",
      "L’eau redescend et produit du courant",
    ],
    draw: (s, id) => {
      const upper = [16, 66, 16][s]!,
        lower = 90 - upper;
      const topHeight = Math.round(upper * 0.76),
        lowHeight = Math.round(lower * 0.58);
      return [
        surface(id, "M32 102l66-20 38 1 36 31 44 31h111v28H32Z", "cream", 1.1),
        fillPath("M35 74h101v56H35Zm199 54h90v44h-90Z", "#cec09a", "#7f917a", 1.12),
        <rect
          key="upper"
          data-reservoir="upper"
          data-volume={upper}
          x="37"
          y={128 - topHeight}
          width="97"
          height={topHeight}
          fill="#82a8a2"
          stroke="#5d8581"
        />,
        <rect
          key="lower"
          data-reservoir="lower"
          data-volume={lower}
          x="237"
          y={170 - lowHeight}
          width="83"
          height={lowHeight}
          fill="#82a8a2"
          stroke="#5d8581"
        />,
        stroke(
          `M42 ${131 - topHeight}q18 4 35 0t45 0m118 ${44 + topHeight - lowHeight}h70`,
          "#d1e0c3",
          1.22,
        ),
        duct("M132 118h10l62 39h35", cold, s !== 1),
        turbine(id, 207, 150, 0.49, s === 2 ? "copper" : "steel"),
        s === 0
          ? stream(187, 151, 154, 127, cold)
          : s === 2
            ? stream(153, 127, 185, 151, cold)
            : [],
        label(86, 61, "Bassin haut", cold),
        label(280, 117, "Bassin bas", cold),
        s === 1
          ? label(253, 67, "Stockage", forest)
          : link(
              264,
              68,
              s === 0 ? "Pompage" : "Turbinage",
              "M257 75l-42 55",
              s === 0 ? heat : forest,
            ),
      ];
    },
  },
  tidalturbine: {
    foot: ["La marée produit un courant", "La turbine tourne sous l’eau", "Un câble relie la côte"],
    draw: (s, id) => [
      fillPath("M26 78h309v84H26Z", "#92afad", "#567f80", 1.14),
      fillPath("M26 157l60-13 42 13 38 1 92-17 77 17v17H26Z", "#b6ae86", "#817b5e", 0.92),
      stroke("M33 84q20 3 40 0t40 0 40 0m66 5q19-3 40 0m20-5h50", "#e9ead0", 1.15),
      s > 0 && [
        surface(id, "M166 135l10-39 14 1 11 55h-35Z", "iron"),
        windRotor(id, 184, 124, 0.38, 45 + s * 30, "copper"),
      ],
      ...[110, 131].flatMap((y) => stream(36, y, s === 0 ? 212 : 135, y, cold)),
      s === 2 && duct("M186 159q47 2 70-12l36-5v-52h31", forest),
      label(
        s === 0 ? 147 : s === 1 ? 226 : 279,
        s === 0 ? 62 : 67,
        s === 0 ? "Courant" : s === 1 ? "Hydrolienne" : "Câble",
        cold,
      ),
    ],
  },
  watermill: {
    foot: [
      "Le bief alimente la roue par le haut",
      "L’arbre transmet le mouvement",
      "La meule supérieure écrase le grain",
    ],
    draw: (s, id) => [
      surface(id, "M178 68l90-17 47 20v91H178Z", "cream", 1.25),
      stroke("M184 156l126 0m-123-22h121m-122-28h124", "#ada388", 0.95),
      waterwheel(id, 125, 126, 45, s),
      s === 0
        ? [duct("M38 82h88", cold), stream(73, 83, 115, 83, cold), label(70, 63, "Bief", cold)]
        : s === 1
          ? [
              surface(id, "M126 120h110v11H126Z", "copper"),
              waterwheel(id, 245, 126, 16, 2),
              label(240, 85, "Engrenage", heat),
            ]
          : [
              oval(250, 109, 40, 16, paint(id, "steel"), dark),
              oval(250, 126, 40, 16, paint(id, "iron"), dark),
              stroke("M220 97q29-13 53 4", heat, 2.15),
              label(248, 154, "Meules", heat),
            ],
    ],
  },
  csp: {
    foot: [
      "Les miroirs visent le récepteur",
      "Le réservoir conserve la chaleur",
      "La chaleur alimente la turbine",
    ],
    draw: (s, id) => [
      tile(id, 35, 145, 289, 16, "cream", 8),
      s < 2
        ? [
            surface(id, "M163 145l11-76h18l12 77Z", "steel"),
            panel(id, 164, 52, 36, 23, s === 0 ? "copper" : "iron"),
            ...[44, 92, 245, 287].map((x, i) =>
              surface(id, `M${x} ${136 + (i % 2) * 10}l24-10 10 5-24 13Z`, "glass", 0.9),
            ),
            s === 0
              ? [
                  stroke(
                    "M69 132l104-70m-57 71 59-70m79 70-61-70m98 72-97-72",
                    "#b18446",
                    1.25,
                    "5 3",
                  ),
                  label(245, 61, "Récepteur", heat),
                ]
              : [
                  tank(id, 236, 91, 55, 61, "ember", 0.58),
                  duct("M187 72v18h78", heat),
                  label(257, 76, "Chaleur", heat),
                ],
          ]
        : [
            tank(id, 54, 76, 81, 77, "ember", 0.63),
            turbine(id, 207, 105, 0.86, "copper"),
            generatorCounter(id, 303, 108, 0.71),
            duct("M133 120h45m65-13h37", heat),
            label(219, 165, "Turbine", cold),
          ],
    ],
  },
  compressedair: {
    foot: [
      "La machine comprime l’air",
      "La chaleur est stockée à part",
      "L’air réchauffé entraîne la machine",
    ],
    draw: (s, id) => [
      motor(id, 74, 113, 0.7),
      tank(id, 143, 76, 75, 79, "glass", 0.43),
      tank(id, 259, 92, 51, 62, s === 0 ? "steel" : "ember", 0.53),
      duct("M106 115h36m77 0h38", s === 2 ? heat : cold, s !== 1),
      s === 0 ? stream(113, 116, 143, 116, cold) : s === 2 ? stream(147, 114, 116, 114, heat) : [],
      label(179, 61, "Air comprimé", cold),
      s > 0 && label(278, 168, "Chaleur", heat),
    ],
  },
  flowbattery: {
    foot: [
      "Les deux liquides circulent à part",
      "Des réservoirs plus grands stockent plus",
      "L’empilement influe sur la puissance",
    ],
    draw: (s, id) => [
      tank(id, s === 1 ? 34 : 42, 84, s === 1 ? 80 : 63, 78, "glass", 0.54),
      tank(id, s === 1 ? 249 : 257, 84, s === 1 ? 79 : 62, 78, "ember", 0.54),
      ...Array.from({ length: s === 2 ? 7 : 4 }, (_, i) =>
        surface(id, `M${145 + i * 9} 77l12 13v63l-12-10Z`, i % 2 ? "glass" : "steel", 0.9),
      ),
      duct("M104 108h41m47 23h62", cold),
      duct("M106 138h42m42-32h65", heat),
      stream(111, 108, 136, 108, cold),
      stream(245, 106, 223, 106, heat),
      label(180, 63, "Cellules", cold),
      s === 1 && label(183, 171, "Réserves agrandies", forest),
    ],
  },
} satisfies Record<string, Study>;
