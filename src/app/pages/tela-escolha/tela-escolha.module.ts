import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaEscolhaPage } from './tela-escolha.page';

const routes: Routes = [
  {
    path: '',
    component: TelaEscolhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaEscolhaPage]
})
export class TelaEscolhaPageModule {}
