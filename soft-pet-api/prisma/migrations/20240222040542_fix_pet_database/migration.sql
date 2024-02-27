/*
  Warnings:

  - Made the column `petTypeId` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `birth` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_petTypeId_fkey";

-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "petTypeId" SET NOT NULL,
DROP COLUMN "birth",
ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "PetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
