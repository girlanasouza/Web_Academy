import Image from "next/image";
import Router, { useRouter } from "next/navigation";
import { ItemProduto } from "@/app/types/produto";
import { useDetalhesProduto } from "@/app/hooks/useDetalhesProduto";

interface CardProdutoProps {
  produto: ItemProduto;
  adicionarAoCarrinho: (produto: ItemProduto) => void;
}

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: CardProdutoProps) {
  const router = useRouter();

  const verDetalhesProduto = (nomeProduto: string) => {
    router.push(`/produto/${nomeProduto}`);
  };

  const { data, isPending, isError } = useDetalhesProduto(produto.nome);

  if (isPending) return <h5>Carregando...</h5>;
  if (isError) return <h5>Ocorreu um erro ao carregar os produtos!!!</h5>;
  if (!data) return <h5>O produto não está resolvido!!!</h5>;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt={produto.fotos[0].titulo}
          width={300}
          height={320}
        />

        <div className="card-body bg-light">
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text text-secondary">R$ {produto.preco}</p>
          <button
            onClick={() => adicionarAoCarrinho(produto)}
            className="btn btn-dark d-block w-100"
          >
            Adicionar no carrinho
          </button>
          <button
            onClick={() => verDetalhesProduto(produto.nome)}
            className="btn btn-light d-block w-100 mt-2"
            type="button"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
