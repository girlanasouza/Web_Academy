import { Chart } from 'chart.js';
import { Modal } from 'bootstrap';

class Aluno {
    constructor(
        public id: number,
        public nomeCompleto: string,
        public idade: number,
        public altura: number,
        public peso: number,

    ) {}
}

let lastId: number = 0;

function limparFormulario() {
    (document.getElementById('nomeCompleto') as HTMLInputElement).value = '';
    (document.getElementById('idade') as HTMLInputElement).value = '';
    (document.getElementById('altura') as HTMLInputElement).value = '';
    (document.getElementById('peso') as HTMLInputElement).value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoCriarLembrete = document.getElementById('botaoCriarAluno');
    if (botaoCriarLembrete) {
        console.log("botaos")
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
            const nomeCompleto = (document.getElementById('nomeCompleto') as HTMLInputElement).value;
            const idade = (document.getElementById('idade') as HTMLInputElement).value;
            const altura = (document.getElementById('altura') as HTMLInputElement).value;
            const peso = (document.getElementById('peso') as HTMLInputElement).value;
            const novoAluno = new Aluno(++lastId, nomeCompleto, parseInt(idade), parseFloat(altura), parseFloat(peso));
            turma.adicionarAluno(novoAluno);
            limparFormulario();
        });
    }
});

class Turma {
    private alunos: Aluno[] = [];
    private grafico?: Chart;
    private listenerSalvarEdicao?: () => void;


    constructor(public id: number, public nome: string) {}

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
        this.atualizarListaAlunos();
    }

    private atualizarListaAlunos(): void {
        const listaAlunosElement = document.getElementById('listaAlunos');
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        
        if (!listaAlunosElement) return;
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
    editarAluno(id: number) {
        const index = this.alunos.findIndex(aluno => aluno.id === id);
        if (index !== -1) {
            const aluno = this.alunos[index];
            const modalElement = document.getElementById('editarAlunoModal');
            if (modalElement instanceof HTMLElement) { // Assegura que modalElement é um HTMLElement
                (document.getElementById('novoNomeCompleto') as HTMLInputElement).value = aluno.nomeCompleto;
                (document.getElementById('novaIdade') as HTMLInputElement).value = aluno.idade.toString();
                (document.getElementById('novaAltura') as HTMLInputElement).value = aluno.altura.toString();
                (document.getElementById('novoPeso') as HTMLInputElement).value = aluno.peso.toString();
    
                const modal = new Modal(modalElement); // Utiliza a importação do Modal corretamente
                modal.show();
    
                const salvarEdicaoBtn = document.getElementById('salvarEdicaoBtn');
                if (salvarEdicaoBtn instanceof HTMLElement) { // Assegura que salvarEdicaoBtn é um HTMLElement
                    if (this.listenerSalvarEdicao) {
                        this.listenerSalvarEdicao();
                    
                    
                        salvarEdicaoBtn.removeEventListener('click', this.listenerSalvarEdicao); // Remove o listener anterior para evitar duplicatas
                        this.listenerSalvarEdicao = () => {
                            const novoNomeCompleto = (document.getElementById('novoNomeCompleto') as HTMLInputElement).value;
                            const novaIdade = parseInt((document.getElementById('novaIdade') as HTMLInputElement).value);
                            const novaAltura = parseFloat((document.getElementById('novaAltura') as HTMLInputElement).value); // Usar parseFloat para altura
                            const novoPeso = parseFloat((document.getElementById('novoPeso') as HTMLInputElement).value);
        
                            this.salvarEdicaoAluno(id, novoNomeCompleto, novaIdade, novaAltura, novoPeso);
                            this.atualizarEstatisticas();
                            this.atualizarListaAlunos();
                            modal.hide();
                        };
                    
                        salvarEdicaoBtn.addEventListener('click', this.listenerSalvarEdicao); // Adiciona o novo listener
                    }
                }
            }
        }
    }
    
    // Fora da classe Turma, adicione esta linha se não existir
     // Adicione isto na classe se estiver usando TypeScript
    
    salvarEdicaoAluno(id:number, nomeCompleto: string,  idade: number, altura: number, peso: number) {
        const aluno = turma.alunos.find(aluno => aluno.id === id);
        if (aluno) {
            aluno.nomeCompleto = nomeCompleto;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
    }
    
    removerAluno(id: number) : void {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
        this.atualizarEstatisticas();
    }
    getNumAlunos(): number {
        return this.alunos.length;
    }
    getMediaIdades():number {
        return this.calcularMedia(this.alunos.map(aluno=>aluno.idade));
    }
    getMediaAlturas(): number {
        return this.calcularMedia(this.alunos.map(aluno => aluno.altura));
    }

    getMediaPesos() : number {
        return this.calcularMedia(this.alunos.map(aluno=>aluno.peso));
    }

    private calcularMedia (valores: number[]): number {
        if (valores.length === 0) {
            return 0;
        }
        const soma = valores.reduce((acum,valor) => acum+valor, 0);
        return soma /  valores.length;
    }

    private atualizarEstatisticas(): void {
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
        const canvasElement = document.getElementById('meuGrafico') as HTMLCanvasElement;
        if (canvasElement) {
            const ctx = canvasElement.getContext('2d');
            if (ctx) {
                // Verifica se o gráfico já existe
                if (!this.grafico) {
                    // Se não existir, cria um novo gráfico
                    this.grafico = new Chart(ctx, {
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
                } else {
                    // Se o gráfico já existir, atualiza os dados
                    this.grafico.data.datasets[0].data = [this.getMediaIdades(), this.getMediaAlturas(), this.getMediaPesos()];
                    this.grafico.update();
                }
            }
        }
    }
    
   
    
    
}

const turma = new Turma(1, "Turma de Educação Física");
