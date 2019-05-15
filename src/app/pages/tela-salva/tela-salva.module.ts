import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TelaSalvaPage } from './tela-salva.page';

const routes: Routes = [
  {
    path: '',
    component: TelaSalvaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaSalvaPage]
})
export class TelaSalvaPageModule { }
