import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fielderror1TestComponent } from './fielderror1-test.component';

describe('Fielderror1TestComponent', () => {
  let component: Fielderror1TestComponent;
  let fixture: ComponentFixture<Fielderror1TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fielderror1TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fielderror1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
