"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";

export default function Carrinho() {
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const valorTotalProduto = (precoUnitario: number, quantidade: number): number => {
    return precoUnitario * quantidade;
  };
  return (
    <>
    <Navbar/>

      <main>
        <div className="container p-5">
          <ListagemCarrinho/> 
          <ResumoCarrinho
            precoTotal={valorTotalProduto(1000,1)}
            quantidadeItensTotal={quantidadeTotalItens}
            setQuantidadeTotalItens={setQuantidadeTotalItens}
          />
        </div>
      </main>
    </>
  );
}