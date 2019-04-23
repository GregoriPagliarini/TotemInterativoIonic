import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConsultaSalvaPage } from './tela-consulta-salva.page';

describe('TelaConsultaSalvaPage', () => {
  let component: TelaConsultaSalvaPage;
  let fixture: ComponentFixture<TelaConsultaSalvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaConsultaSalvaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConsultaSalvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
