/*
  Warnings:

  - You are about to drop the column `IsuueDetail` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Update_at` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `explanation` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `Explanation` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IssueDetail` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IssueID` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_OptionID_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "IsuueDetail",
DROP COLUMN "Update_at",
DROP COLUMN "created_at",
DROP COLUMN "explanation",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Explanation" TEXT NOT NULL,
ADD COLUMN     "IssueDetail" TEXT NOT NULL,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Option" ADD COLUMN     "IssueID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;
