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
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAluno');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const idade = document.getElementById('idade').value;
            const altura = document.getElementById('altura').value;
            const peso = document.getElementById('peso').value;
            const novoAluno = new Aluno(++lastId, nomeCompleto, parseInt(idade), parseFloat(altura), parseFloat(peso));
            turma.adicionarAluno(novoAluno);
            limparFormulario();
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
        const listaAlunosElement = document.getElementById('listaAlunos');
        if (!listaAlunosElement)
            return;
        listaAlunosElement.innerHTML = '';
        this.alunos.forEach(aluno => {
            const alunoElement = document.createElement('div');
            alunoElement.textContent = `ID: ${aluno.id}, Nome: ${aluno.nomeCompleto}, Idade: ${aluno.idade}, Altura: ${aluno.altura}, Peso: ${aluno.peso}`;
            listaAlunosElement.appendChild(alunoElement);
        });
    }
    editarAluno(id, novoAluno) {
        const index = this.alunos.findIndex(aluno => aluno.id === id);
        if (index != -1) {
            this.alunos[index] = novoAluno;
            this.atualizarEstatisticas();
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
        const estatisticasElement = document.getElementById('listaAlunos');
        if (!estatisticasElement)
            return;
        estatisticasElement.innerHTML = `
            <p>Número de Alunos: ${this.getNumAlunos()}</p>
            <p>Média de Idades: ${this.getMediaIdades().toFixed(2)}</p>
            <p>Média de Alturas: ${this.getMediaAlturas().toFixed(2)} cm</p>
            <p>Média de Pesos: ${this.getMediaPesos().toFixed(2)} kg</p>
        `;
    }
}
const turma = new Turma(1, "Turma de Educação Física");
