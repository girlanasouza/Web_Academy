import { screen, render } from "@testing-library/react";

import ListagemProdutos from "../ListagemProdutos";
import {
  FavoritosProvider,
  useFavoritosContext,
} from "@/app/State/FavoritosProvider";
import { mockProdutos } from "@/app/mocks/produtos";
import userEvent from "@testing-library/user-event";

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
        <ListagemProdutos produtos={[]} />
      </FavoritosProvider>
    );

    expect(screen.getByText("Produtos disponíveis:")).toBeInTheDocument();
    mockProdutos.forEach((produto) => {
      expect(screen.getByText(produto.nome)).toBeInTheDocument();
      expect(screen.getByText(`De R$ ${produto.preco}`)).toBeInTheDocument();
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
});
