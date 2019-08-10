import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTestComponent } from './footer-test.component';
import {FooterModule} from '@ea/ea-ui';

describe('FooterTestComponent', () => {
  let component: FooterTestComponent;
  let fixture: ComponentFixture<FooterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTestComponent ],
      imports: [FooterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
