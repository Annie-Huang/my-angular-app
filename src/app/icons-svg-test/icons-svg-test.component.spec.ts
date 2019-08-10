import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { IconsSvgTestComponent } from './icons-svg-test.component';

describe('IconsSvgTestComponent', () => {
  let component: IconsSvgTestComponent;
  let fixture: ComponentFixture<IconsSvgTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSvgTestComponent ],
      imports: [HttpClientModule, InlineSVGModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSvgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
