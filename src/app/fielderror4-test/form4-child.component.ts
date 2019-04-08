import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form4-child',
  templateUrl: './form4-child.component.html',
  styleUrls: ['./form4-child.component.scss']
})
export class Form4ChildComponent {
  @Input() form4: FormGroup;

}
