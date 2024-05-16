export interface ProdutoCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface Carrinho {
  itensCarrinho: ProdutoCarrinho[];
}

type AumentarQtdAction = {
  type: "aumentar_qtd";
  id: string;
};

type DiminuirQtdAction = {
  type: "diminuir_qtd";
  id: string;
};

type RemoverAction = {
  type: "remover";
  id: string;
};

export type CarrinhoAction =
  | AumentarQtdAction
  | DiminuirQtdAction
  | RemoverAction;
