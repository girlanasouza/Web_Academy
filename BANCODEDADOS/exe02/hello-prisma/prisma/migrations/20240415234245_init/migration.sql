-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` INTEGER NOT NULL,

    UNIQUE INDEX `Cliente_cpf_key`(`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
