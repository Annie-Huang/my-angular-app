import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldLazyloadComponent } from './textfield-lazyload.component';

describe('TextfieldLazyloadComponent', () => {
  let component: TextfieldLazyloadComponent;
  let fixture: ComponentFixture<TextfieldLazyloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldLazyloadComponent ]
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
