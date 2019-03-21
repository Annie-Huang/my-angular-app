import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldOption} from '@ea/ea-ui';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.scss']
})
export class DropdownTestComponent implements OnInit {

  form: FormGroup;
  success = '';
  demoOptions: Array<FieldOption<String>> = [];

  get myOption(): AbstractControl {
    return this.form.get('myOption');
  }

  constructor(private fb: FormBuilder) {
    for (let i = 1; i <= 15; i++) {
      const option = new FieldOption({
        value: `option_${i}`,
        text: `Option ${i}`
      });
      this.demoOptions.push(option);
    }
  }

  ngOnInit() {
    this.createForm();
  }

  onChange($event) {
  }

  createForm() {
    this.form = this.fb.group({
      myOption: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.success = 'Yay! This form as been submitted!';
    } else {
      this.success = '';
    }
  }
}
