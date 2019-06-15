import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror4TestComponent } from './fielderror4-test.component';
import {EuiFormsModule, TextfieldModule} from '@ea/ea-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {Form4ChildComponent} from './form4-child.component';

describe('Fielderror4TestComponent', () => {
  let component: Fielderror4TestComponent;
  let fixture: ComponentFixture<Fielderror4TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror4TestComponent, Form4ChildComponent ],
      imports: [EuiFormsModule, ReactiveFormsModule, TextfieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror4TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
