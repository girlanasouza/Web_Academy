
import Image from 'next/image';
import CardProduto from '../CardProduto/CardProduto';


export default function ListagemProdutos() {
    return (
        <>
<h5 className="mb-3">Produtos disponíveis:</h5>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <CardProduto label="Notebook 1"/>
      <CardProduto label='Notebook 2'/>
      <CardProduto label='Notebook 3'/>
      <CardProduto label='Notebook 4'/>
      
    </div>
        </>
    )

}