import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.scss']
})
export class TestcompComponent implements OnInit {

  @Input() flag = false;

  constructor() {
    // console.log('in constructor: flag=', this.flag);
  }

  ngOnInit() {
    // console.log('in ngOnInit: flag=', this.flag);
  }

}
