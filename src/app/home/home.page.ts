
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavController, 
              private modalmatriculaController: ModalController, 
              private popoverController: PopoverController,
              private baseService: BaseService){
  }

  ngOnInit() {
    this.baseService.headerTitle = 'Posso te ajudar?';
  }
}
