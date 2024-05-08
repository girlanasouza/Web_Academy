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

export default function App( ) {
  const carrinho: Carrinho = {
    itensCarrinho: mockItensCarrinho
  };

  const [produtos, setProdutos] = useState<Produto[]|null>(null);
  const [quantidadeItensTotal, setQuantidadeTotalItens]= useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto): void => {
    setPrecoTotal(prevPrice => prevPrice + parseFloat(produto.preco));
    setQuantidadeTotalItens(prevQtd => prevQtd + 1);
  }

  useEffect(()=>{
    const fetchDataProdutos = async () => {
      try {
        const response = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto"
        );
        const jsonDataProdutos = await response.json();
        setProdutos(jsonDataProdutos);
      } catch (error) {
        console.error("Erro ao buscar dados da api de produtos:, ", error);
      }
    };
    fetchDataProdutos();
  })
  
  return (
    <>

      <main>
        <div className="container p-5"> 
          <ResumoCarrinho 
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          />  

          {
            produtos ? (
              <ListagemProdutos 
                produtos={produtos} 
                adicionarAoCarrinho={adicionarAoCarrinho}
              />
            ): null
          }

        </div>
      </main>
    </>
  );
}