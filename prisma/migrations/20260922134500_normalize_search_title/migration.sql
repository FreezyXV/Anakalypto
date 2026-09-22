-- Rapprochement trigramme insensible aux accents.
--
-- `similarity()` et `word_similarity()` comparent des trigrammes bruts: « telescpoe » ne
-- rapprochait pas « telescope » parce que l'accent de « telescope » change les trigrammes.
-- On stocke donc un titre normalise, maintenu par le meme trigger que le vecteur de
-- recherche, et on indexe celui-ci. `unaccent()` n'etant pas IMMUTABLE, un index
-- d'expression sur le titre brut serait de toute facon refuse.

ALTER TABLE "Article" ADD COLUMN "searchTitle" text;

CREATE OR REPLACE FUNCTION article_search_title(p_title text) RETURNS text AS $$
  SELECT unaccent('public.unaccent', lower(coalesce(p_title, '')));
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION article_search_vector_trigger() RETURNS trigger AS $$
BEGIN
  NEW."searchVector" := article_search_vector(NEW.title, NEW.summary, NEW.content);
  NEW."searchTitle" := article_search_title(NEW.title);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

UPDATE "Article" SET "searchTitle" = article_search_title(title);

DROP INDEX IF EXISTS "article_title_trgm_idx";
CREATE INDEX "article_title_trgm_idx" ON "Article" USING GIN ("searchTitle" gin_trgm_ops);
