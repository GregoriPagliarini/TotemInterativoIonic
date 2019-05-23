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
    const url = this.baseService.baseUrl + '/tablet/cpfs/';
    this.httpClient.post<any>(url, { pk: this.baseService.pessoaSelecionada.pk }).subscribe(
      (retorno: any) => {
        this.cpfs = of(retorno.pessoas);
      },
      (error: any) => {
        this.nav.navigateForward('/home');
      }
    );
  }

  ionViewWillEnter() {
    this.baseService.headerTitle = 'Escolha o seu CPF';
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.loading = true;
  }

  clicouCPF(cpfExterno: CpfExterno) {
    if (cpfExterno.correto && cpfExterno.cpf === this.baseService.pessoaSelecionada.cpf) {
      this.nav.navigateForward('/tela-escolha2');
    } else {
      this.nav.navigateBack('/home');
    }
  }
}
