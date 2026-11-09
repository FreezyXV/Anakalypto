import type { DiscoveryStep } from "./schema";
import { buoyancyModel, gearsModel, leverModel, moonModel } from "./models";
import { mechanismState, isMechanismKind } from "./mechanisms";
import { pistonState, visualDescription } from "./visual-state";

/** Short, authored reading layer for the mobile discovery; never truncate an explanation. */
export function visualCaption(visual: DiscoveryStep["visual"], value: number): string {
  const current = visual.fixedValue ?? value;
  const active = current > 0;
  switch (visual.kind) {
    case "soap":
      return active
        ? "Les têtes restent vers l’eau, les queues dans la graisse."
        : "La graisse reste séparée de l’eau.";
    case "circuit":
      return active
        ? "Le courant circule dans la boucle fermée : la lampe brille."
        : "Circuit ouvert : pas de courant, la lampe reste éteinte.";
    case "turbo":
      return active
        ? "Les gaz entraînent la turbine ; l’axe fait tourner le compresseur."
        : "Sans flux dans ce modèle, les roues sont arrêtées.";
    case "piston": {
      const p = pistonState(current, visual.phase);
      return p.cycleComplete
        ? "Deux tours terminés : retour à l’admission."
        : `${p.name} : le piston ${p.downward ? "descend" : "monte"}.`;
    }
    case "moon": {
      const m = moonModel(current);
      return `${m.name} : ${m.phase % 2 ? "environ " : ""}${Math.round(m.illuminatedFraction * 100)} % du disque visible est éclairé.`;
    }
    case "buoyancy": {
      const m = buoyancyModel(current);
      return `${m.mass} kg, ${m.displacedLitres} L déplacés. ${m.condition === "sinking" ? "La poussée ne suffit plus." : m.condition === "neutral" ? "Immersion complète : poids et poussée égaux." : "À flot : poids et poussée égaux."}`;
    }
    case "lever": {
      const m = leverModel(current);
      return `Charge : 120 N. Effort d’équilibre : ${Math.round(m.effortForce * 10) / 10} N. Compare les distances à l’appui.`;
    }
    case "gears": {
      const m = gearsModel(current);
      return `12 dents → 18 dents : ${Math.round(m.driverAngle)}° → ${Math.round(Math.abs(m.drivenAngle))}°, en sens opposés.`;
    }
    case "seasons":
      return active
        ? "Juin sélectionné : été au nord, hiver au sud."
        : "Décembre sélectionné : hiver au nord, été au sud.";
    case "photosynthesis":
      return active
        ? "Lumière : énergie. Eau : O₂ libéré. CO₂ : carbone du sucre."
        : "Sans lumière : pas de nouvel apport d’énergie lumineuse.";
    case "bread":
      return visual.scene === "microbes"
        ? "Levures : surtout du gaz. Bactéries : surtout des acides."
        : active
          ? "Les bulles de CO₂ font gonfler la pâte."
          : "Avant l’ajout de levain : aucune bulle de levée représentée.";
    case "telephone":
      return active
        ? "La voix devient un courant variable, puis un son recréé."
        : "Silence : pas de variation liée à la voix.";
    case "wifi":
      return !active
        ? "Émetteur Wi-Fi éteint : aucune onde représentée."
        : visual.scene === "walls"
          ? "Le mur affaiblit le signal, sans effacer des bits."
          : "La box et le téléphone échangent des données par ondes radio.";
    case "glass":
      return active
        ? "Trier → broyer → refondre → mouler : un nouveau cycle."
        : "La céramique doit être écartée avant le broyage et la refonte.";
    case "autopilot":
      return !active
        ? "Capteurs disponibles ; commande automatique interrompue."
        : visual.scene === "gust"
          ? "Rafale : l’écart mesuré entraîne une correction des gouvernes."
          : "Mesurer → comparer → commander → mesurer à nouveau.";
    case "cyclone":
      return visual.scene === "land"
        ? "Sur terre, l’apport marin est coupé : affaiblissement progressif."
        : active
          ? "L’air monte autour de l’œil et y descend. La condensation libère de la chaleur."
          : "Mer froide : moins d’énergie, pas de cyclone alimenté dans ce modèle.";
    default:
      return isMechanismKind(visual.kind)
        ? mechanismState(visual.kind, current, visual.frame, visual.scene).description
        : visualDescription(visual, current);
  }
}
