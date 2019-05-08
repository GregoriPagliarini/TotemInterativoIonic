
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pessoa } from '../../shared/classe.matricula';
import { ModalTestePage } from '../modal-teste/modal-teste.page';
import { BaseService } from 'src/app/base.service';




@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.page.html',
  styleUrls: ['./troca-senha.page.scss'],

})
export class TrocaSenhaPage implements OnInit, OnDestroy {
  erroMatricula = false;
  matricula: string;
  pessoa$: Observable<Pessoa>;
  constructor(private nav: NavController,
    private modalmatriculaController: ModalController,
    private baseService: BaseService,
    public httpClient: HttpClient
  ) { }

  getPesquisaMatricula() {


    if (this.matricula) {
      const url = 'http://127.0.0.1:8000/tablet/consulta/';
      this.pessoa$ = this.httpClient.post<any>(url, { "dado": this.matricula, }).pipe(
        switchMap((retorno: any) => {
          let pessoas = retorno.pessoas;
          if (pessoas.length > 1) {
            console.log("teste");
          } else {
            let pessoaDict = pessoas[0];
            let pessoa = new Pessoa(pessoaDict.pk,
              pessoaDict.nome,
              pessoaDict.sobrenome,
              pessoaDict.matricula,
              pessoaDict.cpf)
            console.log(pessoa);
            return of(pessoa);
          }

          /* console.log(url);
           return of(new Pessoa(retorno.nome,
                                retorno.sobrenome,
                                retorno.matricula,
                                retorno.cpf));*/
        })
      );
    } else {
      this.erroMatricula = true;
    }
  }

  digitando() {
    this.erroMatricula = this.matricula.length == 0;
  }


  async openModalMatricula() {
    const modal = await this.modalmatriculaController.create({
      component: ModalTestePage,
      componentProps: {
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.baseService.headerTitle = 'Trocar Senha';
  }

  ngOnDestroy() {

  }

}
