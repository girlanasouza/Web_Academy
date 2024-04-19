/*
  Warnings:

  - You are about to alter the column `datanasc` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Cliente` MODIFY `datanasc` DATETIME NOT NULL;
