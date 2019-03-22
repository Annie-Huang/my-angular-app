import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonTestComponent } from './radiobutton-test.component';

describe('RadiobuttonTestComponent', () => {
  let component: RadiobuttonTestComponent;
  let fixture: ComponentFixture<RadiobuttonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobuttonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
