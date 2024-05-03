"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";

export default function Carrinho() {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <>
    <Navbar/>

      <main>
        <div className="container p-5">
          <ListagemCarrinho/> 
          <ResumoCarrinho/>
        </div>
      </main>
    </>
  );
}