import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldTestComponent } from './textfield-test.component';
import {EuiFormsModule, TextfieldModule} from '@ea/ea-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('TextfieldTestComponent', () => {
  let component: TextfieldTestComponent;
  let fixture: ComponentFixture<TextfieldTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldTestComponent ],
      imports: [TextfieldModule, ReactiveFormsModule, EuiFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
