import { PopoverPage } from './../pages/popover/popover.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, ModalController, PopoverController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePage } from './home.page';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  constructor(){


  }



}
