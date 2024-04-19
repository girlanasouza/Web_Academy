/*
  Warnings:

  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `datanasc` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `cpf_cliente` on the `Enderecado` table. All the data in the column will be lost.
  - You are about to drop the column `cpf_cliente` on the `Item_compra` table. All the data in the column will be lost.
  - Added the required column `id` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cliente` to the `Enderecado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cliente` to the `Item_compra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Enderecado` DROP FOREIGN KEY `Enderecado_cpf_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `Item_compra` DROP FOREIGN KEY `Item_compra_cpf_cliente_fkey`;

-- AlterTable
ALTER TABLE `Cliente` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `datanasc` DATETIME NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Enderecado` DROP COLUMN `cpf_cliente`,
    ADD COLUMN `id_cliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Item_compra` DROP COLUMN `cpf_cliente`,
    ADD COLUMN `id_cliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Enderecado` ADD CONSTRAINT `Enderecado_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_compra` ADD CONSTRAINT `Item_compra_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
