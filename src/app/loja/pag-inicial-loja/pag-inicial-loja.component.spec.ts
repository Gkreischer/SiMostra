import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInicialLojaComponent } from './pag-inicial-loja.component';

describe('PagInicialLojaComponent', () => {
  let component: PagInicialLojaComponent;
  let fixture: ComponentFixture<PagInicialLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInicialLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicialLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
