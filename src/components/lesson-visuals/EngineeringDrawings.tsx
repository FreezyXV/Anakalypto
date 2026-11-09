import { Arrow, Label, Dot, ink, blue, warm, green } from "./DrawingPrimitives";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
export function EngineeringDrawing({ kind, step, id }: Props) {
  if (kind === "lift")
    return (
      <>
        {[65, 100, 143].map((y, i) => (
          <path
            key={y}
            d={
              step === 2
                ? `M20 ${y}H98Q124 ${y - 12} 150 ${y - 30}Q187 ${y - 38} 211 ${y - 11}T340 ${y + 18}`
                : `M20 ${y}H98Q160 ${y - 34 - step * 7} 219 ${y - 2}T340 ${y + 36}`
            }
            fill="none"
            stroke={blue}
            strokeWidth={i === 1 ? 3 : 2}
            opacity={i === 1 ? 1 : 0.55}
          />
        ))}
        <path
          d="M98 130Q140 91 192 110L276 135Q178 147 98 130Z"
          transform={`rotate(${-step * 7} 180 125)`}
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        {step === 2 &&
          [0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${209 + i * 32} ${79 + i * 6}c-16-22 22-26 22-8s-20 13-12 0`}
              fill="none"
              stroke={blue}
              strokeWidth="2"
            />
          ))}
        <Arrow x1={185} y1={93} x2={185} y2={step === 2 ? 70 : 42} color={green} />
        <Label x={183} y={28} color={green}>
          Portance
        </Label>
        <Arrow x1={23} y1={101} x2={61} y2={101} />
        <Label x={121} y={190}>
          {step === 2 ? "Air séparé du profil" : "Écoulement autour de l’aile"}
        </Label>
        <Arrow x1={308} y1={160} x2={331} y2={178} />
      </>
    );
  if (kind === "jet")
    return (
      <>
        <path
          d="M37 61Q180 36 315 70L333 89V125L315 145Q180 172 37 150Z"
          fill={`url(#${id}-metal)`}
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M49 74Q170 59 314 82V136Q170 153 49 137Z" fill="#e7f2fa" />
        <path
          d="M100 92H248L298 105V120L248 135H100Z"
          fill="#e6d3bc"
          stroke={ink}
          strokeWidth="1.5"
        />
        <path d="M57 110H278" stroke="#9c9e9e" strokeWidth="5" />
        <rect x="57" y="71" width="11" height="75" rx="4" fill="#8ba4bc" stroke={ink} />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M${109 + i * 12} ${94 + i * 3}v${36 - i * 6}l6-5v${-26 + i * 6}Z`}
            fill="#6b8ca5"
            stroke={ink}
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${237 + i * 12} 96v34l6-5v-24Z`}
            fill="#a5896f"
            stroke={ink}
            strokeWidth="1"
          />
        ))}
        <path d="M165 94H223V132H165Z" fill={step > 0 ? "#e9ad73" : "#f1dfcb"} opacity=".75" />
        {step > 0 && (
          <>
            <path d="M174 120Q179 99 186 110Q192 88 205 117L215 120Z" fill="#d77c3e" />
            <path d="M181 120Q188 104 194 119Z" fill="#f9df96" />
          </>
        )}
        <Arrow x1={17} y1={108} x2={46} y2={108} />
        <Arrow x1={91} y1={80} x2={272} y2={80} />
        <Arrow x1={91} y1={144} x2={272} y2={144} />
        {step === 2 && (
          <>
            <Arrow x1={301} y1={112} x2={345} y2={112} color={warm} />
            <Arrow x1={130} y1={181} x2={43} y2={181} color={green} />
          </>
        )}
        <Label x={72} y={30}>
          Soufflante
        </Label>
        <path d="M72 36L63 67" stroke={ink} />
        <Label x={254} y={30}>
          Turbine
        </Label>
        <path d="M254 36V90" stroke={ink} />
        <Label x={222} y={199}>
          {step === 2 ? "Poussée ← · flux →" : "Cœur chaud · flux froid autour"}
        </Label>
      </>
    );
  if (kind === "hydraulic") {
    const smallY = step === 2 ? 123 : 95,
      bigY = step === 2 ? 85 : 92;
    return (
      <>
        <path
          d="M52 83V161H206V80H305V171H42V83"
          fill="#c2e1f3"
          stroke={ink}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="52" y="82" width="38" height={smallY - 82 + 1} fill="#f6f9fc" />
        <rect x="206" y="80" width="99" height={bigY - 80 + 1} fill="#f6f9fc" />
        <rect
          x="48"
          y={smallY}
          width="47"
          height="8"
          rx="2"
          fill={`url(#${id}-metal)`}
          stroke={ink}
        />
        <rect
          x="68"
          y={smallY - 25}
          width="8"
          height="25"
          fill={`url(#${id}-metal)`}
          stroke={ink}
        />
        <rect
          x="201"
          y={bigY}
          width="109"
          height="8"
          rx="2"
          fill={`url(#${id}-metal)`}
          stroke={ink}
        />
        <rect
          x="249"
          y={bigY - 25}
          width="12"
          height="25"
          fill={`url(#${id}-metal)`}
          stroke={ink}
        />
        {step > 0 && (
          <>
            <Arrow x1={72} y1={smallY - 56} x2={72} y2={smallY - 32} color={warm} />
            <Arrow x1={255} y1={bigY - 29} x2={255} y2={bigY - 53} color={green} />
            <Label x={72} y={smallY - 66}>
              100 N
            </Label>
            <Label x={255} y={bigY - 63}>
              400 N
            </Label>
          </>
        )}
        {step === 0 && (
          <>
            <Label x={72} y={51}>
              1 cm²
            </Label>
            <Label x={255} y={51}>
              4 cm²
            </Label>
          </>
        )}
        <Label x={180} y={199}>
          {step === 2 ? "4 cm ↓ · 1 cm ↑" : "Même augmentation de pression"}
        </Label>
      </>
    );
  }
  if (kind === "lock") {
    const level = step === 0 ? 139 : step === 1 ? 109 : 79;
    return (
      <>
        <rect x="17" y="79" width="89" height="98" fill={`url(#${id}-water)`} />
        <rect x="106" y={level} width="148" height={177 - level} fill={`url(#${id}-water)`} />
        <rect x="254" y="139" width="89" height="38" fill={`url(#${id}-water)`} />
        <path d="M17 177H343" stroke="#929eab" strokeWidth="10" fill="none" />
        <path
          d="M106 79V169"
          stroke={step === 2 ? "#c7dce8" : ink}
          strokeWidth={step === 2 ? 2 : 7}
          strokeDasharray={step === 2 ? "4 5" : undefined}
        />
        <path
          d="M254 139V169"
          stroke={step === 0 ? "#c7dce8" : ink}
          strokeWidth={step === 0 ? 2 : 7}
          strokeDasharray={step === 0 ? "4 5" : undefined}
        />
        <g transform={`translate(151 ${level - 16})`}>
          <path d="M0 4H70L58 21H12Z" fill={`url(#${id}-metal)`} stroke={ink} strokeWidth="2" />
          <rect x="18" y="-11" width="31" height="15" rx="3" fill="#f1c77b" stroke={ink} />
          <path d="M23-7h9M38-7h7" stroke={blue} strokeWidth="3" />
        </g>
        {step === 1 && (
          <>
            <path d="M76 136H124" stroke={blue} strokeWidth="8" />
            <Arrow x1={78} y1={136} x2={126} y2={136} />
          </>
        )}
        {step === 0 && <Arrow x1={240} y1={110} x2={207} y2={110} />}
        {step === 2 && <Arrow x1={139} y1={52} x2={103} y2={52} />}
        <Label x={56} y={40}>
          Amont
        </Label>
        <Label x={180} y={40}>
          Sas
        </Label>
        <Label x={306} y={40}>
          Aval
        </Label>
        <Label x={180} y={201}>
          {["Porte aval ouverte", "Remplissage par une vanne", "Porte amont ouverte"][step]}
        </Label>
      </>
    );
  }
  if (kind === "lens")
    return (
      <>
        <path d="M18 105H342" stroke="#9aabbc" strokeDasharray="5 5" />
        {step > 0 && (
          <path
            d={
              step === 1
                ? "M170 48Q200 105 170 162Q140 105 170 48Z"
                : "M153 48Q174 105 153 162H187Q166 105 187 48Z"
            }
            fill="#c6e4f4"
            fillOpacity=".75"
            stroke={blue}
            strokeWidth="2"
          />
        )}
        {[75, 105, 135].map((y) => (
          <g key={y}>
            <Arrow x1={22} y1={y} x2={step === 0 ? 332 : 170} y2={y} color="#bb8e2a" />
            {step === 1 && (
              <Arrow x1={170} y1={y} x2={335} y2={105 + ((105 - y) * 75) / 90} color="#bb8e2a" />
            )}
            {step === 2 && (
              <>
                <Arrow x1={170} y1={y} x2={335} y2={y + ((y - 105) * 165) / 90} color="#bb8e2a" />
                {y !== 105 && <path d={`M80 105L170 ${y}`} stroke={warm} strokeDasharray="4 4" />}
              </>
            )}
          </g>
        ))}
        {step === 1 && (
          <>
            <Dot x={260} y={105} color={warm} />
            <Label x={260} y={173}>
              Foyer
            </Label>
          </>
        )}
        {step === 2 && (
          <>
            <Dot x={80} y={105} color={warm} />
            <Label x={80} y={173}>
              Foyer virtuel
            </Label>
          </>
        )}
        <Label x={180} y={198}>
          {["Rayons parallèles", "Lentille convergente", "Lentille divergente"][step]}
        </Label>
      </>
    );
  if (kind === "fibre")
    return (
      <>
        <rect
          x="28"
          y="69"
          width="277"
          height="76"
          rx="8"
          fill="#dce6f3"
          stroke="#8da3bc"
          strokeWidth="2"
        />
        <rect
          x="28"
          y="88"
          width="277"
          height="38"
          fill="#f7fcff"
          stroke={blue}
          strokeWidth="1.5"
        />
        <Label x={180} y={35}>
          Gaine : indice plus faible
        </Label>
        <path d="M179 41V65" stroke={ink} />
        <Label x={168} y={177}>
          Cœur
        </Label>
        <path d="M165 158V131" stroke={ink} />
        {step > 0 && (
          <>
            <path
              d="M12 108L48 108 85 89 159 125 233 89 305 125"
              fill="none"
              stroke={warm}
              strokeWidth="3"
            />
            <Arrow x1={267} y1={106} x2={304} y2={125} color={warm} />
          </>
        )}
        {step === 2 && (
          <>
            <rect
              x="306"
              y="91"
              width="30"
              height="50"
              rx="5"
              fill={`url(#${id}-metal)`}
              stroke={ink}
            />
            <Dot x={319} y={112} color={warm} />
            <path d="M307 157h10v-9h9v9h12" fill="none" stroke={blue} strokeWidth="2" />
          </>
        )}
        <Label x={180} y={201}>
          {step === 2 ? "Impulsion → récepteur" : "Deux verres, deux indices"}
        </Label>
      </>
    );
  if (kind === "distillation")
    return (
      <>
        <path
          d="M74 61V92Q47 101 47 126Q47 152 79 152T111 126Q111 102 86 92V61Z"
          fill="#f4f9fb"
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M49 126Q55 113 79 126T109 126Q108 151 79 151T49 126Z" fill={`url(#${id}-gold)`} />
        <path
          d="M80 61V48H122L277 131V155"
          fill="none"
          stroke={ink}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path d="M80 61V48H122L277 131V155" fill="none" stroke="#e4f1f6" strokeWidth="3" />
        <path
          d="M141 52L250 110 240 131 131 73Z"
          fill="#b5dced"
          fillOpacity=".65"
          stroke={blue}
          strokeWidth="2"
        />
        <path d="M151 56V37M231 126V150" stroke={blue} strokeWidth="3" />
        <path
          d="M259 149V174H306V149"
          fill={step === 2 ? "#f8dfb2" : "#f7fbff"}
          stroke={ink}
          strokeWidth="2"
        />
        <path d="M54 168H105" stroke={warm} strokeWidth="6" strokeLinecap="round" />
        {step === 0 && (
          <>
            <Arrow x1={66} y1={190} x2={66} y2={173} color={warm} />
            <Arrow x1={90} y1={190} x2={90} y2={173} color={warm} />
          </>
        )}
        {step > 0 && (
          <>
            <Dot x={110} y={48} color={warm} r={3} />
            <Dot x={174} y={76} color={warm} r={3} />
            <Arrow x1={231} y1={159} x2={231} y2={139} />
            <Arrow x1={151} y1={37} x2={151} y2={22} />
          </>
        )}
        {step === 2 && <Dot x={277} y={160} color={warm} r={3} />}
        <Label x={61} y={30}>
          Mélange
        </Label>
        <Label x={283} y={56}>
          Eau séparée
        </Label>
        <Label x={264} y={199}>
          {step === 2 ? "Distillat enrichi" : "Condenseur"}
        </Label>
      </>
    );
  if (kind === "saponification")
    return (
      <>
        {step === 0 ? (
          <>
            <rect x="80" y="56" width="16" height="96" rx="5" fill="#b6d5ed" stroke={blue} />
            {[68, 103, 138].map((y) => (
              <g key={y}>
                <path
                  d={`M96 ${y}H126l12-7 12 14 12-14 12 14 12-14 12 14 12-7H248`}
                  stroke="#bd872b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinejoin="round"
                />
                <circle cx="119" cy={y} r="4" fill={warm} />
              </g>
            ))}
            <Label x={180} y={32}>
              Un triglycéride
            </Label>
            <Label x={180} y={193}>
              3 chaînes liées au glycérol
            </Label>
          </>
        ) : (
          <>
            <rect x="24" y="63" width="30" height="83" rx="10" fill="#b6d5ed" stroke={blue} />
            {[73, 105, 137].map((y) => (
              <g key={y}>
                <circle cx={step === 1 ? 110 : 150} cy={y} r="7" fill={blue} />
                <path
                  d={`M${step === 1 ? 117 : 157} ${y}l13-7 12 14 12-14 12 14 12-14 12 14 12-7h28`}
                  fill="none"
                  stroke="#bd872b"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </g>
            ))}
            <Label x={43} y={181}>
              Glycérol
            </Label>
            <Label x={228} y={181}>
              {step === 1 ? "3 OH⁻ réagissent" : "3 carboxylates"}
            </Label>
            <Label x={180} y={32}>
              {step === 1 ? "Les liaisons sont transformées" : "Savon + glycérol"}
            </Label>
            {step === 1 && <Arrow x1={65} y1={105} x2={87} y2={105} color={warm} />}
            {step === 2 && (
              <>
                <Label x={137} y={73} color={blue}>
                  −
                </Label>
                <Label x={137} y={105} color={blue}>
                  −
                </Label>
                <Label x={137} y={137} color={blue}>
                  −
                </Label>
              </>
            )}
          </>
        )}
      </>
    );
  return null;
}
