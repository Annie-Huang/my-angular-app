import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form3-child',
  templateUrl: './form3-child.component.html',
  styleUrls: ['./form3-child.component.scss']
})
export class Form3ChildComponent implements OnInit {
  @Input() form3: FormGroup;
  @Input() form3ErrorVisible: boolean;
}
