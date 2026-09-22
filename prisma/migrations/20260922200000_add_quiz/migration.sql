-- Questions de quiz rattachees a un article.
-- `answer` est l'index de la bonne reponse dans `options`, base 0.
-- `position` fige l'ordre de presentation et rend le couple (article, position) unique.

CREATE TABLE "QuizQuestion" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "answer" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "QuizQuestion_articleId_idx" ON "QuizQuestion"("articleId");

CREATE UNIQUE INDEX "QuizQuestion_articleId_position_key" ON "QuizQuestion"("articleId", "position");

ALTER TABLE "QuizQuestion"
    ADD CONSTRAINT "QuizQuestion_articleId_fkey"
    FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
