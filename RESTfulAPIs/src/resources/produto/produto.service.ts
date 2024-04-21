import { PrismaClient, Produto } from '@prisma/client';
import { CreateProdutoDto, UpadateProdutoDto } from './produto.types';

const prisma = new PrismaClient();

export const checkNomeIsAvaliable = async (nome: string, ignoreId?: string): Promise<boolean> => {
    const produto = await prisma.produto.findUnique({where: {nome: nome}});
    if (!produto) return true;
    if (ignoreId && produto.id === ignoreId) return true;
    return false;
}

export async function createProduto(
    produto: CreateProdutoDto
    ): Promise<Produto> {
        return await prisma.produto.create({ data: produto });
}

export const ListProdutos = async(): Promise<Produto[]>=>{
    return await prisma.produto.findMany();
};

export const readProduto = async(id: string): Promise<Produto|null>=>{
    return await prisma.produto.findUnique({where: {id}});
}

export const updateProduto = async (id: string, produto: UpadateProdutoDto): Promise<Produto> =>{
    return await prisma.produto.update( {data: produto, where: { id }});
}

export const deleteProduto = async (id: string): Promise<Produto> => {
    return await prisma.produto.delete({where: {id}}); 
}