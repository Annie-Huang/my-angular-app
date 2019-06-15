import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldLazyloadComponent } from './textfield-lazyload.component';
import {EuiFormsModule, TextfieldModule} from '@ea/ea-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('TextfieldLazyloadComponent', () => {
  let component: TextfieldLazyloadComponent;
  let fixture: ComponentFixture<TextfieldLazyloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldLazyloadComponent ],
      imports: [TextfieldModule, ReactiveFormsModule, EuiFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
