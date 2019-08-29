import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabTestComponent } from './fab-test.component';

describe('FabTestComponent', () => {
  let component: FabTestComponent;
  let fixture: ComponentFixture<FabTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
