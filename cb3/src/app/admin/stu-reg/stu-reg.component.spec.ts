import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegComponent } from './stu-reg.component';

describe('StuRegComponent', () => {
  let component: StuRegComponent;
  let fixture: ComponentFixture<StuRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
