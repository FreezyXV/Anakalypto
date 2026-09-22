import Link from "next/link";
import type { Metadata } from "next";

import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { getSiteStats } from "@/lib/queries";
import { breadcrumbJsonLd, pageMetadata, SITE_NAME } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "À propos et méthodologie",
  description:
    "Comment Anakalypto choisit ses sources, vérifie ses articles et respecte le droit " +
    "d'auteur : charte de fiabilité de l'encyclopédie.",
  path: "/a-propos",
});

export default async function AboutPage() {
  const stats = await getSiteStats();
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />

      <h1 className="mt-4 text-3xl leading-tight font-semibold">À propos d&apos;Anakalypto</h1>

      <div className="prose mt-6">
        <p>
          Anakalypto, du grec <span lang="grc">anakalypto</span> qui signifie dévoiler, est une
          encyclopédie généraliste francophone. Elle s&apos;adresse au public curieux et aux
          étudiants, et couvre les sciences fondamentales, le corps humain, l&apos;alimentation,
          l&apos;espace, les transports, les industries, l&apos;informatique et l&apos;intelligence
          artificielle, l&apos;énergie, le climat, l&apos;ingénierie et les sciences humaines. Elle
          compte aujourd&apos;hui {stats.articles} articles répartis dans {stats.categories}{" "}
          catégories et s&apos;appuie sur {stats.sources} sources citées.
        </p>

        <h2>Ce qui fait la fiabilité d&apos;un article</h2>
        <p>
          Chaque article indique les sources sur lesquelles il repose et la date à laquelle elles
          ont été vérifiées pour la dernière fois. Un article publié sans source est refusé à
          l&apos;import : la vérification est une condition de publication, pas une amélioration
          ultérieure.
        </p>
        <p>
          Les sources privilégiées sont les institutions scientifiques et publiques, les agences
          spécialisées et les publications à comité de lecture. Lorsqu&apos;un sujet fait
          l&apos;objet d&apos;un désaccord entre spécialistes, l&apos;article le signale
          explicitement plutôt que de trancher : une section dédiée distingue ce qui est établi de
          ce qui reste débattu.
        </p>

        <h2>Rédaction originale et droit d&apos;auteur</h2>
        <p>
          Les articles sont rédigés de manière originale à partir des sources consultées. Ils ne
          reprennent pas le texte de Wikipédia, ni celui d&apos;aucune autre encyclopédie. Cette
          règle n&apos;est pas seulement juridique : reformuler impose de comprendre, et cette
          compréhension est ce que l&apos;encyclopédie transmet.
        </p>
        <p>
          Le point mérite d&apos;être précisé, car la licence CC BY-SA 4.0 sous laquelle Wikipédia
          est publiée est souvent lue comme une autorisation de copie libre. Elle impose en réalité
          deux obligations : créditer les auteurs d&apos;origine, et redistribuer toute reprise ou
          adaptation sous cette même licence. Reprendre un paragraphe sans le mentionner
          constituerait donc une violation de licence, et non un simple manquement d&apos;usage.{" "}
          {SITE_NAME} n&apos;emprunte pas de texte et cite ses sources une par une.
        </p>

        <h2>Ce que cette encyclopédie n&apos;est pas</h2>
        <p>
          Anakalypto ne fournit ni avis médical, ni conseil juridique, ni recommandation financière.
          Les articles de santé décrivent l&apos;état des connaissances ; ils ne remplacent pas une
          consultation.
        </p>

        <h2>Signaler une erreur</h2>
        <p>
          Une donnée obsolète, une source devenue inaccessible ou une imprécision peuvent être
          signalées. Chaque correction est tracée : la version précédente d&apos;un article est
          conservée lors de sa mise à jour.
        </p>
        <p>
          Pour parcourir l&apos;ensemble des sujets traités, consultez{" "}
          <Link href="/categories">l&apos;arborescence des catégories</Link>.
        </p>
      </div>
    </>
  );
}
