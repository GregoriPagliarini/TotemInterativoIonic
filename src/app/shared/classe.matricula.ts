export class Pessoa {

    pk: number;
    nome: string;
    sobrenome: string;
    matricula: number;
    cpf: number;

    constructor( pk: number, nome: string, sobrenome: string, matricula: number, cpf: number){
        this.pk = pk;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.cpf = cpf;
    }

}
