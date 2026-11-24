import {
  active,
  arrow,
  block,
  call,
  fillPath,
  filled,
  flow,
  harm,
  label,
  layers,
  living,
  moved,
  oval,
  round,
  shadow,
  stroke,
} from "../detail100/plate";
import { plate } from "../edition100/craft";
import { clip, gradient, pin, position } from "./material";

function fish(id: string, x: number, y: number, scale: number, predator = false) {
  const shape = predator
    ? "M-66 3c15-30 47-42 87-33 9 2 20 12 33 11l32-21-9 33 13 32-35-16c-17 1-29 19-64 18-21-2-44-13-57-24Z"
    : "M-62 1c23-26 57-35 86-22 11 5 19 13 30 18l28-19-7 25 8 24-29-15C11 37-36 24-62 1Z";
  return moved(
    x,
    y,
    [
      fillPath(
        "M-12-19q12-19 42-16l-7 23Zm9 38q18 5 24 20l-31-8Zm30-35q14-5 24 1l-9 12Z",
        `url(#${id}-fin)`,
        "#3d5656",
        1.3,
      ),
      stroke("M2-22l13-10m-3 10 14-10M-2 23l15 11m-10-12 13 7", "#92ac9f", 0.9),
      fillPath(shape, `url(#${id}-fish-scale)`, "#314e55", 1.25),
      clip(
        id + "-fish-" + x,
        shape,
        layers(
          Array.from({ length: 94 }, (_, i) => {
            const xx = -51 + (i % 18) * 7.4 + (Math.floor(i / 18) % 2) * 3.2;
            const yy = -19 + Math.floor(i / 18) * 8;
            return stroke(`M${xx.toFixed(1)} ${yy}q6-2 7 3`, i % 5 ? "#527477" : "#9db8a8", 0.65);
          }),
        ),
      ),
      stroke("M-34-18q17 19-1 35m-29-11 13-1M-16 0q28-6 68 3", "#334e53", 1.24),
      fillPath("M-17 6q14-8 22-1-8 8-20 11Z", `url(#${id}-fin)`, "#4f6b6b", 0.85),
      oval(-44, -6, 5.3, 4.4, "#beaa79", "#455652"),
      oval(-45, -6, 2.4, 2.5, "#293f42", "#33494b"),
      oval(-45.6, -7.2, 0.8, 0.8, "#def0d8", "#def0d8"),
    ],
    scale,
  );
}
const fishTrophic = plate(
  [
    "Les petits organismes sont consommés",
    "Le méthylmercure peut s’accumuler",
    "Des concentrations variables",
  ],
  (s, id) => [
    <defs key="marine-gradients">
      {gradient(
        id + "-water-column",
        [
          [0, "#8aaaa6"],
          [0.27, "#678b91"],
          [0.7, "#27515d"],
          [1, "#203b45"],
        ],
        true,
      )}
      {gradient(
        id + "-fish-scale",
        [
          [0, "#3a585d"],
          [0.3, "#688789"],
          [0.61, "#c0c6a9"],
          [1, "#698583"],
        ],
        true,
      )}
      {gradient(
        id + "-fin",
        [
          [0, "#466569"],
          [0.55, "#a0af90"],
          [1, "#476267"],
        ],
        true,
      )}
    </defs>,
    block(20, 88, 320, 139, `url(#${id}-water-column)`, "#506d6e", 8),
    stroke("M26 94q23 10 48 1t55-1 55 2 55-1 54 1 43-2", "#bad1bf", 1.65),
    ...Array.from({ length: 32 }, (_, i) => {
      const x = 29 + position(i, 2) * 300,
        y = 105 + position(i, 5) * 115;
      return oval(x, y, 0.8, 0.8, "#9eb6a1", "#759689");
    }),
    fish(id, 60, 182, 0.24),
    fish(id, 91, 190, 0.23),
    fish(id, 110, 162, 0.24),
    fish(id, 155, 167, 0.48),
    fish(id, 247, 143, 0.87, true),
    s === 0 && [
      call(88, 76, "Petites proies", "M87 82l-5 75", flow),
      arrow(110, 185, 134, 173, "#ebd3a9"),
    ],
    s >= 1 && [
      ...[
        [61, 184],
        [109, 162],
        [153, 164],
        [167, 169],
        [225, 141],
        [238, 151],
        [250, 136],
        [262, 144],
        [270, 151],
        [280, 139],
      ].map(([x, y]) => pin(x!, y!, "#d39054")),
      s === 1 && [
        call(231, 76, "Méthylmercure", "M230 82l-1 51", harm),
        arrow(176, 157, 200, 155, "#f1d5a5"),
      ],
    ],
    s === 2 && [
      call(251, 77, "Prédateur", "M247 82l-16 36", flow),
      stroke("M216 181q45 13 81-1", "#ead4a6", 1.85, "4 4"),
    ],
  ],
);

const soilOutline = "M25 129q41-12 77-6t79 3q38-15 80-4l53 2v107H25Z";
const nitrogenReturn = plate(
  [
    "Une matière organique en surface",
    "Une partie devient disponible",
    "Des nodules sur les racines",
  ],
  (s, id) => [
    <defs key="soil-gradients">
      {gradient(
        id + "-organic-soil",
        [
          [0, "#584c37"],
          [0.25, "#876b49"],
          [0.53, "#97795a"],
          [0.8, "#ad875d"],
          [1, "#976e4b"],
        ],
        true,
      )}
      {gradient(id + "-leaf-green", [
        [0, "#adc087"],
        [0.46, "#758d63"],
        [1, "#3c5a48"],
      ])}
    </defs>,
    shadow(id, 179, 231, 157, 9),
    fillPath("M314 124l17-12V217l-17 14Z", "#70553c"),
    fillPath(soilOutline, `url(#${id}-organic-soil)`, "#65513b", 1.26),
    clip(
      id + "-soil-profile",
      soilOutline,
      layers([
        fillPath(
          "M25 126q67-19 123-3t83-2l91 2v32q-50-14-127 0-48 12-84 0t-86 12Z",
          "#69533b",
          "#6b5439",
          0.8,
        ),
        ...Array.from({ length: 200 }, (_, i) => {
          const x = 25 + position(i, 9) * 290,
            y = 123 + position(i, 4) * 111;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q2.2-1 4.3 .4`,
            ["#5d4a3b", "#b28d60", "#c3a47a", "#6f543d"][i % 4]!,
            0.76,
          );
        }),
        ...[58, 88, 138, 194, 249, 284].map((x, i) =>
          oval(x, 183 + (i % 3) * 16, 5.5 + (i % 2) * 2.1, 3.8, "#b5a283", "#7d6d54"),
        ),
      ]),
    ),
    stroke("M158 128q1-28 29-49m-27 44q-16-20-32-37m35 40q20-16 41-14", "#385846", 2.5),
    fillPath("M184 84q31-35 62-14-14 32-48 29l-17-8Z", `url(#${id}-leaf-green)`, living),
    fillPath("M139 92q-30-13-45-39-18 25 14 42 13 7 32 0Z", `url(#${id}-leaf-green)`, living),
    fillPath("M182 115q24-18 48-7-8 19-28 17l-20-7Z", `url(#${id}-leaf-green)`, living),
    stroke(
      "M188 89q20-9 47-16m-28 9 2-10m-1 11 17 4M132 91q-23-8-35-25m9 12-2-11m11 17-11 2M188 116l34-5",
      "#a4b381",
      1.05,
    ),
    stroke(
      "M160 131q-12 17 11 36 2 7-6 16l2 31m0-47q15-9 20-23m-24 13q-22 3-35 26m41-9q13 13 32 18m-38-4q-12 19-30 20m41-24q10 12 8 23",
      "#ead6a1",
      2.1,
    ),
    stroke("M146 161l-9 1-9 9m45 17 13 3m-44 4-5 13m61-18 9 8m-19-43 8-3 4-11", "#d5bb8c", 1.05),
    s === 0 && [
      ...[44, 62, 81, 104].map((x, i) =>
        fillPath(`M${x} ${126 - (i % 2) * 4}q10-14 22-7-6 11-22 7Z`, "#be995d", "#7c5939", 0.85),
      ),
      call(67, 82, "Résidus", "M65 89l14 29", active),
    ],
    s === 1 && [
      ...[
        [80, 161],
        [101, 178],
        [112, 156],
        [127, 174],
        [135, 194],
        [211, 178],
        [237, 161],
        [251, 193],
      ].map(([x, y]) => pin(x!, y!, "#ad7e35")),
      call(258, 80, "Nutriments", "M256 88l-19 73", active),
    ],
    s === 2 && [
      ...[
        [151, 160],
        [175, 157],
        [182, 166],
        [177, 180],
        [149, 175],
      ].map(([x, y]) => oval(x!, y!, 3.8, 3, `url(#${id}-brass)`, "#8d643b")),
      call(243, 83, "Nodules", "M239 89l-16 36-42 41", living),
      pin(181, 166, living),
    ],
  ],
);

const chimneyPath = "M105 150l3-63h19l4 63Z";
const plumePath =
  "M125 95c35-21 73-25 114-11 19 6 55 31 88 16l2 28c-44 15-70-11-106-21-40-10-70-9-99 4Z";
const plumeExposure = plate(
  ["Des substances sont émises", "Le panache suit le vent", "L’exposition varie selon le lieu"],
  (s, id) => [
    <defs key="air-gradients">
      {gradient(id + "-sky-plume", [
        [0, "#59747a"],
        [0.33, "#829b9a"],
        [0.68, "#afc1b6"],
        [1, "#dcdac2"],
      ])}
      {gradient(id + "-steel-stack", [
        [0, "#465653"],
        [0.46, "#879692"],
        [0.66, "#bbbab0"],
        [1, "#556766"],
      ])}
    </defs>,
    filled(id, "M27 187l77-18 223 1-63 66H27Z", "plant", "engraving"),
    fillPath("M27 188l237 17 55-33 7 17-61 33-238-19Z", "#c0b59b", "#8a8c70", 0.8),
    fillPath("M44 145l37 0 23-22v20l22-19v19l19-9 24 16v50H44Z", `url(#${id}-steel-stack)`),
    stroke("M49 159h110m-110 6h110m-110 7h110m-107 8h106m-107 8h106", "#738480", 0.75),
    fillPath(chimneyPath, `url(#${id}-steel-stack)`),
    oval(118, 87, 9.5, 3.4, "#465b58", "#6a7d77"),
    ...[104, 119, 135].map((y) => stroke(`M107 ${y}q11 2 21-1`, "#738680", 1.75)),
    ...[55, 76, 97, 118, 139, 160].map((x) => block(x, 169, 10, 9, "#d0b782", "#5b6b64", 0.7)),
    fillPath(plumePath, `url(#${id}-sky-plume)`, "#8fa8a1", 0.75),
    clip(
      id + "-traced-plume",
      plumePath,
      layers(
        Array.from({ length: 30 }, (_, i) => {
          const x = 120 + position(i, 2) * 210,
            y = 77 + position(i, 7) * 55;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q9 3 19 1`,
            i % 2 ? "#719392" : "#a4c0b5",
            0.65,
          );
        }),
      ),
    ),
    ...[
      [206, 193],
      [245, 188],
      [267, 204],
      [303, 188],
    ].map(([x, y], i) =>
      moved(x!, y!, [
        fillPath("M-11-9h22V8h-22Z", i % 3 ? "#c8af83" : "#d4c3a1", "#715e4b", 0.85),
        fillPath("M-17-8L0-21l17 13Z", i % 2 ? "#92705f" : "#706e62", "#675846", 0.85),
        stroke("M-6-4v9m12-9v9", "#8e765a", 2.4),
      ]),
    ),
    s === 0 && [call(77, 76, "Émission", "M82 81l25 6", flow), pin(108, 87, flow)],
    s === 1 && [
      call(224, 74, "Transport", "M216 79l-9 11", flow),
      arrow(163, 102, 246, 110, "#f0e2b9"),
    ],
    s === 2 && [
      call(270, 152, "Air respiré", "M266 160l-15 17", flow),
      pin(251, 177, flow),
      oval(252, 190, 57, 32, "none", flow),
    ],
  ],
);

const alignments = [
  {
    joints: [
      [86, 176],
      [111, 111],
      [181, 84],
      [230, 125],
    ],
    jaw: "M230 125l8 13 12 1m-20-14 2 19-3 9",
  },
  {
    joints: [
      [86, 176],
      [121, 113],
      [202, 127],
      [238, 153],
    ],
    jaw: "M238 153l-6 14 3 9m3-23 13 9 3 9",
  },
  {
    joints: [
      [86, 176],
      [124, 105],
      [208, 93],
      [251, 112],
    ],
    jaw: "M251 112l8 11 11 1m-19-12 3 16-2 8",
  },
];
const productionRobot = plate(
  ["Un bras et un outil", "La pièce doit être positionnée", "Le poste inclut un contrôle"],
  (s, id) => {
    const pose = alignments[s]!;
    const path = pose.joints.map(([x, y], i) => (i > 0 ? "L" : "M") + x + " " + y).join("");
    return [
      <defs key="robot-materials">
        {gradient(
          id + "-painted-arm",
          [
            [0, "#8a5f30"],
            [0.25, "#d6a85b"],
            [0.49, "#f1d08a"],
            [0.8, "#b58045"],
            [1, "#79512c"],
          ],
          true,
        )}
      </defs>,
      shadow(id, 174, 227, 144, 10),
      filled(id, "M35 196l35-17h252l-20 34H35Z", "graphite", "engraving"),
      filled(id, "M35 202h267v19H35Z", "steel", "engraving"),
      ...[45, 66, 85, 110, 137, 162, 192, 218, 244, 276, 290].map((x) =>
        oval(x, 211, 2.05, 2.05, "#d4c0a1", "#596a68"),
      ),
      fillPath("M55 175q28-10 56-3v26H55Z", `url(#${id}-steel)`),
      oval(83, 176, 26, 6, "#a19e84"),
      stroke(path, "#514537", 24),
      stroke(path, `url(#${id}-painted-arm)`, 20),
      stroke(path, "#e1b572", 2.6),
      ...pose.joints.map(([x, y], i) => [
        round(id, x!, y!, i < 2 ? 11 : 8, "steel"),
        oval(x!, y!, i < 2 ? 6.6 : 4.7, i < 2 ? 6.6 : 4.7, "#646c62", "#d2c8a9"),
        ...[
          [-4, -3],
          [3, 4],
        ].map(([a, b]) => oval(x! + a!, y! + b!, 1.3, 1.3, "#ded2ad", "#89806c")),
      ]),
      stroke(pose.jaw, "#414e4b", 4.4),
      stroke(pose.jaw, "#a0a58f", 2.08),
      ...[177, 221, 265].map((x, i) => [
        fillPath(`M${x} 187l9-10h27l-9 10v12h-27Z`, `url(#${id}-${i === s ? "brass" : "steel"})`),
        stroke(`M${x + 4} 194h19m-14-13h12`, "#ddd0a6", 0.78),
      ]),
      s === 0 && [call(273, 75, "Préhenseur", "M266 80l-28 56", active), pin(239, 136, active)],
      s === 1 && [call(268, 89, "Support", "M262 94l-29 94", flow), pin(233, 188, flow)],
      s === 2 && [
        block(303, 113, 22, 18, `url(#${id}-steel)`),
        oval(307, 121, 3.9, 3.9, "#506e6a"),
        stroke("M306 128l-34 51m34-51-13 51", flow, 1.1, "4 3"),
        label(282, 81, "Inspection", flow),
      ],
    ];
  },
);

export const fieldRefinements = {
  editionFishTrophic: fishTrophic,
  editionNitrogenReturn: nitrogenReturn,
  editionPlumeExposure: plumeExposure,
  editionProductionRobot: productionRobot,
};
