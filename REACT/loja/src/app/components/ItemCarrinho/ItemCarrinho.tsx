import { ProdutoCarrinho, CarrinhoAction } from "@/app/types/carrinho";
import React from "react";

interface ItemCarrinhoProps {
  itemCarrinho: ProdutoCarrinho;
  dispatch: React.Dispatch<CarrinhoAction>;
}

export default function ItemCarrinho({
  itemCarrinho,
  dispatch,
}: ItemCarrinhoProps) {
  return (
    <>
      <tr key="1">
        <td>{itemCarrinho.nome}</td>
        <td>R$ {itemCarrinho.preco}</td>
        <td>
          <button
            onClick={() =>
              dispatch({ type: "diminuir_qtd", id: itemCarrinho.id })
            }
            className="btn btn-secondary btn-sm me-2"
          >
            -
          </button>
          {itemCarrinho.quantidade}
          <button
            onClick={() =>
              dispatch({ type: "aumentar_qtd", id: itemCarrinho.id })
            }
            className="btn btn-secondary btn-sm ms-2"
          >
            +
          </button>
        </td>
        <td>R$ {(itemCarrinho.preco * itemCarrinho.quantidade).toFixed(2)}</td>
        <td>
          <button
            onClick={() => dispatch({ type: "remover", id: itemCarrinho.id })}
            className="btn btn-danger btn-sm"
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
