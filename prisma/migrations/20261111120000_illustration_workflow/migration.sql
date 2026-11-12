CREATE TYPE "IllustrationStatus" AS ENUM (
  'WAITING_FOR_ILLUSTRATION', 'REVIEW_REQUIRED', 'READY', 'NEEDS_IMPROVEMENT'
);

CREATE TABLE "ArticleIllustration" (
  "articleId" TEXT NOT NULL PRIMARY KEY REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  "lessonPath" TEXT NOT NULL UNIQUE,
  "status" "IllustrationStatus" NOT NULL DEFAULT 'WAITING_FOR_ILLUSTRATION',
  "visualRefs" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "reviewFingerprint" TEXT,
  "reviewedContentHash" TEXT,
  "evidence" TEXT,
  "reviewedAt" TEXT,
  "note" TEXT,
  "claimedBy" TEXT,
  "claimedAt" TIMESTAMP(3),
  "claimContentHash" TEXT,
  "version" INTEGER NOT NULL DEFAULT 0,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT illustration_ready_requires_review CHECK (
    "status" <> 'READY' OR (
      cardinality("visualRefs") > 0 AND
      length(trim("evidence")) > 0 AND "evidence" IS NOT NULL AND
      "reviewFingerprint" IS NOT NULL AND "reviewedContentHash" IS NOT NULL AND
      "reviewedAt" IS NOT NULL
    )
  ),
  CONSTRAINT illustration_claim_consistent CHECK (
    ("claimedBy" IS NULL AND "claimedAt" IS NULL AND "claimContentHash" IS NULL) OR
    ("claimedBy" IS NOT NULL AND length(trim("claimedBy")) > 0 AND "claimedAt" IS NOT NULL AND "claimContentHash" IS NOT NULL)
  )
);
CREATE INDEX "ArticleIllustration_status_claimedBy_idx" ON "ArticleIllustration"("status", "claimedBy");

-- Initialisation limitée aux leçons publiées. Aucune publication ou suppression d'article.
INSERT INTO "ArticleIllustration" ("articleId", "lessonPath")
SELECT a.id, '/' || c.path || '/' || a.slug
FROM "Article" a JOIN "Category" c ON c.id = a."categoryId"
WHERE a.status = 'PUBLISHED';

-- Un nouvel article de Claude rejoint automatiquement la file lorsqu'il est publié.
-- Une modification du texte invalide la validation, jamais l'illustration elle-même.
CREATE FUNCTION maintain_article_illustration() RETURNS trigger AS $$
DECLARE p TEXT;
BEGIN
  SELECT '/' || path || '/' || NEW.slug INTO p FROM "Category" WHERE id = NEW."categoryId";
  IF NEW.status = 'PUBLISHED' THEN
    INSERT INTO "ArticleIllustration" ("articleId", "lessonPath") VALUES (NEW.id, p)
    ON CONFLICT ("articleId") DO NOTHING;
  END IF;
  IF TG_OP = 'UPDATE' THEN
    IF (NEW.title, NEW.summary, NEW.content, NEW.slug, NEW."categoryId")
       IS DISTINCT FROM (OLD.title, OLD.summary, OLD.content, OLD.slug, OLD."categoryId") THEN
      UPDATE "ArticleIllustration" SET
        "lessonPath" = p,
        status = CASE WHEN cardinality("visualRefs") > 0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus"
                      ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END,
        "reviewedContentHash" = NULL,
        note = 'Leçon modifiée : vérifier le visuel existant avant validation.',
        version = version + 1, "updatedAt" = CURRENT_TIMESTAMP
      WHERE "articleId" = NEW.id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER article_illustration_queue
AFTER INSERT OR UPDATE OF status, title, summary, content, slug, "categoryId" ON "Article"
FOR EACH ROW EXECUTE FUNCTION maintain_article_illustration();

CREATE FUNCTION maintain_category_illustration_paths() RETURNS trigger AS $$
BEGIN
  IF NEW.path IS DISTINCT FROM OLD.path THEN
    UPDATE "ArticleIllustration" v SET
      "lessonPath" = '/' || NEW.path || '/' || a.slug,
      status = CASE WHEN cardinality(v."visualRefs") > 0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus"
                    ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END,
      "reviewedContentHash" = NULL, note = 'Chemin de la leçon modifié : association à vérifier.',
      version = v.version + 1, "updatedAt" = CURRENT_TIMESTAMP
    FROM "Article" a WHERE a.id = v."articleId" AND a."categoryId" = NEW.id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER category_illustration_paths
AFTER UPDATE OF path ON "Category" FOR EACH ROW EXECUTE FUNCTION maintain_category_illustration_paths();
