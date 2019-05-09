import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { CpfExterno } from 'src/app/shared/classe.cpf';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tela-escolha',
  templateUrl: './tela-escolha.page.html',
  styleUrls: ['./tela-escolha.page.scss'],
})
export class TelaEscolhaPage implements OnInit {

  cpfs: Observable<CpfExterno[]>;

  constructor(private baseService: BaseService,
    private httpClient: HttpClient,
    private nav: NavController) { }

  ngOnInit() {
    this.baseService.headerTitle = 'Escolha o seu CPF';
    const url = "http://127.0.0.1:8000/tablet/cpfs/";
    this.httpClient.post<any>(url, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
      (retorno: any) => {
        this.cpfs = of(retorno.pessoas);
      },
      (error: any) => {
        this.nav.navigateForward("/home");
      }
    );
  }

  clicouCPF(cpf: string) {
    console.log(cpf);
    this.nav.navigateForward("/home");
  }
}
