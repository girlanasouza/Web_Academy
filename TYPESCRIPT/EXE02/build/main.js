"use strict";
class Aluno {
    constructor(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
let lastId = 0;
function limparFormulario() {
    document.getElementById('nomeCompletoModal').value = '';
    document.getElementById('idadeModal').value = '';
    document.getElementById('alturaModal').value = '';
    document.getElementById('pesoModal').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
    const formModal = document.getElementById('formAlunoModal');
    if (formModal) {
        formModal.addEventListener('submit', function (event) {
            event.preventDefault();
            const nomeCompletoElement = document.getElementById('nomeCompletoModal');
            const idadeElement = document.getElementById('idadeModal');
            const alturaElement = document.getElementById('alturaModal');
            const pesoElement = document.getElementById('pesoModal');
            if (nomeCompletoElement && idadeElement && alturaElement && pesoElement) {
                const nomeCompleto = nomeCompletoElement.value;
                const idade = idadeElement.value;
                const altura = alturaElement.value;
                const peso = pesoElement.value;
                const novoAluno = new Aluno(++lastId, nomeCompleto, parseInt(idade), parseFloat(altura), parseFloat(peso));
                turma.adicionarAluno(novoAluno);
            }
            limparFormulario();
            const modal = document.getElementById('modalAluno');
            if (modal) {
                const modalElement = bootstrap.Modal.getInstance(modal);
                if (modalElement)
                    modalElement.hide();
            }
        });
    }
});
class Turma {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
        this.atualizarListaAlunos();
    }
    atualizarListaAlunos() {
        const table = document.createElement('table');
        table.classList.add('table', 'table-striped', 'table-hover', 'custom-table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Id', 'Nome', 'Idade', 'Altura', 'Peso'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            header.scope = 'col';
            headerRow.appendChild(header);
        });
        const actionHeader = document.createElement('th');
        actionHeader.textContent = 'Ações';
        actionHeader.scope = 'col';
        headerRow.appendChild(actionHeader);
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
        const container = document.getElementById('listaAlunos');
        if (!container)
            return;
        container.innerHTML = '';
        this.alunos.forEach(aluno => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            idCell.textContent = aluno.id.toString();
            row.appendChild(idCell);
            const nomeCompletoCell = document.createElement('td');
            nomeCompletoCell.textContent = aluno.nomeCompleto;
            row.appendChild(nomeCompletoCell);
            const idadeCell = document.createElement('td');
            idadeCell.textContent = aluno.idade.toString();
            row.appendChild(idadeCell);
            const alturaCell = document.createElement('td');
            alturaCell.textContent = aluno.altura.toString();
            row.appendChild(alturaCell);
            const pesoCell = document.createElement('td');
            pesoCell.textContent = aluno.peso.toString();
            row.appendChild(pesoCell);
            const actionsCell = document.createElement('td');
            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'Excluir';
            excluirBtn.classList.add('btn', 'btn-danger', 'mx-1');
            excluirBtn.addEventListener('click', () => {
                lastId -= 1;
                this.removerAluno(aluno.id);
                this.atualizarListaAlunos();
            });
            actionsCell.appendChild(excluirBtn);
            const editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.classList.add('btn', 'btn-warning', 'mx-1');
            editarBtn.addEventListener('click', () => {
                console.log("editar");
                this.editarAluno(aluno.id);
                this.atualizarListaAlunos();
            });
            actionsCell.appendChild(editarBtn);
            row.appendChild(actionsCell);
            tableBody.appendChild(row);
        });
        container.appendChild(table);
    }
    editarAluno(id) {
        const index = this.alunos.findIndex(aluno => aluno.id === id);
        if (index !== -1) {
            const aluno = this.alunos[index];
            const modalElement = document.getElementById('editarAlunoModal');
            if (modalElement) {
                console.log("editar dentro dentro dentro");
                document.getElementById('novoNomeCompleto').value = aluno.nomeCompleto;
                document.getElementById('novaIdade').value = aluno.idade.toString();
                document.getElementById('novaAltura').value = aluno.altura.toString();
                document.getElementById('novoPeso').value = aluno.peso.toString();
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
                const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
                if (salvarEdicaoBtn) {
                    salvarEdicaoBtn.addEventListener('click', () => {
                        const novoNomeCompleto = document.getElementById('novoNomeCompleto').value;
                        const novaIdade = parseInt(document.getElementById('novaIdade').value);
                        const novaAltura = parseInt(document.getElementById('novaAltura').value);
                        const novoPeso = parseFloat(document.getElementById('novoPeso').value);
                        this.salvarEdicaoAluno(id, novoNomeCompleto, novaIdade, novaAltura, novoPeso);
                        this.atualizarEstatisticas();
                        this.atualizarListaAlunos();
                        modal.hide();
                    });
                }
            }
        }
    }
    salvarEdicaoAluno(id, nomeCompleto, idade, altura, peso) {
        const aluno = turma.alunos.find(aluno => aluno.id === id);
        if (aluno) {
            aluno.nomeCompleto = nomeCompleto;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
    }
    removerAluno(id) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
        this.atualizarEstatisticas();
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        return this.calcularMedia(this.alunos.map(aluno => aluno.idade));
    }
    getMediaAlturas() {
        return this.calcularMedia(this.alunos.map(aluno => aluno.altura));
    }
    getMediaPesos() {
        return this.calcularMedia(this.alunos.map(aluno => aluno.peso));
    }
    calcularMedia(valores) {
        if (valores.length === 0) {
            return 0;
        }
        const soma = valores.reduce((acum, valor) => acum + valor, 0);
        return soma / valores.length;
    }
    atualizarEstatisticas() {
        const nrAlunosElement = document.getElementById('nrAlunos');
        if (nrAlunosElement) {
            nrAlunosElement.textContent = `Número de Alunos: ${this.getNumAlunos()}`;
        }
        const medIdadesElement = document.getElementById('medIdades');
        if (medIdadesElement) {
            medIdadesElement.textContent = `Média de Idades: ${this.getMediaIdades().toFixed(2)}`;
        }
        const medAlturasElement = document.getElementById('medAlturas');
        if (medAlturasElement) {
            medAlturasElement.textContent = `Média de Alturas: ${this.getMediaAlturas().toFixed(2)} cm`;
        }
        const medPesosElement = document.getElementById('medPesos');
        if (medPesosElement) {
            medPesosElement.textContent = `Média de Pesos: ${this.getMediaPesos().toFixed(2)} kg`;
        }
    }
}
const turma = new Turma(1, "Turma de Educação Física");
