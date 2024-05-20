"use client";

import React, { createContext, use, useContext, useState } from "react";
import { ItemProduto } from "@/app/types/produto";

export type FavoritosContextType = [
  ItemProduto[],
  React.Dispatch<React.SetStateAction<ItemProduto[]>>
];

interface FavoritosProviderProps {
  children: React.ReactNode;
}

const FavoritosContext = createContext<FavoritosContextType>([[], () => {}]);

export const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<ItemProduto[]>([]);

  return (
    <FavoritosContext.Provider value={[favoritos, setFavoritos]}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = (): FavoritosContextType => {
  const [favoritos, setFavoritos] = useContext(FavoritosContext);
  return [favoritos, setFavoritos];
};

export const useProdutosFavoritos = (): ItemProduto[] => {
  const [favoritos, setFavoritos] = useContext(FavoritosContext);
  return favoritos;
};

export const useVerificaProdutoFavorito = (id: string): boolean => {
  const [favoritos, setFavoritos] = useContext(FavoritosContext);
  const ehFav = favoritos?.some((item) => item.id === id);
  return ehFav;
};
