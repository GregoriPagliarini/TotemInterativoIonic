import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmacao2Page } from './confirmacao2.page';

describe('Confirmacao2Page', () => {
  let component: Confirmacao2Page;
  let fixture: ComponentFixture<Confirmacao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirmacao2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmacao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
