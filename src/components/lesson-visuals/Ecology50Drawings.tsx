import {
  ArtFrame,
  Arrow,
  Label,
  Heat,
  blue,
  green,
  gold,
  type DrawingProps,
} from "./Exploration50Parts";
import { Tree, Sprout } from "./Batch50Parts";
function Flower({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 23v44m0-23q-24-17-26-6q2 17 26 15"
        stroke={green}
        strokeWidth="3"
        fill="#8eb47b"
      />
      {[-50, -20, 20, 50].map((a, i) => (
        <ellipse
          key={a}
          transform={`rotate(${a})`}
          cx={i % 2 ? -15 : 15}
          cy="-9"
          rx="17"
          ry="27"
          fill="#deb3bf"
          stroke="#bf8f9e"
        />
      ))}
      <ellipse cy="24" rx="12" ry="18" fill="#b6c68b" stroke={green} />
      <path d="M0 13V-23m-15 34v-25m30 25v-25" stroke={green} strokeWidth="3" />
      <ellipse cy="-25" rx="7" ry="3" fill="#6a995f" />
      <ellipse cx="-15" cy="-16" rx="5" ry="3" fill={gold} />
      <ellipse cx="15" cy="-16" rx="5" ry="3" fill={gold} />
    </g>
  );
}
function Bee({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse
        cx="-4"
        cy="-10"
        rx="10"
        ry="6"
        fill="#d5e9ee"
        stroke="#8eaab5"
        transform="rotate(25)"
      />
      <ellipse
        cx="6"
        cy="-12"
        rx="11"
        ry="5"
        fill="#d5e9ee"
        stroke="#8eaab5"
        transform="rotate(-20)"
      />
      <ellipse rx="14" ry="8" fill="#d6b264" stroke="#6a6046" />
      <path d="M-7-6v12M1-7V7M8-5V5m-8 4-8 9m12-9 6 8" stroke="#655c47" strokeWidth="2" />
      <circle cx="14" cy="-3" r="5" fill="#5e604c" />
    </g>
  );
}
export function Ecology50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "flowerpollination")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Ovules → graines · ovaire → fruit" : "Le pollen n’est pas une graine"}
      >
        <Flower x={91} y={125} />
        {s < 2 ? (
          <Flower x={263} y={125} />
        ) : (
          <>
            <path d="M263 150v39" stroke={green} strokeWidth="4" />
            <ellipse cx="263" cy="130" rx="35" ry="43" fill="#deb969" stroke="#a88742" />
            <path
              d="M263 89q-16-12-22-6m22 6q16-12 22-6"
              stroke={green}
              strokeWidth="3"
              fill="none"
            />
            {[0, 1, 2, 3, 4].map((v) => (
              <ellipse
                key={v}
                cx={250 + (v % 2) * 24}
                cy={111 + Math.floor(v / 2) * 19}
                rx="4"
                ry="6"
                fill="#695d43"
              />
            ))}
            <Label x={263} y={205}>
              Graines
            </Label>
          </>
        )}
        {s < 2 && (
          <>
            <Bee x={s === 0 ? 120 : 269} y={83} />
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                cx={(s === 0 ? 111 : 258) + i * 5}
                cy={s === 0 ? 96 : 99}
                r="2.4"
                fill={gold}
              />
            ))}
            {s === 1 && <Arrow x1={145} y1={67} x2={235} y2={67} color={gold} dashed />}
          </>
        )}
        {s === 0 && (
          <>
            <Label x={61} y={57}>
              Pollen
            </Label>
            <Arrow x1={72} y1={64} x2={77} y2={106} color={gold} />
          </>
        )}
        {s === 2 && <Arrow x1={149} y1={137} x2={207} y2={137} color={green} />}
      </ArtFrame>
    );
  if (kind === "agroforestrows")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Coopération et concurrence possibles" : "Espèces et espacements à adapter"}
      >
        <path d="M24 159q120-9 312 0v43H24Z" fill="#cfba94" />
        <path d="M24 158q120-8 312 0" fill="none" stroke="#7b975f" strokeWidth="4" />
        {s === 1 && <path d="M78 159l107-14 62 22-169 5Z" fill="#899784" opacity=".3" />}
        <Tree x={79} y={158} scale={0.85} />
        <Tree x={292} y={149} scale={0.66} />
        {[150, 190, 230].map((x) => (
          <Sprout key={x} x={x} y={158} kind="wheat" />
        ))}
        {s === 1 ? (
          <>
            <Arrow x1={26} y1={52} x2={68} y2={52} />
            <Arrow x1={125} y1={81} x2={158} y2={81} width={2} />
            <Label x={213} y={49}>
              Ombre et abri
            </Label>
          </>
        ) : s === 2 ? (
          <>
            <path
              d="M79 157q-7 22-31 33m31-33q30 8 69 35m-69-35 23 40m91-38q-8 19-30 30m30-30q12 21 39 31"
              fill="none"
              stroke={green}
              strokeWidth="2"
            />
            <path d="M138 182h32" stroke={gold} strokeWidth="3" />
            <Label x={179} y={58}>
              Eau et lumière partagées
            </Label>
          </>
        ) : (
          <Label x={183} y={56}>
            Cultures entre les arbres
          </Label>
        )}
      </ArtFrame>
    );
  if (kind === "coralbleach")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Blanchi peut encore signifier vivant" : "Coupe d’un polype corallien"}
      >
        <path d="M25 182q64-7 112 0t198-1v20H25Z" fill="#d9ceb4" />
        <path
          d="M110 180V124q0-27 24-30v83h89V94q25 4 25 30v56Z"
          fill="#f7f0d8"
          stroke="#b8b4a3"
          strokeWidth="2"
        />
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M${139 + i * 7} 131v43`} stroke="#d8d1bc" strokeWidth="1.5" />
        ))}
        <path
          d="M124 178V119q0-28 28-28h54q28 0 28 28v59h-14v-56q0-16-19-16h-44q-19 0-19 16v56Z"
          fill={s === 0 ? "#c99b76" : s === 1 ? "#dabda1" : "#ead9c4"}
          stroke="#b29278"
          strokeWidth="2"
        />
        <path
          d="M153 99q-21-17-17-36m32 35q-11-22-7-40m39 41q21-17 17-36m-32 35q11-22 7-40"
          fill="none"
          stroke={s === 2 ? "#d2bda8" : "#ba8969"}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {Array.from({ length: s === 0 ? 18 : s === 1 ? 8 : 2 }, (_, i) => (
          <circle
            key={i}
            cx={i % 2 ? 227 : 131}
            cy={116 + Math.floor(i / 2) * 6.5}
            r="2.5"
            fill="#86663f"
          />
        ))}
        {s === 1 && (
          <>
            <Heat x={289} y={72} />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx={259 + (i % 3) * 19}
                cy={99 + Math.floor(i / 3) * 25}
                r="3.2"
                fill="#86663f"
              />
            ))}
            <Arrow x1={241} y1={120} x2={287} y2={107} color={gold} />
          </>
        )}
        <Label x={68} y={157}>
          Tissu
        </Label>
        <Label x={278} y={199}>
          Calcaire
        </Label>
      </ArtFrame>
    );
  if (kind === "oceanacid")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Construire peut devenir plus difficile" : "Acidification ≠ blanchissement"}
      >
        <path d="M24 104q38-12 76 0t76 0t76 0t84 0v95H24Z" fill="#c6dfe6" />
        <path d="M24 104q38-12 76 0t76 0t76 0t84 0" stroke="#88b5c6" fill="none" strokeWidth="2" />
        {s === 0 ? (
          <>
            <Label x={180} y={66}>
              CO₂ de l’air
            </Label>
            <Arrow x1={109} y1={60} x2={109} y2={139} />
            <Arrow x1={251} y1={60} x2={251} y2={139} />
            <Label x={180} y={182}>
              CO₂ dissous
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <Label x={68} y={148}>
              H⁺
            </Label>
            <Label x={105} y={148}>
              +
            </Label>
            <Label x={156} y={148}>
              CO₃²⁻
            </Label>
            <Arrow x1={205} y1={141} x2={240} y2={141} />
            <Label x={288} y={148}>
              HCO₃⁻
            </Label>
            <Label x={180} y={77}>
              Le pH baisse
            </Label>
          </>
        ) : (
          <>
            <Label x={180} y={67}>
              Moins de carbonate disponible
            </Label>
            {[65, 95, 125].map((x) => (
              <rect
                key={x}
                x={x}
                y="128"
                width="19"
                height="19"
                rx="3"
                fill="#d6c8a3"
                stroke="#a49778"
              />
            ))}
            <Arrow x1={157} y1={143} x2={203} y2={143} color={gold} />
            {Array.from({ length: 8 }, (_, i) => (
              <rect
                key={i}
                x={224 + (i % 3) * 28}
                y={181 - Math.floor(i / 3) * 23}
                width="26"
                height="21"
                fill={i < 5 ? "#eee6cc" : "none"}
                stroke="#b3a480"
                strokeDasharray={i < 5 ? undefined : "4 3"}
              />
            ))}
            <Label x={94} y={187}>
              CO₃²⁻
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "sealevelrise") {
    const level = s === 0 ? 149 : 125;
    return (
      <ArtFrame
        {...p}
        foot={
          s === 1
            ? "Même quantité d’eau, volume accru"
            : s === 2
              ? "Glace posée sur un continent"
              : "Un niveau initial pour comparer"
        }
      >
        <path d="M41 91v100h224V91" stroke="#7b98aa" strokeWidth="4" fill="none" />
        <path d={`M44 ${level}H262V188H44Z`} fill="#b2d5e2" />
        {Array.from({ length: s === 2 ? 22 : 18 }, (_, i) => (
          <circle
            key={i}
            data-water-particle
            cx={60 + (i % 6) * 37}
            cy={level + 10 + (Math.floor(i / 6) * (181 - level - 10)) / (s === 2 ? 3 : 2)}
            r="3"
            fill={blue}
          />
        ))}
        <path d="M25 149H331" stroke="#8d939b" strokeWidth="1.5" strokeDasharray="4 4" />
        <Label x={136} y={77}>
          {s === 1 ? "Eau réchauffée" : s === 2 ? "Eau ajoutée" : "Niveau de référence"}
        </Label>
        {s === 1 ? (
          <Heat x={154} y={120} />
        ) : s === 2 ? (
          <>
            <path d="M269 133l25-42 41 21v82h-66Z" fill="#b5a07e" stroke="#917c5f" />
            <path d="M282 105l14-41 28 14 10 34-26-8-10 10Z" fill="#f0f7f7" stroke="#a4bcc9" />
            <Arrow x1={297} y1={116} x2={251} y2={134} />
          </>
        ) : null}
      </ArtFrame>
    );
  }
  return null;
}
