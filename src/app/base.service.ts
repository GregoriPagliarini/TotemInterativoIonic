import { Injectable } from '@angular/core';
import { Pessoa } from './shared/classe.matricula';

@Injectable()
export class BaseService {
    home = true;
    trocaSenha = true;
    escolha = true;
    escolha2 = true;
    telaSucesso = true;
    botaoInicial = false;
    headerTitle = '';
    footerOn = false;
    pessoaSelecionada: Pessoa = null;
    showBackButton = false;
    loading = false;
    baseUrl = 'http://127.0.0.1:8000';
}
