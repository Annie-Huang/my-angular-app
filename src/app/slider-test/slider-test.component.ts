import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-test',
  templateUrl: './slider-test.component.html',
  styleUrls: ['./slider-test.component.scss']
})
export class SliderTestComponent implements OnInit {
  min = 1;
  max = 10;
  selectedValue = 2;

  constructor() {
  }

  ngOnInit() {
  }

  updatedValue(value: number) {
    this.selectedValue = value;
  }
}
