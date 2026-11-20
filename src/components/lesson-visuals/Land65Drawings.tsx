import { Callout, Hatch, Material } from "./EditorialDrawings";
import {
  Arrow,
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
  rust,
  steel,
  teal,
  type SceneSet,
} from "./Atlas65Parts";

const clay = "#b29269";
function Plant({ x, y, s = 1, tone = teal }: { x: number; y: number; s?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M0 4v-44m0 16 15-12M0-15l-16-8m16 22-6 13m6-13 9 10"
        fill="none"
        stroke={tone}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M3-24q3-15 17-17 1 11-17 17ZM-2-15q-13-17-24-13 3 12 24 13Z"
        fill="#9eb88b"
        stroke={tone}
      />
    </g>
  );
}

function Crate({ x, y, id, full = true }: { x: number; y: number; id: string; full?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M2 25h75l9-13H15Z" fill="#937c59" stroke={ochre} />
      {full &&
        [21, 39, 58, 66].map((n, i) => (
          <g key={n}>
            <ellipse
              cx={n}
              cy={21 - (i % 2) * 4}
              rx="8"
              ry="7"
              fill={i % 2 ? "#a77b54" : "#bb755d"}
              stroke="#8c694d"
            />
            <path d={`M${n} ${14 - (i % 2) * 4}l4-3`} stroke={teal} strokeWidth="1.5" />
          </g>
        ))}
      <path d="M2 25h75v27H2Zm75 0 9-13v27l-9 13Z" fill={`url(#${id}-timber)`} stroke={ochre} />
      <path d="M4 33h70m-70 9h70" stroke="#dac19b" strokeWidth="1.2" />
    </g>
  );
}

function Waste(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Crate x={50} y={109} id={id} />
      <Crate x={139} y={109} id={id} full={step !== 1} />
      <ellipse cx="273" cy="142" rx="33" ry="19" fill="#d5ddda" stroke={steel} />
      <ellipse cx="273" cy="142" rx="24" ry="12" fill="#edf1eb" stroke="#a9b5b1" />
      {step === 2 && (
        <>
          <path d="M270 146q-13-10-4-10l11 6 8-8 1 11Z" fill="#b28b60" stroke={ochre} />
          <Arrow x1={273} y1={114} x2={273} y2={123} color={rust} width={2} />
        </>
      )}
      {step === 0 && (
        <>
          <Arrow x1={76} y1={70} x2={84} y2={105} color={blue} />
          <Arrow x1={157} y1={70} x2={177} y2={106} color={teal} />
          <Label x={243} y={74}>
            Eau et énergie
          </Label>
        </>
      )}
      {step === 1 && (
        <Callout x={187} y={76} leader="M184 84v39" color={rust}>
          Aliments écartés
        </Callout>
      )}
      <Ground d="M37 173h286" />
      <Rule>
        {
          [
            "Les ressources sont déjà dépensées",
            "Des pertes avant la vente",
            "Du gaspillage après la vente",
          ][step]
        }
      </Rule>
    </>
  );
}

function ShortChain(step: number, id: string) {
  const pos = step === 0 ? [74, 281] : step === 1 ? [57, 179, 304] : [47, 128, 222, 310];
  return (
    <>
      <MetalPaint id={id} />
      <Wire d={`M${pos[0]!} 109H${pos.at(-1)!}`} tone={blue} />
      {pos.map((x, i) => (
        <g key={x}>
          <circle
            cx={x}
            cy="109"
            r="24"
            fill={i === 0 ? "#bfd0b6" : i === pos.length - 1 ? "#cbdadd" : "#decba5"}
            stroke={i === 0 ? teal : i === pos.length - 1 ? blue : ochre}
            strokeWidth="1.6"
          />
          {i === 0 ? (
            <>
              <Plant x={x} y={120} s={0.53} />
              <Label x={x} y={167}>
                Ferme
              </Label>
            </>
          ) : i === pos.length - 1 ? (
            <>
              <path
                d={`M${x - 12} 103h24l-4 14h-16Zm6-1 6-7 6 7`}
                fill="#eef1de"
                stroke={steel}
                strokeWidth="1.5"
              />
              <Label x={x - 1} y={167}>
                Client
              </Label>
            </>
          ) : (
            <>
              <path d={`M${x - 11} 102h22v14h-22Zm6-4h10`} fill="#c6a674" stroke={ochre} />
              <Label x={x} y={167}>
                {i === 1 ? "Collecte" : "Vente"}
              </Label>
            </>
          )}
        </g>
      ))}
      <Rule>
        {
          [
            "Zéro intermédiaire en vente directe",
            "Un intermédiaire peut suffire",
            "Nombre d’intermédiaires et km diffèrent",
          ][step]
        }
      </Rule>
    </>
  );
}

function PlateEmissions(step: number) {
  const heights = [
    [53, 12, 8],
    [30, 29, 12],
    [27, 13, 35],
  ][step]!;
  return (
    <>
      <PlotGrid x={56} y={64} w={250} h={97} />
      {[82, 163, 244].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y={161 - heights[i]!}
            width="44"
            height={heights[i]}
            rx="2"
            fill={[teal, blue, ochre][i]}
            stroke={steel}
          />
          <Label x={x + 22} y={184}>
            {["Ferme", "Usine", "Trajet"][i]}
          </Label>
        </g>
      ))}
      {step === 1 && <Arrow x1={208} y1={92} x2={195} y2={123} color={ochre} width={2} />}
      {step === 2 && <Arrow x1={249} y1={88} x2={263} y2={121} color={ochre} width={2} />}
      <Rule>
        {
          [
            "Parfois, la production domine",
            "La transformation compte aussi",
            "Le trajet dépend du mode de transport",
          ][step]
        }
      </Rule>
    </>
  );
}

function Cellar(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <defs>
        <Hatch id={id + "-cellarSoil"} color="#8f775e" opacity={0.55} />
      </defs>
      <path d="M39 71h282v111H39Z" fill="#d7c3a0" stroke="#a58a69" />
      <path d="M39 71h282v111H39Z" fill={`url(#${id}-cellarSoil)`} />
      <path d="M82 183V120q100-78 196 0v63Z" fill="#dce4df" stroke={steel} strokeWidth="2" />
      <Crate x={141} y={123} id={id} />
      {step === 0 && (
        <>
          <path d="M124 54l22-13h66l23 13v17H124Z" fill="#a69b83" stroke={ochre} />
          <Arrow x1={103} y1={63} x2={103} y2={101} color={blue} width={2} />
        </>
      )}
      {step === 1 && (
        <>
          <path d="M248 140v-69h29" fill="none" stroke={steel} strokeWidth="6" />
          <path
            d="M246 141q-9-16-28-14"
            fill="none"
            stroke={blue}
            strokeDasharray="4 3"
            strokeWidth="2"
          />
          <Arrow x1={255} y1={101} x2={255} y2={81} color={blue} width={2} />
        </>
      )}
      {step === 2 && (
        <>
          <ellipse cx="188" cy="138" rx="12" ry="8" fill="#815f51" stroke={rust} />
          <Arrow x1={190} y1={130} x2={232} y2={100} color={ochre} />
        </>
      )}
      <Rule>
        {
          [
            "Le volume enterré amortit les écarts",
            "L’air et l’humidité sont liés",
            "Les légumes évoluent après récolte",
          ][step]
        }
      </Rule>
    </>
  );
}

function Drying(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <path
        d={step === 2 ? "M79 161V65h203v96Z" : "M72 144h216v16H72Z"}
        fill={step === 2 ? "#dce4e1" : `url(#${id}-timber)`}
        stroke={steel}
        strokeWidth="1.5"
      />
      {[104, 148, 192, 236].map((x) => (
        <path
          key={x}
          d={`M${x} 131q8 ${step === 1 ? -8 : -18} 28 0-15 ${step === 1 ? 10 : 17} -28 0Z`}
          fill={step === 1 ? "#b89563" : "#c88766"}
          stroke={rust}
          strokeWidth="1.4"
        />
      ))}
      {step === 0 &&
        [114, 171, 226].map((x) => (
          <circle key={x} cx={x} cy="96" r="5" fill="#91bcc9" stroke={blue} />
        ))}
      {step === 1 &&
        [114, 171, 226].map((x) => (
          <Arrow key={x} x1={x} y1={115} x2={x + 13} y2={77} color={blue} dashed width={1.8} />
        ))}
      {step === 2 &&
        [114, 174, 234].map((x, i) => (
          <path
            key={x}
            d={`M${x} 161q25-24 0-38t0-47`}
            fill="none"
            stroke={i % 2 ? steel : ochre}
            strokeWidth="2.2"
            strokeDasharray="5 4"
          />
        ))}
      <Rule>
        {
          [
            "Une part de l’eau est accessible",
            "Le séchage réduit l’eau disponible",
            "La fumée apporte des composés",
          ][step]
        }
      </Rule>
    </>
  );
}

function Pulses(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-pulseSoil"} color="#957354" opacity={0.55} />
        <Material id={id + "-pulsePod"} colors={["#b0c49c", "#557e6c"]} />
      </defs>
      {step < 2 ? (
        <>
          <path d="M36 116q149-13 288 0v67H36Z" fill="#dac29d" stroke={clay} />
          <path d="M36 116q149-13 288 0v67H36Z" fill={`url(#${id}-pulseSoil)`} />
          <Plant x={174} y={116} s={1.15} />
          <path
            d="M174 116l-3 43m3-31 34 29m-36-14-35 22m48-30 13-7"
            fill="none"
            stroke={teal}
            strokeWidth="2.1"
          />
          {step === 1 && (
            <>
              {[
                [149, 157],
                [170, 145],
                [188, 145],
                [200, 152],
              ].map(([x, y]) => (
                <circle key={x} cx={x} cy={y} r="5.5" fill="#b4785a" stroke={rust} />
              ))}
              <Callout x={272} y={92} leader="M249 98l-48 54">
                Nodosités
              </Callout>
            </>
          )}
        </>
      ) : (
        <>
          <path
            d="M72 130q70-83 211-25-47 61-162 53Z"
            fill={`url(#${id}-pulsePod)`}
            stroke={teal}
            strokeWidth="2"
          />
          {[122, 152, 184, 218, 250].map((x, i) => (
            <circle key={x} cx={x} cy={124 - i * 2} r={13 + (i % 2)} fill="#b8c89c" stroke={teal} />
          ))}
          <Label x={181} y={181}>
            Graines dans une gousse
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Observer la plante et ses racines",
            "Des bactéries vivent dans les nodules",
            "La plante forme des graines",
          ][step]
        }
      </Rule>
    </>
  );
}

function Palm(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-palmSkin"} colors={["#d39b66", "#ae644e", "#774b42"]} />
      </defs>
      {step === 0 ? (
        <>
          <path
            d="M171 62q32 36 7 110"
            fill="none"
            stroke={teal}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {[
            [128, 105],
            [158, 112],
            [187, 102],
            [216, 114],
            [144, 139],
            [177, 132],
            [209, 146],
            [169, 161],
          ].map(([x, y], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="20"
              ry="14"
              transform={`rotate(-34 ${x} ${y})`}
              fill={`url(#${id}-palmSkin)`}
              stroke={rust}
            />
          ))}
        </>
      ) : (
        <>
          <ellipse
            cx="161"
            cy="123"
            rx="76"
            ry="53"
            transform="rotate(-16 161 123)"
            fill={`url(#${id}-palmSkin)`}
            stroke={rust}
            strokeWidth="2"
          />
          <ellipse
            cx="161"
            cy="123"
            rx="62"
            ry="40"
            transform="rotate(-16 161 123)"
            fill="#d7aa69"
            stroke={ochre}
            strokeWidth="2"
          />
          <ellipse
            cx="161"
            cy="123"
            rx="33"
            ry="37"
            transform="rotate(-16 161 123)"
            fill="#8f694c"
            stroke={ochre}
            strokeWidth="1.6"
          />
          <ellipse
            cx="161"
            cy="123"
            rx="25"
            ry="32"
            transform="rotate(-16 161 123)"
            fill="#e4d7b6"
            stroke="#95866c"
            strokeWidth={step === 2 ? 3 : 1.6}
          />
          <Callout
            x={278}
            y={90}
            leader={step === 1 ? "M248 92l-32 19" : "M249 94l-69 25"}
            color={ochre}
          >
            {step === 1 ? "Pulpe" : "Amande"}
          </Callout>
        </>
      )}
      <Rule>
        {
          [
            "Les fruits poussent en régimes",
            "La pulpe donne l’huile de palme",
            "L’amande donne l’huile de palmiste",
          ][step]
        }
      </Rule>
    </>
  );
}

function Pack({ x, y, id }: { x: number; y: number; id: string }) {
  return <Face id={id} x={x} y={y} d="M4 0h62l12 16v87H5V12Z" tone="brass" />;
}

function Salt(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Pack x={55} y={65} id={id} />
      <path d="M70 95h50v40H70Z" fill="#e9ddbd" stroke={ochre} />
      <Label x={95} y={121}>
        Pain
      </Label>
      {step === 0 ? (
        <>
          <path d="M168 151q19-65 117-34 25 7 26 34Z" fill="#cec29c" stroke={ochre} />
          <path d="M194 127l11-12m16 9 12-13m14 13 13-12" stroke="#f2e5b9" strokeWidth="2" />
        </>
      ) : (
        <>
          <rect x="162" y="62" width="147" height="97" rx="6" fill="#f3f5ef" stroke={steel} />
          <Line d="M172 94h127m-127 32h127" color="#8ea3a4" width={1.2} />
          <Label x={235} y={86}>
            Pour 100 g
          </Label>
          <Label x={219} y={118}>
            Sel
          </Label>
          <Label x={264} y={118}>
            1,2 g
          </Label>
          {step === 2 && (
            <>
              <Arrow x1={231} y1={159} x2={231} y2={168} color={ochre} width={1.8} />
              <Label x={235} y={188}>
                50 g → 0,6 g
              </Label>
            </>
          )}
        </>
      )}
      <Rule>
        {
          [
            "Le sel peut être dans la recette",
            "Lire la ligne pour 100 g",
            "Rapporter à la quantité mangée",
          ][step]
        }
      </Rule>
    </>
  );
}

function Sugar(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      {[43, 196].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x + 24} 58h64v16l10 15v64h-84V89l10-15Z`}
            fill={i ? "#b7bda0" : "#c4a280"}
            stroke={steel}
            strokeWidth="1.6"
          />
          <path d={`M${x + 21} 95h70v39h-70Z`} fill="#f2e8cc" stroke={ochre} />
          <Label x={x + 56} y={121}>
            {i ? "Sauce B" : "Sauce A"}
          </Label>
          {step > 0 && (
            <Label x={x + 56} y={173}>
              {step === 1 ? (i ? "4 g" : "8 g") : i ? "4 g" : "1,6 g"}
            </Label>
          )}
        </g>
      ))}
      {step === 2 && (
        <>
          <Marker x={174} y={106} color={ochre} r={6} />
          <Line d="M175 88v-14m0 51v17" color={ochre} />
        </>
      )}
      <Rule>
        {
          [
            "Les produits salés peuvent en contenir",
            "Comparer les sucres pour 100 g",
            "Exemple · portions de 20 g et 100 g",
          ][step]
        }
      </Rule>
    </>
  );
}

function Soil(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-soilGlass"} color="#aac3c7" opacity={0.35} />
      </defs>
      {step === 0 ? (
        <>
          {[78, 180, 282].map((x, i) => (
            <g key={x}>
              <circle
                cx={x}
                cy="114"
                r="40"
                fill={["#d8bf99", "#c8ba9e", "#b8b2a1"][i]}
                stroke={ochre}
              />
              {Array.from({ length: 6 + i * 7 }, (_, j) => (
                <circle
                  key={j}
                  cx={x - 21 + ((j * 23) % 42)}
                  cy={94 + ((j * 13) % 36)}
                  r={[4.5, 2.4, 1.3][i]}
                  fill="#8f7054"
                />
              ))}
              <Label x={x} y={182}>
                {["Sable", "Limon", "Argile"][i]}
              </Label>
            </g>
          ))}
        </>
      ) : (
        <>
          <path
            d="M116 64h128v100q0 17-17 17h-94q-17 0-17-17Z"
            fill="#d8e6e5"
            stroke={steel}
            strokeWidth="2"
          />
          <path d="M116 64h128v100q0 17-17 17h-94q-17 0-17-17Z" fill={`url(#${id}-soilGlass)`} />
          {step === 1 ? (
            <path d="M119 88h122v74q0 15-12 15h-99q-11 0-11-15Z" fill="#b3a184" opacity=".8" />
          ) : (
            <>
              <path d="M120 159h120v4q0 15-13 15h-95q-12 0-12-15Z" fill="#b58e5e" />
              <path d="M120 145h120v14H120Z" fill="#c3a67e" />
              <path d="M120 135h120v10H120Z" fill="#8f8878" />
              <Callout x={287} y={166} leader="M262 164l-22 4">
                Sable
              </Callout>
            </>
          )}
          {step === 1 && <Arrow x1={263} y1={98} x2={257} y2={146} color={blue} dashed width={2} />}
        </>
      )}
      <Rule>
        {
          [
            "Les grains ont des tailles différentes",
            "Dans l’eau, les particules se séparent",
            "Les grosses se déposent plus vite",
          ][step]
        }
      </Rule>
    </>
  );
}

function SoilLife(step: number, id: string) {
  return (
    <>
      <defs>
        <Hatch id={id + "-wholeSoil"} color="#7f6247" opacity={0.52} />
      </defs>
      <path d="M30 90q77-13 150 0t150 0v92H30Z" fill="#b99b78" stroke="#896e51" />
      <path d="M30 90q77-13 150 0t150 0v92H30Z" fill={`url(#${id}-wholeSoil)`} />
      <Plant x={103} y={90} s={0.8} />
      <path
        d="M105 87v64m0-16-22 19m22-27 21 18m0-23 23 19"
        fill="none"
        stroke="#ecd6b6"
        strokeWidth="2.4"
      />
      {step === 0 && (
        <>
          <path d="M179 83l19-14 17 10-13 11Z" fill="#b47957" stroke={ochre} />
          <Callout x={260} y={63} leader="M241 67l-34 12">
            Litière
          </Callout>
        </>
      )}
      {step === 1 && (
        <>
          <path
            d="M205 102q-45 19-16 40t57-10m-57 7-14 19m58-36 32-19m-27 39 33 11"
            fill="none"
            stroke="#f1dfb8"
            strokeWidth="2.5"
          />
          <Label x={229} y={69}>
            Filaments
          </Label>
        </>
      )}
      {step === 2 && (
        <>
          <path
            d="M172 153q31-39 55-16t41-15"
            fill="none"
            stroke="#7d584b"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M151 92q-7 22 17 29m108 3q22-25 16-36"
            fill="none"
            stroke="#dae1d7"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
          <Label x={230} y={68}>
            Galeries
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Des débris nourrissent le sol",
            "Des organismes dégradent la litière",
            "La faune déplace aussi la matière",
          ][step]
        }
      </Rule>
    </>
  );
}

function Services(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-serviceLand"} colors={["#cbd2ad", "#859a79"]} />
      </defs>
      <path
        d="M31 146q100-40 154-13t144 13v26H31Z"
        fill={`url(#${id}-serviceLand)`}
        stroke={teal}
      />
      {step === 0 ? (
        <>
          <Plant x={105} y={139} s={1.2} />
          <Plant x={257} y={138} s={1.2} />
          {[105, 257].map((x) => (
            <g key={x}>
              <circle cx={x - 4} cy="91" r="4" fill="#cfa464" stroke={rust} />
              <circle cx={x + 4} cy="91" r="4" fill="#cfa464" stroke={rust} />
              <circle cx={x} cy="86" r="4" fill="#cfa464" stroke={rust} />
              <circle cx={x} cy="91" r="2.8" fill={ochre} />
            </g>
          ))}
          <path
            d="M126 94q58-38 111 2"
            fill="none"
            stroke={ochre}
            strokeDasharray="5 4"
            strokeWidth="2"
          />
          <ellipse cx="176" cy="77" rx="13" ry="7" fill="#c69e61" stroke={ochre} />
          <path
            d="M176 76q-13-20-18-11m18 11q15-18 17-7"
            fill="none"
            stroke={steel}
            strokeWidth="1.6"
          />
          <Label x={180} y={116}>
            Pollen
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <path
            d="M31 139q57 5 102 20t67-12q53-27 128-4"
            fill="none"
            stroke="#91bfc9"
            strokeWidth="17"
          />
          {[98, 146, 197, 245].map((x) => (
            <Plant key={x} x={x} y={143} s={0.66} />
          ))}
          <Arrow x1={82} y1={86} x2={270} y2={87} color={blue} dashed width={2} />
          <Label x={182} y={71}>
            Écoulement
          </Label>
        </>
      ) : (
        <>
          <Plant x={185} y={139} s={2.2} />
          <path
            d="M128 123q58-29 118 0"
            fill="#91a684"
            fillOpacity=".42"
            stroke={teal}
            strokeDasharray="4 3"
          />
          <Arrow x1={249} y1={77} x2={215} y2={91} color={ochre} />
          <Label x={253} y={66}>
            CO₂
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Des insectes déplacent du pollen",
            "Des milieux ralentissent l’eau",
            "La végétation stocke du carbone",
          ][step]
        }
      </Rule>
    </>
  );
}

function Municipal(step: number, id: string) {
  return (
    <>
      <MetalPaint id={id} />
      <Face id={id} d="M35 108h72l21 24v24H35Z" />
      <path d="M40 107V80h60v28Zm64 16h13l9 13h-22Z" fill="#acc0bd" stroke={steel} />
      {[55, 113].map((x) => (
        <circle key={x} cx={x} cy="157" r="9" fill="#586e78" stroke={dark} />
      ))}
      <Arrow x1={130} y1={130} x2={165} y2={130} color={blue} />
      {step === 0 ? (
        <>
          <path d="M176 157v-43l41-34 37 34h54v43Z" fill="#c4b799" stroke={ochre} />
          <Label x={243} y={175}>
            Point de collecte
          </Label>
        </>
      ) : step === 1 ? (
        <>
          <path d="M181 152h131M193 105l104 5-10 33h-84Z" fill="#a3bbc0" stroke={steel} />
          {[217, 245, 273].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="93"
              width="20"
              height="18"
              rx="2"
              fill={[teal, ochre, rust][i]}
            />
          ))}
          <Label x={241} y={176}>
            Tri des flux
          </Label>
        </>
      ) : (
        <>
          {[208, 249, 291].map((x, i) => (
            <g key={x}>
              <path d={`M172 130l${x - 172} ${-44 + i * 28}`} stroke={steel} strokeWidth="1.6" />
              <rect
                x={x - 12}
                y={75 + i * 28}
                width="26"
                height="22"
                rx="3"
                fill={[teal, ochre, rust][i]}
                opacity=".8"
              />
            </g>
          ))}
          <Label x={247} y={177}>
            Filières distinctes
          </Label>
        </>
      )}
      <Rule>
        {
          [
            "Les déchets sont regroupés",
            "Le tri sépare les matières",
            "Chaque flux suit une filière",
          ][step]
        }
      </Rule>
    </>
  );
}

export const land65: SceneSet = {
  foodWaste: Waste,
  localChains: ShortChain,
  plateEmissions: PlateEmissions,
  cellarRoots: Cellar,
  dryingSmoking: Drying,
  pulseRoots: Pulses,
  palmFruit: Palm,
  saltIngredients: Salt,
  sugarPortion: Sugar,
  soilTexture: Soil,
  soilEcosystem: SoilLife,
  natureServices: Services,
  cityWaste: Municipal,
};
