import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongroupTestComponent } from './buttongroup-test.component';
import {ButtonGroupModule, EuiFormsModule} from '@ea/ea-ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/primeng';

describe('ButtongroupTestComponent', () => {
  let component: ButtongroupTestComponent;
  let fixture: ComponentFixture<ButtongroupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtongroupTestComponent ],
      imports: [ButtonGroupModule, EuiFormsModule, ReactiveFormsModule, SelectButtonModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtongroupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
