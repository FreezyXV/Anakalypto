import { Arrow, Label, Line, Wave, blue } from "./EverydayParts";
import { Callout, Material } from "./EditorialDrawings";

export function Phonograph(step: number, id: string) {
  const horn = "M43 49C93 53 126 77 171 104L164 121C114 122 83 136 40 147C18 128 25 70 43 49Z";
  const reproduction = step === 2;
  return (
    <>
      <defs>
        <Material
          id={id + "-brass"}
          colors={["#6c3d21", "#db9a43", "#f9d888", "#a3612a", "#67402b"]}
        />
        <Material
          id={id + "-wax"}
          colors={["#3b2e28", "#805944", "#ab8461", "#57372b", "#332624"]}
        />
        <Material id={id + "-wood"} colors={["#91664c", "#6a422f", "#3f2f29"]} />
        <Material id={id + "-hornInner"} colors={["#181715", "#5d432d", "#b58751"]} horizontal />
        <clipPath id={id + "-hornCut"}>
          <path d={horn} />
        </clipPath>
      </defs>
      <ellipse cx="200" cy="202" rx="145" ry="8" fill="#715b48" opacity=".17" />
      <path
        d="M67 172l23-13h207l37 17-25 9H76Z"
        fill="#bd8b5d"
        stroke="#524036"
        strokeWidth="1.8"
      />
      <path
        d="M67 173l13 8h231l23-7v13l-22 11H78l-11-7Z"
        fill={`url(#${id}-wood)`}
        stroke="#49362f"
        strokeWidth="1.7"
      />
      <Line d="M80 185h228m-228 8h226" color="#d1a982" width={1} />
      <path
        d="M126 163v-28q0-5 7-5h10v33m145 0v-30h13v35"
        fill="#8d8171"
        stroke="#494845"
        strokeWidth="2"
      />
      <path d="M132 138h179" fill="none" stroke="#5a635e" strokeWidth="5" />
      <path d="M161 112h111v53H161Z" fill={`url(#${id}-wax)`} stroke="#453127" strokeWidth="1.6" />
      <ellipse
        cx="161"
        cy="138.5"
        rx="12"
        ry="26.5"
        fill="#6a4a3b"
        stroke="#321f19"
        strokeWidth="1.6"
      />
      <ellipse
        cx="272"
        cy="138.5"
        rx="12"
        ry="26.5"
        fill="#8a664e"
        stroke="#321f19"
        strokeWidth="1.8"
      />
      <ellipse
        cx="272"
        cy="138.5"
        rx="7"
        ry="21"
        fill="#47332b"
        stroke="#c0956b"
        strokeWidth="1.2"
      />
      <circle cx="272" cy="138" r="4" fill="#ac9b7e" />
      {Array.from({ length: 26 }, (_, i) => (
        <path
          key={i}
          d={`M${164 + i * 4} 114q11 24 0 49`}
          fill="none"
          stroke={i % 5 === 0 ? "#d1a278" : "#4a3129"}
          strokeWidth={i % 5 === 0 ? 1.3 : 0.65}
          opacity=".78"
        />
      ))}
      <path
        d="M298 141h18v12h12"
        fill="none"
        stroke="#67564b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="329" cy="152" r="4" fill="#8c6149" />
      <path d={horn} fill={`url(#${id}-brass)`} stroke="#6d4a2b" strokeWidth="2.3" />
      <path
        d="M39 61Q105 67 169 107M39 137Q103 118 166 115"
        fill="none"
        stroke="#ffe3a5"
        strokeWidth="2"
        opacity=".58"
        clipPath={`url(#${id}-hornCut)`}
      />
      <ellipse
        cx="40"
        cy="98"
        rx="17"
        ry="49"
        transform="rotate(5 40 98)"
        fill={`url(#${id}-hornInner)`}
        stroke="#c58c4d"
        strokeWidth="4"
      />
      <ellipse
        cx="42"
        cy="98"
        rx="11"
        ry="42"
        transform="rotate(5 42 98)"
        fill="none"
        stroke="#e4b373"
        opacity=".64"
      />
      <path
        d="M164 104l28-8q20 1 28 18"
        fill="none"
        stroke="#675a4c"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M167 102l26-7q17 0 22 10" fill="none" stroke="#d2c4a4" strokeWidth="1.8" />
      <path d="M212 103l7-4 8 8-3 11h-10l-5-4Z" fill="#b9a083" stroke="#5d5146" strokeWidth="1.7" />
      <Line d="M217 115l-2 8" color="#eee9d9" width={1.9} />
      {step === 1 ? (
        <>
          <path
            d="M226 112l28-19"
            fill="none"
            stroke="#6d6256"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <rect
            x="229"
            y="45"
            width="106"
            height="50"
            rx="3"
            fill="#f4e8d0"
            stroke="#a3957f"
            strokeWidth="1.2"
          />
          <Wave x={238} y={70} width={88} amplitude={8} cycles={3.2} color="#744f39" />
          <Label x={284} y={56} color="#655344">
            Sillon
          </Label>
        </>
      ) : (
        <>
          <Arrow
            x1={reproduction ? 109 : 52}
            x2={reproduction ? 52 : 109}
            y1={79}
            y2={79}
            color={reproduction ? blue : "#6b4e2f"}
            width={2.7}
          />
          <Callout x={267} y={76} leader="M221 111l25-25h21">
            {reproduction ? "Pointe de lecture" : "Pointe de gravure"}
          </Callout>
        </>
      )}
      <Label x={188} y={222} color="#55483d">
        Cylindre de cire
      </Label>
    </>
  );
}

const book =
  "M48 47C95 42 136 44 180 57C218 44 270 42 314 48L302 193C261 188 215 189 180 202C139 188 96 189 53 195Z";
const leftPage = "M48 47C95 42 136 44 180 57V202C139 188 96 189 53 195Z";
const rightPage = "M180 57C218 44 270 42 314 48L302 193C261 188 215 189 180 202Z";
const manuscriptRows = [
  "2 2 7 2 3 4 4 2 2 1 6 4 3",
  "3 2 2 2 3 2 6 3 1 4 3 2 4 1",
  "8 2 3 2 3 2 2 4 2 3 2 4 1",
  "1 2 2 3 6 2 3 3 2 1 2 4",
];

function Foliage({ x, y, angle = 0 }: { x: number; y: number; angle?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path
        d="M0 0q-3-7-12-8q2 8 12 8q6-1 10-10q-8 1-10 10"
        fill="#587451"
        stroke="#3c5740"
        strokeWidth=".9"
      />
      <path d="M0 0q-1-12 3-15" stroke="#8d6a31" fill="none" strokeWidth="1.1" />
      <circle cx="4" cy="-16" r="3" fill="#c68b43" stroke="#917038" strokeWidth=".7" />
    </g>
  );
}

export function Manuscript(step: number, id: string) {
  return (
    <>
      <defs>
        <Material id={id + "-leather"} colors={["#735747", "#49312e", "#35272a"]} />
        <Material id={id + "-vellumL"} colors={["#ecdaaf", "#ffefd2", "#d8b984"]} horizontal />
        <Material id={id + "-vellumR"} colors={["#c9a575", "#f9e9c4", "#e9cfa6"]} horizontal />
        <Material
          id={id + "-illumination"}
          colors={["#8a5b24", "#f7df92", "#b67c36", "#eacd72"]}
          horizontal
        />
        <clipPath id={id + "-page"}>
          <path d={book} />
        </clipPath>
      </defs>
      <ellipse cx="179" cy="196" rx="151" ry="13" fill="#4e342b" opacity=".17" />
      <path
        d="M44 51q64-11 136 9q64-21 140-9l-12 149q-77-8-128 9q-59-14-132-7Z"
        fill={`url(#${id}-leather)`}
        stroke="#47302d"
        strokeWidth="2.5"
      />
      <path
        d="M50 54l6 144q65-6 124 8q57-15 125-8l10-147Z"
        fill="#c8a573"
        stroke="#927552"
        strokeWidth="1.2"
      />
      <path d={leftPage} fill={`url(#${id}-vellumL)`} stroke="#a18459" strokeWidth="1.2" />
      <path d={rightPage} fill={`url(#${id}-vellumR)`} stroke="#a18459" strokeWidth="1.2" />
      <g clipPath={`url(#${id}-page)`}>
        {Array.from({ length: 75 }, (_, i) => (
          <ellipse
            key={i}
            cx={45 + ((i * 47) % 270)}
            cy={50 + ((i * 29) % 150)}
            rx={i % 3 ? 0.6 : 1.8}
            ry={0.4 + (i % 4) * 0.22}
            fill={i % 3 ? "#a48151" : "#fff8de"}
            opacity={i % 3 ? 0.12 : 0.44}
          />
        ))}
        {Array.from({ length: 10 }, (_, i) => {
          const y = 67 + i * 11.2;
          return (
            <path
              key={i}
              d={`M64 ${y}q62-4 106 10m21 0q42-11 104-9`}
              fill="none"
              stroke="#af8170"
              strokeWidth={step === 0 ? 0.72 : 0.43}
              opacity={step === 0 ? 0.82 : 0.46}
            />
          );
        })}
        <Line d="M69 58v119M165 68v120M195 69v118M292 57v122" color="#ab7665" width={0.65} />
        {step > 0 &&
          Array.from({ length: 10 }, (_, i) => {
            const y = 65 + i * 11.2;
            return (
              <g key={i} stroke="#574439" strokeWidth={1.8} opacity=".92" fill="none">
                <path
                  d={`M${i < 4 ? 119 : 77} ${y + 2}q24-2 ${i < 4 ? 39 : 79} 6`}
                  strokeDasharray={manuscriptRows[i % 4]}
                />
                <path
                  d={`M201 ${y + 7}q34-9 ${i % 3 ? 79 : 67}-6`}
                  strokeDasharray={manuscriptRows[(i + 1) % 4]}
                />
              </g>
            );
          })}
        {step === 2 && (
          <>
            <path
              d="M77 61l35 3v46l-35-3Z"
              fill="#293f62"
              stroke={`url(#${id}-illumination)`}
              strokeWidth="3"
            />
            <path
              d="M81 102l12-33 7 2 10 33-10-1-3-9-9-1-3 10Z"
              fill={`url(#${id}-illumination)`}
              stroke="#754a29"
              strokeWidth=".6"
            />
            <path d="M90 87l4-12 4 13Z" fill="#293f62" />
            <path
              d="M81 68q8-7 10 1m13 29q-2 9-9 4M65 72q-11 18 1 41q12 24-5 46q-6 9 2 21M299 62q15 23-2 53q-9 25 1 48q7 14-9 20"
              fill="none"
              stroke="#8c672e"
              strokeWidth="1.4"
            />
            <Foliage x={65} y={90} angle={-30} />
            <Foliage x={65} y={132} angle={60} />
            <Foliage x={65} y={164} angle={-18} />
            <Foliage x={300} y={77} angle={110} />
            <Foliage x={296} y={130} angle={-65} />
            <Foliage x={299} y={161} angle={30} />
          </>
        )}
      </g>
      {step === 1 && (
        <g transform="rotate(20 318 110)">
          <path
            d="M318 65q20-9 18 13q-3 18-17 26l-3 16h-3l1-19Q301 85 318 65Z"
            fill="#b6a296"
            stroke="#8e7767"
            strokeWidth="1.3"
          />
          <Line d="M314 120l11-50m-7 24 12-9m-10 2-4-11" color="#73594a" width={1} />
        </g>
      )}
      <Line d="M180 57v144" color="#8d6c48" width={1.5} />
      <Label x={180} y={224} color="#654e38">
        {["Réglure du parchemin", "Emplacement réservé", "Lettrine à la feuille d’or"][step]}
      </Label>
    </>
  );
}

const doricTop = "M102 61H258V73H247Q239 74 230 92H130Q121 74 113 73H102Z";
const ionicTop = "M104 62H256V73Q232 75 216 97H144Q128 75 104 73Z";
const corinthTop = "M106 58q38 9 74 5q40 4 74-5l-6 16h-12l-17 31h-77l-18-31h-11Z";

export function Capital(step: number, id: string) {
  const shaft = "M140 100h80l-5 81q-1 8-6 9h-58q-5 0-6-9Z";
  const volute =
    "M22 0C22-20-6-25-19-13C-34 1-25 24-6 25C11 26 18 12 12 4Q5-8-4-4Q-12 0-6 7Q-3 11 1 7";
  return (
    <>
      <defs>
        <Material
          id={id + "-columnStone"}
          colors={["#9e8874", "#e1d2b9", "#faf1dd", "#c5aa89", "#897768"]}
          horizontal
        />
        <Material id={id + "-capital"} colors={["#f2e6cf", "#d4bd9d", "#c0a685"]} />
        <clipPath id={id + "-flutes"}>
          <rect
            x="133"
            y="89"
            width="94"
            height="15"
            rx="2"
            fill={`url(#${id}-capital)`}
            stroke="#806b57"
            strokeWidth="1.4"
          />
          <path d={shaft} />
        </clipPath>
      </defs>
      <path d="M89 197h180v13H89Z" fill="#b5a088" stroke="#7e6d5c" strokeWidth="1.2" />
      <path d="M98 191h162l9 6H89Z" fill="#e5d5bd" stroke="#8e7865" strokeWidth="1.3" />
      <path d={shaft} fill={`url(#${id}-columnStone)`} stroke="#846f5f" strokeWidth="2" />
      <g clipPath={`url(#${id}-flutes)`}>
        {Array.from({ length: 7 }, (_, i) => {
          const x = 144 + i * 11.7;
          return (
            <g key={i}>
              <path
                d={`M${x} 107l2 74q2 6 5 0l2-74Z`}
                fill="#9c8066"
                opacity={0.28 + (i % 3) * 0.08}
              />
              <path d={`M${x + 3} 108v68`} stroke="#f9efd7" strokeWidth="1.5" opacity=".73" />
            </g>
          );
        })}
      </g>
      {step !== 0 && (
        <path
          d="M141 177h78v6h7v5h10v6H124v-6h10v-5h7Z"
          fill={`url(#${id}-capital)`}
          stroke="#846f5f"
          strokeWidth="1.5"
        />
      )}
      <path
        d={[doricTop, ionicTop, corinthTop][step]}
        fill={`url(#${id}-capital)`}
        stroke="#806b57"
        strokeWidth="2"
      />
      <Line
        d={
          step === 0
            ? "M105 70h149M127 90h104m-96 7h90"
            : step === 1
              ? "M107 69h145M137 88h85m-80 8h78"
              : "M113 66q66 13 133 0m-106 36h84"
        }
        color="#a3866b"
        width={1.25}
      />
      {step === 1 &&
        [127, 233].map((x, index) => (
          <g key={x} transform={`translate(${x} 76) scale(${index ? -1 : 1} .91)`}>
            <path d={volute + "Z"} fill="#d0b595" stroke="#8e7360" strokeWidth="2" />
            <Line d={volute} color="#9a765b" width={2.8} />
          </g>
        ))}
      {step === 2 &&
        [143, 160, 181, 202, 219].map((x, i) => (
          <g key={x}>
            <path
              d={`M${x - 4} 106q-11-11-9-22q4 2 7 4q-4-10 0-18q8 5 9 13q1-13 8-16q4 13-1 22q8-8 12-7q-6 19-19 24Z`}
              fill={i % 2 ? "#ded0ad" : "#cdb797"}
              stroke="#8d775d"
              strokeWidth="1.1"
            />
            <Line d={`M${x + 2} 103q-1-12 4-22`} color="#a38a68" width={0.8} />
          </g>
        ))}
      <Callout
        x={15}
        y={57}
        anchor="start"
        leader={step === 0 ? "M41 64h60" : step === 1 ? "M52 65h40l16 10" : "M53 66h51l24 20"}
      >
        {["Abaque", "Volute", "Acanthe"][step]!}
      </Callout>
      <Callout x={308} y={151} leader="M220 157h89">
        Fût
      </Callout>
    </>
  );
}
