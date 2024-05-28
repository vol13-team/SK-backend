/*
  Warnings:

  - The `ArticleID` column on the `Organisation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `OrganisationID` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "OrganisationID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Organisation" DROP COLUMN "ArticleID",
ADD COLUMN     "ArticleID" INTEGER[];
