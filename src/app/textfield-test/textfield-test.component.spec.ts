import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldTestComponent } from './textfield-test.component';

describe('TextfieldTestComponent', () => {
  let component: TextfieldTestComponent;
  let fixture: ComponentFixture<TextfieldTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldTestComponent ]
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
