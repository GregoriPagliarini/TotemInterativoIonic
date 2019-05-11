import { Injectable } from '@angular/core';
import { Pessoa } from './shared/classe.matricula';

@Injectable()
export class BaseService {
    headerTitle = '';
    pessoaSelecionada: Pessoa = null;
}
