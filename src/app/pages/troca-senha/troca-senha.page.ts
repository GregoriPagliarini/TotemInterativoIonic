import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../../shared/classe.matricula';
import { ModalMatriculaPage } from '../modal-matricula/modal-matricula.page';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.page.html',
  styleUrls: ['./troca-senha.page.scss'],

})
export class TrocaSenhaPage {

  ERRO_GERAL_MATRICULA = 'Você não informou matrícula';
  ERRO_MATRICULA_INVALIDA = 'Matrícula inválida';
  ERRO_MULTIPLAS_MATRICULAS = 'Múltiplas matrículas encontradas';

  mensagemErroMatricula = null;
  matricula: string;

  @ViewChild('nomeInput') nomeInput;

  constructor(private nav: NavController,
    private modalmatriculaController: ModalController,
    public baseService: BaseService,
    public httpClient: HttpClient
  ) { }

  getPesquisaMatricula() {
    if (this.matricula) {
      this.baseService.loading = true;
      const url = this.baseService.baseUrl + '/tablet/consulta/';
      this.httpClient.post<any>(url, { 'dado': this.matricula, }).subscribe(
        (retorno: any) => {
          this.baseService.loading = false;
          const pessoas = retorno.pessoas;
          if (pessoas.length > 1) {
            this.mensagemErroMatricula = this.ERRO_MULTIPLAS_MATRICULAS;
          } else {
            const pessoaDict = pessoas[0];
            const pessoa = new Pessoa(pessoaDict.pk,
              pessoaDict.nome,
              pessoaDict.sobrenome,
              pessoaDict.matricula,
              pessoaDict.cpf,
              pessoaDict.email);
            this.baseService.pessoaSelecionada = pessoa;
            this.nav.navigateForward('/tela-escolha');
          }
        },
        (error: any) => {
          this.mensagemErroMatricula = this.ERRO_MATRICULA_INVALIDA;
          this.baseService.loading = false;
        }
      );
    } else {
      this.mensagemErroMatricula = this.ERRO_GERAL_MATRICULA;
    }
  }

  digitando() {
    this.mensagemErroMatricula = this.matricula.length === 0 ? this.ERRO_GERAL_MATRICULA : null;
  }

  async openModalMatricula() {
    const modal = await this.modalmatriculaController.create({
      component: ModalMatriculaPage,
      componentProps: {
      }
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.baseService.trocaSenha = true;
    this.baseService.headerTitle = 'Trocar Senha';
  }

  ionViewDidEnter() {
    this.nomeInput.nativeElement.focus();
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.trocaSenha = false;
    this.baseService.loading = true;
  }
}
