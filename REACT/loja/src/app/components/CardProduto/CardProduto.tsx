

import Image from 'next/image';
import { Produto } from '@/app/types/produto';
import { useRouter } from "next/router";

interface CardProdutoProps {
    produto: Produto;
}
  
export default function CardProduto( { produto }: CardProdutoProps) {
    const router = useRouter();

    const showDetailsProduct = (nome: string) => {
      router.push(`/produto/${nome}`);
    }
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
                <h5 className="card-title">{produto.descricao}</h5>
                <p className="card-text text-secondary">{produto.preco}</p>
                <button 
                    className='btn btn-primary'>Adicionar no carrinho</button>
                </div>
            </div>
        </div>
    )

}