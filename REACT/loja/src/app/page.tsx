"use client";
import { Carrinho } from "./types/carrinho";
import { ItemProduto } from "./types/produto";
import React, { useState, useEffect } from "react";
import { mockItensCarrinho } from "./mocks/itensCarrinho";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { FavoritosProvider } from "./components/FavoritosProvider/FavoritosProvider";
import { ResumoFavoritos } from "./components/ResumoFavoritos/ResumoFavoritos";

export default function App() {
  const carrinho: Carrinho = {
    itensCarrinho: mockItensCarrinho,
  };

  const [quantidadeItensTotal, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: ItemProduto): void => {
    setPrecoTotal((prevPrice) => prevPrice + parseFloat(produto.preco));
    setQuantidadeTotalItens((prevQtd) => prevQtd + 1);
  };

  return (
    <>
      <FavoritosProvider>
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
      </FavoritosProvider>
    </>
  );
}
