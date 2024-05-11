import { ProdutoCarrinho } from "@/app/types/carrinho";

interface ItemCarrinhoProps {
  itemCarrinho: ProdutoCarrinho;
  removerItemDoCarrinho: (produtoId: string) => void;
}

export default function ItemCarrinho({
  itemCarrinho,
  removerItemDoCarrinho,
}: ItemCarrinhoProps) {
  return (
    <>
      <tr key="1">
        <td>{itemCarrinho.nome}</td>
        <td>R$ {itemCarrinho.preco}</td>
        <td>{itemCarrinho.quantidade}</td>

        <td>R$ {(itemCarrinho.preco * itemCarrinho.quantidade).toFixed(2)}</td>
        <td>
          <button
            onClick={() => removerItemDoCarrinho(itemCarrinho.id)}
            className="btn btn-danger btn-sm"
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
