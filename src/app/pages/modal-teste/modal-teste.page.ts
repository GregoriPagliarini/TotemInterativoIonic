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
      const url = 'http://127.0.0.1:8000/tablet/consulta/';
      this.pessoa$ = this.httpClient.post<any>(url, { "dado": this.cpf, }).pipe(
        switchMap((retorno: any) => {
          let pessoas = retorno.pessoas;
          if (pessoas.length > 1) {
            console.log("teste");
          } else {
            let pessoaDict = pessoas[0];
            let pessoa = new Pessoa(pessoaDict.pk,
              pessoaDict.nome,
              pessoaDict.sobrenome,
              pessoaDict.matricula,
              pessoaDict.cpf)
            console.log(pessoa);
            return of(pessoa);
          }
        }),
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
