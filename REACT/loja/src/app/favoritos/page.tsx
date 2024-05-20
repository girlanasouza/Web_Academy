"use client";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useState } from "react";
import { ItemProduto } from "../types/produto";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<ItemProduto[] | []>([]);

  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
