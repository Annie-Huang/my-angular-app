import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator-test',
  templateUrl: './progress-indicator-test.component.html',
  styleUrls: ['./progress-indicator-test.component.scss']
})
export class ProgressIndicatorTestComponent implements OnInit {

  currentStep = 3;
  numberOfSteps = 5;

  constructor() { }

  ngOnInit() {
  }
}
