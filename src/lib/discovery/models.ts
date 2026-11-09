/** Small, explicit teaching models. Values describe ideal systems, not real equipment. */
const clamp = (value: number) => Math.max(0, Math.min(100, value));
const number = (value: number) => Math.round(value * 10) / 10;

export function leverModel(value: number) {
  const loadArm = 30 - clamp(value) / 5;
  const effortArm = 40 - loadArm;
  return { loadArm, effortArm, loadForce: 120, effortForce: (120 * loadArm) / effortArm };
}

export function buoyancyModel(value: number) {
  const cargo = 8 * clamp(value);
  const mass = 400 + cargo;
  const displacedLitres = Math.min(mass, 1000);
  return {
    cargo,
    mass,
    displacedLitres,
    weight: mass * 9.81,
    buoyantForce: displacedLitres * 9.81,
    condition: mass < 1000 ? "floating" : mass === 1000 ? "neutral" : "sinking",
  } as const;
}

export const MOON_PHASES = [
  "Nouvelle Lune",
  "Premier croissant",
  "Premier quartier",
  "Gibbeuse croissante",
  "Pleine Lune",
  "Gibbeuse décroissante",
  "Dernier quartier",
  "Dernier croissant",
] as const;

export function moonModel(value: number) {
  const phase = Math.round((clamp(value) * 7) / 100);
  const angle = (phase * Math.PI) / 4;
  return {
    phase,
    angle,
    name: MOON_PHASES[phase]!,
    illuminatedFraction: (1 - Math.cos(angle)) / 2,
  };
}

export function gearsModel(value: number) {
  const driverAngle = clamp(value) * 3.6;
  return { driverTeeth: 12, drivenTeeth: 18, driverAngle, drivenAngle: (-driverAngle * 2) / 3 };
}

export function modelValueLabel(kind: string, value: number): string | undefined {
  switch (kind) {
    case "lever":
      return `Bras de l’effort : ${number(leverModel(value).effortArm)} cm`;
    case "buoyancy":
      return `${number(buoyancyModel(value).cargo)} kg ajoutés`;
    case "moon":
      return moonModel(value).name;
    case "gears":
      return `${number(gearsModel(value).driverAngle)}°`;
  }
}

export function modelDescription(kind: string, value: number): string {
  switch (kind) {
    case "lever": {
      const m = leverModel(value);
      return `Charge : 120 N à ${number(m.loadArm)} cm de l’appui. Effort d’équilibre : ${number(m.effortForce)} N à ${number(m.effortArm)} cm. Les moments se compensent. Barre idéale, sans poids ni frottement.`;
    }
    case "buoyancy": {
      const m = buoyancyModel(value);
      const balance =
        m.condition === "floating"
          ? "La coque flotte : poussée et poids se compensent."
          : m.condition === "neutral"
            ? "La coque est entièrement immergée : poussée et poids se compensent."
            : "Même immergée, la coque ne déplace pas assez d’eau : elle s’enfonce.";
      return `${m.mass} kg au total ; ${m.displacedLitres} L déplacés. ${balance} Modèle : coque étanche de 1 m³, eau douce à 1 kg/L. La position verticale est schématique.`;
    }
    case "moon": {
      const m = moonModel(value);
      return `${m.name} : environ ${Math.round(m.illuminatedFraction * 100)} % du disque visible est éclairé. Le Soleil éclaire toujours une moitié de la Lune ; notre angle de vue change. Vue depuis l’hémisphère nord, orbite et tailles simplifiées.`;
    }
    case "seasons":
      return value > 0
        ? "Solstice de juin : le nord penche vers le Soleil, le sud à l’opposé. Été au nord, hiver au sud. L’axe garde sa direction ; l’inclinaison change la durée du jour et l’angle des rayons. Tailles et distances simplifiées."
        : "Solstice de décembre : le sud penche vers le Soleil, le nord à l’opposé. Hiver au nord, été au sud. L’axe garde sa direction ; l’inclinaison change la durée du jour et l’angle des rayons. Tailles et distances simplifiées.";
    case "gears": {
      const m = gearsModel(value);
      return `La roue de 12 dents tourne de ${number(m.driverAngle)}° ; celle de 18 dents de ${number(Math.abs(m.drivenAngle))}° dans le sens opposé. Le rapport est 12/18 : un tour entraîne deux tiers de tour. Profils des dents symboliques.`;
    }
    default:
      return "";
  }
}
