import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { SenhaTemporaria } from 'src/app/shared/classe.senha-temporaria';
import { of } from 'rxjs';

@Component({
  selector: 'app-tela-sucesso',
  templateUrl: './tela-sucesso.page.html',
  styleUrls: ['./tela-sucesso.page.scss'],
})
export class TelaSucessoPage implements OnInit {
  senha: SenhaTemporaria;


  constructor(private baseService: BaseService,
    private httpClient: HttpClient,
    private nav: NavController) { }



  ngOnInit() {
    this.baseService.loading = true;
    const url = this.baseService.baseUrl + '/tablet/senha_temporaria/';
    this.httpClient.post<any>(url, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
      (retorno: any) => {
        const senha = of(retorno.pessoas);
        console.log(senha);
      },
      (error: any) => {
        this.nav.navigateForward('/home');
      }
    );
  }

  ionViewWillEnter() {
    this.baseService.headerTitle = 'Senha temporária';
  }

  ionViewDidEnter() {
    this.baseService.showBackButton = false;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.loading = true;
  }

}
