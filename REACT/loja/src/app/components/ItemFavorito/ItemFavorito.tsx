import { ItemProduto } from "@/app/types/produto";

interface IItemFavoritoProps {
  itemFavorito: ItemProduto;
  setFavoritos: React.Dispatch<React.SetStateAction<ItemProduto[]>>;
}

export default function ItemFavorito({
  itemFavorito,
  setFavoritos,
}: IItemFavoritoProps) {
  const removerFavorito = (id: string) => {
    setFavoritos((favoritos) => favoritos.filter((item) => item.id !== id));
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
