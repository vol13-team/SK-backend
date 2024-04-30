-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "issue_id" TEXT NOT NULL,
    "issue_name" TEXT NOT NULL,
    "issue_detail" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "option4" TEXT NOT NULL,
    "correct_option" TEXT NOT NULL,
    "post_user_id" TEXT NOT NULL,
    "explanation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "article_id" TEXT NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "Article" (
    "article_id" TEXT NOT NULL,
    "article_title" TEXT NOT NULL,
    "article_link" TEXT NOT NULL,
    "article_user_name" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL,
    "decision" BOOLEAN,
    "issue_id" TEXT NOT NULL,
    "answer_user_id" TEXT NOT NULL,
    "select_option" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateTable
CREATE TABLE "QiitaArticle" (
    "qiita_article_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,

    CONSTRAINT "QiitaArticle_pkey" PRIMARY KEY ("qiita_article_id")
);

-- CreateTable
CREATE TABLE "QiitaTag" (
    "tag_id" TEXT NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "QiitaTag_pkey" PRIMARY KEY ("tag_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QiitaArticle_url_key" ON "QiitaArticle"("url");

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_post_user_id_fkey" FOREIGN KEY ("post_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("article_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "Issue"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
