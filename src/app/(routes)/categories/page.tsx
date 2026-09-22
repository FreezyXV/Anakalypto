import type { Metadata } from "next";

import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryTree } from "@/components/CategoryTree";
import { JsonLd } from "@/components/JsonLd";
import { getCategoryTree } from "@/lib/queries";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Toutes les catégories",
  description:
    "Arborescence complète d'Anakalypto : domaines, sous-domaines et spécialités couverts par " +
    "l'encyclopédie, des sciences fondamentales aux sciences humaines.",
  path: "/categories",
});

export default async function CategoriesPage() {
  const tree = await getCategoryTree();
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Catégories", path: "/categories" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />

      <h1 className="mt-4 text-3xl leading-tight font-semibold">Toutes les catégories</h1>
      <p className="mt-3 max-w-reading leading-relaxed text-ink-muted">
        L&apos;arborescence compte trois niveaux : un domaine, ses sous-domaines et les spécialités
        auxquelles les articles sont rattachés. Dépliez une branche pour en voir le détail ; le
        nombre indique les articles publiés dans la branche.
      </p>

      <div className="mt-10 max-w-reading">
        <CategoryTree tree={tree} />
      </div>
    </>
  );
}
