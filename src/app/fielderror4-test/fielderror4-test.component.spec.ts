import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror4TestComponent } from './fielderror4-test.component';

describe('Fielderror4TestComponent', () => {
  let component: Fielderror4TestComponent;
  let fixture: ComponentFixture<Fielderror4TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror4TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror4TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
