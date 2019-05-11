export class Pessoa {

    pk: number;
    nome: string;
    sobrenome: string;
    matricula: string;
    cpf: string;

    constructor( pk: number, nome: string, sobrenome: string, matricula: string, cpf: string) {
        this.pk = pk;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.cpf = cpf;
    }

}
