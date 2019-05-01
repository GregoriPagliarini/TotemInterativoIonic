import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-tela-escolha',
  templateUrl: './tela-escolha.page.html',
  styleUrls: ['./tela-escolha.page.scss'],
})
export class TelaEscolhaPage implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.headerTitle = 'Escolha o seu CPF';
  }

}
