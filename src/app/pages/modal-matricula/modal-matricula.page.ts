import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Pessoa } from 'src/app/shared/classe.matricula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-modal-matricula',
  templateUrl: './modal-matricula.page.html',
  styleUrls: ['./modal-matricula.page.scss'],
})
export class ModalMatriculaPage {

  ERRO_GERAL_CPF = 'Você não informou o CPF';
  ERRO_CPF_INVALIDA = 'CPF inválido';
  ERRO_MULTIPLAS_MATRICULAS = 'Múltiplas matrículas encontradas';

  mensagemErroCpf = null;
  cpf: string;
  pessoa$: Observable<Pessoa>;

  constructor(private nav: NavController,
    public httpClient: HttpClient,
    private baseService: BaseService) { }

  getMatricula() {

    if (this.cpf) {

      const url = this.baseService.baseUrl + '/tablet/consulta/';
      this.httpClient.post<any>(url, { 'dado': this.cpf, }).subscribe(

        (retorno: any) => {
          const pessoas = retorno.pessoas;
          if (pessoas.length > 1) {
            this.mensagemErroCpf = this.ERRO_MULTIPLAS_MATRICULAS;
          } else {
            const pessoaDict = pessoas[0];
            const pessoa = new Pessoa(pessoaDict.pk,
              pessoaDict.nome,
              pessoaDict.sobrenome,
              pessoaDict.matricula,
              pessoaDict.cpf,
              pessoaDict.email,
              pessoaDict.senha_temporaria,
              pessoaDict.senha_validade);
            this.baseService.pessoaSelecionada = pessoa;
            this.nav.navigateForward('/tela-escolha2');
          }
        },
        (error: any) => {
          this.mensagemErroCpf = this.ERRO_CPF_INVALIDA;
        }
      );
    } else {
      this.mensagemErroCpf = this.ERRO_GERAL_CPF;
    }
  }

  digitando() {
    this.mensagemErroCpf = this.cpf.length === 0 ? this.ERRO_GERAL_CPF : null;
  }

}
