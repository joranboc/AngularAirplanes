import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneDetailComponent } from './plane-detail.component';

describe('PlaneDetailComponent', () => {
  let component: PlaneDetailComponent;
  let fixture: ComponentFixture<PlaneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
