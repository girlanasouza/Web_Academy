-- DropIndex
DROP INDEX `Cliente_cpf_key` ON `Cliente`;

-- AlterTable
ALTER TABLE `Cliente` ADD PRIMARY KEY (`cpf`);
