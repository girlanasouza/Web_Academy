import React from "react";
import { Carrinho, ItemCarrinho } from "@/app/types/carrinho";

interface IResumoCarrinho {
  carrinho: Carrinho;
}

export default function ResumoCarrinho({
  carrinho
}: IResumoCarrinho) {
  let quantidadeTotal = 0;
  let precoTotalCarrinho = 0;

  carrinho.itensCarrinho.forEach((item: ItemCarrinho) => {
    quantidadeTotal += item.quantidade;
    precoTotalCarrinho += item.preco * item.quantidade;
  });

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
          <p className="card-text fw-medium">
            Quantidade Total: {quantidadeTotal}
          </p>
          <p className="card-text fw-medium">
            Valor total: R${precoTotalCarrinho.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}
