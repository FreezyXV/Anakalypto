/** Emplacement d'un bloc dans le corpus, utilise par les messages d'erreur. */
export type BlockLocation = {
  /** Nom du fichier source, relatif au repertoire content/. */
  file: string;
  /** Numero de la premiere ligne du bloc, base 1. */
  line: number;
};

/** Bloc brut issu du decoupage d'un fichier, avant toute validation. */
export type RawBlock = {
  location: BlockLocation;
  /** Donnees du frontmatter YAML, non validees. */
  data: Record<string, unknown>;
  /** Corps Markdown, separateurs de bloc retires. */
  body: string;
};

/** Erreur de validation rattachee a un emplacement precis du corpus. */
export type ContentIssue = {
  file: string;
  line: number;
  /** Champ concerne, en notation pointee. Vide si l'erreur porte sur le bloc entier. */
  field: string;
  message: string;
};
