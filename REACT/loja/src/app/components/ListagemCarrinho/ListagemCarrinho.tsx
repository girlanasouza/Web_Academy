import { ProdutoCarrinho } from "@/app/types/carrinho";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";

interface IListagemCarrinho {
  carrinho: ProdutoCarrinho[];
  removerItemDoCarrinho: (id: string) => void;
}

export default function ListagemCarrinho({
  carrinho,
  removerItemDoCarrinho,
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
                {carrinho.map(
                  (
                    itemCarrinho // Correção aqui
                  ) => (
                    <ItemCarrinho
                      key={itemCarrinho.id}
                      itemCarrinho={itemCarrinho}
                      removerItemDoCarrinho={removerItemDoCarrinho}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
