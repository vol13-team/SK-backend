/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `answer_id` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `answer_user_id` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `decision` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `issue_id` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `select_option` on the `Answer` table. All the data in the column will be lost.
  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `article_id` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `article_link` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `article_title` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `article_user_name` on the `Article` table. All the data in the column will be lost.
  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `article_id` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `correct_option` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `issue_detail` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `issue_id` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `issue_name` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `option1` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `option2` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `option3` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `option4` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `post_user_id` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Issue` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `QiitaArticle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QiitaTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[AnswerID]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ArticleID]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[IssueID]` on the table `Issue` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `AnserUserID` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AnswerID` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Decision` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IssueID` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectOptionID` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ArticleID` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ArticleLink` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ArticleTitle` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ArticleUserName` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IssueID` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IssueName` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsuueDetail` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OptionID` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrganisationID` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PostUserID` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Update_at` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Visibility` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Made the column `explanation` on table `Issue` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `Update_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserIcon` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_issue_id_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_article_id_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_post_user_id_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
DROP COLUMN "answer_id",
DROP COLUMN "answer_user_id",
DROP COLUMN "decision",
DROP COLUMN "issue_id",
DROP COLUMN "select_option",
ADD COLUMN     "AnserUserID" INTEGER NOT NULL,
ADD COLUMN     "AnswerID" INTEGER NOT NULL,
ADD COLUMN     "Decision" BOOLEAN NOT NULL,
ADD COLUMN     "IssueID" INTEGER NOT NULL,
ADD COLUMN     "selectOptionID" INTEGER NOT NULL,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("AnswerID");

-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
DROP COLUMN "article_id",
DROP COLUMN "article_link",
DROP COLUMN "article_title",
DROP COLUMN "article_user_name",
ADD COLUMN     "ArticleID" INTEGER NOT NULL,
ADD COLUMN     "ArticleLink" TEXT NOT NULL,
ADD COLUMN     "ArticleTitle" TEXT NOT NULL,
ADD COLUMN     "ArticleUserName" TEXT NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("ArticleID");

-- AlterTable
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_pkey",
DROP COLUMN "article_id",
DROP COLUMN "correct_option",
DROP COLUMN "issue_detail",
DROP COLUMN "issue_id",
DROP COLUMN "issue_name",
DROP COLUMN "option1",
DROP COLUMN "option2",
DROP COLUMN "option3",
DROP COLUMN "option4",
DROP COLUMN "post_user_id",
DROP COLUMN "update_at",
DROP COLUMN "visibility",
ADD COLUMN     "IssueID" INTEGER NOT NULL,
ADD COLUMN     "IssueName" TEXT NOT NULL,
ADD COLUMN     "IsuueDetail" TEXT NOT NULL,
ADD COLUMN     "OptionID" INTEGER NOT NULL,
ADD COLUMN     "OrganisationID" INTEGER NOT NULL,
ADD COLUMN     "PostUserID" INTEGER NOT NULL,
ADD COLUMN     "Update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Visibility" BOOLEAN NOT NULL,
ALTER COLUMN "explanation" SET NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ADD CONSTRAINT "Issue_pkey" PRIMARY KEY ("IssueID");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "update_at",
DROP COLUMN "user_id",
DROP COLUMN "user_name",
ADD COLUMN     "Update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "UserID" INTEGER NOT NULL,
ADD COLUMN     "UserIcon" TEXT NOT NULL,
ADD COLUMN     "UserName" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("UserID");

-- DropTable
DROP TABLE "QiitaArticle";

-- DropTable
DROP TABLE "QiitaTag";

-- CreateTable
CREATE TABLE "Option" (
    "OptionID" INTEGER NOT NULL,
    "Option1" TEXT NOT NULL,
    "Option2" TEXT NOT NULL,
    "Option3" TEXT NOT NULL,
    "Option4" TEXT NOT NULL,
    "CorrectOption" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("OptionID")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "OrganisationID" INTEGER NOT NULL,
    "OrganisationName" TEXT NOT NULL,
    "discruption" TEXT NOT NULL,
    "authority" TEXT NOT NULL,
    "UserID" INTEGER NOT NULL,
    "ArticleID" INTEGER NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("OrganisationID")
);

-- CreateTable
CREATE TABLE "Tag" (
    "TagID" INTEGER NOT NULL,
    "tagName" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("TagID")
);

-- CreateTable
CREATE TABLE "UserTag" (
    "UserTagID" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "UserTag_pkey" PRIMARY KEY ("UserTagID")
);

-- CreateTable
CREATE TABLE "ArticleTag" (
    "ArticleTagID" INTEGER NOT NULL,
    "ArticleID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "ArticleTag_pkey" PRIMARY KEY ("ArticleTagID")
);

-- CreateTable
CREATE TABLE "IssueTag" (
    "IssueTagID" INTEGER NOT NULL,
    "IssueID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "IssueTag_pkey" PRIMARY KEY ("IssueTagID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Option_OptionID_key" ON "Option"("OptionID");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_OrganisationID_key" ON "Organisation"("OrganisationID");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_TagID_key" ON "Tag"("TagID");

-- CreateIndex
CREATE UNIQUE INDEX "UserTag_UserTagID_key" ON "UserTag"("UserTagID");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleTag_ArticleTagID_key" ON "ArticleTag"("ArticleTagID");

-- CreateIndex
CREATE UNIQUE INDEX "IssueTag_IssueTagID_key" ON "IssueTag"("IssueTagID");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_AnswerID_key" ON "Answer"("AnswerID");

-- CreateIndex
CREATE UNIQUE INDEX "Article_ArticleID_key" ON "Article"("ArticleID");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_IssueID_key" ON "Issue"("IssueID");

-- CreateIndex
CREATE UNIQUE INDEX "User_UserID_key" ON "User"("UserID");

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_PostUserID_fkey" FOREIGN KEY ("PostUserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_OrganisationID_fkey" FOREIGN KEY ("OrganisationID") REFERENCES "Organisation"("OrganisationID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_OptionID_fkey" FOREIGN KEY ("OptionID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_ArticleID_fkey" FOREIGN KEY ("ArticleID") REFERENCES "Organisation"("OrganisationID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_AnserUserID_fkey" FOREIGN KEY ("AnserUserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTag" ADD CONSTRAINT "UserTag_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTag" ADD CONSTRAINT "UserTag_TagID_fkey" FOREIGN KEY ("TagID") REFERENCES "Tag"("TagID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleTag" ADD CONSTRAINT "ArticleTag_ArticleID_fkey" FOREIGN KEY ("ArticleID") REFERENCES "Article"("ArticleID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleTag" ADD CONSTRAINT "ArticleTag_TagID_fkey" FOREIGN KEY ("TagID") REFERENCES "Tag"("TagID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueTag" ADD CONSTRAINT "IssueTag_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueTag" ADD CONSTRAINT "IssueTag_TagID_fkey" FOREIGN KEY ("TagID") REFERENCES "Tag"("TagID") ON DELETE RESTRICT ON UPDATE CASCADE;
