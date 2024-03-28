interface Product {
    modelo :string,
    fabricante:string,
    valor:number
}
// LIMPAR FORMULARIO TV
function limparFormularioTv() {
    const modeloTvInput = document.getElementById('modeloTv') as HTMLInputElement;
    const fabricanteTv = document.getElementById('fabricanteTv') as HTMLInputElement;
    const valorTv = document.getElementById('valorTv') as HTMLInputElement;
    const resolucaoTv = document.getElementById('resolucaoTv') as HTMLInputElement;
    const tamPolegadas = document.getElementById('tamPolegadas') as HTMLInputElement;
    if (modeloTvInput) modeloTvInput.value = '';
    if (fabricanteTv) fabricanteTv.value = '';
    if (valorTv) valorTv.value = '';
    if (resolucaoTv) resolucaoTv.value = '';
    if (tamPolegadas) tamPolegadas.value = '';
}

// LIMPAR FORMULARIO CELULAR
function limparFormularioCelular() {
    const modeloCelularInput = document.getElementById('modeloCelular') as HTMLInputElement;
    const fabricanteCelular = document.getElementById('fabricanteCelular') as HTMLInputElement;
    const valorCelular = document.getElementById('valorCelular') as HTMLInputElement;
    const memoriaCelular = document.getElementById('memoriaCelular') as HTMLInputElement;
    if (modeloCelularInput) modeloCelularInput.value = '';
    if (fabricanteCelular) fabricanteCelular.value = '';
    if (valorCelular) valorCelular.value = '';
    if (memoriaCelular) memoriaCelular.value = '';
}

// LIMPAR FORMULARIO BICICLETA
function limparFormularioBicicleta() {
    const modeloBicicleta = document.getElementById('modeloBicicleta') as HTMLInputElement;
    const fabricanteBicicleta = document.getElementById('fabricanteBicicleta') as HTMLInputElement;
    const valorBicicleta = document.getElementById('valorBicicleta') as HTMLInputElement;
    const aroBicicleta = document.getElementById('aroBicicleta') as HTMLInputElement;
    if (modeloBicicleta) modeloBicicleta.value = '';
    if (fabricanteBicicleta) fabricanteBicicleta.value = '';
    if (valorBicicleta) valorBicicleta.value = '';
    if (aroBicicleta) aroBicicleta.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const formModalTv = document.getElementById('botaoCriaTv');
    const formModalCelular = document.getElementById('botaoCriaCelular');
    const formModalBicicleta = document.getElementById('botaoCriaBicicleta');
    if (formModalTv){
        formModalTv.addEventListener('click', function(event) {
            event.preventDefault();
            const modeloTv = document.getElementById('modeloTv') as HTMLInputElement;
            const fabricanteTv = document.getElementById('fabricanteTv') as HTMLInputElement;
            const valorTv = document.getElementById('valorTv') as HTMLInputElement;
            const resolucaoTv = document.getElementById('resolucaoTv') as HTMLInputElement;
            const tamPolegadas = document.getElementById('tamPolegadas') as HTMLInputElement;
            if (modeloTv && fabricanteTv && valorTv && resolucaoTv && tamPolegadas){
                const novaTv = new TV(modeloTv.value, fabricanteTv.value, parseFloat(valorTv.value), resolucaoTv.value, parseInt(tamPolegadas.value));
            
                carrinho.adicionarProduto(novaTv);
                const totalCarrinho = carrinho.calcularTotal();

                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement) totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioCelular();

            }
        });
    }
    if (formModalCelular) {
        formModalCelular.addEventListener('click', function(event){
            event.preventDefault();
            const modeloCelular = document.getElementById('modeloCelular') as HTMLInputElement;
            const fabricanteCelular = document.getElementById('fabricanteCelular') as HTMLInputElement;
            const valorCelular = document.getElementById('valorCelular') as HTMLInputElement;
            const memoriaCelular = document.getElementById('memoriaCelular') as HTMLInputElement;
            if (modeloCelular && fabricanteCelular && valorCelular && memoriaCelular){
                const novoCelular =  new  Celular(modeloCelular.value, fabricanteCelular.value, parseInt(valorCelular.value), parseInt(memoriaCelular.value));
                carrinho.adicionarProduto(novoCelular);
                const totalCarrinho = carrinho.calcularTotal();
                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement) totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioTv();memoriaCelular.value

            }
        });
    }
    if (formModalBicicleta) {
        formModalBicicleta.addEventListener('click', function(event){
            event.preventDefault();
            const modeloBicicleta = document.getElementById('modeloBicicleta') as HTMLInputElement;
            const fabricanteBicicleta = document.getElementById('fabricanteBicicleta') as HTMLInputElement;
            const valorBicicleta = document.getElementById('valorBicicleta') as HTMLInputElement;
            const aroBicicleta = document.getElementById('aroBicicleta') as HTMLInputElement;
            if (modeloBicicleta && fabricanteBicicleta && valorBicicleta && aroBicicleta){
                const novaBicicleta =  new  Bicicleta(modeloBicicleta.value,fabricanteBicicleta.value,parseInt(valorBicicleta.value),parseInt(aroBicicleta.value));
                carrinho.adicionarProduto(novaBicicleta);
                const totalCarrinho = carrinho.calcularTotal();
                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement) totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioBicicleta();

            }
        });
    }
    
});

class TV implements Product {
    constructor (
        public modelo :string,
        public fabricante:string,
        public valor:number,
        public resolucao:string,
        public tamPolegadas:number
    ){}
}

class Celular implements Product {
    constructor(
        public modelo :string,
        public fabricante:string,
        public valor:number,
        public memoria: number
    ){}
}

class Bicicleta implements Product {
    constructor(
        public modelo :string,
        public fabricante:string,
        public valor:number,
        public tamanhoAro: number
    ){}
}

interface CarrinhoComprasInterface<T extends Product> {
    produtos : T[];
    adicionarProduto(produto: T): void;
    calcularTotal(): number;
}

class CarrinhoCompras <T extends Product> implements CarrinhoComprasInterface <T> {
    produtos: T[] = [];

    adicionarProduto(produto: T): void {
        this.produtos.push(produto);
    }
    calcularTotal(): number {
        return this.produtos.reduce((total,produto)=>total+produto.valor, 0);
    }
}

const carrinho = new CarrinhoCompras<Product>();
