import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyTestComponent } from './typography-test.component';

describe('TypographyTestComponent', () => {
  let component: TypographyTestComponent;
  let fixture: ComponentFixture<TypographyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
