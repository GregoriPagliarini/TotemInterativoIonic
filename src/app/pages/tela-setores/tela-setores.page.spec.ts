import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSetoresPage } from './tela-setores.page';

describe('TelaSetoresPage', () => {
  let component: TelaSetoresPage;
  let fixture: ComponentFixture<TelaSetoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSetoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSetoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
