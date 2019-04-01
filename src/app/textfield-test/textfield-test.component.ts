import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-textfield-test',
  templateUrl: './textfield-test.component.html',
  styleUrls: ['./textfield-test.component.scss']
})
export class TextfieldTestComponent implements OnInit {

  form: FormGroup;
  success = '';

  get accountName(): AbstractControl {
    return this.form.get('accountName');
  }

  get postcode(): AbstractControl {
    return this.form.get('postcode');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onChange(value) {
    console.log('new value', value);
  }

  createForm() {
    this.form = this.fb.group({
      accountName: [null, [Validators.required]],
      postcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
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
