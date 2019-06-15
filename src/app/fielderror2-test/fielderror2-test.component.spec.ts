import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror2TestComponent } from './fielderror2-test.component';
import {EuiFormsModule, TextfieldModule} from '@ea/ea-ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('Fielderror2TestComponent', () => {
  let component: Fielderror2TestComponent;
  let fixture: ComponentFixture<Fielderror2TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror2TestComponent ],
      imports: [EuiFormsModule, FormsModule, ReactiveFormsModule, TextfieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
