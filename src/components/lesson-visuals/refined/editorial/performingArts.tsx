import {
  type Study,
  block,
  cold,
  dark,
  fillPath,
  forest,
  gold,
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
  tile,
} from "./art";

function stage(id: string, x = 0, y = 0, scale = 1) {
  return moved(
    x,
    y,
    [
      tile(id, 30, 149, 301, 25, "copper", 12),
      surface(id, "M44 56l10-11h253l10 11v19H44Z", "iron", 1.3),
      surface(id, "M51 67h42q-2 37-30 70H51Zm217 0h46v73h-11q-33-34-35-73Z", "ember", 1.05),
      stroke(
        "M58 67v64m11-59q-4 22-13 51m24-49q-8 26-21 45m244-53v65m-10-60q5 29 14 53",
        "#d5a77c",
        1.2,
      ),
      ...[58, 98, 142, 189, 237, 278].map((x) => stroke(`M${x} 159l15-9`, "#cfb27a", 1.25)),
    ],
    scale,
  );
}

function performer(
  id: string,
  x: number,
  y: number,
  scale: number,
  pose: number,
  tone: "steel" | "copper" | "iron" = "steel",
) {
  return moved(
    x,
    y,
    [
      oval(0, -71, 9.5, 10, paint(id, "cream"), "#6e6052"),
      surface(id, "M-8-76q0-12 15-6l4 14q-10-7-19-2Z", "iron", 0.9),
      surface(id, "M-12-58l5-4h13l6 4 5 31-8 10H-9l-5-7Z", tone, 1.08),
      surface(
        id,
        pose === 2 ? "M-10-27l-7 11 19 14 19-9-10-16Z" : "M-10-27l-11 20q26 17 42-1L9-27Z",
        tone,
        0.96,
      ),
      stroke(
        pose === 0
          ? "M-11-55l-16 13-9-10m46-3 15 13 9-10"
          : pose === 1
            ? "M-11-55l-22 8-7-3m50-5 25 7 6-4"
            : "M-11-55l-15-16-12 6m49 10 18-21 10-5",
        paint(id, tone),
        5.5,
      ),
      stroke(
        pose === 2 ? "M-5-5l-13 26-17 8m44-32 19 10-4 17" : "M-7-5l-4 31-15 4m34-37 5 33 12 3",
        paint(id, tone),
        6.2,
      ),
      stroke("M-4-55l-3 21m10-21 4 20", "#e3d3a7", 1.08),
    ],
    scale,
  );
}

function openBook(id: string, x: number, y: number, scale: number, kind: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M-83-37q46-14 84 1 43-14 84 0v74Q43 30 1 48q-45-17-84-7Z", "copper", 1.4),
      surface(id, "M-78-36q44-12 79 4 45-17 79-2v64Q44 23 0 42q-44-13-78-9Z", "cream", 1.17),
      stroke("M0-29v71", "#8e7757", 1.15),
      ...[-57, 14].flatMap((t, j) =>
        Array.from({ length: 6 }, (_, i) =>
          stroke(
            `M${t} ${-23 + i * 9}q18-4 ${48 - (i % 3) * 8} 0`,
            i === kind + j ? heat : "#958567",
            i === kind + j ? 1.8 : 1.04,
            "4 2",
          ),
        ),
      ),
    ],
    scale,
  );
}

function film(id: string, x: number, y: number, scale: number, sound = false) {
  return moved(
    x,
    y,
    [
      panel(id, 0, 0, 244, 54, "iron"),
      ...Array.from({ length: 16 }, (_, i) => [
        block(8 + i * 14.3, 5, 6, 3, "#d1c59e", "none", 0.6),
        block(8 + i * 14.3, 45, 6, 3, "#d1c59e", "none", 0.6),
      ]),
      ...[13, 83, 153].map((x, i) => [
        block(x, 12, 62, 29, paint(id, "glass"), dark, 1),
        stroke(`M${x + 5} 33l12-14 16 11 12-6 10 7`, "#d1d6b7", 1.16),
        oval(x + 26 + i * 7, 19, 3.8, 3.5, "#cdad77", "none"),
      ]),
      sound && stroke("M9 42h222", "#e6be83", 2.32, "3 2"),
    ],
    scale,
  );
}
function antiqueCamera(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M-53-27l13-10h88l12 10v55l-8 10H-49Z", "iron", 1.16),
      surface(id, "M-37-22h77v47h-77Z", "copper", 1),
      oval(-30, -44, 23, 23, paint(id, "steel"), dark),
      oval(20, -43, 26, 26, paint(id, "iron"), dark),
      ...[-30, 20].flatMap((p) => joint(id, p, -43, 8)),
      surface(id, "M44-13h29l13-7v40l-13-6H44Z", "steel", 1.16),
      oval(82, 0, 7, 18, paint(id, "glass"), dark),
      stroke("M0 37l-31 34m31-34v37m0-37 30 33", dark, 3.73),
    ],
    scale,
  );
}

function houseCut(id: string, x: number, y: number, version: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M6 38l68-33 82 33v56H6Z", "cream", 1.26),
      surface(
        id,
        `M0 44L74 ${version === 1 ? -17 : 1}l92 ${version === 1 ? 52 : 35}-12 9L75 ${version === 1 ? -7 : 10} 13 46Z`,
        "iron",
        1.16,
      ),
      surface(id, "M30 50h94v41H30Z", "glass", 1),
      surface(id, "M5 46h24v48H5Zm119 0h21v48h-21Z", version === 0 ? "copper" : "steel", 0.93),
      stroke("M11 59h14m-14 12h14m-14 12h14m13-24h61", "#cfc3a0", 1.2),
      version === 2 && [surface(id, "M17 90h10v23H17Zm111 0h10v23h-10Z", "iron", 1.14)],
    ],
    1,
  );
}
function tallTower(id: string, x: number, y: number, s: number) {
  return moved(x, y, [
    surface(id, "M-38 0v-29h13v-24h9v-29h10v-27h13v-20h7v20h6v29h10v29h13v23h9V0Z", "steel", 1.2),
    ...[
      [-32, -11, 75],
      [-26, -37, 70],
      [-18, -57, 59],
      [-9, -85, 41],
      [3, -109, 20],
    ].map(([x, y, w]) => stroke(`M${x} ${y}h${w}`, "#d9d4b0", 1.13)),
    stroke("M-17 0v-74M0 0v-98m17 100v-85m15 84v-53", "#617b73", 1.1),
    s === 2 && stroke("M-23-32h33m-23-32h29m-19-24h16m-11-23h10", heat, 1.95),
  ]);
}
export const performingArts = {
  fluteair: {
    foot: [
      "Le jet oscille sur le biseau",
      "Les trous fermés allongent la colonne",
      "Un trou ouvert raccourcit la colonne",
    ],
    draw: (s, id) => [
      surface(id, "M51 113l18-16h224l18 11v29H51Z", "copper", 1.31),
      surface(id, "M58 117h248v12H58Z", "iron", 0.8),
      ...[113, 143, 173, 203, 233, 263].map((p, i) =>
        oval(p, 111, 5.3, 3.4, paint(id, s === 2 && i === 3 ? "glass" : "soot"), dark),
      ),
      stroke(s === 2 ? "M63 122h140" : "M62 122h242", cyanFor(s), 2.1, s === 0 ? "4 3" : undefined),
      s === 0
        ? [stream(40, 79, 71, 99, cold), link(142, 71, "Biseau", "M127 76l-49 21", cold)]
        : s === 2
          ? [stream(202, 109, 202, 79, cold), label(241, 74, "Trou ouvert", cold)]
          : label(185, 163, "Tube", heat),
    ],
  },
  pitchfork: {
    foot: [
      "Le choc fait vibrer les branches",
      "440 cycles par seconde",
      "Les instruments s’accordent",
    ],
    draw: (s, id) => [
      surface(
        id,
        "M72 69h11v61q10 18 26 0V69h12v61q0 17-18 25v20H91v-20q-19-6-19-28Z",
        "steel",
        1.18,
      ),
      s === 0
        ? [
            stroke("M65 70q-9 13 0 25m63-26q9 13 0 25", heat, 1.65),
            label(102, 61, "Branches", cold),
          ]
        : [
            panel(id, 154, 82, 158, 76, "iron"),
            stroke(
              "M169 119q9-22 18 0t18 0 18 0 18 0 18 0 18 0 18 0",
              s === 2 ? forest : heat,
              2.1,
            ),
          ],
      s === 2
        ? label(226, 68, "Hauteur commune", cold)
        : s === 1
          ? label(225, 68, "440 Hz", heat)
          : [],
    ],
  },
  operaStage: {
    foot: [
      "Les voix peuvent se superposer",
      "La voix suit les accents du texte",
      "Le chant participe à l’action",
    ],
    draw: (s, id) => [
      stage(id),
      ...(s === 0
        ? [
            performer(id, 122, 134, 0.8, 0, "copper"),
            performer(id, 182, 133, 0.78, 1),
            performer(id, 237, 132, 0.78, 0, "copper"),
          ]
        : s === 1
          ? [
              performer(id, 166, 135, 0.91, 1, "copper"),
              surface(id, "M204 118h44v30h-44Z", "iron"),
              stroke("M209 130h32", "#cec798", 1.18),
            ]
          : [performer(id, 137, 129, 0.86, 2, "copper"), performer(id, 240, 136, 0.91, 0)]),
      stroke(
        s === 0
          ? "M109 78q34 11 66 0t69 0"
          : s === 1
            ? "M90 90q14-16 32 0t33 1"
            : "M164 82q30 10 59 0",
        gold,
        1.55,
        "5 2",
      ),
    ],
  },
  shadowstage: {
    foot: [
      "La silhouette est entre lampe et écran",
      "Plus près de la lampe, l’ombre grandit",
      "L’articulation change la silhouette",
    ],
    draw: (s, id) => [
      tile(id, 33, 157, 301, 22, "iron", 11),
      panel(id, 242, 58, 76, 108, "cream"),
      surface(id, "M45 119l9-10h27l12 10v25H45Z", "copper"),
      fillPath(
        s === 1 ? "M85 114l158-49v90l-158-29Z" : "M85 115l158-26v50l-158-13Z",
        "#d4be80",
        "#a89364",
        0.65,
      ),
      performer(id, s === 1 ? 144 : 191, 143, s === 1 ? 0.7 : 0.67, s === 2 ? 2 : 1, "iron"),
      moved(
        273,
        s === 1 ? 139 : 135,
        [performer(id, 0, 0, s === 1 ? 0.82 : 0.61, s === 2 ? 2 : 1, "iron")],
        1,
      ),
      label(72, 90, "Lampe", heat),
      label(282, 56, "Écran", cold),
    ],
  },
  balletPose: {
    foot: [
      "La cour regarde les danseurs",
      "Talons joints, pointes ouvertes",
      "La technique forme le geste",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            tile(id, 52, 124, 251, 36, "cream", 14),
            surface(id, "M176 124q-22-17-44-26-18-1-24 8l33 22 23 10Z", "copper", 1.13),
            surface(id, "M181 126q21-18 47-27 18-3 24 6l-37 23-22 10Z", "copper", 1.13),
            link(82, 70, "Pointes", "M93 75l31 26", heat),
            link(257, 76, "Talons", "M243 83l-64 39", cold),
          ]
        : [
            stage(id),
            performer(id, 175, 133, 1.03, s === 0 ? 0 : 2, "copper"),
            s === 0
              ? [performer(id, 117, 131, 0.58, 1), performer(id, 242, 133, 0.58, 1)]
              : stroke("M103 101Q171 59 258 102", heat, 1.32, "4 3"),
          ],
  },
  stageChorus: {
    foot: [
      "Le chœur occupe un espace visible",
      "Une voix engage un échange",
      "Plusieurs acteurs se répondent",
    ],
    draw: (s, id) => [
      fillPath("M41 107q141-119 279 0v55H41Z", "#b5a68a", "#797b61", 1.1),
      ...[0, 1, 2, 3].map((i) =>
        stroke(
          `M${57 + i * 9} ${109 + i * 6}q120-${91 - i * 16} ${248 - i * 18} 0`,
          "#e7d9ad",
          1.38,
        ),
      ),
      ...[0, 1, 2, 3, 4].map((i) => performer(id, 126 + i * 25, 135, 0.42, 1, "iron")),
      s > 0 && performer(id, 86, 143, 0.71, 2, "copper"),
      s === 2 && performer(id, 277, 141, 0.73, 0, "copper"),
      s > 0 && stream(s === 1 ? 100 : 252, 89, s === 1 ? 144 : 211, 89, heat),
      label(178, 171, "Chœur", cold),
    ],
  },
  syncsound: {
    foot: [
      "Film et disque démarrent ensemble",
      "Le décalage sépare les événements",
      "Le son avance avec les images",
    ],
    draw: (s, id) => [
      film(id, 63, 69, 0.96, s === 2),
      s < 2
        ? [
            oval(137 + (s === 1 ? 24 : 0), 143, 27, 17, paint(id, "iron"), dark),
            oval(137 + (s === 1 ? 24 : 0), 143, 17, 11, "none", "#ad9c76"),
            ...joint(id, 137 + (s === 1 ? 24 : 0), 143, 4),
            stroke(s === 1 ? "M159 124v22m-22-65v43" : "M137 80v55", heat, 1.72, "4 3"),
            label(250, 156, s === 1 ? "Décalage" : "Disque", heat),
          ]
        : link(245, 159, "Piste optique", "M229 147l-24-36", heat),
    ],
  },
  earlyCinema: {
    foot: [
      "La pellicule enregistre les vues",
      "Le mécanisme avance d’un cadre",
      "L’objectif agrandit l’image",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            film(id, 61, 83, 0.95),
            stream(110, 147, 254, 147, heat),
            label(184, 67, "Cadres successifs", cold),
          ]
        : [
            antiqueCamera(id, 118, 109, 0.84),
            s === 0
              ? [film(id, 206, 125, 0.45), label(247, 73, "Pellicule", cold)]
              : [
                  fillPath("M184 102l113-38v99l-114-51Z", "#d6bc84", "#a39262", 0.8),
                  panel(id, 284, 64, 33, 102, "glass"),
                  label(254, 58, "Écran", cold),
                ],
          ],
  },
  paintingAuction: {
    foot: [
      "L’historique suit le même objet",
      "L’attribution change les attentes",
      "L’enchère aboutit à un prix de vente",
    ],
    draw: (s, id) => [
      panel(id, 72, 60, 101, 110, "copper"),
      surface(id, "M88 72h68v82H88Z", "glass", 1.08),
      fillPath("M89 140q18-45 33-36 17-33 31-25v75H89Z", "#9e9872", "#74816c", 0.92),
      s === 0
        ? [
            stroke("M193 107h109", cold, 1.5),
            ...[198, 234, 273, 300].flatMap((x) => joint(id, x, 107, 4)),
            label(244, 81, "Provenance", cold),
          ]
        : s === 1
          ? [
              panel(id, 206, 90, 90, 56, "cream"),
              stroke("M217 103h62m-64 13h54m-52 15h49", "#918763", 1.3, "4 3"),
              label(252, 74, "Attribution", heat),
            ]
          : [
              moved(
                228,
                92,
                [
                  surface(id, "M-26-7l10-8h40l10 9v20l-10 5h-42l-8-6Z", "copper"),
                  stroke("M4 13l45 44", paint(id, "copper"), 9),
                ],
                0.93,
              ),
              label(251, 170, "Adjudication", heat),
            ],
    ],
  },
  novelReaders: {
    foot: [
      "Le récit se déploie dans le temps",
      "Les personnages éclairent la scène",
      "Plusieurs formes peuvent cohabiter",
    ],
    draw: (s, id) => [
      openBook(id, s === 2 ? 138 : 180, 113, 1.12, s),
      s === 0
        ? stream(103, 159, 257, 159, heat)
        : s === 1
          ? [
              oval(110, 65, 16, 13, paint(id, "steel"), dark),
              oval(248, 66, 16, 13, paint(id, "copper"), dark),
              link(179, 173, "Points de vue", "M182 162l-31-16", cold),
            ]
          : [
              surface(id, "M241 69h59v67h-59Z", "cream"),
              stroke("M250 82h39m-39 11h30m-30 12h36", heat, 1.14, "3 2"),
              label(272, 156, "Lettre", heat),
            ],
    ],
  },
  vernacularHouse: {
    foot: [
      "La masse du mur amortit les variations",
      "La pente évacue l’eau de pluie",
      "Le plancher s’écarte du sol humide",
    ],
    draw: (s, id) => [
      tile(id, 46, 149, 270, 24, "iron", 15),
      houseCut(id, 96, s === 2 ? 56 : 65, s),
      s === 0
        ? link(264, 61, "Terre massive", "M263 66l-31 55", heat)
        : s === 1
          ? [
              stream(179, 48, 121, 82, cold),
              stream(186, 47, 243, 79, cold),
              label(273, 61, "Pluie", cold),
            ]
          : link(290, 130, "Vide", "M275 133l-41 22", cold),
    ],
  },
  gothicvault: {
    foot: [
      "La voûte transmet la charge",
      "L’arc-boutant conduit la poussée",
      "La structure libère de la place",
    ],
    draw: (s, id) => [
      surface(
        id,
        "M95 158V98q22-30 85-55 67 25 86 55v60h-27v-50q-28-28-59-48-36 21-60 48v50Z",
        "cream",
        1.34,
      ),
      stroke("M98 154V100q40-38 82-55 38 14 84 54v55", "#988866", 1.25),
      ...[115, 129, 142, 155].map((y) => stroke(`M95 ${y}h24m122 0h24`, "#b1a17d", 0.85)),
      ...[
        [104, 92, 116, 107],
        [123, 75, 135, 92],
        [146, 59, 157, 75],
        [178, 45, 181, 60],
        [207, 56, 199, 74],
        [230, 73, 219, 88],
        [252, 88, 239, 103],
      ].map(([x1, y1, x2, y2]) => stroke(`M${x1} ${y1}L${x2} ${y2}`, "#9c8b70", 0.94)),
      surface(id, "M90 155h35v10H90Zm143 0h39v10h-39Z", "cream", 0.86),
      s === 0
        ? [
            stream(166, 68, 115, 111, heat),
            stream(195, 69, 246, 112, heat),
            stream(108, 120, 108, 150, heat),
            stream(254, 120, 254, 150, heat),
          ]
        : s === 1
          ? [
              surface(id, "M267 95q28-10 49 6v60h-12v-48q-13-14-36-5Z", "steel"),
              surface(id, "M304 125h16v33l8 7h-29v-8l5-7Z", "cream"),
              stream(267, 98, 302, 106, heat),
              stream(312, 115, 312, 149, heat),
              label(284, 75, "Arc-boutant", cold),
            ]
          : [
              surface(id, "M137 129V96q17-15 43-29 29 14 44 29v34Z", "glass", 1.0),
              stroke("M179 67v62m-23-36h44m-58 15h74m-53-20v40m32-40v40", "#bdab7c", 1.8),
              fillPath("M160 102l9-10 9 10-9 7Zm20 13 9-10 9 10-9 10Z", "#bf9f63", "#a48d66", 0.9),
              stroke("M146 126v-24m67 24v-24", "#d0d5ae", 1.1),
              label(180, 167, "Verrière", cold),
            ],
    ],
  },
  towerWind: {
    foot: [
      "Le vent se sépare autour de la tour",
      "Trois ailes épaulent le noyau",
      "Les retraits changent la largeur",
    ],
    draw: (s, id) =>
      s === 1
        ? [
            surface(id, "M172 52h18l6 49 47 28-10 20-50-23-49 28-12-23 45-28Z", "steel", 1.27),
            oval(181, 110, 16, 16, paint(id, "copper"), dark),
            link(258, 79, "Noyau", "M243 85l-47 19", heat),
            label(184, 168, "Vue en plan", cold),
          ]
        : [
            tallTower(id, 178, 177, s),
            s === 0
              ? [
                  stroke("M32 93h97m91-1q50-31 74 1t-25 29m-47 8q51-14 77 13", cold, 2.06),
                  label(273, 77, "Sillage", cold),
                ]
              : link(282, 77, "Retraits", "M261 81l-66 16", heat),
          ],
  },
  capitals: {
    foot: [
      "Un coussin porte une dalle carrée",
      "Les volutes s’enroulent sur les côtés",
      "Des feuilles d’acanthe stylisées",
    ],
    draw: (s, id) => [
      tile(id, 102, 65, 157, 19, "cream", 12),
      surface(id, "M124 105q31-31 57-31 29 0 55 31l-13 26h-86Z", "cream", 1.28),
      surface(id, "M142 129h78v42h-78Z", "steel", 1.04),
      ...[151, 167, 184, 199, 213].map((x) => stroke(`M${x} 134v32`, "#d6cfab", 1.24)),
      s === 1
        ? [-1, 1].map((side) =>
            moved(181 + side * 44, 99, [
              stroke("M-19 0q1-23 19-20 23 2 19 22-4 15-19 12-10-1-7-13 2-9 12-3", heat, 3.1),
            ]),
          )
        : s === 2
          ? [138, 159, 183, 206, 224].map((x) =>
              fillPath(`M${x} 130q-15-19-5-39 15 10 11 27Z`, "#a4a77b", "#758367", 1),
            )
          : [],
      label(281, 108, s === 0 ? "Coussin" : s === 1 ? "Volute" : "Acanthe", heat),
    ],
  },
} satisfies Record<string, Study>;
function cyanFor(step: number) {
  return step === 0 ? "#a4c7b1" : "#77a8a2";
}
