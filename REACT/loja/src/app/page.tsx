"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";

export default function Produtos() {
  return (
    <>
    <Navbar/>

      <main>
        <div className="container p-5">
          <ResumoCarrinho/>
          <ListagemProdutos/>
        </div>
      </main>
    </>
  );
}