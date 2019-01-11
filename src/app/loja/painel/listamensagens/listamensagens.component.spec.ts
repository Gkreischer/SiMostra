import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamensagensComponent } from './listamensagens.component';

describe('ListamensagensComponent', () => {
  let component: ListamensagensComponent;
  let fixture: ComponentFixture<ListamensagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamensagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
