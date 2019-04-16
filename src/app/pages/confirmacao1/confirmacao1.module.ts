import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Confirmacao1Page } from './confirmacao1.page';

const routes: Routes = [
  {
    path: '',
    component: Confirmacao1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Confirmacao1Page]
})
export class Confirmacao1PageModule {}
