import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaTestComponent } from './textarea-test.component';
import {EuiFormsModule, TextareaModule} from '@ea/ea-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('TextareaTestComponent', () => {
  let component: TextareaTestComponent;
  let fixture: ComponentFixture<TextareaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaTestComponent ],
      imports: [EuiFormsModule, ReactiveFormsModule, TextareaModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
