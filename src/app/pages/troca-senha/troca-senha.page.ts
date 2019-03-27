import { HomePage } from './../../home/home.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.page.html',
  styleUrls: ['./troca-senha.page.scss'],
})
export class TrocaSenhaPage implements OnInit {
  constructor(private nav: NavController, private modalController: ModalController, private popoverController: PopoverController){
    
  }

  
  ngOnInit() {
  }

}
