import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCatalogoComponent } from './nav-catalogo.component';

describe('NavCatalogoComponent', () => {
  let component: NavCatalogoComponent;
  let fixture: ComponentFixture<NavCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
