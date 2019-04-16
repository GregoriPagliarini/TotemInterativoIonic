import { ModalMatriculaPage } from './../modal-matricula/modal-matricula.page';
import { HomePage } from './../../home/home.page';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription, of } from 'rxjs';
import { switchMap, concat } from 'rxjs/operators';
import { Pessoa } from '../../shared/classe.matricula';


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
    private popoverController: PopoverController,
    public httpClient: HttpClient) {}

  getMatricula() {
    if (this.matricula) {
      this.erroMatricula = false;
      const url = 'https://httpbin.org/get?encontrou=true&nome=Eduardo&sobrenome=Balbinot&matricula='+this.matricula;
      this.pessoa$ = this.httpClient.get<any>(url).pipe(
        switchMap((retorno: any) => {
          console.log(url);
          return of(new Pessoa(retorno.args.nome, 
                              retorno.args.sobrenome, 
                              retorno.args.matricula));
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
    
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
