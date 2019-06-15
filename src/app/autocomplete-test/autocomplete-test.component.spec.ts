import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTestComponent } from './autocomplete-test.component';
import {AutoCompleteModule} from '@ea/ea-ui';

describe('AutocompleteTestComponent', () => {
  let component: AutocompleteTestComponent;
  let fixture: ComponentFixture<AutocompleteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteTestComponent ],
      imports: [AutoCompleteModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
