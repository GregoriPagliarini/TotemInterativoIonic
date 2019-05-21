import { Injectable } from '@angular/core';
import { Pessoa } from './shared/classe.matricula';

@Injectable()
export class BaseService {
    headerTitle = '';
    pessoaSelecionada: Pessoa = null;
    showBackButton = false;
    loading = false;
    baseUrl = "http://127.0.0.1:8000";
}
