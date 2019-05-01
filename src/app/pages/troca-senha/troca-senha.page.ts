
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
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
      this.erroMatricula = false;
      const url = 'https://httpbin.org/get?encontrou=true&nome=Eduardo&sobrenome=Balbinot&cpf=12345678900&matricula=' + this.matricula;
      this.pessoa$ = this.httpClient.get<any>(url).pipe(
        switchMap((retorno: any) => {
          console.log(url);
          return of(new Pessoa(retorno.args.nome,
                               retorno.args.sobrenome,
                               retorno.args.matricula,
                               retorno.args.cpf));
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
