import { Arrow, Label, blue, green, warm } from "./DrawingPrimitives";
import { Wave, Speaker } from "./AIPrimitives";
import { planarArmPose } from "@/lib/lesson-visuals/learning-models";
import type { LessonDiagramKind } from "@/lib/lesson-visuals/registry";
type Props = { kind: LessonDiagramKind; step: number; id: string };
function Phone({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <g>
      <rect
        x="139"
        y="48"
        width="83"
        height="123"
        rx="13"
        fill={`url(#${id}-metal)`}
        stroke="#7792a9"
        strokeWidth="2"
      />
      <rect x="146" y="60" width="69" height="97" rx="4" fill="#f5f8fa" />
      <path d="M169 54H193" stroke="#8aa3b9" strokeWidth="2" strokeLinecap="round" />
      <circle cx="180" cy="164" r="2.5" fill="#8ba6b9" />
      {children}
    </g>
  );
}
function Avatar({
  x,
  y,
  style = 0,
  smile = false,
}: {
  x: number;
  y: number;
  style?: number;
  smile?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-44" y="-54" width="88" height="108" rx="9" fill="#e1ebf2" stroke="#a5bbcb" />
      <path d="M-35 52V33Q-25 12 0 18Q28 11 36 33V52" fill={style ? "#91aa8a" : "#98b4ca"} />
      <path d="M-8 12V26Q0 34 8 26V12" fill="#d7bd9f" stroke="#bca083" />
      <ellipse cx="0" cy="-12" rx="24" ry="32" fill="#e4ccb0" stroke="#b99d80" strokeWidth="1.2" />
      {style ? (
        <path d="M-25-15Q-30-49 0-47Q31-46 25-6L17-28-5-20-18-28Z" fill="#6c7986" />
      ) : (
        <path d="M-25-9Q-32-46-3-48Q29-49 26-15L12-29-17-21Z" fill="#8e7157" />
      )}
      <path d="M-13-10h5M7-10h5" stroke="#5e6971" strokeWidth="2" strokeLinecap="round" />
      <path d="M0-6l-3 10h5" fill="none" stroke="#b39678" />
      {smile ? (
        <path d="M-9 9Q0 21 10 9" fill="#f3eee5" stroke="#9c7968" />
      ) : (
        <path d="M-8 11H9" stroke="#987967" strokeWidth="1.5" />
      )}
    </g>
  );
}
export function AISocietyDrawing({ kind, step, id }: Props) {
  if (kind === "hallucination")
    return (
      <>
        <rect
          x={step === 0 ? 63 : 20}
          y="62"
          width={step === 0 ? 234 : 140}
          height="97"
          rx="11"
          fill="#e1ebf3"
          stroke="#9fb8cb"
        />
        <path
          d={step === 0 ? "M89 159L79 175 117 159" : "M42 159L33 172 68 159"}
          fill="#e1ebf3"
          stroke="#9fb8cb"
        />
        <Label x={step === 0 ? 180 : 90} y={91}>
          Musée fictif
        </Label>
        <Label x={step === 0 ? 180 : 90} y={126}>
          {step === 2 ? "4 salles" : "7 salles"}
        </Label>
        {step === 0 ? (
          <>
            <Label x={180} y={28}>
              Une phrase assurée n’est pas une preuve
            </Label>
            <Label x={180} y={201}>
              Exemple inventé pour la démonstration
            </Label>
          </>
        ) : (
          <>
            <path
              d="M222 53H307L325 71V162H222Z"
              fill="#fafbf9"
              stroke="#a6baaa"
              strokeWidth="1.5"
            />
            <path d="M307 53V71H325" fill="none" stroke="#97ae9d" />
            <Label x={273} y={94}>
              Notice
            </Label>
            <Label x={273} y={124}>
              4 salles
            </Label>
            <path d="M237 140H311M237 149H301" stroke="#b2c7b4" />
            <Arrow x1={213} y1={114} x2={169} y2={114} color={step === 1 ? warm : green} />
            {step === 1 ? (
              <path d="M178 80l15 15m0-15-15 15" stroke={warm} strokeWidth="3" />
            ) : (
              <path d="M177 82l7 8 13-17" fill="none" stroke={green} strokeWidth="3" />
            )}
            <Label x={180} y={27}>
              {step === 1
                ? "Comparer à une source pertinente"
                : "Corriger, ou reconnaître l’incertitude"}
            </Label>
            <Label x={180} y={201}>
              Documents fictifs pour la démonstration
            </Label>
          </>
        )}
      </>
    );
  if (kind === "assistive")
    return (
      <>
        {step === 0 ? (
          <>
            <rect x="23" y="77" width="96" height="44" rx="4" fill="#a4c0af" stroke="#739681" />
            <Label x={71} y={105}>
              Sortie
            </Label>
            <path
              d="M123 70l-7 7M123 129l-7-7M33 65l-7 7M26 127l7 7"
              stroke={blue}
              strokeWidth="2"
            />
            <Arrow x1={121} y1={104} x2={134} y2={104} />
            <Phone id={id}>
              <Label x={180} y={101}>
                Sortie
              </Label>
              <path d="M157 115H203M157 125H196" stroke="#b3c5d4" />
            </Phone>
            <Arrow x1={230} y1={109} x2={261} y2={109} color={green} />
            <Speaker x={299} y={109} />
            <Label x={180} y={27}>
              Reconnaître les lettres, puis les lire
            </Label>
            <Label x={180} y={201}>
              Lecture vocale : principe illustré
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Wave x={71} y={110} />
            <Label x={71} y={161}>
              Parole
            </Label>
            <Arrow x1={104} y1={111} x2={134} y2={111} />
            <Phone id={id}>
              <Label x={180} y={108}>
                Bonjour
              </Label>
              <path d="M156 123H204" stroke="#9db7ca" />
            </Phone>
            <Label x={279} y={106}>
              Texte
            </Label>
            <Label x={279} y={131}>
              affiché
            </Label>
            <Label x={180} y={27}>
              Transcription d’un exemple de parole
            </Label>
            <Label x={180} y={201}>
              Le bruit peut changer la reconnaissance
            </Label>
          </>
        ) : (
          <>
            <rect x="28" y="79" width="80" height="70" rx="6" fill="#e3eaf1" stroke="#a9becf" />
            <text x="68" y="126" fontSize="38" fill={blue} textAnchor="middle">
              O
            </text>
            <Arrow x1={113} y1={111} x2={134} y2={111} />
            <Phone id={id}>
              <Label x={180} y={96}>
                O ou 0 ?
              </Label>
              <Label x={180} y={127}>
                À vérifier
              </Label>
            </Phone>
            <path d="M259 86L280 48 301 86Z" fill="#e6d5b4" stroke="#b59862" />
            <Label x={280} y={79}>
              !
            </Label>
            <Label x={280} y={128}>
              Autre
            </Label>
            <Label x={280} y={153}>
              méthode
            </Label>
            <Label x={180} y={27}>
              Une lecture peut rester ambiguë
            </Label>
            <Label x={180} y={201}>
              Lettre O / chiffre 0 : exemple fictif
            </Label>
          </>
        )}
      </>
    );
  if (kind === "syntheticmedia")
    return (
      <>
        {step === 0 ? (
          <>
            <Avatar x={94} y={112} />
            <Avatar x={266} y={112} style={1} smile />
            <Label x={94} y={187}>
              Apparence A
            </Label>
            <Label x={266} y={187}>
              Expression B
            </Label>
            <Label x={180} y={27}>
              Deux avatars entièrement dessinés
            </Label>
          </>
        ) : step === 1 ? (
          <>
            <Avatar x={69} y={114} style={1} smile />
            <Arrow x1={121} y1={113} x2={158} y2={113} />
            <Avatar x={232} y={114} smile />
            <rect x="266" y="144" width="65" height="29" rx="5" fill="#ead4b2" stroke="#bc9f6f" />
            <Label x={298} y={165}>
              Fictif
            </Label>
            <Label x={180} y={27}>
              Une expression transférée, ici illustrée
            </Label>
            <Label x={180} y={201}>
              Pas une preuve d’événement réel
            </Label>
          </>
        ) : (
          <>
            <path d="M32 63H125V160H32Z" fill="#f7f9fa" stroke="#a6bdcd" />
            <path
              d="M47 80H108M47 91H99M47 105H108M47 119H108M47 133H91"
              stroke="#a4bdcd"
              strokeWidth="2"
            />
            <circle cx="113" cy="153" r="21" fill="#d7e5d0" stroke="#94ad87" />
            <ellipse
              cx="108"
              cy="150"
              rx="8"
              ry="5"
              transform="rotate(-40 108 150)"
              fill="none"
              stroke={green}
              strokeWidth="2"
            />
            <ellipse
              cx="117"
              cy="157"
              rx="8"
              ry="5"
              transform="rotate(-40 117 157)"
              fill="none"
              stroke={green}
              strokeWidth="2"
            />
            {["Émetteur", "Historique", "Recouper"].map((t, n) => (
              <g key={t}>
                <circle cx="183" cy={73 + n * 39} r="4" fill={blue} />
                <Label x={199} y={80 + n * 39} anchor="start">
                  {t}
                </Label>
              </g>
            ))}
            <Label x={180} y={27}>
              Examiner l’origine et le contexte
            </Label>
            <Label x={180} y={201}>
              Provenance ≠ vérité de l’événement
            </Label>
          </>
        )}
      </>
    );
  if (kind === "robotaction") {
    const tip = [
        { x: 150, y: 105 },
        { x: 193, y: 126 },
        { x: 193, y: 85 },
      ][step]!,
      pose = planarArmPose({ x: 70, y: 169 }, tip),
      cubeY = step === 2 ? 98 : 139;
    return (
      <>
        <path d="M120 151H328V164H120Z" fill="#b9c9d4" stroke="#91aabb" />
        <path d="M134 165V180M314 165V180" stroke="#96afc0" strokeWidth="5" />
        <path d="M42 181L48 165H91L99 181Z" fill={`url(#${id}-metal)`} stroke="#7b99b0" />
        <path
          d={`M70 169L${pose.elbow.x} ${pose.elbow.y}L${tip.x} ${tip.y}`}
          fill="none"
          stroke="#668da8"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M70 169L${pose.elbow.x} ${pose.elbow.y}L${tip.x} ${tip.y}`}
          fill="none"
          stroke="#b8cedc"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[pose.base, pose.elbow, pose.tip].map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={i === 2 ? 5 : 9}
              fill={`url(#${id}-metal)`}
              stroke="#65869e"
            />
            <circle cx={p.x} cy={p.y} r="2.5" fill="#577b95" />
          </g>
        ))}
        <rect
          x="183"
          y={cubeY - 10}
          width="20"
          height="20"
          rx="2"
          fill={`url(#${id}-gold)`}
          stroke="#ae8953"
        />
        <path
          d={`M${tip.x - 12} ${tip.y + 5}v18h5M${tip.x + 12} ${tip.y + 5}v18h-5`}
          fill="none"
          stroke="#7295ae"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M272 66H305L315 75V98H272Z" fill={`url(#${id}-metal)`} stroke="#87a2b8" />
        <circle cx="285" cy="81" r="8" fill="#7d9eb5" />
        <circle cx="285" cy="81" r="4" fill="#c1dae6" />
        <path d="M286 99V125M276 125H297" stroke="#91aabd" strokeWidth="3" />
        {step === 0 ? (
          <path
            d="M272 93L209 128M272 93L214 148"
            fill="none"
            stroke="#7fab97"
            strokeDasharray="4 4"
          />
        ) : step === 1 ? (
          <Arrow x1={225} y1={133} x2={209} y2={133} color={green} />
        ) : (
          <>
            <Arrow x1={219} y1={132} x2={219} y2={102} color={green} />
            <path
              d="M272 93L211 88M272 93L211 112"
              fill="none"
              stroke={blue}
              strokeDasharray="4 4"
            />
          </>
        )}
        <Label x={180} y={26}>
          {
            [
              "Consigne : « Saisir le cube »",
              "Approcher et fermer la pince",
              "Soulever, puis observer à nouveau",
            ][step]
          }
        </Label>
        <Label x={180} y={55}>
          {["Image + consigne", "Commandes articulaires", "Nouvelle observation"][step]}
        </Label>
        <Label x={180} y={201}>
          Bras et scénario de démonstration
        </Label>
      </>
    );
  }
  return null;
}
