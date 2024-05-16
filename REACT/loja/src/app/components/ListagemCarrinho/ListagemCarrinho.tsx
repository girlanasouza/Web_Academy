import { ProdutoCarrinho } from "@/app/types/carrinho";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";
import { CarrinhoAction } from "@/app/types/carrinho";

interface IListagemCarrinho {
  carrinho: ProdutoCarrinho[];
  dispatch: React.Dispatch<CarrinhoAction>;
}

export default function ListagemCarrinho({
  carrinho,
  dispatch,
}: IListagemCarrinho) {
  return (
    <>
      <div className="card mb-4">
        <div className="row card-body">
          <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Valor Unitário</th>
                  <th>Quantidade</th>
                  <th>Valor Total</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {carrinho.map((itemCarrinho) => (
                  <ItemCarrinho
                    key={itemCarrinho.id}
                    itemCarrinho={itemCarrinho}
                    dispatch={dispatch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
