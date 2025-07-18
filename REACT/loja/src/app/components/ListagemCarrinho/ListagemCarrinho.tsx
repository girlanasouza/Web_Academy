import { Carrinho } from "@/app/types/carrinho";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";

interface IListagemCarrinho {
  carrinho: Carrinho;
  removerDoCarrinho: () => void;
}

export default function ListagemCarrinho({
  carrinho,
  removerDoCarrinho,
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
                {/* <ItemCarrinho label="Notebook 1"/>
                <ItemCarrinho label="Notebook 2"/>
                <ItemCarrinho label="Notebook 3"/> */}

                {carrinho.itensCarrinho.map((itemCarrinho) => (
                  <ItemCarrinho
                    key={itemCarrinho.id}
                    itemCarrinho={itemCarrinho}
                    removerDoCarrinho={removerDoCarrinho}
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
