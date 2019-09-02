import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTestComponent } from './bar-chart-test.component';

describe('BarChartTestComponent', () => {
  let component: BarChartTestComponent;
  let fixture: ComponentFixture<BarChartTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
