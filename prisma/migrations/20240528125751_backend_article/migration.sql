-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "UserName" TEXT NOT NULL,
    "UserIcon" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Issue" (
    "IssueID" SERIAL NOT NULL,
    "IssueName" TEXT NOT NULL,
    "IsuueDetail" TEXT NOT NULL,
    "Visibility" BOOLEAN NOT NULL,
    "PostUserID" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Update_at" TIMESTAMP(3) NOT NULL,
    "OrganisationID" INTEGER NOT NULL,
    "OptionID" INTEGER NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("IssueID")
);

-- CreateTable
CREATE TABLE "Option" (
    "OptionID" SERIAL NOT NULL,
    "Option1" TEXT NOT NULL,
    "Option2" TEXT NOT NULL,
    "Option3" TEXT NOT NULL,
    "Option4" TEXT NOT NULL,
    "CorrectOption" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("OptionID")
);

-- CreateTable
CREATE TABLE "Article" (
    "ArticleID" SERIAL NOT NULL,
    "ArticleTitle" TEXT NOT NULL,
    "ArticleLink" TEXT NOT NULL,
    "ArticleUserName" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("ArticleID")
);

-- CreateTable
CREATE TABLE "Answer" (
    "AnswerID" SERIAL NOT NULL,
    "Decision" BOOLEAN NOT NULL,
    "IssueID" INTEGER NOT NULL,
    "AnserUserID" INTEGER NOT NULL,
    "selectOptionID" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("AnswerID")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "OrganisationID" SERIAL NOT NULL,
    "OrganisationName" TEXT NOT NULL,
    "discruption" TEXT NOT NULL,
    "authority" TEXT NOT NULL,
    "UserID" INTEGER NOT NULL,
    "ArticleID" INTEGER NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("OrganisationID")
);

-- CreateTable
CREATE TABLE "Tag" (
    "TagID" SERIAL NOT NULL,
    "tagName" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("TagID")
);

-- CreateTable
CREATE TABLE "UserTag" (
    "UserTagID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "UserTag_pkey" PRIMARY KEY ("UserTagID")
);

-- CreateTable
CREATE TABLE "ArticleTag" (
    "ArticleTagID" SERIAL NOT NULL,
    "ArticleID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "ArticleTag_pkey" PRIMARY KEY ("ArticleTagID")
);

-- CreateTable
CREATE TABLE "IssueTag" (
    "IssueTagID" SERIAL NOT NULL,
    "IssueID" INTEGER NOT NULL,
    "TagID" INTEGER NOT NULL,

    CONSTRAINT "IssueTag_pkey" PRIMARY KEY ("IssueTagID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserID_key" ON "User"("UserID");

-- CreateIndex
CREATE UNIQUE INDEX "User_UserName_key" ON "User"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_IssueID_key" ON "Issue"("IssueID");

-- CreateIndex
CREATE UNIQUE INDEX "Option_OptionID_key" ON "Option"("OptionID");

-- CreateIndex
CREATE UNIQUE INDEX "Article_ArticleID_key" ON "Article"("ArticleID");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_AnswerID_key" ON "Answer"("AnswerID");

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

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_PostUserID_fkey" FOREIGN KEY ("PostUserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_OrganisationID_fkey" FOREIGN KEY ("OrganisationID") REFERENCES "Organisation"("OrganisationID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_OptionID_fkey" FOREIGN KEY ("OptionID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_ArticleUserName_fkey" FOREIGN KEY ("ArticleUserName") REFERENCES "User"("UserName") ON DELETE RESTRICT ON UPDATE CASCADE;

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
