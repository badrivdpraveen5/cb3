import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacRegComponent } from './fac-reg.component';

describe('FacRegComponent', () => {
  let component: FacRegComponent;
  let fixture: ComponentFixture<FacRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
