import { Label, Line } from "./EverydayParts";
import { Material } from "./EditorialDrawings";

const fishProfile =
  "M56 139q17-6 26-25q12 6 27 14q24-13 62-14q22-18 49-15q30-4 59 17q18 14 17 29l-15 11q-11 14-33 15q-30 6-60-11q-43 1-68-14q-14 1-31 15q-5-16-33-22Z";
const jaw = "M251 140q10 4 35-7l10 8q-7 11-18 14q-14 9-36 4q15-6 19-12Z";

export function MidnightSea(step: number, id: string) {
  const lit = step === 1;
  const snow = step === 2;
  return (
    <>
      <defs>
        <Material id={id + "-ocean"} colors={["#468698", "#19485b", "#111f34", "#0d1624"]} />
        <Material id={id + "-body"} colors={["#818b8d", "#5c737c", "#394c5e", "#1c2735"]} />
        <clipPath id={id + "-oceanCut"}>
          <rect x="22" y="42" width="316" height="162" rx="10" />
        </clipPath>
        <clipPath id={id + "-fishCut"}>
          <path d={fishProfile} />
        </clipPath>
        <radialGradient id={id + "-flash"}>
          <stop stopColor="#efffd4" stopOpacity=".88" />
          <stop offset=".35" stopColor="#a9e8be" stopOpacity=".57" />
          <stop offset="1" stopColor="#76d4c5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="22" y="42" width="316" height="162" rx="10" fill={`url(#${id}-ocean)`} />
      <g clipPath={`url(#${id}-oceanCut)`}>
        {step === 0 && (
          <>
            <path
              d="M28 52q46-11 90 0t81 1t86-2t51 2"
              stroke="#a7d5d6"
              strokeWidth="2"
              opacity=".68"
              fill="none"
            />
            <path d="M58 52l-33 113l139 1l-77-114Z" fill="#b9d8ca" opacity=".14" />
            <path
              d="M80 55l59 81M57 55l-20 63M107 59l38 46"
              stroke="#aed5d2"
              strokeWidth="1.3"
              opacity=".35"
            />
          </>
        )}
        {snow &&
          Array.from({ length: 54 }, (_, i) => (
            <circle
              key={i}
              cx={30 + ((i * 57) % 294)}
              cy={51 + ((i * 29) % 150)}
              r={i % 6 === 0 ? 1.9 : 0.7 + (i % 3) * 0.25}
              fill="#d8ebdd"
              opacity={0.35 + (i % 5) * 0.12}
            />
          ))}
        <g
          opacity={step === 0 ? 0.72 : 1}
          transform={step === 0 ? "translate(93 17) scale(.76)" : undefined}
        >
          <path d={fishProfile} fill={`url(#${id}-body)`} stroke="#7d9194" strokeWidth="1.35" />
          <path
            d="M112 126q12-25 33-30l18 16m-33 28-22 20 34-9m43-35-3-15 15-4m-54 44q26 15 55 17"
            stroke="#87979a"
            strokeWidth="2"
            fill="#425760"
            opacity=".86"
          />
          <g clipPath={`url(#${id}-fishCut)`}>
            <path
              d="M107 132q52 13 102-7m-84 17q37 10 70-1m-99-10-14-7m15 14-14 9"
              fill="none"
              stroke="#b2b6a7"
              strokeWidth="1.2"
              opacity=".47"
            />
            {Array.from({ length: 85 }, (_, i) => (
              <ellipse
                key={i}
                cx={85 + ((i * 43) % 192)}
                cy={105 + ((i * 23) % 57)}
                rx={i % 4 === 0 ? 1.55 : 0.7}
                ry={0.6}
                fill={i % 4 ? "#adc0bc" : "#162131"}
                opacity={i % 4 ? 0.28 : 0.46}
              />
            ))}
          </g>
          <path d={jaw} fill="#111824" stroke="#809291" strokeWidth="1.3" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M${270 + i * 3.6} ${141 - i * 0.9}l.9 6l1.3-6Z`} fill="#c9c6ad" />
          ))}
          <path d="M232 140q-15 4-19 12l22-5" fill="#647c82" stroke="#89979a" strokeWidth="1.2" />
          <ellipse cx="263" cy="126" rx="6.2" ry="5" fill="#b6c4b9" stroke="#263948" />
          <circle cx="266" cy="126" r="2.4" fill="#0a1622" />
          <path d="M254 110q-6-28 12-40q12-8 22 5" fill="none" stroke="#91a6a9" strokeWidth="2.6" />
          {lit && <circle cx="290" cy="77" r="29" fill={`url(#${id}-flash)`} />}
          <ellipse
            cx="290"
            cy="77"
            rx="5.6"
            ry="3.7"
            fill={lit ? "#e5ffc8" : "#8fa8a0"}
            stroke={lit ? "#b7eec5" : "#54656b"}
          />
        </g>
        {lit && (
          <>
            <Line d="M251 67l29 7" color="#dbe5d1" width={1.3} />
            <text x="242" y="67" textAnchor="end" fill="#ecf4eb" fontSize="18" fontWeight="650">
              Leurre
            </text>
          </>
        )}
        {snow && (
          <path
            d="M69 75v53l-6-9m6 9 6-9"
            fill="none"
            stroke="#c7dbda"
            strokeWidth="1.8"
            strokeDasharray="4 3"
          />
        )}
      </g>
      <Label x={180} y={225} color="#263746">
        {["Lumière solaire atténuée", "Exemple de baudroie", "Chute de particules"][step]}
      </Label>
    </>
  );
}
