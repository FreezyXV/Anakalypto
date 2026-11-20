import { Arrow, Line, Label, type SceneSet } from "./EverydayParts";
import { Callout, Hatch, Material } from "./EditorialDrawings";

const steel = "#405563";
const heat = "#95542c";

export const Forge: SceneSet[string] = (step, id) => {
  const width = [59, 78, 119][step]!;
  const height = [23, 18, 12][step]!;
  const left = 178 - width / 2;
  const top = 143 - height;
  return (
    <>
      <defs>
        <Material id={id + "-anvilMetal"} colors={["#a7b4bd", "#6e8291", "#465b6a"]} />
        <Material id={id + "-hotBlank"} colors={["#f5ca8d", "#d89056", "#a35432"]} />
        <Material id={id + "-forgeBlock"} colors={["#c39c71", "#a77c52", "#775c45"]} />
        <Hatch id={id + "-anvilCut"} color="#3b4e5a" opacity={0.48} />
      </defs>
      <ellipse cx="177" cy="204" rx="132" ry="7" fill="#b3bfc6" opacity=".5" />
      <path
        d="M125 175h109v30H125Z"
        fill={`url(#${id}-forgeBlock)`}
        stroke="#765c48"
        strokeWidth="1.4"
      />
      <Line d="M139 187q42-7 77 2m-63 8q30-7 54-4" color="#d4ae84" width={1.3} />
      <path
        d="M62 141l67-2 20 4h96v14h-34l-13 13 7 11h23v10H113v-10h19l14-14-7-10Q93 159 62 146Z"
        fill={`url(#${id}-anvilMetal)`}
        stroke={steel}
        strokeWidth="1.7"
      />
      <path
        d="M62 141l67-2 20 4h96v7h-98Q95 151 62 144Z"
        fill="#c5cfd2"
        stroke="#70848f"
        strokeWidth="1.2"
      />
      <path d="M143 158h59l-9 12 7 11h24v7H118v-6h18l17-15Z" fill={`url(#${id}-anvilCut)`} />
      <path
        d={`M${left} 143l3 ${3 - height}h${width - 7}l4 ${height - 3}Z`}
        fill={`url(#${id}-hotBlank)`}
        stroke={heat}
        strokeWidth="1.5"
      />
      <Line d={`M${left + 6} ${top + 5}h${width - 12}`} color="#f9dc99" width={1.4} />
      {step === 0 && (
        <>
          {[155, 173, 191].map((x, i) => (
            <Line
              key={x}
              d={`M${x} ${top - 7}q-6-7 0-14t2-12`}
              color={i === 1 ? "#b97147" : "#c68a63"}
              width={1.6}
            />
          ))}
          <Callout x={266} y={93} leader="M252 99l-43 23" color={heat}>
            Pièce chaude
          </Callout>
          <Callout x={77} y={180} leader="M94 163l14-12">
            Enclume
          </Callout>
        </>
      )}
      {step === 1 && (
        <>
          <path
            d="M195 64l107-23 3 8-104 33Z"
            fill={`url(#${id}-forgeBlock)`}
            stroke="#725641"
            strokeWidth="1.7"
          />
          <path
            d="M149 58l55 6-3 27-56-9Z"
            fill={`url(#${id}-anvilMetal)`}
            stroke={steel}
            strokeWidth="1.7"
          />
          <path d="M149 58l55 6-2 7-53-6Z" fill="#bdc9cc" />
          <Arrow x1={175} y1={93} x2={175} y2={119} color={heat} width={2.8} />
          <Arrow x1={144} y1={118} x2={117} y2={118} color={heat} width={1.9} />
          <Arrow x1={210} y1={118} x2={236} y2={118} color={heat} width={1.9} />
          <Callout x={99} y={67} leader="M119 69l23 5">
            Marteau
          </Callout>
        </>
      )}
      {step === 2 && (
        <>
          <path
            d="M149 120h59v23h-59Z"
            fill="none"
            stroke="#896b54"
            strokeWidth="1.4"
            strokeDasharray="4 4"
          />
          <Line d="M118 108h120m-120-7v14m120-14v14" color={steel} width={1.4} />
          <Label x={179} y={90}>
            Profil allongé
          </Label>
        </>
      )}
      <Label x={180} y={220}>
        {["Le métal reste solide", "La pièce s’étale sous le coup", "Le profil est plus fin"][step]}
      </Label>
    </>
  );
};
