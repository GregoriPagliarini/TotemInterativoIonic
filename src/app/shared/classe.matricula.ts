export class Pessoa {

    pk: number;
    nome: string;
    sobrenome: string;
    matricula: string;
    cpf: string;
    email: string;
    senha_temporaria: string;
    senha_validade: string;

    constructor(pk: number, nome: string, sobrenome: string, matricula: string,
                cpf: string, email: string, senha_temporaria: string, senha_validade: string) {
        this.pk = pk;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.email = email;
        this.senha_temporaria = senha_temporaria;
        this.senha_validade = senha_validade;
    }

}
