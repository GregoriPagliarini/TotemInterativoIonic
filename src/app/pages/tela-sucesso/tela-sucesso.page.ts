import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { SenhaTemporaria } from 'src/app/shared/classe.senha-temporaria';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-tela-sucesso',
  templateUrl: './tela-sucesso.page.html',
  styleUrls: ['./tela-sucesso.page.scss'],
})
export class TelaSucessoPage implements OnInit {

  senhaTemporaria: Observable<SenhaTemporaria> = null;

  constructor(public baseService: BaseService,
    private httpClient: HttpClient,
    private nav: NavController) { }

  ngOnInit() {
    const urlEmail = this.baseService.baseUrl + '/tablet/reset/';
    this.httpClient.post<any>(urlEmail, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
      (retorno: any) => {
        const url = this.baseService.baseUrl + '/tablet/senha_temporaria/';
        this.httpClient.post<any>(url, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
          (retorno2: any) => {
            this.senhaTemporaria = of(new SenhaTemporaria(retorno2.senha_temporaria));
            this.baseService.loading = false;
          },
          (error: any) => {
            this.nav.navigateForward('/home');
          }
        );
      },
      (error: any) => {
        this.nav.navigateForward('/home');
      }
    );
  }

  ionViewWillEnter() {
    this.baseService.headerTitle = 'Sucesso';
  }

  ionViewDidEnter() {
    this.baseService.telaSucesso = true;
    this.baseService.showBackButton = false;
  }

  ionViewWillLeave() {
    this.baseService.telaSucesso = false;
    this.baseService.loading = true;
  }

}
