import { Component, OnInit } from '@angular/core';
import {MessageService} from '@ea/ea-ui';

@Component({
  selector: 'app-message-test',
  templateUrl: './message-test.component.html',
  styleUrls: ['./message-test.component.scss']
})
export class MessageTestComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  showMessage(severity: string)  {
    this.messageService.add( {severity, detail: `this is a ${severity} message.`, position: 'message-custom-location' });
  }

  hideMessage()  {
    this.messageService.clear();
  }

}
