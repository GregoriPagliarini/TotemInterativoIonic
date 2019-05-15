import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaSucessoPage } from './tela-sucesso.page';

describe('TelaSucessoPage', () => {
  let component: TelaSucessoPage;
  let fixture: ComponentFixture<TelaSucessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelaSucessoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSucessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
