// FavoritosProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ItemProduto } from "@/app/types/produto";

interface FavoritosContextType {
  favoritos: ItemProduto[];
  setFavoritos: React.Dispatch<React.SetStateAction<ItemProduto[]>>;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(
  undefined
);

export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoritos, setFavoritos] = useState<ItemProduto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = (): FavoritosContextType => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos must be used within a FavoritosProvider");
  }
  return context;
};
