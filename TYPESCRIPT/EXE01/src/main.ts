interface Lembrete {
    id: number;
    titulo: string;
    dataInsercao: Date;
    dataLimite?: Date;
    descricao?: string;
}

let lembretes: Lembrete[] = [];
let lastId = 0;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLembrete');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
            const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
            const dataLimite = (document.getElementById('dataLimite') as HTMLInputElement).value;
            criarLembrete(titulo, dataLimite || undefined, descricao || undefined);
            limparFormulario();
            atualizarListaLembretes();
            esconderFormulario();
        });
    
        
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const botaoCriarLembrete = document.getElementById('botaoCriarLembrete');
    if (botaoCriarLembrete) {
        botaoCriarLembrete.addEventListener('click', function() {
            const form = document.getElementById('formularioLembrete');
            if(form){
                if (form.style.display === 'none') {
                    form.style.display = 'block';
                } else {
                    form.style.display = 'none';
                }
            }
        
        });
    } 
});

function esconderFormulario(){
    const form = document.getElementById('formularioLembrete');
    if (form){
        form.style.display='none';
    }

}
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
    
    const novoLembrete: Lembrete = {
        id: ++lastId,
        titulo,
        dataInsercao: new Date(),
        descricao: descricao || undefined,
        dataLimite: dataLimite ? new Date(dataLimite) : undefined,
    };
    lembretes.push(novoLembrete);
    exibirLembrete(novoLembrete);
}

function exibirLembrete(lembrete: Lembrete): void {
    const listaLembretes = document.getElementById('listaLembretes');
    if (!listaLembretes) {
        console.error("Elemento listaLembretes não encontrado!");
        return;
    }

    const itemLembrete = document.createElement('div');
    itemLembrete.classList.add('lembrete');
    itemLembrete.dataset.id = lembrete.id.toString();

    const titulo = document.createElement('h3');
    titulo.textContent = lembrete.titulo;

    const dataInsercao = document.createElement('p');   
    dataInsercao.textContent = `Data de inserção: ${lembrete.dataInsercao.toLocaleString()}`;

    const dataLimite = document.createElement('p');
    dataLimite.textContent = lembrete.dataLimite ? `Data limite: ${lembrete.dataLimite.toLocaleString()}` : 'Data limite: N/A';

    const descricao = document.createElement('p');
    descricao.textContent = lembrete.descricao ? `Descrição: ${lembrete.descricao}` : 'Descrição: N/A';

    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.classList.add('btn', 'btn-warning'); 
    editarBtn.addEventListener('click', () => editarLembrete(lembrete.id));
    
    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.classList.add('btn', 'btn-danger');
    excluirBtn.addEventListener('click', () => excluirLembrete(lembrete.id));

    itemLembrete.appendChild(titulo);
    itemLembrete.appendChild(dataInsercao);
    itemLembrete.appendChild(dataLimite);
    itemLembrete.appendChild(descricao);
    itemLembrete.appendChild(editarBtn);
    itemLembrete.appendChild(excluirBtn);

    listaLembretes.appendChild(itemLembrete);
}

function editarLembrete(id: number): void {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        const modalElement = document.getElementById('editarLembreteModal');
        if (modalElement) {
            (document.getElementById('novoTitulo') as HTMLInputElement).value = lembrete.titulo || '';
            (document.getElementById('novaDescricao') as HTMLInputElement).value = lembrete.descricao || '';
            (document.getElementById('novaDataLimite') as HTMLInputElement).value = lembrete.dataLimite ? lembrete.dataLimite.toISOString().substring(0, 10) : '';
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
            const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
            if (salvarEdicaoBtn) {
                salvarEdicaoBtn.addEventListener('click', () => {
                    const novoTitulo = (document.getElementById('novoTitulo') as HTMLInputElement).value;
                    const novaDescricao = (document.getElementById('novaDescricao') as HTMLInputElement).value;
                    const novaDataLimite = (document.getElementById('novaDataLimite') as HTMLInputElement).value;
                    salvarEdicaoLembrete(id, novoTitulo, novaDataLimite, novaDescricao, lembrete.dataInsercao);
                    atualizarListaLembretes();
                    modal.hide();
                });
            }
        }
    }
}

function salvarEdicaoLembrete(id: number, titulo: string, dataLimite: string, descricao: string, dataInsercao: Date) {
    const lembrete = encontrarLembrete(id);
    if (lembrete) {
        lembrete.titulo = titulo;
        lembrete.descricao = descricao || undefined;
        lembrete.dataLimite = dataLimite ? new Date(dataLimite) : undefined;
        lembrete.dataInsercao = dataInsercao;
    }
}

function excluirLembrete(id: number): void {
    lembretes = lembretes.filter(lembrete => lembrete.id !== id);
    const itemLembrete = document.querySelector(`.lembrete[data-id="${id}"]`);
    if (itemLembrete) {
        itemLembrete.remove();
    }
}
function encontrarLembrete(id: number): Lembrete | undefined {
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
