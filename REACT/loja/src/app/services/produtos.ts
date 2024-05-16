import { ItemProduto } from "../types/produto";
import { useQuery } from "@tanstack/react-query";
import { getDetalhesProduto } from "";

import api from "./api";

export async function getListaProduto(): Promise<ItemProduto[]> {
  return api.get<ItemProduto[]>("/produto").then((response) => response.data);
}

export const useDetalhesProduto = (produtoId: string) => {
  return useQuery(["produto", produtoId], () => getDetalhesProduto(produtoId));
};
