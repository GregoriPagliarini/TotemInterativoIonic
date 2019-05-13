import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-tela-sucesso',
  templateUrl: './tela-sucesso.page.html',
  styleUrls: ['./tela-sucesso.page.scss'],
})
export class TelaSucessoPage implements OnInit {

  constructor(private baseService: BaseService
  ) { }

  ngOnInit() {
    this.baseService.headerTitle = 'Senha temporaria';
  }

}
