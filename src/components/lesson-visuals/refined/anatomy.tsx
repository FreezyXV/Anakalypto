import {
  active,
  arrow,
  block,
  call,
  fillPath,
  filled,
  flow,
  harm,
  ink,
  label,
  layers,
  oval,
  shadow,
  stroke,
} from "../detail100/plate";
import { plate } from "../edition100/craft";
import { clip, gradient, pin, position } from "./material";

const heartOutline =
  "M95 115C69 92 44 117 44 143c0 25 12 50 38 66 23 14 49 18 70 27 17 7 28-14 28-41 0-23-9-53-25-67-18-15-39-21-60-13Z";
const follicle =
  "M206 111c-19 20-30 52-59 70-18 10-35 33-21 49 11 13 39 5 54-3 16-9 14-29 17-44 4-24 13-45 24-67Z";
const hair =
  "M151 220c-7-10 3-27 21-45 19-20 23-38 38-64 17-28 39-48 61-52-23 13-41 35-49 57-10 28-13 52-30 72-13 17-27 38-41 32Z";

function humanHeart(id: string) {
  return [
    <defs key="cardiac-materials">
      {gradient(
        id + "-striated-heart",
        [
          [0, "#713e35"],
          [0.28, "#bc806a"],
          [0.45, "#e8b59b"],
          [0.64, "#b67361"],
          [1, "#613833"],
        ],
        true,
      )}
      {gradient(id + "-large-artery", [
        [0, "#793d38"],
        [0.36, "#d18e73"],
        [0.56, "#f0b89b"],
        [1, "#7f473e"],
      ])}
      {gradient(id + "-vein-wall", [
        [0, "#4f6269"],
        [0.42, "#aabcc0"],
        [0.64, "#7a98a1"],
        [1, "#394f5a"],
      ])}
    </defs>,
    shadow(id, 108, 233, 85, 11),
    fillPath("M52 87q13-8 22 0l3 113q-11 11-27 0Z", `url(#${id}-vein-wall)`, ink, 1.3),
    oval(63, 87, 11, 4.7, "#53676c", ink),
    oval(63, 87, 7.3, 2.4, "#343c42", "#8ba4a7"),
    fillPath(
      "M86 132c-10-14-12-29-6-44 2-6 7-13 14-17l-5-13 11-4 9 14 13-2 2-13 11 1 1 13 9 4 9-10 11 5-7 12c12 10 16 26 19 39l-25 5c0-23-7-37-22-39-20-2-29 15-24 39Z",
      `url(#${id}-large-artery)`,
      "#65443c",
      1.3,
    ),
    ...[
      [95, 56, 6],
      [129, 54, 5.6],
      [159, 64, 6.1],
    ].map(([x, y, r]) => oval(x!, y!, r!, 2.35, "#854d43", "#673e37")),
    stroke("M88 118c-7-26 7-43 29-46 17-2 31 6 40 21", "#ebb092", 2),
    fillPath(heartOutline, `url(#${id}-striated-heart)`, "#5c3c39", 1.55),
    clip(
      id + "-cardiac-fibres",
      heartOutline,
      layers(
        Array.from({ length: 104 }, (_, i) => {
          const x = 41 + position(i, 2) * 143,
            y = 109 + position(i, 5) * 127;
          const length = 4 + position(i, 1) * 18;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q${(length * 0.61).toFixed(1)} -4 ${length.toFixed(1)} ${(position(i, 3) * 5).toFixed(1)}`,
            ["#eac3a1", "#874c43", "#8b4f48", "#cea688"][i % 4]!,
            0.6 + position(i, 8) * 0.21,
          );
        }),
      ),
    ),
    fillPath(
      "M49 138c-6-13 2-28 16-32 15-5 25 6 32 9 5 2 14 2 12 11-1 6-16 9-25 8s-15 17-26 17Z",
      `url(#${id}-striated-heart)`,
      "#774d42",
    ),
    fillPath(
      "M115 112q9-22 40-22l25-5 3 9-25 10 27 9-4 10-28-9c-9 1-13 22-25 24l-17-2Z",
      `url(#${id}-vein-wall)`,
      ink,
      1.24,
    ),
    stroke("M123 127q7-24 29-27l28-11", "#c5d3ca", 2),
    oval(181, 90, 3.8, 5.1, "#4d6067", "#6d7f82"),
    oval(183, 118, 3.5, 5.2, "#41535c", "#869da1"),
    stroke("M151 121q-8 15-28 23-11 7-9 22l16 35 5 25", "#b98c67", 7.4),
    stroke(
      "M151 121q-8 15-28 23-11 7-9 22l16 35 5 25m-13-73q-29 1-45 28m42-5q21 4 33 18",
      "#6f4439",
      3.65,
    ),
    stroke(
      "M151 121q-8 15-28 23-11 7-9 22l16 35 5 25m-13-73q-29 1-45 28m42-5q21 4 33 18",
      "#cf8069",
      1.65,
    ),
    stroke("M126 152q-13 6-7 16l18 37 7 16m-21-38q-17 1-19 18m37-41q17-1 23 11", "#6a8491", 1.45),
    stroke("M58 156q11-15 32-19m-24 57q19 16 40 17m65-13q0 23-12 30", "#e7b497", 1.35),
  ];
}

const heartSignal = plate(
  ["Activité désordonnée", "Interruption par le choc", "Un rythme peut reprendre"],
  (s, id) => [
    ...humanHeart(id),
    filled(id, "M210 101l8-8h104l12 10v89l-8 7H210Z", "graphite", "engraving"),
    block(218, 105, 107, 74, "#d6ddd1", "#414c49", 3),
    ...[117, 129, 141, 153, 165].map((y) => stroke(`M222 ${y}h100`, "#a2b3a5", 0.65)),
    ...[232, 249, 266, 283, 300, 317].map((x) => stroke(`M${x} 109v65`, "#a2b3a5", 0.55)),
    oval(316, 188, 2.5, 2.5, s === 1 ? "#c69b48" : "#87a387"),
    label(270, 88, "Signal électrique"),
    s === 0 && [
      stroke(
        "M221 148l5-8 4 10 5-23 4 25 5-9 5 7 5-13 3 9 4-21 4 32 4-17 4 13 5-10 6 15 3-10 4 4 3-18 4 25 6-16 5 9 5-8 4 4",
        harm,
        2,
      ),
      ...[
        [89, 157, 117, 166],
        [145, 181, 125, 155],
        [97, 202, 109, 184],
      ].map(([x, y, a, b]) => arrow(x!, y!, a!, b!, "#f9d99d", true)),
    ],
    s === 1 && [
      stroke("M222 143l4-9 3 14 6-17 4 19 7-7 6 2h13m19 0h36", harm, 1.9),
      stroke("M276 108v65", "#a57134", 1.5, "3 3"),
      fillPath("M270 122l9-16-2 14h5l-10 15 2-13Z", "#e8b653", "#77532a", 0.8),
      oval(113, 169, 26, 38, "none", "#f8d4a0"),
      oval(113, 169, 31, 43, "none", "#fce2b3"),
    ],
    s === 2 && [
      stroke(
        "M222 146h6q5-7 10 0h4l3 5 5-24 4 24 6-5h8q6-10 12 0h8q5-7 10 0h3l4 4 4-23 4 23 5-4h3",
        flow,
        2.15,
      ),
      arrow(94, 159, 112, 175, "#f8dca6", true),
      arrow(112, 175, 144, 210, "#f8dca6", true),
    ],
  ],
);

const hairFollicle = plate(
  ["Tissu vivant autour du bulbe", "La fibre se forme près du bulbe"],
  (s, id) => [
    <defs key="scalp-materials">
      {gradient(
        id + "-dermis",
        [
          [0, "#eabe9f"],
          [0.57, "#cd9780"],
          [1, "#a06b5b"],
        ],
        true,
      )}
      {gradient(id + "-scalp-hair", [
        [0, "#3e2d27"],
        [0.36, "#80563f"],
        [0.55, "#ae7f53"],
        [0.78, "#704a37"],
        [1, "#3b2b26"],
      ])}
      {gradient(id + "-sleeve", [
        [0, "#a65f56"],
        [0.45, "#e6b098"],
        [1, "#80473e"],
      ])}
    </defs>,
    shadow(id, 182, 224, 145, 10),
    fillPath("M32 130l26-17 252-5 17 9-29 16Z", "#e1bb93", "#865f51", 1.15),
    fillPath("M297 129l30-12v92l-30 19Z", "#a27662", "#664c42"),
    fillPath("M32 129q70-5 131-2t135 2v99H32Z", `url(#${id}-dermis)`, "#816052"),
    fillPath(
      "M32 131q89-8 155-2t111 0v15q-16 9-26 5t-31 0-34 0-25 0-19 0-28-1-26 1-21-1-22 1-28-2-28 4Z",
      "#edc1a6",
      "#b17966",
      1,
    ),
    ...Array.from({ length: 110 }, (_, i) => {
      const x = 36 + position(i, 8) * 260,
        y = 151 + position(i, 4) * 62;
      return stroke(
        `M${x.toFixed(1)} ${y.toFixed(1)}q4-3 11-1`,
        i % 2 ? "#a97866" : "#f2c6a9",
        0.62,
      );
    }),
    ...[50, 72, 93, 115, 137, 159, 182, 205, 228, 251, 274, 293].map((x, i) =>
      oval(x, 137 + (i % 3) * 2, 4.2, 1.4, "#b1796a", "#af7866"),
    ),
    fillPath("M32 214q20-10 44 0t45 0 42 0 42 0 45 0 48-1v15H32Z", "#d9a95c", "#936d46"),
    ...[43, 64, 85, 107, 128, 221, 242, 263, 284].map((x, i) =>
      oval(x, 220, 9 + (i % 2), 5.3, "#e0b778", "#a77e52"),
    ),
    stroke("M40 204q18-20 42-17t47 22m-44-20q14-18 40-28m46 65q41-20 82-21l41-19", "#6a7f89", 2.5),
    stroke("M39 219q37-15 57-8l44 9m26-3q34-30 69-19t55-20", "#a6534c", 2.65),
    fillPath(follicle, `url(#${id}-sleeve)`, "#7b5548", 1.3),
    stroke("M208 125q-17 31-31 49c-12 15-35 28-31 42 5 15 26 5 34-4", "#f1ceb1", 2.8),
    fillPath(hair, `url(#${id}-scalp-hair)`, "#47362b", 1.12),
    stroke("M160 214q16-26 35-53t41-79", "#d1a477", 1.1),
    stroke("M156 218q16-27 36-54t47-85m-56 105q21-24 36-60", "#402f29", 0.64),
    fillPath("M152 221c-1-10 4-14 10-15 9-1 13 6 14 14-7 6-14 7-24 1Z", "#e7ab90", "#965c51", 0.95),
    stroke("M159 224q-3-7 3-12m4 10 2-9", "#946b63", 0.9),
    ...[
      [217, 152],
      [224, 146],
      [230, 150],
      [230, 157],
      [221, 158],
      [218, 161],
    ].map(([x, y]) => oval(x!, y!, 5.4, 4.5, `url(#${id}-brass)`, "#92664d")),
    stroke("M208 156l12-2m-22 36 63-40", "#91574e", 3.9),
    stroke("M198 190l63-40", "#ce8977", 2),
    s === 0 && [
      call(67, 89, "Follicule", "M68 95l22 36 45 72", harm),
      call(88, 188, "Bulbe", "M105 193l43 17", harm),
      pin(148, 210, harm),
    ],
    s === 1 && [
      call(290, 85, "Tige", "M279 89l-43-13", active),
      call(80, 188, "Matrice", "M101 193l54 13", active),
      pin(155, 205, active),
      arrow(178, 192, 209, 140, flow, true),
    ],
  ],
);

function villusPath(x: number, apex: number) {
  return `M${x} 206C${x + 12} 184 ${x + 7} ${apex} ${x + 20} ${apex}
    C${x + 35} ${apex - 1} ${x + 28} 179 ${x + 42} 206Z`;
}

const glutenVillous = plate(["Villosités élancées", "Relief fortement réduit"], (s, id) => [
  <defs key="intestinal-materials">
    {gradient(
      id + "-villus-wall",
      [
        [0, "#f0ba9e"],
        [0.49, "#e0a184"],
        [0.75, "#bd7f69"],
        [1, "#90544e"],
      ],
      true,
    )}
    {gradient(id + "-villus-core", [
      [0, "#bc7466"],
      [0.43, "#f5c2a4"],
      [0.65, "#f7d8b8"],
      [1, "#c8816e"],
    ])}
  </defs>,
  shadow(id, 177, 223, 155, 10),
  fillPath("M29 193l26-10 278 1-18 20v17H29Z", `url(#${id}-villus-wall)`, "#814b47", 1.05),
  fillPath("M315 195l18-11v30l-18 7Z", "#a26659", "#854d48"),
  ...[0, 1, 2, 3, 4, 5, 6].map((i) => {
    const x = 31 + i * 39,
      apex = s === 0 ? 109 + (i % 3) * 6 : 166 + (i % 3) * 3;
    const outline = s === 0 ? villusPath(x, apex) : `M${x} 206q10-6 11-22t12-10q10 3 12 19l9 13Z`;
    return [
      fillPath(outline, `url(#${id}-villus-core)`, "#9d5a50", 1.15),
      clip(
        id + "-epithelium-" + i,
        outline,
        layers([
          ...Array.from({ length: 31 }, (_, j) => {
            const a = x + position(j + i * 31, 3) * 42,
              b = apex - 7 + position(j + i * 31, 1) * (212 - apex);
            return oval(a, b, 1.1, 0.8, "#af7365", "#cc8f7b");
          }),
          stroke(
            `M${x + 15} 205q-1-${s === 0 ? 36 : 13} 7-${s === 0 ? 67 : 29}q7 1 5 ${s === 0 ? 35 : 13}l3 ${s === 0 ? 35 : 20}`,
            "#b85c52",
            1.18,
          ),
          stroke(`M${x + 20} 204q3-13 2-${s === 0 ? 64 : 24}`, "#7b8c91", 0.9),
          stroke(
            `M${x + 7} 198q6-${s === 0 ? 29 : 9} 8-${s === 0 ? 66 : 23}`,
            "#f4d0b1",
            1.25,
            "1.7 2",
          ),
        ]),
      ),
    ];
  }),
  stroke("M32 209q57-6 136-2t143 2", "#ac645a", 1.9),
  stroke("M34 216q54 5 132 0t146 0", "#ebad8f", 1.1),
  s === 0 && [
    label(78, 83, "Lumière", flow),
    call(230, 79, "Villosité", "M226 86l-12 30", harm),
    pin(214, 116, harm),
  ],
  s === 1 && [
    call(174, 89, "Villosités aplaties", "M179 97l43 77", harm),
    pin(222, 174, harm),
    stroke("M41 112h270", harm, 1.45, "4 4"),
    label(112, 139, "Ancien profil", harm),
  ],
]);

const skinOutline = "M30 101q53-15 94-7t80 0 110 6v112H30Z";
const skinBarrier = plate(
  [
    "Protection en surface",
    "Les cellules remontent vers la surface",
    "Les échanges traversent une barrière",
  ],
  (s, id) => [
    <defs key="barrier-materials">
      {gradient(
        id + "-barrier-wall",
        [
          [0, "#e9c29e"],
          [0.46, "#d49178"],
          [1, "#a66d66"],
        ],
        true,
      )}
      {gradient(
        id + "-skin-plate",
        [
          [0, "#f6d2aa"],
          [0.55, "#dca482"],
          [1, "#b57564"],
        ],
        true,
      )}
    </defs>,
    fillPath("M30 101l27-19 238 2 38 12-19 4Z", "#dfb791", "#865a4f"),
    fillPath("M314 100l19-4v102l-19 14Z", "#89584d", "#6c4a48"),
    fillPath(skinOutline, `url(#${id}-barrier-wall)`, "#81534d"),
    clip(
      id + "-stratified-epidermis",
      skinOutline,
      layers([
        ...[103, 112, 121, 133].flatMap((y, r) =>
          Array.from({ length: 15 }, (_, i) => {
            const x = 23 + i * 22 + (r % 2) * 10;
            return fillPath(
              `M${x} ${y}q11-4 21-1l-1 5q-8 5-20 2Z`,
              `url(#${id}-skin-plate)`,
              "#936757",
              0.75,
            );
          }),
        ),
        ...[147, 160, 174].flatMap((y, r) =>
          Array.from({ length: 13 }, (_, i) => {
            const x = 29 + i * 24 + (r % 2) * 11;
            return [
              oval(x, y + (i % 3) * 2, 11, 6.9, `url(#${id}-clay)`, "#a47363"),
              oval(x + 1, y + 1, 2.8, 1.9, "#a36b61", "#986a60"),
            ];
          }),
        ),
        stroke("M30 187q14-17 37-6t40 1 44-1 41 2 38-1 38 0 46-3", "#8f5451", 2.2),
        ...Array.from({ length: 52 }, (_, i) => {
          const x = 30 + position(i, 7) * 283,
            y = 187 + position(i, 5) * 26;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q4-4 13 1`,
            i % 2 ? "#ae7766" : "#edbb9a",
            0.75,
          );
        }),
        stroke("M36 204q36-16 74-8t65 0m35 9q38-19 95-8", "#a04f4e", 2.45),
        stroke("M54 208q37-13 75-6t61 0m56 2q24-9 55-5", "#67848c", 1.75),
      ]),
    ),
    s === 0 && [call(229, 77, "Couche cornée", "M227 84l-4 26", harm), pin(223, 110, harm)],
    s === 1 && [
      ...[97, 177, 242].map((x) => [
        stroke(`M${x} 180v-46`, "#f5e5c4", 4.15),
        arrow(x, 179, x, 135, flow),
      ]),
      call(180, 75, "Cellules renouvelées", "M173 82l3 37", flow),
    ],
    s === 2 && [
      label(167, 76, "Échanges avec le milieu", flow),
      arrow(103, 77, 101, 103, flow),
      arrow(238, 103, 237, 76, flow),
    ],
  ],
);

const finger = "M53 163q13-18 42-18l154 2q19 0 28 11t0 19q-8 11-30 12l-104 8-89 13Z";
const graspReflex = plate(["Contact sur la paume", "Les doigts se referment"], (s, id) => [
  <defs key="hands-material">
    {gradient(
      id + "-baby-hand",
      [
        [0, "#f0c3a2"],
        [0.35, "#eab291"],
        [0.68, "#c99176"],
        [1, "#9e6d5f"],
      ],
      true,
    )}
    {gradient(
      id + "-adult-index",
      [
        [0, "#bd8368"],
        [0.44, "#e8b791"],
        [0.71, "#eeca9b"],
        [1, "#ad765d"],
      ],
      true,
    )}
  </defs>,
  shadow(id, 174, 223, 126, 11),
  fillPath(
    s === 0
      ? "M146 228q-2-19-13-30-10-10-13-28-2-19 3-47 3-13 10-9 5 2 6 18l3 12 4-42q2-15 9-17 10-1 11 13l1 37 7-55q1-12 9-12 9 2 8 15l-1 51 9-40q2-11 10-10 9 3 7 14l-6 48 11-21q9-11 14-4 6 7-7 35-11 20-17 38t-3 31Z"
      : "M146 228q-2-19-13-30-10-10-13-28-3-19 9-33 10-10 21-1 18 2 38-5 18-7 32-1 16 7 11 28l-8 23q-10 18-14 32l-3 15Z",
    `url(#${id}-baby-hand)`,
    "#926354",
    1.28,
  ),
  stroke("M143 147q4 21 21 29m-4-33q5 11 21 11m9-17q11 6 16 3m-63 56q34 11 62-2", "#ae7969", 1.07),
  s === 0 &&
    [
      [154, 97],
      [181, 83],
      [208, 94],
      [230, 126],
    ].map(([x, y]) => oval(x!, y!, 4.1, 5.4, "#e9b291", "#bd8a75")),
  fillPath(finger, `url(#${id}-adult-index)`, "#9b6b53", 1.45),
  fillPath("M245 152q23-2 31 9l-3 10q-12 8-27 5-7-8-1-24Z", "#ecd1a3", "#b7836c", 1.1),
  stroke("M78 153q53-6 105 0m-91 41q41 0 71-7m81-10q12 2 27-6", "#eac49c", 1.1),
  stroke("M104 162q4 12 0 22m5-21q4 11 1 19", "#ad795c", 1),
  s === 0 && [call(281, 82, "Paume", "M269 87l-73 58", flow), pin(196, 145, flow)],
  s === 1 && [
    ...[0, 1, 2, 3].map((i) => {
      const x = 135 + i * 18,
        y = 134 - i * 2;
      return [
        fillPath(
          `M${x} ${y}q7-12 14-6 8 10 8 30v23q-4 10-12 8-7-1-7-12l-1-23q-7-10-2-20Z`,
          `url(#${id}-baby-hand)`,
          "#97675d",
          1.12,
        ),
        stroke(`M${x + 8} ${y + 28}q5-3 11 0m-11 4q6-2 11 1`, "#b27a68", 1),
      ];
    }),
    fillPath(
      "M214 171q-1-15 10-17 9-3 15 7t-1 22q-9 6-21 1Z",
      `url(#${id}-baby-hand)`,
      "#97675a",
      1.05,
    ),
    call(268, 90, "Doigts fléchis", "M252 96l-48 49", flow),
    pin(204, 145, flow),
  ],
]);

export const anatomyRefinements = {
  editionHeartSignal: heartSignal,
  editionHairFollicle: hairFollicle,
  editionGlutenVillous: glutenVillous,
  editionSkinBarrier: skinBarrier,
  editionGraspReflex: graspReflex,
};
