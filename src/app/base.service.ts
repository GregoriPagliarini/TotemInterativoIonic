import { Injectable } from '@angular/core';
import { Pessoa } from './shared/classe.matricula';

@Injectable()
export class BaseService {
    home = false;
    trocaSenha = false;
    escolha = false;
    escolha2 = false;
    telaSucesso = false;
    headerTitle = '';
    footerOn = false;
    pessoaSelecionada: Pessoa = null;
    showBackButton = false;
    loading = false;
    baseUrl = 'http://192.168.0.60/tablet';
}
