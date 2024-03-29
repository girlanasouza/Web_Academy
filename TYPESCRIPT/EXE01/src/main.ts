type Lembrete = [id: number, titulo: string, dataInsercao: Date, dataLimite?: Date, descricao?: string];

let lembretes: Lembrete[] = [];
let lastId = 0;

document.addEventListener('DOMContentLoaded', () => {
    const formModalLembrete = document.getElementById('botaoAdicionarLembrete');
    if (formModalLembrete) {
        formModalLembrete.addEventListener('click', function(event) {
            event.preventDefault(); 
            const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
            const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
            const dataLimite = (document.getElementById('dataLimite') as HTMLInputElement).value;
            criarLembrete(titulo, dataLimite || undefined, descricao || undefined);
            limparFormulario();
            atualizarListaLembretes();
            const modal = document.getElementById('criarLembreteModal');
            if (modal) {
                const modalElement = bootstrap.Modal.getInstance(modal);
                if (modalElement) modalElement.hide();
            }
        }); 
        
    }
});

function limparFormulario() {
    (document.getElementById('titulo') as HTMLInputElement).value = '';
    (document.getElementById('descricao') as HTMLInputElement).value = '';
    (document.getElementById('dataLimite') as HTMLInputElement).value = '';
}

function criarLembrete(titulo: string, dataLimite: string | undefined, descricao: string | undefined): void {
    if (!titulo) {
        console.error("Necessário adicionar um título!!!");
        return;
    }
    const novoLembrete: Lembrete = [
        ++lastId,
        titulo,
        new Date(),
        dataLimite ? new Date(dataLimite) : undefined,
        descricao
    ];
    lembretes.push(novoLembrete);
    exibirLembrete(novoLembrete);
}



function exibirLembrete(lembrete:Lembrete) {
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
    dataInsercao.textContent = `Data de inserção: ${lembrete[2].toLocaleString()}`; // Usando o índice correto [2] para dataInsercao
    
    const dataLimite = document.createElement('p');
    dataLimite.textContent = lembrete[3] ? `Data limite: ${lembrete[3].toLocaleString()}` : 'Data limite: N/A'; // Índice [3] está correto para dataLimite
    
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

function editarLembrete(id: number): void {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        const modalElement = document.getElementById('editarLembreteModal');
        if (modalElement) {
            (document.getElementById('novoTitulo') as HTMLInputElement).value = lembrete[1] || '';
            (document.getElementById('novaDescricao') as HTMLInputElement).value = lembrete[4] || '';
            (document.getElementById('novaDataLimite') as HTMLInputElement).value = lembrete[3] ? lembrete[3].toISOString().substring(0, 10) : '';
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
            const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
            if (salvarEdicaoBtn) {
                salvarEdicaoBtn.addEventListener('click', () => {
                    const novoTitulo = (document.getElementById('novoTitulo') as HTMLInputElement).value;
                    const novaDescricao = (document.getElementById('novaDescricao') as HTMLInputElement).value;
                    const novaDataLimite = (document.getElementById('novaDataLimite') as HTMLInputElement).value;
                    salvarEdicaoLembrete(id, novoTitulo, novaDataLimite, novaDescricao, lembrete[2]);
                    atualizarListaLembretes();
                    modal.hide();
                });
            }
        }
    }
}

function excluirLembrete(id: number): void {
    lembretes = lembretes.filter(lembrete => lembrete[0] !== id);
    atualizarListaLembretes();
}

function salvarEdicaoLembrete(id: number, titulo: string, dataLimite: string, descricao: string, dataInsercao: Date) {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        lembrete[1] = titulo;
        lembrete[4] = descricao || undefined;
        lembrete[3] = dataLimite ? new Date(dataLimite) : undefined;
        lembrete[2] = dataInsercao;
    }
}

function encontrarLembrete(id: number): Lembrete | undefined {
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
