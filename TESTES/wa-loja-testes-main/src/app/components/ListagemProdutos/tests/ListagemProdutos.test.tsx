import { screen, render } from "@testing-library/react";

import ListagemProdutos from "../ListagemProdutos";
import { useFavoritosContext } from "@/app/State/FavoritosProvider";

jest.mock("@/app/State/FavoritosProvider"); 

describe("ListagemProdutos", () => {{
    it("deve rendenrizar corretamente a pagina de listagem de produtos", () => {
        const useListagemProdutosMock = useFavoritosContext as jest.Mock;
        useListagemProdutosMock.mockReturnValue(false);
        render(
            <ListagemProdutos produtos={[]}/>
        );
        
    })
}})