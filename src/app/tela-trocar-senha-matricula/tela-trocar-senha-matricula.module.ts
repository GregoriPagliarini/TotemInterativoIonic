import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaTrocarSenhaMatriculaPage } from './tela-trocar-senha-matricula.page';

const routes: Routes = [
  {
    path: '',
    component: TelaTrocarSenhaMatriculaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaTrocarSenhaMatriculaPage]
})
export class TelaTrocarSenhaMatriculaPageModule {}
