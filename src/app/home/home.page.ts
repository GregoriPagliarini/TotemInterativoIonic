
import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private nav: NavController, 
              private modalmatriculaController: ModalController, 
              private popoverController: PopoverController){
    
  }

  
  pushPage(){

    this.nav.navigateForward('/troca-senha/')
  
  }
  
  


}
