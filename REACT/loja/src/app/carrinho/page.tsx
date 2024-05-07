"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { Carrinho } from "../types/carrinho";

export default function Carrinho() {
  const carrinho: Carrinho = {
    itensCarrinho: mockItensCarrinho
  };
    
  const [quantidadeItensTotal, setQuantidadeTotalItens]= useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  useEffect(() => {
    let totalItens = 0;
    let totalPrice = 0;

    carrinho.itensCarrinho.forEach((itemCarrinho) => {
      totalItens += itemCarrinho.quantidade;
      totalPrice += itemCarrinho.preco * itemCarrinho.quantidade;
    });

    setQuantidadeTotalItens(totalItens);
    setPrecoTotal(totalPrice);
  }, [carrinho]);


  return (
    <>

      <main>
        <div className="container p-5">
          <ListagemCarrinho carrinho={carrinho}/> 
          <ResumoCarrinho 
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          />
        </div>
      </main>
    </>
  );
}