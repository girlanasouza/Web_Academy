import { ItemProduto } from "@/app/types/produto";
import { useFavoritosContext } from "../FavoritosProvider/FavoritosProvider";

interface IItemFavoritoProps {
  itemFavorito: ItemProduto;
}

export default function ItemFavorito({ itemFavorito }: IItemFavoritoProps) {
  const [favoritos, setFavoritos] = useFavoritosContext();

  const removerFavorito = (id: string) => {
    favoritos
      ? setFavoritos((favoritos) => favoritos.filter((item) => item.id !== id))
      : null;
  };

  return (
    <tr key={itemFavorito.id}>
      <td>{itemFavorito.nome}</td>
      <td>R$ {Number(itemFavorito.preco).toFixed(2)}</td>

      <td>
        <button
          onClick={() => removerFavorito(itemFavorito.id)}
          className="btn btn-danger btn-sm"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
