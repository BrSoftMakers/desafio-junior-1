/*
  Warnings:

  - You are about to drop the column `age` on the `pets` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` DROP COLUMN `age`,
    ADD COLUMN `dateOfBirth` DATETIME(3) NOT NULL;
