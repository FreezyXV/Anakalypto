import { Art, type DrawingProps } from "./Horizons50Parts";
import { Arrow, Label, Line, Scene } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

const concrete = "#665e52";
const slate = "#455c6b";
const ochre = "#925e2f";

export function ConcretePrint(props: DrawingProps) {
  const { step, id } = props;
  const courses = [2, 5, 8][step]!;
  const runs =
    step === 2
      ? [
          [52, 136],
          [202, 290],
        ]
      : [[52, 290]];
  const nozzleX = step === 0 ? 205 : 273;
  const nozzleY = 171 - (courses - 1) * 9;
  return (
    <Art {...props} foot="Parois imprimées · reste à équiper">
      <defs>
        <Material id={id + "-concreteBead"} colors={["#e5dac7", "#b9ac95", "#9f937d"]} />
        <Material id={id + "-printHead"} colors={["#d4e0e4", "#77909d", "#425b69"]} horizontal />
        <Hatch id={id + "-slabCut"} color="#625d52" space={4} />
      </defs>
      <path d="M29 185h270l34-15-269 0Z" fill="#d5d7d2" stroke="#8e9898" strokeWidth="1.2" />
      <path
        d="M29 185h270v10H29Z M299 185l34-15v10l-34 15Z"
        fill={`url(#${id}-slabCut)`}
        stroke="#879191"
      />
      {Array.from({ length: courses }, (_, course) => {
        const y = 176 - course * 9;
        return (
          <g key={course}>
            {runs.map(([x1, x2]) => (
              <g key={x1}>
                <path
                  d={`M${x1} ${y}H${x2}l20-10H${x1! + 20}Z`}
                  fill="#d2c6b2"
                  stroke={concrete}
                  strokeWidth="1.15"
                />
                <path
                  d={`M${x1} ${y}H${x2}v8H${x1}Z M${x2} ${y}l20-10v8l-20 10Z`}
                  fill={`url(#${id}-concreteBead)`}
                  stroke={concrete}
                  strokeWidth="1.15"
                />
                <Line d={`M${x1! + 4} ${y + 2}H${x2! - 3}`} color="#eae2d2" width={0.9} />
              </g>
            ))}
          </g>
        );
      })}
      <path
        d={`M328 48v${nozzleY - 82}H${nozzleX}`}
        fill="none"
        stroke={slate}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path
        d={`M${nozzleX - 12} ${nozzleY - 39}h24v18l-7 10h-10l-7-10Z`}
        fill={`url(#${id}-printHead)`}
        stroke={slate}
        strokeWidth="1.6"
      />
      <Line d={`M${nozzleX} ${nozzleY - 11}v9`} color={ochre} width={3.5} />
      {step < 2 && (
        <Arrow
          x1={nozzleX - 65}
          y1={nozzleY - 16}
          x2={nozzleX - 23}
          y2={nozzleY - 16}
          color={ochre}
          width={2}
        />
      )}
      <Callout x={104} y={68} leader={`M127 71L${nozzleX - 14} ${nozzleY - 31}`}>
        Buse
      </Callout>
      {step === 2 && (
        <Callout x={166} y={202} leader="M171 184v-38">
          Ouverture
        </Callout>
      )}
    </Art>
  );
}

export function BaseIsolation({ step, id }: { step: number; id: string }) {
  const isolated = step > 0;
  const shift = isolated ? 6 : 27;
  const baseY = isolated ? 145 : 165;
  return (
    <Scene
      id={id}
      title={
        ["Bâtiment lié au sol", "Appuis à déformation latérale", "Le bâtiment est moins entraîné"][
          step
        ]!
      }
      foot={
        ["Sol et bâtiment se décalent", "L’appui se cisaille", "Déplacements illustratifs"][step]!
      }
    >
      <defs>
        <Material id={id + "-isolationBuilding"} colors={["#dbe6e9", "#aabec8", "#cdd8de"]} />
        <Hatch id={id + "-foundationSoil"} color="#756858" opacity={0.36} />
      </defs>
      <path d="M45 186H337v17H45Z" fill="#d1c3ad" stroke="#908474" />
      <path d="M45 186H337v17H45Z" fill={`url(#${id}-foundationSoil)`} />
      <Line d="M159 48v146" color="#8194a4" width={1.3} dash="4 4" />
      <g transform={`translate(${shift} 0)`}>
        <path
          d={`M93 78H225V${baseY}H93Z`}
          fill={`url(#${id}-isolationBuilding)`}
          stroke={slate}
          strokeWidth="1.7"
        />
        <path
          d={`M100 98H218M100 121H218M116 81V${baseY - 4}M159 81V${baseY - 4}M202 81V${baseY - 4}`}
          fill="none"
          stroke="#728999"
          strokeWidth="2"
        />
        <path d={`M87 ${baseY}h144v7H87Z`} fill="#667e89" stroke={slate} strokeWidth="1.4" />
      </g>
      <path d="M114 175h144v11H114Z" fill="#938875" stroke="#72695d" />
      {isolated ? (
        [115, 159, 203].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 9 + shift} 153h18l21 21h-18Z`}
              fill="#465661"
              stroke="#2e414e"
              strokeWidth="1.2"
            />
            {[158, 163, 168].map((y, i) => (
              <Line key={y} d={`M${x + 2 + 5 * i} ${y}h20`} color="#9cb5bf" width={1.3} />
            ))}
          </g>
        ))
      ) : (
        <path d="M120 172h132v6H120Z" fill="#4f6472" />
      )}
      <Arrow x1={160} y1={195} x2={186} y2={195} color={ochre} width={2.8} />
      {step === 0 && (
        <Arrow x1={159} y1={61} x2={159 + shift} y2={61} color="#346a87" width={2.3} />
      )}
      {step === 2 && <circle cx={159 + shift} cy={61} r="2.8" fill="#346a87" />}
      <Label x={294} y={194} color={ochre}>
        Sol
      </Label>
      {step === 1 && (
        <Callout x={289} y={165} leader="M259 160l-24 5">
          Appuis
        </Callout>
      )}
      {step === 2 && (
        <Callout x={275} y={71} leader="M237 68l-72-7">
          Faible écart
        </Callout>
      )}
    </Scene>
  );
}
