export interface ProdutoCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface Carrinho {
  itensCarrinho: ProdutoCarrinho[];
}
