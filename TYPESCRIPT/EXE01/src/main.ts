export interface Lembrete {
    id: number;
    titulo: string;
    dataInsercao: Date;
    descricao: string;
}

let lembretes: Lembrete[] = [];
let lastId = 0;

function criarLembrete(titulo: string, descricao: string): Lembrete {
    const novoLembrete: Lembrete = {
        id: ++lastId,
        titulo,
        dataInsercao: new Date(),
        descricao,
    };
    lembretes.push(novoLembrete);
    return novoLembrete;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLembrete') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
        const descricao = (document.getElementById('descricao') as HTMLTextAreaElement).value;

        criarLembrete(titulo, descricao);
        atualizarListaLembretes();
        form.reset();
    });

    atualizarListaLembretes();
});

function atualizarListaLembretes() {
    const lista = document.getElementById('listaLembretes');
    if (!lista) {
        console.error("Elemento lista lembretes não encontrado");
        return;
    }
    lista.innerHTML = ''; // Limpa a lista atual

    lembretes.forEach(lembrete => {
        const item = document.createElement('li');
        item.textContent = `${lembrete.titulo} - Inserido em: ${lembrete.dataInsercao.toLocaleString()} - Descrição: ${lembrete.descricao}`;
        lista.appendChild(item);
    });
    console.log('Lista atualizada de lembretes:', lembretes); 
}
