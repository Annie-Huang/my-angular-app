import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSwitcherTestComponent } from './address-switcher-test.component';

describe('AddressSwitcherTestComponent', () => {
  let component: AddressSwitcherTestComponent;
  let fixture: ComponentFixture<AddressSwitcherTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSwitcherTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSwitcherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
