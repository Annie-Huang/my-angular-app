import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3ChildComponent } from './form3-child.component';

describe('Form3ChildComponent', () => {
  let component: Form3ChildComponent;
  let fixture: ComponentFixture<Form3ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form3ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
