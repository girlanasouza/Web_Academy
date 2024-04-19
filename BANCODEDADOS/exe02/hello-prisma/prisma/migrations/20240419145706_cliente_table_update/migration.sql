/*
  Warnings:

  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `datanasc` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `Enderecado` DROP FOREIGN KEY `Enderecado_cpf_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `Item_compra` DROP FOREIGN KEY `Item_compra_cpf_cliente_fkey`;

-- AlterTable
ALTER TABLE `Cliente` DROP PRIMARY KEY,
    MODIFY `cpf` CHAR(11) NOT NULL,
    MODIFY `datanasc` DATETIME NOT NULL,
    ADD PRIMARY KEY (`cpf`);

-- AlterTable
ALTER TABLE `Enderecado` MODIFY `cpf_cliente` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Item_compra` MODIFY `cpf_cliente` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Enderecado` ADD CONSTRAINT `Enderecado_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_compra` ADD CONSTRAINT `Item_compra_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
