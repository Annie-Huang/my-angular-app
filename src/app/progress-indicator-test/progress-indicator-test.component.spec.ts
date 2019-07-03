import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicatorTestComponent } from './progress-indicator-test.component';

describe('ProgressIndicatorTestComponent', () => {
  let component: ProgressIndicatorTestComponent;
  let fixture: ComponentFixture<ProgressIndicatorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressIndicatorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndicatorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
