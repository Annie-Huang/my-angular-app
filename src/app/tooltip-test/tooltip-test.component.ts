import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip-test',
  templateUrl: './tooltip-test.component.html',
  styleUrls: ['./tooltip-test.component.scss']
})
export class TooltipTestComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  positionBelow = new FormControl(this.positionOptions[0]);
  positionAbove = new FormControl(this.positionOptions[1]);
  positionLeft = new FormControl(this.positionOptions[2]);
  positionRight = new FormControl(this.positionOptions[3]);

  constructor() { }

  ngOnInit() {
  }

}
