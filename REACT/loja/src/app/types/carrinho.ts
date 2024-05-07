export interface ItemCarrinho {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
}

export interface Carrinho {
    itensCarrinho: ItemCarrinho[];
}