import {
  AnatomyScene,
  Arrow,
  Label,
  Antibody,
  BloodCell,
  blood,
  vein,
  gold,
  green,
  purple,
  type DrawingProps,
} from "./OrgansParts";
export function RenalImmuneOrgansDrawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "dialyser")
    return (
      <AnatomyScene
        id={id}
        title={
          [
            "Un filtre à fibres creuses",
            "L’urée diffuse vers le dialysat",
            "Retirer aussi de l’eau",
          ][s]!
        }
        foot={
          [
            "Deux liquides, sans mélange",
            "Les cellules restent dans le sang",
            "Une filtration sous pression",
          ][s]!
        }
      >
        <rect
          x="54"
          y="83"
          width="252"
          height="94"
          rx="18"
          fill="#dcecf0"
          stroke={vein}
          strokeWidth="2"
        />
        <path d="M295 64V98M65 160V190" stroke={vein} strokeWidth="8" fill="none" />
        <g data-filter-fluid="dialysate">
          <Arrow x1={266} y1={93} x2={218} y2={93} color={vein} width={2} />
          <Arrow x1={143} y1={166} x2={93} y2={166} color={vein} width={2} />
        </g>
        {[107, 130, 153].map((y) => (
          <g key={y} data-hollow-fibre={y}>
            <path d={`M25 ${y}H335`} stroke="#b2838e" strokeWidth="18" strokeLinecap="round" />
            <path d={`M25 ${y}H335`} stroke="#f5dce0" strokeWidth="13" strokeLinecap="round" />
          </g>
        ))}
        <g data-filter-fluid="blood">
          <Arrow x1={24} y1={130} x2={47} y2={130} color={blood} width={2} />
          <Arrow x1={310} y1={130} x2={336} y2={130} color={blood} width={2} />
        </g>
        {[
          { x: 91, y: 107 },
          { x: 171, y: 130 },
          { x: 263, y: 153 },
        ].map((c) => (
          <BloodCell key={c.x} {...c} scale={0.7} />
        ))}
        {s === 0 ? (
          <>
            <Label x={84} y={62}>
              Sang
            </Label>
            <path d="M85 68L90 99" stroke={blood} />
            <Label x={260} y={53}>
              Dialysat
            </Label>
            <Label x={198} y={199}>
              Membranes
            </Label>
            <path d="M184 182L180 163" stroke="#8b9aa6" />
          </>
        ) : s === 1 ? (
          <>
            {[
              { x: 125, y: 107 },
              { x: 212, y: 130 },
              { x: 285, y: 107 },
            ].map((c) => (
              <circle key={c.x} {...{ cx: c.x, cy: c.y }} r="2.5" fill={gold} />
            ))}
            {[
              { x: 119, y: 88 },
              { x: 200, y: 121 },
              { x: 223, y: 163 },
              { x: 277, y: 176 },
            ].map((c) => (
              <circle key={c.x} {...{ cx: c.x, cy: c.y }} r="2.5" fill={gold} />
            ))}
            <Arrow x1={127} y1={104} x2={119} y2={88} color={gold} width={2} />
            <Arrow x1={216} y1={153} x2={223} y2={169} color={gold} width={2} />
            <Label x={125} y={58}>
              Urée
            </Label>
            <path d="M125 65V83" stroke={gold} />
            <Label x={239} y={199}>
              Dialysat à évacuer
            </Label>
          </>
        ) : (
          <>
            <Arrow x1={119} y1={107} x2={119} y2={88} color={vein} width={2} />
            <Arrow x1={224} y1={153} x2={224} y2={179} color={vein} width={2} />
            <path
              d="M119 85q-7-8 0-16q7 8 0 16Z M225 196q-6-7 0-14q6 7 0 14Z"
              fill="#8dbbd4"
              stroke={vein}
            />
            <Label x={237} y={60}>
              Eau
            </Label>
            <path d="M220 65L128 78" stroke={vein} />
            <Label x={79} y={60}>
              Cellules
            </Label>
            <path d="M79 67L91 101" stroke={blood} />
          </>
        )}
      </AnatomyScene>
    );
  if (kind === "antibodyfit")
    return (
      <AnatomyScene
        id={id}
        title={
          ["Reconnaître un petit motif", "Une liaison sélective", "Un exemple de neutralisation"][
            s
          ]!
        }
        foot={
          [
            "Un épitope à la surface du microbe",
            "Le même site aux deux extrémités",
            "Certains anticorps bloquent l’entrée",
          ][s]!
        }
      >
        {s < 2 ? (
          <>
            <Antibody x={180} y={147} />
            <circle
              cx="150"
              cy={s === 0 ? 68 : 82}
              r="17"
              fill="#e3d5ad"
              stroke="#a18a4b"
              strokeWidth="2"
            />
            {s === 0 ? (
              <path d="M143 82Q150 95 157 82" fill={gold} stroke="#8c7133" strokeWidth="2" />
            ) : (
              <path d="M144 96L150 119 156 96" fill={gold} stroke="#8c7133" strokeWidth="2" />
            )}
            {s === 1 && (
              <path
                d="M142 116Q150 126 158 116"
                stroke={green}
                strokeWidth="2"
                fill="none"
                strokeDasharray="2 3"
              />
            )}
            <Label x={67} y={83}>
              Épitope
            </Label>
            <path d={`M95 89L142 ${s === 0 ? 86 : 103}`} stroke="#929a9f" />
            <Label x={276} y={164}>
              Anticorps
            </Label>
            <path d="M239 166L189 168" stroke={purple} />
            {s === 0 && <path d="M140 99h20" stroke="#8e9eab" strokeDasharray="3 3" />}
          </>
        ) : (
          <>
            <circle cx="105" cy="125" r="32" fill="#e3d5ad" stroke="#a18a4b" strokeWidth="2" />
            {[0, 60, 120, 180, 240, 300].map((a) => {
              const r = (a * Math.PI) / 180;
              return (
                <path
                  key={a}
                  d="M-4 0L0-10 4 0"
                  fill={gold}
                  stroke="#9e8242"
                  transform={`translate(${105 + 31 * Math.cos(r)} ${125 + 31 * Math.sin(r)}) rotate(${a + 90})`}
                />
              );
            })}
            {[
              { x: 76, y: 85, r: 145 },
              { x: 138, y: 93, r: 225 },
              { x: 82, y: 168, r: 40 },
              { x: 142, y: 161, r: -40 },
            ].map((a, i) => (
              <Antibody key={i} x={a.x} y={a.y} rotate={a.r} scale={0.48} />
            ))}
            <path
              d="M304 66C255 63 243 99 250 128C241 163 262 193 306 188"
              fill={`url(#${id}-tissue)`}
              stroke="#ac7d87"
              strokeWidth="3"
            />
            <path
              d="M247 115h-11v-9m11 9h-11v9M249 150h-11v-9m11 9h-11v9"
              fill="none"
              stroke="#94739f"
              strokeWidth="3"
            />
            <Arrow x1={170} y1={125} x2={220} y2={125} color="#a4aeba" width={2} />
            <path d="M192 112l17 26m0-26-17 26" stroke={blood} strokeWidth="3" />
            <Label x={78} y={63}>
              Microbe
            </Label>
            <Label x={292} y={52}>
              Cellule
            </Label>
            <Label x={178} y={201}>
              Liaison empêchée
            </Label>
          </>
        )}
      </AnatomyScene>
    );
  return null;
}
