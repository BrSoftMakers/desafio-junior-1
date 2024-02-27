/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `PetType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PetType_type_key" ON "PetType"("type");
