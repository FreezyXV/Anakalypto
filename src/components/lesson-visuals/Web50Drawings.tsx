import {
  ArtFrame,
  Arrow,
  Label,
  blue,
  green,
  gold,
  red,
  ink,
  type DrawingProps,
} from "./Exploration50Parts";
function Page({ x, y, label, word }: { x: number; y: number; label: string; word: string }) {
  return (
    <g>
      <path d={`M${x} ${y}h64l14 15v66H${x}Z`} fill="#f9f7ef" stroke="#95acbb" strokeWidth="1.5" />
      <path d={`M${x + 64} ${y}v15h14`} fill="none" stroke="#95acbb" />
      <Label x={x + 35} y={y + 28}>
        {label}
      </Label>
      <Label x={x + 39} y={y + 55}>
        {word}
      </Label>
    </g>
  );
}
export function Web50Drawing(p: DrawingProps) {
  const { kind, step: s } = p;
  if (kind === "htmltree")
    return (
      <ArtFrame {...p} foot="Du code à la page">
        {s === 0 ? (
          <>
            <rect x="34" y="58" width="292" height="140" rx="10" fill="#dce7ee" stroke="#9db5c5" />
            <Label x={54} y={91} anchor="start">
              {"<main>"}
            </Label>
            <Label x={72} y={124} anchor="start">
              {"<h1>Bonjour</h1>"}
            </Label>
            <Label x={72} y={155} anchor="start">
              {"<p>Bienvenue.</p>"}
            </Label>
            <Label x={54} y={186} anchor="start">
              {"</main>"}
            </Label>
          </>
        ) : s === 1 ? (
          <>
            <path d="M180 91v27H93v23m87-23h87v23" stroke="#8cabbc" strokeWidth="3" fill="none" />
            <rect x="137" y="53" width="86" height="39" rx="8" fill="#bfd2df" />
            <Label x={180} y={79}>
              main
            </Label>
            {[93, 267].map((x, i) => (
              <g key={x}>
                <rect
                  x={x - 54}
                  y="142"
                  width="108"
                  height="48"
                  rx="8"
                  fill={i ? "#d8ddc1" : "#e4d6b6"}
                />
                <Label x={x} y={172}>
                  {i ? "p" : "h1"}
                </Label>
              </g>
            ))}
          </>
        ) : (
          <>
            <rect x="34" y="52" width="292" height="146" rx="10" fill="#fcfaf2" stroke="#9db5c5" />
            <path d="M34 77h292" stroke="#9db5c5" />
            <circle cx="48" cy="64" r="3" fill="#b59f89" />
            <circle cx="60" cy="64" r="3" fill="#b59f89" />
            <text x="56" y="126" fontSize="27" fontWeight="700" fill={ink}>
              Bonjour
            </text>
            <Label x={56} y={165} anchor="start">
              Bienvenue.
            </Label>
          </>
        )}
      </ArtFrame>
    );
  if (kind === "searchindex")
    return (
      <ArtFrame
        {...p}
        foot={s === 2 ? "Résultats cherchés dans l’index" : "Trois pages fictives pour comprendre"}
      >
        {s === 0 ? (
          <>
            <Page x={29} y={98} label="A" word="arbre" />
            <Page x={141} y={98} label="B" word="mer" />
            <Page x={253} y={98} label="C" word="arbre" />
            <Arrow x1={109} y1={130} x2={136} y2={130} />
            <Arrow x1={220} y1={130} x2={249} y2={130} />
            <Label x={180} y={66}>
              Suivre les liens
            </Label>
          </>
        ) : (
          <>
            <rect x="42" y="82" width="276" height="112" rx="9" fill="#e8e5d5" stroke="#aaa58b" />
            <path d="M42 132h276m-139-50v112" stroke="#b7b29b" />
            <Label x={108} y={114}>
              arbre
            </Label>
            <Label x={250} y={114}>
              A, C
            </Label>
            <Label x={108} y={169}>
              mer
            </Label>
            <Label x={250} y={169}>
              B
            </Label>
            {s === 2 ? (
              <>
                <rect x="61" y="43" width="237" height="30" rx="15" fill="#d1e4ec" stroke={blue} />
                <Label x={164} y={65}>
                  Requête : arbre
                </Label>
                <path d="M55 85h250v45H55Z" fill="none" stroke={blue} strokeWidth="3" />
              </>
            ) : (
              <Label x={180} y={61}>
                Index préparé
              </Label>
            )}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "cookietoken")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "Seulement aux requêtes éligibles" : "Session fictive, pas une identité civile"
        }
      >
        <rect x="24" y="66" width="116" height="127" rx="10" fill="#dbe8ef" stroke="#7f9eb3" />
        <path d="M25 91h114" stroke="#8ba8ba" />
        <Label x={82} y={58}>
          Navigateur
        </Label>
        <rect x="229" y="66" width="106" height="127" rx="10" fill="#d9e0d0" stroke="#8ba18a" />
        <path d="M236 78h92m-92 9h92" stroke="#a0b299" />
        <Label x={282} y={58}>
          Serveur
        </Label>
        {s === 0 ? (
          <>
            <Arrow x1={227} y1={117} x2={143} y2={117} />
            <Label x={184} y={99}>
              S7
            </Label>
            <rect x="47" y="128" width="70" height="38" rx="6" fill="#e9d7ac" stroke={gold} />
            <Label x={82} y={155}>
              S7
            </Label>
          </>
        ) : (
          <>
            <rect x="47" y="128" width="70" height="38" rx="6" fill="#e9d7ac" stroke={gold} />
            <Label x={82} y={155}>
              S7
            </Label>
            <Label x={282} y={120}>
              S7
            </Label>
            <path
              d="M251 134h9l5 25h39l6-19h-49m8 25a3 3 0 1 0 0 .1m29-.1a3 3 0 1 0 0 .1"
              fill="none"
              stroke={green}
              strokeWidth="2"
            />
            {s === 2 && (
              <>
                <Arrow x1={143} y1={117} x2={225} y2={117} color={gold} />
                <Label x={184} y={99}>
                  S7
                </Label>
              </>
            )}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "passwordhash")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "Même mot de passe, sels différents" : "Valeurs et empreintes fictives abrégées"
        }
      >
        {s < 2 ? (
          <>
            <rect x="30" y="63" width="132" height="50" rx="7" fill="#e8d6b2" stroke="#baa36f" />
            <Label x={96} y={86}>
              Mot de passe
            </Label>
            <Label x={96} y={106}>
              + sel S7
            </Label>
            <rect x="210" y="67" width="119" height="42" rx="7" fill="#c2d3de" stroke="#839fb1" />
            <Label x={270} y={94}>
              Argon2id
            </Label>
            <Arrow x1={165} y1={88} x2={207} y2={88} />
            <Arrow x1={270} y1={112} x2={270} y2={141} />
            <rect x="218" y="147" width="103" height="44" rx="7" fill="#d9dfc7" stroke="#9aad8c" />
            <Label x={270} y={175}>
              h7…
            </Label>
            {s === 0 ? (
              <>
                <Label x={107} y={158}>
                  Stocker
                </Label>
                <Label x={107} y={181}>
                  sel + empreinte
                </Label>
              </>
            ) : (
              <>
                <rect
                  x="40"
                  y="145"
                  width="127"
                  height="48"
                  rx="7"
                  fill="#d9dfc7"
                  stroke="#9aad8c"
                />
                <Label x={103} y={174}>
                  h7… stockée
                </Label>
                <Label x={190} y={177} color={green}>
                  =
                </Label>
              </>
            )}
          </>
        ) : (
          <>
            <Label x={180} y={62}>
              Un même mot de passe
            </Label>
            {[0, 1].map((i) => (
              <g key={i}>
                <rect
                  x={35 + i * 167}
                  y="85"
                  width="123"
                  height="48"
                  rx="7"
                  fill="#e9d9b6"
                  stroke="#b59b65"
                />
                <Label x={96 + i * 167} y={114}>
                  {i ? "Sel B" : "Sel A"}
                </Label>
                <Arrow x1={96 + i * 167} y1={137} x2={96 + i * 167} y2={157} />
                <rect x={35 + i * 167} y="163" width="123" height="35" rx="7" fill="#c9dce3" />
                <Label x={96 + i * 167} y={187}>
                  {i ? "z2…" : "h7…"}
                </Label>
              </g>
            ))}
          </>
        )}
      </ArtFrame>
    );
  if (kind === "blocklinks")
    return (
      <ArtFrame
        {...p}
        foot={
          s === 2 ? "Un historique soumis au consensus" : "Références aux empreintes précédentes"
        }
      >
        {s < 2 ? (
          <>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x={25 + i * 111}
                  y="64"
                  width="88"
                  height="124"
                  rx="8"
                  fill={s === 1 && i === 0 ? "#e5c0ba" : "#d4e1e6"}
                  stroke={s === 1 && i === 0 ? red : "#87a1b1"}
                  strokeWidth="2"
                />
                <Label x={69 + i * 111} y={88}>{`Bloc ${i + 1}`}</Label>
                <path d={`M${30 + i * 111} 98h78`} stroke="#9bb1be" />
                <Label x={69 + i * 111} y={121}>
                  {i === 0 ? "—" : i === 1 ? "← ab" : "← cd"}
                </Label>
                <Label x={69 + i * 111} y={153}>
                  {i === 0 ? (s === 1 ? "xy" : "ab") : i === 1 ? "cd" : "ef"}
                </Label>
                <path d={`M${41 + i * 111} 168h53`} stroke="#9aaea6" strokeWidth="3" />
              </g>
            ))}
            <Arrow x1={135} y1={125} x2={116} y2={125} color={s === 1 ? red : green} />
            <Arrow x1={246} y1={125} x2={227} y2={125} color={green} />
            {s === 1 && <path d="M117 135l16 16m0-16-16 16" stroke={red} strokeWidth="3" />}
          </>
        ) : (
          <>
            <path d="M85 89L273 89 180 178Z" stroke="#9cb4c0" strokeWidth="3" fill="none" />
            {[
              [85, 89],
              [273, 89],
              [180, 178],
            ].map(([x, y]) => (
              <g key={x}>
                <rect
                  x={x! - 31}
                  y={y! - 21}
                  width="62"
                  height="42"
                  rx="6"
                  fill="#b6cdd6"
                  stroke="#7596a8"
                />
                <Label x={x!} y={y! + 6}>
                  ab…
                </Label>
              </g>
            ))}
            <rect x="141" y="67" width="78" height="40" rx="6" fill="#e4c1b8" stroke={red} />
            <Label x={180} y={94}>
              xy…
            </Label>
            <path d="M179 112v30m-9-17 18 17m0-17-18 17" stroke={red} strokeWidth="2" fill="none" />
          </>
        )}
      </ArtFrame>
    );
  return null;
}
