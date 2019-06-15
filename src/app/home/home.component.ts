import { Component, OnInit } from '@angular/core';
import { MessageService } from '@ea/ea-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shouldShowSpinner = true;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  showMessage(severity: string)  {
    this.messageService.add( {severity, detail: `this is a ${severity} message.`, position: 'message-custom-location' });
  }

}
