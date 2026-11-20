import { rainbowPath } from "@/lib/lesson-visuals/batch50-models";
import { Arrow, Earth, Label, Line, Scene, Sun } from "./EverydayParts";
import { Callout, Material } from "./EditorialDrawings";

const shade = "#485b7d";
const red = "#b24435";
const violet = "#7342a0";
const amber = "#a26b20";

export function Eclipse({ step, id }: { step: number; id: string }) {
  const lunar = step === 2;
  const missed = step === 0;
  const earthX = lunar ? 153 : 294;
  const moonX = lunar ? 290 : 152;
  const moonY = missed ? 61 : 107;
  const moonRadius = missed || lunar ? 12 : 16;
  const central = [
    "M152 49L241 23 152 73Z",
    "M152 91L283 107 152 123Z",
    "M153 75L344 98V116L153 139Z",
  ][step];
  const penumbra = [
    "M152 49L285 5V68L152 73Z",
    "M152 91L313 48V166L152 123Z",
    "M153 75L344 56V158L153 139Z",
  ][step];
  return (
    <>
      <defs>
        <Material
          id={id + "-eclipseRock"}
          colors={lunar ? ["#c7896b", "#8f5144"] : ["#e5e1d7", "#9ba2ae"]}
        />
        <clipPath id={id + "-shadowOnEarth"}>
          <circle cx={earthX} cy="107" r="36" />
        </clipPath>
      </defs>
      <Line d="M64 107H339" color="#9db1c3" dash="4 5" width={1.2} />
      <path d={penumbra} fill="#b5c4d9" stroke="#8295b2" strokeWidth="1.1" />
      <path d={central} fill={shade} />
      <Sun x={47} y={107} r={28} id={id} />
      <Earth x={earthX} y={107} r={lunar ? 32 : 36} id={id} />
      {step === 1 && (
        <g clipPath={`url(#${id}-shadowOnEarth)`}>
          <path d={penumbra} fill="#8595b0" opacity=".26" />
          <path d={central} fill={shade} />
        </g>
      )}
      <circle
        cx={moonX}
        cy={moonY}
        r={moonRadius}
        fill={`url(#${id}-eclipseRock)`}
        stroke="#586778"
        strokeWidth="1.3"
      />
      <path
        d={`M${moonX - 8} ${moonY + 2}q5-5 10-3m-2 6 5 2m-10-14 5 1`}
        fill="none"
        stroke={lunar ? "#713f3c" : "#8f9293"}
        strokeWidth="1.2"
        opacity=".68"
      />
      <Label x={47} y={167}>
        Soleil
      </Label>
      <Label x={earthX} y={167}>
        Terre
      </Label>
      <Label x={moonX} y={missed ? 38 : lunar ? 141 : 139}>
        Lune
      </Label>
      {step === 1 && (
        <>
          <Callout x={209} y={44} leader="M218 51l-8 25">
            Pénombre
          </Callout>
          <Callout x={215} y={147} leader="M214 130v-20">
            Ombre
          </Callout>
        </>
      )}
      {lunar && (
        <>
          <Callout x={267} y={43} leader="M270 49l9 16">
            Pénombre
          </Callout>
          <Callout x={228} y={165} leader="M230 148v-27">
            Ombre
          </Callout>
        </>
      )}
      <Label x={180} y={198}>
        {
          [
            "L’ombre passe à côté de la Terre",
            "L’ombre de la Lune touche la Terre",
            "La Lune traverse l’ombre terrestre",
          ][step]
        }
      </Label>
    </>
  );
}

export function Rainbow({ step, id }: { step: number; id: string }) {
  const r = 59;
  const cx = 143;
  const cy = 95;
  const colors =
    step === 2
      ? ([
          [1.331, red],
          [1.343, violet],
        ] as const)
      : ([[1.337, amber]] as const);
  return (
    <Scene
      id={id}
      title={["Réfraction à l’entrée", "Réflexion intérieure", "Les couleurs se séparent"][step]!}
      foot={
        [
          "Le rayon est dévié à l’entrée",
          "Une partie du rayon est réfléchie",
          "Une seule réflexion dans la goutte",
        ][step]!
      }
    >
      <defs>
        <Material id={id + "-dropletLens"} colors={["#edf7fa", "#c4e1eb", "#9fc6d9"]} />
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={`url(#${id}-dropletLens)`}
        stroke="#6389a0"
        strokeWidth="1.6"
      />
      <path
        d="M97 111Q90 85 108 62"
        fill="none"
        stroke="#f8fcfb"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <Arrow
        x1={22}
        y1={cy - r * 0.8}
        x2={cx - r * 0.6}
        y2={cy - r * 0.8}
        color={amber}
        width={2.5}
      />
      {colors.map(([index, color]) => {
        const pts = rainbowPath(index).map(([x, y]) => [
          Math.round((cx + x * r) * 100) / 100,
          Math.round((cy + y * r) * 100) / 100,
        ]);
        const path = pts
          .slice(0, step + 2)
          .map((p, i) => (i ? "L" : "M") + p.join(" "))
          .join("");
        return (
          <g key={index}>
            <Line d={path} color={color} width={2.1} />
            {step === 1 && <circle cx={pts[1]![0]} cy={pts[1]![1]} r="3" fill={color} />}
          </g>
        );
      })}
      {step === 0 && (
        <Callout x={45} y={94} leader="M64 79l41-27">
          Entrée
        </Callout>
      )}
      {step === 1 && (
        <Callout x={277} y={91} leader="M233 81l-35-8">
          Réflexion
        </Callout>
      )}
      {step < 2 && (
        <Callout x={268} y={164} leader="M225 152l-29-19">
          Goutte
        </Callout>
      )}
      {step === 2 && (
        <>
          <circle cx="146" cy="154" r="15" fill="none" stroke="#71899c" strokeWidth="1.4" />
          <Line d="M161 154L216 145" color="#71899c" width={1.3} dash="4 4" />
          <rect x="219" y="46" width="126" height="149" rx="9" fill="#eef2f6" stroke="#a2b3c1" />
          <Label x={282} y={72}>
            Écart agrandi
          </Label>
          <path d="M328 84q-28 38 0 91" fill="none" stroke="#8fb4c7" strokeWidth="2.1" />
          <Arrow x1={314} y1={115} x2={242} y2={134} color={violet} width={2.25} />
          <Arrow x1={314} y1={122} x2={242} y2={162} color={red} width={2.25} />
          <Label x={255} y={119} color={violet}>
            Violet
          </Label>
          <Label x={256} y={183} color={red}>
            Rouge
          </Label>
        </>
      )}
    </Scene>
  );
}
