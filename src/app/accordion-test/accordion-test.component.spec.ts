import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTestComponent } from './accordion-test.component';
import {AccordionModule} from '@ea/ea-ui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AccordionTestComponent', () => {
  let component: AccordionTestComponent;
  let fixture: ComponentFixture<AccordionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionTestComponent ],
      imports: [AccordionModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
