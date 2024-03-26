class Aluno {
    constructor(
        public id: number,
        public nomeCompleto: string,
        public idade: number,
        public altura: number,
        public peso: number
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

    constructor(public id: number, public nome: string) {}

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
        this.atualizarListaAlunos();
    }
    private atualizarListaAlunos(): void {
        const listaAlunosElement = document.getElementById('listaAlunos');
        if (!listaAlunosElement) return;
        listaAlunosElement.innerHTML = '';
        this.alunos.forEach(aluno => {
            const alunoElement = document.createElement('div');
            alunoElement.textContent = `ID: ${aluno.id}, Nome: ${aluno.nomeCompleto}, Idade: ${aluno.idade}, Altura: ${aluno.altura}, Peso: ${aluno.peso}`;
            listaAlunosElement.appendChild(alunoElement);
        });
    }
    editarAluno(id:number, novoAluno:Aluno): void {
        const index = this.alunos.findIndex(aluno => aluno.id === id);
        if (index!=-1){
            this.alunos[index]=novoAluno;
            this.atualizarEstatisticas();
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
        const estatisticasElement = document.getElementById('listaAlunos');
        if (!estatisticasElement) return;
        estatisticasElement.innerHTML = `
            <p>Número de Alunos: ${this.getNumAlunos()}</p>
            <p>Média de Idades: ${this.getMediaIdades().toFixed(2)}</p>
            <p>Média de Alturas: ${this.getMediaAlturas().toFixed(2)} cm</p>
            <p>Média de Pesos: ${this.getMediaPesos().toFixed(2)} kg</p>
        `;
    }
}

const turma = new Turma(1, "Turma de Educação Física");
