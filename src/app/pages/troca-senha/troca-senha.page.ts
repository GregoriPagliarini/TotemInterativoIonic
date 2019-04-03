import { ModalMatriculaPage } from './../modal-matricula/modal-matricula.page';
import { HomePage } from './../../home/home.page';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Pessoa} from '/shared/classe.matricula';


@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.page.html',
  styleUrls: ['./troca-senha.page.scss'],

})
export class TrocaSenhaPage implements OnInit, OnDestroy {
  retornoObservable: Observable<Pessoa>;
  constructor(private nav: NavController, private modalmatriculaController: ModalController, private popoverController: PopoverController, 
    public httpClient: HttpClient) {
      
  }
  openDetails() {
    this.retornoObservable = this.httpClient.get('https://httpbin.org/get?encontrou=true&nome=Eduardo&sobrenome=Balbinot&matricula=5200192');
  }

  async openModalMatricula() {
    const modal = await this.modalmatriculaController.create({
      component: ModalMatriculaPage
    });
    modal.present();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    
  }

}
