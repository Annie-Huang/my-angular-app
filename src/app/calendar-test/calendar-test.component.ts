import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.scss']
})
export class CalendarTestComponent implements OnInit {
  selectedDate1: Date;
  selectedDate2: Date;

  calendar = {
    defaultDate: '2019-03-28',
    enabledDates: [
      '2019-03-23',
      '2019-03-24',
      '2019-03-25',
      '2019-03-26',
      '2019-03-27',
      '2019-03-28',
      '2019-03-29',
      '2019-03-30',
      '2019-03-31',
      '2019-04-01',
      '2019-04-02',
      '2019-04-03',
      '2019-04-04',
      '2019-04-05'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  onDateSelected1(event) {
    this.selectedDate1 = event;
  }

  onDateSelected2(event) {
    this.selectedDate2 = event;
  }
}
