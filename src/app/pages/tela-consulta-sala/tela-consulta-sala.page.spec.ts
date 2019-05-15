import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaConsultaSalaPage } from './tela-consulta-sala.page';

describe('TelaConsultaSalaPage', () => {
  let component: TelaConsultaSalaPage;
  let fixture: ComponentFixture<TelaConsultaSalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelaConsultaSalaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConsultaSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
