import Image from 'next/image';
import CardProduto from '../CardProduto/CardProduto';
import { Produto } from '@/app/types/produto';

interface IListagemProdutos {
    produtos: Produto[];
    // adicionarAoCarrinho: (produto: Produto) => void;
}

export default function ListagemProdutos({
    produtos,
    // adicionarAoCarrinho,
}: IListagemProdutos) {
    return (
        <>
            <h5 className="mb-3">Produtos disponíveis:</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {produtos.map((produto) => (
                    <CardProduto 
                        key={produto.id} 
                        produto={produto} 
                    />
                ))}
            </div>
        </>
    );
}
