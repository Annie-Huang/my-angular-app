import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTestComponent } from './message-test.component';
import {MessageModule, MessageService} from '@ea/ea-ui';

describe('MessageTestComponent', () => {
  let component: MessageTestComponent;
  let fixture: ComponentFixture<MessageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTestComponent ],
      imports: [MessageModule],
      providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
