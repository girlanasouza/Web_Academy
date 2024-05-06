export interface Foto {
    titulo: string;
    src: string;
  }
  
export interface Produto {
    id: string;
    nome: string;
    preco: string;
    fotos: Foto[];
    descricao: string;
    vendido: string;
    usuario_id: string;
}
