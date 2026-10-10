import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ArticleGrid } from "@/components/ArticleCard";
import { ArticlePoster } from "@/components/ArticlePoster";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { Lesson } from "@/components/Lesson";
import { LessonSummary } from "@/components/LessonSummary";
import { Cover, themeVars } from "@/components/visual/Cover";
import { Glyph } from "@/components/visual/Glyph";
import { getIllustrations } from "@/lib/illustrations";
import { getDiscoveryLessons } from "@/lib/discovery/load";
import { renderMarkdown } from "@/lib/markdown";
import {
  getAllArticlePaths,
  getAllCategoryPaths,
  getArticleByPath,
  getCategoryByPath,
  type ArticlePage,
  type CategoryPage,
} from "@/lib/queries";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  formatDate,
  isoDate,
  pageMetadata,
  SITE_NAME,
} from "@/lib/seo";
import { frenchSpacing } from "@/lib/typography";
import { pickGlyph, readingMinutes, themeFor } from "@/lib/visual";

export const revalidate = 3600;
export const dynamicParams = true;

type RouteParams = { chemin: string[] };
type PageProps = { params: Promise<RouteParams> };

/**
 * Une seule route resout les pages de categorie et les pages d'article.
 *
 * L'arborescence editoriale compte trois niveaux de categories et les articles se rattachent
 * au dernier: une suite de segments nommes ne pourrait pas exprimer les deux formes d'URL
 * sans ambiguite. Le chemin complet est donc resolu ici, d'abord comme categorie, puis comme
 * article rattache a la categorie formee par les segments precedents.
 */
async function resolve(
  segments: string[],
): Promise<
  { kind: "category"; data: CategoryPage } | { kind: "article"; data: ArticlePage } | null
> {
  const path = segments.join("/");

  const category = await getCategoryByPath(path);
  if (category) return { kind: "category", data: category };

  const slug = segments.at(-1);
  const parentPath = segments.slice(0, -1).join("/");
  if (!slug || parentPath.length === 0) return null;

  const article = await getArticleByPath(parentPath, slug);
  return article ? { kind: "article", data: article } : null;
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  const [categories, articles] = await Promise.all([getAllCategoryPaths(), getAllArticlePaths()]);
  return [
    ...categories.map((path) => ({ chemin: path.split("/") })),
    ...articles.map((article) => ({ chemin: article.path.split("/") })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chemin } = await params;
  const resolved = await resolve(chemin);
  if (!resolved) return { title: "Page introuvable" };

  if (resolved.kind === "category") {
    const { name, description, path } = resolved.data;
    return pageMetadata({
      title: name,
      description: description ?? `Articles d'Anakalypto classés dans la catégorie ${name}.`,
      path: `/${path}`,
    });
  }

  const article = resolved.data;
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/${article.path}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

function crumbsFor(
  ancestors: ReadonlyArray<{ name: string; path: string }>,
  current: { name: string; path: string },
): Crumb[] {
  return [
    { name: "Accueil", path: "/" },
    ...ancestors.map((ancestor) => ({ name: ancestor.name, path: `/${ancestor.path}` })),
    { name: current.name, path: `/${current.path}` },
  ];
}

function CategoryView({ category }: { category: CategoryPage }) {
  const crumbs = crumbsFor(category.ancestors, { name: category.name, path: category.path });
  const total = category.articles.length + category.descendantArticles.length;
  const glyph = pickGlyph(category.name, category.path);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />

      <header className="sticker mt-4 overflow-hidden" style={themeVars(category.path)}>
        <div className="flex items-center gap-6 bg-[var(--t)] p-6 text-[var(--t-on)] sm:p-8">
          <div className="min-w-0 flex-1">
            <h1 className="display text-4xl sm:text-5xl">{frenchSpacing(category.name)}</h1>
            {category.description && (
              <p className="mt-3 max-w-reading text-lg leading-relaxed opacity-95">
                {frenchSpacing(category.description)}
              </p>
            )}
          </div>
          <span className="disc hidden h-28 w-28 shrink-0 p-4 sm:grid">
            <Glyph name={glyph} />
          </span>
        </div>
      </header>

      {category.children.length > 0 && (
        <section aria-labelledby="titre-sous-categories" className="mt-12">
          <h2 id="titre-sous-categories" className="display text-3xl sm:text-4xl">
            Explorer par thème
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.children.map((child) => (
              <li key={child.path}>
                <Link
                  href={`/${child.path}`}
                  className="sticker flex h-full items-center gap-4 p-4"
                  style={themeVars(child.path)}
                >
                  <span className="disc h-14 w-14 shrink-0 p-2">
                    <Glyph name={pickGlyph(child.name, child.path)} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[1.08rem] leading-snug font-semibold">
                      {frenchSpacing(child.name)}
                    </span>
                    <span className="label mt-0.5 block">
                      {child.articleCount} leçon{child.articleCount > 1 ? "s" : ""}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {category.articles.length > 0 && (
        <section aria-labelledby="titre-articles" className="mt-14">
          <h2 id="titre-articles" className="display text-3xl sm:text-4xl">
            Les leçons de ce thème
          </h2>
          <div className="mt-6">
            <ArticleGrid
              articles={category.articles.map((article) => ({
                ...article,
                path: `/${article.path}`,
              }))}
            />
          </div>
        </section>
      )}

      {category.descendantArticles.length > 0 && (
        <section aria-labelledby="titre-branche" className="mt-14">
          <h2 id="titre-branche" className="display text-3xl sm:text-4xl">
            Dans les thèmes voisins
          </h2>
          <div className="mt-6">
            <ArticleGrid
              articles={category.descendantArticles.map((article) => ({
                ...article,
                path: `/${article.path}`,
                categoryPath: `/${article.categoryPath}`,
              }))}
            />
          </div>
        </section>
      )}

      {total === 0 && category.children.length === 0 && (
        <p className="mt-10 text-ink-muted">
          Cette catégorie n&apos;a pas encore de leçon publiée.
        </p>
      )}
    </>
  );
}

async function ArticleView({ article }: { article: ArticlePage }) {
  const { html, sections } = await renderMarkdown(article.content, {
    categoryPath: article.category.path,
  });
  const crumbs = crumbsFor(
    [...article.ancestors, { name: article.category.name, path: article.category.path }],
    { name: article.title, path: article.path },
  );
  const verified = formatDate(article.lastVerified);
  const minutes = readingMinutes(article.content);
  const images = getIllustrations(article.slug);
  const theme = themeFor(article.path);
  const root = article.ancestors[0] ?? { name: article.category.name, path: article.category.path };
  const discovery = (await getDiscoveryLessons()).find(
    (lesson) => lesson.expandedPath === `/${article.path}`,
  );

  return (
    <div style={themeVars(article.path)}>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.summary,
          path: `/${article.path}`,
          section: article.category.name,
          publishedAt: article.publishedAt,
          modifiedAt: article.updatedAt,
          keywords: article.tags.map((tag) => tag.name),
          citations: article.sources,
        })}
      />

      <Breadcrumb items={crumbs} />

      <article className="mt-5">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-start lg:gap-12">
          <div>
            <p className="flex flex-wrap gap-2">
              <Link
                href={`/${root.path}`}
                className="chip"
                style={{ background: theme.color, color: theme.on }}
              >
                {frenchSpacing(root.name)}
              </Link>
              <span className="chip">{minutes} min de lecture</span>
              {article.quiz.length > 0 && (
                <span className="chip">Quiz de {article.quiz.length} questions</span>
              )}
            </p>

            <h1 className="display mt-4 max-w-reading text-[2.4rem] sm:text-5xl lg:text-[3.4rem]">
              {frenchSpacing(article.title)}
            </h1>
            <p className="mt-4 max-w-reading text-lg leading-relaxed text-ink-muted">
              {frenchSpacing(article.summary)}
            </p>

            <p className="mt-6 flex flex-wrap gap-3">
              {discovery && (
                <Link href={`/decouvrir/${discovery.slug}`} className="btn">
                  Découvrir en jouant · {discovery.minutes} min
                </Link>
              )}
              <a href="#lecon" className="btn">
                {discovery ? "Lire la version approfondie" : "Commencer la leçon"}
              </a>
              {article.quiz.length > 0 && (
                <a href="#quiz" className="btn btn--ghost">
                  Aller au quiz
                </a>
              )}
            </p>

            {verified && (
              <p className="label mt-5">
                Sources vérifiées le{" "}
                <time dateTime={isoDate(article.lastVerified)}>{verified}</time>
              </p>
            )}
          </div>

          <div>
            {images.length > 0 ? (
              <ArticlePoster images={images} title={article.title} />
            ) : (
              <div className="sticker overflow-hidden">
                <Cover title={article.title} path={article.path} />
              </div>
            )}
          </div>
        </header>

        <div className="mt-14">
          <LessonSummary sections={sections} />
        </div>

        <section id="lecon" aria-label="La leçon" className="mx-auto mt-14 max-w-3xl scroll-mt-28">
          <Lesson html={html} quiz={article.quiz} path={article.path} />
        </section>

        {article.related.length > 0 && (
          <section aria-labelledby="titre-lies" className="mt-16">
            <h2 id="titre-lies" className="display text-3xl sm:text-4xl">
              Pour continuer
            </h2>
            <div className="mt-6">
              <ArticleGrid
                articles={article.related.map((related) => ({
                  title: related.title,
                  summary: related.summary,
                  path: `/${related.path}`,
                }))}
              />
            </div>
          </section>
        )}

        <section aria-labelledby="titre-sources" className="mt-16">
          <div
            className="box"
            style={{ "--box": "var(--pop-purple)", "--box-on": "#ffffff" } as React.CSSProperties}
          >
            <h2 id="titre-sources" className="box__head">
              Sources vérifiées
            </h2>
            <div className="box__body">
              <ol className="space-y-3">
                {article.sources.map((source) => (
                  <li key={source.url} className="max-w-reading leading-relaxed">
                    <a
                      href={source.url}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      className="font-semibold text-accent"
                    >
                      {source.title}
                    </a>
                    {(source.publisher ?? source.publishedDate) && (
                      <span className="label ml-2">
                        {[source.publisher, source.publishedDate].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="label mt-5 max-w-reading leading-relaxed">
                {SITE_NAME} rédige ses leçons de manière originale à partir des sources citées.
                Signaler une erreur ou une source obsolète aide à maintenir cette page à jour.
              </p>
              {article.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <li key={tag.slug} className="chip">
                      {tag.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default async function Page({ params }: PageProps) {
  const { chemin } = await params;
  const resolved = await resolve(chemin);

  if (!resolved) notFound();
  if (resolved.kind === "category") return <CategoryView category={resolved.data} />;
  return <ArticleView article={resolved.data} />;
}
