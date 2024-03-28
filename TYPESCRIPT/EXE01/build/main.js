"use strict";
let lembretes = [];
let lastId = 0;
document.addEventListener('DOMContentLoaded', () => {
    const formModalLembrete = document.getElementById('botaoAdicionarLembrete');
    if (formModalLembrete) {
        formModalLembrete.addEventListener('click', function (event) {
            event.preventDefault();
            const titulo = document.getElementById('titulo').value;
            const descricao = document.getElementById('descricao').value;
            const dataLimite = document.getElementById('dataLimite').value;
            criarLembrete(titulo, dataLimite || undefined, descricao || undefined);
            limparFormulario();
            atualizarListaLembretes();
        });
    }
});
function limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('dataLimite').value = '';
}
function criarLembrete(titulo, dataLimite, descricao) {
    if (!titulo) {
        console.error("Necessário adicionar um título!!!");
        return;
    }
    const novoLembrete = [
        ++lastId,
        titulo,
        new Date(),
        dataLimite ? new Date(dataLimite) : undefined,
        descricao
    ];
    lembretes.push(novoLembrete);
    exibirLembrete(novoLembrete);
}
function exibirLembrete(lembrete) {
    const listaLembretes = document.getElementById('listaLembretes');
    if (!listaLembretes) {
        console.error("Elemento listaLembretes não encontrado!");
        return;
    }
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'align-items-center', 'justify-content-between');
    const textoContainer = document.createElement('div');
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = lembrete[1];
    const dataInsercao = document.createElement('p');
    dataInsercao.textContent = `Data de inserção: ${lembrete[2].toLocaleString()}`;
    const dataLimite = document.createElement('p');
    dataLimite.textContent = lembrete[3] ? `Data limite: ${lembrete[3].toLocaleString()}` : 'Data limite: N/A';
    const descricao = document.createElement('p');
    descricao.textContent = lembrete[4] ? `Descrição: ${lembrete[4]}` : 'Descrição: N/A';
    textoContainer.appendChild(titulo);
    textoContainer.appendChild(dataInsercao);
    textoContainer.appendChild(dataLimite);
    textoContainer.appendChild(descricao);
    const imagem = document.createElement('img');
    imagem.src = 'assets/imagens/leia.jpeg';
    imagem.classList.add('img-fluid', 'ml-3');
    imagem.style.maxWidth = '25vw';
    imagem.style.maxHeight = '25vh';
    cardBody.appendChild(textoContainer);
    cardBody.appendChild(imagem);
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.classList.add('btn', 'btn-warning', 'ml-2');
    editarBtn.addEventListener('click', () => editarLembrete(lembrete[0]));
    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.classList.add('btn', 'btn-danger', 'ml-2');
    excluirBtn.addEventListener('click', () => excluirLembrete(lembrete[0]));
    textoContainer.appendChild(editarBtn);
    textoContainer.appendChild(excluirBtn);
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(cardBody);
    const col = document.createElement('div');
    col.classList.add('col');
    col.appendChild(card);
    const row = document.createElement('div');
    row.classList.add('row');
    row.appendChild(col);
    listaLembretes.appendChild(row);
}
function editarLembrete(id) {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        const modalElement = document.getElementById('editarLembreteModal');
        if (modalElement) {
            document.getElementById('novoTitulo').value = lembrete[1] || '';
            document.getElementById('novaDescricao').value = lembrete[4] || '';
            document.getElementById('novaDataLimite').value = lembrete[3] ? lembrete[3].toISOString().substring(0, 10) : '';
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
            const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
            if (salvarEdicaoBtn) {
                salvarEdicaoBtn.addEventListener('click', () => {
                    const novoTitulo = document.getElementById('novoTitulo').value;
                    const novaDescricao = document.getElementById('novaDescricao').value;
                    const novaDataLimite = document.getElementById('novaDataLimite').value;
                    salvarEdicaoLembrete(id, novoTitulo, novaDataLimite, novaDescricao, lembrete[2]);
                    atualizarListaLembretes();
                    modal.hide();
                });
            }
        }
    }
}
function excluirLembrete(id) {
    lembretes = lembretes.filter(lembrete => lembrete[0] !== id);
    atualizarListaLembretes();
}
function salvarEdicaoLembrete(id, titulo, dataLimite, descricao, dataInsercao) {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        lembrete[1] = titulo;
        lembrete[4] = descricao || undefined;
        lembrete[3] = dataLimite ? new Date(dataLimite) : undefined;
        lembrete[2] = dataInsercao;
    }
}
function encontrarLembrete(id) {
    return lembretes.find(lembrete => lembrete[0] === id);
}
function atualizarListaLembretes() {
    const listaLembretes = document.getElementById('listaLembretes');
    if (!listaLembretes) {
        console.error("Elemento listaLembretes não encontrado!");
        return;
    }
    listaLembretes.innerHTML = '';
    lembretes.forEach(lembrete => {
        exibirLembrete(lembrete);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    atualizarListaLembretes();
});
