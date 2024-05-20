import { ItemProduto } from "@/app/types/produto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  useFavoritosContext,
  useVerificaProdutoFavorito,
} from "../FavoritosProvider/FavoritosProvider";

interface CardProdutoProps {
  produto: ItemProduto;
  ehFav?: boolean;
  adicionarAoCarrinho(produto: ItemProduto): void;
}

export default function CardProduto({
  produto,
  ehFav,
  adicionarAoCarrinho,
}: CardProdutoProps) {
  const router = useRouter();
  const [favoritos, setFavoritos] = useFavoritosContext();
  const ehFavorito = useVerificaProdutoFavorito(produto.id);

  const verDetalhesProduto = () => {
    router.push(`/produto/${produto.nome}`);
  };

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt="imagem placeholder"
          width={300}
          height={320}
        />

        <div className="card-body bg-light">
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text text-secondary">R$ {produto.preco}</p>

          {!ehFav && (
            <button
              className="btn btn-success d-block w-100 "
              type="button"
              onClick={() => adicionarAoCarrinho(produto)}
            ></button>
          )}
          {!ehFav && (
            <button
              className="btn btn-success d-block w-100 "
              type="button"
              children={ehFavorito ? "Adicionado" : "Add Fav"}
              onClick={() =>
                setFavoritos(favoritos ? [...favoritos, produto] : [produto])
              }
              disabled={ehFavorito}
            ></button>
          )}

          {ehFav && (
            <button
              className="btn btn-danger d-block w-100"
              type="button"
              children={"Remover Favorito"}
              onClick={() =>
                setFavoritos((favoritos) =>
                  favoritos?.filter((item) => item.id !== produto.id)
                )
              }
            />
          )}
          <button
            className="btn d-block w-100 "
            type="button"
            onClick={() => verDetalhesProduto()}
          ></button>
        </div>
      </div>
    </div>
  );
}
