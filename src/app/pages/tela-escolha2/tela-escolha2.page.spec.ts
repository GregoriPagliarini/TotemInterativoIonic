import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaEscolha2Page } from './tela-escolha2.page';

describe('TelaEscolha2Page', () => {
  let component: TelaEscolha2Page;
  let fixture: ComponentFixture<TelaEscolha2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelaEscolha2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEscolha2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
