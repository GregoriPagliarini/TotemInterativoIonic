import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController,
    public baseService: BaseService) {
  }

  ionViewWillLeave() {
    this.baseService.home = false;
    this.baseService.footerOn = false;
    this.baseService.showBackButton = true;
    this.baseService.loading = true;
  }

  ionViewWillEnter() {
    this.baseService.footerOn = true;
    this.baseService.showBackButton = false;
    this.baseService.headerTitle = 'Posso te ajudar?';
  }

  ionViewDidEnter() {
    this.baseService.home = true;
    this.baseService.loading = false;
  }

  abreTrocaSenha() {
    this.nav.navigateForward('/troca-senha');
  }


}
