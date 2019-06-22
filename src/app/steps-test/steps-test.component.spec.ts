import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTestComponent } from './steps-test.component';

describe('StepsTestComponent', () => {
  let component: StepsTestComponent;
  let fixture: ComponentFixture<StepsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
