import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror3TestComponent } from './fielderror3-test.component';

describe('Fielderror3TestComponent', () => {
  let component: Fielderror3TestComponent;
  let fixture: ComponentFixture<Fielderror3TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror3TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror3TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
