import { ItemProduto } from "@/app/types/produto";
import CardProduto from "../CardProduto/CardProduto";
import ResumoFavoritos from "../ResumoFavoritos/ResumoFavoritos";
import { useListaProdutos } from "@/app/hooks/useListaProdutos";

interface IListagemProdutos {
  adicionarAoCarrinho(produto: ItemProduto): void;
}

export default function ListagemProdutos({
  adicionarAoCarrinho,
}: IListagemProdutos) {
  const { produtos, isPending, isError } = useListaProdutos();

  if (isPending) return <h5>Carregando...</h5>;
  if (isError) return <h5>Ocorreu um erro ao carregar os produtos!!!</h5>;
  if (!produtos) return <h5>Não há produtos disponíveis!!!</h5>;
  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </>
  );
}
