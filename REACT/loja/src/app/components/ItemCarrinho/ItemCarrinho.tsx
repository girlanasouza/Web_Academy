
interface ItemCarrinho {
    id: string;
    nome: string;
    preco: number;
    quantidade:number;
}


export default function ItemCarrinho({label}: ItemCarrinho) {
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
    ): number => precoUnitario * quantidade;
    
    return (
        <>
            <tr key="1">
            <td>{label}</td>
            <td>R$ {(1500).toFixed(2)}</td>
            <td>2</td>

            <td>R$ {valorTotalProduto(1500, 2).toFixed(2)}</td>
            <td>
            <button className="btn btn-danger btn-sm">
                Remover
            </button>
            </td>
        </tr>
        </>
    )


}