CREATE FUNCTION maintain_category_inline_reviews() RETURNS trigger AS $$
BEGIN
 IF NEW.path IS DISTINCT FROM OLD.path THEN
  UPDATE "ArticleIllustration" v SET
   "inlineStatus"=CASE WHEN "inlineSchemaCount">0 THEN 'REVIEW_REQUIRED'::"IllustrationStatus" ELSE 'WAITING_FOR_ILLUSTRATION'::"IllustrationStatus" END,
   "inlineEvidence"=NULL,"inlineReviewedContentHash"=NULL,"inlineVersion"="inlineVersion"+1
  FROM "Article" a WHERE a.id=v."articleId" AND a."categoryId"=NEW.id;
 END IF;
 RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER category_inline_reviews AFTER UPDATE OF path ON "Category"
FOR EACH ROW EXECUTE FUNCTION maintain_category_inline_reviews();
