import React from "react";

interface ResumoCarrinhoProps {
  precoTotal: number;
  quantidadeItensTotal: number;
  setQuantidadeTotalItens:  React.Dispatch<React.SetStateAction<number>>
}

export default function ResumoCarrinho({
  precoTotal,
  quantidadeItensTotal,
  setQuantidadeTotalItens,
}: ResumoCarrinhoProps) {
  return (
    <>
    <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
          <p className="card-text fw-medium">
            Valor total: R${precoTotal}
          </p>
          <p className="card-text fw-medium">
            Quantidade Total: {quantidadeItensTotal}
          </p>
          <button
            onClick={()=> setQuantidadeTotalItens(quantidadeItensTotal+1)}
            className="btn btn-secondary"
          >
            Aumentar Quantidade
          </button>
        </div>
    </div>
    
    </>
  ) 
}