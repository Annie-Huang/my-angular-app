import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror1TestComponent } from './fielderror1-test.component';
import {EuiFormsModule, TextfieldModule} from '@ea/ea-ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('Fielderror1TestComponent', () => {
  let component: Fielderror1TestComponent;
  let fixture: ComponentFixture<Fielderror1TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror1TestComponent ],
      imports: [EuiFormsModule, FormsModule, ReactiveFormsModule, TextfieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
