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
              private modalmatriculaController: ModalController,
              private baseService: BaseService) {
  }

  ionViewWillLeave() {
    this.baseService.showBackButton = true;
    this.baseService.loading = true;
  }

  ionViewWillEnter() {
    this.baseService.showBackButton = false;
    this.baseService.headerTitle = 'Posso te ajudar?';
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }
}
