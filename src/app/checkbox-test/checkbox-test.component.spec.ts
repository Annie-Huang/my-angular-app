import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTestComponent } from './checkbox-test.component';
import {CheckboxModule, EuiFormsModule} from '@ea/ea-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('CheckboxTestComponent', () => {
  let component: CheckboxTestComponent;
  let fixture: ComponentFixture<CheckboxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTestComponent ],
      imports: [EuiFormsModule, CheckboxModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
