import {
  active,
  arrow,
  block,
  cable,
  call,
  cylinder,
  filled,
  fillPath,
  flow,
  focus,
  harm,
  ink,
  label,
  layers,
  lineGrey,
  living,
  moved,
  oval,
  prism,
  round,
  shadow,
  stroke,
} from "./plate";

function skull(id: string, x: number, y: number, adult: boolean) {
  return moved(x, y, [
    shadow(id, 80, 155, 90, 11),
    filled(
      id,
      adult
        ? "M9 85Q0 24 65 6q45-13 72 26 15 27 3 55l-16 15-2 17-28 2-4 23-45 3-9-23-21-26Z"
        : "M8 80Q3 16 70 3q50-4 70 37 10 24-4 52l-15 17-22 5-7 25-42 4-11-23-21-18Z",
      "ivory",
      "engraving",
    ),
    filled(
      id,
      "M30 90q14-18 31-4 10 16-9 24-18 0-22-20Zm52-4q21-10 34 8-2 17-19 18-21-5-15-26Z",
      "graphite",
    ),
    filled(id, "M74 101l-12 21h23Z", "steel"),
    stroke("M48 132h43m-33-10v12m10-12v13m8-14v13m8-14v12", lineGrey, 1.4),
    stroke(
      adult
        ? "M17 53l24-4 8-13 21 5 15-20 23 3 9-11"
        : "M14 54l30-6 15-8 20 1 11-27M79 41l22 10 31 2",
      active,
      2.4,
    ),
    !adult && filled(id, "M79 34l9 8-8 12-10-11Z", "clay"),
  ]);
}
function myofiber(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M0 10 177 0l24 8v49l-24 8L0 55Z", "clay", "dots"),
      oval(178, 32, 18, 32, `url(#${id}-brass)`),
      ...[12, 25, 38, 51].map((y, i) => stroke(`M3 ${y + 3}l156 ${i % 2 ? -1 : 3}`, harm, 1.7)),
      ...[20, 40, 60, 80, 100, 120, 140].map((x) => stroke(`M${x} 12v41`, "#ddbf9e", 1.1)),
      stroke("M175 12q-10 19 6 36m-3-31 6 13", "#94674e", 1.15),
    ],
    scale,
  );
}
function cochlea(id: string, x: number, y: number) {
  return moved(x, y, [
    filled(
      id,
      "M-109 17q-29-44 1-63 25-13 43 2 17 21 5 43l-16 19-16-5 5-21q20-16 11-27-12-9-20 9l2 27Z",
      "clay",
      "engraving",
    ),
    filled(id, "M-69-8q43-10 65 9l-3 17q-20-18-62-4Z", "ivory"),
    stroke("M-8-2l4 24m3-15 12-11 13 12 9-18", active, 2.3),
    filled(
      id,
      "M24-7q13-34 45-18 22 17 5 41-15 16-34 5-15-10-6-26 8-13 21-7 12 7 3 17-7 6-14 1",
      "clay",
      "engraving",
    ),
    stroke("M72 2l26 7m-28 1 25 10", flow, 2.1),
  ]);
}

export const bodyPlates = {
  detailGrowingSkeleton: (s: number, id: string) =>
    layers([
      s < 2
        ? [
            skull(id, 97, 65, s === 1),
            s === 0
              ? call(270, 74, "Fontanelle", "M256 78l-76 25")
              : call(277, 90, "Sutures", "M251 95l-46-13"),
          ]
        : [
            filled(
              id,
              "M115 74q0-12 19-12h63q19 0 20 17l-15 49H132Zm18 73h71v48q16 28-14 33h-53q-21-2-9-25Z",
              "ivory",
              "engraving",
            ),
            filled(id, "M134 125h68v23h-68Z", "glass", "dots"),
            call(247, 124, "Cartilage", "M232 129l-29 5"),
          ],
      label(173, 249, ["Crâne du nourrisson", "Crâne plus mature", "Plaque de croissance"][s]!),
    ]),
  detailPainSignal: (s: number, id: string) =>
    layers([
      filled(
        id,
        "M26 166q26-17 72-15l29-48q8-11 20-4 8 6 3 21l-10 32 19 5 20 61H27Z",
        "clay",
        "engraving",
      ),
      stroke("M31 188h55q33-5 52-67m-20 50h58q12-31 40-30", active, 2.65),
      filled(
        id,
        "M219 122q-15-27 4-44 14-15 31-10 22-18 41 1 27 5 32 29 1 26-21 39l-15 21h-25l-1-18q-32 1-46-18Z",
        "clay",
        "dots",
      ),
      stroke("M227 95l28 12 22-23m11 2q-9 20-2 43m21-32-12 21m-32-1q-28 2-27 11", harm, 1.15),
      s === 0 && [focus(135, 104, 15, harm), call(89, 77, "Stimulus", "M92 83l33 12", harm)],
      s === 1 && [arrow(165, 174, 208, 148, flow), label(130, 245, "Signal nerveux")],
      s === 2 && [focus(277, 115, 23), call(237, 207, "Perception", "M241 191l28-54")],
    ]),
  detailSynapseRemodel: (s: number, id: string) =>
    layers([
      filled(
        id,
        "M32 182q34-50 67-53l38-39 14 29-19 27 21 42-19 9-28-30q-34 23-74 25Z",
        "clay",
        "engraving",
      ),
      filled(
        id,
        "M202 121q26-35 77-24l48-26 6 20-39 30 25 29-13 18-28-21q-36 32-76 20Z",
        "plant",
        "engraving",
      ),
      stroke("M46 183q49-18 75-43m87 5q41-12 68-29", lineGrey, 1.7),
      ...Array.from({ length: s === 0 ? 5 : 9 }, (_, i) =>
        round(id, 160 + (i % 3) * 15, 127 + Math.floor(i / 3) * 17, 3.8, "brass"),
      ),
      s === 0 && call(180, 79, "Synapse", "M177 83v32"),
      s === 1 && [arrow(158, 183, 197, 174, flow), label(174, 235, "Transmission modulée")],
      s === 2 && [
        stroke("M130 131q50-65 99-21", living, 2.4, "5 4"),
        label(176, 243, "Connexions remaniées"),
      ],
    ]),
  detailAltitudeLung: (s: number, id: string) =>
    layers([
      filled(id, "M24 208l66-42 46 12 64-54 57-63 78 151H24Z", "plant", "dots"),
      filled(id, "M226 112l31-51 26 47-17-10-9 11-12-9Z", "ivory"),
      ...[52, 203].map((x, i) => [
        block(x, 121 - i * 26, 103, 41, "#f1e8d0", lineGrey, 4),
        ...Array.from({ length: i === 0 ? 10 : 5 }, (_, n) =>
          round(
            id,
            x + 12 + (n % 5) * 20,
            132 - i * 26 + Math.floor(n / 5) * 17,
            3,
            n % 5 === 0 ? "brass" : "glass",
          ),
        ),
      ]),
      s === 0 && [label(97, 103, "Plus dense"), label(255, 172, "Moins dense")],
      s === 1 && [arrow(262, 141, 263, 183, flow), label(160, 247, "Moins d’O₂ par souffle")],
      s === 2 && [
        stroke("M62 192h49m16-13h46m14-25h42", active, 1.8, "5 4"),
        label(183, 246, "Adaptation progressive"),
      ],
    ]),
  detailSleepStart: (s: number, id: string) =>
    layers([
      filled(id, "M47 164h265v38H47Z", "steel", "engraving"),
      prism(id, 57, 195, 17, 25, 9, "earth"),
      prism(id, 282, 195, 17, 25, 9, "earth"),
      filled(id, "M65 153q13-18 45-8l24 23H63Z", "ivory"),
      round(id, 105, 143, 12, "brass"),
      filled(
        id,
        s === 1
          ? "M119 157q42-23 74 1l42-31 55 31v14H115Z"
          : "M119 153q47-18 88-5l67 11 17 12H114Z",
        "plant",
        "engraving",
      ),
      s === 0 && [stroke("M71 105h38q13-9 23 0t36 0h44", flow, 2), label(168, 76, "Transition")],
      s === 1 && [
        arrow(223, 141, 222, 107, harm),
        call(257, 80, "Secousse", "M257 86l-22 35", harm),
      ],
      s === 2 && [
        stroke("M159 128q24-34 57-35", flow, 1.4, "4 5"),
        label(203, 83, "Sensation de chute"),
      ],
    ]),
  detailEarScreen: (s: number, id: string) =>
    layers([
      cochlea(id, 165, 146),
      prism(id, 41, 169, 32, 21, 11, "steel"),
      stroke("M74 175q13-29 24-29", ink, 3),
      s === 0 && [arrow(79, 142, 139, 145, flow), label(97, 85, "Son bref")],
      s === 1 && [arrow(149, 155, 106, 166, active), call(259, 89, "Cochlée", "M250 95l-23 25")],
      s === 1 && [
        stroke("M177 177q-38 15-44 24t-42-10", active, 2, "4 3"),
        label(195, 245, "Réponse mesurée"),
      ],
    ]),
  detailListeningTube: (s: number, id: string) =>
    layers([
      shadow(id, 175, 216, 140, 12),
      s === 0
        ? [
            filled(id, "M48 122l239-9v53l-239-2Z", "ivory", "engraving"),
            oval(48, 143, 11, 22, "#8a806b", ink),
            oval(48, 145, 5, 16, "#54554a", ink),
            stroke("M65 134l216-10m-199 11 156-2", lineGrey, 1.1),
          ]
        : s === 1
          ? [
              filled(
                id,
                "M60 121q26 21 110 16 81-4 114-24v63q-51-21-114-21-83-1-110 19Z",
                "earth",
                "engraving",
              ),
              oval(60, 147, 12, 27, "#6f604b", ink),
              oval(283, 145, 13, 31, "#9d8760", ink),
            ]
          : [
              cable(
                "M99 81q-49 14-32 54 11 28 48 30 48 3 60-27l9-24q8-28 23-32 28-17 47 7",
                lineGrey,
                8,
              ),
              cable("M178 127v61q18 33 67 21", flow, 8),
              oval(263, 205, 27, 15, `url(#${id}-steel)`),
            ],
      s === 0 && call(184, 84, "Rouleau creux", "M175 89l-16 29"),
      s === 1 && call(205, 80, "Tube en bois", "M204 86l-14 47"),
      s === 2 && label(152, 245, "Pavillon et embouts"),
    ]),
  detailPhysicalExam: (s: number, id: string) =>
    layers([
      filled(id, "M62 218q2-48 21-77l36-14 25-28 29 31 58 15 31 72Z", "clay", "engraving"),
      round(id, 146, 101, 25, "brass"),
      stroke("M94 181q55 23 124-7m-68-44v80", harm, 1.4),
      s === 0 && [
        stroke("M210 96h81v42h-46l-17 12 2-12h-20Z", flow, 1.5),
        stroke("M222 110h54m-53 11h39", flow, 1.7),
        label(183, 246, "Récit et contexte"),
      ],
      s === 1 && [focus(142, 159, 23), call(267, 77, "Observer", "M248 84l-87 60")],
      s === 2 && [
        filled(id, "M217 168q-18-12-35 3l-43 21 12 10 38-5 43-12Z", "ivory"),
        label(177, 247, "Palper ou percuter"),
      ],
      s === 3 && [
        cable("M217 104q43 29 1 45-34 17-46 31", flow, 7),
        round(id, 168, 181, 13, "steel"),
        label(182, 247, "Écouter"),
      ],
    ]),
  detailImagingSlice: (s: number, id: string) =>
    layers([
      s === 0
        ? [
            prism(id, 172, 80, 111, 132, 19, "graphite"),
            stroke(
              "M205 102q26-28 42 3v80m-32-81v80m10-69 27 9m-29 8 27 11m-32 5 32 12",
              "#e4e6d9",
              3,
            ),
            arrow(53, 142, 174, 142, flow),
            label(90, 116, "Rayons X"),
          ]
        : s === 1
          ? [
              filled(id, "M61 220V139a93 69 0 0 1 186 0v81Z", "steel", "engraving"),
              oval(153, 143, 56, 48, "#484f4e", ink),
              prism(id, 133, 170, 165, 22, 17, "ivory"),
              focus(151, 144, 35, active),
              label(175, 249, "Coupes reconstruites"),
            ]
          : s === 2
            ? [
                filled(id, "M44 155q137-42 272 0v57H44Z", "clay", "dots"),
                filled(id, "M142 78h57l-14 61h-28Z", "steel"),
                fillPath("M161 139l-62 61h139l-58-61Z", "#b0c5be", flow, 1.3),
                label(244, 111, "Sonde"),
              ]
            : [
                cylinder(id, 75, 97, 211, 89, "steel"),
                oval(181, 116, 72, 35, "#545f60", ink),
                prism(id, 113, 151, 154, 26, 13, "ivory"),
                stroke("M87 116q95-71 188 0", active, 2, "5 4"),
                label(174, 239, "Champ magnétique"),
              ],
    ]),
  detailAbyssPressure: (s: number, id: string) =>
    layers([
      filled(id, "M32 76h298v150H32Z", "glass", "dots"),
      stroke("M36 97h288m-286 22h284m-285 87h286", flow, 0.9, "3 5"),
      filled(
        id,
        "M77 164q34-50 142-34l67-26-22 51 24 43-72-19q-81 28-139-15Z",
        "steel",
        "engraving",
      ),
      filled(id, "M120 144q35-40 105-18l-44 19Zm10 32q34 25 70 14l-30-14Z", "graphite"),
      oval(105, 158, 9, 7, "#cbbb92", ink),
      round(id, 106, 157, 2.5, "graphite"),
      stroke("M81 168q13 4 25-2m24-18q-13 11 1 24", ink, 1.2),
      s === 0 && [
        arrow(76, 92, 76, 125, flow),
        arrow(188, 83, 188, 119, flow),
        label(183, 247, "Pression du milieu"),
      ],
      s === 1 && [focus(177, 154, 26), label(171, 247, "Tissus en contact avec l’eau")],
      s === 2 && [
        focus(223, 159, 25),
        stroke("M211 150q8-10 14 1t13 3m-25 12q8-10 21-7", active, 1.8),
        label(177, 247, "Protéines stabilisées"),
      ],
    ]),
};

export { myofiber };
