"use client";
import React, { useState, useMemo } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { ProdutoCarrinho } from "../types/carrinho";

export default function Carrinho() {
  const [precoTotal, setPrecoTotal] = useState<number>(
    mockItensCarrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    )
  );

  const [quantidadeItensTotal, setQuantidadeItensTotal] = useState<number>(
    () => {
      const total = mockItensCarrinho.reduce(
        (total, item) => total + item.quantidade,
        0
      );
      return total;
    }
  );

  const [itensCarrinho, setItensCarrinho] =
    useState<ProdutoCarrinho[]>(mockItensCarrinho);

  const removerItemDoCarrinho = (id: string) => {
    const updatedItens = itensCarrinho.filter((item) => item.id !== id);
    const itemRemovido: ProdutoCarrinho | undefined = itensCarrinho.find(
      (item: ProdutoCarrinho) => item.id === id
    );
    if (itemRemovido) {
      setItensCarrinho(updatedItens);
      setQuantidadeItensTotal(quantidadeItensTotal - itemRemovido.quantidade);
      setPrecoTotal(precoTotal - itemRemovido.preco * itemRemovido.quantidade);
    }
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho
            carrinho={itensCarrinho}
            removerItemDoCarrinho={removerItemDoCarrinho}
          />
          <ResumoCarrinho
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          />
        </div>
      </main>
    </>
  );
}
