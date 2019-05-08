import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pessoa } from 'src/app/shared/classe.matricula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modal-teste',
  templateUrl: './modal-teste.page.html',
  styleUrls: ['./modal-teste.page.scss'],
})
export class ModalTestePage implements OnInit {
  erroCpf = false;
  pessoa$: Observable<Pessoa>;
  cpf: string;

  constructor(private nav: NavController,
    public httpClient: HttpClient) { }

  getMatricula() {
    if (this.cpf) {
      this.erroCpf = false;
      const url = 'https://httpbin.org/get?encontrou=true&nome=Eduardo&sobrenome=Balbinot&cpf='+ this.cpf +'&matricula=5200192';
      this.pessoa$ = this.httpClient.get<any>(url).pipe(
     
      );
    } else {
      this.erroCpf = true;
    }
  }

  digitando() {
    this.erroCpf = this.cpf.length == 0;
  }

  ngOnInit() {
  }

}
