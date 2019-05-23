import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaEscolhaPage } from './tela-escolha.page';

describe('TelaEscolhaPage', () => {
  let component: TelaEscolhaPage;
  let fixture: ComponentFixture<TelaEscolhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelaEscolhaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEscolhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
