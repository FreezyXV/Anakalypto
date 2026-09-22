-- Recherche plein texte francaise.
--
-- L'objectif est double: tolerer l'absence d'accents ("electricite" doit trouver
-- "electricite" et "electricite") et ponderer les champs (un mot du titre pese plus qu'un
-- mot du corps). La configuration de recherche "fr" copie la configuration "french" livree
-- avec PostgreSQL et insere le dictionnaire unaccent avant la racinisation francaise.
--
-- Le vecteur est stocke dans une colonne maintenue par un trigger plutot que dans un index
-- d'expression: la fonction unaccent() n'est pas IMMUTABLE, ce qui interdit son usage dans
-- un index calcule ou une colonne generee.

CREATE EXTENSION IF NOT EXISTS unaccent;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'fr') THEN
    CREATE TEXT SEARCH CONFIGURATION fr ( COPY = french );
    ALTER TEXT SEARCH CONFIGURATION fr
      ALTER MAPPING FOR hword, hword_part, word WITH unaccent, french_stem;
  END IF;
END
$$;

ALTER TABLE "Article" ADD COLUMN "searchVector" tsvector;

-- Fonction de calcul du vecteur, partagee par le trigger et par les recalculs manuels
-- (le seed l'appelle apres un import complet).
CREATE OR REPLACE FUNCTION article_search_vector(
  p_title text,
  p_summary text,
  p_content text
) RETURNS tsvector AS $$
  SELECT
    setweight(to_tsvector('public.fr', coalesce(p_title, '')), 'A') ||
    setweight(to_tsvector('public.fr', coalesce(p_summary, '')), 'B') ||
    setweight(to_tsvector('public.fr', coalesce(p_content, '')), 'C');
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION article_search_vector_trigger() RETURNS trigger AS $$
BEGIN
  NEW."searchVector" := article_search_vector(NEW.title, NEW.summary, NEW.content);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER article_search_vector_update
  BEFORE INSERT OR UPDATE OF title, summary, content ON "Article"
  FOR EACH ROW EXECUTE FUNCTION article_search_vector_trigger();

UPDATE "Article" SET "searchVector" = article_search_vector(title, summary, content);

CREATE INDEX "article_search_idx" ON "Article" USING GIN ("searchVector");
CREATE INDEX "article_title_trgm_idx" ON "Article" USING GIN (title gin_trgm_ops);
