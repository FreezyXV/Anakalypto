-- Track the editorial HTML diagrams independently from bespoke drawings.
ALTER TABLE "ArticleIllustration"
  ADD COLUMN "inlineSchemaCount" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "inlineStatus" "IllustrationStatus" NOT NULL DEFAULT 'WAITING_FOR_ILLUSTRATION',
  ADD COLUMN "inlineEvidence" TEXT,
  ADD COLUMN "inlineReviewedContentHash" TEXT,
  ADD COLUMN "inlineVersion" INTEGER NOT NULL DEFAULT 0;
CREATE FUNCTION article_inline_schema_count(body TEXT) RETURNS INTEGER AS $$
  SELECT count(*)::INTEGER FROM regexp_matches(body, '(?m)^ {0,3}```schema[ \t]*$', 'g');
$$ LANGUAGE sql IMMUTABLE STRICT;
UPDATE "ArticleIllustration" v SET
  "inlineSchemaCount" = article_inline_schema_count(a.content),
  "inlineStatus" = CASE WHEN article_inline_schema_count(a.content)>0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus" ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END
FROM "Article" a WHERE a.id = v."articleId";
ALTER TABLE "ArticleIllustration" ADD CONSTRAINT inline_ready_requires_review CHECK (
 "inlineSchemaCount">=0 AND ("inlineStatus"<>'READY' OR (
  "inlineSchemaCount">0 AND "inlineEvidence" IS NOT NULL AND length(trim("inlineEvidence"))>0 AND "inlineReviewedContentHash" IS NOT NULL
 ))
);
CREATE FUNCTION maintain_article_inline_visuals() RETURNS trigger AS $$
BEGIN
  IF TG_OP='INSERT' THEN
    UPDATE "ArticleIllustration" SET "inlineSchemaCount"=article_inline_schema_count(NEW.content),
      "inlineStatus"=CASE WHEN article_inline_schema_count(NEW.content)>0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus" ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END
    WHERE "articleId"=NEW.id;
  ELSE
    IF (NEW.title,NEW.summary,NEW.content,NEW.slug,NEW."categoryId") IS DISTINCT FROM
       (OLD.title,OLD.summary,OLD.content,OLD.slug,OLD."categoryId") THEN
      UPDATE "ArticleIllustration" SET "inlineSchemaCount"=article_inline_schema_count(NEW.content),
        "inlineStatus"=CASE WHEN article_inline_schema_count(NEW.content)>0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus" ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END,
        "inlineReviewedContentHash"=NULL,"inlineEvidence"=NULL,"inlineVersion"="inlineVersion"+1
      WHERE "articleId"=NEW.id;
    ELSIF NEW.status='PUBLISHED' THEN
      -- Publishing a former draft creates the queue row in the earlier illustration trigger.
      UPDATE "ArticleIllustration" SET "inlineSchemaCount"=article_inline_schema_count(NEW.content),
        "inlineStatus"=CASE WHEN article_inline_schema_count(NEW.content)>0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus" ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END
      WHERE "articleId"=NEW.id AND "inlineVersion"=0 AND "inlineEvidence" IS NULL;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- PostgreSQL fires same-event triggers alphabetically: this follows article_illustration_queue.
CREATE TRIGGER article_inline_visuals
AFTER INSERT OR UPDATE OF status,title,summary,content,slug,"categoryId" ON "Article"
FOR EACH ROW EXECUTE FUNCTION maintain_article_inline_visuals();
