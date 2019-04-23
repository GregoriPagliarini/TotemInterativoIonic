import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaConsultaSalvaPage } from './tela-consulta-salva.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConsultaSalvaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaConsultaSalvaPage]
})
export class TelaConsultaSalvaPageModule {}
