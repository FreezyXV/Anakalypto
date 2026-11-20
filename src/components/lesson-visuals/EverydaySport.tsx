import { Crawl } from "./CrawlReviewDrawing";
import { Goalball } from "./EverydayGoalball";
import {
  Arrow,
  Label,
  Line,
  Plate,
  blue,
  green,
  muted,
  navy,
  violet,
  warm,
  type SceneSet,
} from "./EverydayParts";

function Runner({ x, y, ball = false }: { x: number; y: number; ball?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="16" cy="-22" r="9" fill="#e0b691" stroke="#8f7058" strokeWidth="1.3" />
      <path d="M-13 6L9-20l18 9L9 20Z" fill="#528ea8" stroke={navy} strokeWidth="2" />
      <path
        d="M15-13L29 3 39-4M-3 19L-34 33M7 18L26 35"
        stroke={navy}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {ball && (
        <ellipse
          cx="36"
          cy="0"
          rx="10"
          ry="6"
          fill="#eadac3"
          stroke={warm}
          strokeWidth="2"
          transform="rotate(-25 36 0)"
        />
      )}
    </g>
  );
}

function Rugby(step: number) {
  return (
    <>
      <Plate x={32} y={52} width={296} height={144} color="#d6e5cb">
        <Line d="M62 54v138M299 53v141M178 55v139" color="#f9fbf4" width={3} />
        <Runner x={step === 2 ? 111 : 117} y={137} ball={step === 2} />
        <Runner x={step === 2 ? 226 : 221} y={90} ball={step === 0} />
        <Arrow x1={83} y1={69} x2={171} y2={69} color={green} width={3} />
        {step === 1 && (
          <>
            <Line d="M256 98Q204 111 157 130" color={warm} dash="5 5" width={2.8} />
            <Arrow x1={200} y1={115} x2={159} y2={129} color={warm} />
            <ellipse
              cx="210"
              cy="112"
              rx="10"
              ry="6"
              fill="#eadac3"
              stroke={warm}
              strokeWidth="2"
              transform="rotate(-22 210 112)"
            />
          </>
        )}
        {step === 2 && <Arrow x1={158} y1={158} x2={229} y2={158} color={green} width={3.5} />}
      </Plate>
      <Label x={180} y={218}>
        {["Sens de l’attaque", "Geste vers l’arrière", "Nouveau porteur"][step]}
      </Label>
    </>
  );
}

function Wheelchair(step: number) {
  return (
    <>
      <path d="M72 156h221" stroke={muted} strokeWidth="2" />
      <circle cx="145" cy="134" r="36" fill="#d4e3e9" stroke={navy} strokeWidth="4" />
      <circle cx="145" cy="134" r="27" fill="none" stroke="#7c97a9" strokeWidth="3" />
      <path
        d="M130 77h19l18 40h33l19 23-9 9-21-17h-53Z"
        fill="#748bb1"
        stroke={navy}
        strokeWidth="2"
      />
      <path
        d="M135 101l18 15 25-6"
        fill="none"
        stroke="#d2a482"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="140" cy="69" r="15" fill="#dcb18b" stroke="#866853" strokeWidth="2" />
      <circle cx="211" cy="149" r="9" fill="#94a5b4" stroke={navy} strokeWidth="2" />
      <circle
        cx={step === 2 ? 259 : 185}
        cy={step === 2 ? 144 : 103}
        r="11"
        fill="#cb8c55"
        stroke="#87532a"
        strokeWidth="2"
      />
      <path
        d={step === 2 ? "M254 134q15 7 10 20m-14-10h18" : "M180 92q15 7 10 20m-14-10h18"}
        stroke="#87532a"
        fill="none"
      />
      {step === 1 && (
        <>
          <Arrow x1={88} y1={170} x2={174} y2={170} color={violet} />
          <Arrow x1={183} y1={170} x2={267} y2={170} color={violet} />
        </>
      )}
      {step === 2 && <Line d="M211 108q24 2 43 27q24-35 40-34" color={warm} dash="4 5" />}
      <Label x={180} y={211}>
        {["Ballon tenu", "Poussée 1 → 2", "Rebond"][step]}
      </Label>
    </>
  );
}

function Sweat(step: number) {
  const highHumidity = step === 2;
  return (
    <>
      <path
        d="M40 153Q112 145 180 153T320 153v43H40Z"
        fill="#e0bc9b"
        stroke="#9c7058"
        strokeWidth="2"
      />
      <Line d="M40 167q71-8 140 0t140 0" color="#bc9379" width={1.2} />
      <path
        d="M180 117q-18 19-18 26q4 17 18 11q14 0 16-11q-1-11-16-26Z"
        transform={step === 1 ? "translate(50 44) scale(.72)" : undefined}
        fill="#7bb7d0"
        stroke={blue}
        strokeWidth="2"
      />
      {step === 0 && (
        <>
          <Line d="M180 148v34q-17 8-22-5t9-7" color={blue} width={2.4} />
          <Label x={180} y={95}>
            Sueur liquide
          </Label>
        </>
      )}
      {step > 0 && (
        <>
          <Arrow
            x1={180}
            y1={121}
            x2={180}
            y2={highHumidity ? 97 : 68}
            color={blue}
            width={highHumidity ? 2 : 4}
          />
          {(highHumidity ? [85, 112, 136, 157, 202, 229, 254, 277] : [164, 191, 218]).map(
            (x, i) => (
              <circle
                key={x}
                cx={x}
                cy={highHumidity ? 65 + (i % 3) * 13 : 57 + (i % 3) * 12}
                r="3.5"
                fill="#8ebed1"
              />
            ),
          )}
          <Arrow
            x1={248}
            y1={152}
            x2={248}
            y2={highHumidity ? 135 : 92}
            color={warm}
            width={highHumidity ? 2 : 4}
          />
        </>
      )}
      <Label x={180} y={219}>
        {["Eau sur la peau", "Chaleur emportée", "Évaporation freinée"][step]}
      </Label>
    </>
  );
}

export const everydaySport = {
  rugbypass: Rugby,
  goalball: Goalball,
  wheelchaircourt: Wheelchair,
  crawl: Crawl,
  sweatcool: Sweat,
} satisfies SceneSet;
