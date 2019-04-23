import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConsultaHorariosPage } from './tela-consulta-horarios.page';

describe('TelaConsultaHorariosPage', () => {
  let component: TelaConsultaHorariosPage;
  let fixture: ComponentFixture<TelaConsultaHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaConsultaHorariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConsultaHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
