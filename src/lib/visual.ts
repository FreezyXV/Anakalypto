/**
 * Systeme visuel des sujets: une couleur par domaine, un pictogramme par sujet.
 *
 * Aucune image n'est stockee. Chaque sujet recoit une couverture dessinee en SVG a partir de
 * son domaine (la couleur) et de son titre (le pictogramme), ce qui couvre tout le corpus sans
 * dependre d'un fichier par article.
 */

export type DomainTheme = {
  /** Couleur franche du domaine: fond des couvertures et des bandeaux. */
  color: string;
  /** Couleur du texte posee sur `color`. */
  on: string;
  /** Pictogramme par defaut du domaine. */
  glyph: GlyphName;
};

export type GlyphName =
  | "atom"
  | "planet"
  | "rocket"
  | "satellite"
  | "telescope"
  | "star"
  | "heart"
  | "leaf"
  | "globe"
  | "flask"
  | "bolt"
  | "gear"
  | "car"
  | "plane"
  | "book"
  | "brain"
  | "chip"
  | "monitor"
  | "bubbles"
  | "scales"
  | "palette"
  | "apple"
  | "dumbbell"
  | "dna"
  | "microscope"
  | "sun"
  | "turbine"
  | "droplet"
  | "snowflake"
  | "mountain"
  | "tree"
  | "magnet"
  | "battery"
  | "wave"
  | "robot"
  | "crane"
  | "factory"
  | "coin"
  | "hourglass"
  | "eye"
  | "camera"
  | "note"
  | "shield"
  | "lock"
  | "network"
  | "fire"
  | "thermometer"
  | "syringe"
  | "house"
  | "bridge"
  | "cube"
  | "cloud"
  | "virus"
  | "columns"
  | "pencil"
  | "chart"
  | "bulb"
  | "newspaper"
  | "wheat"
  | "recycle"
  | "wifi"
  | "mic"
  | "medal"
  | "map"
  | "scissors";

/** Domaines de premier niveau, indexes par le premier segment du chemin de categorie. */
export const DOMAIN_THEMES: Record<string, DomainTheme> = {
  "alimentation-et-nutrition": { color: "#FF6A3D", on: "#ffffff", glyph: "apple" },
  "arts-et-culture": { color: "#E8409F", on: "#ffffff", glyph: "palette" },
  automobile: { color: "#E23B4E", on: "#ffffff", glyph: "car" },
  aeronautique: { color: "#3A82F7", on: "#ffffff", glyph: "plane" },
  "communication-et-medias": { color: "#10B3A8", on: "#ffffff", glyph: "bubbles" },
  "corps-humain-et-sante": { color: "#FF5C8A", on: "#ffffff", glyph: "heart" },
  "droit-et-justice": { color: "#7653E6", on: "#ffffff", glyph: "scales" },
  energie: { color: "#F7B91E", on: "#2a1b00", glyph: "bolt" },
  "environnement-et-climat": { color: "#2DB35C", on: "#ffffff", glyph: "leaf" },
  "espace-et-astronomie": { color: "#5B3FD8", on: "#ffffff", glyph: "planet" },
  "geographie-et-territoires": { color: "#1C9BD8", on: "#ffffff", glyph: "globe" },
  industries: { color: "#F08A24", on: "#2a1500", glyph: "factory" },
  "intelligence-artificielle": { color: "#9B4DEB", on: "#ffffff", glyph: "robot" },
  "micro-informatique-et-informatique": { color: "#4A5CF0", on: "#ffffff", glyph: "chip" },
  "sciences-du-vivant-appliquees": { color: "#86C73B", on: "#14240a", glyph: "dna" },
  "sciences-fondamentales": { color: "#12A9D6", on: "#ffffff", glyph: "atom" },
  "sciences-humaines-et-sociales": { color: "#C24BB0", on: "#ffffff", glyph: "brain" },
  "sport-et-sciences-du-mouvement": { color: "#14BF96", on: "#ffffff", glyph: "dumbbell" },
  "technologies-et-ingenierie": { color: "#5470C6", on: "#ffffff", glyph: "gear" },
};

const FALLBACK_THEME: DomainTheme = { color: "#5B3DF5", on: "#ffffff", glyph: "bulb" };

/** Theme du domaine auquel appartient un chemin de categorie ou d'article. */
export function themeFor(path: string | null | undefined): DomainTheme {
  const root = (path ?? "").replace(/^\/+/, "").split("/")[0] ?? "";
  return DOMAIN_THEMES[root] ?? FALLBACK_THEME;
}

/** Pictogramme propre a un sous-domaine, deuxieme segment du chemin. */
const SUBDOMAIN_GLYPHS: Record<string, GlyphName> = {
  "arts-visuels": "palette",
  patrimoine: "columns",
  "arts-du-spectacle": "note",
  "litterature-et-ecriture": "pencil",
  anatomie: "heart",
  physiologie: "heart",
  maladies: "virus",
  "prevention-et-sante-publique": "shield",
  "droit-prive": "scales",
  "droit-public": "columns",
  "justice-et-institutions": "columns",
  "vie-quotidienne-et-droit": "house",
  "reseaux-et-stockage": "battery",
  "energies-renouvelables": "sun",
  "energies-fossiles-et-nucleaire": "fire",
  "efficacite-et-sobriete": "bulb",
  "pollution-et-ressources": "recycle",
  biodiversite: "tree",
  "changement-climatique": "thermometer",
  astrophysique: "star",
  "exploration-spatiale": "rocket",
  "systeme-solaire": "planet",
  "observation-astronomique": "telescope",
  "geographie-physique": "mountain",
  "geographie-humaine": "map",
  geopolitique: "globe",
  "industrie-manufacturiere": "gear",
  "industrie-lourde": "factory",
  "materiaux-et-procedes": "flask",
  "industrie-4-0": "robot",
  "reseaux-et-securite": "lock",
  materiel: "chip",
  logiciel: "monitor",
  donnees: "chart",
  "modeles-de-langage": "bubbles",
  "ethique-et-societe": "scales",
  "apprentissage-automatique": "brain",
  agronomie: "wheat",
  medecine: "syringe",
  biotechnologies: "dna",
  biologie: "microscope",
  physique: "atom",
  mathematiques: "chart",
  "sciences-de-la-terre": "mountain",
  chimie: "flask",
  economie: "coin",
  psychologie: "brain",
  histoire: "hourglass",
  sociologie: "network",
  "physiologie-de-l-effort": "heart",
  "sport-et-societe": "medal",
  "disciplines-sportives": "dumbbell",
  "genie-civil": "crane",
  robotique: "robot",
  "conception-et-fiabilite": "gear",
  nanotechnologies: "atom",
  propulsion: "rocket",
  aerodynamique: "plane",
  "aviation-civile": "plane",
  "navigation-aerienne": "map",
  nutriments: "apple",
  "technologies-alimentaires": "flask",
  "regimes-et-recommandations": "apple",
  "alimentation-et-environnement": "leaf",
  motorisations: "gear",
  "securite-et-conduite": "shield",
  "industrie-automobile": "factory",
  "usages-et-mobilite": "map",
  "information-et-verification": "newspaper",
  "medias-numeriques": "wifi",
  telecommunications: "wifi",
  "histoire-des-medias": "newspaper",
};

/**
 * Mots-cles du titre, du plus precis au plus general. Le premier qui correspond l'emporte.
 * Le texte compare est mis en minuscules et prive de ses accents.
 */
const KEYWORD_GLYPHS: ReadonlyArray<readonly [RegExp, GlyphName]> = [
  [/\b(vaccin|seringue|injection)/, "syringe"],
  [/\b(virus|bacteri|microbe|infection|pandemi|epidemi)/, "virus"],
  [/\b(adn|genom|genetique|crispr|arn|chromosome|mutation|evolution)/, "dna"],
  [/\b(microscop|cellule|biologi)/, "microscope"],
  [
    /\b(cerveau|neurone|memoire|cognitif|psycholog|emotion|biais|procrastin|apprentissage)/,
    "brain",
  ],
  [/\b(oeil|vision|vue |lumiere|optique|couleur)/, "eye"],
  [/\b(coeur|cardiaque|sang|circulation|pouls)/, "heart"],
  [/\b(atome|atomique|quantique|qubit|particule|electron|nucleaire|fission|fusion)/, "atom"],
  [/\b(gravite|relativite|espace-temps)/, "planet"],
  [/\b(planete|jupiter|saturne|mars|venus|mercure|lune|exoplanete|systeme solaire)/, "planet"],
  [/\b(fusee|lanceur|decollage|propulsion|orbite)/, "rocket"],
  [/\b(satellite|gps|geostationnaire)/, "satellite"],
  [/\b(telescope|observatoire|astronom)/, "telescope"],
  [/\b(etoile|galaxie|trou noir|supernova|cosmos|big bang)/, "star"],
  [/\b(avion|aile|aerodynam|planeur|vol |aeronef|helicopt|mach)/, "plane"],
  [/\b(voiture|automobile|moteur|turbo|freinage|pneu|conduite)/, "car"],
  [/\b(batterie|accumulateur|stockage|pile )/, "battery"],
  [/\b(electri|courant|tension|foudre|reseau electrique)/, "bolt"],
  [/\b(solaire|photovolta|perovskite)/, "sun"],
  [/\b(eolien|eolienne|vent )/, "turbine"],
  [/\b(eau |hydrolog|pluie|riviere|ocean|mer |lac |glace|glacier)/, "droplet"],
  [/\b(neige|gel |givre|froid)/, "snowflake"],
  [/\b(montagne|volcan|seisme|tectonique|relief|geolog)/, "mountain"],
  [/\b(foret|arbre|biodiversite|ecosysteme|sol )/, "tree"],
  [/\b(plante|photosynthese|agricult|culture|cereale|ble )/, "wheat"],
  [/\b(climat|rechauffement|temperature|canicule|carbone|co2)/, "thermometer"],
  [/\b(nuage|meteo|atmosphere|ozone)/, "cloud"],
  [/\b(recycl|dechet|compost|plastique|pollution)/, "recycle"],
  [/\b(feu|combustion|incendie|combustible)/, "fire"],
  [/\b(chimi|reaction|molecule|acide|maillard|cuisson|solution)/, "flask"],
  [/\b(aimant|magnetique|magnetisme|irm|boussole)/, "magnet"],
  [/\b(onde|son |acoustique|vibration|frequence|signal)/, "wave"],
  [/\b(robot|exosquelette|automate|bras robotise)/, "robot"],
  [
    /\b(intelligence artificielle|ia |modele de langage|reseau de neurones|apprentissage profond)/,
    "robot",
  ],
  [
    /\b(puce|processeur|semi-conducteur|transistor|risc|ordinateur|memoire vive|ssd|disque dur)/,
    "chip",
  ],
  [/\b(logiciel|programm|algorithme|code |application|vecteur)/, "monitor"],
  [/\b(chiffrement|cryptograph|mot de passe|securite informatique|rsa|pirat)/, "lock"],
  [/\b(internet|reseau|protocole|paquet|donnees|wifi|5g|telecom)/, "network"],
  [/\b(impression 3d|imprime en 3d|fabrication additive)/, "cube"],
  [/\b(pont|viaduc|arche)/, "bridge"],
  [/\b(beton|ciment|construction|chantier|batiment|grue)/, "crane"],
  [/\b(maison|habitat|logement|urbanisme|ville)/, "house"],
  [/\b(usine|industri|fabrication|production)/, "factory"],
  [/\b(engrenage|mecanique|pas a pas|actionneur)/, "gear"],
  [/\b(monnaie|inflation|econom|prix |banque|marche |budget)/, "coin"],
  [/\b(statistique|graphique|donnee|mesure|record|tests? de performance)/, "chart"],
  [/\b(histoire|siecle|antique|medieval|revolution industrielle|celte|archeolog)/, "hourglass"],
  [/\b(droit|loi |justice|tribunal|contrat|reglement|prescription)/, "scales"],
  [/\b(constitution|institution|parlement|patrimoine|temple|musee)/, "columns"],
  [/\b(peinture|dessin|perspective|couleur|art |enlumin)/, "palette"],
  [/\b(musique|instrument|concert|harmonie|chant)/, "note"],
  [/\b(film|cinema|photograph|camera|image)/, "camera"],
  [/\b(livre|litterature|roman|ecriture|lecture|manuscrit)/, "book"],
  [/\b(journal|presse|information|rumeur|fausse|desinformation|media)/, "newspaper"],
  [/\b(parole|voix|assistant|conversation|dialogue|langage)/, "bubbles"],
  [/\b(carte|projection|geograph|territoire|cartograph)/, "map"],
  [/\b(monde|planisphere|geopolit|mondial)/, "globe"],
  [/\b(sport|musculation|entrainement|course|marathon|echauffement|crampe|effort)/, "dumbbell"],
  [/\b(medaille|competition|champion)/, "medal"],
  [/\b(alimentation|nutri|aliment|fruit|legume|vitamine|fer |sel |sucre|lait)/, "apple"],
  [/\b(securite|protection|prevention|bouclier)/, "shield"],
  [/\b(horloge|temps|duree|age )/, "hourglass"],
  [/\b(idee|innovation|invention|brevet)/, "bulb"],
];

function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/**
 * Pictogramme d'un sujet: d'abord les mots-cles du titre, puis le sous-domaine, enfin le
 * pictogramme du domaine. Le resultat est deterministe: un meme sujet garde le meme dessin.
 */
export function pickGlyph(title: string, path: string | null | undefined): GlyphName {
  const text = ` ${normalize(title)} `;
  for (const [pattern, glyph] of KEYWORD_GLYPHS) {
    if (pattern.test(text)) return glyph;
  }

  const segments = (path ?? "").replace(/^\/+/, "").split("/");
  for (const segment of segments.slice(1)) {
    const glyph = SUBDOMAIN_GLYPHS[segment];
    if (glyph) return glyph;
  }

  return themeFor(path).glyph;
}

/** Empreinte numerique stable d'une chaine, pour varier les couvertures sans hasard. */
export function hashSeed(text: string): number {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/** Duree de lecture approximative, en minutes, pour un lecteur de dix ans. */
export function readingMinutes(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 170));
}
