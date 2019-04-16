import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoPage } from './sucesso.page';

describe('SucessoPage', () => {
  let component: SucessoPage;
  let fixture: ComponentFixture<SucessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
