import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form4ChildComponent } from './form4-child.component';

describe('Form4ChildComponent', () => {
  let component: Form4ChildComponent;
  let fixture: ComponentFixture<Form4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
