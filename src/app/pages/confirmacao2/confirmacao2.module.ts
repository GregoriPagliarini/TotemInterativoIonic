import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Confirmacao2Page } from './confirmacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Confirmacao2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Confirmacao2Page]
})
export class Confirmacao2PageModule {}
