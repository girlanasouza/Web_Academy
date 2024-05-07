"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { Carrinho } from "../types/carrinho";


export default function Carrinho() {
const carrinho: Carrinho = {
  itensCarrinho: mockItensCarrinho
};
  
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const valorTotalProduto = (precoUnitario: number, quantidade: number): number => {
    return precoUnitario * quantidade;
  };


  return (
    <>
    <Navbar/>

      <main>
        <div className="container p-5">
          <ListagemCarrinho carrinho={carrinho}/> 
          <ResumoCarrinho carrinho={carrinho} />
        </div>
      </main>
    </>
  );
}