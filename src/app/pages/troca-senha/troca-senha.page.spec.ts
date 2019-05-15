import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrocaSenhaPage } from './troca-senha.page';

describe('TrocaSenhaPage', () => {
  let component: TrocaSenhaPage;
  let fixture: ComponentFixture<TrocaSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrocaSenhaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
