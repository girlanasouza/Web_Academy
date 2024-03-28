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
    const novoLembrete = {
        id: ++lastId,
        titulo,
        dataInsercao: new Date(),
        descricao: descricao || undefined,
        dataLimite: dataLimite ? new Date(dataLimite) : undefined,
    };
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
    titulo.textContent = lembrete.titulo;
    const dataInsercao = document.createElement('p');
    dataInsercao.textContent = `Data de inserção: ${lembrete.dataInsercao.toLocaleString()}`;
    const dataLimite = document.createElement('p');
    dataLimite.textContent = lembrete.dataLimite ? `Data limite: ${lembrete.dataLimite.toLocaleString()}` : 'Data limite: N/A';
    const descricao = document.createElement('p');
    descricao.textContent = lembrete.descricao ? `Descrição: ${lembrete.descricao}` : 'Descrição: N/A';
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
    editarBtn.addEventListener('click', () => editarLembrete(lembrete.id));
    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.classList.add('btn', 'btn-danger', 'ml-2');
    excluirBtn.addEventListener('click', () => excluirLembrete(lembrete.id));
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
            document.getElementById('novoTitulo').value = lembrete.titulo || '';
            document.getElementById('novaDescricao').value = lembrete.descricao || '';
            document.getElementById('novaDataLimite').value = lembrete.dataLimite ? lembrete.dataLimite.toISOString().substring(0, 10) : '';
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
            const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
            if (salvarEdicaoBtn) {
                salvarEdicaoBtn.addEventListener('click', () => {
                    const novoTitulo = document.getElementById('novoTitulo').value;
                    const novaDescricao = document.getElementById('novaDescricao').value;
                    const novaDataLimite = document.getElementById('novaDataLimite').value;
                    salvarEdicaoLembrete(id, novoTitulo, novaDataLimite, novaDescricao, lembrete.dataInsercao);
                    atualizarListaLembretes();
                    modal.hide();
                });
            }
        }
    }
}
function excluirLembrete(id) {
    lembretes = lembretes.filter(lembrete => lembrete.id !== id);
    atualizarListaLembretes();
}
function salvarEdicaoLembrete(id, titulo, dataLimite, descricao, dataInsercao) {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        lembrete.titulo = titulo;
        lembrete.descricao = descricao || undefined;
        lembrete.dataLimite = dataLimite ? new Date(dataLimite) : undefined;
        lembrete.dataInsercao = dataInsercao;
    }
}
function encontrarLembrete(id) {
    return lembretes.find(lembrete => lembrete.id === id);
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
