"use client";
import React, { useState, useMemo, useReducer } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { ProdutoCarrinho } from "../types/carrinho";
import { CarrinhoAction } from "../types/carrinho";

const carrinhoReducer = (
  state: ProdutoCarrinho[],
  action: CarrinhoAction
): ProdutoCarrinho[] => {
  switch (action.type) {
    case "aumentar_qtd":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    case "diminuir_qtd":
      return state.map((item) =>
        item.id === action.id && item.quantidade > 0
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      );
    case "remover":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error("Ação não reconhecida!");
  }
};

export default function Carrinho() {
  const [itensCarrinho, dispatch] = useReducer(
    carrinhoReducer,
    mockItensCarrinho
  );

  const precoTotal = itensCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  const quantidadeItensTotal = itensCarrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho carrinho={itensCarrinho} dispatch={dispatch} />
          <ResumoCarrinho
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          />
        </div>
      </main>
    </>
  );
}
