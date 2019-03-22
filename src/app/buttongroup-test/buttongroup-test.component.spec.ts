import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongroupTestComponent } from './buttongroup-test.component';

describe('ButtongroupTestComponent', () => {
  let component: ButtongroupTestComponent;
  let fixture: ComponentFixture<ButtongroupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtongroupTestComponent ]
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
