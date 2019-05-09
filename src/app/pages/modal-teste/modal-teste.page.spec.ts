import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTestePage } from './modal-teste.page';

describe('ModalTestePage', () => {
  let component: ModalTestePage;
  let fixture: ComponentFixture<ModalTestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTestePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
