import Image from "next/image";
import { Produto } from "@/app/types/produto";

interface CardProdutoProps {
  produto: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: CardProdutoProps) {
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
          <p className="card-text text-secondary">{produto.preco}</p>
          <button
            onClick={() => adicionarAoCarrinho(produto)}
            className="btn btn-dark d-block w-100"
          >
            Adicionar no carrinho
          </button>
          <button className="btn btn-light d-block w-100 mt-2" type="button">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
