import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'troca-senha', loadChildren: './pages/troca-senha/troca-senha.module#TrocaSenhaPageModule' },
  { path: 'tela-escolha', loadChildren: './pages/tela-escolha/tela-escolha.module#TelaEscolhaPageModule' },
  { path: 'tela-escolha2', loadChildren: './pages/tela-escolha2/tela-escolha2.module#TelaEscolha2PageModule' },
  { path: 'tela-sucesso', loadChildren: './pages/tela-sucesso/tela-sucesso.module#TelaSucessoPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'tela-consulta-horarios', loadChildren: './pages/tela-consulta-horarios/tela-consulta-horarios.module#TelaConsultaHorariosPageModule' },
  { path: 'tela-consulta-sala', loadChildren: './pages/tela-consulta-sala/tela-consulta-sala.module#TelaConsultaSalaPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
