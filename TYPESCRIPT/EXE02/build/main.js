"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
const bootstrap_1 = require("bootstrap");
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
    const botaoCriarLembrete = document.getElementById('botaoCriarAluno');
    if (botaoCriarLembrete) {
        console.log("botaos");
        botaoCriarLembrete.addEventListener('click', function () {
            const form = document.getElementById('formAluno');
            if (form) {
                if (form.style.display === 'none') {
                    form.style.display = 'block';
                }
                else {
                    form.style.display = 'none';
                }
            }
        });
    }
});
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
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        if (!listaAlunosElement)
            return;
        listaAlunosElement.innerHTML = '';
        this.alunos.forEach(aluno => {
            const alunoElement = document.createElement('div');
            alunoElement.textContent = `ID: ${aluno.id}, Nome: ${aluno.nomeCompleto}, Idade: ${aluno.idade}, Altura: ${aluno.altura}, Peso: ${aluno.peso}`;
            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'Excluir';
            excluirBtn.classList.add('btn', 'btn-danger', 'ml-2');
            excluirBtn.addEventListener('click', () => {
                this.removerAluno(aluno.id);
                this.atualizarListaAlunos();
            });
            const editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.classList.add('btn', 'btn-warning', 'ml-2');
            editarBtn.addEventListener('click', () => {
                console.log("editar");
                this.editarAluno(aluno.id);
                this.atualizarListaAlunos();
            });
            alunoElement.appendChild(excluirBtn);
            alunoElement.appendChild(editarBtn);
            listaAlunosElement.appendChild(alunoElement);
            this.atualizarGrafico();
        });
    }
    editarAluno(id) {
        const index = this.alunos.findIndex(aluno => aluno.id === id);
        if (index !== -1) {
            const aluno = this.alunos[index];
            const modalElement = document.getElementById('editarAlunoModal');
            if (modalElement instanceof HTMLElement) {
                document.getElementById('novoNomeCompleto').value = aluno.nomeCompleto;
                document.getElementById('novaIdade').value = aluno.idade.toString();
                document.getElementById('novaAltura').value = aluno.altura.toString();
                document.getElementById('novoPeso').value = aluno.peso.toString();
                const modal = new bootstrap_1.Modal(modalElement);
                modal.show();
                const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
                if (salvarEdicaoBtn instanceof HTMLElement) {
                    if (this.listenerSalvarEdicao) {
                        this.listenerSalvarEdicao();
                        salvarEdicaoBtn.removeEventListener('click', this.listenerSalvarEdicao);
                        this.listenerSalvarEdicao = () => {
                            const novoNomeCompleto = document.getElementById('novoNomeCompleto').value;
                            const novaIdade = parseInt(document.getElementById('novaIdade').value);
                            const novaAltura = parseFloat(document.getElementById('novaAltura').value);
                            const novoPeso = parseFloat(document.getElementById('novoPeso').value);
                            this.salvarEdicaoAluno(id, novoNomeCompleto, novaIdade, novaAltura, novoPeso);
                            this.atualizarEstatisticas();
                            this.atualizarListaAlunos();
                            modal.hide();
                        };
                        salvarEdicaoBtn.addEventListener('click', this.listenerSalvarEdicao);
                    }
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
    atualizarGrafico() {
        const canvasElement = document.getElementById('meuGrafico');
        if (canvasElement) {
            const ctx = canvasElement.getContext('2d');
            if (ctx) {
                if (!this.grafico) {
                    this.grafico = new chart_js_1.Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["Idade", "Altura", "Peso"],
                            datasets: [{
                                    label: 'Médias dos Alunos',
                                    data: [this.getMediaIdades(), this.getMediaAlturas(), this.getMediaPesos()],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
                else {
                    this.grafico.data.datasets[0].data = [this.getMediaIdades(), this.getMediaAlturas(), this.getMediaPesos()];
                    this.grafico.update();
                }
            }
        }
    }
}
const turma = new Turma(1, "Turma de Educação Física");
