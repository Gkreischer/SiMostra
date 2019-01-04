import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemdepecasComponent } from './listagemdepecas.component';

describe('ListagemdepecasComponent', () => {
  let component: ListagemdepecasComponent;
  let fixture: ComponentFixture<ListagemdepecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemdepecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemdepecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
