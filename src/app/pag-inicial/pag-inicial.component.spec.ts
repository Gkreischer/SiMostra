import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInicialComponent } from './pag-inicial.component';

describe('PagInicialComponent', () => {
  let component: PagInicialComponent;
  let fixture: ComponentFixture<PagInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
