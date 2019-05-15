import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TelaSucessoPage } from './tela-sucesso.page';

const routes: Routes = [
  {
    path: '',
    component: TelaSucessoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaSucessoPage]
})
export class TelaSucessoPageModule { }
