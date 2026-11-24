import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  focus,
  graph,
  harm,
  ink,
  label,
  living,
  moved,
  oval,
  round,
  shadow,
  stroke,
} from "../detail100/plate";
import { plate } from "./craft";

function cardiac(id: string, x = 0, y = 0, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(
        id,
        "M110 100V74l-14-12h14l15 15v23Zm45 6V78q0-24 18-21l14 3-4 11-11-3-4 38Z",
        "glass",
        "engraving",
      ),
      filled(id, "M127 114V76q0-25 25-26l9-1 1 11-12 3q-11 3-11 15v34Z", "brass"),
      filled(
        id,
        "M85 117q-11-24 7-35 15-10 37 7 11 9 23 2l12-5q28-6 28 24 0 26-23 45l-31 16q-20-13-38-31Z",
        "clay",
        "dots",
      ),
      stroke("M130 100q-16 20-1 51l9 15m-4-51q26-15 47-14m-44 15 17 20m-28-20-16 15", harm, 2),
    ],
    scale,
  );
}

function arterySection(id: string, s: number) {
  return [
    filled(id, "M50 104q111-27 259-4v104q-143-21-259 3Z", "clay", "engraving"),
    filled(id, "M56 126q111-25 247-3v58q-148-18-247 4Z", "ivory"),
    s > 0 && filled(id, "M143 178q31-47 60-37 18 2 47 41Z", "brass", "dots"),
    ...[76, 109, 265, 281].map((x, i) =>
      oval(x, 152 + (i % 2) * 13, 8, 4, `url(#${id}-clay)`, harm),
    ),
  ];
}

const beat = "M201 148h11l6-9 5 9 5-18 7 34 8-65 9 51h16l6-9 5 9 8-19 6 36 8-64 8 49h13";

export const physiologyPlates = {
  editionHeartSignal: plate(
    ["Propagation désordonnée", "Interrompre ce rythme", "Un rythme peut reprendre"],
    (s, id) => [
      cardiac(id, 2, 34, 0.97),
      block(197, 102, 126, 76, "#dbe1d8", ink, 3),
      stroke(
        s === 0
          ? "M201 149l7-21 7 24 6-37 9 53 7-34 7 19 6-26 8 37 8-16 7 11 9-27 7 25 10-13 12 4"
          : s === 1
            ? "M202 148h23l11-28v42l17-19h24l10-17 6 28h25"
            : beat,
        s === 0 ? harm : flow,
        2.1,
      ),
      s === 1 && [round(id, 160, 103, 7, "brass"), arrow(164, 103, 193, 127, active)],
      s === 2 && label(259, 208, "Rythme organisé"),
    ],
  ),
  editionVesselRisks: plate(
    ["Paroi et circulation", "Un changement progressif", "Des facteurs qui se combinent"],
    (s, id) => [
      arterySection(id, s),
      s === 0 && [arrow(76, 144, 136, 141, flow), call(221, 75, "Artère", "M220 82l-16 30")],
      s === 1 && [arrow(229, 132, 279, 133, flow), call(184, 75, "Dépôt", "M184 81l5 56", harm)],
      s === 2 && [
        stroke("M67 221h219", active, 1.3, "6 4"),
        ...Array.from({ length: 5 }, (_, i) =>
          round(id, 78 + i * 48, 221, 5, i % 2 ? "brass" : "steel"),
        ),
      ],
    ],
  ),
  editionPressureWaves: plate(["Valeur haute", "Valeur basse", "Mesures rapprochées"], (s, id) => [
    graph(52, 86, 261, 123),
    stroke(
      "M56 183C80 183 83 110 106 110S133 183 162 183 184 110 208 110 235 183 263 183 278 128 306 128",
      flow,
      2.6,
    ),
    s === 0 && [
      stroke("M52 110h260", harm, 1.2, "5 4"),
      round(id, 106, 110, 4.4, "brass"),
      label(137, 77, "Systolique"),
    ],
    s === 1 && [
      stroke("M52 183h260", living, 1.2, "5 4"),
      round(id, 162, 183, 4.4, "brass"),
      label(145, 77, "Diastolique"),
    ],
    s === 2 && [
      stroke("M90 204v14m75-14v14m76-14v14", active, 1.2),
      label(189, 77, "Plusieurs mesures"),
    ],
  ]),
  editionDeficitCurve: plate(
    ["Apport et utilisation", "Réserves au fil du temps", "Comparer les fonctions"],
    (s, id) => [
      graph(51, 85, 257, 123),
      stroke("M60 117h232", flow, 2, "5 4"),
      stroke(
        s === 0
          ? "M62 149q87-9 155 1l78 1"
          : s === 1
            ? "M62 149q89 1 151 25l83 17"
            : "M62 159q60 3 114 18 48 10 119 23",
        active,
        2.9,
      ),
      s === 0 && label(181, 78, "Besoins variables"),
      s === 1 && call(236, 147, "Réserves", "M230 152l-15 25"),
      s === 2 && [
        round(id, 274, 198, 6, "brass"),
        call(225, 79, "Fonction touchée", "M242 86l28 94"),
      ],
    ],
  ),
  editionYawnObservation: plate(
    ["Comportement observé", "Réponse variable", "Mesurer le contexte"],
    (s, id) => [
      ...[
        [105, 135],
        [252, 144],
      ].map(([x, y], i) =>
        moved(
          x!,
          y!,
          [
            filled(
              id,
              "M-36 58v-37l-14-23q-12-24 8-42 17-17 43-16 31 5 36 39l17 16-15 8v22l-24 7-7 26Z",
              "clay",
              "dots",
            ),
            stroke("M8-22h13m-4 28 21-4", ink, 2),
            (s === 0 ? i === 0 : s === 1 ? i === 1 : false) && oval(33, 13, 10, 9, "#79614e", ink),
          ],
          0.83,
        ),
      ),
      s < 2 && arrow(162, 122, 196, 122, flow, true),
      s === 2 && [stroke("M81 213h195", active, 1.2, "5 4"), label(178, 87, "Observation")],
    ],
  ),
  editionCellCycleControl: plate(
    ["Contrôle de la division", "Barrières de contrôle altérées", "Croissance locale"],
    (s, id) => [
      filled(id, "M29 79h301v136H29Z", "ivory", "dots"),
      ...Array.from({ length: s === 2 ? 14 : s === 1 ? 9 : 6 }, (_, i) => {
        const x = 59 + (i % 7) * 39,
          y = 126 + Math.floor(i / 7) * 49;
        return [
          round(id, x, y, 15, i > 4 && s > 0 ? "clay" : "glass"),
          round(id, x + 3, y - 2, 5.5, i > 4 && s > 0 ? "brass" : "steel"),
        ];
      }),
      s === 0 && [stroke("M70 181h197", living, 2.3, "7 8"), label(176, 202, "Contrôles")],
      s === 1 && call(198, 199, "Division persistante", "M229 180l-17-41", harm),
      s === 2 && focus(276, 155, 42, harm),
    ],
  ),
  editionGlucoseGates: plate(
    ["Signal d’insuline", "Réponse diminuée", "Glucose plus élevé"],
    (s, id) => [
      filled(id, "M35 158h288v64H35Z", "clay", "dots"),
      filled(id, "M35 158h288v17H35Z", "ivory", "engraving"),
      ...[97, 165, 237].map((x, i) => [
        filled(id, `M${x - 12} 152h24v30h-24Z`, i === s ? "brass" : "steel"),
        stroke(`M${x} 153v24`, ink, 1.5),
      ]),
      ...Array.from({ length: s === 0 ? 5 : 12 }, (_, i) =>
        round(id, 61 + (i % 6) * 48, 105 + Math.floor(i / 6) * 22, 4.5, "brass"),
      ),
      s === 0 && [
        filled(id, "M92 124l10-6 10 6-10 6Z", "plant"),
        arrow(97, 134, 97, 201, living),
        round(id, 97, 208, 4.5, "brass"),
        call(102, 78, "Insuline", "M103 84v31", living),
        call(253, 78, "Glucose", "M250 85l3 13"),
      ],
      s === 1 && [
        stroke("M156 141l16 16m0-16-16 16", harm, 2.4),
        label(177, 78, "Signal moins efficace"),
      ],
      s === 2 && label(178, 77, "Glucose dans le sang"),
    ],
  ),
  editionThermalBalance: plate(
    ["Échanges avec le milieu", "Perte de chaleur", "Accumulation de chaleur"],
    (s, id) => [
      filled(id, "M138 206l13-55-23-23 14-22 26-9 28 2 28 23-19 28 15 56Z", "clay", "engraving"),
      round(id, 177, 89, 20, "brass"),
      ...[0, 1, 2].map((i) => stroke(`M${153 + i * 18} 143q14 15 0 36`, harm, 1.4)),
      s === 0 && [arrow(77, 139, 128, 139, flow), arrow(224, 140, 281, 140, active)],
      s === 1 && [
        arrow(130, 123, 69, 105, flow),
        arrow(226, 148, 292, 147, flow),
        label(64, 183, "Froid"),
      ],
      s === 2 && [
        arrow(73, 121, 133, 124, harm),
        arrow(294, 137, 226, 137, harm),
        label(284, 186, "Chaleur"),
      ],
    ],
  ),
  editionImmuneTimeline: plate(
    ["Reconnaissance rapide", "Réponse spécifique", "Mémoire possible"],
    (s, id) => [
      ...[76, 177, 275].map((x, i) => [
        round(id, x, 147, 29, i === s ? "plant" : "glass"),
        round(id, x, 147, 12, i === s ? "brass" : "steel"),
        stroke(`M${x - 19} 145q6-19 24-16m-24 29h19`, living, 1.45),
      ]),
      arrow(107, 147, 145, 147, flow, s === 0),
      arrow(207, 147, 245, 147, flow, s < 2),
      s === 0 && [
        filled(id, "M37 101l8-1 6 6-3 9-9 1-5-7Z", "clay"),
        arrow(52, 111, 63, 124, harm, true),
      ],
      s === 1 && [
        ...[154, 179, 201].map((x) => stroke(`M${x - 6} 204l6 8 6-8m-6 8v11`, harm, 1.9)),
        arrow(178, 179, 178, 200, harm, true),
      ],
      s === 2 && [
        stroke("M275 177v24h-22m22 0h22", living, 1.45, "4 3"),
        round(id, 245, 201, 6, "plant"),
        round(id, 304, 201, 6, "plant"),
      ],
      s === 0 && call(86, 82, "Innée", "M86 89l-8 26"),
      s === 1 && call(179, 80, "Adaptative", "M178 88v27"),
      s === 2 && call(256, 80, "Mémoire", "M254 88l17 28"),
    ],
  ),
  editionGraspReflex: plate(["Contact sur la paume", "Fermeture automatique"], (s, id) => [
    shadow(id, 177, 207, 144, 14),
    filled(id, "M50 180q29-15 74-18l143-9 12 14-11 18-142 16-67 4Z", "brass", "dots"),
    filled(
      id,
      s === 0
        ? "M177 185q-16-23-2-75 1-15 9-17 9 3 5 29l8-40q11-13 18 0l-4 40 14-30q13-9 17 5l-11 30 13-16q15-4 14 8l-13 48-21 33Z"
        : "M177 185q-16-35 3-62 11-12 20-6l14 13 16-8q15 0 15 12 19 4 13 16l-18 33-21 17Z",
      "clay",
      "engraving",
    ),
    s === 0 && [arrow(118, 127, 165, 152, flow), call(239, 76, "Paume", "M242 82l-35 51")],
    s === 1 && [
      stroke("M184 143q26-16 48 1m-47 10q19-7 42 2", harm, 1.5),
      call(177, 80, "Doigts fléchis", "M178 86l18 37"),
    ],
  ]),
};
