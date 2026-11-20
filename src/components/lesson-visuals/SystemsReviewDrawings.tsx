import { Art, Box, Tag, Arrow, blue, green, gold, ink, type DrawingProps } from "./Horizons50Parts";

const idle = "#96a8b4";

export function LoopDrawing(props: DrawingProps) {
  const { step } = props;
  const exits = step === 2;
  const accepted = exits ? idle : blue;
  const refused = exits ? green : idle;
  return (
    <Art
      {...props}
      foot={
        [
          "Le test décide de la suite",
          "Après l’ajout, i passe à 3",
          "3 < 3 est faux. La boucle s’arrête.",
        ][step]!
      }
    >
      <path d="M180 61L236 98 180 135 124 98Z" fill="#d8e7ef" stroke={ink} strokeWidth="2" />
      <Tag x={180} y={105}>
        i &lt; 3 ?
      </Tag>
      <Tag x={180} y={51}>
        i = {[0, 2, 3][step]}
      </Tag>
      <Arrow d="M123 98H72V146" color={accepted} />
      <Arrow d="M237 98H288V146" color={refused} />
      <Tag x={83} y={84} color={exits ? "#586f80" : accepted}>
        Oui
      </Tag>
      <Tag x={278} y={84} color={exits ? refused : "#586f80"}>
        Non
      </Tag>
      <Box x={29} y={149} w={103} h={39} color={exits ? "#edf1f3" : "#cde4ee"}>
        <Tag x={80} y={175}>
          i ← i + 1
        </Tag>
      </Box>
      <Box x={249} y={149} w={78} h={39} color={exits ? "#d4e5cf" : "#edf1f3"}>
        <Tag x={288} y={175}>
          Fin
        </Tag>
      </Box>
      <Arrow d="M80 188V200H14V56H161L176 62" color={accepted} />
    </Art>
  );
}

export function BootDrawing(props: DrawingProps) {
  const { step } = props;
  const preparing = step === 0;
  const loading = step === 1;
  const running = step === 2;
  return (
    <Art
      {...props}
      foot={
        [
          "Le processeur lit le micrologiciel",
          "Le noyau est copié en mémoire",
          "Le processeur exécute le noyau",
        ][step]!
      }
    >
      <Box x={116} y={49} w={128} h={39} color={running ? "#cbe0d8" : "#dfe9ef"}>
        <Tag x={180} y={75}>
          Processeur
        </Tag>
      </Box>
      <Box x={23} y={115} w={84} h={65} color={preparing ? "#e6d2a8" : "#e4ecf0"}>
        <path d="M37 127h56v39H37Z" fill="none" stroke="#6b7e8c" strokeWidth="1.1" />
        <Tag x={65} y={153}>
          UEFI
        </Tag>
      </Box>
      <Box x={138} y={115} w={84} h={65} color={loading ? "#d8e6ed" : "#e4ecf0"}>
        <circle cx="180" cy="145" r="20" fill="#bfd0d9" stroke="#566e81" strokeWidth="1.2" />
        <circle cx="180" cy="145" r="5" fill="#476172" />
        <path d="M197 159l-16-13" stroke="#476172" strokeWidth="2" />
      </Box>
      <Box x={253} y={115} w={84} h={65} color={preparing ? "#e4ecf0" : "#d3e4d9"}>
        <rect
          x="264"
          y="133"
          width="62"
          height="29"
          rx="4"
          fill={preparing ? "#bac7cc" : "#bad3bc"}
          stroke="#68837c"
        />
        <Tag x={295} y={153}>
          {preparing ? "—" : "Noyau"}
        </Tag>
      </Box>
      <Tag x={65} y={198}>
        Puce
      </Tag>
      <Tag x={180} y={198}>
        Stockage
      </Tag>
      <Tag x={295} y={198}>
        RAM
      </Tag>
      {preparing && <Arrow d="M65 114V69H113" color={gold} />}
      {loading && <Arrow d="M223 148H251" color={blue} />}
      {running && <Arrow d="M295 114V69H248" color={green} />}
    </Art>
  );
}
