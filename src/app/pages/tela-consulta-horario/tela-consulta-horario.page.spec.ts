import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConsultaHorarioPage } from './tela-consulta-horario.page';

describe('TelaConsultaHorarioPage', () => {
  let component: TelaConsultaHorarioPage;
  let fixture: ComponentFixture<TelaConsultaHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaConsultaHorarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConsultaHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
