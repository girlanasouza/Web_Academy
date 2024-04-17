-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` INTEGER NOT NULL,
    `datanasc` DATETIME(3) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `celular` INTEGER NOT NULL,
    `pnome` VARCHAR(100) NOT NULL,
    `sobrenome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cat` INTEGER NOT NULL,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_subcat` INTEGER NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `fabricante` VARCHAR(100) NOT NULL,
    `preco` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Numero_serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produto` INTEGER NOT NULL,
    `nr_serie` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Dlocal` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_endereco` INTEGER NOT NULL,
    `cpf_cliente` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item_compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf_cliente` INTEGER NOT NULL,
    `data_hora` DATETIME(3) NOT NULL,
    `endereco` INTEGER NOT NULL,
    `desconto` DOUBLE NOT NULL,
    `forma_pg` VARCHAR(100) NOT NULL,
    `total` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TemProduto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_item_compra` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_id_cat_fkey` FOREIGN KEY (`id_cat`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_id_subcat_fkey` FOREIGN KEY (`id_subcat`) REFERENCES `Subcategoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Numero_serie` ADD CONSTRAINT `Numero_serie_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enderecado` ADD CONSTRAINT `Enderecado_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enderecado` ADD CONSTRAINT `Enderecado_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_compra` ADD CONSTRAINT `Item_compra_endereco_fkey` FOREIGN KEY (`endereco`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_compra` ADD CONSTRAINT `Item_compra_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TemProduto` ADD CONSTRAINT `TemProduto_id_item_compra_fkey` FOREIGN KEY (`id_item_compra`) REFERENCES `Item_compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TemProduto` ADD CONSTRAINT `TemProduto_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
