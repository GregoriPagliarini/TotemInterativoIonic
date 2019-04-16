import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaConsultaHorarioPage } from './tela-consulta-horario.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConsultaHorarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaConsultaHorarioPage]
})
export class TelaConsultaHorarioPageModule {}
