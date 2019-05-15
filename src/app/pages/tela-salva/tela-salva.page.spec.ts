import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaSalvaPage } from './tela-salva.page';

describe('TelaSalvaPage', () => {
  let component: TelaSalvaPage;
  let fixture: ComponentFixture<TelaSalvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelaSalvaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSalvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
