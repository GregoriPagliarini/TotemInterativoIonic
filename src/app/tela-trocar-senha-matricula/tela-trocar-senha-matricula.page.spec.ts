import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTrocarSenhaMatriculaPage } from './tela-trocar-senha-matricula.page';

describe('TelaTrocarSenhaMatriculaPage', () => {
  let component: TelaTrocarSenhaMatriculaPage;
  let fixture: ComponentFixture<TelaTrocarSenhaMatriculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaTrocarSenhaMatriculaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTrocarSenhaMatriculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
