import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpecaComponent } from './cdpeca.component';

describe('CdpecaComponent', () => {
  let component: CdpecaComponent;
  let fixture: ComponentFixture<CdpecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdpecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdpecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
