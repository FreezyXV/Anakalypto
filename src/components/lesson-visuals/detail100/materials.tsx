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
  graph,
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
  type Tone,
} from "./plate";

function turbine(id: string, x: number, y: number, r: number, tone: Tone) {
  return moved(x, y, [
    round(id, 0, 0, r + 4, "graphite"),
    oval(0, 0, r, r, "#e4decb", ink),
    ...Array.from({ length: 10 }, (_, index) => (
      <g key={index} transform={`rotate(${index * 36}) scale(${r / 28})`}>
        {filled(id, "M-5-7q13-7 11-20l9 5Q15-9 5-4Z", tone, "engraving")}
      </g>
    )),
    round(id, 0, 0, r * 0.26, "steel"),
  ]);
}

function factory(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      shadow(id, 75, 78, 88, 11),
      filled(id, "M0 39l30-24v22l36-22v22l24-11 34 8v44H0Z", "steel", "engraving"),
      filled(id, "M95 35l4-60h13l6 60Zm26 0 2-75h14l4 79Z", "graphite"),
      stroke("M13 57h96M13 65h96m-84-12v17m24-17v17m24-17v17m24-17v17", "#e4dfd1", 1.4),
    ],
    scale,
  );
}
function pylon(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M-31 0-5-111h10L31 0Z", "steel", "engraving"),
      stroke("M-26-16 17-64M27-16-16-64M-17-55 12-84m5 29-29-29m-19 6h62m-39-21h52", ink, 1.5),
      ...[-31, 31].map((xx) => round(id, xx, -78, 2.4, "brass")),
    ],
    scale,
  );
}
function tank(id: string, x: number, y: number, w: number, h: number, level: number) {
  return moved(x, y, [
    filled(id, `M0 0h${w}v${h}H0Z`, "steel", "engraving"),
    filled(id, `M8 8h${w - 16}v${h - 16}H8Z`, "ivory"),
    filled(id, `M8 ${level}q${(w - 16) / 2} -7 ${w - 16} 0v${h - 8 - level}H8Z`, "glass", "dots"),
    stroke(`M8 ${h - 11}h${w - 16}`, flow, 1.2),
  ]);
}
function house(id: string, x: number, y: number) {
  return moved(x, y, [
    filled(id, "M0 45h164v85H0Z", "ivory"),
    filled(id, "M-7 46 79 0l93 46Z", "clay", "engraving"),
    block(111, 65, 41, 38, "#becfcb", ink),
    stroke("M113 82h35m-16-15v32M78 48v80", lineGrey, 1.6),
    stroke("M5 128h156", ink, 3),
  ]);
}

export const materialsPlates = {
  detailFrenchGridFlows: (s: number, id: string) =>
    layers([
      factory(id, 30, 120, 0.82),
      pylon(id, 172, 212, 0.98),
      factory(id, 236, 159, 0.6),
      stroke("M95 142q28 37 63-24m33 0q28 40 77 19", flow, 2.2),
      s === 0 && call(106, 74, "Production", "M109 82l-37 47"),
      s === 1 && [arrow(198, 162, 243, 156, active), label(186, 247, "Consommation")],
      s === 2 && [
        arrow(222, 94, 310, 94, flow),
        arrow(307, 115, 223, 115, active),
        label(171, 247, "Échanges aux frontières"),
      ],
    ]),
  detailCoalSteam: (s: number, id: string) =>
    layers([
      prism(id, 43, 207, 266, 10, 14, "earth"),
      filled(id, "M53 190v-67q0-12 15-12h63v79Z", "steel", "engraving"),
      filled(id, "M66 125h52v53H66Z", s === 0 ? "brass" : "ivory"),
      ...[0, 1, 2].map((i) => round(id, 80 + i * 11, 165 - (i % 2) * 12, 5, "graphite")),
      cable("M101 123V89h83v57", flow, 11),
      turbine(id, 200, 163, 28, s === 1 ? "brass" : "steel"),
      prism(id, 258, 145, 56, 41, 11, "graphite"),
      stroke("M228 163h29", ink, 5),
      s === 0 && call(93, 68, "Chaudière", "M90 73v37"),
      s === 1 && call(223, 68, "Vapeur", "M213 73l-45 18", flow),
      s === 2 && [
        stroke("M271 172l10-17-2 12h15l-11 12", "#f6df9d", 2),
        label(187, 246, "Générateur accouplé"),
      ],
    ]),
  detailFossilInputs: (s: number, id: string) =>
    layers([
      cylinder(id, 38, 125, 75, 83, "graphite"),
      cylinder(id, 130, 86, 67, 124, "steel"),
      stroke("M43 149h65m-65 33h65m24-68h61m-61 56h61", lineGrey, 2),
      s === 0 && [cable("M86 200v23h150v-63h65", active, 9), label(269, 214, "Carburant")],
      s === 1 && [
        cable("M200 119h41v37h42v40", flow, 10),
        stroke("M271 198h25m-22-9 10-12 7 11", harm, 2),
        label(266, 240, "Chaleur"),
      ],
      s === 2 && [
        cable("M201 121h41v37h30", lineGrey, 11),
        prism(id, 267, 151, 47, 37, 11, "brass"),
        label(270, 225, "Matériaux"),
      ],
      label(72, 105, "Pétrole"),
      label(162, 67, "Gaz"),
    ]),
  detailReactorFleet: (s: number, id: string) =>
    layers([
      prism(id, 39, 206, 282, 11, 15, "graphite"),
      filled(id, "M53 189v-60q0-41 39-41 41 0 41 41v60Z", "ivory", "engraving"),
      filled(id, "M67 184v-52q0-25 25-25 26 0 26 25v52Z", "steel"),
      ...[80, 92, 104].map((x) => block(x, 145, 5, 30, s === 0 ? "#a77242" : "#c4c6b6", ink, 1)),
      cable("M118 137h45v-20h35v35", flow, 8),
      turbine(id, 221, 167, 24, s === 1 ? "brass" : "steel"),
      prism(id, 258, 149, 49, 32, 12, s === 2 ? "brass" : "steel"),
      stroke("M246 166h13", ink, 4),
      s === 0 && call(96, 71, "Chaleur", "M95 76l-3 40"),
      s === 1 && call(212, 79, "Turbine", "M214 86l6 53"),
      s === 2 && label(183, 248, "Génération d’électricité"),
    ]),
  detailPackPrice: (s: number, id: string) =>
    layers([
      graph(44, 79, 269, 133),
      stroke("M54 90q32 38 60 59t64 30 55 15 75 4", flow, 3),
      ...[54, 111, 178, 231, 304].map((x, i) =>
        round(
          id,
          x,
          [90, 147, 179, 193, 198][i]!,
          i === s * 2 ? 6 : 3,
          i === s * 2 ? "brass" : "glass",
        ),
      ),
      s === 1 && call(224, 107, "Fabrication", "M223 115l-38 55"),
      s === 2 && [
        prism(id, 229, 107, 59, 27, 12, "steel"),
        stroke("M237 117h39", "#e8d9bf", 1.3, "6 3"),
      ],
      label(96, 69, "Prix par kWh"),
      label(267, 239, "Années"),
    ]),
  detailDrainagePlot: (s: number, id: string) =>
    layers([
      filled(id, "M25 168h310v63H25Z", "earth", "engraving"),
      filled(id, "M25 194q139 12 310 0v36H25Z", "clay", "dots"),
      moved(31, 83, [house(id, 0, 0)], 0.59),
      tank(id, 152, 145, 72, 61, 34),
      cable("M87 155v22h70m66-7h69", flow, 8),
      s === 0 && call(117, 73, "Eaux usées", "M113 80l-22 72"),
      s === 1 && [arrow(137, 176, 154, 176, flow), call(211, 106, "Fosse", "M207 111l-17 35")],
      s === 2 && [
        stroke("M270 171v41m-15-34v27m31-19v27", flow, 2, "3 4"),
        label(183, 253, "Traitement par le sol"),
      ],
    ]),
  detailWaterTreatment: (s: number, id: string) =>
    layers([
      tank(id, 43, 97, 104, 116, s === 0 ? 31 : 46),
      tank(id, 211, 97, 104, 116, s === 2 ? 31 : 46),
      ...Array.from({ length: 11 }, (_, i) =>
        round(id, 55 + (i % 5) * 16, 142 + Math.floor(i / 5) * 17, 3, i % 2 ? "earth" : "clay"),
      ),
      s > 0 && [
        arrow(154, 154, 204, 154, flow),
        ...Array.from({ length: s === 1 ? 7 : 2 }, (_, i) =>
          round(id, 229 + i * 10, 167 + (i % 2) * 13, 1.9, "clay"),
        ),
      ],
      s === 2 && [
        stroke("M245 125h39m-20-10v20", active, 2),
        label(179, 248, "Protection après contrôle"),
      ],
      s === 0 && label(169, 248, "Aspect et qualité distincts"),
      s === 1 && label(178, 248, "Clarification"),
    ]),
  detailIndoorAir: (s: number, id: string) =>
    layers([
      house(id, 96, 79),
      prism(id, 114, 169, 32, 24, 10, "graphite"),
      s < 2 && [
        stroke("M124 166q12-20 1-28m16 27q24-18 17-30", harm, 2, "4 3"),
        ...Array.from({ length: 11 }, (_, i) =>
          round(id, 128 + (i % 5) * 21, 133 + Math.floor(i / 5) * 16, 2, "clay"),
        ),
      ],
      s === 0 && call(72, 81, "Source", "M71 88q37 28 54 68", harm),
      s === 1 && [round(id, 238, 131, 12, "steel"), label(276, 155, "CO")],
      s === 2 && [
        arrow(48, 157, 120, 157, flow),
        arrow(228, 166, 311, 166, flow),
        label(176, 246, "Renouvellement d’air"),
      ],
    ]),
  detailMaterialAxes: (s: number, id: string) =>
    layers([
      s === 0
        ? [
            filled(id, "M43 149q3-52 88-65-5 75-62 76Z", "plant", "dots"),
            stroke("M41 174q22-46 75-75m-46 32 1-24m8 15 23-5", living, 2.1),
            arrow(141, 143, 199, 143, flow),
            prism(id, 217, 119, 70, 69, 20, "glass"),
            label(84, 224, "Ressource"),
            label(249, 224, "Polymère"),
          ]
        : [
            filled(id, "M38 115h284v107H38Z", "earth", "dots"),
            stroke("M39 150q147-21 282 0m-283 42h284", lineGrey, 1.3),
            s === 1
              ? [
                  filled(id, "M113 144l117-17 32 23-106 20Z", "glass", "engraving"),
                  call(197, 89, "Échantillon", "M197 96v41"),
                ]
              : [
                  filled(
                    id,
                    "M120 159l29-21 27 24-37 11Zm73 19 29-19 18 15-35 17Z",
                    "glass",
                    "engraving",
                  ),
                  arrow(88, 78, 88, 121, flow),
                  arrow(272, 80, 274, 121, living),
                  label(181, 247, "Milieu contrôlé"),
                ],
          ],
    ]),
  detailCementKiln: (s: number, id: string) =>
    layers([
      prism(id, 35, 206, 278, 12, 16, "earth"),
      filled(id, "M79 113l174 32v45L79 158Z", "steel", "engraving"),
      oval(79, 136, 18, 22, `url(#${id}-graphite)`),
      oval(252, 168, 18, 22, `url(#${id}-brass)`),
      fillPath("M95 140l142 24-5 15-136-25Z", "#b28052", ink, 1.15),
      ...[116, 163, 207].map((x, i) => stroke(`M${x} ${119 + i * 9}v45`, lineGrey, 2.2)),
      prism(id, 114, 170, 22, 32, 12, "graphite"),
      prism(id, 223, 190, 22, 15, 12, "graphite"),
      s === 0 && [arrow(28, 114, 60, 130, active), label(105, 84, "Calcaire")],
      s === 1 && [stroke("M269 170l-28-13 9 10-19 6 36 7", harm, 2.2), label(254, 91, "Chaleur")],
      s === 2 && [
        arrow(240, 137, 269, 88, harm),
        arrow(175, 125, 145, 88, harm),
        label(112, 78, "Calcination"),
        label(268, 78, "Chauffage"),
      ],
      s === 3 && [
        filled(id, "M271 194l25-24 24 35h-55Z", "brass", "dots"),
        label(187, 247, "Clinker puis ciment"),
      ],
    ]),
};
