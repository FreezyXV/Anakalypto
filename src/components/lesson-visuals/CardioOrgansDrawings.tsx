import {
  AnatomyScene,
  Arrow,
  Label,
  BloodCell,
  Platelet,
  blood,
  vein,
  gold,
  type DrawingProps,
} from "./OrgansParts";
export function CardioOrgansDrawing({ kind, step: s, id }: DrawingProps) {
  if (kind === "heartloop")
    return (
      <AnatomyScene id={id} title="Deux côtés, quatre cavités" foot="Couleurs : teneur en oxygène">
        <g opacity={s === 1 ? 1 : 0.45}>
          <path
            d="M178 45V58M178 53L166 62M178 53L190 62"
            stroke="#aa8a8e"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M166 57C153 52 145 63 145 72C143 86 160 88 170 78V62Z"
            fill="#dfb7b4"
            stroke="#a07883"
          />
          <path
            d="M190 57C203 52 211 63 211 72C213 86 196 88 186 78V62Z"
            fill="#dfb7b4"
            stroke="#a07883"
          />
          <path d="M159 62L160 78M197 62L196 78" stroke="#bf949c" strokeWidth="2" />
        </g>
        <path
          d="M134 91C115 86 111 112 123 137Q142 174 185 184Q227 155 229 120C231 90 207 75 183 99C169 89 150 85 134 91Z"
          fill={`url(#${id}-tissue)`}
          stroke="#9d737d"
          strokeWidth="2"
        />
        <path d="M133 97Q152 88 176 104V123H133Q123 112 133 97Z" fill="#b9d7e3" stroke={vein} />
        <path d="M134 129H176V171Q148 160 134 140Z" fill={`url(#${id}-vein)`} stroke={vein} />
        <path d="M184 104Q205 87 215 102Q225 113 215 123H184Z" fill="#f1c4c6" stroke={blood} />
        <path d="M184 129H215Q214 155 188 174Z" fill={`url(#${id}-blood)`} stroke={blood} />
        <path d="M181 102V174" stroke="#9e6b75" strokeWidth="4" />
        <Label x={153} y={116}>
          OD
        </Label>
        <Label x={154} y={151}>
          VD
        </Label>
        <Label x={200} y={116}>
          OG
        </Label>
        <Label x={200} y={151}>
          VG
        </Label>
        <g opacity={s === 0 || s === 2 ? 1 : 0.35} data-circulation="systemic-return">
          <path
            d="M119 192H63V108H127"
            fill="none"
            stroke={vein}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <Arrow x1={93} y1={108} x2={123} y2={108} color={vein} />
        </g>
        <g opacity={s === 1 ? 1 : 0.3} data-circulation="pulmonary-out">
          <path
            d="M139 135H109V70H147"
            fill="none"
            stroke={vein}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <Arrow x1={118} y1={70} x2={145} y2={70} color={vein} />
        </g>
        <g opacity={s === 1 ? 1 : 0.3} data-circulation="pulmonary-return">
          <path
            d="M209 70H247V108H221"
            fill="none"
            stroke={blood}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <Arrow x1={245} y1={108} x2={223} y2={108} color={blood} />
        </g>
        <g opacity={s === 2 ? 1 : 0.3} data-circulation="systemic-out">
          <path
            d="M214 155H282V192H225"
            fill="none"
            stroke={blood}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <Arrow x1={278} y1={176} x2={278} y2={188} color={blood} />
        </g>
        <g>
          <path d="M119 187H225M119 197H225" stroke="#c7a5b4" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <path
              key={n}
              d={`M${123 + n * 18} 187q-7 5 0 10`}
              stroke={n < 3 ? vein : blood}
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>
        <Arrow x1={191} y1={192} x2={157} y2={192} color={blood} width={1.8} />
        <Label x={55} y={49}>
          Poumons
        </Label>
        <path d="M93 49H135L151 59" stroke="#9aa7b4" fill="none" />
        <Label x={300} y={190}>
          Corps
        </Label>
      </AnatomyScene>
    );
  if (kind === "clotmesh")
    return (
      <AnatomyScene
        id={id}
        title={["Une petite lésion", "Un bouchon de plaquettes", "Un réseau qui consolide"][s]!}
        foot="Bouchon local, passage conservé"
      >
        <path d="M25 93H156L166 77L179 98L193 80L207 94H335V157H25Z" fill="#fae0d9" opacity=".75" />
        <path
          d="M25 94H154M207 94H335M25 159H335"
          fill="none"
          stroke="#c49393"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path d="M25 99H154M207 99H335M25 154H335" fill="none" stroke="#f3c7bb" strokeWidth="3" />
        <BloodCell x={61 + s * 3} y={128} />
        <BloodCell x={112 + s * 3} y={138} />
        <BloodCell x={251 + s * 3} y={126} />
        <BloodCell x={301 + s * 3} y={142} />
        <Arrow x1={159} y1={142} x2={205} y2={142} color={blood} width={2} />
        {s === 0 ? (
          <>
            <path
              d="M175 89L175 68M191 88L195 63"
              stroke={blood}
              strokeWidth="2"
              strokeDasharray="3 4"
            />
            <path d="M175 47Q164 61 175 64Q186 61 175 47Z" fill="#c16a78" />
            <Label x={257} y={63}>
              Brèche
            </Label>
            <path d="M226 66L193 90" stroke="#9ba7b2" />
          </>
        ) : (
          <>
            <g data-platelet-plug="local">
              {[
                [160, 97],
                [173, 94],
                [188, 94],
                [201, 97],
                [167, 108],
                [182, 109],
                [195, 109],
                [178, 121],
              ].map(([x, y], i) => (
                <Platelet key={i} x={x!} y={y!} scale={0.8} />
              ))}
            </g>
            <Label x={75} y={63}>
              Plaquettes
            </Label>
            <path d="M111 68L161 97" stroke="#9ba7b2" />
            {s === 2 && (
              <g data-fibrin-mesh="local" stroke={gold} strokeWidth="2" opacity=".9">
                {[0, 1, 2, 3, 4].map((n) => (
                  <path
                    key={n}
                    d={`M${151 + n * 11} 87L${174 + n * 7} 131M${151 + n * 11} 129L${174 + n * 7} 85`}
                    fill="none"
                  />
                ))}
              </g>
            )}
            {s === 2 && (
              <>
                <Label x={280} y={63}>
                  Fibrine
                </Label>
                <path d="M253 68L203 98" stroke={gold} />
              </>
            )}
          </>
        )}
        <Label x={100} y={192}>
          Globules rouges
        </Label>
        <path d="M100 173L109 146" stroke="#9ba7b2" />
      </AnatomyScene>
    );
  if (kind === "pulsewave") {
    const c = s === 0 ? 82 : 193;
    return (
      <AnatomyScene
        id={id}
        title={s === 2 ? "Coupe symbolique du poignet" : "Onde et sang : deux mouvements"}
        foot={s === 2 ? "Une artère proche de la peau" : "Gonflement de la paroi amplifié"}
      >
        {s < 2 ? (
          <>
            <path
              data-pulse-crest={c}
              d={`M27 109H${c - 36}C${c - 21} 109 ${c - 20} 88 ${c} 88S${c + 20} 109 ${c + 36} 109H333V153H${c + 36}C${c + 20} 153 ${c + 20} 174 ${c} 174S${c - 20} 153 ${c - 36} 153H27Z`}
              fill="#f5d6d6"
              stroke="#b6727d"
              strokeWidth="3"
            />
            <path
              d={`M27 114H${c - 36}C${c - 21} 114 ${c - 20} 93 ${c} 93S${c + 20} 114 ${c + 36} 114H333`}
              stroke="#fff1e8"
              fill="none"
              strokeWidth="2"
            />
            {[52, 124, 238, 300].map((x, i) => (
              <BloodCell key={i} x={x + s * 4} y={131} />
            ))}
            <Arrow x1={56} y1={65} x2={300} y2={65} color={vein} />
            <Label x={180} y={53}>
              Onde de pression →
            </Label>
            <Arrow x1={143} y1={131} x2={166} y2={131} color={blood} width={2} />
            <Label x={210} y={194}>
              Le sang circule aussi
            </Label>
          </>
        ) : (
          <>
            <path
              d="M34 103Q180 78 326 104V194H34Z"
              fill={`url(#${id}-tissue)`}
              stroke="#bf9a94"
              strokeWidth="1.5"
            />
            <path d="M36 106Q180 82 325 107" stroke="#d6aa8a" strokeWidth="6" fill="none" />
            <ellipse
              cx="194"
              cy="178"
              rx="71"
              ry="12"
              fill="#ede9dd"
              stroke="#b3a995"
              strokeWidth="2"
            />
            <path
              d="M38 137H195Q229 119 258 137H327V154H258Q229 169 195 154H38Z"
              fill="#e9a8ae"
              stroke={blood}
              strokeWidth="2"
            />
            <path
              d="M225 55Q234 47 243 55L249 89Q249 103 238 104Q226 104 225 91Z"
              fill="#edceae"
              stroke="#b39483"
              strokeWidth="2"
            />
            <path d="M233 63V77" stroke="#fff4e7" strokeWidth="4" strokeLinecap="round" />
            <Arrow x1={237} y1={126} x2={237} y2={112} color={vein} width={2} />
            <Label x={88} y={70}>
              Peau
            </Label>
            <path d="M108 75L146 94" stroke="#9ba7b2" />
            <Label x={74} y={191}>
              Os
            </Label>
            <path d="M92 184L134 177" stroke="#9ba7b2" />
            <Label x={100} y={128}>
              Artère
            </Label>
          </>
        )}
      </AnatomyScene>
    );
  }
  return null;
}
