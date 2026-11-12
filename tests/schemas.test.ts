import { describe, expect, it } from "vitest";

import { validateCorpus } from "../src/lib/content/validate";
import { renderMarkdown } from "../src/lib/markdown";
import {
  findSchemaBlocks,
  parseSchema,
  renderSchema,
  renderSchemaSource,
  SCHEMA_TYPES,
} from "../src/lib/schemas";

const fence = (yaml: string) => ["```schema", yaml, "```"].join("\n");

const EXAMPLES: Record<(typeof SCHEMA_TYPES)[number], string> = {
  etapes: `type: etapes
titre: Du sable au lingot
elements:
  - titre: Purifier
    texte: Un silicium presque parfait.
    icone: flask
  - titre: Tirer le lingot`,
  cycle: `type: cycle
titre: Le cycle de l'eau
elements:
  - titre: Évaporation
  - titre: Condensation
  - titre: Précipitations`,
  pyramide: `type: pyramide
titre: Priorités de survie
niveaux:
  - titre: Nourriture
  - titre: Eau
  - titre: Abri`,
  frise: `type: frise
titre: La pénicilline
evenements:
  - date: 1928
    titre: Observation de Fleming
  - date: "1940"
    titre: Essais d'Oxford`,
  systeme: `type: systeme
titre: Les systèmes du moteur
centre: Moteur
parties:
  - nom: Admission
    role: Amène l'air.
  - nom: Injection
    role: Dose le carburant.`,
  comparaison: `type: comparaison
titre: Essence ou diesel
colonnes:
  - titre: Essence
    points: [Étincelle]
  - titre: Diesel
    points: [Compression]`,
  barres: `type: barres
titre: Énergie par kilo
unite: Wh/kg
valeurs:
  - label: LFP
    valeur: 180
  - label: NMC
    valeur: 250`,
  chiffres: `type: chiffres
titre: Repères
chiffres:
  - valeur: 3 min
    texte: sans air`,
  echelle: `type: echelle
titre: Température du corps
unite: °C
min: 30
max: 43
zones:
  - de: 30
    a: 35
    label: Hypothermie
    ton: danger
  - de: 35
    a: 43
    label: Le reste
    ton: normal`,
};

describe("schemas", () => {
  it("accepte et rend un exemple de chaque type", () => {
    for (const type of SCHEMA_TYPES) {
      const result = parseSchema(EXAMPLES[type]);
      expect(result.ok, type).toBe(true);
      if (!result.ok) continue;
      const html = renderSchema(result.spec);
      expect(html).toContain(`schema--${type}`);
      expect(html).toContain("<figcaption");
    }
  });

  it("echappe le texte et applique la typographie francaise", () => {
    const result = parseSchema(`type: chiffres
titre: "<b>Attention</b> : test"
chiffres:
  - valeur: 1
    texte: Un ?`);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const html = renderSchema(result.spec);
    expect(html).not.toContain("<b>");
    expect(html).toContain("&lt;b&gt;");
    expect(html).toContain(" :");
  });

  it("refuse un type inconnu, une icone inconnue et une echelle incoherente", () => {
    expect(parseSchema("type: carte\ntitre: X").ok).toBe(false);
    const icon = parseSchema(`type: etapes
titre: X
elements:
  - titre: A
    icone: licorne
  - titre: B`);
    expect(icon.ok).toBe(false);
    const scale = parseSchema(`type: echelle
titre: X
min: 0
max: 10
zones:
  - de: 5
    a: 12
    label: Trop loin`);
    expect(scale.ok).toBe(false);
  });

  it("signale un YAML illisible sans lever d'exception", () => {
    const result = parseSchema("type: etapes\n  titre: [");
    expect(result.ok).toBe(false);
  });

  it("retrouve les blocs schema d'un corps et leur ligne", () => {
    const body = ["## En bref", "", "Texte.", "", fence(EXAMPLES.chiffres)].join("\n");
    const blocks = findSchemaBlocks(body);
    expect(blocks).toHaveLength(1);
    expect(blocks[0]?.line).toBe(6);
  });

  it("reconnaît les clôtures indentées de trois espaces comme le compteur backend", async () => {
    const body = `   \`\`\`schema\n${EXAMPLES.etapes
      .split("\n")
      .map((line) => "   " + line)
      .join("\n")}\n   \`\`\``;
    expect(findSchemaBlocks(body)).toHaveLength(1);
    const { html } = await renderMarkdown(body);
    expect(html).toContain('class="schema schema--etapes"');
    expect(findSchemaBlocks("    ```schema\ntype: etapes\n    ```")).toHaveLength(0);
  });

  it("transforme un bloc schema en figure dans le rendu Markdown", async () => {
    const { html } = await renderMarkdown(`## Partie\n\nTexte.\n\n${fence(EXAMPLES.etapes)}\n`);
    expect(html).toContain('class="schema schema--etapes"');
    expect(html).not.toContain("<code");
  });

  it("refuse a l'import un article dont un schema est invalide", () => {
    const blocks = [
      {
        location: { file: "a.md", line: 1 },
        data: {
          type: "category",
          title: "D",
          slug: "d",
          categoryPath: "d",
          level: 0,
          summary: "S",
        },
        body: "",
      },
      {
        location: { file: "a.md", line: 10 },
        data: {
          type: "article",
          title: "Article",
          slug: "article",
          categoryPath: "d",
          summary: "Resume.",
          lastVerified: "2026-11-07",
          status: "draft",
        },
        body: `## En bref\n\nTexte.\n\n${fence("type: etapes\ntitre: X\nelements: []")}\n`,
      },
    ];
    const { issues } = validateCorpus(blocks);
    expect(issues.some((issue) => issue.field.startsWith("schema[1]"))).toBe(true);
  });
});

it("does not draw a positive bar for zero and preserves large value ratios", () => {
  const html = renderSchemaSource(
    "type: barres\ntitre: Valeurs\nunite: W\nvaleurs:\n - label: Nul\n   valeur: 0\n - label: Petit\n   valeur: 1\n - label: Grand\n   valeur: 1000",
  );
  expect(html).toContain("--w:0%");
  expect(html).toContain("--w:0.1%");
});
it("renders an inverted editorial pyramid with the broadest first level", () => {
  const html = renderSchemaSource(
    "type: pyramide\ntitre: Informations\norientation: inversee\nniveaux:\n - titre: Essentiel\n - titre: Contexte",
  );
  expect(html).toMatch(/--w:100%[\s\S]*Essentiel[\s\S]*--w:52%[\s\S]*Contexte/);
});
