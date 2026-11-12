import {
  AnatomyScene,
  Arrow,
  Label,
  Brain,
  LiverOrgan,
  Intestine,
  blood,
  vein,
  gold,
  green,
  warm,
  ink,
  type DrawingProps,
} from "./OrgansParts";
import { SLEEP_EXAMPLE, SLEEP_LEVEL } from "@/lib/lesson-visuals/organs-models";
export function NeuroOrgansDrawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "thermostatbody")
    return (
      <AnatomyScene
        id={id}
        title={
          [
            "Mesurer, comparer, ajuster",
            "Faciliter les pertes de chaleur",
            "Conserver et produire la chaleur",
          ][s]!
        }
        foot={
          [
            "L’hypothalamus participe au réglage",
            "La sueur doit s’évaporer",
            "Resserrer et frissonner",
          ][s]!
        }
      >
        {s === 0 ? (
          <>
            <Brain id={id} x={188} y={110} scale={0.83} />
            <circle cx="188" cy="132" r="7" fill={gold} stroke="#fff0b7" strokeWidth="3" />
            <path d="M27 140Q54 133 79 140V176H27Z" fill={`url(#${id}-tissue)`} stroke="#b68786" />
            <path d="M27 142Q54 135 79 142" stroke="#d5a986" strokeWidth="5" fill="none" />
            <path d="M43 138v18m0-6 6-7m-6 11-7-4" stroke={vein} strokeWidth="2" fill="none" />
            <Arrow x1={83} y1={143} x2={149} y2={135} color={vein} />
            <path
              d="M153 135H180"
              stroke={vein}
              strokeWidth="2"
              fill="none"
              strokeDasharray="3 3"
            />
            <Label x={52} y={122}>
              Peau
            </Label>
            <Label x={279} y={73}>
              Comparer
            </Label>
            <path d="M257 81L195 128" stroke="#9ba7b2" />
            <Label x={280} y={162}>
              ≈ 37 °C
            </Label>
            <path d="M249 151L200 135" stroke={gold} />
          </>
        ) : (
          <>
            <path
              d="M25 126Q180 117 335 126V190H25Z"
              fill={`url(#${id}-tissue)`}
              stroke="#b08b87"
              strokeWidth="1.5"
            />
            <path d="M25 127Q180 118 335 127" stroke="#d6a887" strokeWidth="5" fill="none" />
            <path
              d="M37 170H129Q151 169 151 149Q151 137 172 137H188Q208 137 208 151Q208 170 232 170H323"
              stroke="#edd6cf"
              strokeWidth={s === 1 ? 18 : 10}
              fill="none"
            />
            <path
              d="M37 170H129Q151 169 151 149Q151 137 172 137H188Q208 137 208 151Q208 170 232 170H323"
              stroke={blood}
              strokeWidth={s === 1 ? 11 : 4}
              fill="none"
            />
            {s === 1 ? (
              <>
                <path
                  d="M78 172q-13-7 0-13t0-13t0-13v-10"
                  stroke={vein}
                  strokeWidth="3"
                  fill="none"
                />
                <path d="M77 110q-11-12 0-23q12 11 0 23Z" fill="#a6cbdf" stroke={vein} />
                <path
                  d="M56 92q-7-14 3-24M96 92q8-14 0-24"
                  stroke={vein}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3 4"
                />
                <Arrow x1={177} y1={120} x2={177} y2={82} color={warm} />
                <Arrow x1={201} y1={120} x2={201} y2={82} color={warm} />
                <Label x={85} y={55}>
                  Évaporation
                </Label>
                <Label x={274} y={102}>
                  Élargis
                </Label>
                <path d="M248 108L207 145" stroke="#9ba7b2" />
              </>
            ) : (
              <>
                <ellipse
                  cx="272"
                  cy="159"
                  rx="35"
                  ry="18"
                  fill={`url(#${id}-blood)`}
                  stroke="#a35b6e"
                  strokeWidth="1.5"
                />
                <path
                  d="M245 159l7-8 8 16 8-16 8 16 8-16 8 8"
                  stroke="#f3d5c4"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M243 137q-7-7 0-14M273 134q-7-7 0-14M300 137q-7-7 0-14"
                  stroke={warm}
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M242 187l-5-6 5-6m62 12 5-6-5-6"
                  stroke={warm}
                  strokeWidth="2"
                  fill="none"
                />
                <Label x={271} y={104}>
                  Frissons
                </Label>
                <Label x={86} y={88}>
                  Resserrés
                </Label>
                <path d="M100 94L149 149" stroke="#9ba7b2" />
              </>
            )}
          </>
        )}
      </AnatomyScene>
    );
  if (kind === "withdrawalreflex")
    return (
      <AnatomyScene
        id={id}
        title={["De la peau à la moelle", "De la moelle au muscle", "La main se retire"][s]!}
        foot={s === 2 ? "Le cerveau est aussi informé" : "Un réflexe de retrait avec relais"}
      >
        <path
          d="M41 98Q49 89 59 99L88 137L128 157Q138 161 134 171Q130 179 119 173L76 155Q68 150 66 144L38 111Z"
          fill={`url(#${id}-tissue)`}
          stroke="#ba918a"
          strokeWidth="2"
          opacity={s === 2 ? 0.25 : 1}
        />
        {s === 2 && (
          <path
            d="M41 98Q52 91 59 103L82 136L103 94Q108 85 116 91Q123 95 119 105L98 153Q93 164 79 160L38 113Z"
            fill={`url(#${id}-tissue)`}
            stroke="#ba918a"
            strokeWidth="2"
          />
        )}
        <ellipse
          cx="64"
          cy="119"
          rx={s === 2 ? 12 : 9}
          ry={s === 2 ? 18 : 24}
          transform="rotate(-35 64 119)"
          fill={`url(#${id}-blood)`}
          stroke="#ad7284"
        />
        <path d="M136 180H178V191H128V180Z" fill="#bcc5cb" stroke="#7e8f9c" />
        <path
          d="M139 178q-6-13 0-20m13 20q-6-13 0-20m13 20q-6-13 0-20"
          stroke={warm}
          strokeWidth="2"
          fill="none"
        />
        <ellipse
          cx="267"
          cy="128"
          rx="37"
          ry="48"
          fill="#eadbd9"
          stroke="#aa9098"
          strokeWidth="2"
        />
        <path
          d="M267 102C251 84 247 104 257 116C247 123 246 149 259 145L267 138 275 145C289 150 287 122 277 116C288 101 281 85 267 102Z"
          fill="#b8a7b9"
          stroke="#927f9c"
        />
        <path d="M267 80V66" stroke="#bca7b8" strokeWidth="5" />
        <Brain id={id} x={267} y={55} scale={0.3} />
        <g opacity={s === 0 ? 1 : 0.4} data-reflex-path="sensory">
          <path d="M132 164L160 144H213L245 107" fill="none" stroke={warm} strokeWidth="3" />
          <Arrow x1={211} y1={144} x2={240} y2={112} color={warm} width={2} />
        </g>
        <g opacity={s >= 1 ? 1 : 0.2} data-reflex-path="interneuron">
          <path d="M245 107Q272 108 270 127L252 144" stroke={green} strokeWidth="3" fill="none" />
          <circle cx="270" cy="127" r="4" fill={green} />
          <Arrow x1={266} y1={132} x2={255} y2={143} color={green} width={2} />
        </g>
        <g opacity={s >= 1 ? 1 : 0.2} data-reflex-path="motor">
          <path d="M252 144L213 164H159L73 125" fill="none" stroke={vein} strokeWidth="3" />
          <Arrow x1={110} y1={142} x2={78} y2={128} color={vein} width={2} />
        </g>
        {s === 2 && (
          <>
            <path
              d="M274 112L289 87V72"
              stroke={warm}
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            <Arrow x1={289} y1={85} x2={289} y2={73} color={warm} width={2} />
            <Arrow x1={129} y1={134} x2={130} y2={107} color={green} />
          </>
        )}
        <Label x={65} y={69}>
          Muscle
        </Label>
        <path d="M67 76L63 100" stroke="#9ba7b2" />
        <Label x={271} y={199}>
          Moelle épinière
        </Label>
      </AnatomyScene>
    );
  if (kind === "bodyclock")
    return (
      <AnatomyScene
        id={id}
        title={
          ["La lumière donne un repère", "Un rythme qui continue", "Coordonner les organes"][s]!
        }
        foot={
          [
            "Rétine → horloge du cerveau",
            "Une période proche de 24 h",
            "Des rythmes dans tout le corps",
          ][s]!
        }
      >
        {s === 0 ? (
          <>
            <path
              d="M151 62C187 36 236 54 238 91C244 125 221 152 210 159V185H153V164L135 154 130 136 117 131 125 120 121 111 132 99Q130 76 151 62Z"
              fill={`url(#${id}-tissue)`}
              stroke="#ba918a"
              strokeWidth="2"
            />
            <Brain id={id} x={186} y={97} scale={0.59} />
            <circle cx="181" cy="128" r="6" fill={gold} />
            <path d="M130 110q10-7 17 0q-10 7-17 0Z" fill="#fff9e8" stroke="#8f7e86" />
            <path d="M141 106v8" stroke={vein} strokeWidth="3" />
            <circle cx="45" cy="105" r="16" fill="#efd47d" stroke={gold} />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
              <path key={n} d="M45 82v-5" transform={`rotate(${n * 45} 45 105)`} stroke={gold} />
            ))}
            <Arrow x1={67} y1={104} x2={119} y2={109} color={gold} />
            <path d="M147 110L170 112 181 128" stroke={gold} strokeWidth="2" fill="none" />
            <Label x={52} y={64}>
              Lumière
            </Label>
            <Label x={70} y={161}>
              Rétine
            </Label>
            <path d="M94 155L136 114" stroke="#9ba7b2" />
            <Label x={294} y={90}>
              Horloge
            </Label>
            <path d="M264 98L188 127" stroke={gold} />
          </>
        ) : s === 1 ? (
          <>
            <circle cx="180" cy="121" r="65" fill="#e6ebf0" stroke="#8f9eaf" strokeWidth="2" />
            {Array.from({ length: 24 }, (_, n) => (
              <path
                key={n}
                d={`M180 61v${n % 6 === 0 ? 9 : 4}`}
                stroke="#7b8fa4"
                strokeWidth={n % 6 === 0 ? 2 : 1}
                transform={`rotate(${n * 15} 180 121)`}
              />
            ))}
            <path
              d="M149 108C164 78 209 91 211 118C216 148 174 163 152 143"
              fill="none"
              stroke={vein}
              strokeWidth="3"
            />
            <Arrow x1={158} y1={148} x2={150} y2={135} color={vein} width={2} />
            <path
              d="M160 116Q169 105 179 116T201 116M160 128Q169 139 179 128T201 128"
              stroke={purpleClock}
              strokeWidth="3"
              fill="none"
            />
            {[0, 1, 2].map((n) => (
              <path key={n} d={`M${165 + n * 12} 113v17`} stroke="#ac98ae" strokeWidth="1" />
            ))}
            <path d="M56 76A24 24 0 1 0 76 112A25 25 0 0 1 56 76Z" fill="#b8c5d3" />
            <Label x={71} y={157}>
              Sans lumière
            </Label>
            <Label x={277} y={184}>
              Rythme interne
            </Label>
          </>
        ) : (
          <>
            <Brain id={id} x={180} y={79} scale={0.45} />
            <circle cx="180" cy="91" r="4" fill={gold} />
            <path
              d="M176 98L89 128M180 99V136M184 98L273 128"
              stroke={vein}
              strokeWidth="2"
              fill="none"
            />
            <Arrow x1={128} y1={114} x2={99} y2={124} color={vein} width={2} />
            <Arrow x1={180} y1={110} x2={180} y2={130} color={vein} width={2} />
            <Arrow x1={231} y1={114} x2={261} y2={124} color={vein} width={2} />
            <LiverOrgan id={id} x={75} y={158} scale={0.37} />
            <path
              d="M175 145C153 132 151 154 163 164L180 180 197 164C211 151 202 133 185 146L180 150Z"
              fill={`url(#${id}-blood)`}
              stroke={blood}
            />
            <Intestine id={id} x={285} y={158} scale={0.41} />
            <Label x={74} y={201}>
              Foie
            </Label>
            <Label x={180} y={201}>
              Cœur
            </Label>
            <Label x={286} y={201}>
              Intestin
            </Label>
          </>
        )}
      </AnatomyScene>
    );
  if (kind === "sleepnight")
    return (
      <AnatomyScene
        id={id}
        title="Lire un hypnogramme fictif"
        foot={
          [
            "Un cycle n’est pas une minuterie",
            "N3 : surtout en début de nuit",
            "REM : épisodes plus longs à la fin",
          ][s]!
        }
      >
        <rect x="82" y="44" width="252" height="143" rx="7" fill="#e6edf4" opacity=".8" />
        {s === 0 && (
          <rect x="88" y="44" width={244 * 0.27} height="143" rx="5" fill="#f0d58e" opacity=".35" />
        )}
        {(["Wake", "REM", "N1", "N2", "N3"] as const).map((stage) => (
          <g key={stage}>
            <path
              d={`M82 ${SLEEP_LEVEL[stage]}H334`}
              stroke="#bac7d3"
              strokeDasharray="3 4"
              fill="none"
            />
            <text
              x="66"
              y={SLEEP_LEVEL[stage] + 5}
              textAnchor="end"
              fontSize="18"
              fontWeight="650"
              fill={ink}
            >
              {stage === "Wake" ? "Éveil" : stage}
            </text>
          </g>
        ))}
        {SLEEP_EXAMPLE.map((segment, i) => {
          const x = 88 + segment.start * 244,
            w = (segment.end - segment.start) * 244,
            y = SLEEP_LEVEL[segment.stage];
          const active =
            s === 0
              ? segment.end <= 0.27
              : s === 1
                ? segment.stage === "N3"
                : segment.stage === "REM";
          const color = s === 2 ? "#ac658f" : vein;
          return (
            <g
              key={i}
              data-sleep-stage={segment.stage}
              data-relative-start={segment.start}
              data-relative-end={segment.end}
            >
              {i > 0 && (
                <path
                  d={`M${x} ${SLEEP_LEVEL[SLEEP_EXAMPLE[i - 1]!.stage]}V${y}`}
                  stroke="#9aacbd"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
              {active && (
                <rect x={x} y={y - 6} width={w} height="12" fill={color} opacity=".16" rx="2" />
              )}
              <path
                d={`M${x} ${y}h${w}`}
                stroke={active ? color : "#899aaa"}
                strokeWidth={active ? 4 : 2}
                fill="none"
              />
            </g>
          );
        })}
        <Label x={115} y={201}>
          Début
        </Label>
        <Arrow x1={157} y1={195} x2={259} y2={195} color="#8e9faf" width={1.5} />
        <Label x={309} y={201}>
          Fin
        </Label>
      </AnatomyScene>
    );
  return null;
}
const purpleClock = "#8d789e";
