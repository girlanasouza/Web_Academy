"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { Produto } from "./components/Produto/Produto";


export default function Produtos() {
  const [precoTotal, setTotalPrice] = useState<number>(0);
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const adicionarAoCarrinho = (produto: Produto): void => {
    setTotalPrice(prevPrice => prevPrice + produto.preco);
    setQuantidadeTotalItens(prevQuantity => prevQuantity + 1);
  };
  return (
    <>
    <Navbar/>

      <main>
        <div className="container p-5">
          <ResumoCarrinho
            precoTotal={precoTotal}
            quantidadeItensTotal={quantidadeTotalItens}
            setQuantidadeTotalItens={setQuantidadeTotalItens}
          />
          <ListagemProdutos
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        </div>
      </main>
    </>
  );
}