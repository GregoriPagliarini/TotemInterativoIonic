import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { TrocaSenhaPage } from './troca-senha.page';
import { ModalTestePage } from '../modal-teste/modal-teste.page';

const routes: Routes = [
  {
    path: '',
    component: TrocaSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  declarations: [TrocaSenhaPage, ModalTestePage],
  entryComponents: [ModalTestePage],
  exports: [TrocaSenhaPage]
})
export class TrocaSenhaPageModule {}
