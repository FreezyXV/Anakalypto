import {
  Frame,
  Arrow,
  Label,
  Atom,
  Panel,
  blue,
  red,
  gold,
  green,
  type DrawingProps,
} from "./Science30Parts";
function Water({ x, y, charges = false }: { x: number; y: number; charges?: boolean }) {
  const hx = 30 * Math.sin((52.25 * Math.PI) / 180),
    hy = 30 * Math.cos((52.25 * Math.PI) / 180);
  return (
    <g transform={`translate(${x} ${y})`} data-water-angle="104.5">
      <path
        data-oh-bonds="true"
        d={`M0 0L${-hx} ${hy}M0 0L${hx} ${hy}`}
        stroke="#7d8e9c"
        strokeWidth="5"
      />
      <Atom x={0} y={0} element="O" r={15} />
      <Atom x={-hx} y={hy} element="H" r={10} />
      <Atom x={hx} y={hy} element="H" r={10} />
      {charges && (
        <>
          <Label x={0} y={-25}>
            δ−
          </Label>
          <Label x={-28} y={53}>
            δ+
          </Label>
          <Label x={28} y={53}>
            δ+
          </Label>
        </>
      )}
    </g>
  );
}
export function Chemistry30Drawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "phscale")
    return (
      <Frame
        id={id}
        title={["Repères à 25 °C", "Un facteur dix par unité", "Neutre ne veut pas dire vide"][s]!}
        foot={s === 2 ? "[H₃O⁺] = [OH⁻] à la neutralité" : "Solutions aqueuses diluées"}
      >
        {s === 0 ? (
          <>
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <rect
                  x={33 + i * 20}
                  y="101"
                  width="20"
                  height="38"
                  fill={
                    i < 7
                      ? `hsl(${12 + i * 7} 52% 65%)`
                      : i === 7
                        ? "#c8cb8c"
                        : `hsl(${120 + (i - 7) * 11} 29% 63%)`
                  }
                />
                {[0, 3, 7, 11, 14].includes(i) && (
                  <Label x={43 + i * 20} y={165}>
                    {i}
                  </Label>
                )}
              </g>
            ))}
            <Label x={74} y={78}>
              Acide
            </Label>
            <Label x={183} y={78}>
              Neutre
            </Label>
            <Label x={286} y={78}>
              Basique
            </Label>
            <Arrow x1={44} y1={190} x2={318} y2={190} color={blue} />
          </>
        ) : s === 1 ? (
          <>
            {[0, 1].map((i) => (
              <g key={i}>
                <path
                  d={`M${55 + i * 160} 76v105q0 10 10 10h80q10 0 10-10V76`}
                  fill="#dce9ed"
                  stroke="#8ea5b7"
                  strokeWidth="2"
                />
                {Array.from({ length: i === 0 ? 10 : 1 }, (_, n) => (
                  <circle
                    key={n}
                    cx={75 + i * 160 + (n % 4) * 20}
                    cy={119 + Math.floor(n / 4) * 24}
                    r="5"
                    fill={red}
                  />
                ))}
                <Label x={105 + i * 160} y={64}>
                  pH {i === 0 ? 3 : 4}
                </Label>
              </g>
            ))}
            <Label x={180} y={103}>
              H₃O⁺
            </Label>
            <Label x={180} y={205}>
              Dix fois plus à gauche
            </Label>
          </>
        ) : (
          <>
            <Panel x={59} y={65} w={242} h={125} />
            {[0, 1, 2].map((n) => (
              <g key={n}>
                <circle cx={99 + n * 77} cy="101" r="9" fill="#d4a5ab" stroke={red} />
                <path d={`M${99 + n * 77} 155l-8-14h16Z`} fill="#95b7c6" stroke={blue} />
              </g>
            ))}
            <Label x={180} y={57}>
              pH 7
            </Label>
            <Label x={180} y={127}>
              H₃O⁺
            </Label>
            <Label x={180} y={181}>
              OH⁻
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "waterbonds")
    return (
      <Frame
        id={id}
        title={
          ["Une molécule polaire", "Des liens entre molécules", "La glace laisse plus de place"][s]!
        }
        foot={
          [
            "Les δ indiquent des charges partielles",
            "Pointillés ≠ liaisons O–H",
            "Réseau ouvert, densité plus faible",
          ][s]!
        }
      >
        {s === 0 ? (
          <>
            <Water x={180} y={108} charges />
            <path d="M158 137q23 21 44 0" stroke={gold} fill="none" />
            <Label x={180} y={194}>
              Un coude de 104,5° environ
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Water x={104} y={99} />
            <g transform="rotate(70 236 132)">
              <Water x={236} y={132} />
            </g>
            <path d="M128 117L222 132" stroke={gold} strokeWidth="2.5" strokeDasharray="4 5" />
            <Label x={173} y={62}>
              Liaison hydrogène
            </Label>
            <path d="M173 69V122" stroke={gold} />
          </>
        ) : (
          <>
            <path d="M38 125Q180 117 322 125V198H38Z" fill="#c1dbe4" stroke="#78a2ba" />
            <path
              d="M116 67l90-18 41 34-18 47-80 4-34-30Z"
              fill="#edf7fa"
              stroke="#87adbf"
              strokeWidth="2"
            />
            {[
              [141, 90],
              [180, 72],
              [214, 101],
              [173, 116],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="#9d8ab1" />
                {i < 3 && (
                  <path
                    d={`M${x} ${y}l${i % 2 ? 20 : -8} 24`}
                    stroke={gold}
                    strokeDasharray="3 3"
                  />
                )}
              </g>
            ))}
            {Array.from({ length: 14 }, (_, i) => (
              <circle
                key={i}
                cx={56 + (i % 7) * 40}
                cy={156 + Math.floor(i / 7) * 24}
                r="4"
                fill="#8eabb9"
              />
            ))}
            <Label x={71} y={93}>
              Glace
            </Label>
            <Label x={284} y={180}>
              Eau
            </Label>
          </>
        )}
      </Frame>
    );
  if (kind === "redoxpair")
    return (
      <Frame
        id={id}
        title={
          ["Deux états avant réaction", "Deux électrons transférés", "Atomes et charge conservés"][
            s
          ]!
        }
        foot={
          [
            "Zn et Cu²⁺ : un exemple",
            "Oxydation et réduction sont couplées",
            "Zn + Cu²⁺ → Zn²⁺ + Cu",
          ][s]!
        }
      >
        <circle cx="91" cy="125" r="39" fill="#d7e2e9" stroke="#92a6b5" />
        <circle cx="269" cy="125" r="39" fill="#ead2b7" stroke="#bc9574" />
        <Label x={91} y={132}>
          {s === 2 ? "Zn²⁺" : "Zn"}
        </Label>
        <Label x={269} y={132}>
          {s === 2 ? "Cu" : "Cu²⁺"}
        </Label>
        {s === 1 ? (
          <>
            <Arrow x1={136} y1={107} x2={225} y2={107} color={blue} />
            <circle cx="168" cy="107" r="4" fill={blue} />
            <circle cx="190" cy="107" r="4" fill={blue} />
            <Label x={180} y={82}>
              2 e⁻
            </Label>
            <Label x={91} y={189}>
              Perd
            </Label>
            <Label x={269} y={189}>
              Gagne
            </Label>
          </>
        ) : (
          <>
            <Label x={91} y={67}>
              {s === 0 ? "Métal" : "Ion"}
            </Label>
            <Label x={269} y={67}>
              {s === 0 ? "Ion" : "Métal"}
            </Label>
            {s === 0 && (
              <>
                <circle cx="79" cy="151" r="3" fill={blue} />
                <circle cx="103" cy="151" r="3" fill={blue} />
              </>
            )}
          </>
        )}
      </Frame>
    );
  if (kind === "periodicmap") {
    const rows = [
      ["H", "", "", "", "", "", "", "He"],
      ["Li", "Be", "B", "C", "N", "O", "F", "Ne"],
      ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"],
    ];
    return (
      <Frame
        id={id}
        title={["Z compte les protons", "Suivre une ligne", "Comparer une colonne"][s]!}
        foot={s === 0 ? "Oxygène : huit protons" : "Extrait : les trois premières périodes"}
      >
        {s === 0 ? (
          <>
            <circle cx="109" cy="123" r="46" fill="#e0d2c5" stroke="#b69d8a" />
            {Array.from({ length: 8 }, (_, i) => (
              <circle
                key={i}
                cx={109 + 24 * Math.cos((i * Math.PI) / 4)}
                cy={123 + 24 * Math.sin((i * Math.PI) / 4)}
                r="9"
                fill={red}
                stroke="white"
              />
            ))}
            <rect x="216" y="68" width="91" height="108" rx="8" fill="#d4e4dc" stroke={green} />
            <Label x={237} y={94}>
              8
            </Label>
            <text x="262" y="141" fontSize="38" textAnchor="middle" fill="#263951">
              O
            </text>
            <Label x={109} y={192}>
              Protons seuls
            </Label>
          </>
        ) : (
          <>
            {rows.map((row, y) =>
              row.map((e, x) =>
                !e ? null : (
                  <g key={x + "-" + y}>
                    <rect
                      x={27 + x * 35}
                      y={69 + y * 39}
                      width="31"
                      height="34"
                      rx="2"
                      fill={
                        (s === 1 && y === 1) || (s === 2 && x === 0 && y > 0)
                          ? "#c4d6b6"
                          : "#e0e7ec"
                      }
                      stroke="#98a8b4"
                    />
                    <text
                      x={42 + x * 35}
                      y={92 + y * 39}
                      textAnchor="middle"
                      fontSize="18"
                      fill="#263951"
                    >
                      {e}
                    </text>
                  </g>
                ),
              ),
            )}
            {s === 1 ? (
              <>
                <Arrow x1={38} y1={192} x2={324} y2={192} color={gold} />
                <Label x={180} y={55}>
                  Z augmente →
                </Label>
              </>
            ) : (
              <>
                <path d="M12 110V181" stroke={green} strokeWidth="3" />
                <Label x={181} y={197}>
                  Li et Na : même famille
                </Label>
              </>
            )}
          </>
        )}
      </Frame>
    );
  }
  if (kind === "carbonbonds") {
    const ethane = s > 0;
    const carbon = ethane ? [135, 225] : [180];
    return (
      <Frame
        id={id}
        title={["Quatre liaisons simples", "Deux carbones liés", "Ajouter un groupe –OH"][s]!}
        foot={["Méthane CH₄", "Éthane C₂H₆", "Éthanol C₂H₆O"][s]!}
      >
        {ethane && <path d="M135 126H225" stroke="#667c8e" strokeWidth="5" />}
        {carbon.map((x) => (
          <g key={x}>
            <path d={`M${x} 126v-43m0 43v43`} stroke="#8b9ba8" strokeWidth="4" />
            {s > 0 && <Atom x={x} y={126} element="C" r={18} />}
            <Atom x={x} y={83} element="H" />
            <Atom x={x} y={169} element="H" />
          </g>
        ))}
        {s === 0 ? (
          <>
            <path d="M137 126h86" stroke="#8b9ba8" strokeWidth="4" />
            <Atom x={180} y={126} element="C" r={18} />
            <Atom x={137} y={126} element="H" />
            <Atom x={223} y={126} element="H" />
          </>
        ) : (
          <>
            <path d="M92 126H117M243 126H280" stroke="#8b9ba8" strokeWidth="4" />
            <Atom x={92} y={126} element="H" />
            {s === 1 ? (
              <Atom x={280} y={126} element="H" />
            ) : (
              <>
                <path d="M280 126L315 151" stroke="#8b9ba8" strokeWidth="4" />
                <Atom x={280} y={126} element="O" r={15} />
                <Atom x={315} y={151} element="H" />
                <Label x={284} y={78}>
                  Groupe –OH
                </Label>
                <path d="M284 85v21" stroke={red} />
              </>
            )}
          </>
        )}
      </Frame>
    );
  }
  return null;
}
