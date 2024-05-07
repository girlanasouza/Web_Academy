import { ItemCarrinho } from '@/app/types/carrinho';


interface ItemCarrinhoProps {
    itemCarrinho: ItemCarrinho;
}


export default function ItemCarrinho({itemCarrinho}: ItemCarrinhoProps) {
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

            <td>R$ {(itemCarrinho.preco*itemCarrinho.quantidade).toFixed(2)}</td>
            <td>
            <button className="btn btn-danger btn-sm">
                Remover
            </button>
            </td>
        </tr>
        </>
    )


}