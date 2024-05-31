import { screen, render } from "@testing-library/react";

import CardProduto from "../../CardProduto/CardProduto";
import ListagemProdutos from "../ListagemProdutos";
import {
  FavoritosProvider,
  useFavoritosContext,
} from "@/app/State/FavoritosProvider";
import { mockProdutos } from "@/app/mocks/produtos";
import userEvent from "@testing-library/user-event";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";

jest.mock("../../../State/FavoritosProvider", () => ({
  ...jest.requireActual("../../../State/FavoritosProvider"),
  useFavoritosContext: jest.fn(),
}));

describe("ListagemProdutos", () => {
  it("deve rendenrizar corretamente a listagem de produtos", () => {
    const setFavoritos = jest.fn();
    const useListagemProdutosMock = useFavoritosContext as jest.Mock;
    useListagemProdutosMock.mockReturnValue({ setFavoritos });

    render(
      <FavoritosProvider>
        <ListagemProdutos produtos={mockProdutos} />
      </FavoritosProvider>
    );

    expect(screen.getByText("Produtos disponíveis:")).toBeInTheDocument();

    expect(screen.getAllByText("8% de desconto")).toHaveLength(2);
    mockProdutos.forEach((produto) => {
      const precoComDesconto = calculaValorComPorcentagemDeDesconto(
        Number(produto.preco),
        produto.desconto
      );
      expect(screen.getByText(produto.nome)).toBeInTheDocument();
      expect(screen.getByText(`De R$ ${produto.preco}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Por R$ ${precoComDesconto}`)
      ).toBeInTheDocument();
      expect(screen.getByAltText(produto.fotos[0].titulo)).toBeInTheDocument();
    });
  });

  it("deve chamar a função setFavoritos ao adicionar produto aos favoritos", async () => {
    const setFavoritos = jest.fn();
    const useFavoritosContextMock = useFavoritosContext as jest.Mock;
    useFavoritosContextMock.mockReturnValue({ setFavoritos });

    render(
      <FavoritosProvider>
        <ListagemProdutos produtos={mockProdutos} />
      </FavoritosProvider>
    );

    const botaoAdicionar = screen.getAllByRole("button", {
      name: /Adicionar aos favoritos/i,
    })[0];
    await userEvent.click(botaoAdicionar);
    expect(setFavoritos).toHaveBeenCalledTimes(1);
  });

  it("deve avisar quando não há produtos para exibir", () => {
    const setFavoritos = jest.fn();
    const useFavoritosContextMock = useFavoritosContext as jest.Mock;
    useFavoritosContextMock.mockReturnValue({ setFavoritos });

    render(
      <FavoritosProvider>
        <ListagemProdutos produtos={[]} />
      </FavoritosProvider>
    );
    expect(screen.getByText("Nenhum produto disponível!")).toBeInTheDocument();
  });
});
