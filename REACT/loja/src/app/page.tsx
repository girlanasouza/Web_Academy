"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { mockItensCarrinho } from "./mocks/itensCarrinho";
import { Carrinho } from "./types/carrinho";
import { Produto } from "./types/produto";

// adicioando na brach do tp1
export default function Produtos( ) {
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
  const adicionarAoCarrinho = (produto: Produto): void => {
    setPrecoTotal(prevPrice => prevPrice + parseFloat(produto.preco));
    setQuantidadeTotalItens(prevQtd => prevQtd + 1);
  }

  const produtos = mockProdutos;
  
  return (
    <>


      <main>
        <div className="container p-5"> 
          <ResumoCarrinho 
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          /> 
          <ListagemProdutos 
            produtos={produtos} 
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        </div>
      </main>
    </>
  );
}