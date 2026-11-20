import { Callout, Hatch, Material } from "./EditorialDrawings";
import { Arrow, Label, Line } from "./EverydayParts";
import { Art, type DrawingProps } from "./Horizons50Parts";

const shell = "#425665";
const hot = "#984f2e";
const gas = "#356b88";

function VesselSection({ shape, id }: { shape: string; id: string }) {
  return (
    <>
      <path d={shape} fill={`url(#${id}-furnaceShell)`} stroke={shell} strokeWidth="1.7" />
      <path d={shape} fill={`url(#${id}-refractory)`} />
    </>
  );
}

export function SteelProcessDrawing(props: DrawingProps) {
  const { step, id } = props;
  const melt = `url(#${id}-moltenIron)`;
  return (
    <Art {...props} foot={["Minerai → fonte", "Fonte → acier", "Ferrailles → acier"][step]!}>
      <defs>
        <Material id={id + "-furnaceShell"} colors={["#ced9de", "#98a9b1", "#788e9a"]} />
        <Material id={id + "-moltenIron"} colors={["#f9d297", "#d78649", "#9c5438"]} />
        <Hatch id={id + "-refractory"} color="#3c5262" space={5} opacity={0.45} />
      </defs>
      {step === 0 && (
        <>
          <VesselSection
            id={id}
            shape="M147 58v-13h54v13h12v32l22 48-13 25v28H127v-28l-14-25 22-48V58Z"
          />
          <path
            d="M146 66h56v24l22 49-12 23v19h-75v-18l-13-24 22-49Z"
            fill="#f4e9d9"
            stroke={shell}
            strokeWidth="1.4"
          />
          <path d="M147 74q25 12 54 0v15q-29 9-54 0Z" fill="#ad8060" />
          <path d="M145 92q25 9 58 0l7 13q-36 9-72 0Z" fill="#59636a" />
          <path d="M136 107q36 9 75 0l6 12q-42 11-87 0Z" fill="#a7795e" />
          <path d="M130 121q44 10 88 0l5 13q-49 13-98 0Z" fill="#646b6c" />
          <path d="M135 160q39 6 78 0l-1 21h-75Z" fill={melt} stroke={hot} />
          <path d="M137 157q37 3 75 0l2 6q-40 5-77 0Z" fill="#b87f52" />
          <Line d="M115 154H96v-9H83m151 9h15v-9h15M218 175h32v12h37" color={shell} width={3} />
          <Arrow x1={84} y1={154} x2={124} y2={154} color={gas} width={2.2} />
          <Arrow x1={261} y1={154} x2={226} y2={154} color={gas} width={2.2} />
          <Arrow x1={225} y1={186} x2={294} y2={186} color={hot} width={2.2} />
          <Arrow x1={105} y1={71} x2={148} y2={56} color={hot} width={2.2} />
          <Label x={17} y={63} anchor="start">
            Minerai + coke
          </Label>
          <Label x={23} y={144} anchor="start" color={gas}>
            Air chaud
          </Label>
          <Label x={285} y={174} color={hot}>
            Fonte
          </Label>
        </>
      )}
      {step === 1 && (
        <>
          <VesselSection id={id} shape="M140 84h77l33 34-3 43q-6 25-35 29h-67q-29-4-35-29l-3-43Z" />
          <path
            d="M151 85h55l32 37-3 40q-6 15-24 18h-63q-18-3-24-18l-4-40Z"
            fill="#e8ded4"
            stroke={shell}
            strokeWidth="1.4"
          />
          <path
            d="M124 148q16-5 28 1 13 5 29-2 20-7 34 1 12 6 22 0l-2 14q-6 15-24 18h-63q-18-3-24-18Z"
            fill={melt}
            stroke={hot}
          />
          <path
            d="M129 145l16 3 7-2 14 3m28-5 10-2 13 5 15-3"
            fill="none"
            stroke="#93684c"
            strokeWidth="2"
          />
          <path d="M174 46h12v66l-3 7h-6l-3-7Z" fill="#6f91a0" stroke="#46616e" strokeWidth="1.4" />
          <Arrow x1={180} y1={121} x2={180} y2={144} color={gas} width={2.5} />
          <Line d="M177 123l-10 17m16-17 10 17" color="#8fb4c3" width={1.6} />
          <Callout x={268} y={60} leader="M227 66h-40" color={gas}>
            Lance à O₂
          </Callout>
          <Label x={15} y={71} anchor="start">
            Fonte
          </Label>
          <Label x={15} y={92} anchor="start">
            + ferrailles
          </Label>
          <Arrow x1={103} y1={89} x2={135} y2={104} color={hot} width={2.1} />
          <Callout x={299} y={190} leader="M281 173l-40-7-20-4" color={hot}>
            Acier
          </Callout>
        </>
      )}
      {step === 2 && (
        <>
          <VesselSection id={id} shape="M91 114h177l-7 47q-5 23-38 29h-85q-33-6-39-29Z" />
          <path
            d="M104 120h151l-6 39q-5 16-28 21h-81q-25-5-30-21Z"
            fill="#e9ded4"
            stroke={shell}
            strokeWidth="1.4"
          />
          <path
            d="M110 159q38-9 69 0 34-9 71 0-5 16-29 21h-81q-25-5-30-21Z"
            fill={melt}
            stroke={hot}
          />
          <path
            d="M111 157l8-18 9 3 5-12 13 9 7 15m48 2 10-15 8 6 12-17 9 12 6 15"
            fill="#919b9d"
            stroke={shell}
            strokeWidth="1.5"
          />
          <path
            d="M97 114q19-16 42-16h80q29 0 43 16Z"
            fill={`url(#${id}-furnaceShell)`}
            stroke={shell}
            strokeWidth="1.6"
          />
          {[137, 180, 222].map((x, i) => (
            <g key={x}>
              <path
                d={`M${x - 5} 52h10v${69 + i * 3}h-10Z`}
                fill="#435665"
                stroke="#263c4a"
                strokeWidth="1.2"
              />
              <Line d={`M${x - 1} 58v58`} color="#7e939d" width={1.2} />
              <path
                d={`M${x + 1} ${123 + i * 3}l-6 7 10 4-6 12`}
                fill="none"
                stroke="#a96d30"
                strokeWidth="5"
                opacity=".5"
              />
              <Line d={`M${x + 1} ${123 + i * 3}l-6 7 10 4-6 12`} color="#fff4ca" width={2.3} />
            </g>
          ))}
          <Callout x={244} y={69} leader="M234 74l-7 10" color={gas} anchor="start">
            Électrodes
          </Callout>
          <Callout x={17} y={152} leader="M86 156l29-4" anchor="start">
            Ferrailles
          </Callout>
          <Callout x={299} y={183} leader="M281 168l-30-1" color={hot}>
            Acier
          </Callout>
        </>
      )}
    </Art>
  );
}
