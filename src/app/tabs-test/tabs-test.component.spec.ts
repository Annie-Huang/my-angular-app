import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTestComponent } from './tabs-test.component';
import {ButtonGroupModule, TabsModule} from '@ea/ea-ui';
import {MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TabsTestComponent', () => {
  let component: TabsTestComponent;
  let fixture: ComponentFixture<TabsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTestComponent ],
      imports: [TabsModule, ButtonGroupModule, MatTabsModule, ReactiveFormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
