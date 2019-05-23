export class Pessoa {

    pk: number;
    nome: string;
    sobrenome: string;
    matricula: string;
    cpf: string;
    email: string;

    constructor(pk: number, nome: string, sobrenome: string, matricula: string,
                cpf: string, email: string) {
        this.pk = pk;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.email = email;
    }

}
