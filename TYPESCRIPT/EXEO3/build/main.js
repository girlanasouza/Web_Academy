"use strict";
function limparFormularioTv() {
    const modeloTvInput = document.getElementById('modeloTv');
    const fabricanteTv = document.getElementById('fabricanteTv');
    const valorTv = document.getElementById('valorTv');
    const resolucaoTv = document.getElementById('resolucaoTv');
    const tamPolegadas = document.getElementById('tamPolegadas');
    if (modeloTvInput)
        modeloTvInput.value = '';
    if (fabricanteTv)
        fabricanteTv.value = '';
    if (valorTv)
        valorTv.value = '';
    if (resolucaoTv)
        resolucaoTv.value = '';
    if (tamPolegadas)
        tamPolegadas.value = '';
}
function limparFormularioCelular() {
    const modeloCelularInput = document.getElementById('modeloCelular');
    const fabricanteCelular = document.getElementById('fabricanteCelular');
    const valorCelular = document.getElementById('valorCelular');
    const memoriaCelular = document.getElementById('memoriaCelular');
    if (modeloCelularInput)
        modeloCelularInput.value = '';
    if (fabricanteCelular)
        fabricanteCelular.value = '';
    if (valorCelular)
        valorCelular.value = '';
    if (memoriaCelular)
        memoriaCelular.value = '';
}
function limparFormularioBicicleta() {
    const modeloBicicleta = document.getElementById('modeloBicicleta');
    const fabricanteBicicleta = document.getElementById('fabricanteBicicleta');
    const valorBicicleta = document.getElementById('valorBicicleta');
    const aroBicicleta = document.getElementById('aroBicicleta');
    if (modeloBicicleta)
        modeloBicicleta.value = '';
    if (fabricanteBicicleta)
        fabricanteBicicleta.value = '';
    if (valorBicicleta)
        valorBicicleta.value = '';
    if (aroBicicleta)
        aroBicicleta.value = '';
}
document.addEventListener('DOMContentLoaded', () => {
    const formModalTv = document.getElementById('botaoCriaTv');
    const formModalCelular = document.getElementById('botaoCriaCelular');
    const formModalBicicleta = document.getElementById('botaoCriaBicicleta');
    if (formModalTv) {
        formModalTv.addEventListener('click', function (event) {
            event.preventDefault();
            const modeloTv = document.getElementById('modeloTv');
            const fabricanteTv = document.getElementById('fabricanteTv');
            const valorTv = document.getElementById('valorTv');
            const resolucaoTv = document.getElementById('resolucaoTv');
            const tamPolegadas = document.getElementById('tamPolegadas');
            if (modeloTv && fabricanteTv && valorTv && resolucaoTv && tamPolegadas) {
                const novaTv = new TV(modeloTv.value, fabricanteTv.value, parseFloat(valorTv.value), resolucaoTv.value, parseInt(tamPolegadas.value));
                carrinho.adicionarProduto(novaTv);
                const totalCarrinho = carrinho.calcularTotal();
                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement)
                    totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioCelular();
            }
        });
    }
    if (formModalCelular) {
        formModalCelular.addEventListener('click', function (event) {
            event.preventDefault();
            const modeloCelular = document.getElementById('modeloCelular');
            const fabricanteCelular = document.getElementById('fabricanteCelular');
            const valorCelular = document.getElementById('valorCelular');
            const memoriaCelular = document.getElementById('memoriaCelular');
            if (modeloCelular && fabricanteCelular && valorCelular && memoriaCelular) {
                const novoCelular = new Celular(modeloCelular.value, fabricanteCelular.value, parseInt(valorCelular.value), parseInt(memoriaCelular.value));
                carrinho.adicionarProduto(novoCelular);
                const totalCarrinho = carrinho.calcularTotal();
                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement)
                    totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioTv();
                memoriaCelular.value;
            }
        });
    }
    if (formModalBicicleta) {
        formModalBicicleta.addEventListener('click', function (event) {
            event.preventDefault();
            const modeloBicicleta = document.getElementById('modeloBicicleta');
            const fabricanteBicicleta = document.getElementById('fabricanteBicicleta');
            const valorBicicleta = document.getElementById('valorBicicleta');
            const aroBicicleta = document.getElementById('aroBicicleta');
            if (modeloBicicleta && fabricanteBicicleta && valorBicicleta && aroBicicleta) {
                const novaBicicleta = new Bicicleta(modeloBicicleta.value, fabricanteBicicleta.value, parseInt(valorBicicleta.value), parseInt(aroBicicleta.value));
                carrinho.adicionarProduto(novaBicicleta);
                const totalCarrinho = carrinho.calcularTotal();
                const totalElement = document.getElementById('totalCarrinho');
                if (totalElement)
                    totalElement.textContent = 'R$ ' + totalCarrinho.toFixed(2);
                limparFormularioBicicleta();
            }
        });
    }
});
class TV {
    constructor(modelo, fabricante, valor, resolucao, tamPolegadas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.resolucao = resolucao;
        this.tamPolegadas = tamPolegadas;
    }
}
class Celular {
    constructor(modelo, fabricante, valor, memoria) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.memoria = memoria;
    }
}
class Bicicleta {
    constructor(modelo, fabricante, valor, tamanhoAro) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.tamanhoAro = tamanhoAro;
    }
}
class CarrinhoCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}
const carrinho = new CarrinhoCompras();
