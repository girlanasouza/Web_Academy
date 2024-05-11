"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { mockItensCarrinho } from "./mocks/itensCarrinho";
import { ProdutoCarrinho } from "./types/carrinho";
import { Produto } from "./types/produto";

export default function Produtos() {
  const produtos = mockProdutos;
  const [quantidadeItensTotal, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto): void => {
    setPrecoTotal((prevPrice) => prevPrice + parseFloat(produto.preco));
    setQuantidadeTotalItens((prevQtd) => prevQtd + 1);
  };

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
