import { Produto } from "@prisma/client";


export type CreateProdutoDto = Pick<Produto, 'nome'|'preco'|'estoque'>;

export type UpadateProdutoDto = Pick<Produto, 'nome'|'preco'|'estoque'>;
