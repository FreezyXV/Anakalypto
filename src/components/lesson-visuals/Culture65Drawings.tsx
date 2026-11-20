import { Callout, Material } from "./EditorialDrawings";
import {
  Arrow,
  Book,
  Face,
  Ground,
  Label,
  Line,
  Marker,
  MetalPaint,
  PlotGrid,
  Rule,
  Wire,
  blue,
  dark,
  ochre,
  paper,
  rust,
  slate,
  steel,
  teal,
  type SceneSet,
} from "./Atlas65Parts";

function Person({
  x,
  y,
  tone = blue,
  scale = 1,
}: {
  x: number;
  y: number;
  tone?: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-12 30q2-16 12-18 10 2 12 18l-3 8h-18Z" fill={tone} stroke={dark} />
      <circle cy="5" r="6" fill="#d0aa83" stroke="#876e59" />
      <Line d="M-5 38l-3 12m13-12 3 12" color={dark} width={2} />
    </g>
  );
}

function Chorus(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-theaterGold"} colors={["#f0e2bd", "#bd9c6d", "#87684e"]} />
      </defs>
      <path
        d="M38 115Q180 17 322 115l-24 34Q180 73 62 149Z"
        fill={`url(#${id}-theaterGold)`}
        stroke="#9e865d"
        strokeWidth="1.5"
      />
      <path
        d="M46 128Q180 40 315 128M54 141Q180 56 306 140"
        fill="none"
        stroke="#f1dfb8"
        strokeWidth="3"
      />
      <ellipse cx="180" cy="147" rx="100" ry="29" fill="#ddc8a4" stroke="#ae9574" />
      {[
        [119, 124],
        [149, 114],
        [180, 110],
        [210, 114],
        [240, 124],
      ].map(([x, y]) => (
        <Person key={x} x={x!} y={y!} scale={0.65} tone={teal} />
      ))}
      {step > 0 && <Person x={step === 1 ? 238 : 204} y={135} scale={0.85} tone={rust} />}
      {step === 2 && (
        <>
          <Person x={161} y={137} scale={0.85} tone={blue} />
          <Arrow x1={179} y1={154} x2={190} y2={154} width={1.7} color={ochre} />
        </>
      )}
      <Rule>
        {
          [
            "Le chœur occupe l’orchestra",
            "Une voix se détache du chœur",
            "Deux personnages se répondent",
          ][step]
        }
      </Rule>
    </>
  );
}

function Novel(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Book x={step === 0 ? 37 : 30} y={66} w={step === 0 ? 115 : 132} h={98} open color={rust} />
      {step === 0 && (
        <>
          <path d="M187 68h134v101H187Z" fill="#e1cfaa" stroke={ochre} />
          <path d="M203 140l43-44 27 22 32-30v64H201Z" fill="#92967c" stroke={teal} />
          <circle cx="284" cy="89" r="8" fill="#d7a96d" />
          <Label x={255} y={187}>
            Récit d’aventures
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <Person x={221} y={98} tone={steel} />
          <Person x={279} y={86} tone={rust} />
          <Wire d="M223 86q27-29 56-10" tone={ochre} />
          <Label x={250} y={177}>
            Points de vue
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          {[198, 221, 245, 269, 293].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={76 + (i % 3) * 10}
              width="12"
              height={87 - (i % 3) * 10}
              rx="2"
              fill={i % 2 ? `url(#${id}-brass)` : `url(#${id}-alloy)`}
              stroke={steel}
            />
          ))}
          <Ground d="M185 163h131" />
          <Label x={254} y={188}>
            Genres mêlés
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Le récit s’étend sur plusieurs pages",
            "Le narrateur change de perspective",
            "Des formes et des publics variés",
          ][step]
        }
      </Rule>
    </>
  );
}

function ArchiveRoom(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M34 68l24-15h104l17 15v111H34Z" />
      <path d="M47 72h121v100H47Z" fill="#70858a" stroke={steel} />
      {[83, 113, 143].map((y) => (
        <g key={y}>
          {[54, 79, 106, 135].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={y}
              width={i % 2 ? 20 : 22}
              height="21"
              rx="2"
              fill={i % 2 ? "#baa788" : "#d4c5a5"}
              stroke="#7f7b68"
            />
          ))}
          <path d={`M49 ${y + 24}h116`} stroke="#d7e2db" strokeWidth="2" />
        </g>
      ))}
      <rect x="201" y="58" width="115" height="112" rx="8" fill="#e9efeb" stroke="#a4b8b8" />
      {step === 0 ? (
        <>
          <circle cx="258" cy="102" r="16" fill="#d7b574" stroke={ochre} />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <path
              key={a}
              transform={`rotate(${a} 258 102)`}
              d="M258 79v-8"
              stroke={ochre}
              strokeWidth="2"
            />
          ))}
          <path d="M219 79l79 63" stroke={rust} strokeWidth="3" />
          <Label x={258} y={156}>
            Lumière
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <PlotGrid x={218} y={77} w={82} h={52} />
          <Line d="M223 110l12-5 13 5 14-4 14 2 18-3" color={teal} />
          <Label x={258} y={155}>
            Climat stable
          </Label>
        </>
      ) : (
        <>
          <path d="M220 125h75l-11-40h-49Z" fill="#bba88b" stroke={steel} />
          <Book open x={230} y={83} w={55} h={42} />
          <Label x={258} y={155}>
            Consultation
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Protéger les supports de la lumière",
            "Surveiller chaleur et humidité",
            "Soutenir et manipuler avec soin",
          ][step]
        }
      </Rule>
    </>
  );
}

function Heritage(step: number) {
  const x = step === 0 ? 109 : step === 1 ? 203 : 225;
  return (
    <>
      <ellipse cx="179" cy="167" rx="132" ry="20" fill="#dce1cc" stroke="#9da78f" />
      <path d="M51 165q108-77 253 0" fill="none" stroke="#97aa98" strokeDasharray="4 5" />
      <Person x={84} y={91} tone={teal} />
      <Person x={147} y={89} tone={rust} />
      {step > 0 && <Person x={217} y={108} tone={ochre} scale={0.83} />}
      {step === 2 && <Person x={283} y={83} tone={blue} />}
      <path
        d={
          step === 0
            ? "M79 124l28-19m44 19-28-19"
            : step === 1
              ? "M151 120l20-13m48 28-29-25"
              : "M221 135l24-16m40-6-27 4"
        }
        fill="none"
        stroke={ochre}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d={`M${x - 12} 83q0-12 9-12v9m7-5v-15l11-3v12`}
        fill="none"
        stroke={rust}
        strokeWidth="2.4"
      />
      <Rule>
        {
          [
            "Une pratique partagée",
            "Un geste appris en le faisant",
            "Une nouvelle génération l’adapte",
          ][step]
        }
      </Rule>
    </>
  );
}

function Craft(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M36 156l262-20 27 29-265 18Z" fill={`url(#${id}-timber)`} stroke="#7c5e40" />
      <path d="M55 158l210-16m-200 28 231-20" stroke="#e1bb8f" strokeWidth="1.5" />
      <path
        d={`M96 139q29 ${[2, -8, -14][step]} 40-30 20-11 38 25Z`}
        fill="#bc9971"
        stroke="#7b6953"
      />
      <path
        d={
          step === 0
            ? "M80 97l22-18 31 16 31 15-6 10-28-11-26 7Z"
            : step === 1
              ? "M189 82l-17-10-23 23-19 20 9 10 19-16 28-6Z"
              : "M200 86l-24-11-20 23-16 24 10 10 25-18 25-7Z"
        }
        fill="#d4ae87"
        stroke="#8f6e54"
        strokeWidth="1.7"
      />
      <Face id={id} d={step < 2 ? "M100 121l24-25 16 15-27 23Z" : "M109 117l34-29 19 10-39 34Z"} />
      <path
        d={["M154 102l26 7", "M184 99l29 31", "M184 96l50 27"][step]}
        stroke={ochre}
        strokeWidth="2.5"
      />
      <Callout
        x={258}
        y={76}
        leader={["M240 82l-72 26", "M241 81l-37 34", "M244 81l-25 33"][step]!}
      >
        {["Angle du geste", "Retour du maître", "Geste régulier"][step]!}
      </Callout>
      <Rule>
        {
          [
            "Observer l’outil et la matière",
            "Répéter avec un retour précis",
            "Adapter le geste au résultat",
          ][step]
        }
      </Rule>
    </>
  );
}

function Tower(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step === 1 ? (
        <>
          <Face id={id} d="M179 54l17 14v45l57 32-5 21-62-29-61 31-13-19 51-33V69Z" tone="glass" />
          <circle cx="182" cy="118" r="19" fill="#b3a17c" stroke={ochre} strokeWidth="2" />
          <Callout x={269} y={81} leader="M259 88l-61 20">
            Noyau
          </Callout>
          <Callout x={69} y={133} leader="M91 137l37 12">
            Aile
          </Callout>
          <Label x={180} y={181}>
            Coupe en plan
          </Label>
        </>
      ) : (
        <>
          <Face
            id={id}
            d={
              step === 0
                ? "M144 170V96h18V74h10V56h12v17h12v23h16v74Z"
                : "M133 174v-29h12v-23h12v-36h13V65h10V47h6v36h8v23h9v23h10v45Z"
            }
            tone="glass"
          />
          <Ground d="M104 174h143" />
          {[78, 109, 145].map((y, i) => (
            <path
              key={y}
              d={`M48 ${y}q51 ${step === 0 ? -8 : -i * 4} 87 1m82 1q30 ${step === 0 ? 16 - 8 * i : 8 - 4 * i} 84 1`}
              fill="none"
              stroke={blue}
              strokeWidth={step === 0 ? 2.3 : 1.75}
              strokeLinecap="round"
            />
          ))}
          {step === 0 && (
            <>
              <path
                d="M236 97q33-27 32-7t-23 1m7 39q33 28 31 7t-22-1"
                fill="none"
                stroke={ochre}
                strokeWidth="2"
              />
              <Label x={273} y={167}>
                Tourbillons
              </Label>
            </>
          )}
          {step === 2 && (
            <Callout x={260} y={80} leader="M251 86l-57 24">
              Retraits
            </Callout>
          )}
        </>
      )}
      <Rule>
        {
          [
            "Le vent contourne le volume",
            "Trois ailes épaulent le noyau",
            "Le profil varie avec la hauteur",
          ][step]
        }
      </Rule>
    </>
  );
}

function WireNews(step: number) {
  return (
    <>
      <rect x="31" y="59" width="122" height="119" rx="6" fill={paper} stroke={ochre} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M45 ${75 + i * 16}h${i % 3 === 0 ? 86 : 68 + (i % 2) * 18}`}
          stroke={i < 2 ? rust : "#8d9f9e"}
          strokeWidth={i < 2 ? 3 : 2}
        />
      ))}
      <rect x="206" y="59" width="122" height="119" rx="6" fill="#eaf0ef" stroke={steel} />
      {Array.from({ length: [2, 3, 6][step]! }, (_, i) => (
        <path
          key={i}
          d={`M220 ${75 + i * 16}h${i % 3 === 0 ? 86 : 68 + (i % 2) * 18}`}
          stroke={i < 2 ? rust : blue}
          strokeWidth={i < 2 ? 3 : 2}
        />
      ))}
      <Arrow x1={160} y1={98} x2={199} y2={98} width={2.2} color={ochre} />
      {step === 1 && <path d="M173 116l15 18m0-18-15 18" stroke={rust} strokeWidth="3" />}
      {step === 2 && <Arrow x1={160} y1={145} x2={199} y2={145} width={2.0} color={blue} />}
      <Label x={92} y={190}>
        Rédaction
      </Label>
      <Label x={267} y={190}>
        Réception
      </Label>
      <Rule>
        {
          [
            "Les faits clés partent d’abord",
            "En cas de coupure, ils restent lisibles",
            "Le contexte s’ajoute ensuite",
          ][step]
        }
      </Rule>
    </>
  );
}

function NewsSheet({
  x,
  y,
  scale = 1,
  ad = false,
}: {
  x: number;
  y: number;
  scale?: number;
  ad?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 0h84v96H0Z" fill={paper} stroke="#8e826b" strokeWidth="1.25" />
      <path d="M8 14h68M8 20h68" stroke={dark} strokeWidth="2.8" />
      {[32, 40, 48, 56, 64, 72, 81, 87].map((y, i) => (
        <path
          key={y}
          d={`M9 ${y}h${i % 2 ? 24 : 29}${ad && i > 3 ? "" : "m8 0h24"}`}
          stroke="#889087"
          strokeWidth="1.4"
        />
      ))}
      {ad && <path d="M43 57h31v29H43Z" fill="#d4b674" stroke={ochre} />}
    </g>
  );
}

function CheapPress(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <NewsSheet x={45} y={68} scale={1.13} ad={step > 0} />
      {step < 2 ? (
        <>
          {[0, 1, 2].slice(0, step ? 1 : 3).map((i) => (
            <ellipse
              key={i}
              cx={246}
              cy={131 - i * 8}
              rx="30"
              ry="10"
              fill={`url(#${id}-brass)`}
              stroke={ochre}
            />
          ))}
          {step === 1 && (
            <>
              <Arrow x1={146} y1={138} x2={214} y2={135} color={ochre} />
              <Label x={253} y={174}>
                Publicité
              </Label>
            </>
          )}
          {step === 0 && (
            <Label x={244} y={170}>
              Abonnement
            </Label>
          )}
        </>
      ) : (
        <>
          {[178, 202, 225].map((x, i) => (
            <NewsSheet key={x} x={x} y={72 + i * 4} scale={0.77} ad />
          ))}
          <Person x={277} y={99} tone={teal} scale={0.78} />
          <Label x={256} y={174}>
            Vente au numéro
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Le lecteur paie l’abonnement",
            "La publicité finance une part",
            "Un prix bas élargit la diffusion",
          ][step]
        }
      </Rule>
    </>
  );
}

function Printing(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path d="M47 162h144v12H47Z" fill={`url(#${id}-timber)`} stroke={ochre} />
      <path d="M60 164V61h115v103h-9V72H70v92Z" fill={`url(#${id}-timber)`} stroke="#816648" />
      <path d="M118 66v67m-20-50h40" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <Face id={id} d="M83 112h70v11H83Z" />
      <path d="M78 148h82M84 135h69" stroke={steel} strokeWidth="3" />
      {step === 0 && (
        <>
          <path d="M97 139h45" stroke={ochre} strokeDasharray="4 3" strokeWidth="4" />
          <Label x={252} y={111}>
            Caractères
          </Label>
          <Line d="M207 116l-56 22" color={ochre} width={1.5} />
        </>
      )}
      {step > 0 && (
        <>
          {[0, 1, 2].slice(0, step + 1).map((i) => (
            <NewsSheet key={i} x={211 + i * 27} y={77 + i * 9} scale={0.73} />
          ))}
          {step === 2 && <Line d="M199 170h126" color={teal} dash="5 3" />}
        </>
      )}
      <Rule>
        {
          [
            "Composer une page en caractères",
            "Imprimer plusieurs exemplaires",
            "Recommencer à date régulière",
          ][step]
        }
      </Rule>
    </>
  );
}

function Snapshot(step: number) {
  return (
    <>
      {[40, 136, 232].map((x, i) => (
        <g key={x} opacity={i > step ? 0.4 : 1}>
          <rect
            x={x}
            y="67"
            width="79"
            height="74"
            rx="5"
            fill="#e8eeee"
            stroke={steel}
            strokeWidth="1.5"
          />
          <path d={`M${x} 80h79`} stroke={steel} strokeWidth="1.4" />
          <path d={`M${x + 9} 90h60v20h-60Z`} fill={[slate, "#c6af7c", "#879d8b"][i]} />
          <path d={`M${x + 9} 120h52m-52 8h42`} stroke="#899e9f" strokeWidth="1.4" />
          <Label x={x + 40} y={170}>
            {["Avril", "Juillet", "Nov."][i]}
          </Label>
        </g>
      ))}
      <Line d="M45 181h263" color={blue} width={1.7} />
      {[79, 175, 271].slice(0, step + 1).map((x) => (
        <Marker key={x} x={x} y={181} />
      ))}
      <Rule>
        {
          [
            "Une première capture datée",
            "La page change, l’archive s’étoffe",
            "Plusieurs versions se comparent",
          ][step]
        }
      </Rule>
    </>
  );
}

function History(step: number) {
  return (
    <>
      <Book x={43} y={62} w={78} h={100} color={rust} />
      {step > 0 && <Book x={141} y={64} w={78} h={98} color={blue} />}
      {step === 2 && <Book x={238} y={58} w={78} h={104} color={teal} />}
      <Label x={81} y={184}>
        Journal
      </Label>
      {step > 0 && (
        <Label x={180} y={184}>
          Lettre
        </Label>
      )}
      {step === 2 && (
        <Label x={276} y={184}>
          Registre
        </Label>
      )}
      {step === 0 && (
        <>
          <circle cx="180" cy="98" r="23" fill="none" stroke={ochre} strokeWidth="4" />
          <Line d="M194 115l26 31" color={ochre} width={7} />
        </>
      )}
      {step === 1 && <Wire d="M124 108h14" tone={ochre} />}
      {step === 2 && <Wire d="M122 108h18m81 0h16" tone={teal} />}
      <Rule>
        {
          [
            "Qui a produit cette trace ?",
            "Les témoins peuvent diverger",
            "Les traces permettent un recoupement",
          ][step]
        }
      </Rule>
    </>
  );
}

function Lavau(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step === 0 && (
        <>
          <path d="M27 171q28-97 151-105 100-1 155 105Z" fill="#ccb792" stroke="#9f886c" />
          <path d="M27 171q28-97 151-105 100-1 155 105Z" fill={`url(#${id}-section65)`} />
          <path d="M109 127h147v44H109Z" fill="#a58968" stroke="#705a45" />
          <Face id={id} d="M133 139h55v14h-55Zm70-3h30l-5 20h-20Z" tone="brass" />
          <Label x={181} y={58}>
            Tumulus
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <Face id={id} d="M101 91q79 12 159 0l-9 23-14 40-22 16h-71l-22-16-13-40Z" tone="brass" />
          <ellipse cx="181" cy="92" rx="79" ry="14" fill="#63564b" stroke={ochre} strokeWidth="3" />
          <path
            d="M111 104q70 12 140 0m-123 34q55 13 109 0"
            fill="none"
            stroke="#ecd29b"
            strokeWidth="3"
          />
          {[112, 250].map((x) => (
            <path
              key={x}
              d={`M${x} 102q-22-20-29-5t28 25`}
              transform={x === 250 ? "translate(362 0) scale(-1 1)" : undefined}
              fill="none"
              stroke={ochre}
              strokeWidth="4"
            />
          ))}
          <Label x={181} y={180}>
            Chaudron de bronze
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path d="M33 59h294v121H33Z" fill="#c6d9db" stroke="#85a6aa" />
          <path
            d="M34 60h292v25l-46 6-29 23-36-16-56-9-33 10-18 31-46 5-28 25Z"
            fill="#c6c5a8"
            stroke="#869787"
          />
          <path
            d="M178 103q6 38 72 51"
            fill="none"
            stroke={ochre}
            strokeWidth="2.3"
            strokeDasharray="4 4"
          />
          <Marker x={173} y={91} />
          <Marker x={247} y={152} />
          <Label x={156} y={78}>
            Lavau
          </Label>
          <Label x={264} y={175}>
            Méditerranée
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Le contexte relie les objets",
            "L’objet conserve des indices",
            "Le mobilier indique des échanges",
          ][step]
        }
      </Rule>
    </>
  );
}

function Meridian(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {step === 0 ? (
        <>
          {[64, 142, 221].map((x, i) => (
            <g key={x}>
              <Face
                id={id}
                d={`M${x} ${81 + i * 30}h${[217, 141, 81][i]}v17h-${[217, 141, 81][i]}Z`}
                tone="brass"
              />
              {Array.from({ length: [9, 7, 5][i]! }, (_, j) => (
                <path key={j} d={`M${x + j * [24, 22, 18][i]!} ${83 + i * 30}v9`} stroke={steel} />
              ))}
            </g>
          ))}
        </>
      ) : (
        <>
          <circle
            cx="132"
            cy="118"
            r="66"
            fill={`url(#${id}-glass)`}
            stroke={blue}
            strokeWidth="1.7"
          />
          <ellipse
            cx="132"
            cy="118"
            rx="29"
            ry="65"
            fill="none"
            stroke="#95afb2"
            strokeWidth="1.2"
          />
          <Line d="M66 118h132" color="#9ab4b8" width={1.2} />
          <path
            d="M132 52q40 27 30 65"
            fill="none"
            stroke={ochre}
            strokeWidth={step === 1 ? 4 : 2.5}
          />
          {step === 1 ? (
            <>
              <Callout x={239} y={81} leader="M220 85l-60-8">
                Quart d’arc
              </Callout>
              <Label x={252} y={141}>
                Pôle → équateur
              </Label>
            </>
          ) : (
            <>
              <Face id={id} d="M222 91h101v21H222Z" tone="brass" />
              <Line d="M232 91v11m20-11v8m20-8v11m20-11v8m20-8v11" color={steel} width={1.4} />
              <Label x={269} y={148}>
                Mètre étalon
              </Label>
            </>
          )}
        </>
      )}
      <Rule>
        {
          [
            "Des unités locales différentes",
            "Un méridien sert de référence",
            "Une unité commune à reproduire",
          ][step]
        }
      </Rule>
    </>
  );
}

export const culture65: SceneSet = {
  stageChorus: Chorus,
  novelReaders: Novel,
  archivesClimate: ArchiveRoom,
  livingHeritage: Heritage,
  craftTransmission: Craft,
  towerWind: Tower,
  newswire: WireNews,
  cheapPrint: CheapPress,
  printPress: Printing,
  webSnapshots: Snapshot,
  historyEvidence: History,
  lavauObjects: Lavau,
  meridianMeasure: Meridian,
};
