import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { Observable, of } from 'rxjs';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NomeExterno } from 'src/app/shared/classe.nome';

@Component({
  selector: 'app-tela-escolha2',
  templateUrl: './tela-escolha2.page.html',
  styleUrls: ['./tela-escolha2.page.scss'],
})
export class TelaEscolha2Page implements OnInit {

  nomes: Observable<NomeExterno[]>;

  constructor(private baseService: BaseService,
    private httpClient: HttpClient,
    private nav: NavController) { }

  ngOnInit() {
    console.log(this.baseService.pessoaSelecionada.nome);
    this.baseService.headerTitle = 'Escolha o seu nome';
    const url = 'http://127.0.0.1:8000/tablet/nomes/';
    this.httpClient.post<any>(url, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
      (retorno: any) => {
        this.nomes = of(retorno.pessoas);
      },
      (error: any) => {
        this.nav.navigateForward('/home');
      }
    );
  }

  clicouNome(nomeExterno: NomeExterno) {
    // tslint:disable-next-line: forin
    if (nomeExterno.correto && nomeExterno.nome === this.baseService.pessoaSelecionada.nome) {
      this.nav.navigateForward('/tela-sucesso');
    } else {
      this.nav.navigateBack('/home');
    }

  }
}
