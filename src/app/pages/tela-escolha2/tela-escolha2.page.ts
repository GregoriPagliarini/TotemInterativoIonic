import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-tela-escolha2',
  templateUrl: './tela-escolha2.page.html',
  styleUrls: ['./tela-escolha2.page.scss'],
})
export class TelaEscolha2Page implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.headerTitle = 'Escolha o seu nome';
  }

}
