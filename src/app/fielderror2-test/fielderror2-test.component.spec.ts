import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror2TestComponent } from './fielderror2-test.component';

describe('Fielderror2TestComponent', () => {
  let component: Fielderror2TestComponent;
  let fixture: ComponentFixture<Fielderror2TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror2TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
