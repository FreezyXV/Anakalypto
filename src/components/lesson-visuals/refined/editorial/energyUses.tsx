import {
  type Study,
  block,
  cold,
  dark,
  duct,
  exchanger,
  fillPath,
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
  tank,
  tile,
} from "./art";

function cutHouse(id: string, x: number, y: number, scale = 1, wall = 0) {
  return moved(
    x,
    y,
    [
      grounding(id, 67, 103, 87),
      surface(id, "M3 42L66 2 146 41v62H3Z", "cream", 1.3),
      surface(id, "M-1 42L66-4 153 38h-15L66 7 11 43Z", "iron", 1.16),
      surface(id, "M17 49h112v46H17Z", "glass", 1),
      surface(
        id,
        `M6 48h${7 + wall}v54H6Zm${131 - wall} 0h${8 + wall}v54h-${8 + wall}Z`,
        wall ? "copper" : "steel",
        0.92,
      ),
      tile(id, 2, 95, 141, 11, "steel", 7),
      stroke("M17 76h111m-44-31v51", "#ddd5b1", 1.4),
      stroke("M4 98h138M20 88h50m16-28h40", "#859483", 1.15),
      ...[36, 51, 106, 119].map((t) => oval(t, 88, 2, 1.8, "#a3af93", "#8b947b")),
    ],
    scale,
  );
}

function solarPanel(id: string, x: number, y: number, w = 100, h = 44, scale = 1) {
  return moved(
    x,
    y,
    [
      surface(id, `M0 ${h}l17-${h}h${w - 17}l-9 ${h}Z`, "soot", 1.3),
      fillPath(`M5 ${h - 3}l15-${h - 6}h${w - 25}l-8 ${h - 6}Z`, "#557a7a", "#b0bca7", 0.9),
      ...Array.from({ length: 6 }, (_, i) =>
        stroke(`M${18 + (i * (w - 22)) / 6} 4l-${12 - i * 0.8} ${h - 8}`, "#a2b9ae", 0.86),
      ),
      stroke(`M14 ${h * 0.32}h${w - 21}m-4 ${h * 0.33}h${w - 17}`, "#a2b9ae", 0.92),
      surface(id, `M11 ${h}h5v15h-5Zm${w - 42} 0h5v15h-5Z`, "steel", 0.88),
    ],
    scale,
  );
}

function wallSlice(id: string, s: number, mass = false) {
  const width = mass ? 79 : 68;
  return [
    tile(id, 129, 66, width, 97, mass ? "cream" : "steel", 16),
    ...Array.from({ length: 5 }, (_, i) =>
      stroke(`M130 ${87 + i * 15}h${width - 18}`, mass ? "#9c8b6a" : "#aab49b", 1.14),
    ),
    ...[0, 1, 2, 3, 4].map((i) =>
      stroke(`M${140 + (i % 2) * 13} ${88 + i * 15}v13`, "#a19a75", 1.12),
    ),
    !mass &&
      s > 0 && [
        surface(id, "M187 79l15-14h14v96l-15 17h-14Z", "copper", 1.15),
        stroke("M192 80v94m5-98v92m13-101v93", "#ead6a4", 1.2, "4 3"),
      ],
    !mass && s === 2 && tile(id, 184, 105, 86, 17, "iron", 11),
  ];
}

function logStack(id: string, x: number, y: number, moist: boolean) {
  return moved(x, y, [
    grounding(id, 62, 69, 65),
    ...[
      [17, 49],
      [42, 50],
      [65, 29],
      [26, 24],
    ].map(([x, y], i) => [
      surface(id, `M${x!} ${y! - 11}l${77 - i * 4}-9v23l-${77 - i * 4} 8Z`, "copper", 1.12),
      oval(x!, y!, 12, 11, paint(id, "cream"), "#805d44"),
      oval(x!, y!, 7, 7, "none", moist ? "#8e9878" : "#af895c"),
      oval(x!, y!, 3, 3, "none", "#ad8d61"),
      stroke(`M${x! + 8} ${y! - 6}l55-7m-55 13 53-6`, "#835e43", 1.12),
    ]),
  ]);
}

function electricalOutlet(id: string, x: number, y: number) {
  return moved(x, y, [
    panel(id, -22, -22, 43, 45, "steel"),
    oval(0, 0, 13, 12, paint(id, "cream"), dark),
    oval(-5, 0, 2.4, 2.4, paint(id, "soot"), dark),
    oval(5, 0, 2.4, 2.4, paint(id, "soot"), dark),
    stroke("M0-11v3", "#726b4f", 2.4),
  ]);
}

export const energyUses = {
  heatpump: {
    foot: [
      "Le fluide prélève de la chaleur",
      "Le compresseur reçoit du courant",
      "Le fluide cède de la chaleur dedans",
    ],
    draw: (s, id) => [
      cutHouse(id, 208, 65, 0.82, 0),
      exchanger(id, 72, 111, 0.68),
      rotor(id, 156, 109, 24, s === 1 ? "copper" : "steel"),
      exchanger(id, 259, 129, 0.43, s === 2 ? "copper" : "steel"),
      duct("M89 82h67v9m18 18h45l17 17m37-4v36H65v-24", s === 0 ? cold : heat, true),
      s === 0
        ? stream(30, 111, 53, 111, cold)
        : s === 1
          ? link(155, 57, "Compresseur", "M156 64v22", heat)
          : stream(269, 104, 300, 104, heat),
      label(70, 170, "Dehors", cold),
      label(286, 174, "Dedans", heat),
    ],
  },
  insulation: {
    foot: [
      "La chaleur traverse la paroi",
      "L’isolant freine le transfert",
      "Une jonction crée un passage",
    ],
    draw: (s, id) => [
      ...wallSlice(id, s),
      ...[88, 119, 150].flatMap((y, i) =>
        s === 2 && i !== 1 ? [] : stream(63, y, s === 0 ? 280 : s === 1 ? 174 : 278, y, heat),
      ),
      s === 0
        ? label(279, 60, "Extérieur", cold)
        : s === 1
          ? link(273, 75, "Isolant", "M254 81l-45 21", forest)
          : link(267, 166, "Plancher", "M260 156l-23-23", heat),
      label(79, 170, "Intérieur chauffé", heat),
    ],
  },
  thermalmass: {
    foot: [
      "La masse reçoit de la chaleur",
      "La chaleur revient lentement",
      "L’air frais peut refroidir la masse",
    ],
    draw: (s, id) => [
      ...wallSlice(id, s, true),
      oval(63, 77, 16, 16, paint(id, s === 2 ? "glass" : "copper"), dark),
      s === 0
        ? stream(82, 104, 143, 122, heat)
        : s === 1
          ? stream(144, 121, 90, 120, heat)
          : stream(250, 109, 187, 109, cold),
      s === 2 && [
        stroke("M229 147q36 8 66-4", cold, 2.1, "4 3"),
        label(283, 77, "Air frais", cold),
      ],
      link(271, 152, "Masse", "M246 150l-45-14", s === 2 ? cold : heat),
    ],
  },
  firewood: {
    foot: [
      "L’eau absorbe une part de la chaleur",
      "Le bois sec contient moins d’eau",
      "Le poêle chauffe la pièce",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            logStack(id, 84, 86, s === 0),
            logStack(id, 151, 82, s === 0),
            s === 0
              ? [
                  ...[76, 92, 122, 153, 190].map((x, i) =>
                    fillPath(`M${x} ${98 - (i % 2) * 22}l4-9 4 9q-4 7-8 0Z`, "#8babaa", cold, 0.82),
                  ),
                  label(259, 74, "Eau", cold),
                ]
              : [
                  stroke("M75 76q7-15 18-21m14 26q6-19 18-24", heat, 1.8),
                  label(254, 73, "Bois séché", heat),
                ],
          ]
        : [
            surface(id, "M141 78l14-10h78l14 12v67l-10 13h-96Z", "iron", 1.3),
            panel(id, 154, 87, 72, 47, "steel"),
            fillPath("M160 92h59v35h-59Z", "#ab744e", heat),
            fillPath("M178 125q-7-11 7-25 4 12 7 11 9-5 10 14Z", "#f0bf79", heat, 0.9),
            duct("M199 69V52h57", cold),
            stream(126, 121, 91, 121, heat),
            label(281, 65, "Fumées", cold),
            label(78, 154, "Chaleur", heat),
          ],
  },
  isolatedHome: {
    foot: [
      "L’enveloppe réduit les besoins",
      "La production et l’usage se décalent",
      "L’eau demande son propre bilan",
    ],
    draw: (s, id) => [
      cutHouse(id, 114, 64, 1.01, s === 0 ? 5 : 1),
      s === 0
        ? link(270, 71, "Isolation", "M259 77l-17 42", heat)
        : s === 1
          ? [
              solarPanel(id, 66, 79, 75, 31, 0.85),
              pack(id, 252, 116, 3, 1, "glass"),
              duct("M102 121v35h151v-20", forest),
              label(273, 103, "Stockage", forest),
            ]
          : [
              tank(id, 40, 114, 49, 47, "glass", 0.55),
              duct("M132 100h-41v16m0 29h50", cold),
              stream(89, 145, 124, 145, cold),
              label(67, 101, "Eau", cold),
            ],
    ],
  },
  householdEnergy: {
    foot: [
      "Le chauffage couvre des pertes",
      "L’eau chaude consomme aussi",
      "Cuisson et appareils s’ajoutent",
    ],
    draw: (s, id) => [
      cutHouse(id, 102, 55, 1.16, 0),
      s === 0
        ? [
            exchanger(id, 148, 142, 0.37, "copper"),
            stream(109, 131, 74, 131, heat),
            label(64, 116, "Pertes", heat),
          ]
        : s === 1
          ? [
              tank(id, 142, 107, 39, 48, "ember", 0.58),
              duct("M159 109v-16h73v19", heat),
              label(268, 129, "Eau chaude", heat),
            ]
          : [
              panel(id, 204, 120, 47, 37, "iron"),
              ...[220, 235].map((x) => oval(x, 132, 5, 4, paint(id, "copper"), heat)),
              electricalOutlet(id, 306, 124),
              label(273, 86, "Appareils", heat),
            ],
    ],
  },
  standby: {
    foot: [
      "Écran et électronique alimentés",
      "Le récepteur reste alimenté",
      "La source est séparée du circuit",
    ],
    draw: (s, id) => [
      panel(id, 88, 58, 208, 104, "iron"),
      block(99, 69, 185, 69, paint(id, s === 0 ? "glass" : "soot"), dark, 2),
      s === 0 && stroke("M106 124l30-23 27 9 23-19 35 13 23-9 29 9", "#bacfba", 1.5),
      oval(267, 148, 2.6, 2.6, s === 1 ? "#c48055" : s === 0 ? "#98b892" : "#9d9a83", dark),
      electricalOutlet(id, 43, 124),
      duct(s === 2 ? "M67 125h9" : "M66 125h22", s === 0 ? forest : heat, s !== 2),
      s === 1
        ? link(253, 176, "Récepteur", "M258 166l9-15", heat)
        : s === 2
          ? label(53, 165, "Coupure", heat)
          : label(178, 174, "Écran actif", forest),
    ],
  },
  pyrolysis: {
    foot: [
      "La bûche contient plusieurs matières",
      "Des vapeurs quittent le bois chauffé",
      "Un résidu riche en carbone demeure",
    ],
    draw: (s, id) =>
      s === 0
        ? [logStack(id, 108, 78, true), link(293, 92, "Bois", "M284 97l-56 12", heat)]
        : s === 1
          ? [
              surface(id, "M101 86q74-58 150 0v59q-73 46-150 0Z", "iron", 1.4),
              surface(id, "M112 98q63-26 128 0v45q-63 25-128 0Z", "ember", 1.12),
              moved(143, 94, [logStack(id, 0, 0, false)], 0.68),
              duct("M175 69V54h82", heat),
              label(278, 69, "Vapeurs", heat),
            ]
          : [
              ...[0, 1, 2, 3, 4, 5].map((i) =>
                surface(
                  id,
                  `M${75 + i * 36} ${135 - (i % 3) * 13}l10-25 21-5 15 13-9 29-34 2Z`,
                  "soot",
                  1.06,
                ),
              ),
              stroke("M80 160h229", "#b9a784", 2.3),
              label(181, 73, "Charbon de bois", dark),
            ],
  },
  geoloop: {
    foot: [
      "La boucle alimente une pompe à chaleur",
      "Un réseau distribue la chaleur",
      "Certains sites alimentent une turbine",
    ],
    draw: (s, id) => [
      fillPath("M26 103l69-8 71 8 61-6h108v77H26Z", "#c0aa7f", "#8c8565", 1.03),
      stroke(
        "M30 114q91 6 148 0t150 1m-294 23q67-4 125 0t171 0m-298 17q55-7 121 4t180-4",
        "#8f8263",
        1.18,
      ),
      cutHouse(id, 58, 56, 0.5, 0),
      s === 1 && [cutHouse(id, 164, 50, 0.51, 0), cutHouse(id, 242, 56, 0.5, 0)],
      s === 2 && [motor(id, 214, 78, 0.63), rotor(id, 288, 80, 21, "copper")],
      duct(
        s === 0
          ? "M98 103v30h78v-30h-68"
          : s === 1
            ? "M135 100v53h117v-50H151"
            : "M134 104v60h114v-43l35-22",
        heat,
      ),
      s === 0
        ? label(228, 117, "Boucle", heat)
        : s === 1
          ? label(186, 134, "Réservoir", heat)
          : label(287, 54, "Courant", forest),
    ],
  },
  solaroven: {
    foot: [
      "Le réflecteur redirige des rayons",
      "Le fond sombre absorbe la lumière",
      "Le couvercle limite les échanges",
    ],
    draw: (s, id) => [
      surface(id, "M93 107l36-20h127l20 24v45l-24 13H92Z", "cream", 1.3),
      surface(id, "M106 115l31-19h111l15 19v39H106Z", s === 1 ? "soot" : "iron", 1.05),
      surface(id, "M105 102l-17-48 21-9 45 45Z", s === 0 ? "steel" : "glass", 1.08),
      ...[141, 162, 183].map((x) => stroke(`M${x - 26} 62l-16 29 ${x} 26`, gold, 1.21, "4 2")),
      tank(id, 171, 105, 61, 44, s === 1 ? "ember" : "steel", 0.45),
      s === 2 && surface(id, "M99 111l31-18h126l16 18Z", "glass", 0.86),
      label(
        269,
        71,
        s === 0 ? "Réflecteur" : s === 1 ? "Absorption" : "Couvercle",
        s === 2 ? cold : heat,
      ),
    ],
  },
  offgridsolar: {
    foot: [
      "Les panneaux fournissent du courant",
      "Une partie recharge la batterie",
      "La batterie peut restituer de l’énergie",
    ],
    draw: (s, id) => [
      solarPanel(id, 50, 80, 115, 53, 0.9),
      pack(id, 149, 128, 4, 1, s === 1 ? "copper" : "glass"),
      cutHouse(id, 224, 69, 0.65, 0),
      duct("M145 108h36v22m-4-22h77v25", s === 0 ? gold : forest, s !== 2),
      duct("M202 151h49v-15", forest, s > 0),
      s === 0
        ? stream(145, 108, 173, 108, gold)
        : s === 1
          ? stream(185, 110, 185, 130, forest)
          : stream(218, 151, 249, 151, forest),
      label(106, 63, s === 2 ? "Nuit" : "Panneaux", cold),
      label(189, 174, "Batterie", forest),
    ],
  },
  agrivoltaic: {
    foot: [
      "Culture et courant partagent la parcelle",
      "L’ombre reste partielle",
      "L’écartement répartit lumière et ombre",
    ],
    draw: (s, id) => [
      fillPath("M30 127l42-26h247l15 40-28 33H30Z", "#aaaf86", "#808f70"),
      ...[0, 1, 2, 3].map((i) => stroke(`M${72 + i * 51} 113l-26 51`, "#d4c7a0", 1.5)),
      solarPanel(id, 54, 79, 115, 42, 0.95),
      solarPanel(id, s === 2 ? 230 : 192, 76, 108, 42, 0.9),
      ...[70, 114, 157, 200, 246, 287].map((x) =>
        stroke(`M${x} 154v-11m0 5-6-4m6 0 7-5`, forest, 2.1),
      ),
      s > 0 &&
        fillPath(
          s === 1 ? "M51 130h219l34 19H60Z" : "M45 131h104l26 20H68Zm171 0h93l9 23h-84Z",
          "#849374",
          "#6f8268",
          0.72,
        ),
      label(162, 62, s === 2 ? "Espacement" : s === 1 ? "Ombre partielle" : "Panneaux", cold),
    ],
  },
  voltapile: {
    foot: [
      "Deux métaux et un séparateur",
      "Les étages additionnent les tensions",
      "Le circuit fermé laisse passer le courant",
    ],
    draw: (s, id) => [
      grounding(id, 176, 168, 91),
      ...Array.from({ length: s === 0 ? 3 : 12 }, (_, i) => {
        const y = 148 - i * 7.4;
        return [
          surface(
            id,
            `M130 ${y}h91v8h-91Z`,
            i % 3 === 0 ? "steel" : i % 3 === 1 ? "cream" : "copper",
            0.82,
          ),
          oval(
            176,
            y,
            45,
            9,
            paint(id, i % 3 === 0 ? "steel" : i % 3 === 1 ? "cream" : "copper"),
            dark,
          ),
        ];
      }),
      s === 0
        ? link(275, 103, "Séparateur", "M250 107l-39 34", cold)
        : s === 1
          ? link(265, 53, "Empilement", "M246 59l-33 10", cold)
          : [
              duct("M174 63V49h96v92h-51", forest),
              ...joint(id, 270, 99, 13, "copper"),
              stream(270, 122, 270, 136, forest),
              label(296, 84, "Courant", forest),
            ],
    ],
  },
  lfpCell: {
    foot: [
      "Les couches ont des rôles distincts",
      "Le LFP est un matériau de cathode",
      "Les propriétés dépendent de la chimie",
    ],
    draw: (s, id) =>
      s < 2
        ? [
            panel(id, 50, 73, 262, 87, "iron"),
            ...[83, 121, 156, 192, 227, 264].map((x, i) =>
              surface(
                id,
                `M${x} 91l19-8v62l-19 9Z`,
                i === 4 && s === 1
                  ? "copper"
                  : i % 3 === 0
                    ? "steel"
                    : i % 3 === 1
                      ? "glass"
                      : "cream",
                1.08,
              ),
            ),
            s === 0
              ? link(173, 57, "Séparateur", "M177 61l-17 24", cold)
              : link(268, 57, "Cathode LFP", "M258 64l-22 26", heat),
          ]
        : [
            pack(id, 51, 108, 6, 2, "glass"),
            pack(id, 211, 95, 5, 2, "copper"),
            label(94, 71, "Énergie", heat),
            label(267, 71, "Stabilité", forest),
            stroke("M66 82h104m54 0h83", "#817d61", 1.18),
          ],
  },
} satisfies Record<string, Study>;
