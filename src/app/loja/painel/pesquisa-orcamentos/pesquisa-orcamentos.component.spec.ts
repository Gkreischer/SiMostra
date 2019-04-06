import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaOrcamentosComponent } from './pesquisa-orcamentos.component';

describe('PesquisaOrcamentosComponent', () => {
  let component: PesquisaOrcamentosComponent;
  let fixture: ComponentFixture<PesquisaOrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaOrcamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
