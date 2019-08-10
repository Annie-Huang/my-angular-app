import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTooltipModule} from '@angular/material/tooltip';

import { TooltipTestComponent } from './tooltip-test.component';
import {TooltipModule} from '@ea/ea-ui';

describe('TooltipTestComponent', () => {
  let component: TooltipTestComponent;
  let fixture: ComponentFixture<TooltipTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipTestComponent ],
      imports: [TooltipModule, MatTooltipModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
