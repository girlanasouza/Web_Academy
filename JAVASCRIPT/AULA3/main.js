class Unidade {
    constructor (nome, docentes){
        this.nome=nome;
        this.docentes=docentes;
    } 
    contrata (qtd){
        this.docentes+=qtd;
        console.log(this.docentes);
    }
    aposenta (qtd) {
        this.docentes-=qtd;
        console.log(this.docentes);
    }
    static maiorUnidade(unidades) {
        return unidades.sort(function (a,b){
            return a.docentes > b.docentes;
        })[0];  
    }
}

icomp = new Unidade('Icomp', 35);
ice = new Unidade('ICE', 28);
icomp.contrata(2)

console.log(Unidade.maiorUnidade([icomp, ice]))