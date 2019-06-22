import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-test',
  templateUrl: './steps-test.component.html',
  styleUrls: ['./steps-test.component.scss']
})
export class StepsTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentStep = 3;
  numberOfSteps = 5;

}
