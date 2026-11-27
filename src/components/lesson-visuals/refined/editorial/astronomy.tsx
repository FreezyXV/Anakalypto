import {
  type Study,
  block,
  cold,
  dark,
  duct,
  fillPath,
  forest,
  heat,
  label,
  moved,
  oval,
  paint,
  panel,
  stream,
  stroke,
  surface,
  tile,
} from "./art";

const cream = "#f4e7c1",
  cyan = "#b1dcd0",
  amber = "#e6bf78";

function nightLabel(x: number, y: number, text: string) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={cream}
      fontSize="18"
      fontWeight="650"
      paintOrder="stroke"
      stroke="#1b2e39"
      strokeWidth="1.8"
      strokeLinejoin="round"
    >
      {text}
    </text>
  );
}

function night(id: string) {
  return [
    <defs key="sky-paints">
      <linearGradient id={id + "-cosmos"} x2=".28" y2="1">
        <stop stopColor="#284857" />
        <stop offset="1" stopColor="#172734" />
      </linearGradient>
      <radialGradient id={id + "-sunlight"} cx=".37" cy=".35">
        <stop stopColor="#f5e8b0" />
        <stop offset=".62" stopColor="#d7a663" />
        <stop offset="1" stopColor="#886147" />
      </radialGradient>
      <radialGradient id={id + "-planet"} cx=".37" cy=".32">
        <stop stopColor="#a4cbb7" />
        <stop offset=".64" stopColor="#5e8b89" />
        <stop offset="1" stopColor="#355768" />
      </radialGradient>
      <radialGradient id={id + "-halo"}>
        <stop stopColor="#deb883" stopOpacity=".5" />
        <stop offset="1" stopColor="#deb883" stopOpacity="0" />
      </radialGradient>
    </defs>,
    block(19, 45, 322, 135, `url(#${id}-cosmos)`, "#557783", 10),
    ...Array.from({ length: 39 }, (_, i) =>
      oval(
        27 + ((i * 47) % 304),
        53 + ((i * 29 + 12) % 117),
        i % 9 === 0 ? 1.18 : 0.57,
        i % 9 === 0 ? 1.18 : 0.57,
        i % 4 ? "#68817f" : "#b3c5a9",
        "none",
      ),
    ),
  ];
}

function globe(id: string, x: number, y: number, r: number, type: "earth" | "moon" | "sun") {
  return moved(x, y, [
    type === "sun" && oval(0, 0, r * 1.6, r * 1.6, `url(#${id}-halo)`, "none"),
    oval(
      0,
      0,
      r,
      r,
      `url(#${id}-${type === "sun" ? "sunlight" : "planet"})`,
      type === "sun" ? "#d0a878" : "#a2b3a5",
    ),
    type === "earth"
      ? moved(
          0,
          0,
          [
            fillPath(
              "M-16-11l7-7 12 4 4 7-5 5-6 10-7 1-4-10Zm21 3 8-7 6 6 1 11-5 7-6-4-6-9Z",
              "#aab58a",
              "#78967d",
              0.86,
            ),
            stroke("M-13 12q14 6 25-2m-30-14q15-9 31-5", "#a9c5b0", 1.01),
          ],
          r / 22,
        )
      : type === "moon"
        ? moved(
            0,
            0,
            [
              oval(-7, -8, 5, 4, "#607a7d", "#a5aa95"),
              oval(7, 7, 5, 3.8, "#526e72", "#9aab9e"),
              stroke("M-14 3q17 8 26-2m-15-9q7 1 14 6", "#aab59e", 0.94),
            ],
            r / 22,
          )
        : moved(
            0,
            0,
            [
              stroke("M-14 2q6-12 15-6 5 5 14-1m-21 11q9 3 14-4", "#efd49b", 1.36),
              oval(9, -9, 4, 2, "#d4ac70", "none"),
            ],
            r / 22,
          ),
  ]);
}

function asteroid(id: string, x: number, y: number, r: number, tail = false) {
  return moved(
    x,
    y,
    [
      tail && [
        fillPath("M6-9q55-8 106-45Q80-18 25 6L5 9Z", "#889ea0", "#829891", 0.75),
        stroke("M9-2q73-6 135-29", "#a3c9b9", 1.95),
      ],
      surface(id, "M-21-3l10-17 19-4 18 13-1 22-18 13-23-8Z", "iron", 1.1),
      fillPath("M-15-4l8-10 15-3 7 11 2 11-11 11-16-5Z", "#a7aa8f", "#75857b", 0.9),
      stroke("M-9-5l11-6 5 15 11 5m-28 3 8-3", "#637571", 1.34),
      ...[
        [-8, 4],
        [12, -9],
        [2, -2],
      ].map(([x, y]) => oval(x!, y!, 2.5, 2, "#627970", "#96a28d")),
    ],
    r / 22,
  );
}

function capsule(id: string, x: number, y: number, scale: number, rotate = 0) {
  return moved(
    x,
    y,
    [
      <g key="capsule" transform={`rotate(${rotate})`}>
        {surface(id, "M-32 1l14-17h11l15 17 26 1v18h-66Z", "steel", 1)}
        {surface(id, "M-33 10h34v10h-34Z", "iron", 1)}
        {surface(id, "M-11-12l10 9h-10Z", "glass", 0.71)}
        {stroke("M7 6h21m-43 2h11m22 13h8", "#d9dac0", 1.32)}
      </g>,
    ],
    scale,
  );
}

function satellite(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      ...[-51, 17].map((t) => [
        surface(id, `M${t} -14h36v32h-36Z`, "glass", 0.98),
        stroke(`M${t + 3} -5h30m-30 8h30m-30 7h30`, "#b7c8ac", 1.15),
      ]),
      surface(id, "M-17-16l9-8h18l7 8v43h-34Z", "steel", 1.1),
      oval(1, -17, 13, 7, paint(id, "copper"), dark),
      stroke("M2-22v-13m-9 57h18", "#e5dec1", 1.32),
    ],
    scale,
  );
}

function hexagon(x: number, y: number, r: number) {
  return (
    "M" +
    Array.from(
      { length: 6 },
      (_, i) =>
        `${(x + r * Math.cos((i * Math.PI) / 3)).toFixed(2)} ${(y + r * Math.sin((i * Math.PI) / 3)).toFixed(2)}`,
    ).join("L") +
    "Z"
  );
}

const mirror = (id: string) =>
  [-2, -1, 0, 1, 2].flatMap((a) =>
    [-2, -1, 0, 1, 2]
      .filter((b) => Math.abs(a + b) <= 2 && (a !== 0 || b !== 0))
      .map((b) =>
        surface(id, hexagon(179 + a * 20.8, 110 + b * 24 + a * 12, 13.3), "copper", 0.75),
      ),
  );

export const astronomyStudies = {
  interferometer: {
    foot: [
      "Le séparateur crée deux trajets",
      "Les longueurs changent différemment",
      "Les faisceaux se recombinent",
    ],
    draw: (s, id) => [
      panel(id, 47, 63, 269, 104, "iron"),
      surface(id, "M64 118h49v22H64Z", "steel"),
      surface(id, "M175 110l18-14 17 14-17 17Z", "glass", 1.1),
      stroke(s === 1 ? "M111 128h78l4-16V76m0 36h93" : "M111 128h78l4-16V71m0 41h85", heat, 2.1),
      stroke("M181 70h24m74 28v25", paint(id, "copper"), 4.4),
      s === 2
        ? [stroke("M192 116v34m0-4q12-8 24 0t23 0", forest, 1.9), nightLabel(259, 153, "Détecteur")]
        : [nightLabel(101, 91, "Laser"), nightLabel(245, 91, s === 1 ? "Décalage" : "Miroirs")],
    ],
  },
  aurora: {
    foot: [
      "Le vent solaire perturbe l’environnement",
      "Le champ guide des particules",
      "Le gaz excité émet de la lumière",
    ],
    draw: (s, id) => [
      ...night(id),
      globe(id, 206, 117, 43, "earth"),
      ...[0, 1, 2, 3].map((i) =>
        stroke(
          `M201 76C${77 + i * 26} ${49 + i * 9},${56 + i * 16} ${147 + i * 5},211 158`,
          s > 0 ? cyan : "#74a3a0",
          1.22,
        ),
      ),
      s === 0
        ? [
            stream(40, 90, 111, 90, amber),
            stream(40, 112, 101, 112, amber),
            nightLabel(82, 73, "Vent solaire"),
          ]
        : s === 1
          ? [stream(136, 102, 168, 86, amber), nightLabel(121, 153, "Particules")]
          : [
              stroke("M171 92q33-37 71-3m-70 3q38-27 71-1m-64-8q32-29 53-2", "#b0d6aa", 3.3),
              nightLabel(278, 65, "Aurore"),
            ],
    ],
  },
  starlife: {
    foot: [
      "La masse change le parcours",
      "Le combustible et la structure évoluent",
      "Les restes diffèrent selon l’étoile",
    ],
    draw: (s, id) => [
      ...night(id),
      ...(s < 2
        ? [
            globe(id, 98, 115, s === 0 ? 23 : 33, "sun"),
            globe(id, 259, 113, s === 0 ? 35 : 49, "sun"),
          ]
        : [
            globe(id, 98, 115, 13, "moon"),
            oval(259, 113, 24, 24, "#16212a", "#ad9c78"),
            oval(259, 113, 32, 12, "none", "#d0aa70"),
          ]),
      s === 1 && [
        oval(98, 115, 43, 43, "none", "#ab8a63"),
        oval(259, 113, 55, 55, "none", "#cf9965"),
      ],
      nightLabel(98, 166, s === 2 ? "Naine blanche" : "Type solaire"),
      nightLabel(259, 170, s === 2 ? "Un trou noir possible" : "Étoile massive"),
    ],
  },
  blackhole: {
    foot: [
      "L’horizon marque le non-retour",
      "Le disque chaud peut briller",
      "L’orbite trahit une masse invisible",
    ],
    draw: (s, id) => [
      ...night(id),
      oval(181, 113, 34, 34, "#101a23", "#627b83"),
      s === 0
        ? [
            oval(181, 113, 37, 37, "none", "#a7c7ba"),
            nightLabel(268, 80, "Horizon"),
            stroke("M244 84l-35 16", cyan, 1.2),
          ]
        : s === 1
          ? [
              oval(181, 114, 74, 19, `url(#${id}-sunlight)`, "#bf9c64"),
              oval(181, 109, 33, 28, "#111c24", "#a88b62"),
              stroke("M112 120q63 24 135 0", amber, 2.4),
              nightLabel(269, 77, "Disque chaud"),
            ]
          : [
              oval(184, 115, 113, 37, "none", "#779b99"),
              globe(id, 277, 94, 12, "sun"),
              nightLabel(81, 76, "Orbite"),
            ],
    ],
  },
  heliosphere: {
    foot: [
      "Le vent solaire remplit cette région",
      "La frontière est l’héliopause",
      "La sonde mesure au-delà",
    ],
    draw: (s, id) => [
      ...night(id),
      fillPath(
        "M56 117q11-60 84-60 51 3 73 18l69 8 30 29-8 32-87 5q-60 29-113 15-40-14-48-47Z",
        "#395e61",
        "#698f8a",
        1.6,
      ),
      globe(id, 128, 112, 16, "sun"),
      s === 0
        ? [
            stream(150, 112, 223, 112, amber),
            stream(127, 90, 124, 70, amber),
            stream(99, 125, 78, 137, amber),
          ]
        : s === 1
          ? [
              stroke("M56 117q11-60 84-60 51 3 73 18l69 8 30 29", cyan, 2.2),
              nightLabel(241, 70, "Héliopause"),
            ]
          : [satellite(id, 326, 142, 0.25), nightLabel(247, 66, "Milieu interstellaire")],
    ],
  },
  webb: {
    foot: [
      "Dix-huit segments collectent la lumière",
      "Cinq couches forment le pare-soleil",
      "Les instruments sont du côté froid",
    ],
    draw: (s, id) => [
      ...night(id),
      s === 0
        ? [...mirror(id), nightLabel(282, 66, "Miroir")]
        : s === 1
          ? [
              ...Array.from({ length: 5 }, (_, i) =>
                surface(
                  id,
                  `M78 ${139 - i * 13}l65-19h103l41 18-61 17H128Z`,
                  i % 2 ? "steel" : "glass",
                  1.15,
                ),
              ),
              nightLabel(278, 72, "Couches"),
            ]
          : [
              ...Array.from({ length: 5 }, (_, i) =>
                surface(id, `M65 ${140 + i * 4}l60-20h146l24 18-52 15H115Z`, "steel", 0.74),
              ),
              moved(56, 15, mirror(id), 0.69),
              globe(id, 62, 148, 18, "sun"),
              nightLabel(264, 78, "Côté froid"),
              nightLabel(262, 174, "Côté chaud"),
            ],
    ],
  },
  moonflight: {
    foot: [
      "Orion quitte le voisinage terrestre",
      "Le vaisseau passe près de la Lune",
      "La capsule revient vers la Terre",
    ],
    draw: (s, id) => [
      ...night(id),
      globe(id, 82, 120, 23, "earth"),
      globe(id, 269, 109, 19, "moon"),
      stroke(
        s === 0
          ? "M105 118Q173 65 254 104"
          : s === 1
            ? "M103 112Q184 56 270 82q51 23 5 52-55 22-96-19"
            : "M268 122Q200 172 110 133",
        amber,
        2.05,
      ),
      capsule(id, [167, 300, 155][s]!, [91, 103, 145][s]!, 0.54, [-16, 55, -158][s]!),
      nightLabel(83, 162, "Terre"),
      nightLabel(266, 152, "Lune"),
    ],
  },
  isslife: {
    foot: [
      "L’eau est traitée avant réemploi",
      "L’électricité sépare les constituants",
      "L’appareil retire le CO₂ de l’air",
    ],
    draw: (s, id) => [
      surface(id, "M39 93q0-24 33-29h207q39 4 39 30v45q-4 30-42 33H72q-33-4-33-29Z", "steel", 1.25),
      surface(id, "M49 105h259v47H49Z", "cream", 1.09),
      duct("M80 139h200", s === 0 ? cold : s === 1 ? forest : heat, false),
      ...[72, 152, 231].map((x, i) => [
        panel(id, x, 87, 55, 59, i === s ? "copper" : "glass"),
        stroke(`M${x + 4} 133h47m-38 7h30`, "#e2d8af", 1.35),
      ]),
      s === 0 && [
        fillPath("M84 118q13-9 30-1v9H84Z", "#629e9c", "#405b62", 1),
        stroke("M97 91v19m11-19v19", "#ede0ba", 2),
        stream(106, 151, 148, 151, cold),
        label(101, 80, "Filtration", cold),
        label(244, 154, "Eau traitée", cold),
      ],
      s === 1 && [
        stroke("M163 99v26m32-26v26", "#eee1b8", 2.4),
        ...[168, 178, 187].map((x, i) => oval(x, 115 - i * 7, 3.2, 3.6, "#d4dfcb", "#53736c")),
        stream(203, 111, 226, 111, forest),
        label(177, 80, "Électrolyse", forest),
        label(256, 111, "O₂", forest),
      ],
      s === 2 && [
        ...[243, 250, 257, 264].map((x) => stroke(`M${x} 94l-2 34`, "#e5cb9a", 1.4)),
        stream(200, 113, 227, 113, forest),
        stream(285, 116, 305, 116, forest),
        label(247, 80, "Captage du CO₂", heat),
        label(141, 116, "Air", forest),
      ],
    ],
  },
  readaptation: {
    foot: [
      "Les appuis sollicitent les muscles",
      "En orbite, les appuis diminuent",
      "Au retour, les appuis se réapprennent",
    ],
    draw: (s, id) => [
      ...(s === 1 ? night(id) : [tile(id, 44, 154, 274, 18, "steel", 12)]),
      moved(172, s === 1 ? 113 : 119, [
        <g key="body" transform={`rotate(${s === 1 ? 52 : 0})`}>
          {surface(id, "M-24-32l12-5 34 3 2 50-8 4h-36l-7-10Z", "iron", 1)}
          {surface(
            id,
            "M-16-35q16-10 34 0l11 12 4 25-8 7-9-3-7-25 3 21 5 14 5 26-1 13H6l-4-17-2-18-5 17-5 19h-15l-2-12 6-25 8-16 2-23-8 22-10 4-6-10 6-24Z",
            "steel",
            1.15,
          )}
          {surface(id, "M-17-43q-9-22 8-30 20-9 29 9 5 13-5 24-18 6-32-3Z", "cream", 1.12)}
          {fillPath("M-12-58q11-11 27-1l-1 12q-11 6-23-2Z", "#567b7b", "#435b54", 1.1)}
          {stroke(
            "M-8-56q8-6 16-2m-11 24v29m-13-3h27m-20 1-15 24m29-20 13 23m-68-8 14 3m46-1 14 1",
            "#c5d0ae",
            1.5,
          )}
          {surface(id, "M-12-30h24v17h-24Z", "glass", 0.75)}
          {stroke("M-6-25h10m-9 5h4m4 0h4m-29 65h12m21-1h12", "#ecdfb9", 1.1)}
        </g>,
      ]),
      s === 1
        ? [stream(219, 126, 207, 100, cyan), nightLabel(272, 75, "Fluides")]
        : [
            stream(130, 116, 130, 149, forest),
            s === 2 && [
              stroke("M215 149V105h62v44", "#567472", 5),
              stroke("M216 105h60", "#c5d0ae", 1.7),
            ],
            label(265, 79, s === 2 ? "Équilibre" : "Appuis", cold),
          ],
    ],
  },
  infrared: {
    foot: [
      "Les longueurs d’onde diffèrent",
      "Certaines ondes traversent la poussière",
      "Un objet froid peut rayonner",
    ],
    draw: (s, id) => [
      ...night(id),
      s === 0
        ? [
            stroke(
              "M52 86q8-15 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0",
              cyan,
              1.65,
            ),
            stroke("M52 133q28-20 56 0t56 0 56 0 56 0", amber, 2.05),
            nightLabel(284, 80, "Visible"),
            nightLabel(288, 159, "Infrarouge"),
          ]
        : s === 1
          ? [
              globe(id, 63, 101, 14, "sun"),
              ...[125, 151, 179, 204].map((x, i) => (
                <ellipse
                  key={x}
                  cx={x}
                  cy={99 + (i % 2) * 13}
                  rx="29"
                  ry="28"
                  fill="#849496"
                  opacity=".34"
                />
              )),
              stroke("M78 92h73m-73 26h213", amber, 2.0),
              nightLabel(263, 75, "Poussière"),
            ]
          : [
              globe(id, 166, 108, 31, "moon"),
              stroke("M199 97q13 6 22 0t19 0 22 0m-63 21q13 6 22 0t19 0 22 0", amber, 1.9),
              nightLabel(110, 162, "Objet froid"),
            ],
    ],
  },
  smallbodies: {
    foot: [
      "Un petit corps rocheux ou métallique",
      "La chaleur fait dégazer la comète",
      "La météorite est le fragment au sol",
    ],
    draw: (s, id) => [
      ...night(id),
      s < 2
        ? [
            globe(id, 82, 122, 17, "sun"),
            asteroid(id, 163, 108, s === 0 ? 32 : 22, s === 1),
            nightLabel(268, 153, s === 0 ? "Roche" : "Queue"),
          ]
        : [
            fillPath("M20 157q159-44 320 0v22H20Z", "#71998e", "#94b4a1", 1.0),
            stroke("M74 67l116 73", amber, 3.8),
            asteroid(id, 223, 155, 10, false),
            nightLabel(241, 74, "Météore"),
          ],
    ],
  },
  comet: {
    foot: [
      "Le noyau est peu actif au loin",
      "Gaz et poussière forment des queues",
      "La queue ionique s’oppose au Soleil",
    ],
    draw: (s, id) => [
      ...night(id),
      globe(id, 104, 114, 25, "sun"),
      stroke("M171 153Q125 113 165 83q41-31 137 8", cyan, 1.1, "4 3"),
      s === 0
        ? [asteroid(id, 273, 86, 16), nightLabel(270, 156, "Noyau")]
        : [
            moved(s === 1 ? 160 : 196, s === 1 ? 101 : 114, [asteroid(id, 0, 0, 19, true)], 0.97),
            nightLabel(249, 154, s === 1 ? "Gaz et poussière" : "Queue ionique"),
          ],
    ],
  },
} satisfies Record<string, Study>;
