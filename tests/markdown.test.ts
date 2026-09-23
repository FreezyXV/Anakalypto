import { describe, expect, it } from "vitest";

import { renderMarkdown } from "../src/lib/markdown";

describe("renderMarkdown", () => {
  it("construit la table des matieres a partir des titres", async () => {
    const { toc } = await renderMarkdown(
      ["## Resume", "Texte.", "", "## Faits cles", "- Un fait.", "", "### Detail", "Texte."].join(
        "\n",
      ),
    );

    expect(toc).toEqual([
      { id: "resume", text: "Resume", level: 2 },
      { id: "faits-cles", text: "Faits cles", level: 2 },
      { id: "detail", text: "Detail", level: 3 },
    ]);
  });

  it("attribue des identifiants exploitables aux titres accentues", async () => {
    const { html, toc } = await renderMarkdown("## Chronologie détaillée\n\nTexte.");

    expect(toc[0]?.id).toBe("chronologie-détaillée");
    expect(html).toContain('id="chronologie-détaillée"');
  });

  it("convertit un marqueur d'illustration en cadre neutre", async () => {
    const { html } = await renderMarkdown(
      "[Emplacement image : carte des courants océaniques, légende et texte alternatif à\nfournir ultérieurement.]",
    );

    expect(html).toContain('class="figure-placeholder"');
    expect(html).toContain("carte des courants océaniques");
    expect(html).not.toContain("Emplacement image");
    // La mention de legende a fournir est un commentaire de production, pas du contenu.
    expect(html).not.toContain("fournir ultérieurement");
  });

  it("retire la section Articles lies, rendue depuis les donnees structurees", async () => {
    const { html, toc } = await renderMarkdown(
      ["## Resume", "Texte.", "", "## Articles liés", "- Un titre", "- Un autre titre"].join("\n"),
    );

    expect(html).toContain("Resume");
    expect(html).not.toContain("Articles liés");
    expect(html).not.toContain("Un autre titre");
    expect(toc.map((entry) => entry.text)).toEqual(["Resume"]);
  });

  it("conserve les sections qui suivent une section retiree", async () => {
    const { toc } = await renderMarkdown(
      ["## Articles liés", "- Un titre", "", "## Sources complementaires", "Texte."].join("\n"),
    );

    expect(toc.map((entry) => entry.text)).toEqual(["Sources complementaires"]);
  });

  it("echappe le HTML present dans une legende d'illustration", async () => {
    const { html } = await renderMarkdown("[Emplacement image : schéma <script>alert(1)</script>]");

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });
  it("insere les espaces insecables de la ponctuation double", async () => {
    const { html, toc } = await renderMarkdown(
      ["## Pourquoi ?", "", "Une question : la reponse ; puis la suite !"].join("\n"),
    );

    // Espace fine avant "?", "!" et ";", espace mot avant ":".
    expect(html).toContain("Pourquoi\u202f?");
    expect(html).toContain("question\u00a0:");
    expect(html).toContain("reponse\u202f;");
    expect(html).toContain("suite\u202f!");
    expect(toc[0]?.text).toBe("Pourquoi\u202f?");
  });

  it("laisse le code intact", async () => {
    const { html } = await renderMarkdown("Appel `fn(a ? b : c)` en ligne.");

    expect(html).toContain("fn(a ? b : c)");
  });
});
