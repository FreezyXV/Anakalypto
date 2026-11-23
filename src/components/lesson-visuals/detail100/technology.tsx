import {
  active,
  arrow,
  block,
  cable,
  call,
  cog,
  cylinder,
  filled,
  fillPath,
  flow,
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

function mast(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      shadow(id, 0, 1, 31, 8),
      filled(id, "M-23 0l17-113h12L23 0Z", "steel", "engraving"),
      stroke("M-17-20l28-28-19-28 15-23m10 79-28-28 19-28-15-23", ink, 1.3),
      filled(id, "M-23-114h13v34h-13ZM10-114h13v34H10Z", "ivory"),
      stroke("M-17-113V-78m34-35v35M0-115v-16", lineGrey, 1.4),
    ],
    scale,
  );
}
function instrument(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  tone: "steel" | "graphite" = "steel",
) {
  return moved(x, y, [
    prism(id, 0, 0, w, h, 10, tone),
    block(7, 8, w - 15, h - 21, `url(#${id}-glass)`, ink, 5),
    stroke(`M${w * 0.27} ${h - 6}h${w * 0.46}`, "#e2e4d7", 1.1),
    round(id, w - 7, h - 6, 1.6, "brass"),
  ]);
}
function station(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M-26-41q12-43 56-46 6 36-26 54-17 7-30-8Z", "steel", "engraving"),
      stroke("M-25-40l39-27m-22 31 14 26m-2-2v12", ink, 2.4),
      round(id, 14, -67, 4, "brass"),
      prism(id, -20, 1, 51, 9, 10, "graphite"),
    ],
    scale,
  );
}
function satellite(id: string, x: number, y: number) {
  return moved(x, y, [
    prism(id, -17, -15, 34, 32, 12, "steel"),
    filled(id, "M-73-17h45v25h-45ZM29-17h45V8H29Z", "glass", "engraving"),
    stroke("M-73-5h45m-31-12V8m15-25V8m73-13h45m-30-12V8m15-25V8m-88-12h11m34 0h12", flow, 1.1),
    oval(0, 16, 14, 6, "#adae9c", ink),
  ]);
}

export const technologyPlates = {
  detailRadioCapacity: (s: number, id: string) =>
    layers([
      filled(id, "M28 211l21-17 106-11 60 17 95-7 22 31H28Z", "plant", "dots"),
      mast(id, 95, 205, 0.99),
      ...[212, 250, 280, 310].map((x, i) => instrument(id, x, 150 + (i % 2) * 18, 19, 32)),
      ...[0, 1, 2].map((i) =>
        stroke(
          `M${126 + i * 14} ${109 - i * 11}q${25 + i * 11} ${31 + i * 11} 0 ${63 + i * 16}`,
          flow,
          1.5,
          s === 1 ? "3 3" : undefined,
        ),
      ),
      s === 0 && [arrow(167, 142, 255, 170, flow), label(177, 247, "Débit selon la liaison")],
      s === 1 && [mast(id, 196, 211, 0.48), label(178, 247, "Capacité par zone")],
      s === 2 && [
        stroke("M155 175h52m17-35 45-18", active, 2, "5 4"),
        label(175, 247, "Délai de réponse"),
      ],
    ]),
  detailMobileGenerations: (s: number, id: string) =>
    layers([
      instrument(id, 49, 81, 76, 121),
      mast(id, 260, 197, 0.88),
      s === 0 && [stroke("M66 111h42m-42 14h33", flow, 1.9), label(85, 158, "SMS")],
      s === 1 && [stroke("M68 113h36v39H68Zm0 10h36m-26 10h15", flow, 1.7), label(85, 177, "Web")],
      s === 2 && [
        filled(id, "M67 112h39v44H67Z", "brass"),
        fillPath("M78 129l17 9-17 10Z", "#efe4c8"),
        label(87, 178, "Vidéo"),
      ],
      s === 3 && [
        stroke("M67 112h39m-39 16h39m-39 17h39m-39 18h39", flow, 2.5),
        label(87, 183, "Usages"),
      ],
      ...[0, 1, 2].slice(0, s).map((i) => arrow(135, 131 + i * 12, 230, 121 + i * 7, flow)),
      ...["2G", "3G", "4G", "5G"].map((v, i) => [
        block(57 + i * 63, 226, 52, 24, i === s ? "#c7aa7d" : "#e5e0d1", lineGrey),
        label(82 + i * 63, 244, v),
      ]),
    ]),
  detailHandsetRelay: (s: number, id: string) =>
    layers([
      filled(id, "M26 235q156-57 308 0v15H26Z", "plant", "dots"),
      moved(63, 147, [instrument(id, 0, 12, 34, 61), stroke("M1 22V-11", ink, 3)]),
      satellite(id, 181, s === 3 ? 87 : 103),
      station(id, 281, 223, 0.92),
      s > 0 && [arrow(92, 151, 154, 115, flow), s > 1 && arrow(211, 113, 267, 159, flow)],
      s === 3 && stroke("M44 145Q163 40 310 144", active, 1.5, "4 5"),
      s === 0 && label(95, 102, "Terminal"),
      s === 1 && call(180, 63, "Satellite", "M179 67v19"),
      s === 2 && label(263, 250, "Station au sol"),
      s === 3 && label(177, 249, "Couverture selon l’orbite"),
    ]),
  detailRotorInduction: (s: number, id: string) =>
    layers([
      filled(id, "M146 189h136l24 31h-184Z", "earth", "engraving"),
      filled(id, "M169 202l12-82h9l12 82Z", "steel", "engraving"),
      filled(id, "M180 110h66l13 11-13 12h-66Z", "graphite"),
      ...[0, 120, 240].map((a) => (
        <g key={a} transform={`rotate(${a} 178 121)`}>
          {filled(id, "M178 119q5-29-6-64-10-2-9 10l10 53Z", "ivory", "engraving")}
        </g>
      )),
      round(id, 178, 121, 7, "brass"),
      s === 0 && [
        arrow(50, 101, 135, 101, flow),
        arrow(57, 136, 127, 136, flow),
        label(82, 177, "Vent"),
      ],
      s === 1 && [cog(id, 230, 122, 10, "brass"), call(276, 85, "Génératrice", "M255 94l-21 17")],
      s === 2 && [
        prism(id, 248, 184, 45, 22, 10, "glass"),
        cable("M242 129q-8 43-38 50h44", flow, 5),
        label(233, 247, "Électricité"),
      ],
    ]),
  detailHydrogenDensity: (s: number, id: string) =>
    layers([
      s === 0
        ? [
            round(id, 139, 145, 38, "glass"),
            round(id, 202, 145, 38, "glass"),
            stroke("M158 145h26", ink, 3),
            label(171, 221, "H₂"),
          ]
        : [
            cylinder(id, 69, 91, 69, 117, "glass"),
            cylinder(id, 221, 152, 62, 55, "brass"),
            ...Array.from({ length: 8 }, (_, i) =>
              round(id, 80 + (i % 3) * 19, 110 + Math.floor(i / 3) * 36, 2.7, "brass"),
            ),
            label(106, 247, "Gaz"),
            label(252, 247, "Liquide"),
            arrow(145, 142, 207, 168, flow),
          ],
    ]),
  detailKernelGate: (s: number, id: string) =>
    layers([
      prism(id, 71, 91, 197, 31, 24, s === 0 ? "brass" : "ivory"),
      prism(id, 71, 148, 197, 31, 24, s === 1 ? "brass" : "steel"),
      prism(id, 71, 206, 197, 31, 24, s === 2 ? "brass" : "graphite"),
      label(166, 115, "Applications"),
      label(166, 172, "Noyau"),
      label(166, 229, "Matériel"),
      s === 0 && arrow(280, 115, 280, 139, flow),
      s === 1 && [arrow(280, 144, 280, 196, flow), stroke("M90 154h44m61 0h52", active, 1.7)],
      s === 2 && [arrow(280, 209, 280, 173, flow), stroke("M95 211h42m62 0h46", active, 1.7)],
    ]),
  detailArchivedComputer: (s: number, id: string) =>
    layers([
      instrument(id, 43, 86, 120, 101),
      prism(id, 106, 196, 66, 14, 12, "steel"),
      prism(id, 230, 79, 71, 133, 20, "graphite"),
      filled(id, "M238 95h55v74h-55Z", "steel"),
      stroke("M246 107h36m-36 11h29m-27 40h29m-29 12h30", ink, 1.4),
      s === 0 && [round(id, 282, 194, 5, "brass"), call(256, 67, "Alimentation", "M258 72l18 107")],
      s === 1 && [
        prism(id, 82, 120, 51, 23, 10, "brass"),
        arrow(219, 141, 143, 141, active, true),
        label(180, 246, "État du stockage"),
      ],
      s === 2 && [
        stroke("M61 117h80m-80 17h59m-59 16h45", flow, 2.3),
        label(175, 246, "Système compatible"),
      ],
    ]),
  detailGateThickness: (s: number, id: string) =>
    layers([
      prism(id, 48, 192, 226, 27, 34, "ivory"),
      prism(id, 75, 160, 50, 31, 25, "brass"),
      prism(id, 221, 160, 50, 31, 25, "brass"),
      s === 0
        ? [prism(id, 125, 175, 96, 12, 25, "plant"), prism(id, 142, 136, 59, 23, 24, "steel")]
        : s === 1
          ? [
              prism(id, 125, 153, 95, 23, 26, "plant"),
              filled(id, "M151 125h54v51h-16v-29h-22v29h-16Z", "steel", "engraving"),
            ]
          : [
              filled(id, "M142 109h71v78h-71Z", "steel", "engraving"),
              ...[122, 143, 164].map((y) => [
                block(130, y, 97, 9, "#e0e9ce", living, 2),
                stroke(`M145 ${y - 2}h61m-61 13h61`, "#ebd1a2", 1.5),
              ]),
            ],
      call(
        176,
        82,
        s === 0 ? "Canal de surface" : s === 1 ? "Ailette" : "Feuillets",
        s === 2 ? "M178 89v32" : "M176 89v45",
      ),
      label(
        174,
        245,
        s === 0
          ? "Grille au-dessus"
          : s === 1
            ? "Grille sur plusieurs faces"
            : "Grille tout autour",
      ),
    ]),
  detailPacketJourney: (s: number, id: string) =>
    layers([
      instrument(id, 34, 98, 68, 67),
      instrument(id, 263, 98, 64, 67),
      ...[
        [141, 96],
        [210, 182],
        [144, 182],
        [213, 96],
      ].map(([x, y], i) => [
        prism(id, x!, y!, 28, 17, 9, i % 2 ? "steel" : "graphite"),
        stroke(`M${x! + 6} ${y! + 11}h16`, "#e3dfc7", 1.25, "2 2"),
      ]),
      stroke(
        "M104 120l33-13m34 0h36m34-2 22 15m-159 8 33 65m35 0h37m26 0 30-45M166 118l50 71",
        flow,
        1.7,
        s === 0 ? "4 4" : undefined,
      ),
      s > 0 && arrow(175, s === 1 ? 106 : 193, 202, s === 1 ? 106 : 193, active),
      s === 2 && [
        block(278, 115, 31, 28, "#e4d4a9", ink),
        stroke("M283 123h20m-20 8h20m-20 7h20", active, 1.2),
      ],
      label(
        180,
        247,
        ["Découper le message", "Acheminer les paquets", "Recomposer à l’arrivée"][s]!,
      ),
    ]),
  detailJobsiteRobot: (s: number, id: string) =>
    layers([
      prism(id, 64, 201, 187, 17, 31, "earth"),
      ...[0, 1, 2, 3].map((i) => prism(id, 208 - (i % 2) * 14, 177 - i * 13, 44, 12, 12, "clay")),
      prism(id, 66, 176, 63, 18, 19, "graphite"),
      stroke(s === 1 ? "M104 177l31-66 67 22 42-11" : "M104 176l22-69 82-6 28 34", ink, 13),
      stroke(s === 1 ? "M104 177l31-66 67 22 42-11" : "M104 176l22-69 82-6 28 34", "#bba16c", 9),
      round(id, 104, 176, 10, "steel"),
      round(id, s === 1 ? 135 : 126, s === 1 ? 111 : 107, 8, "steel"),
      round(id, s === 1 ? 202 : 208, s === 1 ? 133 : 101, 7, "steel"),
      s === 0 && [
        prism(id, 223, 135, 32, 12, 8, "clay"),
        call(245, 73, "Préhenseur", "M243 79l-6 47"),
      ],
      s === 1 && [
        stroke("M213 164q34-37 74-23", active, 2, "4 3"),
        label(178, 249, "Geste répétable"),
      ],
      s === 2 && [
        stroke("M273 139h29v56h-29m9-39h12m-12 10h12m-12 10h12", flow, 2),
        label(177, 247, "Contrôle de la pose"),
      ],
    ]),
};
