

import Image from 'next/image';
import { Produto } from '../Produto/Produto';


interface CardProdutoProps{
    produto: Produto;
    adicionarAoCarrinho:(produto: Produto)=>void;
}

export default function CardProduto( {
    produto,
    adicionarAoCarrinho
}: CardProdutoProps) {
    
    return (
        <div className="col">
            <div className="card shadow-sm h-100">
                <Image
                    src="/placeholder.png"
                    className="card-img-top"
                    alt="imagem placeholder"
                    width={300}
                    height={320}
                />
            
                <div className="card-body bg-light">
                <h5 className="card-title">{produto.label}</h5>
                <p className="card-text text-secondary">{produto.preco}</p>
                <button 
                    className='btn btn-primary'
                    onClick={() => adicionarAoCarrinho(produto)}>Adicionar no carrinho</button>
                </div>
            </div>
        </div>
    )

}