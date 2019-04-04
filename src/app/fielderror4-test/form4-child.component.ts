import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form4-child',
  templateUrl: './form4-child.component.html',
  styleUrls: ['./form4-child.component.scss']
})
export class Form4ChildComponent implements OnInit {
  @Input() form4: ForÒmGroup;

}
