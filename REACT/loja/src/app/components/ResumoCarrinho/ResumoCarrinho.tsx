import React from "react";

interface ResumoCarrinhoProps {
  quantidadeItensTotal: number;
  precoTotal: number;
}

export default function ResumoCarrinho({
  quantidadeItensTotal,
  precoTotal,
}: ResumoCarrinhoProps) {
  return (
    <>
    <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
          <p className="card-text fw-medium">
            Quantidade Total: {quantidadeItensTotal}
          </p>
          <p className="card-text fw-medium">
            Valor total: R${precoTotal.toFixed(2)}
          </p>
          {/* <button
            onClick={()=> setQuantidadeTotalItens(quantidadeItensTotal+1)}
            className="btn btn-secondary"
          >
            Aumentar Quantidade
          </button> */}
        </div>
    </div>
    
    </>
  ) 
}