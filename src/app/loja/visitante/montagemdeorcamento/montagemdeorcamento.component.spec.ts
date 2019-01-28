import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontagemdeorcamentoComponent } from './montagemdeorcamento.component';

describe('MontagemdeorcamentoComponent', () => {
  let component: MontagemdeorcamentoComponent;
  let fixture: ComponentFixture<MontagemdeorcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontagemdeorcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontagemdeorcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
