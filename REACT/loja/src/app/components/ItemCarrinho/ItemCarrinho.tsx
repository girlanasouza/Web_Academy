import { ItemCarrinho } from "@/app/types/carrinho";

interface ItemCarrinhoProps {
  itemCarrinho: ItemCarrinho;
  removerDoCarrinho: () => void;
}

export default function ItemCarrinho({
  itemCarrinho,
  removerDoCarrinho,
}: ItemCarrinhoProps) {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <>
      <tr key="1">
        <td>{itemCarrinho.nome}</td>
        <td>R$ {itemCarrinho.preco}</td>
        <td>{itemCarrinho.quantidade}</td>

        <td>R$ {(itemCarrinho.preco * itemCarrinho.quantidade).toFixed(2)}</td>
        <td>
          <button
            onClick={() => removerDoCarrinho()}
            className="btn btn-danger btn-sm"
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
