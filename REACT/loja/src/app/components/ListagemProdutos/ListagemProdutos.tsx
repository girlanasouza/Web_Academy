
import Image from 'next/image';
import CardProduto from '../CardProduto/CardProduto';
import { Produto } from '../Produto/Produto';

interface ListagemProdutosProps {
    adicionarAoCarrinho: (produto: Produto) => void;
}

export default function ListagemProdutos({
    adicionarAoCarrinho
}: ListagemProdutosProps) {
    return (
    <>
        <h5 className="mb-3">Produtos disponíveis:</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            <CardProduto produto={{ label: 'Notebook 1', preco: 1500 }} adicionarAoCarrinho={adicionarAoCarrinho} />
            <CardProduto produto={{ label: 'Notebook 2', preco: 1000 }} adicionarAoCarrinho={adicionarAoCarrinho} />
            <CardProduto produto={{label:'Notebook 3', preco:200}} adicionarAoCarrinho={adicionarAoCarrinho}/>
            <CardProduto produto={{ label:'Notebook 4', preco:100}} adicionarAoCarrinho={adicionarAoCarrinho}/>
        
        </div>
    </>
    )

}