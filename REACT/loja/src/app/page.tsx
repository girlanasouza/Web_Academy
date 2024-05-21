"use client";

import { ItemProduto } from "./types/produto";
import React, { useState } from "react";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import FavoritosProvider from "./components/FavoritosProvider/FavoritosProvider";
import { ResumoFavoritos } from "./components/ResumoFavoritos/ResumoFavoritos";

export default function App() {
  const [quantidadeItensTotal, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: ItemProduto): void => {
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
          <ListagemProdutos adicionarAoCarrinho={adicionarAoCarrinho} />
          <ResumoFavoritos />
        </div>
      </main>
    </>
  );
}
