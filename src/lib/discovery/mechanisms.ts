export const MECHANISM_KINDS = [
  "photosynthesis",
  "bread",
  "glass",
  "wifi",
  "telephone",
  "cyclone",
  "paper",
  "soil",
  "fresco",
  "grid",
  "autopilot",
] as const;
export type MechanismKind = (typeof MECHANISM_KINDS)[number];
export const MECHANISM_SCENES = {
  wifi: ["walls"],
  cyclone: ["land"],
  fresco: ["retouch"],
  soil: ["erosion"],
  grid: ["balance"],
  autopilot: ["gust"],
  bread: ["microbes"],
} as const;
export type MechanismScene =
  "walls" | "land" | "retouch" | "erosion" | "balance" | "gust" | "microbes";
export const SEQUENTIAL_KINDS = ["paper", "soil", "fresco", "grid"] as const;
export const MECHANISM_STAGES = {
  paper: ["Pâte diluée", "Égouttage", "Pressage", "Séchage", "Feuille en bobine"],
  soil: ["Roche-mère", "Roche fissurée", "Minéraux altérés", "Humus", "Sol en couches"],
  fresco: ["Enduit frais", "Pigments à l’eau", "CO₂ absorbé", "Cristaux formés", "Pigments fixés"],
  grid: ["Centrale", "Tension élevée", "Transport", "Tension abaissée", "Maison : 230 V"],
} as const;
export function isMechanismKind(kind: string): kind is MechanismKind {
  return (MECHANISM_KINDS as readonly string[]).includes(kind);
}
export function isSequentialKind(kind: string): kind is keyof typeof MECHANISM_STAGES {
  return (SEQUENTIAL_KINDS as readonly string[]).includes(kind);
}
export function mechanismState(
  kind: MechanismKind,
  value: number,
  frame?: number,
  scene?: MechanismScene,
) {
  const amount = Math.max(0, Math.min(100, value));
  const stage = frame ?? Math.round(amount / 25);
  const active = frame === undefined ? amount > 0 : frame > 0;
  const descriptions: Record<MechanismKind, string> = {
    photosynthesis: active
      ? "La lumière fournit l’énergie. L’eau libère l’O₂ ; le carbone du CO₂ sert au sucre. Les deux trajets sont distincts."
      : "Sans lumière, l’apport d’énergie lumineuse s’arrête. Eau et CO₂ restent des ingrédients ; les réserves d’énergie peuvent encore servir brièvement.",
    bread: active
      ? "La pâte gonfle avec des bulles de CO₂. Les levures produisent surtout le gaz, les bactéries surtout les acides. Le dessin compare des états, sans mesurer le temps."
      : "Pâte avant fermentation : aucune bulle de levée n’est représentée. Le levain n’a pas encore été ajouté dans cette expérience.",
    glass: active
      ? "Les intrus sont écartés. Le verre d’emballage devient du calcin, est refondu et prend la forme d’une nouvelle bouteille."
      : "Une tasse en céramique est mêlée aux bouteilles. Le lot doit être trié avant d’aller au broyage et au four.",
    wifi: active
      ? scene === "walls"
        ? "L’onde radio est atténuée par les murs et la distance. Elle arrive plus faible ; cela ne signifie pas que les murs effacent des bits."
        : "La box émet une onde radio porteuse de données ; l’antenne du téléphone la reçoit. Le téléphone peut répondre. Les arcs ne montrent pas une fréquence mesurée."
      : "La box contient des données, mais son émetteur Wi-Fi est éteint. Aucune onde radio n’est représentée vers le téléphone.",
    telephone: active
      ? "Le son fait vibrer la membrane du micro. Le courant varie selon la voix ; l’écouteur recrée des vibrations de l’air. Les courbes sont symboliques."
      : "Silence : pas de vibration de voix représentée, ni de variation du signal liée à cette voix. La ligne plate ne signifie pas qu’aucun courant électrique ne peut exister.",
    cyclone:
      scene === "land"
        ? "Sur terre, l’alimentation par la mer chaude est coupée. Une circulation résiduelle est encore dessinée : le cyclone s’affaiblit progressivement."
        : active
          ? "L’air humide monte autour de l’œil. La condensation libère de la chaleur. L’œil est une colonne dégagée avec de l’air descendant ; à gauche, la rotation est vue du dessus dans l’hémisphère nord. D’autres conditions sont nécessaires."
          : "La mer froide s’évapore aussi, mais fournit moins d’énergie. Le dessin ne représente pas de cyclone alimenté dans cet état.",
    paper: [
      "Des fibres sont dispersées dans beaucoup d’eau.",
      "L’eau traverse la toile ; les fibres restent et forment un tapis.",
      "Les rouleaux pressent la feuille et retirent de l’eau.",
      "Les cylindres chauffés font évaporer l’eau restante.",
      "La feuille presque sèche est enroulée en bobine.",
    ][stage]!,
    soil:
      scene === "erosion"
        ? "La pluie emporte une partie de la couche de surface d’un sol nu. La roche reste ; la couche perdue ne se reforme pas immédiatement."
        : [
            "Roche nue : aucun horizon de sol n’est encore dessiné.",
            "Des fissures apparaissent dans la roche.",
            "La roche altérée fournit des particules minérales.",
            "La matière organique des êtres vivants enrichit la surface.",
            "Le sol présente des horizons au-dessus de la roche-mère. Les processus se chevauchent ; le curseur n’est pas une horloge réelle.",
          ][stage]!,
    fresco:
      scene === "retouch"
        ? "Le nouvel ajout de pigment reste sur l’enduit déjà durci. Il n’est pas incorporé de la même manière qu’un pigment posé sur enduit frais."
        : [
            "Enduit de chaux encore frais, avant la couleur.",
            "Les grains de pigment sont posés sur l’enduit frais.",
            "Le CO₂ de l’air entre dans la réaction de carbonatation.",
            "Des cristaux de carbonate de calcium se forment autour des pigments.",
            "Les pigments sont fixés dans l’enduit durci. Le dessin distingue carbonatation et simple perte d’eau.",
          ][stage]!,
    grid:
      scene === "balance"
        ? "Production et consommation sont mises en regard. Le réseau doit maintenir leur équilibre ; les câbles ne sont pas une réserve d’électricité."
        : [
            "Une centrale produit de l’électricité.",
            "Un transformateur élève la tension pour le transport.",
            "Les grandes lignes transportent l’électricité à haute tension.",
            "Des transformateurs abaissent la tension par étapes.",
            "La prise domestique représentée est à 230 volts en France. Le curseur suit des étapes, pas le déplacement d’un électron.",
          ][stage]!,
    autopilot: active
      ? "La consigne des pilotes reste choisie. Les capteurs mesurent l’état réel ; le calculateur compare et les servomoteurs commandent les gouvernes. La mesure revient dans la boucle."
      : "Consigne et capteurs restent disponibles. La commande automatique des gouvernes est interrompue ; les pilotes tiennent les commandes.",
  };
  return { kind, amount, stage, active, scene, description: descriptions[kind] };
}
export type MechanismState = ReturnType<typeof mechanismState>;
