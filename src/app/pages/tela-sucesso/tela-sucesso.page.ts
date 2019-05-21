import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-tela-sucesso',
  templateUrl: './tela-sucesso.page.html',
  styleUrls: ['./tela-sucesso.page.scss'],
})
export class TelaSucessoPage {

  constructor(private baseService: BaseService
  ) { }

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
