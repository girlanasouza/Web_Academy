import { ItemProduto } from "../types/produto";
import { useQuery } from "@tanstack/react-query";

import { api } from "./api";

export async function getListaProduto(): Promise<ItemProduto[]> {
  return api.get<ItemProduto[]>("/produto").then((response) => response.data);
}

export async function getDetalhesProduto(nomeProduto: string) {
  return api.get(`/produto/${nomeProduto}`).then((response) => response.data);
}
