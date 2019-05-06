import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {
  items: Array<{ id: string; text: string }> = [
    { id: 'Header 1', text: 'Body 1' },
    { id: 'Header 2', text: 'Body 2' },
    { id: 'Header 3', text: 'Body 3' },
    { id: 'Header 4', text: 'Body 4' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
